webpackJsonp([18],{"9p6F":function(s,a,t){"use strict";var n=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{attrs:{id:"page-post"}},[t("article",{staticClass:"post detail"},[t("div",{staticClass:"meta"},[t("div",{staticClass:"date"},[s._v(s._s(s.post.create_time))])]),t("h1",{staticClass:"title"},[s._v(s._s(s.post.title))]),t("div",{staticClass:"entry-content"},[s.post.translation?t("blockquote",[t("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s._v("\n        原文作者: "),t("a",{attrs:{href:s.post.translation.social,target:"_blank"}},[s._v(s._s(s.post.translation.author))]),t("br"),s._v("\n        原文地址: "),t("a",{attrs:{href:s.post.translation.from}},[s._v(s._s(s.post.translation.from))]),t("br"),s._v("\n        译文地址: "),t("a",{attrs:{href:s.post_url}},[s._v(s._s(s.post_url))]),t("br"),s._v("\n        本文由 "),t("a",{attrs:{href:this.$config.site_url}},[s._v(s._s(this.$config.site_owner))]),s._v(" 翻译，转载请保留此声明。"),t("br"),s._v("\n        著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。\n        ")])]):s._e(),t("p",[s._v("又学到了一种水平垂直居中的方法。适用于父级元素只有一个子元素的情况，比如全屏的效果。")]),t("p",[s._v("父级元素：pos-r, w、h设定;")]),t("p",[s._v("子元素：pos-a,w、h设定, t0 b0 l0 r0, m-a。")]),t("p",[s._v("以前只知道 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("margin: 0 auto")]),s._v(" 之类的，从来没想到 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("margin: auto")]),s._v(" 的妙用...孤陋寡闻了...")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-html">%3Cspan%20class%3D%22hljs-meta%22%3E%26lt%3B!DOCTYPE%20html%26gt%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ehtml%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Elang%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22zh-CN%22%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ehead%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Emeta%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Echarset%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22utf-8%22%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Etitle%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3EDocument%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Etitle%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Estyle%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%3Cspan%20class%3D%22css%22%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-selector-class%22%3E.outer%3C%2Fspan%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Eposition%3C%2Fspan%3E%3A%20relative%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ewidth%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E300px%3C%2Fspan%3E%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Eheight%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E300px%3C%2Fspan%3E%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ebackground-color%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E%23f80%3C%2Fspan%3E%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Emargin%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E50px%3C%2Fspan%3E%20auto%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-selector-class%22%3E.inner%3C%2Fspan%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Eposition%3C%2Fspan%3E%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Eheight%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E100px%3C%2Fspan%3E%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ewidth%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E60%25%3C%2Fspan%3E%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Etop%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ebottom%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Eleft%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Eright%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Ebackground-color%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E%23fff%3C%2Fspan%3E%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attribute%22%3Emargin%3C%2Fspan%3E%3A%20auto%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C%2Fspan%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Estyle%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Ehead%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ebody%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eclass%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22outer%22%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eclass%3C%2Fspan%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22inner%22%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3ELorem%20ipsum%20dolor%20sit%20amet.%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Ediv%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Ebody%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%2F%3Cspan%20class%3D%22hljs-name%22%3Ehtml%3C%2Fspan%3E%26gt%3B%3C%2Fspan%3E</code>')]),t("p",[s._v("效果如下：")]),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01e1f23859d1617d51.png",expression:"`https://p.ssl.qhimg.com/t01e1f23859d1617d51.png`"}],attrs:{alt:""}})])])]),s.post.prev.title||s.post.next.title?t("nav",{staticClass:"pagination"},[s.post.prev.title?t("nuxt-link",{staticClass:"prev",attrs:{to:"/post/"+s.post.prev.pathname,title:s.post.prev.title}},[s._v("« "+s._s(s.post.prev.title))]):s._e(),s.post.next.title?t("nuxt-link",{staticClass:"next",attrs:{to:"/post/"+s.post.next.pathname,title:s.post.next.title}},[s._v(s._s(s.post.next.title)+" »")]):s._e()],1):s._e(),t("gitalk",{attrs:{tags:s.tags}})],1)};n._withStripped=!0;var l={render:n,staticRenderFns:[]};a.a=l},gFq9:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("lud1"),l=t("9p6F"),e=t("VU/8")(n.a,l.a,!1,null,null,null);e.options.__file="pages/post/vh-center-layout.vue",a.default=e.exports},lud1:function(s,a,t){"use strict";var n={title:"记一种水平垂直居中的办法",keywords:"原创,CSS",pathname:"vh-center-layout",translation:null,create_time:"2015-04-29",prev:{title:"关于移动端 rem 布局的一些总结",pathname:"about-rem-layout"},next:{title:"某易 2014 校招面试总结",pathname:"xease-campus-2014-note"}};a.a={head:function(){return{title:n.title,meta:[{name:"keywords",content:n.keywords||""},{name:"description",content:n.description}]}},data:function(){return{post:n,post_url:this.$config.site_url+"/post/"+n.pathname,tags:n.tags}},mounted:function(){this.$fixCode()}}}});