(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{164:function(t,e,n){"use strict";var r=n(1),component=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("img",{attrs:{src:"/member/images/banner_gsjj.png"}})])}],!1,null,null,null);e.a=component.exports},179:function(t,e,n){"use strict";var r={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},c=n(1),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side_left"},[n("ul",[t._m(0),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("jianjie")?"active":""},[n("a",{attrs:{href:t.mid+"-jianjie"}},[n("span",[t._v("公司简介")])])]),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("contactus")?"active":""},[n("a",{attrs:{href:t.mid+"-contactus"}},[n("span",[t._v("联系我们")])])]),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("cpfw")?"active":""},[n("a",{attrs:{href:t.mid+"-cpfw"}},[n("span",[t._v("产品服务")])])]),t._v(" "),-1!==t.tpath.indexOf("cpfw")?n("ul",{staticClass:"side_submemu"},[n("li",{class:-1===t.tpath.indexOf("cpfw2")?"now":""},[n("a",{attrs:{href:t.mid+"-cpfw"}},[n("span",[t._v("主营产品")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("cpfw2")?"now":""},[n("a",{attrs:{href:t.mid+"-cpfw2"}},[n("span",[t._v("增值服务")])])])]):t._e()])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"side_title"},[e("span",[this._v("关于我们")])])}],!1,null,null,null);e.a=component.exports},491:function(t,e,n){"use strict";n.r(e);var r=n(4),c=(n(34),n(164)),l=n(179),_={components:{MemberBanner:c.a,MemberSidebar:l.a},layout:"member",head:{link:[{rel:"stylesheet",href:"/member/css/list.css"},{rel:"stylesheet",href:"/member/css/contactUs.css"}]},computed:{company(){return this.$store.state.member.company}},mounted(){seajs.use(["http://api.map.baidu.com/getscript?v=2.0&ak=e0abRWFWOrgmN7emYjQGPj4Z0vyTVTfo&services=&t=20190102133327","/member/js/index.js","/index/js/collection.js"],function(){var map=new BMap.Map("allmap"),t=(new Object,member_01().jwd.split(",")),e=new BMap.Point(parseFloat(t[0]),parseFloat(t[1]));map.centerAndZoom(e,17);var marker=new BMap.Marker(e);map.addOverlay(marker),marker.setAnimation(BMAP_ANIMATION_BOUNCE),map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),map.setCurrentCity("广州"),map.enableScrollWheelZoom(!0);var n={type:BMAP_NAVIGATION_CONTROL_SMALL};map.addControl(new BMap.NavigationControl(n))})},fetch:t=>Object(r.a)(function*(){let e=t.store,n=t.params,r=(t.$axios,t.error);e.commit("member/setId",n.id),yield e.dispatch("member/GETCOMPANYINFO",n.id).catch(t=>{"network"===t.type?r({statusCode:500,message:t.msg}):r({statusCode:404,message:t.msg})})})()},m=n(1),component=Object(m.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MemberBanner"),t._v(" "),n("div",{staticClass:"main"},[n("MemberSidebar"),t._v(" "),n("div",{staticClass:"contact main_nr"},[t._m(0),t._v(" "),n("ul",{},[n("li",{staticClass:"contact1"},[n("p",{staticClass:"p1",attrs:{id:"nr091"}},[t._v(t._s(t.company.companyName))]),t._v(" "),n("p",[t._v("联系人："),n("em",{attrs:{id:"nr092"}},[t._v(t._s(t.company.contactsName))])]),t._v(" "),n("p",[t._v("联系电话："),n("em",{attrs:{id:"nr093"}},[t._v(t._s(t.company.mobile))])]),t._v(" "),n("p",[t._v("QQ："),n("em",{attrs:{id:"nr094"}},[t._v(t._s(t.company.qq))])]),t._v(" "),n("p",[t._v("公司地址："),n("em",{attrs:{id:"nr095"}},[t._v(t._s(t.company.address))])])]),t._v(" "),n("li",{staticClass:"contact2"},[n("p",{staticClass:"p1"},[t._v("企业信息")]),t._v(" "),n("p",[t._v("公司名称："),n("em",{attrs:{id:"nr096"}},[t._v(t._s(t.company.companyName))])]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("法人/负责人："),n("em",{attrs:{id:"nr098"}},[t._v(t._s(t.company.corporation))])]),t._v(" "),t._m(2),t._v(" "),t._m(3)])]),t._v(" "),n("div",{staticClass:"map"},[n("div",{staticStyle:{overflow:"hidden",position:"relative","z-index":"0","background-color":"rgb(243, 241, 236)",color:"rgb(0, 0, 0)","text-align":"left"},attrs:{id:"allmap"}}),t._v(" "),n("div",{staticClass:"detail"},[n("div",{staticClass:"detail-main"},[n("dl",{staticClass:"address"},[t._m(4),t._v(" "),n("dd",{attrs:{id:"nr0911"}},[t._v(t._s(t.company.address))])]),t._v(" "),n("dl",[t._m(5),t._v(" "),n("dd",{attrs:{id:"nr0912"}},[t._v(t._s(t.company.corporation))])]),t._v(" "),n("dl",{staticClass:"server-phone"},[t._m(6),t._v(" "),n("dd",{attrs:{id:"nr0913"}},[t._v(t._s(t.company.mobile))])]),t._v(" "),n("dl",{staticClass:"website"},[t._m(7),t._v(" "),n("dd",{attrs:{id:"nr0914"}},[t._v(t._s(t.company.companyName))])])])])])])],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nr_bt"},[e("div",{staticClass:"nr_bt1"},[e("span",[this._v("联系我们")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("营业执照："),e("em",{attrs:{id:"nr097"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("公司成立时间："),e("em",{attrs:{id:"nr099"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("代收货款："),e("em",{attrs:{id:"nr0910"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("div",{staticClass:"bg-img first"}),this._v(" "),e("p",[this._v("地址")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",{staticClass:"postal-code"},[e("div",{staticClass:"bg-img"}),this._v(" "),e("p",[this._v("法人代表")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("div",{staticClass:"bg-img"}),this._v(" "),e("p",[this._v("全国统一客服热线")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("div",{staticClass:"bg-img"}),this._v(" "),e("p",[this._v("公司名称")])])}],!1,null,null,null);e.default=component.exports}}]);