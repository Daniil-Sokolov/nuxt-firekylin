webpackJsonp([82],{"F+tG":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("lrGe"),i=e("caHD"),r=e("VU/8")(a.a,i.a,!1,null,null,null);r.options.__file="pages/post/being-pushy.vue",s.default=r.exports},caHD:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"page-post"}},[e("article",{staticClass:"post detail"},[e("div",{staticClass:"meta"},[e("div",{staticClass:"date"},[t._v(t._s(t.post.create_time))])]),e("h1",{staticClass:"title"},[t._v(t._s(t.post.title))]),e("div",{staticClass:"entry-content"},[t.post.translation?e("blockquote",[e("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n        原文作者: "),e("a",{attrs:{href:t.post.translation.social,target:"_blank"}},[t._v(t._s(t.post.translation.author))]),e("br"),t._v("\n        原文地址: "),e("a",{attrs:{href:t.post.translation.from}},[t._v(t._s(t.post.translation.from))]),e("br"),t._v("\n        译文地址: "),e("a",{attrs:{href:t.post_url}},[t._v(t._s(t.post_url))]),e("br"),t._v("\n        本文由 "),e("a",{attrs:{href:this.$config.site_url}},[t._v(t._s(this.$config.site_owner))]),t._v(" 翻译，转载请保留此声明。"),e("br"),t._v("\n        著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。\n        ")])]):t._e(),t._m(0),e("p",[t._v("由于早期实验部署结果不那么理想，人们对 HTTP 推送大体持着怀疑态度，不过我想分享下自己更乐观一些的观点。")]),e("h2",{attrs:{id:"http-"}},[t._v("HTTP 推送能做哪些预加载不能做的事？")]),e("p",[t._v("从怀疑者那里一再听到的观点是，“推送相对于预加载来说，只不过节省了一次 RTT（Round Trip Time）而已”。在实践中，这并非总是对的，有一个使用案例，推送可以完成，但预加载无法做到。")]),e("h3",{attrs:{id:"-think-time-"}},[t._v("利用服务器思考时间(think-time)")]),e("p",[t._v("如今，HTML 响应很少只是单纯的静态资源了。它们通常都是通过数据库获取所需的信息、使用高级语言（可能略微慢一些）动态生成的。虽然后端响应时间确实可以而且应当优化，但几百毫秒的响应时间也并不常见。")]),t._m(1),e("p",[t._v("另外一个让问题变得困难的因素是，需要开始向浏览器发送数据时，我们尚无法确定响应的构建是否会完全成功。为避免出现响应创建逻辑出错（比如说，数据库错误或者服务端代码运行失败），我们需要在应用逻辑中创建一种“回滚”已发送响应数据的方式，并向用户展示错误信息。")]),t._m(2),t._m(3),t._m(4),e("p",[t._v("现在，将这个与使用 HTTP 推送能做的事情做个对比。服务器可以利用思考时间来推送相关的关键性资源 —— 尤其是 CSS 和 JS。这样一来，当思考时间结束时，我们极有可能已将所有关键性资源都推送给浏览器了。")]),e("p",[t._v("还有额外好处，这些资源也预热了 TCP 连接，也提升了拥塞窗口（congestion window），确保思考时间之后的首个 RTT 中，可以使用 28 KB，56 KB，乃至更大的拥塞窗口发送 HTML（这取决于思考时间的长短，以及在此期间我们推送了多少资源）。")]),e("p",[t._v("一起来看下具体案例：一个 120 KB 的 HTML 页面，关键 CSS 有 24KB，关键 JS 有 74 KB，在 100ms RTT、无限带宽的网络环境下是如何加载的？")]),e("p",[t._v("没有 HTTP 推送的情况下，生成 HTML 等待了 300ms，接着 4 次 RTT 发送 HTML，因为慢启动的缘故，使用了一个 RTT 请求 JS 和 CSS。在首次渲染之前，时间超过了 800 毫秒。")]),e("p",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01b77b6cbbc2046602.png",expression:"`https://p.ssl.qhimg.com/t01b77b6cbbc2046602.png`"}],attrs:{alt:"无推送情况下的页面加载"}})]),e("p",[t._v("使用 HTTP 推送，CSS 和 JS 会在 HTML 请求到达之后尽快推送出去，发送它们需要 3 个 RTT（又一次因为慢启动），它们将拥塞窗口增大至 128 KB 左右，将要发送 HTML 时，一个 RTT 就能可以了。首次渲染总时间： 400 毫秒。")]),e("p",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01dde75bc3b741fd69.png",expression:"`https://p.ssl.qhimg.com/t01dde75bc3b741fd69.png`"}],attrs:{alt:"HTTP 推送情况下的页面加载"}})]),e("p",[t._v("首次渲染加速了 50%！也不算很差嘛。。。")]),e("h2",{attrs:{id:"http-"}},[t._v("HTTP 推送不尽如意的地方")]),t._m(5),e("h3",{attrs:{id:"-"}},[t._v("盲目推送静态资源")]),e("p",[t._v("使用 HTTP 推送可能做的错事之一就是告诉你自己，“啊，这些资源是所有页面都需要的，把它们配置成所有页面都推送”。")]),e("p",[t._v("这很糟糕，原因是缓存。在访问第一个页面之后，这些资源很可能就在用户的浏览器缓存中，然而你却在闷头推送。你可能会争辩说，这可比内联所有这些资源好多了。是这样的，不错，但，我必须反过来告诉你，内联资源也是糟糕的主意。")]),t._m(6),e("p",[t._v("你可能会以为，流重置（stream resets）会帮助推送已缓存的资源去避免浪费带宽和时间。你可能错了。很显然，并非所有浏览器会检查缓存并终止已缓存资源的推送。就算它们会这样，在流重置信号到达服务器之前，还是使用了一整个 RTT 时间发送数据。尤其是有多个资源时，这样做将可能带来大量数据浪费。")]),e("h3",{attrs:{id:"-"}},[t._v("将内容放入浏览器缓存")]),e("p",[t._v("你可能以为，推送会将资源放入浏览器缓存，可以用来做一些像使当前资源失效这样的工作。至少目前不是如此。研讨会上的讨论的话题之一就是现实问题，可能我们需要改变当前的推送行为，支持与浏览器缓存直接交互。不过当前，推送还做不到这些。推送响应进入推送缓存，只有真实请求它们时才会放到 HTTP 缓存中。")]),e("p",[t._v("因此，如果你在推送资源，希望它们在未来的某个页面中使用，那么浏览器有可能在用到它们之前已经将它们扔出推送缓存之外了。")]),e("p",[t._v("至少目前的实现是这样的。")]),e("h3",{attrs:{id:"-html-"}},[t._v("填补 HTML 下发之后的管道")]),e("p",[t._v("通常，在页面的下载循环中，使用的带宽之间会存在间隙。这意味着我们没能尽快下发资源，通常这是因为浏览器发现资源的延迟。")]),e("p",[t._v("尽管我们应当尽量下发页面所需资源以填满这些间隙，但通常使用预加载比推送更好。预加载将缓存、cookie以及内容协商纳入考虑，它不会像推送那样存在着过度发送或错误发送的风险。就填补这些间隙而言，推送并无任何优势，所有的只是劣势。故最好不要使用推送达成此目的，使用预加载吧。")]),e("h2",{attrs:{id:"-cache-digests-"}},[t._v("缓存摘要（Cache Digests）")]),e("p",[t._v("从上面我们可以看到，HTTP 推送的一大缺点就是，服务器并不必然清楚浏览器的缓存状态，因此在推送时我们可能会将已在缓存中存在的资源推送出去。")]),t._m(7),e("p",[t._v("该提案尚处于早期，可能需要简化，这样实现起来花费更少，不过我敢说，离开这个特性，HTTP 推送只能算半成品。")]),e("h2",{attrs:{id:"-"}},[t._v("总结")]),e("p",[t._v("HTTP 推送可以用来显著提升加载性能。正确使用时能为首个关键路径加载提速，带来性能指标的改善。")]),e("p",[t._v("推送依然是非常新的技术，像其他所有新工具一样，在找到使用的最优方式之前，还有很长的路要走。这一路多少会有点痛苦。")]),e("p",[t._v("是故早期实验的初始结果，可能并非全如我们所希望的那样。让我们把那些结果作为标志，指示我们关于推送的使用需要更多聪明才智吧，别妄下结论说它是无用的特性。")]),t._m(8),t._m(9)])]),t.post.prev.title||t.post.next.title?e("nav",{staticClass:"pagination"},[t.post.prev.title?e("nuxt-link",{staticClass:"prev",attrs:{to:"/post/"+t.post.prev.pathname,title:t.post.prev.title}},[t._v("« "+t._s(t.post.prev.title))]):t._e(),t.post.next.title?e("nuxt-link",{staticClass:"next",attrs:{to:"/post/"+t.post.next.pathname,title:t.post.next.title}},[t._v(t._s(t.post.next.title)+" »")]):t._e()],1):t._e(),e("gitalk",{attrs:{tags:t.tags}})],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上周我在斯达哥尔摩住了几天，出席了 "),s("a",{attrs:{href:"https://httpworkshop.github.io/",target:"_blank"}},[this._v("HTTP 研讨会")]),this._v("，参与了不少吸引人的讨论。其中一次是关于 HTTP 推送及其优缺点、早期实验结果的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("有一个常见的建议，“"),s("a",{attrs:{href:"https://www.stevesouders.com/blog/2009/05/18/flushing-the-document-early/",target:"_blank"}},[this._v("提早 flush")]),this._v("” HTML，在查询数据库并构建动态内容的同时，发送 HTML 的首个 chunk 块。但是，并非所有服务端的构架都能这么简单地实现。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("尽管这肯定有可能做得到（甚至是"),s("a",{attrs:{href:"https://blogs.akamai.com/2013/12/speed-up-time-to-first-byte-with-edgestart.html",target:"_blank"}},[this._v("自动化的")]),this._v("），但目前还没有一种通用的方式能够作为协议的一部分。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("因此一般场景是，Web 服务器等待后端数百毫秒以构建页面，而后开始返回数据。这时候我们就碰到了"),s("a",{attrs:{href:"https://www.igvita.com/2011/10/20/faster-web-vs-tcp-slow-start/",target:"_blank"}},[this._v("慢启动")]),this._v("（译者注：slow start，可参考"),s("a",{attrs:{href:"http://www.cnblogs.com/ggjucheng/archive/2012/02/02/2335994.html",target:"_blank"}},[this._v("此文")]),this._v("），所以首次 RTT 只能发送大约 14 KB 数据，第二次 28 KB 左右，如此等等。由此我们知道，将 HTML 发送出去，需要用去服务器思考时间加上慢启动时间。在思考时间期间，浏览器对接下来所需的资源一无所知，故也不会针对接下来所需资源的关键路径发送任何请求。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("而且，即使我们试着耍小聪明，针对那些资源添加 "),s("a",{attrs:{href:"https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/#headers",target:"_blank"}},[this._v("preload 报头")]),this._v("，若我们不提早 flush 文档开头，那还是没有对思考时间加以利用。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我认为人们在"),s("strong",[this._v("错误地使用")]),this._v(" HTTP 推送的原因之一是，他们在某些并不能提供任何好处甚至损害效率的场景下使用它。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("所以，若你在以这种方式盲目推送资源，请确保它是你想要内联在页面中的"),s("em",[this._v("唯一的")]),this._v("资源，也就是关键的 CSS。否则，你就是在冒险让重复的请求变慢。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("有一个标准扩展的提案，叫做 "),s("a",{attrs:{href:"https://tools.ietf.org/html/draft-ietf-httpbis-cache-digest-00",target:"_blank"}},[this._v("Cache Digests")]),this._v("。其基本思想是浏览器在 HTTP/2 连接初始化之后，向服务器发送摘要，服务器在下发资源之前能够精确判断资源是否已在浏览器缓存中存在。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("感谢 "),s("a",{attrs:{href:"https://twitter.com/tkadlec",target:"_blank"}},[this._v("Tim Kadlec")]),this._v(" 和  "),s("a",{attrs:{href:"https://twitter.com/marcosc",target:"_blank"}},[this._v("Marcos Caceres")]),this._v(" 审阅本文（特别感谢 Tim，在制作 RTT 图解原型时的帮助）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("本文作者： "),s("strong",[this._v("Yoav Weiss")])])}]};s.a=i},lrGe:function(t,s,e){"use strict";var a={title:"[译] HTTP 推送",description:"HTTP 推送只能算半成品。",keywords:"翻译,HTTP2,Server Push",pathname:"being-pushy",translation:{author:"@Yoav Weiss",social:"https://twitter.com/yoavweiss",from:"https://blog.yoav.ws/being_pushy/"},create_time:"2016-09-02",prev:{title:"[译] 让人倾倒的 11 个 npm trick",pathname:"eleven-npm-tricks-that-will-knock-your-wombat-socks-off"},next:{title:"聊聊 JavaScript Date 对象",pathname:"date-in-javascript"}};s.a={head:function(){return{title:a.title,meta:[{name:"keywords",content:a.keywords||""},{name:"description",content:a.description}]}},data:function(){return{post:a,post_url:this.$config.site_url+"/post/"+a.pathname,tags:a.tags}},mounted:function(){this.$fixCode()}}}});