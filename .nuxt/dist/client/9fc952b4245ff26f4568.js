(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{189:function(t,e,r){var content=r(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("2b13c9e9",content,!0,{sourceMap:!1})},190:function(t,e,r){"use strict";var n={props:{url:{type:String,default:"/member/images/banner_gsjj.jpg"}}},l=r(2),component=Object(l.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("img",{attrs:{src:this.url}})])},[],!1,null,null,null);e.a=component.exports},202:function(t,e,r){"use strict";var n=r(189);r.n(n).a},203:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".side_left ul[data-v-19f9c8ac]{height:auto}",""])},204:function(t,e,r){"use strict";var n={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},l=(r(202),r(2)),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"side_left"},[r("ul",[t._m(0),t._v(" "),r("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("order")?"active":""},[r("a",{attrs:{href:t.mid+"-order"}},[r("span",[t._v("在线下单")])])]),t._v(" "),r("li",{staticClass:"side_memu",class:-1===t.tpath.indexOf("order")&&-1===t.tpath.indexOf("recruit")?"active":""},[r("span",[t._v("查询服务")])]),t._v(" "),r("ul",{staticClass:"side_submemu "},[r("li",{class:-1!==t.tpath.indexOf("chajian")?"now":""},[r("a",{attrs:{href:t.mid+"-chajian"}},[r("span",[t._v("查件（物流追踪）")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("line")?"now":""},[r("a",{attrs:{href:t.mid+"-line"}},[r("span",[t._v("物流专线")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("wangdian")?"now":""},[r("a",{attrs:{href:t.mid+"-wangdian"}},[r("span",[t._v("网点分布")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("huo")?"now":""},[r("a",{attrs:{href:t.mid+"-huo"}},[r("span",[t._v("货源信息")])])])]),t._v(" "),r("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("recruit")?"active":""},[r("a",{attrs:{href:t.mid+"-recruit"}},[r("span",[t._v("招聘信息")])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"side_title"},[e("span",[this._v("客户服务")])])}],!1,null,"19f9c8ac",null);e.a=component.exports},360:function(t,e,r){var content=r(611);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("06d7dc5a",content,!0,{sourceMap:!1})},610:function(t,e,r){"use strict";var n=r(360);r.n(n).a},611:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".recruitinfo[data-v-605f045a]{padding:20px 50px;line-height:1.7}.recruitinfo h2[data-v-605f045a]{text-align:center;margin-bottom:20px}.recruitinfo ul li[data-v-605f045a]{padding-left:8em;float:left;width:386px;line-height:41px}.recruitinfo ul li[data-v-605f045a]:last-child{float:none;clear:both}.recruitinfo ul i[data-v-605f045a]{font-style:normal;color:#fe0000;font-size:1.5em;line-height:41px;vertical-align:bottom}.recruitinfo ul span[data-v-605f045a]{display:inline-block;width:8em;text-align:right;margin-left:-8em;color:#666}.rec-hr[data-v-605f045a]{clear:both;color:#333;border-bottom:1px dashed #bbb;margin-bottom:20px}.rec-hr span[data-v-605f045a]{display:inline-block;background:#fff;font-size:18px;position:relative;top:13px;padding-right:20px;font-weight:700}.recruitdesc[data-v-605f045a]{white-space:pre;background:#fff;color:#444;line-height:1.5;padding:20px}",""])},635:function(t,e,r){"use strict";r.r(e);r(41);var n=r(6),l=r(190),c=r(204),o={components:{MemberBanner:l.a,MemberSidebar:c.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"}]},layout:"member",computed:{info(){return this.$store.state.member.recruitDetail}},fetch:t=>Object(n.a)(function*(){let e=t.store,r=t.params,n=(t.$axios,t.error),l=t.query;e.commit("member/setId",r.id),yield Promise.all([e.dispatch("member/GETCOMPANYINFO",r.id).catch(t=>{"network"===t.type?n({statusCode:500,message:t.msg}):n({statusCode:404,message:t.msg})}),e.dispatch("member/getRecruitDetail",l.id)])})()},d=(r(610),r(2)),component=Object(d.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("MemberBanner",{attrs:{url:"/member/images/banner_wd.jpg"}}),t._v(" "),r("div",{staticClass:"main"},[r("MemberSidebar"),t._v(" "),r("div",{staticClass:"right",attrs:{id:"js004"}},[t._m(0),t._v(" "),r("div",{staticClass:"recruitinfo"},[r("h2",[t._v(t._s(t.info.jobTitle))]),t._v(" "),t._m(1),t._v(" "),r("ul",[r("li",[r("span",[t._v("月薪范围(元)：")]),r("i",[t._v(t._s(t.info.salaryBegin)+"-"+t._s(t.info.salaryEnd))])]),t._v(" "),r("li",[r("span",[t._v("招聘人数：")]),t._v(t._s(t.info.recruitNum))]),t._v(" "),r("li",[r("span",[t._v("学历要求：")]),t._v(t._s(t.info.education))]),t._v(" "),r("li",[r("span",[t._v("工作年限：")]),t._v(t._s(t.info.recruitNum))]),t._v(" "),r("li",[r("span",[t._v("工作地址：")]),t._v(t._s(t.info.workProvince)+t._s(t.info.workCity)+t._s(t.info.workArea)+t._s(t.info.workAddress))]),t._v(" "),r("li",[r("span",[t._v("联系人：")]),t._v(t._s(t.info.contacts))]),t._v(" "),r("li",[r("span",[t._v("联系电话：")]),t._v(t._s(t.info.telephone))])]),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"recruitdesc"},[t._v(t._s(t.info.jobInfo))])])])],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right_bt1"},[e("div",{staticClass:"right_bt1_1"},[e("img",{attrs:{src:"/member/images/wd.png"}}),e("span",[this._v("招聘详情")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rec-hr"},[e("span",[this._v("基本信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rec-hr"},[e("span",[this._v("职位信息")])])}],!1,null,"605f045a",null);e.default=component.exports}}]);