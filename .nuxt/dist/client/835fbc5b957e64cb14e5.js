(window.webpackJsonp=window.webpackJsonp||[]).push([[46,51],{234:function(t,e,o){var content=o(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("1bfb57aa",content,!0,{sourceMap:!1})},250:function(t,e,o){"use strict";o(4);var n=o(251),c={name:"SelectAddress",props:{top:{type:String,default:"0"}},data:function(){return{showMask:!1,list:[],cityList:[],areaList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1},{code:"",name:"",show:!1}]}},watch:{showMask:function(t,e){n.default.get("mCityHistoryList")&&t&&(this.list=n.default.get("mCityHistoryList"))}},methods:{selectedHis:function(t){this.showMask=!1,this.$emit("setArea",[t.startProvince,t.startCity,"全市"===t.name?"":t.name])},back:function(){this.showAddr[2].show?(this.$set(this.showAddr,2,{code:"",name:"",show:!1}),this.$set(this.showAddr[1],"show",!0)):this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince:function(t){var e=this;"全国"===t.name?(this.$emit("setArea",["","",""]),this.showMask=!1):this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t.code).then(function(o){var data=o.data;200===data.status&&(e.cityList=data.data&&data.data||[],e.showAddr=[{code:t.code,name:t.name,show:!1},{code:"",name:"",show:!0},{code:"",name:"",show:!1}])}).catch(function(t){})},selectCity:function(t){var e=this;this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t.code).then(function(o){var data=o.data;200===data.status&&(data.data?data.data.unshift({code:t.code,name:"全市",name1:t.name,parentCode:t.code}):data.data=[{code:t.code,name:"全市",name1:t.name,parentCode:t.code}],e.areaList=data.data&&data.data||[],e.$set(e.showAddr,1,{code:t.code,name:t.name,show:!1}),e.showAddr[2].show=!0)}).catch(function(t){})},selectArea:function(t){this.showMask=!1,this.$set(this.showAddr,2,{code:t.code,name:t.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name,"全市"===t.name?"":t.name]),t.startProvince=this.showAddr[0].name,t.startCity=this.showAddr[1].name,this.setHistory(t)},setHistory:function(data){if(n.default.get("mCityHistoryList")){var t=n.default.get("mCityHistoryList");t.some(function(t){return t.code===data.code})||(t.length>=4&&t.splice(3,1),t.unshift(data)),n.default.set("mCityHistoryList",t)}else n.default.set("mCityHistoryList",[data])},beforeEnter:function(t){t.style.height="0"},enter:function(t){0!==t.scrollHeight?t.style.height=t.scrollHeight+"px":t.style.height=""},afterEnter:function(t){t.style.height=""},beforeLeave:function(t){t.style.height=t.scrollHeight+"px"},leave:function(t){0!==t.scrollHeight&&(t.style.height=0)},afterLeave:function(t){t.style.height=""},closeMask:function(){this.showMask=!1,this.$emit("setArea",!1)}}},r=(o(252),o(0)),component=Object(r.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("transition",{on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},[t.showMask?o("div",{staticClass:" heightTran"},[o("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[o("div",{staticClass:"c-3 flex_1 f_w_b"},[t._v("历史城市")]),t._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.list,function(e,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(o){return t.selectedHis(e)}}},[t._v(t._s("全市"===e.name?e.name1:e.name))])])}),0),t._v(" "),o("div",{staticClass:"flex_a"},[t.showAddr[0].show?o("div",{staticClass:"c-3 flex_1 f_w_b"},[t._v("选择城市")]):o("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(e){return t.back()}}},[t._v("返回上一线")]),t._v(" "),o("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[t._v(t._s(t.showAddr[0].name)+t._s(t.showAddr[1].name)+t._s("全市"===t.showAddr[2].name?"":t.showAddr[2].name))]),t._v(" "),o("div",{staticClass:"flex_1"})]),t._v(" "),t.showAddr[0].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.$store.state.m.provinceList,function(e,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return t.selectProvince(e)}}},[t._v(t._s(e.name))])])}),0):t._e(),t._v(" "),t.showAddr[1].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.cityList,function(e,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return t.selectCity(e)}}},[t._v(t._s(e.name))])])}),0):t._e(),t._v(" "),t.showAddr[2].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.areaList,function(e,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[2].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return t.selectArea(e)}}},[t._v(t._s(e.name))])])}),0):t._e()])]):t._e()]),t._v(" "),o("div",{class:[t.showMask?"mask2":""],style:{top:t.top},on:{click:function(e){return t.closeMask()}}})],1)},[],!1,null,"7f01b790",null);e.a=component.exports},251:function(t,e,o){"use strict";o.r(e);e.default={get:function(t){var e=window.localStorage.getItem(t);return null===e?null:window.JSON.parse(e)},set:function(t,data){return window.localStorage.setItem(t,window.JSON.stringify(data))},remove:function(t){return window.localStorage.removeItem(t)},get_s:function(t){var e=window.sessionStorage.getItem(t);return null===e?null:window.JSON.parse(e)},set_s:function(t,data){return window.sessionStorage.setItem(t,window.JSON.stringify(data))},remove_s:function(t){return window.sessionStorage.removeItem(t)}}},252:function(t,e,o){"use strict";var n=o(234);o.n(n).a},253:function(t,e,o){(t.exports=o(8)(!1)).push([t.i,".code_box[data-v-7f01b790]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-7f01b790]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-7f01b790]{border:1px solid #2fb301;color:#2fb301;background-color:rgba(47,179,1,.5)}.code_item_no_selected[data-v-7f01b790]{border:1px solid #999}.heightTran[data-v-7f01b790]{transition:all .2s;position:absolute;top:0;width:100%;height:8.3rem;z-index:100}.mask2[data-v-7f01b790]{position:fixed;left:0;z-index:13;width:100%;height:100%;background-color:rgba(0,0,0,.4)}",""])},385:function(t,e,o){"use strict";o.r(e);var n={name:"PageGongSi",components:{SelectAddress:o(250).a},data:function(){return{isShowMask:[!1,!1,!1],options:{pullDownRefresh:{txt:" "},pullUpLoad:{txt:{more:"",noMore:"没有更多数据了"}},scrollbar:!0}}},mounted:function(){this.$nextTick(function(){})},methods:{clickStart:function(){this.$set(this.isShowMask,1,!1),this.$refs.selectEndAddress.showMask=!1,this.$set(this.isShowMask,0,!this.isShowMask[0]),this.$refs.selectStartAddress.showMask=!this.$refs.selectStartAddress.showMask},clickEnd:function(){this.$set(this.isShowMask,0,!1),this.$refs.selectStartAddress.showMask=!1,this.$set(this.isShowMask,1,!this.isShowMask[1]),this.$refs.selectEndAddress.showMask=!this.$refs.selectEndAddress.showMask},clickReputation:function(){console.log(this.$store.state.m.huoyuan.rangeList)},getStartArea:function(data){this.$set(this.isShowMask,0,!1),data&&this.$store.dispatch("m/gongsi/SETDATA",{data:data,name:"startName"})},getEndArea:function(data){this.$set(this.isShowMask,1,!1),data&&this.$store.dispatch("m/gongsi/SETDATA",{data:data,name:"endName"})}}},c=o(0),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex_f flex_1"},[o("div",[o("div",{staticClass:"flex_a f-26 b_b page_view_top b_c_w"},[o("div",{staticClass:"flex_1 flex",class:[t.isShowMask[0]?"f_g":"c-3"],on:{click:function(e){return t.clickStart()}}},[o("span",{staticClass:"margin_r_10"},[t._v(t._s(""===t.$store.state.m.gongsi.startName[0]?"全国":""===t.$store.state.m.gongsi.startName[2]?t.$store.state.m.gongsi.startName[1]:t.$store.state.m.gongsi.startName[2]))]),t._v(" "),o("div",{class:[t.isShowMask[0]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})]),t._v(" "),o("div",{staticClass:"flex_1 flex",class:[!0===t.isShowMask[1]?"f_g":"c-3"],on:{click:function(e){return t.clickEnd()}}},[o("span",{staticClass:"margin_r_10"},[t._v(t._s(""===t.$store.state.m.gongsi.endName[0]?"全国":""===t.$store.state.m.gongsi.endName[2]?t.$store.state.m.gongsi.endName[1]:t.$store.state.m.gongsi.endName[2]))]),t._v(" "),o("div",{class:[t.isShowMask[1]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})]),t._v(" "),o("div",{staticClass:"flex_1 flex",on:{click:function(e){return t.clickReputation()}}},[o("span",{staticClass:"margin_r_10"},[t._v("信誉最高")]),t._v(" "),o("div",{class:[t.isShowMask[2]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})])]),t._v(" "),o("div",{staticClass:"p_r"},[o("SelectAddress",{ref:"selectStartAddress",attrs:{top:"auto"},on:{setArea:t.getStartArea}}),t._v(" "),o("SelectAddress",{ref:"selectEndAddress",attrs:{top:"auto"},on:{setArea:t.getEndArea}})],1)])])},[],!1,null,"a42f2c4a",null);e.default=component.exports}}]);