(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{553:function(t,e,n){"use strict";n.r(e);var c={name:"Success",head:{link:[{rel:"stylesheet",href:"/css/insuranceSuccess.css"},{rel:"stylesheet",href:"/css/insuranceComon.css"}]},layout:"Sublayout",mounted(){seajs.use(["/js/insurance.js"],function(){$(function(){var t="/aflc-uc/usercenter/aflcinsurancepolicy/v1/"+getRequest().id+"?access_token="+$.cookie("access_token");api.getInfo(t).done(function(t){200===t.status&&1===t.data.paymentState&&($("#insuranceNum").html(t.data.insuranceNum),$("#insuranceFee").html(t.data.insuranceFee))}).fail(function(t){})})})}},r=n(1),component=Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"success"},[n("div",{staticClass:"top_bg"},[n("div",{staticClass:"top center"},[n("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("li",{staticClass:"top_3"},[n("img",{attrs:{src:"/images/insurance/phone-bx.png"}}),t._v(" "),n("span",[t._v("免费热线")]),n("font",[t._v("400-999-2828")])],1)])])]),t._v(" "),n("div",{staticClass:"main center"},[n("div",{staticClass:"success_main"},[n("div",{staticClass:"success_top"},[n("font",[t._v("恭喜您，支付成功啦")]),t._v(" "),n("span",[t._v("国内货运险已出单，该笔交易投保成功。")])],1),t._v(" "),n("div",{staticClass:"success_detail"},[n("table",[n("tr",[n("th",[n("span"),n("font",[t._v("保单详情")])],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])])]),t._v(" "),t._m(5)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"top_1"},[e("a",{attrs:{href:"/",target:"_blank"}},[e("img",{attrs:{src:"/images/index_files/logor.png"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"top_2"},[e("span",[this._v("保险商城")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"success_detail01"},[e("td",[this._v("订单编号：")]),e("td",{attrs:{id:"insuranceNum"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"success_detail02"},[e("td",[this._v("支付保费：")]),e("td",[e("i",{attrs:{id:"insuranceFee"}}),this._v("元")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"success_detail03"},[e("td",[this._v("保障期限：")]),e("td",[this._v("保险责任自签发保险凭证和保险货物运离起运地发货人的最后一个仓库或储运处所时起，至该保险凭证上注\n          明的目的地的收货人在当地的第一个仓库或储存处所时终止。但保险货物运抵目的地后，如收货人未及时提\n          货，则保险责任的终止期限最多延长至以收货人接到《到货通知单》后的十五天为限（以邮戳日期为准）。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"success_go"},[e("a",{attrs:{href:"/insurance/manage",target:"_blank"}},[this._v("进入投保管理")])])}],!1,null,null,null);e.default=component.exports}}]);