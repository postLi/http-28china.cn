(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{602:function(t,e,n){"use strict";n.r(e);var r={name:"Pay",head:{link:[{rel:"stylesheet",href:"/css/insurancePay.css"},{rel:"stylesheet",href:"/css/insuranceComon.css"}]},layout:"Sublayout",mounted(){seajs.use(["/js/insurance.js"],function(){$(function(){var t=getRequest(),e="/aflc-uc/usercenter/aflcinsurancepolicy/v1/"+t.id+"?access_token="+$.cookie("access_token");api.getInfo(e).done(function(t){$("#insuranceNum").html(t.data.insuranceNum),$("#theInsuredName").html(t.data.theInsuredName),$("#createTime").html(t.data.createTime),$("#insuranceName").html(t.data.insuranceName),$("#insuranceFee").html(t.data.insuranceFee+"元"),$(".pay_money").html("<font>"+t.data.insuranceFee+"</font><em>元</em>")}).fail(function(t){})})})}},c=n(0),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pay"},[n("div",{staticClass:"top_bg"},[n("div",{staticClass:"top center"},[n("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("li",{staticClass:"top_3"},[n("img",{attrs:{src:"/images/insurance/phone-bx.png"}}),t._v(" "),n("span",[t._v("免费热线")]),n("font",[t._v("400-999-2828")])],1)])])]),t._v(" "),n("div",{staticClass:"main center"},[n("form",{staticClass:"center"},[t._m(2),t._v(" "),n("ul",[n("li",{staticClass:"item_left"},[t._v("开具发票：")]),t._m(3),t._v(" "),n("li",{staticClass:"item_left pay_way_sm"},[t._v("支付方式：")]),t._m(4),t._v(" "),n("li",{staticClass:"item_left pay_money_sm"},[t._v("应付金额：")]),t._v(" "),n("li",{staticClass:"item_right pay_money"}),t._v(" "),n("li",{staticClass:"agree"},[n("span",{staticClass:"agree_none"}),n("font",[t._v("我已阅读并接受"),n("a",{attrs:{href:"#",target:"_blank"}},[t._v("《平安保险投保须知》")]),t._v("和"),n("a",{attrs:{href:"#",target:"_blank"}},[t._v("《保险条款》")])])],1),t._v(" "),t._m(5)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"top_1"},[e("a",{attrs:{href:"/",target:"_blank"}},[e("img",{attrs:{src:"/images/index_files/logor.png"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"top_2"},[e("span",[this._v("保险商城")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("tr",[e("th",[this._v("投保单号")]),e("th",[this._v("被保险人")]),e("th",[this._v("产品名称")]),e("th",[this._v("投保日期")]),e("th",[this._v("保险金额")])]),this._v(" "),e("tr",[e("td",{attrs:{id:"insuranceNum"}}),e("td",{attrs:{id:"theInsuredName"}}),e("td",{attrs:{id:"insuranceName"}}),e("td",{attrs:{id:"createTime"}}),e("td",{attrs:{id:"insuranceFee"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"item_right fapiao"},[e("span",{staticClass:"item_fapiao fapiao_checked"},[this._v("不开")]),this._v(" "),e("span",{staticClass:"item_fapiao"},[this._v("开")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"item_right"},[e("input",{staticClass:"pay_input1 pay_checked1",attrs:{readonly:"",value:"微信支付"}}),this._v(" "),e("input",{staticClass:"pay_input2",attrs:{readonly:"",value:"支付宝支付"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("input",{staticClass:"pay_tj",attrs:{readonly:"",onclick:"pay()",value:"安全支付"}})])}],!1,null,null,null);e.default=component.exports}}]);