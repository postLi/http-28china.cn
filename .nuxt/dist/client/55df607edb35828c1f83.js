(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{332:function(t,e,r){var content=r(476);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("747ad034",content,!0,{sourceMap:!1})},475:function(t,e,r){"use strict";var l=r(332);r.n(l).a},476:function(t,e,r){(t.exports=r(13)(!1)).push([t.i,".huo_box[data-v-02be5cc9]{max-width:1400px;margin:0 auto}.box1_list[data-v-02be5cc9],.box2_list[data-v-02be5cc9]{border:1px solid #ddd}",""])},691:function(t,e,r){"use strict";r.r(e);var l={name:"HuoOrder",head:{link:[{rel:"stylesheet",href:"/css/huo_order.css"},{rel:"stylesheet",href:"/layer3/css/layui.css"},{rel:"stylesheet",href:"/fancybox/jquery.fancybox.min.css"}],script:[]},mounted:function(){seajs.use(["/layer/layer.js","api"],function(){seajs.use(["/js/gaodemap2.js"],function(){seajs.use(["/js/huoOrder.1.js"],function(){})})})}},c=(r(475),r(2)),component=Object(c.a)(l,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"huo_box"},[r("div",{staticClass:"main"},[r("div",{staticClass:"right main_nr"},[r("div",{staticClass:"nr order-create-main"},[r("div",{staticClass:"order-step"},[r("img",{staticClass:"dp",attrs:{src:"/images/wzlImg/dp.png"}}),t._v("发布货源信息，让物流企业和运输车辆主动联系您，价比三家，省时省力")]),t._v(" "),r("div",{staticClass:"order-line-info order-input-tab"},[r("div",{staticClass:"order-title"},[t._v("线路信息 "),r("span",[t._v("（提示：待*为必填）")])]),t._v(" "),r("div",{staticClass:"order-line-from clearfix"},[r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("出发地：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{wtmap:"",maxlength:"40",type:"text"}}),r("img",{staticClass:"qd",attrs:{src:"/images/wzlImg/qd.png"}})])]),t._v(" "),r("div",{staticClass:"order-form-item form-detail"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("街道/门牌号：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{wtmapinit:"",wtmap:"{township}{street}{building}",maxlength:"40",type:"text"}}),r("img",{staticClass:"wz1",attrs:{src:"/images/wzlImg/wz.png"}})])])]),t._v(" "),r("div",{staticClass:"order-line-to clearfix"},[r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("到达地：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{wtmap:"",maxlength:"40",type:"text"}}),r("img",{staticClass:"zd",attrs:{src:"/images/wzlImg/zd.png"}})])]),t._v(" "),r("div",{staticClass:"order-form-item form-detail"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("街道/门牌号：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{wtmapinit:"",wtmap:"{township}{street}{building}",maxlength:"40",type:"text"}}),r("img",{staticClass:"wz2",attrs:{src:"/images/wzlImg/wz.png"}})])])])]),t._v(" "),r("div",{staticClass:"order-input-tab order-cargo-info"},[r("div",{staticClass:"order-title"},[t._v("货物信息")]),t._v(" "),r("div",{staticClass:"order-caro-con"},[r("div",{staticClass:"order-cargo-title clearfix"}),t._v(" "),r("ul",{staticClass:"order-cargo-list"},[r("li",[r("div",{staticClass:"input"},[r("span",[r("span",{staticClass:"required"},[t._v("*")]),t._v("货物名称")]),t._v(" "),r("input",{staticClass:"cargoname",attrs:{maxlength:"40",type:"text"}})]),t._v(" "),r("div",{staticClass:"input"},[r("span",[r("span",{staticClass:"required"},[t._v("*")]),t._v("总件数")]),t._v(" "),r("input",{attrs:{maxlength:"12",type:"text"}}),t._v(" "),r("span",{staticClass:"append"},[t._v("件")])]),t._v(" "),r("div",{staticClass:"input"},[r("span",[r("span",{staticClass:"required"},[t._v("*")]),t._v("预估重量")]),t._v(" "),r("input",{staticClass:"caroweight",attrs:{maxlength:"12",type:"text"}}),t._v(" "),r("span",{staticClass:"append"},[t._v("公斤")])]),t._v(" "),r("div",{staticClass:"input"},[r("span",[r("span",{staticClass:"required"},[t._v("*")]),t._v("预估体积")]),t._v(" "),r("input",{staticClass:"cargovolume",attrs:{maxlength:"12",type:"text"}}),t._v(" "),r("span",{staticClass:"append"},[t._v("立方")])])])]),t._v(" "),r("div",{staticClass:"reset-cargo-list"}),t._v(" "),r("div",{staticClass:"add-cargo-list"})])]),t._v(" "),r("div",{staticClass:"order-input-tab order-company-info"},[r("div",{staticClass:"order-title"},[t._v("货源类型")]),t._v(" "),r("div",{staticClass:"order_check order_top"},[t._v("\n            选择类型：\n            "),r("span",{staticClass:"minbox checktype",attrs:{type:"AF0490701"}},[t._v("单次急发货源")]),t._v(" "),r("span",{staticClass:"minbox",attrs:{type:"AF0490702"}},[t._v("长期稳定货源")])])]),t._v(" "),r("div",{staticClass:"order-input-tab order-contact-info"},[r("div",{staticClass:"order-title"},[t._v("联系方式")]),t._v(" "),r("div",{staticClass:"order-contact-from clearfix"},[r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("发货人：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{maxlength:"40",type:"text"}})])]),t._v(" "),r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("发货人手机：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{maxlength:"11",type:"text"}})])]),t._v(" "),r("span",{staticClass:"order-usual-button"},[t._v("选择常用联系人")]),t._v(" "),r("div",{staticClass:"order-save-usual"},[r("label",[r("input",{attrs:{id:"",type:"checkbox",name:""}}),t._v("\n                保存到常用发货人\n              ")])])]),t._v(" "),r("div",{staticClass:"order-contact-to clearfix"},[r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[t._v("收货人：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{maxlength:"40",type:"text"}})])]),t._v(" "),r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[t._v("收货人手机：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{attrs:{maxlength:"11",type:"text"}})])]),t._v(" "),r("span",{staticClass:"order-usual-button"},[t._v("选择常用联系人")]),t._v(" "),r("div",{staticClass:"order-save-usual"},[r("label",[r("input",{attrs:{id:"",type:"checkbox",name:""}}),t._v("\n                保存到常用收货人\n              ")])])])]),t._v(" "),r("div",{staticClass:"order_usual_contacts_wrapper"},[r("div",{staticClass:"order_usual_contacts_bg"}),t._v(" "),r("div",{staticClass:"order_usual_contacts_pop order_list_contacts_pop"},[r("div",{staticClass:"el-dialog__header"},[r("span",{staticClass:"close"},[t._v("X")]),t._v(" "),r("span",{staticClass:"inner_title"},[t._v("常用联系人")])]),t._v(" "),r("div",{staticClass:"el-dialog__body"},[r("span",{staticClass:"search-input"},[r("input",{staticClass:"el-input__inner",attrs:{type:"text",autocomplete:"off",placeholder:"请输入姓名、手机号或地址搜索"}}),r("span",[t._v("搜索")])]),t._v(" "),r("span",{staticClass:"addNewContact "},[t._v("添加常用发货人")])]),t._v(" "),r("ul",{staticClass:"contactPopList"},[r("li",{staticClass:"clearfix"},[r("span",{staticClass:"contactName"},[t._v("王泽熙")]),t._v(" "),r("span",{staticClass:"contactMobile"},[t._v("135656565")]),t._v(" "),r("span",{staticClass:"contactAddres"},[t._v("广东省广州市海珠区凤阳街道粤汇餐厅马岗顶工业区")]),t._v(" "),r("span",{staticClass:"contactManage"},[t._v("修改")])])])]),t._v(" "),r("div",{staticClass:"order_add_contacts_pop order_usual_contacts_pop"},[r("div",{staticClass:"el-dialog__header"},[r("span",{staticClass:"close"},[t._v("X")]),t._v(" "),r("span",{staticClass:"inner_title"},[t._v("添加常用发货人")])]),t._v(" "),r("table",[r("tbody",[r("tr",[r("th",[t._v("姓名：")]),t._v(" "),r("td",[r("input",{attrs:{placeholder:"请输入联系人",maxlength:"15",type:"text"}})])]),t._v(" "),r("tr",[r("th",[t._v("电话：")]),t._v(" "),r("td",[r("input",{attrs:{placeholder:"请输入联系人电话号码",type:"text",maxlength:"11"}})])]),t._v(" "),r("tr",[r("th",[t._v("地址：")]),t._v(" "),r("td",[r("input",{attrs:{placeholder:"请选择地址",wtmap:"detail",maxlength:"30",type:"text"}})])]),t._v(" "),r("tr",[r("th"),t._v(" "),r("td",[r("label",[r("input",{attrs:{type:"checkbox",name:"setdefault",id:"setdefault"}}),t._v("设置为默认地址")])])])])]),t._v(" "),r("div",{staticClass:"contact-btns"},[r("span",{staticClass:"add-cancel"},[t._v("取消")]),t._v(" "),r("span",{staticClass:"add-submit"},[t._v("保存")])])])]),t._v(" "),r("div",{staticClass:"order-agree-info"},[r("label",{attrs:{for:"agree"}},[r("input",{attrs:{id:"agree",type:"checkbox",checked:"",name:"agree"}}),t._v("\n            我已阅读并接受"),r("a",{attrs:{href:"/h5/EnterpriseAgreement.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《中国专线物流网服务协议》")]),t._v(" "),r("a",{attrs:{href:"/h5/SecrecyAgreement.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《网络用户信息保密协议》")])])]),t._v(" "),r("div",{staticClass:"order-submit-btn"},[t._v("立即发布")])]),t._v(" "),r("div",{staticClass:"order-success-main"},[r("div",{staticClass:"order-success-txt"},[t._v("订单提交成功！等待物流公司承运")]),t._v(" "),r("div",{staticClass:"order-success-tip"},[r("span",{staticClass:"order-tip"},[t._v("温馨提示：")]),r("br"),t._v("1、请您和吴瑞承运商签订真实有效的运单，签约前请勿支付押金、定金等一切费用；"),r("br"),t._v("2、查验物流公司和运输车辆证件，积极维护自身权益！\n        ")]),t._v(" "),r("div",{staticClass:"order-success-order order-success-tab clearfix"},[r("div",{staticClass:"order-success-label"},[t._v("订单信息")]),t._v(" "),r("ul",[r("li",{staticClass:"order-num"},[r("i",[t._v("订单号")]),t._v(" "),r("span",[t._v("AFZG201812240001")])]),t._v(" "),r("li",{staticClass:"order-from"},[r("i",[t._v("发货方信息")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])]),t._v(" "),r("li",{staticClass:"order-to"},[r("i",[t._v("收货方信息")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])])])]),t._v(" "),r("div",{staticClass:"order-success-order order-success-tab clearfix"},[r("div",{staticClass:"order-success-label"},[t._v("货物信息")]),t._v(" "),r("ul",[r("li",{staticClass:"order-cargo"},[r("i",[t._v("货物名称")]),t._v(" "),r("span",[t._v("AFZG201812240001")])]),t._v(" "),r("li",{staticClass:"order-cargo-num"},[r("i",[t._v("总数量")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])]),t._v(" "),r("li",{staticClass:"order-cago-class"},[r("i",[t._v("货物类型")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])]),t._v(" "),r("li",{staticClass:"order-cargo-weight"},[r("i",[t._v("预估重量")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])]),t._v(" "),r("li",{staticClass:"order-cargo-volume"},[r("i",[t._v("预估体积")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])]),t._v(" "),r("li",{staticClass:"order-cargo-fee"},[r("i",[t._v("预估运费")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])])])]),t._v(" "),r("div",{staticClass:"order-success-order order-success-tab clearfix"},[r("div",{staticClass:"order-success-label"},[t._v("线路信息")]),t._v(" "),r("ul",[r("li",{staticClass:"order-lineinfo-from"},[r("i",[t._v("出发地")]),t._v(" "),r("span",[t._v("AFZG201812240001")])]),t._v(" "),r("li",{staticClass:"order-lineinfo-to"},[r("i",[t._v("到达地")]),t._v(" "),r("span",[t._v("李宝强  15978951234")])])])]),t._v(" "),r("div",{staticClass:"order-success-btns"},[r("span",{staticClass:"continue-create-order"},[t._v("继续下单")]),t._v(" "),r("a",{staticClass:"track-order",attrs:{href:"/ydcx"}},[t._v("跟踪订单")]),t._v(" "),r("a",{staticClass:"return-to-index",attrs:{href:"/"}},[t._v("返回首页")])])]),t._v(" "),r("div",{staticClass:"order-caro-pop"},[r("ul",[r("li",[t._v("食品")])])]),t._v(" "),r("div",{staticClass:"wlname-info"},[r("div",{staticClass:"wlname-title"},[t._v("最佳网点")]),t._v(" "),r("ul",[r("li",[r("span",{staticClass:"wlnamev"},[t._v("出发地网点："),r("span")]),r("span",{staticClass:"wlnameh"},[t._v("距发货地："),r("span",[t._v("km")])]),t._v(" "),r("p",{staticClass:"wladdress"}),t._v(" "),r("p",[t._v("联系人："),r("span",{staticClass:"wluser"})]),t._v(" "),r("p",[t._v("联系电话："),r("span",{staticClass:"wlphone"})])]),r("li",[r("span",{staticClass:"wlnamev"},[t._v("目的地网点："),r("span")]),r("span",{staticClass:"wlnameh"},[t._v("距收货地："),r("span",[t._v("km")])]),t._v(" "),r("p"),t._v(" "),r("p",[t._v("联系人："),r("span",{staticClass:"wluser"})]),t._v(" "),r("p",[t._v("联系电话："),r("span",{staticClass:"wlphone"})])])]),t._v(" "),r("div",{staticClass:"select-other-net"},[t._v("重新选择网点")])])])])])}],!1,null,"02be5cc9",null);e.default=component.exports}}]);