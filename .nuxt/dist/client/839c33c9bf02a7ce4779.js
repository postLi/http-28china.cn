(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{157:function(t,e,n){"use strict";var r=n(1),component=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("img",{attrs:{src:"/member/images/banner_gsjj.png"}})])}],!1,null,null,null);e.a=component.exports},164:function(t,e,n){"use strict";var r={data:()=>({tpath:""}),mounted(){this.tpath=window.location.pathname}},_=n(1),component=Object(_.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side_left"},[n("ul",[t._m(0),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("order")?"active":""},[n("a",{attrs:{href:t.$store.state.member.id+"-order"}},[n("span",[t._v("在线下单")])])]),t._v(" "),n("li",{staticClass:"side_memu",class:-1===t.tpath.indexOf("order")?"active":""},[n("span",[t._v("查询服务")])]),t._v(" "),n("ul",{staticClass:"side_submemu "},[n("li",{class:-1!==t.tpath.indexOf("chajian")?"now":""},[n("a",{attrs:{href:t.$store.state.member.id+"-chajian"}},[n("span",[t._v("查件（物流追踪）")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("line")?"now":""},[n("a",{attrs:{href:t.$store.state.member.id+"-line"}},[n("span",[t._v("物流专线")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("wangdian")?"now":""},[n("a",{attrs:{href:t.$store.state.member.id+"-wangdian"}},[n("span",[t._v("网点分布")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("huo")?"now":""},[n("a",{attrs:{href:t.$store.state.member.id+"-huo"}},[n("span",[t._v("货源信息")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"side_title"},[e("span",[this._v("客户服务")])])}],!1,null,null,null);e.a=component.exports},444:function(t,e,n){"use strict";n.r(e);var r=n(4),_=n(157),d=n(164),c={components:{MemberBanner:_.a,MemberSidebar:d.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"},{rel:"stylesheet",href:"/member/css/find_order.css"}]},layout:"member",mounted(){seajs.use(["/index/js/city-picker.data.js","/index/js/city-picker.js","/member/js/index.js","/index/js/collection.js","/member/js/find_order.js"],function(){})},fetch:t=>Object(r.a)(function*(){let e=t.store,n=t.params;t.$axios,t.error;e.commit("member/setId",n.id),yield e.dispatch("member/GETCOMPANYINFO",n.id)})()},l=n(1),component=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("MemberBanner"),this._v(" "),e("div",{staticClass:"main"},[e("MemberSidebar"),this._v(" "),this._m(0)],1)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right main_nr"},[n("div",{staticClass:"find_order_right find_order_tip"},[n("h3",{staticClass:"find_order_title"},[t._v("运单查询")]),t._v(" "),n("div",{staticClass:"find_order_search"},[n("div",{staticClass:"find_order_search_tip"},[t._v("请输入运单号")]),t._v(" "),n("input",{attrs:{id:"find_order_input",type:"text"}}),n("span",{staticClass:"find_order_search_btn"},[t._v("查询")])]),t._v(" "),n("div",{staticClass:"find_order_default find_order_con hide"},[n("p",[t._v("\n              无内容真可怕"),n("br"),t._v("你试试查个运单号就有了！\n            ")])]),t._v(" "),n("div",{staticClass:"find_order_content find_order_content_info find_order_con hide"},[n("span",{staticClass:"return_search"},[t._v("返回搜索列表")]),t._v(" "),n("div",{staticClass:"find_order_company"}),t._v(" "),n("div",{staticClass:"find_order_list"},[n("ul")])]),t._v(" "),n("div",{staticClass:"find_order_search_list find_order_con find_order_content hide"},[n("div",{staticClass:"find_order_company"},[t._v("为您找到“"),n("span",{attrs:{title:"11111111"}},[t._v("111111")]),t._v("”相关结果"),n("i",[t._v("2")]),t._v("个")]),t._v(" "),n("div",{staticClass:"find_order_company_list"},[n("ol")])]),t._v(" "),n("div",{staticClass:"find_order_none find_order_con hide"},[n("div",{staticClass:"none_tip_text"},[t._v("抱歉暂无查询记录")]),t._v(" "),n("div",{staticClass:"none_tip_desc"},[t._v("请您仔细核对物流公司名称和运单号码")])])])])}],!1,null,null,null);e.default=component.exports}}]);