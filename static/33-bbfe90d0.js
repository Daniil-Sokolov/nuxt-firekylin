webpackJsonp([33],{Jicm:function(s,a,e){"use strict";var t=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{attrs:{id:"page-post"}},[e("article",{staticClass:"post detail"},[e("div",{staticClass:"meta"},[e("div",{staticClass:"date"},[s._v(s._s(s.post.create_time))])]),e("h1",{staticClass:"title"},[s._v(s._s(s.post.title))]),e("div",{staticClass:"entry-content"},[s.post.translation?e("blockquote",[e("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s._v("\n        原文作者: "),e("a",{attrs:{href:s.post.translation.social,target:"_blank"}},[s._v(s._s(s.post.translation.author))]),e("br"),s._v("\n        原文地址: "),e("a",{attrs:{href:s.post.translation.from}},[s._v(s._s(s.post.translation.from))]),e("br"),s._v("\n        译文地址: "),e("a",{attrs:{href:s.post_url}},[s._v(s._s(s.post_url))]),e("br"),s._v("\n        本文由 "),e("a",{attrs:{href:this.$config.site_url}},[s._v(s._s(this.$config.site_owner))]),s._v(" 翻译，转载请保留此声明。"),e("br"),s._v("\n        著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。\n        ")])]):s._e(),s._m(0),s._m(1),e("p",[s._v("本系列章节如下：")]),s._m(2),e("h2",{attrs:{id:"-eval"}},[s._v("邪恶 eval")]),e("blockquote",[e("p",[e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("eval()")]),s._v(" 函数用来对字符串形式的 JavaScript 代码进行求值。")])]),e("p",[s._v("常见的代码求值方法是使用 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("eval()")]),s._v(" 函数。通过 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("eval()")]),s._v(" 执行的代码可以访问闭包和全局作用域，所以可能导致"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Code_injection",target:"_blank"}},[s._v("代码注入(code injection)")]),s._v("，正因此 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("eval()")]),s._v(" 成为 JavaScript 中最臭名昭著的特性之一。")]),e("p",[s._v("抛开上述缺点不说，"),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("eval()")]),s._v(" 在某些情况下还是很有用的。多数现代前端框架都需要 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("eval()")]),s._v(" 的这种功能，但是往往又因前述问题畏手畏脚。因此出现许多字符串求值方案，在沙箱而非全局作用域中进行操作。沙箱可以阻止代码访问与安全相关的数据，它通常是一个简单对象，用于替换代码中的全局对象。")]),e("h2",{attrs:{id:"-"}},[s._v("常见做法")]),e("p",[s._v("替代 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("eval()")]),s._v(" 最常见的方式是彻底重新实现。重新实现的过程由解析（parsing）、解释（interpreting）两步组成。首先由解析器创建"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree",target:"_blank"}},[s._v("抽象语法树")]),s._v("，然后由解释器遍历语法树，将其译为运行在沙箱中的代码。")]),e("p",[s._v("这种方案使用广泛，但可谓是杀鸡拿了把牛刀。放弃修补 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("eval()")]),s._v("，选择从零开始重写，带来的后果就是，许多 bug 蠢蠢欲动，准备伺机而出。而随着语言的升级更新，也不得不频繁修改源码。")]),e("h2",{attrs:{id:"-"}},[s._v("另一种思路")]),s._m(3),e("p",[s._v("这一节逐步介绍这些特性，并使用它们解释用于代码求值的 "),e("a",{attrs:{href:"https://github.com/RisingStack/nx-compile",target:"_blank"}},[s._v("nx-compile")]),s._v(" 库。这个库有一个名为 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("compileCode()")]),s._v(" 的函数，工作方式如下：")]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-javascript\">%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20code%20%3D%20compileCode(%3Cspan%20class%3D%22hljs-string%22%3E'return%20num1%20%2B%20num2'%3C%2Fspan%3E)%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E6%8E%A7%E5%88%B6%E5%8F%B0%E6%89%93%E5%8D%B0%2017%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-built_in%22%3Econsole%3C%2Fspan%3E.log(code(%7B%3Cspan%20class%3D%22hljs-attr%22%3Enum1%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E10%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Enum2%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E7%3C%2Fspan%3E%7D))%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20globalNum%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E12%3C%2Fspan%3E%20%20%0A%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20otherCode%20%3D%20compileCode(%3Cspan%20class%3D%22hljs-string%22%3E'return%20globalNum'%3C%2Fspan%3E)%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E8%AE%BF%E9%97%AE%E5%85%A8%E5%B1%80%E4%BD%9C%E7%94%A8%E5%9F%9F%E8%A2%AB%E7%A6%81%E6%AD%A2%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E6%8E%A7%E5%88%B6%E5%8F%B0%E6%89%93%E5%8D%B0%20undefined%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-built_in%22%3Econsole%3C%2Fspan%3E.log(otherCode(%7B%3Cspan%20class%3D%22hljs-attr%22%3Enum1%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-attr%22%3Enum2%3C%2Fspan%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E3%3C%2Fspan%3E%7D))</code>")]),e("p",[s._v("待到本文结束，我们会用不到 20 行的代码实现 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("compileCode()")]),s._v(" 函数。")]),e("h3",{attrs:{id:"-new-function-"}},[e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("new Function()")])]),s._m(4),e("p",[s._v("Function 构造函数可以达到 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("eval()")]),s._v(" 同样的目的。"),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("new Function(...args, 'funcBody')")]),s._v(" 对传入的 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("'funcBody'")]),s._v(" 字符进行求值，并返回执行这段代码的函数。"),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("new Function()")]),s._v(" 与 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("eval()")]),s._v(" 的不同主要体现在以下两方面：")]),e("ul",[e("li",[e("p",[e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("new Function()")]),s._v(" 方法只会对传入的代码求值一次。调用返回函数时，只会运行代码，而不会重新求值。")])]),e("li",[e("p",[e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("new Function()")]),s._v(" 方法无法访问闭包中的本地变量；不过还是可以访问全局作用域。")])])]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EcompileCode%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-params%22%3Esrc%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%20%20%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EFunction%3C%2Fspan%3E(src)%0A%7D</code>')]),e("p",[s._v("对我们来说，"),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("new Function()")]),s._v(" 要优于 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("eval()")]),s._v("。它性能更好，也更安全。不过要使其完全可用，还需要阻止其访问全局作用域。")]),e("h3",{attrs:{id:"-with-"}},[e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("with")]),s._v(" 关键词")]),e("blockquote",[e("p",[e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("with")]),s._v(" 能够扩展声明的作用域链。")])]),e("p",[s._v("JavaScript 中，"),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("with")]),s._v(" 关键词较少露面。"),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("with")]),s._v(" 可以帮我们半沙箱化地执行代码。"),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("with")]),s._v(" 语句块首先会试着从传递的沙箱对象检索变量，如果没有找到，则会到闭包和全局作用域中寻找。前面说过，"),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("new Function()")]),s._v(" 能够阻止访问闭包中的变量，故现在只需考虑全局作用域的问题。")]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-javascript\">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EcompileCode%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-params%22%3Esrc%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20src%20%3D%20%3Cspan%20class%3D%22hljs-string%22%3E'with%20(sandbox)%20%7B'%3C%2Fspan%3E%20%2B%20src%20%2B%20%3Cspan%20class%3D%22hljs-string%22%3E'%7D'%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EFunction%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-string%22%3E'sandbox'%3C%2Fspan%3E%2C%20src)%0A%7D</code>")]),e("p",[s._v("在内部实现中，"),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("with")]),s._v(" 使用了 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("in")]),s._v(" 操作。对于语句块中的所有变量访问，都会使用 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("variable in sandbox")]),s._v(" 条件进行判断。若条件为真，则从沙箱对象中读取变量；否则会去全局变量中寻找变量。在 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("with")]),s._v(" 操作过程中，我们可以让 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("variable in sandbox")]),s._v(" 永远返回 true，这样就能阻止访问全局变量。")]),e("p",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://s.ssl.qhres.com/static/fc3642ce6bdb875f.svg",expression:"`https://s.ssl.qhres.com/static/fc3642ce6bdb875f.svg`"}],attrs:{alt:"Sandboxed code evaluation: Simple &#39;with&#39; statement"}})]),e("h3",{attrs:{id:"es6-proxy"}},[s._v("ES6 Proxy")]),s._m(5),e("p",[s._v("ES6 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Proxy")]),s._v(" 封装对象，并定义一些 trap 函数，这些函数可以拦截该对象的基本操作行为。操作对象时，就会调用相应的 trap 函数。使用 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Proxy")]),s._v(" 封装沙箱对象，定义一个 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("has")]),s._v(" 操作 trap，即可覆盖 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("in")]),s._v(" 操作符的默认行为。")]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-javascript\">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EcompileCode%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-params%22%3Esrc%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20src%20%3D%20%3Cspan%20class%3D%22hljs-string%22%3E'with%20(sandbox)%20%7B'%3C%2Fspan%3E%20%2B%20src%20%2B%20%3Cspan%20class%3D%22hljs-string%22%3E'%7D'%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20code%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EFunction%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-string%22%3E'sandbox'%3C%2Fspan%3E%2C%20src)%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-params%22%3Esandbox%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20sandboxProxy%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EProxy%3C%2Fspan%3E(sandbox%2C%20%7Bhas%7D)%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20code(sandboxProxy)%0A%20%20%7D%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E7%94%A8%E4%BA%8E%E6%8B%A6%E6%88%AA%E5%AF%B9%20sandboxProxy%20%E7%9A%84%20'in'%20%E6%93%8D%E4%BD%9C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3Ehas%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-params%22%3Etarget%2C%20key%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C%2Fspan%3E%0A%7D</code>")]),e("p",[s._v("上面的代码耍了 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("with")]),s._v(" 代码块一把。"),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("variable in sandbox")]),s._v(" 将永远为真，因为 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("has")]),s._v(" trap 函数总是返回 true。"),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("width")]),s._v(" 代码块中的代码永远无法访问全局对象。")]),e("p",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://s.ssl.qhres.com/static/d9e40b9163d31b54.svg",expression:"`https://s.ssl.qhres.com/static/d9e40b9163d31b54.svg`"}],attrs:{alt:"Sandboxed code evaluation: &#39;with&#39; statement and proxies"}})]),e("h3",{attrs:{id:"-symbol-unscopables-"}},[e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Symbol.unscopables")])]),s._m(6),e("p",[e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Symbol.unscopables")]),s._v(" 是一个驰名 symbol（"),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol",target:"_blank"}},[s._v("Well-known symbol")]),s._v("）。所谓“驰名 symbol”，实际上是一些内置 JavaScript "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Symbol")]),s._v("，代表某些内部语言行为。驰名 symbol 可以用于添加或重写一些行为，如数据的迭代、基本类型转换。")]),e("blockquote",[e("p",[s._v("Symbol.unscopables 用于指定对象的一些固有和继承属性，这些属性被排除在 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("with")]),s._v(" 所绑定的环境之外无法读取。")])]),e("p",[e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Symbol.unscopables")]),s._v(" 用于定义对象的 unscopable 属性（译者：不译，请自行领会）。"),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("with")]),s._v(" 声明中的沙箱对象的 unscopable 属性无法读取，这些属性会从闭包、全局作用域中读取。通常极少需要用到 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Symbol.unscopables")]),s._v("。在"),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables",target:"_blank"}},[s._v("这里")]),s._v("可以看到引入 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Symbol.unscopables")]),s._v(" 的原因。")]),e("p",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://s.ssl.qhres.com/static/f8e5bdb1ebf22a58.svg",expression:"`https://s.ssl.qhres.com/static/f8e5bdb1ebf22a58.svg`"}],attrs:{alt:"Sandboxed code evaluation: &#39;with&#39; statement and proxies. A security issue."}})]),e("p",[s._v("我们为沙箱对象 proxy 添加一个"),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("get")]),s._v(" trap 函数，拦截检索 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Symbol.unscopables")]),s._v(" 属性的行为，总是返回 undefined。这样会骗到 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("with")]),s._v(" 代码块，使其认为沙箱对象没有任何 unscopable 属性。")]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-javascript\">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EcompileCode%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-params%22%3Esrc%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20src%20%3D%20%3Cspan%20class%3D%22hljs-string%22%3E'with%20(sandbox)%20%7B'%3C%2Fspan%3E%20%2B%20src%20%2B%20%3Cspan%20class%3D%22hljs-string%22%3E'%7D'%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20code%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EFunction%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-string%22%3E'sandbox'%3C%2Fspan%3E%2C%20src)%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-params%22%3Esandbox%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20sandboxProxy%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EProxy%3C%2Fspan%3E(sandbox%2C%20%7Bhas%2C%20get%7D)%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20code(sandboxProxy)%0A%20%20%7D%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3Ehas%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-params%22%3Etarget%2C%20key%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C%2Fspan%3E%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3Eget%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-params%22%3Etarget%2C%20key%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%20(key%20%3D%3D%3D%20%3Cspan%20class%3D%22hljs-built_in%22%3ESymbol%3C%2Fspan%3E.unscopables)%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-literal%22%3Eundefined%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20target%5Bkey%5D%0A%7D</code>")]),e("p",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://s.ssl.qhres.com/static/f2ac13b8fe932334.svg",expression:"`https://s.ssl.qhres.com/static/f2ac13b8fe932334.svg`"}],attrs:{alt:"Sandboxed code evaluation: &#39;with&#39; statement and proxies. Has and get traps."}})]),e("h3",{attrs:{id:"-weakmap-"}},[s._v("使用 WeakMap 进行缓存")]),e("p",[s._v("代码现在是安全的，但性能还有可提升之处：可以看到，每次调用返回的函数时都会新建一个 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Proxy")]),s._v("。通过缓存可以避免该问题，每次调用时，若沙箱对象相同，则可以使用同一个 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Proxy")]),s._v(" 对象。")]),e("p",[s._v("Proxy 对象与沙箱对象一一对应，故可以单纯地将其作为沙箱对象的一个属性。不过，这可能会对外暴露代码实现细节。另外，若使用的是 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Object.freeze()")]),s._v(" 冻结之后的不可变沙箱对象也不行。所以采用 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("WeakMap")]),s._v(" 才是更好的选择。")]),s._m(7),e("p",[e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("WeakMap")]),s._v(" 可在不直接扩展对象属性的情况下为该对象附加数据。通过 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("WeakMap")]),s._v(" 间接为沙箱对象添加缓存的 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Proxy")]),s._v("。")]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v("<code class=\"hljs lang-javascript\">%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20sandboxProxies%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EWeakMap%3C%2Fspan%3E()%0A%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EcompileCode%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-params%22%3Esrc%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20src%20%3D%20%3Cspan%20class%3D%22hljs-string%22%3E'with%20(sandbox)%20%7B'%3C%2Fspan%3E%20%2B%20src%20%2B%20%3Cspan%20class%3D%22hljs-string%22%3E'%7D'%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20code%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EFunction%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-string%22%3E'sandbox'%3C%2Fspan%3E%2C%20src)%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-params%22%3Esandbox%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%20(!sandboxProxies.has(sandbox))%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20sandboxProxy%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-built_in%22%3EProxy%3C%2Fspan%3E(sandbox%2C%20%7Bhas%2C%20get%7D)%0A%20%20%20%20%20%20sandboxProxies.set(sandbox%2C%20sandboxProxy)%0A%20%20%20%20%7D%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20code(sandboxProxies.get(sandbox))%0A%20%20%7D%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3Ehas%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-params%22%3Etarget%2C%20key%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C%2Fspan%3E%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3Eget%3C%2Fspan%3E%20(%3Cspan%20class%3D%22hljs-params%22%3Etarget%2C%20key%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E%20(key%20%3D%3D%3D%20%3Cspan%20class%3D%22hljs-built_in%22%3ESymbol%3C%2Fspan%3E.unscopables)%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-literal%22%3Eundefined%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20target%5Bkey%5D%0A%7D</code>")]),e("p",[s._v("这样一来，只会为每个沙箱对象新建一次 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Proxy")]),s._v(" 对象。")]),e("h3",{attrs:{id:"-"}},[s._v("最后一点")]),e("p",[s._v("上面的 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("compileCode()")]),s._v(" 例子仅 19 行代码，已经是一个可以工作的沙箱代码求值工具。如果有兴趣看看 nx-compile 的完整代码，可以访问 "),e("a",{attrs:{href:"https://github.com/RisingStack/nx-compile",target:"_blank"}},[s._v("Github 仓库")]),s._v("。")]),e("p",[s._v("除解释代码求值外，本章的主要目的是展示一些 ES6 新特性，用它们替代原有方式。贯穿整个例子，我试图展示了 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Proxy")]),s._v(" 和 "),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("Symbol")]),s._v(" 的强大力量。")]),e("h2",{attrs:{id:"-"}},[s._v("写在最后")]),s._m(8),s._m(9)])]),s.post.prev.title||s.post.next.title?e("nav",{staticClass:"pagination"},[s.post.prev.title?e("nuxt-link",{staticClass:"prev",attrs:{to:"/post/"+s.post.prev.pathname,title:s.post.prev.title}},[s._v("« "+s._s(s.post.prev.title))]):s._e(),s.post.next.title?e("nuxt-link",{staticClass:"next",attrs:{to:"/post/"+s.post.next.pathname,title:s.post.next.title}},[s._v(s._s(s.post.next.title)+" »")]):s._e()],1):s._e(),e("gitalk",{attrs:{tags:s.tags}})],1)};t._withStripped=!0;var n={render:t,staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("strong",[this._v("本文是“编写 JavaScript 框架”系列的第三章。在本章中，我将介绍浏览器中对代码求值的几种不同方式及其存在的问题，也会介绍一种依赖 JavaScript 新特性的方法。")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("本系列主要是如何开发一个开源的客户端框架，框架名为 NX。我将在本系列中分享框架编写过程中如何克服遇到的主要困难。对 NX 感兴趣的朋友可以点击 NX 项目"),a("a",{attrs:{href:"http://nx-framework.com/",target:"_blank"}},[this._v("主页")]),this._v("查看。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"/2016/nx-project-structure/"}},[this._v("项目结构（Project structuring）")])]),a("li",[a("a",{attrs:{href:"/2016/execution-timing/"}},[this._v("执行调度(Execution timing)")])]),a("li",[this._v("沙箱求值（本章）")]),a("li",[a("a",{attrs:{href:"/2016/data-bind-dirty-checking"}},[this._v("数据绑定简介")])]),a("li",[a("a",{attrs:{href:"/2016/es6-proxy-data-binding/"}},[this._v("ES6 Proxy 实现数据绑定")])]),a("li",[this._v("自定义元素")]),a("li",[this._v("客户端路由")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("a",{attrs:{href:"http://nx-framework.com",target:"_blank"}},[this._v("NX")]),this._v("  尽可能避免了重新实现代码，采用一个很小的库处理求值，该库使用了一些较可能少为人知的新特性。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[this._v("Function 构造函数用于创建新的 Function 对象。在 JavaScript 中，所有函数都是 Function 对象。")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[this._v("Proxy 对象用于自定义 Object 的一些基本操作，如属性读取、赋值等行为。")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[this._v("Symbol 是一种唯一的、不可变的数据类型，可用作对象属性标识符。")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[this._v("WeakMap 对象是一个键值对集合。键为弱引用，必须是对象；值可以为任意类型。")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("如果对 NX 框架感兴趣，请访问 "),a("a",{attrs:{href:"http://nx-framework.com/",target:"_blank"}},[this._v("主页")]),this._v("。胆大的读者还可以在 Github 上查看 "),a("a",{attrs:{href:"https://github.com/RisingStack/nx-framework",target:"_blank"}},[this._v("NX 源码")]),this._v(" 和 "),a("a",{attrs:{href:"https://github.com/RisingStack/nx-observe",target:"_blank"}},[this._v("nx-observe 源码")]),this._v("。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("希望你喜欢这篇文章。下一章我们将讨论 "),a("a",{attrs:{href:"https://blog.risingstack.com/writing-a-javascript-framework-data-binding-dirty-checking/",target:"_blank"}},[this._v("数据绑定")]),this._v("。")])}]};a.a=n},faB8:function(s,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=e("ydjp"),n=e("Jicm"),i=e("VU/8")(t.a,n.a,!1,null,null,null);i.options.__file="pages/post/sandbox-code-evaluation.vue",a.default=i.exports},ydjp:function(s,a,e){"use strict";var t={title:"[译] 手把手教你写一个 Javascript 框架：沙箱求值",description:"关于沙箱求值，ES6，Proxy，Symbol，WeakMap",keywords:"翻译,JavaScript,ES6",pathname:"sandbox-code-evaluation",translation:{author:"Bertalan Miklos",social:"https://blog.risingstack.com/author/bertalan/",from:"https://blog.risingstack.com/writing-a-javascript-framework-sandboxed-code-evaluation/"},create_time:"2016-11-18",prev:{title:"[译] 手把手教你写一个 Javascript 框架：项目结构",pathname:"nx-project-structure"},next:{title:"[译] 手把手教你写一个 Javascript 框架：执行调度",pathname:"execution-timing"}};a.a={head:function(){return{title:t.title,meta:[{name:"keywords",content:t.keywords||""},{name:"description",content:t.description}]}},data:function(){return{post:t,post_url:this.$config.site_url+"/post/"+t.pathname,tags:t.tags}},mounted:function(){this.$fixCode()}}}});