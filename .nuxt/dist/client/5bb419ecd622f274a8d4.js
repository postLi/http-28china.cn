(window.webpackJsonp=window.webpackJsonp||[]).push([[51,57],{235:function(t,e,n){var content=n(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("4dc96070",content,!0,{sourceMap:!1})},239:function(t,e,n){var content=n(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("eecd741e",content,!0,{sourceMap:!1})},240:function(t,e,n){"use strict";var o=n(235);n.n(o).a},241:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,".component_header[data-v-31d73fec]{min-height:.88rem}.component_header img[data-v-31d73fec]{width:.2rem;height:.38rem}",""])},242:function(t,e,n){"use strict";var o=n(1),style=n(243),r=n.n(style);n(244);o.a.use(r.a);var c={name:"MyTop",props:{showLine:{type:Boolean,default:!0},backColor:{type:String,default:"#ffffff"},color:{type:String,default:"#42474b"}}},l=(n(240),n(2)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component_header flex_a",class:[t.showLine?"b_b":""],style:{background:t.backColor,color:t.color}},[n("div",{staticClass:"flex_1 flex_a f-36"},[n("i",{staticClass:"padding_l_20 cubeic-back",on:{click:function(e){return t.$router.go(-1)}}})]),t._v(" "),t._t("default"),t._v(" "),n("div",{staticClass:"flex_1"})],2)},[],!1,null,"31d73fec",null);e.a=component.exports},248:function(t,e,n){"use strict";n.r(e);e.default={get:function(t){var e=window.localStorage.getItem(t);return null===e?null:window.JSON.parse(e)},set:function(t,data){return window.localStorage.setItem(t,window.JSON.stringify(data))},remove:function(t){return window.localStorage.removeItem(t)},get_s:function(t){var e=window.sessionStorage.getItem(t);return null===e?null:window.JSON.parse(e)},set_s:function(t,data){return window.sessionStorage.setItem(t,window.JSON.stringify(data))},remove_s:function(t){return window.sessionStorage.removeItem(t)}}},259:function(t,e,n){var content=n(301);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("fc29c33e",content,!0,{sourceMap:!1})},261:function(t,e,n){"use strict";n(4);var o=n(248),r={name:"SelectAddress",props:{top:{type:String,default:"0"}},data:function(){return{showMask:!1,list:[],cityList:[],areaList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1},{code:"",name:"",show:!1}]}},watch:{showMask:function(t,e){o.default.get("mCityHistoryList")&&t&&(this.list=o.default.get("mCityHistoryList"))}},methods:{selectedHis:function(t){this.showMask=!1,this.$emit("setArea",[t.startProvince,t.startCity,"全市"===t.name?"":t.name])},back:function(){this.showAddr[2].show?(this.$set(this.showAddr,2,{code:"",name:"",show:!1}),this.$set(this.showAddr[1],"show",!0)):this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince:function(t){var e=this;"全国"===t.name?(this.$emit("setArea",["","",""]),this.showMask=!1):this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t.code).then(function(n){var data=n.data;200===data.status&&(e.cityList=data.data&&data.data||[],e.showAddr=[{code:t.code,name:t.name,show:!1},{code:"",name:"",show:!0},{code:"",name:"",show:!1}])}).catch(function(t){})},selectCity:function(t){var e=this;this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t.code).then(function(n){var data=n.data;200===data.status&&(data.data?data.data.unshift({code:t.code,name:"全市",name1:t.name,parentCode:t.code}):data.data=[{code:t.code,name:"全市",name1:t.name,parentCode:t.code}],e.areaList=data.data&&data.data||[],e.$set(e.showAddr,1,{code:t.code,name:t.name,show:!1}),e.showAddr[2].show=!0)}).catch(function(t){})},selectArea:function(t){this.showMask=!1,this.$set(this.showAddr,2,{code:t.code,name:t.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name,"全市"===t.name?"":t.name]),t.startProvince=this.showAddr[0].name,t.startCity=this.showAddr[1].name,this.setHistory(t)},setHistory:function(data){if(o.default.get("mCityHistoryList")){var t=o.default.get("mCityHistoryList");t.some(function(t){return t.code===data.code})||(t.length>=4&&t.splice(3,1),t.unshift(data)),o.default.set("mCityHistoryList",t)}else o.default.set("mCityHistoryList",[data])},beforeEnter:function(t){t.style.height="0"},enter:function(t){0!==t.scrollHeight?t.style.height=t.scrollHeight+"px":t.style.height=""},afterEnter:function(t){t.style.height=""},beforeLeave:function(t){t.style.height=t.scrollHeight+"px"},leave:function(t){0!==t.scrollHeight&&(t.style.height=0)},afterLeave:function(t){t.style.height=""},closeMask:function(){this.showMask=!1,this.$emit("setArea",!1)}}},c=(n(263),n(2)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},[t.showMask?n("div",{staticClass:" heightTran"},[n("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[n("div",{staticClass:"c-3 flex_1 f_w_b"},[t._v("历史城市")]),t._v(" "),n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.list,function(e,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(n){return t.selectedHis(e)}}},[t._v(t._s("全市"===e.name?e.name1:e.name))])])}),0),t._v(" "),n("div",{staticClass:"flex_a"},[t.showAddr[0].show?n("div",{staticClass:"c-3 flex_1 f_w_b"},[t._v("选择城市")]):n("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(e){return t.back()}}},[t._v("返回上一线")]),t._v(" "),n("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[t._v(t._s(t.showAddr[0].name)+t._s(t.showAddr[1].name)+t._s("全市"===t.showAddr[2].name?"":t.showAddr[2].name))]),t._v(" "),n("div",{staticClass:"flex_1"})]),t._v(" "),t.showAddr[0].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.$store.state.m.provinceList,function(e,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return t.selectProvince(e)}}},[t._v(t._s(e.name))])])}),0):t._e(),t._v(" "),t.showAddr[1].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.cityList,function(e,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return t.selectCity(e)}}},[t._v(t._s(e.name))])])}),0):t._e(),t._v(" "),t.showAddr[2].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.areaList,function(e,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[2].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return t.selectArea(e)}}},[t._v(t._s(e.name))])])}),0):t._e()])]):t._e()]),t._v(" "),n("div",{class:[t.showMask?"mask2":""],style:{top:t.top},on:{click:function(e){return t.closeMask()}}})],1)},[],!1,null,"0b6ec86c",null);e.a=component.exports},263:function(t,e,n){"use strict";var o=n(239);n.n(o).a},264:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,".code_box[data-v-0b6ec86c]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-0b6ec86c]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-0b6ec86c]{border:1px solid #54a7ff;color:#54a7ff;background-color:rgba(84,167,255,.5)}.code_item_no_selected[data-v-0b6ec86c]{border:1px solid #999}.heightTran[data-v-0b6ec86c]{transition:all .2s;position:absolute;top:0;width:100%;height:8.3rem;z-index:100}",""])},300:function(t,e,n){"use strict";var o=n(259);n.n(o).a},301:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,".item[data-v-85858c24]{height:1rem}.heightTran[data-v-85858c24]{transition:all .2s;position:absolute;top:0;width:100%;height:4.1rem;z-index:100}",""])},302:function(t,e,n){"use strict";var o={name:"Reputation",props:{top:{type:String,default:"0"},form:{type:String,default:""}},data:function(){return{showMask:!1,list:[{name:"信誉最高",value:"creditDesc"},{name:"运输时效",value:"transportAgingAsc"},{name:"重货价格最低",value:"weightPriceAsc"},{name:"轻货价格最低",value:"lightPriceAsc"}]}},methods:{selectReputation:function(t){this.showMask=!1,this.$emit("setArea",t)},beforeEnter:function(t){t.style.height="0"},enter:function(t){0!==t.scrollHeight?t.style.height=t.scrollHeight+"px":t.style.height=""},afterEnter:function(t){t.style.height=""},beforeLeave:function(t){t.style.height=t.scrollHeight+"px"},leave:function(t){0!==t.scrollHeight&&(t.style.height=0)},afterLeave:function(t){t.style.height=""},closeMask:function(){this.showMask=!1,this.$emit("setArea",!1)}}},r=(n(300),n(2)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},[t.showMask?n("div",{staticClass:" heightTran"},["zhuanxian"===t.form?n("div",{staticClass:"b_c_w padding_l_20 padding_r_20 f-26 height_100 o_f"},t._l(t.list,function(e,o){return n("div",{key:o,staticClass:"item flex",class:[o===t.list.length-1?"":"b_b"],style:{color:t.$store.state.m.zhuanxian.orderBy.value===e.value?"#54A7FF":""},on:{click:function(n){return t.selectReputation(e)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),0):t._e(),t._v(" "),"gongsiLine"===t.form?n("div",{staticClass:"b_c_w padding_l_20 padding_r_20 f-26 height_100 o_f"},t._l(t.list,function(e,o){return n("div",{key:o,staticClass:"item flex",class:[o===t.list.length-1?"":"b_b"],style:{color:t.$store.state.m.gongsi.line.orderBy.value===e.value?"#54A7FF":""},on:{click:function(n){return t.selectReputation(e)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),0):t._e()]):t._e()]),t._v(" "),n("div",{class:[t.showMask?"mask2":""],style:{top:t.top},on:{click:function(e){return t.closeMask()}}})],1)},[],!1,null,"85858c24",null);e.a=component.exports},401:function(t,e,n){var content=n(629);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("5f00850a",content,!0,{sourceMap:!1})},628:function(t,e,n){"use strict";var o=n(401);n.n(o).a},629:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,".body[data-v-7f4814dc]{height:inherit}.item[data-v-7f4814dc]{margin-top:.1rem;height:2.6rem;background:#fff;padding:0 .2rem .2rem}.item .title[data-v-7f4814dc]{height:.88rem}.item .title .img-v[data-v-7f4814dc]{width:.28rem;height:.24rem}.item .l_h[data-v-7f4814dc]{line-height:.44rem;padding:.3rem 0}.item .l_h .img-p[data-v-7f4814dc]{width:.44rem}.item .l_h .time[data-v-7f4814dc]{margin-top:.1rem}.item .l_h .time .time_b[data-v-7f4814dc]{height:.32rem;background:#eee;border-radius:.16rem;padding:.05rem .1rem}.shou[data-v-7f4814dc]{background:#65a8ff}.jian[data-v-7f4814dc],.shou[data-v-7f4814dc]{width:.32rem;height:.32rem;border-radius:.04rem}.jian[data-v-7f4814dc]{background:#f40}.qs[data-v-7f4814dc]{background:#3c92ef}.qs[data-v-7f4814dc],.rs[data-v-7f4814dc]{width:.66rem;height:.32rem;border-radius:.04rem}.rs[data-v-7f4814dc]{background:#fad338}",""])},671:function(t,e,n){"use strict";n.r(e);n(62);var o=n(9),r=n(261),c=n(302),l=n(242),d=n(1),h=n(306),f=n.n(h),m=n(298),_=n.n(m);n(307),n(299);d.a.use(f.a),d.a.use(_.a);var v={layout:"m",components:{SelectAddress:r.a,Reputation:c.a,MyTop:l.a},data:function(){return{isShowMask:[!1,!1,!1],options:{pullDownRefresh:{txt:" "},pullUpLoad:{txt:{more:"",noMore:"没有更多数据了"}},scrollbar:!0}}},fetch:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$axios,n=e.store,o=e.query,0!==n.state.m.gongsi.line.rangeList.length){t.next=4;break}return r={publishId:o.id,currentPage:n.state.m.gongsi.line.currentPage,pageSize:20,startProvince:n.state.m.gongsi.line.startName[0],startCity:n.state.m.gongsi.line.startName[1],startArea:n.state.m.gongsi.line.startName[2],endProvince:n.state.m.gongsi.line.endName[0],endCity:n.state.m.gongsi.line.endName[1],endArea:n.state.m.gongsi.line.endName[2],orderBy:n.state.m.gongsi.line.orderBy.value},t.abrupt("return",n.dispatch("m/gongsi/line/GETLIST",{data:r,name:"rangeList"}));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){var t=this;this.$nextTick(function(){t.$refs.scroll.scrollTo(0,t.$store.state.m.gongsi.line.scrollTo)})},methods:{phone:function(s,t){var e=[s?{content:"出发地手机号码"}:{content:"出发地还没有手机号码"},t?{content:"到达地手机号码"}:{content:"到达地还没有手机号码"}];this.$createActionSheet({title:"",pickerStyle:!0,data:e,onSelect:function(e,n){console.log(e),"出发地手机号码"===e.content&&(window.location.href="tel:".concat(s)),"到达地手机号码"===e.content&&(window.location.href="tel:".concat(t))},onCancel:function(){}}).show()},clickRange:function(t,e){this.$router.push("/m/zhuanxian/detail?id=".concat(t,"&publishId=").concat(e))},onPullingDown:function(){var t=this;this.$nextTick(function(){t.$refs.scroll.scrollTo(0,0)}),this.$store.commit("m/gongsi/line/setData",{name:"scrollTo",data:0}),this.$store.commit("m/gongsi/line/setData",{name:"currentPage",data:1}),this.$store.commit("m/gongsi/line/setData",{name:"rangeList",data:[]}),this.getRangeList()},onPullingUp:function(){this.getRangeList()},getScroll:function(t){this.$store.commit("m/gongsi/line/setData",{name:"scrollTo",data:t.y})},getRangeList:function(){console.log(this.$store.state.m.gongsi.line.currentPage),console.log(this.$store.state.m.gongsi.line.pages),this.$store.state.m.gongsi.line.currentPage>this.$store.state.m.gongsi.line.pages&&this.$refs.scroll.forceUpdate();var t={publishId:this.$route.query.id,currentPage:this.$store.state.m.gongsi.line.currentPage,pageSize:20,startProvince:this.$store.state.m.gongsi.line.startName[0],startCity:this.$store.state.m.gongsi.line.startName[1],startArea:this.$store.state.m.gongsi.line.startName[2],endProvince:this.$store.state.m.gongsi.line.endName[0],endCity:this.$store.state.m.gongsi.line.endName[1],endArea:this.$store.state.m.gongsi.line.endName[2],orderBy:this.$store.state.m.gongsi.line.orderBy.value};this.$store.dispatch("m/gongsi/line/GETLIST",{data:t,name:"rangeList"})},clickStart:function(){this.isShowMask=[!1,!1,!1],this.$refs.selectEndAddress.showMask=!1,this.$refs.selectReputation.showMask=!1,this.$set(this.isShowMask,0,!this.isShowMask[0]),this.$refs.selectStartAddress.showMask=!this.$refs.selectStartAddress.showMask},clickEnd:function(){this.isShowMask=[!1,!1,!1],this.$refs.selectStartAddress.showMask=!1,this.$refs.selectReputation.showMask=!1,this.$set(this.isShowMask,1,!this.isShowMask[1]),this.$refs.selectEndAddress.showMask=!this.$refs.selectEndAddress.showMask},clickReputation:function(){this.isShowMask=[!1,!1,!1],this.$refs.selectStartAddress.showMask=!1,this.$refs.selectEndAddress.showMask=!1,this.$set(this.isShowMask,2,!this.isShowMask[2]),this.$refs.selectReputation.showMask=!this.$refs.selectReputation.showMask},getStartArea:function(data){this.$set(this.isShowMask,0,!1),data&&(this.$store.dispatch("m/gongsi/line/SETDATA",{data:data,name:"startName"}),this.onPullingDown())},getEndArea:function(data){this.$set(this.isShowMask,1,!1),data&&(this.$store.dispatch("m/gongsi/line/SETDATA",{data:data,name:"endName"}),this.onPullingDown())},getReputation:function(data){this.$set(this.isShowMask,2,!1),data&&(this.$store.commit("m/gongsi/line/setData",{name:"orderBy",data:data}),this.onPullingDown())}}},w=(n(628),n(2)),component=Object(w.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body flex_f"},[n("MyTop",[n("div",{staticClass:"flex_3 f-36 flex"},[t._v("公司全部网点")])]),t._v(" "),n("div",{staticClass:"flex_f flex_1"},[n("div",[n("div",{staticClass:"flex_a f-26 b_b page_view_top b_c_w"},[n("div",{staticClass:"flex_1 flex",class:[t.isShowMask[0]?"f_b":"c-3"],on:{click:function(e){return t.clickStart()}}},[n("span",{staticClass:"margin_r_10"},[t._v(t._s(""===t.$store.state.m.gongsi.line.startName[0]?"全国":""===t.$store.state.m.gongsi.line.startName[2]?t.$store.state.m.gongsi.line.startName[1]:t.$store.state.m.gongsi.line.startName[2]))]),t._v(" "),n("div",{class:[t.isShowMask[0]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})]),t._v(" "),n("div",{staticClass:"flex_1 flex",class:[!0===t.isShowMask[1]?"f_b":"c-3"],on:{click:function(e){return t.clickEnd()}}},[n("span",{staticClass:"margin_r_10"},[t._v(t._s(""===t.$store.state.m.gongsi.line.endName[0]?"全国":""===t.$store.state.m.gongsi.line.endName[2]?t.$store.state.m.gongsi.line.endName[1]:t.$store.state.m.gongsi.line.endName[2]))]),t._v(" "),n("div",{class:[t.isShowMask[1]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})]),t._v(" "),n("div",{staticClass:"flex_1 flex",on:{click:function(e){return t.clickReputation()}}},[n("span",{staticClass:"margin_r_10",class:[!0===t.isShowMask[2]?"f_b":"c-3"]},[t._v(t._s(t.$store.state.m.gongsi.line.orderBy.name))]),t._v(" "),n("div",{class:[t.isShowMask[2]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})])]),t._v(" "),n("div",{staticClass:"p_r"},[n("SelectAddress",{ref:"selectStartAddress",attrs:{top:"auto"},on:{setArea:t.getStartArea}}),t._v(" "),n("SelectAddress",{ref:"selectEndAddress",attrs:{top:"auto"},on:{setArea:t.getEndArea}}),t._v(" "),n("Reputation",{ref:"selectReputation",attrs:{top:"auto",form:"gongsiLine"},on:{setArea:t.getReputation}})],1)]),t._v(" "),0===t.$store.state.m.gongsi.line.pages?n("div",{staticClass:"flex f-26 margin_t_40"},[t._v("\n      没有相关数据\n    ")]):t._e(),t._v(" "),n("cube-scroll",{ref:"scroll",staticClass:"mScroll flex_1",attrs:{"scroll-events":["scroll-end"],data:t.$store.state.m.gongsi.line.rangeList,options:t.options},on:{"pulling-down":t.onPullingDown,"pulling-up":t.onPullingUp,"scroll-end":t.getScroll}},t._l(t.$store.state.m.gongsi.line.rangeList,function(e,o){return n("div",{key:o,staticClass:"item",on:{click:function(n){return t.clickRange(e.id,e.publishId)}}},[n("div",{staticClass:"title c-3 f-30 b_b flex_sb"},[n("div",{staticClass:"flex_a"},[n("span",[t._v(t._s(e.companyName))]),t._v(" "),n("img",{staticClass:"img-v margin_l_20",attrs:{src:"/m/zhuanxian/details-icon-vip.png"}})]),t._v(" "),n("div",{staticClass:"flex_a f-20 f_w"},[n("div",{staticClass:"shou flex"},[t._v("授")]),t._v(" "),n("div",{staticClass:"jian margin_l_10 flex"},[t._v("荐")])])]),t._v(" "),n("div",{staticClass:"l_h"},[n("div",{staticClass:"width_100"},[n("div",{staticClass:"f-36 f_w_b flex_sb"},[n("div",{staticClass:"flex_a"},[n("span",[t._v(t._s(e.startCity)+" "+t._s(e.startArea)+" -- "+t._s(e.endCity)+" "+t._s(e.endArea))]),t._v(" "),"AF03302"===e.rangeType?n("span",{staticClass:"margin_l_20 f_w f-20 f_w_b flex rs"},[t._v("优 势")]):t._e(),t._v(" "),"AF03303"===e.rangeType?n("span",{staticClass:"margin_l_20 f_w f-20 f_w_b flex qs"},[t._v("强 势")]):t._e()]),t._v(" "),n("img",{staticClass:"img-p margin_l_20",attrs:{src:"/m/zhuanxian/phone.png"},on:{click:function(n){return n.stopPropagation(),t.phone(e.startLocationContactsMobile,e.endLocationContactsMobile)}}})]),t._v(" "),n("div",{staticClass:"time f-20 c-9"},[n("span",{staticClass:"time_b"},[t._v("时效"+t._s(e.transportAging)+t._s(e.transportAgingUnit))]),t._v(" "),n("span",{staticClass:"margin_l_20 time_b"},[t._v(t._s(e.browseNumber)+"人浏览")])])]),t._v(" "),n("div",{staticClass:"f-24 f_40"},[t._v("\n            轻货："+t._s(e.lightPrice)+"元/m³ 重货："+t._s(e.weightPrice)+"元/公斤\n          ")])])])}),0)],1)],1)},[],!1,null,"7f4814dc",null);e.default=component.exports}}]);