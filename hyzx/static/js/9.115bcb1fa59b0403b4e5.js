webpackJsonp([9,24,57,58],{"1onU":function(e,t,a){"use strict";function i(e){a("Q66M"),a("rwP/")}var n=a("VT+v"),o=a("1pBW"),r=a("VU/8"),s=i,l=r(n.a,o.a,s,"data-v-6902e15e",null);t.a=l.exports},"1pBW":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tms-pagenation"},[a("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(1)}}},[a("span",{staticClass:"first-page"})]),a("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(e.pageNum-1)}}},[a("span",{staticClass:"prev-page"})]),e._v(" "),a("span",{staticClass:"page-jumper"},[e._v("\n    第\n    "),a("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:e.pages,type:"number",disabled:e.pages<=1},on:{keyup:e.handleKeyup,change:e.handleChange,focus:e.handleFocus,blur:e.handleBlur},model:{value:e.inputval,callback:function(t){e.inputval="string"==typeof t?t.trim():t},expression:"inputval"}}),e._v(" 页\n  ")],1),e._v("\n  /共 "+e._s(e.pages)+" 页\n  "),a("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pageNum+1)}}},[a("span",{staticClass:"next-page"})]),e._v(" "),a("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pages)}}},[a("span",{staticClass:"last-page"})]),e._v(" "),a("span",{staticClass:"tms-pagination__sizes"},[a("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:e.sizeChange},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},e._l(e.sizes,function(t,i){return a("el-option",{key:i,attrs:{label:t,disabled:e.pages<=1,value:t}})}))],1)])},n=[],o={render:i,staticRenderFns:n};t.a=o},"3Qpc":function(e,t){},"6P1d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"add-eview",attrs:{title:"",visible:e.dialogVisible,"custom-class":"add-review","close-on-click-modal":!1,"modal-append-to-body":!1,width:"800px","before-close":e.close}},[a("div",{staticClass:"add-review-wrapper"},[a("div",{staticClass:"add-tip"},[e._v("认真填写评价平台会给你推荐最优质的货源")]),e._v(" "),a("h3",[e._v("您可以对货主进行评价哦！")]),e._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":e.formLabelWidth,"label-position":"right",size:"mini"}},[a("el-form-item",{attrs:{label:"",prop:"carrierAddr"}},[a("el-form-item",{attrs:{"label-width":"auto",label:"货物包装："}},[a("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.goodsRank,callback:function(t){e.goodsRank=t},expression:"goodsRank"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"auto",label:"付款及时："}},[a("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.payRank,callback:function(t){e.payRank=t},expression:"payRank"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"auto",label:"装卸安排："}},[a("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.dockRank,callback:function(t){e.dockRank=t},expression:"dockRank"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"carrierRemarks",attrs:{label:"评价说明",prop:"carrierRemarks"}},[a("el-input",{attrs:{rows:10,type:"textarea",maxlength:100},model:{value:e.form.evaluationDes,callback:function(t){e.$set(e.form,"evaluationDes",t)},expression:"form.evaluationDes"}}),e._v(" "),a("div",{staticClass:"last-input-num"},[e._v("还可输入"),a("span",[e._v(e._s(100-e.form.evaluationDes.length))]),e._v("字")])],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"large"},on:{click:e.close}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"large",type:"primary"},on:{click:e.submitFeeSetup}},[e._v("提交评价")])],1)])},n=[],o={render:i,staticRenderFns:n};t.a=o},"7WEh":function(e,t,a){"use strict";function i(e){a("m2Yb")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("AZ5Q"),o=a("6P1d"),r=a("VU/8"),s=i,l=r(n.a,o.a,s,null,null);t.default=l.exports},"9UCZ":function(e,t,a){"use strict";var i=a("TuGF"),n=a("GrA4"),o=a("VU/8"),r=o(i.a,n.a,null,null,null);t.a=r.exports},AZ5Q:function(e,t,a){"use strict";var i=a("woOf"),n=a.n(i),o=a("K2xx");t.a={props:{dialogVisible:{type:Boolean,default:!1},orderSerial:{type:String,default:""},shipperId:{type:String,default:""},companyId:{type:String,default:""}},data:function(){return{form:{companyId:"",assessLevel:"",evaluationDes:"",evaluationId:"",evaluationName:"",orderSerial:"",goodsStarLevel:"",payStarLevel:"",dockStarLevel:"",shipperId:""},totalRate:["AF0360203","AF0360202","AF0360201"],priceRate:["AF036040201","AF036040202","AF036040203","AF036040204","AF036040205"],goodsRate:["AF036040101","AF036040102","AF036040103","AF036040104","AF036040105"],dockRate:["AF036040301","AF036040302","AF036040303","AF036040304","AF036040305"],rules:{},rankColor:["#99A9BF","#F7BA2A","#FF9900"],texts:["非常不满意","不满意","一般","满意","非常满意"],goodsRank:5,payRank:5,dockRank:5,formLabelWidth:"150px",loading:!1}},watch:{dialogVisible:function(e){e&&this.reset()},goodsRank:{handler:function(e){this.form.goodsStarLevel=this.goodsRate[e-1],this.setTotalRank()},immediate:!0},payRank:{handler:function(e){this.form.payStarLevel=this.priceRate[e-1],this.setTotalRank()},immediate:!0},dockRank:{handler:function(e){this.form.dockStarLevel=this.dockRate[e-1],this.setTotalRank()},immediate:!0}},mounted:function(){},methods:{setTotalRank:function(){var e=this.goodsRank+this.payRank+this.dockRank;this.form.assessLevel=e<7?this.totalRate[0]:e<10?this.totalRate[1]:this.totalRate[2]},close:function(e){this.$emit("update:dialogVisible",!1),this.$emit("close"),"function"==typeof e&&e()},reset:function(){this.form=n()({},this.$data.form),this.form.evaluationId=this.otherinfo.id,this.form.evaluationName=this.otherinfo.contactsName,this.form.orderSerial=this.orderSerial,this.form.shipperId=this.shipperId,this.form.companyId=this.companyId},submitFeeSetup:function(){var e=this;this.$refs.ruleForm.validate(function(t){e.loading=!0,t&&Object(o.g)(e.form).then(function(t){e.$message.success("保存成功！"),e.loading=!1,e.$emit("success"),e.close()})})}}}},"BTi/":function(e,t,a){"use strict";function i(e,t){var a=[];return e.map(function(e){e.index=t,a.push(e),e.children&&(a=a.concat(i(e.children,t+1)))}),a}var n=a("Dd8w"),o=a.n(n),r=a("O6e2"),s=a("u8ra"),l=a("NYxO");t.a={props:{value:{type:[Number,String]},disabled:{type:Boolean,default:!1}},watch:{value:function(e){this.aid=e,this.init()}},mounted:function(){var e=this;this.aid=this.value,this.init(),r.a.$on("closepopbox",function(){console.log("closepopbox selectTree:"),e.$refs.myautocomplete.handleClose()})},computed:o()({},Object(l.b)(["otherinfo"]),{openGroups:function(){return i(this.groups,1)}}),data:function(){return{groups:[],aid:""}},methods:{init:function(){var e=this;this.inited||(this.inited=!0,Object(s.a)(this.otherinfo.companyId).then(function(t){e.groups=t}).catch(function(t){e.inited=!1}))},change:function(e){this.$emit("change",e),this.$emit("input",e)}}}},COFR:function(e,t,a){"use strict";function i(e){a("plOv")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("eYD7"),o=a("Fv6q"),r=a("VU/8"),s=i,l=r(n.a,o.a,s,null,null);t.default=l.exports},Ff4b:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{staticClass:"orderlist-search staff_searchinfo clearfix",attrs:{"label-width":"140px",inline:!0,size:e.btnsize,"label-position":"right",model:e.searchForm}},[a("div",{staticClass:"search_warrper"},[a("el-form-item",{attrs:{label:"订单号/商品名称："}},[a("el-input",{attrs:{maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.orderSerialOrGoodsName,callback:function(t){e.$set(e.searchForm,"orderSerialOrGoodsName",t)},expression:"searchForm.orderSerialOrGoodsName"}})],1),e._v(" "),e.isall?a("el-form-item",{attrs:{label:"订单状态："}},[a("select-type",{attrs:{type:"AF037"},model:{value:e.searchForm.orderStatus,callback:function(t){e.$set(e.searchForm,"orderStatus",t)},expression:"searchForm.orderStatus"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"出发地："}},[a("el-input",{attrs:{maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.startAddress,callback:function(t){e.$set(e.searchForm,"startAddress",t)},expression:"searchForm.startAddress"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"到达地："}},[a("el-input",{attrs:{maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.endAddress,callback:function(t){e.$set(e.searchForm,"endAddress",t)},expression:"searchForm.endAddress"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发货人："}},[a("el-input",{attrs:{maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.consignor,callback:function(t){e.$set(e.searchForm,"consignor",t)},expression:"searchForm.consignor"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发货人手机："}},[a("el-input",{attrs:{maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.consignorPhone,callback:function(t){e.$set(e.searchForm,"consignorPhone",t)},expression:"searchForm.consignorPhone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"收货人："}},[a("el-input",{attrs:{maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.consignee,callback:function(t){e.$set(e.searchForm,"consignee",t)},expression:"searchForm.consignee"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"收货人手机："}},[a("el-input",{attrs:{maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.consigneePhone,callback:function(t){e.$set(e.searchForm,"consigneePhone",t)},expression:"searchForm.consigneePhone"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"staff_searchinfo--btn"},[a("el-button",{attrs:{size:"mini",icon:"el-icon-search",type:"primary"},on:{click:e.onSubmit}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{size:"mini",icon:"el-icon-close",type:"info",plain:""},on:{click:e.clearForm}},[e._v("重置")])],1)],1)},n=[],o={render:i,staticRenderFns:n};t.a=o},Fv6q:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"add-eview",attrs:{title:"",visible:e.dialogVisible,"custom-class":"add-review","close-on-click-modal":!1,"modal-append-to-body":!1,width:"800px","before-close":e.close}},[a("div",{staticClass:"add-review-wrapper"},[a("div",{staticClass:"add-tip"},[e._v("认真填写评价平台会给你推荐最优质的物流专线")]),e._v(" "),a("h3",[e._v("物流公司需要您的建议哦！")]),e._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":e.formLabelWidth,"label-position":"right",size:"mini"}},[a("el-form-item",{attrs:{label:"",prop:"carrierAddr"}},[a("el-form-item",{attrs:{"label-width":"auto",label:"服务价格："}},[a("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.priceRank,callback:function(t){e.priceRank=t},expression:"priceRank"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"auto",label:"服务质量："}},[a("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.serviceRank,callback:function(t){e.serviceRank=t},expression:"serviceRank"}})],1),e._v(" "),a("el-form-item",{attrs:{"label-width":"auto",label:"运输时效："}},[a("el-rate",{attrs:{"show-text":"",texts:e.texts,colors:e.rankColor},model:{value:e.shipRank,callback:function(t){e.shipRank=t},expression:"shipRank"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"carrierRemarks",attrs:{label:"评价说明",prop:"carrierRemarks"}},[a("el-input",{attrs:{rows:10,type:"textarea",maxlength:100},model:{value:e.form.evaluationDes,callback:function(t){e.$set(e.form,"evaluationDes",t)},expression:"form.evaluationDes"}}),e._v(" "),a("div",{staticClass:"last-input-num"},[e._v("还可输入"),a("span",[e._v(e._s(100-e.form.evaluationDes.length))]),e._v("字")])],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"large"},on:{click:e.close}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{size:"large",type:"primary"},on:{click:e.submitFeeSetup}},[e._v("提交评价")])],1)])},n=[],o={render:i,staticRenderFns:n};t.a=o},GML0:function(e,t,a){"use strict";var i=a("mvHQ"),n=a.n(i),o=a("woOf"),r=a.n(o),s=(a("0xDb"),a("o9X6")),l=a("9UCZ");t.a={name:"order-manage-search",components:{SelectTree:s.a,SelectType:l.a},props:{btnsize:{type:String,default:"mini"},orgid:{type:Number},issender:{type:Boolean,dafault:!1},isall:{type:Boolean,default:!1}},data:function(){return{searchForm:{orderSerialOrGoodsName:"",orderStatus:"AF03701",startAddress:"",endAddress:"",consignee:"",consigneePhone:"",consignor:"",consignorPhone:""}}},watch:{orgid:function(e){}},mounted:function(){this.$route.query.orderSerial&&(this.searchForm.orderSerialOrGoodsName=this.$route.query.orderSerial),this.onSubmit()},methods:{onSubmit:function(){var e=r()({},this.searchForm);this.isall||delete e.orderStatus,console.log("this.searchForm2:",this.searchForm,n()(e)),this.$emit("change",e)},clearForm:function(){this.searchForm={orderSerialOrGoodsName:"",orderStatus:"AF03701",startAddress:"",endAddress:"",consignee:"",consigneePhone:"",consignor:"",consignorPhone:"",wlName:""}}}}},GcDN:function(e,t){},GrA4:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",e._b({ref:"myautocomplete",attrs:{placeholder:e.placeholder},on:{change:e.change},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}},"el-select",e.$attrs,!1),[e._t("head"),e._v(" "),e._l(e.types,function(t){return[e._t("default",[a("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})],{item:t})]}),e._v(" "),e._t("foot")],2)},n=[],o={render:i,staticRenderFns:n};t.a=o},Q66M:function(e,t){},RBAt:function(e,t,a){"use strict";function i(e){a("3Qpc")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("GML0"),o=a("Ff4b"),r=a("VU/8"),s=i,l=r(n.a,o.a,s,null,null);t.default=l.exports},Tj9y:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"tab-content order-list"},[a("SearchForm",{attrs:{isall:e.isall,btnsize:e.btnsize},on:{change:e.getSearchParam}}),e._v(" "),a("div",{staticClass:"tab_info"},[a("div",{staticClass:"btns_box"},[a("el-button",{attrs:{type:"primary",size:"large",icon:"el-icon-circle-plus"},on:{click:function(t){e.doAction("add")}}},[e._v("创建订单")])],1),e._v(" "),a("div",{staticClass:"info_tab"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.usersArr,stripe:"",border:"","tooltip-effect":"dark",height:"600"},on:{"row-click":e.clickDetails,"selection-change":e.getSelection}},[a("el-table-column",{attrs:{fixed:"",prop:"customerId",label:"序号",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s((e.searchQuery.currentPage-1)*e.searchQuery.pageSize+t.$index+1)+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"",label:"订单号",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"table-link",on:{click:function(a){e.viewDetail(t.row)}}},[e._v(e._s(t.row.orderSerial))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"orderStatusName",label:"订单状态",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"wlName",label:"物流公司",width:"130"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsName",label:"商品名称",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsNum",label:"货品总数量（件）",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{label:"预估总重量（公斤）",prop:"goodsWeight",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsVolume",label:"预计总体积（方）",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsTypeName",label:"货物类型",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalAmount",label:"预估总运费（元）",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"consignorAddress",label:"出发地",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.startProvinceCityArea+t.row.consignorAddress)+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"consigneeAddress",label:"到达地",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.endProvinceCityArea+t.row.consigneeAddress)+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"consignor",label:"发货人",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"consignorPhone",label:"发货人手机",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"consignee",label:"收货人",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"consigneePhone",label:"收货人手机",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"下单时间",width:"100"}}),e._v(" "),!1===/(chengyun)/.test(e.listtype)?a("el-table-column",{attrs:{label:"承运时间",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(e._f("parseTime")(t.row.carrierTime))+"\n          ")]}}])}):e._e(),e._v(" "),!1===/(chengyun|tihuo)/.test(e.listtype)?a("el-table-column",{attrs:{label:"提货时间",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("parseTime")(t.row.pickUpGoodsTime))+"\n        ")]}}])}):e._e(),e._v(" "),!1===/(chengyun|tihuo|fahuo)/.test(e.listtype)?a("el-table-column",{attrs:{label:"发货时间",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("parseTime")(t.row.deliveryTime))+"\n        ")]}}])}):e._e(),e._v(" "),!1===/(chengyun|tihuo|fahuo|shouhuo)/.test(e.listtype)?a("el-table-column",{attrs:{label:"收货时间",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("parseTime")(t.row.receiveTime))+"\n        ")]}}])}):e._e(),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isOwner?a("div",[a("el-button",{attrs:{type:"primary",size:e.btnsize},on:{click:function(a){e.viewDetail(t.row)}}},[e._v("查看")]),e._v(" "),"AF03702"===t.row.orderStatus?a("div",[a("el-button",{attrs:{type:"danger",size:e.btnsize,plain:""},on:{click:function(a){e.cancelOrder(t.row)}}},[e._v("取消订单")])],1):e._e(),e._v(" "),"AF03703"===t.row.orderStatus?a("div"):e._e(),e._v(" "),"AF03704"===t.row.orderStatus?a("div"):e._e(),e._v(" "),"AF03705"===t.row.orderStatus?a("div",[t.row.complainWorkSerial?a("el-button",{attrs:{type:"warning",size:e.btnsize},on:{click:function(a){e.viewComplain(t.row)}}},[e._v("投诉详情")]):e._e(),e._v(" "),t.row.complainWorkSerial?e._e():a("el-button",{attrs:{type:"warning",size:e.btnsize},on:{click:function(a){e.addComplain(t.row)}}},[e._v("投诉")])],1):e._e(),e._v(" "),"AF03706"===t.row.orderStatus?a("div",[t.row.complainWorkSerial?e._e():a("el-button",{attrs:{type:"warning",size:e.btnsize},on:{click:function(a){e.addComplain(t.row)}}},[e._v("投诉")]),e._v(" "),t.row.complainWorkSerial?a("el-button",{attrs:{type:"warning",size:e.btnsize},on:{click:function(a){e.viewComplain(t.row)}}},[e._v("投诉详情")]):e._e(),e._v(" "),t.row.transportEvaluationId?e._e():a("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(a){e.addReview(t.row)}}},[e._v("评价")]),e._v(" "),t.row.transportEvaluationId?a("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(a){e.viewReview(t.row)}}},[e._v("评价详情")]):e._e()],1):e._e(),e._v(" "),"AF03707"===t.row.orderStatus?a("div",[t.row.complainWorkSerial?e._e():a("el-button",{attrs:{type:"warning",size:e.btnsize},on:{click:function(a){e.addComplain(t.row)}}},[e._v("投诉")]),e._v(" "),t.row.complainWorkSerial?a("el-button",{attrs:{type:"warning",size:e.btnsize},on:{click:function(a){e.viewComplain(t.row)}}},[e._v("投诉详情")]):e._e(),e._v(" "),t.row.transportEvaluationId?e._e():a("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(a){e.addReview(t.row)}}},[e._v("评价")]),e._v(" "),t.row.transportEvaluationId?a("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(a){e.viewReview(t.row)}}},[e._v("评价详情")]):e._e()],1):e._e(),e._v(" "),"AF03708"===t.row.orderStatus?a("div",[a("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(a){e.oneMoreTime(t.row)}}},[e._v("再次下单")])],1):e._e()],1):e._e(),e._v(" "),e.isOwner?e._e():a("div",[a("el-button",{attrs:{type:"primary",size:e.btnsize},on:{click:function(a){e.viewDetail(t.row)}}},[e._v("查看")]),e._v(" "),"AF03702"===t.row.orderStatus?a("div",[a("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(a){e.confirmCarrier(t.row)}}},[e._v("确定承运")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:e.btnsize,plain:""},on:{click:function(a){e.cancelOrder(t.row)}}},[e._v("取消订单")])],1):e._e(),e._v(" "),"AF03703"===t.row.orderStatus?a("div",[a("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(a){e.confirmPickUp(t.row)}}},[e._v("确认提货")])],1):e._e(),e._v(" "),"AF03704"===t.row.orderStatus?a("div",[a("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(a){e.confirmDelivery(t.row)}}},[e._v("确认发货")])],1):e._e(),e._v(" "),"AF03705"===t.row.orderStatus?a("div",[t.row.complainWorkSerial&&!t.row.reply?a("el-button",{attrs:{type:"warning",size:e.btnsize},on:{click:function(a){e.replyComplain(t.row)}}},[e._v("投诉回复")]):e._e(),e._v(" "),t.row.complainWorkSerial&&t.row.reply?a("el-button",{attrs:{type:"warning",size:e.btnsize},on:{click:function(a){e.viewComplain(t.row)}}},[e._v("投诉详情")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(a){e.confirmEvaluate(t.row)}}},[e._v("确认收货")])],1):e._e(),e._v(" "),"AF03706"===t.row.orderStatus?a("div"):e._e(),e._v(" "),"AF03707"===t.row.orderStatus?a("div",[t.row.complainWorkSerial&&!t.row.reply?a("el-button",{attrs:{type:"warning",size:e.btnsize},on:{click:function(a){e.replyComplain(t.row)}}},[e._v("投诉回复")]):e._e(),e._v(" "),t.row.complainWorkSerial&&t.row.reply?a("el-button",{attrs:{type:"warning",size:e.btnsize},on:{click:function(a){e.viewComplain(t.row)}}},[e._v("投诉详情")]):e._e(),e._v(" "),t.row.shipperEvaluationId?e._e():a("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(a){e.addReview(t.row)}}},[e._v("评价")]),e._v(" "),t.row.shipperEvaluationId?a("el-button",{attrs:{type:"primary",size:e.btnsize,plain:""},on:{click:function(a){e.viewReview(t.row)}}},[e._v("评价详情")]):e._e()],1):e._e(),e._v(" "),"AF03708"===t.row.orderStatus?a("div"):e._e()],1)]}}])})],1)],1),e._v(" "),a("div",{staticClass:"info_tab_footer"},[e._v("共计:"+e._s(e.total)+" "),a("div",{staticClass:"show_pager"},[a("Pager",{attrs:{total:e.total},on:{change:e.handlePageChange}})],1)])]),e._v(" "),a("AddReview",{attrs:{dialogVisible:e.dialogVisible,orderSerial:e.orderSerial,transportRangeId:e.transportRangeId},on:{success:e.fetchData,"update:dialogVisible":function(t){e.dialogVisible=t}}}),e._v(" "),a("AddReview2",{attrs:{dialogVisible:e.dialogVisible2,companyId:e.companyId,orderSerial:e.orderSerial,shipperId:e.shipperId},on:{success:e.fetchData,"update:dialogVisible":function(t){e.dialogVisible2=t}}})],1)},n=[],o={render:i,staticRenderFns:n};t.a=o},TuGF:function(e,t,a){"use strict";var i=a("Dd8w"),n=a.n(i),o=a("O6e2"),r=a("t5DY"),s=a("NYxO"),l=a("TuU3");t.a={name:"selectType",props:{orgid:{type:[Number,String],default:""},type:{type:String,default:"",required:!0},placeholder:{type:String,default:"请选择"},value:{type:[Number,String,Array]},remote:{type:Boolean,default:!1}},computed:n()({},Object(s.b)(["otherinfo"])),data:function(){return{val:"",types:[],dataCache:{}}},watch:{value:{handler:function(e){this.val=e||""},immediate:!0}},mounted:function(){var e=this;if(this.remote)this.fetchData();else{var t=l.a.get(this.type);""===t?this.fetchData():this.types=t}o.a.$on("closepopbox",function(){console.log("closepopbox selectType:"),e.$refs.myautocomplete.handleClose()})},methods:{fetchData:function(){var e=this,t=function(t){e.types=t,l.a.set(e.type,t)};this.dataCache[this.type]?t(this.dataCache[this.type]):Object(r.f)(this.type,this.orgid||this.otherinfo.companyId).then(t)},change:function(e){this.$emit("change",e),this.$emit("input",this.val)}}}},TuU3:function(e,t,a){"use strict";window.TMS_DATA_CACHE={};var i={get:function(e){return window.TMS_DATA_CACHE[e]||""},set:function(e,t){return window.TMS_DATA_CACHE[e]=t,t}};t.a=i},"VT+v":function(e,t,a){"use strict";t.a={props:{sizes:{type:Array,default:function(){return[20,50,100,200]}},total:{type:Number,default:0}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){this.pageNum=1}},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:20}},mounted:function(){this.size=this.sizes[0]},methods:{handleFocus:function(e){this.oldValue=e.target.value},sizeChange:function(){this.pageNum=1,this.pageNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(e){this.pageNum=e,this.changeEvent()},handleSizeChange:function(e){this.size=e,this.changeEvent()},handleChange:function(e){var t=parseInt(e,10);isNaN(t)?this.inputval=1:t<1?this.inputval=1:t>this.pages?this.inputval=this.pages:this.inputval=t},handleBlur:function(e){var t=e.target;this.handleChange(t.value),this.jumpTo(this.inputval)},handleKeyup:function(e){var t=e.keyCode,a=e.target;console.log(t,a),13===t&&this.oldValue&&a.value!==this.oldValue&&(this.handleChange(a.value),this.oldValue="")},jumpTo:function(e){e<1?this.pageNum=1:e>this.pages?this.pageNum=this.pages:this.pageNum=e,this.changeEvent()}}}},Wu1L:function(e,t,a){"use strict";function i(e){a("GcDN")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("hIIJ"),o=a("Tj9y"),r=a("VU/8"),s=i,l=r(n.a,o.a,s,null,null);t.default=l.exports},eYD7:function(e,t,a){"use strict";var i=a("woOf"),n=a.n(i),o=a("K2xx");t.a={props:{dialogVisible:{type:Boolean,default:!1},orderSerial:{type:String,default:""},transportRangeId:{type:String,default:""}},data:function(){return{form:{assessLevel:"",evaluationDes:"",evaluationId:"",evaluationName:"",orderSerial:"",serverPriceStarLevel:"",serverQualityStarLevel:"",transportAgingStarLevel:"",transportRangeId:""},totalRate:["AF0360103","AF0360102","AF0360101"],priceRate:["AF036030101","AF036030102","AF036030103","AF036030104","AF036030105"],serviceRate:["AF036030201","AF036030202","AF036030203","AF036030204","AF036030205"],shipRate:["AF036030301","AF036030302","AF036030303","AF036030304","AF036030305"],rules:{},rankColor:["#99A9BF","#F7BA2A","#FF9900"],texts:["非常不满意","不满意","一般","满意","非常满意"],priceRank:5,serviceRank:5,shipRank:5,formLabelWidth:"150px",loading:!1}},watch:{dialogVisible:function(e){e&&this.reset()},priceRank:{handler:function(e){this.form.serverPriceStarLevel=this.priceRate[e-1],this.setTotalRank()},immediate:!0},serviceRank:{handler:function(e){this.form.serverQualityStarLevel=this.serviceRate[e-1],this.setTotalRank()},immediate:!0},shipRank:{handler:function(e){this.form.transportAgingStarLevel=this.shipRate[e-1],this.setTotalRank()},immediate:!0}},mounted:function(){},methods:{setTotalRank:function(){var e=this.priceRank+this.serviceRank+this.shipRank;this.form.assessLevel=e<7?this.totalRate[0]:e<10?this.totalRate[1]:this.totalRate[2]},close:function(e){this.$emit("update:dialogVisible",!1),this.$emit("close"),"function"==typeof e&&e()},reset:function(){this.form=n()({},this.$data.form),this.form.evaluationId=this.otherinfo.id,this.form.evaluationName=this.otherinfo.contactsName,this.form.orderSerial=this.orderSerial,this.form.transportRangeId=this.transportRangeId},submitFeeSetup:function(){var e=this;this.$refs.ruleForm.validate(function(t){e.loading=!0,t&&Object(o.h)(e.form).then(function(t){e.$message.success("保存成功！"),e.loading=!1,e.$emit("success"),e.close()})})}}}},fwBU:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{ref:"myautocomplete",staticClass:"select-tree",attrs:{disabled:e.disabled},on:{change:e.change},model:{value:e.aid,callback:function(t){e.aid=t},expression:"aid"}},e._l(e.openGroups,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}},[a("div",{class:"indent indent"+t.index},[e._v(e._s(t.name))])])}))},n=[],o={render:i,staticRenderFns:n};t.a=o},hIIJ:function(e,t,a){"use strict";var i=a("woOf"),n=a.n(i),o=a("mvHQ"),r=a.n(o),s=a("RBAt"),l=a("COFR"),c=a("7WEh"),u=a("1onU"),d=a("K2xx");a("0xDb");t.a={props:{listtype:{type:String,default:"all"}},components:{SearchForm:s.default,Pager:u.a,AddReview:l.default,AddReview2:c.default},computed:{},mounted:function(){var e=-1!==this.$route.path.indexOf("carrier");switch(this.isOwner=!e,this.searchQuery.vo.releaseOrCarrier=e?"2":"1",this.listtype){case"all":this.isall=!0,this.searchQuery.vo.orderStatus="";break;case"chengyun":this.searchQuery.vo.orderStatus="AF03702";break;case"tihuo":this.searchQuery.vo.orderStatus="AF03703";break;case"fahuo":this.searchQuery.vo.orderStatus="AF03704";break;case"shouhuo":this.searchQuery.vo.orderStatus="AF03705";break;case"pingjia":this.searchQuery.vo.orderStatus="AF03706";break;case"wancheng":this.searchQuery.vo.orderStatus="AF03707";break;case"quxiao":this.searchQuery.vo.orderStatus="AF03708"}},data:function(){return{dialogVisible:!1,dialogVisible2:!1,orderSerial:"",transportRangeId:"",shipperId:"",companyId:"",isOwner:!1,isall:!1,btnsize:"small",usersArr:[],total:0,loading:!0,setupTableVisible:!1,isModify:!1,selectInfo:{},selected:[],searchQuery:{currentPage:1,pageSize:20,vo:{orderSerialOrGoodsName:"",orderStatus:"",startAddress:"",endAddress:"",consignee:"",consigneePhone:"",consignor:"",consignorPhone:"",userToken:"",queryType:"1",releaseOrCarrier:"1",wlName:""}}}},methods:{confirmCarrier:function(e){var t=this;this.$confirm("确定要承运吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d.k(e.orderSerial).then(function(e){t.$message({type:"success",message:"操作成功!"}),t.fetchData()})}).catch(function(){t.$message({type:"info",message:"已取消"})})},cancelOrder:function(e){var t=this;this.$confirm("确定要取消订单吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d.j(e.orderSerial).then(function(e){t.$message({type:"success",message:"操作成功!"}),t.fetchData()})}).catch(function(){t.$message({type:"info",message:"已取消"})})},cancelCarrier:function(e){var t=this;this.$confirm("确定要取消承运吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d.i(e.orderSerial).then(function(e){t.$message({type:"success",message:"操作成功!"}),t.fetchData()})}).catch(function(){t.$message({type:"info",message:"已取消"})})},confirmPickUp:function(e){var t=this;this.$confirm("确定要提货吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d.n(e.orderSerial).then(function(e){t.$message({type:"success",message:"操作成功!"}),t.fetchData()})}).catch(function(){t.$message({type:"info",message:"已取消"})})},confirmDelivery:function(e){var t=this;this.$confirm("确定要发货吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d.l(e.orderSerial).then(function(e){t.$message({type:"success",message:"操作成功!"}),t.fetchData()})}).catch(function(){t.$message({type:"info",message:"已取消"})})},confirmEvaluate:function(e){var t=this;this.$confirm("确定收货吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d.m(e.orderSerial).then(function(e){t.$message({type:"success",message:"操作成功!"}),t.fetchData()})}).catch(function(){t.$message({type:"info",message:"已取消"})})},viewDetail:function(e){this.$router.push("/hyzx/order/detail?id="+e.id+(this.isOwner?"":"&type=carrier"))},addComplain:function(e){this.$router.push({path:"/hyzx/complaintsInfo/index",query:{orderSerial:e.orderSerial}})},addReview:function(e){this.orderSerial=e.orderSerial,this.transportRangeId=e.wlId,this.shipperId=e.shipperId,this.companyId=e.companyId,this.isOwner?this.dialogVisible=!0:this.dialogVisible2=!0},viewReview:function(e){this.$router.push("/hyzx/order/rateInfo"+(this.isOwner?"":"/carrier")+"?orderSerial="+e.orderSerial+(this.isOwner?"":"&type=carrier"))},viewComplain:function(e){this.$router.push("/hyzx/complaintsInfo/index?orderSerial="+e.orderSerial+(this.isOwner?"":"&type=carrier"))},replyComplain:function(e){this.$router.push("/hyzx/complaintsInfo/index?orderSerial="+e.orderSerial+(this.isOwner?"":"&type=carrier"))},oneMoreTime:function(){this.$router.push("/hyzx/order/create")},fetchAllOrder:function(){var e=this;return this.loading=!0,d.e(this.otherinfo.userToken,this.searchQuery).then(function(t){e.usersArr=t.list,e.total=t.totalCount,e.loading=!1})},fetchData:function(){this.eventBus.$emit("updateListCount"),this.fetchAllOrder()},handlePageChange:function(e){this.searchQuery.currentPage=e.pageNum,this.searchQuery.pageSize=e.pageSize,this.fetchData()},getSearchParam:function(e){console.log("obj::",r()(e),this.searchQuery.vo),this.searchQuery.vo=n()(this.searchQuery.vo,e),this.loading=!1,this.fetchData()},doAction:function(e){window.open("/order/create")},clickDetails:function(e,t,a){this.$refs.multipleTable.toggleRowSelection(e)},getSelection:function(e){this.selected=e}}}},kyx1:function(e,t){},m2Yb:function(e,t){},o9X6:function(e,t,a){"use strict";function i(e){a("kyx1")}var n=a("BTi/"),o=a("fwBU"),r=a("VU/8"),s=i,l=r(n.a,o.a,s,null,null);t.a=l.exports},plOv:function(e,t){},"rwP/":function(e,t){},t5DY:function(e,t,a){"use strict";function i(e){return e=e||"",m.b.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})}function n(){return f?new h.a(function(e){e(f)}):m.b.get("/anfacommonservice/common/oss/v1/policy").then(function(e){return f=e.data||"",setTimeout(function(){f=""},18e4),f})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return m.b.get("/28-web/sysDict/getSysDictByCodeGet/"+e).then(function(e){return e.data||[]})}function r(e){return m.b.axios({url:"/28-web/sysDict/getSysDictByCodeGet/"+e,method:"get"})}function s(e){return m.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile?mobile="+e,method:"get"})}function l(e){return m.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getDriverInfoByMobile?mobile="+e,method:"get"})}function c(e){return m.b.get("/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile",{params:{mobile:e}})}function u(e){return m.b.axios({url:"/aflcorderservice/order/fclOrder/v1/getDetailsByOrderSerial/"+e,method:"get"})}function d(e,t){var a=new FormData;for(var i in t)a.append(i,t[i]);var n="";for(var o in t)n+="&"+o+"="+t[o];return m.b.request({url:"/aflc-common/common/aflcMemberCenter/v1/updatePassword?memberType="+e,method:"put",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:n})}t.a=i,t.h=n,t.f=o,t.c=r,t.g=s,t.d=l,t.e=c,t.b=u,t.i=d;var p=a("//Fk"),h=a.n(p),m=a("Vo7i"),f=void 0},u8ra:function(e,t,a){"use strict";function i(e,t){return t||!u[e]?c.b.get("/api-system/system/org/v1/tree/"+e).then(function(t){var a=t.data||[];return u[e]=a,a}):new l.a(function(t){t(u[e])})}function n(e,t,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e;return"object"!==(void 0===e?"undefined":r()(e))&&(o={pageSize:i,currentPage:n,vo:{name:t,orgid:e,mobilephone:a}}),c.b.post("/api-system/system/user/v1/findAllInfo",o).then(function(e){return e.data||{total:0,list:[]}})}t.a=i,t.b=n;var o=a("pFYg"),r=a.n(o),s=a("//Fk"),l=a.n(s),c=a("Vo7i"),u={}}});