exports.ids=[13],exports.modules={222:function(e,t,d){var content=d(363);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=d(3).default;e.exports.__inject__=function(e){r("77fc5e68",content,!0,e)}},361:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAIAAABSe/KxAAAC5UlEQVRIDeVUO2gVQRSdO7PZffvyIoiF+AlKCClEm6TVCGonGr+FYqGk8IN2wUZQsBC1EistopWohcQopooSMNHGHwgWEvPBmAQT8JM8s+/tzlzv7G6eL7sTt0mll4WdO3Pvuefc+YD6+oEtqfElRdNg/wIiIgmRw+/laNju0P17oyzzspKMC1pCpUAIv/8RCstdtyFyERFQRQHp9EUQQzgdDYwRqJ1jwqJBlA8ADHQ9o0H69KCU5ad37a37wXHZPNk4OXRxrlh+3uXsOMy4YWNTU6QImN/f5d0+r1G4UGODQf/DYKBbjQ9GSr3Oc8HLJ4ziTG01qeYif/pa8LqXAMsPrsNAl831/pQUZ60H7D2nRMMm59DZxRBTqqOyVJ8xr/uG++L+jM9pK3S+wmUOeq1HnJ3ttBoTDCO1O28p1RRBH6Ic/4R994oBBYTqpKTJog+q946aHNVwUeQ8UOWfRFRTY3JihKLlm2d5C6Qifiqmw1Aiy1vov+vTARPDavpLBagySPbx1+VjKIPCpcdyYogRDxJHsSFrTTY0NT6kZn+WrhyVdm3d1Z4KVjRIIuY7blK/wK3Fme+aYIwStYLOI0iJOPuN19blOjqZZTiVSUS+qiGu6eQ5ByZjLICwcwA0CU6eWPO1jQl2kZvso74YQUBrVn0TadUUaQY1WzL60aSob9JOENCl1IOFlkKkayC0FtGy3fPpBIYPHnDdTsICNieZ1bJNgwhBhPVgoRmmSBEVF2sacfPeQg0RJFAqQ5FQqEG25SBfuV6z0xIMluxjFKKLI+b2nfH8cuFVD+danVSs1Lwr13aC4Izs4tz0S5GoS9dZfXxL7w00Nf/Zt0RQlZu6hVVrNFQ/pr1bF0DpvULLdtsvQmH5wpCkZ1ZdiaKXUTRspJOj95wL/VBmmWlnqnLALThtJ+XkiJz67Ow+zmy3atE8zOBISegV+YrVyDmW5vQbnGUZfcxKN6xnqDZkZE39n4i/AWMvMJRCtg4DAAAAAElFTkSuQmCC"},362:function(e,t,d){"use strict";d.r(t);var r=d(222),n=d.n(r);for(var o in r)"default"!==o&&function(e){d.d(t,e,function(){return r[e]})}(o);t.default=n.a},363:function(e,t,d){(e.exports=d(2)(!1)).push([e.i,".che_box[data-v-75e1d504]{max-width:1400px;margin:0 auto}",""])},583:function(e,t,d){"use strict";d.r(t);var r={name:"CheOrder",head:{link:[{rel:"stylesheet",href:"/css/che_order.css"},{rel:"stylesheet",href:"/theme/default/laydate.css"}]},mounted(){if(this.$route.query.startProvince){let e=this.$route.query.startProvince+this.$route.query.startCity+this.$route.query.startArea;$(".start").val(e),$(".start").attr("theprovince",this.$route.query.startProvince),$(".start").attr("thearea",this.$route.query.startArea),$(".start").attr("thecity",this.$route.query.startCity);let t=this.$route.query.endProvince+this.$route.query.endCity+this.$route.query.endArea;$(".end").val(t),$(".end").attr("theprovince",this.$route.query.endProvince),$(".end").attr("thearea",this.$route.query.endArea),$(".end").attr("thecity",this.$route.query.endCity)}seajs.use(["/js/insurance.js","/js/LLL-AFLC_API.js"],function(){seajs.use(["/js/laydate.js"],function(){seajs.use(["/js/gaodemap2.js"],function(){seajs.use(["/layer/layer.js"],function(){$(function(){var e=getRequest(),t={strartAddressCoordinate:"",endAddressCoordinate:"",viaAddressCoordinate:"",strartAddress:"",endAddress:"",startProvince:"",startCity:"",startArea:"",endProvince:"",endCity:"",endArea:"",viaAddress:"",expectPrice:"",carSourceType:"AF0560102",isLongCar:"AF0560201",remark:""};laydate.render({elem:"#data3",type:"datetime"}),$(".check1 .minbox").click(function(e){e.stopPropagation(),$(".check1 .minbox").removeClass("checked"),$(this).addClass("checked");var d=$(this).attr("type");t.carSourceType=d}),$(".check2 .minbox").click(function(e){e.stopPropagation(),$(".check2 .minbox").removeClass("checked"),$(this).addClass("checked");var d=$(this).attr("type");t.isLongCar=d}),$(".order-submit-btn").click(function(e){e.stopPropagation(),$(".order-submit-btn").removeClass("click"),$(this).addClass("click")}),$("#reset").click(function(){$(".start").val(""),$(".end").val(""),$(".midile").val(""),$(".cargoname").val(""),$("#data3").val(""),$("#textarea").val(""),$(".check1 .minbox").eq(1).hasClass("checked")&&($(".check1 .minbox").eq(1).removeClass("checked"),$(".check1 .minbox").eq(0).addClass("checked")),$(".check2 .minbox").eq(1).hasClass("checked")&&($(".check2 .minbox").eq(1).removeClass("checked"),$(".check2 .minbox").eq(0).addClass("checked"))}),$("#next").click(function(){!function(){var d=function(){var e={done:!0,err:""};if(!$(".start").val())return e.done=!1,void layer.msg("出发地不能为空");if(t.strartAddress=$(".start").val(),t.strartAddressCoordinate=$(".start").attr("thepos"),t.startProvince=$(".start").attr("theprovince"),t.strartAddressName=$(".start").val(),t.startArea=$(".start").attr("thearea"),"北京市"==t.startProvince?t.startCity="北京市":"上海市"==t.startProvince?t.startCity="上海市":"重庆市"==t.startProvince?t.startCity="重庆市":"天津市"===t.startProvince?t.startCity="天津市":t.startCity=$(".start").attr("thecity"),!$(".end").val())return e.done=!1,void layer.msg("到达地不能为空");if(t.endAddress=$(".end").val(),t.endAddressCoordinate=$(".end").attr("thepos"),t.endProvince=$(".end").attr("theprovince"),t.endAddressName=$(".end").val(),t.endArea=$(".end").attr("thearea"),"北京市"==t.endProvince?t.endCity="北京市":"上海市"==t.endProvince?t.endCity="上海市":"重庆市"==t.endProvince?t.endCity="重庆市":"天津市"===t.endProvince?t.endCity="天津市":t.endCity=$(".end").attr("thecity"),!$(".midile").val())return e.done=!1,void layer.msg("途径地不能为空");if(t.viaAddress=$(".midile").val(),t.viaAddressName=$(".midile").val(),t.viaAddressCoordinate=$(".midile").attr("thepos"),!$("#data3").val())return e.done=!1,void layer.msg("发车时间不能为空");var time=$("#data3").val();if(t.startTime=Date.parse(time),$(".cargoname").val()){let d=window.Lll_AFLC_VALID,r=$(".cargoname").val();if(!d.ONLY_NUMBER.test(r))return $(".cargoname").val(""),layer.msg("期望运价请输入数字"),void(e.done=!1);t.expectPrice=r}return t.remark=$("#textarea").val()?$("#textarea").val():"",$(".start").val()&&$(".end").val()&&(t.title=$(".start").val()+"->"+$(".end").val()),e}();let r=$.cookie("login_userToken")||$.cookie("user_token");var n="/28-web/carInfo/home/createCar?access_token="+$.cookie("access_token")+"&user_token="+r;if(!d)return!1;var o=$.extend(t,e);if($.cookie("access_token")&&r){var o=$.extend(t,e);api.postAdd(n,o).done(function(e){200===e.status?layer.msg("发布成功",{time:3e3},function(t){window.location.href="/create/cySuccess?driverId="+e.data+"&text=车源"}):layer.msg("发布失败："+(err.text||err.error||"未知错误"))}).fail(function(e){layer.msg("发布失败："+(e.text||e.error||"未知错误"))})}else $(".login_box").show()}()}),$(document).on("click",".remark span",function(e){return e.stopPropagation(),$(this).attr("class")?$(this).removeClass("check"):$(this).addClass("check"),!1})})})})})})}},n=d(0);var component=Object(n.a)(r,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"che_box"},[this._ssrNode('<div class="main" data-v-75e1d504><div class="right main_nr" data-v-75e1d504><div class="nr order-create-main" data-v-75e1d504><div class="order-step" data-v-75e1d504><img'+this._ssrAttr("src",d(361))+' class="dp" data-v-75e1d504>发布车源信息，享受免费线上推广，越容易被发货客户找到您</div> <div class="order-line-info order-input-tab" data-v-75e1d504><div class="order-title" data-v-75e1d504>基本信息 <span data-v-75e1d504>（提示：带*为必填）</span></div> <div class="order-line-from clearfix" data-v-75e1d504><div class="order-form-item" data-v-75e1d504><div class="order-form-label" data-v-75e1d504><span class="required" data-v-75e1d504>*</span>出发地：</div> <div class="order-form-input" data-v-75e1d504><input wtmap maxlength="40" type="text" placeholder="请选择出发地" class="start" data-v-75e1d504></div></div> <div class="order-form-item" data-v-75e1d504><div class="order-form-label" style="padding-left:13px" data-v-75e1d504><span class="required" data-v-75e1d504>*</span>到达地：</div> <div class="order-form-input" data-v-75e1d504><input wtmap maxlength="40" type="text" placeholder="请选择到达地" class="end" data-v-75e1d504></div></div></div> <div class="order-line-to clearfix" data-v-75e1d504><div class="order-form-item form-detail" data-v-75e1d504><div class="order-form-label" data-v-75e1d504><span class="required" data-v-75e1d504>*</span>途径地：</div> <div class="order-form-input" data-v-75e1d504><input wtmapinit wtmap maxlength="40" type="text" placeholder="请选择途径地" class="midile" data-v-75e1d504></div></div> <div class="order-form-item form-detail" data-v-75e1d504><div class="order-form-label" data-v-75e1d504><span class="required" data-v-75e1d504>*</span>发车时间：</div> <div class="order-form-input" data-v-75e1d504><input id="data3" placeholder="请选择日期" lay-key="1" class="input02 date" data-v-75e1d504></div></div></div> <div class="order-line-to clearfix" data-v-75e1d504><div class="order-cargo-list" data-v-75e1d504><div class="input" data-v-75e1d504><span data-v-75e1d504>期望运价：</span> <input maxlength="40" type="text" class="cargoname" data-v-75e1d504> <span data-v-75e1d504>元/车 （运价不填自动为面议）</span></div> <p style="color:red;margin-left:70px;position: absolute;top:280px;" data-v-75e1d504>填写运价，车源线路将排名优先，让车源线路更有竞争力！</p></div> <div class="order-cargo-list" data-v-75e1d504><div class="order_check check1" data-v-75e1d504>\n                选择类型：\n                <span type="AF0560101" class="minbox checked" data-v-75e1d504>回程车</span> <span type="AF0560102" class="minbox" data-v-75e1d504>本地车</span></div></div> <div class="order-cargo-list" style="margin-top:10px" data-v-75e1d504><div class="order_check check2" style="padding-left:0;" data-v-75e1d504>\n                即时/长期：\n                <span type="AF0560201" class="minbox checked" data-v-75e1d504>即时车源</span> <span type="AF0560202" class="minbox" data-v-75e1d504>长期车源</span></div></div></div></div> <div class="order-input-tab order-cargo-info" data-v-75e1d504><div class="order-title" data-v-75e1d504>备注信息</div> <div class="order_minlist" data-v-75e1d504><label data-v-75e1d504>备注：</label> <div class="remark" style="width: 700px;" data-v-75e1d504></div> <textarea maxlength="30" id="textarea" placeholder="请填写备注信息" data-v-75e1d504></textarea> <p style="margin-left: 40px;font-size: 12px" data-v-75e1d504>请填写备注(0-30)字</p></div></div> <div class="btn_bottom" data-v-75e1d504><div id="reset" class="order-submit-btn" data-v-75e1d504>重置</div> <div id="next" class="order-submit-btn click" data-v-75e1d504>立即发布</div></div></div></div></div>')])},[],!1,function(e){var t=d(362);t.__inject__&&t.__inject__(e)},"75e1d504","c89d5cc6");t.default=component.exports}};
//# sourceMappingURL=d330190d2e9b2f08b0e4.js.map