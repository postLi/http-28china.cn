(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{233:function(t,e,r){"use strict";var l=r(0),component=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("img",{attrs:{src:"/member/images/banner_gsjj.png"}})])}],!1,null,null,null);e.a=component.exports},255:function(t,e,r){"use strict";var l={data:function(){return{tpath:""}},computed:{mid:function(){return this.$store.state.member.id}},mounted:function(){this.tpath=window.location.pathname}},n=r(0),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"side_left"},[r("ul",[t._m(0),t._v(" "),r("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("order")?"active":""},[r("a",{attrs:{href:t.mid+"-order"}},[r("span",[t._v("在线下单")])])]),t._v(" "),r("li",{staticClass:"side_memu",class:-1===t.tpath.indexOf("order")?"active":""},[r("span",[t._v("查询服务")])]),t._v(" "),r("ul",{staticClass:"side_submemu "},[r("li",{class:-1!==t.tpath.indexOf("chajian")?"now":""},[r("a",{attrs:{href:t.mid+"-chajian"}},[r("span",[t._v("查件（物流追踪）")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("line")?"now":""},[r("a",{attrs:{href:t.mid+"-line"}},[r("span",[t._v("物流专线")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("wangdian")?"now":""},[r("a",{attrs:{href:t.mid+"-wangdian"}},[r("span",[t._v("网点分布")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("huo")?"now":""},[r("a",{attrs:{href:t.mid+"-huo"}},[r("span",[t._v("货源信息")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"side_title"},[e("span",[this._v("客户服务")])])}],!1,null,null,null);e.a=component.exports},613:function(t,e,r){"use strict";r.r(e);r(65);var l=r(10),n=r(233),c=r(255),v={components:{MemberBanner:n.a,MemberSidebar:c.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"},{rel:"stylesheet",href:"/member/css/onlineOrder.css"}]},layout:"member",mounted:function(){seajs.use(["/js/AFLC_API.js","layer"],function(){seajs.use(["/js/gaodemap2.js","/member/js/index.js","/js/collection.js","/member/js/onlineOrder.js"],function(){})})},fetch:function(){var t=Object(l.a)(regeneratorRuntime.mark(function t(e){var r,l,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,l=e.params,e.$axios,n=e.error,r.commit("member/setId",l.id),t.next=4,r.dispatch("member/GETCOMPANYINFO",l.id).catch(function(t){"network"===t.type?n({statusCode:500,message:t.msg}):n({statusCode:404,message:t.msg})});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},_=r(0),component=Object(_.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("MemberBanner"),this._v(" "),e("div",{staticClass:"main"},[e("MemberSidebar"),this._v(" "),this._m(0)],1),this._v(" "),this._m(1),this._v(" "),this._m(2)],1)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"right main_nr"},[r("div",{staticClass:"nr_bt"},[r("div",{staticClass:"nr_bt1"},[r("span",[t._v("在线下单")])])]),t._v(" "),r("div",{staticClass:"nr order-create-main"},[r("div",{staticClass:"order-step"}),t._v(" "),r("div",{staticClass:"order-line-info order-input-tab"},[r("div",{staticClass:"order-title"},[t._v("线路信息 "),r("span",[t._v("（提示：待*为必填）")])]),t._v(" "),r("div",{staticClass:"order-line-from clearfix"},[r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("出发地：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{wtmap:"",maxlength:"40",type:"text",placeholder:"请选择 省-市-县"}})])]),t._v(" "),r("div",{staticClass:"order-form-item form-detail"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("街道/门牌号：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{wtmapinit:"",wtmap:"{township}{street}{building}",maxlength:"40",type:"text",placeholder:"请填写详细地址"}})])])]),t._v(" "),r("div",{staticClass:"order-line-to clearfix"},[r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("到达地：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{wtmap:"",maxlength:"40",type:"text",placeholder:"请选择 省-市-县"}})])]),t._v(" "),r("div",{staticClass:"order-form-item form-detail"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("街道/门牌号：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{wtmapinit:"",wtmap:"{township}{street}{building}",maxlength:"40",type:"text",placeholder:"请填写详细地址"}})])])])]),t._v(" "),r("div",{staticClass:"order-input-tab order-cargo-info"},[r("div",{staticClass:"order-title"},[t._v("货物信息")]),t._v(" "),r("div",{staticClass:"order-caro-con"},[r("div",{staticClass:"order-cargo-title clearfix"},[r("span",[r("span",{staticClass:"required"},[t._v("*")]),t._v("货物名称")]),t._v(" "),r("span",[t._v("总件数")]),t._v(" "),r("span",[r("span",{staticClass:"required"},[t._v("*")]),t._v("预估重量")]),t._v(" "),r("span",[r("span",{staticClass:"required"},[t._v("*")]),t._v("预估体积")])]),t._v(" "),r("ul",{staticClass:"order-cargo-list"},[r("li",[r("div",{staticClass:"input"},[r("input",{staticClass:"cargoname",attrs:{maxlength:"40",type:"text"}})]),t._v(" "),r("div",{staticClass:"input"},[r("input",{attrs:{maxlength:"12",type:"text"}}),t._v(" "),r("span",{staticClass:"append"},[t._v("件")])]),t._v(" "),r("div",{staticClass:"input"},[r("input",{staticClass:"caroweight",attrs:{maxlength:"12",type:"text"}}),t._v(" "),r("span",{staticClass:"append"},[t._v("公斤")])]),t._v(" "),r("div",{staticClass:"input"},[r("input",{staticClass:"cargovolume",attrs:{maxlength:"12",type:"text"}}),t._v(" "),r("span",{staticClass:"append"},[t._v("立方")])]),t._v(" "),r("span",{staticClass:"deletecargo"},[t._v("[删除]")])])]),t._v(" "),r("div",{staticClass:"reset-cargo-list"}),t._v(" "),r("div",{staticClass:"add-cargo-list"})])]),t._v(" "),r("div",{staticClass:"order-input-tab order-company-info"},[r("div",{staticClass:"order-title"},[t._v("物流公司报价")]),t._v(" "),r("div",{staticClass:"order-company-list"},[r("table",[r("thead",[r("tr",[r("th",{attrs:{colspan:"2",width:"252"}},[t._v("承运商")]),t._v(" "),r("th",{attrs:{width:"62"}},[t._v("起步价")]),t._v(" "),r("th",{attrs:{width:"170"}},[t._v("重货")]),t._v(" "),r("th",{attrs:{width:"170"}},[t._v("轻货")]),t._v(" "),r("th",{attrs:{width:"140"}},[t._v("时效")]),t._v(" "),r("th",[t._v("发车频率")])])]),t._v(" "),r("tbody",{staticClass:"lineinfo"}),t._v(" "),r("tbody",{staticClass:"nocompany"},[r("tr",[r("td",{attrs:{colspan:"7"}},[t._v("请先选择出发地、目的地")])])]),t._v(" "),r("tbody",{staticClass:"noline"},[r("tr",[r("td",{attrs:{colspan:"7"}},[t._v("此物流公司暂未发布该条线路的专线，您可以选择继续下单")])])]),t._v(" "),r("tbody",{staticClass:"findnone"},[r("tr",[r("td",{attrs:{colspan:"7"}},[t._v("暂无相关物流公司推荐，换换其他路线哦")])])])])]),t._v(" "),r("div",{staticClass:"order-calc-price"},[t._v("预估运费总金额："),r("span",[t._v("0元")])])]),t._v(" "),r("div",{staticClass:"order-input-tab order-contact-info"},[r("div",{staticClass:"order-title"},[t._v("联系方式")]),t._v(" "),r("div",{staticClass:"order-contact-from clearfix"},[r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("发货人：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{maxlength:"40",type:"text"}})])]),t._v(" "),r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("发货人手机：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{maxlength:"11",type:"text"}})])]),t._v(" "),r("span",{staticClass:"order-usual-button"},[t._v("选择常用联系人")]),t._v(" "),r("div",{staticClass:"order-save-usual"},[r("label",[r("input",{attrs:{id:"",type:"checkbox",name:""}}),t._v("\n                保存到常用发货人\n              ")])])]),t._v(" "),r("div",{staticClass:"order-contact-to clearfix"},[r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[t._v("收货人：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{maxlength:"40",type:"text"}})])]),t._v(" "),r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[t._v("收货人手机：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{maxlength:"11",type:"text"}})])]),t._v(" "),r("span",{staticClass:"order-usual-button"},[t._v("选择常用联系人")]),t._v(" "),r("div",{staticClass:"order-save-usual"},[r("label",[r("input",{attrs:{id:"",type:"checkbox",name:""}}),t._v("\n                保存到常用收货人\n              ")])])])]),t._v(" "),r("div",{staticClass:"order-agree-info"},[r("label",{attrs:{for:"agree"}},[r("input",{attrs:{id:"agree",type:"checkbox",checked:"",name:"agree"}}),t._v("\n            我已阅读并接受"),r("a",{attrs:{href:"/h5/EnterpriseAgreement.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《28快运服务协议》")]),t._v(" "),r("a",{attrs:{href:"/h5/SecrecyAgreement.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《网络用户信息保密协议》")])])]),t._v(" "),r("div",{staticClass:"order-submit-btn"},[t._v("立即下单")])]),t._v(" "),r("div",{staticClass:"order-success-main"},[r("div",{staticClass:"order-success-txt"},[t._v("订单提交成功！等待物流公司承运")]),t._v(" "),r("div",{staticClass:"order-success-tip"},[r("span",{staticClass:"order-tip"},[t._v("温馨提示：")]),r("br"),t._v("1、请您和承运商签订真实有效的运单，签约前请勿支付押金、定金等一切费用；"),r("br"),t._v("2、查验物流公司和运输车辆证件，积极维护自身权益！\n        ")]),t._v(" "),r("div",{staticClass:"order-success-order order-success-tab clearfix"},[r("div",{staticClass:"order-success-label"},[t._v("订单信息")]),t._v(" "),r("ul",[r("li",{staticClass:"order-num"},[r("i",[t._v("订单号")]),t._v(" "),r("span",[t._v("AFZG201812240001")])]),t._v(" "),r("li",{staticClass:"order-from"},[r("i",[t._v("发货方信息")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])]),t._v(" "),r("li",{staticClass:"order-to"},[r("i",[t._v("收货方信息")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])])])]),t._v(" "),r("div",{staticClass:"order-success-order order-success-tab clearfix"},[r("div",{staticClass:"order-success-label"},[t._v("货物信息")]),t._v(" "),r("ul",[r("li",{staticClass:"order-cargo"},[r("i",[t._v("货物名称")]),t._v(" "),r("span",[t._v("AFZG201812240001")])]),t._v(" "),r("li",{staticClass:"order-cargo-num"},[r("i",[t._v("总数量")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])]),t._v(" "),r("li",{staticClass:"order-cago-class"},[r("i",[t._v("货物类型")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])]),t._v(" "),r("li",{staticClass:"order-cargo-weight"},[r("i",[t._v("预估重量")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])]),t._v(" "),r("li",{staticClass:"order-cargo-volume"},[r("i",[t._v("预估体积")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])]),t._v(" "),r("li",{staticClass:"order-cargo-fee"},[r("i",[t._v("预估运费")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])])])]),t._v(" "),r("div",{staticClass:"order-success-order order-success-tab clearfix"},[r("div",{staticClass:"order-success-label"},[t._v("线路信息")]),t._v(" "),r("ul",[r("li",{staticClass:"order-lineinfo-from"},[r("i",[t._v("出发地")]),t._v(" "),r("span",[t._v("AFZG201812240001")])]),t._v(" "),r("li",{staticClass:"order-lineinfo-to"},[r("i",[t._v("到达地")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])])])]),t._v(" "),r("div",{staticClass:"order-success-btns"},[r("span",{staticClass:"continue-create-order"},[t._v("继续下单")]),t._v(" "),r("a",{staticClass:"track-order",attrs:{href:"/ydcx"}},[t._v("跟踪订单")]),t._v(" "),r("a",{staticClass:"return-to-index",attrs:{href:"/"}},[t._v("返回首页")])])]),t._v(" "),r("div",{staticClass:"order-caro-pop"},[r("ul",[r("li",[t._v("食品")])])]),t._v(" "),r("div",{staticClass:"wlname-info"},[r("div",{staticClass:"wlname-title"},[t._v("最佳网点")]),t._v(" "),r("ul",[r("li",[r("span",{staticClass:"wlnamev"},[t._v("出发地网点："),r("span")]),r("span",{staticClass:"wlnameh"},[t._v("距发货地："),r("span",[t._v("km")])]),t._v(" "),r("p",{staticClass:"wladdress"}),t._v(" "),r("p",[t._v("联系人："),r("span",{staticClass:"wluser"})]),t._v(" "),r("p",[t._v("联系电话："),r("span",{staticClass:"wlphone"})])]),r("li",[r("span",{staticClass:"wlnamev"},[t._v("目的地网点："),r("span")]),r("span",{staticClass:"wlnameh"},[t._v("距收货地："),r("span",[t._v("km")])]),t._v(" "),r("p"),t._v(" "),r("p",[t._v("联系人："),r("span",{staticClass:"wluser"})]),t._v(" "),r("p",[t._v("联系电话："),r("span",{staticClass:"wlphone"})])])]),t._v(" "),r("div",{staticClass:"select-other-net"},[t._v("重新选择网点")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"netListContent-wraper"},[r("div",{staticClass:"netListContent-bg"}),t._v(" "),r("div",{staticClass:"netListContent"},[r("div",{staticClass:"netListContent-head"},[r("span",{staticClass:"close"},[t._v("x")]),t._v(" 网点选择\n      ")]),t._v(" "),r("div",{staticClass:"el-dialog__body"},[r("div",{staticClass:"popnet-title"},[t._v("请选择距您最近的出发地和到达地网点：")]),t._v(" "),r("div",{staticClass:"selectNetListPanel clearfix"},[r("ul",{staticClass:"netPopChoiceList"},[r("li",{staticClass:"start-net-icon"},[r("span",{staticClass:"start-icon"}),t._v("出发地:")]),t._v(" "),r("li",{staticClass:"clearfix"},[r("span",{staticClass:"wlListName"},[r("label",{staticClass:"el-radio is-checked",attrs:{role:"radio","aria-checked":"true",tabindex:"0"}},[r("input",{staticClass:"el-radio__original",attrs:{type:"radio","aria-hidden":"true",tabindex:"-1",value:"8a1e52787cd548f2af1984f35138d392"}}),t._v("广州新市营业部")])]),r("span",{staticClass:"wlListMobile"},[t._v("距离：1.2709km")]),t._v(" "),r("span",{staticClass:"wlListAddres"},[t._v("广东省广州市白云区新市街道新市西街新市幼儿园")])]),r("li",{staticClass:"clearfix"},[r("span",{staticClass:"wlListName"},[r("label",{staticClass:"el-radio",attrs:{role:"radio",tabindex:"0"}},[r("input",{staticClass:"el-radio__original",attrs:{type:"radio","aria-hidden":"true",tabindex:"-1",value:"f257a9f46baa4bc3a75be9de629a90c1"}}),t._v("广州沙太北路收货站")])]),r("span",{staticClass:"wlListMobile"},[t._v("距离：9.8661km")]),t._v(" "),r("span",{staticClass:"wlListAddres"},[t._v("广东省广州市白云区同和街道同宝路广州誉德莱国际学校")])])]),t._v(" "),r("ul",{staticClass:"netPopChoiceList"},[r("li",{staticClass:"end-net-icon"},[r("span",{staticClass:"end-icon"}),t._v("目的地:")])])])]),t._v(" "),r("div",{staticClass:"el-dialog__footer"},[r("span",{staticClass:"cancel-net-select"},[t._v("取消")]),t._v(" "),r("span",{staticClass:"confirm-net-select"},[t._v("确定")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order_usual_contacts_wrapper"},[r("div",{staticClass:"order_usual_contacts_bg"}),t._v(" "),r("div",{staticClass:"order_usual_contacts_pop order_list_contacts_pop"},[r("div",{staticClass:"el-dialog__header"},[r("span",{staticClass:"close"},[t._v("X")]),t._v(" "),r("span",{staticClass:"inner_title"},[t._v("常用联系人")])]),t._v(" "),r("div",{staticClass:"el-dialog__body"},[r("span",{staticClass:"search-input"},[r("input",{staticClass:"el-input__inner",attrs:{type:"text",autocomplete:"off",placeholder:"请输入姓名、手机号或地址搜索"}}),r("span",[t._v("搜索")])]),t._v(" "),r("span",{staticClass:"addNewContact "},[t._v("添加常用发货人")])]),t._v(" "),r("ul",{staticClass:"contactPopList"},[r("li",{staticClass:"clearfix"},[r("span",{staticClass:"contactName"},[t._v("王泽熙")]),t._v(" "),r("span",{staticClass:"contactMobile"},[t._v("135656565")]),t._v(" "),r("span",{staticClass:"contactAddres"},[t._v("广东省广州市海珠区凤阳街道粤汇餐厅马岗顶工业区")]),t._v(" "),r("span",{staticClass:"contactManage"},[t._v("修改")])])])]),t._v(" "),r("div",{staticClass:"order_add_contacts_pop order_usual_contacts_pop"},[r("div",{staticClass:"el-dialog__header"},[r("span",{staticClass:"close"},[t._v("X")]),t._v(" "),r("span",{staticClass:"inner_title"},[t._v("添加常用发货人")])]),t._v(" "),r("table",[r("tbody",[r("tr",[r("th",[t._v("姓名：")]),t._v(" "),r("td",[r("input",{attrs:{maxlength:"15",type:"text"}})])]),t._v(" "),r("tr",[r("th",[t._v("电话：")]),t._v(" "),r("td",[r("input",{attrs:{type:"text",maxlength:"11"}})])]),t._v(" "),r("tr",[r("th",[t._v("地址：")]),t._v(" "),r("td",[r("input",{attrs:{wtmap:"detail",maxlength:"30",type:"text"}})])]),t._v(" "),r("tr",[r("th"),t._v(" "),r("td",[r("label",[r("input",{attrs:{id:"setdefault",type:"checkbox",name:"setdefault"}}),t._v("设置为默认地址")])])])])]),t._v(" "),r("div",{staticClass:"contact-btns"},[r("span",{staticClass:"add-cancel"},[t._v("取消")]),t._v(" "),r("span",{staticClass:"add-submit"},[t._v("保存")])])])])}],!1,null,null,null);e.default=component.exports}}]);