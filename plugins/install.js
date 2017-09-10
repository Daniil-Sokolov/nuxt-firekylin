import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import Pagination from '../components/pagination.vue'
import Collection from '../components/collection.vue'
// eslint-disable-next-line
import config from 'json-loader!yaml-loader!../config.yaml'

const protocol = typeof location === 'undefined' ? 'http:' : window.location.protocol
const siteURL = protocol + '//' + config.hostname
config.site_url = siteURL

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
  attempt: 1,
  listenEvents: [ 'scroll' ]
})
Vue.component('pagination', Pagination)
Vue.component('collection', Collection)
Vue.prototype.$config = Object.freeze(config)
