exports.ids=[16],exports.modules={180:function(t,e,d){var content=d(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=d(3).default;t.exports.__inject__=function(t){n("b19fc92e",content,!0,t)}},286:function(t,e,d){"use strict";d.r(e);var n=d(180),o=d.n(n);for(var r in n)"default"!==r&&function(t){d.d(e,t,function(){return n[t]})}(r);e.default=o.a},287:function(t,e,d){(t.exports=d(2)(!1)).push([t.i,".line_box[data-v-b0728364]{max-width:1400px;margin:0 auto}.box1_list[data-v-b0728364],.box2_list[data-v-b0728364]{border:1px solid #ddd}",""])},458:function(t,e,d){"use strict";d.r(e);var n={name:"Linerder",head:{link:[{rel:"stylesheet",href:"/css/line_order.css"},{rel:"stylesheet",href:"/layer3/css/layui.css"},{rel:"stylesheet",href:"/fancybox/jquery.fancybox.min.css"}]},mounted(){seajs.use(["/js/insurance.js"],function(){seajs.use(["/js/laydate.js"],function(){seajs.use(["/js/gaodemap2.js"],function(){seajs.use(["/fancybox/jquery.fancybox.min.js"],function(){seajs.use(["/layer3/layui.js"],function(){$(function(){var t={startLocationCoordinate:"",endLocationCoordinate:"",startLocation:"",endLocation:"",startProvince:"",startCity:"",startArea:"",endProvince:"",endCity:"",endArea:"",startLocationContacts:"",startLocationContactsMobile:"",endLocationContacts:"",endLocationContactsMobile:"",transportAging:"",transportAgingUnit:"",departureHzData:"",departureHzTime:"",lowerPrice:"",departureTime:"",transportRemark:"",rangeLogo:"",publishId:"",publishName:"",rangePrices:[]};function e(){var t="/anfacommonservice/common/oss/v1/policy?access_token="+$.cookie("access_token");api.getInfo1(t).done(function(t){var e=t.data.dir,d=t.data.policy,n=t.data.accessid,o=t.data.signature;layui.use("upload",function(){layui.upload.render({elem:"#test1",method:"post",data:{key:"",policy:d,success_action_status:201,OSSAccessKeyId:n,signature:o},url:t.data.host,before:function(t){this.data.key=e+function(time,t){if(0===arguments.length)return null;if(!time)return"";const e=t||"{y}-{m}-{d} {h}:{i}:{s}";let d;if("object"==typeof time?d=time:(time="number"==typeof time?time:(""+time).trim(),/^\d{10}$/.test(time)?time=1e3*parseInt(time):/(\d){4}-(\d){2}-(\d){2}\s+(\d){2}:(\d){2}:(\d){2}/.test(time)&&(time=time.replace(/-/g,"/")),d=new Date(time)),-1!==d.toString().indexOf("Invalid"))return time;const n={y:d.getFullYear(),m:d.getMonth()+1,d:d.getDate(),h:d.getHours(),i:d.getMinutes(),s:d.getSeconds(),a:d.getDay()};return e.replace(/{(y|m|d|h|i|s|a)+}/g,(t,e)=>{let d=n[e];return"a"===e?["一","二","三","四","五","六","日"][d-1]:(t.length>0&&d<10&&(d="0"+d),d||0)})}(new Date,"{y}{m}{d}")+"/"+function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",d=e.length,n="",i=0;i<t;i++)n+=e.charAt(Math.floor(Math.random()*d));return n}()+".jpg"||!1},done:function(t,e,d){if(console.log(t),$(".img_box .button_img").before('<li><i class="layui-icon del_icon">&#xe640;</i><a style="float:left" class="fancybox-thumb" rel="fancybox-thumb" href="'+t.url+'" title="Golden Manarola (Sanjeev Deo)"><img src="'+t.url+'" alt="" /><i class="layui-icon add_icon">&#xe608</i></a></li>'),$(".fancybox-thumb").fancybox({prevEffect:"none",nextEffect:"none",helpers:{title:{type:"outside"},thumbs:{width:50,height:50}}}),$(".del_icon").click(function(t){t.target.parentNode.remove(),$(".img_box img").length<3&&$(".button_img").show()}),$(".img_box img").length>2)return $(".button_img").hide(),void layer.msg("最多上传三张")},error:function(){layer.load()}})})}).fail(function(t){layer.msg("您还未登入")})}function d(){t.departureTime=$("#order_buttom .checked").attr("type"),t.transportAgingUnit=$("#order_top .checked").text()}d(),e(),$(".volume").val("0"),$(".volume").attr("disabled","disabled"),$(".nocompany").find(".box1_list").length<=1?$(".delete").hide():$(".delete").show(),$(".delete").click(function(){var t=$(this).siblings(".add1"),e=$(this).parent(".todoTable").find("table tbody tr");e.last().remove(),e.length>2?$(this).show():$(this).hide(),e.length<6?t.show():t.hide()}),$("#test1").click(function(){console.log("fdsafas",$.cookie("access_token")),$.cookie("access_token")||$("body").trigger("login.show")}),$(document).on("click",".login-btn",function(t){t.preventDefault();var d=setInterval(()=>{$.cookie("access_token")&&(e(),clearInterval(d))},5e3);return!1}),$(".add1").on("click",function(t){t.stopPropagation(),function(t){var e=function(t){var e=t.find(".nocompany"),d=(e.find(".volume"),e.find(".origina"),e.find(".discount"),e.find(".volumeEnd"),!0);return e.find("tr").each(function(t,e){var n=$(this).find(".volume"),o=$(this).find(".origina"),r=($(this).find(".discount"),$(this).find(".volumeEnd"));if(!AFLC_VALID.ONLY_NUMBER_GT.test(r.val()))return d=!1,layer.msg("请补充重货运量"),r.focus(),!1;if(!AFLC_VALID.ONLY_NUMBER_GT.test(o.val()))return d=!1,layer.msg("请补充重货原报价"),o.focus(),!1;var l=Number(n.val());return Number(r.val())<=l?(d=!1,layer.msg("重货运量的最大值不能小于最小值"),r.focus(),!1):void 0}),d}(t),d=t.parent(".todoTable").find(".add1"),n=t.parent(".todoTable").find(".delete");if(e){var o=t.find(".nocompany"),r=(o.find(".volume"),o.find(".volumeEnd"));let e="";$.each(r,function(t,d){d=$(d);var n=$.trim(d.val());e=n});var l=$(this.tpl.cargo);l.find(".volume").val(e),o.append(l),$(".volume").attr("disabled","disabled");var c=o.find("tr").length;c>=1?n.show():(console.log(c),n.hide()),c>4?d.hide():d.show()}}($(this).parent(".todoTable").find("table"))}),$(".order-submit-btn").click(function(t){t.stopPropagation(),$(".order-submit-btn").removeClass("click"),$(this).addClass("click")}),$("#order_top .minbox").click(function(t){t.stopPropagation(),$("#order_top .minbox").removeClass("checked"),$(this).addClass("checked"),d()}),$("#order_buttom .minbox").click(function(t){t.stopPropagation(),$("#order_buttom .minbox").removeClass("checked"),$(this).addClass("checked"),d()}),$("#reset").click(function(){$(".start").val(""),$(".end").val(""),$(".startName").val(""),$(".startPhone").val(""),$(".endName").val(""),$(".endPhone").val(""),$("#textarea").val(""),$("#lowerPrice").val(""),$("#transportAging").val(""),$("#days").val(""),$("#once").val("")}),$("#next").click(function(){!function(){var e=function(){var e={done:!0,err:""};if(!$(".start").val())return e.done=!1,void layer.msg("出发地不能为空");if(t.startLocation=$(".start").attr("thepcd"),t.startLocationCoordinate=$(".start").attr("thepos"),t.startProvince=$(".start").attr("theprovince"),t.startCity=$(".start").attr("thecity"),t.startArea=$(".start").attr("thearea"),!$(".end").val())return e.done=!1,void layer.msg("到达地不能为空");if(t.endLocation=$(".end").attr("thepcd"),t.endLocationCoordinate=$(".end").attr("thepos"),t.endProvince=$(".end").attr("theprovince"),t.endCity=$(".end").attr("thecity"),t.endArea=$(".end").attr("thearea"),!$(".startName").val())return e.done=!1,void layer.msg("出发地联系人不能为空");if(t.startLocationContacts=$(".startName").val(),!AFLC_VALID.MOBILE.test($(".startPhone").val()))return $(".startPhone").val()?(e.done=!1,void layer.msg("出发地联系人电话不正确")):(e.done=!1,void layer.msg("出发地联系人电话不能为空"));if(t.endLocationContactsMobile=$(".startPhone").val(),!$(".endName").val())return e.done=!1,void layer.msg("到达地联系人不能为空");if(t.endLocationContacts=$(".endName").val(),!AFLC_VALID.MOBILE.test($(".endPhone").val()))return $(".endPhone").val()?(e.done=!1,void layer.msg("到达地联系人电话不正确")):(e.done=!1,void layer.msg("到达地联系人电话不能为空"));if(t.endLocationContactsMobile=$(".endPhone").val(),$("#textarea").val().length<3)layer.msg("线路说明不能少于3个字符");else if($("#textarea").val().length>200)layer.msg("线路说明不能超过200个字符");else{if(t.transportRemark=$("#textarea").val(),"-"==$("#lowerPrice").val().charAt()||"0"==$("#lowerPrice").val())return e.done=!1,layer.msg("最低一票价格格式不正确"),!1;if(t.lowerPrice=$("#lowerPrice").val(),$("#transportAging").val()&&(t.transportAging=$("#transportAging").val()),$("#days").val()&&(t.departureHzData=$("#days").val()),$("#once").val()&&(t.departureHzTime=$("#once").val()),0!==$(".img_box img").length){$(".img_box img").each(function(e,d){t.rangeLogo=t.rangeLogo+$(this).attr("src")+","});var d=t.rangeLogo.length;return t.rangeLogo=t.rangeLogo.substring(0,d-1),function(){t.rangePrices=[];var e=!0;$(".order-company-list").each(function(d,n){if(!e)return!1;var o="1";1==d&&(o="0"),$(this).find("table .nocompany tr").each(function(d,n){var p={discountPrice:"",endVolume:"",primeryPrice:"",startVolume:"",type:o};if("1"===o){if(!$(this).find(".volumeEnd").val())return e=!1,layer.msg("请补充重货运量"),!1;if(p.endVolume=$(this).find(".volumeEnd").val(),!$(this).find(".origina").val())return e=!1,layer.msg("请补充重货原报价"),!1;p.primeryPrice=$(this).find(".origina").val(),p.startVolume=$(this).find(".discount").val()}else{if(!$(this).find(".volumeEnd").val())return e=!1,layer.msg("请补充轻货运量"),!1;if(p.endVolume=$(this).find(".volumeEnd").val(),!$(this).find(".origina").val())return e=!1,layer.msg("请补充轻货原报价"),!1;p.primeryPrice=$(this).find(".origina").val(),p.startVolume=$(this).find(".discount").val()}t.rangePrices.push(p)})})}(),e}layer.msg("请上传图片")}}(),d="/aflc-uc/usercenter/aflcTransportRange/v1/add?access_token="+$.cookie("access_token");if(console.log($.cookie("access_token")),!e)return!1;if("aflc-5"===$.cookie("login_type")){t.publishId=$.cookie("loginId"),t.publishName=$.cookie("loginCompanyName");var n=$.extend(t,theRequest);api.postInfo1(d,n).done(function(t){var e=t.data,d=$.cookie("loginId");"201"===t.status?window.location.href="/plus/list.php?tid=86&status=201&text=专线&id="+e+"&publishId="+d:window.location.href="/plus/list.php?tid=86&status=200&text=专线&id="+e+"&publishId="+d}).fail(function(t){layer.msg("发布失败："+(t.errorInfo||t.text||"未知错误"))})}else"aflc-1"!==$.cookie("login_type")&&"aflc-2"!==$.cookie("login_type")||layer.msg("当前账号不是物流公司，不能发布专线")}()})})})})})})})}},o=d(0);var component=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"line_box"},[this._ssrNode('<div class="main" data-v-b0728364><div class="right main_nr" data-v-b0728364><div action class="nr order-create-main layui-form" data-v-b0728364><div class="order-line-info order-input-tab" data-v-b0728364><div class="order-title" data-v-b0728364>基本信心 <span data-v-b0728364>（提示：待*为必填）</span></div> <div class="order-line-from clearfix" data-v-b0728364><div class="order-form-item" data-v-b0728364><div class="order-form-label" data-v-b0728364><span class="required" data-v-b0728364>*</span>出发地：</div> <div class="order-form-input" data-v-b0728364><input wtmap maxlength="40" type="text" placeholder="请选择出发地 省-市-县" class="start" data-v-b0728364></div></div> <div class="order-contact-from clearfix" data-v-b0728364><div class="order-form-item" data-v-b0728364><div class="order-form-label" data-v-b0728364><span class="required" data-v-b0728364>*</span>联系人：</div> <div class="order-form-input" data-v-b0728364><input maxlength="40" type="text" placeholder="请输入出发地联系人" class="startName" data-v-b0728364></div></div> <div class="order-form-item" data-v-b0728364><div class="order-form-label" data-v-b0728364><span class="required" data-v-b0728364>*</span>联系人电话：</div> <div class="order-form-input" data-v-b0728364><input maxlength="11" type="text" placeholder="请输入出发地联系人电话" onkeyup="value=value.replace(/[^\\d]/g,\'\')" class="startPhone" data-v-b0728364></div></div></div></div> <div class="order-line-to clearfix" data-v-b0728364><div class="order-form-item" data-v-b0728364><div class="order-form-label" data-v-b0728364><span class="required" data-v-b0728364>*</span>到达地：</div> <div class="order-form-input" data-v-b0728364><input wtmap maxlength="40" type="text" placeholder="请选择到达地 省-市-县" class="end" data-v-b0728364></div></div> <div class="order-contact-from1 clearfix" data-v-b0728364><div class="order-form-item" data-v-b0728364><div class="order-form-label" data-v-b0728364><span class="required" data-v-b0728364>*</span>联系人：</div> <div class="order-form-input" data-v-b0728364><input maxlength="40" type="text" placeholder="请输入到达地联系人" class="endName" data-v-b0728364></div></div> <div class="order-form-item" data-v-b0728364><div class="order-form-label" data-v-b0728364><span class="required" data-v-b0728364>*</span>联系人电话：</div> <div class="order-form-input" data-v-b0728364><input maxlength="11" type="text" placeholder="请输入到达地联系人电话" class="endPhone" data-v-b0728364></div></div></div></div></div> <div class="order-input-tab order-company-info" data-v-b0728364><div class="order-title" data-v-b0728364>价格时效</div> <div class="order1" data-v-b0728364><div class="order-line-from clearfix" data-v-b0728364><div class="order-form-item" style="width:225px" data-v-b0728364><div class="order-form-label" data-v-b0728364>运输时效：</div> <div class="order-form-input" style="margin-right: 20px" data-v-b0728364><input id="transportAging" maxlength="40" type="text" name="time" style="width:100px;padding-left:20px" data-v-b0728364></div></div> <div id="order_top" class="order_check order_top" data-v-b0728364><span type="天" class="minbox checked" data-v-b0728364>天</span> <span type="小时" class="minbox" data-v-b0728364>小时</span> <span type="多天" class="minbox" data-v-b0728364>多天</span> <span data-v-b0728364> (多天填写如：2-5，其它只能填写阿拉伯数字)</span></div></div></div> <ul class="order-line-from clearfix order-cargo-list" data-v-b0728364><li data-v-b0728364><div class="input" data-v-b0728364><span style="padding-left:7px" data-v-b0728364>发车频率：</span> <input id="days" maxlength="12" type="text" name="day" data-v-b0728364> <span class="append" data-v-b0728364>天</span></div> <div class="input" style="position: absolute;left: 233px" data-v-b0728364><input id="once" maxlength="12" type="text" name="times" data-v-b0728364> <span class="append" data-v-b0728364>次</span></div></li></ul> <div class="order3" data-v-b0728364></div> <div class="order-company-list" data-v-b0728364><div class="order-form-label" data-v-b0728364>重货价格：<span class="required" data-v-b0728364>(阶梯价格最大值不填，代表无穷大，例如：500-，代表500公斤以上)</span></div> <div class="todoTable" data-v-b0728364><table class="table1" data-v-b0728364><thead data-v-b0728364><tr data-v-b0728364><th colspan="2" width="200" data-v-b0728364>运量</th> <th colspan="2" width="150" data-v-b0728364>原报价（必填）</th> <th colspan="2" width="150" data-v-b0728364>折后价</th></tr></thead> <tbody class="nocompany box1" data-v-b0728364><tr class="box1_list" data-v-b0728364><td colspan="2" data-v-b0728364><div class="inputbox" data-v-b0728364><input maxlength="40" type="number" class="volume" data-v-b0728364><label data-v-b0728364>------</label> <input maxlength="40" type="number" value class="volumeEnd" data-v-b0728364><label data-v-b0728364>元/公斤</label></div></td> <td colspan="2" data-v-b0728364><div class="inputbox" data-v-b0728364><input maxlength="40" type="number" class="origina" data-v-b0728364><label data-v-b0728364>元/公斤</label></div></td> <td colspan="2" data-v-b0728364><div class="inputbox" data-v-b0728364><input maxlength="40" type="number" class="discount" data-v-b0728364><label data-v-b0728364>元/公斤</label></div></td></tr> <span class="addbox add1" data-v-b0728364>+</span> <span class="delete" data-v-b0728364>-</span></tbody></table></div></div> <div class="order-company-list" data-v-b0728364><div class="order-form-label" data-v-b0728364>轻货价格：<span class="required" data-v-b0728364>(阶梯价格最大值不填，代表无穷大，例如：10-，代表10立方以上)</span></div> <div class="todoTable" data-v-b0728364><table class="table2" data-v-b0728364><thead data-v-b0728364><tr data-v-b0728364><th colspan="2" width="200" data-v-b0728364>运量</th> <th colspan="2" width="150" data-v-b0728364>原报价（必填）</th> <th colspan="2" width="150" data-v-b0728364>折后价</th></tr></thead> <tbody class="nocompany box2" data-v-b0728364><tr class="box2_list" data-v-b0728364><td colspan="2" data-v-b0728364><div class="inputbox" data-v-b0728364><input maxlength="40" type="number" class="volume" data-v-b0728364><label data-v-b0728364>------</label> <input maxlength="40" type="number" class="volumeEnd" data-v-b0728364><label data-v-b0728364>元/公斤</label></div></td> <td colspan="2" data-v-b0728364><div class="inputbox" data-v-b0728364><input maxlength="40" type="number" class="origina" data-v-b0728364><label data-v-b0728364>元/公斤</label></div></td> <td colspan="2" data-v-b0728364><div class="inputbox" data-v-b0728364><input maxlength="40" type="number" class="discount" data-v-b0728364><label data-v-b0728364>元/公斤</label></div></td></tr> <span class="addbox add1" data-v-b0728364>+</span> <span class="delete" data-v-b0728364>-</span></tbody></table></div></div> <div class="inputbox" data-v-b0728364><div class="order-form-label" data-v-b0728364>最低一票价格：</div> <input id="lowerPrice" maxlength="10" type="text" data-v-b0728364><label data-v-b0728364>元</label></div></div> <div class="order-input-tab order-company-info" data-v-b0728364><div class="order-title" data-v-b0728364>线路说明</div> <div class="order-line-from clearfix" data-v-b0728364><div class="order-form-label" data-v-b0728364>发车时间：</div> <div id="order_buttom" class="order_check order_buttom" data-v-b0728364><span type="AF02601" class="minbox checked" data-v-b0728364>上午</span> <span type="AF02602" class="minbox" data-v-b0728364>中午</span> <span type="AF02603" class="minbox" data-v-b0728364>下午</span> <span type="AF02604" class="minbox" data-v-b0728364>晚上</span></div></div> <div class="order-line-from clearfix" data-v-b0728364><div class="order-form-label" data-v-b0728364>线路说明：</div> <textarea id="textarea" maxlength="200" minlength="3" placeholder="请填写备注3-200字，提供原创说明有助于提升线路效果" style="width:600px;height: 160px;padding: 10px" data-v-b0728364></textarea> <p style="margin-left: 70px" data-v-b0728364>对您的线路进行补充说明，尽量使用市场上或物流行业内的常用词。</p></div> <div class="order-line-from clearfix" data-v-b0728364><div class="order-form-label" data-v-b0728364>专线照片：</div> <p style="padding-top: 10px" data-v-b0728364>建议传</p> <ul class="img_box" data-v-b0728364><div class="button_img" data-v-b0728364><button id="test1" type="button" class="layui-btn layui-btn-normal layui-btn-data" data-v-b0728364><i class="layui-icon layui-icon-upload-drag" data-v-b0728364></i>上传图片\n                </button> <div data-v-5d7a9fe6 class="upload__tip" data-v-b0728364>（必须为jpg/png并且小于5M）</div></div></ul></div></div> <div class="btn_bottom" data-v-b0728364><div id="reset" class="order-submit-btn click" data-v-b0728364>重置</div> <div id="next" class="order-submit-btn" data-v-b0728364>发布</div></div></div></div></div>')])},[],!1,function(t){var e=d(286);e.__inject__&&e.__inject__(t)},"b0728364","73aae770");e.default=component.exports}};
//# sourceMappingURL=943762a33564d597b7d0.js.map