(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{428:function(t,e,l){"use strict";l.r(e);var n={name:"Step1",head:{link:[{rel:"stylesheet",href:"/css/insuranceStep1.css"},{rel:"stylesheet",href:"/css/insuranceComon.css"}]},layout:"subLayout",mounted(){seajs.use(["/js/insurance.js"],function(){$(function(){window.sessionStorage.getItem("step0")&&("综合险"===window.sessionStorage.getItem("step0")?($("#bx_lx1").attr("checked","checked"),$("#bx_lx2").removeAttr("checked")):($("#bx_lx2").attr("checked","checked"),$("#bx_lx1").removeAttr("checked")),window.sessionStorage.removeItem("step0"));var t={insuranceType:$("input[name='a']:checked").val(),policyHolderType:$("input[name='b']:checked").val(),policyHolderName:$("#bx_lx5").val(),policyHolderNum:$("#bx_lx6").val(),theInsuredType:$("input[name='c']:checked").val(),theInsuredName:$("#bx_lx9").val(),theInsuredNum:$("#bx_lx10").val()};"综合险"===$("input[name='a']:checked").val()?($("#bx_lx1_label").addClass("bx_checked"),$("#bx_sm1").css("display","block"),$("#bx_sm2").css("display","none")):($("#bx_lx2_label").addClass("bx_checked"),$("#bx_sm1").css("display","none"),$("#bx_sm2").css("display","block")),"0"===$("input[name='b']:checked").val()?$("#bx_lx3_label").addClass("bx_checked"):$("#bx_lx4_label").addClass("bx_checked"),"0"===$("input[name='c']:checked").val()?$("#bx_lx7_label").addClass("bx_checked"):$("#bx_lx8_label").addClass("bx_checked"),window.sessionStorage.setItem("step1",JSON.stringify(t)),$(".next_button").click(function(){insuranceValidate.check()&&(t.insuranceType=$("input[name='a']:checked").val(),t.policyHolderType=$("input[name='b']:checked").val(),t.theInsuredType=$("input[name='c']:checked").val(),t.policyHolderName=$("#bx_lx5").val(),t.policyHolderNum=$("#bx_lx6").val(),t.theInsuredName=$("#bx_lx9").val(),t.theInsuredNum=$("#bx_lx10").val(),window.sessionStorage.setItem("step1",JSON.stringify(t)),1===window.history.length?window.location.href="/Insurance/step2":window.history.forward())})})})}},c=l(1),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"step1"},[l("div",{staticClass:"top_bg"},[l("div",{staticClass:"top center"},[l("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),l("li",{staticClass:"top_3"},[l("img",{attrs:{src:"/images/insurance/phone-bx.png"}}),t._v(" "),l("span",[t._v("免费热线")]),l("font",[t._v("400-999-2828")])],1)])])]),t._v(" "),t._m(2)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"top_1"},[e("a",{attrs:{href:"/",target:"_blank"}},[e("img",{attrs:{src:"/images/index_files/logor.png"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"top_2"},[e("span",[this._v("保险商城")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"main center"},[l("div",{staticClass:"m_border center"},[l("form",{staticClass:"center validateForm"},[l("table",[l("tr",[l("div",{staticClass:"main_bt"},[l("span",[t._v("基本信息")]),l("i")])]),t._v(" "),l("tr",{staticClass:"bx_lx"},[l("td",[t._v("险种：")]),l("td",[l("input",{staticClass:"display_none",attrs:{id:"bx_lx1",type:"radio",checked:"checked",name:"a",value:"综合险"}}),t._v(" "),l("label",{staticClass:"bx_item input01",attrs:{id:"bx_lx1_label",for:"bx_lx1"}},[t._v("综合险")]),t._v(" "),l("input",{staticClass:"display_none",attrs:{id:"bx_lx2",type:"radio",name:"a",value:"基本险"}}),t._v(" "),l("label",{staticClass:"bx_item input01",attrs:{id:"bx_lx2_label",for:"bx_lx2"}},[t._v("基本险")]),t._v(" "),l("br"),t._v(" "),l("span",{attrs:{id:"bx_sm1"}},[t._v("承保基本款所有保障范围+运输中碰撞、挤压、雨淋+盗窃哄抢")]),t._v(" "),l("span",{attrs:{id:"bx_sm2"}},[t._v("承保火灾、爆炸、车辆碰撞倾覆事故及暴雨等自然灾害造成的货物损失+装卸货损失+施救费用+盗窃哄抢")])])]),t._v(" "),l("tr",{staticClass:"tbr_lx"},[l("td",[l("i",[t._v("*")]),t._v("投保人类型：")]),l("td",[l("input",{staticClass:"display_none",attrs:{id:"bx_lx3",type:"radio",checked:"checked",name:"b",value:"0"}}),t._v(" "),l("label",{staticClass:"input01",attrs:{id:"bx_lx3_label",for:"bx_lx3"}},[t._v("个人")]),t._v(" "),l("input",{staticClass:"display_none",attrs:{id:"bx_lx4",type:"radio",name:"b",value:"1"}}),t._v(" "),l("label",{staticClass:"input01",attrs:{id:"bx_lx4_label",for:"bx_lx4"}},[t._v("团体")])])]),t._v(" "),l("tr",{staticClass:"tbr"},[l("td",[l("i",[t._v("*")]),t._v("投保人：")]),l("td",[l("input",{staticClass:"input02",attrs:{id:"bx_lx5",maxlength:"30",validate:'{"msg":"请输入投保人！","reg":"^[a-zA-Z\\u4e00-\\u9fa5 ]{1,30}$","regMsg":"请输入中文或英文"}',placeholder:"投保人公司/个人名称"}})])]),t._v(" "),l("tr",{staticClass:"tbr_id"},[l("td",[l("i",[t._v("*")]),t._v("证件号：")]),l("td",[l("input",{staticClass:"input02",attrs:{id:"bx_lx6",maxlength:"30",validate:'{"msg":"请输入证件号！"}',placeholder:"组织机构代码/身份证"}})])]),t._v(" "),l("tr",{staticClass:"bbr_lx"},[l("td",[l("i",[t._v("*")]),t._v("被保人类型：")]),l("td",[l("input",{staticClass:"display_none",attrs:{id:"bx_lx7",type:"radio",checked:"checked",name:"c",value:"0"}}),t._v(" "),l("label",{staticClass:"input01",attrs:{id:"bx_lx7_label",for:"bx_lx7"}},[t._v("个人")]),t._v(" "),l("input",{staticClass:"display_none",attrs:{id:"bx_lx8",type:"radio",name:"c",value:"1"}}),t._v(" "),l("label",{staticClass:"input01",attrs:{id:"bx_lx8_label",for:"bx_lx8"}},[t._v("团体")])])]),t._v(" "),l("tr",{staticClass:"bbr"},[l("td",[l("i",[t._v("*")]),t._v("被保人：")]),l("td",[l("input",{staticClass:"input02",attrs:{id:"bx_lx9",maxlength:"30",validate:'{"msg":"请输入被投保人！","reg":"^[a-zA-Z\\u4e00-\\u9fa5 ]{1,30}$","regMsg":"请输入中文或英文"}',placeholder:"投保人公司/个人名称"}})])]),t._v(" "),l("tr",{staticClass:"bbr_id"},[l("td",[l("i",[t._v("*")]),t._v("被保人证件号：")]),l("td",[l("input",{staticClass:"input02",attrs:{id:"bx_lx10",maxlength:"30",validate:'{"msg":"请输入证件号！"}',placeholder:"组织机构代码/身份证"}})])]),t._v(" "),l("tr",{staticClass:"next_step"},[l("td"),l("td",[l("input",{staticClass:"next_button",attrs:{onclick:"next()",readonly:"",value:"下一步"}})])])])])])])}],!1,null,null,null);e.default=component.exports}}]);