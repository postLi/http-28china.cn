webpackJsonp([25,60,61],{"6P1d":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"add-eview",attrs:{title:"",visible:e.dialogVisible,"custom-class":"add-review","close-on-click-modal":!1,"modal-append-to-body":!1,width:"800px","before-close":e.close}},[r("div",{staticClass:"add-review-wrapper"},[r("div",{staticClass:"add-tip"},[e._v("认真填写评价平台会给你推荐最优质的货源")]),e._v(" "),r("h3",[e._v("您可以对货主进行评价哦！")]),e._v(" "),r("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":e.formLabelWidth,"label-position":"right",size:"mini"}},[r("el-form-item",{attrs:{label:"",prop:"carrierAddr"}},[r("el-form-item",{attrs:{"label-width":"auto",label:"货物包装："}},[r("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.goodsRank,callback:function(t){e.goodsRank=t},expression:"goodsRank"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-width":"auto",label:"付款及时："}},[r("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.payRank,callback:function(t){e.payRank=t},expression:"payRank"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-width":"auto",label:"装卸安排："}},[r("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.dockRank,callback:function(t){e.dockRank=t},expression:"dockRank"}})],1)],1),e._v(" "),r("el-form-item",{staticClass:"carrierRemarks",attrs:{label:"评价说明",prop:"carrierRemarks"}},[r("el-input",{attrs:{rows:10,type:"textarea",maxlength:100},model:{value:e.form.evaluationDes,callback:function(t){e.$set(e.form,"evaluationDes",t)},expression:"form.evaluationDes"}}),e._v(" "),r("div",{staticClass:"last-input-num"},[e._v("还可输入"),r("span",[e._v(e._s(100-e.form.evaluationDes.length))]),e._v("字")])],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"large"},on:{click:e.close}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{size:"large",type:"primary"},on:{click:e.submitFeeSetup}},[e._v("提交评价")])],1)])},o=[],a={render:i,staticRenderFns:o};t.a=a},"7WEh":function(e,t,r){"use strict";function i(e){r("m2Yb")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("AZ5Q"),a=r("6P1d"),s=r("VU/8"),n=i,l=s(o.a,a.a,n,null,null);t.default=l.exports},AZ5Q:function(e,t,r){"use strict";var i=r("woOf"),o=r.n(i),a=r("K2xx");t.a={props:{dialogVisible:{type:Boolean,default:!1},orderSerial:{type:String,default:""},shipperId:{type:String,default:""},companyId:{type:String,default:""}},data:function(){return{form:{companyId:"",assessLevel:"",evaluationDes:"",evaluationId:"",evaluationName:"",orderSerial:"",goodsStarLevel:"",payStarLevel:"",dockStarLevel:"",shipperId:""},totalRate:["AF0360203","AF0360202","AF0360201"],priceRate:["AF036040201","AF036040202","AF036040203","AF036040204","AF036040205"],goodsRate:["AF036040101","AF036040102","AF036040103","AF036040104","AF036040105"],dockRate:["AF036040301","AF036040302","AF036040303","AF036040304","AF036040305"],rules:{},rankColor:["#99A9BF","#F7BA2A","#FF9900"],texts:["非常不满意","不满意","一般","满意","非常满意"],goodsRank:5,payRank:5,dockRank:5,formLabelWidth:"150px",loading:!1}},watch:{dialogVisible:function(e){e&&this.reset()},goodsRank:{handler:function(e){this.form.goodsStarLevel=this.goodsRate[e-1],this.setTotalRank()},immediate:!0},payRank:{handler:function(e){this.form.payStarLevel=this.priceRate[e-1],this.setTotalRank()},immediate:!0},dockRank:{handler:function(e){this.form.dockStarLevel=this.dockRate[e-1],this.setTotalRank()},immediate:!0}},mounted:function(){},methods:{setTotalRank:function(){var e=this.goodsRank+this.payRank+this.dockRank;this.form.assessLevel=e<7?this.totalRate[0]:e<10?this.totalRate[1]:this.totalRate[2]},close:function(e){this.$emit("update:dialogVisible",!1),this.$emit("close"),"function"==typeof e&&e()},reset:function(){this.form=o()({},this.$data.form),this.form.evaluationId=this.otherinfo.id,this.form.evaluationName=this.otherinfo.contactsName,this.form.orderSerial=this.orderSerial,this.form.shipperId=this.shipperId,this.form.companyId=this.companyId},submitFeeSetup:function(){var e=this;this.$refs.ruleForm.validate(function(t){e.loading=!0,t&&Object(a.g)(e.form).then(function(t){e.$message.success("保存成功！"),e.loading=!1,e.$emit("success"),e.close()})})}}}},COFR:function(e,t,r){"use strict";function i(e){r("plOv")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("eYD7"),a=r("Fv6q"),s=r("VU/8"),n=i,l=s(o.a,a.a,n,null,null);t.default=l.exports},Fv6q:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"add-eview",attrs:{title:"",visible:e.dialogVisible,"custom-class":"add-review","close-on-click-modal":!1,"modal-append-to-body":!1,width:"800px","before-close":e.close}},[r("div",{staticClass:"add-review-wrapper"},[r("div",{staticClass:"add-tip"},[e._v("认真填写评价平台会给你推荐最优质的物流专线")]),e._v(" "),r("h3",[e._v("物流公司需要您的建议哦！")]),e._v(" "),r("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":e.formLabelWidth,"label-position":"right",size:"mini"}},[r("el-form-item",{attrs:{label:"",prop:"carrierAddr"}},[r("el-form-item",{attrs:{"label-width":"auto",label:"服务价格："}},[r("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.priceRank,callback:function(t){e.priceRank=t},expression:"priceRank"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-width":"auto",label:"服务质量："}},[r("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.serviceRank,callback:function(t){e.serviceRank=t},expression:"serviceRank"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-width":"auto",label:"运输时效："}},[r("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.shipRank,callback:function(t){e.shipRank=t},expression:"shipRank"}})],1)],1),e._v(" "),r("el-form-item",{staticClass:"carrierRemarks",attrs:{label:"评价说明",prop:"carrierRemarks"}},[r("el-input",{attrs:{rows:10,type:"textarea",maxlength:100},model:{value:e.form.evaluationDes,callback:function(t){e.$set(e.form,"evaluationDes",t)},expression:"form.evaluationDes"}}),e._v(" "),r("div",{staticClass:"last-input-num"},[e._v("还可输入"),r("span",[e._v(e._s(100-e.form.evaluationDes.length))]),e._v("字")])],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"large"},on:{click:e.close}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{size:"large",type:"primary"},on:{click:e.submitFeeSetup}},[e._v("提交评价")])],1)])},o=[],a={render:i,staticRenderFns:o};t.a=a},HNpm:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"manage-orderdetail page-main"},[e.iscancel?e._e():r("div",{staticClass:"tab-info-title"},[e._m(0)]),e._v(" "),e.iscancel?e._e():r("div",{staticClass:"rate-status-bar"},[e.inited?r("el-steps",{attrs:{active:e.active,"finish-status":"success"}},e._l(e.flows,function(t,i){return r("el-step",{key:i,attrs:{title:t.done?t.donetext:t.text,description:e._f("parseTime")(t.time)}})})):e._e()],1),e._v(" "),r("div",{staticClass:"order-info-wrapper"},[r("div",{staticClass:"rate_content rate_orderInfo"},[r("h2",[e._v("订单信息")]),e._v(" "),r("div",{staticClass:"orderInfo"},[r("ul",[r("li",[e._v("订单号："+e._s(e.orderForm.orderSerial))]),e._v(" "),r("li",[e._v("货品名称："+e._s(e.orderForm.goodsName))]),e._v(" "),r("li",[e._v("货品预估总体积（方）："+e._s(e.orderForm.goodsVolume))]),e._v(" "),r("li",[e._v("出发地："+e._s(e.orderForm.consignorAddress))]),e._v(" "),r("li",[e._v("发货人："+e._s(e.orderForm.consignor))]),e._v(" "),r("li",[e._v("收货人："+e._s(e.orderForm.consignee))])]),e._v(" "),r("ul",[r("li",[e._v("下单时间："+e._s(e.orderForm.createTime)+"\n                      "),e.iscancel?e._e():r("el-popover",{attrs:{width:"100%",trigger:"hover"}},[r("p",{staticStyle:{margin:"5px"}},[e._v("提货时间："+e._s(e._f("parseTime")(e.orderForm.carrierTime)))]),e._v(" "),r("p",{staticStyle:{margin:"5px"}},[e._v("发货时间："+e._s(e._f("parseTime")(e.orderForm.deliveryTime)))]),e._v(" "),r("p",{staticStyle:{margin:"5px"}},[e._v("收货时间："+e._s(e._f("parseTime")(e.orderForm.receiveTime)))]),e._v(" "),r("span",{staticClass:"reference",attrs:{slot:"reference",icon:"el-icon-caret-bottom"},slot:"reference"},[e._v("更多"),r("i",{attrs:{icon:"el-icon-caret-bottom"}})])])],1),e._v(" "),r("li",[e._v("货品总数量（件）："+e._s(e.orderForm.goodsNum))]),e._v(" "),r("li",[e._v("货物类型："+e._s(e.orderForm.goodsTypeName))]),e._v(" "),r("li",[e._v("到达地："+e._s(e.orderForm.consigneeAddress))]),e._v(" "),r("li",[e._v("发货人手机："+e._s(e.orderForm.consignorPhone))]),e._v(" "),r("li",[e._v("收货人手机："+e._s(e.orderForm.consigneePhone))])]),e._v(" "),r("ul",[r("li",[e._v("物流公司："+e._s(e.orderForm.wlName))]),e._v(" "),r("li",[e._v("货品预估总重量（公斤）："+e._s(e.orderForm.goodsWeight))]),e._v(" "),r("li",[e._v("预估总费用（元）："+e._s(e.orderForm.totalAmount))])])])])]),e._v(" "),r("div",{staticClass:"order-info-wrapper"},[r("div",{staticClass:"order-control-pannel"},[1===e.active?r("div",{staticClass:"order-step-1 order-control-info"},[r("div",{staticClass:"status-txt"},[e._v("\n                  订单状态：货主已下单，等待物流公司承运。\n              ")]),e._v(" "),r("div",{staticClass:"order-id"},[e._v("\n                  订单号："+e._s(e.orderForm.orderSerial)+"\n              ")]),e._v(" "),e.iscarrier?r("div",{staticClass:"order-button"},[r("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(t){e.confirmCarrier(e.orderForm)}}},[e._v("确定承运")]),e._v(" "),r("el-button",{attrs:{type:"danger",size:e.btnsize,plain:""},on:{click:function(t){e.cancelOrder(e.orderForm)}}},[e._v("取消订单")])],1):e._e(),e._v(" "),e.iscarrier?e._e():r("div",{staticClass:"order-button"},[r("el-button",{attrs:{type:"danger",size:e.btnsize,plain:""},on:{click:function(t){e.cancelOrder(e.orderForm)}}},[e._v("取消订单")])],1)]):e._e(),e._v(" "),2===e.active?r("div",{staticClass:"order-step-2 order-control-info"},[e.iscarrier?e._e():r("div",{staticClass:"status-txt"},[e._v("\n                  订单状态：物流公司已接单，等待提货。\n              ")]),e._v(" "),e.iscarrier?r("div",{staticClass:"status-txt"},[e._v("\n                  订单状态：货主已下单，等待物流公司尽快提货。\n              ")]):e._e(),e._v(" "),r("div",{staticClass:"order-id"},[e._v("\n                  订单号："+e._s(e.orderForm.orderSerial)+"\n              ")]),e._v(" "),e.iscarrier?r("div",{staticClass:"order-button"},[r("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(t){e.confirmPickUp(e.orderForm)}}},[e._v("确认提货")])],1):e._e()]):e._e(),e._v(" "),3===e.active?r("div",{staticClass:"order-step-3 order-control-info"},[e.iscarrier?e._e():r("div",{staticClass:"status-txt"},[e._v("\n                  订单状态：物流公司已提货，等待发货网点派车前往目的地。\n              ")]),e._v(" "),e.iscarrier?r("div",{staticClass:"status-txt"},[e._v("\n                  订单状态：货物已提，等待发货前往目的地。\n              ")]):e._e(),e._v(" "),r("div",{staticClass:"order-id"},[e._v("\n                  订单号："+e._s(e.orderForm.orderSerial)+"\n              ")]),e._v(" "),e.iscarrier?r("div",{staticClass:"order-button"},[r("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(t){e.confirmDelivery(e.orderForm)}}},[e._v("确认发货")])],1):e._e()]):e._e(),e._v(" "),4===e.active?r("div",{staticClass:"order-step-4 order-control-info"},[e.iscarrier?e._e():r("div",{staticClass:"status-txt"},[e._v("\n                  订单状态：物流公司已经发货，等待签收网点进行确认收货！\n              ")]),e._v(" "),e.iscarrier?r("div",{staticClass:"status-txt"},[e._v("\n                  订单状态：货主货物已经发出，等待收货！\n              ")]):e._e(),e._v(" "),r("div",{staticClass:"order-id"},[e._v("\n                  订单号："+e._s(e.orderForm.orderSerial)+"\n              ")]),e._v(" "),e.iscarrier?r("div",{staticClass:"order-button"},[e.orderForm.complainWorkSerial&&!e.orderForm.reply?r("el-button",{attrs:{type:"warning",size:e.btnsize,plain:""},on:{click:function(t){e.replyComplain(e.orderForm)}}},[e._v("投诉回复")]):e._e(),e._v(" "),e.orderForm.complainWorkSerial&&e.orderForm.reply?r("el-button",{attrs:{type:"warning",size:e.btnsize,plain:""},on:{click:function(t){e.viewComplain(e.orderForm)}}},[e._v("投诉详情")]):e._e(),e._v(" "),r("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(t){e.confirmEvaluate(e.orderForm)}}},[e._v("确认收货")])],1):e._e(),e._v(" "),e.iscarrier?e._e():r("div",{staticClass:"order-button"},[e.orderForm.complainWorkSerial?r("el-button",{attrs:{type:"warning",size:e.btnsize},on:{click:function(t){e.viewComplain(e.orderForm)}}},[e._v("投诉详情")]):e._e(),e._v(" "),e.orderForm.complainWorkSerial?e._e():r("el-button",{attrs:{type:"warning",size:e.btnsize},on:{click:function(t){e.addComplain(e.orderForm)}}},[e._v("投诉")])],1)]):e._e(),e._v(" "),6===e.active?r("div",{staticClass:"order-step-5 order-control-info"},[e.iscarrier?e._e():r("div",{staticClass:"status-txt"},[e._v("\n                  订单状态：货物已到达签收！\n              ")]),e._v(" "),e.iscarrier?r("div",{staticClass:"status-txt"},[e._v("\n                  订单状态：已评价！\n              ")]):e._e(),e._v(" "),r("div",{staticClass:"next-step"},[e._v("\n                  "+e._s(e.orderForm.receiveTime)+"货物已送达签收，感谢您使用安发平台，期待下次继续为您服务。\n              ")]),e._v(" "),r("div",{staticClass:"order-id"},[e._v("\n                  订单号："+e._s(e.orderForm.orderSerial)+"\n              ")]),e._v(" "),e.iscarrier?e._e():r("div",{staticClass:"order-button"},[e._v("\n                  "+e._s(e.orderForm.complainWorkSerial&&e.orderForm.shipperEvaluationId?"":"您可以")+"\n                  "),e.orderForm.complainWorkSerial?e._e():r("el-button",{attrs:{type:"warning",size:e.btnsize},on:{click:function(t){e.addComplain(e.orderForm)}}},[e._v("投诉")]),e._v(" "),e.orderForm.complainWorkSerial?r("el-button",{attrs:{type:"warning",size:e.btnsize},on:{click:function(t){e.viewComplain(e.orderForm)}}},[e._v("投诉详情")]):e._e(),e._v(" "),e.orderForm.transportEvaluationId?e._e():r("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(t){e.addReview(e.orderForm)}}},[e._v("评价")]),e._v(" "),e.orderForm.transportEvaluationId?r("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(t){e.viewReview(e.orderForm)}}},[e._v("评价详情")]):e._e()],1),e._v(" "),e.iscarrier?r("div",{staticClass:"order-button"},[e._v("\n                  "+e._s(e.orderForm.complainWorkSerial&&!e.orderForm.reply||!e.orderForm.transportEvaluationId?"您可以":"")+"\n                   "),e.orderForm.complainWorkSerial&&!e.orderForm.reply?r("el-button",{attrs:{type:"warning",size:e.btnsize,plain:""},on:{click:function(t){e.replyComplain(e.orderForm)}}},[e._v("投诉回复")]):e._e(),e._v(" "),e.orderForm.complainWorkSerial&&e.orderForm.reply?r("el-button",{attrs:{type:"warning",size:e.btnsize,plain:""},on:{click:function(t){e.viewComplain(e.orderForm)}}},[e._v("投诉详情")]):e._e(),e._v(" "),e.orderForm.shipperEvaluationId?e._e():r("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(t){e.addReview(e.orderForm)}}},[e._v("评价")]),e._v(" "),e.orderForm.shipperEvaluationId?r("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(t){e.viewReview(e.orderForm)}}},[e._v("评价详情")]):e._e()],1):e._e()]):e._e(),e._v(" "),7===e.active?r("div",{staticClass:"order-step-5 order-control-info"},[e.iscarrier?r("div",{staticClass:"status-txt"},[e._v("\n                  订单状态：订单已取消\n              ")]):e._e(),e._v(" "),e.iscarrier?e._e():r("div",{staticClass:"status-txt"},[e._v("\n                  订单状态：物流公司已取消订单\n              ")]),e._v(" "),r("div",{staticClass:"order-id"},[e._v("\n                  订单号："+e._s(e.orderForm.orderSerial)+"\n              ")])]):e._e()])]),e._v(" "),r("AddReview",{attrs:{dialogVisible:e.dialogVisible,orderSerial:e.orderSerial,transportRangeId:e.transportRangeId},on:{"update:dialogVisible":function(t){e.dialogVisible=t}}}),e._v(" "),r("AddReview2",{attrs:{dialogVisible:e.dialogVisible2,orderSerial:e.orderSerial,shipperId:e.shipperId},on:{"update:dialogVisible":function(t){e.dialogVisible2=t}}})],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",[r("span",[e._v("订单跟踪")])])}],a={render:i,staticRenderFns:o};t.a=a},HmoR:function(e,t,r){"use strict";var i=r("woOf"),o=r.n(i),a=r("nOfT"),s=(r.n(a),r("t5DY"),r("TuTs")),n=(r("0xDb"),r("K2xx")),l=r("COFR"),c=r("7WEh");t.a={components:{AddReview:l.default,AddReview2:c.default},data:function(){return{btnsize:"small",active:1,inited:!1,currentStatus:0,flows:[{done:!0,text:"下单",donetext:"下单",time:"",type:""},{done:!1,text:"待承运",donetext:"物流公司已承运",time:"",type:""},{done:!1,text:"待提货",donetext:"物流公司已提货",time:"",type:""},{done:!1,text:"待发货",donetext:"物流公司已发货",time:"",type:""},{done:!1,text:"待收货",donetext:"货主已收货",time:"",type:""},{done:!1,text:"订单结束",donetext:"订单结束",time:"",type:""}],textsArr:["1分  非常不满","2分  不满意","3分  一般","4分  满意","5分  非常满意"],retalength:200,replyDes:"",UserInfo:{},loading:!0,carrierSerial:{},consignorSerial:{},orderForm:{},optionsReason:[],iscancel:!1,iscarrier:!1,isOwner:!1,dialogVisible:!1,dialogVisible2:!1,orderSerial:"",transportRangeId:"",shipperId:""}},mounted:function(){this.firstblood(),this.iscarrier="carrier"===this.$route.query.type,this.isOwner=!this.iscarrier},methods:{init:function(){var e=0;switch(this.orderForm.orderStatus){case"AF03708":this.iscancel=!0,e=7;break;case"AF03707":this.flows[5].done=!0,this.flows[5].time="",this.flows[4].done=!0,this.flows[4].time=this.orderForm.receiveTime,e=6;case"AF03705":this.flows[3].done=!0,this.flows[3].time=this.orderForm.deliveryTime,e=e||4;case"AF03704":this.flows[2].done=!0,this.flows[2].time=this.orderForm.pickUpGoodsTime,e=e||3;case"AF03703":this.flows[1].done=!0,this.flows[1].time=this.orderForm.carrierTime,e=e||2;case"AF03702":this.flows[0].done=!0,this.flows[0].time=this.orderForm.createTime,e=e||1;case"AF03701":e=e||0}this.active=e,this.inited=!0},getValue:function(e){console.log(e)},textsArray:function(){},firstblood:function(){var e=this;this.id=this.$route.query.id,n.d(this.id).then(function(t){e.orderForm=t,e.init(),e.loading=!1})},fetchData:function(){this.firstblood()},submitForm:function(){var e=this,t=o()({},{id:this.carrierSerial.id,replyDes:this.replyDes,replyId:this.UserInfo.id,replyName:this.UserInfo.contactsName});Object(s.g)(t).then(function(t){e.firstblood()})},confirmCarrier:function(e){var t=this;this.$confirm("确定要承运吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.k(e.orderSerial).then(function(e){t.$message({type:"success",message:"操作成功!"}),t.fetchData()}).catch(function(e){})}).catch(function(){t.$message({type:"info",message:"已取消"})})},cancelOrder:function(e){var t=this;this.$confirm("确定要取消订单吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.j(e.orderSerial).then(function(e){t.$message({type:"success",message:"操作成功!"}),t.fetchData()}).catch(function(e){})}).catch(function(){})},confirmPickUp:function(e){var t=this;this.$confirm("确定要提货吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.n(e.orderSerial).then(function(e){t.$message({type:"success",message:"操作成功!"}),t.fetchData()}).catch(function(e){})}).catch(function(){t.$message({type:"info",message:"已取消"})})},confirmDelivery:function(e){var t=this;this.$confirm("确定要发货吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.l(e.orderSerial).then(function(e){t.$message({type:"success",message:"操作成功!"}),t.fetchData()})}).catch(function(){t.$message({type:"info",message:"已取消"})})},confirmEvaluate:function(e){var t=this;this.$confirm("确定收货吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.m(e.orderSerial).then(function(e){t.$message({type:"success",message:"操作成功!"}),t.fetchData()}).catch(function(e){})}).catch(function(){t.$message({type:"info",message:"已取消"})})},addComplain:function(e){this.$router.push({path:"/hyzx/complaintsInfo/index",query:{orderSerial:e.orderSerial}})},addReview:function(e){this.orderSerial=e.orderSerial,this.transportRangeId=e.wlId,this.shipperId=e.shipperId,this.isOwner?this.dialogVisible=!0:this.dialogVisible2=!0},viewReview:function(e){this.$router.push("/hyzx/order/rateInfo"+(this.isOwner?"":"/carrier")+"?orderSerial="+e.orderSerial+(this.isOwner?"":"&type=carrier"))},viewComplain:function(e){this.$router.push("/hyzx/complaintsInfo/index?orderSerial="+e.orderSerial+(this.isOwner?"":"&type=carrier"))},replyComplain:function(e){this.$router.push("/hyzx/complaintsInfo/index?orderSerial="+e.orderSerial+(this.isOwner?"":"&type=carrier"))},oneMoreTime:function(){this.$router.push("/hyzx/order/create")}}}},TuTs:function(e,t,r){"use strict";function i(e,t,r){return u.b.axios({url:"/"+m+"/usercenter/aflcTransportEvaluation/v1/findCompanyShipperEvaluation",method:"post",data:{currentPage:e,pageSize:t,vo:r}})}function o(e,t,r){return u.b.axios({url:"/"+m+"/usercenter/aflcTransportEvaluation/v1/findCompanyMyEvaluation",method:"post",data:{currentPage:e,pageSize:t,vo:r}})}function a(e){return u.b.axios({url:"/"+m+"/usercenter/aflcTransportRange/v1/findMemberAflcTransportRange/"+e,method:"get"})}function s(e){return u.b.axios({url:"/"+m+"/usercenter/aflcTransportEvaluation/v1/"+e,method:"get"})}function n(e){return u.b.axios({url:"/"+m+"/usercenter/aflcTransportEvaluation/v1/findByOrderSerial/"+e,method:"get"})}function l(e){return u.b.axios({url:"/"+m+"/usercenter/aflcShipperEvaluation/v1/findByOrderSerial/"+e,method:"get"})}function c(e){return u.b.axios({url:"/"+m+"/usercenter/aflcShipperEvaluation/v1/update",method:"put",data:e})}function d(e){return u.b.axios({url:"/"+m+"/usercenter/aflcTransportEvaluation/v1/update",method:"put",data:e})}t.a=i,t.d=o,t.c=a,t.b=s,t.e=n,t.f=l,t.h=c,t.g=d;var u=r("Vo7i"),m="aflc-uc"},eYD7:function(e,t,r){"use strict";var i=r("woOf"),o=r.n(i),a=r("K2xx");t.a={props:{dialogVisible:{type:Boolean,default:!1},orderSerial:{type:String,default:""},transportRangeId:{type:String,default:""}},data:function(){return{form:{assessLevel:"",evaluationDes:"",evaluationId:"",evaluationName:"",orderSerial:"",serverPriceStarLevel:"",serverQualityStarLevel:"",transportAgingStarLevel:"",transportRangeId:""},totalRate:["AF0360103","AF0360102","AF0360101"],priceRate:["AF036030101","AF036030102","AF036030103","AF036030104","AF036030105"],serviceRate:["AF036030201","AF036030202","AF036030203","AF036030204","AF036030205"],shipRate:["AF036030301","AF036030302","AF036030303","AF036030304","AF036030305"],rules:{},rankColor:["#99A9BF","#F7BA2A","#FF9900"],texts:["非常不满意","不满意","一般","满意","非常满意"],priceRank:5,serviceRank:5,shipRank:5,formLabelWidth:"150px",loading:!1}},watch:{dialogVisible:function(e){e&&this.reset()},priceRank:{handler:function(e){this.form.serverPriceStarLevel=this.priceRate[e-1],this.setTotalRank()},immediate:!0},serviceRank:{handler:function(e){this.form.serverQualityStarLevel=this.serviceRate[e-1],this.setTotalRank()},immediate:!0},shipRank:{handler:function(e){this.form.transportAgingStarLevel=this.shipRate[e-1],this.setTotalRank()},immediate:!0}},mounted:function(){},methods:{setTotalRank:function(){var e=this.priceRank+this.serviceRank+this.shipRank;this.form.assessLevel=e<7?this.totalRate[0]:e<10?this.totalRate[1]:this.totalRate[2]},close:function(e){this.$emit("update:dialogVisible",!1),this.$emit("close"),"function"==typeof e&&e()},reset:function(){this.form=o()({},this.$data.form),this.form.evaluationId=this.otherinfo.id,this.form.evaluationName=this.otherinfo.contactsName,this.form.orderSerial=this.orderSerial,this.form.transportRangeId=this.transportRangeId},submitFeeSetup:function(){var e=this;this.$refs.ruleForm.validate(function(t){e.loading=!0,t&&Object(a.h)(e.form).then(function(t){e.$message.success("保存成功！"),e.loading=!1,e.$emit("success"),e.close()})})}}}},m2Yb:function(e,t){},nOfT:function(e,t){},"o1+p":function(e,t,r){"use strict";function i(e){r("xcCn")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("HmoR"),a=r("HNpm"),s=r("VU/8"),n=i,l=s(o.a,a.a,n,null,null);t.default=l.exports},plOv:function(e,t){},t5DY:function(e,t,r){"use strict";function i(e){return e=e||"",f.b.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})}function o(){return p?new v.a(function(e){e(p)}):f.b.get("/anfacommonservice/common/oss/v1/policy").then(function(e){return p=e.data||"",setTimeout(function(){p=""},18e4),p})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return f.b.get("/28-web/sysDict/getSysDictByCodeGet/"+e).then(function(e){return e.data||[]})}function s(e){return f.b.axios({url:"/28-web/sysDict/getSysDictByCodeGet/"+e,method:"get"})}function n(e){return f.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile?mobile="+e,method:"get"})}function l(e){return f.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getDriverInfoByMobile?mobile="+e,method:"get"})}function c(e){return f.b.get("/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile",{params:{mobile:e}})}function d(e){return f.b.axios({url:"/aflcorderservice/order/fclOrder/v1/getDetailsByOrderSerial/"+e,method:"get"})}function u(e,t){var r=new FormData;for(var i in t)r.append(i,t[i]);var o="";for(var a in t)o+="&"+a+"="+t[a];return f.b.request({url:"/aflc-common/common/aflcMemberCenter/v1/updatePassword?memberType="+e,method:"put",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:o})}t.a=i,t.h=o,t.f=a,t.c=s,t.g=n,t.d=l,t.e=c,t.b=d,t.i=u;var m=r("//Fk"),v=r.n(m),f=r("Vo7i"),p=void 0},xcCn:function(e,t){}});