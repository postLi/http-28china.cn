exports.ids=[66,64],exports.modules={162:function(t,e,l){t.exports=l.p+"img/f51e243.png"},173:function(t,e,l){t.exports=l.p+"img/edceea0.png"},174:function(t,e,l){var content=l(251);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=l(3).default;t.exports.__inject__=function(t){o("61c5e6ab",content,!0,t)}},210:function(t,e,l){"use strict";l.r(e);var o=l(19),n=l.n(o),r={name:"Add",components:{LllDialog:l(97).a},props:{show:{type:Boolean,default:!1},types:{type:Number,default:1}},data:()=>({popTitle:"提货派车单",falseMsg:"",form:{companyName:"",contactsName:"",msg:"",mobile:""},isCompanyName:!1,isContactsName:!1,ismobile:!1}),computed:{showDiv(t,e){return this.show}},watch:{types(t,e){}},methods:{onTIJ(){let t="";if(t="http://localhost:3000",!this.form.companyName.length)return this.ismobile=!0,this.falseMsg="请输入公司名称",!1;if(!this.form.contactsName.length)return this.ismobile=!0,this.falseMsg="请输入联系人",!1;if(!this.form.mobile.length)return this.ismobile=!0,this.falseMsg="请输入电话",!1;if(this.form.mobile&&(this.ismobile=!1,!window.AFLC_VALID.MOBILE.test(this.form.mobile)))return this.ismobile=!0,this.form.mobile="",this.falseMsg="请输入正确的电话",!1;1==this.types?(this.form.type=1,this.form.source=1):(this.form.type=2,this.form.source=2),console.log(this.form,"this.form"),n.a.post(t+"/xlapi/28-web/leavingmsg/",this.form).then(t=>{console.log(t,"ressss"),200==t.data.status&&(layer.msg("提交成功，客服稍后将会与您联系",{tiem:3e3},()=>{}),this.$emit("close"),this.form={})})},closeDialog(){this.$emit("close"),this.form={},this.ismobile=!1}}},d=l(1);var component=Object(d.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("LllDialog",{attrs:{"is-show":t.showDiv,title:t.popTitle},on:{close:t.closeDialog}},[o("div",{attrs:{slot:"header"},slot:"header"},[t._v("我要申请入驻")]),t._v(" "),o("div",{staticClass:"dialog_publish_main",attrs:{slot:"main"},slot:"main"},[o("form",{staticClass:"layui-form",staticStyle:{width:"400px"},attrs:{action:""}},[o("div",{staticClass:"layui-form-item"},[o("label",{staticClass:"layui-form-label"},[o("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("公司名称:")]),t._v(" "),o("div",{staticClass:"layui-input-block"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.companyName,expression:"form.companyName"}],staticClass:"layui-input",attrs:{maxlength:"30",type:"text",placeholder:"请输入公司名称"},domProps:{value:t.form.companyName},on:{input:function(e){e.target.composing||t.$set(t.form,"companyName",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"layui-form-item"},[o("label",{staticClass:"layui-form-label"},[o("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("联系人:")]),t._v(" "),o("div",{staticClass:"layui-input-block"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.contactsName,expression:"form.contactsName"}],staticClass:"layui-input",attrs:{maxlength:"20",type:"text",placeholder:"请输入联系人"},domProps:{value:t.form.contactsName},on:{input:function(e){e.target.composing||t.$set(t.form,"contactsName",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"layui-form-item"},[o("label",{staticClass:"layui-form-label"},[o("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("电话:")]),t._v(" "),o("div",{staticClass:"layui-input-block"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile,expression:"form.mobile"}],staticClass:"layui-input",attrs:{type:"text",placeholder:"请输入电话",maxlength:"11"},domProps:{value:t.form.mobile},on:{input:function(e){e.target.composing||t.$set(t.form,"mobile",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"layui-form-item layui-form-text"},[o("label",{staticClass:"layui-form-label"},[t._v("给我留言:")]),t._v(" "),o("div",{staticClass:"layui-input-block"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.msg,expression:"form.msg"}],staticClass:"layui-textarea",attrs:{maxlength:"100",placeholder:"请输入留言"},domProps:{value:t.form.msg},on:{input:function(e){e.target.composing||t.$set(t.form,"msg",e.target.value)}}})]),t._v(" "),t.ismobile?o("p",{staticStyle:{color:"red","text-align":"center"}},[t._v(t._s(t.falseMsg))]):t._e()])]),t._v(" "),o("div",{},[o("button",{staticStyle:{width:"290px","margin-left":"110px",padding:"10px 0",background:"#0d91e9",border:"none"},on:{click:t.onTIJ}},[t._v("立即申请")]),t._v(" "),o("p",{staticStyle:{"margin-left":"110px",height:"30px","line-height":"30px"}},[t._v("您还可以选择在线咨询："),o("a",{attrs:{href:""}},[o("img",{attrs:{src:l(94)}}),t._v("qq交谈")])])])]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"})])},[],!1,function(t){},"2eb77d0c","4702ad60");e.default=component.exports},238:function(t,e,l){t.exports=l.p+"img/07c9750.png"},239:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAQCAYAAABqfkPCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIZSURBVFhH7ZfNSxZBHMe/phCdfYkwfCICRalLCh46ePAFOhQePKTiRRQUD3VKCP8CEQ2lEPGmIBGCmEEW3kRFL15EENFInsIUgkA8pON8+c2D07KzO4KHfeD5wDC/t90vOzs7s5OnNMhxLdwwfY5rwD0zZ0eBb9PA2T8TcJBfADS0A819wOEPYKQXOP5pkhEU3gFevQeK7yZfyxP3zAwTTFUC96qMY2DN1ymxNxbDH66uxRgWrFv/InbStTxxD2ZQkLT1A62vjWORqT0/k97m4RPghb6GfZBMfdK1PPFfM8ur5Q2y0falseP/3ods0AqDa2Yo3Y+Vetun1NaaUgc7Sp2emISGNmPMsYa1ZH5c7JUFpXY3lTpKSzwDfcaZZx3rSdK1PImemb++60W7FCh9ANy8ZYIa2owxx5ogv/XmcP+RLPw29BlnPkg2aMUQPZjHaWCwS994zwQs0ruSY02QTxPAx2HjBPgwJPkg2aAVQ/ya+ecQ2FozjsX2uuRcLM8bI8DKgjFCyAatCPw2oLIK6U/+SiOZmIuUlT+y3rIdDyPpWhH4DSZ/dpdmgIFmabSL9LoSxe2U/oz2gbGXwJtn0tMvKTMFDpKuFYH7BNRbe/mflafHXJ2LHQZPC+9Wgc+TwJw+aZC4a8jzHuBpZ/K1PNF3c1DfJjcjcYI8dpHqxstdNe7hWFfTJHbStTxxz8wcV8Y9M3NcEeACNrlT/G+qQqIAAAAASUVORK5CYII="},240:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEGSURBVDhP5ZJBTsMwEEW/nYo0KaKLilN0yQKVW3AI1AVrDsEBYMMdqp6GbU9QQlKSNDjx8N2koV6WDar6pPF3Rh6P/yhKCP6A7vRo/rvQ5nCOy+oDoFZMJQynsJ9u7fEKUz1CQ43CELVtcxHDlFy02/3iTTVljLdrYAhM5wvYQYz3l3uobYlcQoyiy/Yg8ToG9f6OAGWtoeIJUon5eYXBQdEO17HHFvJFSd2+EcmMyN3js8zmb5K43AH+cJoClt6cTygOydAfLjgnHus893QXtNSFSPUtlRi5eXiV26elrCwfwu4UD6/jJuDkjKJDjYZ28yzBNTsrYznF3Tt6zu9fPYKTKQR+ACR0rL7J+wGSAAAAAElFTkSuQmCC"},241:function(t,e,l){t.exports=l.p+"img/d58c2a2.png"},242:function(t,e,l){t.exports=l.p+"img/aa544e5.png"},243:function(t,e,l){t.exports=l.p+"img/3791394.png"},244:function(t,e,l){t.exports=l.p+"img/aa544e5.png"},245:function(t,e,l){t.exports=l.p+"img/9ae4b23.png"},246:function(t,e,l){t.exports=l.p+"img/aa544e5.png"},247:function(t,e,l){t.exports=l.p+"img/06cf1d4.png"},248:function(t,e,l){t.exports=l.p+"img/c7309c6.png"},249:function(t,e,l){t.exports=l.p+"img/098551f.png"},250:function(t,e,l){"use strict";l.r(e);var o=l(174),n=l.n(o);for(var r in o)"default"!==r&&function(t){l.d(e,t,function(){return o[t]})}(r);e.default=n.a},251:function(t,e,l){(t.exports=l(2)(!1)).push([t.i,'.yuanqu .clearfix:after{content:" ";display:table}.yuanqu .clearfix:before{content:"";display:table}.yuanqu .clearfix:after{clear:both}.yuanqu .youzhi_content ul .noclass0{display:block!important;background:#e6500d}.yuanqu .youzhi_content ul .noclass1{display:block!important;background:#6669ff!important}.yuanqu .youzhi_content ul .noclass2{display:block!important;background:#3cb46d}.yuanqu .youzhi_content ul .NOclass{display:none}',""])},440:function(t,e,l){"use strict";l.r(e);l(19);async function o(t,e,l={}){let o=l;o.currentPage=e,o.pageSize=21;let n=await t.post("/28-web/logisticsPark/list",o);return 200===n.data.status?{list:n.data.data.list,pages:n.data.data.pages,currentPage:n.data.data.pageNum}:{list:[],pages:0,currentPage:1}}var n={name:"WuLiu",components:{Add:l(210).default},head:{link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/yuanqu/css/list_wlyq.css"},{rel:"stylesheet",href:"/layer/dist/css/layui.css"}],script:[{src:"./js/city-picker.data.js"},{src:"./js/city-picker.js"},{src:"/js/AFLC_API.js"},{src:"./js/jquery.pagination.min.js"}]},data:()=>({isAdd:!1,inputData:"",isMobile:!1,pages:0,currentPage:1}),async asyncData({$axios:t,app:e,query:l}){let n={parkName:l.parkName?l.parkName:"",locationProvince:l.locationProvince?l.locationProvince:e.$cookies.get("currentProvinceFullName"),locationCity:l.locationCity?l.locationCity:e.$cookies.get("currentAreaFullName"),locationArea:l.locationArea?l.locationArea:""},r=n;r.currentPage=1,r.pageSize=16;let d=await t.post("/28-web/logisticsPark/interestedList",r),c=n;c.currentPage=1,c.pageSize=14;let h=await t.post("/28-web/logisticsPark/recommendList",c),f=await o(t,1,n),x=n;x.currentPage=1,x.pageSize=5,delete x.parkName;let y=await t.post("/28-web/logisticsPark/main/recommend/list",x),m=await t.post("/28-web//logisticsPark/newest/list",x),v=n;v.pageSize=10;let _=await t.post("/28-web/logisticsPark/hot/list",v),A=await t.get("/28-web/logisticsCompany/excellent?flag=excellentRate");return console.log(A.data.data,"getExcellentList"),{getExcellentList:200===A.data.status?A.data.data:[],getHottList:200===_.data.status?_.data.data:[],getRecommendList:200===y.data.status?y.data.data.list:[],getNewestList:200===m.data.status?m.data.data.list:[],getGateWayList:f.list,pages:f.pages,currentPage:f.currentPage,getLogisticsPark:200===d.data.status?d.data.data.list:[],recommendParkList:200===h.data.status?h.data.data.list:[],vo:n}},mounted(){$("#parkAddress input").citypicker({province:this.vo.locationProvince,city:this.vo.locationCity,district:this.vo.locationArea}),$("#list_nav_a").html(this.vo.locationCity+this.vo.locationArea+"物流园区"),this.loadPagination()},methods:{addFn(){this.isAdd=!0},noaddFn(){this.isAdd=!1},openYuanqu(){if(this.inputData){var t=window.AFLC_VALID;console.log(t);let e="";e="http://localhost:3000",t.MOBILE.test(this.inputData)?(this.addFn(),alert(this.inputData)):(this.isMobile=!0,this.inputData="")}},async search1(){let t=[];$("#parkAddress .select-item").each(function(i,e){t.push($(this).text())}),this.vo.locationProvince=t[0]?t[0]:"",this.vo.locationCity=t[1]?t[1]:"",this.vo.locationArea=t[2]?t[2]:"",window.open(`/wuliu?locationProvince=${this.vo.locationProvince}&locationCity=${this.vo.locationCity}&locationArea=${this.vo.locationArea}`)},async search(){let t=[];$("#parkAddress .select-item").each(function(i,e){t.push($(this).text())}),this.vo.locationProvince=t[0]?t[0]:"",this.vo.locationCity=t[1]?t[1]:"",this.vo.locationArea=t[2]?t[2]:"",window.open(`/wuliu?locationProvince=${this.vo.locationProvince}&locationCity=${this.vo.locationCity}&locationArea=${this.vo.locationArea}&parkName=${this.vo.parkName}`)},reload(){window.location.href="/wuliu"},loadPagination(){$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:async t=>{$("#current1").text(t);let e=await o(this.$axios,t,this.vo);this.getGateWayList=e.list,this.currentPage=e.currentPage,window.location.href="#top"}})}}},r=l(1);var component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"yuanqu"},[t._ssrNode('<div class="list_box">',"</div>",[t._ssrNode('<div class="header"><a href="/wuliu/detail?id=1" target="_blank"><img'+t._ssrAttr("src",l(238))+' alt></a></div> <div class="list_nav" style="padding-top:20px"><a href="/">物流首页</a>&gt;<a id="list_nav_a" href>物流园区</a></div> '),t._ssrNode('<div class="list_left">',"</div>",[t._ssrNode('<div style=" background-color: #fff;"><div class="select_con" style="float:left;width: 900px;"><dl><dt><span style="padding-left:0">园区所在地 ：</span></dt> <dd><form name="zxaddform" method="post" action><input name="a7" type="hidden" value="0"> <input type="hidden" name="mid" value="19"> <input type="hidden" name="dopost" value="search"> <div id="parkAddress" class="fl list_input" style="position:relative;"><input data-toggle="city-picker" data-level="district" type="text" placeholder="请选择省-市-区" style="height: 100%;border: none;outline: none;"></div> <span> 园区名称 ：</span> <input type="text" placeholder="请输入园区名称"'+t._ssrAttr("value",t.vo.parkName)+' class="list_input"> <input id="search_wlyq" value=" 搜索园区 " readonly="readonly" class="list_button" style="width:100px"></form></dd></dl></div> <div><a href="/regisiter" target="_blank"><button id="yd_cx1" class="layui-btn" style="width: 252px;margin-top: 10px;border-radius: 3px;margin-left: 10px;background:#3f94ee;float:right;height:45px;line-height:45px">物流公司入驻</button></a></div></div> <div class="clearfix" style="clear: both;"><i>热门：</i> <a href="/wuliu?locationProvince=上海市&locationCity=上海市" target="_blank"><span style="padding-right:10px">上海</span></a> <a href="/wuliu?locationProvince=北京市&locationCity=北京市" target="_blank"><span style="padding-right:10px">北京</span></a> <a href="/wuliu?locationProvince=广东省&locationCity=深圳市" target="_blank"><span style="padding-right:10px">深圳</span></a> <a href="/wuliu?locationProvince=重庆市&locationCity=重庆市" target="_blank"><span style="padding-right:10px">重庆</span></a> <a href="/wuliu?locationProvince=天津市&locationCity=天津市" target="_blank"><span style="padding-right:10px">天津</span></a> <a href="/wuliu?locationProvince=江苏省&locationCity=苏州市" target="_blank"><span style="padding-right:10px">苏州</span></a> <a href="/wuliu?locationProvince=四川省&locationCity=成都市" target="_blank"><span style="padding-right:10px">成都</span></a> <a href="/wuliu?locationProvince=湖北省&locationCity=武汉市" target="_blank"><span style="padding-right:10px">武汉</span></a></div> <div class="tuijian"><div class="tuijian_title" style=" height: 50px; line-height: 50px;"><h5 style="color:rgb(196,69,76);font-size:18px;float: left;">推荐园区</h5> <a href="/wuliu" target="_blank"><span style="float:right"> 更多&gt;</span></a></div> <div class="tuijian_content"><ul>'+t._ssrList(t.getRecommendList,function(e,i){return'<li style="float:left;padding-right:20px"><a'+t._ssrAttr("href","/wuliu/detail?id="+e.id)+' target="_blank" style="position:relative"><img src="http://aflc.oss-cn-shenzhen.aliyuncs.com//tms/20181218/ryeGbJyAGatZj4DaSMFQeXDB4b5KPrdN.jpg" width="260" height="165" alt><span style="position:absolute;bottom:-74px;left:1px;background:rgba(0,0,0,0.1);color:rgb(255,255,255);    padding: 5px 0px;font-size:14px;width: 260px;text-align: center;">'+t._ssrEscape(t._s(e.parkName))+"</span> "+(1==e.isInvestment?'<span style="position:absolute;bottom:50px;left:1px;background:rgba(194,0,13,1);color:rgb(255,255,255);    padding: 10px 20px;">招商中</span>':"\x3c!----\x3e")+'</a> <p style="width: 260px;text-align: center;padding-top:10px"><span style="padding-right:10px">推荐指数</span>'+t._ssrList(1,function(e,i){return"<img"+t._ssrAttr("src",l(239))+" alt>"})+"</p></li>"})+'</ul></div></div> <div class="new" style="clear: both;"><div class="new_title" style="padding:30px 0 25px"><h5 style="color:rgb(255,255,255);font-size:18px;background:rgb(0,136,238);width:135px;padding:10px">最新动态</h5></div></div> <div><div class="ruzhu" style="width: 635px;float: left"><div class="ruzhu_title" style="padding:30px 0 25px"><h5 style="color:rgb(196,69,76);font-size:18px;float: left;">新入驻园区\n\n            </h5> <a href><span style="float:right"> 更多&gt;</span></a></div> <ul>'+t._ssrList(t.getNewestList,function(e,i){return'<li style="padding-top: 20px"><a'+t._ssrAttr("href","/wuliu/detail?id="+e.id)+' target="_blank"><img'+t._ssrAttr("src",l(240))+' alt><span style="padding: 0px 40px 0 30px;width: 100px;display: inline-block;">'+t._ssrEscape(t._s(e.parkName)+"\n                ")+'</span><span style="width: 320px;display: inline-block;"><i style="padding-right:10px">地址:</i>'+t._ssrEscape(t._s(e.parkAddress.length>13?e.parkAddress+"...":e.parkAddress))+"</span></a></li>"})+'</ul></div> <div class="zizhu" style="width: 670px;float: left;margin-left:40px"><div class="zizhu_title" style="padding:30px 0 25px"><h5 style="color:rgb(196,69,76);font-size:18px">自助服务\n            </h5></div> <div class="zizhu_content"><div><ul><li style="float:left;padding-right:20px;padding-top:10px"><a href style="width: 200px;height: 60px;background: rgb(51,153,255);display: inline-block;color: white;text-align: center;line-height: 60px;font-size: 18px;"><img'+t._ssrAttr("src",l(241))+' alt width="40" style="padding-right:20px">快速下单</a></li> <li style="float:left;padding-right:20px;padding-top:10px"><a href="/create/line" style="width: 200px;height: 60px;background: rgb(51,153,255);display: inline-block;color: white;text-align: center;line-height: 60px;font-size: 18px;"><img'+t._ssrAttr("src",l(242))+' alt width="40" style="padding-right:20px">发布专线</a></li> <li style="float:left;padding-right:20px;padding-top:10px"><a href="/create/cheyuan" style="width: 200px;height: 60px;background: rgb(51,153,255);display: inline-block;color: white;text-align: center;line-height: 60px;font-size: 18px;"><img'+t._ssrAttr("src",l(243))+' alt width="40" style="padding-right:20px">发布车源</a></li> <li style="float:left;padding-right:20px;padding-top:10px"><a href style="width: 200px;height: 60px;background: rgb(51,153,255);display: inline-block;color: white;text-align: center;line-height: 60px;font-size: 18px;"><img'+t._ssrAttr("src",l(244))+' alt width="40" style="padding-right:20px">运单查询</a></li> <li style="float:left;padding-right:20px;padding-top:10px"><a href style="width: 200px;height: 60px;background: rgb(51,153,255);display: inline-block;color: white;text-align: center;line-height: 60px;font-size: 18px;"><img'+t._ssrAttr("src",l(245))+' alt width="40" style="padding-right:20px">时效查询</a></li> <li style="float:left;padding-right:20px;padding-top:10px;margin-bottom:10px"><a href style="width: 200px;height: 60px;background: rgb(51,153,255);display: inline-block;color: white;text-align: center;line-height: 60px;font-size: 18px;"><img'+t._ssrAttr("src",l(246))+' alt width="40" style="padding-right:20px">网点查询</a></li></ul></div> <div class="zizhu_bot" style="border:1px solid #ccc;width:660px;height:150px;clear: both;margin-top:20px"><div><div class="layui-input-inline " style="margin: 30px 20px 10px 20px;    float: left;"><input type="text" maxlength="11" placeholder="输入您的手机号"'+t._ssrAttr("value",t.inputData)+' style=" height: 38px;line-height: 1.3;line-height: 38px;border-width: 1px;border-style: solid;background-color: #fff;border-radius: 2px;padding-left: 10px;border-color: #D2D2D2;"> <span style="width: 90px;height: 38px;line-height: 38px;text-align: center;background: rgb(51,153,255) ;display: inline-block;color:#fff">园区入驻</span> '+(t.isMobile?'<p style="color:red;padding-top:5px">请输入正确手机号</p>':"\x3c!----\x3e")+' <p style="padding-top: 10px">入驻免费提供发布信息，园区宣传</p></div> <div class="zizhu_bot_r" style="display: inline-block;margin:20px;background:rgb(242,242,242)"><img'+t._ssrAttr("src",l(173))+' alt style="width: 90px;height: 80px;float:left"> <p style="width: 150px;float:left;padding-left: 10px"><a href="http://h5.28tms.com/" target="_blank">下载<i style="color:rgb(0,102,255)">【28快运APP】</i>，随时随地查看专线，在线下单推荐优质承运商，便捷查询运单</a></p></div></div></div></div></div></div> <div class="hot" style="clear: both;"><div class="hot_title" style="padding:30px 0 25px 0"><h5 style="color:rgb(196,69,76);font-size:18px;float: left;">热门园区</h5> <span style="padding-left:30px;"><i style="color:rgb(249,155,42)">1365</i>个园区，为您优选10个热门园区</span> <a href="/wuliu" target="_blank"><span style="float:right"> 更多&gt;</span></a></div> <div class="select_con" style="width: 900px;    width: 900px;border: 1px solid #eee;border-left: 0;border-right: 0;border-bottom: none;padding: 15px 0;margin: 0;"><dl><dd><form name="zxaddform" method="post" action><input name="a7" type="hidden" value="0"> <input type="hidden" name="mid" value="19"> <input type="hidden" name="dopost" value="search"> <div id="parkAddress" class="fl list_input" style="position:relative;"><input data-toggle="city-picker" data-level="district" type="text" placeholder="请选择园区所在地" style="height: 100%;border: none;outline: none;"></div> <input id="search_wlyq" value=" 搜索园区 " readonly="readonly" class="list_button" style="width:100px"></form></dd></dl></div></div> '),t._ssrNode('<div class=" list_wlyq">',"</div>",[t._ssrNode((0===t.getHottList.length||null==t.getHottList.list?'<div class="list_none" style="display: block"><span>暂时没有找到您要查询的信息，可以看看其他园区哦</span> <img'+t._ssrAttr("src",l(85))+"></div>":"\x3c!----\x3e")+" "),t._l(t.getHottList.list,function(e,n){return t._ssrNode('<ul class="wlzx_list" style="margin-right: 0px;width:260px;height:360px;margin-top: 0px;">',"</ul>",[t._ssrNode("<a"+t._ssrAttr("href","/wuliu/detail?id="+e.id)+' target="_blank">',"</a>",[t._ssrNode('<li class="wlzx_list_01" style="height: 200px;"><img'+t._ssrAttr("src",e.parkSignPicture?e.parkSignPicture:l(247))+' width="240" height="210" class="scrollLoading"></li> <li class="wlzx_list_02"><span>'+t._ssrEscape(t._s(e.parkName))+"</span></li> "),t._ssrNode('<li class="wlzx_list_03">',"</li>",[t._ssrNode("<span>","</span>",[o("font",{staticStyle:{"padding-left":"0px"}},[t._v(t._s(e.transportNumber?e.transportNumber:0))]),t._ssrNode('<i>条</i><span style="padding-left: 2px;">优质专线</span>')],2),t._ssrNode(" "),t._ssrNode("<span>","</span>",[o("font",{staticStyle:{"padding-left":"0px"}},[t._v(t._s(e.netWorkNumber?e.netWorkNumber:0))]),t._ssrNode('<i></i><span style="padding-left: 2px;">家物流网点</span>')],2)],2),t._ssrNode(' <li class="wlzx_list_04" style="margin-bottom:0"><span>'+t._ssrEscape(t._s(e.parkAddress))+'</span></li> <li class="wlzx_list_05"><img'+t._ssrAttr("src",l(248))+' alt style="width:20px;height:20"> <span style="vertical-align:middle;pading-left:5px">'+t._ssrEscape(t._s(e.browseNumber))+"</span></li>")],2)])})],2),t._ssrNode(" <img"+t._ssrAttr("src",l(162))+' style="margin-top:20px"> <div class="youzhi" style="clear: both;"><div class="youzhi_title" style="padding:30px 0 25px 0"><h5 style="color:rgb(196,69,76);font-size:18px;float: left;">本月优质承运</h5> <span style="padding-left:30px;">货主说好才是真的好</span> <a href="/gongsi" target="_blank"><span style="float:right"> 所有物流企业&gt;</span></a></div> <div class="youzhi_content"><ul>'+t._ssrList(t.getExcellentList,function(e,i){return'<li style="float:left;padding-right:20px"><a'+t._ssrAttr("href","/gongsi?id="+e.id)+' target="_blank" style="position:relative"><img src="http://aflc.oss-cn-shenzhen.aliyuncs.com//tms/20181218/ryeGbJyAGatZj4DaSMFQeXDB4b5KPrdN.jpg" width="260" height="165" alt> <span'+t._ssrClass("NOclass","noclass"+i)+' style="position:absolute;bottom:40px;left:5px;color:rgb(255,255,255);    padding: 5px 20px;border-radius:5px">'+t._ssrEscape("NO"+t._s(i+1))+'</span></a> <p style="width: 260px;padding-top:10px;color: rgb(51,153,255);font-size:16px">'+t._ssrEscape(t._s(e.companyName))+'</p> <p style="width: 260px;padding-top:10px"><span style="padding-right:10px">'+t._ssrEscape("推荐指数"+t._s(i+1))+"</span>"+t._ssrList(4,function(e,i){return"<img"+t._ssrAttr("src",l(249))+" alt>"})+'</p> <p style="width: 260px;padding-top:10px">'+t._ssrEscape("好评率"+t._s(e.excellentRate)+"%\n\n            ")+"</p></li>"})+'</ul></div></div> <div><div class="zixun_l" style="width: 670px;float: left"><div class="zixuntitle" style="padding:30px 0 25px;margin-bottom:10px"><h5 style="color:rgb(196,69,76);font-size:18px;float: left;">行业资讯\n            </h5> <a href="/zixun" target="_blank"><span style="float:right"> 更多&gt;&gt;</span></a></div> <div class="zixun_content" style="position:relative"><a href="/zixun" target="_blank"><img'+t._ssrAttr("src",l(173))+' style="width:280px;height:170px;float:left"><span style=" position: absolute;bottom: -170px;left: 1px; background: rgba(0, 0, 0, 0.3);color: rgb(255, 255, 255);padding: 10px 14px;">瑞幸融资估值翻倍，背后是同城物流的...</span></a> <ul style="float:left">'+t._ssrList(5,function(t,i){return'<li style="padding-top:15px"><p><span style="padding-left:20px">瑞幸融资估值翻倍，背后是同城物流的...</span><span style="padding-left:30px">2019-02-19</span></p></li>'})+'</ul></div></div> <div class="zixun_r" style="width: 670px;float: left;margin-left:40px"><div class="zixun_title" style="padding:30px 0 25px;margin-bottom:10px"><h5 style="color:rgb(196,69,76);font-size:18px;    float: left;">仓储与配送\n            </h5> <a href><span style="float:right"> 更多&gt;&gt;</span></a></div> <div class="zixun_content" style="position:relative"><a href><img'+t._ssrAttr("src",l(173))+' style="width:280px;height:170px;float:left"><span style=" position: absolute;bottom: -170px;left: 1px; background: rgba(0, 0, 0, 0.3);color: rgb(255, 255, 255);padding: 10px 14px;">瑞幸融资估值翻倍，背后是同城物流的...</span></a> <ul style="float:left">'+t._ssrList(5,function(t,i){return'<li style="padding-top:15px"><p><span style="padding-left:20px">瑞幸融资估值翻倍，背后是同城物流的...</span><span style="padding-left:30px">2019-02-19</span></p></li>'})+"</ul></div></div></div> "),t._ssrNode('<div class="getyouzhi" style="clear: both;    text-align: center;padding-top: 100px;font-size:28px;color:rgb(60,180,69);font-width:bloth;">',"</div>",[t._ssrNode("<span>快速成为承运商获取优质货源</span> "),t._ssrNode('<a href="/regisiter" target="_blank">',"</a>",[o("buttom",{staticStyle:{width:"180px",color:"white",background:"rgb(60,180,69)",height:"50px","line-height":"50px","text-align":"center","border-radius":"5px",display:"inline-block","margin-left":"50px",cursor:"pointer"}},[t._v("我要入驻")])],1)],2)],2)],2),t._ssrNode(" "),o("Add",{attrs:{show:t.isAdd},on:{close:t.noaddFn}})],2)},[],!1,function(t){var e=l(250);e.__inject__&&e.__inject__(t)},null,"7380e17e");e.default=component.exports},83:function(t,e,l){var content=l(96);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=l(3).default;t.exports.__inject__=function(t){o("4b3ea2f6",content,!0,t)}},85:function(t,e,l){t.exports=l.p+"img/58a2773.png"},94:function(t,e,l){t.exports=l.p+"img/017cd2b.gif"},95:function(t,e,l){"use strict";l.r(e);var o=l(83),n=l.n(o);for(var r in o)"default"!==r&&function(t){l.d(e,t,function(){return o[t]})}(r);e.default=n.a},96:function(t,e,l){(t.exports=l(2)(!1)).push([t.i,".dialog{position:relative;color:#2e2c2d;font-size:16px}.dialog .dialog-cover{background:rgba(0,0,0,.5);position:fixed;z-index:200;top:0;left:0;width:100%;height:100%}.dialog .dialog-content{position:fixed;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:546px;box-shadow:-2px 0 8px 0 hsla(0,0%,66.3%,.35);border-radius:5px;z-index:300;background:#fff}.dialog .dialog_head .dialog_tit{display:inline-block;width:89%;padding:10px;text-align:center;color:#666;font-size:18px}.dialog .dialog_main{padding:10px;display:inline-block;font-size:14px}",""])},97:function(t,e,l){"use strict";var o={props:{isShow:{type:Boolean,default:!1,required:!0},title:{type:String,default:"标题"},widNum:{type:Number,default:86.5},leftSite:{type:Number,default:6.5},topDistance:{type:Number,default:35},pdt:{type:Number,default:22},pdb:{type:Number,default:47}},computed:{showdiv(t){return this.isShow}},methods:{closeMyself(){this.$emit("close")}}},n=l(1);var component=Object(n.a)(o,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"dialog"},[t._ssrNode((t.showdiv?'<div class="dialog-cover back"></div>':"\x3c!----\x3e")+" "),l("transition",{attrs:{name:"drop"}},[t.showdiv?l("div",{staticClass:"dialog-content"},[l("div",{staticClass:"dialog_head back"},[l("div",{staticClass:"dialog_tit",staticStyle:{float:"left"}},[t._t("header",[t._v(t._s(t.title))])],2),t._v(" "),l("div",{staticClass:"layui-btn-group",staticStyle:{float:"right"},on:{click:t.closeMyself}},[l("button",{staticStyle:{background:"#fff",border:"none",cursor:"pointer"},attrs:{type:"text"}},[l("i",{staticClass:"layui-icon layui-icon-close",staticStyle:{"font-size":"30px",color:"#1E9FFF"}})])])]),t._v(" "),l("div",{staticClass:"dialog_main"},[t._t("main",[t._v("内容")])],2),t._v(" "),l("div",{staticClass:"dialog_footer"},[t._t("footer",[t._v("底部")])],2)]):t._e()])],2)},[],!1,function(t){var e=l(95);e.__inject__&&e.__inject__(t)},null,"5e3d0cec");e.a=component.exports}};
//# sourceMappingURL=a31c9fee06b166980111.js.map