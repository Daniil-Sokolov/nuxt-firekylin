webpackJsonp([86],{HZVS:function(s,a,E){"use strict";var n={title:"算法学习：插入排序",description:"算法学习：插入排序",keywords:"原创,算法,JavaScript",pathname:"algo-insertion-sort",translation:null,create_time:"2016-11-02",prev:{title:"[译] HTML 表单验证",pathname:"using-html-form-validation-in-pure-javascript"},next:{title:"使用 jQuery.ajax 上传带文件的表单",pathname:"jquery-ajax-formdata"}};a.a={head:function(){return{title:n.title,meta:[{name:"keywords",content:n.keywords||""},{name:"description",content:n.description}]}},data:function(){return{post:n,post_url:this.$config.site_url+"/post/"+n.pathname,tags:n.tags}},mounted:function(){this.$fixCode()}}},Klkj:function(s,a,E){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=E("HZVS"),e=E("qQt4"),t=E("VU/8")(n.a,e.a,!1,null,null,null);t.options.__file="pages/post/algo-insertion-sort.vue",a.default=t.exports},qQt4:function(s,a,E){"use strict";var n=function(){var s=this,a=s.$createElement,E=s._self._c||a;return E("div",{attrs:{id:"page-post"}},[E("article",{staticClass:"post detail"},[E("div",{staticClass:"meta"},[E("div",{staticClass:"date"},[s._v(s._s(s.post.create_time))])]),E("h1",{staticClass:"title"},[s._v(s._s(s.post.title))]),E("div",{staticClass:"entry-content"},[s.post.translation?E("blockquote",[E("p",{staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[s._v("\n        原文作者: "),E("a",{attrs:{href:s.post.translation.social,target:"_blank"}},[s._v(s._s(s.post.translation.author))]),E("br"),s._v("\n        原文地址: "),E("a",{attrs:{href:s.post.translation.from}},[s._v(s._s(s.post.translation.from))]),E("br"),s._v("\n        译文地址: "),E("a",{attrs:{href:s.post_url}},[s._v(s._s(s.post_url))]),E("br"),s._v("\n        本文由 "),E("a",{attrs:{href:this.$config.site_url}},[s._v(s._s(this.$config.site_owner))]),s._v(" 翻译，转载请保留此声明。"),E("br"),s._v("\n        著作权属于原作者，本译文仅用于学习、研究和交流目的，请勿用于商业目的。\n        ")])]):s._e(),E("h2",{attrs:{id:"-"}},[s._v("缘起")]),E("p",[s._v("最近打算好好学习算法。因为专业的原因，对计算机原理、数据结构与算法这些知识，一开始可以说是一窍不通的。")]),E("p",[s._v("最开始在项目中接触算法，完全基于项目需要。当时负责一个酒店项目，数据接入来自公共部分。项目详情页拿到的数据，包括当前酒店所有套餐，最多的可能有几十个。需求仅仅要求显示三条，而且结果是根据不同内容（如状态、网络、热水、空调等等）有优先级的。")]),E("p",[s._v("当时被这套逻辑闹得很揪心。后来想想，放手干吧，多做几次遍历。最后在排序这块遇到问题了。结果就是在阮大神的博客上找到了一个快速排序的例子，稍作修改，就用在项目中了。当时还觉得小有成就。当然，后来项目经过满满一周测试，即将上线时，被取消了。")]),E("p",[s._v("回首算来，在上一家公司一年多的时间中，我所做的项目，真正上线的真没几个。唯一上线的可能只有一个 React Native 开发的 APP，一直活到现在。当然，也有好处，学到了很多东西。")]),E("p",[s._v("哦，对了，第一次接触算法应该是在找工作的时候。当时跑到杭州去面试，公司不大，相对传统，主营业务说白了就是 POS 机。面试我们的是软件出身的总经理，要求很简单，每人一台机器，题目相同，不管面的是 Java 还是 C++ 或者前端。一个和图有关的题目，记得后来在哪本书上看过类似的题，很经典的算法。当时，主要学习视觉、交互为主的我，完全是一脸懵的状态。结果自然不用多说。奇怪的是，第二天回到武汉，我竟然解决了，还是拿高中数学知识解决的。造化弄人，塞翁失马，焉知非福？")]),E("p",[s._v("面试完了之后，开始读《数据结构与算法 JavaScript 描述》一书。但这本书在数据结构方面用了很大的篇幅。了解稍微多了一点，但解决问题的能力依然有限。所以这次，我打算读《算法导论》。不打算用学院派的方式学习，只求了解算法的思想，然后自己跟着试验一遍，加强了解。")]),E("p",[s._v("好了，前言说够了。步入正题。")]),E("h2",{attrs:{id:"-"}},[s._v("插入排序")]),E("p",[s._v("想象现在你手上有十张扑克牌（假定它们在 2-10 之间），没有经过整理，顺序打乱，我们用一个数组记录如下：")]),E("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20cards%20%3D%20%5B%3Cspan%20class%3D%22hljs-number%22%3E7%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E3%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E5%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E10%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E6%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E9%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E7%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E9%3C%2Fspan%3E%2C%20%3Cspan%20class%3D%22hljs-number%22%3E4%3C%2Fspan%3E%5D%3B%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E7%94%9F%E6%88%90%E6%96%B9%E6%B3%95%E5%A6%82%E4%B8%8B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20var%20arr%20%3D%20%5B%5D%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20var%20t%20%3D10%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20while%20(t)%20a%5B--t%5D%20%3D%20~~(Math.random()*9)%20%2B%202%3C%2Fspan%3E</code>')]),E("p",[s._v("下面，我们要通过一种办法对手上的牌进行排序。")]),E("p",[s._v("首先，拿出最左侧的一张牌 cardA，放在桌面上：")]),E("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">Table%3A%20cardA(%3Cspan%20class%3D%22hljs-number%22%3E7%3C%2Fspan%3E)%0ACards%3A%20%3Cspan%20class%3D%22hljs-number%22%3E3%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E5%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E10%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E6%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E9%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E7%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E9%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E4%3C%2Fspan%3E</code>')]),E("p",[s._v("接着进行第二次取牌，依然拿手上最左侧的第一张 cardB，然后将这张牌与桌面上的牌 cardA 进行比较。")]),E("p",[s._v("在我们的例子中，因为 cardB(3) 小于 cardA(7)，所以将 cardB(3) 放在 cardA(7) 的左侧：")]),E("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">Table%3A%20cardB(%3Cspan%20class%3D%22hljs-number%22%3E3%3C%2Fspan%3E)%20%20%20cardA(%3Cspan%20class%3D%22hljs-number%22%3E7%3C%2Fspan%3E)%0ACards%3A%20%3Cspan%20class%3D%22hljs-number%22%3E5%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E10%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E6%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E9%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E7%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E9%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E4%3C%2Fspan%3E</code>')]),s._m(0),E("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">Table%3A%20cardB(%3Cspan%20class%3D%22hljs-number%22%3E3%3C%2Fspan%3E)%20%20%20cardC(%3Cspan%20class%3D%22hljs-number%22%3E5%3C%2Fspan%3E)%20%20%20cardA(%3Cspan%20class%3D%22hljs-number%22%3E7%3C%2Fspan%3E)%0ACards%3A%20%3Cspan%20class%3D%22hljs-number%22%3E10%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E6%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E9%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E7%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E9%3C%2Fspan%3E%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E4%3C%2Fspan%3E</code>')]),E("p",[s._v("我们继续上面的步骤。从前面的步骤可以看出，每次从手上拿出一张牌之前，桌面的牌是已经排好序的。我们只需要将此次拿出的牌与桌面上的牌一一比较，找到合适的位置插入即可 —— 记住，插入位置后面所有牌的位置都相应加 1，这点很重要。")]),E("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E6%88%91%E4%BB%AC%E5%B0%86%E6%A1%8C%E9%9D%A2%E4%B8%8A%E6%8E%92%E5%A5%BD%E5%BA%8F%E7%9A%84%E7%89%8C%E8%AE%B0%E4%B8%BA%E6%95%B0%E7%BB%84%20sorted%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%B0%86%E7%AC%AC%20n%20%E8%BD%AE%EF%BC%88n%20%26gt%3B%3D0%20%EF%BC%89%E6%8B%BF%E5%87%BA%E7%9A%84%E7%89%8C%E8%AE%B0%E4%BD%9C%20cardN%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E9%82%A3%E4%B9%88%E6%89%BE%E5%88%B0%20cardN%20%E6%8F%92%E5%85%A5%E4%BD%8D%E7%BD%AE%E7%9A%84%E5%8A%9E%E6%B3%95%E5%A6%82%E4%B8%8B%EF%BC%9A%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E4%BB%8E%E5%8F%B3%E5%90%91%E5%B7%A6%E6%89%BE%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%8F%AA%E9%9C%80%E8%A6%81%E6%89%BE%E5%88%B0%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AF%94%20cardN%20%E5%B0%8F%E7%9A%84%E5%8D%B3%E5%8F%AF%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E6%95%B0%E7%BB%84%E4%B8%8B%E6%A0%87%E4%BB%8E%200%20%E5%BC%80%E5%A7%8B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20pos%20%3D%20sorted.length%20-%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%BC%80%E5%A7%8B%E4%BB%8E%E5%8F%B3%E5%90%91%E5%B7%A6%E6%AF%94%E8%BE%83%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-keyword%22%3Ewhile%3C%2Fspan%3E%20(pos%20%26gt%3B%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%20%26amp%3B%26amp%3B%20sorted%5Bpos%5D%20%26gt%3B%20cardN)%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E6%AF%94%20cardN%20%E5%A4%A7%E7%9A%84%E9%83%BD%E5%90%91%E5%8F%B3%E6%8C%AA%E5%8A%A8%E4%B8%80%E4%BD%8D%3C%2Fspan%3E%0A%20%20sorted%5Bpos%20%2B%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%5D%20%3D%20sorted%5Bpos%5D%3B%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%90%91%E5%B7%A6%E7%A7%BB%E5%8A%A8%3C%2Fspan%3E%0A%20%20pos--%3B%0A%7D%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E4%B8%8A%E9%9D%A2%20while%20%E5%BE%AA%E7%8E%AF%E5%B7%B2%E7%BB%8F%E5%B0%86%E6%89%80%E6%9C%89%E6%AF%94%20cardN%20%E5%A4%A7%E7%9A%84%E6%95%B0%E9%83%BD%E5%8F%B3%E7%A7%BB%E4%B8%80%E4%BD%8D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E7%A9%BA%E5%87%BA%E6%9D%A5%E7%9A%84%E4%BD%8D%E7%BD%AE%EF%BC%8C%E8%87%AA%E7%84%B6%E5%B0%B1%E6%98%AF%20cardN%20%E5%BA%94%E8%AF%A5%E5%9C%A8%E7%9A%84%E4%BD%8D%E7%BD%AE%E4%BA%86%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E6%B3%A8%E6%84%8F%E6%AC%A1%E8%BF%99%E6%97%B6%20pos%20%E5%B7%B2%E7%BB%8F%E6%98%AF%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AF%94%20cardN%20%E5%B0%8F%E7%9A%84%E6%95%B0%E5%AD%97%E7%9A%84%E4%BD%8D%E7%BD%AE%3C%2Fspan%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E6%89%80%E4%BB%A5%E9%9C%80%E5%8A%A0%E4%B8%80%3C%2Fspan%3E%0Asorted%5Bpos%20%2B%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%5D%20%3D%20cardN%3B</code>')]),E("p",[s._v("这样一来，我们就有了下面这个纯粹是 JavaScript 思维式的代码：")]),E("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EinsertionSort%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Ecards%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E4%B8%BA%E4%BA%86%E4%B8%8D%E6%94%B9%E5%8F%98%E5%8E%9F%E6%95%B0%E7%BB%84%EF%BC%8C%E4%BE%BF%E4%BA%8E%E6%AF%94%E8%BE%83%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E6%88%91%E4%BB%AC%E5%85%88%E5%A4%8D%E5%88%B6%E4%B8%80%E4%BB%BD%3C%2Fspan%3E%0A%20%20cards%20%3D%20cards.slice(%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E)%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20cardN%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Enull%3C%2Fspan%3E%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20sorted%20%3D%20%5B%5D%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E4%BB%8E%E6%9C%80%E5%B7%A6%E4%BE%A7%E5%8F%96%E5%87%BA%E4%B8%80%E5%BC%A0%20%E7%9B%B4%E5%88%B0%E5%8F%96%E5%AE%8C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ewhile%3C%2Fspan%3E%20(cardN%20%3D%20cards.shift())%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20pos%20%3D%20sorted.length%20-%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ewhile%3C%2Fspan%3E%20(pos%20%26gt%3B%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%20%26amp%3B%26amp%3B%20sorted%5Bpos%5D%20%26gt%3B%20cardN)%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E6%AF%94%20cardN%20%E5%A4%A7%E7%9A%84%E9%83%BD%E5%90%91%E5%8F%B3%E6%8C%AA%E5%8A%A8%E4%B8%80%E4%BD%8D%3C%2Fspan%3E%0A%20%20%20%20%20%20sorted%5Bpos%20%2B%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%5D%20%3D%20sorted%5Bpos%5D%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%90%91%E5%B7%A6%E7%A7%BB%E5%8A%A8%3C%2Fspan%3E%0A%20%20%20%20%20%20pos--%3B%0A%20%20%20%20%7D%0A%20%20%20%20sorted%5Bpos%20%2B%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%5D%20%3D%20cardN%3B%0A%20%20%7D%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20sorted%3B%0A%7D</code>')]),E("p",[s._v("OK，一个 JavaScript 版本的插入排序就这样实现啦！")]),E("p",[s._v("不过，聪明如你，肯定会去搜索一番，怎么和其他的不一样啊？没关系，我们来继续改进。")]),E("p",[s._v("在上面的算法实现中，我们预设了一个 sorted 数组，相当于我们桌面的牌。我相信，聪明如你，牌技肯定不差，要照这么一张张往桌子上放，多累！我们整理手上的牌时，一般都是在一只手上完成的好吗？")]),E("p",[s._v("该怎么实现呢？我们直接看代码，相信有了上面的分析，很容易就能看懂。")]),E("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"pre-area",attrs:{width:"0",height:"0"}},[s._v('<code class="hljs lang-javascript">%0A%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22hljs-title%22%3EinsertionSort%3C%2Fspan%3E(%3Cspan%20class%3D%22hljs-params%22%3Ecards%3C%2Fspan%3E)%20%3C%2Fspan%3E%7B%0A%20%20cards%20%3D%20cards.slice(%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E)%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20len%20%3D%20cards.length%3B%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Evar%3C%2Fspan%3E%20cardN%2C%20i%2C%20j%3B%0A%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%B0%86%E5%B7%A6%E4%BE%A7%E7%AC%AC%E4%B8%80%E5%BC%A0%E7%89%8C%E5%85%88%E7%9C%8B%E4%BD%9C%E6%88%91%E4%BB%AC%E7%9A%84%E6%A1%8C%E9%9D%A2%E4%B8%8A%E5%B7%B2%E7%BB%8F%E6%8E%92%E5%A5%BD%E5%BA%8F%E7%9A%84%20sorted%20%E6%95%B0%E7%BB%84%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E6%AF%8F%E6%AC%A1%E5%BE%AA%E7%8E%AF%E6%97%B6%20i%20%E4%BB%A3%E8%A1%A8%E5%BD%93%E5%89%8D%E7%9A%84%E8%A6%81%E6%8F%92%E5%80%BC%E7%9A%84%E9%82%A3%E5%BC%A0%E7%89%8C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Efor%3C%2Fspan%3E%20(i%20%3D%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%3B%20i%20%26lt%3B%20len%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%BD%93%E5%89%8D%E8%A6%81%E7%A7%BB%E5%8A%A8%E7%9A%84%E7%89%8C%3C%2Fspan%3E%0A%20%20%20%20cardN%20%3D%20cards%5Bi%5D%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%80%92%E7%9D%80%E5%BE%80%E5%89%8D%E5%AF%B9%E6%AF%94%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E8%BF%99%E6%98%AF%E6%9C%80%E5%8F%B3%E4%BE%A7%E9%82%A3%E5%BC%A0%E7%89%8C%3C%2Fspan%3E%0A%20%20%20%20j%20%3D%20i%20-%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%3B%0A%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E5%B0%86%20cardN%20%E4%B8%8E%E5%85%B6%E5%B7%A6%E4%BE%A7%E5%B7%B2%E6%8E%92%E5%BA%8F%E7%9A%84%E6%95%B0%E7%BB%84%E9%80%90%E4%B8%80%E5%AF%B9%E6%AF%94%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E7%9B%B4%E8%87%B3%E6%89%BE%E5%88%B0%E6%AF%94%20cardN%20%E5%B0%8F%E7%9A%84%E9%82%A3%E5%BC%A0%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ewhile%3C%2Fspan%3E%20(j%20%26gt%3B%3D%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C%2Fspan%3E%20%26amp%3B%26amp%3B%20cards%5Bj%5D%20%26gt%3B%20cardN)%20%7B%0A%20%20%20%20%20%20cards%5Bj%20%2B%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%5D%20%3D%20cards%5Bj%5D%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E7%9B%B8%E5%BD%93%E4%BA%8E%20cardN%20%E9%80%90%E4%B8%80%E4%B8%8D%E5%81%9C%E5%9C%B0%E4%B8%8E%E5%85%B6%E5%B7%A6%E4%BE%A7%E6%8E%92%E5%A5%BD%E5%BA%8F%E7%9A%84%E7%89%8C%E4%BA%A4%E6%8D%A2%E4%BD%8D%E7%BD%AE%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E7%9B%B4%E5%88%B0%E6%89%BE%E5%88%B0%E6%AF%94%20cardN%20%E5%B0%8F%E7%9A%84%E9%82%A3%E5%BC%A0%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E4%BD%86%E4%B8%8B%E9%9D%A2%E8%BF%99%E5%8F%A5%E6%B2%A1%E5%BF%85%E8%A6%81%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20cards%5Bj%5D%20%3D%20cardN%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20j--%3B%0A%20%20%20%20%7D%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E%2F%2F%20%E6%8F%92%E5%85%A5%20cardN%20%3C%2Fspan%3E%0A%20%20%20%20cards%5Bj%20%2B%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C%2Fspan%3E%5D%20%3D%20cardN%3B%0A%20%20%7D%0A%0A%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C%2Fspan%3E%20cards%3B%0A%7D</code>')]),E("p",[s._v("最近刚刚给博客新增了复制代码的功能（PC 下方可见）。可以直接复制前面的代码，测试一下~")]),E("p",[s._v("简单分析插入排序的时间复杂度。考虑两个极端情况。")]),E("p",[s._v("最好的情况是给定的数组已经排序好的，每次拿到的数向左对比一次就可。对比一次后，while 循环根本就不会进入。所以 for 循环中每次只需要一次对比，算起来最后就是 (n - 1) 次循环。")]),E("p",[s._v("最差的情况是数组是完全逆序的，每次拿到的数必须一直向前进行对比，直到最左侧的数字为止。考虑第 i 个数，需要与前面对比 (i - 1) 次，累计起来总次数就是 "),E("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("0 + 1 + 2 + 3 + (n - 1) = n * (n - 1) / 2")]),s._v(" 次。")]),E("p",[s._v("取最好情况与最差情况的平均数："),E("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"codespan",attrs:{width:"0",height:"0"}},[s._v("((n - 1) + n * (n - 1) / 2) / 2 = (n^2 + n -2) / 2")]),s._v("。")]),E("p",[s._v("经过上面粗略的估算，可以得出插入排序的时间复杂度为 O(n^2)。")])])]),s.post.prev.title||s.post.next.title?E("nav",{staticClass:"pagination"},[s.post.prev.title?E("nuxt-link",{staticClass:"prev",attrs:{to:"/post/"+s.post.prev.pathname,title:s.post.prev.title}},[s._v("« "+s._s(s.post.prev.title))]):s._e(),s.post.next.title?E("nuxt-link",{staticClass:"next",attrs:{to:"/post/"+s.post.next.pathname,title:s.post.next.title}},[s._v(s._s(s.post.next.title)+" »")]):s._e()],1):s._e(),E("gitalk",{attrs:{tags:s.tags}})],1)};n._withStripped=!0;var e={render:n,staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("第三步，拿出手上左侧第一张 cardC，将它和桌面上的两张牌进行比较。这时候，因为 cardB(3) < cardC(5) < cardA(7)，所以我们将这次从手上拿出的牌"),a("strong",[this._v("插入")]),this._v("到桌面两张牌之间。")])}]};a.a=e}});