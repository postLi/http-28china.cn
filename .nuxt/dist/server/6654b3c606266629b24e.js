exports.ids=[64],exports.modules={210:function(t,e,o){"use strict";o.r(e);var l=o(19),r=o.n(l),n={name:"Add",components:{LllDialog:o(97).a},props:{show:{type:Boolean,default:!1},types:{type:Number,default:1}},data:()=>({popTitle:"提货派车单",falseMsg:"",form:{companyName:"",contactsName:"",msg:"",mobile:""},isCompanyName:!1,isContactsName:!1,ismobile:!1}),computed:{showDiv(t,e){return this.show}},watch:{types(t,e){}},methods:{onTIJ(){let t="";if(t="http://localhost:3000",!this.form.companyName.length)return this.ismobile=!0,this.falseMsg="请输入公司名称",!1;if(!this.form.contactsName.length)return this.ismobile=!0,this.falseMsg="请输入联系人",!1;if(!this.form.mobile.length)return this.ismobile=!0,this.falseMsg="请输入电话",!1;if(this.form.mobile&&(this.ismobile=!1,!window.AFLC_VALID.MOBILE.test(this.form.mobile)))return this.ismobile=!0,this.form.mobile="",this.falseMsg="请输入正确的电话",!1;1==this.types?(this.form.type=1,this.form.source=1):(this.form.type=2,this.form.source=2),console.log(this.form,"this.form"),r.a.post(t+"/xlapi/28-web/leavingmsg/",this.form).then(t=>{console.log(t,"ressss"),200==t.data.status&&(layer.msg("提交成功，客服稍后将会与您联系",{tiem:3e3},()=>{}),this.$emit("close"),this.form={})})},closeDialog(){this.$emit("close"),this.form={},this.ismobile=!1}}},c=o(1);var component=Object(c.a)(n,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("LllDialog",{attrs:{"is-show":t.showDiv,title:t.popTitle},on:{close:t.closeDialog}},[l("div",{attrs:{slot:"header"},slot:"header"},[t._v("我要申请入驻")]),t._v(" "),l("div",{staticClass:"dialog_publish_main",attrs:{slot:"main"},slot:"main"},[l("form",{staticClass:"layui-form",staticStyle:{width:"400px"},attrs:{action:""}},[l("div",{staticClass:"layui-form-item"},[l("label",{staticClass:"layui-form-label"},[l("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("公司名称:")]),t._v(" "),l("div",{staticClass:"layui-input-block"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.form.companyName,expression:"form.companyName"}],staticClass:"layui-input",attrs:{maxlength:"30",type:"text",placeholder:"请输入公司名称"},domProps:{value:t.form.companyName},on:{input:function(e){e.target.composing||t.$set(t.form,"companyName",e.target.value)}}})])]),t._v(" "),l("div",{staticClass:"layui-form-item"},[l("label",{staticClass:"layui-form-label"},[l("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("联系人:")]),t._v(" "),l("div",{staticClass:"layui-input-block"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.form.contactsName,expression:"form.contactsName"}],staticClass:"layui-input",attrs:{maxlength:"20",type:"text",placeholder:"请输入联系人"},domProps:{value:t.form.contactsName},on:{input:function(e){e.target.composing||t.$set(t.form,"contactsName",e.target.value)}}})])]),t._v(" "),l("div",{staticClass:"layui-form-item"},[l("label",{staticClass:"layui-form-label"},[l("i",{staticStyle:{color:"red"}},[t._v("*")]),t._v("电话:")]),t._v(" "),l("div",{staticClass:"layui-input-block"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile,expression:"form.mobile"}],staticClass:"layui-input",attrs:{type:"text",placeholder:"请输入电话",maxlength:"11"},domProps:{value:t.form.mobile},on:{input:function(e){e.target.composing||t.$set(t.form,"mobile",e.target.value)}}})])]),t._v(" "),l("div",{staticClass:"layui-form-item layui-form-text"},[l("label",{staticClass:"layui-form-label"},[t._v("给我留言:")]),t._v(" "),l("div",{staticClass:"layui-input-block"},[l("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.msg,expression:"form.msg"}],staticClass:"layui-textarea",attrs:{maxlength:"100",placeholder:"请输入留言"},domProps:{value:t.form.msg},on:{input:function(e){e.target.composing||t.$set(t.form,"msg",e.target.value)}}})]),t._v(" "),t.ismobile?l("p",{staticStyle:{color:"red","text-align":"center"}},[t._v(t._s(t.falseMsg))]):t._e()])]),t._v(" "),l("div",{},[l("button",{staticStyle:{width:"290px","margin-left":"110px",padding:"10px 0",background:"#0d91e9",border:"none"},on:{click:t.onTIJ}},[t._v("立即申请")]),t._v(" "),l("p",{staticStyle:{"margin-left":"110px",height:"30px","line-height":"30px"}},[t._v("您还可以选择在线咨询："),l("a",{attrs:{href:""}},[l("img",{attrs:{src:o(94)}}),t._v("qq交谈")])])])]),t._v(" "),l("div",{attrs:{slot:"footer"},slot:"footer"})])},[],!1,function(t){},"2eb77d0c","4702ad60");e.default=component.exports},83:function(t,e,o){var content=o(96);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var l=o(3).default;t.exports.__inject__=function(t){l("4b3ea2f6",content,!0,t)}},94:function(t,e,o){t.exports=o.p+"img/017cd2b.gif"},95:function(t,e,o){"use strict";o.r(e);var l=o(83),r=o.n(l);for(var n in l)"default"!==n&&function(t){o.d(e,t,function(){return l[t]})}(n);e.default=r.a},96:function(t,e,o){(t.exports=o(2)(!1)).push([t.i,".dialog{position:relative;color:#2e2c2d;font-size:16px}.dialog .dialog-cover{background:rgba(0,0,0,.5);position:fixed;z-index:200;top:0;left:0;width:100%;height:100%}.dialog .dialog-content{position:fixed;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);width:546px;box-shadow:-2px 0 8px 0 hsla(0,0%,66.3%,.35);border-radius:5px;z-index:300;background:#fff}.dialog .dialog_head .dialog_tit{display:inline-block;width:89%;padding:10px;text-align:center;color:#666;font-size:18px}.dialog .dialog_main{padding:10px;display:inline-block;font-size:14px}",""])},97:function(t,e,o){"use strict";var l={props:{isShow:{type:Boolean,default:!1,required:!0},title:{type:String,default:"标题"},widNum:{type:Number,default:86.5},leftSite:{type:Number,default:6.5},topDistance:{type:Number,default:35},pdt:{type:Number,default:22},pdb:{type:Number,default:47}},computed:{showdiv(t){return this.isShow}},methods:{closeMyself(){this.$emit("close")}}},r=o(1);var component=Object(r.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dialog"},[t._ssrNode((t.showdiv?'<div class="dialog-cover back"></div>':"\x3c!----\x3e")+" "),o("transition",{attrs:{name:"drop"}},[t.showdiv?o("div",{staticClass:"dialog-content"},[o("div",{staticClass:"dialog_head back"},[o("div",{staticClass:"dialog_tit",staticStyle:{float:"left"}},[t._t("header",[t._v(t._s(t.title))])],2),t._v(" "),o("div",{staticClass:"layui-btn-group",staticStyle:{float:"right"},on:{click:t.closeMyself}},[o("button",{staticStyle:{background:"#fff",border:"none",cursor:"pointer"},attrs:{type:"text"}},[o("i",{staticClass:"layui-icon layui-icon-close",staticStyle:{"font-size":"30px",color:"#1E9FFF"}})])])]),t._v(" "),o("div",{staticClass:"dialog_main"},[t._t("main",[t._v("内容")])],2),t._v(" "),o("div",{staticClass:"dialog_footer"},[t._t("footer",[t._v("底部")])],2)]):t._e()])],2)},[],!1,function(t){var e=o(95);e.__inject__&&e.__inject__(t)},null,"5e3d0cec");e.a=component.exports}};
//# sourceMappingURL=6654b3c606266629b24e.js.map