webpackJsonp([10],{MBKN:function(t,e,s){"use strict";e.a={head:function(){return{title:"搜索"}},data:function(){return{keyword:"",hostname:this.$config.hostname}},computed:{url:function(){return"https://www.google.com/search?q="+this.keyword+"+site%3A"+this.hostname}},methods:{search:function(){window.open("about:blank").document.write('<script>location.href = "'+this.url+'"<\/script>')}}}},qmE8:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("MBKN"),i=s("ujD6"),r=s("VU/8")(a.a,i.a,!1,null,null,null);r.options.__file="pages/search.vue",e.default=r.exports},ujD6:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"post detail"},[s("h1",{staticClass:"title"},[t._v("搜索")]),s("div",{staticClass:"entry-content"},[s("div",{attrs:{id:"search"}},[s("div",{staticStyle:{position:"relative"}},[s("div",{staticClass:"wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{maxlength:"80",placeholder:"请输入关键字...",id:"keyword",name:"keyword",type:"search"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),s("input",{staticClass:"submit",attrs:{type:"submit",value:"搜索"},on:{click:t.search}})])])])])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i}});