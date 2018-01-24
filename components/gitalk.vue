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
      renderComment (Gitalk) {
        const id = location.pathname.replace(/\/$/, '')
        const gitalk = new Gitalk(
          assign({ id }, this.$gitalkConfig)
        )
        gitalk.render(this.$refs.container)
        this._done = true
      },

      handler () {
        if (this._done || this.$isServer || !this.$gitalkConfig) {
          return
        }

        import(/* webpackChunkName: "gitalk-bundle" */'gitalk').then(Gitalk => {
          this.$nextTick(() => {
            this.renderComment(Gitalk)
          })
        })
      }
    }
  }
</script>
