webpackJsonp([58],{COFR:function(e,t,a){"use strict";function i(e){a("plOv")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("eYD7"),r=a("Fv6q"),o=a("VU/8"),l=i,n=o(s.a,r.a,l,null,null);t.default=n.exports},Fv6q:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"add-eview",attrs:{title:"",visible:e.dialogVisible,"custom-class":"add-review","close-on-click-modal":!1,"modal-append-to-body":!1,width:"800px","before-close":e.close}},[a("div",{staticClass:"add-review-wrapper"},[a("div",{staticClass:"add-tip"},[e._v("认真填写评价平台会给你推荐最优质的物流专线")]),e._v(" "),a("h3",[e._v("物流公司需要您的建议哦！")]),e._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":e.formLabelWidth,"label-position":"right",size:"mini"}},[a("el-form-item",{attrs:{label:"",prop:"carrierAddr"}},[a("el-form-item",{attrs:{"label-width":"auto",label:"服务价格："}},[a("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.priceRank,callback:function(t){e.priceRank=t},expression:"priceRank"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"auto",label:"服务质量："}},[a("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.serviceRank,callback:function(t){e.serviceRank=t},expression:"serviceRank"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"auto",label:"运输时效："}},[a("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.shipRank,callback:function(t){e.shipRank=t},expression:"shipRank"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"carrierRemarks",attrs:{label:"评价说明",prop:"carrierRemarks"}},[a("el-input",{attrs:{rows:10,type:"textarea",maxlength:100},model:{value:e.form.evaluationDes,callback:function(t){e.$set(e.form,"evaluationDes",t)},expression:"form.evaluationDes"}}),e._v(" "),a("div",{staticClass:"last-input-num"},[e._v("还可输入"),a("span",[e._v(e._s(100-e.form.evaluationDes.length))]),e._v("字")])],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"large"},on:{click:e.close}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"large",type:"primary"},on:{click:e.submitFeeSetup}},[e._v("提交评价")])],1)])},s=[],r={render:i,staticRenderFns:s};t.a=r},eYD7:function(e,t,a){"use strict";var i=a("woOf"),s=a.n(i),r=a("K2xx");t.a={props:{dialogVisible:{type:Boolean,default:!1},orderSerial:{type:String,default:""},transportRangeId:{type:String,default:""}},data:function(){return{form:{assessLevel:"",evaluationDes:"",evaluationId:"",evaluationName:"",orderSerial:"",serverPriceStarLevel:"",serverQualityStarLevel:"",transportAgingStarLevel:"",transportRangeId:""},totalRate:["AF0360103","AF0360102","AF0360101"],priceRate:["AF036030101","AF036030102","AF036030103","AF036030104","AF036030105"],serviceRate:["AF036030201","AF036030202","AF036030203","AF036030204","AF036030205"],shipRate:["AF036030301","AF036030302","AF036030303","AF036030304","AF036030305"],rules:{},rankColor:["#99A9BF","#F7BA2A","#FF9900"],texts:["非常不满意","不满意","一般","满意","非常满意"],priceRank:5,serviceRank:5,shipRank:5,formLabelWidth:"150px",loading:!1}},watch:{dialogVisible:function(e){e&&this.reset()},priceRank:{handler:function(e){this.form.serverPriceStarLevel=this.priceRate[e-1],this.setTotalRank()},immediate:!0},serviceRank:{handler:function(e){this.form.serverQualityStarLevel=this.serviceRate[e-1],this.setTotalRank()},immediate:!0},shipRank:{handler:function(e){this.form.transportAgingStarLevel=this.shipRate[e-1],this.setTotalRank()},immediate:!0}},mounted:function(){},methods:{setTotalRank:function(){var e=this.priceRank+this.serviceRank+this.shipRank;this.form.assessLevel=e<7?this.totalRate[0]:e<10?this.totalRate[1]:this.totalRate[2]},close:function(e){this.$emit("update:dialogVisible",!1),this.$emit("close"),"function"==typeof e&&e()},reset:function(){this.form=s()({},this.$data.form),this.form.evaluationId=this.otherinfo.id,this.form.evaluationName=this.otherinfo.contactsName,this.form.orderSerial=this.orderSerial,this.form.transportRangeId=this.transportRangeId},submitFeeSetup:function(){var e=this;this.$refs.ruleForm.validate(function(t){e.loading=!0,t&&Object(r.h)(e.form).then(function(t){e.$message.success("保存成功！"),e.loading=!1,e.$emit("success"),e.close()})})}}}},plOv:function(e,t){}});