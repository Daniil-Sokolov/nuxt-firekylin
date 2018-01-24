<template>
  <div ref="container"></div>
</template>

<script>
  export default {
    mounted () {
      if (!this.$isServer && this.$gitalkConfig) {
        const gitalk = new window.Gitalk(this.$gitalkConfig)
        gitalk.render(this.$refs.container)
      }
    }
  }
</script>
