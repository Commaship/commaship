<template>
  <div class="commaship-overlay" v-if="this.visible" @click="close" @keydown.esc="close">
    <div v-if="display" class="commaship-display" @click.stop>
      <pre ref="displayArea" @keydown.enter="displayOk()" tabindex="0">{{display}}</pre>
      <kirby-button @click="displayOk()" ref="displayOkButton">Ok</kirby-button>
    </div>
    <div v-else class="commaship-box" @click.stop>
      <div class="commaship-input" >
        <input 
          v-if="question"
          ref="questionInput"

          type="text"
          v-model="answer"
          @keydown.enter="answerQuestion()"
        >
        <input
          v-else

          ref="input"
          type="text"
          default="Commaship - enter commands here"
          v-model="query"
          @input="search"
          
          @keydown.enter="exec(selected)" 
          @keydown.down="selectNext" 
          @keydown.up="selectPrevious" 
          @keydown.tab.prevent="selectNext"
          @keydown.shift.tab.prevent="selectPrevious"
        >
      </div>
      <div v-if="question" class="commaship-question-text">
        {{question.text}}
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
import Prompt from './prompt.js'

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
  },
  ...Prompt
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
      this.query = ''
      this.visible = true
      this.selected = 0
      this.question = null
      this.display = null
      this.results = []

      setTimeout(() => this.$refs.input.focus(), 0)

      let result = await this.showItems(list)
      while(result) {
        result = await this.handleCommandResponse(result)
      }
      this.close()
    },

    close() {
      this.visible = false
    },

    async handleCommandResponse(result) {
      if(Array.isArray(result)) {
        return await this.showItems(result)
      } else if(typeof result === 'string') {
        return await this.showDisplay(result)
      } else if(result instanceof Prompt.Dialogue) {
        return await this.runDialogue(result)
      } else if(result instanceof Prompt.Question) {
        return await this.askQuestion(result)
      }
    },

    runDialogue(dialogue) {
      return new Promise(async(resolve, reject) => {
        const result = dialogue.run()

        let response = undefined
        while (true) {
          let {value, done} = await result.next(response)
          if(done) {
            resolve(await this.handleCommandResponse(value))
            break;
          } else {
            response = await this.handleCommandResponse(value)
          }
        }
      })
    },
    async showItems(items) {
      items = await filterItems(this.$root, items)

      this.fuse = new Fuse(items, options)
      this.results = items
      this.selected = 0
      this.query = ''

      return new Promise((resolve, reject) => {
        this.onAction = (result) => {
          delete this.onAction
          if(typeof result.action === 'function') {
            resolve(result.action(this.$root))
          } else {
            resolve(result.id)
          }
        }
      })
    },
    async exec(index) {
      if(this.results[index]) {
        this.onAction(this.results[index])
      }
    },
    askQuestion(question) {
      this.results = []
      this.question = question
      setTimeout(() => this.$refs.questionInput.focus(), 0)
      return new Promise((resolve, reject) => {
        this.question.onAnswer = (answer) => {
          resolve(answer)
        }
      })
    },
    answerQuestion() {
      this.question.onAnswer(this.answer)
      this.question = null
      this.answer = null
    },
    showDisplay(text) {
      this.display = text
      setTimeout(() => this.$refs.displayArea.focus(), 0)
      return new Promise((resolve, reject) => {
        this.onDisplayOk = resolve
      })
    },
    displayOk() {
      if(this.onDisplayOk) {
        this.display = null
        this.onDisplayOk()
        delete this.onDisplayOk
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
      fuse: fuse,
      question: null,
      answer: null,
      display: null
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
    
    &:hover
      box-shadow inset 0 0 2px 1px alpha(#4271ae, 20%)
      background rgba(66,113,174,.1)
    &[data-selected], &[data-selected]:hover
      box-shadow inset 0 0 2px 1px #4271ae
      background rgba(66,113,174,.25)
    b
      color #000
  .commaship-description
    color #999999
    font-size 0.6em
    padding 0.3rem 0

  .commaship-question-text
    margin 0.3rem
    font-height 1.2rem

  .commaship-display
    display flex
    width calc(100% - 10rem)
    min-width 30rem
    margin 5rem auto
    flex-direction column
    background #fefefe
  
    pre
      background #efefef
      display block
      padding 0.75rem 1rem
      max-height calc(100vh - 10rem)
      overflow auto
</style>

