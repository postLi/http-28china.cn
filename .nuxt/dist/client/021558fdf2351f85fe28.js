(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{261:function(t,e,r){var content=r(371);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("c4f9e07c",content,!0,{sourceMap:!1})},370:function(t,e,r){"use strict";var n=r(261);r.n(n).a},371:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,".line_box[data-v-c4b9d656]{max-width:1400px;margin:0 auto}.box1_list[data-v-c4b9d656],.box2_list[data-v-c4b9d656]{border:1px solid #ddd}",""])},573:function(t,e,r){"use strict";r.r(e);r(80),r(16);var n={name:"Linerder",head:{link:[{rel:"stylesheet",href:"/css/line_order.css"},{rel:"stylesheet",href:"/layer3/css/layui.css"},{rel:"stylesheet",href:"/fancybox/jquery.fancybox.min.css"}]},mounted(){seajs.use(["/js/insurance.js"],function(){seajs.use(["/js/laydate.js"],function(){seajs.use(["/js/gaodemap2.js"],function(){seajs.use(["/fancybox/jquery.fancybox.min.js"],function(){seajs.use(["/layer3/layui.js"],function(){$(function(){var t=getRequest(),e={startLocationCoordinate:"",endLocationCoordinate:"",startProvince:"",startCity:"",startArea:"",endProvince:"",endCity:"",endArea:"",startLocationContacts:"",startLocationContactsMobile:"",endLocationContacts:"",endLocationContactsMobile:"",transportAging:"",transportAgingUnit:"",departureHzData:"",departureHzTime:"",lowerPrice:"",departureTimeCode:"",transportRemark:"",rangeLogo:"",rangePrices:[]};function r(){var t="/anfacommonservice/common/oss/v1/policy?access_token="+$.cookie("access_token");api.getInfo1(t).done(function(t){var e=t.data.dir,r=t.data.policy,n=t.data.accessid,o=t.data.signature;layui.use("upload",function(){layui.upload.render({elem:"#test1",method:"post",data:{key:"",policy:r,success_action_status:201,OSSAccessKeyId:n,signature:o},url:t.data.host,before:function(t){this.data.key=e+function(time,t){if(0===arguments.length)return null;if(!time)return"";const e=t||"{y}-{m}-{d} {h}:{i}:{s}";let r;if("object"==typeof time?r=time:(time="number"==typeof time?time:(""+time).trim(),/^\d{10}$/.test(time)?time=1e3*parseInt(time):/(\d){4}-(\d){2}-(\d){2}\s+(\d){2}:(\d){2}:(\d){2}/.test(time)&&(time=time.replace(/-/g,"/")),r=new Date(time)),-1!==r.toString().indexOf("Invalid"))return time;const n={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()};return e.replace(/{(y|m|d|h|i|s|a)+}/g,(t,e)=>{let r=n[e];return"a"===e?["一","二","三","四","五","六","日"][r-1]:(t.length>0&&r<10&&(r="0"+r),r||0)})}(new Date,"{y}{m}{d}")+"/"+function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",r=e.length,n="",i=0;i<t;i++)n+=e.charAt(Math.floor(Math.random()*r));return n}()+".jpg"||!1},done:function(t,e,r){if(console.log(t),$(".img_box .button_img").before('<li><i class="layui-icon del_icon">&#xe640;</i><a style="float:left" class="fancybox-thumb" rel="fancybox-thumb" href="'+t.url+'" title="Golden Manarola (Sanjeev Deo)"><img src="'+t.url+'" alt="" /><i class="layui-icon add_icon">&#xe608</i></a></li>'),$(".fancybox-thumb").fancybox({prevEffect:"none",nextEffect:"none",helpers:{title:{type:"outside"},thumbs:{width:50,height:50}}}),$(".del_icon").click(function(t){t.target.parentNode.remove(),$(".img_box img").length<3&&$(".button_img").show()}),$(".img_box img").length>2)return $(".button_img").hide(),void layer.msg("最多上传三张")},error:function(){layer.load()}})})}).fail(function(t){layer.msg("您还未登入")})}function n(){e.departureTimeCode=$("#order_buttom .checked").attr("type"),e.transportAgingUnit=$("#order_top .checked").text()}n(),r(),$(".volume").val("0"),$(".volume").attr("disabled","disabled"),$(".nocompany").find(".box1_list").length<=1?$(".delete").hide():$(".delete").show(),$(".delete").click(function(){var t=$(this).siblings(".add1"),e=$(this).parent(".todoTable").find("table tbody tr");e.last().remove(),e.length>2?$(this).show():$(this).hide(),e.length<6?t.show():t.hide()}),$("#test1").click(function(){console.log("fdsafas",$.cookie("access_token")),$.cookie("access_token")||$("body").trigger("login.show")}),$(document).on("click",".login-btn",function(t){t.preventDefault();var e=setInterval(()=>{$.cookie("access_token")&&(r(),clearInterval(e))},5e3);return!1}),$(".add1").on("click",function(t){t.stopPropagation(),function(t){var e=function(t){var e=t.find(".nocompany"),r=(e.find(".volume"),e.find(".origina"),e.find(".discount"),e.find(".volumeEnd"),!0);return e.find("tr").each(function(t,e){var n=$(this).find(".volume"),o=$(this).find(".origina"),l=($(this).find(".discount"),$(this).find(".volumeEnd"));if(!AFLC_VALID.ONLY_NUMBER_GT.test(l.val()))return r=!1,layer.msg("请补充重货运量"),l.focus(),!1;if(!AFLC_VALID.ONLY_NUMBER_GT.test(o.val()))return r=!1,layer.msg("请补充重货原报价"),o.focus(),!1;var d=Number(n.val());return Number(l.val())<=d?(r=!1,layer.msg("重货运量的最大值不能小于最小值"),l.focus(),!1):void 0}),r}(t),r=t.parent(".todoTable").find(".add1"),n=t.parent(".todoTable").find(".delete");if(e){var o=t.find(".nocompany"),l=(o.find(".volume"),o.find(".volumeEnd"));let e="";$.each(l,function(t,r){r=$(r);var n=$.trim(r.val());e=n});var d=$(this.tpl.cargo);d.find(".volume").val(e),o.append(d),$(".volume").attr("disabled","disabled");var c=o.find("tr").length;c>=1?n.show():(console.log(c),n.hide()),c>4?r.hide():r.show()}}($(this).parent(".todoTable").find("table"))}),$(".order-submit-btn").click(function(t){t.stopPropagation(),$(".order-submit-btn").removeClass("click"),$(this).addClass("click")}),$("#order_top .minbox").click(function(t){t.stopPropagation(),$("#order_top .minbox").removeClass("checked"),$(this).addClass("checked"),n()}),$("#order_buttom .minbox").click(function(t){t.stopPropagation(),$("#order_buttom .minbox").removeClass("checked"),$(this).addClass("checked"),n()}),$("#reset").click(function(){$(".start").val(""),$(".end").val(""),$(".startName").val(""),$(".startPhone").val(""),$(".endName").val(""),$(".endPhone").val(""),$("#textarea").val(""),$("#lowerPrice").val(""),$("#transportAging").val(""),$("#days").val(""),$("#once").val("")}),$("#next").click(function(){!function(){var r=function(){var t={done:!0,err:""};if(!$(".start").val())return t.done=!1,void layer.msg("出发地不能为空");if(e.startLocationCoordinate=$(".start").attr("thepos"),e.startProvince=$(".start").attr("theprovince"),e.startCity=$(".start").attr("thecity"),e.startArea=$(".start").attr("thearea"),!$(".end").val())return t.done=!1,void layer.msg("到达地不能为空");if(e.endLocationCoordinate=$(".end").attr("thepos"),e.endProvince=$(".end").attr("theprovince"),e.endCity=$(".end").attr("thecity"),e.endArea=$(".end").attr("thearea"),!$(".startName").val())return t.done=!1,void layer.msg("出发地联系人不能为空");if(e.startLocationContacts=$(".startName").val(),!AFLC_VALID.MOBILE.test($(".startPhone").val()))return $(".startPhone").val()?(t.done=!1,void layer.msg("出发地联系人电话不正确")):(t.done=!1,void layer.msg("出发地联系人电话不能为空"));if(e.endLocationContactsMobile=$(".startPhone").val(),!$(".endName").val())return t.done=!1,void layer.msg("到达地联系人不能为空");if(e.endLocationContacts=$(".endName").val(),!AFLC_VALID.MOBILE.test($(".endPhone").val()))return $(".endPhone").val()?(t.done=!1,void layer.msg("到达地联系人电话不正确")):(t.done=!1,void layer.msg("到达地联系人电话不能为空"));if(e.endLocationContactsMobile=$(".endPhone").val(),$("#textarea").val().length<3)layer.msg("线路说明不能少于3个字符");else{if(!($("#textarea").val().length>200))return e.transportRemark=$("#textarea").val(),"-"==$("#lowerPrice").val().charAt()||"0"==$("#lowerPrice").val()?(t.done=!1,layer.msg("最低一票价格格式不正确"),!1):(e.lowerPrice=$("#lowerPrice").val(),$("#transportAging").val()&&(e.transportAging=$("#transportAging").val()),$("#days").val()&&(e.departureHzData=$("#days").val()),$("#once").val()&&(e.departureHzTime=$("#once").val()),function(){e.rangePrices=[];var t=!0;$(".order-company-list").each(function(r,n){if(!t)return!1;var o="1";1==r&&(o="0"),$(this).find("table .nocompany tr").each(function(r,n){var p={discountPrice:"",endVolume:"",primeryPrice:"",startVolume:"",type:o};if("1"===o){if(!$(this).find(".volumeEnd").val())return t=!1,layer.msg("请补充重货运量"),!1;if(p.endVolume=$(this).find(".volumeEnd").val(),!$(this).find(".origina").val())return t=!1,layer.msg("请补充重货原报价"),!1;p.primeryPrice=$(this).find(".origina").val(),p.startVolume=$(this).find(".discount").val()}else{if(!$(this).find(".volumeEnd").val())return t=!1,layer.msg("请补充轻货运量"),!1;if(p.endVolume=$(this).find(".volumeEnd").val(),!$(this).find(".origina").val())return t=!1,layer.msg("请补充轻货原报价"),!1;p.primeryPrice=$(this).find(".origina").val(),p.startVolume=$(this).find(".discount").val()}e.rangePrices.push(p)})})}(),t);layer.msg("线路说明不能超过200个字符")}}(),n="/28-web/range/create?access_token="+$.cookie("access_token")+"&&user_token="+$.cookie("login_userToken");if(console.log("user",$.cookie("login_userToken")),console.log($.cookie("access_token")),!r)return!1;if("aflc-2"===$.cookie("login_type")){var o=$.extend(e,t);api.postInfo1(n,o).done(function(t){var e=t.data,r=$.cookie("loginId");"201"===t.status?window.location.href="/plus/list.php?tid=86&status=201&text=专线&id="+e+"&publishId="+r:window.location.href="/plus/list.php?tid=86&status=200&text=专线&id="+e+"&publishId="+r}).fail(function(t){layer.msg("发布失败："+(t.errorInfo||t.text||"未知错误"))})}else layer.msg("当前账号，不能发布专线")}()})})})})})})})}},o=(r(370),r(1)),component=Object(o.a)(n,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"line_box"},[r("div",{staticClass:"main"},[r("div",{staticClass:"right main_nr"},[r("div",{staticClass:"nr order-create-main layui-form",attrs:{action:""}},[r("div",{staticClass:"order-line-info order-input-tab"},[r("div",{staticClass:"order-title"},[t._v("基本信心 "),r("span",[t._v("（提示：待*为必填）")])]),t._v(" "),r("div",{staticClass:"order-line-from clearfix"},[r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("出发地：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{staticClass:"start",attrs:{wtmap:"",maxlength:"40",type:"text",placeholder:"请选择出发地 省-市-县"}})])]),t._v(" "),r("div",{staticClass:"order-contact-from clearfix"},[r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("联系人：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{staticClass:"startName",attrs:{maxlength:"40",type:"text",placeholder:"请输入出发地联系人"}})])]),t._v(" "),r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("联系人电话：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{staticClass:"startPhone",attrs:{maxlength:"11",type:"text",placeholder:"请输入出发地联系人电话",onkeyup:"value=value.replace(/[^\\d]/g,'')"}})])])])]),t._v(" "),r("div",{staticClass:"order-line-to clearfix"},[r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("到达地：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{staticClass:"end",attrs:{wtmap:"",maxlength:"40",type:"text",placeholder:"请选择到达地 省-市-县"}})])]),t._v(" "),r("div",{staticClass:"order-contact-from1 clearfix"},[r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("联系人：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{staticClass:"endName",attrs:{maxlength:"40",type:"text",placeholder:"请输入到达地联系人"}})])]),t._v(" "),r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("联系人电话：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{staticClass:"endPhone",attrs:{maxlength:"11",type:"text",placeholder:"请输入到达地联系人电话"}})])])])])]),t._v(" "),r("div",{staticClass:"order-input-tab order-company-info"},[r("div",{staticClass:"order-title"},[t._v("价格时效")]),t._v(" "),r("div",{staticClass:"order1"},[r("div",{staticClass:"order-line-from clearfix"},[r("div",{staticClass:"order-form-item",staticStyle:{width:"225px"}},[r("div",{staticClass:"order-form-label"},[t._v("运输时效：")]),t._v(" "),r("div",{staticClass:"order-form-input",staticStyle:{"margin-right":"20px"}},[r("input",{staticStyle:{width:"100px","padding-left":"20px"},attrs:{id:"transportAging",maxlength:"40",type:"text",name:"time"}})])]),t._v(" "),r("div",{staticClass:"order_check order_top",attrs:{id:"order_top"}},[r("span",{staticClass:"minbox checked",attrs:{type:"天"}},[t._v("天")]),t._v(" "),r("span",{staticClass:"minbox",attrs:{type:"小时"}},[t._v("小时")]),t._v(" "),r("span",{staticClass:"minbox",attrs:{type:"多天"}},[t._v("多天")]),t._v(" "),r("span",[t._v(" (多天填写如：2-5，其它只能填写阿拉伯数字)")])])])]),t._v(" "),r("ul",{staticClass:"order-line-from clearfix order-cargo-list"},[r("li",[r("div",{staticClass:"input"},[r("span",{staticStyle:{"padding-left":"7px"}},[t._v("发车频率：")]),t._v(" "),r("input",{attrs:{id:"days",maxlength:"12",type:"text",name:"day"}}),t._v(" "),r("span",{staticClass:"append"},[t._v("天")])]),t._v(" "),r("div",{staticClass:"input",staticStyle:{position:"absolute",left:"233px"}},[r("input",{attrs:{id:"once",maxlength:"12",type:"text",name:"times"}}),t._v(" "),r("span",{staticClass:"append"},[t._v("次")])])])]),t._v(" "),r("div",{staticClass:"order3"}),t._v(" "),r("div",{staticClass:"order-company-list"},[r("div",{staticClass:"order-form-label"},[t._v("重货价格："),r("span",{staticClass:"required"},[t._v("(阶梯价格最大值不填，代表无穷大，例如：500-，代表500公斤以上)")])]),t._v(" "),r("div",{staticClass:"todoTable"},[r("table",{staticClass:"table1"},[r("thead",[r("tr",[r("th",{attrs:{colspan:"2",width:"200"}},[t._v("运量")]),t._v(" "),r("th",{attrs:{colspan:"2",width:"150"}},[t._v("原报价（必填）")]),t._v(" "),r("th",{attrs:{colspan:"2",width:"150"}},[t._v("折后价")])])]),t._v(" "),r("tbody",{staticClass:"nocompany box1"},[r("tr",{staticClass:"box1_list"},[r("td",{attrs:{colspan:"2"}},[r("div",{staticClass:"inputbox"},[r("input",{staticClass:"volume",attrs:{maxlength:"40",type:"number"}}),r("label",[t._v("------")]),t._v(" "),r("input",{staticClass:"volumeEnd",attrs:{maxlength:"40",type:"number",value:""}}),r("label",[t._v("元/公斤")])])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("div",{staticClass:"inputbox"},[r("input",{staticClass:"origina",attrs:{maxlength:"40",type:"number"}}),r("label",[t._v("元/公斤")])])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("div",{staticClass:"inputbox"},[r("input",{staticClass:"discount",attrs:{maxlength:"40",type:"number"}}),r("label",[t._v("元/公斤")])])])]),t._v(" "),r("span",{staticClass:"addbox add1"},[t._v("+")]),t._v(" "),r("span",{staticClass:"delete"},[t._v("-")])])])])]),t._v(" "),r("div",{staticClass:"order-company-list"},[r("div",{staticClass:"order-form-label"},[t._v("轻货价格："),r("span",{staticClass:"required"},[t._v("(阶梯价格最大值不填，代表无穷大，例如：10-，代表10立方以上)")])]),t._v(" "),r("div",{staticClass:"todoTable"},[r("table",{staticClass:"table2"},[r("thead",[r("tr",[r("th",{attrs:{colspan:"2",width:"200"}},[t._v("运量")]),t._v(" "),r("th",{attrs:{colspan:"2",width:"150"}},[t._v("原报价（必填）")]),t._v(" "),r("th",{attrs:{colspan:"2",width:"150"}},[t._v("折后价")])])]),t._v(" "),r("tbody",{staticClass:"nocompany box2"},[r("tr",{staticClass:"box2_list"},[r("td",{attrs:{colspan:"2"}},[r("div",{staticClass:"inputbox"},[r("input",{staticClass:"volume",attrs:{maxlength:"40",type:"number"}}),r("label",[t._v("------")]),t._v(" "),r("input",{staticClass:"volumeEnd",attrs:{maxlength:"40",type:"number"}}),r("label",[t._v("元/公斤")])])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("div",{staticClass:"inputbox"},[r("input",{staticClass:"origina",attrs:{maxlength:"40",type:"number"}}),r("label",[t._v("元/公斤")])])]),t._v(" "),r("td",{attrs:{colspan:"2"}},[r("div",{staticClass:"inputbox"},[r("input",{staticClass:"discount",attrs:{maxlength:"40",type:"number"}}),r("label",[t._v("元/公斤")])])])]),t._v(" "),r("span",{staticClass:"addbox add1"},[t._v("+")]),t._v(" "),r("span",{staticClass:"delete"},[t._v("-")])])])])]),t._v(" "),r("div",{staticClass:"inputbox"},[r("div",{staticClass:"order-form-label"},[t._v("最低一票价格：")]),t._v(" "),r("input",{attrs:{id:"lowerPrice",maxlength:"10",type:"text"}}),r("label",[t._v("元")])])]),t._v(" "),r("div",{staticClass:"order-input-tab order-company-info"},[r("div",{staticClass:"order-title"},[t._v("线路说明")]),t._v(" "),r("div",{staticClass:"order-line-from clearfix"},[r("div",{staticClass:"order-form-label"},[t._v("发车时间：")]),t._v(" "),r("div",{staticClass:"order_check order_buttom",attrs:{id:"order_buttom"}},[r("span",{staticClass:"minbox checked",attrs:{type:"AF02601"}},[t._v("上午")]),t._v(" "),r("span",{staticClass:"minbox",attrs:{type:"AF02602"}},[t._v("中午")]),t._v(" "),r("span",{staticClass:"minbox",attrs:{type:"AF02603"}},[t._v("下午")]),t._v(" "),r("span",{staticClass:"minbox",attrs:{type:"AF02604"}},[t._v("晚上")])])]),t._v(" "),r("div",{staticClass:"order-line-from clearfix"},[r("div",{staticClass:"order-form-label"},[t._v("线路说明：")]),t._v(" "),r("textarea",{staticStyle:{width:"600px",height:"160px",padding:"10px"},attrs:{id:"textarea",maxlength:"200",minlength:"3",placeholder:"请填写备注3-200字，提供原创说明有助于提升线路效果"}}),t._v(" "),r("p",{staticStyle:{"margin-left":"70px"}},[t._v("对您的线路进行补充说明，尽量使用市场上或物流行业内的常用词。")])]),t._v(" "),r("div",{staticClass:"order-line-from clearfix",staticStyle:{display:"none"}},[r("div",{staticClass:"order-form-label"},[t._v("专线照片：")]),t._v(" "),r("p",{staticStyle:{"padding-top":"10px"}},[t._v("建议传")]),t._v(" "),r("ul",{staticClass:"img_box"},[r("div",{staticClass:"button_img"},[r("button",{staticClass:"layui-btn layui-btn-normal layui-btn-data",attrs:{id:"test1",type:"button"}},[r("i",{staticClass:"layui-icon layui-icon-upload-drag"}),t._v("上传图片\n                ")]),t._v(" "),r("div",{staticClass:"upload__tip",attrs:{"data-v-5d7a9fe6":""}},[t._v("（必须为jpg/png并且小于5M）")])])])])]),t._v(" "),r("div",{staticClass:"btn_bottom"},[r("div",{staticClass:"order-submit-btn click",attrs:{id:"reset"}},[t._v("重置")]),t._v(" "),r("div",{staticClass:"order-submit-btn",attrs:{id:"next"}},[t._v("发布")])])])])])])}],!1,null,"c4b9d656",null);e.default=component.exports}}]);