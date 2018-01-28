webpackJsonp([57],{"/CbW":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("xaqk"),a=i("mjOK"),s=i("VU/8")(r.a,a.a,!1,null,null,null);s.options.__file="pages/post/hybrid-or-native-mobile-app-use-the-right-tool-for-the-job.vue",e.default=s.exports},mjOK:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"page-post"}},[i("article",{staticClass:"post detail"},[i("div",{staticClass:"meta"},[i("div",{staticClass:"date"},[t._v(t._s(t.post.create_time))])]),i("h1",{staticClass:"title"},[t._v(t._s(t.post.title))]),i("div",{staticClass:"entry-content"},[t.post.translation?i("blockquote",[i("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n        原文作者: "),i("a",{attrs:{href:t.post.translation.social,target:"_blank"}},[t._v(t._s(t.post.translation.author))]),i("br"),t._v("\n        原文地址: "),i("a",{attrs:{href:t.post.translation.from}},[t._v(t._s(t.post.translation.from))]),i("br"),t._v("\n        译文地址: "),i("a",{attrs:{href:t.post_url}},[t._v(t._s(t.post_url))]),i("br"),t._v("\n        本文由 "),i("a",{attrs:{href:this.$config.site_url}},[t._v(t._s(this.$config.site_owner))]),t._v(" 翻译，转载请保留此声明。"),i("br"),t._v("\n        著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。\n        ")])]):t._e(),t._m(0),i("p",[t._v("移动应用开发，何时该用 hybrid，何时又该用 native？一起来学习它们的差异，看看哪款更适合你。")]),t._m(1),t._m(2),t._m(3),i("p",[t._v("使用 Telerik Platform，不需要 Mac，也不需要管理各种 SDK。你可以使用到最佳的模拟、调试以及像消息推送、实时同步（LiveSync）、App Store发布等等服务。")]),i("p",[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01f0b99ba0341c262c.png",expression:"`https://p.ssl.qhimg.com/t01f0b99ba0341c262c.png`"}],attrs:{alt:"hybrid native mobile web"}})]),i("h3",{attrs:{id:"hybrid-app-"}},[t._v("Hybrid App 到底是什么？")]),t._m(4),t._m(5),t._m(6),i("h4",{attrs:{id:"hybrid-"}},[t._v("Hybrid 强项")]),t._m(7),i("h4",{attrs:{id:"hybrid-"}},[t._v("Hybrid 缺点")]),t._m(8),i("h3",{attrs:{id:"native-app-"}},[t._v("Native App 又是什么？")]),t._m(9),t._m(10),i("p",[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t0122c5404d78455584.png",expression:"`https://p.ssl.qhimg.com/t0122c5404d78455584.png`"}],attrs:{alt:"nativescript architecture"}})]),t._m(11),t._m(12),i("h4",{attrs:{id:"native-"}},[t._v("Native 强项")]),t._m(13),i("h4",{attrs:{id:"native-"}},[t._v("Native 弱势")]),t._m(14),i("h3",{attrs:{id:"-"}},[t._v("两者如何选择？")]),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),i("h3",{attrs:{id:"-"}},[t._v("下一步")]),t._m(20)])]),t.post.prev.title||t.post.next.title?i("nav",{staticClass:"pagination"},[t.post.prev.title?i("nuxt-link",{staticClass:"prev",attrs:{to:"/post/"+t.post.prev.pathname,title:t.post.prev.title}},[t._v("« "+t._s(t.post.prev.title))]):t._e(),t.post.next.title?i("nuxt-link",{staticClass:"next",attrs:{to:"/post/"+t.post.next.pathname,title:t.post.next.title}},[t._v(t._s(t.post.next.title)+" »")]):t._e()],1):t._e(),i("gitalk",{attrs:{tags:t.tags}})],1)};r._withStripped=!0;var a={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("译者注：本文讲到的 hybrid & native 可能和我们通常理解的略有差异。文中 native 部分主要讲到的是 NativeScript，这一点可能在一些开发者看来是有争议的。关于 NativeScript，想起来"),e("a",{attrs:{href:"http://qianduan.guru/",target:"_blank"}},[this._v("@前端外刊评论")]),this._v(" 有一篇文章"),e("a",{attrs:{href:"http://qianduan.guru/2016/07/03/create_cross_platform_app_with_nativescript_angular/",target:"_blank"}},[this._v("《使用 NativeScript 和 Angular2 构建跨平台 APP》")]),this._v("，可以参阅。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("移动应用开发者的工具箱正在膨胀，比任何人期待的都更加多样化了。从像 Xcode 和 Android Studio 这样的纯原生 (pure native) 解决方案，到 "),e("a",{attrs:{href:"https://www.nativescript.org/",target:"_blank"}},[this._v("Telerik NativeScript")]),this._v("和 React Native 这样的原生 JavaScript 选项，再到 "),e("a",{attrs:{href:"http://www.telerik.com/kendo-ui",target:"_blank"}},[this._v("Kendo UI")]),this._v(" 和 Ionic 这样基于 web 的框架，开始App 开发比以前任何时候都容易。然而，随着可选项的增加，“选择悖论” (paradox of choice) 出现了 —— 我们惊呆了，看不懂了，竟然有"),e("em",[this._v("如此多")]),this._v("的可选项。我们真正想要的是，更少的选择，更清晰的指南。在这篇文章中，我希望能让您看清选择，为您指向一条康庄大道，创建成功的移动应用。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("谈论移动应用开发的工具、服务，比如说"),e("a",{attrs:{href:"http://www.telerik.com/platform",target:"_blank"}},[this._v("Telerik Platform by Progress")]),this._v("提供的那些，选择就变得简洁多了：")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[i("strong",[t._v("想试试 hybrid ？")]),t._v("我们提供 "),i("a",{attrs:{href:"https://cordova.apache.org/",target:"_blank"}},[t._v("Cordova/PhoneGap")]),t._v(" 开发，你可以使用任何移动端 JavaScript 框架")])]),i("li",[i("p",[i("strong",[t._v("想用 native ？")]),t._v("我们支持 "),i("a",{attrs:{href:"https://www.nativescript.org/",target:"_blank"}},[t._v("NativeScript")]),t._v(" 开发（附带可选的 [Angular 2 集成]）")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我的同事 John Bristowe 在"),e("a",{attrs:{href:"http://developer.telerik.com/featured/what-is-a-hybrid-mobile-app/",target:"_blank"}},[this._v("这篇博客")]),this._v("中讲到了这个，其中有关于 hybrid 的全面解释。说得更清楚一点，Hybrid App 并不是移动端网站！它是安装在设备本地的应用，但使用 Web 技术（HTML5， CSS，JavaScript）编码，在 WebView 中运行。WebView 是打包在移动应用中的浏览器。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Hybrid App 无论是看起来、感觉起来还是使用起来，都很像 Native App（多数情况下... 往下看）。它可以与设备的原生功能如地理定位、相机、通讯录等等交互。任何无法使用的原生功能，通常都能用各种 "),e("a",{attrs:{href:"http://plugins.telerik.com/cordova",target:"_blank"}},[this._v("Cordova 插件")]),this._v("解决。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("听起来真棒，是吧？")]),this._v("来看看 hybrid 的更多优弱势：")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[i("strong",[t._v("完全跨平台：")]),t._v("编码一次，然后就可以构建 iOS、Android 和/或 Windows Phone 应用")])]),i("li",[i("p",[i("strong",[t._v("代码复用：")]),t._v("可以复制现有的大部分 Web App 代码，将其转换为移动 App")])]),i("li",[i("p",[i("strong",[t._v("技能复用，学习曲线低：")]),t._v("如果你有 JavaScript、HTML、CSS 相关知识的话，很快就能使用 Cordova 和移动 JavaScript 框架开发应用")])]),i("li",[i("p",[i("strong",[t._v("减少开发时间和成本：")]),t._v("因为上述有点，可以相对快速完成移动 App 开发并上线")])]),i("li",[i("p",[i("strong",[t._v("健全的生态系统：")]),t._v(" Cordova 是一个成熟的开源框架，"),i("a",{attrs:{href:"http://www.telerik.com/kendo-ui",target:"_blank"}},[t._v("Kendo UI")]),t._v(" 包含一个著名的（且开源的）"),i("a",{attrs:{href:"http://docs.telerik.com/kendo-ui/controls/hybrid/introduction",target:"_blank"}},[t._v("移动框架")]),t._v("。")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[i("strong",[t._v("感知性能问题：")]),t._v(" Hybrid App 在 WebView 中运行，所以会受到设备上 WebView 的性能的影响（尤其 Android 有一堆问题）")])]),i("li",[i("p",[i("strong",[t._v("跨设备行为差异：")]),t._v(" WebView 在各平台（甚至不同版本）上不一样，需要额外调整并优化代码，确保 App 按照预期能在所有设备上运行")])]),i("li",[i("p",[i("strong",[t._v("大量图形和过渡（heavy graphics and transitions）情况下的性能问题：")]),t._v(" WebView 在处理大量图形和过渡（特别是游戏和其他重 UI 的应用中）的时候，肯定有各种问题")])]),i("li",[i("p",[i("strong",[t._v("特定平台 UI 或特性需要额外开发：")]),t._v("进军特殊平台的特性，通常需要额外编码，或者在某些情形下使用插件，甚至需要自己来创建插件")])]),i("li",[i("p",[i("strong",[t._v("新版本平台支持缓慢：")]),t._v("新版移动平台可以使用的时候，在 Cordova 引入新版本及其特性的各种支持之前，需要等上几个月")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Native App 是运行在设备本地的应用，使用的是真实的原生 UI 元素。不像 Hybrid App，Native App 无需牺牲性能，因为它运行在设备原生环境中！"),e("strong",[this._v("Native App 中没有 WebView 碍事了。")]),this._v(" Native App 也能完整访问平台上所有可用的 API（所以不必使用任何插件，虽然它们也有用）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("谈到 Native App，最好也是最简单的办法是使用免费、开源的 "),e("a",{attrs:{href:"https://www.nativescript.org/",target:"_blank"}},[this._v("NativeScript")]),this._v(" 框架。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("为什么使用 NativeScript ？好吧，就像 hybrid 技术，它可以让你使用所掌握和喜爱的 Web 技能（CSS 和 JavaScript/TypeScript），同时使用我们的插件如 "),e("a",{attrs:{href:"http://www.telerik.com/nativescript-ui",target:"_blank"}},[this._v("Telerik UI for NativeScript")]),this._v(" 达到平滑、优雅的用户体验。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("这听起来也挺好的吧？")]),this._v(" 也来看看 native 的优缺点细节：")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[i("strong",[t._v("跨平台：")]),t._v("同 hybrid 一样，使用 NativeScript 创建的应用，同一套代码可以在 iOS 和 Android 上运行")])]),i("li",[i("p",[i("strong",[t._v("代码复用：")]),t._v("还是一样，可以将许多 JavaScript 业务逻辑拷到 NativeScript 应用中（当然得视情况而定）")])]),i("li",[i("p",[i("strong",[t._v("技能复用：")]),t._v("如果你会 JavaScript 和 CSS，或者理解 XML（UI 标记）的概念，那你已经具备理解 NativeScript 的基础了")])]),i("li",[i("p",[i("strong",[t._v("跨平台的原生 UI 和性能：")]),t._v("因为应用使用的是原生组件，它们在任何地方都能跑起来")])]),i("li",[i("p",[i("strong",[t._v("利用现有的原生库：")]),t._v(" NativeScript 提供包括 "),i("a",{attrs:{href:"https://cocoapods.org/",target:"_blank"}},[t._v("CocoaPods")]),t._v(" 这样的原生库的框架外支持")])]),i("li",[i("p",[i("strong",[t._v("新特性无缝支持：")]),t._v("新的移动操作系统版本可用的时候，NativeScript 马上就能提供支持")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[e("strong",[this._v("相对较新：")]),e("a",{attrs:{href:"http://developer.telerik.com/featured/defining-a-new-breed-of-cross-platform-mobile-apps/",target:"_blank"}},[this._v("JavaScript Native")]),this._v(" 框架相对来说还是比较新，因此社区还在制造资源、拓展文档")])]),e("li",[e("p",[e("strong",[this._v("更陡峭的学习曲线：")]),this._v(" Hybrid 让我们使用 HTML，但 NativeScript 迫使我们使用更多的原生应用概念如 原生 UI 元素。对不起，没有 div 了，但是 NativeScript 布局引擎"),e("a",{attrs:{href:"http://developer.telerik.com/featured/demystifying-nativescript-layouts/",target:"_blank"}},[this._v("理解起来很简单")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("这才是关键问题，对吧？")]),this._v("如果你想开发移动应用，而且有得选择，然后 "),e("a",{attrs:{href:"http://www.telerik.com/platform",target:"_blank"}},[this._v("Telerik Platform")]),this._v(" 两种方案都支持，你会怎么选？这儿有一些问题是我们听到人们在选择 hybrid 和 native 开发时的谈论的：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("性能对我很重要 —— 如果体验不好客户才不会要！")]),this._v("如果性能是关键（通常都这样），那就使用 NativeScript 吧。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("我只想尽快上线应用。不需要完美，也不需要 100% 原生。")]),this._v("需要快速开发打样 App？那 hybrid 可能最好的选择。NativeScript 很酷的一点是，你甚至可以直接从打样 App 中复制大部分业务逻辑，放到 NativeScript App 中（它们都是 JavaScript）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("我想让我的应用不会过时。我可等不及别人写插件或者更新框架。")]),this._v("和最新的移动平台保持同步确实有点麻烦，这也是为何 NativeScript 为各种新操作系统发布、API 升级提供快速支持。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("我"),e("em",[this._v("需要")]),this._v("给我的应用创建一个 Windows Phone 版本！")]),this._v("截至现在，Windows Phone 只支持 hybrid（不过 NativeScript 团队正在为此努力）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("现在开始，在 Telerik Platform 上开始免费试用吧。")]),this._v("我们为你提供即时可用的开发体验，众多关于 hybrid 和 native 的快速入门教程。祝你好运！")])}]};e.a=a},xaqk:function(t,e,i){"use strict";var r={title:"[译] Hybrid or Native： 适合工作的才是最好的",description:"Hybrid or Native： 适合工作的才是最好的",keywords:"翻译,移动开发,Hybrid App",pathname:"hybrid-or-native-mobile-app-use-the-right-tool-for-the-job",translation:{author:"Rob Lauer",social:"http://www.telerik.com/blogs/author/rob-lauer",from:"http://www.telerik.com/blogs/hybrid-or-native-mobile-app-use-the-right-tool-for-the-job"},create_time:"2016-07-15",prev:{title:"[译] HTTP2 Server Push 实践：单 Link  报头包含多资源场景",pathname:"http-2-server-push-with-multiple-assets-per-link-header"},next:{title:"[译] 给 Service Worker 开后门",pathname:"backdoor-service-worker"}};e.a={head:function(){return{title:r.title,meta:[{name:"keywords",content:r.keywords||""},{name:"description",content:r.description}]}},data:function(){return{post:r,post_url:this.$config.site_url+"/post/"+r.pathname,tags:r.tags}},mounted:function(){this.$fixCode()}}}});