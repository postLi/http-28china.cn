(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{204:function(t,s,a){"use strict";var e=a(0),i=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"banner-box"},[s("img",{attrs:{src:"/member/images/banner_gsjj.png"}})])}],!1,null,null,null);s.a=i.exports},210:function(t,s,a){"use strict";var e={data:function(){return{tpath:""}},mounted:function(){this.tpath=window.location.pathname}},i=a(0),r=Object(i.a)(e,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"side_left"},[a("ul",[t._m(0),t._v(" "),a("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("order")?"active":""},[a("a",{attrs:{href:t.$store.state.member.id+"-order"}},[a("span",[t._v("在线下单")])])]),t._v(" "),a("li",{staticClass:"side_memu",class:-1===t.tpath.indexOf("order")?"active":""},[a("span",[t._v("查询服务")])]),t._v(" "),a("ul",{staticClass:"side_submemu "},[a("li",{class:-1!==t.tpath.indexOf("chajian")?"now":""},[a("a",{attrs:{href:t.$store.state.member.id+"-chajian"}},[a("span",[t._v("查件（物流追踪）")])])]),t._v(" "),a("li",{class:-1!==t.tpath.indexOf("line")?"now":""},[a("a",{attrs:{href:t.$store.state.member.id+"-line"}},[a("span",[t._v("物流专线")])])]),t._v(" "),a("li",{class:-1!==t.tpath.indexOf("wangdian")?"now":""},[a("a",{attrs:{href:t.$store.state.member.id+"-wangdian"}},[a("span",[t._v("网点分布")])])]),t._v(" "),a("li",{class:-1!==t.tpath.indexOf("huo")?"now":""},[a("a",{attrs:{href:t.$store.state.member.id+"-huo"}},[a("span",[t._v("货源信息")])])])])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"side_title"},[s("span",[this._v("客户服务")])])}],!1,null,null,null);s.a=r.exports},461:function(t,s,a){"use strict";a.r(s);a(54);var e=a(7),i=a.n(e),r=a(204),l=a(210),n={components:{MemberBanner:r.a,MemberSidebar:l.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"},{rel:"stylesheet",href:"/member/css/onlineOrder.css"}]},layout:"member",mounted:function(){seajs.use(["/index/js/gaodemap2.js","/member/js/index.js","/index/js/collection.js","/member/js/AFLC_API.js","/member/js/onlineOrder.js"],function(){})},fetch:function(){var t=i()(regeneratorRuntime.mark(function t(s){var a,e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.store,e=s.params,s.$axios,s.error,a.commit("member/setId",e.id),t.next=4,a.dispatch("member/GETCOMPANYINFO",e.id);case 4:case"end":return t.stop()}},t)}));return function(s){return t.apply(this,arguments)}}()},c=a(0),v=Object(c.a)(n,function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("MemberBanner"),this._v(" "),s("div",{staticClass:"main"},[s("MemberSidebar"),this._v(" "),this._m(0)],1),this._v(" "),this._m(1),this._v(" "),this._m(2)],1)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"right main_nr"},[a("div",{staticClass:"nr_bt"},[a("div",{staticClass:"nr_bt1"},[a("span",[t._v("在线下单")])])]),t._v(" "),a("div",{staticClass:"nr order-create-main"},[a("div",{staticClass:"order-step"}),t._v(" "),a("div",{staticClass:"order-line-info order-input-tab"},[a("div",{staticClass:"order-title"},[t._v("线路信息 "),a("span",[t._v("（提示：待*为必填）")])]),t._v(" "),a("div",{staticClass:"order-line-from clearfix"},[a("div",{staticClass:"order-form-item"},[a("div",{staticClass:"order-form-label"},[a("span",{staticClass:"required"},[t._v("*")]),t._v("出发地：")]),t._v(" "),a("div",{staticClass:"order-form-input"},[a("input",{attrs:{wtmap:"",maxlength:"40",type:"text",placeholder:"请选择 省-市-县"}})])]),t._v(" "),a("div",{staticClass:"order-form-item form-detail"},[a("div",{staticClass:"order-form-label"},[a("span",{staticClass:"required"},[t._v("*")]),t._v("街道/门牌号：")]),t._v(" "),a("div",{staticClass:"order-form-input"},[a("input",{attrs:{wtmapinit:"",wtmap:"{township}{street}{building}",maxlength:"40",type:"text",placeholder:"请填写详细地址"}})])])]),t._v(" "),a("div",{staticClass:"order-line-to clearfix"},[a("div",{staticClass:"order-form-item"},[a("div",{staticClass:"order-form-label"},[a("span",{staticClass:"required"},[t._v("*")]),t._v("到达地：")]),t._v(" "),a("div",{staticClass:"order-form-input"},[a("input",{attrs:{wtmap:"",maxlength:"40",type:"text",placeholder:"请选择 省-市-县"}})])]),t._v(" "),a("div",{staticClass:"order-form-item form-detail"},[a("div",{staticClass:"order-form-label"},[a("span",{staticClass:"required"},[t._v("*")]),t._v("街道/门牌号：")]),t._v(" "),a("div",{staticClass:"order-form-input"},[a("input",{attrs:{wtmapinit:"",wtmap:"{township}{street}{building}",maxlength:"40",type:"text",placeholder:"请填写详细地址"}})])])])]),t._v(" "),a("div",{staticClass:"order-input-tab order-cargo-info"},[a("div",{staticClass:"order-title"},[t._v("货物信息")]),t._v(" "),a("div",{staticClass:"order-caro-con"},[a("div",{staticClass:"order-cargo-title clearfix"},[a("span",[a("span",{staticClass:"required"},[t._v("*")]),t._v("货物名称")]),t._v(" "),a("span",[t._v("总件数")]),t._v(" "),a("span",[a("span",{staticClass:"required"},[t._v("*")]),t._v("预估重量")]),t._v(" "),a("span",[a("span",{staticClass:"required"},[t._v("*")]),t._v("预估体积")])]),t._v(" "),a("ul",{staticClass:"order-cargo-list"},[a("li",[a("div",{staticClass:"input"},[a("input",{staticClass:"cargoname",attrs:{maxlength:"40",type:"text"}})]),t._v(" "),a("div",{staticClass:"input"},[a("input",{attrs:{maxlength:"12",type:"text"}}),t._v(" "),a("span",{staticClass:"append"},[t._v("件")])]),t._v(" "),a("div",{staticClass:"input"},[a("input",{staticClass:"caroweight",attrs:{maxlength:"12",type:"text"}}),t._v(" "),a("span",{staticClass:"append"},[t._v("公斤")])]),t._v(" "),a("div",{staticClass:"input"},[a("input",{staticClass:"cargovolume",attrs:{maxlength:"12",type:"text"}}),t._v(" "),a("span",{staticClass:"append"},[t._v("立方")])]),t._v(" "),a("span",{staticClass:"deletecargo"},[t._v("[删除]")])])]),t._v(" "),a("div",{staticClass:"reset-cargo-list"}),t._v(" "),a("div",{staticClass:"add-cargo-list"})])]),t._v(" "),a("div",{staticClass:"order-input-tab order-company-info"},[a("div",{staticClass:"order-title"},[t._v("物流公司报价")]),t._v(" "),a("div",{staticClass:"order-company-list"},[a("table",[a("thead",[a("tr",[a("th",{attrs:{colspan:"2",width:"252"}},[t._v("承运商")]),t._v(" "),a("th",{attrs:{width:"62"}},[t._v("起步价")]),t._v(" "),a("th",{attrs:{width:"170"}},[t._v("重货")]),t._v(" "),a("th",{attrs:{width:"170"}},[t._v("轻货")]),t._v(" "),a("th",{attrs:{width:"140"}},[t._v("时效")]),t._v(" "),a("th",[t._v("发车频率")])])]),t._v(" "),a("tbody",{staticClass:"lineinfo"}),t._v(" "),a("tbody",{staticClass:"nocompany"},[a("tr",[a("td",{attrs:{colspan:"7"}},[t._v("请先选择出发地、目的地")])])]),t._v(" "),a("tbody",{staticClass:"noline"},[a("tr",[a("td",{attrs:{colspan:"7"}},[t._v("此物流公司暂未发布该条线路的专线，您可以选择继续下单")])])]),t._v(" "),a("tbody",{staticClass:"findnone"},[a("tr",[a("td",{attrs:{colspan:"7"}},[t._v("暂无相关物流公司推荐，换换其他路线哦")])])])])]),t._v(" "),a("div",{staticClass:"order-calc-price"},[t._v("预估运费总金额："),a("span",[t._v("0元")])])]),t._v(" "),a("div",{staticClass:"order-input-tab order-contact-info"},[a("div",{staticClass:"order-title"},[t._v("联系方式")]),t._v(" "),a("div",{staticClass:"order-contact-from clearfix"},[a("div",{staticClass:"order-form-item"},[a("div",{staticClass:"order-form-label"},[a("span",{staticClass:"required"},[t._v("*")]),t._v("发货人：")]),t._v(" "),a("div",{staticClass:"order-form-input"},[a("input",{attrs:{maxlength:"40",type:"text"}})])]),t._v(" "),a("div",{staticClass:"order-form-item"},[a("div",{staticClass:"order-form-label"},[a("span",{staticClass:"required"},[t._v("*")]),t._v("发货人手机：")]),t._v(" "),a("div",{staticClass:"order-form-input"},[a("input",{attrs:{maxlength:"11",type:"text"}})])]),t._v(" "),a("span",{staticClass:"order-usual-button"},[t._v("选择常用联系人")]),t._v(" "),a("div",{staticClass:"order-save-usual"},[a("label",[a("input",{attrs:{id:"",type:"checkbox",name:""}}),t._v("\n                保存到常用发货人\n              ")])])]),t._v(" "),a("div",{staticClass:"order-contact-to clearfix"},[a("div",{staticClass:"order-form-item"},[a("div",{staticClass:"order-form-label"},[t._v("收货人：")]),t._v(" "),a("div",{staticClass:"order-form-input"},[a("input",{attrs:{maxlength:"40",type:"text"}})])]),t._v(" "),a("div",{staticClass:"order-form-item"},[a("div",{staticClass:"order-form-label"},[t._v("收货人手机：")]),t._v(" "),a("div",{staticClass:"order-form-input"},[a("input",{attrs:{maxlength:"11",type:"text"}})])]),t._v(" "),a("span",{staticClass:"order-usual-button"},[t._v("选择常用联系人")]),t._v(" "),a("div",{staticClass:"order-save-usual"},[a("label",[a("input",{attrs:{id:"",type:"checkbox",name:""}}),t._v("\n                保存到常用收货人\n              ")])])])]),t._v(" "),a("div",{staticClass:"order-agree-info"},[a("label",{attrs:{for:"agree"}},[a("input",{attrs:{id:"agree",type:"checkbox",checked:"",name:"agree"}}),t._v("\n            我已阅读并接受"),a("a",{attrs:{href:"/h5/EnterpriseAgreement.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《28快运服务协议》")]),t._v(" "),a("a",{attrs:{href:"/h5/SecrecyAgreement.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《网络用户信息保密协议》")])])]),t._v(" "),a("div",{staticClass:"order-submit-btn"},[t._v("立即下单")])]),t._v(" "),a("div",{staticClass:"order-success-main"},[a("div",{staticClass:"order-success-txt"},[t._v("订单提交成功！等待物流公司承运")]),t._v(" "),a("div",{staticClass:"order-success-tip"},[a("span",{staticClass:"order-tip"},[t._v("温馨提示：")]),a("br"),t._v("1、请您和承运商签订真实有效的运单，签约前请勿支付押金、定金等一切费用；"),a("br"),t._v("2、查验物流公司和运输车辆证件，积极维护自身权益！\n        ")]),t._v(" "),a("div",{staticClass:"order-success-order order-success-tab clearfix"},[a("div",{staticClass:"order-success-label"},[t._v("订单信息")]),t._v(" "),a("ul",[a("li",{staticClass:"order-num"},[a("i",[t._v("订单号")]),t._v(" "),a("span",[t._v("AFZG201812240001")])]),t._v(" "),a("li",{staticClass:"order-from"},[a("i",[t._v("发货方信息")]),t._v(" "),a("span",[t._v("李宝强  15978951234")])]),t._v(" "),a("li",{staticClass:"order-to"},[a("i",[t._v("收货方信息")]),t._v(" "),a("span",[t._v("李宝强  15978951234")])])])]),t._v(" "),a("div",{staticClass:"order-success-order order-success-tab clearfix"},[a("div",{staticClass:"order-success-label"},[t._v("货物信息")]),t._v(" "),a("ul",[a("li",{staticClass:"order-cargo"},[a("i",[t._v("货物名称")]),t._v(" "),a("span",[t._v("AFZG201812240001")])]),t._v(" "),a("li",{staticClass:"order-cargo-num"},[a("i",[t._v("总数量")]),t._v(" "),a("span",[t._v("李宝强  15978951234")])]),t._v(" "),a("li",{staticClass:"order-cago-class"},[a("i",[t._v("货物类型")]),t._v(" "),a("span",[t._v("李宝强  15978951234")])]),t._v(" "),a("li",{staticClass:"order-cargo-weight"},[a("i",[t._v("预估重量")]),t._v(" "),a("span",[t._v("李宝强  15978951234")])]),t._v(" "),a("li",{staticClass:"order-cargo-volume"},[a("i",[t._v("预估体积")]),t._v(" "),a("span",[t._v("李宝强  15978951234")])]),t._v(" "),a("li",{staticClass:"order-cargo-fee"},[a("i",[t._v("预估运费")]),t._v(" "),a("span",[t._v("李宝强  15978951234")])])])]),t._v(" "),a("div",{staticClass:"order-success-order order-success-tab clearfix"},[a("div",{staticClass:"order-success-label"},[t._v("线路信息")]),t._v(" "),a("ul",[a("li",{staticClass:"order-lineinfo-from"},[a("i",[t._v("出发地")]),t._v(" "),a("span",[t._v("AFZG201812240001")])]),t._v(" "),a("li",{staticClass:"order-lineinfo-to"},[a("i",[t._v("到达地")]),t._v(" "),a("span",[t._v("李宝强  15978951234")])])])]),t._v(" "),a("div",{staticClass:"order-success-btns"},[a("span",{staticClass:"continue-create-order"},[t._v("继续下单")]),t._v(" "),a("a",{staticClass:"track-order",attrs:{href:"/ydcx"}},[t._v("跟踪订单")]),t._v(" "),a("a",{staticClass:"return-to-index",attrs:{href:"/"}},[t._v("返回首页")])])]),t._v(" "),a("div",{staticClass:"order-caro-pop"},[a("ul",[a("li",[t._v("食品")])])]),t._v(" "),a("div",{staticClass:"wlname-info"},[a("div",{staticClass:"wlname-title"},[t._v("最佳网点")]),t._v(" "),a("ul",[a("li",[a("span",{staticClass:"wlnamev"},[t._v("出发地网点："),a("span")]),a("span",{staticClass:"wlnameh"},[t._v("距发货地："),a("span",[t._v("km")])]),t._v(" "),a("p",{staticClass:"wladdress"}),t._v(" "),a("p",[t._v("联系人："),a("span",{staticClass:"wluser"})]),t._v(" "),a("p",[t._v("联系电话："),a("span",{staticClass:"wlphone"})])]),a("li",[a("span",{staticClass:"wlnamev"},[t._v("目的地网点："),a("span")]),a("span",{staticClass:"wlnameh"},[t._v("距收货地："),a("span",[t._v("km")])]),t._v(" "),a("p"),t._v(" "),a("p",[t._v("联系人："),a("span",{staticClass:"wluser"})]),t._v(" "),a("p",[t._v("联系电话："),a("span",{staticClass:"wlphone"})])])]),t._v(" "),a("div",{staticClass:"select-other-net"},[t._v("重新选择网点")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"netListContent-wraper"},[a("div",{staticClass:"netListContent-bg"}),t._v(" "),a("div",{staticClass:"netListContent"},[a("div",{staticClass:"netListContent-head"},[a("span",{staticClass:"close"},[t._v("x")]),t._v(" 网点选择\n      ")]),t._v(" "),a("div",{staticClass:"el-dialog__body"},[a("div",{staticClass:"popnet-title"},[t._v("请选择距您最近的出发地和到达地网点：")]),t._v(" "),a("div",{staticClass:"selectNetListPanel clearfix"},[a("ul",{staticClass:"netPopChoiceList"},[a("li",{staticClass:"start-net-icon"},[a("span",{staticClass:"start-icon"}),t._v("出发地:")]),t._v(" "),a("li",{staticClass:"clearfix"},[a("span",{staticClass:"wlListName"},[a("label",{staticClass:"el-radio is-checked",attrs:{role:"radio","aria-checked":"true",tabindex:"0"}},[a("input",{staticClass:"el-radio__original",attrs:{type:"radio","aria-hidden":"true",tabindex:"-1",value:"8a1e52787cd548f2af1984f35138d392"}}),t._v("广州新市营业部")])]),a("span",{staticClass:"wlListMobile"},[t._v("距离：1.2709km")]),t._v(" "),a("span",{staticClass:"wlListAddres"},[t._v("广东省广州市白云区新市街道新市西街新市幼儿园")])]),a("li",{staticClass:"clearfix"},[a("span",{staticClass:"wlListName"},[a("label",{staticClass:"el-radio",attrs:{role:"radio",tabindex:"0"}},[a("input",{staticClass:"el-radio__original",attrs:{type:"radio","aria-hidden":"true",tabindex:"-1",value:"f257a9f46baa4bc3a75be9de629a90c1"}}),t._v("广州沙太北路收货站")])]),a("span",{staticClass:"wlListMobile"},[t._v("距离：9.8661km")]),t._v(" "),a("span",{staticClass:"wlListAddres"},[t._v("广东省广州市白云区同和街道同宝路广州誉德莱国际学校")])])]),t._v(" "),a("ul",{staticClass:"netPopChoiceList"},[a("li",{staticClass:"end-net-icon"},[a("span",{staticClass:"end-icon"}),t._v("目的地:")])])])]),t._v(" "),a("div",{staticClass:"el-dialog__footer"},[a("span",{staticClass:"cancel-net-select"},[t._v("取消")]),t._v(" "),a("span",{staticClass:"confirm-net-select"},[t._v("确定")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"order_usual_contacts_wrapper"},[a("div",{staticClass:"order_usual_contacts_bg"}),t._v(" "),a("div",{staticClass:"order_usual_contacts_pop order_list_contacts_pop"},[a("div",{staticClass:"el-dialog__header"},[a("span",{staticClass:"close"},[t._v("X")]),t._v(" "),a("span",{staticClass:"inner_title"},[t._v("常用联系人")])]),t._v(" "),a("div",{staticClass:"el-dialog__body"},[a("span",{staticClass:"search-input"},[a("input",{staticClass:"el-input__inner",attrs:{type:"text",autocomplete:"off",placeholder:"请输入姓名、手机号或地址搜索"}}),a("span",[t._v("搜索")])]),t._v(" "),a("span",{staticClass:"addNewContact "},[t._v("添加常用发货人")])]),t._v(" "),a("ul",{staticClass:"contactPopList"},[a("li",{staticClass:"clearfix"},[a("span",{staticClass:"contactName"},[t._v("王泽熙")]),t._v(" "),a("span",{staticClass:"contactMobile"},[t._v("135656565")]),t._v(" "),a("span",{staticClass:"contactAddres"},[t._v("广东省广州市海珠区凤阳街道粤汇餐厅马岗顶工业区")]),t._v(" "),a("span",{staticClass:"contactManage"},[t._v("修改")])])])]),t._v(" "),a("div",{staticClass:"order_add_contacts_pop order_usual_contacts_pop"},[a("div",{staticClass:"el-dialog__header"},[a("span",{staticClass:"close"},[t._v("X")]),t._v(" "),a("span",{staticClass:"inner_title"},[t._v("添加常用发货人")])]),t._v(" "),a("table",[a("tbody",[a("tr",[a("th",[t._v("姓名：")]),t._v(" "),a("td",[a("input",{attrs:{maxlength:"15",type:"text"}})])]),t._v(" "),a("tr",[a("th",[t._v("电话：")]),t._v(" "),a("td",[a("input",{attrs:{type:"text",maxlength:"11"}})])]),t._v(" "),a("tr",[a("th",[t._v("地址：")]),t._v(" "),a("td",[a("input",{attrs:{wtmap:"detail",maxlength:"30",type:"text"}})])]),t._v(" "),a("tr",[a("th"),t._v(" "),a("td",[a("label",[a("input",{attrs:{id:"setdefault",type:"checkbox",name:"setdefault"}}),t._v("设置为默认地址")])])])])]),t._v(" "),a("div",{staticClass:"contact-btns"},[a("span",{staticClass:"add-cancel"},[t._v("取消")]),t._v(" "),a("span",{staticClass:"add-submit"},[t._v("保存")])])])])}],!1,null,null,null);s.default=v.exports}}]);