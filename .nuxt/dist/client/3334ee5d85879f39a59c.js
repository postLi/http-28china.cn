(window.webpackJsonp=window.webpackJsonp||[]).push([[52,48],{222:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("1bfb57aa",content,!0,{sourceMap:!1})},232:function(t,e,n){"use strict";n(4);var o=n(233),r={name:"SelectAddress",props:{top:{type:String,default:"0"}},data:function(){return{showMask:!1,list:[],cityList:[],areaList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1},{code:"",name:"",show:!1}]}},watch:{showMask:function(t,e){o.default.get("mCityHistoryList")&&t&&(this.list=o.default.get("mCityHistoryList"))}},methods:{selectedHis:function(t){this.showMask=!1,this.$emit("setArea",[t.startProvince,t.startCity,"全市"===t.name?"":t.name])},back:function(){this.showAddr[2].show?(this.$set(this.showAddr,2,{code:"",name:"",show:!1}),this.$set(this.showAddr[1],"show",!0)):this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince:function(t){var e=this;"全国"===t.name?(this.$emit("setArea",["","",""]),this.showMask=!1):this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t.code).then(function(n){var data=n.data;200===data.status&&(e.cityList=data.data&&data.data||[],e.showAddr=[{code:t.code,name:t.name,show:!1},{code:"",name:"",show:!0},{code:"",name:"",show:!1}])}).catch(function(t){})},selectCity:function(t){var e=this;this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t.code).then(function(n){var data=n.data;200===data.status&&(data.data?data.data.unshift({code:t.code,name:"全市",name1:t.name,parentCode:t.code}):data.data=[{code:t.code,name:"全市",name1:t.name,parentCode:t.code}],e.areaList=data.data&&data.data||[],e.$set(e.showAddr,1,{code:t.code,name:t.name,show:!1}),e.showAddr[2].show=!0)}).catch(function(t){})},selectArea:function(t){this.showMask=!1,this.$set(this.showAddr,2,{code:t.code,name:t.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name,"全市"===t.name?"":t.name]),t.startProvince=this.showAddr[0].name,t.startCity=this.showAddr[1].name,this.setHistory(t)},setHistory:function(data){if(o.default.get("mCityHistoryList")){var t=o.default.get("mCityHistoryList");t.some(function(t){return t.code===data.code})||(t.length>=4&&t.splice(3,1),t.unshift(data)),o.default.set("mCityHistoryList",t)}else o.default.set("mCityHistoryList",[data])},beforeEnter:function(t){t.style.height="0"},enter:function(t){0!==t.scrollHeight?t.style.height=t.scrollHeight+"px":t.style.height=""},afterEnter:function(t){t.style.height=""},beforeLeave:function(t){t.style.height=t.scrollHeight+"px"},leave:function(t){0!==t.scrollHeight&&(t.style.height=0)},afterLeave:function(t){t.style.height=""},closeMask:function(){this.showMask=!1,this.$emit("setArea",!1)}}},c=(n(234),n(1)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},[t.showMask?n("div",{staticClass:" heightTran"},[n("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[n("div",{staticClass:"c-3 flex_1 f_w_b"},[t._v("历史城市")]),t._v(" "),n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.list,function(e,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(n){return t.selectedHis(e)}}},[t._v(t._s("全市"===e.name?e.name1:e.name))])])}),0),t._v(" "),n("div",{staticClass:"flex_a"},[t.showAddr[0].show?n("div",{staticClass:"c-3 flex_1 f_w_b"},[t._v("选择城市")]):n("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(e){return t.back()}}},[t._v("返回上一线")]),t._v(" "),n("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[t._v(t._s(t.showAddr[0].name)+t._s(t.showAddr[1].name)+t._s("全市"===t.showAddr[2].name?"":t.showAddr[2].name))]),t._v(" "),n("div",{staticClass:"flex_1"})]),t._v(" "),t.showAddr[0].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.$store.state.m.provinceList,function(e,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return t.selectProvince(e)}}},[t._v(t._s(e.name))])])}),0):t._e(),t._v(" "),t.showAddr[1].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.cityList,function(e,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return t.selectCity(e)}}},[t._v(t._s(e.name))])])}),0):t._e(),t._v(" "),t.showAddr[2].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.areaList,function(e,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[2].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return t.selectArea(e)}}},[t._v(t._s(e.name))])])}),0):t._e()])]):t._e()]),t._v(" "),n("div",{class:[t.showMask?"mask2":""],style:{top:t.top},on:{click:function(e){return t.closeMask()}}})],1)},[],!1,null,"7f01b790",null);e.a=component.exports},233:function(t,e,n){"use strict";n.r(e);e.default={get:function(t){var e=window.localStorage.getItem(t);return null===e?null:window.JSON.parse(e)},set:function(t,data){return window.localStorage.setItem(t,window.JSON.stringify(data))},remove:function(t){return window.localStorage.removeItem(t)},get_s:function(t){var e=window.sessionStorage.getItem(t);return null===e?null:window.JSON.parse(e)},set_s:function(t,data){return window.sessionStorage.setItem(t,window.JSON.stringify(data))},remove_s:function(t){return window.sessionStorage.removeItem(t)}}},234:function(t,e,n){"use strict";var o=n(222);n.n(o).a},235:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".code_box[data-v-7f01b790]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-7f01b790]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-7f01b790]{border:1px solid #2fb301;color:#2fb301;background-color:rgba(47,179,1,.5)}.code_item_no_selected[data-v-7f01b790]{border:1px solid #999}.heightTran[data-v-7f01b790]{transition:all .2s;position:absolute;top:0;width:100%;height:8.3rem;z-index:100}.mask2[data-v-7f01b790]{position:fixed;left:0;z-index:13;width:100%;height:100%;background-color:rgba(0,0,0,.4)}",""])},255:function(t,e,n){var content=n(319);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("62c367db",content,!0,{sourceMap:!1})},318:function(t,e,n){"use strict";var o=n(255);n.n(o).a},319:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".item[data-v-5cc57f99]{margin-top:.1rem;height:2.6rem;background:#fff;padding:0 .2rem .2rem}.item .title[data-v-5cc57f99]{height:.88rem}.item .title .img-v[data-v-5cc57f99]{width:.28rem;height:.24rem}.item .time[data-v-5cc57f99]{margin-top:.1rem}",""])},358:function(t,e,n){"use strict";n.r(e);var o=n(232),r=n(0),c=n(278),d=n.n(c);n(279);r.a.use(d.a);var l={name:"PageZhuanXian",components:{SelectAddress:o.a},data:function(){return{isShowMask:[!1,!1,!1],options:{pullDownRefresh:{txt:" "},pullUpLoad:{txt:{more:"",noMore:"没有更多数据了"}},scrollbar:!0}}},mounted:function(){var t=this;this.$nextTick(function(){t.$refs.scroll.scrollTo(0,t.$store.state.m.zhuanxian.scrollTo)})},methods:{clickRange:function(t){this.$router.push("/m/zhuanxian/detail?id=".concat(t))},onPullingDown:function(){this.$store.commit("m/zhuanxian/setData",{name:"currentPage",data:1}),this.$store.commit("m/zhuanxian/setData",{name:"rangeList",data:[]}),this.getRangeList()},onPullingUp:function(){this.getRangeList()},getScroll:function(t){this.$store.commit("m/zhuanxian/setData",{name:"scrollTo",data:t.y})},getRangeList:function(){console.log(this.$store.state.m.zhuanxian.currentPage),console.log(this.$store.state.m.zhuanxian.pages),this.$store.state.m.zhuanxian.currentPage>this.$store.state.m.zhuanxian.pages&&this.$refs.scroll.forceUpdate();var t={currentPage:this.$store.state.m.zhuanxian.currentPage,pageSize:20,startProvince:this.$store.state.m.zhuanxian.startName[0],startCity:this.$store.state.m.zhuanxian.startName[1],startArea:this.$store.state.m.zhuanxian.startName[2],endProvince:this.$store.state.m.zhuanxian.endName[0],endCity:this.$store.state.m.zhuanxian.endName[1],endArea:this.$store.state.m.zhuanxian.endName[2]};this.$store.dispatch("m/zhuanxian/GETRANGELIST",{data:t,name:"rangeList"})},clickStart:function(){this.$set(this.isShowMask,1,!1),this.$refs.selectEndAddress.showMask=!1,this.$set(this.isShowMask,0,!this.isShowMask[0]),this.$refs.selectStartAddress.showMask=!this.$refs.selectStartAddress.showMask},clickEnd:function(){this.$set(this.isShowMask,0,!1),this.$refs.selectStartAddress.showMask=!1,this.$set(this.isShowMask,1,!this.isShowMask[1]),this.$refs.selectEndAddress.showMask=!this.$refs.selectEndAddress.showMask},clickReputation:function(){console.log(this.$store.state.m.zhuanxian.rangeList)},getStartArea:function(data){this.$set(this.isShowMask,0,!1),data&&(this.$store.dispatch("m/zhuanxian/SETDATA",{data:data,name:"startName"}),this.onPullingDown())},getEndArea:function(data){this.$set(this.isShowMask,1,!1),data&&(this.$store.dispatch("m/zhuanxian/SETDATA",{data:data,name:"endName"}),this.onPullingDown())}}},h=(n(318),n(1)),component=Object(h.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex_f flex_1"},[n("div",[n("div",{staticClass:"flex_a f-26 b_b page_view_top b_c_w"},[n("div",{staticClass:"flex_1 flex",class:[t.isShowMask[0]?"f_g":"c-3"],on:{click:function(e){return t.clickStart()}}},[n("span",{staticClass:"margin_r_10"},[t._v(t._s(""===t.$store.state.m.zhuanxian.startName[0]?"全国":""===t.$store.state.m.zhuanxian.startName[2]?t.$store.state.m.zhuanxian.startName[1]:t.$store.state.m.zhuanxian.startName[2]))]),t._v(" "),n("div",{class:[t.isShowMask[0]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})]),t._v(" "),n("div",{staticClass:"flex_1 flex",class:[!0===t.isShowMask[1]?"f_g":"c-3"],on:{click:function(e){return t.clickEnd()}}},[n("span",{staticClass:"margin_r_10"},[t._v(t._s(""===t.$store.state.m.zhuanxian.endName[0]?"全国":""===t.$store.state.m.zhuanxian.endName[2]?t.$store.state.m.zhuanxian.endName[1]:t.$store.state.m.zhuanxian.endName[2]))]),t._v(" "),n("div",{class:[t.isShowMask[1]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})]),t._v(" "),n("div",{staticClass:"flex_1 flex",on:{click:function(e){return t.clickReputation()}}},[n("span",{staticClass:"margin_r_10"},[t._v("信誉最高")]),t._v(" "),n("div",{class:[t.isShowMask[2]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})])]),t._v(" "),n("div",{staticClass:"p_r"},[n("SelectAddress",{ref:"selectStartAddress",attrs:{top:"auto"},on:{setArea:t.getStartArea}}),t._v(" "),n("SelectAddress",{ref:"selectEndAddress",attrs:{top:"auto"},on:{setArea:t.getEndArea}})],1)]),t._v(" "),0===t.$store.state.m.zhuanxian.pages?n("div",{staticClass:"flex f-26"},[t._v("\n    没有相关数据\n  ")]):t._e(),t._v(" "),n("cube-scroll",{ref:"scroll",staticClass:"mScroll flex_1",attrs:{"scroll-events":["scroll-end"],data:t.$store.state.m.zhuanxian.rangeList,options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp,"scroll-end":t.getScroll}},t._l(t.$store.state.m.zhuanxian.rangeList,function(e,o){return n("div",{key:o,staticClass:"item",on:{click:function(n){return t.clickRange(e.id)}}},[n("div",{staticClass:"title c-3 f-26 b_b flex_a"},[n("span",[t._v(t._s(e.companyName))]),t._v(" "),n("img",{staticClass:"img-v margin_l_20",attrs:{src:"/m/zhuanxian/details-icon-vip.png"}})]),t._v(" "),n("div",{staticClass:"flex_sb"},[n("div",[n("div",{staticClass:"f-36 f_w_b"},[t._v(t._s(e.startCity)+" "+t._s(e.startArea)+" -- "+t._s(e.endCity)+" "+t._s(e.endArea))]),t._v(" "),n("div",{staticClass:"time f-20 c-9"},[n("span",[t._v("时效"+t._s(e.transportAging)+t._s(e.transportAgingUnit))]),t._v(" "),n("span",{staticClass:"margin_l_20"},[t._v(t._s(e.browseNumber)+"人浏览")])])]),t._v(" "),n("div",[n("img",{staticClass:"img-v margin_l_20",attrs:{src:"/m/zhuanxian/details-icon-vip.png"}})])]),t._v(" "),n("div",{staticClass:"f-20"},[t._v("\n        轻货："+t._s(e.lightPrice)+"元/m³ 重货："+t._s(e.weightPrice)+"元/公斤\n      ")])])}),0)],1)},[],!1,null,"5cc57f99",null);e.default=component.exports}}]);