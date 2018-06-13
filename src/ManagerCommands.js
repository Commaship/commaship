async function install(root, pkg) {
  await root.$api.post('commaship/install', {
    'pkg-id': pkg.id
  })

  window.location.reload()
}

async function uninstall(root, pkg) {
  await root.$api.post('commaship/uninstall', {
    'pkg-id': pkg.id
  })

  window.location.reload()
}

async function openInstall(root) {
  return new Promise(async (resolve, reject) => {
    const results = await root.$api.get('commaship/install-list')
    
    resolve(results.map(r => {
      r.action = (root) => install(root, r)
      return r
    }))
  })
}

async function openRemove(root) {
  return new Promise(async (resolve, reject) => {
    const results = await root.$api.get('commaship/uninstall-list')
    
    resolve(results.map(r => {
      r.action = (root) => uninstall(root, r)
      return r
    }));
  })
}


if(window.commaship) {
  let shouldBeVisible = undefined

  function testVisibility(root) {
    if(shouldBeVisible === undefined) {
      shouldBeVisible = root.$api.get('commaship/is-manager').then((r) => r.manager)
      setTimeout(() => {
        shouldBeVisible = undefined
      }, 0);
    }

    return shouldBeVisible;
  }

  commaship.register('Package Manager', [
    {
      id: 'install',
      action: openInstall,
      label: 'Install Package',
      filter: testVisibility
    },
    {
      id: 'uninstall',
      action: openRemove,
      label: 'Remove Package',
      filter: testVisibility      
    }
  ])
} else {
  console.warn('Commaship not loaded');
}