webpackJsonp([8,13,23,48],{"/O8v":function(e,t,n){"use strict";function a(e){n("oszT")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("RqXf"),s=n("jqQh"),o=n("VU/8"),r=a,l=o(i.a,s.a,r,null,null);t.default=l.exports},"/kpB":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"tab-content lll-list"},[n("SearchForm",{attrs:{btnsize:e.btnsize},on:{change:e.getSearchParam}}),e._v(" "),n("div",{staticClass:"tab_info"},[n("div",{staticClass:"info_tab"},[n("el-table",{key:e.tableKey,ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.usersArr,stripe:"",border:"","tooltip-effect":"dark",height:"600"},on:{"row-click":e.clickDetails,"selection-change":e.getSelection}},[n("el-table-column",{attrs:{fixed:"",prop:"customerId",label:"序号",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s((e.searchQuery.currentPage-1)*e.searchQuery.pageSize+t.$index+1)+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"insuranceNum",label:"投保单号"}}),e._v(" "),n("el-table-column",{attrs:{prop:"insuranceCompany",label:"保险公司"}}),e._v(" "),n("el-table-column",{attrs:{prop:"insuranceFee",label:"保险金额"}}),e._v(" "),n("el-table-column",{attrs:{prop:"createTime",label:"投保日期"}}),e._v(" "),n("el-table-column",{attrs:{prop:"orderNum",label:"运单号"}}),e._v(" "),n("el-table-column",{attrs:{prop:"paymentStateName",label:"状态"}}),e._v(" "),n("el-table-column",{attrs:{prop:"consignor",label:"操作",width:"400"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"warning",size:"small",plain:""},on:{click:function(n){e.handleEdit(t.$index,t.row,"check")}}},[e._v("查看详情")]),e._v(" "),0===t.row.paymentState?n("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(n){e.handleEdit(t.$index,t.row,"amend")}}},[e._v("修改")]):e._e(),e._v(" "),n("el-button",{attrs:{type:"danger",size:"small",plain:""},on:{click:function(n){e.handleEdit(t.$index,t.row,"delete")}}},[e._v("删除")]),e._v(" "),0===t.row.paymentState?n("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(n){e.handleEdit(t.$index,t.row,"payment")}}},[e._v("支付")]):e._e()]}}])})],1)],1),e._v(" "),n("div",{staticClass:"info_tab_footer"},[e._v("共计:"+e._s(e.total)+"\n      "),n("div",{staticClass:"show_pager"},[n("Pager",{attrs:{total:e.total},on:{change:e.handlePageChange}})],1)])])],1)},i=[],s={render:a,staticRenderFns:i};t.a=s},"1onU":function(e,t,n){"use strict";function a(e){n("Q66M"),n("rwP/")}var i=n("VT+v"),s=n("1pBW"),o=n("VU/8"),r=a,l=o(i.a,s.a,r,"data-v-6902e15e",null);t.a=l.exports},"1pBW":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tms-pagenation"},[n("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(1)}}},[n("span",{staticClass:"first-page"})]),n("span",{staticClass:"page-num",class:{disabled:e.pageNum<=1},on:{click:function(t){e.jumpTo(e.pageNum-1)}}},[n("span",{staticClass:"prev-page"})]),e._v(" "),n("span",{staticClass:"page-jumper"},[e._v("\n    第\n    "),n("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:e.pages,type:"number",disabled:e.pages<=1},on:{keyup:e.handleKeyup,change:e.handleChange,focus:e.handleFocus,blur:e.handleBlur},model:{value:e.inputval,callback:function(t){e.inputval="string"==typeof t?t.trim():t},expression:"inputval"}}),e._v(" 页\n  ")],1),e._v("\n  /共 "+e._s(e.pages)+" 页\n  "),n("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pageNum+1)}}},[n("span",{staticClass:"next-page"})]),e._v(" "),n("span",{staticClass:"page-num",class:{disabled:e.pageNum===e.pages},on:{click:function(t){e.jumpTo(e.pages)}}},[n("span",{staticClass:"last-page"})]),e._v(" "),n("span",{staticClass:"tms-pagination__sizes"},[n("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:e.sizeChange},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},e._l(e.sizes,function(t,a){return n("el-option",{key:a,attrs:{label:t,disabled:e.pages<=1,value:t}})}))],1)])},i=[],s={render:a,staticRenderFns:i};t.a=s},"7KI8":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"manage-orderinfo page-main"},[e.allVisible?n("div",{staticClass:"list-tab-title clearfix"},e._l(e.tabs,function(t,a){return n("span",{key:a,class:{active:e.component===t.name},on:{click:function(n){e.changeComponent(t)}}},[e._v(e._s(t.title+"("+t.num+")"))])})):e._e(),e._v(" "),n("div",{staticClass:"list-tab-content"},[e.allVisible?n("all",{attrs:{listtype:e.component},on:{showDetail:e.showDetail}}):e._e(),e._v(" "),e.centerDialogVisible?n("Particulars",{attrs:{info:e.detailInfo},on:{reback:e.reback}}):e._e()],1)])},i=[],s={render:a,staticRenderFns:i};t.a=s},"7xPo":function(e,t,n){"use strict";var a=n("8kG9");t.a={computed:{isShow:{get:function(){return this.centerDialogVisible},set:function(){}}},components:{},props:{centerDialogVisible:{type:Boolean,default:!1},info:{type:Object,default:function(){}}},watch:{info:{handler:function(e,t){}}},data:function(){return{usersArr:[],usersArr1:{}}},mounted:function(){this.firstblood()},methods:{reback:function(){this.$emit("reback")},clickDetails:function(e,t,n){this.$refs.multipleTable.toggleRowSelection(e)},getSelection:function(e){this.selected=e},firstblood:function(){var e=this;Object(a.b)(this.info.id).then(function(t){e.usersArr=[t],e.usersArr1=t}).catch(function(t){e.$message.warning(t.text||t.errorInfo||"无法获取服务端数据~"),e.loading=!0})},gotoPayment:function(){window.location.href="/Insurance/pay?id="+this.usersArr1.id}}}},"8kG9":function(e,t,n){"use strict";function a(e,t){return r.b.post("/aflc-uc/usercenter/aflcinsurancepolicy/v1/list",t).then(function(e){return e.data||{list:[],total:0}})}function i(e){return r.b.get("/aflc-uc/usercenter/aflcinsurancepolicy/v1/"+e).then(function(e){return e.data})}function s(e){return r.b.delete("/aflc-uc/usercenter/aflcinsurancepolicy/v1/"+e)}function o(e,t){return r.b.post("/aflc-uc/usercenter/aflcinsurancepolicy/v1/getCountByPaymentState",t).then(function(e){return e.data?e.data||{}:{}})}t.d=a,t.b=i,t.a=s,t.c=o;var r=n("Vo7i")},"9UCZ":function(e,t,n){"use strict";var a=n("TuGF"),i=n("GrA4"),s=n("VU/8"),o=s(a.a,i.a,null,null,null);t.a=o.exports},"BTi/":function(e,t,n){"use strict";function a(e,t){var n=[];return e.map(function(e){e.index=t,n.push(e),e.children&&(n=n.concat(a(e.children,t+1)))}),n}var i=n("Dd8w"),s=n.n(i),o=n("O6e2"),r=n("u8ra"),l=n("NYxO");t.a={props:{value:{type:[Number,String]},disabled:{type:Boolean,default:!1}},watch:{value:function(e){this.aid=e,this.init()}},mounted:function(){var e=this;this.aid=this.value,this.init(),o.a.$on("closepopbox",function(){console.log("closepopbox selectTree:"),e.$refs.myautocomplete.handleClose()})},computed:s()({},Object(l.b)(["otherinfo"]),{openGroups:function(){return a(this.groups,1)}}),data:function(){return{groups:[],aid:""}},methods:{init:function(){var e=this;this.inited||(this.inited=!0,Object(r.a)(this.otherinfo.companyId).then(function(t){e.groups=t}).catch(function(t){e.inited=!1}))},change:function(e){this.$emit("change",e),this.$emit("input",e)}}}},Fwc0:function(e,t){},GrA4:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",e._b({ref:"myautocomplete",attrs:{placeholder:e.placeholder},on:{change:e.change},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}},"el-select",e.$attrs,!1),[e._t("head"),e._v(" "),e._l(e.types,function(t){return[e._t("default",[n("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})],{item:t})]}),e._v(" "),e._t("foot")],2)},i=[],s={render:a,staticRenderFns:i};t.a=s},HnIv:function(e,t){},JtdE:function(e,t,n){"use strict";function a(e){n("O6K6")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("WPq8"),s=n("7KI8"),o=n("VU/8"),r=a,l=o(i.a,s.a,r,null,null);t.default=l.exports},O6K6:function(e,t){},Q66M:function(e,t){},RqXf:function(e,t,n){"use strict";var a=n("mvHQ"),i=n.n(a),s=n("woOf"),o=n.n(s),r=n("o9X6"),l=n("9UCZ");t.a={name:"cargoInfo-insure-search",components:{SelectTree:r.a,SelectType:l.a},props:{btnsize:{type:String,default:"mini"},orgid:{type:Number},isall:{type:Boolean,default:!1}},data:function(){return{searchForm:{insuranceName:""}}},watch:{orgid:function(e){}},mounted:function(){this.onSubmit()},methods:{onSubmit:function(){var e=o()({},this.searchForm);this.isall||delete e.orderStatus,console.log("this.searchForm2:",this.searchForm,i()(e)),this.$emit("change",e)},clearForm:function(){this.searchForm={insuranceName:""}}}}},TuGF:function(e,t,n){"use strict";var a=n("Dd8w"),i=n.n(a),s=n("O6e2"),o=n("t5DY"),r=n("NYxO"),l=n("TuU3");t.a={name:"selectType",props:{orgid:{type:[Number,String],default:""},type:{type:String,default:"",required:!0},placeholder:{type:String,default:"请选择"},value:{type:[Number,String,Array]},remote:{type:Boolean,default:!1}},computed:i()({},Object(r.b)(["otherinfo"])),data:function(){return{val:"",types:[],dataCache:{}}},watch:{value:{handler:function(e){this.val=e||""},immediate:!0}},mounted:function(){var e=this;if(this.remote)this.fetchData();else{var t=l.a.get(this.type);""===t?this.fetchData():this.types=t}s.a.$on("closepopbox",function(){console.log("closepopbox selectType:"),e.$refs.myautocomplete.handleClose()})},methods:{fetchData:function(){var e=this,t=function(t){e.types=t,l.a.set(e.type,t)};this.dataCache[this.type]?t(this.dataCache[this.type]):Object(o.f)(this.type,this.orgid||this.otherinfo.companyId).then(t)},change:function(e){this.$emit("change",e),this.$emit("input",this.val)}}}},TuU3:function(e,t,n){"use strict";window.TMS_DATA_CACHE={};var a={get:function(e){return window.TMS_DATA_CACHE[e]||""},set:function(e,t){return window.TMS_DATA_CACHE[e]=t,t}};t.a=a},"VT+v":function(e,t,n){"use strict";t.a={props:{sizes:{type:Array,default:function(){return[20,50,100,200]}},total:{type:Number,default:0}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){this.pageNum=1}},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:20}},mounted:function(){this.size=this.sizes[0]},methods:{handleFocus:function(e){this.oldValue=e.target.value},sizeChange:function(){this.pageNum=1,this.pageNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(e){this.pageNum=e,this.changeEvent()},handleSizeChange:function(e){this.size=e,this.changeEvent()},handleChange:function(e){var t=parseInt(e,10);isNaN(t)?this.inputval=1:t<1?this.inputval=1:t>this.pages?this.inputval=this.pages:this.inputval=t},handleBlur:function(e){var t=e.target;this.handleChange(t.value),this.jumpTo(this.inputval)},handleKeyup:function(e){var t=e.keyCode,n=e.target;console.log(t,n),13===t&&this.oldValue&&n.value!==this.oldValue&&(this.handleChange(n.value),this.oldValue="")},jumpTo:function(e){e<1?this.pageNum=1:e>this.pages?this.pageNum=this.pages:this.pageNum=e,this.changeEvent()}}}},WPq8:function(e,t,n){"use strict";var a=n("aXt6"),i=n("8kG9"),s=n("x34k");t.a={components:{all:a.default,havepaid:a.default,unpaid:a.default,Particulars:s.default},created:function(){this.getCount()},mounted:function(){var e=this;this.eventBus.$on("updateListCount",function(){e.getCount()})},data:function(){return{detailInfo:{},allVisible:!0,centerDialogVisible:!1,componentKey:0,tabs:[{title:"全部投保单",name:"all",type:"AF03701",num:0},{title:"已支付投保单",name:"havepaid",type:"AF03702",num:0},{title:"未支付投保单",name:"unpaid",type:"AF03703",num:0}],component:"all"}},methods:{showDetail:function(e){this.allVisible=!1,this.centerDialogVisible=!0,this.detailInfo=e},reback:function(){this.allVisible=!0,this.centerDialogVisible=!1},getCount:function(){var e=this;i.c(this.otherinfo.userToken,{queryType:"1"}).then(function(t){e.tabs.forEach(function(e){"all"===e.name?e.num=t.totalCount:"havepaid"===e.name?e.num=t.paymentCount:"unpaid"===e.name&&(e.num=t.notPaymentCount)})})},changeComponent:function(e){this.component=e.name}}}},Zgp3:function(e,t,n){"use strict";var a=n("woOf"),i=n.n(a),s=n("/O8v"),o=n("1onU"),r=n("8kG9");t.a={name:"all",props:{listtype:{type:String,default:"all"}},components:{SearchForm:s.default,Pager:o.a},watch:{listtype:{handler:function(e,t){e&&(this.searchQuery.currentPage=1,this.searchQuery.vo.paymentState="all"===e?"":"havepaid"===e?1:0,this.fetchData())},deep:!0}},data:function(){return{tableKey:0,loading:!1,isAll:!1,isHavePaid:!1,isUnpaid:!1,total:0,btnsize:"small",usersArr:[],searchQuery:{currentPage:1,pageSize:20,vo:{paymentState:"",delFlag:0,createId:"",queryType:1}}}},mounted:function(){},methods:{handlePageChange:function(e){this.searchQuery.currentPage=e.pageNum,this.searchQuery.pageSize=e.pageSize,this.fetchAllData()},getSearchParam:function(e){this.searchQuery.vo=i()(this.searchQuery.vo,e),this.loading=!1,this.fetchAllData()},clickDetails:function(e,t,n){this.$refs.multipleTable.toggleRowSelection(e)},getSelection:function(e){this.selected=e},fetchAllData:function(){this.eventBus.$emit("updateListCount"),this.fetchData()},fetchData:function(){var e=this;return this.loading=!0,Object(r.d)(this.otherinfo.userToken,this.searchQuery).then(function(t){e.usersArr=[];var n="all"===e.listtype?"":"havepaid"===e.listtype?1:0;t.list.forEach(function(t,a){t.paymentState===n?e.usersArr.push(t):""===n&&e.usersArr.push(t)}),e.tableKey=(new Date).getTime(),e.total=t.total,e.loading=!1})},handleEdit:function(e,t,n){var a=this;switch(n){case"check":this.$emit("showDetail",t);break;case"amend":window.location.href="/Insurance/step1?id="+t.id;break;case"payment":window.location.href="/Insurance/pay?id="+t.id;break;case"delete":Object(r.a)(t.id).then(function(e){a.$confirm("确定要删除此投保单吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"}),a.fetchAllData()}).catch(function(){a.$message({type:"info",message:"已取消删除"})})})}}}}},aXt6:function(e,t,n){"use strict";function a(e){n("Fwc0")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("Zgp3"),s=n("/kpB"),o=n("VU/8"),r=a,l=o(i.a,s.a,r,null,null);t.default=l.exports},fwBU:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",{ref:"myautocomplete",staticClass:"select-tree",attrs:{disabled:e.disabled},on:{change:e.change},model:{value:e.aid,callback:function(t){e.aid=t},expression:"aid"}},e._l(e.openGroups,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}},[n("div",{class:"indent indent"+t.index},[e._v(e._s(t.name))])])}))},i=[],s={render:a,staticRenderFns:i};t.a=s},jqQh:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{staticClass:"orderlist-search staff_searchinfo clearfix",attrs:{inline:!0,size:e.btnsize,"label-position":"right",model:e.searchForm}},[n("div",{staticClass:"search_warrper"},[n("el-form-item",{attrs:{label:"投保："}},[n("el-input",{attrs:{placeholder:"保险公司/产品名称/被保险人",maxlength:50,"auto-complete":"off"},model:{value:e.searchForm.insuranceName,callback:function(t){e.$set(e.searchForm,"insuranceName",t)},expression:"searchForm.insuranceName"}})],1)],1),e._v(" "),n("el-form-item",{staticClass:"staff_searchinfo--btn"},[n("el-button",{attrs:{size:"mini",icon:"el-icon-search",type:"primary"},on:{click:e.onSubmit}},[e._v("搜索")]),e._v(" "),n("el-button",{attrs:{size:"mini",icon:"el-icon-close",type:"info",plain:""},on:{click:e.clearForm}},[e._v("重置")])],1)],1)},i=[],s={render:a,staticRenderFns:i};t.a=s},kyx1:function(e,t){},o9X6:function(e,t,n){"use strict";function a(e){n("kyx1")}var i=n("BTi/"),s=n("fwBU"),o=n("VU/8"),r=a,l=o(i.a,s.a,r,null,null);t.a=l.exports},oszT:function(e,t){},"rwP/":function(e,t){},t5DY:function(e,t,n){"use strict";function a(e){return e=e||"",h.b.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})}function i(){return v?new f.a(function(e){e(v)}):h.b.get("/anfacommonservice/common/oss/v1/policy").then(function(e){return v=e.data||"",setTimeout(function(){v=""},18e4),v})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return h.b.get("/28-web/sysDict/getSysDictByCodeGet/"+e).then(function(e){return e.data||[]})}function o(e){return h.b.axios({url:"/28-web/sysDict/getSysDictByCodeGet/"+e,method:"get"})}function r(e){return h.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile?mobile="+e,method:"get"})}function l(e){return h.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getDriverInfoByMobile?mobile="+e,method:"get"})}function c(e){return h.b.axios({url:"/"+m+"/common/aflcMemberCenter/v1/getLogisticsCompanyInfoByMobile?mobile="+e,method:"get"})}function u(e){return h.b.axios({url:"/aflcorderservice/order/fclOrder/v1/getDetailsByOrderSerial/"+e,method:"get"})}function p(e,t){var n=new FormData;for(var a in t)n.append(a,t[a]);var i="";for(var s in t)i+="&"+s+"="+t[s];return h.b.request({url:"/aflc-common/common/aflcMemberCenter/v1/updatePassword?memberType="+e,method:"put",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:i})}t.a=a,t.h=i,t.f=s,t.c=o,t.g=r,t.d=l,t.e=c,t.b=u,t.i=p;var d=n("//Fk"),f=n.n(d),h=n("Vo7i"),m="aflc-common",v=void 0},u8ra:function(e,t,n){"use strict";function a(e,t){return t||!u[e]?c.b.get("/api-system/system/org/v1/tree/"+e).then(function(t){var n=t.data||[];return u[e]=n,n}):new l.a(function(t){t(u[e])})}function i(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=e;return"object"!==(void 0===e?"undefined":o()(e))&&(s={pageSize:a,currentPage:i,vo:{name:t,orgid:e,mobilephone:n}}),c.b.post("/api-system/system/user/v1/findAllInfo",s).then(function(e){return e.data||{total:0,list:[]}})}t.a=a,t.b=i;var s=n("pFYg"),o=n.n(s),r=n("//Fk"),l=n.n(r),c=n("Vo7i"),u={}},x34k:function(e,t,n){"use strict";function a(e){n("HnIv")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("7xPo"),s=n("zdE2"),o=n("VU/8"),r=a,l=o(i.a,s.a,r,null,null);t.default=l.exports},zdE2:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"check_box"},[n("el-header",[n("el-button",{staticClass:"reback",on:{click:e.reback}},[e._v("返回")])],1),e._v(" "),n("el-main",[n("ul",{staticClass:"check_head"},[n("li",{staticClass:"check_title"},[n("div",{staticClass:"baoxian1"},[n("span",{staticStyle:{"font-weight":"600","font-size":"16px"}},[e._v(e._s(e.usersArr1.insuranceName))]),n("span",{staticClass:"baoxiandan"},[e._v(e._s(e.usersArr1.insuranceType))])]),e._v(" "),n("div",{staticClass:"baoxian2"},[e._v("投保日期："),n("span",[e._v(e._s(e.usersArr1.createTime))])])]),e._v(" "),n("li",[n("div",{staticClass:"baoxiandanhao"},[n("div",[e._v("投保单号："+e._s(e.usersArr1.insuranceNum))]),e._v(" "),n("div",[e._v("投保金额："),n("span",{staticClass:"money"},[e._v(e._s(e.usersArr1.insuranceFee?e.usersArr1.insuranceFee+"元":""))])]),e._v(" "),n("div",[n("span",{staticClass:"payment",staticStyle:{"padding-right":"20px"}},[e._v(e._s(0===e.usersArr1.paymentState?"未支付":"已支付"))]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.gotoPayment}},[e._v("前往支付")])],1),e._v(" "),n("div",[n("span",[e._v(e._s(e.usersArr1.paymentTime?"支付时间："+e.usersArr1.paymentTime:""))])])])])]),e._v(" "),n("ul",{staticClass:"check_form"},[n("div",{staticClass:"info_tab"},[n("h4",[e._v("保险信息")]),e._v(" "),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.usersArr,stripe:"",border:"","tooltip-effect":"dark"},on:{"row-click":e.clickDetails,"selection-change":e.getSelection}},[n("el-table-column",{attrs:{prop:"insuranceName",label:"保险名称"}}),e._v(" "),n("el-table-column",{attrs:{prop:"insuranceType",label:"险种"}})],1)],1),e._v(" "),n("div",{staticClass:"info_tab"},[n("h4",[e._v("投保人信息")]),e._v(" "),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.usersArr,stripe:"",border:"","tooltip-effect":"dark"},on:{"row-click":e.clickDetails,"selection-change":e.getSelection}},[n("el-table-column",{attrs:{prop:"policyHolderType",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(0===t.row.policyHolderType?"个人":"团体")+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"policyHolderName",label:"投保人"}}),e._v(" "),n("el-table-column",{attrs:{prop:"policyHolderNum",label:"证件号"}})],1)],1),e._v(" "),n("div",{staticClass:"info_tab"},[n("h4",[e._v("被保人信息")]),e._v(" "),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.usersArr,stripe:"",border:"","tooltip-effect":"dark"},on:{"row-click":e.clickDetails,"selection-change":e.getSelection}},[n("el-table-column",{attrs:{prop:"theInsuredType",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(0===t.row.theInsuredType?"个人":"团体")+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"theInsuredName",label:"被保人"}}),e._v(" "),n("el-table-column",{attrs:{prop:"theInsuredNum",label:"证件号"}})],1)],1),e._v(" "),n("div",{staticClass:"info_tab"},[n("h4",[e._v("货物信息")]),e._v(" "),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.usersArr,stripe:"",border:"","tooltip-effect":"dark"},on:{"row-click":e.clickDetails,"selection-change":e.getSelection}},[n("el-table-column",{attrs:{prop:"goodsType",label:"货物类型"}}),e._v(" "),n("el-table-column",{attrs:{prop:"goodsName",label:"货物名称"}}),e._v(" "),n("el-table-column",{attrs:{prop:"goodsPack",label:"货物包装"}}),e._v(" "),n("el-table-column",{attrs:{prop:"goodsNumber",label:"货物数量"}}),e._v(" "),n("el-table-column",{attrs:{prop:"goodsValue",label:"货物价值"}})],1)],1),e._v(" "),n("div",{staticClass:"info_tab"},[n("h4",[e._v("运输信息")]),e._v(" "),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.usersArr,stripe:"",border:"","tooltip-effect":"dark"},on:{"row-click":e.clickDetails,"selection-change":e.getSelection}},[n("el-table-column",{attrs:{prop:"orderNum",label:"运单号"}}),e._v(" "),n("el-table-column",{attrs:{prop:"carNum",label:"车牌号"}}),e._v(" "),n("el-table-column",{attrs:{prop:"",label:"起运地"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.startProvince?t.row.startProvince:"")+e._s(t.row.startCity?t.row.startCity:"")+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"",label:"目的地"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.endProvince?t.row.endProvince:"")+e._s(t.row.endCity?t.row.endCity:"")+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"transferCitys",label:"中转地"}}),e._v(" "),n("el-table-column",{attrs:{prop:"",label:"中转地"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.transferProvince?t.row.transferProvince:"")+e._s(t.row.transferCity?t.row.transferCity:"")+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"startTime",label:"起运日期"}})],1)],1)])])],1)},i=[],s={render:a,staticRenderFns:i};t.a=s}});