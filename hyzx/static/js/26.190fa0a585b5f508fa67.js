webpackJsonp([26],{"1onU":function(t,e,a){"use strict";function i(t){a("Q66M"),a("rwP/")}var n=a("VT+v"),o=a("1pBW"),s=a("VU/8"),l=i,r=s(n.a,o.a,l,"data-v-6902e15e",null);e.a=r.exports},"1pBW":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tms-pagenation"},[a("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(1)}}},[a("span",{staticClass:"first-page"})]),a("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(t.pageNum-1)}}},[a("span",{staticClass:"prev-page"})]),t._v(" "),a("span",{staticClass:"page-jumper"},[t._v("\n    第\n    "),a("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:t.pages,type:"number",disabled:t.pages<=1},on:{keyup:t.handleKeyup,change:t.handleChange,focus:t.handleFocus,blur:t.handleBlur},model:{value:t.inputval,callback:function(e){t.inputval="string"==typeof e?e.trim():e},expression:"inputval"}}),t._v(" 页\n  ")],1),t._v("\n  /共 "+t._s(t.pages)+" 页\n  "),a("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pageNum+1)}}},[a("span",{staticClass:"next-page"})]),t._v(" "),a("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pages)}}},[a("span",{staticClass:"last-page"})]),t._v(" "),a("span",{staticClass:"tms-pagination__sizes"},[a("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:t.sizeChange},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},t._l(t.sizes,function(e,i){return a("el-option",{key:i,attrs:{label:e,disabled:t.pages<=1,value:e}})}))],1)])},n=[],o={render:i,staticRenderFns:n};e.a=o},B3VW:function(t,e,a){"use strict";function i(t){a("eqqj")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("Ql/W"),o=a("ONtd"),s=a("VU/8"),l=i,r=s(n.a,o.a,l,null,null);e.default=r.exports},ONtd:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Complaint identification lll-complaints"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.logisticsForm,"label-width":"110px"}},[a("div",{staticClass:"carrierTitle"},[a("div",{staticClass:"realname"},[a("h2",[t._v("投诉管理")])])]),t._v(" "),a("div",{staticClass:"searchInformation information"},[a("el-form-item",{attrs:{label:"订单号：",prop:"orderSerial"}},[a("el-input",{model:{value:t.logisticsForm.orderSerial,callback:function(e){t.$set(t.logisticsForm,"orderSerial",e)},expression:"logisticsForm.orderSerial"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"投诉编号：",prop:"workSerial"}},[a("el-input",{model:{value:t.logisticsForm.workSerial,callback:function(e){t.$set(t.logisticsForm,"workSerial",e)},expression:"logisticsForm.workSerial"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"投诉状态：",maxlength:"18",prop:"complainStatus"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.logisticsForm.complainStatus,callback:function(e){t.$set(t.logisticsForm,"complainStatus",e)},expression:"logisticsForm.complainStatus"}},t._l(t.OptionscomplainStatus,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.code}})}))],1),t._v(" "),a("el-form-item",{staticClass:"btnChoose",staticStyle:{"margin-left":"0"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.clearSearch}},[t._v("重置")])],1)],1),t._v(" "),a("div",{staticClass:"information",staticStyle:{height:"75%"}},[a("div",{staticStyle:{height:"100%"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%",height:"100%"},attrs:{data:t.tableData,stripe:"",border:""}},[a("el-table-column",{attrs:{fixed:"",label:"序号",type:"index",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"orderSerial",label:"订单号",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"workSerial",label:"工单编号",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"complainTypeName",label:"投诉类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"complainTime",label:"投诉时间",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"complainStatusName",label:"投诉状态",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button-group",["AF04002"==e.row.complainStatus?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleComplain(e.row)}}},[t._v("投诉详情")]):a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleComplain(e.row)}}},[t._v("投诉回复")])],1)]}}])})],1)],1)]),t._v(" "),a("div",{staticClass:"info_tab_footer"},[t._v("共计:"+t._s(t.totalCount)+" "),a("div",{staticClass:"show_pager"},[a("Pager",{attrs:{total:t.totalCount},on:{change:t.handlePageChange}})],1)])])],1)},n=[],o={render:i,staticRenderFns:n};e.a=o},Q66M:function(t,e){},"Ql/W":function(t,e,a){"use strict";var i=a("nOfT"),n=(a.n(i),a("t5DY")),o=a("wXtz"),s=a("1onU");e.a={components:{Pager:s.a},data:function(){return{complainType:"AF041",complainStatus:"AF040",OptionscomplainStatus:[{code:"",name:"全部"}],totalCount:0,page:1,pagesize:20,logisticsForm:{orderSerial:"",workSerial:"",complainStatus:"",platformOrderType:"1"},tableData:[]}},watch:{},mounted:function(){this.firstblood(),this.fetchCode()},methods:{handlePageChange:function(t){this.page=t.pageNum,this.pagesize=t.pageSize},fetchCode:function(){var t=this;Object(n.c)(this.complainStatus).then(function(e){t.OptionscomplainStatus=[{code:"",name:"全部"}],e.data.forEach(function(e){t.OptionscomplainStatus.push(e)})})},firstblood:function(){var t=this;Object(o.d)(this.page,this.pagesize,this.logisticsForm).then(function(e){t.tableData=e.data.list,t.totalCount=e.data.totalCount})},clearSearch:function(){this.$refs.ruleForm.resetFields(),this.firstblood()},handleSearch:function(){this.firstblood()},handleComplain:function(t){this.$router.push({name:"投诉详情",query:{orderSerial:t.orderSerial,type:"carrier"}})}}}},"VT+v":function(t,e,a){"use strict";e.a={props:{sizes:{type:Array,default:function(){return[20,50,100,200]}},total:{type:Number,default:0}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){this.pageNum=1}},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:20}},mounted:function(){this.size=this.sizes[0]},methods:{handleFocus:function(t){this.oldValue=t.target.value},sizeChange:function(){this.pageNum=1,this.pageNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(t){this.pageNum=t,this.changeEvent()},handleSizeChange:function(t){this.size=t,this.changeEvent()},handleChange:function(t){var e=parseInt(t,10);isNaN(e)?this.inputval=1:e<1?this.inputval=1:e>this.pages?this.inputval=this.pages:this.inputval=e},handleBlur:function(t){var e=t.target;this.handleChange(e.value),this.jumpTo(this.inputval)},handleKeyup:function(t){var e=t.keyCode,a=t.target;console.log(e,a),13===e&&this.oldValue&&a.value!==this.oldValue&&(this.handleChange(a.value),this.oldValue="")},jumpTo:function(t){t<1?this.pageNum=1:t>this.pages?this.pageNum=this.pages:this.pageNum=t,this.changeEvent()}}}},eqqj:function(t,e){},nOfT:function(t,e){},"rwP/":function(t,e){},t5DY:function(t,e,a){"use strict";function i(t){return t=t||"",h.b.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t).then(function(e){return e.code=t,e})}function n(){return g?new d.a(function(t){t(g)}):h.b.get("/anfacommonservice/common/oss/v1/policy").then(function(t){return g=t.data||"",setTimeout(function(){g=""},18e4),g})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return h.b.get("/aflc-common/sysDict/getSysDictByCodeGet/"+t).then(function(t){return t.data||[]})}function s(t){return h.b.axios({url:"/"+f+"/sysDict/getSysDictByCodeGet/"+t,method:"get"})}function l(t){return h.b.axios({url:"/"+f+"/common/aflcMemberCenter/v1/getShipperInfoByMobile?mobile="+t,method:"get"})}function r(t){return h.b.axios({url:"/"+f+"/common/aflcMemberCenter/v1/getDriverInfoByMobile?mobile="+t,method:"get"})}function c(t){return h.b.axios({url:"/"+f+"/common/aflcMemberCenter/v1/getLogisticsCompanyInfoByMobile?mobile="+t,method:"get"})}function u(t){return h.b.axios({url:"/aflcorderservice/order/fclOrder/v1/getDetailsByOrderSerial/"+t,method:"get"})}function p(t,e){var a=new FormData;for(var i in e)a.append(i,e[i]);var n="";for(var o in e)n+="&"+o+"="+e[o];return h.b.request({url:"/aflc-common/common/aflcMemberCenter/v1/updatePassword?memberType="+t,method:"put",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:n})}e.a=i,e.h=n,e.f=o,e.c=s,e.g=l,e.d=r,e.e=c,e.b=u,e.i=p;var m=a("//Fk"),d=a.n(m),h=a("Vo7i"),f="aflc-common",g=void 0},wXtz:function(t,e,a){"use strict";function i(t,e,a){return l.b.axios({url:"/"+r+"/order/aflcOrderComplain/v1/listCompanyComplain",method:"post",data:{currentPage:t,pageSize:e,vo:a}})}function n(t){return l.b.axios({url:"/"+r+"/order/aflcOrderComplain/v1/add",method:"post",data:t})}function o(t){return l.b.axios({url:"/"+r+"/order/aflcOrderComplain/v1/findAflcOrderComplainByOrderSerial/"+t,method:"get"})}function s(t){return l.b.axios({url:"/"+r+"/order/aflcOrderComplain/v1/update",method:"put",data:t})}e.d=i,e.a=n,e.c=o,e.b=s;var l=a("Vo7i"),r="aflcorderservice"}});