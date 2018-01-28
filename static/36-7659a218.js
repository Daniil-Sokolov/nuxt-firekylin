webpackJsonp([36],{"0N4L":function(s,e,t){"use strict";var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{attrs:{id:"page-post"}},[t("article",{staticClass:"post detail"},[t("div",{staticClass:"meta"},[t("div",{staticClass:"date"},[s._v(s._s(s.post.create_time))])]),t("h1",{staticClass:"title"},[s._v(s._s(s.post.title))]),t("div",{staticClass:"entry-content"},[s.post.translation?t("blockquote",[t("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s._v("\n        原文作者: "),t("a",{attrs:{href:s.post.translation.social,target:"_blank"}},[s._v(s._s(s.post.translation.author))]),t("br"),s._v("\n        原文地址: "),t("a",{attrs:{href:s.post.translation.from}},[s._v(s._s(s.post.translation.from))]),t("br"),s._v("\n        译文地址: "),t("a",{attrs:{href:s.post_url}},[s._v(s._s(s.post_url))]),t("br"),s._v("\n        本文由 "),t("a",{attrs:{href:this.$config.site_url}},[s._v(s._s(this.$config.site_owner))]),s._v(" 翻译，转载请保留此声明。"),t("br"),s._v("\n        著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。\n        ")])]):s._e(),t("p",[s._v("因为工作一年多以来，做的工作基本都是和 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("webkit")]),s._v(" 系列打交道。")]),t("p",[s._v("先是做m站，后来做了两个 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("app")]),s._v(" 内嵌的 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("hybrid")]),s._v(" 项目，从来只考虑 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("webkit")]),s._v(" 前缀和相关的伪类。")]),t("p",[s._v("最近四个多月开始做内部的管理系统，写写样式，偶尔做个 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("calendar")]),s._v("、"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("tree")]),s._v(" 之类的组件，所有的基本只考虑新版 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Chrome")]),s._v("。从来没考虑别的问题。")]),t("p",[s._v("最近在帮人解决 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("firefox")]),s._v(" 下的一些兼容问题。"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("QA")]),s._v(" 妹纸提交了一堆 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("“bug”")]),s._v("。"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Bug")]),s._v("列表让人看了头疼，还有点心虚。囧。")]),t("p",[s._v("按部就班，先打开控制台。一番研究，发现不少 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("“bug”")]),s._v(" 都是样式的问题，并不是脚本兼容做得不好。")]),t("p",[s._v("下面就细数下最近发现的一些 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("bug")]),s._v("，算是做个备忘。以后还是得注意啊。")]),s._m(0),t("p",[s._v("以前看一些CSS规范，反复强调不要使用 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("background-position-x")]),s._v(" 之类的属性。")]),t("p",[s._v("如"),t("a",{attrs:{href:"https://github.com/fex-team/styleguide/blob/master/css.md#46-2d-位置",target:"_blank"}},[s._v("百度"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("FEX")])]),s._v("就指出：")]),s._m(1),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-css">%3Cspan%20class%3D%22hljs-comment%22%3E%2F*%20good%20*%2F%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Ebody%3C%2Fspan%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ebackground-position%3C%2Fspan%3E%3A%20center%20top%3B%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F*%2050%25%200%25%20*%2F%3C%2Fspan%3E%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F*%20bad%20*%2F%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Ebody%3C%2Fspan%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ebackground-position%3C%2Fspan%3E%3A%20top%3B%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F*%2050%25%200%25%20*%2F%3C%2Fspan%3E%0A%7D</code>')]),t("p",[s._v("一直以来恪守这个规则，但并没有深究原因。")]),t("p",[s._v("直到这次，真正遇到了问题。才在控制台上发现，原来 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("background-position-x")]),s._v(" 在 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Firefox")]),s._v(" 下面是"),t("strong",[s._v("无效")]),s._v("的！！！")]),t("h2",{attrs:{id:"-"}},[s._v("二）咦，为嘛还没开始输入文本框就验证变红了？")]),t("p",[s._v("第二个问题。")]),t("p",[s._v("项目有个修改密码的表单。验证不通过的话，输入框会加上红色的边框。")]),t("p",[s._v("然后 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("QA")]),s._v(" 妹纸在描述中说的是：")]),t("blockquote",[t("p",[t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("firefox")]),s._v(" 浏览器中，修改密码页面，输入框中不输入任何字符，输入框颜色也是红的  ")])]),t("p",[s._v("我还以为又是哪里的js写得不对呢。找了半天，还是决定从样式入手。")]),t("p",[t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Firefox")]),s._v(" 的调试工具面板里，似乎只列出了样式表中的样式。浏览器默认样式的值，很难找到。我只能一点点试验。")]),t("p",[s._v("最后发现，"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("input")]),s._v(" 输入框好像都带了个 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("required")]),s._v(" 属性。这是 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("HTML5")]),s._v(" 里表示表单元素必填的属性。莫非问题出在这里？试着删除了这个属性，果然解决了。")]),t("p",[s._v("其实，这红色的边框，并不是 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("border")]),s._v("，而是 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("box-shadow")]),s._v(" 啊。")]),t("p",[s._v("最后得到解决方案是加上这段 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("CSS")]),s._v("：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-css">%3Cspan%20class%3D%22hljs-selector-tag%22%3Einput%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Arequired%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Ainvalid%3C%2Fspan%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ebox-shadow%3C%2Fspan%3E%3A%20none%3B%0A%7D</code>')]),t("h2",{attrs:{id:"-outline-0-"}},[s._v("三）我擦，明明写了 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("outline: 0")]),s._v("可是然并卵啊")]),t("p",[t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("QA")]),s._v("妹纸还反映，登录、注册等视图的各种按钮，在 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Firefox")]),s._v(" 怎么点击之后，会出现黑色的边框啊？")]),t("p",[s._v("啥？难道写代码的前端哥们儿不知道在 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v(":active")]),s._v("、"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v(":focus")]),s._v(" 等状态下写个 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("outline:0")]),s._v(" 啊？这不科学。")]),t("p",[s._v("于是又开始了神奇的探(gu)索(ge)之旅。")]),t("p",[s._v("这次得到的答案是，这黑色的细线还真不是 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("outline")]),s._v("。这是一个奇怪的伪类，"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("::-moz-focus-inner")]),s._v("。简直哭死在键盘上。")]),t("p",[s._v("于是，下面这段代码解决问题：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-css">%3Cspan%20class%3D%22hljs-selector-tag%22%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3A%3A-moz-focus-inner%3C%2Fspan%3E%2C%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Einput%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-attr%22%3E%5Btype%3D%22reset%22%5D%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3A%3A-moz-focus-inner%3C%2Fspan%3E%2C%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Einput%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-attr%22%3E%5Btype%3D%22button%22%5D%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3A%3A-moz-focus-inner%3C%2Fspan%3E%2C%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Einput%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-attr%22%3E%5Btype%3D%22submit%22%5D%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3A%3A-moz-focus-inner%3C%2Fspan%3E%2C%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Einput%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-attr%22%3E%5Btype%3D%22file%22%5D%3C%2Fspan%3E%20%26gt%3B%20%3Cspan%20class%3D%22hljs-selector-tag%22%3Einput%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-attr%22%3E%5Btype%3D%22button%22%5D%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3A%3A-moz-focus-inner%3C%2Fspan%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Eborder-color%3C%2Fspan%3E%3A%20transparent%3B%0A%7D</code>')]),t("h2",{attrs:{id:"-"}},[s._v("最后，还有些其他的")]),t("ul",[t("li",[t("p",[s._v("还有什么 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("clipboardData")]),s._v(" 截图粘贴的问题，见上一篇: "),t("a",{attrs:{href:"https://segmentfault.com/a/1190000004584071",target:"_blank"}},[s._v("【在网页中获取截图数据】Chrome和Firefox下的实战经验")]),s._v("；")])]),s._m(2)]),t("p",[s._v("TO BE CONTINUED...")])])]),s.post.prev.title||s.post.next.title?t("nav",{staticClass:"pagination"},[s.post.prev.title?t("nuxt-link",{staticClass:"prev",attrs:{to:"/post/"+s.post.prev.pathname,title:s.post.prev.title}},[s._v("« "+s._s(s.post.prev.title))]):s._e(),s.post.next.title?t("nuxt-link",{staticClass:"next",attrs:{to:"/post/"+s.post.next.pathname,title:s.post.next.title}},[s._v(s._s(s.post.next.title)+" »")]):s._e()],1):s._e(),t("gitalk",{attrs:{tags:s.tags}})],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var s=this.$createElement,e=this._self._c||s;return e("h2",{attrs:{id:"-background-position-x-"}},[this._v("一）还在用 "),e("strong",[this._v("background-position-x")]),this._v(" 吗")])},function(){var s=this.$createElement,e=this._self._c||s;return e("blockquote",[e("p",[e("strong",[this._v(" 4.6 2D 位置")]),this._v("\n[强制] 必须同时给出水平和垂直方向的位置。")])])},function(){var s=this.$createElement,e=this._self._c||s;return e("li",[e("p",[this._v("还有些东西，当时写到注释中了，忘了。。")])])}]};e.a=i},eOsw:function(s,e,t){"use strict";var a={title:"近来在Firefox上遇到的一些坑",description:"近来在Firefox上遇到的一些坑",keywords:"原创,开发心得",pathname:"problems-with-firefox",translation:null,create_time:"2016-03-12",prev:{title:"react-native 开发 App 手记",pathname:"app-with-react-native"},next:{title:"Chrome和Firefox下的网页截图",pathname:"screen-shot-upload"}};e.a={head:function(){return{title:a.title,meta:[{name:"keywords",content:a.keywords||""},{name:"description",content:a.description}]}},data:function(){return{post:a,post_url:this.$config.site_url+"/post/"+a.pathname,tags:a.tags}},mounted:function(){this.$fixCode()}}},wiVi:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("eOsw"),i=t("0N4L"),r=t("VU/8")(a.a,i.a,!1,null,null,null);r.options.__file="pages/post/problems-with-firefox.vue",e.default=r.exports}});