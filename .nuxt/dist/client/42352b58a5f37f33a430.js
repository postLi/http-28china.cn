(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{235:function(t,e,r){"use strict";var n=r(2),component=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("img",{attrs:{src:"/member/images/banner_gsjj.png"}})])}],!1,null,null,null);e.a=component.exports},260:function(t,e,r){"use strict";var n={data:function(){return{tpath:""}},computed:{mid:function(){return this.$store.state.member.id}},mounted:function(){this.tpath=window.location.pathname}},c=r(2),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"side_left"},[r("ul",[t._m(0),t._v(" "),r("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("order")?"active":""},[r("a",{attrs:{href:t.mid+"-order"}},[r("span",[t._v("在线下单")])])]),t._v(" "),r("li",{staticClass:"side_memu",class:-1===t.tpath.indexOf("order")?"active":""},[r("span",[t._v("查询服务")])]),t._v(" "),r("ul",{staticClass:"side_submemu "},[r("li",{class:-1!==t.tpath.indexOf("chajian")?"now":""},[r("a",{attrs:{href:t.mid+"-chajian"}},[r("span",[t._v("查件（物流追踪）")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("line")?"now":""},[r("a",{attrs:{href:t.mid+"-line"}},[r("span",[t._v("物流专线")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("wangdian")?"now":""},[r("a",{attrs:{href:t.mid+"-wangdian"}},[r("span",[t._v("网点分布")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("huo")?"now":""},[r("a",{attrs:{href:t.mid+"-huo"}},[r("span",[t._v("货源信息")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"side_title"},[e("span",[this._v("客户服务")])])}],!1,null,null,null);e.a=component.exports},660:function(t,e,r){"use strict";r.r(e);r(32),r(3),r(86),r(62);var n=r(9),c=r(235),l=r(260),o={components:{MemberBanner:c.a,MemberSidebar:l.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"}]},layout:"member",data:function(){return{query:{belongCityName:""}}},mounted:function(){var t=this.$store.state.member.id,e=this;seajs.use(["/member/js/jquery.pagination.min.js"],function(){seajs.use(["/js/city-picker.js"],function(){$("#pagination1").pagination({currentPage:1,totalPage:e.$store.state.member.pointTotal,callback:function(t){$("#current1").text(t),e.$store.dispatch("member/GETCOMPANYPOINTINFO",{companyId:e.$route.params.id,pageSize:10,currentPage:t}),window.location.href="#top"}});var r=$.getParams("startp"),n=$.getParams("startc"),c=$.getParams("starta");$(".search_input3 input").citypicker({province:r,city:n,district:c}),$(".search_search").click(function(){var e=[];$(".search_input3 .select-item").each(function(i,t){e.push($(this).text())});var r=e[0],n=e[1],c=e[2];r||(r=""),n||(n=""),c||(c="");var address,l="&startp="+r+"&startc="+n+"&starta="+c;(address="&address="+(address=r+n+c))||(address=""),address=encodeURI(address),window.location="/member/"+t+"-wangdian?"+address+l})})})},fetch:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,c,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=e.params,e.$axios,c=e.error,l=e.query,r.commit("member/setId",n.id),t.next=4,Promise.all([r.dispatch("member/GETCOMPANYINFO",n.id).catch(function(t){"network"===t.type?c({statusCode:500,message:t.msg}):c({statusCode:404,message:t.msg})}),r.dispatch("member/GETCOMPANYPOINTINFO",{companyId:n.id,pageSize:10,currentPage:1,belongCityName:(l.startp||"")+(l.startc||"")})]);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},m=r(2),component=Object(m.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("MemberBanner"),t._v(" "),r("div",{staticClass:"main"},[r("MemberSidebar"),t._v(" "),r("div",{staticClass:"right",attrs:{id:"js004"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._l(t.$store.state.member.pointList,function(e,n){return r("div",{key:n,staticClass:"wd_item"},[r("ul",[r("li",{staticClass:"wd_item01"},[r("span",{attrs:{title:e.pointName,id:"nr031"}},[t._v(t._s(e.pointName))])]),t._v(" "),r("li",{staticClass:"wd_item02"},[r("span",{attrs:{id:"nr032"}},[t._v(t._s(e.belongCityName))])]),t._v(" "),r("li",{staticClass:"wd_item03"},[r("span",{attrs:{id:"nr033"}},[t._v(t._s(e.name))])]),t._v(" "),r("li",{staticClass:"wd_item04"},[r("span",{attrs:{id:"nr034"}},[t._v(t._s(e.mobile))])]),t._v(" "),r("li",{staticClass:"wd_item05"},[r("span",{attrs:{id:"nr035",title:e.address||""}},[t._v(t._s((e.address||"").replace(e.belongCityName,"")))])]),t._v(" "),r("li",{staticClass:"wd_item06"},[r("a",{attrs:{href:"/member/"+t.$store.state.member.id+"-order"}},[r("input",{attrs:{readonly:"",value:"下单"}})])])])])})],2),t._v(" "),t._m(3)],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right_bt1"},[e("div",{staticClass:"right_bt1_1"},[e("img",{attrs:{src:"/member/images/wd.png"}}),e("span",[this._v("网点分布")])]),this._v(" "),e("div",{staticClass:"right_bt1_2"},[e("div",{staticClass:"search_input search_input3"},[e("input",{staticStyle:{height:"100%"},attrs:{"data-toggle":"city-picker","data-level":"district",placeholder:"请选择 省-市"}})]),this._v(" "),e("div",{staticClass:"search_button"},[e("input",{staticClass:"search_search",attrs:{readonly:"",value:"搜索"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"right_bt2"},[r("ul",[r("li",{staticClass:"bt_01"},[t._v("网点名称")]),t._v(" "),r("li",{staticClass:"bt_02"},[t._v("所在地")]),t._v(" "),r("li",{staticClass:"bt_03"},[t._v("联系人")]),t._v(" "),r("li",{staticClass:"bt_04"},[t._v("联系电话")]),t._v(" "),r("li",{staticClass:"bt_05"},[t._v("详细地址")]),t._v(" "),r("li",{staticClass:"bt_06"},[t._v("操作")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wd_none"},[e("span",[this._v("暂无网点信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"200px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination1"}}),this._v(" "),e("div",{staticClass:"info fl"})])}],!1,null,null,null);e.default=component.exports}}]);