webpackJsonp([42],{"2TZU":function(e,o,t){"use strict";function r(e){t("bCu7")}Object.defineProperty(o,"__esModule",{value:!0});var n=t("eBsr"),a=t("In0X"),i=t("VU/8"),s=r,l=i(n.a,a.a,s,null,null);o.default=l.exports},EHFL:function(e,o){},In0X:function(e,o,t){"use strict";var r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"ComplaintInfo identification"},[e._m(0),e._v(" "),t("div",{class:[e.stepname,e.step]}),e._v(" "),t("div",{staticClass:"ComplaintInfomation"},["step-one"==e.stepname?t("div",{},[t("div",{staticClass:"complaint_content complaint_orderInfo"},[t("h2",[e._v("订单信息")]),e._v(" "),t("div",{staticClass:"orderInfo"},[t("ul",[t("li",[e._v("订单号："+e._s(e.orderForm.orderSerial))]),e._v(" "),t("li",[e._v("货品名称："+e._s(e.orderForm.goodsName))]),e._v(" "),t("li",[e._v("货品预估总体积（方）："+e._s(e.orderForm.goodsVolume))]),e._v(" "),t("li",[e._v("出发地："+e._s(e.orderForm.startAddress))]),e._v(" "),t("li",[e._v("发货人："+e._s(e.orderForm.consignor))]),e._v(" "),t("li",[e._v("收货人："+e._s(e.orderForm.consignee))])]),e._v(" "),t("ul",[t("li",[e._v("下单时间："+e._s(e._f("parseTime")(e.orderForm.useTime))+" \n                                "),t("el-popover",{attrs:{width:"100%",trigger:"hover"}},[t("p",{staticStyle:{margin:"5px"}},[e._v("提货时间："+e._s(e._f("parseTime")(e.orderForm.pickUpGoodsTime)))]),e._v(" "),t("p",{staticStyle:{margin:"5px"}},[e._v("发货时间："+e._s(e._f("parseTime")(e.orderForm.deliveryTime)))]),e._v(" "),t("p",{staticStyle:{margin:"5px"}},[e._v("收货时间："+e._s(e._f("parseTime")(e.orderForm.receiveTime)))]),e._v(" "),t("span",{staticClass:"reference",attrs:{slot:"reference",icon:"el-icon-caret-bottom"},slot:"reference"},[e._v("更多"),t("i",{attrs:{icon:"el-icon-caret-bottom"}})])])],1),e._v(" "),t("li",[e._v("货品总数量（件）："+e._s(e.orderForm.goodsNum))]),e._v(" "),t("li",[e._v("货物类型："+e._s(e.orderForm.goodsTypeName))]),e._v(" "),t("li",[e._v("到达地："+e._s(e.orderForm.endAddress))]),e._v(" "),t("li",[e._v("发货人手机："+e._s(e.orderForm.consignorPhone))]),e._v(" "),t("li",[e._v("收货人手机："+e._s(e.orderForm.consigneePhone))])]),e._v(" "),t("ul",[t("li",[e._v("物流公司："+e._s(e.orderForm.wlName))]),e._v(" "),t("li",[e._v("货品预估总重量（公斤）："+e._s(e.orderForm.goodsWeight))]),e._v(" "),t("li",[e._v("预估总费用（元）："+e._s(e.orderForm.totalAmount))])])])]),e._v(" "),t("div",{staticClass:"complaint_content complaint_Reason"},[t("h2",[e._v("我要投诉")]),e._v(" "),t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"label-width":"80px",center:""}},[t("el-form-item",{attrs:{label:"投诉原因"}},[t("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.ruleForm.complainType,callback:function(o){e.$set(e.ruleForm,"complainType",o)},expression:"ruleForm.complainType"}},e._l(e.optionsReason,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),t("el-form-item",{staticClass:"ReasonInfo",attrs:{label:"投诉说明"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:10},placeholder:"请输入内容",maxlength:e.Reasonmaxlength},model:{value:e.ruleForm.complainDes,callback:function(o){e.$set(e.ruleForm,"complainDes",o)},expression:"ruleForm.complainDes"}}),e._v(" "),t("p",{staticClass:"count"},[t("span",[e._v(e._s(e.ruleForm.complainDes.length))]),e._v("/"+e._s(e.Reasonmaxlength))])],1),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(o){e.submitForm("ruleForm")}}},[e._v("提交投诉")])],1)],1)]):t("div",[t("div",{staticClass:"complaint_content complaint_info"},[t("h2",[e._v("投诉")]),e._v(" "),t("div",[t("p",[e._v("投诉原因")]),e._v(" "),t("p",[t("span",[e._v(e._s(e.complaintForm.complainTypeName))])]),e._v(" "),t("p",[e._v("控诉说明")]),e._v(" "),t("p",[e._v(e._s(e.complaintForm.complainDes))]),e._v(" "),t("p",[e._v("工单编号")]),e._v(" "),t("p",[t("span",[e._v(e._s(e.complaintForm.workSerial))])]),e._v(" "),t("p",[e._v("投诉时间")]),e._v(" "),t("p",[e._v(e._s(e.complaintForm.complainTime))])])]),e._v(" "),t("div",{staticClass:"complaint_content complaint_reply"},["step-tow"==e.stepname?t("div",[e._m(1),e._v(" "),t("p",{staticStyle:{"text-align":"center"}},[e._v("物流公司会尽快处理，请耐心等待！")])]):t("div",[t("h2",[e._v(e._s(e.UserInfo.companyName)+"物流公司回复")]),e._v(" "),t("div",{staticClass:"complaint_replyinfo"},[e._v("\n                                "+e._s(e.complaintForm.reply)+"\n                            ")])])]),e._v(" "),t("div",{staticClass:"complaint_content complaint_reply"},[t("h2",[e._v(e._s(e.UserInfo.companyName)+"物流公司回复")]),e._v(" "),"step-tow"==e.stepname?t("div",{staticClass:"replyInfo"},[t("div",{staticClass:"replyInfo"},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:10},placeholder:"请输入内容",maxlength:e.maxlength},model:{value:e.reply,callback:function(o){e.reply=o},expression:"reply"}}),e._v(" "),t("p",{staticClass:"count"},[t("span",[e._v(e._s(e.textarea.length))]),e._v("/"+e._s(e.maxlength))])],1),e._v(" "),t("el-button",{attrs:{type:"primary",disabled:!e.reply},on:{click:e.handlerReply}},[e._v("回复")])],1):t("div",{staticClass:"complaint_replyinfo"},[e._v("\n                            "+e._s(e.complaintForm.reply)+"\n                        ")])])])])])},n=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"carrierTitle"},[t("div",{staticClass:"realname"},[t("h2",[e._v("投诉跟踪")])])])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("h2",[t("i",{staticClass:"tishi"}),e._v(" 等待物流公司处理")])}],a={render:r,staticRenderFns:n};o.a=a},bCu7:function(e,o){},eBsr:function(e,o,t){"use strict";var r=t("woOf"),n=t.n(r),a=t("//Fk"),i=t.n(a),s=t("nOfT"),l=(t.n(s),t("EHFL")),c=(t.n(l),t("TIfe")),m=t("wXtz"),p=t("t5DY");t("0xDb");o.a={components:{},data:function(){return{complainType:"AF041",Reasonmaxlength:200,maxlength:100,step:"step",stepname:"",textarea:"",complaintForm:{},UserInfo:{},ruleForm:{complainType:"",complainDes:"",platformOrderType:"1"},orderForm:{},optionsReason:[],reply:"",origin:""}},mounted:function(){this.firstblood()},methods:{firstblood:function(){var e=this,o=this.$route.query.orderSerial;this.$route.query.type&&(this.origin=this.$route.query.type),Object(m.c)(o).then(function(t){console.log("判断第几步",t),200==t.status?(e.complaintForm=t.data,e.stepname="AF04002"==e.complaintForm.complainStatus?"step-three":"step-tow"):(e.stepname="step-one",i.a.all([Object(p.b)(o),Object(p.c)(e.complainType)]).then(function(o){console.log(e.orderForm),e.orderForm=o[0].data,e.optionsReason=o[1].data,e.orderForm.complainType=e.optionsReason[0].code,e.UserInfo=Object(c.d)()}).catch(function(o){e.$message({type:"info",message:o.errorInfo})}))})},submitForm:function(e){var o=this;this.$refs[e].validate(function(e){if(console.log(),!e)return console.log("error submit!!"),!1;o.$confirm("确认要投诉该物流公司吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.ruleForm.complainTypeName=o.optionsReason.find(function(e){return e.code===o.ruleForm.complainType}).name,o.ruleForm.complainName=o.UserInfo.contactsName,o.ruleForm.complainId=o.UserInfo.id,o.ruleForm.orderSerial=o.$route.query.orderSerial,Object(m.a)(o.ruleForm).then(function(e){console.log(e),o.stepname="step-tow",o.firstblood()}).catch(function(e){o.$message({type:"info",message:e.errorInfo})})}).catch(function(){o.$message({type:"info",message:"已取消"})})})},handlerReply:function(){var e=this,o=n()({},{reply:this.reply},{id:this.complaintForm.id},{replyId:this.UserInfo.id,replyName:this.UserInfo.contactsName});Object(m.b)(o).then(function(o){console.log(o),e.firstblood()})}}}},nOfT:function(e,o){},t5DY:function(e,o,t){"use strict";function r(e){return e=e||"",v.b.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(o){return o.code=e,o})}function n(){return _?new d.a(function(e){e(_)}):v.b.get("/anfacommonservice/common/oss/v1/policy").then(function(e){return _=e.data||"",setTimeout(function(){_=""},18e4),_})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.b.get("/28-web/sysDict/getSysDictByCodeGet/"+e).then(function(e){return e.data||[]})}function i(e){return v.b.axios({url:"/28-web/sysDict/getSysDictByCodeGet/"+e,method:"get"})}function s(e){return v.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile?mobile="+e,method:"get"})}function l(e){return v.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getDriverInfoByMobile?mobile="+e,method:"get"})}function c(e){return v.b.get("/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile",{params:{mobile:e}})}function m(e){return v.b.axios({url:"/aflcorderservice/order/fclOrder/v1/getDetailsByOrderSerial/"+e,method:"get"})}function p(e,o){var t=new FormData;for(var r in o)t.append(r,o[r]);var n="";for(var a in o)n+="&"+a+"="+o[a];return v.b.request({url:"/aflc-common/common/aflcMemberCenter/v1/updatePassword?memberType="+e,method:"put",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:n})}o.a=r,o.h=n,o.f=a,o.c=i,o.g=s,o.d=l,o.e=c,o.b=m,o.i=p;var u=t("//Fk"),d=t.n(u),v=t("Vo7i"),_=void 0},wXtz:function(e,o,t){"use strict";function r(e,o,t){return s.b.axios({url:"/"+l+"/order/aflcOrderComplain/v1/listCompanyComplain",method:"post",data:{currentPage:e,pageSize:o,vo:t}})}function n(e){return s.b.axios({url:"/"+l+"/order/aflcOrderComplain/v1/add",method:"post",data:e})}function a(e){return s.b.axios({url:"/"+l+"/order/aflcOrderComplain/v1/findAflcOrderComplainByOrderSerial/"+e,method:"get"})}function i(e){return s.b.axios({url:"/"+l+"/order/aflcOrderComplain/v1/update",method:"put",data:e})}o.d=r,o.a=n,o.c=a,o.b=i;var s=t("Vo7i"),l="aflcorderservice"}});