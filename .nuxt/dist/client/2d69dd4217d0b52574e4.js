(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{587:function(t,e,n){"use strict";n.r(e);n(18);var r={name:"Step3",head:{link:[{rel:"stylesheet",href:"/css/insuranceStep3.css"},{rel:"stylesheet",href:"/css/insuranceComon.css"},{rel:"stylesheet",href:"/theme/default/laydate.css"}]},layout:"subLayout",mounted(){seajs.use(["/js/insurance.js"],function(){seajs.use(["/js/laydate.js"],function(){seajs.use(["/js/dedeajax2.js"],function(){seajs.use(["/js/gaodemap2.js"],function(){seajs.use(["/js/jquery.pagination.min.js"],function(){$(function(){var t=JSON.parse(window.sessionStorage.getItem("step1")),e=JSON.parse(window.sessionStorage.getItem("step2")),n={insuranceCompany:"平安保险",insuranceName:"平安保险国内"+t.insuranceType,startProvince:"",startCity:"",endProvince:"",endCity:"",atransferAddressList:[],startTime:"",carNum:"",orderNum:"",paymentState:0,insuranceProductsId:"1"},r=new Date,l=r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate()+" "+r.getHours()+":"+r.getMinutes()+":"+r.getSeconds();function c(){if($("#data1").val()&&$("#data2").val()){var t={startProvince:$("#data1").val().split(",")[0],endProvince:$("#data2").val().split(",")[0],goodsValue:e.goodsValue,insuranceProductsId:n.insuranceProductsId};api.postInfo("/aflc-portal/portalt/aflcinsurancepolicy/v1/computationalfee",t).done(function(t){$("#insuranceFee").html("<font>"+t.data.insuranceFee+"</font><em>元</em>"),$("#insuranceDeductibles").html("<span>"+t.data.insuranceDeductibles+"</span>"),$("#insuranceRate").html("<font>"+t.data.insuranceRate+"</font>")})}}laydate.render({elem:"#data3",type:"datetime",min:l,done:function(t,e,n){t?($("#data3").removeClass("error"),$("#data3").next().remove(),$("#data3").after("<img style='margin-left: 10px' src='/img/u198861.png' alt=''>")):($("#data3").next().remove(),$("#data3").after("<span style='margin-left: 10px'><img src='/img/u198863.png' alt=''><span style='position: relative;top: -3px;left: 5px;'>请选择日期</span></span>"),$("#data3").addClass("error"))}}),c(),$("#afwl-map-button-confirm").on("click",function(){c(),$("#data1").val()?($("#data1").removeClass("error"),$("#data1").next().remove(),$("#data1").after("<img style='margin-left: 10px' src='/img/u198861.png' alt=''>")):($("#data1").next().remove(),$("#data1").after("<span style='margin-left: 10px'><img src='/img/u198863.png' alt=''><span style='position: relative;top: -3px;left: 5px;'>请选择日期</span></span>"),$("#data1").addClass("error")),$("#data2").val()?($("#data2").removeClass("error"),$("#data2").next().remove(),$("#data2").after("<img style='margin-left: 10px' src='/img/u198861.png' alt=''>")):($("#data2").next().remove(),$("#data2").after("<span style='margin-left: 10px'><img src='/img/u198863.png' alt=''><span style='position: relative;top: -3px;left: 5px;'>请选择日期</span></span>"),$("#data2").addClass("error"))}),$(".next_button").click(function(){!function(){var r="/aflc-uc/usercenter/aflcinsurancepolicy/v1/?access_token="+$.cookie("access_token");if(console.log(insuranceValidate.check()),insuranceValidate.check()){console.log(123213),n.startProvince=$("#data1").val().split(",")[0],n.startCity=$("#data1").val().split(",")[1],n.endProvince=$("#data2").val().split(",")[0],n.endCity=$("#data2").val().split(",")[1];var l=[],i=1;if($(".center3 input").each(function(){$(this).val()&&l.push({transferCity:$(this).val().split(",")[1],transferOrder:i++,transferProvince:$(this).val().split(",")[0]})}),n.atransferAddressList=l,n.startTime=$("#data3").val(),n.carNum=$("#data4").val(),n.orderNum=$("#data5").val(),$.cookie("access_token")){var c=$.extend(n,t,e);api.postInfo(r,c).done(function(t){window.location.href="/Insurance/pay?id="+t.data}).fail(function(t){})}else $("body").trigger("login.show")}}()}),$("#add1").click(function(){$(".center3").eq(0).after('<tr class="center3"><td><i></i>中转地：</td><td><input wtmap="provinceCity" class="input02 centerp" placeholder="请输入货物中转地" /><img src="images/sub.png" onclick="sub1(this)"  /></td></tr>'),$().reLoadWtmap()});var d,o=this;$(".login-btn, .login-yzm").on("click",function(){clearInterval(d),d=setInterval(()=>{$.cookie("access_token")&&(clearInterval(d),o.next())},300)}),$(".login_close img").on("click",function(){clearInterval(d)})})})})})})})}},l=n(0),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"step3"},[n("div",{staticClass:"top_bg"},[n("div",{staticClass:"top center"},[n("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("li",{staticClass:"top_3"},[n("img",{attrs:{src:"/images/insurance/phone-bx.png"}}),t._v(" "),n("span",[t._v("免费热线")]),n("font",[t._v("400-999-2828")])],1)])])]),t._v(" "),t._m(2)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"top_1"},[e("a",{attrs:{href:"/",target:"_blank"}},[e("img",{attrs:{src:"/images/index_files/logor.png"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"top_2"},[e("span",[this._v("保险商城")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main center"},[n("div",{staticClass:"m_border center"},[n("form",{staticClass:"center validateForm"},[n("table",[n("tr",[n("div",{staticClass:"main_bt"},[n("span",[t._v("运输信息")]),n("i")])]),t._v(" "),n("tr",{staticClass:"start3"},[n("td",[n("i",[t._v("*")]),t._v("起运地：")]),n("td",[n("input",{staticClass:"input02 startp",attrs:{id:"data1","data-toggle":"city-picker","data-level":"district",wtmap:"provinceCity",validate:'{"msg":"请选择货物起运地"}',placeholder:"请选择货物起运地"}})])]),t._v(" "),n("tr",{staticClass:"end3"},[n("td",[n("i",[t._v("*")]),t._v("目的地：")]),n("td",[n("input",{staticClass:"input02 endp",attrs:{id:"data2","data-toggle":"city-picker","data-level":"district",wtmap:"provinceCity",validate:'{"msg":"请选择货物目的地"}',placeholder:"请选择货物目的地"}})])]),t._v(" "),n("tr",{staticClass:"center3"},[n("td",[n("i"),t._v("中转地：")]),n("td",[n("input",{staticClass:"input02 centerp",attrs:{wtmap:"provinceCity",placeholder:"请输入货物中转地"}}),t._v(" "),n("img",{attrs:{id:"add1",src:"images/add.png"}})])]),t._v(" "),n("tr",[n("td",[n("i")]),n("td",[n("span",[t._v("若前往目的地途中需要绕路进行中转，请务必填写中转地，否则绕路途中导致的事故损失将不予赔付")])])]),t._v(" "),n("tr",{staticClass:"start3"},[n("td",[n("i",[t._v("*")]),t._v("起运日期：")]),n("td",[n("input",{staticClass:"input02",attrs:{id:"data3",validate:'{"msg":"请选择日期"}',placeholder:"请选择日期"}})])]),t._v(" "),n("tr",[n("td",[n("i")]),n("td",[n("div",[t._v("起运时间不得早于投保时间")])])]),t._v(" "),n("tr",{staticClass:"car_num"},[n("td",[n("i",[t._v("*")]),t._v("车牌号：")]),n("td",[n("input",{staticClass:"input02",attrs:{id:"data4",maxlength:"15",validate:'{"msg":"请输入车牌号"}',placeholder:"请输入车牌号"}})])]),t._v(" "),n("tr",{staticClass:"start3"},[n("td",[n("i",[t._v("*")]),t._v("运单号：")]),n("td",[n("input",{staticClass:"input02",attrs:{id:"data5",maxlength:"30",validate:'{"msg":"请输入运单号"}',placeholder:"请输入运单号"}})])]),t._v(" "),n("tr",[n("td",[n("i")]),n("td",[n("div",[t._v("若无运单号，可填写合同编号、发货单号或提货单号")])])]),t._v(" "),n("tr",{staticClass:"deductible"},[n("td",[n("i",[t._v("*")]),t._v("免赔额：")]),n("td",{attrs:{id:"insuranceDeductibles"}})]),t._v(" "),n("tr",{staticClass:"fee_total"},[n("td",[n("i",[t._v("*")]),t._v("保费合计：")]),n("td",{attrs:{id:"insuranceFee"}})]),t._v(" "),n("tr",{staticClass:"fee_total"},[n("td",[n("i",[t._v("*")]),t._v("费率：")]),n("td",{attrs:{id:"insuranceRate"}})]),t._v(" "),n("tr",{staticClass:"next_step3"},[n("td",[n("a",{staticClass:"pointer",attrs:{target:"_self",onclick:"window.history.go(-1)"}},[t._v("上一步")])]),n("td",[n("input",{staticClass:"next_button",attrs:{readonly:"",value:"下一步"}})])])])])])])}],!1,null,null,null);e.default=component.exports}}]);