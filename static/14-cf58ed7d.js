webpackJsonp([14],{BTpF:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("NApq"),i=s("ZKi3"),r=s("VU/8")(a.a,i.a,!1,null,null,null);r.options.__file="pages/post/when-to-use-which-css-methodology.vue",e.default=r.exports},NApq:function(t,e,s){"use strict";var a={title:"[译] CSS 方法论的选择",description:"CSS 方法论的选择",keywords:"翻译,CSS",pathname:"when-to-use-which-css-methodology",translation:{author:"Samurai",social:"http://twitter.com/simurai",from:"http://simurai.com/blog/2016/11/27/css-methodologies"},create_time:"2016-11-30",prev:{title:"笔记：velocity 2016 第一天",pathname:"velocity-2016-note-1"},next:{title:"[译] 手把手教你写一个 Javascript 框架：项目结构",pathname:"nx-project-structure"}};e.a={head:function(){return{title:a.title,meta:[{name:"keywords",content:a.keywords||""},{name:"description",content:a.description}]}},data:function(){return{post:a,post_url:this.$config.site_url+"/post/"+a.pathname,tags:a.tags}},mounted:function(){this.$fixCode()}}},ZKi3:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"page-post"}},[s("article",{staticClass:"post detail"},[s("div",{staticClass:"meta"},[s("div",{staticClass:"date"},[t._v(t._s(t.post.create_time))])]),s("h1",{staticClass:"title"},[t._v(t._s(t.post.title))]),s("div",{staticClass:"entry-content"},[t.post.translation?s("blockquote",[s("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n        原文作者: "),s("a",{attrs:{href:t.post.translation.social,target:"_blank"}},[t._v(t._s(t.post.translation.author))]),s("br"),t._v("\n        原文地址: "),s("a",{attrs:{href:t.post.translation.from}},[t._v(t._s(t.post.translation.from))]),s("br"),t._v("\n        译文地址: "),s("a",{attrs:{href:t.post_url}},[t._v(t._s(t.post_url))]),s("br"),t._v("\n        本文由 "),s("a",{attrs:{href:this.$config.site_url}},[t._v(t._s(this.$config.site_owner))]),t._v(" 翻译，转载请保留此声明。"),s("br"),t._v("\n        著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。\n        ")])]):t._e(),t._m(0),s("p",[t._v("多年来，CSS 方法论层出不穷。不幸的是，并不存在适用所有场景的最佳选择。本文介绍了一些适用于不同情况的 CSS 方法论。")]),s("p",[t._v("好，跟我一起开始踩坑之旅吧。")]),s("hr"),t._m(1),t._m(2),s("hr"),t._m(3),t._m(4),s("hr"),t._m(5),t._m(6),s("hr"),s("p",[t._v("以上三种情况可能最常见，但也存在更多的具体需求不尽相同的情形：")]),t._m(7),t._m(8),s("hr"),t._m(9),s("p",[t._v("👉 使用 CSS-in-JS 库。可以通过 JS 直接更新属性，无需查找类名或 DOM 节点。")]),s("hr"),t._m(10),t._m(11),s("hr"),t._m(12),t._m(13),s("hr"),t._m(14),s("p",[t._v("👉 用点新东西。这种时候，正好试试那些还不太熟悉的东西。")]),s("hr"),t._m(15),s("p",[t._v("👉 使用链式选择器，如 "),s("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[t._v(".header > ul.nav li .button {}")]),t._v("。你的同事会因此苦不堪言，而你则可以在一旁暗暗幸灾乐祸。")]),s("p",[t._v("好了。啊等等... 最后一条不算数哈。关于链式选择器，我能想到的唯一使用场景，就是在无法访问元素的时候。例如，内容由 CMS 决定，无法更改。这种时候，链式选择器应该是最（wei）佳（yi）选择吧。")]),s("hr"),s("p",[t._v("如你所见，不同使用场景太多太多。因此，如非知己知彼，争论 CSS 方法论是很难得出结论的。")]),s("p",[t._v("最后一点想法：不必抱死在一套 CSS 方法论上，还需有所借鉴，并探索出一套适合自己的方法。切换新方法是可能的，有时候则是必须的。例如一个起始于简单原型、团队成员与日俱增、日渐复杂的项目。但切换 CSS 方法论费时费力，容易出错，事先进行一些计划能够减少后期的很多问题。选择愉快!")]),s("hr"),t._m(16)])]),t.post.prev.title||t.post.next.title?s("nav",{staticClass:"pagination"},[t.post.prev.title?s("nuxt-link",{staticClass:"prev",attrs:{to:"/post/"+t.post.prev.pathname,title:t.post.prev.title}},[t._v("« "+t._s(t.post.prev.title))]):t._e(),t.post.next.title?s("nuxt-link",{staticClass:"next",attrs:{to:"/post/"+t.post.next.pathname,title:t.post.next.title}},[t._v(t._s(t.post.next.title)+" »")]):t._e()],1):t._e(),s("gitalk",{attrs:{tags:t.tags}})],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("p",[t._v("本文转载自："),s("a",{attrs:{href:"http://www.zcfy.cc",target:"_blank"}},[t._v("众成翻译")]),t._v("\n译者："),s("a",{attrs:{href:"http://www.zcfy.cc/@wemlin",target:"_blank"}},[t._v("文蔺")]),t._v("\n链接："),s("a",{attrs:{href:"http://www.zcfy.cc/article/1828",target:"_blank"}},[t._v("http://www.zcfy.cc/article/1828")]),t._v("\n原文："),s("a",{attrs:{href:"http://simurai.com/blog/2016/11/27/css-methodologies",target:"_blank"}},[t._v("http://simurai.com/blog/2016/11/27/css-methodologies")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("我只需要创建一个"),e("strong",[this._v("单页面")]),this._v("或"),e("strong",[this._v("简单的站点")]),this._v("。内容以文本为主，可能会有一两个表单。没有人和我协作，就我自己（还有我家的喵）。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("👉 简单就好。直接给 HTML 元素添加样式，连 class 都不需要。"),e("a",{attrs:{href:"https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/",target:"_blank"}},[this._v("依赖级联关系，利用样式继承")]),this._v("。随着站点增长，可能需要开始看看 "),e("a",{attrs:{href:"http://oocss.org/",target:"_blank"}},[this._v("OOCSS")]),this._v("，或不时使用一些工具类。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("我们是一个"),e("strong",[this._v("中型团队")]),this._v("。项目复杂度增长较快，采用多人协作。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("👉 使用 "),s("a",{attrs:{href:"https://en.bem.info/methodology/quick-start/",target:"_blank"}},[t._v("BEM")]),t._v("、"),s("a",{attrs:{href:"https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md",target:"_blank"}},[t._v("SUIT")]),t._v("、"),s("a",{attrs:{href:"https://smacss.com/",target:"_blank"}},[t._v("SMACSS")]),t._v("、"),s("a",{attrs:{href:"https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/",target:"_blank"}},[t._v("ITCSS")]),t._v(" 或 "),s("a",{attrs:{href:"http://ecss.io/",target:"_blank"}},[t._v("Enduring CSS")]),t._v(" 等。它们各不相同，但也有相似点，在某些方面亦有重叠之处。它们所使用的命名约定，能保证你们之间不会发生冲突。和团队一起讨论下，在作出最终决定前，可能需要多进行一些尝试。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("我们是有多个团队的大公司，产品"),e("strong",[this._v("庞大而复杂")]),this._v("。跟踪变化相当困难。代码库不断变化，而我们又不想顾此失彼。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("👉 使用 "),e("a",{attrs:{href:"https://facebook.github.io/react/docs/jsx-in-depth.html",target:"_blank"}},[this._v("JSX")]),this._v("、"),e("a",{attrs:{href:"https://github.com/cssinjs/jss",target:"_blank"}},[this._v("JSS")]),this._v("，或其他类似的 CSS-in-JS 库。将 CSS 与 HTML/JS 绑在一起，更容易修改、移动或删除组件，而又不影响其他部分。还可以看看 "),e("a",{attrs:{href:"https://acss.io/",target:"_blank"}},[this._v("ACSS")]),this._v(" 这样的 Atomic CSS，这是另一种解决相同问题的思路。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("我希望从原型开始工作。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("👉 使用“单一用途类”，如 "),e("a",{attrs:{href:"http://tachyons.io/",target:"_blank"}},[this._v("TACHYONS")]),this._v(" 或 "),e("a",{attrs:{href:"http://basscss.com/",target:"_blank"}},[this._v("BASSCSS")]),this._v("。同时编写 HTML 和 CSS，这项工作也可以很自由。不用在文件之间来回切换，不用再为如何编写类名冥思苦想，只要根据所思所想，快速进行构建。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("项目中有大量状态、大量需要在运行时更新的内容。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("我想发布一个 CSS 框架（啊我也想啊）。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("👉 使用带有命名空间的 "),e("a",{attrs:{href:"https://en.bem.info/methodology/quick-start/",target:"_blank"}},[this._v("BEM")]),this._v("。如此一来，一定程度的保护作用的同时，尚能进行定制。此外，如果能够轻松定制主题也是极好的，比如提供一些便于修改的变量。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("我想制作一个（不可定制的）第三方组件。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("👉 使用 "),e("a",{attrs:{href:"https://glenmaddern.com/articles/css-modules",target:"_blank"}},[this._v("CSS Modules")]),this._v("。独有的类名，能够防止外部样式污染以及内部样式泄漏。此外，还可以考虑 iframe 或 Web Component。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("我想在 "),e("a",{attrs:{href:"https://codepen.io/",target:"_blank"}},[this._v("CodePen")]),this._v(" 上创建 Demo。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("我讨厌我的同事。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("免责声明：我个人也难以做到绝对中立，不偏不倚。能做到的同学请举手。此外，我使用这些 CSS 方法论的时间并不够长，并不敢宣称了解全部。但我已尽可能保持客观中立了，如果你认为本文错误连篇，或者漏掉了重要内容，请点击"),e("a",{attrs:{href:"https://github.com/simurai/simurai.github.io/edit/master/_posts/2016-11-27-css-methodologies.md",target:"_blank"}},[this._v("链接")]),this._v("尽情修改。")])])}]};e.a=i}});