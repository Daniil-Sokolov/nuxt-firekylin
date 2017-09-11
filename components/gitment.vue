<template>
  <div ref="container"></div>
</template>

<script>
  import Gitment from 'gitment'
  export default {
    mounted () {
      let path = this.$route.path

      if (path.slice(-1) !== '/') {
        path += '/'
      }

      if (this.$refs.container) {
        const gitment = new Gitment({
          ...this.$config.gitment,
          id: path.indexOf('/post') === 0 ? path.match(/\/[^/]+\/$/)[0] : path
        })
        gitment.render(this.$refs.container)
      }
    }
  }
</script>