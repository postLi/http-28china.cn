exports.ids=[41,46],exports.modules={100:function(e,t,o){var content=o(113);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var d=o(3).default;e.exports.__inject__=function(e){d("1bfb57aa",content,!0,e)}},110:function(e,t,o){"use strict";var d=o(111),n={name:"SelectAddress",props:{top:{type:String,default:"0"}},data:()=>({showMask:!1,list:[],cityList:[],areaList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1},{code:"",name:"",show:!1}]}),watch:{showMask(e,t){d.default.get("mCityHistoryList")&&e&&(this.list=d.default.get("mCityHistoryList"))}},methods:{selectedHis(e){this.showMask=!1,this.$emit("setArea",[e.startProvince,e.startCity,"全市"===e.name?"":e.name])},back(){this.showAddr[2].show?(this.$set(this.showAddr,2,{code:"",name:"",show:!1}),this.$set(this.showAddr[1],"show",!0)):this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince(e){"全国"===e.name?(this.$emit("setArea",["","",""]),this.showMask=!1):this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(t=>{let data=t.data;200===data.status&&(this.cityList=data.data&&data.data||[],this.showAddr=[{code:e.code,name:e.name,show:!1},{code:"",name:"",show:!0},{code:"",name:"",show:!1}])}).catch(e=>{})},selectCity(e){this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(t=>{let data=t.data;200===data.status&&(data.data?data.data.unshift({code:e.code,name:"全市",name1:e.name,parentCode:e.code}):data.data=[{code:e.code,name:"全市",name1:e.name,parentCode:e.code}],this.areaList=data.data&&data.data||[],this.$set(this.showAddr,1,{code:e.code,name:e.name,show:!1}),this.showAddr[2].show=!0)}).catch(e=>{})},selectArea(e){this.showMask=!1,this.$set(this.showAddr,2,{code:e.code,name:e.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name,"全市"===e.name?"":e.name]),e.startProvince=this.showAddr[0].name,e.startCity=this.showAddr[1].name,this.setHistory(e)},setHistory(data){if(d.default.get("mCityHistoryList")){let e=d.default.get("mCityHistoryList");e.some(e=>e.code===data.code)||(e.length>=4&&e.splice(3,1),e.unshift(data)),d.default.set("mCityHistoryList",e)}else d.default.set("mCityHistoryList",[data])},beforeEnter(e){e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter(e){e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px"},leave(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave(e){e.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},r=o(0);var component=Object(r.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?o("div",{staticClass:" heightTran"},[o("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[o("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("历史城市")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.list,function(t,d){return o("div",{key:d,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(o){return e.selectedHis(t)}}},[e._v(e._s("全市"===t.name?t.name1:t.name))])])}),0),e._v(" "),o("div",{staticClass:"flex_a"},[e.showAddr[0].show?o("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("选择城市")]):o("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(t){return e.back()}}},[e._v("返回上一线")]),e._v(" "),o("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[e._v(e._s(e.showAddr[0].name)+e._s(e.showAddr[1].name)+e._s("全市"===e.showAddr[2].name?"":e.showAddr[2].name))]),e._v(" "),o("div",{staticClass:"flex_1"})]),e._v(" "),e.showAddr[0].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.$store.state.m.provinceList,function(t,d){return o("div",{key:d,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectProvince(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[1].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.cityList,function(t,d){return o("div",{key:d,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectCity(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[2].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.areaList,function(t,d){return o("div",{key:d,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[2].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectArea(t)}}},[e._v(e._s(t.name))])])}),0):e._e()])]):e._e()]),e._ssrNode(" <div"+e._ssrClass(null,[e.showMask?"mask2":""])+e._ssrStyle(null,{top:e.top},null)+" data-v-7f01b790></div>")],2)},[],!1,function(e){var t=o(112);t.__inject__&&t.__inject__(e)},"7f01b790","03e67ddf");t.a=component.exports},111:function(e,t,o){"use strict";o.r(t);t.default={get:function(e){var t=window.localStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set:function(e,data){return window.localStorage.setItem(e,window.JSON.stringify(data))},remove:function(e){return window.localStorage.removeItem(e)},get_s:function(e){var t=window.sessionStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set_s:function(e,data){return window.sessionStorage.setItem(e,window.JSON.stringify(data))},remove_s:function(e){return window.sessionStorage.removeItem(e)}}},112:function(e,t,o){"use strict";o.r(t);var d=o(100),n=o.n(d);for(var r in d)"default"!==r&&function(e){o.d(t,e,function(){return d[e]})}(r);t.default=n.a},113:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".code_box[data-v-7f01b790]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-7f01b790]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-7f01b790]{border:1px solid #2fb301;color:#2fb301;background-color:rgba(47,179,1,.5)}.code_item_no_selected[data-v-7f01b790]{border:1px solid #999}.heightTran[data-v-7f01b790]{transition:all .2s;position:absolute;top:0;width:100%;height:8.3rem;z-index:100}.mask2[data-v-7f01b790]{position:fixed;left:0;z-index:13;width:100%;height:100%;background-color:rgba(0,0,0,.4)}",""])},241:function(e,t,o){"use strict";o.r(t);var d={name:"PageGongSi",components:{SelectAddress:o(110).a},data:()=>({isShowMask:[!1,!1,!1],options:{pullDownRefresh:{txt:" "},pullUpLoad:{txt:{more:"",noMore:"没有更多数据了"}},scrollbar:!0}}),mounted(){this.$nextTick(()=>{})},methods:{clickStart(){this.$set(this.isShowMask,1,!1),this.$refs.selectEndAddress.showMask=!1,this.$set(this.isShowMask,0,!this.isShowMask[0]),this.$refs.selectStartAddress.showMask=!this.$refs.selectStartAddress.showMask},clickEnd(){this.$set(this.isShowMask,0,!1),this.$refs.selectStartAddress.showMask=!1,this.$set(this.isShowMask,1,!this.isShowMask[1]),this.$refs.selectEndAddress.showMask=!this.$refs.selectEndAddress.showMask},clickReputation(){console.log(this.$store.state.m.huoyuan.rangeList)},getStartArea(data){this.$set(this.isShowMask,0,!1),data&&this.$store.dispatch("m/gongsi/SETDATA",{data:data,name:"startName"})},getEndArea(data){this.$set(this.isShowMask,1,!1),data&&this.$store.dispatch("m/gongsi/SETDATA",{data:data,name:"endName"})}}},n=o(0);var component=Object(n.a)(d,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex_f flex_1"},[e._ssrNode("<div data-v-a42f2c4a>","</div>",[e._ssrNode('<div class="flex_a f-26 b_b page_view_top b_c_w" data-v-a42f2c4a><div'+e._ssrClass("flex_1 flex",[e.isShowMask[0]?"f_g":"c-3"])+' data-v-a42f2c4a><span class="margin_r_10" data-v-a42f2c4a>'+e._ssrEscape(e._s(""===e.$store.state.m.gongsi.startName[0]?"全国":""===e.$store.state.m.gongsi.startName[2]?e.$store.state.m.gongsi.startName[1]:e.$store.state.m.gongsi.startName[2]))+"</span> <div"+e._ssrClass(null,[e.isShowMask[0]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+" data-v-a42f2c4a></div></div> <div"+e._ssrClass("flex_1 flex",[!0===e.isShowMask[1]?"f_g":"c-3"])+' data-v-a42f2c4a><span class="margin_r_10" data-v-a42f2c4a>'+e._ssrEscape(e._s(""===e.$store.state.m.gongsi.endName[0]?"全国":""===e.$store.state.m.gongsi.endName[2]?e.$store.state.m.gongsi.endName[1]:e.$store.state.m.gongsi.endName[2]))+"</span> <div"+e._ssrClass(null,[e.isShowMask[1]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+' data-v-a42f2c4a></div></div> <div class="flex_1 flex" data-v-a42f2c4a><span class="margin_r_10" data-v-a42f2c4a>信誉最高</span> <div'+e._ssrClass(null,[e.isShowMask[2]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+" data-v-a42f2c4a></div></div></div> "),e._ssrNode('<div class="p_r" data-v-a42f2c4a>',"</div>",[o("SelectAddress",{ref:"selectStartAddress",attrs:{top:"auto"},on:{setArea:e.getStartArea}}),e._ssrNode(" "),o("SelectAddress",{ref:"selectEndAddress",attrs:{top:"auto"},on:{setArea:e.getEndArea}})],2)],2)])},[],!1,function(e){},"a42f2c4a","99c446e0");t.default=component.exports}};
//# sourceMappingURL=ca0cc722818dee308be8.js.map