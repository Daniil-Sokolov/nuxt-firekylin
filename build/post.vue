<template>
<div id="page-post">
  <article class="post detail">
    <div class="meta">
      <div class="date">{{post.create_time}}</div>
    </div>
    <h1 class="title">{{post.title}}</h1>
    <div class="entry-content">
      <blockquote v-if="post.translation">
        <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
        原文作者: <a :href="post.translation.social" target="_blank">{{post.translation.author}}</a><br/>
        原文地址: <a :href="post.translation.from">{{post.translation.from}}</a><br/>
        译文地址: <a :href="post_url">{{post_url}}</a><br/>
        本文由 <a :href="this.$config.site_url">{{this.$config.site_owner}}</a> 翻译，转载请保留此声明。<br/>
        著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。
        </p>
      </blockquote>
      __CONTENT__
    </div>
  </article>
  <nav class="pagination" v-if="post.prev.title || post.next.title">
    <nuxt-link v-if="post.prev.title" :to="`/post/${post.prev.pathname}`" :title="post.prev.title" class="prev">&laquo; {{ post.prev.title }}</nuxt-link>
    <nuxt-link v-if="post.next.title" :to="`/post/${post.next.pathname}`" :title="post.next.title" class="next">{{ post.next.title }} &raquo;</nuxt-link>
  </nav>
</div>
</template>

<script>
  const data = __DATA_
  export default {
    head () {
      return {
        title: data.title,
        meta: [
          { name: 'keywords', content: data.keywords || '' },
          { name: 'description', content: data.description }
        ]
      }
    },
    data () {
      return {
        post: data,
        post_url: this.$config.site_url + '/post/' + data.pathname
      }
    },
    mounted () {
      // 临时措施  2017-09-10
      // Vue SSR text escape 导致
      // https://github.com/vuejs/vue/commit/172dbf9faf4cb71dff72c77fdfe80fa1932d1ba3
      // 已修复 等待版本发布
      const preAreas = [...this.$el.querySelectorAll('.pre-area')]
      preAreas.forEach((elem) => {
        const pre = document.createElement('pre')
        pre.innerHTML = decodeURIComponent(elem.value)
        elem.parentNode.insertBefore(pre, elem)
        elem.parentNode.removeChild(elem)
      })
      
      const codespanAreas = [...this.$el.querySelectorAll('.codespan')]
      codespanAreas.forEach((elem) => {
        const span = document.createElement('code')
        span.textContent = elem.value
        elem.parentNode.insertBefore(span, elem)
        elem.parentNode.removeChild(elem)
      })
    }
  }
</script>
