(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{184:function(t,e,c){"use strict";var l=c(0),component=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("img",{attrs:{src:"/member/images/banner_gsjj.png"}})])}],!1,null,null,null);e.a=component.exports},201:function(t,e,c){"use strict";var l={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},n=c(0),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"side_left"},[c("ul",[t._m(0),t._v(" "),c("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("jianjie")?"active":""},[c("a",{attrs:{href:t.mid+"-jianjie"}},[c("span",[t._v("公司简介")])])]),t._v(" "),c("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("contactus")?"active":""},[c("a",{attrs:{href:t.mid+"-contactus"}},[c("span",[t._v("联系我们")])])]),t._v(" "),c("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("cpfw")?"active":""},[c("a",{attrs:{href:t.mid+"-cpfw"}},[c("span",[t._v("产品服务")])])]),t._v(" "),-1!==t.tpath.indexOf("cpfw")?c("ul",{staticClass:"side_submemu"},[c("li",{class:-1===t.tpath.indexOf("cpfw2")?"now":""},[c("a",{attrs:{href:t.mid+"-cpfw"}},[c("span",[t._v("主营产品")])])]),t._v(" "),c("li",{class:-1!==t.tpath.indexOf("cpfw2")?"now":""},[c("a",{attrs:{href:t.mid+"-cpfw2"}},[c("span",[t._v("增值服务")])])])]):t._e()])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"side_title"},[e("span",[this._v("关于我们")])])}],!1,null,null,null);e.a=component.exports},561:function(t,e,c){"use strict";c.r(e);var l=c(5),n=c(184),r=c(201),_={components:{MemberBanner:n.a,MemberSidebar:r.a},computed:{opdata(){return this.$store.state.member.company.otherServiceCodeList},psdata(){return this.$store.state.member.company.productServiceCodeList}},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"}]},layout:"member",mounted(){seajs.use(["/member/js/index.js","/js/collection.js"])},fetch:t=>Object(l.a)(function*(){let e=t.store,c=t.params,l=(t.$axios,t.error);e.commit("member/setId",c.id),yield e.dispatch("member/GETCOMPANYINFO",c.id).catch(t=>{"network"===t.type?l({statusCode:500,message:t.msg}):l({statusCode:404,message:t.msg})})})()},m=c(0),component=Object(m.a)(_,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("MemberBanner"),t._v(" "),c("div",{staticClass:"main"},[c("MemberSidebar"),t._v(" "),c("div",{staticClass:"right main_nr"},[t._m(0),t._v(" "),c("div",{staticClass:"nr"},[c("ul",[-1!==t.psdata.indexOf("AF02701")?c("li",{staticClass:"cp",attrs:{id:"cp01"}},[t._m(1),t._v(" "),c("p",{staticClass:"p2"},[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]):t._e(),t._v(" "),-1!==t.psdata.indexOf("AF02702")?c("li",{staticClass:"cp",attrs:{id:"cp02"}},[t._m(2),t._v(" "),c("p",{staticClass:"p2"},[t._v("客户可享受“量多价优，全程无忧”的超值服务。")])]):t._e(),t._v(" "),-1!==t.psdata.indexOf("AF02703")?c("li",{staticClass:"cp",attrs:{id:"cp03"}},[t._m(3),t._v(" "),c("p",{staticClass:"p2"},[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]):t._e(),t._v(" "),-1!==t.psdata.indexOf("AF02704")?c("li",{staticClass:"cp",attrs:{id:"cp04"}},[t._m(4),t._v(" "),c("p",{staticClass:"p2"},[t._v("以客为本、服务至上，可靠、安全的大件货运运输网络以及先进的管理技术")])]):t._e(),t._v(" "),-1!==t.psdata.indexOf("AF02705")?c("li",{staticClass:"cp",attrs:{id:"cp05"}},[t._m(5),t._v(" "),c("p",{staticClass:"p2"},[t._v("提供一体化综合运输服务，以专业的大件运输方案，限度降低运输成本，满足客户对 运输服务更高层次的需求")])]):t._e(),t._v(" "),-1!==t.psdata.indexOf("AF02706")?c("li",{staticClass:"cp",attrs:{id:"cp06"}},[t._m(6),t._v(" "),c("p",{staticClass:"p2"},[t._v("安全、迅速、简便、价廉”，实现快速、低耗、高效率及高效益地完成运输生产过程并将货物送达目的地交付给收货人")])]):t._e(),t._v(" "),-1!==t.psdata.indexOf("AF02707")?c("li",{staticClass:"cp",attrs:{id:"cp07"}},[t._m(7),t._v(" "),c("p",{staticClass:"p2"},[t._v("在运输全过程中，无论是装卸搬运、变更运输方式、更换包装设备等环节，都使所运输货物始终保持一定温度的运输。")])]):t._e(),t._v(" "),-1!==t.psdata.indexOf("AF02708")?c("li",{staticClass:"cp",attrs:{id:"cp08"}},[t._m(8),t._v(" "),c("p",{staticClass:"p2"},[t._v("危险品是易燃易爆有强烈腐蚀性的物品的统称。包含：爆炸品、压缩气体和液化气体、易燃液体、易燃固体、自燃物品和遇湿易燃物品、氧化剂和有机过氧化物、毒害品和感染性物品、放射性物品、腐蚀品")])]):t._e(),t._v(" "),-1!==t.psdata.indexOf("AF02709")?c("li",{staticClass:"cp",attrs:{id:"cp09"}},[t._m(9),t._v(" "),c("p",{staticClass:"p2"},[t._v("依托自身强大的仓储和运输网络资源，为您提供一站式的供应链物流服务。")])]):t._e()])])])],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nr_bt"},[e("div",{staticClass:"nr_bt1"},[e("span",[this._v("主营产品")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("整车运输")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("零担运输")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("专线运输")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("特大货物运输")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("大件运输")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("集装箱运输")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("冷藏运输")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("危险品运输")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p1"},[e("em"),e("span",{staticStyle:{float:"left"}},[this._v("仓储")])])}],!1,null,null,null);e.default=component.exports}}]);