webpackJsonp([40],{"9hgu":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("ougt"),s=a("K0hH"),i=a("VU/8")(r.a,s.a,!1,null,null,null);i.options.__file="pages/post/offline-storage-for-progressive-web-apps.vue",e.default=i.exports},K0hH:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"page-post"}},[a("article",{staticClass:"post detail"},[a("div",{staticClass:"meta"},[a("div",{staticClass:"date"},[t._v(t._s(t.post.create_time))])]),a("h1",{staticClass:"title"},[t._v(t._s(t.post.title))]),a("div",{staticClass:"entry-content"},[t.post.translation?a("blockquote",[a("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n        原文作者: "),a("a",{attrs:{href:t.post.translation.social,target:"_blank"}},[t._v(t._s(t.post.translation.author))]),a("br"),t._v("\n        原文地址: "),a("a",{attrs:{href:t.post.translation.from}},[t._v(t._s(t.post.translation.from))]),a("br"),t._v("\n        译文地址: "),a("a",{attrs:{href:t.post_url}},[t._v(t._s(t.post_url))]),a("br"),t._v("\n        本文由 "),a("a",{attrs:{href:this.$config.site_url}},[t._v(t._s(this.$config.site_owner))]),t._v(" 翻译，转载请保留此声明。"),a("br"),t._v("\n        著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。\n        ")])]):t._e(),t._m(0),a("p",[t._v("网络连接很可能"),a("strong",[t._v("不靠谱")]),t._v("（flakey），或者根本就连不上，这也是为什么在 "),a("a",{attrs:{href:"https://developers.google.com/web/progressive-web-apps/",target:"_blank"}},[t._v("渐进式 Web App")]),t._v("（译者注：Progressive Web App，以下简称 "),a("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[t._v("PWA")]),t._v("） 中，支持离线和性能可靠都很重要。本文总结了关于 PWA "),a("strong",[t._v("离线数据存储")]),t._v("的一些创意。想想那些提供"),a("em",[t._v("有意义的")]),t._v("离线体验所需要的 JSON 数据、图片以及其他的静态数据。")]),a("p",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01f76cbfea0e1832fc.jpg",expression:"`https://p.ssl.qhimg.com/t01f76cbfea0e1832fc.jpg`"}],attrs:{alt:""}})]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),a("h3",{attrs:{id:"-"}},[t._v("其他存储机制")]),t._m(9),a("h3",{attrs:{id:"-"}},[t._v("离线存储的现在与将来")]),a("p",[t._v("如果对离线缓存感兴趣，下面这些成果值得关注。我个人对 IndexedDB 原生的 Promise 支持非常感兴趣。")]),a("p",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://cfowt.img48.wal8.com/img48/554911_20160815130845/147131009919.jpeg",expression:"`http://cfowt.img48.wal8.com/img48/554911_20160815130845/147131009919.jpeg`"}],attrs:{alt:""}})]),t._m(10),a("h3",{attrs:{id:"-"}},[t._v("资源")]),t._m(11),a("p",[t._v("离线存储并没有那么神奇，对潜在 API 的理解有助于你最大程度地利用现有的资源。无论你想直接使用这些 API，还是使用对它们进行抽象库文件，花一些时间来熟悉你的选择。")]),a("p",[t._v("希望本文对你的 PWA 离线体验有所帮助。")])])]),t.post.prev.title||t.post.next.title?a("nav",{staticClass:"pagination"},[t.post.prev.title?a("nuxt-link",{staticClass:"prev",attrs:{to:"/post/"+t.post.prev.pathname,title:t.post.prev.title}},[t._v("« "+t._s(t.post.prev.title))]):t._e(),t.post.next.title?a("nuxt-link",{staticClass:"next",attrs:{to:"/post/"+t.post.next.pathname,title:t.post.next.title}},[t._v(t._s(t.post.next.title)+" »")]):t._e()],1):t._e(),a("gitalk",{attrs:{tags:t.tags}})],1)};r._withStripped=!0;var s={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("2016 很可能成为"),e("strong",[this._v("网络弹性")]),this._v("（network resilience）元年。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("离线存储数据的建议：")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("对 "),a("strong",[t._v("URL寻址资源")]),t._v("(URL addressable resources)，使用 "),a("a",{attrs:{href:"https://davidwalsh.name/cache",target:"_blank"}},[a("strong",[t._v("Cache API")])]),t._v("（这是 "),a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/primers/service-worker/",target:"_blank"}},[t._v("Service Worker")]),t._v(" 的一部分）。对其他数据，使用 "),a("strong",[t._v("IndexedDB")]),t._v("（给它包装上 "),a("a",{attrs:{href:"http://www.html5rocks.com/en/tutorials/es6/promises/",target:"_blank"}},[t._v("Promises")]),t._v("）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("常见问题解答：")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("p",[t._v("IDB 和 Cache API 两者的 API 都是异步的（IDB 基于事件，Cache API 基于 Promise）。它们都可以在 "),a("a",{attrs:{href:"https://nolanlawson.github.io/html5workertest/",target:"_blank"}},[t._v("Web Worker、Window 以及 Service Worker")]),t._v(" 三种环境下工作。")])]),a("li",[a("p",[t._v("IDB "),a("a",{attrs:{href:"http://caniuse.com/#feat=indexeddb",target:"_blank"}},[t._v("到处")]),t._v("都支持（译者注：原文如此，作者的意思请自行揣摩）。 Service Workers  和 Cache API 只在 Chrome、Firefox、Opera 中"),a("a",{attrs:{href:"https://jakearchibald.github.io/isserviceworkerready/",target:"_blank"}},[t._v("支持")]),t._v("， Edge 中尚在开发。")])]),a("li",[a("p",[t._v("IDB 不支持 Promise，但有一些"),a("em",[t._v("强大的")]),t._v("库提供了 Promise 包装。"),a("em",[t._v("后面会给出建议。")]),t._v("这些库会尽可能抹平 API 之间的强制复杂性（事务处理，schema 版本控制）。")])]),a("li",[a("p",[t._v("原生的 IDB Promise 以及 "),a("a",{attrs:{href:"https://github.com/WICG/indexed-db-observers",target:"_blank"}},[t._v("observer")]),t._v(" 已得到"),a("a",{attrs:{href:"https://github.com/inexorabletash/indexeddb-promises",target:"_blank"}},[t._v("提议")]),t._v("。")])]),a("li",[a("p",[t._v("有多大的存储量？Chrome 和 Opera 中，是按"),a("strong",[t._v("域")]),t._v("计算存储的（而不是按 API 计算）。在到达"),a("a",{attrs:{href:"http://www.html5rocks.com/en/tutorials/offline/quota-research/",target:"_blank"}},[t._v("储量限制")]),t._v("之前，两种存储机制都会一直进行存储。通过 "),a("a",{attrs:{href:"https://www.w3.org/TR/quota-api/",target:"_blank"}},[t._v("Quota Management API")]),t._v(" 可以检查用量（译者注：这个 API 还在提案阶段）。Firefox 则没有对存储量做出限制，只是在 50 MB 之后会弹出提醒。移动版 Safari 最多可以存 50 MB；桌面版 Safari没有限制（满5 MB 之后有提醒）；IE 10+ 最多能存 250 MB，超过 10 MB 之后弹出提醒。以上数据来源于 PouchDB 对 IDB 存储行为的"),a("a",{attrs:{href:"https://pouchdb.com/faq.html#data_limits",target:"_blank"}},[t._v("跟踪")]),t._v("。朝着未来的方向看，如果应用需要更多持久化存储，请看正在进行中的 "),a("a",{attrs:{href:"https://storage.spec.whatwg.org/",target:"_blank"}},[t._v("Durable Storage")]),t._v("。")])]),a("li",[a("p",[t._v("Safari 在最新的 Tech Previews 中"),a("a",{attrs:{href:"https://gist.github.com/nolanlawson/08eb857c6b17a30c1b26",target:"_blank"}},[t._v("修复了许多长期存在的 IDB bug")]),t._v("。即便如此，Safari 10 的 IDB 并未完全通过 PouchDB 的测试套件，已经有人碰到了稳定性问题。在更多研究完成之前，可能会遇到各种不同的情况。请"),a("em",[t._v("务必")]),t._v("测试并提交 bug，让 webkit 的同学和相关支持库的作者们看看。")])]),a("li",[a("p",[t._v("URL寻址资源通常是指可以那些通过 URL 访问的静态资源。对 PWA 而言，你可以通过 Cache API 缓存那些组成你的应用 shell 的静态文件（JS/CSS/HTML），并通过 IndexedDB 向离线页面填充数据。对此没有硬性规定，PWA 仅靠 Cache API 就能玩得转。")])]),a("li",[a("p",[a("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/iterate/manage-data/local-storage",target:"_blank"}},[t._v("Chrome")]),t._v(" (Application tab)、Opera、"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector",target:"_blank"}},[t._v("Firefox")]),t._v(" (Storage Inspector)、Safari (Storage tab) 都已经支持 IndexedDB 调试。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("值得一看的 IndexedDB 库")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://mozilla.github.io/localForage/",target:"_blank"}},[t._v("localForage")]),t._v("： 约 8 KB，Promise，对传统浏览器支持良好")])]),a("li",[a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/idb-keyval",target:"_blank"}},[t._v("idb-keyval")]),t._v("：小于 500 字节，Promise，提供 key-value 支持")])]),a("li",[a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/idb",target:"_blank"}},[t._v("idb")]),t._v("：约 1.7 KB，Promise, 可迭代、索引")])]),a("li",[a("p",[a("a",{attrs:{href:"http://dexie.org/",target:"_blank"}},[t._v("Dexie")]),t._v("：约 16 KB, Promises，复杂查询、辅助索引")])]),a("li",[a("p",[a("a",{attrs:{href:"https://pouchdb.com/",target:"_blank"}},[t._v("PouchDB")]),t._v("：约 45 KB ，支持"),a("a",{attrs:{href:"https://pouchdb.com/2016/06/06/introducing-pouchdb-custom-builds.html",target:"_blank"}},[t._v("定制版本")]),t._v("，同步的（？）")])]),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/google/lovefield",target:"_blank"}},[t._v("Lovefield")]),t._v("：相关的内容")])]),a("li",[a("p",[a("a",{attrs:{href:"http://lokijs.org/#/",target:"_blank"}},[t._v("LokiJS")]),t._v("：内存中的")])]),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/yathit/ydn-db",target:"_blank"}},[t._v("ydn-db")]),t._v("：类似 dexie，可以使用 WebSQL")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("值得一看的 Service Worker 库")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://github.com/GoogleChrome/sw-toolbox",target:"_blank"}},[this._v("sw-toolbox")]),this._v("：动态或运行时请求的离线缓存")])]),e("li",[e("p",[e("a",{attrs:{href:"https://github.com/GoogleChrome/sw-precache",target:"_blank"}},[this._v("sw-precache")]),this._v("：静态资源或应用 shell 的离线预缓存")])]),e("li",[e("p",[this._v("Webpack 用户可以直接使用上面的，或者可以看看 "),e("a",{attrs:{href:"https://github.com/NekR/offline-plugin",target:"_blank"}},[this._v("offline-plugin")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("p",[a("strong",[t._v("Web Storage")]),t._v(" (e.g LocalStorage) 是同步的，不支持 Web Worker，且有大小限制（只能存储字符串）。尽管之前异步 LocalStorage 的"),a("a",{attrs:{href:"https://github.com/slightlyoff/async-local-storage",target:"_blank"}},[t._v("想法")]),t._v("已有人提出来，但目前的焦点还是 "),a("a",{attrs:{href:"https://w3c.github.io/IndexedDB/",target:"_blank"}},[t._v("IndexedDB 2.0")]),t._v("。我个人就愿意使用 IDB 加上一个工具库。")])]),a("li",[a("p",[a("strong",[t._v("Cookies")]),t._v(" 自有其用途，但却是同步的，不支持 Web Worker，还有大小限制。在之前的项目中我使用了 "),a("a",{attrs:{href:"https://github.com/js-cookie/js-cookie",target:"_blank"}},[t._v("js-cookie")]),t._v("（gzip 后约 800 字节） 处理 cookie。目前已经有人勾勒出 "),a("a",{attrs:{href:"https://github.com/WICG/async-cookies-api",target:"_blank"}},[t._v("Async Cookies API")]),t._v(" 的支持了，有一个可用的 polyfill。")])]),a("li",[a("p",[a("strong",[t._v("WebSQL")]),t._v(" 是异步的（基于回调函数），但它同样不支持 Web Worker。Firefox 和 Edge 也不支持它。如果某一天它完全消失，我不会觉得惊讶的。")])]),a("li",[a("p",[a("strong",[t._v("File System API")]),t._v(" 也是异步的（基于回调函数），在 Web Worker 和 window 中可以工作（虽然使用的是同步 API）。不幸的是，除 Chrome 之外它并无更多兴趣，而且是运行在沙盒中的（这意味着我们无法获取原生的文件访问权）。")])]),a("li",[a("p",[a("strong",[t._v("File API")]),t._v(" 正在由 "),a("a",{attrs:{href:"https://wicg.github.io/entries-api/",target:"_blank"}},[t._v("File and Directory Entries API")]),t._v(" 和 "),a("a",{attrs:{href:"https://w3c.github.io/FileAPI/",target:"_blank"}},[t._v("File API")]),t._v(" 规范完善。Github 上有一个 "),a("a",{attrs:{href:"https://github.com/mailru/FileAPI",target:"_blank"}},[t._v("File API 库")]),t._v("；关于保存文件，作为权宜之计，我一直在使用 "),a("a",{attrs:{href:"https://github.com/eligrey/FileSaver.js",target:"_blank"}},[t._v("FileSaver.js")]),t._v("。"),a("a",{attrs:{href:"https://github.com/WICG/writable-files",target:"_blank"}},[t._v("可写文件")]),t._v("的提案最终可能会为我们提供本地文件无缝交互的标准解决方案。")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://storage.spec.whatwg.org/",target:"_blank"}},[t._v("Durable Storage")]),t._v(": 将存储与浏览器的清除策略隔开")])]),a("li",[a("p",[a("a",{attrs:{href:"https://w3c.github.io/IndexedDB/",target:"_blank"}},[t._v("Indexed Database API 2.0")]),t._v(": 先进的 key-value 数据管理")])]),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/inexorabletash/indexeddb-promises",target:"_blank"}},[t._v("Promisified IndexedDB")]),t._v(": 原生支持 Promise 的 IndexedDB 版本")])]),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/WICG/indexed-db-observers",target:"_blank"}},[t._v("IndexedDB Observers")]),t._v(": 原生的 IndexedDB observer 支持")])]),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/bsittler/async-cookies-api",target:"_blank"}},[t._v("Async Cookies API")]),t._v(": 异步的 cookie API")])]),a("li",[a("p",[a("a",{attrs:{href:"https://www.w3.org/TR/quota-api/",target:"_blank"}},[t._v("Quota Management API")]),t._v(": 检查应用、域的存储占用量")])]),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/WICG/writable-files",target:"_blank"}},[t._v("writable-files")]),t._v(": 允许网站与本地文件之间进一步的无缝交互")])]),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/drufball/directory-download",target:"_blank"}},[t._v("Directory downloads")]),t._v(": 支持直接下载文件夹（非 .zip 文件）")])]),a("li",[a("p",[a("a",{attrs:{href:"https://wicg.github.io/entries-api/",target:"_blank"}},[t._v("File and Directory Entries API")]),t._v(": 支持文件和目录的拖拽上传")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[e("a",{attrs:{href:"http://nolanlawson.github.io/database-comparison/",target:"_blank"}},[this._v("Browser Database Comparison")])])]),e("li",[e("p",[e("a",{attrs:{href:"https://docs.google.com/presentation/d/11CJnf77N45qPFAhASwnfRNeEMJfR-E_x05v1Z6Rh5HA/edit",target:"_blank"}},[this._v("State of offline storage APIs")])])]),e("li",[e("p",[e("a",{attrs:{href:"https://nolanlawson.com/2015/09/29/indexeddb-websql-localstorage-what-blocks-the-dom/",target:"_blank"}},[this._v("IndexedDB, WebSQL, LocalStorage — what blocks the DOM?")])])]),e("li",[e("p",[e("a",{attrs:{href:"https://nolanlawson.com/2016/02/08/how-to-think-about-databases/",target:"_blank"}},[this._v("How to think about databases (Pokedex research)")])])]),e("li",[e("p",[e("a",{attrs:{href:"https://nolanlawson.github.io/html5workertest/",target:"_blank"}},[this._v("Which APIs are supported in Web Workers and Service Workers?")])])])])}]};e.a=s},ougt:function(t,e,a){"use strict";var r={title:"[译] 渐进式 Web App 的离线存储",description:"渐进式 Web App 的离线存储",keywords:"翻译,渐进式 Web App",pathname:"offline-storage-for-progressive-web-apps",translation:{author:"Addy Osmani",social:"https://medium.com/@addyosmani/",from:"https://medium.com/@addyosmani/offline-storage-for-progressive-web-apps-70d52695513c"},create_time:"2016-08-18",prev:{title:"[译] Fetch 请求的本地缓存",pathname:"cache-fetched-ajax-requests"},next:{title:"[译] WebAssembly  初尝",pathname:"build-your-first-thing-with-web-assembly"}};e.a={head:function(){return{title:r.title,meta:[{name:"keywords",content:r.keywords||""},{name:"description",content:r.description}]}},data:function(){return{post:r,post_url:this.$config.site_url+"/post/"+r.pathname,tags:r.tags}},mounted:function(){this.$fixCode()}}}});