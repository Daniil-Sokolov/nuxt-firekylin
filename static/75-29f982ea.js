webpackJsonp([75],{"3J53":function(s,a,t){"use strict";var e={title:"聊聊 JavaScript Date 对象",description:"闲谈 JavaScript 日期",keywords:"原创,JavaScript",pathname:"date-in-javascript",translation:null,create_time:"2016-08-31",prev:{title:"[译] HTTP 推送",pathname:"being-pushy"},next:{title:"[译] 渐进增强的键盘导航",pathname:"better-keyboard-navigation-with-progressive-enhancement"}};a.a={head:function(){return{title:e.title,meta:[{name:"keywords",content:e.keywords||""},{name:"description",content:e.description}]}},data:function(){return{post:e,post_url:this.$config.site_url+"/post/"+e.pathname,tags:e.tags}},mounted:function(){this.$fixCode()}}},"8Cku":function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=t("3J53"),n=t("frQB"),i=t("VU/8")(e.a,n.a,!1,null,null,null);i.options.__file="pages/post/date-in-javascript.vue",a.default=i.exports},frQB:function(s,a,t){"use strict";var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{attrs:{id:"page-post"}},[t("article",{staticClass:"post detail"},[t("div",{staticClass:"meta"},[t("div",{staticClass:"date"},[s._v(s._s(s.post.create_time))])]),t("h1",{staticClass:"title"},[s._v(s._s(s.post.title))]),t("div",{staticClass:"entry-content"},[s.post.translation?t("blockquote",[t("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s._v("\n        原文作者: "),t("a",{attrs:{href:s.post.translation.social,target:"_blank"}},[s._v(s._s(s.post.translation.author))]),t("br"),s._v("\n        原文地址: "),t("a",{attrs:{href:s.post.translation.from}},[s._v(s._s(s.post.translation.from))]),t("br"),s._v("\n        译文地址: "),t("a",{attrs:{href:s.post_url}},[s._v(s._s(s.post_url))]),t("br"),s._v("\n        本文由 "),t("a",{attrs:{href:this.$config.site_url}},[s._v(s._s(this.$config.site_owner))]),s._v(" 翻译，转载请保留此声明。"),t("br"),s._v("\n        著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。\n        ")])]):s._e(),t("h2",{attrs:{id:"-"}},[s._v("时间的发现")]),t("p",[s._v("日常生活中，各种形式的时间字符到处都是。")]),t("p",[s._v("时间观念的产生，时间单位、计时工具的发明，给人类带来的变化实在一言难尽。")]),t("p",[s._v("今天就来谈谈日期那些事儿。一起来看看 JavaScript 中的日期对象 Date。")]),t("h2",{attrs:{id:"date-"}},[s._v("Date 对象")]),t("p",[s._v("和其他对象如 Math、RegExp 等一样，Date 对象是 JavaScript 语言中的内建（build-in）对象。在工作中，Date 对象有着许多重要的应用。")]),t("p",[s._v("创建一个 Date 实例很简单，下面简单回顾下常用的方法。")]),s._m(0),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20now%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EDate%3C%2Fspan%3E()%3B</code>')]),t("p",[s._v("注意，JavaScript 中的当前时间与操作系统相关。因此，在重要的 Web 应用中，应该会避免使用该时间，更可靠的方式是操作前先请求服务器获取时间，或者将工作直接交给服务端。")]),s._m(1),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-javascript\">%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%202016-08-31%2023%3A27%3A22%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EDate%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-number%22%3E2016%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E7%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E31%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E23%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E27%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E22%3C%2Fspan%3E)%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EDate%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-string%22%3E'2016-08-31%2023%3A27%3A22'%3C%2Fspan%3E)%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EDate%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-string%22%3E'2016%2F08%2F31%2023%3A27%3A22'%3C%2Fspan%3E)%3B</code>")]),t("p",[s._v("上面只是最常见的几种形式。实际应用中会发现，Date 对象非常强大，能够解析多种格式的字符串。本文暂且略过不表。")]),t("p",[s._v("值得一提的是，上面 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("new Date('2016-08-31')")]),s._v(" 这种形式应当尽量避免。如果没有记错，iOS 系统环境中，这种格式会报错，遇到该格式的字符串时，应该一律先进行替换操作：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-javascript\">%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20string%20%3D%20%3Cspan%20class%3D%22hljs-string%22%3E'2016-08-31'%3C%2Fspan%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20date%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EDate%3C%2Fspan%3E(string.replace(%3Cspan%20class%3D%22hljs-regexp%22%3E%2F-%2Fg%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-string%22%3E'%2F'%3C%2Fspan%3E))%3B</code>")]),s._m(2),t("p",[s._v("Date 对象提供了一系列 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("set")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("get")]),s._v(" 方法供我们使用。方法名也很语义化。在此略过。")]),t("h2",{attrs:{id:"-"}},[s._v("眼花缭乱的时间字符串")]),t("p",[s._v("在工作中，常常会接触各种不同格式的时间字符串。除了那些格式整齐，地球人几乎都能读懂的之外，还有一些不那么为普通人所了解的格式。")]),t("p",[s._v("与此同时，细心的同学可能注意到，在控制台中输入一个 Date 变量的引用，按下 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v(".")]),s._v(" 的那一刻，会有一大堆属性、方法提示。除去 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("set")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("get")]),s._v(" 这一类方法之外，还有一堆 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("to***String")]),s._v(" 形式的方法。相信多数同学用得不多。")]),t("p",[s._v("往前数月，我也不太关注这些东西。但后来某次，后端返回的数据总是随机地有一些数据是 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("2016-08-31T15:44:30.244Z")]),s._v(" 这种格式的。当时不明白其含义，只能自作聪明地拿正则表达式来匹配，作为容错方案。")]),t("p",[s._v("接下来，自己的一个小爬虫工具想要支持 rss 解析。拿到的不少日期数据是 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Thu Aug 25 2016 01:31:50 GMT+0800 (CST)")]),s._v(" 这种格式的。")]),t("p",[s._v("由此我开始试着去了解这些看上去奇奇怪怪的日期格式。")]),t("p",[s._v("接下来，主要通过 JavaScript 中的 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("to***String")]),s._v(" 系列方法，了解这些时间字符串。")]),t("h2",{attrs:{id:"-to-string-"}},[s._v("一堆 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("to***String")]),s._v(" 方法")]),t("p",[s._v("首先，让我们写个简单的脚本，看看 Date 对象到底有哪些 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("to***String")]),s._v(" 方法。")]),t("p",[s._v("注意，这些方法是无法通过 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("for in")]),s._v(" 循环取到的，也就是说，默认是 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("enumerable: false")]),s._v("。")]),t("p",[s._v("使用 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Object.getOwnPropertyDescriptor")]),s._v(" 方法可以查看这些细节。")]),t("p",[s._v("以 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toString")]),s._v(" 为例，一起看下：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-javascript\">%3Cspan%20class%3D%22hljs-built_in%22%3EObject%3C%2Fspan%3E.getOwnPropertyDescriptor(%3Cspan%20class%3D%22hljs-built_in%22%3EDate%3C%2Fspan%3E.prototype%2C%20%3Cspan%20class%3D%22hljs-string%22%3E'toString'%3C%2Fspan%3E)%3B</code>")]),t("p",[s._v("结果如下：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ewritable%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C%2Fspan%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eenumerable%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C%2Fspan%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Econfigurable%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C%2Fspan%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EtoString%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3E%3C%2Fspan%3E)%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-title%22%3E__proto__%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-title%22%3EObject%3C%2Fspan%3E%0A%7D%3C%2Fspan%3E</code>')]),t("p",[s._v("既然不能通过 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("for in")]),s._v(" 遍历，那还有没有其他办法呢？")]),t("p",[s._v("有的。"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Object.getOwnPropertyNames")]),s._v(" 这个方法可以帮我们拿到对象自身属性的 key 值。")]),t("p",[s._v("（写到这里，虽然看上去很啰嗦，但我总觉得有必要把细节记下来。万一下次又记不清了呢。）")]),t("p",[s._v("接着，就可以愉快地取到所有的 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("to***String")]),s._v(" 方法名了。")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C%2Fspan%3E%20proto%20%3D%20%3Cspan%20class%3D%22hljs-built_in%22%3EDate%3C%2Fspan%3E.prototype%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C%2Fspan%3E%20names%20%3D%20%3Cspan%20class%3D%22hljs-built_in%22%3EObject%3C%2Fspan%3E.getOwnPropertyNames(proto).filter(%3Cspan%20class%3D%22hljs-function%22%3E(%3Cspan%20class%3D%22hljs-params%22%3Ename%3C%2Fspan%3E)%20%3D%26gt%3B%3C%2Fspan%3E%20%2F%5Eto%5Ba-zA-Z%5D*%3Cspan%20class%3D%22hljs-built_in%22%3EString%3C%2Fspan%3E%2F.test(name))%3B%0A%3Cspan%20class%3D%22hljs-built_in%22%3Econsole%3C%2Fspan%3E.log(names)%3B</code>')]),t("p",[s._v("一共有 9 个，如下：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-json">%5B%20%3Cspan%20class%3D%22hljs-string%22%3E%22toString%22%3C%2Fspan%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22toDateString%22%3C%2Fspan%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22toTimeString%22%3C%2Fspan%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22toISOString%22%3C%2Fspan%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22toUTCString%22%3C%2Fspan%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22toGMTString%22%3C%2Fspan%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22toLocaleString%22%3C%2Fspan%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22toLocaleDateString%22%3C%2Fspan%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-string%22%3E%22toLocaleTimeString%22%3C%2Fspan%3E%0A%5D</code>')]),t("p",[s._v("看名称大概也能知道，这 9 个方法可以分为三组。下面按组来细看。")]),t("h2",{attrs:{id:"tostring-"}},[s._v("toString 系列")]),t("p",[s._v("接下来，我们所有的实验，统一使用一个 Date 实例。需要说明的，我所使用的是 Chrome 52，所有实验都是在控制台中进行的。")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%202016-09-02%2010%3A49%3A22%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20date%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EDate%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-number%22%3E2016%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E8%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E10%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E49%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E22%3C%2Fspan%3E)%3B</code>')]),t("p",[s._v("一并展示出所有结果吧，就是这么简单粗暴。")]),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01788a97c49c40d8e7.png",expression:"`https://p.ssl.qhimg.com/t01788a97c49c40d8e7.png`"}],attrs:{alt:"toString"}})]),t("p",[s._v("注意到，"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("date + ''")]),s._v(" 和 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("date.toString()")]),s._v(" 的结果是一样的。这不是偶然，它们实际上是等价的。这涉及到 JavaScript 中的"),t("strong",[s._v("隐式类型转换")]),s._v("。")]),t("p",[s._v("根据 ECMA-262 标准，"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toString()")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toDateString()")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toTimeString()")]),s._v(" 执行的结果，是实现相关的（implementation-dependent）。")]),t("p",[s._v("以 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toDateString()")]),s._v(" 为例，看看标准中的是如何说的：")]),s._m(3),t("p",[s._v("再来看看结果中的 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("GMT+0800")]),s._v(" 是什么鬼。所谓 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("GMT")]),s._v("，是英文 “Greenwich Mean Time” 的缩写，完整翻译过来就是“格林尼治平时”，也就是通常所说的“格林尼治时间”，即位于英国伦敦郊区的皇家格林尼治天文台的标准时间。详细信息可以查看"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Greenwich_Mean_Time",target:"_blank"}},[s._v("维基百科")]),s._v("。")]),s._m(4),t("p",[s._v("比如，此刻是北京时间 2016 年 9 月 2 日 13:07:22，也就是 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Fri Sep 02 2016 13:07:22 GMT+0800")]),s._v("，那么此时，格林尼治时区的时间就应该是 05:07:22。不过，从"),t("a",{attrs:{href:"http://www.timeanddate.com/time/zones/bst",target:"_blank"}},[s._v("世界时钟")]),s._v("中此时英国伦敦的时间是 06:07:22。为何会有此差别？因为 9 月 2 号的时候，伦敦使用的是 BST 时区，即 British Summer Time，也就是众所周知的“夏令时”。")]),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01a2428498bf539feb.png",expression:"`https://p.ssl.qhimg.com/t01a2428498bf539feb.png`"}],attrs:{alt:"时区图"}})]),s._m(5),t("p",[s._v("不过，上面仅仅是提到格林尼治时间。并不意味着真正用到了它。JavaScript 中实际使用到的，还是 UTC 时间。")]),t("h2",{attrs:{id:"tolocalestring-"}},[s._v("toLocaleString 系列")]),t("p",[s._v("执行结果如下图所示：")]),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01b54c2a69220c814e.png",expression:"`https://p.ssl.qhimg.com/t01b54c2a69220c814e.png`"}],attrs:{alt:"toLocaleString 系列"}})]),t("p",[s._v('也很好理解。这三个方法，也是和实现相关的。[标准]中有一句很关键，“与宿主环境当前区域设置的约定保持一致”（"corresponds to the conventions of the host environment\'s current locale."）。')]),t("h2",{attrs:{id:"-"}},[s._v("标准时间系列")]),t("p",[s._v("接着看 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toISOString()")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toUTCString()")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toGMTString()")]),s._v(" 三个方法。按照惯例，先看结果：")]),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t017844b50bac5b0ca6.png",expression:"`https://p.ssl.qhimg.com/t017844b50bac5b0ca6.png`"}],attrs:{alt:"toISOString() 与 toUTCString()、toGMTString()"}})]),t("p",[s._v("这些年，想必各种商业广告已经帮我们普及了 ISO 的概念，八九岁的时候就知道，某某品牌的摩托车号称通过 ISO-2001 标准。ISO，全称是国际标准化组织（International Organization for Standardization），负责制定全世界工商业国际标准的国际标准。")]),t("p",[t("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/7.0/index.html#sec-date-time-string-format",target:"_blank"}},[s._v("JavaScript 标准")]),s._v("定义的时间交换格式（interchange format），是基于 ISO 8601 扩展格式的简化版本，格式是 “YYYY-MM-DDTHH:mm:ss.sssZ”。"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toISOString()")]),s._v(" 返回的就是这样的字符串。")]),t("p",[t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("T")]),s._v(" 只是一个字面量，标志着接下来的内容是时间（相对于前面的日期而言）。")]),t("p",[t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Z")]),s._v(" 标志着时差。直接使用 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Z")]),s._v("，意味着我们使用的是标准时间（UTC）。")]),t("p",[s._v("在我们的例子中，"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("date.toISOString()")]),s._v(" 的结果是 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("2016-09-02T02:49:22.000Z")]),s._v("，可以看到，和我们的实际时间 10:49:22 相差了 8 小时。")]),t("p",[s._v("当然，"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Z")]),s._v(" 的位置上，还可以使用"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("+HH:mm")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("-HH:mm")]),s._v(" 的形式。这样就是直接指定与标准时间的时差了。")]),t("p",[s._v("例如，"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("2016-09-02T02:49:22.000Z")]),s._v(" 作为标准时间，相当于北京时间的 10:49:22，换一种形式就是 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("2016-09-02T10:49:22.000+08:00")]),s._v("。 ")]),s._m(6),s._m(7),t("p",[s._v("我们注意到，"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toUTCString()")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toGMTString()")]),s._v(" 两者返回的字符串是一样的。实际上，这还是和具体实现有关。")]),s._m(8),s._m(9),t("p",[t("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/7.0/index.html#sec-date-constructor",target:"_blank"}},[s._v("ES 2016")]),s._v(" 中提到，"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toGMTString()")]),s._v(" 主要是用来满足旧代码兼容性的，新代码中推荐使用 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toUTCString()")]),s._v("。标准还提到这么一句：")]),s._m(10),t("p",[s._v("也就是说，在 JavaScript 中，"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toUTCString()")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("toGMTString()")]),s._v(" 这俩是一样的。")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">assertEqual(date.toGMTString%2C%20date%2CtoUTCString)%3B</code>')]),t("h2",{attrs:{id:"-"}},[s._v("日期提取工具")]),t("p",[s._v("从字符串中提取时间，已经有很多工具，还相当智能，英文不必说，中文的“前天”“五天前”“上周三”之类的不在话下。")]),t("p",[s._v("临时应急，也仅仅是为了辨别一些常用的日期字符串，我也写了一个小工具，主要是提取日期。")]),t("p",[s._v("关键的正则表达式如下：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-javascript\">%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%202012%20%E5%B9%B4%202%20%E6%9C%88%2028%20%E6%97%A5%3C%2Fspan%3E%0Are_zh%20%20%3D%20%3Cspan%20class%3D%22hljs-regexp%22%3E%2F(%5Cd%7B4%7D)%5Cs*%5B%5Ex00-xff%5D%5Cs*(%5Cd%7B1%2C2%7D)%5Cs*%5B%5Ex00-xff%5D%5Cs*(%5Cd%7B1%2C2%7D)%5Cs*%5B%5Ex00-xff%5D%2F%3C%2Fspan%3E%2C%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%202012-02-28%2C%202012.02.28%2C%202012%2F02%2F28%3C%2Fspan%3E%0Are_ymd%20%3D%20%3Cspan%20class%3D%22hljs-regexp%22%3E%2F%5Cd%7B4%7D(%5B%5C%2F%5C-%5C.%5D)%5Cd%7B1%2C2%7D(%5C1)%5Cd%7B1%2C2%7D%2F%3C%2Fspan%3E%2C%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%2002%2F28%2F2012%20etc.%3C%2Fspan%3E%0Are_mdy%20%3D%20%3Cspan%20class%3D%22hljs-regexp%22%3E%2F%5Cd%7B1%2C2%7D(%5B%5C%2F%5C-%5C.%5D)%5Cd%7B1%2C2%7D(%5C1)%5Cd%7B4%7D%2F%3C%2Fspan%3E%2C%0A%0Are_en%20%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3ERegExp%3C%2Fspan%3E(%5B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20toUTCString()%3A%20%22Tue%2C%2030%20Aug%202016%2003%3A01%3A19%20GMT%22%3C%2Fspan%3E%0A%20%20%20%20%2F(%5Cw%7B%3Cspan%20class%3D%22hljs-number%22%3E3%3C%2Fspan%3E%7D)%2C%20(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%7D)%20(%5Cw%7B%3Cspan%20class%3D%22hljs-number%22%3E3%3C%2Fspan%3E%7D)%20(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E4%3C%2Fspan%3E%7D)%20((%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%7D)%3A(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%7D)%3A(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%7D))%20GMT%2F.source%2C%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20toString()%3A%20%20%22Tue%20Aug%2030%202016%2011%3A02%3A45%20GMT%2B0800%20(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)%22%3C%2Fspan%3E%0A%20%20%20%20%2F(%5Cw%7B%3Cspan%20class%3D%22hljs-number%22%3E3%3C%2Fspan%3E%7D)%20(%5Cw%7B%3Cspan%20class%3D%22hljs-number%22%3E3%3C%2Fspan%3E%7D)%20(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%7D)%20(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E4%3C%2Fspan%3E%7D)%20((%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%7D)%3A(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%7D)%3A(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%7D))%20GMT%5C%2B%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E4%3C%2Fspan%3E%7D%2F.source%2C%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20toISOString()%3A%20%222016-08-30T03%3A01%3A19.543Z%22%3C%2Fspan%3E%0A%20%20%20%20%2F(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E4%3C%2Fspan%3E%7D)-(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%7D)-(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%7D)T((%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%7D)%3A(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%7D)%3A(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%7D))%5C.(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E3%3C%2Fspan%3E%7D)Z%2F.source%2C%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20toDateString()%3A%20%22Tue%20Aug%2030%202016%22%3C%2Fspan%3E%0A%20%20%20%20%2F(%5Cw%7B%3Cspan%20class%3D%22hljs-number%22%3E3%3C%2Fspan%3E%7D)%20(%5Cw%7B%3Cspan%20class%3D%22hljs-number%22%3E3%3C%2Fspan%3E%7D)%20(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%7D)%20(%5Cd%7B%3Cspan%20class%3D%22hljs-number%22%3E4%3C%2Fspan%3E%7D)%2F.source%0A%5D.join(%3Cspan%20class%3D%22hljs-string%22%3E'%7C'%3C%2Fspan%3E)%2C%20%3Cspan%20class%3D%22hljs-string%22%3E'm'%3C%2Fspan%3E)%3B</code>")]),s._m(11),t("h2",{attrs:{id:"-"}},[s._v("参考")]),s._m(12)])]),s.post.prev.title||s.post.next.title?t("nav",{staticClass:"pagination"},[s.post.prev.title?t("nuxt-link",{staticClass:"prev",attrs:{to:"/post/"+s.post.prev.pathname,title:s.post.prev.title}},[s._v("« "+s._s(s.post.prev.title))]):s._e(),s.post.next.title?t("nuxt-link",{staticClass:"next",attrs:{to:"/post/"+s.post.next.pathname,title:s.post.next.title}},[s._v(s._s(s.post.next.title)+" »")]):s._e()],1):s._e(),t("gitalk",{attrs:{tags:s.tags}})],1)};e._withStripped=!0;var n={render:e,staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("strong",[this._v("获取当前时间")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("strong",[this._v("生成时间")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("strong",[this._v("获取或修改更多时间细节")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[this._v("该方法返回一个 String 类型的值。该值是实现相关的，但其目的是以一种简便、便于阅读的形式，展示 Date 实例在当前时区内的“日期”部分。\n—— "),a("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/7.0/index.html#sec-todatestring",target:"_blank"}},[this._v("ECMA-262 7ᵗʰ Edition ")])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("至于“+0800”，则是"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%97%B6%E5%8C%BA",target:"_blank"}},[a("strong",[this._v("时区")])]),this._v("的概念了。这意味着，当前时间与标准时区相差 8 小时。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("像 BST、CST 这些标志，就像上面表格中的“中国标准时间”一样。这些是用来说明时区的，通常用缩写表示，不过这"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%97%B6%E5%8C%BA",target:"_blank"}},[this._v("并不是标准")]),this._v("。CST 正好就是中国标准时间（China Standar Time）的缩写，可以参考 "),a("a",{attrs:{href:"http://www.timeanddate.com/time/zones/cst-china",target:"_blank"}},[this._v("timeanddate")]),this._v(" 这个网站。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("UTC 是“世界标准时间”的简称，又作“协调世界时” “世界协调时间”，英文是 Coordinated Universal Time。下面引用下"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%8D%8F%E8%B0%83%E4%B8%96%E7%95%8C%E6%97%B6",target:"_blank"}},[this._v("维基百科")]),this._v("中的说明：")])},function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[this._v("协调世界时是世界上调节时钟和时间的主要时间标准，它与0度经线的平太阳时相差不超过1秒，并不遵守夏令时。协调世界时是最接近格林尼治标准时间(GMT)的几个替代时间系统之一……\n UTC基于国际原子时，并通过不规则的加入闰秒来抵消地球自转变慢的影响。")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("还是引用"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%A0%BC%E6%9E%97%E5%B0%BC%E6%B2%BB%E5%B9%B3%E6%97%B6",target:"_blank"}},[this._v("维基百科")]),this._v("中的一段，来看看 UTC 时间和格林尼治时间的不同。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[this._v("理论上来说，格林尼治标准时间的正午是指当太阳横穿格林尼治子午线时（也就是在格林尼治上空最高点时）的时间。由于地球在它的椭圆轨道里的运动速度不均匀，这个时刻可能与实际的太阳时有误差，最大误差达16分钟。\n由于地球每天的自转是有些不规则的，而且正在缓慢减速，因此格林尼治时间已经不再被作为标准时间使用。现在的标准时间，是由原子钟报时的协调世界时（UTC）。")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[this._v("The function object that is the initial value of  Date.prototype.toGMTString is the same function object that is the initial value of  Date.prototype.toUTCString.")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("详细代码，可见 "),a("a",{attrs:{href:"https://github.com/AngusFu/date-parser",target:"_blank"}},[this._v("Github")]),this._v("。之后有时间，也会考虑加入更智能的识别功能。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"http://www.timeanddate.com/",target:"_blank"}},[this._v("http://www.timeanddate.com/")])]),a("li",[a("a",{attrs:{href:"https://zh.wikipedia.org",target:"_blank"}},[this._v("wikipedia")])]),a("li",[a("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/7.0/index.html",target:"_blank"}},[this._v("ECMAScript® 2016 Language Specification")])]),a("li",[a("a",{attrs:{href:"http://wwp.greenwichmeantime.com/",target:"_blank"}},[this._v("http://wwp.greenwichmeantime.com/")])])])}]};a.a=n}});