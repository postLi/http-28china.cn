webpackJsonp([14,22],{"1onU":function(e,t,n){"use strict";function r(e){n("Q66M"),n("rwP/")}var a=n("VT+v"),o=n("1pBW"),i=n("VU/8"),s=r,l=i(a.a,o.a,s,"data-v-6902e15e",null);t.a=l.exports},"1pBW":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tms-pagenation"},[n("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(1)}}},[n("span",{staticClass:"first-page"})]),n("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(e.pageNum-1)}}},[n("span",{staticClass:"prev-page"})]),e._v(" "),n("span",{staticClass:"page-jumper"},[e._v("\n    第\n    "),n("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:e.pages,type:"number",disabled:e.pages<=1},on:{keyup:e.handleKeyup,change:e.handleChange,focus:e.handleFocus,blur:e.handleBlur},model:{value:e.inputval,callback:function(t){e.inputval="string"==typeof t?t.trim():t},expression:"inputval"}}),e._v(" 页\n  ")],1),e._v("\n  /共 "+e._s(e.pages)+" 页\n  "),n("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pageNum+1)}}},[n("span",{staticClass:"next-page"})]),e._v(" "),n("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pages)}}},[n("span",{staticClass:"last-page"})]),e._v(" "),n("span",{staticClass:"tms-pagination__sizes"},[n("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:e.sizeChange},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},e._l(e.sizes,function(t,r){return n("el-option",{key:r,attrs:{label:t,disabled:e.pages<=1,value:t}})}))],1)])},a=[],o={render:r,staticRenderFns:a};t.a=o},"3Qpc":function(e,t){},"9UCZ":function(e,t,n){"use strict";var r=n("TuGF"),a=n("GrA4"),o=n("VU/8"),i=o(r.a,a.a,null,null,null);t.a=i.exports},"BTi/":function(e,t,n){"use strict";function r(e,t){var n=[];return e.map(function(e){e.index=t,n.push(e),e.children&&(n=n.concat(r(e.children,t+1)))}),n}var a=n("Dd8w"),o=n.n(a),i=n("O6e2"),s=n("u8ra"),l=n("NYxO");t.a={props:{value:{type:[Number,String]},disabled:{type:Boolean,default:!1}},watch:{value:function(e){this.aid=e,this.init()}},mounted:function(){var e=this;this.aid=this.value,this.init(),i.a.$on("closepopbox",function(){console.log("closepopbox selectTree:"),e.$refs.myautocomplete.handleClose()})},computed:o()({},Object(l.b)(["otherinfo"]),{openGroups:function(){return r(this.groups,1)}}),data:function(){return{groups:[],aid:""}},methods:{init:function(){var e=this;this.inited||(this.inited=!0,Object(s.a)(this.otherinfo.companyId).then(function(t){e.groups=t}).catch(function(t){e.inited=!1}))},change:function(e){this.$emit("change",e),this.$emit("input",e)}}}},Ff4b:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{staticClass:"orderlist-search staff_searchinfo clearfix",attrs:{"label-width":"140px",inline:!0,size:e.btnsize,"label-position":"right",model:e.searchForm}},[n("div",{staticClass:"search_warrper"},[n("el-form-item",{attrs:{label:"订单号/商品名称："}},[n("el-input",{attrs:{maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.orderSerialOrGoodsName,callback:function(t){e.$set(e.searchForm,"orderSerialOrGoodsName",t)},expression:"searchForm.orderSerialOrGoodsName"}})],1),e._v(" "),e.isall?n("el-form-item",{attrs:{label:"订单状态："}},[n("select-type",{attrs:{type:"AF037"},model:{value:e.searchForm.orderStatus,callback:function(t){e.$set(e.searchForm,"orderStatus",t)},expression:"searchForm.orderStatus"}})],1):e._e(),e._v(" "),n("el-form-item",{attrs:{label:"出发地："}},[n("el-input",{attrs:{maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.startAddress,callback:function(t){e.$set(e.searchForm,"startAddress",t)},expression:"searchForm.startAddress"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"到达地："}},[n("el-input",{attrs:{maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.endAddress,callback:function(t){e.$set(e.searchForm,"endAddress",t)},expression:"searchForm.endAddress"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"发货人："}},[n("el-input",{attrs:{maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.consignor,callback:function(t){e.$set(e.searchForm,"consignor",t)},expression:"searchForm.consignor"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"发货人手机："}},[n("el-input",{attrs:{maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.consignorPhone,callback:function(t){e.$set(e.searchForm,"consignorPhone",t)},expression:"searchForm.consignorPhone"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"收货人："}},[n("el-input",{attrs:{maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.consignee,callback:function(t){e.$set(e.searchForm,"consignee",t)},expression:"searchForm.consignee"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"收货人手机："}},[n("el-input",{attrs:{maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.consigneePhone,callback:function(t){e.$set(e.searchForm,"consigneePhone",t)},expression:"searchForm.consigneePhone"}})],1)],1),e._v(" "),n("el-form-item",{staticClass:"staff_searchinfo--btn"},[n("el-button",{attrs:{size:"mini",icon:"el-icon-search",type:"primary"},on:{click:e.onSubmit}},[e._v("搜索")]),e._v(" "),n("el-button",{attrs:{size:"mini",icon:"el-icon-close",type:"info",plain:""},on:{click:e.clearForm}},[e._v("重置")])],1)],1)},a=[],o={render:r,staticRenderFns:a};t.a=o},GML0:function(e,t,n){"use strict";var r=n("mvHQ"),a=n.n(r),o=n("woOf"),i=n.n(o),s=(n("0xDb"),n("o9X6")),l=n("9UCZ");t.a={name:"order-manage-search",components:{SelectTree:s.a,SelectType:l.a},props:{btnsize:{type:String,default:"mini"},orgid:{type:Number},issender:{type:Boolean,dafault:!1},isall:{type:Boolean,default:!1}},data:function(){return{searchForm:{orderSerialOrGoodsName:"",orderStatus:"AF03701",startAddress:"",endAddress:"",consignee:"",consigneePhone:"",consignor:"",consignorPhone:""}}},watch:{orgid:function(e){}},mounted:function(){this.$route.query.orderSerial&&(this.searchForm.orderSerialOrGoodsName=this.$route.query.orderSerial),this.onSubmit()},methods:{onSubmit:function(){var e=i()({},this.searchForm);this.isall||delete e.orderStatus,console.log("this.searchForm2:",this.searchForm,a()(e)),this.$emit("change",e)},clearForm:function(){this.searchForm={orderSerialOrGoodsName:"",orderStatus:"AF03701",startAddress:"",endAddress:"",consignee:"",consigneePhone:"",consignor:"",consignorPhone:"",wlName:""}}}}},GrA4:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",e._b({ref:"myautocomplete",attrs:{placeholder:e.placeholder},on:{change:e.change},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}},"el-select",e.$attrs,!1),[e._t("head"),e._v(" "),e._l(e.types,function(t){return[e._t("default",[n("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})],{item:t})]}),e._v(" "),e._t("foot")],2)},a=[],o={render:r,staticRenderFns:a};t.a=o},Nh8m:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("y2Mq"),a=n("j+u4"),o=n("VU/8"),i=o(r.a,a.a,null,null,null);t.default=i.exports},OHys:function(e,t,n){"use strict";var r=n("Vo7i");t.a={getAllShip:function(e){return r.b.post("/api-order/order/v1/findAllShip",e).then(r.a).then(function(e){return e.data?e.data:{total:0,list:[]}})},getFindByShipSnOrGoodSn:function(e){return r.b.post("/api-order/order/v1/findByShipSnOrGoodSn",e).then(r.a)},postNewOrder:function(e){return r.b.post("/api-order/order/v1/",e).then(r.a)},putChangeOrder:function(e){return r.b.put("/api-order/order/v1/",e).then(r.a)},getOrderInfoById:function(e){return r.b.get("/api-order/order/v1/"+e).then(r.a)},deleteOrderInfoById:function(e){return r.b.delete("/api-order/order/v1/"+e+"?type=2").then(r.a)},deleteCancleOrderById:function(e){return r.b.delete("/api-order/order/v1/"+e+"?type=3").then(r.a)},postGenerateGoodsSn:function(e){return r.b.post("/api-order/order/v1/generateGoodsSn",e).then(r.a)},getShipSn:function(e){return r.b.get("/api-order/order/v1/getShipSn",{params:{orgid:e}}).then(r.a)},getJudgeShipSn:function(e,t){return r.b.get("/api-order/order/v1/judgeShipSn/"+e,{params:{orgId:t}}).then(r.a)},getExportExcel:function(){},getPersonalSetup:function(e,t){return r.b.get("/api-order/order/tmsshipsetting/v1/"+e).then(r.a).then(function(e){return e.data?t?e.data[t]||{}:e.data:{}})},putPersonalSetup:function(e){return r.b.put("/api-order/order/tmsshipsetting/v1/",e).then(r.a)},resetPersonalSetup:function(e){return r.b.put("/api-order/order/tmsshipsetting/v1/"+e).then(r.a)},getBatchList:function(e){return r.b.get("/api-order/order/v1/bath/"+e).then(r.a)},getRecently:function(e){return r.b.get("/api-order/order/v1/findRecently",{params:{Type:e}}).then(r.a)},getCreateOrderDate:function(){return r.b.get("/api-order/order/v1/orderCreateDate").then(function(e){return e.data||""}).then(r.a)},getRemarkList:function(){return r.b.get("/api-order/order/recently/v1/").then(r.a).then(function(e){return e.data||{list:[],total:0}})},postRemark:function(e){return r.b.post("/api-order/order/recently/v1/",e).then(r.a)},putRemark:function(e,t){return r.b.put("/api-order/order/recently/v1/"+e,t).then(r.a)},deleteRemark:function(e){return r.b.delete("/api-order/order/recently/v1/"+e).then(r.a)},getCargoSetting:function(e){return r.b.get("/api-order/order/tmsorderfield/v1/",{params:{orgId:e,Type:"orderCargoSetting"}}).then(r.a).then(function(e){return e.data||[]})},putCargoSetting:function(e){return r.b.put("/api-order/order/tmsorderfield/v1/",e).then(r.a)},getShipLog:function(e){return r.b.post("/api-order/order/change/v1/",{currentPage:1,pageSize:100,vo:{shipId:e}}).then(function(e){return e.data||{list:[],total:0}})},getShipAbnormal:function(e){return r.b.get("/api-order/order/abnormal/v1/findAbnormaByShipId/"+e).then(function(e){return e.data||[]})},getShipTrackinfo:function(e){return r.b.post("/api-order/order/shipTrack/v1/findAll/"+e).then(function(e){return e.data||[]})},postTrackinfo:function(e){return r.b.post("/api-order/order/shipTrack/v1/add",e)},putTrackinfo:function(e){return r.b.put("/api-order/order/shipTrack/v1/edit",e)},deleteTrackinfo:function(e){return r.b.delete("/api-order/order/shipTrack/v1/deleteById/"+e)},getBatchInfo:function(e){return r.b.get("/api-order/order/pickup/v1/findByBatch/",{params:{batchNum:e}})}}},Q66M:function(e,t){},RBAt:function(e,t,n){"use strict";function r(e){n("3Qpc")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("GML0"),o=n("Ff4b"),i=n("VU/8"),s=r,l=i(a.a,o.a,s,null,null);t.default=l.exports},TuGF:function(e,t,n){"use strict";var r=n("Dd8w"),a=n.n(r),o=n("O6e2"),i=n("t5DY"),s=n("NYxO"),l=n("TuU3");t.a={name:"selectType",props:{orgid:{type:[Number,String],default:""},type:{type:String,default:"",required:!0},placeholder:{type:String,default:"请选择"},value:{type:[Number,String,Array]},remote:{type:Boolean,default:!1}},computed:a()({},Object(s.b)(["otherinfo"])),data:function(){return{val:"",types:[],dataCache:{}}},watch:{value:{handler:function(e){this.val=e||""},immediate:!0}},mounted:function(){var e=this;if(this.remote)this.fetchData();else{var t=l.a.get(this.type);""===t?this.fetchData():this.types=t}o.a.$on("closepopbox",function(){console.log("closepopbox selectType:"),e.$refs.myautocomplete.handleClose()})},methods:{fetchData:function(){var e=this,t=function(t){e.types=t,l.a.set(e.type,t)};this.dataCache[this.type]?t(this.dataCache[this.type]):Object(i.f)(this.type,this.orgid||this.otherinfo.companyId).then(t)},change:function(e){this.$emit("change",e),this.$emit("input",this.val)}}}},TuU3:function(e,t,n){"use strict";window.TMS_DATA_CACHE={};var r={get:function(e){return window.TMS_DATA_CACHE[e]||""},set:function(e,t){return window.TMS_DATA_CACHE[e]=t,t}};t.a=r},"VT+v":function(e,t,n){"use strict";t.a={props:{sizes:{type:Array,default:function(){return[20,50,100,200]}},total:{type:Number,default:0}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){this.pageNum=1}},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:20}},mounted:function(){this.size=this.sizes[0]},methods:{handleFocus:function(e){this.oldValue=e.target.value},sizeChange:function(){this.pageNum=1,this.pageNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(e){this.pageNum=e,this.changeEvent()},handleSizeChange:function(e){this.size=e,this.changeEvent()},handleChange:function(e){var t=parseInt(e,10);isNaN(t)?this.inputval=1:t<1?this.inputval=1:t>this.pages?this.inputval=this.pages:this.inputval=t},handleBlur:function(e){var t=e.target;this.handleChange(t.value),this.jumpTo(this.inputval)},handleKeyup:function(e){var t=e.keyCode,n=e.target;console.log(t,n),13===t&&this.oldValue&&n.value!==this.oldValue&&(this.handleChange(n.value),this.oldValue="")},jumpTo:function(e){e<1?this.pageNum=1:e>this.pages?this.pageNum=this.pages:this.pageNum=e,this.changeEvent()}}}},fwBU:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",{ref:"myautocomplete",staticClass:"select-tree",attrs:{disabled:e.disabled},on:{change:e.change},model:{value:e.aid,callback:function(t){e.aid=t},expression:"aid"}},e._l(e.openGroups,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}},[n("div",{class:"indent indent"+t.index},[e._v(e._s(t.name))])])}))},a=[],o={render:r,staticRenderFns:a};t.a=o},"j+u4":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"tab-content"},[n("SearchForm",{attrs:{btnsize:e.btnsize},on:{change:e.getSearchParam}}),e._v(" "),n("div",{staticClass:"tab_info"},[n("div",{staticClass:"btns_box"},[n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(t){e.doAction("add")}}},[e._v("创建订单")])],1),e._v(" "),n("div",{staticClass:"info_tab"},[n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.usersArr,stripe:"",border:"","tooltip-effect":"dark"},on:{"row-click":e.clickDetails,"selection-change":e.getSelection}},[n("el-table-column",{attrs:{fixed:"",prop:"customerId",label:"序号",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s((e.searchQuery.currentPage-1)*e.searchQuery.pageSize+t.$index+1)+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{fixed:"",prop:"orderSerial",label:"订单号",width:"130"}}),e._v(" "),n("el-table-column",{attrs:{prop:"orderStatusName",label:"订单状态",width:"110"}}),e._v(" "),n("el-table-column",{attrs:{prop:"wlName",label:"物流公司",width:"130"}}),e._v(" "),n("el-table-column",{attrs:{prop:"goodsName",label:"商品名称",width:"90"}}),e._v(" "),n("el-table-column",{attrs:{prop:"goodsNum",label:"货品总数量（件）",width:"110"}}),e._v(" "),n("el-table-column",{attrs:{label:"预估总重量（公斤）",prop:"goodsWeight",width:"90"}}),e._v(" "),n("el-table-column",{attrs:{prop:"goodsVolume",label:"预计总体积（方）",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{prop:"goodsTypeName",label:"货物类型",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{prop:"totalAmount",label:"预估总运费（元）",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{prop:"consignorAddress",label:"出发地",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{prop:"consigneeAddress",label:"到达地",width:"110"}}),e._v(" "),n("el-table-column",{attrs:{prop:"consignor",label:"发货人",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{prop:"consignorPhone",label:"发货人手机",width:"110"}}),e._v(" "),n("el-table-column",{attrs:{prop:"consignee",label:"收货人",width:"90"}}),e._v(" "),n("el-table-column",{attrs:{prop:"consigneePhone",label:"收货人手机",width:"120"}}),e._v(" "),n("el-table-column",{attrs:{prop:"createTime",label:"下单时间",width:"100"}}),e._v(" "),n("el-table-column",{attrs:{label:"承运时间",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("parseTime")(t.row.carrierTime))+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"提货时间",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("parseTime")(t.row.pickUpGoodsTime))+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"发货时间",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("parseTime")(t.row.deliveryTime))+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"收货时间",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("parseTime")(t.row.receiveTime))+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(n){e.viewDetail(t.row)}}},[e._v("查看")]),e._v(" "),"AF03702"===e.orderStatus?n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(n){e.confirmCarrier(t.row)}}},[e._v("确定承运")]):e._e(),e._v(" "),"AF03703"===e.orderStatus?n("div",[n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(n){e.cancelCarrier(t.row)}}},[e._v("取消承运")]),e._v(" "),n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(n){e.confirmPickUp(t.row)}}},[e._v("确认提货")])],1):e._e(),e._v(" "),"AF03704"===e.orderStatus?n("div",[n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(n){e.confirmDelivery(t.row)}}},[e._v("确认发货")])],1):e._e(),e._v(" "),"AF03705"===e.orderStatus?n("div",[t.row.complainWorkSerial?n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(n){e.replyComplain(t.row)}}},[e._v("投诉回复")]):e._e(),e._v(" "),t.row.complainWorkSerial?e._e():n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(n){e.addComplain(t.row)}}},[e._v("我要投诉")]),e._v(" "),n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(n){e.confirmEvaluate(t.row)}}},[e._v("确认收货")])],1):e._e(),e._v(" "),"AF03706"===e.orderStatus?n("div",[t.row.complainWorkSerial?n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(n){e.replyComplain(t.row)}}},[e._v("投诉回复")]):e._e(),e._v(" "),t.row.complainWorkSerial?e._e():n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(n){e.addComplain(t.row)}}},[e._v("我要投诉")]),e._v(" "),t.row.evaluationId?e._e():n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(n){e.addReview(t.row)}}},[e._v("我要评价")]),e._v(" "),t.row.evaluationId?n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(n){e.viewReview(t.row)}}},[e._v("评价详情")]):e._e()],1):e._e(),e._v(" "),"AF03707"===e.orderStatus?n("div",[n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(n){e.viewComplain(t.row)}}},[e._v("投诉详情")]),e._v(" "),n("el-button",{attrs:{type:"primary",size:e.btnsize,icon:"el-icon-circle-plus",plain:""},on:{click:function(n){e.viewReview(t.row)}}},[e._v("评价详情")])],1):e._e(),e._v(" "),"AF03708"===e.orderStatus?n("div"):e._e()]}}])})],1)],1),e._v(" "),n("div",{staticClass:"info_tab_footer"},[e._v("共计:"+e._s(e.total)+" "),n("div",{staticClass:"show_pager"},[n("Pager",{attrs:{total:e.total},on:{change:e.handlePageChange}})],1)])])],1)},a=[],o={render:r,staticRenderFns:a};t.a=o},kyx1:function(e,t){},o9X6:function(e,t,n){"use strict";function r(e){n("kyx1")}var a=n("BTi/"),o=n("fwBU"),i=n("VU/8"),s=r,l=i(a.a,o.a,s,null,null);t.a=l.exports},"rwP/":function(e,t){},t5DY:function(e,t,n){"use strict";function r(e){return e=e||"",f.b.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})}function a(){return m?new h.a(function(e){e(m)}):f.b.get("/anfacommonservice/common/oss/v1/policy").then(function(e){return m=e.data||"",setTimeout(function(){m=""},18e4),m})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return f.b.get("/28-web/sysDict/getSysDictByCodeGet/"+e).then(function(e){return e.data||[]})}function i(e){return f.b.axios({url:"/28-web/sysDict/getSysDictByCodeGet/"+e,method:"get"})}function s(e){return f.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile?mobile="+e,method:"get"})}function l(e){return f.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getDriverInfoByMobile?mobile="+e,method:"get"})}function c(e){return f.b.get("/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile",{params:{mobile:e}})}function u(e){return f.b.axios({url:"/aflcorderservice/order/fclOrder/v1/getDetailsByOrderSerial/"+e,method:"get"})}function d(e,t){var n=new FormData;for(var r in t)n.append(r,t[r]);var a="";for(var o in t)a+="&"+o+"="+t[o];return f.b.request({url:"/aflc-common/common/aflcMemberCenter/v1/updatePassword?memberType="+e,method:"put",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:a})}t.a=r,t.h=a,t.f=o,t.c=i,t.g=s,t.d=l,t.e=c,t.b=u,t.i=d;var p=n("//Fk"),h=n.n(p),f=n("Vo7i"),m=void 0},u8ra:function(e,t,n){"use strict";function r(e,t){return t||!u[e]?c.b.get("/api-system/system/org/v1/tree/"+e).then(function(t){var n=t.data||[];return u[e]=n,n}):new l.a(function(t){t(u[e])})}function a(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e;return"object"!==(void 0===e?"undefined":i()(e))&&(o={pageSize:r,currentPage:a,vo:{name:t,orgid:e,mobilephone:n}}),c.b.post("/api-system/system/user/v1/findAllInfo",o).then(function(e){return e.data||{total:0,list:[]}})}t.a=r,t.b=a;var o=n("pFYg"),i=n.n(o),s=n("//Fk"),l=n.n(s),c=n("Vo7i"),u={}},y2Mq:function(e,t,n){"use strict";var r=n("woOf"),a=n.n(r),o=n("RBAt"),i=n("1onU"),s=(n("OHys"),n("K2xx"));n("0xDb");t.a={components:{SearchForm:o.default,Pager:i.a},computed:{},mounted:function(){},data:function(){return{btnsize:"mini",usersArr:[],total:0,loading:!0,setupTableVisible:!1,isModify:!1,selectInfo:{},selected:[],searchQuery:{currentPage:1,pageSize:20,vo:{orderSerialOrGoodsName:"",orderStatus:"AF03702",startAddress:"",endAddress:"",consignee:"",consigneePhone:"",consignor:"",consignorPhone:"",userToken:"",queryType:"1",wlName:""}}}},methods:{viewDetail:function(e){},confirmCarrier:function(e){var t=this;this.$confirm("确定要承运吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){s.k(e.orderSerial).then(function(e){t.$message({type:"success",message:"操作成功!"}),t.fetchData()})}).catch(function(){t.$message({type:"info",message:"已取消"})})},cancelCarrier:function(e){},confirmPickUp:function(e){},confirmDelivery:function(e){},replyComplain:function(e){},confirmEvaluate:function(e){},addComplain:function(e){},addReview:function(e){},viewReview:function(e){},viewComplain:function(e){},fetchAllOrder:function(){var e=this;return this.loading=!0,s.e(this.otherinfo.userToken,this.searchQuery).then(function(t){e.usersArr=t.list,e.total=t.totalCount,e.loading=!1})},fetchData:function(){this.fetchAllOrder()},handlePageChange:function(e){this.searchQuery.currentPage=e.pageNum,this.searchQuery.pageSize=e.pageSize,this.fetchData()},getSearchParam:function(e){this.searchQuery.vo=a()(this.searchQuery.vo,e),this.loading=!1,this.fetchData()},doAction:function(e){this.$router.push({path:"/hyzx/carrier/order/create"})},clickDetails:function(e,t,n){this.$refs.multipleTable.toggleRowSelection(e)},getSelection:function(e){this.selected=e}}}}});