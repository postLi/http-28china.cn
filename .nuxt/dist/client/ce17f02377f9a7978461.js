(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{585:function(t,e,n){"use strict";n.r(e);var _={name:"Insurance",head:{link:[{rel:"stylesheet",href:"/css/insuranceIndex.css"},{rel:"stylesheet",href:"/css/insuranceComon.css"}]},layout:"subLayout",mounted(){seajs.use(["/js/insurance.js"],function(){$(function(){var t=getRequest();"综合险"===$("input[name='a']:checked").val()?($("#bx_lx1_label").addClass("bx_checked"),$("#bx_sm1").css("display","block"),$("#bx_sm2").css("display","none")):($("#bx_lx2_label").addClass("bx_checked"),$("#bx_sm1").css("display","none"),$("#bx_sm2").css("display","block"));let e="/aflc-portal/portalt/aflcinsurancepolicy/v1/"+t.id;$.ajax({url:"/api"+e,type:"GET",dataType:"json",processData:!1,cache:!1,contentType:!1,headers:{"Content-Type":"application/json"},success:function(t){$("#insuranceNumber").html(t.data.insuranceNumber),$("#browseNumber").html(t.data.browseNumber)},error:function(t){"invalid_token"===JSON.parse(t.responseText).error&&($("body").toast({content:"您还未登录，请先登录",duration:3e3}),$("body").trigger("login.show"))}})})})}},c=n(1),component=Object(c.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Insurance"},[n("div",{staticClass:"top_bg"},[n("div",{staticClass:"top center"},[n("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("li",{staticClass:"top_3"},[n("img",{attrs:{src:"/images/insurance/phone-bx.png"}}),t._v(" "),n("span",[t._v("免费热线")]),n("font",[t._v("400-999-2828")])],1)])])]),t._v(" "),n("div",{staticClass:"main_bg center"}),t._v(" "),n("div",{staticClass:"main center"},[n("div",{staticClass:"main1"},[n("ul",[n("li",[n("i",[t._v("01")]),t._v(" "),n("span",[t._v("选择面广")]),t._v(" "),n("font",[t._v("国内，国际，海陆空运输方式全覆盖")])],1),t._v(" "),n("li",[n("i",[t._v("02")]),t._v(" "),n("span",[t._v("超低价格")]),t._v(" "),n("font",[t._v("费率低至万二，多家大品牌可选")])],1),t._v(" "),n("li",[n("i",[t._v("03")]),t._v(" "),n("span",[t._v("方便快捷")]),t._v(" "),n("font",[t._v("24小时在线投保，30分钟极速出单")])],1),t._v(" "),n("li",[n("i",[t._v("04")]),t._v(" "),n("span",[t._v("放心售后")]),t._v(" "),n("font",[t._v("一对一协助理赔，全程跟踪服务")])],1)])]),t._v(" "),n("div",{staticClass:"main2"},[t._m(2),t._v(" "),n("div",{staticClass:"main2_2"}),t._v(" "),n("div",{staticClass:"main2_3"},[n("ul",[n("li",[n("span",[t._v("第一步")]),t._v(" "),n("font",[t._v("选择保险")])],1),t._v(" "),n("img",{attrs:{src:"images/insurance/jt.png"}}),t._v(" "),n("li",[n("span",[t._v("第二步")]),t._v(" "),n("font",[t._v("在线填单")])],1),t._v(" "),n("img",{attrs:{src:"images/insurance/jt.png"}}),t._v(" "),n("li",[n("span",[t._v("第三步")]),t._v(" "),n("font",[t._v("网上支付")])],1),t._v(" "),n("img",{attrs:{src:"images/insurance/jt.png"}}),t._v(" "),n("li",[n("span",[t._v("第四步")]),t._v(" "),n("font",[t._v("下载保单")])],1)])])]),t._v(" "),n("div",{staticClass:"main3"},[t._m(3),t._v(" "),n("div",{staticClass:"main3_2"}),t._v(" "),n("div",{staticClass:"main3_3"},[n("ul",[n("li",[n("a",{attrs:{href:"/Insurance/product?id=1",target:"_blank"}},[t._m(4),t._v(" "),n("div",{staticClass:"item_02"},[n("span",[t._v("平安货物运输保险运")]),t._v(" "),n("font",[t._v("起")]),t._v(" "),n("i",[t._v("￥10")])],1),t._v(" "),t._m(5)])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:;",target:"_blank",onclick:"clickHandle()"}},[t._m(6),t._v(" "),n("div",{staticClass:"item_02"},[n("span",[t._v("人保货运险")]),t._v(" "),n("font",[t._v("起")]),t._v(" "),n("i",[t._v("￥10")])],1),t._v(" "),t._m(7)])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:;",target:"_blank",onclick:"clickHandle()"}},[t._m(8),t._v(" "),n("div",{staticClass:"item_02"},[n("span",[t._v("安达货运险")]),t._v(" "),n("font",[t._v("起")]),t._v(" "),n("i",[t._v("￥5")])],1),t._v(" "),t._m(9)])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:;",target:"_blank",onclick:"clickHandle()"}},[t._m(10),t._v(" "),n("div",{staticClass:"item_02"},[n("span",[t._v("太平洋货物运输保险")]),t._v(" "),n("font",[t._v("起")]),t._v(" "),n("i",[t._v("￥10")])],1),t._v(" "),t._m(11)])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:;",target:"_blank",onclick:"clickHandle()"}},[t._m(12),t._v(" "),n("div",{staticClass:"item_02"},[n("span",[t._v("安联全车盗抢险")]),t._v(" "),n("font",[t._v("起")]),t._v(" "),n("i",[t._v("￥20")])],1),t._v(" "),t._m(13)])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:;",target:"_blank",onclick:"clickHandle()"}},[t._m(14),t._v(" "),n("div",{staticClass:"item_02"},[n("span",[t._v("国内货物运输保险")]),t._v(" "),n("font",[t._v("起")]),t._v(" "),n("i",[t._v("￥15")])],1),t._v(" "),t._m(15)])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:;",target:"_blank",onclick:"clickHandle()"}},[t._m(16),t._v(" "),n("div",{staticClass:"item_02"},[n("span",[t._v("安达货运险")]),t._v(" "),n("font",[t._v("起")]),t._v(" "),n("i",[t._v("￥10")])],1),t._v(" "),t._m(17)])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:;",target:"_blank",onclick:"clickHandle()"}},[t._m(18),t._v(" "),n("div",{staticClass:"item_02"},[n("span",[t._v("人保货运险")]),t._v(" "),n("font",[t._v("起")]),t._v(" "),n("i",[t._v("￥15")])],1),t._v(" "),t._m(19)])])]),t._v(" "),t._m(20)])])]),t._v(" "),n("div",{staticClass:"footer_sm"},[n("div",{staticClass:"item_sm center"},[n("ul",[n("li",[n("img",{attrs:{src:"images/insurance/footer_ico.png"}}),t._v(" "),n("span",[t._v("全程理赔服务")]),t._v(" "),n("font",[t._v("理赔不再是难题")])],1),t._v(" "),n("li",[n("img",{attrs:{src:"images/insurance/footer_ico.png"}}),t._v(" "),n("span",[t._v("10年+保险服务 ")]),t._v(" "),n("font",[t._v("专业可信赖")])],1),t._v(" "),n("li",[n("img",{attrs:{src:"images/insurance/footer_ico.png"}}),t._v(" "),n("span",[t._v("咨询、投保、保全 ")]),t._v(" "),n("font",[t._v("专人服务一站搞定")])],1),t._v(" "),n("li",[n("img",{attrs:{src:"images/insurance/footer_ico.png"}}),t._v(" "),n("span",[t._v("支持在线比价 ")]),t._v(" "),n("font",[t._v("提供有市场竞争力的定价")])],1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"top_1"},[e("a",{attrs:{href:"/",target:"_blank"}},[e("img",{attrs:{src:"/images/index_files/logor.png"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"top_2"},[e("span",[this._v("保险商城")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main2_1"},[e("span",[this._v("预约投保流程")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main3_1"},[e("span",[this._v("国内货物运输保险")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_01"},[e("img",{attrs:{src:"images/insurance/big_pic.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_03"},[e("span",[this._v("运输必备")]),this._v(" "),e("img",{attrs:{src:"images/insurance/logo3.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_01"},[e("img",{attrs:{src:"images/insurance/1-2bx.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_03"},[e("span",[this._v("保障充足")]),this._v(" "),e("img",{attrs:{src:"images/insurance/logo4.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_01"},[e("img",{attrs:{src:"images/insurance/1bx.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_03"},[e("span",[this._v("专业风险保障")]),this._v(" "),e("img",{attrs:{src:"images/insurance/logo1.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_01"},[e("img",{attrs:{src:"images/insurance/2bx.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_03"},[e("span",[this._v("运输必备")]),this._v(" "),e("img",{attrs:{src:"images/insurance/logo5.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_01"},[e("img",{attrs:{src:"images/insurance/3bx.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_03"},[e("span",[this._v("透明快速")]),this._v(" "),e("img",{attrs:{src:"images/insurance/logo2.jpg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_01"},[e("img",{attrs:{src:"images/insurance/4bx.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_03"},[e("span",[this._v("运输必备")]),this._v(" "),e("img",{attrs:{src:"images/insurance/small_pic.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_01"},[e("img",{attrs:{src:"images/insurance/5bx.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_03"},[e("span",[this._v("专业风险保障")]),this._v(" "),e("img",{attrs:{src:"images/insurance/logo1.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_01"},[e("img",{attrs:{src:"images/insurance/6bx.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item_03"},[e("span",[this._v("保障充足")]),this._v(" "),e("img",{attrs:{src:"images/insurance/logo4.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main3_sm"},[e("span",[this._v("我们保证: 为客户提供详细全面的产品介绍，为您定制合适的保障方案，24小时客服服务，全程提供售前售后及理赔服务")])])}],!1,null,null,null);e.default=component.exports}}]);