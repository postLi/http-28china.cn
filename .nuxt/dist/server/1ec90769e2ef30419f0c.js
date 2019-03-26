exports.ids=[48,44],exports.modules={112:function(t,e,n){"use strict";n.r(e);e.default={get:function(t){var e=window.localStorage.getItem(t);return null===e?null:window.JSON.parse(e)},set:function(t,data){return window.localStorage.setItem(t,window.JSON.stringify(data))},remove:function(t){return window.localStorage.removeItem(t)},get_s:function(t){var e=window.sessionStorage.getItem(t);return null===e?null:window.JSON.parse(e)},set_s:function(t,data){return window.sessionStorage.setItem(t,window.JSON.stringify(data))},remove_s:function(t){return window.sessionStorage.removeItem(t)}}},115:function(t,e,n){"use strict";var o=n(112),r={name:"SelectAddress",props:{top:{type:String,default:"0"}},data:()=>({showMask:!1,list:[],cityList:[],areaList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1},{code:"",name:"",show:!1}]}),watch:{showMask(t,e){o.default.get("mCityHistoryList")&&t&&(this.list=o.default.get("mCityHistoryList"))}},methods:{selectedHis(t){this.showMask=!1,this.$emit("setArea",[t.startProvince,t.startCity,"全市"===t.name?"":t.name])},back(){this.showAddr[2].show?(this.$set(this.showAddr,2,{code:"",name:"",show:!1}),this.$set(this.showAddr[1],"show",!0)):this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince(t){"全国"===t.name?(this.$emit("setArea",["","",""]),this.showMask=!1):this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t.code).then(e=>{let data=e.data;200===data.status&&(this.cityList=data.data&&data.data||[],this.showAddr=[{code:t.code,name:t.name,show:!1},{code:"",name:"",show:!0},{code:"",name:"",show:!1}])}).catch(t=>{})},selectCity(t){this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t.code).then(e=>{let data=e.data;200===data.status&&(data.data?data.data.unshift({code:t.code,name:"全市",name1:t.name,parentCode:t.code}):data.data=[{code:t.code,name:"全市",name1:t.name,parentCode:t.code}],this.areaList=data.data&&data.data||[],this.$set(this.showAddr,1,{code:t.code,name:t.name,show:!1}),this.showAddr[2].show=!0)}).catch(t=>{})},selectArea(t){this.showMask=!1,this.$set(this.showAddr,2,{code:t.code,name:t.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name,"全市"===t.name?"":t.name]),t.startProvince=this.showAddr[0].name,t.startCity=this.showAddr[1].name,this.setHistory(t)},setHistory(data){if(o.default.get("mCityHistoryList")){let t=o.default.get("mCityHistoryList");t.some(t=>t.code===data.code)||(t.length>=4&&t.splice(3,1),t.unshift(data)),o.default.set("mCityHistoryList",t)}else o.default.set("mCityHistoryList",[data])},beforeEnter(t){t.style.height="0"},enter(t){0!==t.scrollHeight?t.style.height=t.scrollHeight+"px":t.style.height=""},afterEnter(t){t.style.height=""},beforeLeave(t){t.style.height=t.scrollHeight+"px"},leave(t){0!==t.scrollHeight&&(t.style.height=0)},afterLeave(t){t.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},d=n(0);var component=Object(d.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},[t.showMask?n("div",{staticClass:" heightTran"},[n("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[n("div",{staticClass:"c-3 flex_1 f_w_b"},[t._v("历史城市")]),t._v(" "),n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.list,function(e,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(n){return t.selectedHis(e)}}},[t._v(t._s("全市"===e.name?e.name1:e.name))])])}),0),t._v(" "),n("div",{staticClass:"flex_a"},[t.showAddr[0].show?n("div",{staticClass:"c-3 flex_1 f_w_b"},[t._v("选择城市")]):n("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(e){return t.back()}}},[t._v("返回上一线")]),t._v(" "),n("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[t._v(t._s(t.showAddr[0].name)+t._s(t.showAddr[1].name)+t._s("全市"===t.showAddr[2].name?"":t.showAddr[2].name))]),t._v(" "),n("div",{staticClass:"flex_1"})]),t._v(" "),t.showAddr[0].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.$store.state.m.provinceList,function(e,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return t.selectProvince(e)}}},[t._v(t._s(e.name))])])}),0):t._e(),t._v(" "),t.showAddr[1].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.cityList,function(e,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return t.selectCity(e)}}},[t._v(t._s(e.name))])])}),0):t._e(),t._v(" "),t.showAddr[2].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.areaList,function(e,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[2].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return t.selectArea(e)}}},[t._v(t._s(e.name))])])}),0):t._e()])]):t._e()]),t._ssrNode(" <div"+t._ssrClass(null,[t.showMask?"mask2":""])+t._ssrStyle(null,{top:t.top},null)+" data-v-7f01b790></div>")],2)},[],!1,function(t){var e=n(118);e.__inject__&&e.__inject__(t)},"7f01b790","03e67ddf");e.a=component.exports},118:function(t,e,n){"use strict";n.r(e);var o=n(99),r=n.n(o);for(var d in o)"default"!==d&&function(t){n.d(e,t,function(){return o[t]})}(d);e.default=r.a},119:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".code_box[data-v-7f01b790]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-7f01b790]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-7f01b790]{border:1px solid #2fb301;color:#2fb301;background-color:rgba(47,179,1,.5)}.code_item_no_selected[data-v-7f01b790]{border:1px solid #999}.heightTran[data-v-7f01b790]{transition:all .2s;position:absolute;top:0;width:100%;height:8.3rem;z-index:100}.mask2[data-v-7f01b790]{position:fixed;left:0;z-index:13;width:100%;height:100%;background-color:rgba(0,0,0,.4)}",""])},130:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("44988e5a",content,!0,t)}},134:function(t,e,n){var content=n(148);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),n(3).default("407d98b2",content,!0)},148:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".cube-scroll-wrapper{position:relative;height:100%;overflow:hidden}.cube-scroll-list-wrapper{overflow:hidden}.cube-pulldown-wrapper{position:absolute;width:100%;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:all;transition:all}.cube-pulldown-wrapper .before-trigger{height:54px;line-height:0;padding-top:6px}.cube-pulldown-wrapper .after-trigger .loading{padding:8px 0}.cube-pulldown-wrapper .after-trigger .cube-pulldown-loaded{padding:12px 0}.cube-pullup-wrapper{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cube-pullup-wrapper .before-trigger{padding:22px 0;min-height:1em}.cube-pullup-wrapper .after-trigger{padding:19px 0}.cube-scroll-content{position:relative;z-index:1}.cube-scroll-item{height:60px;line-height:60px;font-size:18px;padding-left:20px}.cube-loading{font-size:24px}.cube-loading-spinners{position:relative;display:block;width:1em;height:1em}.cube-loading-spinner{position:absolute;left:44.5%;top:37%;width:2px;height:25%;border-radius:50%/20%;opacity:.25;background-color:currentColor;-webkit-animation:spinner-fade 1s linear infinite;animation:spinner-fade 1s linear infinite}.cube-loading-spinner:first-child{-webkit-animation-delay:0s;animation-delay:0s;-webkit-transform:rotate(-150deg) translateY(-150%);transform:rotate(-150deg) translateY(-150%)}.cube-loading-spinner:nth-child(2){-webkit-animation-delay:.083333333333333s;animation-delay:.083333333333333s;-webkit-transform:rotate(-120deg) translateY(-150%);transform:rotate(-120deg) translateY(-150%)}.cube-loading-spinner:nth-child(3){-webkit-animation-delay:.166666666666667s;animation-delay:.166666666666667s;-webkit-transform:rotate(-90deg) translateY(-150%);transform:rotate(-90deg) translateY(-150%)}.cube-loading-spinner:nth-child(4){-webkit-animation-delay:.25s;animation-delay:.25s;-webkit-transform:rotate(-60deg) translateY(-150%);transform:rotate(-60deg) translateY(-150%)}.cube-loading-spinner:nth-child(5){-webkit-animation-delay:.333333333333333s;animation-delay:.333333333333333s;-webkit-transform:rotate(-30deg) translateY(-150%);transform:rotate(-30deg) translateY(-150%)}.cube-loading-spinner:nth-child(6){-webkit-animation-delay:.416666666666667s;animation-delay:.416666666666667s;-webkit-transform:rotate(0deg) translateY(-150%);transform:rotate(0deg) translateY(-150%)}.cube-loading-spinner:nth-child(7){-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-transform:rotate(30deg) translateY(-150%);transform:rotate(30deg) translateY(-150%)}.cube-loading-spinner:nth-child(8){-webkit-animation-delay:.583333333333333s;animation-delay:.583333333333333s;-webkit-transform:rotate(60deg) translateY(-150%);transform:rotate(60deg) translateY(-150%)}.cube-loading-spinner:nth-child(9){-webkit-animation-delay:.666666666666667s;animation-delay:.666666666666667s;-webkit-transform:rotate(90deg) translateY(-150%);transform:rotate(90deg) translateY(-150%)}.cube-loading-spinner:nth-child(10){-webkit-animation-delay:.75s;animation-delay:.75s;-webkit-transform:rotate(120deg) translateY(-150%);transform:rotate(120deg) translateY(-150%)}.cube-loading-spinner:nth-child(11){-webkit-animation-delay:.833333333333333s;animation-delay:.833333333333333s;-webkit-transform:rotate(150deg) translateY(-150%);transform:rotate(150deg) translateY(-150%)}.cube-loading-spinner:nth-child(12){-webkit-animation-delay:.916666666666667s;animation-delay:.916666666666667s;-webkit-transform:rotate(180deg) translateY(-150%);transform:rotate(180deg) translateY(-150%)}@-webkit-keyframes spinner-fade{0%{opacity:.85}50%{opacity:.25}to{opacity:.25}}@keyframes spinner-fade{0%{opacity:.85}50%{opacity:.25}to{opacity:.25}}",""])},197:function(t,e,n){"use strict";n.r(e);var o=n(130),r=n.n(o);for(var d in o)"default"!==d&&function(t){n.d(e,t,function(){return o[t]})}(d);e.default=r.a},198:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".top[data-v-02483b13]{height:.55rem}.item[data-v-02483b13]{margin-top:.1rem;height:2.6rem;background:#fff;padding:0 .2rem .2rem}.item .title[data-v-02483b13]{height:.88rem}.item .title .img-v[data-v-02483b13]{width:.28rem;height:.24rem}.item .time[data-v-02483b13]{margin-top:.1rem}.triangle-down-g[data-v-02483b13]{border-top:5px solid #2fb301}.triangle-down-9[data-v-02483b13],.triangle-down-g[data-v-02483b13]{width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent}.triangle-down-9[data-v-02483b13]{border-top:5px solid #999}",""])},238:function(t,e,n){"use strict";n.r(e);var o=n(115),r=n(1),d=n.n(r),l=n(92),c=n.n(l);n(134);d.a.use(c.a);var h={name:"PageZhuanXian",components:{SelectAddress:o.a},data:()=>({isShowMask:[!1,!1,!1],options:{pullDownRefresh:{txt:" "},pullUpLoad:{txt:{more:"",noMore:"没有更多数据了"}},scrollbar:!0}}),mounted(){this.$nextTick(()=>{this.$refs.scroll.scrollTo(0,this.$store.state.m.zhuanxian.scrollTo)})},methods:{clickRange(t){this.$router.push(`/m/zhuanxian/detail?id=${t}`)},onPullingDown(){this.$store.commit("m/zhuanxian/setData",{name:"currentPage",data:1}),this.$store.commit("m/zhuanxian/setData",{name:"rangeList",data:[]}),this.getRangeList()},onPullingUp(){this.getRangeList()},getScroll(t){this.$store.commit("m/zhuanxian/setData",{name:"scrollTo",data:t.y})},getRangeList(){console.log(this.$store.state.m.zhuanxian.currentPage),console.log(this.$store.state.m.zhuanxian.pages),this.$store.state.m.zhuanxian.currentPage>this.$store.state.m.zhuanxian.pages&&this.$refs.scroll.forceUpdate();let t={currentPage:this.$store.state.m.zhuanxian.currentPage,pageSize:20,startProvince:this.$store.state.m.zhuanxian.startName[0],startCity:this.$store.state.m.zhuanxian.startName[1],startArea:this.$store.state.m.zhuanxian.startName[2],endProvince:this.$store.state.m.zhuanxian.endName[0],endCity:this.$store.state.m.zhuanxian.endName[1],endArea:this.$store.state.m.zhuanxian.endName[2]};this.$store.dispatch("m/zhuanxian/GETRANGELIST",{data:t,name:"rangeList"})},clickStart(){this.$set(this.isShowMask,1,!1),this.$refs.selectEndAddress.showMask=!1,this.$set(this.isShowMask,0,!this.isShowMask[0]),this.$refs.selectStartAddress.showMask=!this.$refs.selectStartAddress.showMask},clickEnd(){this.$set(this.isShowMask,0,!1),this.$refs.selectStartAddress.showMask=!1,this.$set(this.isShowMask,1,!this.isShowMask[1]),this.$refs.selectEndAddress.showMask=!this.$refs.selectEndAddress.showMask},clickReputation(){console.log(this.$store.state.m.zhuanxian.rangeList)},getStartArea(data){this.$set(this.isShowMask,0,!1),data&&(this.$store.dispatch("m/zhuanxian/SETDATA",{data:data,name:"startName"}),this.onPullingDown())},getEndArea(data){this.$set(this.isShowMask,1,!1),data&&(this.$store.dispatch("m/zhuanxian/SETDATA",{data:data,name:"endName"}),this.onPullingDown())}}},m=n(0);var component=Object(m.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex_f flex_1"},[t._ssrNode("<div data-v-02483b13>","</div>",[t._ssrNode('<div class="flex_a f-26 b_b top b_c_w" data-v-02483b13><div'+t._ssrClass("flex_1 flex",[t.isShowMask[0]?"f_g":"c-3"])+' data-v-02483b13><span class="margin_r_10" data-v-02483b13>'+t._ssrEscape(t._s(""===t.$store.state.m.zhuanxian.startName[0]?"全国":""===t.$store.state.m.zhuanxian.startName[2]?t.$store.state.m.zhuanxian.startName[1]:t.$store.state.m.zhuanxian.startName[2]))+"</span> <div"+t._ssrClass(null,[t.isShowMask[0]?"triangle-down-g":"triangle-down-9"])+" data-v-02483b13></div></div> <div"+t._ssrClass("flex_1 flex",[!0===t.isShowMask[1]?"f_g":"c-3"])+' data-v-02483b13><span class="margin_r_10" data-v-02483b13>'+t._ssrEscape(t._s(""===t.$store.state.m.zhuanxian.endName[0]?"全国":""===t.$store.state.m.zhuanxian.endName[2]?t.$store.state.m.zhuanxian.endName[1]:t.$store.state.m.zhuanxian.endName[2]))+"</span> <div"+t._ssrClass(null,[t.isShowMask[1]?"triangle-down-g":"triangle-down-9"])+' data-v-02483b13></div></div> <div class="flex_1 flex" data-v-02483b13><span class="margin_r_10" data-v-02483b13>信誉最高</span> <div'+t._ssrClass(null,[t.isShowMask[2]?"triangle-down-g":"triangle-down-9"])+" data-v-02483b13></div></div></div> "),t._ssrNode('<div class="p_r" data-v-02483b13>',"</div>",[n("SelectAddress",{ref:"selectStartAddress",attrs:{top:"auto"},on:{setArea:t.getStartArea}}),t._ssrNode(" "),n("SelectAddress",{ref:"selectEndAddress",attrs:{top:"auto"},on:{setArea:t.getEndArea}})],2)],2),t._ssrNode(" "+(0===t.$store.state.m.zhuanxian.pages?'<div class="flex f-26" data-v-02483b13>\n    没有相关数据\n  </div>':"\x3c!----\x3e")+" "),n("cube-scroll",{ref:"scroll",staticClass:"mScroll flex_1",attrs:{"scroll-events":["scroll-end"],data:t.$store.state.m.zhuanxian.rangeList,options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp,"scroll-end":t.getScroll}},t._l(t.$store.state.m.zhuanxian.rangeList,function(e,o){return n("div",{key:o,staticClass:"item",on:{click:function(n){return t.clickRange(e.id)}}},[n("div",{staticClass:"title c-3 f-26 b_b flex_a"},[n("span",[t._v(t._s(e.companyName))]),t._v(" "),n("img",{staticClass:"img-v margin_l_20",attrs:{src:"/m/zhuanxian/details-icon-vip.png"}})]),t._v(" "),n("div",{staticClass:"flex_sb"},[n("div",[n("div",{staticClass:"f-36 f_w_b"},[t._v(t._s(e.startCity)+" "+t._s(e.startArea)+" -- "+t._s(e.endCity)+" "+t._s(e.endArea))]),t._v(" "),n("div",{staticClass:"time f-20 c-9"},[n("span",[t._v("时效"+t._s(e.transportAging)+t._s(e.transportAgingUnit))]),t._v(" "),n("span",{staticClass:"margin_l_20"},[t._v(t._s(e.browseNumber)+"人浏览")])])]),t._v(" "),n("div",[n("img",{staticClass:"img-v margin_l_20",attrs:{src:"/m/zhuanxian/details-icon-vip.png"}})])]),t._v(" "),n("div",{staticClass:"f-20"},[t._v("\n        轻货："+t._s(e.lightPrice)+"元/m³ 重货："+t._s(e.weightPrice)+"元/公斤\n      ")])])}),0)],2)},[],!1,function(t){var e=n(197);e.__inject__&&e.__inject__(t)},"02483b13","5758df16");e.default=component.exports},99:function(t,e,n){var content=n(119);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("1bfb57aa",content,!0,t)}}};
//# sourceMappingURL=1ec90769e2ef30419f0c.js.map