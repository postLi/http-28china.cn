(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{214:function(t,e,o){var content=o(220);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("4b3ea2f6",content,!0,{sourceMap:!1})},219:function(t,e,o){"use strict";var n=o(214);o.n(n).a},220:function(t,e,o){(t.exports=o(16)(!1)).push([t.i,".dialog{position:relative;color:#2e2c2d;font-size:16px}.dialog .dialog-cover{background:rgba(0,0,0,.5);position:fixed;z-index:200;top:0;left:0;width:100%;height:100%}.dialog .dialog-content{position:fixed;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:546px;box-shadow:-2px 0 8px 0 hsla(0,0%,66.3%,.35);border-radius:5px;z-index:300;background:#fff}.dialog .dialog_head .dialog_tit{display:inline-block;width:89%;padding:10px;text-align:center;color:#666;font-size:18px}.dialog .dialog_main{padding:10px;display:inline-block;font-size:14px}",""])},221:function(t,e,o){"use strict";o(114);var n={props:{isShow:{type:Boolean,default:!1,required:!0},title:{type:String,default:"标题"},widNum:{type:Number,default:86.5},leftSite:{type:Number,default:6.5},topDistance:{type:Number,default:35},pdt:{type:Number,default:22},pdb:{type:Number,default:47}},computed:{showdiv:function(t){return this.isShow}},methods:{closeMyself:function(){this.$emit("close")}}},l=(o(219),o(1)),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dialog"},[t.showdiv?o("div",{staticClass:"dialog-cover back",on:{click:t.closeMyself}}):t._e(),t._v(" "),o("transition",{attrs:{name:"drop"}},[t.showdiv?o("div",{staticClass:"dialog-content"},[o("div",{staticClass:"dialog_head back"},[o("div",{staticClass:"dialog_tit",staticStyle:{float:"left"}},[t._t("header",[t._v(t._s(t.title))])],2),t._v(" "),o("div",{staticClass:"layui-btn-group",staticStyle:{float:"right"},on:{click:t.closeMyself}},[o("button",{staticStyle:{background:"#fff",border:"none",cursor:"pointer"},attrs:{type:"text"}},[o("i",{staticClass:"layui-icon layui-icon-close",staticStyle:{"font-size":"30px",color:"#1E9FFF"}})])])]),t._v(" "),o("div",{staticClass:"dialog_main"},[t._t("main",[t._v("内容")])],2),t._v(" "),o("div",{staticClass:"dialog_footer"},[t._t("footer",[t._v("底部")])],2)]):t._e()])],1)},[],!1,null,null,null);e.a=component.exports},239:function(t,e,o){var content=o(326);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("e7e2d45c",content,!0,{sourceMap:!1})},324:function(t,e,o){t.exports=o.p+"img/83cc859.png"},325:function(t,e,o){"use strict";var n=o(239);o.n(n).a},326:function(t,e,o){(t.exports=o(16)(!1)).push([t.i,'.showpj .dialog-content{width:900px!important}.showpj .dialog-content .bot_pj{margin-left:120px;margin-bottom:50px}.showpj .dialog-content .bot_pj ul.pjul{display:inline-block;border:1px solid #ccc;padding:0 330px 20px 25px}.showpj .dialog-content .bot_pj ul.pjul li{float:left;padding-right:40px;height:40px;line-height:40px}.showpj .dialog-content .bot_pj ul.pjul li .unActive{display:inline-block;width:14px;height:14px;border:1px solid #e2e2e2;border-radius:50%;position:relative;margin-right:5px;cursor:pointer}.showpj .dialog-content .bot_pj ul.pjul li .active{display:inline-block;width:14px;height:14px;border:1px solid #b7d2ff;border-radius:50%;margin-right:5px}.showpj .dialog-content .bot_pj ul.pjul li .active:before{content:"";display:inline-block;width:4px;height:4px;border:1px solid #72b6ff;background:#72b6ff;border-radius:50%!important;position:absolute;top:4px;left:4px}.showpj .dialog-content .bot_pj ul.pjul li p:last-of-type{padding-top:15px}',""])},347:function(t,e,o){"use strict";o.r(e);o(56),o(114);var n=o(8),l=o(79),r=o.n(l);function c(t,e){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark(function t(e,o){var n,l,r,c=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:{},(l=n).currentPage=o,l.pageSize=21,t.next=6,e.post("/28-web/logisticsPark/list",l);case 6:if(200!==(r=t.sent).data.status){t.next=11;break}return t.abrupt("return",{list:r.data.data.list,pages:r.data.data.pages,currentPage:r.data.data.pageNum});case 11:return t.abrupt("return",{list:[],pages:0,currentPage:1});case 12:case"end":return t.stop()}},t)}))).apply(this,arguments)}var f={name:"Add",components:{LllDialog:o(221).a},props:{show:{type:Boolean,default:!1},types:{type:Number,default:1},info:{type:[Array,Object],default:function(){}}},head:{link:[{rel:"stylesheet",href:"/line/css/article_wlzx.css"},{rel:"stylesheet",href:"/line/css/price.css"},{rel:"stylesheet",href:"/gongsi/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/WTMap.css"},{rel:"stylesheet",href:"/layer/dist/css/layui.css"}],script:[{src:"../js/jquery.pagination.min.js"},{src:"../js/AFLC_API.js"},{src:"https://echarts.baidu.com/dist/echarts.min.js"}]},data:function(){return{indexPl:0,popTitle:"提货派车单",falseMsg:"",form:{companyName:"",contactsName:"",msg:"",mobile:""},isCompanyName:!1,isContactsName:!1,ismobile:!1}},computed:{showDiv:function(t,e){return this.show}},watch:{types:function(t,e){},info:function(t,e){console.log(t,"nnn1")}},mounted:function(){this.loadPagination()},methods:{loadPagination:function(){var t=this;$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(o){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return $("#current1").text(o),e.next=3,c(t.$axios,o,t.vo);case 3:n=e.sent,t.getGateWayList=n.list,t.currentPage=n.currentPage,window.location.href="#top";case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()})},showPingLunFn:function(t){this.indexPl=t},onTIJ:function(){var t=this;if(!this.form.companyName.length)return this.ismobile=!0,this.falseMsg="请输入公司名称",!1;if(!this.form.contactsName.length)return this.ismobile=!0,this.falseMsg="请输入联系人",!1;if(!this.form.mobile.length)return this.ismobile=!0,this.falseMsg="请输入电话",!1;if(this.form.mobile&&(this.ismobile=!1,!window.AFLC_VALID.MOBILE.test(this.form.mobile)))return this.ismobile=!0,this.form.mobile="",this.falseMsg="请输入正确的电话",!1;1==this.types?(this.form.type=1,this.form.source=1):(this.form.type=2,this.form.source=2),console.log(this.form,"this.form"),r.a.post("/xlapi/28-web/leavingmsg/",this.form).then(function(e){console.log(e,"ressss"),200==e.data.status&&(layer.msg("提交成功，客服稍后将会与您联系",{tiem:3e3},function(){}),t.$emit("close"),t.form={})})},closeDialog:function(){this.$emit("close"),this.form={},this.ismobile=!1}}},h=(o(325),o(1)),component=Object(h.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("LllDialog",{staticClass:"showpj",attrs:{"is-show":t.showDiv,title:t.popTitle},on:{close:t.closeDialog}},[n("div",{staticStyle:{"font-size":"20px",color:"red",padding:"20px 0"},attrs:{slot:"header"},slot:"header"},[n("span",[t._v("江苏大本赢物流有限公司-用户评价")])]),t._v(" "),n("div",{staticClass:"dialog_publish_main",attrs:{slot:"main"},slot:"main"},[n("div",{staticClass:"bot_pj"},[n("ul",{staticClass:"pjul"},[n("li",[n("p",[n("span",{staticClass:"unActive",class:0==t.indexPl?"active":"unActive",on:{click:function(e){return t.showPingLunFn(0)}}}),t._v("好评(1)")])]),t._v(" "),n("li",[n("p",[n("span",{staticClass:"unActive",class:1==t.indexPl?"active":"unActive",on:{click:function(e){return t.showPingLunFn(1)}}}),t._v("中评(1)")])]),t._v(" "),n("li",[n("p",[n("span",{staticClass:"unActive",class:2==t.indexPl?"active":"unActive",on:{click:function(e){return t.showPingLunFn(2)}}}),t._v("差评(1)")])])]),t._v(" "),n("p",{staticStyle:{"margin-top":"20px"}},[t._v("此用户没有评论")]),t._v(" "),t._l(3,function(e,i){return n("ul",{key:i,staticClass:"pjdetail"},[n("li",{staticStyle:{"padding-top":"25px","border-bottom":"1px solid #ccc","padding-bottom":"20px",display:"inline-block"}},[n("div",{staticClass:"pj_l",staticStyle:{float:"left",padding:"0 70px 0 50px"}},[n("p",{staticStyle:{"padding-bottom":"10px"}},[t._v("狄仁杰")]),t._v(" "),n("p",t._l(4,function(t,i){return n("img",{key:i,attrs:{src:o(324),alt:""}})}),0)]),t._v(" "),n("div",{staticClass:"pj_r",staticStyle:{float:"left"}},[n("p",{staticStyle:{color:"rgb(76,76,76)"}},[t._v("希望是真的")]),t._v(" "),n("p",{staticStyle:{"padding-top":"10px",color:"rgb(181,189,205)"}},[t._v("2015-2018 20.52")]),t._v(" "),n("p",{staticStyle:{color:"rgb(255,197,96)",padding:"10px",border:"1px solid",width:"505px","margin-top":"20px"}},[n("span",[t._v("[回复]")]),t._v(":dfdfdf")])])])])}),t._v(" "),n("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"170px"}},[n("div",{staticClass:"page fl",attrs:{id:"pagination1"}}),t._v(" "),n("div",{staticClass:"info fl"})])],2)]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"})])},[],!1,null,null,null);e.default=component.exports}}]);