exports.ids=[6],exports.modules={523:function(t,e,n){"use strict";n.r(e);var r={name:"Step3",head:{link:[{rel:"stylesheet",href:"/css/insuranceStep3.css"},{rel:"stylesheet",href:"/css/insuranceComon.css"},{rel:"stylesheet",href:"/theme/default/laydate.css"}]},layout:"subLayout",mounted(){seajs.use(["/js/insurance.js"],function(){seajs.use(["/js/laydate.js"],function(){seajs.use(["/js/dedeajax2.js"],function(){seajs.use(["/js/gaodemap2.js"],function(){seajs.use(["/js/jquery.pagination.min.js"],function(){$(function(){var t=JSON.parse(window.sessionStorage.getItem("step1")),e=JSON.parse(window.sessionStorage.getItem("step2")),n={insuranceCompany:"平安保险",insuranceName:"平安保险国内"+t.insuranceType,startProvince:"",startCity:"",endProvince:"",endCity:"",atransferAddressList:[],startTime:"",carNum:"",orderNum:"",paymentState:0,insuranceProductsId:"1"},r=new Date,d=r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate()+" "+r.getHours()+":"+r.getMinutes()+":"+r.getSeconds();function l(){if($("#data1").val()&&$("#data2").val()){var t={startProvince:$("#data1").val().split(",")[0],endProvince:$("#data2").val().split(",")[0],goodsValue:e.goodsValue,insuranceProductsId:n.insuranceProductsId};api.postInfo("/aflc-portal/portalt/aflcinsurancepolicy/v1/computationalfee",t).done(function(t){$("#insuranceFee").html("<font>"+t.data.insuranceFee+"</font><em>元</em>"),$("#insuranceDeductibles").html("<span>"+t.data.insuranceDeductibles+"</span>"),$("#insuranceRate").html("<font>"+t.data.insuranceRate+"</font>")})}}laydate.render({elem:"#data3",type:"datetime",min:d,done:function(t,e,n){t?($("#data3").removeClass("error"),$("#data3").next().remove(),$("#data3").after("<img style='margin-left: 10px' src='/img/u198861.png' alt=''>")):($("#data3").next().remove(),$("#data3").after("<span style='margin-left: 10px'><img src='/img/u198863.png' alt=''><span style='position: relative;top: -3px;left: 5px;'>请选择日期</span></span>"),$("#data3").addClass("error"))}}),l(),$("#afwl-map-button-confirm").on("click",function(){l(),$("#data1").val()?($("#data1").removeClass("error"),$("#data1").next().remove(),$("#data1").after("<img style='margin-left: 10px' src='/img/u198861.png' alt=''>")):($("#data1").next().remove(),$("#data1").after("<span style='margin-left: 10px'><img src='/img/u198863.png' alt=''><span style='position: relative;top: -3px;left: 5px;'>请选择日期</span></span>"),$("#data1").addClass("error")),$("#data2").val()?($("#data2").removeClass("error"),$("#data2").next().remove(),$("#data2").after("<img style='margin-left: 10px' src='/img/u198861.png' alt=''>")):($("#data2").next().remove(),$("#data2").after("<span style='margin-left: 10px'><img src='/img/u198863.png' alt=''><span style='position: relative;top: -3px;left: 5px;'>请选择日期</span></span>"),$("#data2").addClass("error"))}),$(".next_button").click(function(){!function(){var r="/aflc-uc/usercenter/aflcinsurancepolicy/v1/?access_token="+$.cookie("access_token");if(console.log(insuranceValidate.check()),insuranceValidate.check()){console.log(123213),n.startProvince=$("#data1").val().split(",")[0],n.startCity=$("#data1").val().split(",")[1],n.endProvince=$("#data2").val().split(",")[0],n.endCity=$("#data2").val().split(",")[1];var d=[],i=1;if($(".center3 input").each(function(){$(this).val()&&d.push({transferCity:$(this).val().split(",")[1],transferOrder:i++,transferProvince:$(this).val().split(",")[0]})}),n.atransferAddressList=d,n.startTime=$("#data3").val(),n.carNum=$("#data4").val(),n.orderNum=$("#data5").val(),$.cookie("access_token")){var l=$.extend(n,t,e);api.postInfo(r,l).done(function(t){window.location.href="/Insurance/pay?id="+t.data}).fail(function(t){})}else $("body").trigger("login.show")}}()}),$("#add1").click(function(){$(".center3").eq(0).after('<tr class="center3"><td><i></i>中转地：</td><td><input wtmap="provinceCity" class="input02 centerp" placeholder="请输入货物中转地" /><img src="images/sub.png" onclick="sub1(this)"  /></td></tr>'),$().reLoadWtmap()});var c,o=this;$(".login-btn, .login-yzm").on("click",function(){clearInterval(c),c=setInterval(()=>{$.cookie("access_token")&&(clearInterval(c),o.next())},300)}),$(".login_close img").on("click",function(){clearInterval(c)})})})})})})})}},d=n(0),component=Object(d.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"step3"},[t._ssrNode('<div class="top_bg">',"</div>",[t._ssrNode('<div class="top center">',"</div>",[t._ssrNode("<ul>","</ul>",[t._ssrNode('<li class="top_1"><a href="/" target="_blank"><img src="/images/index_files/logor.png"></a></li> <li class="top_2"><span>保险商城</span></li> '),t._ssrNode('<li class="top_3">',"</li>",[t._ssrNode('<img src="/images/insurance/phone-bx.png"> <span>免费热线</span>'),n("font",[t._v("400-999-2828")])],2)],2)])]),t._ssrNode(' <div class="main center"><div class="m_border center"><form class="center validateForm"><table><tr><div class="main_bt"><span>运输信息</span><i></i></div></tr> <tr class="start3"><td><i>*</i>起运地：</td><td><input id="data1" data-toggle="city-picker" data-level="district" wtmap="provinceCity" validate="{"msg":"请选择货物起运地"}" placeholder="请选择货物起运地" class="input02 startp"></td></tr> <tr class="end3"><td><i>*</i>目的地：</td><td><input id="data2" data-toggle="city-picker" data-level="district" wtmap="provinceCity" validate="{"msg":"请选择货物目的地"}" placeholder="请选择货物目的地" class="input02 endp"></td></tr> <tr class="center3"><td><i></i>中转地：</td><td><input wtmap="provinceCity" placeholder="请输入货物中转地" class="input02 centerp"> <img id="add1" src="images/add.png"></td></tr> <tr><td><i></i></td><td><span>若前往目的地途中需要绕路进行中转，请务必填写中转地，否则绕路途中导致的事故损失将不予赔付</span></td></tr> <tr class="start3"><td><i>*</i>起运日期：</td><td><input id="data3" validate="{"msg":"请选择日期"}" placeholder="请选择日期" class="input02"></td></tr> <tr><td><i></i></td><td><div>起运时间不得早于投保时间</div></td></tr> <tr class="car_num"><td><i>*</i>车牌号：</td><td><input id="data4" maxlength="15" validate="{"msg":"请输入车牌号"}" placeholder="请输入车牌号" class="input02"></td></tr> <tr class="start3"><td><i>*</i>运单号：</td><td><input id="data5" maxlength="30" validate="{"msg":"请输入运单号"}" placeholder="请输入运单号" class="input02"></td></tr> <tr><td><i></i></td><td><div>若无运单号，可填写合同编号、发货单号或提货单号</div></td></tr> <tr class="deductible"><td><i>*</i>免赔额：</td><td id="insuranceDeductibles"></td></tr> <tr class="fee_total"><td><i>*</i>保费合计：</td><td id="insuranceFee"></td></tr> <tr class="fee_total"><td><i>*</i>费率：</td><td id="insuranceRate"></td></tr> <tr class="next_step3"><td><a target="_self" onclick="window.history.go(-1)" class="pointer">上一步</a></td><td><input readonly="readonly" value="下一步" class="next_button"></td></tr></table></form></div></div>')],2)},[],!1,null,null,"1804e561");e.default=component.exports}};
//# sourceMappingURL=baa4fb4c8d12075c4faf.js.map