(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{267:function(t,e,n){var content=n(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("da9dd458",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";var r=n(267);n.n(r).a},382:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".line_box[data-v-31b68256]{max-width:1400px;margin:0 auto}.box1_list[data-v-31b68256],.box2_list[data-v-31b68256]{border:1px solid #ddd}.inputbox input[data-v-31b68256]{width:100px;padding-left:20px;height:40px;border-radius:2px;border:1px solid #d2d2d2}",""])},523:function(t,e,n){"use strict";n.r(e);n(82),n(13),n(39);let r=function(t){return new Promise(function(e,n){$.ajax({url:"/api"+t,type:"GET",dataType:"json",processData:!1,cache:!1,contentType:!1,headers:{"Content-Type":"application/json"},success:function(t){e(t)},error:function(t){n(t)}})})},l=function(t,form){return new Promise(function(e,n){$.ajax({url:t,type:"POST",processData:!1,cache:!1,contentType:!1,data:form,success:function(t){e(t)},error:function(t){n(t),console.log()}})})};var o={name:"SingleImageUpload",props:{},data:()=>({dir:"",policy:"",OSSAccessKeyId:"",signature:"",success_action_status:"",url:"",filelist:[],imgUrlList:[],imgUrlList2:[]}),watch:{imgUrlList:function(t,e){this.imgUrlList2=t}},mounted(){},methods:{init(){var t=this,e="/anfacommonservice/common/oss/v1/policy?access_token="+$.cookie("access_token");return r(e).then(function(e){t.dir=e.data.dir,t.policy=e.data.policy,t.OSSAccessKeyId=e.data.accessid,t.signature=e.data.signature,t.success_action_status="201",t.url=e.data.host,console.log("1",e),console.log("zid",t.dir),console.log("----------"),console.log("_this.handleUpload",t.handleUpload),t.handleUpload(t.fileList)},function(){return layer.msg("请求失败!"),!1})},handleUpload(t){let e=this;return new Promise((n,r)=>{var l=t.name,o=(l=l||Math.random()+".jpg").match(/([^\.]+)$/);o=o?"."+o[1]:"",console.log("haha");let c=t=>{const form=new FormData;e.url;let n=e.dir+"uploadfile/"+(/(jpe?g|png|bmp|gif)/i.test(o)?+new Date+o:l);form.append("key",n),form.append("success_action_status","201"),form.append("OSSAccessKeyId",e.OSSAccessKeyId),form.append("policy",e.policy),form.append("signature",e.signature),form.append("file",t),console.log("key1",e.key,e.dir),console.log("OSSAccessKeyId2",e.OSSAccessKeyId),console.log("policy3",e.policy),console.log("signature4",e.signature),console.log("file5",t),console.log("form",form),console.log("上传图片"),e.postUploadImg(form)};/\.jpe?g/.test(o)?lrz(options.file,{width:1024}).then(t=>{console.log("rst",t),c(t.file)}).catch(t=>{r(t)}):c(t)})},postUploadImg(form){let t=this;console.log("提交表单",form),console.log("阿里云地址1"),console.log("URL",this.url),l(this.url,form).then(e=>{console.log("阿里云图片的地址",e);let n=$(e).find("Location").text();console.log("打印图片url:",n),t.imgUrlList.push(n),this.$emit("imgData",t.imgUrlList2)},t=>{layer.msg("上传图片失败！")})},beforeUpload(t){let e=this,n=t.target.files||t.dataTransfer.files,r=n.length;if(n.length>3)return layer.msg("不能上传超过三张图片！"),!1;for(let i=0;i<r;i++)console.log(e),e.filesFn(n[i])},filesFn(t){let e=this,n=t;console.log("file",n.name,n);const r=/image\/\w+/.test(n.type)&&/(jpe?g|png)/i.test(n.type),l=n.size/1024/1024<5;let o=n.name.match(/([^\.]+)$/);return o=o?"."+o[1]:"",new Promise((t,o)=>{r?l?(e.fileList=n,this.init().then(e=>{t(!0)}).catch(e=>{t(!1)})):(layer.msg("上传头像图片大小不能超过 5MB!"),o(!1)):(layer.msg("上传头像图片只能是 JPG/PNG 格式!"),o(!1))})},deleteImg(i){this.imgUrlList.splice(i,1),this.$emit("imgData",this.imgUrlList2),console.log(this.imgUrlList)}}},c=n(1),d={name:"Linerder",head:{link:[{rel:"stylesheet",href:"/css/line_order.css"},{rel:"stylesheet",href:"/layer3/css/layui.css"},{rel:"stylesheet",href:"/fancybox/jquery.fancybox.min.css"}]},components:{Upload:Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload_img"},[n("input",{attrs:{type:"file",multiple:"multiple"},on:{change:t.beforeUpload}}),t._v(" "),n("div",{staticClass:"upload_img_list"},[n("ul",t._l(t.imgUrlList2,function(e,r){return n("li",{key:r},[t._v("\n        "+t._s(e)+"\n        "),n("a",{on:{click:function(e){return t.deleteImg(r)}}},[t._v("删除图片")]),t._v(" "),n("img",{attrs:{src:e}}),t._v(">\n      ")])}),0)])])},[],!1,null,null,null).exports},data:()=>({imgList:[],tableHtml:'<tr class="box1_list">\n                          <td colspan="2">\n                            <div class="inputbox">\n                              <input maxlength="40" type="number" class="volume" disabled="disabled"><label>------</label>\n                              <input maxlength="40" type="number" class="volumeEnd"  /><label>元/公斤</label>\n                            </div>\n                            \n                          </td>\n                          <td colspan="2">\n                            <div class="inputbox">\n                              <input maxlength="40" type="number" class="origina"><label>元/公斤</label>\n                            </div>\n                          </td>\n                          <td colspan="2">\n                            <div class="inputbox">\n                              <input maxlength="40" type="number" class="discount"><label>元/公斤</label>\n                            </div>\n                          </td>\n                        </tr>',heavyList:[],lightList:[]}),mounted(){let t=this;seajs.use(["/js/insurance.js"],function(){seajs.use(["/js/gaodemap2.js"],function(){seajs.use(["/fancybox/jquery.fancybox.min.js"],function(){seajs.use(["layer"],function(){seajs.use(["/layer3/layui.js"],function(){console.log(layer),$(function(){getRequest();var e={startLocationCoordinate:"",endLocationCoordinate:"",startProvince:"",startCity:"",startArea:"",endProvince:"",endCity:"",endArea:"",startLocationContacts:"",startLocationContactsMobile:"",endLocationContacts:"",endLocationContactsMobile:"",transportAging:"",transportAgingUnit:"",departureHzData:"",departureHzTime:"",lowerPrice:"",departureTimeCode:"",transportRemark:"",rangeLogo:"",rangePrices:[]};function n(){var t="/anfacommonservice/common/oss/v1/policy?access_token="+$.cookie("access_token");api.getInfo1(t).done(function(t){var e=t.data.dir,n=t.data.policy,r=t.data.accessid,l=t.data.signature;layui.use("upload",function(){layui.upload.render({elem:"#test1",method:"post",data:{key:"",policy:n,success_action_status:201,OSSAccessKeyId:r,signature:l},url:t.data.host,before:function(t){this.data.key=e+function(time,t){if(0===arguments.length)return null;if(!time)return"";const e=t||"{y}-{m}-{d} {h}:{i}:{s}";let n;if("object"==typeof time?n=time:(time="number"==typeof time?time:(""+time).trim(),/^\d{10}$/.test(time)?time=1e3*parseInt(time):/(\d){4}-(\d){2}-(\d){2}\s+(\d){2}:(\d){2}:(\d){2}/.test(time)&&(time=time.replace(/-/g,"/")),n=new Date(time)),-1!==n.toString().indexOf("Invalid"))return time;const r={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return e.replace(/{(y|m|d|h|i|s|a)+}/g,(t,e)=>{let n=r[e];return"a"===e?["一","二","三","四","五","六","日"][n-1]:(t.length>0&&n<10&&(n="0"+n),n||0)})}(new Date,"{y}{m}{d}")+"/"+function(t){t=t||32;for(var e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=e.length,r="",i=0;i<t;i++)r+=e.charAt(Math.floor(Math.random()*n));return r}()+".jpg"||!1},done:function(t,e,n){if(console.log(t),$(".img_box .button_img").before('<li><i class="layui-icon del_icon">&#xe640;</i><a style="float:left" class="fancybox-thumb" rel="fancybox-thumb" href="'+t.url+'" title="Golden Manarola (Sanjeev Deo)"><img src="'+t.url+'" alt="" /><i class="layui-icon add_icon">&#xe608</i></a></li>'),$(".fancybox-thumb").fancybox({prevEffect:"none",nextEffect:"none",helpers:{title:{type:"outside"},thumbs:{width:50,height:50}}}),$(".del_icon").click(function(t){t.target.parentNode.remove(),$(".img_box img").length<3&&$(".button_img").show()}),$(".img_box img").length>2)return $(".button_img").hide(),void layer.msg("最多上传三张")},error:function(){layer.load()}})})}).fail(function(t){layer.msg("您还未登入")})}function r(){e.departureTimeCode=$("#order_buttom .checked").attr("type"),e.transportAgingUnit=$("#order_top .checked").text()}r(),n(),$(".volume").val("0"),$(".volume").attr("disabled","disabled"),$(".nocompany").find(".box1_list").length<=1?$(".delete").hide():$(".delete").show(),$(".delete").click(function(){var t=$(this).siblings(".add1"),e=$(this).parent(".todoTable").find("table tbody tr");e.last().remove(),e.length>2?$(this).show():$(this).hide(),e.length<6?t.show():t.hide()}),$("#test1").click(function(){console.log("fdsafas",$.cookie("access_token")),$.cookie("access_token")||$("body").trigger("login.show")}),$(document).on("click",".login-btn",function(t){t.preventDefault();var e=setInterval(()=>{$.cookie("access_token")&&(n(),clearInterval(e))},5e3);return!1}),$(".order-submit-btn").click(function(t){t.stopPropagation(),$(".order-submit-btn").removeClass("click"),$(this).addClass("click")}),$("#order_top .minbox").click(function(t){t.stopPropagation(),$("#order_top .minbox").removeClass("checked"),$(this).addClass("checked"),r()}),$("#order_buttom .minbox").click(function(t){t.stopPropagation(),$("#order_buttom .minbox").removeClass("checked"),$(this).addClass("checked"),r()}),$("#reset").click(function(){$(".start").val(""),$(".end").val(""),$(".startName").val(""),$(".startPhone").val(""),$(".endName").val(""),$(".endPhone").val(""),$("#textarea").val(""),$("#lowerPrice").val(""),$("#transportAging").val(""),$("#days").val(""),$("#once").val("")}),$("#next").click(function(){(function(){var n={done:!0,err:""};if(console.log("地方-----------",$(".start").val()),!$(".start").val())return n.done=!1,void layer.msg("出发地不能为空");if(e.startLocationCoordinate=$(".start").attr("thepos"),e.startProvince=$(".start").attr("theprovince"),e.startCity=$(".start").attr("thecity"),e.startArea=$(".start").attr("thearea"),!$(".end").val())return n.done=!1,void layer.msg("到达地不能为空");if(e.endLocationCoordinate=$(".end").attr("thepos"),e.endProvince=$(".end").attr("theprovince"),e.endCity=$(".end").attr("thecity"),e.endArea=$(".end").attr("thearea"),!$(".startName").val())return n.done=!1,void layer.msg("出发地联系人不能为空");e.startLocationContacts=$(".startName").val();let r=parseInt($(".startPhone").val());if(!AFLC_VALID.MOBILE.test(r))return r?(n.done=!1,void layer.msg("出发地联系人电话不正确")):(n.done=!1,void layer.msg("出发地联系人电话不能为空"));if(e.startLocationContactsMobile=$(".startPhone").val(),!$(".endName").val())return n.done=!1,void layer.msg("到达地联系人不能为空");e.endLocationContacts=$(".endName").val();let l=parseInt($(".endPhone").val());if(console.log(l),!AFLC_VALID.MOBILE.test(l))return l?(n.done=!1,void layer.msg("到达地联系人电话不正确")):(n.done=!1,void layer.msg("到达地联系人电话不能为空"));if(e.endLocationContactsMobile=$(".endPhone").val(),console.log("电话号码",e.endLocationContactsMobile),$("#textarea").val().length<3)layer.msg("线路说明不能少于3个字符");else if($("#textarea").val().length>200)layer.msg("线路说明不能超过200个字符");else{if(e.transportRemark=$("#textarea").val(),"-"==$("#lowerPrice").val().charAt()||"0"==$("#lowerPrice").val())return n.done=!1,layer.msg("最低一票价格格式不正确"),!1;e.lowerPrice=$("#lowerPrice").val(),$("#transportAging").val()&&(e.transportAging=$("#transportAging").val()),$("#days").val()&&(e.departureHzData=$("#days").val()),$("#once").val()&&(e.departureHzTime=$("#once").val()),t.imgList?(console.log("图片数据提交",t.imgList),e.rangeLogo=t.imgList.join(",")):layer.msg("上传图片不能为空"),function(){e.rangePrices=[];var t=!0;$(".order-company-list").each(function(n,r){if(!t)return!1;var l="1";1==n&&(l="0"),$(this).find("table .nocompany tr").each(function(n,r){var p={discountPrice:"",endVolume:"",primeryPrice:"",startVolume:"",type:l};if("1"===l){if(!$(this).find(".volumeEnd").val())return t=!1,layer.msg("请补运量结束数值"),!1;if(p.endVolume=$(this).find(".volumeEnd").val(),!$(this).find(".origina").val())return t=!1,layer.msg("请补充重货原报价"),!1;if(p.primeryPrice=$(this).find(".origina").val(),!$(this).find(".discount").val())return t=!1,layer.msg("请补充重货折后报价"),!1;p.discountPrice=$(this).find(".discount").val(),p.startVolume=$(this).find(".volume").val()?$(this).find(".volume").val():"0",console.log("运量1",p.startVolume)}else{if(!$(this).find(".volumeEnd").val())return t=!1,!1;if(p.endVolume=$(this).find(".volumeEnd").val(),!$(this).find(".origina").val())return t=!1,layer.msg("请补充轻货原报价"),!1;if(p.primeryPrice=$(this).find(".origina").val(),!$(this).find(".discount").val())return t=!1,layer.msg("请补充轻货折后报价"),!1;p.discountPrice=$(this).find(".discount").val(),p.startVolume=$(this).find(".volume").val()?$(this).find(".volume").val():"0"}e.rangePrices.push(p)})})}()}})(),console.log("到达电话",e.startLocationContactsMobile),console.log("到达电话",e.endLocationContactsMobile),console.log("到达区",e.endArea),console.log("到达区",e.Area),console.log(1.111111111111111e53)})})})})})})})},methods:{cargoAdd(){1===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)?this.tableAdd(".table1 tbody tr"):this.tableAdd(".table2 tbody tr")},tableAdd(t){let e=$(t),tr=e,n=e.length-1,r=tr.eq(n).find(".volumeEnd").val(),l=tr.eq(n).find(".origina").val(),o=tr.eq(n).find(".discount").val();if(!r&&!l&&!o)return layer.msg("数据没填满,不可以添加！"),!1;this.heavyList.push(this.tableHtml),this.$nextTick(()=>{var e=$(t),n=e.length-1;console.log(e),e.eq(n).find(".volume").val(r)})},tableChange(t){this.$nextTick(()=>{$(t).length>1&&$(t).remove()})},imgListDataFn(t){this.imgList=t}}},v=(n(381),Object(c.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"line_box"},[n("div",{staticClass:"main"},[n("div",{staticClass:"right main_nr"},[n("div",{staticClass:"nr order-create-main layui-form",attrs:{action:""}},[t._m(0),t._v(" "),n("div",{staticClass:"order-input-tab order-company-info"},[n("div",{staticClass:"order-title"},[t._v("价格时效")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"order3"}),t._v(" "),n("div",{staticClass:"order-company-list"},[t._m(3),t._v(" "),n("div",{staticClass:"todoTable"},[n("table",{staticClass:"table1"},[t._m(4),t._v(" "),n("tbody",{staticClass:"nocompany box1"},[n("tr",{staticClass:"box1_list"},[n("td",{attrs:{colspan:"2"}},[n("div",{staticClass:"inputbox"},[n("input",{staticClass:"volume",attrs:{maxlength:"40",type:"number"}}),n("label",[t._v("------")]),t._v(" "),n("input",{staticClass:"volumeEnd",attrs:{maxlength:"40",type:"number",value:""},on:{change:function(e){return t.tableChange(".table1 tbody  tr")}}}),t._v(">"),n("label",[t._v("元/公斤")])])]),t._v(" "),t._m(5),t._v(" "),t._m(6)]),t._v(" "),t._l(t.heavyList,function(e,r){return n("tr",{key:r,staticClass:"box1_list",domProps:{innerHTML:t._s(e)}})}),t._v(" "),n("span",{staticClass:"addbox add1",on:{click:function(e){return t.cargoAdd(1)}}},[t._v("+")]),t._v(" "),n("span",{staticClass:"delete"},[t._v("-")])],2)])])]),t._v(" "),n("div",{staticClass:"order-company-list"},[t._m(7),t._v(" "),n("div",{staticClass:"todoTable"},[n("table",{staticClass:"table2"},[t._m(8),t._v(" "),n("tbody",{staticClass:"nocompany box2"},[n("tr",{staticClass:"box2_list"},[n("td",{attrs:{colspan:"2"}},[n("div",{staticClass:"inputbox"},[n("input",{staticClass:"volume",attrs:{maxlength:"40",type:"number"}}),n("label",[t._v("------")]),t._v(" "),n("input",{staticClass:"volumeEnd",attrs:{maxlength:"40",type:"number"},on:{change:function(e){t.tableChange(".table2 tbody  tr")}}}),n("label",[t._v("元/公斤")])])]),t._v(" "),t._m(9),t._v(" "),t._m(10)]),t._v(" "),t._l(t.lightList,function(e,r){return n("tr",{key:r,staticClass:"box1_list",domProps:{innerHTML:t._s(e)}})}),t._v(" "),n("span",{staticClass:"addbox add1",on:{click:function(e){return t.cargoAdd(0)}}},[t._v("+")]),t._v(" "),n("span",{staticClass:"delete"},[t._v("-")])],2)])])]),t._v(" "),t._m(11)]),t._v(" "),n("div",{staticClass:"order-input-tab order-company-info"},[n("div",{staticClass:"order-title"},[t._v("线路说明")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),n("div",{staticClass:"order-line-from clearfix"},[n("div",{staticClass:"order-form-label"},[t._v("专线照片：")]),t._v(" "),n("p",{staticStyle:{"padding-top":"10px"}},[t._v("建议传")]),t._v(" "),n("div",[n("upload",{on:{imgData:t.imgListDataFn}})],1)])]),t._v(" "),t._m(14)])])])])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-line-info order-input-tab"},[n("div",{staticClass:"order-title"},[t._v("基本信心 "),n("span",[t._v("（提示：待*为必填）")])]),t._v(" "),n("div",{staticClass:"order-line-from clearfix"},[n("div",{staticClass:"order-form-item"},[n("div",{staticClass:"order-form-label"},[n("span",{staticClass:"required"},[t._v("*")]),t._v("出发地：")]),t._v(" "),n("div",{staticClass:"order-form-input"},[n("input",{staticClass:"start",attrs:{wtmap:"",maxlength:"40",type:"text",placeholder:"请选择出发地 省-市-县"}})])]),t._v(" "),n("div",{staticClass:"order-contact-from clearfix"},[n("div",{staticClass:"order-form-item"},[n("div",{staticClass:"order-form-label"},[n("span",{staticClass:"required"},[t._v("*")]),t._v("联系人：")]),t._v(" "),n("div",{staticClass:"order-form-input"},[n("input",{staticClass:"startName",attrs:{maxlength:"40",type:"text",placeholder:"请输入出发地联系人"}})])]),t._v(" "),n("div",{staticClass:"order-form-item"},[n("div",{staticClass:"order-form-label"},[n("span",{staticClass:"required"},[t._v("*")]),t._v("联系人电话：")]),t._v(" "),n("div",{staticClass:"order-form-input"},[n("input",{staticClass:"startPhone",attrs:{maxlength:"11",type:"text",placeholder:"请输入出发地联系人电话",onkeyup:"value=value.replace(/[^\\d]/g,'')"}})])])])]),t._v(" "),n("div",{staticClass:"order-line-to clearfix"},[n("div",{staticClass:"order-form-item"},[n("div",{staticClass:"order-form-label"},[n("span",{staticClass:"required"},[t._v("*")]),t._v("到达地：")]),t._v(" "),n("div",{staticClass:"order-form-input"},[n("input",{staticClass:"end",attrs:{wtmap:"",maxlength:"40",type:"text",placeholder:"请选择到达地 省-市-县"}})])]),t._v(" "),n("div",{staticClass:"order-contact-from1 clearfix"},[n("div",{staticClass:"order-form-item"},[n("div",{staticClass:"order-form-label"},[n("span",{staticClass:"required"},[t._v("*")]),t._v("联系人：")]),t._v(" "),n("div",{staticClass:"order-form-input"},[n("input",{staticClass:"endName",attrs:{maxlength:"40",type:"text",placeholder:"请输入到达地联系人"}})])]),t._v(" "),n("div",{staticClass:"order-form-item"},[n("div",{staticClass:"order-form-label"},[n("span",{staticClass:"required"},[t._v("*")]),t._v("联系人电话：")]),t._v(" "),n("div",{staticClass:"order-form-input"},[n("input",{staticClass:"endPhone",attrs:{maxlength:"11",type:"text",placeholder:"请输入到达地联系人电话"}})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order1"},[n("div",{staticClass:"order-line-from clearfix"},[n("div",{staticClass:"order-form-item",staticStyle:{width:"225px"}},[n("div",{staticClass:"order-form-label"},[t._v("运输时效：")]),t._v(" "),n("div",{staticClass:"order-form-input",staticStyle:{"margin-right":"20px"}},[n("input",{staticStyle:{width:"100px","padding-left":"20px"},attrs:{id:"transportAging",maxlength:"40",type:"text",name:"time"}})])]),t._v(" "),n("div",{staticClass:"order_check order_top",attrs:{id:"order_top"}},[n("span",{staticClass:"minbox checked",attrs:{type:"天"}},[t._v("天")]),t._v(" "),n("span",{staticClass:"minbox",attrs:{type:"小时"}},[t._v("小时")]),t._v(" "),n("span",{staticClass:"minbox",attrs:{type:"多天"}},[t._v("多天")]),t._v(" "),n("span",[t._v(" (多天填写如：2-5，其它只能填写阿拉伯数字)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"order-line-from clearfix order-cargo-list"},[e("li",[e("div",{staticClass:"input"},[e("span",{staticStyle:{"padding-left":"7px"}},[this._v("发车频率：")]),this._v(" "),e("input",{attrs:{id:"days",maxlength:"12",type:"text",name:"day"}}),this._v(" "),e("span",{staticClass:"append"},[this._v("天")])]),this._v(" "),e("div",{staticClass:"input",staticStyle:{position:"absolute",left:"233px"}},[e("input",{attrs:{id:"once",maxlength:"12",type:"text",name:"times"}}),this._v(" "),e("span",{staticClass:"append"},[this._v("次")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"order-form-label"},[this._v("重货价格："),e("span",{staticClass:"required"},[this._v("(阶梯价格最大值不填，代表无穷大，例如：500-，代表500公斤以上)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{colspan:"2",width:"200"}},[this._v("运量")]),this._v(" "),e("th",{attrs:{colspan:"2",width:"150"}},[this._v("原报价（必填）")]),this._v(" "),e("th",{attrs:{colspan:"2",width:"150"}},[this._v("折后价")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{colspan:"2"}},[e("div",{staticClass:"inputbox"},[e("input",{staticClass:"origina",attrs:{maxlength:"40",type:"number"}}),e("label",[this._v("元/公斤")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{colspan:"2"}},[e("div",{staticClass:"inputbox"},[e("input",{staticClass:"discount",attrs:{maxlength:"40",type:"number"}}),e("label",[this._v("元/公斤")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"order-form-label"},[this._v("轻货价格："),e("span",{staticClass:"required"},[this._v("(阶梯价格最大值不填，代表无穷大，例如：10-，代表10立方以上)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{colspan:"2",width:"200"}},[this._v("运量")]),this._v(" "),e("th",{attrs:{colspan:"2",width:"150"}},[this._v("原报价（必填）")]),this._v(" "),e("th",{attrs:{colspan:"2",width:"150"}},[this._v("折后价")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{colspan:"2"}},[e("div",{staticClass:"inputbox"},[e("input",{staticClass:"origina",attrs:{maxlength:"40",type:"number"}}),e("label",[this._v("元/公斤")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{colspan:"2"}},[e("div",{staticClass:"inputbox"},[e("input",{staticClass:"discount",attrs:{maxlength:"40",type:"number"}}),e("label",[this._v("元/公斤")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"inputbox"},[e("div",{staticClass:"order-form-label"},[this._v("最低一票价格：")]),this._v(" "),e("input",{attrs:{id:"lowerPrice",maxlength:"10",type:"text"}}),e("label",[this._v("元")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-line-from clearfix"},[n("div",{staticClass:"order-form-label"},[t._v("发车时间：")]),t._v(" "),n("div",{staticClass:"order_check order_buttom",attrs:{id:"order_buttom"}},[n("span",{staticClass:"minbox checked",attrs:{type:"AF02601"}},[t._v("上午")]),t._v(" "),n("span",{staticClass:"minbox",attrs:{type:"AF02602"}},[t._v("中午")]),t._v(" "),n("span",{staticClass:"minbox",attrs:{type:"AF02603"}},[t._v("下午")]),t._v(" "),n("span",{staticClass:"minbox",attrs:{type:"AF02604"}},[t._v("晚上")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"order-line-from clearfix"},[e("div",{staticClass:"order-form-label"},[this._v("线路说明：")]),this._v(" "),e("textarea",{staticStyle:{width:"600px",height:"160px",padding:"10px"},attrs:{id:"textarea",maxlength:"200",minlength:"3",placeholder:"请填写备注3-200字，提供原创说明有助于提升线路效果"}}),this._v(" "),e("p",{staticStyle:{"margin-left":"70px"}},[this._v("对您的线路进行补充说明，尽量使用市场上或物流行业内的常用词。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btn_bottom"},[e("div",{staticClass:"order-submit-btn click",attrs:{id:"reset"}},[this._v("重置")]),this._v(" "),e("div",{staticClass:"order-submit-btn",attrs:{id:"next"}},[this._v("发布")])])}],!1,null,"31b68256",null));e.default=v.exports}}]);