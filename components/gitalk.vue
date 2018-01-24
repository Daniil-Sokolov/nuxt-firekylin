<template>
  <lazy-component @show="handler">
    <div ref="container"></div>
  </lazy-component>
</template>

<script>
  import assign from 'object-assign'
  Object.assign = assign

  export default {
    props: {
      tags: Array
    },
    methods: {
      renderComment () {
        if (this._renderred) return
        if (!this.$isServer && this.$gitalkConfig) {
          const gitalk = new window.Gitalk(
            assign({}, this.$gitalkConfig)
          )
          gitalk.render(this.$refs.container)
          this._renderred = true
        }
      },
      render () {
        setTimeout(() => {
          this.renderComment()
        }, 1000)
      }
    }
  }
</script>
