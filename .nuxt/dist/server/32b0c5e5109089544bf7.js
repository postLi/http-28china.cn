exports.ids=[27],exports.modules={110:function(t,e,o){var content=o(159);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var l=o(3).default;t.exports.__inject__=function(t){l("775e5fd9",content,!0,t)}},158:function(t,e,o){"use strict";o.r(e);var l=o(110),r=o.n(l);for(var n in l)"default"!==n&&function(t){o.d(e,t,function(){return l[t]})}(n);e.default=r.a},159:function(t,e,o){(t.exports=o(2)(!1)).push([t.i,".wzlHelp{background-color:rgba(0,0,0,.5);width:100%;height:100%;position:fixed;top:0;left:0;display:block;padding:12% 30%}.add1_content{width:532px;float:left;background:#fff}.actives{border:1px solid #ffb65f!important;color:#ffb65f!important}.closeMe{height:40px;line-height:40px;width:100%;text-align:right;background:#ddd;cursor:pointer}.closeMe a{margin-right:20px}.times{display:none!important;position:absolute}.text_num,.text_phone{width:358px;height:40px;border-radius:4px;border:1px solid #ccc;padding-left:8px;margin-left:18px}.cont_ul_li a{display:block;position:absolute;right:26px;top:13px;color:#2577e3}.text_btn{width:368px;height:40px;border-radius:4px;border:1px solid #ffb65f;text-align:center;background-color:#ffb65f;color:#fff;cursor:pointer;margin-left:18px;margin-bottom:20px}.phone_err,.text_err{text-align:left;font-size:12px;margin-left:18px;margin-top:5px;color:#f77d07;position:absolute}.cont_ul_li{cursor:pointer;margin:20px 0 0 63px;float:left;position:relative}.cont_ul p{float:left;margin-left:26px}.cont_ul_li:first-child{float:left}.cont_ul_li:first-child span{width:170px;float:left;line-height:40px;display:block;height:40px;border-radius:4px;border:1px solid #ccc;color:#333;font-weight:700;margin-left:21px}.cont_ul{float:left}.huo_content{float:left;text-align:center;padding-bottom:20px}.huo_content h4{font-size:22px;height:22px;line-height:22px;padding:20px}",""])},201:function(t,e,o){"use strict";o.r(e);var l={name:"Help",props:{isShowHelp:{type:Boolean,default:!1}},head:{link:[{rel:"stylesheet",href:"/layer3/css/layui.css"}],script:[{src:"/layer/layer.js"},{src:"/js/AFLC_API.js"}]},data:()=>({dataInfo:{},isActiveFirst:!0,dialogKey:0,getMoblie:"",ShowmobileErr:!1,Showtextnum:!1,showTitme:"",mobile:"",textnum:"",userType:"",times:60,mobileErr:""}),async asyncData(){},computed:{isShow(){return this.isShowHelp}},watch:{info(){},isShowHelp:{handler(t,e){},deep:!0}},mounted(){this.handleView()},methods:{handleView(t){this.isActiveFirst=!this.isActiveFirst,this.userType="aflc-5"===t?"aflc-5":"aflc-1"},closeMe(){this.$emit("update:isShowHelp",!1),this.reset()},reset(){this.mobile="",this.textnum=""},done(){console.log("done")},submitBtn(){var t=window.AFLC_VALID;window.AFLC_VALID;return this.dataInfo.mobile=this.mobile,this.dataInfo.textnum=this.textnum,this.dataInfo.userType=this.userType,this.mobile?(t.MOBILE.test(this.mobile)?(this.Showtextnum=!1,this.ShowmobileErr=!1,this.numErr="",this.mobileErr=""):(this.ShowmobileErr=!0,this.mobileErr="请填写有效的手机号"),this.mobile&&this.textnum?void this.$axios.post("/28-web/companyLine/subscribe",this.dataInfo).then(t=>{200===t.data.status&&layer.msg("订阅成功"),t.data.errorInfo&&layer.msg(t.data.errorInfo)}).catch(t=>{console.log("提交捕获异常")}):(this.Showtextnum=!0,void(this.numErr="请填写验证码"))):(this.ShowmobileErr=!0,void(this.mobileErr="请填写手机号"))},phoneText(){let t=this;var e=window.AFLC_VALID;window.AFLC_VALID;this.mobile?e.MOBILE.test(this.mobile)?(this.ShowmobileErr=!1,this.$axios.post("/aflc-common/aflcCommonSms/sendCodeSms/"+t.mobile).then(e=>{200===e.status&&(layer.msg("验证码发送成功"),this.getMoblie=!0,t.startCount())})):(this.ShowmobileErr=!0,this.mobileErr="请填写有效的手机号"):(this.ShowmobileErr=!0,this.mobileErr="请填写手机号")},startCount(){let t=setInterval(()=>{this.times--,this.times<=0&&(clearInterval(t),this.getMoblie=!1,this.times=60)},1e3)}}},r=o(0);var component=Object(r.a)(l,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"wzlHelp"},[t._ssrNode('<div class="add1_content"><div class="closeMe"><a>关闭</a></div> <div class="huo_content"><h4>订阅货主货源信息</h4> <ul class="cont_ul"><li class="cont_ul_li"><span'+t._ssrClass(null,t.isActiveFirst?"actives":"")+">我是物流公司</span> <span"+t._ssrClass(null,t.isActiveFirst?"":"actives")+'>我是车主</span></li> <li class="cont_ul_li"><input name="title" required="required" autocomplete="off" lay-verify="required" maxlength="11" type="text" placeholder="请输入手机号"'+t._ssrAttr("value",t.mobile)+' class="text_phone"> <p class="phone_err">'+t._ssrEscape(t._s(t.ShowmobileErr?"*"+t.mobileErr:""))+'</p></li> <li class="cont_ul_li"><input type="text" maxlength="11" placeholder="请输入验证码"'+t._ssrAttr("value",t.textnum)+' class="text_num"> <a>'+t._ssrEscape(t._s(t.getMoblie?t.times+"秒":"获取验证码"))+'</a> <p class="text_err">'+t._ssrEscape(t._s(t.Showtextnum?"*"+t.numErr:""))+'</p></li> <li class="cont_ul_li"><input type="text" value="提交" readonly="readonly" class="text_btn"></li></ul> <p>提交成功后平台将会为您智能筛选，实时推荐即时货源</p></div></div>')])},[],!1,function(t){var e=o(158);e.__inject__&&e.__inject__(t)},null,"7e2f87c6");e.default=component.exports}};
//# sourceMappingURL=32b0c5e5109089544bf7.js.map