(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{189:function(t,e,o){var content=o(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(4).default)("5128e76a",content,!0,{sourceMap:!1})},223:function(t,e,o){"use strict";var l=o(189);o.n(l).a},224:function(t,e,o){(t.exports=o(3)(!1)).push([t.i,".wzlAdd{background-color:rgba(0,0,0,.5);width:100%;height:100%;position:fixed;top:0;left:0;display:block;padding:12% 30%}.add1_content{width:532px;float:left;background:#fff}.actives{border:1px solid #ffb65f!important;color:#ffb65f!important}.closeMe{height:40px;line-height:40px;width:100%;text-align:right;background:#ddd;cursor:pointer}.closeMe a{margin-right:20px}.times{display:none!important;position:absolute}.text_num,.text_phone{width:358px;height:40px;border-radius:4px;border:1px solid #ccc;padding-left:8px;margin-left:18px}.cont_ul_li a{display:block;position:absolute;right:26px;top:13px;color:#2577e3}.text_btn{width:368px;height:40px;border-radius:4px;border:1px solid #ffb65f;text-align:center;background-color:#ffb65f;color:#fff;cursor:pointer;margin-left:18px;margin-bottom:20px}.phone_err,.text_err{text-align:left;font-size:12px;margin-left:18px;margin-top:5px;color:#f77d07;position:absolute}.cont_ul_li{cursor:pointer;margin:20px 0 0 63px;float:left;position:relative}.cont_ul p{float:left;margin-left:26px}.cont_ul_li:first-child{float:left}.cont_ul_li:first-child span{width:170px;float:left;line-height:40px;display:block;height:40px;border-radius:4px;border:1px solid #ccc;color:#333;font-weight:700;margin-left:21px}.cont_ul{float:left}.huo_content{float:left;text-align:center;padding-bottom:20px}.huo_content h4{font-size:22px;height:22px;line-height:22px;padding:20px}",""])},238:function(t,e,o){"use strict";o.r(e);var l=o(5),r={name:"Add",props:{isShowAdd:{type:Boolean,default:!1},dataInfo:{type:[Array,Object],default:()=>{}}},head:{link:[{rel:"stylesheet",href:"/layer3/css/layui.css"}],script:[{src:"/layer/layer.js"},{src:"/js/LLL-AFLC_API.js"}]},data:()=>({isActiveFirst:!0,dialogKey:0,getMoblie:"",ShowmobileErr:!1,Showtextnum:!1,showTitme:"",mobile:"",textnum:"",userType:"",times:60,mobileErr:"",stop:""}),asyncData:()=>Object(l.a)(function*(){})(),computed:{isShow(){return this.isShowAdd}},watch:{info(){},isShowAdd:{handler(t,e){},deep:!0}},mounted(){this.handleView()},methods:{handleView(t){this.isActiveFirst=!this.isActiveFirst,this.userType="aflc-5"===t?"aflc-5":"aflc-1"},closeMe(){this.$emit("update:isShowAdd",!1),this.reset(),clearInterval(this.stop),this.getMoblie=!1},reset(){this.mobile="",this.textnum=""},submitBtn(){var t=window.Lll_AFLC_VALID;return this.dataInfo.mobile=this.mobile,this.dataInfo.textnum=this.textnum,this.dataInfo.userType=this.userType,this.mobile?(t.MOBILE.test(this.mobile)?(this.Showtextnum=!1,this.ShowmobileErr=!1,this.numErr="",this.mobileErr=""):(this.ShowmobileErr=!0,this.mobileErr="请填写有效的手机号"),this.mobile&&this.textnum?void this.$axios.post("/28-web/companyLine/subscribe",this.dataInfo).then(t=>{200===t.data.status&&layer.msg("订阅成功"),t.data.errorInfo&&layer.msg(t.data.errorInfo)}).catch(t=>{console.log("提交捕获异常")}):(this.Showtextnum=!0,void(this.numErr="请填写验证码"))):(this.ShowmobileErr=!0,void(this.mobileErr="请填写手机号"))},phoneText(){let t=this;var e=window.Lll_AFLC_VALID;this.mobile?e.MOBILE.test(this.mobile)?(this.ShowmobileErr=!1,this.$axios.post("/aflc-common/aflcCommonSms/sendCodeSms/"+t.mobile).then(e=>{200===e.status&&(layer.msg("验证码发送成功"),this.getMoblie=!0,this.stop=t.startCount())})):(this.ShowmobileErr=!0,this.mobileErr="请填写有效的手机号"):(this.ShowmobileErr=!0,this.mobileErr="请填写手机号")},startCount(){let t=setInterval(()=>{this.times--,this.times<=0&&(clearInterval(t),this.getMoblie=!1,this.times=60)},1e3);return t}}},n=(o(223),o(1)),component=Object(n.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"wzlAdd"},[o("div",{key:t.dialogKey,ref:"ruleForm",staticClass:"add1_content"},[o("div",{staticClass:"closeMe",on:{click:function(e){return t.closeMe()}}},[o("a",[t._v("关闭")])]),t._v(" "),o("div",{staticClass:"huo_content"},[o("h4",[t._v("您要订阅的货源："),o("a",{attrs:{title:t.dataInfo.startCity+"至"+t.dataInfo.endCity}},[t._v(t._s(t.dataInfo.startCity+"至"+t.dataInfo.endCity+"货源"))])]),t._v(" "),o("ul",{staticClass:"cont_ul"},[o("li",{staticClass:"cont_ul_li"},[o("span",{class:t.isActiveFirst?"actives":"",on:{click:function(e){return t.handleView("aflc-5")}}},[t._v("我是物流公司")]),t._v(" "),o("span",{class:t.isActiveFirst?"":"actives",on:{click:function(e){return t.handleView("aflc-1")}}},[t._v("我是车主")])]),t._v(" "),o("li",{staticClass:"cont_ul_li"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"text_phone",attrs:{name:"title",required:"",autocomplete:"off","lay-verify":"required",maxlength:"11",type:"text",placeholder:"请输入手机号"},domProps:{value:t.mobile},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.done()},input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),t._v(" "),o("p",{staticClass:"phone_err"},[t._v(t._s(t.ShowmobileErr?"*"+t.mobileErr:""))])]),t._v(" "),o("li",{staticClass:"cont_ul_li"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.textnum,expression:"textnum"}],staticClass:"text_num",attrs:{type:"text",maxlength:"11",placeholder:"请输入验证码"},domProps:{value:t.textnum},on:{input:function(e){e.target.composing||(t.textnum=e.target.value)}}}),t._v(" "),o("a",{on:{click:function(e){return t.phoneText()}}},[t._v(t._s(t.getMoblie?t.times+"秒":"获取验证码"))]),t._v(" "),o("p",{staticClass:"text_err"},[t._v(t._s(t.Showtextnum?"*"+t.numErr:""))])]),t._v(" "),o("li",{staticClass:"cont_ul_li"},[o("input",{staticClass:"text_btn",attrs:{type:"text",value:"提交",readonly:""},on:{click:function(e){return t.submitBtn()}}})])]),t._v(" "),o("p",[t._v("提交成功后平台将会为您智能筛选，实时推荐即时货源")])])])])},[],!1,null,null,null);e.default=component.exports}}]);