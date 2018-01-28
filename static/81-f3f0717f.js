webpackJsonp([81],{"0iwH":function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("qPE2"),l=t("2yww"),e=t("VU/8")(n.a,l.a,!1,null,null,null);e.options.__file="pages/post/better-keyboard-navigation-with-progressive-enhancement.vue",a.default=e.exports},"2yww":function(s,a,t){"use strict";var n=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{attrs:{id:"page-post"}},[t("article",{staticClass:"post detail"},[t("div",{staticClass:"meta"},[t("div",{staticClass:"date"},[s._v(s._s(s.post.create_time))])]),t("h1",{staticClass:"title"},[s._v(s._s(s.post.title))]),t("div",{staticClass:"entry-content"},[s.post.translation?t("blockquote",[t("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s._v("\n        原文作者: "),t("a",{attrs:{href:s.post.translation.social,target:"_blank"}},[s._v(s._s(s.post.translation.author))]),t("br"),s._v("\n        原文地址: "),t("a",{attrs:{href:s.post.translation.from}},[s._v(s._s(s.post.translation.from))]),t("br"),s._v("\n        译文地址: "),t("a",{attrs:{href:s.post_url}},[s._v(s._s(s.post_url))]),t("br"),s._v("\n        本文由 "),t("a",{attrs:{href:this.$config.site_url}},[s._v(s._s(this.$config.site_owner))]),s._v(" 翻译，转载请保留此声明。"),t("br"),s._v("\n        著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。\n        ")])]):s._e(),t("p",[s._v("创建界面时很重要的一点是，要考虑到那些只依赖键盘来使用产品的用户。这对可访问性来说是基本要求，在多数情况下，通过键盘操作访问也并非难事。这意味着首先，也是最重要的，是使用键盘可访问元素进行交互。")]),s._m(0),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01adc9f3ae9a586201.jpg",expression:"`https://p.ssl.qhimg.com/t01adc9f3ae9a586201.jpg`"}],attrs:{alt:"键盘"}})]),s._m(1),t("h2",{attrs:{id:"-"}},[s._v("效果可视化")]),s._m(2),s._m(3),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-html">%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eul%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eli%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ebutton%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E1%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Ebutton%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Eli%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eli%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ebutton%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E2%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Ebutton%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Eli%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eli%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ebutton%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E3%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Ebutton%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Eli%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%E2%80%A6%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eli%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ebutton%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Ebutton%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Eli%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Eul%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E</code>')]),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01f5cf80c24e3e5365.gif",expression:"`https://p.ssl.qhimg.com/t01f5cf80c24e3e5365.gif`"}],attrs:{alt:"在按钮列表中 tab 切换"}})]),t("p",[s._v("使用列表，为我们的元素赋予了层次结构，以及普通浏览器所没有的可访问性技术的导航方式。它还带来很多 HTML 元素，我们可以自己添加样式。通过一点样式，我们可以将其转换为网格，占用更少的垂直空间，容纳更多内容。")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-css">%3Cspan%20class%3D%22hljs-selector-tag%22%3Eul%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-selector-tag%22%3Eli%3C%2Fspan%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Emargin%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Epadding%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Elist-style%3C%2Fspan%3E%3A%20none%3B%0A%7D%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Ebutton%3C%2Fspan%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Eborder%3C%2Fspan%3E%3A%20none%3B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Edisplay%3C%2Fspan%3E%3A%20block%3B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ebackground%3C%2Fspan%3E%3A%20goldenrod%3B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ecolor%3C%2Fspan%3E%3A%20white%3B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ewidth%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E90%25%3C%2Fspan%3E%3B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Eheight%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E30px%3C%2Fspan%3E%3B%20%20%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Emargin%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E5%25%3C%2Fspan%3E%3B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Etransform%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-built_in%22%3Escale%3C%2Fspan%3E(0.8)%3B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Etransition%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E300ms%3C%2Fspan%3E%3B%0A%7D%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Ahover%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-selector-tag%22%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Afocus%3C%2Fspan%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Etransform%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-built_in%22%3Escale%3C%2Fspan%3E(1)%3B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Eoutline%3C%2Fspan%3E%3A%20none%3B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ebackground%3C%2Fspan%3E%3A%20powderblue%3B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ecolor%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E%23333%3C%2Fspan%3E%3B%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Eli%3C%2Fspan%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Efloat%3C%2Fspan%3E%3A%20left%3B%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F*%20%0A%20%20grid%20magic%20by%20%40heydonworks%20%0A%20%20https%3A%2F%2Fcodepen.io%2Fheydon%2Fpen%2Fbcdrl%0A*%2F%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Eli%3C%2Fspan%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ewidth%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-built_in%22%3Ecalc%3C%2Fspan%3E(100%25%20%2F%204)%3B%0A%7D%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Eli%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Anth-child(4n%2B1)%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Anth-last-child(1)%3C%2Fspan%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ewidth%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E100%25%3C%2Fspan%3E%3B%0A%7D%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Eli%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Anth-child(4n%2B1)%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Anth-last-child(1)%3C%2Fspan%3E%20~%20%3Cspan%20class%3D%22hljs-selector-tag%22%3Eli%3C%2Fspan%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ewidth%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E100%25%3C%2Fspan%3E%3B%0A%7D%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Eli%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Anth-child(4n%2B1)%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Anth-last-child(2)%3C%2Fspan%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ewidth%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E50%25%3C%2Fspan%3E%3B%0A%7D%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Eli%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Anth-child(4n%2B1)%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Anth-last-child(2)%3C%2Fspan%3E%20~%20%3Cspan%20class%3D%22hljs-selector-tag%22%3Eli%3C%2Fspan%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ewidth%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E50%25%3C%2Fspan%3E%3B%0A%7D%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Eli%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Anth-child(4n%2B1)%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Anth-last-child(3)%3C%2Fspan%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ewidth%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-built_in%22%3Ecalc%3C%2Fspan%3E(100%25%20%2F%204)%3B%0A%7D%0A%3Cspan%20class%3D%22hljs-selector-tag%22%3Eli%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Anth-child(4n%2B1)%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-selector-pseudo%22%3E%3Anth-last-child(3)%3C%2Fspan%3E%20~%20%3Cspan%20class%3D%22hljs-selector-tag%22%3Eli%3C%2Fspan%3E%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ewidth%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-built_in%22%3Ecalc%3C%2Fspan%3E(100%25%20%2F%204)%3B%0A%7D</code>')]),s._m(4),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t0192466c1b3d4a0744.gif",expression:"`https://p.ssl.qhimg.com/t0192466c1b3d4a0744.gif`"}],attrs:{alt:"网格中一格格地切换"}})]),t("h2",{attrs:{id:"-"}},[s._v("键盘访问的升级 —— 提供快捷方式")]),t("p",[s._v("不过，在访问网格时，通过键盘进行两个方向的移动会不会更好呢？")]),s._m(5),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t0108c1e3e1785dfe95.gif",expression:"`https://p.ssl.qhimg.com/t0108c1e3e1785dfe95.gif`"}],attrs:{alt:"使用鼠标控制方向切换网格访问"}})]),s._m(6),s._m(7),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-html\">%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eul%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22links%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Edata-amount%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%225%22%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Edata-element%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22a%22%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eli%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ea%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ehref%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%23%22%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E1%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Ea%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Eli%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eli%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ea%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ehref%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%23%22%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E2%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Ea%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Eli%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%E2%80%A6%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Eli%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ea%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ehref%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%23%22%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E25%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Ea%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Eli%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Eul%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Esrc%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22gridnav.js%22%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22undefined%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Escript%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Escript%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22actionscript%22%3E%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20linklist%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20Gridnav(%3Cspan%20class%3D%22hljs-string%22%3E'%23links'%3C%2Fspan%3E)%3B%0A%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Escript%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E</code>")]),s._m(8),t("h2",{attrs:{id:"-"}},[s._v("工作原理")]),s._m(9),t("p",[s._v("之后我往回走了一步，意识到如何展示列表并不重要。最终不过是一个列表，我们要访问它而已。甚至不需要访问 DOM，因为我们所做的不过是从一堆按钮或锚点连接中的一个切换到另一个。我们要做的就是：")]),s._m(10),s._m(11),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01fd0f3a12ee84c71c.gif",expression:"`https://p.ssl.qhimg.com/t01fd0f3a12ee84c71c.gif`"}],attrs:{alt:"网格中移动和在坐标系中移动一样"}})]),t("p",[s._v("我们需要跳过的元素数量是由每行的元素数量决定的。向上等同于向前 n 个元素，向下相当于向后 n 个元素。")]),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t017ff0dbc0bb99bb24.png",expression:"`https://p.ssl.qhimg.com/t017ff0dbc0bb99bb24.png`"}],attrs:{alt:"网格移动图解"}})]),t("p",[s._v("使用一些小技巧，完整代码非常简短：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-javascript\">(%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3E%3C%2Fspan%3E)%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20list%20%3D%20%3Cspan%20class%3D%22hljs-built_in%22%3Edocument%3C%2Fspan%3E.querySelector(%3Cspan%20class%3D%22hljs-string%22%3E'ul'%3C%2Fspan%3E)%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20items%20%3D%20list.querySelectorAll(%3Cspan%20class%3D%22hljs-string%22%3E'button'%3C%2Fspan%3E)%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20amount%20%3D%20%3Cspan%20class%3D%22hljs-built_in%22%3EMath%3C%2Fspan%3E.floor(%0A%20%20%20%20list.offsetWidth%20%2F%20list.firstElementChild.offsetWidth%0A%20%20)%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20codes%20%3D%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E38%3C%2Fspan%3E%3A%20-amount%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E40%3C%2Fspan%3E%3A%20amount%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E39%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E37%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E-1%3C%2Fspan%3E%0A%20%20%7D%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Efor%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20i%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%20i%20%26lt%3B%20items.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20items%5Bi%5D.index%20%3D%20i%3B%0A%20%20%7D%0A%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3Ehandlekeys%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Eev%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20keycode%20%3D%20ev.keyCode%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%20(codes%5Bkeycode%5D)%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20t%20%3D%20ev.target%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%20(t.index%20!%3D%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Eundefined%3C%2Fspan%3E)%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%20(items%5Bt.index%20%2B%20codes%5Bkeycode%5D%5D)%20%7B%0A%20%20%20%20%20%20%20%20%20%20items%5Bt.index%20%2B%20codes%5Bkeycode%5D%5D.focus()%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20list.addEventListener(%3Cspan%20class%3D%22hljs-string%22%3E'keyup'%3C%2Fspan%3E%2C%20handlekeys)%3B%0A%7D)()%3B</code>")]),t("p",[s._v("这里发生了什么？")]),t("p",[s._v("首先我们获取到了列表元素，并缓存所有可通过键盘访问的元素：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-javascript\">%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20list%20%3D%20%3Cspan%20class%3D%22hljs-built_in%22%3Edocument%3C%2Fspan%3E.querySelector(%3Cspan%20class%3D%22hljs-string%22%3E'ul'%3C%2Fspan%3E)%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20items%20%3D%20list.querySelectorAll(%3Cspan%20class%3D%22hljs-string%22%3E'button'%3C%2Fspan%3E)%3B</code>")]),t("p",[s._v("计算每次上下移动需要跳过的元素数量，将列表的宽度除以列表第一个子元素（本例中是 LI）的宽度即可：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20amount%20%3D%20%3Cspan%20class%3D%22hljs-built_in%22%3EMath%3C%2Fspan%3E.floor(%0A%20%20%20%20list.offsetWidth%20%2F%20list.firstElementChild.offsetWidth%0A%20%20)%3B</code>')]),t("p",[s._v("相较于 switch 语句或者大量的 if 判断，我更乐意使用查找表。在本例总共，查找表名字是 codes。向上键值为 38，向下 40，向左 37，向右 39。假如我们拿到了 codes[37]，值为 -1，也就是我们要在列表中移动的数量：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20codes%20%3D%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E38%3C%2Fspan%3E%3A%20-amount%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E40%3C%2Fspan%3E%3A%20amount%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E39%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E37%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E-1%3C%2Fspan%3E%0A%20%20%7D%3B</code>')]),t("p",[s._v("可以使用 event.target 获取按下键盘时列表中的选中元素，但我们不知道它在列表中的位置。为避免重复遍历列表，一次性遍历所有按钮，将它们在列表中的索引存储在按钮自身的 index 属性中。")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Efor%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20i%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%20i%20%26lt%3B%20items.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20items%5Bi%5D.index%20%3D%20i%3B%0A%20%20%7D</code>')]),t("p",[s._v("handlekeys() 完成剩余工作。读取所按按键的键值，然后到 codes 中查找。所以，我们只针对方向键做出响应。接着获取当前的元素，检查其是否有 index 属性。如果有，则检查我们将要移到的位置是否有元素存在。如果元素存在，则获得焦点。")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%20%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3Ehandlekeys%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Eev%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20keycode%20%3D%20ev.keyCode%3B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%20(codes%5Bkeycode%5D)%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20t%20%3D%20ev.target%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%20(t.index%20!%3D%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Eundefined%3C%2Fspan%3E)%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%20(items%5Bt.index%20%2B%20codes%5Bkeycode%5D%5D)%20%7B%0A%20%20%20%20%20%20%20%20%20%20items%5Bt.index%20%2B%20codes%5Bkeycode%5D%5D.focus()%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D</code>')]),t("p",[s._v("给列表绑定一个 keyup 事件监听器，搞定 :)")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-javascript\">%20%20list.addEventListener(%3Cspan%20class%3D%22hljs-string%22%3E'keyup'%3C%2Fspan%3E%2C%20handlekeys)%3B</code>")]),s._m(12),t("p",[s._v("视频在最后的代码部分有点 bug，因为我没将 count 属性和 undefined 对比，所以在第一个元素上，键盘功能没法正常工作（0 是 falsy）。")])])]),s.post.prev.title||s.post.next.title?t("nav",{staticClass:"pagination"},[s.post.prev.title?t("nuxt-link",{staticClass:"prev",attrs:{to:"/post/"+s.post.prev.pathname,title:s.post.prev.title}},[s._v("« "+s._s(s.post.prev.title))]):s._e(),s.post.next.title?t("nuxt-link",{staticClass:"next",attrs:{to:"/post/"+s.post.next.pathname,title:s.post.next.title}},[s._v(s._s(s.post.next.title)+" »")]):s._e()],1):s._e(),t("gitalk",{attrs:{tags:s.tags}})],1)};n._withStripped=!0;var l={render:n,staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[a("p",[this._v("如果希望用户跳转到其他地方，使用带有有效的 href 属性的锚点连接")])]),a("li",[a("p",[this._v("如果希望用户执行你自己的代码，并在当前文档中停留，使用按钮")])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("通过"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets",target:"_blank"}},[this._v("流动 tabIndex 技术")]),this._v("几乎可以使所有内容都能通过键盘访问，不过，既然已经有 HTML 元素可以做同样的事情，又何必再麻烦呢。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("不过，使用恰当的元素并不那么简单；用户键盘在元素集合中所处的位置，也要显眼一些。给激活的元素加上轮廓（outline），浏览器解决了这个问题。这虽然超有用，但却是一些人的眼中钉，他们希望由自己控制所有交互的视觉展现。在 CSS 中将 outline 属性设置为 none，就能移除这个视觉辅助功能；不过这会带来"),a("a",{attrs:{href:"http://www.outlinenone.com/",target:"_blank"}},[this._v("不小的可访问性问题")]),this._v("，除非你提供一个别的替代。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("使用最显眼的 HTML 元素；加上一些 CSS，确保除 hover 之外 focus 状态同样也被定义。这样就可以使用户在列表中的一个个项目间，轻松地通过 tab 来切换了。Shift + Tab 允许回退。可以看下 "),a("a",{attrs:{href:"http://jsbin.com/ronuzis",target:"_blank"}},[this._v("demo")]),this._v("，HTML 挺简单粗暴的。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("结果"),a("a",{attrs:{href:"http://output.jsbin.com/cujomeq/",target:"_blank"}},[this._v("看起来非常棒")]),this._v("，在查看列表的过程中，我们能清楚地看到自己所处的位置。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("使用一点 JavaScript 做渐进增强，"),a("a",{attrs:{href:"http://jsbin.com/mafeko/",target:"_blank"}},[this._v("我们做到了")]),this._v("，可以使用鼠标或方向键访问网格。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("不过记着，这仅仅只是一个"),a("strong",[this._v("增强")]),this._v("。假设 JavaScript 因为各种可能的原因执行失败，依然可以通过 tab 来访问列表，我们失去的只是便利，但至少还有可用的界面。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("我将这个打包成了一个小巧、无依赖的开源 JavaScript 项目 "),a("a",{attrs:{href:"https://github.com/codepo8/gridnav",target:"_blank"}},[this._v("gridnav")]),this._v("，可以在 "),a("a",{attrs:{href:"https://codepo8.github.io/gridnav",target:"_blank"}},[this._v("GitHub")]),this._v(" 上获取代码。你要做的就是调用脚本，传给它一个选择器以获取元素列表。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("通过列表元素的 data- 属性，可以自己定义每行元素的数量以及键盘可访问的元素。这些是可选的，但设置之后会让代码更快，出错可能性更小。"),a("a",{attrs:{href:"https://github.com/codepo8/gridnav/blob/master/README.md",target:"_blank"}},[this._v("README")]),this._v(" 文件更详细地解释了如何使用。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("开始考虑如何做的时候，像任何开发者一样，抓到了最复杂的方式。我以为，需要对父节点、兄弟节点的大量定位比较，使用上 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect",target:"_blank"}},[this._v("getBoundingClientRect")]),this._v("，进行大量的 DOM 访问。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("ol",[a("li",[a("p",[this._v("找到当前所在元素（"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/target",target:"_blank"}},[this._v("event.target")]),this._v("）。")])]),a("li",[a("p",[this._v("获取按下的键。")])]),a("li",[a("p",[this._v("根据键向前向后移动，或跳过一些元素到下一行。")])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("就像这样（"),a("a",{attrs:{href:"https://codepo8.github.io/gridnav/tutorialfiles/demo-to-inline.html",target:"_blank"}},[this._v("点击这里试试看")]),this._v("）：")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("如果你想看真实效果，这有一个"),a("a",{attrs:{href:"https://www.youtube.com/watch?v=zc420bXDqWk",target:"_blank"}},[this._v("讲述各个细节的快速视频教程")]),this._v("。")])}]};a.a=l},qPE2:function(s,a,t){"use strict";var n={title:"[译] 渐进增强的键盘导航",description:"better-keyboard-navigation-with-progressive-enhancement/",keywords:"翻译,用户体验,可用性",pathname:"better-keyboard-navigation-with-progressive-enhancement",translation:{author:"@codepo8",social:"https://twitter.com/codepo8",from:"https://www.christianheilmann.com/2016/08/15/better-keyboard-navigation-with-progressive-enhancement/"},create_time:"2016-08-30",prev:{title:"聊聊 JavaScript Date 对象",pathname:"date-in-javascript"},next:{title:"[译] Fetch 请求的本地缓存",pathname:"cache-fetched-ajax-requests"}};a.a={head:function(){return{title:n.title,meta:[{name:"keywords",content:n.keywords||""},{name:"description",content:n.description}]}},data:function(){return{post:n,post_url:this.$config.site_url+"/post/"+n.pathname,tags:n.tags}},mounted:function(){this.$fixCode()}}}});