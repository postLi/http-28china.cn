webpackJsonp([64],{Mp4K:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("自定义指令")]),e._v(" "),a("blockquote",[e._v("\n    目前所有自定义指令都是注册到全局，可在子组件中直接使用\n  ")]),e._v(" "),a("h3",[e._v("v-numberOnly")]),e._v(" "),a("p",[e._v("只允许输入数字")]),e._v(" "),a("input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{type:"text"}}),e._v(" "),a("blockquote",[e._v("\n    只适用于input、el-input标签\n  ")]),e._v(" "),a("p",[e._v("修饰符 v-number-only:point 允许小数点")]),e._v(" "),a("input",{directives:[{name:"number-only",rawName:"v-number-only:point",arg:"point"}],attrs:{type:"text"}}),e._v(" "),a("p",[e._v("elementUI 输入框")]),e._v(" "),a("el-input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{clearable:""}}),e._v(" "),a("p",[e._v("带校检的输入框")]),e._v(" "),a("el-form",[a("el-form-item",{attrs:{label:"账户账号"}},[a("el-input",{directives:[{name:"numberOnly",rawName:"v-numberOnly"}],attrs:{"auto-complete":"off",maxlength:"20",clearable:""}})],1)],1),e._v(" "),a("h3",[e._v("v-showPicture")]),e._v(" "),a("p",[e._v("弹窗展示图片")]),e._v(" "),a("button",{directives:[{name:"showPicture",rawName:"v-showPicture"}],attrs:{imgurl:"http://aflc.oss-cn-shenzhen.aliyuncs.com//tms/JepzficX6twzc2F76MtED8kMC53pxQmH.png"}},[e._v("点击预览")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),a("h3",[e._v("v-Clipboard")]),e._v(" "),a("p",[e._v("复制文案")]),e._v(" "),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.inputData,expression:"inputData",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{type:"primary",icon:"document"}},[e._v("copy")]),e._v(" "),e._m(2),e._v(" "),a("h3",[e._v("可移动的dialog")]),e._v(" "),a("p",[e._v("应用在el-dialog标签上")]),e._v(" "),a("div",{staticClass:"components-container"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogTableVisible=!0}}},[e._v("open a Drag Dialog")]),e._v(" "),a("el-dialog",{directives:[{name:"el-drag-dialog",rawName:"v-el-drag-dialog"}],attrs:{title:"Shipping address",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[e._v("\n    asfasfasf\n  ")])],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("blockquote",[e._v("\n    目前获取大图链接的逻辑是："),a("br"),e._v("el.getAttribute('imgurl') || el.src || el.href\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("先尝试获取自定义属性imgurl；")]),e._v(" "),a("li",[e._v("如果没有，则将其当作图片对待，获取src属性；")]),e._v(" "),a("li",[e._v("最后前面都没拿到链接，则当a标签处理，获取其href属性")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("\n      v-clipboard:copy='inputData' 要复制的数据\n    ")]),e._v(" "),a("li",[e._v("\n      v-clipboard:success 复制成功后的回调函数\n    ")]),e._v(" "),a("li",[e._v("\n      v-clipboard:error 复制失败后的回调函数\n    ")])])}],r={render:n,staticRenderFns:i};t.a=r},pY3o:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("q2Rx"),i=a("Mp4K"),r=a("VU/8"),l=r(n.a,i.a,null,null,null);t.default=l.exports},q2Rx:function(e,t,a){"use strict";t.a={data:function(){return{dialogTableVisible:!1,inputData:"安发网络"}},methods:{clipboardSuccess:function(){this.$message({message:"复制成功",type:"success",duration:1500})}}}}});