<template>
  <div ref="container"></div>
</template>

<script>
  import assign from 'object-assign'
  Object.assign = assign
  export default {
    props: {
      tags: Array
    },
    mounted () {
      this.$nextTick(() => {
        this.renderComment()
      })
    },
    methods: {
      renderComment () {
        if (!this.$isServer && this.$gitalkConfig) {
          const conf = {
            id: location.path,
            title: document.title,
            labels: this.tags || ['comment']
          }
          const gitalk = new window.Gitalk(
            assign(conf, this.$gitalkConfig)
          )
          gitalk.render(this.$refs.container)
        }
      }
    }
  }
</script>
