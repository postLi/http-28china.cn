(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{319:function(t,e,r){var content=r(433);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("6884ae34",content,!0,{sourceMap:!1})},432:function(t,e,r){"use strict";var n=r(319);r.n(n).a},433:function(t,e,r){(t.exports=r(8)(!1)).push([t.i,".che_box[data-v-f0d8b39a]{max-width:1400px;margin:0 auto}",""])},623:function(t,e,r){"use strict";r.r(e);r(39);var n={name:"CheOrder",head:{link:[{rel:"stylesheet",href:"/css/che_order.css"},{rel:"stylesheet",href:"/theme/default/laydate.css"}]},mounted:function(){if(this.$route.query.startProvince){var t=this.$route.query.startProvince+this.$route.query.startCity+this.$route.query.startArea;$(".start").val(t),$(".start").attr("theprovince",this.$route.query.startProvince),$(".start").attr("thearea",this.$route.query.startArea),$(".start").attr("thecity",this.$route.query.startCity);var e=this.$route.query.endProvince+this.$route.query.endCity+this.$route.query.endArea;$(".end").val(e),$(".end").attr("theprovince",this.$route.query.endProvince),$(".end").attr("thearea",this.$route.query.endArea),$(".end").attr("thecity",this.$route.query.endCity)}seajs.use(["/js/insurance.js","/js/LLL-AFLC_API.js"],function(){seajs.use(["/js/laydate.js"],function(){seajs.use(["/js/gaodemap2.js"],function(){seajs.use(["/layer/layer.js"],function(){$(function(){var t=getRequest(),e={strartAddressCoordinate:"",endAddressCoordinate:"",viaAddressCoordinate:"",strartAddress:"",endAddress:"",startProvince:"",startCity:"",startArea:"",endProvince:"",endCity:"",endArea:"",viaAddress:"",expectPrice:"",carSourceType:"AF0560102",isLongCar:"AF0560201",remark:""};laydate.render({elem:"#data3",type:"datetime"}),$(".check1 .minbox").click(function(t){t.stopPropagation(),$(".check1 .minbox").removeClass("checked"),$(this).addClass("checked");var r=$(this).attr("type");e.carSourceType=r}),$(".check2 .minbox").click(function(t){t.stopPropagation(),$(".check2 .minbox").removeClass("checked"),$(this).addClass("checked");var r=$(this).attr("type");e.isLongCar=r}),$(".order-submit-btn").click(function(t){t.stopPropagation(),$(".order-submit-btn").removeClass("click"),$(this).addClass("click")}),$("#reset").click(function(){$(".start").val(""),$(".end").val(""),$(".midile").val(""),$(".cargoname").val(""),$("#data3").val(""),$("#textarea").val(""),$(".check1 .minbox").eq(1).hasClass("checked")&&($(".check1 .minbox").eq(1).removeClass("checked"),$(".check1 .minbox").eq(0).addClass("checked")),$(".check2 .minbox").eq(1).hasClass("checked")&&($(".check2 .minbox").eq(1).removeClass("checked"),$(".check2 .minbox").eq(0).addClass("checked"))}),$("#next").click(function(){!function(){var r=function(){var t={done:!0,err:""};if(!$(".start").val())return t.done=!1,void layer.msg("出发地不能为空");if(e.strartAddress=$(".start").val(),e.strartAddressCoordinate=$(".start").attr("thepos"),e.startProvince=$(".start").attr("theprovince"),e.strartAddressName=$(".start").val(),e.startArea=$(".start").attr("thearea"),"北京市"==e.startProvince?e.startCity="北京市":"上海市"==e.startProvince?e.startCity="上海市":"重庆市"==e.startProvince?e.startCity="重庆市":"天津市"===e.startProvince?e.startCity="天津市":e.startCity=$(".start").attr("thecity"),!$(".end").val())return t.done=!1,void layer.msg("到达地不能为空");if(e.endAddress=$(".end").val(),e.endAddressCoordinate=$(".end").attr("thepos"),e.endProvince=$(".end").attr("theprovince"),e.endAddressName=$(".end").val(),e.endArea=$(".end").attr("thearea"),"北京市"==e.endProvince?e.endCity="北京市":"上海市"==e.endProvince?e.endCity="上海市":"重庆市"==e.endProvince?e.endCity="重庆市":"天津市"===e.endProvince?e.endCity="天津市":e.endCity=$(".end").attr("thecity"),!$(".midile").val())return t.done=!1,void layer.msg("途径地不能为空");if(e.viaAddress=$(".midile").val(),e.viaAddressName=$(".midile").val(),e.viaAddressCoordinate=$(".midile").attr("thepos"),!$("#data3").val())return t.done=!1,void layer.msg("发车时间不能为空");var time=$("#data3").val();if(e.startTime=Date.parse(time),$(".cargoname").val()){var r=window.Lll_AFLC_VALID,n=$(".cargoname").val();if(!r.ONLY_NUMBER.test(n))return $(".cargoname").val(""),layer.msg("期望运价请输入数字"),void(t.done=!1);e.expectPrice=n}return e.remark=$("#textarea").val()?$("#textarea").val():"",$(".start").val()&&$(".end").val()&&(e.title=$(".start").val()+"->"+$(".end").val()),t}(),n=$.cookie("login_userToken")||$.cookie("user_token"),d="/28-web/carInfo/home/createCar?access_token="+$.cookie("access_token")+"&user_token="+n;if(!r)return!1;var c=$.extend(e,t);if($.cookie("access_token")&&n){var c=$.extend(e,t);api.postAdd(d,c).done(function(t){200===t.status?layer.msg("发布成功",{time:3e3},function(e){window.location.href="/create/cySuccess?driverId="+t.data+"&text=车源"}):layer.msg("发布失败："+(err.text||err.error||"未知错误"))}).fail(function(t){layer.msg("发布失败："+(t.text||t.error||"未知错误"))})}else $(".login_box").show()}()}),$(document).on("click",".remark span",function(t){return t.stopPropagation(),$(this).attr("class")?$(this).removeClass("check"):$(this).addClass("check"),!1})})})})})})}},d=(r(432),r(0)),component=Object(d.a)(n,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"che_box"},[r("div",{staticClass:"main"},[r("div",{staticClass:"right main_nr"},[r("div",{staticClass:"nr order-create-main"},[r("div",{staticClass:"order-step"},[r("img",{staticClass:"dp",attrs:{src:"/templets/default/images/wzlImg/dp.png"}}),t._v("发布车源信息，享受免费线上推广，越容易被发货客户找到您")]),t._v(" "),r("div",{staticClass:"order-line-info order-input-tab"},[r("div",{staticClass:"order-title"},[t._v("基本信息 "),r("span",[t._v("（提示：带*为必填）")])]),t._v(" "),r("div",{staticClass:"order-line-from clearfix"},[r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("出发地：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{staticClass:"start",attrs:{wtmap:"",maxlength:"40",type:"text",placeholder:"请选择出发地"}})])]),t._v(" "),r("div",{staticClass:"order-form-item"},[r("div",{staticClass:"order-form-label",staticStyle:{"padding-left":"13px"}},[r("span",{staticClass:"required"},[t._v("*")]),t._v("到达地：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{staticClass:"end",attrs:{wtmap:"",maxlength:"40",type:"text",placeholder:"请选择到达地"}})])])]),t._v(" "),r("div",{staticClass:"order-line-to clearfix"},[r("div",{staticClass:"order-form-item form-detail"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("途径地：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{staticClass:"midile",attrs:{wtmapinit:"",wtmap:"",maxlength:"40",type:"text",placeholder:"请选择途径地"}})])]),t._v(" "),r("div",{staticClass:"order-form-item form-detail"},[r("div",{staticClass:"order-form-label"},[r("span",{staticClass:"required"},[t._v("*")]),t._v("发车时间：")]),t._v(" "),r("div",{staticClass:"order-form-input"},[r("input",{staticClass:"input02 date",attrs:{id:"data3",placeholder:"请选择日期","lay-key":"1"}})])])]),t._v(" "),r("div",{staticClass:"order-line-to clearfix"},[r("div",{staticClass:"order-cargo-list"},[r("div",{staticClass:"input"},[r("span",[t._v("期望运价：")]),t._v(" "),r("input",{staticClass:"cargoname",attrs:{maxlength:"40",type:"text"}}),t._v(" "),r("span",[t._v("元/车 （运价不填自动为面议）")])]),t._v(" "),r("p",{staticStyle:{color:"red","margin-left":"70px",position:"absolute",top:"280px"}},[t._v("填写运价，车源线路将排名优先，让车源线路更有竞争力！")])]),t._v(" "),r("div",{staticClass:"order-cargo-list"},[r("div",{staticClass:"order_check check1"},[t._v("\n                选择类型：\n                "),r("span",{staticClass:"minbox checked",attrs:{type:"AF0560101"}},[t._v("回程车")]),t._v(" "),r("span",{staticClass:"minbox",attrs:{type:"AF0560102"}},[t._v("本地车")])])]),t._v(" "),r("div",{staticClass:"order-cargo-list",staticStyle:{"margin-top":"10px"}},[r("div",{staticClass:"order_check check2",staticStyle:{"padding-left":"0"}},[t._v("\n                即时/长期：\n                "),r("span",{staticClass:"minbox checked",attrs:{type:"AF0560201"}},[t._v("即时车源")]),t._v(" "),r("span",{staticClass:"minbox",attrs:{type:"AF0560202"}},[t._v("长期车源")])])])])]),t._v(" "),r("div",{staticClass:"order-input-tab order-cargo-info"},[r("div",{staticClass:"order-title"},[t._v("备注信息")]),t._v(" "),r("div",{staticClass:"order_minlist"},[r("label",[t._v("备注：")]),t._v(" "),r("div",{staticClass:"remark",staticStyle:{width:"700px"}}),t._v(" "),r("textarea",{attrs:{maxlength:"30",id:"textarea",placeholder:"请填写备注信息"}}),t._v(" "),r("p",{staticStyle:{"margin-left":"40px","font-size":"12px"}},[t._v("请填写备注(0-30)字")])])]),t._v(" "),r("div",{staticClass:"btn_bottom"},[r("div",{staticClass:"order-submit-btn",attrs:{id:"reset"}},[t._v("重置")]),t._v(" "),r("div",{staticClass:"order-submit-btn click",attrs:{id:"next"}},[t._v("立即发布")])])])])])])}],!1,null,"f0d8b39a",null);e.default=component.exports}}]);