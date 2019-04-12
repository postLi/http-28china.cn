exports.ids=[44,47],exports.modules={109:function(e,t,o){var content=o(122);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=o(3).default;e.exports.__inject__=function(e){n("eecd741e",content,!0,e)}},118:function(e,t,o){"use strict";var n=o(119),r={name:"SelectAddress",props:{top:{type:String,default:"0"}},data:()=>({showMask:!1,list:[],cityList:[],areaList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1},{code:"",name:"",show:!1}]}),watch:{showMask(e,t){n.default.get("mCityHistoryList")&&e&&(this.list=n.default.get("mCityHistoryList"))}},methods:{selectedHis(e){this.showMask=!1,this.$emit("setArea",[e.startProvince,e.startCity,"全市"===e.name?"":e.name])},back(){this.showAddr[2].show?(this.$set(this.showAddr,2,{code:"",name:"",show:!1}),this.$set(this.showAddr[1],"show",!0)):this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince(e){"全国"===e.name?(this.$emit("setArea",["","",""]),this.showMask=!1):this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(t=>{let data=t.data;200===data.status&&(this.cityList=data.data&&data.data||[],this.showAddr=[{code:e.code,name:e.name,show:!1},{code:"",name:"",show:!0},{code:"",name:"",show:!1}])}).catch(e=>{})},selectCity(e){this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(t=>{let data=t.data;200===data.status&&(data.data?data.data.unshift({code:e.code,name:"全市",name1:e.name,parentCode:e.code}):data.data=[{code:e.code,name:"全市",name1:e.name,parentCode:e.code}],this.areaList=data.data&&data.data||[],this.$set(this.showAddr,1,{code:e.code,name:e.name,show:!1}),this.showAddr[2].show=!0)}).catch(e=>{})},selectArea(e){this.showMask=!1,this.$set(this.showAddr,2,{code:e.code,name:e.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name,"全市"===e.name?"":e.name]),e.startProvince=this.showAddr[0].name,e.startCity=this.showAddr[1].name,this.setHistory(e)},setHistory(data){if(n.default.get("mCityHistoryList")){let e=n.default.get("mCityHistoryList");e.some(e=>e.code===data.code)||(e.length>=4&&e.splice(3,1),e.unshift(data)),n.default.set("mCityHistoryList",e)}else n.default.set("mCityHistoryList",[data])},beforeEnter(e){e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter(e){e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px"},leave(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave(e){e.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},l=o(0);var component=Object(l.a)(r,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?o("div",{staticClass:" heightTran"},[o("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[o("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("历史城市")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.list,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(o){return e.selectedHis(t)}}},[e._v(e._s("全市"===t.name?t.name1:t.name))])])}),0),e._v(" "),o("div",{staticClass:"flex_a"},[e.showAddr[0].show?o("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("选择城市")]):o("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(t){return e.back()}}},[e._v("返回上一线")]),e._v(" "),o("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[e._v(e._s(e.showAddr[0].name)+e._s(e.showAddr[1].name)+e._s("全市"===e.showAddr[2].name?"":e.showAddr[2].name))]),e._v(" "),o("div",{staticClass:"flex_1"})]),e._v(" "),e.showAddr[0].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.$store.state.m.provinceList,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectProvince(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[1].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.cityList,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectCity(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[2].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.areaList,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[2].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectArea(t)}}},[e._v(e._s(t.name))])])}),0):e._e()])]):e._e()]),e._ssrNode(" <div"+e._ssrClass(null,[e.showMask?"mask2":""])+e._ssrStyle(null,{top:e.top},null)+" data-v-0b6ec86c></div>")],2)},[],!1,function(e){var t=o(121);t.__inject__&&t.__inject__(e)},"0b6ec86c","03e67ddf");t.a=component.exports},119:function(e,t,o){"use strict";o.r(t);t.default={get:function(e){var t=window.localStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set:function(e,data){return window.localStorage.setItem(e,window.JSON.stringify(data))},remove:function(e){return window.localStorage.removeItem(e)},get_s:function(e){var t=window.sessionStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set_s:function(e,data){return window.sessionStorage.setItem(e,window.JSON.stringify(data))},remove_s:function(e){return window.sessionStorage.removeItem(e)}}},121:function(e,t,o){"use strict";o.r(t);var n=o(109),r=o.n(n);for(var l in n)"default"!==l&&function(e){o.d(t,e,function(){return n[e]})}(l);t.default=r.a},122:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".code_box[data-v-0b6ec86c]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-0b6ec86c]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-0b6ec86c]{border:1px solid #54a7ff;color:#54a7ff;background-color:rgba(84,167,255,.5)}.code_item_no_selected[data-v-0b6ec86c]{border:1px solid #999}.heightTran[data-v-0b6ec86c]{transition:all .2s;position:absolute;top:0;width:100%;height:8.3rem;z-index:100}",""])},123:function(e,t,o){var content=o(134);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals),o(3).default("407d98b2",content,!0)},124:function(e,t,o){var content=o(169);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=o(3).default;e.exports.__inject__=function(e){n("0257c57a",content,!0,e)}},125:function(e,t,o){var content=o(171);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=o(3).default;e.exports.__inject__=function(e){n("2783d44c",content,!0,e)}},134:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".cube-scroll-wrapper{position:relative;height:100%;overflow:hidden}.cube-scroll-list-wrapper{overflow:hidden}.cube-pulldown-wrapper{position:absolute;width:100%;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:all;transition:all}.cube-pulldown-wrapper .before-trigger{height:54px;line-height:0;padding-top:6px}.cube-pulldown-wrapper .after-trigger .loading{padding:8px 0}.cube-pulldown-wrapper .after-trigger .cube-pulldown-loaded{padding:12px 0}.cube-pullup-wrapper{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cube-pullup-wrapper .before-trigger{padding:22px 0;min-height:1em}.cube-pullup-wrapper .after-trigger{padding:19px 0}.cube-scroll-content{position:relative;z-index:1}.cube-scroll-item{height:60px;line-height:60px;font-size:18px;padding-left:20px}.cube-loading{font-size:24px}.cube-loading-spinners{position:relative;display:block;width:1em;height:1em}.cube-loading-spinner{position:absolute;left:44.5%;top:37%;width:2px;height:25%;border-radius:50%/20%;opacity:.25;background-color:currentColor;-webkit-animation:spinner-fade 1s linear infinite;animation:spinner-fade 1s linear infinite}.cube-loading-spinner:first-child{-webkit-animation-delay:0s;animation-delay:0s;-webkit-transform:rotate(-150deg) translateY(-150%);transform:rotate(-150deg) translateY(-150%)}.cube-loading-spinner:nth-child(2){-webkit-animation-delay:.083333333333333s;animation-delay:.083333333333333s;-webkit-transform:rotate(-120deg) translateY(-150%);transform:rotate(-120deg) translateY(-150%)}.cube-loading-spinner:nth-child(3){-webkit-animation-delay:.166666666666667s;animation-delay:.166666666666667s;-webkit-transform:rotate(-90deg) translateY(-150%);transform:rotate(-90deg) translateY(-150%)}.cube-loading-spinner:nth-child(4){-webkit-animation-delay:.25s;animation-delay:.25s;-webkit-transform:rotate(-60deg) translateY(-150%);transform:rotate(-60deg) translateY(-150%)}.cube-loading-spinner:nth-child(5){-webkit-animation-delay:.333333333333333s;animation-delay:.333333333333333s;-webkit-transform:rotate(-30deg) translateY(-150%);transform:rotate(-30deg) translateY(-150%)}.cube-loading-spinner:nth-child(6){-webkit-animation-delay:.416666666666667s;animation-delay:.416666666666667s;-webkit-transform:rotate(0deg) translateY(-150%);transform:rotate(0deg) translateY(-150%)}.cube-loading-spinner:nth-child(7){-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-transform:rotate(30deg) translateY(-150%);transform:rotate(30deg) translateY(-150%)}.cube-loading-spinner:nth-child(8){-webkit-animation-delay:.583333333333333s;animation-delay:.583333333333333s;-webkit-transform:rotate(60deg) translateY(-150%);transform:rotate(60deg) translateY(-150%)}.cube-loading-spinner:nth-child(9){-webkit-animation-delay:.666666666666667s;animation-delay:.666666666666667s;-webkit-transform:rotate(90deg) translateY(-150%);transform:rotate(90deg) translateY(-150%)}.cube-loading-spinner:nth-child(10){-webkit-animation-delay:.75s;animation-delay:.75s;-webkit-transform:rotate(120deg) translateY(-150%);transform:rotate(120deg) translateY(-150%)}.cube-loading-spinner:nth-child(11){-webkit-animation-delay:.833333333333333s;animation-delay:.833333333333333s;-webkit-transform:rotate(150deg) translateY(-150%);transform:rotate(150deg) translateY(-150%)}.cube-loading-spinner:nth-child(12){-webkit-animation-delay:.916666666666667s;animation-delay:.916666666666667s;-webkit-transform:rotate(180deg) translateY(-150%);transform:rotate(180deg) translateY(-150%)}@-webkit-keyframes spinner-fade{0%{opacity:.85}50%{opacity:.25}to{opacity:.25}}@keyframes spinner-fade{0%{opacity:.85}50%{opacity:.25}to{opacity:.25}}",""])},150:function(e,t,o){var content=o(233);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=o(3).default;e.exports.__inject__=function(e){n("5e58c167",content,!0,e)}},158:function(e,t,o){"use strict";var n={name:"Release",props:{top:{type:String,default:"0"}},data:()=>({showMask:!1,list:[{name:"最新发布",value:"creditDesc"},{name:"价格最高",value:"weightPriceAsc"}]}),methods:{selectRelease(e){this.showMask=!1,this.$emit("setArea",e)},beforeEnter(e){e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter(e){e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px"},leave(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave(e){e.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},r=o(0);var component=Object(r.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?o("div",{staticClass:" heightTran"},[o("div",{staticClass:"b_c_w padding_l_20 padding_r_20 f-26 height_100 o_f"},e._l(e.list,function(t,n){return o("div",{key:n,staticClass:"item flex",class:[n===e.list.length-1?"":"b_b"],style:{color:e.$store.state.m.huoyuan.orderBy.value===t.value?"#54A7FF":""},on:{click:function(o){return e.selectRelease(t)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])}),0)]):e._e()]),e._ssrNode(" <div"+e._ssrClass(null,[e.showMask?"mask2":""])+e._ssrStyle(null,{top:e.top},null)+" data-v-b9df28fa></div>")],2)},[],!1,function(e){var t=o(168);t.__inject__&&t.__inject__(e)},"b9df28fa","474c6a4e");t.a=component.exports},159:function(e,t,o){"use strict";var n={name:"Screen",props:{top:{type:String,default:"0"},form:{type:String,default:""}},data:()=>({showMask:!1,AF0491801Code:"",AF0491802Code:"",AF0491803Code:"",AF009Code:"",AF018Code:""}),methods:{success(){this.showMask=!1,this.$emit("setArea",{AF0491801Code:this.AF0491801Code,AF0491802Code:this.AF0491802Code,AF0491803Code:this.AF0491803Code,AF009Code:this.AF009Code,AF018Code:this.AF018Code})},selectAF018(e){this.AF018Code=e.code},selectAF009(e){this.AF009Code=e.code},selectAF0491803(e){this.AF0491803Code=e.code},selectAF0491802(e){this.AF0491802Code=e.code},selectAF0491801(e){this.AF0491801Code=e.code},selectRelease(e){this.showMask=!1,this.$emit("setArea",e)},beforeEnter(e){e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter(e){e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px"},leave(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave(e){e.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},r=o(0);var component=Object(r.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?o("div",{staticClass:" heightTran"},[o("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},["huoyuan"===e.form?o("div",[o("div",{staticClass:"f-28 c-3 f_w_b"},[e._v("\n            货源类型\n          ")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20 b_b"},e._l(e.$store.state.m.AF0491801List,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.AF0491801Code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectAF0491801(t)}}},[e._v(e._s(t.name))])])}),0)]):e._e(),e._v(" "),"huoyuan"===e.form?o("div",[o("div",{staticClass:"f-28 c-3 f_w_b margin_t_20"},[e._v("\n            装货时间\n          ")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20 b_b"},e._l(e.$store.state.m.AF0491802List,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.AF0491802Code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectAF0491802(t)}}},[e._v(e._s(t.name))])])}),0)]):e._e(),e._v(" "),"huoyuan"===e.form?o("div",[o("div",{staticClass:"f-28 c-3 f_w_b margin_t_20"},[e._v("\n            用车类型\n          ")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20 b_b"},e._l(e.$store.state.m.AF0491803List,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.AF0491803Code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectAF0491803(t)}}},[e._v(e._s(t.name))])])}),0)]):e._e(),e._v(" "),"cheyuan"===e.form?o("div",[o("div",{staticClass:"f-28 c-3 f_w_b margin_t_20"},[e._v("\n            车辆类型\n          ")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.$store.state.m.AF018List,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.AF018Code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectAF018(t)}}},[e._v(e._s(t.name))])])}),0)]):e._e(),e._v(" "),o("div",[o("div",{staticClass:"f-28 c-3 f_w_b margin_t_20"},[e._v("\n            车辆规格\n          ")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.$store.state.m.AF009List,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.AF009Code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectAF009(t)}}},[e._v(e._s(t.name))])])}),0)]),e._v(" "),o("div",{staticClass:"button flex f_w f-36 margin_t_40",on:{click:function(t){return e.success()}}},[e._v("\n          确 认\n        ")])])]):e._e()]),e._ssrNode(" <div"+e._ssrClass(null,[e.showMask?"mask2":""])+e._ssrStyle(null,{top:e.top},null)+" data-v-b821ae36></div>")],2)},[],!1,function(e){var t=o(170);t.__inject__&&t.__inject__(e)},"b821ae36","0d126016");t.a=component.exports},168:function(e,t,o){"use strict";o.r(t);var n=o(124),r=o.n(n);for(var l in n)"default"!==l&&function(e){o.d(t,e,function(){return n[e]})}(l);t.default=r.a},169:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".item[data-v-b9df28fa]{height:1rem}.heightTran[data-v-b9df28fa]{transition:all .2s;position:absolute;top:0;width:100%;height:2.1rem;z-index:100}",""])},170:function(e,t,o){"use strict";o.r(t);var n=o(125),r=o.n(n);for(var l in n)"default"!==l&&function(e){o.d(t,e,function(){return n[e]})}(l);t.default=r.a},171:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".button[data-v-b821ae36]{height:.96rem;background:#54a7ff;border-radius:.16rem}.item[data-v-b821ae36]{height:1rem}.code_box[data-v-b821ae36]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-b821ae36]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-b821ae36]{border:1px solid #54a7ff;color:#54a7ff;background-color:rgba(84,167,255,.5)}.code_item_no_selected[data-v-b821ae36]{border:1px solid #999}.heightTran[data-v-b821ae36]{transition:all .2s;position:absolute;top:0;width:100%;z-index:100}",""])},232:function(e,t,o){"use strict";o.r(t);var n=o(150),r=o.n(n);for(var l in n)"default"!==l&&function(e){o.d(t,e,function(){return n[e]})}(l);t.default=r.a},233:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".item[data-v-4085ce12]{margin-top:.1rem;height:2.6rem;background:#fff;padding:0 .3rem .3rem}.item .title[data-v-4085ce12]{height:.88rem}.item img[data-v-4085ce12]{width:.21rem;height:.26rem}.l_h[data-v-4085ce12]{line-height:.65rem}.green[data-v-4085ce12]{background:#1eb002}.green[data-v-4085ce12],.red[data-v-4085ce12]{width:.18rem;height:.18rem;border-radius:.18rem}.red[data-v-4085ce12]{background:#f40}.divide[data-v-4085ce12]{position:absolute;bottom:-.16rem;left:.07rem;width:1px;height:.34rem;background:#d8d8d8}",""])},286:function(e,t,o){"use strict";o.r(t);var n=o(118),r=o(1),l=o.n(r),d=o(101),c=o.n(d),h=(o(123),o(158)),_=o(159);l.a.use(c.a);var f={name:"PageHuoYuan",components:{Screen:_.a,Release:h.a,SelectAddress:n.a},data:()=>({isShowMask:[!1,!1,!1,!1],options:{pullDownRefresh:{txt:" "},pullUpLoad:{txt:{more:"",noMore:"没有更多数据了"}},scrollbar:!0}}),mounted(){this.$nextTick(()=>{this.$refs.scroll1.scrollTo(0,this.$store.state.m.huoyuan.scrollTo)})},methods:{clickRange(e){this.$router.push(`/m/huoyuan/detail?id=${e}`)},onPullingDown(){this.$store.commit("m/huoyuan/setData",{name:"currentPage",data:1}),this.$store.commit("m/huoyuan/setData",{name:"rangeList",data:[]}),this.getRangeList()},onPullingUp(){this.getRangeList()},getScroll(e){this.$store.commit("m/huoyuan/setData",{name:"scrollTo",data:e.y})},getRangeList(){console.log(this.$store.state.m.huoyuan.currentPage),console.log(this.$store.state.m.huoyuan.pages),this.$store.state.m.huoyuan.currentPage>this.$store.state.m.huoyuan.pages&&this.$refs.scroll1.forceUpdate();let e={currentPage:this.$store.state.m.huoyuan.currentPage,pageSize:20,startProvince:this.$store.state.m.huoyuan.startName[0],startCity:this.$store.state.m.huoyuan.startName[1],startArea:this.$store.state.m.huoyuan.startName[2],endProvince:this.$store.state.m.huoyuan.endName[0],endCity:this.$store.state.m.huoyuan.endName[1],endArea:this.$store.state.m.huoyuan.endName[2]};this.$store.dispatch("m/huoyuan/GETRANGELIST",{data:e,name:"rangeList"})},clickStart(){this.isShowMask=[!1,!1,!1,!1],this.$refs.selectEndAddress.showMask=!1,this.$refs.selectRelease.showMask=!1,this.$refs.selectScreen.showMask=!1,this.$set(this.isShowMask,0,!this.isShowMask[0]),this.$refs.selectStartAddress.showMask=!this.$refs.selectStartAddress.showMask},clickEnd(){this.isShowMask=[!1,!1,!1,!1],this.$refs.selectStartAddress.showMask=!1,this.$refs.selectRelease.showMask=!1,this.$refs.selectScreen.showMask=!1,this.$set(this.isShowMask,1,!this.isShowMask[1]),this.$refs.selectEndAddress.showMask=!this.$refs.selectEndAddress.showMask},clickRelease(){this.isShowMask=[!1,!1,!1,!1],this.$refs.selectStartAddress.showMask=!1,this.$refs.selectEndAddress.showMask=!1,this.$refs.selectScreen.showMask=!1,this.$set(this.isShowMask,2,!this.isShowMask[2]),this.$refs.selectRelease.showMask=!this.$refs.selectRelease.showMask},clickScreen(){this.isShowMask=[!1,!1,!1,!1],this.$refs.selectStartAddress.showMask=!1,this.$refs.selectEndAddress.showMask=!1,this.$refs.selectRelease.showMask=!1,this.$set(this.isShowMask,3,!this.isShowMask[3]),this.$refs.selectScreen.showMask=!this.$refs.selectScreen.showMask},getStartArea(data){this.$set(this.isShowMask,0,!1),data&&(this.$store.dispatch("m/huoyuan/SETDATA",{data:data,name:"startName"}),this.onPullingDown())},getEndArea(data){this.$set(this.isShowMask,1,!1),data&&(this.$store.dispatch("m/huoyuan/SETDATA",{data:data,name:"endName"}),this.onPullingDown())},getRelease(data){this.$set(this.isShowMask,2,!1),data&&(this.$store.commit("m/huoyuan/setData",{name:"orderBy",data:data}),this.onPullingDown())},getScreen(data){this.$set(this.isShowMask,3,!1),data&&this.onPullingDown()}}},m=o(0);var component=Object(m.a)(f,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex_f flex_1"},[e._ssrNode("<div data-v-4085ce12>","</div>",[e._ssrNode('<div class="flex_a f-26 b_b page_view_top b_c_w" data-v-4085ce12><div'+e._ssrClass("flex_1 flex",[e.isShowMask[0]?"f_b":"c-3"])+' data-v-4085ce12><span class="margin_r_10" data-v-4085ce12>'+e._ssrEscape(e._s(""===e.$store.state.m.huoyuan.startName[0]?"全国":""===e.$store.state.m.huoyuan.startName[2]?e.$store.state.m.huoyuan.startName[1]:e.$store.state.m.huoyuan.startName[2]))+"</span> <div"+e._ssrClass(null,[e.isShowMask[0]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+" data-v-4085ce12></div></div> <div"+e._ssrClass("flex_1 flex",[!0===e.isShowMask[1]?"f_b":"c-3"])+' data-v-4085ce12><span class="margin_r_10" data-v-4085ce12>'+e._ssrEscape(e._s(""===e.$store.state.m.huoyuan.endName[0]?"全国":""===e.$store.state.m.huoyuan.endName[2]?e.$store.state.m.huoyuan.endName[1]:e.$store.state.m.huoyuan.endName[2]))+"</span> <div"+e._ssrClass(null,[e.isShowMask[1]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+' data-v-4085ce12></div></div> <div class="flex_1 flex" data-v-4085ce12><span'+e._ssrClass("margin_r_10",[!0===e.isShowMask[2]?"f_b":"c-3"])+" data-v-4085ce12>"+e._ssrEscape(e._s(e.$store.state.m.huoyuan.orderBy.name))+"</span> <div"+e._ssrClass(null,[e.isShowMask[2]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+' data-v-4085ce12></div></div> <div class="flex_1 flex" data-v-4085ce12><span'+e._ssrClass("margin_r_10",[!0===e.isShowMask[3]?"f_b":"c-3"])+" data-v-4085ce12>筛选</span> <div"+e._ssrClass(null,[e.isShowMask[3]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+" data-v-4085ce12></div></div></div> "),e._ssrNode('<div class="p_r" data-v-4085ce12>',"</div>",[o("SelectAddress",{ref:"selectStartAddress",attrs:{top:"auto"},on:{setArea:e.getStartArea}}),e._ssrNode(" "),o("SelectAddress",{ref:"selectEndAddress",attrs:{top:"auto"},on:{setArea:e.getEndArea}}),e._ssrNode(" "),o("Release",{ref:"selectRelease",attrs:{top:"auto"},on:{setArea:e.getRelease}}),e._ssrNode(" "),o("screen",{ref:"selectScreen",attrs:{top:"auto",form:"huoyuan"},on:{setArea:e.getScreen}})],2)],2),e._ssrNode(" "+(0===e.$store.state.m.huoyuan.pages?'<div class="flex f-26 margin_t_40" data-v-4085ce12>\n    没有相关数据\n  </div>':"\x3c!----\x3e")+" "),o("cube-scroll",{ref:"scroll1",staticClass:"mScroll flex_1",attrs:{"scroll-events":["scroll-end"],data:e.$store.state.m.huoyuan.rangeList,options:e.options},on:{"pulling-down":e.onPullingDown,"pulling-up":e.onPullingUp,"scroll-end":e.getScroll}},e._l(e.$store.state.m.huoyuan.rangeList,function(t,n){return o("div",{key:n,staticClass:"item",on:{click:function(o){return e.clickRange(t.id)}}},[o("div",{staticClass:"title c-3 f-26 b_b flex_a"},[o("span",[e._v(e._s(t.goodsTypeName?t.goodsTypeName+" |":""))]),e._v(" "),o("span",{staticClass:"margin_l_10"},[e._v(e._s(t.goodsVolume?t.goodsVolume+"方 |":""))]),e._v(" "),o("span",{staticClass:"margin_l_10"},[e._v(e._s(t.goodsWeight?t.goodsWeight+"公斤":""))])]),e._v(" "),o("div",{staticClass:"flex_sb"},[o("div",{staticClass:"l_h"},[o("div",{staticClass:"flex_a p_r"},[o("div",{staticClass:"divide"}),e._v(" "),o("div",{staticClass:"green"}),e._v(" "),o("div",{staticClass:"f-32 f_w_b margin_l_20"},[e._v(e._s(t.startCity)+" "+e._s(t.startArea))])]),e._v(" "),o("div",{staticClass:"flex_a"},[o("div",{staticClass:"red"}),e._v(" "),o("div",{staticClass:"f-32 f_w_b margin_l_20"},[e._v(e._s(t.endCity)+" "+e._s(t.endArea))])])]),e._v(" "),o("div",{staticClass:"f_40 f-32"},[e._v("\n          ￥1325.00\n        ")])]),e._v(" "),o("div",{staticClass:"f-28 margin_t_20 flex_sb"},[o("div",{staticClass:"flex_a"},[o("img",{attrs:{src:"/m/huoyuan/huoyuandt_dinwei.png"}}),e._v(" "),o("span",{staticClass:"margin_l_10"},[e._v("距离您最近网点"),o("span",{staticClass:"f_40"},[e._v("6.5")]),e._v("公里")])]),e._v(" "),o("span",{staticClass:"c-9"},[e._v("22分钟前发布")])])])}),0)],2)},[],!1,function(e){var t=o(232);t.__inject__&&t.__inject__(e)},"4085ce12","0e0e706e");t.default=component.exports}};
//# sourceMappingURL=311576200e44d5c5415d.js.map