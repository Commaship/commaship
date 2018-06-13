<template>
  <div class="commaship-overlay" v-if="this.visible" @click="close">
    <div class="commaship-box" @click.stop>
      <div class="commaship-input">
        <input
          ref="input"
          type="text"
          default="Commaship - enter commands here"
          v-model="query"
          @input="search"
          @keydown.esc="close" 
          @keydown.enter="exec(selected)" 
          @keydown.down="selectNext" 
          @keydown.up="selectPrevious" 
          @keydown.tab.prevent="selectNext"
          @keydown.shift.tab.prevent="selectPrevious"
        >
      </div>
      <div class="commaship-results-box">
        <ul>
          <li
            v-for="(result, index) in results" 
            :key="result.id" 
            :data-selected="selected === index" 
            @click="exec(index)"
            ref="resultboxes"
            class="commaship-result"
          >
            <div v-if="result.matches" v-html="highlight(result)" class="commaship-result-label"></div>
            <div v-else class="commaship-result-label">{{ result.label }}</div>
            <div class="commaship-description" v-if="result.description">{{ result.description }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import Fuse from 'fuse.js'

let list = []

const options = {
  shouldSort: true,
  tokenize: true,
  matchAllTokens: true,
  findAllMatches: true,
  includeMatches: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,

  keys: [
    "label"
  ]
};

let fuse = null

window.commaship = {
  register(pkg, commands) {
    if(typeof pkg !== 'string' || !pkg.length) throw 'invalid commaship package name'
    if(!Array.isArray(commands) || !commands.length) throw 'invalid commaship commands definition'
    list = list.concat(commands.map((c) => ({
      ...c,
      id: pkg + '_' + c.id,
      description: `${c.description || ''} [${pkg}]`,
    })))
  }
}

function filterItems(root, items) {
  items = Array.from(items);

  return Promise.all(items.map((r) => {
    if(r.filter === undefined) return true;
    return r.filter(root);
  })).then((result) => items.filter((r, i) => result[i]));
}

export default {
  created() {
    window.addEventListener('keydown', this.handler)
  },
  destroyed() {
  },
  watch: {
    selected() {
      const box = this.$refs.resultboxes[this.selected];
      if(box)box.scrollIntoViewIfNeeded()
    },
  },
  methods: {
    handler(e) {
      if((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 80) {
        e.preventDefault()
        this.open()
      }
    },
    async open() {
      const items = await filterItems(this.$root, list)
      if(items.length === 0) {
        console.info('did not open commaship because no commands are available atm')
        return
      }

      this.query = ''
      this.visible = true
      this.fuse = new Fuse(items, options)
      this.results = items
      this.selected = 0
      setTimeout(() => this.$refs.input.focus(), 0)
    },
    close() {
      this.visible = false
    },
    async exec(index) {
      if(this.results[index] && this.results[index].action) {
        const result = await this.results[index].action(this.$root)
        if(!result) {
          this.close()
        } else if(Array.isArray(result)) {
          const items = await filterItems(this.$root, result)

          this.fuse = new Fuse(items, options)
          this.results = items
          this.selected = 0
          this.query = ''
        }
      }
    },
    selectNext() {
      this.selected = Math.min(this.results.length-1, this.selected + 1)
    },
    selectPrevious() {
      this.selected = Math.max(0, this.selected - 1)
    },
    search() {
      const q = this.query.trim()
      if(q.length) {
        const results = this.fuse.search(q)
        this.results = results.map(r => ({...r.item, matches: r.matches}))
      } else {
        this.results = this.fuse.list
      }
      this.selected = 0
    },
    highlight(result) {
      const text = []
      if(result.matches.length) {
        const matches = [].concat(result.matches[0].indices)
        let pair = matches.shift();
  
        for(let i = 0; i < result.label.length; i++) {
          if(pair && i == pair[0]) {
            text.push('<b>')
          }
          text.push(result.label.charAt(i))
          if(pair && i == pair[1]) {
            text.push('</b>')
            pair = matches.shift()
          }
        }

        return text.join('')
      } else {
        return result.label
      }
    },
  },
  data() {
    return {
      visible: false,
      query: '',
      results: list,
      selected: 0,
      fuse: fuse
    }
  }
}


</script>
<style lang="stylus" scoped>
  .commaship-overlay 
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background-color rgba(0,0,0,0.5)
    backdrop-filter: blur(2px)
    z-index 1000
  .commaship-box
    overflow hidden
    max-width 30rem
    margin 5rem auto
    box-shadow 0 0 5rem rgba(0,0,0,0.7)
    background-color #e2e2e2    
  .commaship-input
    background-color #efefef
    margin 0.3rem
    display flex
    input
      background none 
      flex-grow 1
      font inherit 
      padding .75rem
      border 0
  .commaship-results-box 
    max-height calc(100vh - 15rem)
    overflow-y auto
    position relative
  .commaship-result
    display flex
    flex-direction column
    padding 0.75rem 1.05rem
    cursor pointer
    &[data-selected]
      background-color #f1f1f1
    &:hover
      background-color #e8e8e8
    b
      color #000
  .commaship-description
    color #999999
    font-size 0.6em
    padding 0.3rem 0
</style>

