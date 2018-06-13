import CommandPanel from './CommandPanel.vue'

export default {
  install(Vue, options) {
    const CommandPanelClass = Vue.extend(CommandPanel)

    Vue.mixin({
      mounted() {
        if(this === this.$root) {
          const cpInstance = new CommandPanelClass({
            propsData: {},
            parent: this,
          })
          cpInstance.$mount()
          this.$el.appendChild(cpInstance.$el)
        }
      },
      /* since this attaches to root, it never really needs to be destroyed... 
      destroyed() {
       
      },
      */
    })
  }
}
