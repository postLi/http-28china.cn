webpackJsonp([43],{"9UCZ":function(e,t,n){"use strict";var a=n("TuGF"),o=n("GrA4"),i=n("VU/8"),r=i(a.a,o.a,null,null,null);t.a=r.exports},GrA4:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",e._b({ref:"myautocomplete",attrs:{placeholder:e.placeholder},on:{change:e.change},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}},"el-select",e.$attrs,!1),[e._t("head"),e._v(" "),e._l(e.types,function(t){return[e._t("default",[n("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})],{item:t})]}),e._v(" "),e._t("foot")],2)},o=[],i={render:a,staticRenderFns:o};t.a=i},K1X5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("rMU5"),o=n("UUd1"),i=n("VU/8"),r=i(a.a,o.a,null,null,null);t.default=r.exports},TuGF:function(e,t,n){"use strict";var a=n("Dd8w"),o=n.n(a),i=n("O6e2"),r=n("t5DY"),s=n("NYxO"),c=n("TuU3");t.a={name:"selectType",props:{orgid:{type:[Number,String],default:""},type:{type:String,default:"",required:!0},placeholder:{type:String,default:"请选择"},value:{type:[Number,String,Array]},remote:{type:Boolean,default:!1}},computed:o()({},Object(s.b)(["otherinfo"])),data:function(){return{val:"",types:[],dataCache:{}}},watch:{value:{handler:function(e){this.val=e||""},immediate:!0}},mounted:function(){var e=this;if(this.remote)this.fetchData();else{var t=c.a.get(this.type);""===t?this.fetchData():this.types=t}i.a.$on("closepopbox",function(){console.log("closepopbox selectType:"),e.$refs.myautocomplete.handleClose()})},methods:{fetchData:function(){var e=this,t=function(t){e.types=t,c.a.set(e.type,t)};this.dataCache[this.type]?t(this.dataCache[this.type]):Object(r.f)(this.type,this.orgid||this.otherinfo.companyId).then(t)},change:function(e){this.$emit("change",e),this.$emit("input",this.val)}}}},TuU3:function(e,t,n){"use strict";window.TMS_DATA_CACHE={};var a={get:function(e){return window.TMS_DATA_CACHE[e]||""},set:function(e,t){return window.TMS_DATA_CACHE[e]=t,t}};t.a=a},UUd1:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component"},[n("h2",[e._v("获取指定类型的下拉框")]),e._v(" "),n("SelectType",{attrs:{type:"department_type"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),e._v(" "),n("p",[e._v("选中的值： "+e._s(e.selected))]),e._v(" "),n("blockquote",[e._v("\n      引用地址：\n      components/selectType/index.vue\n    ")]),e._v(" "),n("h3",[e._v("SLOT")]),e._v(" "),n("p",[e._v("作用域插槽： item")]),e._v(" "),n("select-type",{attrs:{type:"driving_type"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.item;return[n("el-option",{key:a.id,attrs:{label:a.dictName,value:a.id}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(a.dictName))]),e._v(" "),n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v("id: "+e._s(a.id))])])]}}]),model:{value:e.selected2,callback:function(t){e.selected2=t},expression:"selected2"}}),e._v(" "),n("p",[e._v("选中的值： "+e._s(e.selected2))]),e._v(" "),n("p",[e._v("插槽： head")]),e._v(" "),n("p",[e._v("插入到所有选项的前面")]),e._v(" "),n("select-type",{attrs:{type:"driving_type"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.item;return[n("el-option",{key:a.id,attrs:{label:a.dictName,value:a.id}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(a.dictName))]),e._v(" "),n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v("id: "+e._s(a.id))])])]}}]),model:{value:e.selected3,callback:function(t){e.selected3=t},expression:"selected3"}},[n("template",{slot:"head"},[n("el-option",{attrs:{label:"全部",value:""}})],1)],2),e._v(" "),n("p",[e._v("插槽： foot")]),e._v(" "),n("p",[e._v("插入到所有选项的后面")]),e._v(" "),n("h3",[e._v("prop")]),e._v(" "),e._m(0),e._v(" "),n("h3",[e._v("type可选的值")]),e._v(" "),n("pre",[e._v("network_type\t网点类型\nmanage_type\t经营类型\ndriving_type\t驾驶证类型\ndepartment_type\t部门类型\nupType\tupRemark\npayment_type\t中转付款方式\ndepartment_type\t部门类型\nmenu_type\t菜单类型\nnetwork_status\t网点状态\nship_time_rule\t开单时间规则\nnotify_cargo_rule\t通知放货规则\nload_type\t配载类型\napportion_type\t分摊方式\nshort_batch_type\t短驳批次状态\nmain_batch_type\t干线批次状态\ndelivery_batch_type\t送货批次状态\nship_status\t运单状态\nship_delivery_method\t交接方式\nship_pay_way\t付款方式\nship_receipt_require\t回单要求\nship_shipping_type\t运输方式\nship_business_type\t业务类型\nship_effective\t时效性\nsign_cocument_type\t签收证件\nsign_type\t签收类型\nship_pay_way\t付款方式\nrec_status\t回单回收状态\nsend_status\t回单寄出状态\naccept_status\t回单接收状态\ngiveout_status\t回单发放状态\nrec_type\t回单回收情况\naccept_type\t回单接收情况\nabnormal_status\t异常状态\nabnormal_type\t异常类型\ntruck_source\t车辆来源\ntruck_type\t车型\nship_other\t其他\ntype\t备注\ndepartment_type\t部门类型\n    ")])],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",{staticClass:"info-require"},[e._v("v-model"),n("div",{staticClass:"type"},[e._v(" [Number, String]")]),e._v("用来绑定值")]),e._v(" "),n("li",{staticClass:"info-require"},[e._v("type"),n("div",{staticClass:"type"},[e._v("String")]),e._v("下拉框要请求的类型")]),e._v(" "),n("li",[e._v("orgid"),n("div",{staticClass:"type"},[e._v("String")]),e._v("网点id，如果不传则引用当前用户的公司id")]),e._v(" "),n("li",[e._v("placeholder"),n("div",{staticClass:"type"},[e._v("Boolean")]),e._v("替代显示文案")])])}],i={render:a,staticRenderFns:o};t.a=i},rMU5:function(e,t,n){"use strict";var a=n("9UCZ");t.a={name:"SelectTypeDemo",components:{SelectType:a.a},data:function(){return{orgid:1,selected:"",selected3:"",selected2:""}},methods:{getOrgid:function(e){console.log("pagenation",e)}}}},t5DY:function(e,t,n){"use strict";function a(e){return e=e||"",v.b.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})}function o(){return f?new d.a(function(e){e(f)}):v.b.get("/anfacommonservice/common/oss/v1/policy").then(function(e){return f=e.data||"",setTimeout(function(){f=""},18e4),f})}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.b.get("/28-web/sysDict/getSysDictByCodeGet/"+e).then(function(e){return e.data||[]})}function r(e){return v.b.axios({url:"/28-web/sysDict/getSysDictByCodeGet/"+e,method:"get"})}function s(e){return v.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile?mobile="+e,method:"get"})}function c(e){return v.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getDriverInfoByMobile?mobile="+e,method:"get"})}function l(e){return v.b.get("/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile",{params:{mobile:e}})}function p(e){return v.b.axios({url:"/aflcorderservice/order/fclOrder/v1/getDetailsByOrderSerial/"+e,method:"get"})}function u(e,t){var n=new FormData;for(var a in t)n.append(a,t[a]);var o="";for(var i in t)o+="&"+i+"="+t[i];return v.b.request({url:"/aflc-common/common/aflcMemberCenter/v1/updatePassword?memberType="+e,method:"put",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:o})}t.a=a,t.h=o,t.f=i,t.c=r,t.g=s,t.d=c,t.e=l,t.b=p,t.i=u;var _=n("//Fk"),d=n.n(_),v=n("Vo7i"),f=void 0}});