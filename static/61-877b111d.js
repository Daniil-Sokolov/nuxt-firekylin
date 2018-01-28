webpackJsonp([61],{DUPM:function(s,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("mY2w"),t=e("sfZz"),l=e("VU/8")(n.a,t.a,!1,null,null,null);l.options.__file="pages/post/functional-refactor-typescript.vue",a.default=l.exports},mY2w:function(s,a,e){"use strict";var n={title:"[译] 函数式 TypeScript",description:"函数式 TypeScript",keywords:"翻译,TypeScript,函数式编程",pathname:"functional-refactor-typescript",translation:{author:"@Victor Savkin",social:"https://twitter.com/victorsavkin",from:"https://vsavkin.com/functional-typescript-316f0e003dc6#.h1njvc96o"},create_time:"2016-09-28",prev:{title:"[译] yarn 和 npm 命令行小抄",pathname:"npm-vs-yarn-cheat-sheet"},next:{title:"笔记：TypeScript 中引用全局变量",pathname:"ts-note-on-global-reference"}};a.a={head:function(){return{title:n.title,meta:[{name:"keywords",content:n.keywords||""},{name:"description",content:n.description}]}},data:function(){return{post:n,post_url:this.$config.site_url+"/post/"+n.pathname,tags:n.tags}},mounted:function(){this.$fixCode()}}},sfZz:function(s,a,e){"use strict";var n=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{attrs:{id:"page-post"}},[e("article",{staticClass:"post detail"},[e("div",{staticClass:"meta"},[e("div",{staticClass:"date"},[s._v(s._s(s.post.create_time))])]),e("h1",{staticClass:"title"},[s._v(s._s(s.post.title))]),e("div",{staticClass:"entry-content"},[s.post.translation?e("blockquote",[e("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s._v("\n        原文作者: "),e("a",{attrs:{href:s.post.translation.social,target:"_blank"}},[s._v(s._s(s.post.translation.author))]),e("br"),s._v("\n        原文地址: "),e("a",{attrs:{href:s.post.translation.from}},[s._v(s._s(s.post.translation.from))]),e("br"),s._v("\n        译文地址: "),e("a",{attrs:{href:s.post_url}},[s._v(s._s(s.post_url))]),e("br"),s._v("\n        本文由 "),e("a",{attrs:{href:this.$config.site_url}},[s._v(s._s(this.$config.site_owner))]),s._v(" 翻译，转载请保留此声明。"),e("br"),s._v("\n        著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。\n        ")])]):s._e(),e("p",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://p.ssl.qhimg.com/t01aeda500508da54ce.png",expression:"`https://p.ssl.qhimg.com/t01aeda500508da54ce.png`"}],attrs:{alt:""}})]),s._m(0),e("p",[s._v("首先，我们需要用到以下几项技术：")]),s._m(1),e("p",[s._v("来，开始吧！")]),e("p",[s._v("假设我们有两个类，Employee 和 Department。Employee 有 name 和 salary 属性，Department 只是 Employee 的简单集合。")]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-class%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EEmployee%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econstructor%3C%2Fspan%3E(public%20name%3A%20string%2C%20public%20salary%3A%20number)%20%7B%7D%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-class%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eclass%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EDepartment%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econstructor%3C%2Fspan%3E(public%20employees%3A%20Employee%5B%5D)%20%7B%7D%0A%0A%20%20works(employee%3A%20Employee)%3A%20boolean%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C%2Fspan%3E.employees.indexOf(employee)%20%26gt%3B%20%3Cspan%20class%3D%22hljs-number%22%3E-1%3C%2Fspan%3E%3B%0A%20%20%7D%0A%7D</code>')]),e("p",[s._v("我们要重构的是 averageSalary 函数。")]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EaverageSalary%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Eemployees%3A%20Employee%5B%5D%2C%20minSalary%3A%20number%2C%20department%3F%3A%20Department%3C%2Fspan%3E)%3A%20%3Cspan%20class%3D%22hljs-title%22%3Enumber%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C%2Fspan%3E%20total%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C%2Fspan%3E%20count%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%0A%20%20%20employees.forEach(%3Cspan%20class%3D%22hljs-function%22%3E(%3Cspan%20class%3D%22hljs-params%22%3Ee%3C%2Fspan%3E)%20%3D%26gt%3B%3C%2Fspan%3E%20%7B%0A%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E(minSalary%20%26lt%3B%3D%20e.salary%20%26amp%3B%26amp%3B%20(department%20%3D%3D%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Eundefined%3C%2Fspan%3E%20%7C%7C%20department.works(e)))%7B%0A%20%20%20%20%20%20%20total%20%2B%3D%20e.salary%3B%0A%20%20%20%20%20%20%20count%20%2B%3D%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%3B%0A%20%20%20%20%20%7D%0A%20%20%20%7D)%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20total%20%3D%3D%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%20%3F%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%20%3A%20total%20%2F%20count%3B%0A%20%7D</code>')]),e("p",[s._v("averageSalary 函数接收 employee 数组、最低薪资 minSalary 以及可选的 department 作为参数。如果传了 department 参数，函数会计算该部门中所有员工的平均薪资；若不传，则对全部员工进行计算。")]),e("p",[s._v("该函数的使用方式如下：")]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">describe(%3Cspan%20class%3D%22hljs-string%22%3E%22average%20salary%22%3C%2Fspan%3E%2C%20()%20%3D%26gt%3B%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20empls%20%3D%20%5B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20Employee(%3Cspan%20class%3D%22hljs-string%22%3E%22Jim%22%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E100%3C%2Fspan%3E)%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20Employee(%3Cspan%20class%3D%22hljs-string%22%3E%22John%22%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E200%3C%2Fspan%3E)%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20Employee(%3Cspan%20class%3D%22hljs-string%22%3E%22Liz%22%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E120%3C%2Fspan%3E)%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20Employee(%3Cspan%20class%3D%22hljs-string%22%3E%22Penny%22%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E30%3C%2Fspan%3E)%0A%20%20%5D%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20sales%20%3D%20%3Cspan%20class%3D%22hljs-keyword%22%3Enew%3C%2Fspan%3E%20Department(%5Bempls%5B%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%5D%2C%20empls%5B%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%5D%5D)%3B%0A%0A%20%20it(%3Cspan%20class%3D%22hljs-string%22%3E%22calculates%20the%20average%20salary%22%3C%2Fspan%3E%2C%20()%20%3D%26gt%3B%20%7B%0A%20%20%20%20expect(averageSalary(empls%2C%20%3Cspan%20class%3D%22hljs-number%22%3E50%3C%2Fspan%3E%2C%20sales)).toEqual(%3Cspan%20class%3D%22hljs-number%22%3E150%3C%2Fspan%3E)%3B%0A%20%20%20%20expect(averageSalary(empls%2C%20%3Cspan%20class%3D%22hljs-number%22%3E50%3C%2Fspan%3E)).toEqual(%3Cspan%20class%3D%22hljs-number%22%3E140%3C%2Fspan%3E)%3B%0A%20%20%7D)%3B%0A%7D)%3B</code>')]),e("p",[s._v("需求虽简单粗暴，可就算不提代码难以拓展，其混乱是显而易见的。若新增条件，函数签名及接口就不得不发生变动，if 语句也会也越来越臃肿可怕。")]),e("p",[s._v("我们一起用一些函数式编程的办法重构这个函数吧。")]),e("h2",{attrs:{id:"-"}},[s._v("使用函数代替简单值")]),s._m(2),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">type%20Predicate%20%3D%20%3Cspan%20class%3D%22hljs-function%22%3E(%3Cspan%20class%3D%22hljs-params%22%3Ee%3A%20Employee%3C%2Fspan%3E)%20%3D%26gt%3B%3C%2Fspan%3E%20boolean%3B%0A%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EaverageSalary%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Eemployees%3A%20Employee%5B%5D%2C%20salaryCondition%3A%20Predicate%2C%0A%20%20departmentCondition%3F%3A%20Predicate%3C%2Fspan%3E)%3A%20%3Cspan%20class%3D%22hljs-title%22%3Enumber%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C%2Fspan%3E%20total%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C%2Fspan%3E%20count%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%0A%20%20employees.forEach(%3Cspan%20class%3D%22hljs-function%22%3E(%3Cspan%20class%3D%22hljs-params%22%3Ee%3C%2Fspan%3E)%20%3D%26gt%3B%3C%2Fspan%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E(salaryCondition(e)%20%26amp%3B%26amp%3B%20(departmentCondition%20%3D%3D%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Eundefined%3C%2Fspan%3E%20%7C%7C%20departmentCondition(e)))%7B%0A%20%20%20%20%20%20total%20%2B%3D%20e.salary%3B%0A%20%20%20%20%20%20count%20%2B%3D%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20total%20%3D%3D%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%20%3F%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%20%3A%20total%20%2F%20count%3B%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20...%3C%2Fspan%3E%0A%0Aexpect(averageSalary(empls%2C%20(e)%20%3D%26gt%3B%20e.salary%20%26gt%3B%20%3Cspan%20class%3D%22hljs-number%22%3E50%3C%2Fspan%3E%2C%20(e)%20%3D%26gt%3B%20sales.works(e))).toEqual(%3Cspan%20class%3D%22hljs-number%22%3E150%3C%2Fspan%3E)%3B</code>')]),s._m(3),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EaverageSalary%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Eemployees%3A%20Employee%5B%5D%2C%20conditions%3A%20Predicate%5B%5D%3C%2Fspan%3E)%3A%20%3Cspan%20class%3D%22hljs-title%22%3Enumber%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C%2Fspan%3E%20total%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C%2Fspan%3E%20count%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%0A%20%20employees.forEach(%3Cspan%20class%3D%22hljs-function%22%3E(%3Cspan%20class%3D%22hljs-params%22%3Ee%3C%2Fspan%3E)%20%3D%26gt%3B%3C%2Fspan%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E(conditions.every(%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3Ec%3C%2Fspan%3E%20%3D%26gt%3B%3C%2Fspan%3E%20c(e)))%7B%0A%20%20%20%20%20%20total%20%2B%3D%20e.salary%3B%0A%20%20%20%20%20%20count%20%2B%3D%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20(count%20%3D%3D%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E)%20%3F%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%20%3A%20total%20%2F%20count%3B%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F...%3C%2Fspan%3E%0A%0Aexpect(averageSalary(empls%2C%20%5B%3Cspan%20class%3D%22hljs-function%22%3E(%3Cspan%20class%3D%22hljs-params%22%3Ee%3C%2Fspan%3E)%20%3D%26gt%3B%3C%2Fspan%3E%20e.salary%20%26gt%3B%20%3Cspan%20class%3D%22hljs-number%22%3E50%3C%2Fspan%3E%2C%20(e)%20%3D%26gt%3B%20sales.works(e)%5D)).toEqual(%3Cspan%20class%3D%22hljs-number%22%3E150%3C%2Fspan%3E)%3B</code>')]),e("p",[s._v("条件数组只不过是组合的条件，可以用一个简单的组合器将它们放到一起，这样看起来更加明晰。")]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3Eand%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Epredicates%3A%20Predicate%5B%5D%3C%2Fspan%3E)%3A%20%3Cspan%20class%3D%22hljs-title%22%3EPredicate%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-function%22%3E(%3Cspan%20class%3D%22hljs-params%22%3Ee%3C%2Fspan%3E)%20%3D%26gt%3B%3C%2Fspan%3E%20predicates.every(%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3Ep%3C%2Fspan%3E%20%3D%26gt%3B%3C%2Fspan%3E%20p(e))%3B%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EaverageSalary%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Eemployees%3A%20Employee%5B%5D%2C%20conditions%3A%20Predicate%5B%5D%3C%2Fspan%3E)%3A%20%3Cspan%20class%3D%22hljs-title%22%3Enumber%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C%2Fspan%3E%20total%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C%2Fspan%3E%20count%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%3B%0A%0A%20%20employees.forEach(%3Cspan%20class%3D%22hljs-function%22%3E(%3Cspan%20class%3D%22hljs-params%22%3Ee%3C%2Fspan%3E)%20%3D%26gt%3B%3C%2Fspan%3E%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Eif%3C%2Fspan%3E(and(conditions)(e))%7B%0A%20%20%20%20%20%20total%20%2B%3D%20e.salary%3B%0A%20%20%20%20%20%20count%20%2B%3D%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20(count%20%3D%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E)%20%3F%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%20%3A%20total%20%2F%20count%3B%0A%7D</code>')]),e("p",[s._v("值得注意的是，“and” 组合器是通用的，可以复用并且还可能拓展为库。")]),s._m(4),s._m(5),e("h2",{attrs:{id:"-"}},[s._v("数据转换过程管道化")]),e("p",[s._v("函数式编程的另外一个很有用的实践是将所有数据转换过程变成管道。在本例中，就是将 filter 过程提取到循环外面。")]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EaverageSalary%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Eemployees%3A%20Employee%5B%5D%2C%20conditions%3A%20Predicate%5B%5D%3C%2Fspan%3E)%3A%20%3Cspan%20class%3D%22hljs-title%22%3Enumber%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20filtered%20%3D%20employees.filter(and(conditions))%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C%2Fspan%3E%20total%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C%2Fspan%3E%20count%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%0A%0A%20%20filtered.forEach(%3Cspan%20class%3D%22hljs-function%22%3E(%3Cspan%20class%3D%22hljs-params%22%3Ee%3C%2Fspan%3E)%20%3D%26gt%3B%3C%2Fspan%3E%20%7B%0A%20%20%20%20total%20%2B%3D%20e.salary%3B%0A%20%20%20%20count%20%2B%3D%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%3B%0A%20%20%7D)%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20(count%20%3D%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E)%20%3F%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%20%3A%20total%20%2F%20count%3B%0A%7D</code>')]),e("p",[s._v("这样一来计数的 count 就没什么用了。")]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EaverageSalary%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Eemployees%3A%20Employee%5B%5D%2C%20conditions%3A%20Predicate%5B%5D%3C%2Fspan%3E)%3A%20%3Cspan%20class%3D%22hljs-title%22%3Enumber%3C%2Fspan%3E%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20filtered%20%3D%20employees.filter(and(conditions))%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Elet%3C%2Fspan%3E%20total%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%0A%20%20filtered.forEach(%3Cspan%20class%3D%22hljs-function%22%3E(%3Cspan%20class%3D%22hljs-params%22%3Ee%3C%2Fspan%3E)%20%3D%26gt%3B%3C%2Fspan%3E%20%7B%0A%20%20%20%20total%20%2B%3D%20e.salary%3B%0A%20%20%7D)%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20(filtered.length%20%3D%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E)%20%3F%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%20%3A%20total%20%2F%20filtered.length%3B%0A%7D</code>')]),e("p",[s._v("接下来，如在叠加之前将 salary 摘取出来，求和过程就变成简单的 reduce 了。")]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EaverageSalary%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Eemployees%3A%20Employee%5B%5D%2C%20conditions%3A%20Predicate%5B%5D%3C%2Fspan%3E)%3A%20%3Cspan%20class%3D%22hljs-title%22%3Enumber%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20filtered%20%3D%20employees.filter(and(conditions))%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20salaries%20%3D%20filtered.map(%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3Ee%3C%2Fspan%3E%20%3D%26gt%3B%3C%2Fspan%3E%20e.salary)%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20total%20%3D%20salaries.reduce(%3Cspan%20class%3D%22hljs-function%22%3E(%3Cspan%20class%3D%22hljs-params%22%3Ea%2Cb%3C%2Fspan%3E)%20%3D%26gt%3B%3C%2Fspan%3E%20a%20%2B%20b%2C%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E)%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20(salaries.length%20%3D%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E)%20%3F%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%20%3A%20total%20%2F%20salaries.length%3B%0A%7D</code>')]),e("h2",{attrs:{id:"-"}},[s._v("提取通用函数")]),e("p",[s._v("接着我们发现，最后两行代码和当前域完全没什么关系。其中不包含任何与员工、部门相关的信息。仅仅只是一个计算平均数的函数。所以也将其提取出来。")]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3Eaverage%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Enums%3A%20number%5B%5D%3C%2Fspan%3E)%3A%20%3Cspan%20class%3D%22hljs-title%22%3Enumber%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20total%20%3D%20nums.reduce(%3Cspan%20class%3D%22hljs-function%22%3E(%3Cspan%20class%3D%22hljs-params%22%3Ea%2Cb%3C%2Fspan%3E)%20%3D%26gt%3B%3C%2Fspan%3E%20a%20%2B%20b%2C%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E)%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20(nums.length%20%3D%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E)%20%3F%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%20%3A%20total%20%2F%20nums.length%3B%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EaverageSalary%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Eemployees%3A%20Employee%5B%5D%2C%20conditions%3A%20Predicate%5B%5D%3C%2Fspan%3E)%3A%20%3Cspan%20class%3D%22hljs-title%22%3Enumber%3C%2Fspan%3E%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20filtered%20%3D%20employees.filter(and(conditions))%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C%2Fspan%3E%20salaries%20%3D%20filtered.map(%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3Ee%3C%2Fspan%3E%20%3D%26gt%3B%3C%2Fspan%3E%20e.salary)%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20average(salaries)%3B%0A%7D</code>')]),e("p",[s._v("又一次，提取出的函数是完全通用的。")]),e("p",[s._v("最后，将所有 salary 部分提出来之后，我们得到终极方案。")]),e("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">function%20employeeSalaries(employees%3A%20Employee%5B%5D%2C%20conditions%3A%20Predicate%5B%5D)%3A%20number%5B%5D%20%7B%0A%20%20const%20filtered%20%3D%20employees.filter(and(conditions))%3B%0A%20%20return%20filtered.map(e%20%3D%26gt%3B%20e.salary)%3B%0A%7D%0A%0Afunction%20averageSalary(employees%3A%20Employee%5B%5D%2C%20conditions%3A%20Predicate%5B%5D)%3A%20number%20%7B%0A%20%20return%20average(employeeSalaries(employees%2C%20conditions))%3B%0A%7D</code>')]),e("p",[s._v("对比原始方案和终极方案，我敢说，毫无疑问，后者更棒。首先，它更通用（我们可以不破坏函数接口的情况下添加新类型的判断条件）。其次，我们从可变状态（mutable state）和 if 语句中解脱出来，这使代码更容易阅读、理解。")]),e("h2",{attrs:{id:"-"}},[s._v("何时收手")]),e("p",[s._v("函数式风格的编程中，我们会编写许多小型函数，它们接收一个集合，返回新的集合。这些函数能够以不同方式组合、复用 —— 棒极了。不过，这种风格的一个缺点是代码可能会变得过度抽象，导致难以读懂，那些函数组合在一起到底要干嘛？")]),e("p",[s._v("我喜欢使用乐高来类比：乐高积木能够以不同形式放在一起 —— 它们是可组合的。但注意，并不是所有积木都是一小块。所以，在使用本文所述技巧进行代码重构时，千万别妄图将一切都变成接收数组、返回数组的函数。诚然，这样一些函数组合使用极度容易，可它们也会显著降低我们对程序的理解能力。")]),e("h2",{attrs:{id:"-"}},[s._v("小结")]),e("p",[s._v("本文展示了如何使用函数式思维重构 TypeScript 代码。我所遵循的是以下几点规则：")]),s._m(6),e("h2",{attrs:{id:"-"}},[s._v("了解更多")]),e("p",[s._v("强烈推荐以下两本书：")]),s._m(7),e("hr"),s._m(8)])]),s.post.prev.title||s.post.next.title?e("nav",{staticClass:"pagination"},[s.post.prev.title?e("nuxt-link",{staticClass:"prev",attrs:{to:"/post/"+s.post.prev.pathname,title:s.post.prev.title}},[s._v("« "+s._s(s.post.prev.title))]):s._e(),s.post.next.title?e("nuxt-link",{staticClass:"next",attrs:{to:"/post/"+s.post.next.pathname,title:s.post.next.title}},[s._v(s._s(s.post.next.title)+" »")]):s._e()],1):s._e(),e("gitalk",{attrs:{tags:s.tags}})],1)};n._withStripped=!0;var t={render:n,staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("谈到函数式编程时，我们常提到机制、方法，而不是核心原则。函数式编程不是关于 Monad、Monoid 和 Zipper 这些概念的，虽然它们确实很有用。从根本上来说，函数式编程就是关于如使用通用的可复用函数进行组合编程。"),a("strong",[this._v("本文是我在重构 TypeScript 代码时使用函数式的一些思考的结果。")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[this._v("尽可能使用函数代替简单值")]),a("li",[this._v("数据转换过程管道化")]),a("li",[this._v("提取通用函数")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("strong",[this._v("使用函数代替简单值看起来似乎不太直观，但这却是整理归纳代码的强大办法。")]),this._v("在我们的例子中，这样做，意味着要将 minSalary 和 department 参数替换成两个条件检验的函数。")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("strong",[this._v(" 我们所做的就是将 salary、department 两个条件接口统一起来。")]),this._v("而此前这两个条件是写死的，现在它们被明确定义了，并且遵循一致的接口。"),a("strong",[this._v("这次整合允许我们将所有条件作为数组传递。")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("strong",[this._v("提起结果")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("现在，averageSalary 函数已健壮得多了。"),a("strong",[this._v("我们可以加入新条件，无需破坏函数接口或改变函数实现。")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[this._v("尽可能使用函数代替简单值")]),a("li",[this._v("数据转换过程管道化")]),a("li",[this._v("提取通用函数")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"https://leanpub.com/javascript-allonge",target:"_blank"}},[this._v("“JavaScript Allonge” by Reginald Braithwaite")])]),a("li",[a("a",{attrs:{href:"http://shop.oreilly.com/product/0636920028857.do",target:"_blank"}},[this._v("“Functional JavaScript” by Michael Fogus")])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("a",{attrs:{href:"https://twitter.com/victorsavkin",target:"_blank"}},[this._v("关注 @victorsavkin")]),this._v("  获得更多关于 Angular 和 TypeScript 的知识。")])}]};a.a=t}});