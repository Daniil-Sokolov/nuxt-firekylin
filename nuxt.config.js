
const yaml = require('js-yaml')
const fs = require('fs')
const config = yaml.safeLoad(fs.readFileSync('./config.yaml', 'utf8'))
const pageSize = config.page_size

const getDynamicRoutes = (data, type) => {
  return data.reduce((acc, { count, pathname }) => {
    const base = `/${type}/${pathname}`
    let pages = Math.ceil(count / pageSize)
    acc.push(base)
    while (pages) {
      acc.push(`/${type}/${pathname}/${pages--}`)
    }
    return acc
  }, [])
}

module.exports = {
  generate: {
    dir: 'www',
    // avoid error with pre/code
    minify: false,
    routes (callback) {
      // render dynamic routes
      const cates = getDynamicRoutes(require('./data/cates.json'), 'category')
      const tags = getDynamicRoutes(require('./data/tags.json'), 'tag')
      callback(null, cates.concat(tags))
    }
  },
  loading: true,
  head: {
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      }
    ],
    link: [
      {
        rel: 'favicon',
        href: '/favicon.ico'
      }
    ]
  },
  css: [
    '~assets/css/all.css'
  ],
  plugins: ['~plugins/install.js'],
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/workbox'
  ],
  build: {
    extractCSS: true,
    publicPath: '/static/',
    build: {
      extend (config, { isClient }) {
        config.module.rule.push({
          test: /\.yaml$/,
          loader: 'raw-loader'
        })
      }
    }
  }
}
