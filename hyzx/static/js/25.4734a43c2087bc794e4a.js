webpackJsonp([25],{"1onU":function(t,e,a){"use strict";function n(t){a("Q66M"),a("rwP/")}var i=a("VT+v"),o=a("1pBW"),s=a("VU/8"),l=n,r=s(i.a,o.a,l,"data-v-6902e15e",null);e.a=r.exports},"1pBW":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tms-pagenation"},[a("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(1)}}},[a("span",{staticClass:"first-page"})]),a("span",{staticClass:"page-num",class:{disabled:t.pageNum<=1},on:{click:function(e){t.jumpTo(t.pageNum-1)}}},[a("span",{staticClass:"prev-page"})]),t._v(" "),a("span",{staticClass:"page-jumper"},[t._v("\n    第\n    "),a("el-input",{ref:"input",staticClass:"el-pagination__editor is-in-pagination",attrs:{min:1,max:t.pages,type:"number",disabled:t.pages<=1},on:{keyup:t.handleKeyup,change:t.handleChange,focus:t.handleFocus,blur:t.handleBlur},model:{value:t.inputval,callback:function(e){t.inputval="string"==typeof e?e.trim():e},expression:"inputval"}}),t._v(" 页\n  ")],1),t._v("\n  /共 "+t._s(t.pages)+" 页\n  "),a("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pageNum+1)}}},[a("span",{staticClass:"next-page"})]),t._v(" "),a("span",{staticClass:"page-num",class:{disabled:t.pageNum===t.pages},on:{click:function(e){t.jumpTo(t.pages)}}},[a("span",{staticClass:"last-page"})]),t._v(" "),a("span",{staticClass:"tms-pagination__sizes"},[a("el-select",{staticClass:"page-select",attrs:{placeholder:"请选择"},on:{change:t.sizeChange},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},t._l(t.sizes,function(e,n){return a("el-option",{key:n,attrs:{label:e,disabled:t.pages<=1,value:e}})}))],1)])},i=[],o={render:n,staticRenderFns:i};e.a=o},"56a8":function(t,e,a){"use strict";function n(t){return p.b.post("/28-web/logisticsCompany/applyAuth",t)}function i(t){return p.b.post("/28-web/pointNetwork/add",t)}function o(t){return p.b.put("/28-web/pointNetwork/update",t)}function s(t,e,a){return p.b.post("/28-web/pointNetwork/workList",u()({currentPage:t,pageSize:e},a))}function l(t){return p.b.put("/28-web/pointNetwork/updateStatus/"+t)}function r(t){return p.b.delete("/28-web/pointNetwork/"+t)}e.f=n,e.a=i,e.c=o,e.e=s,e.b=l,e.d=r;var c=a("woOf"),u=a.n(c),p=a("Vo7i")},Ly9K:function(t,e,a){"use strict";var n=a("nOfT"),i=(a.n(n),a("t5DY")),o=(a("56a8"),a("cVLG")),s=a("1onU");e.a={components:{Pager:s.a},data:function(){return{complainType:"AF041",complainStatus:"AF040",totalCount:0,page:1,pagesize:20,logisticsForm:{orderSerial:"",workSerial:"",complainType:"",complainStatus:"",platformOrderType:"1"},tableData:[],OptionsComplainType:[{code:"",name:"全部"}],OptionscomplainStatus:[{code:"",name:"全部"}]}},watch:{},mounted:function(){this.firstblood()},methods:{handlePageChange:function(t){this.page=t.pageNum,this.pagesize=t.pageSize},firstblood:function(){var t=this;Object(o.a)(this.page,this.pagesize,this.logisticsForm).then(function(e){console.log(e),t.tableData=e.data.list,t.totalCount=e.data.totalCount}),Object(i.c)(this.complainType).then(function(e){console.log(e),e.data.forEach(function(e){t.OptionsComplainType.push(e)})}),Object(i.c)(this.complainStatus).then(function(e){console.log(e),e.data.forEach(function(e){t.OptionscomplainStatus.push(e)})})},clearSearch:function(){this.$refs.ruleForm.resetFields(),this.firstblood()},handleSearch:function(){this.firstblood()},handleEdit:function(t){console.log(t),this.$router.push({name:"投诉详情",query:{orderSerial:t.orderSerial}})}}}},MN98:function(t,e){},Q66M:function(t,e){},"VT+v":function(t,e,a){"use strict";e.a={props:{sizes:{type:Array,default:function(){return[20,50,100,200]}},total:{type:Number,default:0}},computed:{pages:function(){return Math.ceil(this.total/this.size)}},watch:{pageNum:function(){this.inputval=this.pageNum},size:function(){this.pageNum=1}},data:function(){return{pageNum:1,oldValue:0,inputval:1,oldNum:1,size:20}},mounted:function(){this.size=this.sizes[0]},methods:{handleFocus:function(t){this.oldValue=t.target.value},sizeChange:function(){this.pageNum=1,this.pageNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size})},changeEvent:function(){this.oldNum!==this.pageNum&&(this.oldNum=this.pageNum,this.$emit("change",{pageNum:this.pageNum,pageSize:this.size}))},handleCurrentChange:function(t){this.pageNum=t,this.changeEvent()},handleSizeChange:function(t){this.size=t,this.changeEvent()},handleChange:function(t){var e=parseInt(t,10);isNaN(e)?this.inputval=1:e<1?this.inputval=1:e>this.pages?this.inputval=this.pages:this.inputval=e},handleBlur:function(t){var e=t.target;this.handleChange(e.value),this.jumpTo(this.inputval)},handleKeyup:function(t){var e=t.keyCode,a=t.target;console.log(e,a),13===e&&this.oldValue&&a.value!==this.oldValue&&(this.handleChange(a.value),this.oldValue="")},jumpTo:function(t){t<1?this.pageNum=1:t>this.pages?this.pageNum=this.pages:this.pageNum=t,this.changeEvent()}}}},cVLG:function(t,e,a){"use strict";function n(t,e,a){return i.b.axios({url:"/"+o+"/order/aflcOrderComplain/v1/listShipperComplain",method:"post",data:{currentPage:t,pageSize:e,vo:a}})}e.a=n;var i=a("Vo7i"),o="aflcorderservice"},gsg0:function(t,e,a){"use strict";function n(t){a("MN98")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Ly9K"),o=a("x1g2"),s=a("VU/8"),l=n,r=s(i.a,o.a,l,null,null);e.default=r.exports},nOfT:function(t,e){},"rwP/":function(t,e){},t5DY:function(t,e,a){"use strict";function n(t){return t=t||"",h.b.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t).then(function(e){return e.code=t,e})}function i(){return f?new d.a(function(t){t(f)}):h.b.get("/anfacommonservice/common/oss/v1/policy").then(function(t){return f=t.data||"",setTimeout(function(){f=""},18e4),f})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return h.b.get("/28-web/sysDict/getSysDictByCodeGet/"+t).then(function(t){return t.data||[]})}function s(t){return h.b.axios({url:"/28-web/sysDict/getSysDictByCodeGet/"+t,method:"get"})}function l(t){return h.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile?mobile="+t,method:"get"})}function r(t){return h.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getDriverInfoByMobile?mobile="+t,method:"get"})}function c(t){return h.b.get("/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile",{params:{mobile:t}})}function u(t){return h.b.axios({url:"/aflcorderservice/order/fclOrder/v1/getDetailsByOrderSerial/"+t,method:"get"})}function p(t,e){var a=new FormData;for(var n in e)a.append(n,e[n]);var i="";for(var o in e)i+="&"+o+"="+e[o];return h.b.request({url:"/aflc-common/common/aflcMemberCenter/v1/updatePassword?memberType="+t,method:"put",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:i})}e.a=n,e.h=i,e.f=o,e.c=s,e.g=l,e.d=r,e.e=c,e.b=u,e.i=p;var m=a("//Fk"),d=a.n(m),h=a("Vo7i"),f=void 0},x1g2:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Complaint identification lll-complaints"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.logisticsForm,"label-width":"110px"}},[a("div",{staticClass:"carrierTitle"},[a("div",{staticClass:"realname"},[a("h2",[t._v("投诉管理")])])]),t._v(" "),a("div",{staticClass:"searchInformation information"},[a("el-form-item",{attrs:{label:"订单号：",prop:"orderSerial"}},[a("el-input",{model:{value:t.logisticsForm.orderSerial,callback:function(e){t.$set(t.logisticsForm,"orderSerial",e)},expression:"logisticsForm.orderSerial"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"投诉编号：",prop:"workSerial"}},[a("el-input",{model:{value:t.logisticsForm.workSerial,callback:function(e){t.$set(t.logisticsForm,"workSerial",e)},expression:"logisticsForm.workSerial"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"投诉类型：",maxlength:"18",prop:"complainType"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.logisticsForm.complainType,callback:function(e){t.$set(t.logisticsForm,"complainType",e)},expression:"logisticsForm.complainType"}},t._l(t.OptionsComplainType,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.code}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"投诉状态：",maxlength:"18",prop:"complainStatus"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.logisticsForm.complainStatus,callback:function(e){t.$set(t.logisticsForm,"complainStatus",e)},expression:"logisticsForm.complainStatus"}},t._l(t.OptionscomplainStatus,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.code}})}))],1),t._v(" "),a("el-form-item",{staticClass:"btnChoose",staticStyle:{"margin-left":"0"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("搜索")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.clearSearch}},[t._v("重置")])],1)],1),t._v(" "),a("div",{staticClass:"information",staticStyle:{height:"75%"}},[a("div",{staticStyle:{height:"100%"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%",height:"100%"},attrs:{data:t.tableData,stripe:"",border:""}},[a("el-table-column",{attrs:{fixed:"",label:"序号",type:"index",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"orderSerial",label:"订单号",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"workSerial",label:"工单编号",width:"300"}}),t._v(" "),a("el-table-column",{attrs:{prop:"complainTypeName",label:"投诉类型",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"complainTime",label:"投诉时间",width:"250"}}),t._v(" "),a("el-table-column",{attrs:{prop:"complainStatusName",label:"投诉状态",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button-group",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleEdit(e.row)}}},[t._v("投诉详情")])],1)]}}])})],1)],1)]),t._v(" "),a("div",{staticClass:"info_tab_footer"},[t._v("共计:"+t._s(t.totalCount)+" "),a("div",{staticClass:"show_pager"},[a("Pager",{attrs:{total:t.totalCount},on:{change:t.handlePageChange}})],1)])])],1)},i=[],o={render:n,staticRenderFns:i};e.a=o}});