<?php 

class Commaship {
  public static function can_manage_packages() {
    $u = kirby()->user();
    
    return $u !== null && in_array($u->role()->name(), kirby()->option('commaship/installer-roles', ['admin']));
  }

  private static function check_auth() {
    if(!static::can_manage_packages()) {
      throw new Exception("User not allowed to process this request", 1);
    }
  }

  private static function rrmdir($dir) {
    $it = new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS);
    foreach (new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST) as $thing) {
      $todo = ($thing->isDir() ? 'rmdir' : 'unlink');
      $todo($thing->getRealPath());
    }
    rmdir($dir);
  }

  static function list_packages() {
    static::check_auth();

    $repo = kirby()->option('commaship/registry', 'https://raw.githubusercontent.com/Commaship/packages/master/v1.json');

    $installable = json_decode(file_get_contents($repo), true);
    $installedIds = array_map(function($p) { return $p['id']; }, static::list_intalled_packages());
    return array_filter($installable, function($p) use ($installedIds) {
      return !in_array($p['id'], $installedIds);
    });
  }

  static function list_intalled_packages() {
    static::check_auth();

    $pluginsdir = kirby()->roots()->plugins();
    $plugins = [];

    foreach(glob("$pluginsdir/*/commaship.json") as $file) {
      $plugins[] = json_decode(file_get_contents($file), true);
    }

    return $plugins;
  }

  static function purge_cache() {
    $jscache = kirby()->roots()->media() . '/plugins/.index.js';
    $csscache = kirby()->roots()->media() . '/plugins/.index.css';

    if(file_exists($jscache)) {
      unlink($jscache);
    }
    if(file_exists($csscache)) {
      unlink($csscache);
    }
  }

  static function uninstall($id) {
    static::check_auth();

    $pluginsdir = kirby()->roots()->plugins();

    foreach(glob("$pluginsdir/*/commaship.json") as $file) {
      $plugin = json_decode(file_get_contents($file), true);

      if($id === $plugin['id']) {
        static::rrmdir(dirname($file));
        static::purge_cache();
            
        return true;
      }
    }

    return false;
  }

  static function search($id) {
    $packages = static::list_packages();
    foreach ($packages as $pkg) {
      if($pkg['id'] === $id) {
        return $pkg;
      }
    }

    return false;
  }

  static function install($id) {
    static::check_auth();
    
    $pkg = static::search($id);

    $tmp = __DIR__ . '/tmp/' . uniqid() . '.zip';
    $tmp_extracted = __DIR__ . '/tmp/' . uniqid();
    
    //create temp folder
    if(!file_exists(dirname($tmp))) mkdir(dirname($tmp));
    
    //download
    $zipres = fopen($pkg['id'], 'r');
    file_put_contents($tmp, $zipres);
    
    //extract zip contents
    $zip = new ZipArchive();
    $zip->open($tmp);
    $zip->extractTo($tmp_extracted);
    
    //destination folder
    $dest = kirby()->roots()->plugins() . '/commaship-' . str_replace('/', '-', $pkg['name']);

    //move folder (search for index.php) to dest
    $it = new RecursiveDirectoryIterator($tmp_extracted, RecursiveDirectoryIterator::SKIP_DOTS);
    foreach (new RecursiveIteratorIterator($it) as $fileinfo) {
      if(pathinfo($fileinfo, PATHINFO_BASENAME) == 'commaship.json') {
        rename(dirname($fileinfo->getRealPath()), $dest);
        break;
      }
    }
    
    //should I bother about dependencies? Where is composer?
    if($composerbin = kirby()->option('commaship/composer-command', false)) {
      //has the package dependencies?
      if(file_exists("$dest/composer.lock")) {
        //are they not installed?  
        if(!file_exists("$dest/vendor")) {
          //then install them
          set_time_limit(0);
          chdir($dest);
          putenv('COMPOSER_HOME=' . __DIR__ . '/tmp');
          exec("$composerbin install");
        }
      }
    }

    //cleanup
    unlink($tmp);
    static::rrmdir($tmp_extracted);
    static::purge_cache();
    
    return true;
  }
}

Kirby::plugin('commaship/commaship', [
  'routes' => [
    'api/commaship/is-manager' => [
      'pattern' => 'api/commaship/is-manager',
      'action' => function() {
        return ['manager' => Commaship::can_manage_packages()];
      },
    ],
    'api/commaship/install-list' => [
      'pattern' => 'api/commaship/install-list',
      'action' => function() {
        return Commaship::list_packages();
      },
    ],
    'api/commaship/install' => [
      'pattern' => 'api/commaship/install',
      'method' => 'POST',
      'action' => function() {
        $pkg = (kirby()->request()->data())['pkg-id'];
        return Commaship::install($pkg);
      },
    ],
    'api/commaship/uninstall-list' => [
      'pattern' => 'api/commaship/uninstall-list',
      'action' => function() {
        return Commaship::list_intalled_packages();
      },
    ],
    'api/commaship/uninstall' => [
      'pattern' => 'api/commaship/uninstall',
      'method' => 'POST',      
      'action' => function() {
        $pkg = (kirby()->request()->data())['pkg-id'];
        return Commaship::uninstall($pkg);
      },
    ],
  ],
]);
