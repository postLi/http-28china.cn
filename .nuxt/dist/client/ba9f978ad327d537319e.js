(window.webpackJsonp=window.webpackJsonp||[]).push([[67,65],{163:function(t,e,l){var content=l(176);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(12).default)("4b3ea2f6",content,!0,{sourceMap:!1})},165:function(t,e,l){t.exports=l.p+"img/58a2773.png"},174:function(t,e,l){t.exports=l.p+"img/017cd2b.gif"},175:function(t,e,l){"use strict";var n=l(163);l.n(n).a},176:function(t,e,l){(t.exports=l(11)(!1)).push([t.i,".dialog{position:relative;color:#2e2c2d;font-size:16px}.dialog .dialog-cover{background:rgba(0,0,0,.5);position:fixed;z-index:200;top:0;left:0;width:100%;height:100%}.dialog .dialog-content{position:fixed;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:546px;box-shadow:-2px 0 8px 0 hsla(0,0%,66.3%,.35);border-radius:5px;z-index:300;background:#fff}.dialog .dialog_head .dialog_tit{display:inline-block;width:89%;padding:10px;text-align:center;color:#666;font-size:18px}.dialog .dialog_main{padding:10px;display:inline-block;font-size:14px}",""])},177:function(t,e,l){"use strict";var n={props:{isShow:{type:Boolean,default:!1,required:!0},title:{type:String,default:"标题"},widNum:{type:Number,default:86.5},leftSite:{type:Number,default:6.5},topDistance:{type:Number,default:35},pdt:{type:Number,default:22},pdb:{type:Number,default:47}},computed:{showdiv(t){return this.isShow}},methods:{closeMyself(){this.$emit("close")}}},o=(l(175),l(1)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"dialog"},[t.showdiv?l("div",{staticClass:"dialog-cover back",on:{click:t.closeMyself}}):t._e(),t._v(" "),l("transition",{attrs:{name:"drop"}},[t.showdiv?l("div",{staticClass:"dialog-content"},[l("div",{staticClass:"dialog_head back"},[l("div",{staticClass:"dialog_tit",staticStyle:{float:"left"}},[t._t("header",[t._v(t._s(t.title))])],2),t._v(" "),l("div",{staticClass:"layui-btn-group",staticStyle:{float:"right"},on:{click:t.closeMyself}},[l("button",{staticStyle:{background:"#fff",border:"none",cursor:"pointer"},attrs:{type:"text"}},[l("i",{staticClass:"layui-icon layui-icon-close",staticStyle:{"font-size":"30px",color:"#1E9FFF"}})])])]),t._v(" "),l("div",{staticClass:"dialog_main"},[t._t("main",[t._v("内容")])],2),t._v(" "),l("div",{staticClass:"dialog_footer"},[t._t("footer",[t._v("底部")])],2)]):t._e()])],1)},[],!1,null,null,null);e.a=component.exports},243:function(t,e,l){t.exports=l.p+"img/f51e243.png"},254:function(t,e,l){t.exports=l.p+"img/edceea0.png"},255:function(t,e,l){var content=l(332);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(12).default)("61c5e6ab",content,!0,{sourceMap:!1})},292:function(t,e,l){"use strict";l.r(e);var n=l(53),o=l.n(n),r={name:"Add",components:{LllDialog:l(177).a},props:{show:{type:Boolean,default:!1},types:{type:Number,default:1}},data:()=>({popTitle:"提货派车单",falseMsg:"",form:{companyName:"",contactsName:"",msg:"",mobile:""},isCompanyName:!1,isContactsName:!1,ismobile:!1}),computed:{showDiv(t,e){return this.show}},watch:{types(t,e){}},methods:{onTIJ(){if(!this.form.companyName.length)return this.ismobile=!0,this.falseMsg="请输入公司名称",!1;if(!this.form.contactsName.length)return this.ismobile=!0,this.falseMsg="请输入联系人",!1;if(!this.form.mobile.length)return this.ismobile=!0,this.falseMsg="请输入电话",!1;if(this.form.mobile&&(this.ismobile=!1,!window.AFLC_VALID.MOBILE.test(this.form.mobile)))return this.ismobile=!0,this.form.mobile="",this.falseMsg="请输入正确的电话",!1;1==this.types?(this.form.type=1,this.form.source=1):(this.form.type=2,this.form.source=2),console.log(this.form,"this.form"),o.a.post("/xlapi/28-web/leavingmsg/",this.form).then(t=>{console.log(t,"ressss"),200==t.data.status&&(layer.msg("提交成功，客服稍后将会与您联系",{tiem:3e3},()=>{}),this.$emit("close"),this.form={})})},closeDialog(){this.$emit("close"),this.form={},this.ismobile=!1}}},c=l(1),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("LllDialog",{attrs:{"is-show":t.showDiv,title:t.popTitle},on:{close:t.closeDialog}},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("我要申请入驻")]),t._v(" "),n("div",{staticClass:"dialog_publish_main",attrs:{slot:"main"},slot:"main"},[n("form",{staticClass:"layui-form",staticStyle:{width:"400px"},attrs:{action:""}},[n("div",{staticClass:"layui-form-item"},[n("label",{staticClass:"layui-form-label"},[n("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("公司名称:")]),t._v(" "),n("div",{staticClass:"layui-input-block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.companyName,expression:"form.companyName"}],staticClass:"layui-input",attrs:{maxlength:"30",type:"text",placeholder:"请输入公司名称"},domProps:{value:t.form.companyName},on:{input:function(e){e.target.composing||t.$set(t.form,"companyName",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"layui-form-item"},[n("label",{staticClass:"layui-form-label"},[n("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("联系人:")]),t._v(" "),n("div",{staticClass:"layui-input-block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.contactsName,expression:"form.contactsName"}],staticClass:"layui-input",attrs:{maxlength:"20",type:"text",placeholder:"请输入联系人"},domProps:{value:t.form.contactsName},on:{input:function(e){e.target.composing||t.$set(t.form,"contactsName",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"layui-form-item"},[n("label",{staticClass:"layui-form-label"},[n("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("电话:")]),t._v(" "),n("div",{staticClass:"layui-input-block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile,expression:"form.mobile"}],staticClass:"layui-input",attrs:{type:"text",placeholder:"请输入电话",maxlength:"11"},domProps:{value:t.form.mobile},on:{input:function(e){e.target.composing||t.$set(t.form,"mobile",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"layui-form-item layui-form-text"},[n("label",{staticClass:"layui-form-label"},[t._v("给我留言:")]),t._v(" "),n("div",{staticClass:"layui-input-block"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.msg,expression:"form.msg"}],staticClass:"layui-textarea",attrs:{maxlength:"100",placeholder:"请输入留言"},domProps:{value:t.form.msg},on:{input:function(e){e.target.composing||t.$set(t.form,"msg",e.target.value)}}})]),t._v(" "),t.ismobile?n("p",{staticStyle:{color:"red","text-align":"center"}},[t._v(t._s(t.falseMsg))]):t._e()])]),t._v(" "),n("div",{},[n("button",{staticStyle:{width:"290px","margin-left":"110px",padding:"10px 0",background:"#0d91e9",border:"none"},on:{click:t.onTIJ}},[t._v("立即申请")]),t._v(" "),n("p",{staticStyle:{"margin-left":"110px",height:"30px","line-height":"30px"}},[t._v("您还可以选择在线咨询："),n("a",{attrs:{href:""}},[n("img",{attrs:{src:l(174)}}),t._v("qq交谈")])])])]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"})])},[],!1,null,"2eb77d0c",null);e.default=component.exports},319:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAQCAYAAABqfkPCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIZSURBVFhH7ZfNSxZBHMe/phCdfYkwfCICRalLCh46ePAFOhQePKTiRRQUD3VKCP8CEQ2lEPGmIBGCmEEW3kRFL15EENFInsIUgkA8pON8+c2D07KzO4KHfeD5wDC/t90vOzs7s5OnNMhxLdwwfY5rwD0zZ0eBb9PA2T8TcJBfADS0A819wOEPYKQXOP5pkhEU3gFevQeK7yZfyxP3zAwTTFUC96qMY2DN1ymxNxbDH66uxRgWrFv/InbStTxxD2ZQkLT1A62vjWORqT0/k97m4RPghb6GfZBMfdK1PPFfM8ur5Q2y0falseP/3ods0AqDa2Yo3Y+Vetun1NaaUgc7Sp2emISGNmPMsYa1ZH5c7JUFpXY3lTpKSzwDfcaZZx3rSdK1PImemb++60W7FCh9ANy8ZYIa2owxx5ogv/XmcP+RLPw29BlnPkg2aMUQPZjHaWCwS994zwQs0ruSY02QTxPAx2HjBPgwJPkg2aAVQ/ya+ecQ2FozjsX2uuRcLM8bI8DKgjFCyAatCPw2oLIK6U/+SiOZmIuUlT+y3rIdDyPpWhH4DSZ/dpdmgIFmabSL9LoSxe2U/oz2gbGXwJtn0tMvKTMFDpKuFYH7BNRbe/mflafHXJ2LHQZPC+9Wgc+TwJw+aZC4a8jzHuBpZ/K1PNF3c1DfJjcjcYI8dpHqxstdNe7hWFfTJHbStTxxz8wcV8Y9M3NcEeACNrlT/G+qQqIAAAAASUVORK5CYII="},320:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEGSURBVDhP5ZJBTsMwEEW/nYo0KaKLilN0yQKVW3AI1AVrDsEBYMMdqp6GbU9QQlKSNDjx8N2koV6WDar6pPF3Rh6P/yhKCP6A7vRo/rvQ5nCOy+oDoFZMJQynsJ9u7fEKUz1CQ43CELVtcxHDlFy02/3iTTVljLdrYAhM5wvYQYz3l3uobYlcQoyiy/Yg8ToG9f6OAGWtoeIJUon5eYXBQdEO17HHFvJFSd2+EcmMyN3js8zmb5K43AH+cJoClt6cTygOydAfLjgnHus893QXtNSFSPUtlRi5eXiV26elrCwfwu4UD6/jJuDkjKJDjYZ28yzBNTsrYznF3Tt6zu9fPYKTKQR+ACR0rL7J+wGSAAAAAElFTkSuQmCC"},321:function(t,e,l){t.exports=l.p+"img/06cf1d4.png"},322:function(t,e,l){t.exports=l.p+"img/c7309c6.png"},323:function(t,e,l){t.exports=l.p+"img/098551f.png"},324:function(t,e,l){t.exports=l.p+"img/07c9750.png"},325:function(t,e,l){t.exports=l.p+"img/d58c2a2.png"},326:function(t,e,l){t.exports=l.p+"img/aa544e5.png"},327:function(t,e,l){t.exports=l.p+"img/3791394.png"},328:function(t,e,l){t.exports=l.p+"img/aa544e5.png"},329:function(t,e,l){t.exports=l.p+"img/9ae4b23.png"},330:function(t,e,l){t.exports=l.p+"img/aa544e5.png"},331:function(t,e,l){"use strict";var n=l(255);l.n(n).a},332:function(t,e,l){(t.exports=l(11)(!1)).push([t.i,'.yuanqu .clearfix:after{content:" ";display:table}.yuanqu .clearfix:before{content:"";display:table}.yuanqu .clearfix:after{clear:both}.yuanqu .youzhi_content ul .noclass0{display:block!important;background:#e6500d}.yuanqu .youzhi_content ul .noclass1{display:block!important;background:#6669ff!important}.yuanqu .youzhi_content ul .noclass2{display:block!important;background:#3cb46d}.yuanqu .youzhi_content ul .NOclass{display:none}',""])},522:function(t,e,l){"use strict";l.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("a",{attrs:{href:"/wuliu/detail?id=1",target:"_blank"}},[e("img",{attrs:{src:l(324),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list_nav",staticStyle:{"padding-top":"20px"}},[e("a",{attrs:{href:"/"}},[this._v("物流首页")]),this._v(">"),e("a",{attrs:{id:"list_nav_a",href:""}},[this._v("物流园区")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("span",{staticStyle:{"padding-left":"0"}},[this._v("园区所在地 ：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"parkAddress"}},[e("input",{staticStyle:{height:"100%",border:"none",outline:"none"},attrs:{"data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请选择省-市-区"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"/regisiter",target:"_blank"}},[e("button",{staticClass:"layui-btn",staticStyle:{width:"252px","margin-top":"10px","border-radius":"3px","margin-left":"10px",background:"#3f94ee",float:"right",height:"45px","line-height":"45px"},attrs:{id:"yd_cx1"}},[this._v("物流公司入驻")])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"clearfix",staticStyle:{clear:"both"}},[l("i",[t._v("热门：")]),t._v(" "),l("a",{attrs:{href:"/wuliu?locationProvince=上海市&locationCity=上海市",target:"_blank"}},[l("span",{staticStyle:{"padding-right":"10px"}},[t._v("上海")])]),t._v(" "),l("a",{attrs:{href:"/wuliu?locationProvince=北京市&locationCity=北京市",target:"_blank"}},[l("span",{staticStyle:{"padding-right":"10px"}},[t._v("北京")])]),t._v(" "),l("a",{attrs:{href:"/wuliu?locationProvince=广东省&locationCity=深圳市",target:"_blank"}},[l("span",{staticStyle:{"padding-right":"10px"}},[t._v("深圳")])]),t._v(" "),l("a",{attrs:{href:"/wuliu?locationProvince=重庆市&locationCity=重庆市",target:"_blank"}},[l("span",{staticStyle:{"padding-right":"10px"}},[t._v("重庆")])]),t._v(" "),l("a",{attrs:{href:"/wuliu?locationProvince=天津市&locationCity=天津市",target:"_blank"}},[l("span",{staticStyle:{"padding-right":"10px"}},[t._v("天津")])]),t._v(" "),l("a",{attrs:{href:"/wuliu?locationProvince=江苏省&locationCity=苏州市",target:"_blank"}},[l("span",{staticStyle:{"padding-right":"10px"}},[t._v("苏州")])]),t._v(" "),l("a",{attrs:{href:"/wuliu?locationProvince=四川省&locationCity=成都市",target:"_blank"}},[l("span",{staticStyle:{"padding-right":"10px"}},[t._v("成都")])]),t._v(" "),l("a",{attrs:{href:"/wuliu?locationProvince=湖北省&locationCity=武汉市",target:"_blank"}},[l("span",{staticStyle:{"padding-right":"10px"}},[t._v("武汉")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tuijian_title",staticStyle:{height:"50px","line-height":"50px"}},[e("h5",{staticStyle:{color:"rgb(196,69,76)","font-size":"18px",float:"left"}},[this._v("推荐园区")]),this._v(" "),e("a",{attrs:{href:"/wuliu",target:"_blank"}},[e("span",{staticStyle:{float:"right"}},[this._v(" 更多>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"new",staticStyle:{clear:"both"}},[e("div",{staticClass:"new_title",staticStyle:{padding:"30px 0 25px"}},[e("h5",{staticStyle:{color:"rgb(255,255,255)","font-size":"18px",background:"rgb(0,136,238)",width:"135px",padding:"10px"}},[this._v("最新动态")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ruzhu_title",staticStyle:{padding:"30px 0 25px"}},[e("h5",{staticStyle:{color:"rgb(196,69,76)","font-size":"18px",float:"left"}},[this._v("新入驻园区\n\n            ")]),this._v(" "),e("a",{attrs:{href:""}},[e("span",{staticStyle:{float:"right"}},[this._v(" 更多>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zizhu_title",staticStyle:{padding:"30px 0 25px"}},[e("h5",{staticStyle:{color:"rgb(196,69,76)","font-size":"18px"}},[this._v("自助服务\n            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",[n("li",{staticStyle:{float:"left","padding-right":"20px","padding-top":"10px"}},[n("a",{staticStyle:{width:"200px",height:"60px",background:"rgb(51,153,255)",display:"inline-block",color:"white","text-align":"center","line-height":"60px","font-size":"18px"},attrs:{href:""}},[n("img",{staticStyle:{"padding-right":"20px"},attrs:{src:l(325),alt:"",width:"40"}}),t._v("快速下单")])]),t._v(" "),n("li",{staticStyle:{float:"left","padding-right":"20px","padding-top":"10px"}},[n("a",{staticStyle:{width:"200px",height:"60px",background:"rgb(51,153,255)",display:"inline-block",color:"white","text-align":"center","line-height":"60px","font-size":"18px"},attrs:{href:"/create/line"}},[n("img",{staticStyle:{"padding-right":"20px"},attrs:{src:l(326),alt:"",width:"40"}}),t._v("发布专线")])]),t._v(" "),n("li",{staticStyle:{float:"left","padding-right":"20px","padding-top":"10px"}},[n("a",{staticStyle:{width:"200px",height:"60px",background:"rgb(51,153,255)",display:"inline-block",color:"white","text-align":"center","line-height":"60px","font-size":"18px"},attrs:{href:"/create/cheyuan"}},[n("img",{staticStyle:{"padding-right":"20px"},attrs:{src:l(327),alt:"",width:"40"}}),t._v("发布车源")])]),t._v(" "),n("li",{staticStyle:{float:"left","padding-right":"20px","padding-top":"10px"}},[n("a",{staticStyle:{width:"200px",height:"60px",background:"rgb(51,153,255)",display:"inline-block",color:"white","text-align":"center","line-height":"60px","font-size":"18px"},attrs:{href:""}},[n("img",{staticStyle:{"padding-right":"20px"},attrs:{src:l(328),alt:"",width:"40"}}),t._v("运单查询")])]),t._v(" "),n("li",{staticStyle:{float:"left","padding-right":"20px","padding-top":"10px"}},[n("a",{staticStyle:{width:"200px",height:"60px",background:"rgb(51,153,255)",display:"inline-block",color:"white","text-align":"center","line-height":"60px","font-size":"18px"},attrs:{href:""}},[n("img",{staticStyle:{"padding-right":"20px"},attrs:{src:l(329),alt:"",width:"40"}}),t._v("时效查询")])]),t._v(" "),n("li",{staticStyle:{float:"left","padding-right":"20px","padding-top":"10px","margin-bottom":"10px"}},[n("a",{staticStyle:{width:"200px",height:"60px",background:"rgb(51,153,255)",display:"inline-block",color:"white","text-align":"center","line-height":"60px","font-size":"18px"},attrs:{href:""}},[n("img",{staticStyle:{"padding-right":"20px"},attrs:{src:l(330),alt:"",width:"40"}}),t._v("网点查询")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zizhu_bot_r",staticStyle:{display:"inline-block",margin:"20px",background:"rgb(242,242,242)"}},[e("img",{staticStyle:{width:"90px",height:"80px",float:"left"},attrs:{src:l(254),alt:""}}),this._v(" "),e("p",{staticStyle:{width:"150px",float:"left","padding-left":"10px"}},[e("a",{attrs:{href:"http://h5.28tms.com/",target:"_blank"}},[this._v("下载"),e("i",{staticStyle:{color:"rgb(0,102,255)"}},[this._v("【28快运APP】")]),this._v("，随时随地查看专线，在线下单推荐优质承运商，便捷查询运单")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hot_title",staticStyle:{padding:"30px 0 25px 0"}},[e("h5",{staticStyle:{color:"rgb(196,69,76)","font-size":"18px",float:"left"}},[this._v("热门园区")]),this._v(" "),e("span",{staticStyle:{"padding-left":"30px"}},[e("i",{staticStyle:{color:"rgb(249,155,42)"}},[this._v("1365")]),this._v("个园区，为您优选10个热门园区")]),this._v(" "),e("a",{attrs:{href:"/wuliu",target:"_blank"}},[e("span",{staticStyle:{float:"right"}},[this._v(" 更多>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"parkAddress"}},[e("input",{staticStyle:{height:"100%",border:"none",outline:"none"},attrs:{"data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请选择园区所在地"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"youzhi_title",staticStyle:{padding:"30px 0 25px 0"}},[e("h5",{staticStyle:{color:"rgb(196,69,76)","font-size":"18px",float:"left"}},[this._v("本月优质承运")]),this._v(" "),e("span",{staticStyle:{"padding-left":"30px"}},[this._v("货主说好才是真的好")]),this._v(" "),e("a",{attrs:{href:"/gongsi",target:"_blank"}},[e("span",{staticStyle:{float:"right"}},[this._v(" 所有物流企业>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zixuntitle",staticStyle:{padding:"30px 0 25px","margin-bottom":"10px"}},[e("h5",{staticStyle:{color:"rgb(196,69,76)","font-size":"18px",float:"left"}},[this._v("行业资讯\n            ")]),this._v(" "),e("a",{attrs:{href:"/zixun",target:"_blank"}},[e("span",{staticStyle:{float:"right"}},[this._v(" 更多>>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/zixun",target:"_blank"}},[e("img",{staticStyle:{width:"280px",height:"170px",float:"left"},attrs:{src:l(254)}}),e("span",{staticStyle:{position:"absolute",bottom:"-170px",left:"1px",background:"rgba(0, 0, 0, 0.3)",color:"rgb(255, 255, 255)",padding:"10px 14px"}},[this._v("瑞幸融资估值翻倍，背后是同城物流的...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",{staticStyle:{"padding-left":"20px"}},[this._v("瑞幸融资估值翻倍，背后是同城物流的...")]),e("span",{staticStyle:{"padding-left":"30px"}},[this._v("2019-02-19")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zixun_title",staticStyle:{padding:"30px 0 25px","margin-bottom":"10px"}},[e("h5",{staticStyle:{color:"rgb(196,69,76)","font-size":"18px",float:"left"}},[this._v("仓储与配送\n            ")]),this._v(" "),e("a",{attrs:{href:""}},[e("span",{staticStyle:{float:"right"}},[this._v(" 更多>>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:""}},[e("img",{staticStyle:{width:"280px",height:"170px",float:"left"},attrs:{src:l(254)}}),e("span",{staticStyle:{position:"absolute",bottom:"-170px",left:"1px",background:"rgba(0, 0, 0, 0.3)",color:"rgb(255, 255, 255)",padding:"10px 14px"}},[this._v("瑞幸融资估值翻倍，背后是同城物流的...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",{staticStyle:{"padding-left":"20px"}},[this._v("瑞幸融资估值翻倍，背后是同城物流的...")]),e("span",{staticStyle:{"padding-left":"30px"}},[this._v("2019-02-19")])])}],o=l(4);l(53);function r(t,e){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(function*(t,e){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};l.currentPage=e,l.pageSize=21;let n=yield t.post("/28-web/logisticsPark/list",l);return 200===n.data.status?{list:n.data.data.list,pages:n.data.data.pages,currentPage:n.data.data.pageNum}:{list:[],pages:0,currentPage:1}})).apply(this,arguments)}var d={name:"WuLiu",components:{Add:l(292).default},head:{link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/yuanqu/css/list_wlyq.css"},{rel:"stylesheet",href:"/layer/dist/css/layui.css"}],script:[{src:"./js/city-picker.data.js"},{src:"./js/city-picker.js"},{src:"/js/AFLC_API.js"},{src:"./js/jquery.pagination.min.js"}]},data:()=>({isAdd:!1,inputData:"",isMobile:!1,pages:0,currentPage:1}),asyncData:t=>Object(o.a)(function*(){let e=t.$axios,l=t.app,n=t.query,o={parkName:n.parkName?n.parkName:"",locationProvince:n.locationProvince?n.locationProvince:l.$cookies.get("currentProvinceFullName"),locationCity:n.locationCity?n.locationCity:l.$cookies.get("currentAreaFullName"),locationArea:n.locationArea?n.locationArea:""},c=o;c.currentPage=1,c.pageSize=16;let d=yield e.post("/28-web/logisticsPark/interestedList",c),h=o;h.currentPage=1,h.pageSize=14;let v=yield e.post("/28-web/logisticsPark/recommendList",h),f=yield r(e,1,o),_=o;_.currentPage=1,_.pageSize=5,delete _.parkName;let m=yield e.post("/28-web/logisticsPark/main/recommend/list",_),y=yield e.post("/28-web//logisticsPark/newest/list",_),x=o;x.pageSize=10;let S=yield e.post("/28-web/logisticsPark/hot/list",x),w=yield e.get("/28-web/logisticsCompany/excellent?flag=excellentRate");return console.log(w.data.data,"getExcellentList"),{getExcellentList:200===w.data.status?w.data.data:[],getHottList:200===S.data.status?S.data.data:[],getRecommendList:200===m.data.status?m.data.data.list:[],getNewestList:200===y.data.status?y.data.data.list:[],getGateWayList:f.list,pages:f.pages,currentPage:f.currentPage,getLogisticsPark:200===d.data.status?d.data.data.list:[],recommendParkList:200===v.data.status?v.data.data.list:[],vo:o}})(),mounted(){$("#parkAddress input").citypicker({province:this.vo.locationProvince,city:this.vo.locationCity,district:this.vo.locationArea}),$("#list_nav_a").html(this.vo.locationCity+this.vo.locationArea+"物流园区"),this.loadPagination()},methods:{addFn(){this.isAdd=!0},noaddFn(){this.isAdd=!1},openYuanqu(){if(this.inputData){var t=window.AFLC_VALID;console.log(t);0,t.MOBILE.test(this.inputData)?(this.addFn(),alert(this.inputData)):(this.isMobile=!0,this.inputData="")}},search1(){var t=this;return Object(o.a)(function*(){let e=[];$("#parkAddress .select-item").each(function(i,t){e.push($(this).text())}),t.vo.locationProvince=e[0]?e[0]:"",t.vo.locationCity=e[1]?e[1]:"",t.vo.locationArea=e[2]?e[2]:"",window.open(`/wuliu?locationProvince=${t.vo.locationProvince}&locationCity=${t.vo.locationCity}&locationArea=${t.vo.locationArea}`)})()},search(){var t=this;return Object(o.a)(function*(){let e=[];$("#parkAddress .select-item").each(function(i,t){e.push($(this).text())}),t.vo.locationProvince=e[0]?e[0]:"",t.vo.locationCity=e[1]?e[1]:"",t.vo.locationArea=e[2]?e[2]:"",window.open(`/wuliu?locationProvince=${t.vo.locationProvince}&locationCity=${t.vo.locationCity}&locationArea=${t.vo.locationArea}&parkName=${t.vo.parkName}`)})()},reload(){window.location.href="/wuliu"},loadPagination(){var t=this;$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:function(){var e=Object(o.a)(function*(e){$("#current1").text(e);let l=yield r(t.$axios,e,t.vo);t.getGateWayList=l.list,t.currentPage=l.currentPage,window.location.href="#top"});return function(t){return e.apply(this,arguments)}}()})}}},h=(l(331),l(1)),component=Object(h.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yuanqu"},[n("div",{staticClass:"list_box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"list_left"},[n("div",{staticStyle:{"background-color":"#fff"}},[n("div",{staticClass:"select_con",staticStyle:{float:"left",width:"900px"}},[n("dl",[t._m(2),t._v(" "),n("dd",[n("form",{attrs:{name:"zxaddform",method:"post",action:""}},[n("input",{attrs:{name:"a7",type:"hidden",value:"0"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"mid",value:"19"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"dopost",value:"search"}}),t._v(" "),t._m(3),t._v(" "),n("span",[t._v(" 园区名称 ：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vo.parkName,expression:"vo.parkName"}],staticClass:"list_input",attrs:{type:"text",placeholder:"请输入园区名称"},domProps:{value:t.vo.parkName},on:{input:function(e){e.target.composing||t.$set(t.vo,"parkName",e.target.value)}}}),t._v(" "),n("input",{staticClass:"list_button",staticStyle:{width:"100px"},attrs:{id:"search_wlyq",value:" 搜索园区 ",readonly:""},on:{click:function(e){return t.search()}}})])])])]),t._v(" "),t._m(4)]),t._v(" "),t._m(5),t._v(" "),n("div",{staticClass:"tuijian"},[t._m(6),t._v(" "),n("div",{staticClass:"tuijian_content"},[n("ul",t._l(t.getRecommendList,function(e,i){return n("li",{key:i,staticStyle:{float:"left","padding-right":"20px"}},[n("a",{staticStyle:{position:"relative"},attrs:{href:"/wuliu/detail?id="+e.id,target:"_blank"}},[n("img",{attrs:{src:"http://aflc.oss-cn-shenzhen.aliyuncs.com//tms/20181218/ryeGbJyAGatZj4DaSMFQeXDB4b5KPrdN.jpg",width:"260",height:"165",alt:""}}),n("span",{staticStyle:{position:"absolute",bottom:"-74px",left:"1px",background:"rgba(0,0,0,0.1)",color:"rgb(255,255,255)",padding:"5px 0px","font-size":"14px",width:"260px","text-align":"center"}},[t._v(t._s(e.parkName))]),t._v(" "),1==e.isInvestment?n("span",{staticStyle:{position:"absolute",bottom:"50px",left:"1px",background:"rgba(194,0,13,1)",color:"rgb(255,255,255)",padding:"10px 20px"}},[t._v("招商中")]):t._e()]),t._v(" "),n("p",{staticStyle:{width:"260px","text-align":"center","padding-top":"10px"}},[n("span",{staticStyle:{"padding-right":"10px"}},[t._v("推荐指数")]),t._l(1,function(t,i){return n("img",{key:i,attrs:{src:l(319),alt:""}})})],2)])}),0)])]),t._v(" "),t._m(7),t._v(" "),n("div",[n("div",{staticClass:"ruzhu",staticStyle:{width:"635px",float:"left"}},[t._m(8),t._v(" "),n("ul",t._l(t.getNewestList,function(e,i){return n("li",{key:i,staticStyle:{"padding-top":"20px"}},[n("a",{attrs:{href:"/wuliu/detail?id="+e.id,target:"_blank"}},[n("img",{attrs:{src:l(320),alt:""}}),n("span",{staticStyle:{padding:"0px 40px 0 30px",width:"100px",display:"inline-block"}},[t._v(t._s(e.parkName)+"\n                ")]),n("span",{staticStyle:{width:"320px",display:"inline-block"}},[n("i",{staticStyle:{"padding-right":"10px"}},[t._v("地址:")]),t._v(t._s(e.parkAddress.length>13?e.parkAddress+"...":e.parkAddress))])])])}),0)]),t._v(" "),n("div",{staticClass:"zizhu",staticStyle:{width:"670px",float:"left","margin-left":"40px"}},[t._m(9),t._v(" "),n("div",{staticClass:"zizhu_content"},[t._m(10),t._v(" "),n("div",{staticClass:"zizhu_bot",staticStyle:{border:"1px solid #ccc",width:"660px",height:"150px",clear:"both","margin-top":"20px"}},[n("div",[n("div",{staticClass:"layui-input-inline ",staticStyle:{margin:"30px 20px 10px 20px",float:"left"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData,expression:"inputData"}],staticStyle:{height:"38px","line-height":"38px","border-width":"1px","border-style":"solid","background-color":"#fff","border-radius":"2px","padding-left":"10px","border-color":"#D2D2D2"},attrs:{type:"text",maxlength:"11",placeholder:"输入您的手机号"},domProps:{value:t.inputData},on:{input:function(e){e.target.composing||(t.inputData=e.target.value)}}}),t._v(" "),n("span",{staticStyle:{width:"90px",height:"38px","line-height":"38px","text-align":"center",background:"rgb(51,153,255)",display:"inline-block",color:"#fff"},on:{click:t.openYuanqu}},[t._v("园区入驻")]),t._v(" "),t.isMobile?n("p",{staticStyle:{color:"red","padding-top":"5px"}},[t._v("请输入正确手机号")]):t._e(),t._v(" "),n("p",{staticStyle:{"padding-top":"10px"}},[t._v("入驻免费提供发布信息，园区宣传")])]),t._v(" "),t._m(11)])])])])]),t._v(" "),n("div",{staticClass:"hot",staticStyle:{clear:"both"}},[t._m(12),t._v(" "),n("div",{staticClass:"select_con",staticStyle:{width:"900px",border:"1px solid #eee","border-left":"0","border-right":"0","border-bottom":"none",padding:"15px 0",margin:"0"}},[n("dl",[n("dd",[n("form",{attrs:{name:"zxaddform",method:"post",action:""}},[n("input",{attrs:{name:"a7",type:"hidden",value:"0"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"mid",value:"19"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"dopost",value:"search"}}),t._v(" "),t._m(13),t._v(" "),n("input",{staticClass:"list_button",staticStyle:{width:"100px"},attrs:{id:"search_wlyq",value:" 搜索园区 ",readonly:""},on:{click:function(e){return t.search1()}}})])])])])]),t._v(" "),n("div",{staticClass:" list_wlyq"},[0===t.getHottList.length||null==t.getHottList.list?n("div",{staticClass:"list_none",staticStyle:{display:"block"}},[n("span",[t._v("暂时没有找到您要查询的信息，可以看看其他园区哦")]),t._v(" "),n("img",{attrs:{src:l(165)}})]):t._e(),t._v(" "),t._l(t.getHottList.list,function(e,o){return n("ul",{key:o,staticClass:"wlzx_list",staticStyle:{"margin-right":"0px",width:"260px",height:"360px","margin-top":"0px"}},[n("a",{attrs:{href:"/wuliu/detail?id="+e.id,target:"_blank"}},[n("li",{staticClass:"wlzx_list_01",staticStyle:{height:"200px"}},[n("img",{staticClass:"scrollLoading",attrs:{src:e.parkSignPicture?e.parkSignPicture:l(321),width:"240",height:"210"}})]),t._v(" "),n("li",{staticClass:"wlzx_list_02"},[n("span",[t._v(t._s(e.parkName))])]),t._v(" "),n("li",{staticClass:"wlzx_list_03"},[n("span",[n("font",{staticStyle:{"padding-left":"0px"}},[t._v(t._s(e.transportNumber?e.transportNumber:0))]),n("i",[t._v("条")]),n("span",{staticStyle:{"padding-left":"2px"}},[t._v("优质专线")])],1),t._v(" "),n("span",[n("font",{staticStyle:{"padding-left":"0px"}},[t._v(t._s(e.netWorkNumber?e.netWorkNumber:0))]),n("i"),n("span",{staticStyle:{"padding-left":"2px"}},[t._v("家物流网点")])],1)]),t._v(" "),n("li",{staticClass:"wlzx_list_04",staticStyle:{"margin-bottom":"0"}},[n("span",[t._v(t._s(e.parkAddress))])]),t._v(" "),n("li",{staticClass:"wlzx_list_05"},[n("img",{staticStyle:{width:"20px",height:"20"},attrs:{src:l(322),alt:""}}),t._v(" "),n("span",{staticStyle:{"vertical-align":"middle","pading-left":"5px"}},[t._v(t._s(e.browseNumber))])])])])})],2),t._v(" "),n("img",{staticStyle:{"margin-top":"20px"},attrs:{src:l(243)}}),t._v(" "),n("div",{staticClass:"youzhi",staticStyle:{clear:"both"}},[t._m(14),t._v(" "),n("div",{staticClass:"youzhi_content"},[n("ul",t._l(t.getExcellentList,function(e,i){return n("li",{key:i,staticStyle:{float:"left","padding-right":"20px"}},[n("a",{staticStyle:{position:"relative"},attrs:{href:"/gongsi?id="+e.id,target:"_blank"}},[n("img",{attrs:{src:"http://aflc.oss-cn-shenzhen.aliyuncs.com//tms/20181218/ryeGbJyAGatZj4DaSMFQeXDB4b5KPrdN.jpg",width:"260",height:"165",alt:""}}),t._v(" "),n("span",{staticClass:"NOclass",class:"noclass"+i,staticStyle:{position:"absolute",bottom:"40px",left:"5px",color:"rgb(255,255,255)",padding:"5px 20px","border-radius":"5px"}},[t._v("NO"+t._s(i+1))])]),t._v(" "),n("p",{staticStyle:{width:"260px","padding-top":"10px",color:"rgb(51,153,255)","font-size":"16px"}},[t._v(t._s(e.companyName))]),t._v(" "),n("p",{staticStyle:{width:"260px","padding-top":"10px"}},[n("span",{staticStyle:{"padding-right":"10px"}},[t._v("推荐指数"+t._s(i+1))]),t._l(4,function(t,i){return n("img",{key:i,attrs:{src:l(323),alt:""}})})],2),t._v(" "),n("p",{staticStyle:{width:"260px","padding-top":"10px"}},[t._v("好评率"+t._s(e.excellentRate)+"%\n\n            ")])])}),0)])]),t._v(" "),n("div",[n("div",{staticClass:"zixun_l",staticStyle:{width:"670px",float:"left"}},[t._m(15),t._v(" "),n("div",{staticClass:"zixun_content",staticStyle:{position:"relative"}},[t._m(16),t._v(" "),n("ul",{staticStyle:{float:"left"}},t._l(5,function(e,i){return n("li",{key:i,staticStyle:{"padding-top":"15px"}},[t._m(17,!0)])}),0)])]),t._v(" "),n("div",{staticClass:"zixun_r",staticStyle:{width:"670px",float:"left","margin-left":"40px"}},[t._m(18),t._v(" "),n("div",{staticClass:"zixun_content",staticStyle:{position:"relative"}},[t._m(19),t._v(" "),n("ul",{staticStyle:{float:"left"}},t._l(5,function(e,i){return n("li",{key:i,staticStyle:{"padding-top":"15px"}},[t._m(20,!0)])}),0)])])]),t._v(" "),n("div",{staticClass:"getyouzhi",staticStyle:{clear:"both","text-align":"center","padding-top":"100px","font-size":"28px",color:"rgb(60,180,69)","font-width":"bloth"}},[n("span",[t._v("快速成为承运商获取优质货源")]),t._v(" "),n("a",{attrs:{href:"/regisiter",target:"_blank"}},[n("buttom",{staticStyle:{width:"180px",color:"white",background:"rgb(60,180,69)",height:"50px","line-height":"50px","text-align":"center","border-radius":"5px",display:"inline-block","margin-left":"50px",cursor:"pointer"}},[t._v("我要入驻")])],1)])])]),t._v(" "),n("Add",{attrs:{show:t.isAdd},on:{close:t.noaddFn}})],1)},n,!1,null,null,null);e.default=component.exports}}]);