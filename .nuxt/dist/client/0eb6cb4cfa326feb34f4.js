(window.webpackJsonp=window.webpackJsonp||[]).push([[67,65],{214:function(t,e,n){var content=n(220);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("4b3ea2f6",content,!0,{sourceMap:!1})},216:function(t,e,n){t.exports=n.p+"img/58a2773.png"},219:function(t,e,n){"use strict";var l=n(214);n.n(l).a},220:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".dialog{position:relative;color:#2e2c2d;font-size:16px}.dialog .dialog-cover{background:rgba(0,0,0,.5);position:fixed;z-index:200;top:0;left:0;width:100%;height:100%}.dialog .dialog-content{position:fixed;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:546px;box-shadow:-2px 0 8px 0 hsla(0,0%,66.3%,.35);border-radius:5px;z-index:300;background:#fff}.dialog .dialog_head .dialog_tit{display:inline-block;width:89%;padding:10px;text-align:center;color:#666;font-size:18px}.dialog .dialog_main{padding:10px;display:inline-block;font-size:14px}",""])},221:function(t,e,n){"use strict";n(114);var l={props:{isShow:{type:Boolean,default:!1,required:!0},title:{type:String,default:"标题"},widNum:{type:Number,default:86.5},leftSite:{type:Number,default:6.5},topDistance:{type:Number,default:35},pdt:{type:Number,default:22},pdb:{type:Number,default:47}},computed:{showdiv:function(t){return this.isShow}},methods:{closeMyself:function(){this.$emit("close")}}},r=(n(219),n(1)),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialog"},[t.showdiv?n("div",{staticClass:"dialog-cover back",on:{click:t.closeMyself}}):t._e(),t._v(" "),n("transition",{attrs:{name:"drop"}},[t.showdiv?n("div",{staticClass:"dialog-content"},[n("div",{staticClass:"dialog_head back"},[n("div",{staticClass:"dialog_tit",staticStyle:{float:"left"}},[t._t("header",[t._v(t._s(t.title))])],2),t._v(" "),n("div",{staticClass:"layui-btn-group",staticStyle:{float:"right"},on:{click:t.closeMyself}},[n("button",{staticStyle:{background:"#fff",border:"none",cursor:"pointer"},attrs:{type:"text"}},[n("i",{staticClass:"layui-icon layui-icon-close",staticStyle:{"font-size":"30px",color:"#1E9FFF"}})])])]),t._v(" "),n("div",{staticClass:"dialog_main"},[t._t("main",[t._v("内容")])],2),t._v(" "),n("div",{staticClass:"dialog_footer"},[t._t("footer",[t._v("底部")])],2)]):t._e()])],1)},[],!1,null,null,null);e.a=component.exports},227:function(t,e,n){t.exports=n.p+"img/017cd2b.gif"},276:function(t,e,n){t.exports=n.p+"img/06cf1d4.png"},293:function(t,e,n){t.exports=n.p+"img/f51e243.png"},305:function(t,e,n){t.exports=n.p+"img/edceea0.png"},306:function(t,e,n){var content=n(391);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("61c5e6ab",content,!0,{sourceMap:!1})},350:function(t,e,n){"use strict";n.r(e);n(114);var l=n(79),r=n.n(l),o={name:"Add",components:{LllDialog:n(221).a},props:{show:{type:Boolean,default:!1},types:{type:Number,default:1}},data:function(){return{popTitle:"提货派车单",falseMsg:"",form:{companyName:"",contactsName:"",msg:"",mobile:""},isCompanyName:!1,isContactsName:!1,ismobile:!1}},computed:{showDiv:function(t,e){return this.show}},watch:{types:function(t,e){}},methods:{onTIJ:function(){var t=this;if(!this.form.companyName.length)return this.ismobile=!0,this.falseMsg="请输入公司名称",!1;if(!this.form.contactsName.length)return this.ismobile=!0,this.falseMsg="请输入联系人",!1;if(!this.form.mobile.length)return this.ismobile=!0,this.falseMsg="请输入电话",!1;if(this.form.mobile&&(this.ismobile=!1,!window.AFLC_VALID.MOBILE.test(this.form.mobile)))return this.ismobile=!0,this.form.mobile="",this.falseMsg="请输入正确的电话",!1;1==this.types?(this.form.type=1,this.form.source=1):(this.form.type=2,this.form.source=2),console.log(this.form,"this.form"),r.a.post("/xlapi/28-web/leavingmsg/",this.form).then(function(e){console.log(e,"ressss"),200==e.data.status&&(layer.msg("提交成功，客服稍后将会与您联系",{tiem:3e3},function(){}),t.$emit("close"),t.form={})})},closeDialog:function(){this.$emit("close"),this.form={},this.ismobile=!1}}},c=n(1),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("LllDialog",{attrs:{"is-show":t.showDiv,title:t.popTitle},on:{close:t.closeDialog}},[l("div",{attrs:{slot:"header"},slot:"header"},[t._v("我要申请入驻")]),t._v(" "),l("div",{staticClass:"dialog_publish_main",attrs:{slot:"main"},slot:"main"},[l("form",{staticClass:"layui-form",staticStyle:{width:"400px"},attrs:{action:""}},[l("div",{staticClass:"layui-form-item"},[l("label",{staticClass:"layui-form-label"},[l("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("公司名称:")]),t._v(" "),l("div",{staticClass:"layui-input-block"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.form.companyName,expression:"form.companyName"}],staticClass:"layui-input",attrs:{maxlength:"30",type:"text",placeholder:"请输入公司名称"},domProps:{value:t.form.companyName},on:{input:function(e){e.target.composing||t.$set(t.form,"companyName",e.target.value)}}})])]),t._v(" "),l("div",{staticClass:"layui-form-item"},[l("label",{staticClass:"layui-form-label"},[l("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("联系人:")]),t._v(" "),l("div",{staticClass:"layui-input-block"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.form.contactsName,expression:"form.contactsName"}],staticClass:"layui-input",attrs:{maxlength:"20",type:"text",placeholder:"请输入联系人"},domProps:{value:t.form.contactsName},on:{input:function(e){e.target.composing||t.$set(t.form,"contactsName",e.target.value)}}})])]),t._v(" "),l("div",{staticClass:"layui-form-item"},[l("label",{staticClass:"layui-form-label"},[l("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("电话:")]),t._v(" "),l("div",{staticClass:"layui-input-block"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile,expression:"form.mobile"}],staticClass:"layui-input",attrs:{type:"text",placeholder:"请输入电话",maxlength:"11"},domProps:{value:t.form.mobile},on:{input:function(e){e.target.composing||t.$set(t.form,"mobile",e.target.value)}}})])]),t._v(" "),l("div",{staticClass:"layui-form-item layui-form-text"},[l("label",{staticClass:"layui-form-label"},[t._v("给我留言:")]),t._v(" "),l("div",{staticClass:"layui-input-block"},[l("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.msg,expression:"form.msg"}],staticClass:"layui-textarea",attrs:{maxlength:"100",placeholder:"请输入留言"},domProps:{value:t.form.msg},on:{input:function(e){e.target.composing||t.$set(t.form,"msg",e.target.value)}}})]),t._v(" "),t.ismobile?l("p",{staticStyle:{color:"red","text-align":"center"}},[t._v(t._s(t.falseMsg))]):t._e()])]),t._v(" "),l("div",{},[l("button",{staticStyle:{width:"290px","margin-left":"110px",padding:"10px 0",background:"#0d91e9",border:"none"},on:{click:t.onTIJ}},[t._v("立即申请")]),t._v(" "),l("p",{staticStyle:{"margin-left":"110px",height:"30px","line-height":"30px"}},[t._v("您还可以选择在线咨询："),l("a",{attrs:{href:""}},[l("img",{attrs:{src:n(227)}}),t._v("qq交谈")])])])]),t._v(" "),l("div",{attrs:{slot:"footer"},slot:"footer"})])},[],!1,null,"2eb77d0c",null);e.default=component.exports},379:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAQCAYAAABqfkPCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIZSURBVFhH7ZfNSxZBHMe/phCdfYkwfCICRalLCh46ePAFOhQePKTiRRQUD3VKCP8CEQ2lEPGmIBGCmEEW3kRFL15EENFInsIUgkA8pON8+c2D07KzO4KHfeD5wDC/t90vOzs7s5OnNMhxLdwwfY5rwD0zZ0eBb9PA2T8TcJBfADS0A819wOEPYKQXOP5pkhEU3gFevQeK7yZfyxP3zAwTTFUC96qMY2DN1ymxNxbDH66uxRgWrFv/InbStTxxD2ZQkLT1A62vjWORqT0/k97m4RPghb6GfZBMfdK1PPFfM8ur5Q2y0falseP/3ods0AqDa2Yo3Y+Vetun1NaaUgc7Sp2emISGNmPMsYa1ZH5c7JUFpXY3lTpKSzwDfcaZZx3rSdK1PImemb++60W7FCh9ANy8ZYIa2owxx5ogv/XmcP+RLPw29BlnPkg2aMUQPZjHaWCwS994zwQs0ruSY02QTxPAx2HjBPgwJPkg2aAVQ/ya+ecQ2FozjsX2uuRcLM8bI8DKgjFCyAatCPw2oLIK6U/+SiOZmIuUlT+y3rIdDyPpWhH4DSZ/dpdmgIFmabSL9LoSxe2U/oz2gbGXwJtn0tMvKTMFDpKuFYH7BNRbe/mflafHXJ2LHQZPC+9Wgc+TwJw+aZC4a8jzHuBpZ/K1PNF3c1DfJjcjcYI8dpHqxstdNe7hWFfTJHbStTxxz8wcV8Y9M3NcEeACNrlT/G+qQqIAAAAASUVORK5CYII="},380:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEGSURBVDhP5ZJBTsMwEEW/nYo0KaKLilN0yQKVW3AI1AVrDsEBYMMdqp6GbU9QQlKSNDjx8N2koV6WDar6pPF3Rh6P/yhKCP6A7vRo/rvQ5nCOy+oDoFZMJQynsJ9u7fEKUz1CQ43CELVtcxHDlFy02/3iTTVljLdrYAhM5wvYQYz3l3uobYlcQoyiy/Yg8ToG9f6OAGWtoeIJUon5eYXBQdEO17HHFvJFSd2+EcmMyN3js8zmb5K43AH+cJoClt6cTygOydAfLjgnHus893QXtNSFSPUtlRi5eXiV26elrCwfwu4UD6/jJuDkjKJDjYZ28yzBNTsrYznF3Tt6zu9fPYKTKQR+ACR0rL7J+wGSAAAAAElFTkSuQmCC"},381:function(t,e,n){t.exports=n.p+"img/c7309c6.png"},382:function(t,e,n){t.exports=n.p+"img/098551f.png"},383:function(t,e,n){t.exports=n.p+"img/07c9750.png"},384:function(t,e,n){t.exports=n.p+"img/d58c2a2.png"},385:function(t,e,n){t.exports=n.p+"img/aa544e5.png"},386:function(t,e,n){t.exports=n.p+"img/3791394.png"},387:function(t,e,n){t.exports=n.p+"img/aa544e5.png"},388:function(t,e,n){t.exports=n.p+"img/9ae4b23.png"},389:function(t,e,n){t.exports=n.p+"img/aa544e5.png"},390:function(t,e,n){"use strict";var l=n(306);n.n(l).a},391:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,'.yuanqu .clearfix:after{content:" ";display:table}.yuanqu .clearfix:before{content:"";display:table}.yuanqu .clearfix:after{clear:both}.yuanqu .youzhi_content ul .noclass0{display:block!important;background:#e6500d}.yuanqu .youzhi_content ul .noclass1{display:block!important;background:#6669ff!important}.yuanqu .youzhi_content ul .noclass2{display:block!important;background:#3cb46d}.yuanqu .youzhi_content ul .NOclass{display:none}',""])},583:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("a",{attrs:{href:"/wuliu/detail?id=1",target:"_blank"}},[e("img",{attrs:{src:n(383),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list_nav",staticStyle:{"padding-top":"20px"}},[e("a",{attrs:{href:"/"}},[this._v("物流首页")]),this._v(">"),e("a",{attrs:{id:"list_nav_a",href:""}},[this._v("物流园区")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("span",{staticStyle:{"padding-left":"0"}},[this._v("园区所在地 ：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"parkAddress"}},[e("input",{staticStyle:{height:"100%",border:"none",outline:"none"},attrs:{"data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请选择省-市-区"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{href:"/regisiter",target:"_blank"}},[e("button",{staticClass:"layui-btn",staticStyle:{width:"252px","margin-top":"10px","border-radius":"3px","margin-left":"10px",background:"#3f94ee",float:"right",height:"45px","line-height":"45px"},attrs:{id:"yd_cx1"}},[this._v("物流公司入驻")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix",staticStyle:{clear:"both"}},[n("i",[t._v("热门：")]),t._v(" "),n("a",{attrs:{href:"/wuliu?locationProvince=上海市&locationCity=上海市",target:"_blank"}},[n("span",{staticStyle:{"padding-right":"10px"}},[t._v("上海")])]),t._v(" "),n("a",{attrs:{href:"/wuliu?locationProvince=北京市&locationCity=北京市",target:"_blank"}},[n("span",{staticStyle:{"padding-right":"10px"}},[t._v("北京")])]),t._v(" "),n("a",{attrs:{href:"/wuliu?locationProvince=广东省&locationCity=深圳市",target:"_blank"}},[n("span",{staticStyle:{"padding-right":"10px"}},[t._v("深圳")])]),t._v(" "),n("a",{attrs:{href:"/wuliu?locationProvince=重庆市&locationCity=重庆市",target:"_blank"}},[n("span",{staticStyle:{"padding-right":"10px"}},[t._v("重庆")])]),t._v(" "),n("a",{attrs:{href:"/wuliu?locationProvince=天津市&locationCity=天津市",target:"_blank"}},[n("span",{staticStyle:{"padding-right":"10px"}},[t._v("天津")])]),t._v(" "),n("a",{attrs:{href:"/wuliu?locationProvince=江苏省&locationCity=苏州市",target:"_blank"}},[n("span",{staticStyle:{"padding-right":"10px"}},[t._v("苏州")])]),t._v(" "),n("a",{attrs:{href:"/wuliu?locationProvince=四川省&locationCity=成都市",target:"_blank"}},[n("span",{staticStyle:{"padding-right":"10px"}},[t._v("成都")])]),t._v(" "),n("a",{attrs:{href:"/wuliu?locationProvince=湖北省&locationCity=武汉市",target:"_blank"}},[n("span",{staticStyle:{"padding-right":"10px"}},[t._v("武汉")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tuijian_title",staticStyle:{height:"50px","line-height":"50px"}},[e("h5",{staticStyle:{color:"rgb(196,69,76)","font-size":"18px",float:"left"}},[this._v("推荐园区")]),this._v(" "),e("a",{attrs:{href:"/wuliu",target:"_blank"}},[e("span",{staticStyle:{float:"right"}},[this._v(" 更多>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"new",staticStyle:{clear:"both"}},[e("div",{staticClass:"new_title",staticStyle:{padding:"30px 0 25px"}},[e("h5",{staticStyle:{color:"rgb(255,255,255)","font-size":"18px",background:"rgb(0,136,238)",width:"135px",padding:"10px"}},[this._v("最新动态")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ruzhu_title",staticStyle:{padding:"30px 0 25px"}},[e("h5",{staticStyle:{color:"rgb(196,69,76)","font-size":"18px",float:"left"}},[this._v("新入驻园区\n\n            ")]),this._v(" "),e("a",{attrs:{href:""}},[e("span",{staticStyle:{float:"right"}},[this._v(" 更多>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zizhu_title",staticStyle:{padding:"30px 0 25px"}},[e("h5",{staticStyle:{color:"rgb(196,69,76)","font-size":"18px"}},[this._v("自助服务\n            ")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("ul",[l("li",{staticStyle:{float:"left","padding-right":"20px","padding-top":"10px"}},[l("a",{staticStyle:{width:"200px",height:"60px",background:"rgb(51,153,255)",display:"inline-block",color:"white","text-align":"center","line-height":"60px","font-size":"18px"},attrs:{href:""}},[l("img",{staticStyle:{"padding-right":"20px"},attrs:{src:n(384),alt:"",width:"40"}}),t._v("快速下单")])]),t._v(" "),l("li",{staticStyle:{float:"left","padding-right":"20px","padding-top":"10px"}},[l("a",{staticStyle:{width:"200px",height:"60px",background:"rgb(51,153,255)",display:"inline-block",color:"white","text-align":"center","line-height":"60px","font-size":"18px"},attrs:{href:"/create/line"}},[l("img",{staticStyle:{"padding-right":"20px"},attrs:{src:n(385),alt:"",width:"40"}}),t._v("发布专线")])]),t._v(" "),l("li",{staticStyle:{float:"left","padding-right":"20px","padding-top":"10px"}},[l("a",{staticStyle:{width:"200px",height:"60px",background:"rgb(51,153,255)",display:"inline-block",color:"white","text-align":"center","line-height":"60px","font-size":"18px"},attrs:{href:"/create/cheyuan"}},[l("img",{staticStyle:{"padding-right":"20px"},attrs:{src:n(386),alt:"",width:"40"}}),t._v("发布车源")])]),t._v(" "),l("li",{staticStyle:{float:"left","padding-right":"20px","padding-top":"10px"}},[l("a",{staticStyle:{width:"200px",height:"60px",background:"rgb(51,153,255)",display:"inline-block",color:"white","text-align":"center","line-height":"60px","font-size":"18px"},attrs:{href:""}},[l("img",{staticStyle:{"padding-right":"20px"},attrs:{src:n(387),alt:"",width:"40"}}),t._v("运单查询")])]),t._v(" "),l("li",{staticStyle:{float:"left","padding-right":"20px","padding-top":"10px"}},[l("a",{staticStyle:{width:"200px",height:"60px",background:"rgb(51,153,255)",display:"inline-block",color:"white","text-align":"center","line-height":"60px","font-size":"18px"},attrs:{href:""}},[l("img",{staticStyle:{"padding-right":"20px"},attrs:{src:n(388),alt:"",width:"40"}}),t._v("时效查询")])]),t._v(" "),l("li",{staticStyle:{float:"left","padding-right":"20px","padding-top":"10px","margin-bottom":"10px"}},[l("a",{staticStyle:{width:"200px",height:"60px",background:"rgb(51,153,255)",display:"inline-block",color:"white","text-align":"center","line-height":"60px","font-size":"18px"},attrs:{href:""}},[l("img",{staticStyle:{"padding-right":"20px"},attrs:{src:n(389),alt:"",width:"40"}}),t._v("网点查询")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zizhu_bot_r",staticStyle:{display:"inline-block",margin:"20px",background:"rgb(242,242,242)"}},[e("img",{staticStyle:{width:"90px",height:"80px",float:"left"},attrs:{src:n(305),alt:""}}),this._v(" "),e("p",{staticStyle:{width:"150px",float:"left","padding-left":"10px"}},[e("a",{attrs:{href:"http://h5.28tms.com/",target:"_blank"}},[this._v("下载"),e("i",{staticStyle:{color:"rgb(0,102,255)"}},[this._v("【28快运APP】")]),this._v("，随时随地查看专线，在线下单推荐优质承运商，便捷查询运单")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hot_title",staticStyle:{padding:"30px 0 25px 0"}},[e("h5",{staticStyle:{color:"rgb(196,69,76)","font-size":"18px",float:"left"}},[this._v("热门园区")]),this._v(" "),e("span",{staticStyle:{"padding-left":"30px"}},[e("i",{staticStyle:{color:"rgb(249,155,42)"}},[this._v("1365")]),this._v("个园区，为您优选10个热门园区")]),this._v(" "),e("a",{attrs:{href:"/wuliu",target:"_blank"}},[e("span",{staticStyle:{float:"right"}},[this._v(" 更多>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"parkAddress"}},[e("input",{staticStyle:{height:"100%",border:"none",outline:"none"},attrs:{"data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请选择园区所在地"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"youzhi_title",staticStyle:{padding:"30px 0 25px 0"}},[e("h5",{staticStyle:{color:"rgb(196,69,76)","font-size":"18px",float:"left"}},[this._v("本月优质承运")]),this._v(" "),e("span",{staticStyle:{"padding-left":"30px"}},[this._v("货主说好才是真的好")]),this._v(" "),e("a",{attrs:{href:"/gongsi",target:"_blank"}},[e("span",{staticStyle:{float:"right"}},[this._v(" 所有物流企业>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zixuntitle",staticStyle:{padding:"30px 0 25px","margin-bottom":"10px"}},[e("h5",{staticStyle:{color:"rgb(196,69,76)","font-size":"18px",float:"left"}},[this._v("行业资讯\n            ")]),this._v(" "),e("a",{attrs:{href:"/zixun",target:"_blank"}},[e("span",{staticStyle:{float:"right"}},[this._v(" 更多>>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/zixun",target:"_blank"}},[e("img",{staticStyle:{width:"280px",height:"170px",float:"left"},attrs:{src:n(305)}}),e("span",{staticStyle:{position:"absolute",bottom:"-170px",left:"1px",background:"rgba(0, 0, 0, 0.3)",color:"rgb(255, 255, 255)",padding:"10px 14px"}},[this._v("瑞幸融资估值翻倍，背后是同城物流的...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",{staticStyle:{"padding-left":"20px"}},[this._v("瑞幸融资估值翻倍，背后是同城物流的...")]),e("span",{staticStyle:{"padding-left":"30px"}},[this._v("2019-02-19")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zixun_title",staticStyle:{padding:"30px 0 25px","margin-bottom":"10px"}},[e("h5",{staticStyle:{color:"rgb(196,69,76)","font-size":"18px",float:"left"}},[this._v("仓储与配送\n            ")]),this._v(" "),e("a",{attrs:{href:""}},[e("span",{staticStyle:{float:"right"}},[this._v(" 更多>>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:""}},[e("img",{staticStyle:{width:"280px",height:"170px",float:"left"},attrs:{src:n(305)}}),e("span",{staticStyle:{position:"absolute",bottom:"-170px",left:"1px",background:"rgba(0, 0, 0, 0.3)",color:"rgb(255, 255, 255)",padding:"10px 14px"}},[this._v("瑞幸融资估值翻倍，背后是同城物流的...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",{staticStyle:{"padding-left":"20px"}},[this._v("瑞幸融资估值翻倍，背后是同城物流的...")]),e("span",{staticStyle:{"padding-left":"30px"}},[this._v("2019-02-19")])])}],r=(n(56),n(8));n(79);function o(t,e){return c.apply(this,arguments)}function c(){return(c=Object(r.a)(regeneratorRuntime.mark(function t(e,n){var l,r,o,c=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l=c.length>2&&void 0!==c[2]?c[2]:{},(r=l).currentPage=n,r.pageSize=21,t.next=6,e.post("/28-web/logisticsPark/list",r);case 6:if(200!==(o=t.sent).data.status){t.next=11;break}return t.abrupt("return",{list:o.data.data.list,pages:o.data.data.pages,currentPage:o.data.data.pageNum});case 11:return t.abrupt("return",{list:[],pages:0,currentPage:1});case 12:case"end":return t.stop()}},t)}))).apply(this,arguments)}var d={name:"WuLiu",components:{Add:n(350).default},head:{link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/yuanqu/css/list_wlyq.css"},{rel:"stylesheet",href:"/layer/dist/css/layui.css"}],script:[{src:"./js/city-picker.data.js"},{src:"./js/city-picker.js"},{src:"/js/AFLC_API.js"},{src:"./js/jquery.pagination.min.js"}]},data:function(){return{isAdd:!1,inputData:"",isMobile:!1,pages:0,currentPage:1}},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,l,r,c,d,h,f,v,m,_,x,y,S,w,A,k;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,l=e.app,r=e.query,c={parkName:r.parkName?r.parkName:"",locationProvince:r.locationProvince?r.locationProvince:l.$cookies.get("currentProvinceFullName"),locationCity:r.locationCity?r.locationCity:l.$cookies.get("currentAreaFullName"),locationArea:r.locationArea?r.locationArea:""},(d=c).currentPage=1,d.pageSize=16,t.next=7,n.post("/28-web/logisticsPark/interestedList",d);case 7:return h=t.sent,(f=c).currentPage=1,f.pageSize=14,t.next=13,n.post("/28-web/logisticsPark/recommendList",f);case 13:return v=t.sent,t.next=16,o(n,1,c);case 16:return m=t.sent,(_=c).currentPage=1,_.pageSize=5,delete _.parkName,t.next=23,n.post("/28-web/logisticsPark/main/recommend/list",_);case 23:return x=t.sent,t.next=26,n.post("/28-web//logisticsPark/newest/list",_);case 26:return y=t.sent,(S=c).pageSize=10,w="excellentRate",t.next=32,n.post("/28-web/logisticsPark/hot/list",S);case 32:return A=t.sent,t.next=35,n.get("/28-web/logisticsCompany/excellent?flag="+w);case 35:return k=t.sent,console.log(k.data.data,"getExcellentList"),t.abrupt("return",{getExcellentList:200===k.data.status?k.data.data:[],getHottList:200===A.data.status?A.data.data:[],getRecommendList:200===x.data.status?x.data.data.list:[],getNewestList:200===y.data.status?y.data.data.list:[],getGateWayList:m.list,pages:m.pages,currentPage:m.currentPage,getLogisticsPark:200===h.data.status?h.data.data.list:[],recommendParkList:200===v.data.status?v.data.data.list:[],vo:c});case 38:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){$("#parkAddress input").citypicker({province:this.vo.locationProvince,city:this.vo.locationCity,district:this.vo.locationArea}),$("#list_nav_a").html(this.vo.locationCity+this.vo.locationArea+"物流园区"),this.loadPagination()},methods:{addFn:function(){this.isAdd=!0},noaddFn:function(){this.isAdd=!1},openYuanqu:function(){if(this.inputData){var t=window.AFLC_VALID;console.log(t);0,t.MOBILE.test(this.inputData)?(this.addFn(),alert(this.inputData)):(this.isMobile=!0,this.inputData="")}},search1:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=[],$("#parkAddress .select-item").each(function(i,t){e.push($(this).text())}),this.vo.locationProvince=e[0]?e[0]:"",this.vo.locationCity=e[1]?e[1]:"",this.vo.locationArea=e[2]?e[2]:"",window.open("/wuliu?locationProvince=".concat(this.vo.locationProvince,"&locationCity=").concat(this.vo.locationCity,"&locationArea=").concat(this.vo.locationArea));case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),search:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=[],$("#parkAddress .select-item").each(function(i,t){e.push($(this).text())}),this.vo.locationProvince=e[0]?e[0]:"",this.vo.locationCity=e[1]?e[1]:"",this.vo.locationArea=e[2]?e[2]:"",window.open("/wuliu?locationProvince=".concat(this.vo.locationProvince,"&locationCity=").concat(this.vo.locationCity,"&locationArea=").concat(this.vo.locationArea,"&parkName=").concat(this.vo.parkName));case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),reload:function(){window.location.href="/wuliu"},loadPagination:function(){var t=this;$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(n){var l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return $("#current1").text(n),e.next=3,o(t.$axios,n,t.vo);case 3:l=e.sent,t.getGateWayList=l.list,t.currentPage=l.currentPage,window.location.href="#top";case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()})}}},h=(n(390),n(1)),component=Object(h.a)(d,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"yuanqu"},[l("div",{staticClass:"list_box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),l("div",{staticClass:"list_left"},[l("div",{staticStyle:{"background-color":"#fff"}},[l("div",{staticClass:"select_con",staticStyle:{float:"left",width:"900px"}},[l("dl",[t._m(2),t._v(" "),l("dd",[l("form",{attrs:{name:"zxaddform",method:"post",action:""}},[l("input",{attrs:{name:"a7",type:"hidden",value:"0"}}),t._v(" "),l("input",{attrs:{type:"hidden",name:"mid",value:"19"}}),t._v(" "),l("input",{attrs:{type:"hidden",name:"dopost",value:"search"}}),t._v(" "),t._m(3),t._v(" "),l("span",[t._v(" 园区名称 ：")]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.vo.parkName,expression:"vo.parkName"}],staticClass:"list_input",attrs:{type:"text",placeholder:"请输入园区名称"},domProps:{value:t.vo.parkName},on:{input:function(e){e.target.composing||t.$set(t.vo,"parkName",e.target.value)}}}),t._v(" "),l("input",{staticClass:"list_button",staticStyle:{width:"100px"},attrs:{id:"search_wlyq",value:" 搜索园区 ",readonly:""},on:{click:function(e){return t.search()}}})])])])]),t._v(" "),t._m(4)]),t._v(" "),t._m(5),t._v(" "),l("div",{staticClass:"tuijian"},[t._m(6),t._v(" "),l("div",{staticClass:"tuijian_content"},[l("ul",t._l(t.getRecommendList,function(e,i){return l("li",{key:i,staticStyle:{float:"left","padding-right":"20px"}},[l("a",{staticStyle:{position:"relative"},attrs:{href:"/wuliu/detail?id="+e.id,target:"_blank"}},[l("img",{attrs:{src:"http://aflc.oss-cn-shenzhen.aliyuncs.com//tms/20181218/ryeGbJyAGatZj4DaSMFQeXDB4b5KPrdN.jpg",width:"260",height:"165",alt:""}}),l("span",{staticStyle:{position:"absolute",bottom:"-74px",left:"1px",background:"rgba(0,0,0,0.1)",color:"rgb(255,255,255)",padding:"5px 0px","font-size":"14px",width:"260px","text-align":"center"}},[t._v(t._s(e.parkName))]),t._v(" "),1==e.isInvestment?l("span",{staticStyle:{position:"absolute",bottom:"50px",left:"1px",background:"rgba(194,0,13,1)",color:"rgb(255,255,255)",padding:"10px 20px"}},[t._v("招商中")]):t._e()]),t._v(" "),l("p",{staticStyle:{width:"260px","text-align":"center","padding-top":"10px"}},[l("span",{staticStyle:{"padding-right":"10px"}},[t._v("推荐指数")]),t._l(1,function(t,i){return l("img",{key:i,attrs:{src:n(379),alt:""}})})],2)])}),0)])]),t._v(" "),t._m(7),t._v(" "),l("div",[l("div",{staticClass:"ruzhu",staticStyle:{width:"635px",float:"left"}},[t._m(8),t._v(" "),l("ul",t._l(t.getNewestList,function(e,i){return l("li",{key:i,staticStyle:{"padding-top":"20px"}},[l("a",{attrs:{href:"/wuliu/detail?id="+e.id,target:"_blank"}},[l("img",{attrs:{src:n(380),alt:""}}),l("span",{staticStyle:{padding:"0px 40px 0 30px",width:"100px",display:"inline-block"}},[t._v(t._s(e.parkName)+"\n                ")]),l("span",{staticStyle:{width:"320px",display:"inline-block"}},[l("i",{staticStyle:{"padding-right":"10px"}},[t._v("地址:")]),t._v(t._s(e.parkAddress.length>13?e.parkAddress+"...":e.parkAddress))])])])}),0)]),t._v(" "),l("div",{staticClass:"zizhu",staticStyle:{width:"670px",float:"left","margin-left":"40px"}},[t._m(9),t._v(" "),l("div",{staticClass:"zizhu_content"},[t._m(10),t._v(" "),l("div",{staticClass:"zizhu_bot",staticStyle:{border:"1px solid #ccc",width:"660px",height:"150px",clear:"both","margin-top":"20px"}},[l("div",[l("div",{staticClass:"layui-input-inline ",staticStyle:{margin:"30px 20px 10px 20px",float:"left"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.inputData,expression:"inputData"}],staticStyle:{height:"38px","line-height":"38px","border-width":"1px","border-style":"solid","background-color":"#fff","border-radius":"2px","padding-left":"10px","border-color":"#D2D2D2"},attrs:{type:"text",maxlength:"11",placeholder:"输入您的手机号"},domProps:{value:t.inputData},on:{input:function(e){e.target.composing||(t.inputData=e.target.value)}}}),t._v(" "),l("span",{staticStyle:{width:"90px",height:"38px","line-height":"38px","text-align":"center",background:"rgb(51,153,255)",display:"inline-block",color:"#fff"},on:{click:t.openYuanqu}},[t._v("园区入驻")]),t._v(" "),t.isMobile?l("p",{staticStyle:{color:"red","padding-top":"5px"}},[t._v("请输入正确手机号")]):t._e(),t._v(" "),l("p",{staticStyle:{"padding-top":"10px"}},[t._v("入驻免费提供发布信息，园区宣传")])]),t._v(" "),t._m(11)])])])])]),t._v(" "),l("div",{staticClass:"hot",staticStyle:{clear:"both"}},[t._m(12),t._v(" "),l("div",{staticClass:"select_con",staticStyle:{width:"900px",border:"1px solid #eee","border-left":"0","border-right":"0","border-bottom":"none",padding:"15px 0",margin:"0"}},[l("dl",[l("dd",[l("form",{attrs:{name:"zxaddform",method:"post",action:""}},[l("input",{attrs:{name:"a7",type:"hidden",value:"0"}}),t._v(" "),l("input",{attrs:{type:"hidden",name:"mid",value:"19"}}),t._v(" "),l("input",{attrs:{type:"hidden",name:"dopost",value:"search"}}),t._v(" "),t._m(13),t._v(" "),l("input",{staticClass:"list_button",staticStyle:{width:"100px"},attrs:{id:"search_wlyq",value:" 搜索园区 ",readonly:""},on:{click:function(e){return t.search1()}}})])])])])]),t._v(" "),l("div",{staticClass:" list_wlyq"},[0===t.getHottList.length||null==t.getHottList.list?l("div",{staticClass:"list_none",staticStyle:{display:"block"}},[l("span",[t._v("暂时没有找到您要查询的信息，可以看看其他园区哦")]),t._v(" "),l("img",{attrs:{src:n(216)}})]):t._e(),t._v(" "),t._l(t.getHottList.list,function(e,r){return l("ul",{key:r,staticClass:"wlzx_list",staticStyle:{"margin-right":"0px",width:"260px",height:"360px","margin-top":"0px"}},[l("a",{attrs:{href:"/wuliu/detail?id="+e.id,target:"_blank"}},[l("li",{staticClass:"wlzx_list_01",staticStyle:{height:"200px"}},[l("img",{staticClass:"scrollLoading",attrs:{src:e.parkSignPicture?e.parkSignPicture:n(276),width:"240",height:"210"}})]),t._v(" "),l("li",{staticClass:"wlzx_list_02"},[l("span",[t._v(t._s(e.parkName))])]),t._v(" "),l("li",{staticClass:"wlzx_list_03"},[l("span",[l("font",{staticStyle:{"padding-left":"0px"}},[t._v(t._s(e.transportNumber?e.transportNumber:0))]),l("i",[t._v("条")]),l("span",{staticStyle:{"padding-left":"2px"}},[t._v("优质专线")])],1),t._v(" "),l("span",[l("font",{staticStyle:{"padding-left":"0px"}},[t._v(t._s(e.netWorkNumber?e.netWorkNumber:0))]),l("i"),l("span",{staticStyle:{"padding-left":"2px"}},[t._v("家物流网点")])],1)]),t._v(" "),l("li",{staticClass:"wlzx_list_04",staticStyle:{"margin-bottom":"0"}},[l("span",[t._v(t._s(e.parkAddress))])]),t._v(" "),l("li",{staticClass:"wlzx_list_05"},[l("img",{staticStyle:{width:"20px",height:"20"},attrs:{src:n(381),alt:""}}),t._v(" "),l("span",{staticStyle:{"vertical-align":"middle","pading-left":"5px"}},[t._v(t._s(e.browseNumber))])])])])})],2),t._v(" "),l("img",{staticStyle:{"margin-top":"20px"},attrs:{src:n(293)}}),t._v(" "),l("div",{staticClass:"youzhi",staticStyle:{clear:"both"}},[t._m(14),t._v(" "),l("div",{staticClass:"youzhi_content"},[l("ul",t._l(t.getExcellentList,function(e,i){return l("li",{key:i,staticStyle:{float:"left","padding-right":"20px"}},[l("a",{staticStyle:{position:"relative"},attrs:{href:"/gongsi?id="+e.id,target:"_blank"}},[l("img",{attrs:{src:"http://aflc.oss-cn-shenzhen.aliyuncs.com//tms/20181218/ryeGbJyAGatZj4DaSMFQeXDB4b5KPrdN.jpg",width:"260",height:"165",alt:""}}),t._v(" "),l("span",{staticClass:"NOclass",class:"noclass"+i,staticStyle:{position:"absolute",bottom:"40px",left:"5px",color:"rgb(255,255,255)",padding:"5px 20px","border-radius":"5px"}},[t._v("NO"+t._s(i+1))])]),t._v(" "),l("p",{staticStyle:{width:"260px","padding-top":"10px",color:"rgb(51,153,255)","font-size":"16px"}},[t._v(t._s(e.companyName))]),t._v(" "),l("p",{staticStyle:{width:"260px","padding-top":"10px"}},[l("span",{staticStyle:{"padding-right":"10px"}},[t._v("推荐指数"+t._s(i+1))]),t._l(4,function(t,i){return l("img",{key:i,attrs:{src:n(382),alt:""}})})],2),t._v(" "),l("p",{staticStyle:{width:"260px","padding-top":"10px"}},[t._v("好评率"+t._s(e.excellentRate)+"%\n\n            ")])])}),0)])]),t._v(" "),l("div",[l("div",{staticClass:"zixun_l",staticStyle:{width:"670px",float:"left"}},[t._m(15),t._v(" "),l("div",{staticClass:"zixun_content",staticStyle:{position:"relative"}},[t._m(16),t._v(" "),l("ul",{staticStyle:{float:"left"}},t._l(5,function(e,i){return l("li",{key:i,staticStyle:{"padding-top":"15px"}},[t._m(17,!0)])}),0)])]),t._v(" "),l("div",{staticClass:"zixun_r",staticStyle:{width:"670px",float:"left","margin-left":"40px"}},[t._m(18),t._v(" "),l("div",{staticClass:"zixun_content",staticStyle:{position:"relative"}},[t._m(19),t._v(" "),l("ul",{staticStyle:{float:"left"}},t._l(5,function(e,i){return l("li",{key:i,staticStyle:{"padding-top":"15px"}},[t._m(20,!0)])}),0)])])]),t._v(" "),l("div",{staticClass:"getyouzhi",staticStyle:{clear:"both","text-align":"center","padding-top":"100px","font-size":"28px",color:"rgb(60,180,69)","font-width":"bloth"}},[l("span",[t._v("快速成为承运商获取优质货源")]),t._v(" "),l("a",{attrs:{href:"/regisiter",target:"_blank"}},[l("buttom",{staticStyle:{width:"180px",color:"white",background:"rgb(60,180,69)",height:"50px","line-height":"50px","text-align":"center","border-radius":"5px",display:"inline-block","margin-left":"50px",cursor:"pointer"}},[t._v("我要入驻")])],1)])])]),t._v(" "),l("Add",{attrs:{show:t.isAdd},on:{close:t.noaddFn}})],1)},l,!1,null,null,null);e.default=component.exports}}]);