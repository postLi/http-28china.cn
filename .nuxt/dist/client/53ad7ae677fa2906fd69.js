(window.webpackJsonp=window.webpackJsonp||[]).push([[47,53],{186:function(e,t,o){var content=o(205);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(3).default)("eecd741e",content,!0,{sourceMap:!1})},193:function(e,t,o){"use strict";var n=o(203),c={name:"SelectAddress",props:{top:{type:String,default:"0"}},data:()=>({showMask:!1,list:[],cityList:[],areaList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1},{code:"",name:"",show:!1}]}),watch:{showMask(e,t){n.default.get("mCityHistoryList")&&e&&(this.list=n.default.get("mCityHistoryList"))}},methods:{selectedHis(e){this.showMask=!1,this.$emit("setArea",[e.startProvince,e.startCity,"全市"===e.name?"":e.name])},back(){this.showAddr[2].show?(this.$set(this.showAddr,2,{code:"",name:"",show:!1}),this.$set(this.showAddr[1],"show",!0)):this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince(e){"全国"===e.name?(this.$emit("setArea",["","",""]),this.showMask=!1):this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(t=>{let data=t.data;200===data.status&&(this.cityList=data.data&&data.data||[],this.showAddr=[{code:e.code,name:e.name,show:!1},{code:"",name:"",show:!0},{code:"",name:"",show:!1}])}).catch(e=>{})},selectCity(e){this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(t=>{let data=t.data;200===data.status&&(data.data?data.data.unshift({code:e.code,name:"全市",name1:e.name,parentCode:e.code}):data.data=[{code:e.code,name:"全市",name1:e.name,parentCode:e.code}],this.areaList=data.data&&data.data||[],this.$set(this.showAddr,1,{code:e.code,name:e.name,show:!1}),this.showAddr[2].show=!0)}).catch(e=>{})},selectArea(e){this.showMask=!1,this.$set(this.showAddr,2,{code:e.code,name:e.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name,"全市"===e.name?"":e.name]),e.startProvince=this.showAddr[0].name,e.startCity=this.showAddr[1].name,this.setHistory(e)},setHistory(data){if(n.default.get("mCityHistoryList")){let e=n.default.get("mCityHistoryList");e.some(e=>e.code===data.code)||(e.length>=4&&e.splice(3,1),e.unshift(data)),n.default.set("mCityHistoryList",e)}else n.default.set("mCityHistoryList",[data])},beforeEnter(e){e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter(e){e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px"},leave(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave(e){e.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},r=(o(204),o(0)),component=Object(r.a)(c,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?o("div",{staticClass:" heightTran"},[o("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[o("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("历史城市")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.list,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(o){return e.selectedHis(t)}}},[e._v(e._s("全市"===t.name?t.name1:t.name))])])}),0),e._v(" "),o("div",{staticClass:"flex_a"},[e.showAddr[0].show?o("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("选择城市")]):o("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(t){return e.back()}}},[e._v("返回上一线")]),e._v(" "),o("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[e._v(e._s(e.showAddr[0].name)+e._s(e.showAddr[1].name)+e._s("全市"===e.showAddr[2].name?"":e.showAddr[2].name))]),e._v(" "),o("div",{staticClass:"flex_1"})]),e._v(" "),e.showAddr[0].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.$store.state.m.provinceList,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectProvince(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[1].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.cityList,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectCity(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[2].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.areaList,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[2].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectArea(t)}}},[e._v(e._s(t.name))])])}),0):e._e()])]):e._e()]),e._v(" "),o("div",{class:[e.showMask?"mask2":""],style:{top:e.top},on:{click:function(t){return e.closeMask()}}})],1)},[],!1,null,"0b6ec86c",null);t.a=component.exports},203:function(e,t,o){"use strict";o.r(t);t.default={get:function(e){var t=window.localStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set:function(e,data){return window.localStorage.setItem(e,window.JSON.stringify(data))},remove:function(e){return window.localStorage.removeItem(e)},get_s:function(e){var t=window.sessionStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set_s:function(e,data){return window.sessionStorage.setItem(e,window.JSON.stringify(data))},remove_s:function(e){return window.sessionStorage.removeItem(e)}}},204:function(e,t,o){"use strict";var n=o(186);o.n(n).a},205:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".code_box[data-v-0b6ec86c]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-0b6ec86c]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-0b6ec86c]{border:1px solid #54a7ff;color:#54a7ff;background-color:rgba(84,167,255,.5)}.code_item_no_selected[data-v-0b6ec86c]{border:1px solid #999}.heightTran[data-v-0b6ec86c]{transition:all .2s;position:absolute;top:0;width:100%;height:8.3rem;z-index:100}",""])},222:function(e,t,o){var content=o(298);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(3).default)("0257c57a",content,!0,{sourceMap:!1})},223:function(e,t,o){var content=o(300);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(3).default)("2783d44c",content,!0,{sourceMap:!1})},224:function(e,t,o){var content=o(302);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(3).default)("1db8a13e",content,!0,{sourceMap:!1})},248:function(e,t,o){"use strict";var n={name:"Screen",props:{top:{type:String,default:"0"},form:{type:String,default:""}},data:()=>({showMask:!1,AF0491801Code:"",AF0491802Code:"",AF0491803Code:"",AF009Code:"",AF018Code:""}),methods:{success(){this.showMask=!1,this.$emit("setArea",{AF0491801Code:this.AF0491801Code,AF0491802Code:this.AF0491802Code,AF0491803Code:this.AF0491803Code,AF009Code:this.AF009Code,AF018Code:this.AF018Code})},selectAF018(e){this.AF018Code=e.code},selectAF009(e){this.AF009Code=e.code},selectAF0491803(e){this.AF0491803Code=e.code},selectAF0491802(e){this.AF0491802Code=e.code},selectAF0491801(e){this.AF0491801Code=e.code},selectRelease(e){this.showMask=!1,this.$emit("setArea",e)},beforeEnter(e){e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter(e){e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px"},leave(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave(e){e.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},c=(o(299),o(0)),component=Object(c.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?o("div",{staticClass:" heightTran"},[o("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},["huoyuan"===e.form?o("div",[o("div",{staticClass:"f-28 c-3 f_w_b"},[e._v("\n            货源类型\n          ")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20 b_b"},e._l(e.$store.state.m.AF0491801List,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.AF0491801Code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectAF0491801(t)}}},[e._v(e._s(t.name))])])}),0)]):e._e(),e._v(" "),"huoyuan"===e.form?o("div",[o("div",{staticClass:"f-28 c-3 f_w_b margin_t_20"},[e._v("\n            装货时间\n          ")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20 b_b"},e._l(e.$store.state.m.AF0491802List,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.AF0491802Code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectAF0491802(t)}}},[e._v(e._s(t.name))])])}),0)]):e._e(),e._v(" "),"huoyuan"===e.form?o("div",[o("div",{staticClass:"f-28 c-3 f_w_b margin_t_20"},[e._v("\n            用车类型\n          ")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20 b_b"},e._l(e.$store.state.m.AF0491803List,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.AF0491803Code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectAF0491803(t)}}},[e._v(e._s(t.name))])])}),0)]):e._e(),e._v(" "),"cheyuan"===e.form?o("div",[o("div",{staticClass:"f-28 c-3 f_w_b margin_t_20"},[e._v("\n            车辆类型\n          ")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.$store.state.m.AF018List,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.AF018Code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectAF018(t)}}},[e._v(e._s(t.name))])])}),0)]):e._e(),e._v(" "),o("div",[o("div",{staticClass:"f-28 c-3 f_w_b margin_t_20"},[e._v("\n            车辆规格\n          ")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.$store.state.m.AF009List,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.AF009Code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectAF009(t)}}},[e._v(e._s(t.name))])])}),0)]),e._v(" "),o("div",{staticClass:"button flex f_w f-36 margin_t_40",on:{click:function(t){return e.success()}}},[e._v("\n          确 认\n        ")])])]):e._e()]),e._v(" "),o("div",{class:[e.showMask?"mask2":""],style:{top:e.top},on:{click:function(t){return e.closeMask()}}})],1)},[],!1,null,"b821ae36",null);t.a=component.exports},249:function(e,t,o){"use strict";var n={name:"Release",props:{top:{type:String,default:"0"}},data:()=>({showMask:!1,list:[{name:"最新发布",value:"creditDesc"},{name:"价格最高",value:"weightPriceAsc"}]}),methods:{selectRelease(e){this.showMask=!1,this.$emit("setArea",e)},beforeEnter(e){e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter(e){e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px"},leave(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave(e){e.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},c=(o(297),o(0)),component=Object(c.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?o("div",{staticClass:" heightTran"},[o("div",{staticClass:"b_c_w padding_l_20 padding_r_20 f-26 height_100 o_f"},e._l(e.list,function(t,n){return o("div",{key:n,staticClass:"item flex",class:[n===e.list.length-1?"":"b_b"],style:{color:e.$store.state.m.huoyuan.orderBy.value===t.value?"#54A7FF":""},on:{click:function(o){return e.selectRelease(t)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])}),0)]):e._e()]),e._v(" "),o("div",{class:[e.showMask?"mask2":""],style:{top:e.top},on:{click:function(t){return e.closeMask()}}})],1)},[],!1,null,"b9df28fa",null);t.a=component.exports},297:function(e,t,o){"use strict";var n=o(222);o.n(n).a},298:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".item[data-v-b9df28fa]{height:1rem}.heightTran[data-v-b9df28fa]{transition:all .2s;position:absolute;top:0;width:100%;height:2.1rem;z-index:100}",""])},299:function(e,t,o){"use strict";var n=o(223);o.n(n).a},300:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".button[data-v-b821ae36]{height:.96rem;background:#54a7ff;border-radius:.16rem}.item[data-v-b821ae36]{height:1rem}.code_box[data-v-b821ae36]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-b821ae36]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-b821ae36]{border:1px solid #54a7ff;color:#54a7ff;background-color:rgba(84,167,255,.5)}.code_item_no_selected[data-v-b821ae36]{border:1px solid #999}.heightTran[data-v-b821ae36]{transition:all .2s;position:absolute;top:0;width:100%;z-index:100}",""])},301:function(e,t,o){"use strict";var n=o(224);o.n(n).a},302:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".item[data-v-74595fd2]{margin-top:.1rem;height:2.6rem;background:#fff;padding:0 .3rem .3rem}.item .title[data-v-74595fd2]{height:.88rem}.item img[data-v-74595fd2]{width:.21rem;height:.26rem}.l_h[data-v-74595fd2]{line-height:.65rem}.green[data-v-74595fd2]{background:#1eb002}.green[data-v-74595fd2],.red[data-v-74595fd2]{width:.18rem;height:.18rem;border-radius:.18rem}.red[data-v-74595fd2]{background:#f40}.divide[data-v-74595fd2]{position:absolute;bottom:-.16rem;left:.07rem;width:1px;height:.34rem;background:#d8d8d8}",""])},356:function(e,t,o){"use strict";o.r(t);var n=o(193),c=o(1),r=o(232),l=o.n(r),d=(o(233),o(249)),h=o(248);c.a.use(l.a);var _={name:"PageCheYuan",components:{Screen:h.a,Release:d.a,SelectAddress:n.a},data:()=>({isShowMask:[!1,!1,!1,!1],options:{pullDownRefresh:{txt:" "},pullUpLoad:{txt:{more:"",noMore:"没有更多数据了"}},scrollbar:!0}}),mounted(){this.$nextTick(()=>{this.$refs.scroll1.scrollTo(0,this.$store.state.m.cheyuan.scrollTo)})},methods:{clickRange(e){this.$router.push("/m/cheyuan/detail?id=".concat(e))},onPullingDown(){this.$store.commit("m/cheyuan/setData",{name:"currentPage",data:1}),this.$store.commit("m/cheyuan/setData",{name:"rangeList",data:[]}),this.getRangeList()},onPullingUp(){this.getRangeList()},getScroll(e){this.$store.commit("m/cheyuan/setData",{name:"scrollTo",data:e.y})},getRangeList(){console.log(this.$store.state.m.cheyuan.currentPage),console.log(this.$store.state.m.cheyuan.pages),this.$store.state.m.cheyuan.currentPage>this.$store.state.m.cheyuan.pages&&this.$refs.scroll1.forceUpdate();let e={currentPage:this.$store.state.m.cheyuan.currentPage,pageSize:20,startProvince:this.$store.state.m.cheyuan.startName[0],startCity:this.$store.state.m.cheyuan.startName[1],startArea:this.$store.state.m.cheyuan.startName[2],endProvince:this.$store.state.m.cheyuan.endName[0],endCity:this.$store.state.m.cheyuan.endName[1],endArea:this.$store.state.m.cheyuan.endName[2]};this.$store.dispatch("m/cheyuan/GETRANGELIST",{data:e,name:"rangeList"})},clickStart(){this.isShowMask=[!1,!1,!1,!1],this.$refs.selectEndAddress.showMask=!1,this.$refs.selectRelease.showMask=!1,this.$refs.selectScreen.showMask=!1,this.$set(this.isShowMask,0,!this.isShowMask[0]),this.$refs.selectStartAddress.showMask=!this.$refs.selectStartAddress.showMask},clickEnd(){this.isShowMask=[!1,!1,!1,!1],this.$refs.selectStartAddress.showMask=!1,this.$refs.selectRelease.showMask=!1,this.$refs.selectScreen.showMask=!1,this.$set(this.isShowMask,1,!this.isShowMask[1]),this.$refs.selectEndAddress.showMask=!this.$refs.selectEndAddress.showMask},clickRelease(){this.isShowMask=[!1,!1,!1,!1],this.$refs.selectStartAddress.showMask=!1,this.$refs.selectEndAddress.showMask=!1,this.$refs.selectScreen.showMask=!1,this.$set(this.isShowMask,2,!this.isShowMask[2]),this.$refs.selectRelease.showMask=!this.$refs.selectRelease.showMask},clickScreen(){this.isShowMask=[!1,!1,!1,!1],this.$refs.selectStartAddress.showMask=!1,this.$refs.selectEndAddress.showMask=!1,this.$refs.selectRelease.showMask=!1,this.$set(this.isShowMask,3,!this.isShowMask[3]),this.$refs.selectScreen.showMask=!this.$refs.selectScreen.showMask},getStartArea(data){this.$set(this.isShowMask,0,!1),data&&(this.$store.dispatch("m/cheyuan/SETDATA",{data:data,name:"startName"}),this.onPullingDown())},getEndArea(data){this.$set(this.isShowMask,1,!1),data&&(this.$store.dispatch("m/cheyuan/SETDATA",{data:data,name:"endName"}),this.onPullingDown())},getRelease(data){this.$set(this.isShowMask,2,!1),data&&(this.$store.commit("m/cheyuan/setData",{name:"orderBy",data:data}),this.onPullingDown())},getScreen(data){this.$set(this.isShowMask,3,!1),data&&this.onPullingDown()}}},f=(o(301),o(0)),component=Object(f.a)(_,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex_f flex_1"},[o("div",[o("div",{staticClass:"flex_a f-26 b_b page_view_top b_c_w"},[o("div",{staticClass:"flex_1 flex",class:[e.isShowMask[0]?"f_b":"c-3"],on:{click:function(t){return e.clickStart()}}},[o("span",{staticClass:"margin_r_10"},[e._v(e._s(""===e.$store.state.m.cheyuan.startName[0]?"全国":""===e.$store.state.m.cheyuan.startName[2]?e.$store.state.m.cheyuan.startName[1]:e.$store.state.m.cheyuan.startName[2]))]),e._v(" "),o("div",{class:[e.isShowMask[0]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})]),e._v(" "),o("div",{staticClass:"flex_1 flex",class:[!0===e.isShowMask[1]?"f_b":"c-3"],on:{click:function(t){return e.clickEnd()}}},[o("span",{staticClass:"margin_r_10"},[e._v(e._s(""===e.$store.state.m.cheyuan.endName[0]?"全国":""===e.$store.state.m.cheyuan.endName[2]?e.$store.state.m.cheyuan.endName[1]:e.$store.state.m.cheyuan.endName[2]))]),e._v(" "),o("div",{class:[e.isShowMask[1]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})]),e._v(" "),o("div",{staticClass:"flex_1 flex",on:{click:function(t){return e.clickRelease()}}},[o("span",{staticClass:"margin_r_10",class:[!0===e.isShowMask[2]?"f_b":"c-3"]},[e._v(e._s(e.$store.state.m.cheyuan.orderBy.name))]),e._v(" "),o("div",{class:[e.isShowMask[2]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})]),e._v(" "),o("div",{staticClass:"flex_1 flex",on:{click:function(t){return e.clickScreen()}}},[o("span",{staticClass:"margin_r_10",class:[!0===e.isShowMask[3]?"f_b":"c-3"]},[e._v("筛选")]),e._v(" "),o("div",{class:[e.isShowMask[3]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})])]),e._v(" "),o("div",{staticClass:"p_r"},[o("SelectAddress",{ref:"selectStartAddress",attrs:{top:"auto"},on:{setArea:e.getStartArea}}),e._v(" "),o("SelectAddress",{ref:"selectEndAddress",attrs:{top:"auto"},on:{setArea:e.getEndArea}}),e._v(" "),o("Release",{ref:"selectRelease",attrs:{top:"auto"},on:{setArea:e.getRelease}}),e._v(" "),o("screen",{ref:"selectScreen",attrs:{top:"auto",form:"cheyuan"},on:{setArea:e.getScreen}})],1)]),e._v(" "),0===e.$store.state.m.cheyuan.pages?o("div",{staticClass:"flex f-26 margin_t_40"},[e._v("\n    没有相关数据\n  ")]):e._e(),e._v(" "),o("cube-scroll",{ref:"scroll1",staticClass:"mScroll flex_1",attrs:{"scroll-events":["scroll-end"],data:e.$store.state.m.cheyuan.rangeList,options:e.options},on:{"pulling-down":e.onPullingDown,"pulling-up":e.onPullingUp,"scroll-end":e.getScroll}},e._l(e.$store.state.m.cheyuan.rangeList,function(t,n){return o("div",{key:n,staticClass:"item",on:{click:function(o){return e.clickRange(t.id)}}},[o("div",{staticClass:"title c-3 f-26 b_b flex_a"},[o("span",[e._v(e._s(t.goodsTypeName?t.goodsTypeName+" |":""))]),e._v(" "),o("span",{staticClass:"margin_l_10"},[e._v(e._s(t.goodsVolume?t.goodsVolume+"方 |":""))]),e._v(" "),o("span",{staticClass:"margin_l_10"},[e._v(e._s(t.goodsWeight?t.goodsWeight+"公斤":""))])]),e._v(" "),o("div",{staticClass:"flex_sb"},[o("div",{staticClass:"l_h"},[o("div",{staticClass:"flex_a p_r"},[o("div",{staticClass:"divide"}),e._v(" "),o("div",{staticClass:"green"}),e._v(" "),o("div",{staticClass:"f-32 f_w_b margin_l_20"},[e._v(e._s(t.startCity)+" "+e._s(t.startArea))])]),e._v(" "),o("div",{staticClass:"flex_a"},[o("div",{staticClass:"red"}),e._v(" "),o("div",{staticClass:"f-32 f_w_b margin_l_20"},[e._v(e._s(t.endCity)+" "+e._s(t.endArea))])])]),e._v(" "),o("div",{staticClass:"f_40 f-32"},[e._v("\n          ￥1325.00\n        ")])]),e._v(" "),o("div",{staticClass:"f-28 margin_t_20 flex_sb"},[o("div",{staticClass:"flex_a"},[o("img",{attrs:{src:"/m/huoyuan/huoyuandt_dinwei.png"}}),e._v(" "),o("span",{staticClass:"margin_l_10"},[e._v("距离您最近网点"),o("span",{staticClass:"f_40"},[e._v("6.5")]),e._v("公里")])]),e._v(" "),o("span",{staticClass:"c-9"},[e._v("22分钟前发布")])])])}),0)],1)},[],!1,null,"74595fd2",null);t.default=component.exports}}]);