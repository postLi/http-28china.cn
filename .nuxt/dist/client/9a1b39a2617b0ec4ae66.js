(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{604:function(t,e,n){"use strict";n.r(e);n(118);var o={name:"Step2",head:{link:[{rel:"stylesheet",href:"/css/insuranceStep2.css"},{rel:"stylesheet",href:"/css/insuranceComon.css"}]},layout:"subLayout",mounted:function(){seajs.use("/js/insurance.js",function(){$(function(){location.search.substr(1);var t={goodsType:$("#data1").val(),goodsName:$("#data2").val(),goodsPack:$("#data3").val(),goodsNumber:$("#data4").val(),goodsValue:$("#data5").val()};window.sessionStorage.setItem("step2",JSON.stringify(t)),$(".next_button").click(function(){insuranceValidate.check()&&(t.goodsType=$("#data1").val(),t.goodsName=$("#data2").val(),t.goodsPack=$("#data3").val(),t.goodsNumber=$("#data4").val(),t.goodsValue=$("#data5").val(),window.sessionStorage.setItem("step2",JSON.stringify(t)),2===window.history.length?window.location.href="/Insurance/step3":window.history.forward())})})})}},r=n(1),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"step2"},[n("div",{staticClass:"top_bg"},[n("div",{staticClass:"top center"},[n("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("li",{staticClass:"top_3"},[n("img",{attrs:{src:"/images/insurance/phone-bx.png"}}),t._v(" "),n("span",[t._v("免费热线")]),n("font",[t._v("400-999-2828")])],1)])])]),t._v(" "),t._m(2)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"top_1"},[e("a",{attrs:{href:"/",target:"_blank"}},[e("img",{attrs:{src:"/images/index_files/logor.png"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"top_2"},[e("span",[this._v("保险商城")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main center"},[n("div",{staticClass:"m_border center"},[n("form",{staticClass:"center validateForm"},[n("table",[n("tr",[n("div",{staticClass:"main_bt"},[n("span",[t._v("货物类型")]),n("i")])]),t._v(" "),n("tr",{staticClass:"tbr"},[n("td",[n("i",[t._v("*")]),t._v("货物类型：")]),n("td",[n("select",{staticClass:"select01",attrs:{id:"data1",validate:'{"msg":"请选择货物类型"}'}},[n("option",{attrs:{name:""}},[t._v("请选择货物类型")]),t._v(" "),n("option",{attrs:{name:""}},[t._v("工业类、纺织服装类")]),t._v(" "),n("option",{attrs:{name:""}},[t._v("手机办公、家用电器类")]),t._v(" "),n("option",{attrs:{name:""}},[t._v("全新机器设备、普货")]),t._v(" "),n("option",{attrs:{name:""}},[t._v("普通家具、食品")])])])]),t._v(" "),n("tr",{staticClass:"tbr_id"},[n("td",[n("i",[t._v("*")]),t._v("货物名称：")]),n("td",[n("input",{staticClass:"input02",attrs:{id:"data2",maxlength:"30",validate:'{"msg":"请输入货物名称"}',placeholder:"请输入承保货物名称"}})])]),t._v(" "),n("tr",{staticClass:"bbr_lx"},[n("td",[n("i",[t._v("*")]),t._v("货物包装：")]),n("td",[n("select",{staticClass:"select01",attrs:{id:"data3",validate:'{"msg":"请选择货物包装"}'}},[n("option",{attrs:{name:""}},[t._v("请选择货物包装")]),t._v(" "),n("option",{attrs:{name:""}},[t._v("袋装")]),t._v(" "),n("option",{attrs:{name:""}},[t._v("散装、裸装")]),t._v(" "),n("option",{attrs:{name:""}},[t._v("罐装")]),t._v(" "),n("option",{attrs:{name:""}},[t._v("复合式包装")]),t._v(" "),n("option",{attrs:{name:""}},[t._v("箱装")]),t._v(" "),n("option",{attrs:{name:""}},[t._v("桶装")]),t._v(" "),n("option",{attrs:{name:""}},[t._v("其他")])])])]),t._v(" "),n("tr",{staticClass:"bbr"},[n("td",[n("i",[t._v("*")]),t._v("货物数量：")]),n("td",[n("input",{staticClass:"input02",attrs:{id:"data4",maxlength:"10",validate:'{"msg":"请输入货物数量","regG":"^[1-9][0-9]*$","regMsg":"请输入正整数"}',placeholder:"请输入货物数量"}})])]),t._v(" "),n("tr",{staticClass:"bbr_id"},[n("td",[n("i",[t._v("*")]),t._v("货物价值：")]),n("td",[n("input",{staticClass:"input02",attrs:{id:"data5",maxlength:"7",oninput:"checkValue(this)",validate:'{"msg":"请输入货物价值","regG":"^[1-9][0-9]*$","regMsg":"请输入正整数"}',placeholder:"(300万以内）"}})])]),t._v(" "),n("tr",{staticClass:"next_step"},[n("td",[n("a",{staticClass:"pointer",attrs:{target:"_self",onclick:"window.history.go(-1)"}},[t._v("上一步")])]),n("td",[n("input",{staticClass:"next_button",attrs:{onclick:"next()",readonly:"",value:"下一步"}})])])])])])])}],!1,null,null,null);e.default=component.exports}}]);