(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{184:function(t,e,r){"use strict";var n=r(0),component=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("img",{attrs:{src:"/member/images/banner_gsjj.png"}})])}],!1,null,null,null);e.a=component.exports},207:function(t,e,r){"use strict";var n={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},d=r(0),component=Object(d.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"side_left"},[r("ul",[t._m(0),t._v(" "),r("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("order")?"active":""},[r("a",{attrs:{href:t.mid+"-order"}},[r("span",[t._v("在线下单")])])]),t._v(" "),r("li",{staticClass:"side_memu",class:-1===t.tpath.indexOf("order")?"active":""},[r("span",[t._v("查询服务")])]),t._v(" "),r("ul",{staticClass:"side_submemu "},[r("li",{class:-1!==t.tpath.indexOf("chajian")?"now":""},[r("a",{attrs:{href:t.mid+"-chajian"}},[r("span",[t._v("查件（物流追踪）")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("line")?"now":""},[r("a",{attrs:{href:t.mid+"-line"}},[r("span",[t._v("物流专线")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("wangdian")?"now":""},[r("a",{attrs:{href:t.mid+"-wangdian"}},[r("span",[t._v("网点分布")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("huo")?"now":""},[r("a",{attrs:{href:t.mid+"-huo"}},[r("span",[t._v("货源信息")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"side_title"},[e("span",[this._v("客户服务")])])}],!1,null,null,null);e.a=component.exports},563:function(t,e,r){"use strict";r.r(e);var n=r(5),d=r(184),_=r(207),c={components:{MemberBanner:d.a,MemberSidebar:_.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"},{rel:"stylesheet",href:"/member/css/find_order.css"}],script:[{src:"https://webapi.amap.com/maps?v=1.4.8&key=e61aa7ddc6349acdb3b57c062080f730&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder&callback=loadedGaodeMap"},{src:"//webapi.amap.com/ui/1.0/main.js"},{src:"/js/domap.js"}]},layout:"member",mounted(){seajs.use(["/js/city-picker.js","/member/js/index.js","/js/collection.js","/member/js/find_order.js"],function(){})},fetch:t=>Object(n.a)(function*(){let e=t.store,r=t.params,n=(t.$axios,t.error);e.commit("member/setId",r.id),yield e.dispatch("member/GETCOMPANYINFO",r.id).catch(t=>{"network"===t.type?n({statusCode:500,message:t.msg}):n({statusCode:404,message:t.msg})})})()},l=r(0),component=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("MemberBanner"),this._v(" "),e("div",{staticClass:"main"},[e("MemberSidebar"),this._v(" "),this._m(0)],1)],1)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"right main_nr"},[r("div",{staticClass:"find_order_right find_order_tip"},[r("h3",{staticClass:"find_order_title"},[t._v("运单查询")]),t._v(" "),r("div",{staticClass:"find_order_search"},[r("div",{staticClass:"find_order_search_tip"},[t._v("请输入运单号")]),t._v(" "),r("input",{attrs:{id:"find_order_input",type:"text"}}),r("span",{staticClass:"find_order_search_btn"},[t._v("查询")])]),t._v(" "),r("div",{staticClass:"find_order_default find_order_con hide"},[r("p",[t._v("\n              无内容真可怕"),r("br"),t._v("你试试查个运单号就有了！\n            ")])]),t._v(" "),r("div",{staticClass:"find_order_content find_order_content_info find_order_con hide"},[r("div",{staticClass:"find_order_tabs"},[r("a",{staticClass:"active",attrs:{href:"javascript:;"}},[t._v("运单详情")]),t._v(" "),r("a",{attrs:{href:"javascript:;"}},[t._v("轨迹跟踪")])]),t._v(" "),r("div",{attrs:{id:"find_order_map"}}),t._v(" "),r("span",{staticClass:"return_search"},[t._v("返回搜索列表")]),t._v(" "),r("div",{staticClass:"find_order_company find_order_desc"}),t._v(" "),r("div",{staticClass:"find_order_list find_order_desc"},[r("ul")])]),t._v(" "),r("div",{staticClass:"find_order_search_list find_order_con find_order_content hide"},[r("div",{staticClass:"find_order_company"},[t._v("为您找到“"),r("span",{attrs:{title:"11111111"}},[t._v("111111")]),t._v("”相关结果"),r("i",[t._v("2")]),t._v("个")]),t._v(" "),r("div",{staticClass:"find_order_company_list"},[r("ol")])]),t._v(" "),r("div",{staticClass:"find_order_none find_order_con hide"},[r("div",{staticClass:"none_tip_text"},[t._v("抱歉暂无查询记录")]),t._v(" "),r("div",{staticClass:"none_tip_desc"},[t._v("请您仔细核对物流公司名称和运单号码")])])])])}],!1,null,null,null);e.default=component.exports}}]);