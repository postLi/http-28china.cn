(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{185:function(t,e,n){"use strict";var l=n(0),component=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("img",{attrs:{src:"/member/images/banner_gsjj.png"}})])}],!1,null,null,null);e.a=component.exports},201:function(t,e,n){"use strict";var l={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},c=n(0),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side_left"},[n("ul",[t._m(0),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("jianjie")?"active":""},[n("a",{attrs:{href:t.mid+"-jianjie"}},[n("span",[t._v("公司简介")])])]),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("contactus")?"active":""},[n("a",{attrs:{href:t.mid+"-contactus"}},[n("span",[t._v("联系我们")])])]),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("cpfw")?"active":""},[n("a",{attrs:{href:t.mid+"-cpfw"}},[n("span",[t._v("产品服务")])])]),t._v(" "),-1!==t.tpath.indexOf("cpfw")?n("ul",{staticClass:"side_submemu"},[n("li",{class:-1===t.tpath.indexOf("cpfw2")?"now":""},[n("a",{attrs:{href:t.mid+"-cpfw"}},[n("span",[t._v("主营产品")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("cpfw2")?"now":""},[n("a",{attrs:{href:t.mid+"-cpfw2"}},[n("span",[t._v("增值服务")])])])]):t._e()])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"side_title"},[e("span",[this._v("关于我们")])])}],!1,null,null,null);e.a=component.exports},631:function(t,e,n){"use strict";n.r(e);var l=n(5),c=n(185),r=n(201),_={components:{MemberBanner:c.a,MemberSidebar:r.a},computed:{opdata(){return this.$store.state.member.company.otherServiceCodeList},psdata(){return this.$store.state.member.company.productServiceCodeList}},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"}]},layout:"member",mounted(){seajs.use(["/member/js/index.js","/js/collection.js"])},fetch:t=>Object(l.a)(function*(){let e=t.store,n=t.params,l=(t.$axios,t.error);e.commit("member/setId",n.id),yield e.dispatch("member/GETCOMPANYINFO",n.id).catch(t=>{"network"===t.type?l({statusCode:500,message:t.msg}):l({statusCode:404,message:t.msg})})})()},f=n(0),component=Object(f.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MemberBanner"),t._v(" "),n("div",{staticClass:"main"},[n("MemberSidebar"),t._v(" "),n("div",{staticClass:"right main_nr"},[t._m(0),t._v(" "),n("div",{staticClass:"nr"},[n("ul",[-1!==t.opdata.indexOf("AF02501")?n("li",{staticClass:"fw",attrs:{id:"fw01"}},[t._m(1),t._v(" "),n("p",{staticClass:"p2"},[t._v("收取客户货物后，将货物送到指定收件对象的服务。")])]):t._e(),t._v(" "),-1!==t.opdata.indexOf("AF02502")?n("li",{staticClass:"fw",attrs:{id:"fw02"}},[t._m(2),t._v(" "),n("p",{staticClass:"p2"},[t._v("保价运输是我司与您共同确定的以托运人申明货物价值为基础的一种特殊运输方式，您向我司声明其托运货物的实际价值，按保价运输的货物，托运人除缴纳运输费用外，按照规定缴纳一定的保价费用，若货物在运输过程中出险，我司将按照托运人的声明价值赔偿一定损失。")])]):t._e(),t._v(" "),-1!==t.opdata.indexOf("AF02503")?n("li",{staticClass:"fw",attrs:{id:"fw03"}},[t._m(3),t._v(" "),n("p",{staticClass:"p2"},[t._v("为您提供派送末端支付运费服务，当货物到达收货人时由收货人支付运费。")])]):t._e(),t._v(" "),-1!==t.opdata.indexOf("AF02504")?n("li",{staticClass:"fw",attrs:{id:"fw04"}},[t._m(4),t._v(" "),n("p",{staticClass:"p2"},[t._v("按照寄件方（卖家）与收件方（买家）达成交易协议的要求，为寄件方提供承运、寄递物品的同时，并代寄件方向收件方收取货款，同时按照约定时间将货款返还给寄件方的服务。")])]):t._e(),t._v(" "),-1!==t.opdata.indexOf("AF02505")?n("li",{staticClass:"fw",attrs:{id:"fw05"}},[t._m(5),t._v(" "),n("p",{staticClass:"p2"},[t._v("按照客户指令到指定地点收取货物的服务。")])]):t._e(),t._v(" "),-1!==t.opdata.indexOf("AF02506")?n("li",{staticClass:"fw",attrs:{id:"fw06"}},[t._m(6),t._v(" "),n("p",{staticClass:"p2"},[t._v("客户可向物流公司申请开具货物运输发票。")])]):t._e(),t._v(" "),-1!==t.opdata.indexOf("AF02507")?n("li",{staticClass:"fw",attrs:{id:"fw07"}},[t._m(7),t._v(" "),n("p",{staticClass:"p2"},[t._v("在货物正常签收后，将寄件客户提供的需收件客户签名的收条或收货单等单据返还寄件客户的服务。")])]):t._e(),t._v(" "),-1!==t.opdata.indexOf("AF02508")?n("li",{staticClass:"fw",attrs:{id:"fw08"}},[t._m(8),t._v(" "),n("p",{staticClass:"p2"},[t._v("承诺在规定时间内送达的时效保障服务。")])]):t._e()])])])],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nr_bt"},[e("div",{staticClass:"nr_bt1"},[e("span",[this._v("增值服务")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("送货上门")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("保价运输")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("运费到付")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("代收货款")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("上门提货")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("开发票")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("签单回收")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("时效保障")])])}],!1,null,null,null);e.default=component.exports}}]);