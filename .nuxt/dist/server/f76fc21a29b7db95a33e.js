exports.ids=[12],exports.modules={171:function(t,e,d){var content=d(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=d(3).default;t.exports.__inject__=function(t){r("13e42c35",content,!0,t)}},283:function(t,e,d){"use strict";d.r(e);var r=d(171),c=d.n(r);for(var n in r)"default"!==n&&function(t){d.d(e,t,function(){return r[t]})}(n);e.default=c.a},284:function(t,e,d){(t.exports=d(2)(!1)).push([t.i,".che_box[data-v-db0c3800]{max-width:1400px;margin:0 auto}",""])},488:function(t,e,d){"use strict";d.r(e);var r={name:"CheOrder",head:{link:[{rel:"stylesheet",href:"/css/che_order.css"},{rel:"stylesheet",href:"/theme/default/laydate.css"}]},mounted(){seajs.use(["/js/insurance.js"],function(){seajs.use(["/js/laydate.js"],function(){seajs.use(["/js/gaodemap2.js"],function(){seajs.use(["/layer/layer.js"],function(){$(function(){var t=getRequest(),e={strartAddressCoordinate:"",endAddressCoordinate:"",viaAddressCoordinate:"",strartAddress:"",endAddress:"",startProvince:"",startCity:"",startArea:"",endProvince:"",endCity:"",endArea:"",viaAddress:"",expectPrice:"",carSourceType:"AF01801",isLongCar:"1",remark:"",carTag:"",carTagName:"",title:""};laydate.render({elem:"#data3",type:"datetime"}),$(".check1 .minbox").click(function(t){t.stopPropagation(),$(".check1 .minbox").removeClass("checked"),$(this).addClass("checked");var d=$(this).attr("type");e.carSourceType=d}),$(".check2 .minbox").click(function(t){t.stopPropagation(),$(".check2 .minbox").removeClass("checked"),$(this).addClass("checked");var d=$(this).attr("type");e.isLongCar=d}),$(".order-submit-btn").click(function(t){t.stopPropagation(),$(".order-submit-btn").removeClass("click"),$(this).addClass("click")}),$("#reset").click(function(){$(".start").val(""),$(".end").val(""),$(".midile").val(""),$(".cargoname").val(""),$("#data3").val(""),$("#textarea").val("")}),$("#next").click(function(){!function(){var d=function(){var t={done:!0,err:""};if(!$(".start").val())return t.done=!1,void layer.msg("出发地不能为空");if(e.strartAddress=$(".start").val(),e.strartAddressCoordinate=$(".start").attr("thepos"),e.startProvince=$(".start").attr("theprovince"),e.startCity=$(".start").attr("thecity"),e.startArea=$(".start").attr("thearea"),!$(".end").val())return t.done=!1,void layer.msg("到达地不能为空");if(e.endAddress=$(".end").val(),e.endAddressCoordinate=$(".end").attr("thepos"),e.endProvince=$(".end").attr("theprovince"),e.endCity=$(".end").attr("thecity"),e.endArea=$(".end").attr("thearea"),!$(".midile").val())return t.done=!1,void layer.msg("途径地不能为空");if(e.viaAddress=$(".midile").val(),e.viaAddressCoordinate=$(".midile").attr("thepos"),!$("#data3").val())return t.done=!1,void layer.msg("发车时间不能为空");var time=$("#data3").val();return e.startTime=Date.parse(time),$("#textarea").val()?(e.remark=$("#textarea").val(),$(".cargoname").val()&&(e.expectPrice=$(".cargoname").val()),$('.remark span[class="check"]').length>0&&($('.remark span[class="check"]').each(function(t,d){e.carTag=e.carTag+$(d).attr("code")+"|",e.carTagName=e.carTagName+$(d).text()+"|"}),e.carTag=e.carTag.substring(0,e.carTag.length-1),e.carTagName=e.carTagName.substring(0,e.carTagName.length-1)),$(".start").val()&&$(".end").val()&&(e.title=$(".start").val()+"->"+$(".end").val()),t):(t.done=!1,void layer.msg("请填写备注信息"))}(),r="/aflc-uc/usercenter/aflcCarInfo/v1/addCarInfo?access_token="+$.cookie("access_token")+"&user_token="+$.cookie("user_token");if(!d)return!1;if($.cookie("access_token")&&$.cookie("user_token")){var c=$.extend(e,t);api.postInfo(r,c).done(function(t){"发布成功，请完善司机车辆信息！"===t.text?window.location.href="/plus/list.php?tid=86&status=0&text=车源":window.location.href="/plus/list.php?tid=86&status=1&text=车源"}).fail(function(t){layer.msg("发布失败："+(t.errorInfo||t.text||"未知错误"))})}else $(".login_box").show()}()}),$(document).on("click",".remark span",function(t){return t.stopPropagation(),$(this).attr("class")?$(this).removeClass("check"):$(this).addClass("check"),!1})})})})})})}},c=d(0);var component=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"che_box"},[this._ssrNode('<div class="main" data-v-db0c3800><div class="right main_nr" data-v-db0c3800><div class="nr order-create-main" data-v-db0c3800><div class="order-step" data-v-db0c3800><img src="/templets/default/images/wzlImg/dp.png" class="dp" data-v-db0c3800>发布车源信息，享受免费线上推广，越容易被发货客户找到您</div> <div class="order-line-info order-input-tab" data-v-db0c3800><div class="order-title" data-v-db0c3800>基本信息 <span data-v-db0c3800>（提示：带*为必填）</span></div> <div class="order-line-from clearfix" data-v-db0c3800><div class="order-form-item" data-v-db0c3800><div class="order-form-label" data-v-db0c3800><span class="required" data-v-db0c3800>*</span>出发地：</div> <div class="order-form-input" data-v-db0c3800><input wtmap maxlength="40" type="text" placeholder="请选择出发地" class="start" data-v-db0c3800></div></div> <div class="order-form-item" data-v-db0c3800><div class="order-form-label" style="padding-left:13px" data-v-db0c3800><span class="required" data-v-db0c3800>*</span>到达地：</div> <div class="order-form-input" data-v-db0c3800><input wtmap maxlength="40" type="text" placeholder="请选择到达地" class="end" data-v-db0c3800></div></div></div> <div class="order-line-to clearfix" data-v-db0c3800><div class="order-form-item form-detail" data-v-db0c3800><div class="order-form-label" data-v-db0c3800><span class="required" data-v-db0c3800>*</span>途径地：</div> <div class="order-form-input" data-v-db0c3800><input wtmapinit wtmap maxlength="40" type="text" placeholder="请选择途径地" class="midile" data-v-db0c3800></div></div> <div class="order-form-item form-detail" data-v-db0c3800><div class="order-form-label" data-v-db0c3800><span class="required" data-v-db0c3800>*</span>发车时间：</div> <div class="order-form-input" data-v-db0c3800><input id="data3" placeholder="请选择日期" lay-key="1" class="input02 date" data-v-db0c3800></div></div></div> <div class="order-line-to clearfix" data-v-db0c3800><div class="order-cargo-list" data-v-db0c3800><div class="input" data-v-db0c3800><span data-v-db0c3800>期望运价：</span> <input maxlength="40" type="text" class="cargoname" data-v-db0c3800> <span data-v-db0c3800>元/车 （运价不填自动为面议）</span></div> <p style="color:red;margin-left:70px;position: absolute;top:280px;" data-v-db0c3800>填写运价，车源线路将排名优先，让车源线路更有竞争力！</p></div> <div class="order-cargo-list" data-v-db0c3800><div class="order_check check1" data-v-db0c3800>\n                选择类型：\n                <span type="AF01801" class="minbox checked" data-v-db0c3800>回程车</span> <span type="AF01802" class="minbox" data-v-db0c3800>本地车</span></div></div> <div class="order-cargo-list" data-v-db0c3800><div class="order_check check2" style="padding-left:0;" data-v-db0c3800>\n                即时/长期：\n                <span type="1" class="minbox checked" data-v-db0c3800>即时车源</span> <span type="0" class="minbox" data-v-db0c3800>长期车源</span></div></div></div></div> <div class="order-input-tab order-cargo-info" data-v-db0c3800><div class="order-title" data-v-db0c3800>备注信息</div> <div class="order_minlist" data-v-db0c3800><label data-v-db0c3800>备注：</label> <div class="remark" style="width: 700px;" data-v-db0c3800></div> <textarea id="textarea" placeholder="请填写备注信息" data-v-db0c3800></textarea> <p style="margin-left: 40px;font-size: 12px" data-v-db0c3800>请填写备注(0-30)字</p></div></div> <div class="btn_bottom" data-v-db0c3800><div id="reset" class="order-submit-btn" data-v-db0c3800>重置</div> <div id="next" class="order-submit-btn click" data-v-db0c3800>立即发布</div></div></div></div></div>')])},[],!1,function(t){var e=d(283);e.__inject__&&e.__inject__(t)},"db0c3800","c89d5cc6");e.default=component.exports}};
//# sourceMappingURL=f76fc21a29b7db95a33e.js.map