const marked = require('marked')
const { Renderer } = marked
const hljs = require('highlight.js')

Renderer.prototype.link = function (href, title, text) {
  let relative = !/^(https?:)?\/\//.test(href)
  let out = `<a href="${href}"`

  if (relative === false) {
    out += ` target="blank"`
  }

  if (title) {
    out += ` title="${title}"`
  }

  out += `>${text}</a>`

  return out
}

// 临时措施  2017-09-10
// Vue SSR text escape 导致
// https://github.com/vuejs/vue/commit/172dbf9faf4cb71dff72c77fdfe80fa1932d1ba3
// 已修复 等待版本发布
const wrapHljsCode = (code, lang) => `<textarea v-show="false" class="pre-area"><code class="hljs lang-${lang}">${code}</code></textarea>`

Renderer.prototype.code = function (code, language) {
  language = language || 'javascript'
  const markup = hljs.highlight(language, code).value
  const result = wrapHljsCode(markup, language)
  return result
}

// 临时措施 2017-09-10
Renderer.prototype.codespan = function (code) {
  return `<textarea class="codespan" v-show="false">${code}</textarea>`
}

Renderer.prototype.image = function (href, title, text) {
  var out = '<img v-lazy="`' + href + '`" alt="' + text + '"'
  if (title) {
    out += ' title="' + title + '"'
  }
  out += this.options.xhtml ? '/>' : '>'
  return out
}

const renderer = new Renderer()
module.exports = function (source) {
  return marked(source, {
    renderer
  })
}
