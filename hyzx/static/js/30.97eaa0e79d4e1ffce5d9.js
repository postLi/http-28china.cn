webpackJsonp([30],{"1oRB":function(t,e,a){"use strict";function n(t){a("l7pv")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("V29P"),s=a("YKuv"),o=a("VU/8"),l=n,r=o(i.a,s.a,l,null,null);e.default=r.exports},"1onU":function(t,e,a){"use strict";function n(t){a("Q66M"),a("rwP/")}var i=a("VT+v"),s=a("1pBW"),o=a("VU/8"),l=n,r=o(i.a,s.a,l,"data-v-6902e15e",null);e.a=r.exports},"1pBW":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tms-pagenation"},[a("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(1)}}},[a("span",{staticClass:"first-page"})]),a("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(t.pageNum-1)}}},[a("span",{staticClass:"prev-page"})]),t._v(" "),a("span",{staticClass:"page-jumper"},[t._v("\n    第\n    "),a("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:t.pages,type:"number",disabled:t.pages<=1},on:{keyup:t.handleKeyup,change:t.handleChange,focus:t.handleFocus,blur:t.handleBlur},model:{value:t.inputval,callback:function(e){t.inputval="string"==typeof e?e.trim():e},expression:"inputval"}}),t._v(" 页\n  ")],1),t._v("\n  /共 "+t._s(t.pages)+" 页\n  "),a("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pageNum+1)}}},[a("span",{staticClass:"next-page"})]),t._v(" "),a("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pages)}}},[a("span",{staticClass:"last-page"})]),t._v(" "),a("span",{staticClass:"tms-pagination__sizes"},[a("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:t.sizeChange},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},t._l(t.sizes,function(e,n){return a("el-option",{key:n,attrs:{label:e,disabled:t.pages<=1,value:e}})}))],1)])},i=[],s={render:n,staticRenderFns:i};e.a=s},BWiL:function(t,e,a){"use strict";function n(t,e,a){return d.b.post("/28-web/range/member/list",p()({currentPage:t,pageSize:e},a))}function i(t){return d.b.post("/28-web/range/create",t)}function s(t){return d.b.axios({url:"/"+h+"/usercenter/aflcTransportRange/v1/findMemberAflcTransportRange/"+t,method:"get"})}function o(t){return d.b.post("/28-web/range/update",t)}function l(t){return d.b.post("/28-web/range/handle/delete",t)}function r(t){return d.b.post("/28-web/range/handle/lowerShelf",t)}function c(t){return d.b.post("/28-web/range/handle/upperShelf",t)}e.d=n,e.e=i,e.a=s,e.b=o,e.c=l,e.f=r,e.g=c;var u=a("woOf"),p=a.n(u),d=a("Vo7i"),h="aflc-uc"},Q66M:function(t,e){},V29P:function(t,e,a){"use strict";var n=a("mvHQ"),i=a.n(n),s=a("nOfT"),o=(a.n(s),a("BWiL")),l=a("0xDb"),r=a("1onU");e.a={components:{Pager:r.a},data:function(){return{loading:!0,defaultImg:"/static/default.png",totalCount:0,page:1,pagesize:20,logisticsForm:{startLocation:"",endLocation:""},tableData:[],selected:[]}},watch:{},mounted:function(){this.firstblood()},methods:{doAction:function(t){var e=this;if(!this.selected.length)return this.$message({message:"请选择专线~",type:"warning"}),!1;var a=void 0;switch(t){case"use":if(a=this.selected.map(function(t){return t.id}),!a.length)return this.$message({type:"info",message:"请先下架~"}),!1;Object(o.g)(a).then(function(t){e.$message({type:"success",message:"上架成功~"}),e.firstblood()});break;case"disable":if(a=this.selected.map(function(t){return t.id}),!a.length)return this.$message({type:"info",message:"请先上架~"}),!1;Object(o.f)(a).then(function(t){e.$message({type:"success",message:"下架成功~"}),e.firstblood()});break;case"remove":a=this.selected.map(function(t){return t.id}),this.$confirm("确定删除项吗？","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.c)(a).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.firstblood()})});break;case"detail":if(this.selected.length>1)return this.$message.info("只允许操作一条数据~"),this.$refs.multipleTable.clearSelection(),!1;var n="http://192.168.1.157:825";n=-1!==window.location.host.indexOf("192.168.1")?"http://192.168.1.157:825":"http://www.28kuaiyun.cn",window.open(n+"/zhuanxian/detail?id="+this.selected[0].id+"&publishId="+this.selected[0].publishId);break;case"edit":if(this.selected.length>1)return this.$message.info("只允许操作一条数据~"),this.$refs.multipleTable.clearSelection(),!1;this.$router.push({name:"发布物流专线",query:{data:i()(this.selected[0]),ifrevise:"1"}})}this.$refs.multipleTable.clearSelection()},firstblood:function(){var t=this;this.loading=!0,Object(o.d)(this.page,this.pagesize,this.logisticsForm).then(function(e){t.tableData=e.data.list,t.totalCount=e.data.totalCount,t.tableData.forEach(function(t){t.Time=Object(l.e)(t.createTime),t.weightcargo=[],t.lightcargo=[],t.rangePrices.forEach(function(e){switch(e.type){case"0":t.lightcargo.push(e);break;case"1":t.weightcargo.push(e)}}),t.lightcargo.sort(function(t,e){return t.startVolume-e.startVolume}),t.weightcargo.sort(function(t,e){return t.startVolume-e.startVolume})}),t.loading=!1})},handlePageChange:function(t){this.page=t.pageNum,this.pagesize=t.pageSize,this.firstblood()},getSelection:function(t){this.selected=t},clickDetails:function(t,e,a){this.$refs.multipleTable.toggleRowSelection(t)},clearSearch:function(){this.$refs.ruleForm.resetFields(),this.firstblood()},handleSearch:function(){this.firstblood()},handleInfo:function(t){this.$router.push({name:"发布物流专线",query:{data:i()(t),ifrevise:"2"}})},handleNew:function(){this.openWindow()},openWindow:function(){location.href="/hyzx/create/line"}}}},"VT+v":function(t,e,a){"use strict";e.a={props:{sizes:{type:Array,default:function(){return[20,50,100,200]}},total:{type:Number,default:0}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){this.pageNum=1}},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:20}},mounted:function(){this.size=this.sizes[0]},methods:{handleFocus:function(t){this.oldValue=t.target.value},sizeChange:function(){this.pageNum=1,this.pageNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(t){this.pageNum=t,this.changeEvent()},handleSizeChange:function(t){this.size=t,this.changeEvent()},handleChange:function(t){var e=parseInt(t,10);isNaN(e)?this.inputval=1:e<1?this.inputval=1:e>this.pages?this.inputval=this.pages:this.inputval=e},handleBlur:function(t){var e=t.target;this.handleChange(e.value),this.jumpTo(this.inputval)},handleKeyup:function(t){var e=t.keyCode,a=t.target;console.log(e,a),13===e&&this.oldValue&&a.value!==this.oldValue&&(this.handleChange(a.value),this.oldValue="")},jumpTo:function(t){t<1?this.pageNum=1:t>this.pages?this.pageNum=this.pages:this.pageNum=t,this.changeEvent()}}}},YKuv:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"TransportRange identification"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.logisticsForm,"label-width":"110px"}},[a("div",{staticClass:"carrierTitle"},[a("div",{staticClass:"realname"},[a("h2",[t._v("管理我的专线")])])]),t._v(" "),a("div",{staticClass:"searchInformation information"},[a("el-form-item",{attrs:{label:"出发地：",prop:"startLocation"}},[a("el-input",{model:{value:t.logisticsForm.startLocation,callback:function(e){t.$set(t.logisticsForm,"startLocation",e)},expression:"logisticsForm.startLocation"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"到达地：",prop:"endLocation"}},[a("el-input",{model:{value:t.logisticsForm.endLocation,callback:function(e){t.$set(t.logisticsForm,"endLocation",e)},expression:"logisticsForm.endLocation"}})],1),t._v(" "),a("el-form-item",{staticClass:"btnChoose",staticStyle:{"margin-left":"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.clearSearch}},[t._v("重置")])],1)],1),t._v(" "),a("div",{staticClass:"information syStyle"},[a("div",{staticClass:"created"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleNew}},[t._v("发布专线")]),t._v(" "),a("el-button",{attrs:{round:"",type:"warning",size:"mini"},on:{click:function(e){t.doAction("detail")}}},[t._v("详情")]),t._v(" "),a("el-button",{attrs:{round:"",type:"info",size:"mini"},on:{click:function(e){t.doAction("edit")}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{size:"small",round:"",type:"success",icon:""},on:{click:function(e){t.doAction("use")}}},[t._v("上架")]),t._v(" "),a("el-button",{attrs:{size:"small",round:"",type:"info",icon:""},on:{click:function(e){t.doAction("disable")}}},[t._v("下架")]),t._v(" "),a("el-button",{attrs:{size:"small",round:"",type:"danger",icon:""},on:{click:function(e){t.doAction("remove")}}},[t._v("删除")])],1),t._v(" "),a("div",{staticClass:"tableStyle",staticStyle:{height:"92%"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",border:"",height:"100%"},on:{"selection-change":t.getSelection,"row-click":t.clickDetails}},[a("el-table-column",{attrs:{fixed:"",sortable:"",type:"selection",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"序号",type:"index",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{label:"出发地",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"moreInfo",on:{click:function(a){t.handleInfo(e.row)}}},[t._v(t._s(e.row.startLocation))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"endLocation",label:"到达地",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{label:"运输时效",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(e.row.transportAging)+" "+t._s(e.row.transportAgingUnit)+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"发车频率",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.departureHzData)+"天/"+t._s(e.row.departureHzTime)+"次")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"重货价格",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.weightcargo.length?a("p",[a("span",{staticClass:"interview"},[t._v("面谈")])]):t._l(e.row.weightcargo,function(n,i){return a("p",{key:n.id,staticClass:"cargo"},[0==i?a("span",[t._v(t._s(n.endVolume)+"公斤以下,"+t._s(n.discountPrice?n.discountPrice:n.primeryPrice)+"元/公斤")]):i==e.row.weightcargo.length-1&&""==n.endVolume?a("span",[t._v(t._s(n.startVolume)+"公斤以上,"+t._s(n.discountPrice?n.discountPrice:n.primeryPrice)+"元/公斤")]):a("span",[t._v(t._s(n.startVolume)+"-"+t._s(n.endVolume)+"公斤,"+t._s(n.discountPrice?n.discountPrice:n.primeryPrice)+"元/公斤")])])})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"轻货价格",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.lightcargo.length?a("p",[a("span",{staticClass:"interview"},[t._v("面谈")])]):t._l(e.row.lightcargo,function(n,i){return a("p",{key:i,staticClass:"cargo"},[0==i?a("span",[t._v(t._s(n.endVolume)+"立方以下,"+t._s(n.discountPrice?n.discountPrice:n.primeryPrice)+"元/立方")]):i==e.row.lightcargo.length-1&&""==n.endVolume?a("span",[t._v(t._s(n.startVolume)+"立方以上,"+t._s(n.discountPrice?n.discountPrice:n.primeryPrice)+"元/立方")]):a("span",[t._v(t._s(n.startVolume)+"-"+t._s(n.endVolume)+"立方,"+t._s(n.discountPrice?n.discountPrice:n.primeryPrice)+"元/立方")])])})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"lowerPrice",label:"最低一票价格（元）",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Time",label:"创建时间",width:"220"}}),t._v(" "),a("el-table-column",{attrs:{label:"专线类型",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"rangeTypeName"},[t._v(t._s(e.row.rangeTypeName))])]}}])})],1)],1)]),t._v(" "),a("div",{staticClass:"info_tab_footer"},[t._v("共计:"+t._s(t.totalCount)+"\n      "),a("div",{staticClass:"show_pager"},[a("Pager",{attrs:{total:t.totalCount},on:{change:t.handlePageChange}})],1)])])],1)},i=[],s={render:n,staticRenderFns:i};e.a=s},l7pv:function(t,e){},nOfT:function(t,e){},"rwP/":function(t,e){}});