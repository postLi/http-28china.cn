exports.ids=[19],exports.modules={100:function(t,e,l){t.exports=l.p+"img/017cd2b.gif"},439:function(t,e,l){"use strict";l.r(e);var o={name:"Add",components:{LllDialog:l(94).a},props:{show:{type:Boolean,default:!1}},data:()=>({popTitle:"提货派车单"}),computed:{showDiv(t,e){return this.show}},methods:{closeDialog(){this.$emit("close")}}},r=l(0);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("LllDialog",{attrs:{"is-show":t.showDiv,title:t.popTitle},on:{close:t.closeDialog}},[o("div",{attrs:{slot:"header"},slot:"header"},[t._v("我要申请入驻")]),t._v(" "),o("div",{staticClass:"dialog_publish_main",attrs:{slot:"main"},slot:"main"},[o("form",{staticClass:"layui-form",staticStyle:{width:"400px","padding-bottom":"30px"},attrs:{action:""}},[o("div",{staticClass:"layui-form-item"},[o("label",{staticClass:"layui-form-label"},[o("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("公司名称:")]),t._v(" "),o("div",{staticClass:"layui-input-block"},[o("input",{staticClass:"layui-input",attrs:{type:"text",name:"title","lay-verify":"title",autocomplete:"off",placeholder:"请输入公司名称"}})])]),t._v(" "),o("div",{staticClass:"layui-form-item"},[o("label",{staticClass:"layui-form-label"},[o("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("联系人:")]),t._v(" "),o("div",{staticClass:"layui-input-block"},[o("input",{staticClass:"layui-input",attrs:{type:"text",name:"title","lay-verify":"title",autocomplete:"off",placeholder:"请输入公司名称"}})])]),t._v(" "),o("div",{staticClass:"layui-form-item"},[o("label",{staticClass:"layui-form-label"},[o("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("电话:")]),t._v(" "),o("div",{staticClass:"layui-input-block"},[o("input",{staticClass:"layui-input",attrs:{type:"text",name:"title","lay-verify":"title",autocomplete:"off",placeholder:"请输入公司名称"}})])]),t._v(" "),o("div",{staticClass:"layui-form-item layui-form-text"},[o("label",{staticClass:"layui-form-label"},[t._v("普通文本域")]),t._v(" "),o("div",{staticClass:"layui-input-block"},[o("textarea",{staticClass:"layui-textarea",attrs:{placeholder:"请输入内容"}})])]),t._v(" "),o("div",{staticClass:"layui-form-item"},[o("div",{staticClass:"layui-input-block"},[o("button",{staticClass:"layui-btn",staticStyle:{width:"290px"},attrs:{"lay-submit":"","lay-filter":"demo1"}},[t._v("立即申请")])])]),t._v(" "),o("p",{staticStyle:{"padding-left":"30px",height:"30px","line-height":"30px"}},[t._v("您还可以选择在线咨询："),o("a",{attrs:{href:""}},[o("img",{attrs:{src:l(100)}}),t._v("qq交谈")])])])]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"})])},[],!1,function(t){},"744349cc","433e5f5e");e.default=component.exports},87:function(t,e,l){var content=l(93);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=l(3).default;t.exports.__inject__=function(t){o("4b3ea2f6",content,!0,t)}},92:function(t,e,l){"use strict";l.r(e);var o=l(87),r=l.n(o);for(var c in o)"default"!==c&&function(t){l.d(e,t,function(){return o[t]})}(c);e.default=r.a},93:function(t,e,l){(t.exports=l(2)(!1)).push([t.i,".dialog{position:relative;color:#2e2c2d;font-size:16px}.dialog .dialog-cover{background:rgba(0,0,0,.5);position:fixed;z-index:200;top:0;left:0;width:100%;height:100%}.dialog .dialog-content{position:fixed;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:546px;box-shadow:-2px 0 8px 0 hsla(0,0%,66.3%,.35);border-radius:5px;z-index:300;background:#fff}.dialog .dialog_head .dialog_tit{display:inline-block;width:89%;padding:10px;text-align:center;color:#666;font-size:18px}.dialog .dialog_main{padding:10px;display:inline-block;font-size:14px}",""])},94:function(t,e,l){"use strict";var o={props:{isShow:{type:Boolean,default:!1,required:!0},title:{type:String,default:"标题"},widNum:{type:Number,default:86.5},leftSite:{type:Number,default:6.5},topDistance:{type:Number,default:35},pdt:{type:Number,default:22},pdb:{type:Number,default:47}},computed:{showdiv(t){return this.isShow}},methods:{closeMyself(){this.$emit("close")}}},r=l(0);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"dialog"},[t._ssrNode((t.showdiv?'<div class="dialog-cover back"></div>':"\x3c!----\x3e")+" "),l("transition",{attrs:{name:"drop"}},[t.showdiv?l("div",{staticClass:"dialog-content"},[l("div",{staticClass:"dialog_head back"},[l("div",{staticClass:"dialog_tit",staticStyle:{float:"left"}},[t._t("header",[t._v(t._s(t.title))])],2),t._v(" "),l("div",{staticClass:"layui-btn-group",staticStyle:{float:"right"},on:{click:t.closeMyself}},[l("button",{staticStyle:{background:"#fff",border:"none",cursor:"pointer"},attrs:{type:"text"}},[l("i",{staticClass:"layui-icon layui-icon-close",staticStyle:{"font-size":"30px",color:"#1E9FFF"}})])])]),t._v(" "),l("div",{staticClass:"dialog_main"},[t._t("main",[t._v("内容")])],2),t._v(" "),l("div",{staticClass:"dialog_footer"},[t._t("footer",[t._v("底部")])],2)]):t._e()])],2)},[],!1,function(t){var e=l(92);e.__inject__&&e.__inject__(t)},null,"5e3d0cec");e.a=component.exports}};
//# sourceMappingURL=55f55a5475b9b8a4bc26.js.map