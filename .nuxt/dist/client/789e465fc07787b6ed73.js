(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{180:function(t,e,n){"use strict";var r=n(1),component=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("img",{attrs:{src:"/member/images/banner_gsjj.png"}})])}],!1,null,null,null);e.a=component.exports},191:function(t,e,n){"use strict";var r={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},c=n(1),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side_left"},[n("ul",[t._m(0),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("jianjie")?"active":""},[n("a",{attrs:{href:t.mid+"-jianjie"}},[n("span",[t._v("公司简介")])])]),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("contactus")?"active":""},[n("a",{attrs:{href:t.mid+"-contactus"}},[n("span",[t._v("联系我们")])])]),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("cpfw")?"active":""},[n("a",{attrs:{href:t.mid+"-cpfw"}},[n("span",[t._v("产品服务")])])]),t._v(" "),-1!==t.tpath.indexOf("cpfw")?n("ul",{staticClass:"side_submemu"},[n("li",{class:-1===t.tpath.indexOf("cpfw2")?"now":""},[n("a",{attrs:{href:t.mid+"-cpfw"}},[n("span",[t._v("主营产品")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("cpfw2")?"now":""},[n("a",{attrs:{href:t.mid+"-cpfw2"}},[n("span",[t._v("增值服务")])])])]):t._e()])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"side_title"},[e("span",[this._v("关于我们")])])}],!1,null,null,null);e.a=component.exports},523:function(t,e,n){"use strict";n.r(e);var r=n(5),c=n(180),l=n(191),m={components:{MemberBanner:c.a,MemberSidebar:l.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"}]},layout:"member",computed:{company(){return this.$store.state.member.company}},mounted(){seajs.use(["/member/js/index.js","/js/collection.js"])},fetch:t=>Object(r.a)(function*(){let e=t.store,n=t.params,r=(t.$axios,t.error);e.commit("member/setId",n.id),yield e.dispatch("member/GETCOMPANYINFO",n.id).catch(t=>{"network"===t.type?r({statusCode:500,message:t.msg}):r({statusCode:404,message:t.msg})})})()},d=n(1),component=Object(d.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("MemberBanner"),this._v(" "),e("div",{staticClass:"main"},[e("MemberSidebar"),this._v(" "),e("div",{staticClass:"right main_nr"},[this._m(0),this._v(" "),e("div",{staticClass:"nr",attrs:{id:"nr083"}},[this._v(this._s(this.company.companyName||"本司")+"是一家经国家主管部门批准的专业经营物流运输业务的的现代化物流运输企业，集运输、仓储、包装、配送信息处理一体化于一身。经过多年的发展公司已拥有一支专业化的物流管理和从业人员队伍并拥有数目庞大的运输车队。")])])],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nr_bt"},[e("div",{staticClass:"nr_bt1"},[e("span",[this._v("公司新闻")])])])}],!1,null,null,null);e.default=component.exports}}]);