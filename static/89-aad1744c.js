webpackJsonp([89],{ET0r:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=t("z36p"),n=t("pGjd"),E=t("VU/8")(e.a,n.a,!1,null,null,null);E.options.__file="pages/post/accessible-modal.vue",a.default=E.exports},pGjd:function(s,a,t){"use strict";var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{attrs:{id:"page-post"}},[t("article",{staticClass:"post detail"},[t("div",{staticClass:"meta"},[t("div",{staticClass:"date"},[s._v(s._s(s.post.create_time))])]),t("h1",{staticClass:"title"},[s._v(s._s(s.post.title))]),t("div",{staticClass:"entry-content"},[s.post.translation?t("blockquote",[t("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s._v("\n        原文作者: "),t("a",{attrs:{href:s.post.translation.social,target:"_blank"}},[s._v(s._s(s.post.translation.author))]),t("br"),s._v("\n        原文地址: "),t("a",{attrs:{href:s.post.translation.from}},[s._v(s._s(s.post.translation.from))]),t("br"),s._v("\n        译文地址: "),t("a",{attrs:{href:s.post_url}},[s._v(s._s(s.post_url))]),t("br"),s._v("\n        本文由 "),t("a",{attrs:{href:this.$config.site_url}},[s._v(s._s(this.$config.site_owner))]),s._v(" 翻译，转载请保留此声明。"),t("br"),s._v("\n        著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。\n        ")])]):s._e(),t("h2",{attrs:{id:"-"}},[s._v("问题提出")]),t("p",[s._v("需要说明的是，题目中所说的 Modal，指的是所有由前端开发者自定义的对话框，如通常用到的 Alert、Prompt、Confirm 等等，经常伴随着一个半透明的灰黑色全局 mask。")]),t("p",[s._v("事情源自某天使用某网站的页面，出现一个自定义的 Comfirm，习惯性按下回车确认，等了很久也不见弹出层关闭。于是很绝望。继而发现，真不是这一个网站的问题。")]),t("p",[s._v("看看一般浏览器原生的 alert、prompt、confirm 可以发现，它们基本上都提供默认操作项（eg.确认/取消），通过回车键可以直接完成。传统软件如 PhotoShop 也是如此，否则真不知那些无需鼠标的 PS 大神是怎样练出来的。然而不少自定义的插件，却并未提供这样的功能，往往不得不将手挪到鼠标或触摸板上操作，极其不便。")]),t("p",[s._v("主要存在两个方面的问题，一是根本无法直接通过键盘操作对话框；二是虽然可以操作，但视觉提示并不明显；三是整个应用对焦点的控制不够，容易导致成本可能极高误操作。下面先简单谈谈这几个问题，然后结合实际例子说明。")]),t("h2",{attrs:{id:"-"}},[s._v("键盘、鼠标切换成本")]),t("p",[s._v("先谈第一个问题。键盘、鼠标之间的切换成本应该是很高的，尤其是当应用响应与用户心理预期不符时，造成的焦虑感或挫败感很影响用户体验。")]),t("p",[s._v("因此在使用弹出 Modal 时，需要根据业务场景，设置一个默认选项（尤其是确认、取消、提交等操作），用户通过回车键或鼠标点击就可以轻松完成任务。不过，另外一种更好的方式是提供 Tab 和 (Shift + Tab) 两种操作，通过键盘可以自由地在弹出层不同选项之间按照顺序切换。")]),t("h2",{attrs:{id:"-"}},[s._v("明确的焦点提示")]),t("p",[s._v("接着转到第二个，视觉提示的问题。没有明确是视觉提示，会造成用户的疑惑。")]),t("p",[s._v("有默认选项的时候，无论是通过闪动的光标、背景色的变化，还是边框、outline 等形式，都需要明确提示用户，Modal 弹出时默认操作项是什么。而当用户使用键盘操作，焦点发生变化后，当前焦点在哪一项上，必须给出明确的视觉提示，否则极容易带来困难，甚至误操作。")]),t("h2",{attrs:{id:"-"}},[s._v("应用对焦点的控制")]),t("p",[s._v("第三个问题实际是第二个问题的延续。前面提到焦点的视觉提示问题，其实还有一种可能性，可能导致严重后果，这就是用户通过 Tab 操作，将焦点移动到弹出层 mask 背后的应用中。")]),t("p",[s._v("这时候，一方面没有给出清晰的提示，一方面没有对焦点进行很好的控制，万一焦点在一个敏感位置（如一个外部跳转链接），按下回车键，这时候页面将刷新，用户此前的数据面临荡然无存的境地。脑洞再大一点，万一 mask 背后获得焦点的是巨额交易乃至核按钮（233333），那么恭喜你，攻城狮生涯就此结束。")]),t("p",[s._v("我们知道，当网页弹出原生 alert 时，整个页面其他部分处于不可操作状态。使用类似的自定义组件替代这些功能时，纵然我们不能阻塞页面其他所有部分，但也得采取一定的控制，防止意外发生，最简便的方法便是将 Tab 的控制权掌握在开发者手中。 ")]),t("p",[s._v("当然，相比于第三点，前两点应该是必须项，第三项可以算是加分项，在一些普通应用中不实现影响也不大。")]),t("h2",{attrs:{id:"-"}},[s._v("举栗子")]),t("p",[s._v("我们来看下一些实现。")]),t("p",[s._v("首先是 Github 的 Fork。如图所示：")]),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://ogjiybger.qnssl.com/github.jpg",expression:"`https://ogjiybger.qnssl.com/github.jpg`"}],attrs:{alt:"Github Fork"}})]),t("p",[s._v("首先 fork 操作不提供默认选项。但使用 Tab 和 (Shift + Tab) 时，焦点只会在整个弹出层中用紫色框线标出的四个部分中依次切换。回车键按下时，则会 fork 到相应账号，或者取消操作、关闭弹出层。")]),s._m(0),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://ogjiybger.qnssl.com/sweet-alert.jpg",expression:"`https://ogjiybger.qnssl.com/sweet-alert.jpg`"}],attrs:{alt:"SweetAlert"}})]),t("p",[s._v("Confirm 弹出后，默认选项是右边的 “Yes, delete it!”，点击回车键，就会产生确认反馈。通过 Tab 操作几次发现，整个页面的焦点，只能够在图中两个按钮之间切换。同时仔细观察还能，获得焦点状态（:focus）的按钮，会有一个不太容易察觉的 box-shadow。")]),s._m(1),t("p",[s._v("先说结果，嗯，有提供默认选项，切换到不同选项时，也会有视觉提示（“取消”按钮的颜色和边框色会变，“确认”按钮背景亮度有明显变化）。然而有两点做得还不够：第一，无法通过 Tab 轻易切换到“❎”关闭按钮；第二点，也是最致命的是，根本就没有获取到 Tab 的控制权，以至于多按几次 Tab 然后回车，页面跳到主页，而弹框依然存在（如图所示）。")]),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://ogjiybger.qnssl.com/element.jpg",expression:"`https://ogjiybger.qnssl.com/element.jpg`"}],attrs:{alt:"Element"}})]),s._m(2),t("h2",{attrs:{id:"-"}},[s._v("如何实现控制")]),t("p",[s._v("一开始我想到了 tabIndex 这个属性。但这货控制起来，十分不方便，在本文场景中使用它，简直是惹火烧身。")]),s._m(3),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-javascript\">%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20%24%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E(%3Cspan%20class%3D%22hljs-params%22%3Esel%3C%2Fspan%3E)%20%3D%26gt%3B%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3Edocument%3C%2Fspan%3E.querySelector(sel)%3B%0A%0A%24(%3Cspan%20class%3D%22hljs-string%22%3E'%23js-show-alert'%3C%2Fspan%3E).addEventListener(%3Cspan%20class%3D%22hljs-string%22%3E'click'%3C%2Fspan%3E%2C%20()%20%3D%26gt%3B%20%7B%0A%20%20%24(%3Cspan%20class%3D%22hljs-string%22%3E'%23js-prompt'%3C%2Fspan%3E).style.display%20%3D%20%3Cspan%20class%3D%22hljs-string%22%3E'block'%3C%2Fspan%3E%3B%0A%20%20%24(%3Cspan%20class%3D%22hljs-string%22%3E'%23js-confirm'%3C%2Fspan%3E).focus()%3B%0A%7D)%3B%0A%0A%24(%3Cspan%20class%3D%22hljs-string%22%3E'%23js-cancel'%3C%2Fspan%3E).addEventListener(%3Cspan%20class%3D%22hljs-string%22%3E'click'%3C%2Fspan%3E%2C%20()%20%3D%26gt%3B%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%20(confirm(%3Cspan%20class%3D%22hljs-string%22%3E'Are%20your%20sure%3F'%3C%2Fspan%3E))%20%7B%0A%20%20%20%20%24(%3Cspan%20class%3D%22hljs-string%22%3E'%23js-prompt'%3C%2Fspan%3E).style.display%20%3D%20%3Cspan%20class%3D%22hljs-string%22%3E'none'%3C%2Fspan%3E%3B%0A%20%20%7D%0A%7D)%3B%0A%0A%24(%3Cspan%20class%3D%22hljs-string%22%3E'%23js-confirm'%3C%2Fspan%3E).addEventListener(%3Cspan%20class%3D%22hljs-string%22%3E'click'%3C%2Fspan%3E%2C%20()%20%3D%26gt%3B%20%7B%0A%20%20%24(%3Cspan%20class%3D%22hljs-string%22%3E'%23js-prompt'%3C%2Fspan%3E).style.display%20%3D%20%3Cspan%20class%3D%22hljs-string%22%3E'none'%3C%2Fspan%3E%3B%0A%20%20alert(%3Cspan%20class%3D%22hljs-string%22%3E'Confirmed!%20The%20Prompt%20will%20disappear'%3C%2Fspan%3E)%3B%0A%7D)%3B</code>")]),t("p",[s._v("样式方面，按钮使用的是 button，整体并未 reset，所以按钮获取焦点时，是有 outline 的。这也提醒我们，可以直接通过 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v(":focus")]),s._v(" 伪类来实现 tab 选中时的样式，这样做好懂又靠谱。")]),t("p",[s._v("还存在另外一点问题，上面的代码中，"),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("#js-confirm")]),s._v(" 元素是默认获取焦点的。那么，假如我们不需要任何默认焦点，而又需要用户按下 Tab 时，让 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("#js-prompt")]),s._v(" 中的按钮依次获得焦点呢？")]),t("p",[s._v("这里提一点不成熟的想法（23333333）。只要让容器元素 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("#js-prompt")]),s._v(" 获得焦点即可："),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("$('#js-prompt').focus();")]),s._v("。在控制台上打印下 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("HTMLElement.prototype.focus")]),s._v("，就会明白我的意思了。但这么做，可能是野路子（我还没细看 HTML 中元素获得焦点相关的规范）。")]),t("p",[s._v("但是，上面 Demo 的实现，没有考虑到 Tab 控制权的接管。要接管 Tab，就得使用事件绑定来完成。下面看下 Github 是如何实现的。")]),t("h2",{attrs:{id:"-"}},[s._v("如何取得控制权")]),t("p",[s._v("找到 Github 对应的"),t("a",{attrs:{href:"https://assets-cdn.github.com/assets/github-a61b83eb9eb0770051e9a5edab1cb266b68a3dddc8ad7e1fff0cc2c5f49db9c2.js",target:"_blank"}},[s._v("源码")]),s._v("，又通过开发者工具发现弹出层容器有个值为 "),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("facebox")]),s._v(" 的 id。")]),t("p",[s._v("接下来，开始 Ctrl + F 大法。利用长久积累的火眼金睛，找到下面这样两段代码：")]),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://ogjiybger.qnssl.com/github-code.jpg",expression:"`https://ogjiybger.qnssl.com/github-code.jpg`"}],attrs:{alt:"Github code"}})]),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://ogjiybger.qnssl.com/github-code-2.jpg",expression:"`https://ogjiybger.qnssl.com/github-code-2.jpg`"}],attrs:{alt:"Github code"}})]),t("p",[s._v("就是它了。")]),t("p",[s._v("先看第二段，整理后如下，重点直接划在注释中：")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%BC%B9%E5%87%BA%E5%B1%82%E5%87%BA%E7%8E%B0%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-built_in%22%3Edocument%3C%2Fspan%3E.addEventListener(%3Cspan%20class%3D%22hljs-string%22%3E%22facebox%3Areveal%22%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3E%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20t%20%3D%20%3Cspan%20class%3D%22hljs-built_in%22%3Edocument%3C%2Fspan%3E.getElementById(%3Cspan%20class%3D%22hljs-string%22%3E%22facebox%22%3C%2Fspan%3E)%3B%0A%20%20setTimeout(%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3E%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20e(t)%0A%20%20%7D%2C%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E)%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E4%B8%BA%20document%20%E7%BB%91%E5%AE%9A%20keydown%20%E4%BA%8B%E4%BB%B6%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E4%BA%8B%E4%BB%B6%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%20n%20%E5%B0%B1%E6%98%AF%E7%AC%AC%E4%B8%80%E5%BC%A0%E6%88%AA%E5%9B%BE%E7%9A%84%E5%87%BD%E6%95%B0%3C%2Fspan%3E%0A%20%20r(%3Cspan%20class%3D%22hljs-built_in%22%3Edocument%3C%2Fspan%3E).on(%3Cspan%20class%3D%22hljs-string%22%3E%22keydown%22%3C%2Fspan%3E%2C%20n)%3B%0A%7D)%3B%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%BC%B9%E5%87%BA%E5%B1%82%E5%85%B3%E9%97%AD%E5%90%8E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-built_in%22%3Edocument%3C%2Fspan%3E.addEventListener(%3Cspan%20class%3D%22hljs-string%22%3E%22facebox%3AafterClose%22%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3E%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E7%A7%BB%E9%99%A4%E5%87%BA%E7%8E%B0%E6%97%B6%E5%80%99%E4%B8%BA%20document%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E7%BB%91%E5%AE%9A%E7%9A%84%20keydown%20%E4%BA%8B%E4%BB%B6%3C%2Fspan%3E%0A%20%20%20%20r(%3Cspan%20class%3D%22hljs-built_in%22%3Edocument%3C%2Fspan%3E).off(%3Cspan%20class%3D%22hljs-string%22%3E%22keydown%22%3C%2Fspan%3E%2C%20n)%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%BC%B9%E5%87%BA%E4%B8%AD%E5%B7%B2%E7%BB%8F%E8%8E%B7%E5%BE%97%E7%84%A6%E7%82%B9%E7%9A%84%E5%85%83%E7%B4%A0%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%BC%BA%E8%A1%8C%E5%A4%B1%E5%8E%BB%E7%84%A6%E7%82%B9%3C%2Fspan%3E%0A%20%20%20%20r(%3Cspan%20class%3D%22hljs-string%22%3E%22%23facebox%20%3Afocus%22%3C%2Fspan%3E).blur()%0A%7D)%3B%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20....%3C%2Fspan%3E</code>')]),t("p",[s._v("再来看看函数 n 做了什么。")]),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3En%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Ee%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20t%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Evoid%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20hotkey%20%E6%98%AF%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E8%BF%99%E9%87%8C%E5%BC%80%E5%A7%8B%E6%8E%A7%E5%88%B6%20tab%20%E5%92%8C%20shift%2Btab%20%E6%93%8D%E4%BD%9C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-string%22%3E%22tab%22%3C%2Fspan%3E%20%3D%3D%3D%20(t%20%3D%20e.hotkey)%20%7C%7C%20%3Cspan%20class%3D%22hljs-string%22%3E%22shift%2Btab%22%3C%2Fspan%3E%20%3D%3D%3D%20t)%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E9%98%BB%E6%AD%A2%E9%BB%98%E8%AE%A4%E4%BA%8B%E4%BB%B6%3C%2Fspan%3E%0A%20%20%20%20e.preventDefault()%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%BC%B9%E5%87%BA%E5%B1%82%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20n%20%3D%20r(%3Cspan%20class%3D%22hljs-string%22%3E%22%23facebox%22%3C%2Fspan%3E)%2C%0A%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%8F%98%E9%87%8F%20i%20%E5%AD%98%E5%82%A8%E5%BC%B9%E5%87%BA%E5%B1%82%E4%B8%AD%E5%8F%AF%E4%BB%A5%E8%8E%B7%E5%BE%97%E7%84%A6%E7%82%B9%E7%9A%84%E3%80%81%E5%8F%AF%E8%A7%81%E7%9A%84%E3%80%81%E5%8F%AF%E7%94%A8%E7%9A%84%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20input%2C%20button%2C%20.btn%2C%20textarea%20%E7%AD%89%E5%85%83%E7%B4%A0%E9%9B%86%E5%90%88%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20filter%20%E7%94%A8%E5%88%B0%E7%9A%84%E5%87%BD%E6%95%B0%20o%20%E7%94%A8%E4%BA%8E%E8%BF%87%E6%BB%A4%E4%B8%8D%E5%8F%AF%E8%A7%81%E7%9A%84%E7%9B%B8%E5%85%B3%E5%85%83%E7%B4%A0%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20o%20%3D%20require(%22github%2Fvisible%22)%5B%22default%22%5D%3C%2Fspan%3E%0A%20%20%20%20%20%20i%20%3D%20r(%3Cspan%20class%3D%22hljs-built_in%22%3EArray%3C%2Fspan%3E.from(n.find(%3Cspan%20class%3D%22hljs-string%22%3E%22input%2C%20button%2C%20.btn%2C%20textarea%22%3C%2Fspan%3E)).filter(o)).filter(%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3E%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20!%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E.disabled%0A%20%20%20%20%20%20%7D)%2C%0A%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20tab%20%E6%96%B9%E5%90%91%3C%2Fspan%3E%0A%20%20%20%20%20%20s%20%3D%20%3Cspan%20class%3D%22hljs-string%22%3E%22shift%2Btab%22%3C%2Fspan%3E%20%3D%3D%3D%20e.hotkey%20%3F%20%3Cspan%20class%3D%22hljs-number%22%3E-1%3C%2Fspan%3E%20%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%2C%0A%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20i%20%E9%9B%86%E5%90%88%E4%B8%AD%E5%BD%93%E5%89%8D%E8%8E%B7%E5%BE%97%E7%84%A6%E7%82%B9%E7%9A%84%E5%85%83%E7%B4%A0%E7%9A%84%20index%3C%2Fspan%3E%0A%20%20%20%20%20%20a%20%3D%20i.index(i.filter(%3Cspan%20class%3D%22hljs-string%22%3E%22%3Afocus%22%3C%2Fspan%3E))%2C%0A%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20i%20%E9%9B%86%E5%90%88%E4%B8%AD%E4%B8%8B%E4%B8%80%E4%B8%AA%E8%8E%B7%E5%BE%97%E7%84%A6%E7%82%B9%E7%9A%84%E5%85%83%E7%B4%A0%E7%9A%84%E4%BD%8D%E7%BD%AE%3C%2Fspan%3E%0A%20%20%20%20%20%20u%20%3D%20a%20%2B%20s%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%A6%82%E6%9E%9C%E4%B8%8B%E4%B8%80%E4%B8%AA%E8%8E%B7%E5%BE%97%E7%84%A6%E7%82%B9%E7%9A%84%E4%BD%8D%E7%BD%AE%E8%B6%85%E5%87%BA%20i%20%E9%9B%86%E5%90%88%E8%8C%83%E5%9B%B4%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E6%88%96%E8%80%85%E5%BD%93%E5%89%8D%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95%E5%85%83%E7%B4%A0%E8%8E%B7%E5%BE%97%E7%84%A6%E7%82%B9%E3%80%81%E5%B9%B6%E4%B8%94%E4%BD%BF%E7%94%A8%E7%9A%84%E6%98%AF%E5%90%91%E5%89%8D%E7%9A%84%20tab%20%E9%94%AE%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%88%99%E5%B0%86%E7%84%A6%E7%82%B9%E7%BD%AE%E4%BA%8E%20i%20%E9%9B%86%E5%90%88%E4%B8%AD%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%E4%B8%8A%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%20(u%20%3D%3D%3D%20i.length%20%7C%7C%20%3Cspan%20class%3D%22hljs-number%22%3E-1%3C%2Fspan%3E%20%3D%3D%3D%20a%20%26amp%3B%26amp%3B%20%3Cspan%20class%3D%22hljs-string%22%3E%22tab%22%3C%2Fspan%3E%20%3D%3D%3D%20e.hotkey)%20%7B%0A%20%20%20%20%20%20i.first().focus()%0A%20%20%20%20%7D%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%BD%93%E5%89%8D%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95%E5%85%83%E7%B4%A0%E8%8E%B7%E5%BE%97%E7%84%A6%E7%82%B9%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%B9%B6%E4%B8%94%E4%BD%BF%E7%94%A8%20shift%2Btab%20%E5%90%91%E5%89%8D%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%88%99%E5%B0%86%E7%84%A6%E7%82%B9%E7%BD%AE%E4%BA%8E%20i%20%E9%9B%86%E5%90%88%E4%B8%AD%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eelse%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%EF%BC%88%3Cspan%20class%3D%22hljs-number%22%3E-1%3C%2Fspan%3E%20%3D%3D%3D%20a%EF%BC%89%7B%0A%20%20%20%20%20%20i.last().focus()%3B%0A%20%20%20%20%7D%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E6%AD%A3%E5%B8%B8%E8%A1%8C%E4%B8%BA%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%B0%86%E7%84%A6%E7%82%B9%E7%BD%AE%E4%BA%8E%E4%B8%8B%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eelse%3C%2Fspan%3E%20%7B%0A%20%20%20%20%20%20i.get(u).focus()%3B%0A%20%20%20%20%7D%0A%0A%20%20%7D%0A%7D</code>')]),t("p",[s._v("好了，本文也就结束了。")]),t("hr"),t("p",[s._v("嗯，今天（2016-12-04）我想起来那个完全无法使用的例子了 🙂：")]),t("p",[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://ogjiybger.qnssl.com/wx-pup.jpg",expression:"`https://ogjiybger.qnssl.com/wx-pup.jpg`"}],attrs:{alt:"实例"}})])])]),s.post.prev.title||s.post.next.title?t("nav",{staticClass:"pagination"},[s.post.prev.title?t("nuxt-link",{staticClass:"prev",attrs:{to:"/post/"+s.post.prev.pathname,title:s.post.prev.title}},[s._v("« "+s._s(s.post.prev.title))]):s._e(),s.post.next.title?t("nuxt-link",{staticClass:"next",attrs:{to:"/post/"+s.post.next.pathname,title:s.post.next.title}},[s._v(s._s(s.post.next.title)+" »")]):s._e()],1):s._e(),t("gitalk",{attrs:{tags:s.tags}})],1)};e._withStripped=!0;var n={render:e,staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("接着看 "),a("a",{attrs:{href:"http://t4t5.github.io/sweetalert/",target:"_blank"}},[this._v("SweetAlert")]),this._v("，以第一个 Confirm 为例：")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("再来看看 Vue 组件库 Element 的 "),a("a",{attrs:{href:"http://element.eleme.io/#/zh-CN/component/message-box",target:"_blank"}},[this._v("MessageBox 组件")]),this._v(" 中的 “确认消息” Demo。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("和 Element 类似，"),a("a",{attrs:{href:"https://weui.io/#dialog",target:"_blank"}},[this._v("Weui")]),this._v(" 中的 Dialog 也存在类似问题，但 Weui 主要面向移动端，倒也情有可原。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("那么我能想到最简单的实现，莫过于手动调用 focus 事件了。"),a("a",{attrs:{href:"https://jsfiddle.net/wemlin/0yu2y10j/",target:"_blank"}},[this._v(" Simple Demo")]),this._v(" 。代码示例如下：")])}]};a.a=n},z36p:function(s,a,t){"use strict";var e={title:"前端界面 Modal 的控制",description:"关于自定义 Modal 的一些思考",keywords:"原创,JavaScript,用户体验",pathname:"accessible-modal",translation:null,create_time:"2016-12-02",prev:{title:"[译] React 中的 AJAX 请求：获取数据的方法与时机",pathname:"ajax-requests-in-react"},next:{title:"笔记：velocity 2016 第二天",pathname:"velocity-2016-day-2"}};a.a={head:function(){return{title:e.title,meta:[{name:"keywords",content:e.keywords||""},{name:"description",content:e.description}]}},data:function(){return{post:e,post_url:this.$config.site_url+"/post/"+e.pathname,tags:e.tags}},mounted:function(){this.$fixCode()}}}});