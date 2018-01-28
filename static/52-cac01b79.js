webpackJsonp([52],{Tnaf:function(s,a,t){"use strict";var e={title:"[译] Bluebird 高性能揭秘",description:"Bluebird 高性能揭秘",keywords:"翻译,Promise",pathname:"javascript-performance-fundamentals-make-bluebird-fast",translation:{author:"Petka Antonov",social:"https://www.reaktor.com/blog/author/petka-antonov/",from:"https://reaktor.com/blog/javascript-performance-fundamentals-make-bluebird-fast/"},create_time:"2017-01-12",prev:{title:"关于时序攻击",pathname:"timing-atack"},next:{title:"[译] React 中的 AJAX 请求：获取数据的方法与时机",pathname:"ajax-requests-in-react"}};a.a={head:function(){return{title:e.title,meta:[{name:"keywords",content:e.keywords||""},{name:"description",content:e.description}]}},data:function(){return{post:e,post_url:this.$config.site_url+"/post/"+e.pathname,tags:e.tags}},mounted:function(){this.$fixCode()}}},owUk:function(s,a,t){"use strict";var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{attrs:{id:"page-post"}},[t("article",{staticClass:"post detail"},[t("div",{staticClass:"meta"},[t("div",{staticClass:"date"},[s._v(s._s(s.post.create_time))])]),t("h1",{staticClass:"title"},[s._v(s._s(s.post.title))]),t("div",{staticClass:"entry-content"},[s.post.translation?t("blockquote",[t("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s._v("\n        原文作者: "),t("a",{attrs:{href:s.post.translation.social,target:"_blank"}},[s._v(s._s(s.post.translation.author))]),t("br"),s._v("\n        原文地址: "),t("a",{attrs:{href:s.post.translation.from}},[s._v(s._s(s.post.translation.from))]),t("br"),s._v("\n        译文地址: "),t("a",{attrs:{href:s.post_url}},[s._v(s._s(s.post_url))]),t("br"),s._v("\n        本文由 "),t("a",{attrs:{href:this.$config.site_url}},[s._v(s._s(this.$config.site_owner))]),s._v(" 翻译，转载请保留此声明。"),t("br"),s._v("\n        著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。\n        ")])]):s._e(),t("p",[s._v("Bluebird 是一个广泛使用的 Promise 库，最早在 2013 年得到人们的关注。相比其他同等水平的 Promise 库，Bluebird 快了一百来倍。Bluebird 自始至终遵循着 JavaScript 优化的一些基本原则，所以才有这么好的性能。本文将会介绍其中最有价值的三个方面。")]),t("h3",{attrs:{id:"1-"}},[s._v("1.  函数中的对象分配最小化")]),t("p",[s._v("对象分配（object allocation），尤其是函数中的对象分配，对性能的影响是很大的，因为其实现需要用到大量内部数据。JavaScript 实现了垃圾自动回收，占用内存的不单是分配的对象；垃圾回收器也有份，它在不断寻找那些不再使用的对象，以释放内存。JavaScript 占用内存越多，垃圾回收需要的 CPU 资源也就越多，这样一来，运行代码的 CPU 资源就会减少。")]),t("p",[s._v("函数是 JavaScript 中的一等对象，和其他对象有着相同的特性。假设在函数 fnA 中，声明了另一个函数 fnB，那么每次调用外层的 fnA 时，都会有一个全新的 fnB 函数对象被创建，哪怕两次代码完全一样。请看下面的例子：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-js">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3Etrim%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Estring%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EtrimStart%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Estring%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20string.replace(%3Cspan%20class%3D%22hljs-regexp%22%3E%2F%5E%5Cs%2B%2Fg%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%22%22%3C%2Fspan%3E)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EtrimEnd%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Estring%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20string.replace(%3Cspan%20class%3D%22hljs-regexp%22%3E%2F%5Cs%2B%24%2Fg%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%22%22%3C%2Fspan%3E)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20trimEnd(trimStart(string))%0A%7D</code>')]),t("p",[s._v("每次调用 trim 函数的时候，两个并非必需的函数对象（trimStart 和 trimEnd 函数）就会被创建出来。说这两个函数对象并非必需，是因为它们作为独特对象的特点并未起到丝毫作用，如属性赋值、变量隐藏等，所用到的仅仅是它们的内部功能而已。")]),t("p",[s._v("要优化这个例子并不麻烦，将那两个函数移到 trim 函数之外就好。它们同处于相同模块，只会加载一次，所以这两个函数各自只会创建一个函数对象：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-js">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EtrimStart%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Estring%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20string.replace(%3Cspan%20class%3D%22hljs-regexp%22%3E%2F%5E%5Cs%2B%2Fg%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%22%22%3C%2Fspan%3E)%3B%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EtrimEnd%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Estring%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20string.replace(%3Cspan%20class%3D%22hljs-regexp%22%3E%2F%5Cs%2B%24%2Fg%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E%22%22%3C%2Fspan%3E)%3B%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3Etrim%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Estring%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20trimEnd(trimStart(string))%0A%7D</code>')]),t("p",[s._v("但更为常见的情况是，函数对象似乎是一种必要之恶，优化并不像上面这般简单。比如说，传递回调函数时，总是需要考虑特定上下文。这通常可以用闭包实现，简单又直观，效率却极低。举个小例子，使用 Node 读取 JSON 文件：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-js\">%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20fs%20%3D%20%3Cspan%20class%3D%22hljs-built_in%22%3Erequire%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-string%22%3E'fs'%3C%2Fspan%3E)%3B%0A%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EreadFileAsJson%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3EfileName%2C%20callback%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20fs.readFile(fileName%2C%20%3Cspan%20class%3D%22hljs-string%22%3E'utf8'%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Eerror%2C%20result%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E6%AF%8F%E6%AC%A1%E8%B0%83%E7%94%A8%20readFileAsJson%20%E5%87%BD%E6%95%B0%E6%97%B6%EF%BC%8C%E4%BC%9A%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84%E5%87%BD%E6%95%B0%E5%AF%B9%E8%B1%A1%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%9B%A0%E4%B8%BA%E6%98%AF%E9%97%AD%E5%8C%85%EF%BC%8C%E4%B9%9F%E4%BC%9A%E5%88%86%E9%85%8D%E4%B8%80%E4%B8%AA%E5%86%85%E9%83%A8%E4%B8%8A%E4%B8%8B%E6%96%87%E5%AF%B9%E8%B1%A1%E6%9D%A5%E4%BF%9D%E5%AD%98%E7%8A%B6%E6%80%81%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%20(error)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20callback(error)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E9%9C%80%E8%A6%81%20try-catch%20%E6%9D%A5%E5%A4%84%E7%90%86%E5%8F%AF%E8%83%BD%E5%AD%98%E5%9C%A8%E7%9A%84%E9%9D%9E%E6%B3%95%20JSON%20%E9%80%A0%E6%88%90%E7%9A%84%E8%AF%AD%E6%B3%95%E9%94%99%E8%AF%AF%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Etry%3C%2Fspan%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20json%20%3D%20%3Cspan%20class%3D%22hljs-built_in%22%3EJSON%3C%2Fspan%3E.parse(result)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20callback(%3Cspan%20class%3D%22hljs-literal%22%3Enull%3C%2Fspan%3E%2C%20json)%3B%0A%20%20%20%20%20%20%20%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ecatch%3C%2Fspan%3E%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20callback(e)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%0A%7D</code>")]),t("p",[s._v("在上面的例子中，传给 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("fs.readFile")]),s._v(" 的匿名回调，是不能从 readFileAsJson 函数中提取出来的，因为该匿名函数能够访问其外部的 callback 变量。需要注意的是，即便使用命名函数取代匿名函数，也不会有任何区别。")]),t("p",[s._v("Bluebird 内部常用到的优化方法，是采用明确的普通对象保存与上下文相关的数据。对一次包含逐层传递 callback 的操作来说，只需分配一次对象。相比每当 callback 传入另一层函数时就需要创建新闭包，优化方法只需要传递一个额外的参数。假设某个操作调用 callback 分五步进行，若使用闭包则意味着要分配五个函数对象外加五个上下文对象，而使用优化方法则只需要一个普通对象。")]),t("p",[s._v("假如可以修改 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("fs.readFile")]),s._v(" API，使其接收一个上下文对象，那么前面的例子可以这样优化：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-js\">%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20fs%20%3D%20%3Cspan%20class%3D%22hljs-built_in%22%3Erequire%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-string%22%3E'fs-modified'%3C%2Fspan%3E)%3B%0A%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EinternalReadFileCallback%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Eerror%2C%20result%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E4%BF%AE%E6%94%B9%E5%90%8E%E7%9A%84%20readFile%20%E5%87%BD%E6%95%B0%E5%B0%86%E4%B8%8A%E4%B8%8B%E6%96%87%E5%AF%B9%E8%B1%A1%E8%AE%BE%E7%BD%AE%E4%B8%BA%20%60this%60%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%B9%B6%E8%B0%83%E7%94%A8%E5%8E%9F%E6%9D%A5%E4%BC%A0%E6%9D%A5%E7%9A%84%20callback%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%20(error)%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E(error)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E9%9C%80%E8%A6%81%20try-catch%20%E6%9D%A5%E5%A4%84%E7%90%86%E5%8F%AF%E8%83%BD%E5%AD%98%E5%9C%A8%E7%9A%84%E9%9D%9E%E6%B3%95%20JSON%20%E9%80%A0%E6%88%90%E7%9A%84%E8%AF%AD%E6%B3%95%E9%94%99%E8%AF%AF%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Etry%3C%2Fspan%3E%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20json%20%3D%20%3Cspan%20class%3D%22hljs-built_in%22%3EJSON%3C%2Fspan%3E.parse(result)%3B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-literal%22%3Enull%3C%2Fspan%3E%2C%20json)%3B%0A%20%20%20%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ecatch%3C%2Fspan%3E%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E(e)%3B%0A%20%20%20%20%7D%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EreadFileAsJson%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3EfileName%2C%20callback%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E4%BF%AE%E6%94%B9%E5%90%8E%E7%9A%84%20%20fs.readFile%20%E6%8E%A5%E6%94%B6%E4%B8%8A%E4%B8%8B%E6%96%87%E5%AF%B9%E8%B1%A1%E4%BD%9C%E4%B8%BA%E7%AC%AC%E5%9B%9B%E4%B8%AA%E5%8F%82%E6%95%B0%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E4%BD%86%E5%AE%9E%E9%99%85%E6%97%A0%E9%9C%80%E4%B8%BA%20%60callback%60%20%E5%8D%95%E7%8B%AC%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%E5%AF%B9%E8%B1%A1%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E7%9B%B4%E6%8E%A5%E5%B0%86%E5%85%B6%E4%BD%9C%E4%B8%BA%E4%B8%8A%E4%B8%8B%E6%96%87%E5%AF%B9%E8%B1%A1%E5%8D%B3%E5%8F%AF%3C%2Fspan%3E%0A%20%20%20%20fs.readFile(fileName%2C%20%3Cspan%20class%3D%22hljs-string%22%3E'utf8'%3C%2Fspan%3E%2C%20internalReadFileCallback%2C%20callback)%3B%0A%7D</code>")]),t("p",[s._v("显然，我们需要从内部、使用两个方面控制 API，这种优化对那些不接收上下文对象作为参数的 API 来说，全无用处。但当我们控制了多个内部层的时候，性能优化的收益则极为可观。顺便提一个经常被忽略的细节：JavaScript 数组的某些内置 API（如 forEach）可以接收一个上下文对象作为第二个参数。")]),t("h3",{attrs:{id:"2-"}},[s._v("2. 减小对象体积")]),t("p",[s._v("减小经常、频繁使用的对象（如 Promise）的体积至关重要。对象被分配在栈（heap）中，对象体积越大，栈空间也会越快被占满，回收器要做的工作也更多。通常来说，对象体积越小，回收器判断对象状态时要访问的字段也就越少。")]),t("p",[s._v("使用位运算符，布尔值 and/or 特定整数字段能够包装到更小的空间中。JavaScript 采用 32 位整数，所以可以将 32 个布尔字段（或 8 个 4 位整数字段，又或者 16 个布尔和 2 个 8 位整数字段 etc.）打包到一个字段中。为维护代码可读性，每个逻辑字段需要一对 getter/setter，用来对物理字段进行相关位运算操作。下面的例子展示如何使用整数保存一个布尔字段（未来还可扩展到多个逻辑字段）：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-js">%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E4%BD%BF%E7%94%A8%201%20%26lt%3B%26lt%3B%201%20%E4%BB%A3%E8%A1%A8%E7%AC%AC%E4%BA%8C%E4%BD%8D%2C%201%20%26lt%3B%26lt%3B%202%20%E4%BB%A3%E8%A1%A8%E7%AC%AC%E4%B8%89%E4%BD%8D%EF%BC%8C%E4%BE%9D%E6%AD%A4%E7%B1%BB%E6%8E%A8%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20READONLY%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%20%26lt%3B%26lt%3B%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-class%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EFile%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econstructor%3C%2Fspan%3E()%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E._bitField%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20isReadOnly()%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%9C%86%E6%8B%AC%E5%8F%B7%E4%B8%8D%E5%8F%AF%E7%9C%81%E7%95%A5%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E._bitField%20%26amp%3B%20READONLY)%20!%3D%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20setReadOnly()%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E._bitField%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E._bitField%20%7C%20READONLY%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20unsetReadOnly()%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E._bitField%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E._bitField%20%26amp%3B%20(~READONLY)%3B%0A%20%20%20%20%7D%0A%7D</code>')]),t("p",[s._v("访问器方法如此短小，运行时很可能会被内联，所以也不会产生额外开销。")]),t("p",[s._v("两个乃至多个不会同时用到的字段也可以合并成一个字段，用一个布尔值记录该字段所记录的值的类型即可。不过，如果像前面所讲的那样，将这个布尔字段打包在某个整数字段中，这样做的结果，无非只是节省了一些空间。")]),t("p",[s._v("Bluebird 在保存一个 Promise 对象的完成值与拒绝理由时就用到这种技巧。如果该Promise 对象完成，则使用该字段记录完成值，反之亦然。重复一遍，属性访问必须通过访问器函数，将丑陋的优化字节隐藏在底层。")]),t("p",[s._v("如果对象需要保存一个列表，尽量避免使用数组，直接使用索引属性，将值保存在对象上即可。")]),t("p",[s._v("不要这样做：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-js">%3Cspan%20class%3D%22hljs-class%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EEventEmitter%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econstructor%3C%2Fspan%3E()%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E.listeners%20%3D%20%5B%5D%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20addListener(fn)%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E.listeners.push(fn)%3B%0A%20%20%20%20%7D%0A%7D</code>')]),t("p",[s._v("应尽量避免使用数组：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-js">%3Cspan%20class%3D%22hljs-class%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EEventEmitter%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econstructor%3C%2Fspan%3E()%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E.length%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20addListener(fn)%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20index%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E.length%3B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E.length%2B%2B%3B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E%5Bindex%5D%20%3D%20fn%3B%0A%20%20%20%20%7D%0A%7D</code>')]),t("p",[s._v("若 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("length")]),s._v(" 字段被限制为一个小的整数（如 10 位，限制 event emitter 的监听器数量最大为 1024），则还可以与其他布尔字段、特定整数字段打包在一起。")]),t("h3",{attrs:{id:"3-"}},[s._v("3. 可选特性懒重写")]),t("p",[s._v("Bluebird 提供了有些可选特性，使用它们时可能拉低整个库的性能。这些特性主要包括警告、long stack trace、取消、"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Promise.prototype.bind")]),s._v(" 以及 Promise 状态监控等。实现这些特性，须在整个库的不同地方调用不同的钩子函数。比如说，要实现 Promise 监控，那么每次创建 Promise 对象时就要调用某个函数。")]),t("p",[s._v("在调用钩子函数之前，当然最好先检查是否需要启用监控特性，这比不管三七二十一直接调用要靠谱。不过借助于内联缓存和内联函数，对未启用这些特性的用户来说，影响其实可以完全忽略。将初始钩子函数设置为空函数即可达到目的：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-js">%3Cspan%20class%3D%22hljs-class%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EPromise%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20...%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econstructor%3C%2Fspan%3E(executor)%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20...%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E._promiseCreatedHook()%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E7%A9%BA%E6%96%B9%E6%B3%95%3C%2Fspan%3E%0A%20%20%20%20_promiseCreatedHook()%20%7B%7D%0A%7D</code>')]),t("p",[s._v("如果用户并未启用监控特性，优化器发现函数是什么都没干，便会忽略它。所以实际上可以认为 constructor 中的钩子函数不存在。")]),t("p",[s._v("那么如何启用相关特性呢？重写相关的空函数就可以啦：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-js">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EenableMonitoringFeature%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3E%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-built_in%22%3EPromise%3C%2Fspan%3E.prototype._promiseCreatedHook%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3E%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%AE%9E%E9%99%85%E5%AE%9E%E7%8E%B0%3C%2Fspan%3E%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20...%3C%2Fspan%3E%0A%7D</code>')]),t("p",[s._v("这样的函数重写会使所有的 Promise 对象内联缓存失效，因此应该只在应用启动时，任何 Promise 对象创建之前进行重写。这样一来，空钩子函数就不会有任何影响了。")]),t("h3",{attrs:{id:"-"}},[s._v("译者补充")]),t("p",[s._v("拖拖拉拉，终于把这篇文章翻译出来了。需要说明的是，没有完全按照原文逐字翻译，插入了自己的一些理解。")]),t("p",[s._v("遗憾的是，有一部分名词实在不好翻译，所以本文难免有一些生硬的地方。虽然译者可以摸着良心说，真的已经尽了最大的努力。")]),s._m(0),s._m(1)])]),s.post.prev.title||s.post.next.title?t("nav",{staticClass:"pagination"},[s.post.prev.title?t("nuxt-link",{staticClass:"prev",attrs:{to:"/post/"+s.post.prev.pathname,title:s.post.prev.title}},[s._v("« "+s._s(s.post.prev.title))]):s._e(),s.post.next.title?t("nuxt-link",{staticClass:"next",attrs:{to:"/post/"+s.post.next.pathname,title:s.post.next.title}},[s._v(s._s(s.post.next.title)+" »")]):s._e()],1):s._e(),t("gitalk",{attrs:{tags:s.tags}})],1)};e._withStripped=!0;var n={render:e,staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("之前读到 stackoverflow 上的一个回答，也属于优化的一部分吧，涉及到 V8 中对象的两种存储模式，即字典模式、快速模式。建议有兴趣的同学看看："),a("a",{attrs:{href:"http://stackoverflow.com/questions/24987896/how-does-bluebirds-util-tofastproperties-function-make-an-objects-properties",target:"_blank"}},[this._v("how-does-bluebirds-util-tofastproperties-function-make-an-objects-properties")]),this._v("。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("另外，之前有个工具 "),a("a",{attrs:{href:"https://github.com/nolanlawson/optimize-js",target:"_blank"}},[this._v("optimize-js")]),this._v("，好像也可以针对 V8 做了一些优化，具体可以看文档，说得非常详细。")])}]};a.a=n},v8yf:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=t("Tnaf"),n=t("owUk"),l=t("VU/8")(e.a,n.a,!1,null,null,null);l.options.__file="pages/post/javascript-performance-fundamentals-make-bluebird-fast.vue",a.default=l.exports}});