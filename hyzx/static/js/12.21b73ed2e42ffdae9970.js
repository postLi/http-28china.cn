webpackJsonp([12],{"/OH/":function(e,t,a){"use strict";function i(e){a("xT+W")}var r=a("xoQy"),o=a("qZ1X"),n=a("VU/8"),s=i,l=n(r.a,o.a,s,"data-v-173f2f52",null);t.a=l.exports},"8sHD":function(e,t,a){var i=a("kM2E"),r=a("KpO7");i(i.S+i.F*(Number.parseInt!=r),"Number",{parseInt:r})},"8vfx":function(e,t){},"9UCZ":function(e,t,a){"use strict";var i=a("TuGF"),r=a("GrA4"),o=a("VU/8"),n=o(i.a,r.a,null,null,null);t.a=n.exports},BpPu:function(e,t){},GrA4:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",e._b({ref:"myautocomplete",attrs:{placeholder:e.placeholder},on:{change:e.change},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}},"el-select",e.$attrs,!1),[e._t("head"),e._v(" "),e._l(e.types,function(t){return[e._t("default",[a("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})],{item:t})]}),e._v(" "),e._t("foot")],2)},r=[],o={render:i,staticRenderFns:r};t.a=o},"K/WF":function(e,t,a){"use strict";function i(e){a("8vfx")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("pv11"),o=a("nj+e"),n=a("VU/8"),s=i,l=n(r.a,o.a,s,null,null);t.default=l.exports},KpO7:function(e,t,a){var i=a("7KvD").parseInt,r=a("mnVu").trim,o=a("hyta"),n=/^[-+]?0[xX]/;e.exports=8!==i(o+"08")||22!==i(o+"0x16")?function(e,t){var a=r(String(e),3);return i(a,t>>>0||(n.test(a)?16:10))}:i},TuGF:function(e,t,a){"use strict";var i=a("Dd8w"),r=a.n(i),o=a("O6e2"),n=a("t5DY"),s=a("NYxO"),l=a("TuU3");t.a={name:"selectType",props:{orgid:{type:[Number,String],default:""},type:{type:String,default:"",required:!0},placeholder:{type:String,default:"请选择"},value:{type:[Number,String,Array]},remote:{type:Boolean,default:!1}},computed:r()({},Object(s.b)(["otherinfo"])),data:function(){return{val:"",types:[],dataCache:{}}},watch:{value:{handler:function(e){this.val=e||""},immediate:!0}},mounted:function(){var e=this;if(this.remote)this.fetchData();else{var t=l.a.get(this.type);""===t?this.fetchData():this.types=t}o.a.$on("closepopbox",function(){console.log("closepopbox selectType:"),e.$refs.myautocomplete.handleClose()})},methods:{fetchData:function(){var e=this,t=function(t){e.types=t,l.a.set(e.type,t)};this.dataCache[this.type]?t(this.dataCache[this.type]):Object(n.f)(this.type,this.orgid||this.otherinfo.companyId).then(t)},change:function(e){this.$emit("change",e),this.$emit("input",this.val)}}}},TuU3:function(e,t,a){"use strict";window.TMS_DATA_CACHE={};var i={get:function(e){return window.TMS_DATA_CACHE[e]||""},set:function(e,t){return window.TMS_DATA_CACHE[e]=t,t}};t.a=i},UZPH:function(e,t,a){"use strict";t.a={cn:{pleaseSelect:"请选择"},en:{pleaseSelect:"Please select"}}},gBtx:function(e,t,a){e.exports={default:a("qrpI"),__esModule:!0}},hyta:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},keop:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[!e.ui&&e.text?a("span",[e._v("\n        "+e._s(e.itemProvince&&e.itemProvince.value)+e._s(e.itemCity&&e.itemCity.value)+e._s(e.itemArea&&e.itemArea.value)+e._s(e.itemTown&&e.itemTown.value)+"\n    ")]):e._e(),e._v(" "),e.text||e.ui||!e.province?e._e():a("select",{directives:[{name:"model",rawName:"v-model",value:e.nowProvince,expression:"nowProvince"}],class:e.className,on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.nowProvince=t.target.multiple?a:a[0]}}},[e.blank?a("option",{attrs:{value:""}},[e._v(e._s(e.lang.pleaseSelect))]):e._e(),e._v(" "),e._l(e.listProvince,function(t){return a("option",{key:t.key,domProps:{value:t.key}},[e._v(e._s(t.value))])})],2),e._v(" "),!e.text&&!e.ui&&e.city&&e.haveCity?a("select",{directives:[{name:"model",rawName:"v-model",value:e.nowCity,expression:"nowCity"}],class:e.className,on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.nowCity=t.target.multiple?a:a[0]}}},[e.blank?a("option",{attrs:{value:""}},[e._v(e._s(e.lang.pleaseSelect))]):e._e(),e._v(" "),e._l(e.listCity,function(t){return a("option",{key:t.key,domProps:{value:t.key}},[e._v(e._s(t.value))])})],2):e._e(),e._v(" "),!e.text&&!e.ui&&(e.area&&e.city||!e.haveCity)&&e.listArea.length?a("select",{directives:[{name:"model",rawName:"v-model",value:e.nowArea,expression:"nowArea"}],class:e.className,on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.nowArea=t.target.multiple?a:a[0]}}},[e.blank?a("option",{attrs:{value:""}},[e._v(e._s(e.lang.pleaseSelect))]):e._e(),e._v(" "),e._l(e.listArea,function(t){return a("option",{key:t.key,domProps:{value:t.key}},[e._v(e._s(t.value))])})],2):e._e(),e._v(" "),!e.text&&!e.ui&&e.town&&e.area&&e.city?a("select",{directives:[{name:"model",rawName:"v-model",value:e.nowTown,expression:"nowTown"}],class:e.className,on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.nowTown=t.target.multiple?a:a[0]}}},[e.blank?a("option",{attrs:{value:""}},[e._v(e._s(e.lang.pleaseSelect))]):e._e(),e._v(" "),e._l(e.listTown,function(t){return a("option",{key:t.key,domProps:{value:t.key}},[e._v(e._s(t.value))])})],2):e._e(),e._v(" "),e.ui?a("div",{ref:"caller",staticClass:"caller-container",on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.showDropdown(!0)}}},[e._t("default")],2):e._e(),e._v(" "),e.ui?a("v-dropdown",{ref:"dropdown",on:{hideDropdwon:function(t){e.showDropdown(!1)}}},[a("div",{staticClass:"rg-header"},[a("h3",[a("span",{directives:[{name:"show",rawName:"v-show",value:!(e.itemProvince||e.itemCity||e.itemArea||e.itemTown),expression:"!itemProvince&&!itemCity&&!itemArea&&!itemTown"}]},[e._v("行政区划选择器")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.itemProvince||e.itemCity||e.itemArea||e.itemTown,expression:"itemProvince||itemCity||itemArea||itemTown"}],staticClass:"rg-header-selected"},[e._v("\n                    "+e._s(e.itemProvince&&e.itemProvince.value)+e._s(e.itemCity&&e.itemCity.value)+e._s(e.itemArea&&e.itemArea.value)+e._s(e.itemTown&&e.itemTown.value)+"\n                ")])]),e._v(" "),a("button",{staticClass:"rg-removeall-button",attrs:{type:"button",title:"清除选择"},on:{click:e.clear}},[a("i",{staticClass:"iconfont icon-removeall"})]),e._v(" "),a("button",{staticClass:"rg-done-button",attrs:{type:"button",title:"完成"},on:{click:function(t){e.showDropdown(!1)}}},[a("i",{staticClass:"iconfont icon-selected"})])]),e._v(" "),e.search?a("div",{staticClass:"rg-search"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.query,expression:"query",modifiers:{trim:!0}}],ref:"input",staticClass:"rg-input",attrs:{type:"text",autocomplete:"off"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})]):e._e(),e._v(" "),a("div",{staticClass:"rg-level-tabs"},[a("ul",e._l(e.levels,function(t,i){return e.checkAvailable(i)?a("li",{key:i},[a("a",{class:{active:i===e.levelIndex},attrs:{href:"javascript:void(0);",tab_id:"selectmenu_tab_"+(i+1),data_index:i},on:{click:function(t){e.levelIndex=i}}},[e._v(e._s(t.title))])]):e._e()}))]),e._v(" "),a("div",{staticClass:"rg-results-container"},[a("ul",{staticClass:"rg-results"},[e._l(e.list,function(t,i){return a("li",{key:i,class:{"rg-item":!0,active:e.matchItem(t)},on:{click:function(a){e.itemSelect(t)}}},[e._v(e._s(t.value))])}),e._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:0===e.list.length,expression:"list.length === 0"}],staticClass:"rg-message-box"},[e._v("无匹配项目")])],2)])]):e._e()],1)},r=[],o={render:i,staticRenderFns:r};t.a=o},mcg1:function(e,t,a){"use strict";function i(e){a("BpPu")}var r=a("oCPT"),o=a("keop"),n=a("VU/8"),s=i,l=n(r.a,o.a,s,null,null);t.a=l.exports},mnVu:function(e,t,a){var i=a("kM2E"),r=a("52gC"),o=a("S82l"),n=a("hyta"),s="["+n+"]",l="​",c=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),h=function(e,t,a){var r={},s=o(function(){return!!n[e]()||l[e]()!=l}),c=r[e]=s?t(m):n[e];a&&(r[a]=c),i(i.P+i.F*s,"String",r)},m=h.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=h},"nj+e":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{staticClass:"orderlist-search staff_searchinfo clearfix lll-search",attrs:{"label-width":"140px",inline:!0,size:"mini","label-position":"right",model:e.searchForm}},[e.isAllSupplyl?a("div",{staticClass:"search_warrper searchInformation"},[a("el-form-item",{attrs:{label:"出发地："}},[a("vregion",{staticClass:"form-control",attrs:{ui:!0},on:{values:e.orderStartAddressChange}},[a("el-input",{attrs:{placeholder:"请选择出发地",clearable:""},model:{value:e.searchForm.isAllSupplyl.orderStartAddress,callback:function(t){e.$set(e.searchForm.isAllSupplyl,"orderStartAddress",t)},expression:"searchForm.isAllSupplyl.orderStartAddress"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"到达地："}},[a("vregion",{staticClass:"form-control",attrs:{ui:!0},on:{values:e.orderEndAddressChange}},[a("el-input",{attrs:{placeholder:"请选择到达地"},model:{value:e.searchForm.isAllSupplyl.orderEndAddress,callback:function(t){e.$set(e.searchForm.isAllSupplyl,"orderEndAddress",t)},expression:"searchForm.isAllSupplyl.orderEndAddress"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"货源类型："}},[a("el-select",{attrs:{clearable:""},model:{value:e.searchForm.isAllSupplyl.orderClass,callback:function(t){e.$set(e.searchForm.isAllSupplyl,"orderClass",t)},expression:"searchForm.isAllSupplyl.orderClass"}},[a("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),a("el-option",{attrs:{label:"单次急发货源",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"长期稳定货源",value:"1"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"货物名称："}},[a("el-input",{attrs:{clearable:"","auto-complete":"off"},model:{value:e.searchForm.isAllSupplyl.goodsName,callback:function(t){e.$set(e.searchForm.isAllSupplyl,"goodsName",t)},expression:"searchForm.isAllSupplyl.goodsName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"公司名："}},[a("el-input",{attrs:{clearable:"","auto-complete":"off"},model:{value:e.searchForm.isAllSupplyl.companyName,callback:function(t){e.$set(e.searchForm.isAllSupplyl,"companyName",t)},expression:"searchForm.isAllSupplyl.companyName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发货人："}},[a("el-input",{attrs:{clearable:"","auto-complete":"off"},model:{value:e.searchForm.isAllSupplyl.orderContacts,callback:function(t){e.$set(e.searchForm.isAllSupplyl,"orderContacts",t)},expression:"searchForm.isAllSupplyl.orderContacts"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发货人手机："}},[a("el-input",{attrs:{clearable:"","auto-complete":"off"},model:{value:e.searchForm.isAllSupplyl.orderMobile,callback:function(t){e.$set(e.searchForm.isAllSupplyl,"orderMobile",t)},expression:"searchForm.isAllSupplyl.orderMobile"}})],1)],1):e._e(),e._v(" "),e.isSpacialLine?a("div",{staticClass:"search_warrper searchInformation"},[a("el-form-item",{attrs:{label:"出发地："}},[a("vregion",{staticClass:"form-control",attrs:{ui:!0},on:{values:e.rangeStartLocationChange}},[a("el-input",{attrs:{placeholder:"请选择出发地"},model:{value:e.searchForm.isSpacialLine.rangeStartLocation,callback:function(t){e.$set(e.searchForm.isSpacialLine,"rangeStartLocation",t)},expression:"searchForm.isSpacialLine.rangeStartLocation"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"到达地："}},[a("vregion",{staticClass:"form-control",attrs:{ui:!0},on:{values:e.rangeEndLocationChange}},[a("el-input",{attrs:{placeholder:"请选择到达地"},model:{value:e.searchForm.isSpacialLine.rangeEndLocation,callback:function(t){e.$set(e.searchForm.isSpacialLine,"rangeEndLocation",t)},expression:"searchForm.isSpacialLine.rangeEndLocation"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"公司名："}},[a("el-input",{attrs:{clearable:"","auto-complete":"off"},model:{value:e.searchForm.isSpacialLine.companyName,callback:function(t){e.$set(e.searchForm.isSpacialLine,"companyName",t)},expression:"searchForm.isSpacialLine.companyName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系人："}},[a("el-input",{attrs:{clearable:"","auto-complete":"off"},model:{value:e.searchForm.isSpacialLine.rangeContacts,callback:function(t){e.$set(e.searchForm.isSpacialLine,"rangeContacts",t)},expression:"searchForm.isSpacialLine.rangeContacts"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号："}},[a("el-input",{attrs:{clearable:"","auto-complete":"off"},model:{value:e.searchForm.isSpacialLine.rangeMobile,callback:function(t){e.$set(e.searchForm.isSpacialLine,"rangeMobile",t)},expression:"searchForm.isSpacialLine.rangeMobile"}})],1)],1):e._e(),e._v(" "),e.isPhysicalDis?a("div",{staticClass:"search_warrper searchInformation",staticStyle:{"margin-right":"250px"}},[a("el-form-item",{attrs:{label:"公司名："}},[a("el-input",{attrs:{clearable:"","auto-complete":"off"},model:{value:e.searchForm.isPhysicalDis.companyName,callback:function(t){e.$set(e.searchForm.isPhysicalDis,"companyName",t)},expression:"searchForm.isPhysicalDis.companyName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"所在地："}},[a("vregion",{staticClass:"form-control",attrs:{ui:!0},on:{values:e.belongCityNameChange}},[a("el-input",{attrs:{placeholder:"请选择出发地"},model:{value:e.searchForm.isPhysicalDis.belongCityName,callback:function(t){e.$set(e.searchForm.isPhysicalDis,"belongCityName",t)},expression:"searchForm.isPhysicalDis.belongCityName"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"联系人："}},[a("el-input",{attrs:{clearable:"","auto-complete":"off"},model:{value:e.searchForm.isPhysicalDis.contactsName,callback:function(t){e.$set(e.searchForm.isPhysicalDis,"contactsName",t)},expression:"searchForm.isPhysicalDis.contactsName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号："}},[a("el-input",{attrs:{clearable:"","auto-complete":"off"},model:{value:e.searchForm.isPhysicalDis.mobile,callback:function(t){e.$set(e.searchForm.isPhysicalDis,"mobile",t)},expression:"searchForm.isPhysicalDis.mobile"}})],1)],1):e._e(),e._v(" "),e.isCarSoure?a("div",{staticClass:"search_warrper searchInformation"},[a("el-form-item",{attrs:{label:"出发地："}},[a("vregion",{staticClass:"form-control",attrs:{ui:!0},on:{values:e.carStrartAddressChange}},[a("el-input",{attrs:{placeholder:"请选择出发地"},model:{value:e.searchForm.isCarSoure.carStrartAddress,callback:function(t){e.$set(e.searchForm.isCarSoure,"carStrartAddress",t)},expression:"searchForm.isCarSoure.carStrartAddress"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"到达地："}},[a("vregion",{staticClass:"form-control",attrs:{ui:!0},on:{values:e.carEndAddressChange}},[a("el-input",{attrs:{placeholder:"请选择到达地"},model:{value:e.searchForm.isCarSoure.carEndAddress,callback:function(t){e.$set(e.searchForm.isCarSoure,"carEndAddress",t)},expression:"searchForm.isCarSoure.carEndAddress"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"车辆类型："}},[a("selectType",{attrs:{type:"AF018",clearable:"",size:"mini"},model:{value:e.searchForm.isCarSoure.carType,callback:function(t){e.$set(e.searchForm.isCarSoure,"carType",t)},expression:"searchForm.isCarSoure.carType"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"车源类型："}},[a("el-select",{model:{value:e.searchForm.isCarSoure.carSourceType,callback:function(t){e.$set(e.searchForm.isCarSoure,"carSourceType",t)},expression:"searchForm.isCarSoure.carSourceType"}},[a("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),a("el-option",{attrs:{label:"本地车",value:"AF01802"}}),e._v(" "),a("el-option",{attrs:{label:"回程车",value:"AF01801"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"联系人："}},[a("el-input",{attrs:{clearable:"","auto-complete":"off"},model:{value:e.searchForm.isCarSoure.carBelongDriver,callback:function(t){e.$set(e.searchForm.isCarSoure,"carBelongDriver",t)},expression:"searchForm.isCarSoure.carBelongDriver"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号："}},[a("el-input",{attrs:{maxlength:50,"auto-complete":"off",clearable:""},model:{value:e.searchForm.isCarSoure.carPhone,callback:function(t){e.$set(e.searchForm.isCarSoure,"carPhone",t)},expression:"searchForm.isCarSoure.carPhone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"常驻地："}},[a("vregion",{staticClass:"form-control",attrs:{ui:!0},on:{values:e.usualPlaceChange}},[a("el-input",{attrs:{placeholder:"请选择常驻地"},model:{value:e.searchForm.isCarSoure.usualPlace,callback:function(t){e.$set(e.searchForm.isCarSoure,"usualPlace",t)},expression:"searchForm.isCarSoure.usualPlace"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"即时/长期："}},[a("el-select",{model:{value:e.searchForm.isCarSoure.isLongCar,callback:function(t){e.$set(e.searchForm.isCarSoure,"isLongCar",t)},expression:"searchForm.isCarSoure.isLongCar"}},[a("el-option",{attrs:{label:"全部",value:""}}),e._v(" "),a("el-option",{attrs:{label:"即时车源",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"长期车源",value:"0"}})],1)],1)],1):e._e(),e._v(" "),a("el-form-item",{staticClass:"staff_searchinfo--btn"},[a("el-button",{attrs:{size:"mini",icon:"el-icon-search",type:"primary"},on:{click:e.onSubmit}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{size:"mini",icon:"el-icon-close",type:"info",plain:""},on:{click:e.clearForm}},[e._v("重置")])],1)],1)},r=[],o={render:i,staticRenderFns:r};t.a=o},oCPT:function(e,t,a){"use strict";var i=a("//Fk"),r=a.n(i),o=a("gBtx"),n=a.n(o),s=a("fZjL"),l=a.n(s),c=a("t5DY"),u=a("/OH/"),h=a("UZPH");t.a={name:"vregion",components:{"v-dropdown":u.a},props:{blank:{type:Boolean,default:!0},province:{type:Boolean,default:!0},city:{type:Boolean,default:!0},area:{type:Boolean,default:!0},town:{type:Boolean,default:!1},i18n:{type:String,default:"cn"},selected:Object,ui:{type:Boolean,default:!1},search:{type:Boolean,default:!0},text:{type:Boolean,default:!1},ifAera:{type:Boolean,default:!1}},data:function(){return{listProvince:[],listCity:[],listArea:[],listTown:[],nowProvince:"",nowCity:"",nowArea:"",nowTown:"",haveCity:!0,className:"",lang:{},init:this.selected,pauseWatch:!1,query:"",levels:[{index:0,title:"省/直辖市"},{index:1,title:"市"},{index:2,title:"区/县"},{index:3,title:"乡/镇/街道"}],levelIndex:-1,list:[],itemProvince:null,itemCity:null,itemArea:null,itemTown:null}},watch:{query:function(e){var t=this.getList(this.levelIndex),a=[];a=t.filter(function(t){return t.value.toLowerCase().includes(e.toLowerCase())}),0===a.length&&(a=t.filter(function(t){return t.key.includes(e)})),this.list=a},nowProvince:function(e){var t=this;this.pauseWatch||this.city&&this.fetchCity(e).then(function(a){if(a.code===t.nowProvince){var i=a.data;t.listArea.length&&t.listArea.splice(0,t.listArea.length),t.listCity=i,t.nowCity="",t.haveCity||(t.nowArea=""),t.itemProvince=t.listProvince.find(function(t){return t.key===e}),t.haveCity=!!t.listCity.length,t.$nextTick(function(){!t.haveCity&&t.area?t.changeCity():t.initSelected(2),t.ui&&(t.levelIndex=t.haveCity?1:2)}),t.changeValues()}})},nowCity:function(e){this.pauseWatch||(this.changeCity(),this.itemCity=this.listCity.find(function(t){return t.key===e}),this.ui&&(this.levelIndex=2),this.changeValues())},nowArea:function(e){if(!this.pauseWatch){var t=this;if(e&&t.town){var a=[];this.listTown=a}else this.listTown=[];this.town&&(this.nowTown=""),console.log("nowArea:",e,this.listArea),this.itemArea=this.listArea.find(function(t){return t.key===e}),this.initSelected(4),this.ui&&this.town&&(this.levelIndex=3),this.changeValues()}},nowTown:function(e){this.pauseWatch||(this.itemTown=this.listTown.find(function(t){return t.key===e}),this.changeValues())},selected:{handler:function(e){e&&l()(e).length&&(this.init=e,this.initSelected(1))},deep:!0},levelIndex:function(e){this.list=this.getList(e)}},methods:{changeCity:function(){var e=this;if(this.area||!this.haveCity&&this.province){if(this.haveCity&&!this.nowCity||!this.haveCity&&!this.nowProvince)console.log("2222222222:",this.haveCity,this.nowProvince,this.nowCity),this.listArea=[];else{var t=n()(this.haveCity?this.nowCity:this.nowProvince),a=this.haveCity;this.fetchCity(t).then(function(t){var i=t.data;if(a){if(e.nowCity!==t.code)return}else if(e.nowProvince!==t.code)return;e.listArea=i,console.log("333333333:",e.haveCity,e.nowProvince,e.nowCity,a,t.code,i),i.length&&(e.list=e.getList(2),e.initSelected(3))})}this.nowArea=""}else this.initSelected(3)},changeValues:function(){var e=this;this.$nextTick(function(){e.$emit("values",{province:e.itemProvince,city:e.itemCity,area:e.itemArea,town:e.itemTown})})},initSelected:function(e){var t=this,a=this.init,i=0;if(a&&l()(a).length){switch(e){case 1:t.province&&a.province&&(t.nowProvince=a.province);break;case 2:t.city&&a.city&&(t.nowCity=a.city);break;case 3:t.area&&a.area&&(t.nowArea=a.area);break;case 4:t.town&&a.town&&(t.nowTown=a.town)}t.province&&a.province&&i++,t.city&&(a.city||!a.city&&!t.haveCity&&t.area&&a.area)&&i++,t.area&&a.area&&i++,t.town&&a.town&&i++,e===i&&(this.init=null)}},getList:function(e){var t=[];switch(e){case 0:t=this.listProvince;break;case 1:t=this.listCity;break;case 2:t=this.listArea;break;case 3:t=this.listTown}return t},checkAvailable:function(e){var t=!1;switch(e){case 0:this.province&&(t=!0);break;case 1:this.city&&this.haveCity&&(t=!0);break;case 2:this.area&&(t=!0);break;case 3:this.town&&(t=!0)}return t},matchItem:function(e){return e.key===this.nowProvince||e.key===this.nowCity||e.key===this.nowArea||e.key===this.nowTown},itemSelect:function(e){switch(this.levelIndex){case 0:this.nowProvince=e.key,this.itemProvince=e;break;case 1:this.nowCity=e.key,this.itemCity=e;break;case 2:this.nowArea=e.key,this.itemArea=e;break;case 3:this.nowTown=e.key,this.itemTown=e}},showDropdown:function(e){var t=this;if(console.log(e),"boolean"==typeof e){var a=this;this.$refs.dropdown.$emit("show",e,this.$refs.caller);var i=!1,r=["北京市","天津市","重庆市","上海市","香港","澳门","台湾"];!1===e&&this.ifAera&&(r.forEach(function(e){0===t.itemProvince.name.indexOf(e)&&(i=!0)}),null==this.itemCity&&!1===i&&this.$emit("testCity")),e&&(this.query="",this.$nextTick(function(){return a.$refs.input.focus({preventScroll:!0})}))}},clear:function(){var e=this;this.pauseWatch=!0,this.nowProvince="",this.nowCity="",this.nowArea="",this.nowTown="",this.itemProvince=null,this.itemCity=null,this.itemArea=null,this.itemTown=null,this.listCity=[],this.listArea=[],this.listTown=[],this.levelIndex=0,this.$nextTick(function(){e.pauseWatch=!1,e.changeValues()})},fetchCity:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new r.a(function(a){return Object(c.a)(t).then(function(t){return t.data=e.formatCity(t.data),a(t),t}).catch(function(e){console.log("err:",e),a({code:t,data:[]})})})},formatCity:function(e){return e.map(function(e){return e.key=e.code,e.value=e.name,e})}},beforeMount:function(){this.lang=h.a[this.i18n]},mounted:function(){var e=this;this.fetchCity().then(function(t){var a=t.data.filter(function(e){return e});e.listProvince=e.ui?a.concat().sort(function(e,t){var a=e.value.length-t.value.length;return 0===a?Number(e.key)-Number(t.key):a}):a.concat(),e.className=e.$el.className,e.$el.className="v-region",e.selected&&e.selected.province&&(e.nowProvince=e.selected.province),e.ui&&(e.levelIndex=0)})}}},pv11:function(e,t,a){"use strict";var i=a("woOf"),r=a.n(i),o=a("mcg1"),n=a("9UCZ");t.a={name:"search",components:{vregion:o.a,selectType:n.a},props:{isall:{type:Boolean,default:!1},isAllSupplyl:{type:Boolean,default:!1},isSpacialLine:{type:Boolean,default:!1},isPhysicalDis:{type:Boolean,default:!1},isCarSoure:{type:Boolean,default:!1}},data:function(){return{unable:!1,searchObj:{},searchForm:{isAllSupplyl:{orderStartAddress:"",orderEndAddress:"",orderClass:"",goodsName:"",companyName:"",orderContacts:"",orderMobile:""},isSpacialLine:{rangeStartLocation:"",rangeEndLocation:"",companyName:"",rangeContacts:"",rangeMobile:""},isPhysicalDis:{companyName:"",belongCityName:"",contactsName:"",mobile:""},isCarSoure:{carStrartAddress:"",carEndAddress:"",carType:"",carTypeName:"",carSourceType:"",carSourceTypeName:"",carBelongDriver:"",carPhone:"",usualPlace:"",isLongCar:"",provinceCode:"",cityCode:"",areaCode:""}}}},methods:{onSubmit:function(){this.isAllSupplyl&&(this.searchObj=r()({},this.searchForm.isAllSupplyl)),this.isSpacialLine&&(this.searchObj=r()({},this.searchForm.isSpacialLine)),this.isPhysicalDis&&(this.searchObj=r()({},this.searchForm.isPhysicalDis)),this.isCarSoure&&(this.searchObj=r()({},this.searchForm.isCarSoure)),this.$emit("change",this.searchObj)},changeVal:function(e){console.log(e)},clearForm:function(){this.searchForm={isAllSupplyl:{orderStartAddress:"",orderEndAddress:"",orderClass:"",goodsName:"",companyName:"",orderContacts:"",orderMobile:""},isSpacialLine:{rangeStartLocation:"",rangeEndLocation:"",companyName:"",rangeContacts:"",rangeMobile:""},isPhysicalDis:{companyName:"",belongCityName:"",contactsName:"",mobile:""},isCarSoure:{carStrartAddress:"",carEndAddress:"",carType:"",carTypeName:"",carSourceType:"",carSourceTypeName:"",carBelongDriver:"",carPhone:"",usualPlace:"",isLongCar:""}},this.onSubmit()},orderStartAddressChange:function(e){this.searchForm.isAllSupplyl.orderStartAddress=e.province||e.city||e.area||e.town?(""+this.getValue(e.province)+this.getValue(e.city)+this.getValue(e.area)+this.getValue(e.town)).trim():""},orderEndAddressChange:function(e){this.searchForm.isAllSupplyl.orderEndAddress=e.province||e.city||e.area||e.town?(""+this.getValue(e.province)+this.getValue(e.city)+this.getValue(e.area)+this.getValue(e.town)).trim():""},rangeStartLocationChange:function(e){this.searchForm.isSpacialLine.rangeStartLocation=e.province||e.city||e.area||e.town?(""+this.getValue(e.province)+this.getValue(e.city)+this.getValue(e.area)+this.getValue(e.town)).trim():""},rangeEndLocationChange:function(e){this.searchForm.isSpacialLine.rangeEndLocation=e.province||e.city||e.area||e.town?(""+this.getValue(e.province)+this.getValue(e.city)+this.getValue(e.area)+this.getValue(e.town)).trim():""},belongCityNameChange:function(e){this.searchForm.isPhysicalDis.belongCityName=e.province||e.city||e.area||e.town?(""+this.getValue(e.province)+this.getValue(e.city)+this.getValue(e.area)+this.getValue(e.town)).trim():""},carEndAddressChange:function(e){this.searchForm.isCarSoure.carEndAddress=e.province||e.city||e.area||e.town?(""+this.getValue(e.province)+this.getValue(e.city)+this.getValue(e.area)+this.getValue(e.town)).trim():""},carStrartAddressChange:function(e){this.searchForm.isCarSoure.carStrartAddress=e.province||e.city||e.area||e.town?(""+this.getValue(e.province)+this.getValue(e.city)+this.getValue(e.area)+this.getValue(e.town)).trim():""},usualPlaceChange:function(e){this.searchForm.isCarSoure.usualPlace=e.province||e.city||e.area||e.town?(""+this.getValue(e.province)+this.getValue(e.city)+this.getValue(e.area)+this.getValue(e.town)).trim():""},getValue:function(e){return e?e.value:""}}}},qZ1X:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"v-dropdown-container",style:[e.styleSheet]},[e._t("default")],2)},r=[],o={render:i,staticRenderFns:r};t.a=o},qrpI:function(e,t,a){a("8sHD"),e.exports=a("FeBl").Number.parseInt},t5DY:function(e,t,a){"use strict";function i(e){return e=e||"",v.b.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})}function r(){return f?new p.a(function(e){e(f)}):v.b.get("/anfacommonservice/common/oss/v1/policy").then(function(e){return f=e.data||"",setTimeout(function(){f=""},18e4),f})}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return v.b.get("/28-web/sysDict/getSysDictByCodeGet/"+e).then(function(e){return e.data||[]})}function n(e){return v.b.axios({url:"/28-web/sysDict/getSysDictByCodeGet/"+e,method:"get"})}function s(e){return v.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile?mobile="+e,method:"get"})}function l(e){return v.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getDriverInfoByMobile?mobile="+e,method:"get"})}function c(e){return v.b.axios({url:"/"+d+"/common/aflcMemberCenter/v1/getLogisticsCompanyInfoByMobile?mobile="+e,method:"get"})}function u(e){return v.b.axios({url:"/aflcorderservice/order/fclOrder/v1/getDetailsByOrderSerial/"+e,method:"get"})}function h(e,t){var a=new FormData;for(var i in t)a.append(i,t[i]);var r="";for(var o in t)r+="&"+o+"="+t[o];return v.b.request({url:"/aflc-common/common/aflcMemberCenter/v1/updatePassword?memberType="+e,method:"put",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:r})}t.a=i,t.h=r,t.f=o,t.c=n,t.g=s,t.d=l,t.e=c,t.b=u,t.i=h;var m=a("//Fk"),p=a.n(m),v=a("Vo7i"),d="aflc-common",f=void 0},"xT+W":function(e,t){},xoQy:function(e,t,a){"use strict";t.a={name:"v-dropdown",props:{position:{type:String,default:"left"}},data:function(){return{show:!1,styleSheet:{top:"",left:""}}},watch:{},methods:{visible:function(e,t){if("boolean"==typeof e){this.show=e;var a=this;this.$nextTick(function(){a.show&&a.adjust(t)})}},adjust:function(e){var t=e.getBoundingClientRect(),a=0,i=0,r=this.$el.getBoundingClientRect(),o=window.scrollY,n=document.body.clientHeight;if(this.rightClick){var s=this.y;this.y+r.height>o+n&&(s=this.y-r.height),i=this.x,a=s}else switch(a=t.top+t.height+5+o,this.position){case"left":i=t.left;break;case"center":i=t.left+t.width/2-r.width/2;break;case"right":i=t.left+t.width-r.width}this.styleSheet.top=a+"px",this.styleSheet.left=i+"px"},whole:function(e){if(this.show){-1===e.path.findIndex(function(e){return e.className&&e.className.includes("v-dropdown-container")})&&(this.show=!1,this.$emit("hideDropdwon"))}}},mounted:function(){this.$on("show",this.visible),document.addEventListener("mousedown",this.whole)},destroyed:function(){this.$off("show",this.visible),document.removeEventListener("mousedown",this.whole)}}}});