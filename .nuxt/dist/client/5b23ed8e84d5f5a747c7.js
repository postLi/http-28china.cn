(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{238:function(t,e,n){"use strict";var r={props:{url:{type:String,default:"/member/images/banner_gsjj.jpg"}}},c=n(2),component=Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("img",{attrs:{src:this.url}})])},[],!1,null,null,null);e.a=component.exports},261:function(t,e,n){"use strict";var r={data:function(){return{tpath:""}},computed:{mid:function(){return this.$store.state.member.id}},mounted:function(){this.tpath=window.location.pathname}},c=n(2),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side_left"},[n("ul",[t._m(0),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("jianjie")?"active":""},[n("a",{attrs:{href:t.mid+"-jianjie"}},[n("span",[t._v("公司简介")])])]),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("contactus")?"active":""},[n("a",{attrs:{href:t.mid+"-contactus"}},[n("span",[t._v("联系我们")])])]),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("cpfw")?"active":""},[n("a",{attrs:{href:t.mid+"-cpfw"}},[n("span",[t._v("产品服务")])])]),t._v(" "),-1!==t.tpath.indexOf("cpfw")?n("ul",{staticClass:"side_submemu"},[n("li",{class:-1===t.tpath.indexOf("cpfw2")?"now":""},[n("a",{attrs:{href:t.mid+"-cpfw"}},[n("span",[t._v("主营产品")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("cpfw2")?"now":""},[n("a",{attrs:{href:t.mid+"-cpfw2"}},[n("span",[t._v("增值服务")])])])]):t._e()])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"side_title"},[e("span",[this._v("关于我们")])])}],!1,null,null,null);e.a=component.exports},726:function(t,e,n){"use strict";n.r(e);n(62);var r=n(9),c=n(238),l=n(261),m={components:{MemberBanner:c.a,MemberSidebar:l.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"}]},layout:"member",mounted:function(){seajs.use(["/member/js/index.js","/js/collection.js"])},fetch:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,r=e.params,e.$axios,c=e.error,n.commit("member/setId",r.id),t.next=4,n.dispatch("member/GETCOMPANYINFO",r.id).catch(function(t){"network"===t.type?c({statusCode:500,message:t.msg}):c({statusCode:404,message:t.msg})});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},o=n(2),component=Object(o.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("MemberBanner"),this._v(" "),e("div",{staticClass:"main"},[e("MemberSidebar"),this._v(" "),this._m(0)],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right main_nr"},[e("div",{staticClass:"nr_bt"},[e("div",{staticClass:"nr_bt1"},[e("span",[this._v("公司简介")])])]),this._v(" "),e("div",{staticClass:"nr",attrs:{id:"webnotice"}})])}],!1,null,null,null);e.default=component.exports}}]);