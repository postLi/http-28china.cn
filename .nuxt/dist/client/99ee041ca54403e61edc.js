(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{159:function(t,e,n){"use strict";var r=n(1),component=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("img",{attrs:{src:"/member/images/banner_gsjj.png"}})])}],!1,null,null,null);e.a=component.exports},165:function(t,e,n){"use strict";var r={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},l=n(1),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side_left"},[n("ul",[t._m(0),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("order")?"active":""},[n("a",{attrs:{href:t.mid+"-order"}},[n("span",[t._v("在线下单")])])]),t._v(" "),n("li",{staticClass:"side_memu",class:-1===t.tpath.indexOf("order")?"active":""},[n("span",[t._v("查询服务")])]),t._v(" "),n("ul",{staticClass:"side_submemu "},[n("li",{class:-1!==t.tpath.indexOf("chajian")?"now":""},[n("a",{attrs:{href:t.mid+"-chajian"}},[n("span",[t._v("查件（物流追踪）")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("line")?"now":""},[n("a",{attrs:{href:t.mid+"-line"}},[n("span",[t._v("物流专线")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("wangdian")?"now":""},[n("a",{attrs:{href:t.mid+"-wangdian"}},[n("span",[t._v("网点分布")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("huo")?"now":""},[n("a",{attrs:{href:t.mid+"-huo"}},[n("span",[t._v("货源信息")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"side_title"},[e("span",[this._v("客户服务")])])}],!1,null,null,null);e.a=component.exports},457:function(t,e,n){"use strict";n.r(e);n(2);var r=n(159),l=n(165),c={components:{MemberBanner:r.a,MemberSidebar:l.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"}]},layout:"member",computed:{list(){return this.$store.state.member.huoList.list},total(){return this.$store.state.member.huoList.total}},mounted(){let t=this;seajs.use(["/member/js/jquery.pagination.min.js","/index/js/city-picker.data.js"],function(){seajs.use(["/index/js/city-picker.js","/index/js/collection.js","/member/js/huo.js"],function(){$("#pagination1").pagination({currentPage:1,totalPage:t.total,callback:function(t){$("#current1").text(t),this.fetchData(t)}})})})},methods:{fetchData(t){store.dispatch("member/getCompanyHuo",{shipperId:params.id,pageSize:10,currentPage:t})}},fetch(t){let e=t.store,n=t.params;t.$axios,t.error;return e.commit("member/setId",n.id),Promise.all([e.dispatch("member/GETCOMPANYINFO",n.id),e.dispatch("member/getCompanyHuo",{shipperId:n.id,pageSize:10,currentPage:1})])}},_=n(1),component=Object(_.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MemberBanner"),t._v(" "),n("div",{staticClass:"main"},[n("MemberSidebar"),t._v(" "),n("div",{staticClass:"right",attrs:{id:"js005"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.list.length<1?n("div",{staticClass:"huo_none"},[n("span",[t._v("暂无货源信息")])]):n("div",{staticClass:"hy_item"},[t._m(2)])]),t._v(" "),t._m(3)],1)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right_bt1"},[n("div",{staticClass:"right_bt1_1"},[n("img",{attrs:{src:"/member/images/huo.png"}}),n("span",[t._v("货源信息")])]),t._v(" "),n("div",{staticClass:"huo_tj"},[n("div",{staticClass:"select_con"},[n("dl",[n("dt",[t._v("选择货源线路 ：")]),t._v(" "),n("dd",[n("form",{attrs:{name:"zxaddform",method:"post",action:""}},[n("input",{attrs:{name:"a7",type:"hidden",value:"0"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"mid",value:"19"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"dopost",value:"search"}}),t._v(" "),n("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"HuoyuanFrom"}},[n("input",{staticStyle:{height:"100%"},attrs:{name:"cfd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入出发地"}})]),t._v(" "),n("img",{staticClass:"fl list_img",attrs:{src:"/images/02jiantou.png"}}),t._v(" "),n("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"HuoyuanTo"}},[n("input",{staticStyle:{height:"100%"},attrs:{name:"ddd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入到达地"}})]),t._v(" "),n("input",{staticClass:"list_button button_active",attrs:{id:"search_huoyuan1",name:"Submit2",value:"搜本站",readonly:""}}),t._v(" "),n("input",{staticClass:"list_button",attrs:{id:"search_huoyuan2",name:"Submit2",value:"搜全站",readonly:""}})])]),t._v(" "),n("dt",[t._v("重量区间 :")]),t._v(" "),n("dd",{attrs:{id:"tjcx_01"}},[n("a",{staticClass:"now all",attrs:{href:"/huoyuan"}},[t._v("不限")])]),t._v(" "),n("dt",[t._v("体积区间 :")]),t._v(" "),n("dd",{attrs:{id:"tjcx_02"}},[n("a",{staticClass:"now all",attrs:{href:"/huoyuan"}},[t._v("不限")])]),t._v(" "),n("dt",[t._v("货源类型 :")]),t._v(" "),n("dd",{attrs:{id:"tjcx_03"}},[n("a",{staticClass:"now all",attrs:{href:"/huoyuan"}},[t._v("不限")]),t._v(" "),n("a",{attrs:{href:"/huoyuan"}},[t._v("单次急发货源")]),t._v(" "),n("a",{attrs:{href:"/huoyuan"}},[t._v("长期稳定货源")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right_bt2 huoyuan_bt2 clear"},[n("ul",[n("li",{staticClass:"bt_01"},[t._v("出发地 → 到达地")]),t._v(" "),n("li",{staticClass:"bt_02"},[t._v("货源信息")]),t._v(" "),n("li",{staticClass:"bt_03"},[t._v("会员类型")]),t._v(" "),n("li",{staticClass:"bt_04"},[t._v("人气")]),t._v(" "),n("li",{staticClass:"bt_05"},[t._v("操作")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{staticClass:"hy_item01"},[n("a",{attrs:{id:"nr041",target:"_blank",href:"#"}},[n("span",[n("em",{attrs:{id:"nr042"}}),t._v("→"),n("em",{attrs:{id:"nr043"}})])])]),t._v(" "),n("li",{staticClass:"hy_item02"},[n("span",{attrs:{id:"nr044"}}),n("em"),n("span",[n("i",{attrs:{id:"nr045"}}),t._v("件")]),n("em"),n("span",[n("i",{attrs:{id:"nr046"}}),t._v("公斤")]),n("em"),n("span",{attrs:{id:"nr047"}})]),t._v(" "),n("li",{staticClass:"hy_item03"},[n("p",{staticClass:"p1"},[n("img",{attrs:{id:"list_shiming",src:"/images/10shiming.png"}})]),t._v(" "),n("p",{staticClass:"p2"},[n("img",{attrs:{id:"list_xinyong",src:"/images/11xinyong.png"}})])]),t._v(" "),n("li",{staticClass:"hy_item04"},[n("p",{staticClass:"p1"},[n("span",[n("em",{attrs:{id:"nr048"}}),t._v("浏览量")])]),t._v(" "),n("p",{staticClass:"p2"},[n("span",[n("em",{attrs:{id:"nr049"}},[t._v("61")]),t._v("收藏量")])])]),t._v(" "),n("li",{staticClass:"hy_item05"},[n("a",{attrs:{id:"nr0410",target:"_blank"}},[n("input",{attrs:{value:"查看"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"200px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination1"}}),this._v(" "),e("div",{staticClass:"info fl"})])}],!1,null,null,null);e.default=component.exports}}]);