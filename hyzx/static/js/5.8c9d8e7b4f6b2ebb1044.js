webpackJsonp([5],{"/OH/":function(e,t,i){"use strict";function n(e){i("xT+W")}var r=i("xoQy"),a=i("qZ1X"),o=i("VU/8"),s=n,l=o(r.a,a.a,s,"data-v-173f2f52",null);t.a=l.exports},"0SzW":function(e,t){},"1jhZ":function(e,t,i){"use strict";function n(e){return f.b.get("/aflc-uc/usercenter/aflcCarInfo/v1/getDetails/"+e)}function r(e){return f.b.post("/aflcusercenterservice/usercenter/aflcDriver/v1/completeCarInfo",e)}function a(e){return f.b.post("/aflcusercenterservice/usercenter/aflcCarInfo/v1/addCarInfo",e)}function o(e){return f.b.delete("/aflc-uc/usercenter/aflcCarInfo/v1/delete/"+e)}function s(e){return f.b.post("/aflc-uc/usercenter/aflcCarInfo/v1/list",e).then(function(e){return e.data||{list:[],totalCount:0}})}function l(){return f.b.post("/aflcusercenterservice/usercenter/aflcDriver/v1/getCarInfo")}function c(e){return f.b.post("/aflcusercenterservice/usercenter/aflcCarInfo/v1/updateCarInfo",e)}function u(e,t){return f.b.put("/aflc-uc/usercenter/aflcCarInfo/v1/setEnableType/"+e+"/"+t)}function h(e,t){return f.b.put("/aflc-uc/usercenter/aflcCarInfo/v1/setRouteType/"+e+"/"+t)}function d(e){return f.b.axios({url:"/aflc-uc/usercenter/aflcDriver/v1/authAflcDriver",method:"post",data:e})}t.b=n,t.f=r,t.e=a,t.a=o,t.c=s,t.g=l,t.h=c,t.i=u,t.j=h,t.d=d;var f=i("Vo7i")},"3QU7":function(e,t,i){"use strict";function n(e){i("5xKW")}var r=i("b79V"),a=i("6BtH"),o=i("VU/8"),s=n,l=o(r.a,a.a,s,null,null);t.a=l.exports},"5xKW":function(e,t){},"6BtH":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{"custom-class":"aflcmap-pop-wrapper",title:"地图",visible:e.dialogTableVisible},on:{close:e.close,"update:visible":function(t){e.dialogTableVisible=t}}},[i("div",{attrs:{id:"mapcontainer"}}),e._v(" "),i("div",{attrs:{id:"myPageTop"}},[i("table",[i("tr",[i("td",[i("label",[e._v("请输入关键字：")])])]),e._v(" "),i("tr",[i("td",[i("input",{ref:"tipinput",attrs:{id:"tipinput"}})])])])]),e._v(" "),i("div",{staticClass:"aflcmap-pop-footer",attrs:{slot:"footer"},slot:"footer"},[i("div",{staticClass:"addrname"},[e._v("当前选中的地址："+e._s(this.thename)),i("br"),e._v("当前经纬度信息："+e._s(this.thepos))]),e._v(" "),i("el-button",{attrs:{type:"primary",disabled:e.noinfo},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),i("el-button",{attrs:{type:"info"},on:{click:e.close}},[e._v("取 消")])],1)])},r=[],a={render:n,staticRenderFns:r};t.a=a},"8sHD":function(e,t,i){var n=i("kM2E"),r=i("KpO7");n(n.S+n.F*(Number.parseInt!=r),"Number",{parseInt:r})},"9UCZ":function(e,t,i){"use strict";var n=i("TuGF"),r=i("GrA4"),a=i("VU/8"),o=a(n.a,r.a,null,null,null);t.a=o.exports},BpPu:function(e,t){},G509:function(e,t){},GrA4:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-select",e._b({ref:"myautocomplete",attrs:{placeholder:e.placeholder},on:{change:e.change},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}},"el-select",e.$attrs,!1),[e._t("head"),e._v(" "),e._l(e.types,function(t){return[e._t("default",[i("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})],{item:t})]}),e._v(" "),e._t("foot")],2)},r=[],a={render:n,staticRenderFns:r};t.a=a},KpO7:function(e,t,i){var n=i("7KvD").parseInt,r=i("mnVu").trim,a=i("hyta"),o=/^[-+]?0[xX]/;e.exports=8!==n(a+"08")||22!==n(a+"0x16")?function(e,t){var i=r(String(e),3);return n(i,t>>>0||(o.test(i)?16:10))}:n},"M/vH":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{hideUploadBtn:e.filelist.length>=e.limit}},[e.uploadUrl?i("el-upload",{attrs:{drag:"",data:e.upload,action:e.uploadUrl,multiple:!1,"list-type":"picture-card","show-file-list":e.showFileList,"file-list":e.filelist,limit:e.limit,"before-upload":e.beforeUpload,"on-preview":e.handlePictureCardPreview,"on-error":e.handleError,"on-exceed":e.onexceed,"on-success":e.handleImageScucess,"on-remove":e.handleRemove}},[i("i",{staticClass:"el-icon-plus"})]):e._e(),e._v(" "),i("el-dialog",{attrs:{"lock-scroll":"","custom-class":"pop-show-img-wrapper",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{staticClass:"pop-show-img",attrs:{src:e.dialogImageUrl,alt:""}})])],1)},r=[],a={render:n,staticRenderFns:r};t.a=a},TuGF:function(e,t,i){"use strict";var n=i("Dd8w"),r=i.n(n),a=i("O6e2"),o=i("t5DY"),s=i("NYxO"),l=i("TuU3");t.a={name:"selectType",props:{orgid:{type:[Number,String],default:""},type:{type:String,default:"",required:!0},placeholder:{type:String,default:"请选择"},value:{type:[Number,String,Array]},remote:{type:Boolean,default:!1}},computed:r()({},Object(s.b)(["otherinfo"])),data:function(){return{val:"",types:[],dataCache:{}}},watch:{value:{handler:function(e){this.val=e||""},immediate:!0}},mounted:function(){var e=this;if(this.remote)this.fetchData();else{var t=l.a.get(this.type);""===t?this.fetchData():this.types=t}a.a.$on("closepopbox",function(){console.log("closepopbox selectType:"),e.$refs.myautocomplete.handleClose()})},methods:{fetchData:function(){var e=this,t=function(t){e.types=t,l.a.set(e.type,t)};this.dataCache[this.type]?t(this.dataCache[this.type]):Object(o.f)(this.type,this.orgid||this.otherinfo.companyId).then(t)},change:function(e){this.$emit("change",e),this.$emit("input",this.val)}}}},TuU3:function(e,t,i){"use strict";window.TMS_DATA_CACHE={};var n={get:function(e){return window.TMS_DATA_CACHE[e]||""},set:function(e,t){return window.TMS_DATA_CACHE[e]=t,t}};t.a=n},UZPH:function(e,t,i){"use strict";t.a={cn:{pleaseSelect:"请选择"},en:{pleaseSelect:"Please select"}}},XYds:function(e,t,i){"use strict";function n(e){i("G509")}Object.defineProperty(t,"__esModule",{value:!0});var r=i("sf0h"),a=i("nhFW"),o=i("VU/8"),s=n,l=o(r.a,a.a,s,null,null);t.default=l.exports},Zjyc:function(e,t,i){"use strict";function n(e){i("0SzW")}var r=i("aHTF"),a=i("M/vH"),o=i("VU/8"),s=n,l=o(r.a,a.a,s,null,null);t.a=l.exports},aHTF:function(e,t,i){"use strict";var n=i("//Fk"),r=i.n(n),a=i("t5DY"),o=i("0xDb");t.a={name:"singleImageUpload",props:{value:[String,Array],title:{type:String,default:""},tip:{type:String,default:"（jpg/png。小于5M）"},size:{type:String,default:"mini"},showFileList:{type:Boolean,default:!1},limit:{type:Number,default:10},listtype:{type:String,default:"picture",enum:["text","picture","picture-card"]},disabled:{type:Boolean,default:!1}},computed:{imageUrl:function(){return this.value}},data:function(){return{dialogImageUrl:"",dialogVisible:!1,tempUrl:"",dataObj:{token:"",key:""},upload:{key:"",policy:"",OSSAccessKeyId:"",success_action_status:"201",signature:""},uploadUrl:"",dir:"",filelist:[]}},watch:{value:{handler:function(e){if(this.showFileList){var t=Array.isArray(e)?e:e?e.split(","):[];t=t.filter(function(e){return e}),this.filelist=t.map(function(e){var t={};return t.url=e,t})}},immediate:!0}},mounted:function(){this.init()},methods:{init:function(){var e=this;Object(a.h)().then(function(t){e.upload.OSSAccessKeyId=t.accessid,e.upload.policy=t.policy,e.upload.signature=t.signature,e.uploadUrl=t.host,e.dir=t.dir,e.upload.key=t.dir+e.random_string()+type})},rmImage:function(){this.emitInput("")},onexceed:function(e,t){this.$message.error("最多上传 "+this.limit+" 张!")},handleRemove:function(e,t){console.log("handleRemove:",e,t),this.filelist=t,this.emitInput()},random_string:function(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",i=t.length,n="",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*i));return n},emitInput:function(e){e&&this.filelist.push({url:e}),this.$emit("input",this.showFileList?this.filelist.map(function(e){return e.url}).join(","):e)},handleImageScucess:function(e){var t="";-1!==e.indexOf("Location")&&(t=e.match(/<Location>([^<]+)<\/Location>/m),t=t?t[1]:""),this.emitInput(t)},handleError:function(e){this.$emit("error",e)},beforeUpload:function(e){var t=this,i=/image\/\w+/.test(e.type)&&/(jpe?g|png)/i.test(e.type),n=e.size/1024/1024<5,a=e.name.match(/([^\.]+)$/);return a=a?"."+a[1]:"",new r.a(function(e,r){i?n?(t.upload.key=t.dir+Object(o.e)(new Date,"{y}{m}{d}")+"/"+t.random_string()+a,e(!0)):(t.$message.error("上传头像图片大小不能超过 5MB!"),r(!1)):(t.$message.error("上传头像图片只能是 JPG/PNG 格式!"),r(!1))})},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}}},b79V:function(e,t,i){"use strict";var n=i("0xDb");t.a={props:{pos:{type:[String,Array],default:""},name:{type:String,default:""},popVisible:{type:Boolean,default:!1}},watch:{popVisible:function(e){this.init()},name:function(){this.thename=this.name},pos:function(){this.thepos=this.pos}},mounted:function(){var e=this;window.loadedGaodeMap=function(){e.initMap(),e.hasLoadedMap=!0}},created:function(){},destoryed:function(){this.exit()},data:function(){return{noinfo:!0,dialogTableVisible:!1,thepos:"",thename:"",theobj:{}}},methods:{exit:function(){this.map&&this.map.destroy&&"function"==typeof this.map.destroy&&(this.map.destroy(),this.map={}),this.thepos="",this.thename="",this.theobj={},this.noinfo=!0},init:function(){this.dialogTableVisible=this.popVisible,console.log("this.popVisible:",this.popVisible),this.popVisible&&(this.thepos=this.pos,this.thename=this.name,this.loadMap())},loadMap:function(){var e=this;window.AMap?setTimeout(function(){e.initMap()},500):Object(n.c)("https://webapi.amap.com/maps?v=1.4.8&key=e61aa7ddc6349acdb3b57c062080f730&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder&callback=loadedGaodeMap").then(function(){})},close:function(e){this.exit(),this.$emit("update:popVisible",!1),"function"==typeof e&&e()},initMap:function(){function e(){h&&(h.setMap(null),h=null)}function t(t){console.log("2222",t),f.getAddress(t,function(n,r){"complete"===n&&"OK"===r.info?i(r,t):(e(),alert("获取不到当前位置的地址信息~"))})}function i(e,t){console.log("1111111111111",t);var i=!!t.lat;console.log("geocodeer:",e);var n=e.regeocode.formattedAddress;i&&(h=new a.Marker({map:o,position:t}),h.on("click",function(e){d.open(o,e.target.getPosition())}),h.emit("click",{target:h}),d.setContent(n)),r.setData(i?t.lng+","+t.lat:t,n,e.regeocode)}function n(e){console.log("select e:",e),c.setCity(e.poi.adcode),c.search(e.poi.name)}var r=this,a=window.AMap;window.AMapUI;r.map=new a.Map("mapcontainer",{resizeEnable:!0});var o=this.map,s={input:"tipinput"},l=new a.Autocomplete(s),c=new a.PlaceSearch({map:o,extensions:"base"}),u=this.name;u&&(this.$refs.tipinput.value=u.replace("市辖区",""),c.search(u));var h,d=new a.InfoWindow({offset:new a.Pixel(0,-30),content:""}),f=new a.Geocoder({radius:1e3}),m=new a.ContextMenu,v=[];m.addItem("添加标记",function(i){e(),c.clear(),d.close(),t(v)},3),o.on("rightclick",function(e){console.log("right click:",e);var t=e.lnglat;m.open(o,t),v=t}),o.on("click",function(e){console.log("e:",e)}),o.plugin(["AMap.ToolBar"],function(){o.addControl(new a.ToolBar)}),a.event.addListener(l,"select",n),a.event.addListener(c,"markerClick",function(e){t(e.data.location)})},setData:function(e,t,i){this.thepos=e,this.thename=t,this.theobj=i,this.noinfo=!1,console.log(i)},submitForm:function(){this.$emit("success",this.thepos,this.thename,this.theobj),this.close()}}}},gBtx:function(e,t,i){e.exports={default:i("qrpI"),__esModule:!0}},hyta:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},keop:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[!e.ui&&e.text?i("span",[e._v("\n        "+e._s(e.itemProvince&&e.itemProvince.value)+e._s(e.itemCity&&e.itemCity.value)+e._s(e.itemArea&&e.itemArea.value)+e._s(e.itemTown&&e.itemTown.value)+"\n    ")]):e._e(),e._v(" "),e.text||e.ui||!e.province?e._e():i("select",{directives:[{name:"model",rawName:"v-model",value:e.nowProvince,expression:"nowProvince"}],class:e.className,on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.nowProvince=t.target.multiple?i:i[0]}}},[e.blank?i("option",{attrs:{value:""}},[e._v(e._s(e.lang.pleaseSelect))]):e._e(),e._v(" "),e._l(e.listProvince,function(t){return i("option",{key:t.key,domProps:{value:t.key}},[e._v(e._s(t.value))])})],2),e._v(" "),!e.text&&!e.ui&&e.city&&e.haveCity?i("select",{directives:[{name:"model",rawName:"v-model",value:e.nowCity,expression:"nowCity"}],class:e.className,on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.nowCity=t.target.multiple?i:i[0]}}},[e.blank?i("option",{attrs:{value:""}},[e._v(e._s(e.lang.pleaseSelect))]):e._e(),e._v(" "),e._l(e.listCity,function(t){return i("option",{key:t.key,domProps:{value:t.key}},[e._v(e._s(t.value))])})],2):e._e(),e._v(" "),!e.text&&!e.ui&&(e.area&&e.city||!e.haveCity)&&e.listArea.length?i("select",{directives:[{name:"model",rawName:"v-model",value:e.nowArea,expression:"nowArea"}],class:e.className,on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.nowArea=t.target.multiple?i:i[0]}}},[e.blank?i("option",{attrs:{value:""}},[e._v(e._s(e.lang.pleaseSelect))]):e._e(),e._v(" "),e._l(e.listArea,function(t){return i("option",{key:t.key,domProps:{value:t.key}},[e._v(e._s(t.value))])})],2):e._e(),e._v(" "),!e.text&&!e.ui&&e.town&&e.area&&e.city?i("select",{directives:[{name:"model",rawName:"v-model",value:e.nowTown,expression:"nowTown"}],class:e.className,on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.nowTown=t.target.multiple?i:i[0]}}},[e.blank?i("option",{attrs:{value:""}},[e._v(e._s(e.lang.pleaseSelect))]):e._e(),e._v(" "),e._l(e.listTown,function(t){return i("option",{key:t.key,domProps:{value:t.key}},[e._v(e._s(t.value))])})],2):e._e(),e._v(" "),e.ui?i("div",{ref:"caller",staticClass:"caller-container",on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.showDropdown(!0)}}},[e._t("default")],2):e._e(),e._v(" "),e.ui?i("v-dropdown",{ref:"dropdown"},[i("div",{staticClass:"rg-header"},[i("h3",[i("span",{directives:[{name:"show",rawName:"v-show",value:!(e.itemProvince||e.itemCity||e.itemArea||e.itemTown),expression:"!itemProvince&&!itemCity&&!itemArea&&!itemTown"}]},[e._v("行政区划选择器")]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.itemProvince||e.itemCity||e.itemArea||e.itemTown,expression:"itemProvince||itemCity||itemArea||itemTown"}],staticClass:"rg-header-selected"},[e._v("\n                    "+e._s(e.itemProvince&&e.itemProvince.value)+e._s(e.itemCity&&e.itemCity.value)+e._s(e.itemArea&&e.itemArea.value)+e._s(e.itemTown&&e.itemTown.value)+"\n                ")])]),e._v(" "),i("button",{staticClass:"rg-removeall-button",attrs:{type:"button",title:"清除选择"},on:{click:e.clear}},[i("i",{staticClass:"iconfont icon-removeall"})]),e._v(" "),i("button",{staticClass:"rg-done-button",attrs:{type:"button",title:"完成"},on:{click:function(t){e.showDropdown(!1)}}},[i("i",{staticClass:"iconfont icon-selected"})])]),e._v(" "),e.search?i("div",{staticClass:"rg-search"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.query,expression:"query",modifiers:{trim:!0}}],ref:"input",staticClass:"rg-input",attrs:{type:"text",autocomplete:"off"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})]):e._e(),e._v(" "),i("div",{staticClass:"rg-level-tabs"},[i("ul",e._l(e.levels,function(t,n){return e.checkAvailable(n)?i("li",{key:n},[i("a",{class:{active:n===e.levelIndex},attrs:{href:"javascript:void(0);",tab_id:"selectmenu_tab_"+(n+1),data_index:n},on:{click:function(t){e.levelIndex=n}}},[e._v(e._s(t.title))])]):e._e()}))]),e._v(" "),i("div",{staticClass:"rg-results-container"},[i("ul",{staticClass:"rg-results"},[e._l(e.list,function(t,n){return i("li",{key:n,class:{"rg-item":!0,active:e.matchItem(t)},on:{click:function(i){e.itemSelect(t)}}},[e._v(e._s(t.value))])}),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:0===e.list.length,expression:"list.length === 0"}],staticClass:"rg-message-box"},[e._v("无匹配项目")])],2)])]):e._e()],1)},r=[],a={render:n,staticRenderFns:r};t.a=a},mcg1:function(e,t,i){"use strict";function n(e){i("BpPu")}var r=i("oCPT"),a=i("keop"),o=i("VU/8"),s=n,l=o(r.a,a.a,s,null,null);t.a=l.exports},mnVu:function(e,t,i){var n=i("kM2E"),r=i("52gC"),a=i("S82l"),o=i("hyta"),s="["+o+"]",l="​",c=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),h=function(e,t,i){var r={},s=a(function(){return!!o[e]()||l[e]()!=l}),c=r[e]=s?t(d):o[e];i&&(r[i]=c),n(n.P+n.F*s,"String",r)},d=h.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=h},nhFW:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"create-carinfo identification page-main"},[i("div",{staticClass:"carrierTitle"},[i("div",{staticClass:"realname"},[i("h2",[e._v(e._s(e.title))])]),e._v(" "),e._m(0)]),e._v(" "),i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,size:"mini","label-width":"100px"}},[i("div",{staticClass:"car-baseinfo-wrapper"},[i("div",{staticClass:"tab-info-stitle"},[e._v("基本信息")]),e._v(" "),i("div",{staticClass:"car-base-info clearfix"},[i("el-form-item",{staticClass:"vregion",attrs:{required:"",label:"出发地"}},[i("vregion",{staticClass:"form-control",attrs:{ui:!0,ifAera:!0},on:{values:e.regionChangeStart,testCity:function(t){e.ifProvice("strartAddress")}}},[i("el-input",{attrs:{placeholder:"出发地"},model:{value:e.ruleForm.strartAddress,callback:function(t){e.$set(e.ruleForm,"strartAddress",t)},expression:"ruleForm.strartAddress"}})],1)],1),e._v(" "),i("el-form-item",{attrs:{required:"",label:"到达地"}},[i("vregion",{staticClass:"form-control",attrs:{ui:!0,ifAera:!0},on:{values:e.regionChangeEnd,testCity:function(t){e.ifProvice("endAddress")}}},[i("el-input",{attrs:{placeholder:"到达地"},model:{value:e.ruleForm.endAddress,callback:function(t){e.$set(e.ruleForm,"endAddress",t)},expression:"ruleForm.endAddress"}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"途径地"}},[i("el-input",{model:{value:e.ruleForm.viaAddress,callback:function(t){e.$set(e.ruleForm,"viaAddress",t)},expression:"ruleForm.viaAddress"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"发车时间",required:""}},[i("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"timestamp"},model:{value:e.ruleForm.startTime,callback:function(t){e.$set(e.ruleForm,"startTime",t)},expression:"ruleForm.startTime"}})],1),e._v(" "),i("el-form-item",{staticClass:"carinfo-expect",attrs:{label:"期望运价"}},[i("input",{directives:[{name:"number-only",rawName:"v-number-only:point1",arg:"point1"}],staticClass:"nativeinput",attrs:{maxlength:9,placeholder:"","auto-complete":"off",clearable:"",type:"text"},domProps:{value:e.ruleForm.expectPrice},on:{change:function(t){e.setInputVal(t.target.value,e.ruleForm,"expectPrice")}}}),e._v("  元/车 （运价不填自动为面议）\n          "),e._v(" "),i("p",{staticStyle:{color:"red"}},[e._v("填写运价，车源线路将排名优先，让车源线路更有竞争力！")])]),e._v(" "),i("el-form-item",{attrs:{label:"车源类型"}},[i("el-radio-group",{model:{value:e.ruleForm.carSourceType,callback:function(t){e.$set(e.ruleForm,"carSourceType",t)},expression:"ruleForm.carSourceType"}},[i("el-radio",{attrs:{label:"AF01801"}},[e._v("回程车")]),e._v(" "),i("el-radio",{attrs:{label:"AF01802"}},[e._v("本地车")])],1)],1),e._v(" "),i("el-form-item",{staticClass:"clearleft",attrs:{label:"即时/长期"}},[i("el-radio-group",{model:{value:e.ruleForm.isLongCar,callback:function(t){e.$set(e.ruleForm,"isLongCar",t)},expression:"ruleForm.isLongCar"}},[i("el-radio",{attrs:{label:"1"}},[e._v("即时车源")]),e._v(" "),i("el-radio",{attrs:{label:"0"}},[e._v("长期车源")])],1)],1)],1),e._v(" "),i("div",{staticClass:"carinfo-remark"},[i("el-form-item",{attrs:{label:"备注"}},[i("div",{staticClass:"label-content clearfix"},e._l(e.labelArr,function(t,n){return i("span",{key:n,class:{active:t.ischeck},on:{click:function(i){e.selectTag(t)}}},[e._v(e._s(t.name))])})),e._v(" "),i("el-input",{attrs:{type:"textarea",rows:2,maxlength:"30",placeholder:"请输入备注"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}}),e._v("\n          请填写备注（"+e._s(e.ruleForm.remark.length)+"-30字）。"),i("span",{staticClass:"important-info"})],1)],1)]),e._v(" "),i("div",{staticClass:"car-submit"},[i("el-button",{staticClass:"create-carinfo-btn",attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即发布")])],1)])],1)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"prompt"},[i("p",[i("span",{staticClass:"tishi"},[i("i",{staticClass:"el-icon-warning"}),e._v("小提示： ")]),e._v("(打"),i("span",{staticClass:"star"},[e._v("*")]),e._v("号为必填项)")])])}],a={render:n,staticRenderFns:r};t.a=a},oCPT:function(e,t,i){"use strict";var n=i("//Fk"),r=i.n(n),a=i("gBtx"),o=i.n(a),s=i("fZjL"),l=i.n(s),c=i("t5DY"),u=i("/OH/"),h=i("UZPH");t.a={name:"vregion",components:{"v-dropdown":u.a},props:{blank:{type:Boolean,default:!0},province:{type:Boolean,default:!0},city:{type:Boolean,default:!0},area:{type:Boolean,default:!0},town:{type:Boolean,default:!1},i18n:{type:String,default:"cn"},selected:Object,ui:{type:Boolean,default:!1},search:{type:Boolean,default:!0},text:{type:Boolean,default:!1},ifAera:{type:Boolean,default:!1}},data:function(){return{listProvince:[],listCity:[],listArea:[],listTown:[],nowProvince:"",nowCity:"",nowArea:"",nowTown:"",haveCity:!0,className:"",lang:{},init:this.selected,pauseWatch:!1,query:"",levels:[{index:0,title:"省/直辖市"},{index:1,title:"市"},{index:2,title:"区/县"},{index:3,title:"乡/镇/街道"}],levelIndex:-1,list:[],itemProvince:null,itemCity:null,itemArea:null,itemTown:null}},watch:{query:function(e){var t=this.getList(this.levelIndex),i=[];i=t.filter(function(t){return t.value.toLowerCase().includes(e.toLowerCase())}),0===i.length&&(i=t.filter(function(t){return t.key.includes(e)})),this.list=i},nowProvince:function(e){var t=this;this.pauseWatch||this.city&&this.fetchCity(e).then(function(i){if(i.code===t.nowProvince){var n=i.data;t.listArea.length&&t.listArea.splice(0,t.listArea.length),t.listCity=n,t.nowCity="",t.haveCity||(t.nowArea=""),t.itemProvince=t.listProvince.find(function(t){return t.key===e}),t.haveCity=!!t.listCity.length,t.$nextTick(function(){!t.haveCity&&t.area?t.changeCity():t.initSelected(2),t.ui&&(t.levelIndex=t.haveCity?1:2)}),t.changeValues()}})},nowCity:function(e){this.pauseWatch||(this.changeCity(),this.itemCity=this.listCity.find(function(t){return t.key===e}),this.ui&&(this.levelIndex=2),this.changeValues())},nowArea:function(e){if(!this.pauseWatch){var t=this;if(e&&t.town){var i=[];this.listTown=i}else this.listTown=[];this.town&&(this.nowTown=""),console.log("nowArea:",e,this.listArea),this.itemArea=this.listArea.find(function(t){return t.key===e}),this.initSelected(4),this.ui&&this.town&&(this.levelIndex=3),this.changeValues()}},nowTown:function(e){this.pauseWatch||(this.itemTown=this.listTown.find(function(t){return t.key===e}),this.changeValues())},selected:{handler:function(e){e&&l()(e).length&&(this.init=e,this.initSelected(1))},deep:!0},levelIndex:function(e){this.list=this.getList(e)}},methods:{changeCity:function(){var e=this;if(this.area||!this.haveCity&&this.province){if(this.haveCity&&!this.nowCity||!this.haveCity&&!this.nowProvince)console.log("2222222222:",this.haveCity,this.nowProvince,this.nowCity),this.listArea=[];else{var t=o()(this.haveCity?this.nowCity:this.nowProvince),i=this.haveCity;this.fetchCity(t).then(function(t){var n=t.data;if(i){if(e.nowCity!==t.code)return}else if(e.nowProvince!==t.code)return;e.listArea=n,console.log("333333333:",e.haveCity,e.nowProvince,e.nowCity,i,t.code,n),n.length&&(e.list=e.getList(2),e.initSelected(3))})}this.nowArea=""}else this.initSelected(3)},changeValues:function(){var e=this;this.$nextTick(function(){e.$emit("values",{province:e.itemProvince,city:e.itemCity,area:e.itemArea,town:e.itemTown})})},initSelected:function(e){var t=this,i=this.init,n=0;if(i&&l()(i).length){switch(e){case 1:t.province&&i.province&&(t.nowProvince=i.province);break;case 2:t.city&&i.city&&(t.nowCity=i.city);break;case 3:t.area&&i.area&&(t.nowArea=i.area);break;case 4:t.town&&i.town&&(t.nowTown=i.town)}t.province&&i.province&&n++,t.city&&(i.city||!i.city&&!t.haveCity&&t.area&&i.area)&&n++,t.area&&i.area&&n++,t.town&&i.town&&n++,e===n&&(this.init=null)}},getList:function(e){var t=[];switch(e){case 0:t=this.listProvince;break;case 1:t=this.listCity;break;case 2:t=this.listArea;break;case 3:t=this.listTown}return t},checkAvailable:function(e){var t=!1;switch(e){case 0:this.province&&(t=!0);break;case 1:this.city&&this.haveCity&&(t=!0);break;case 2:this.area&&(t=!0);break;case 3:this.town&&(t=!0)}return t},matchItem:function(e){return e.key===this.nowProvince||e.key===this.nowCity||e.key===this.nowArea||e.key===this.nowTown},itemSelect:function(e){switch(this.levelIndex){case 0:this.nowProvince=e.key,this.itemProvince=e;break;case 1:this.nowCity=e.key,this.itemCity=e;break;case 2:this.nowArea=e.key,this.itemArea=e;break;case 3:this.nowTown=e.key,this.itemTown=e}},showDropdown:function(e){var t=this;if(console.log(e),"boolean"==typeof e){var i=this;this.$refs.dropdown.$emit("show",e,this.$refs.caller);var n=!1,r=["北京市","天津市","重庆市","上海市","香港","澳门","台湾"];!1===e&&this.ifAera&&(r.forEach(function(e){0===t.itemProvince.name.indexOf(e)&&(n=!0)}),null==this.itemCity&&!1===n&&this.$emit("testCity")),e&&(this.query="",this.$nextTick(function(){return i.$refs.input.focus({preventScroll:!0})}))}},clear:function(){var e=this;this.pauseWatch=!0,this.nowProvince="",this.nowCity="",this.nowArea="",this.nowTown="",this.itemProvince=null,this.itemCity=null,this.itemArea=null,this.itemTown=null,this.listCity=[],this.listArea=[],this.listTown=[],this.levelIndex=0,this.$nextTick(function(){e.pauseWatch=!1,e.changeValues()})},fetchCity:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new r.a(function(i){return Object(c.a)(t).then(function(t){return t.data=e.formatCity(t.data),i(t),t}).catch(function(e){console.log("err:",e),i({code:t,data:[]})})})},formatCity:function(e){return e.map(function(e){return e.key=e.code,e.value=e.name,e})}},beforeMount:function(){this.lang=h.a[this.i18n]},mounted:function(){var e=this;this.fetchCity().then(function(t){var i=t.data.filter(function(e){return e});e.listProvince=e.ui?i.concat().sort(function(e,t){var i=e.value.length-t.value.length;return 0===i?Number(e.key)-Number(t.key):i}):i.concat(),e.className=e.$el.className,e.$el.className="v-region",e.selected&&e.selected.province&&(e.nowProvince=e.selected.province),e.ui&&(e.levelIndex=0)})}}},qZ1X:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"v-dropdown-container",style:[e.styleSheet]},[e._t("default")],2)},r=[],a={render:n,staticRenderFns:r};t.a=a},qrpI:function(e,t,i){i("8sHD"),e.exports=i("FeBl").Number.parseInt},sf0h:function(e,t,i){"use strict";var n=i("woOf"),r=i.n(n),a=i("9UCZ"),o=i("Zjyc"),s=(i("3QU7"),i("t5DY")),l=i("1jhZ"),c=i("mcg1");t.a={components:{selectType:a.a,upload:o.a,vregion:c.a},mounted:function(){var e=this;this.id=this.$route.query.id,this.initLabel().then(function(){e.id?e.initModify():e.initNew()})},data:function(){return{id:"",title:"发布",ifDisable:!1,popVisible:!1,labelArr:[],rules:{},current:"",ruleForm:{belongDriver:"",carFile:"",carHeight:"",carLength:"",carLoad:"",carNumber:"",carSourceType:"",carSpec:"",carTag:"",carTagName:"",carType:"",carVolume:"",carWidth:"",driverId:"",endAddress:"",endAddressCoordinate:"",endProvince:"",endCity:"",endArea:"",expectPrice:"",isLongCar:"",remark:"",startTime:"",strartAddress:"",startProvince:"",startCity:"",startArea:"",strartAddressCoordinate:"",title:"",usualPlace:"",usualPlaceCoordinate:"",viaAddress:""}}},watch:{"ruleForm.carLength":{handler:function(){this.getCarVolum()}},"ruleForm.carWidth":{handler:function(){this.getCarVolum()}},"ruleForm.carHeight":{handler:function(){this.getCarVolum()}}},methods:{setInputVal:function(e,t,i){this.$set(t,i,e)},getValue:function(e){return e?e.value:""},regionChangeUsual:function(e){this.ruleForm.usualPlace=e.province||e.city||e.area||e.town?(""+this.getValue(e.province)+this.getValue(e.city)+this.getValue(e.area)+this.getValue(e.town)).trim():""},regionChangeStart:function(e){e.province||e.city||e.area||e.town?(this.ruleForm.strartAddress=(""+this.getValue(e.province)+this.getValue(e.city)+this.getValue(e.area)+this.getValue(e.town)).trim(),this.ruleForm.startProvince=this.getValue(e.province),this.ruleForm.startCity=this.getValue(e.city),this.ruleForm.startArea=this.getValue(e.area)):this.ruleForm.strartAddress=""},regionChangeEnd:function(e){e.province||e.city||e.area||e.town?(this.ruleForm.endAddress=(""+this.getValue(e.province)+this.getValue(e.city)+this.getValue(e.area)+this.getValue(e.town)).trim(),this.ruleForm.endProvince=this.getValue(e.province),this.ruleForm.endCity=this.getValue(e.city),this.ruleForm.endArea=this.getValue(e.area)):this.ruleForm.endAddress=""},ifProvice:function(e){return console.log("ifProvice",e),this.$message({type:"info",message:"至少选择到市级范围"}),"usualPlace"==e?this.ruleForm.usualPlace="":"strartAddress"==e?this.ruleForm.strartAddress="":this.ruleForm.endAddress=""},initModify:function(){var e=this;l.b(this.id).then(function(t){var i=t.data;for(var n in e.ruleForm)e.ruleForm[n]=i[n];var r=i.carTag.split("|");e.labelArr=e.labelArr.map(function(e){return-1!==r.indexOf(e.code)&&(e.ischeck=!0),e}),e.isModify=!0,e.title="修改"}).catch(function(){e.$message.error("查找不到相关信息~"),e.initNew()})},initNew:function(){this.ruleForm.belongDriver=this.otherinfo.contactsName,this.ruleForm.driverId=this.otherinfo.id},initLabel:function(){var e=this;return Object(s.f)("AF042").then(function(t){e.labelArr=t.map(function(e){var t=e;return t.ischeck=!1,t})})},selectTag:function(e){e.ischeck=!e.ischeck},getCarVolum:function(){this.ruleForm.carVolume=this.ruleForm.carLength*this.ruleForm.carWidth*this.ruleForm.carHeight,this.ruleForm.carVolume=this.ruleForm.carVolume?this.ruleForm.carVolume.toFixed(2):0},getInfo:function(e,t,i){switch(this.current){case"strartAddress":this.ruleForm.strartAddress=t,this.ruleForm.strartAddressCoordinate=e;break;case"endAddress":this.ruleForm.endAddress=t,this.ruleForm.endAddressCoordinate=e;break;case"usualPlace":this.ruleForm.usualPlace=t,this.ruleForm.usualPlaceCoordinate=e}},showMap:function(e){this.popVisible=!0,this.current=e},resetForm:function(){this.ruleForm=this.$options.data().ruleForm},checkValue:function(e){return e.strartAddress?e.endAddress?!!e.startTime||(this.$message.error("请选择发车时间。"),!1):(this.$message.error("请填写车辆到达地。"),!1):(this.$message.error("请填写车辆出发地。"),!1)},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var i=r()({},t.ruleForm);if(!1===t.checkValue(i))return!1;t.loading=!0,i.title=i.strartAddress+"->"+i.endAddress,i.carTag=t.labelArr.filter(function(e){return e.ischeck}).map(function(e){return e.code}).join("|"),i.carTagName=t.labelArr.filter(function(e){return e.ischeck}).map(function(e){return e.name}).join("|");var n=void 0;t.isModify?(i.id=t.id,n=l.h(i)):n=l.e(i),n.then(function(e){if(t.loading=!1,"发布成功，请完善司机车辆信息！"==e.text||"更新成功，请完善司机车辆信息！"==e.text){var i=t.$createElement;t.$msgbox({title:"提示",message:i("div",{style:"text-align:center"},[i("span",{style:"fontSize:15px"},"发布成功 "),i("p",{style:"color: #ccc"},"您还没有任何车辆信息！"),i("p",{style:"color: #ccc"},"完善车辆信息客户才能看到您发布的内容哦")]),confirmButtonText:"立即完善",beforeClose:function(e,i,n){"confirm"===e?(t.eventBus.$emit("replaceCurrentView","/carinfo/authcreate"),n()):(t.eventBus.$emit("replaceCurrentView","/carinfo/manage"),n())}})}else t.eventBus.$emit("replaceCurrentView","/carinfo/manage"),done()}).catch(function(e){t.loading=!1})})}}}},t5DY:function(e,t,i){"use strict";function n(e){return e=e||"",m.b.get("/aflccommonservice/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(t){return t.code=e,t})}function r(){return p?new f.a(function(e){e(p)}):m.b.get("/anfacommonservice/common/oss/v1/policy").then(function(e){return p=e.data||"",setTimeout(function(){p=""},18e4),p})}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return m.b.get("/aflccommonservice/sysDict/getSysDictByCodeGet/"+e).then(function(e){return e.data||[]})}function o(e){return m.b.axios({url:"/"+v+"/sysDict/getSysDictByCodeGet/"+e,method:"get"})}function s(e){return m.b.axios({url:"/"+v+"/common/aflcMemberCenter/v1/getShipperInfoByMobile?mobile="+e,method:"get"})}function l(e){return m.b.axios({url:"/"+v+"/common/aflcMemberCenter/v1/getDriverInfoByMobile?mobile="+e,method:"get"})}function c(e){return m.b.axios({url:"/"+v+"/common/aflcMemberCenter/v1/getLogisticsCompanyInfoByMobile?mobile="+e,method:"get"})}function u(e){return m.b.axios({url:"/aflcorderservice/order/fclOrder/v1/getDetailsByOrderSerial/"+e,method:"get"})}function h(e,t){var i=new FormData;for(var n in t)i.append(n,t[n]);var r="";for(var a in t)r+="&"+a+"="+t[a];return m.b.request({url:"/aflccommonservice/common/aflcMemberCenter/v1/updatePassword?memberType="+e,method:"put",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:r})}t.a=n,t.h=r,t.f=a,t.c=o,t.g=s,t.d=l,t.e=c,t.b=u,t.i=h;var d=i("//Fk"),f=i.n(d),m=i("Vo7i"),v="aflccommonservice",p=void 0},"xT+W":function(e,t){},xoQy:function(e,t,i){"use strict";t.a={name:"v-dropdown",props:{position:{type:String,default:"left"}},data:function(){return{show:!1,styleSheet:{top:"",left:""}}},watch:{},methods:{visible:function(e,t){if("boolean"==typeof e){this.show=e;var i=this;this.$nextTick(function(){i.show&&i.adjust(t)})}},adjust:function(e){var t=e.getBoundingClientRect(),i=0,n=0,r=this.$el.getBoundingClientRect(),a=window.scrollY,o=document.body.clientHeight;if(this.rightClick){var s=this.y;this.y+r.height>a+o&&(s=this.y-r.height),n=this.x,i=s}else switch(i=t.top+t.height+5+a,this.position){case"left":n=t.left;break;case"center":n=t.left+t.width/2-r.width/2;break;case"right":n=t.left+t.width-r.width}this.styleSheet.top=i+"px",this.styleSheet.left=n+"px"},whole:function(e){if(this.show){-1===e.path.findIndex(function(e){return e.className&&e.className.includes("v-dropdown-container")})&&(this.show=!1)}}},mounted:function(){this.$on("show",this.visible),document.addEventListener("mousedown",this.whole)},destroyed:function(){this.$off("show",this.visible),document.removeEventListener("mousedown",this.whole)}}}});