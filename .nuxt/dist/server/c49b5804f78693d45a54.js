exports.ids=[42,49],exports.modules={115:function(e,t,o){"use strict";o.r(t);t.default={get:function(e){var t=window.localStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set:function(e,data){return window.localStorage.setItem(e,window.JSON.stringify(data))},remove:function(e){return window.localStorage.removeItem(e)},get_s:function(e){var t=window.sessionStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set_s:function(e,data){return window.sessionStorage.setItem(e,window.JSON.stringify(data))},remove_s:function(e){return window.sessionStorage.removeItem(e)}}},117:function(e,t,o){var content=o(148);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=o(3).default;e.exports.__inject__=function(e){r("e3a649bc",content,!0,e)}},134:function(e,t,o){"use strict";var r={name:"Release",props:{top:{type:String,default:"0"},form:{type:String,default:""}},data:()=>({showMask:!1,listHuoYuan:[{name:"最新发布",value:1},{name:"价格最高",value:2}],listCheYuan:[{name:"最新发布",value:"createTimeDesc"},{name:"价格最低",value:"expectPriceAsc"}],listGongSi:[{name:"最新发布",value:"createDesc"},{name:"信誉最高",value:"creditDesc"}]}),methods:{selectRelease(e){this.showMask=!1,this.$emit("setArea",e)},beforeEnter(e){e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter(e){e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px"},leave(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave(e){e.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},n=o(0);var component=Object(n.a)(r,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?o("div",{staticClass:" heightTran"},["huoyuan"===e.form?o("div",{staticClass:"b_c_w padding_l_20 padding_r_20 f-26 height_100 o_f"},e._l(e.listHuoYuan,function(t,r){return o("div",{key:r,staticClass:"item flex",class:[r===e.listHuoYuan.length-1?"":"b_b"],style:{color:e.$store.state.m.huoyuan.queryOrderType.value===t.value?"#54A7FF":""},on:{click:function(o){return e.selectRelease(t)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])}),0):e._e(),e._v(" "),"cheyuan"===e.form?o("div",{staticClass:"b_c_w padding_l_20 padding_r_20 f-26 height_100 o_f"},e._l(e.listCheYuan,function(t,r){return o("div",{key:r,staticClass:"item flex",class:[r===e.listCheYuan.length-1?"":"b_b"],style:{color:e.$store.state.m.cheyuan.orderBy.value===t.value?"#54A7FF":""},on:{click:function(o){return e.selectRelease(t)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])}),0):e._e(),e._v(" "),"gongsi"===e.form?o("div",{staticClass:"b_c_w padding_l_20 padding_r_20 f-26 height_100 o_f"},e._l(e.listGongSi,function(t,r){return o("div",{key:r,staticClass:"item flex",class:[r===e.listGongSi.length-1?"":"b_b"],style:{color:e.$store.state.m.gongsi.orderBy.value===t.value?"#54A7FF":""},on:{click:function(o){return e.selectRelease(t)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])}),0):e._e()]):e._e()]),e._ssrNode(" <div"+e._ssrClass(null,[e.showMask?"mask2":""])+e._ssrStyle(null,{top:e.top},null)+" data-v-5c298654></div>")],2)},[],!1,function(e){var t=o(147);t.__inject__&&t.__inject__(e)},"5c298654","474c6a4e");t.a=component.exports},147:function(e,t,o){"use strict";o.r(t);var r=o(117),n=o.n(r);for(var l in r)"default"!==l&&function(e){o.d(t,e,function(){return r[e]})}(l);t.default=n.a},148:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".item[data-v-5c298654]{height:1rem}.heightTran[data-v-5c298654]{transition:all .2s;position:absolute;top:0;width:100%;height:2.1rem;z-index:100}",""])},150:function(e,t,o){var content=o(237);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=o(3).default;e.exports.__inject__=function(e){r("00a497f8",content,!0,e)}},151:function(e,t,o){var content=o(239);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=o(3).default;e.exports.__inject__=function(e){r("4c75f558",content,!0,e)}},236:function(e,t,o){"use strict";o.r(t);var r=o(150),n=o.n(r);for(var l in r)"default"!==l&&function(e){o.d(t,e,function(){return r[e]})}(l);t.default=n.a},237:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".code_box[data-v-162f4d6c]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-162f4d6c]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-162f4d6c]{border:1px solid #54a7ff;color:#54a7ff;background-color:rgba(84,167,255,.5)}.code_item_no_selected[data-v-162f4d6c]{border:1px solid #999}.heightTran[data-v-162f4d6c]{transition:all .2s;position:absolute;top:0;width:100%;height:8.3rem;z-index:100}",""])},238:function(e,t,o){"use strict";o.r(t);var r=o(151),n=o.n(r);for(var l in r)"default"!==l&&function(e){o.d(t,e,function(){return r[e]})}(l);t.default=n.a},239:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".search[data-v-3d7dac32]{width:.42rem;height:.44rem}.item[data-v-3d7dac32]{margin-top:.1rem;background:#fff;padding:0 .2rem .2rem}.item .title[data-v-3d7dac32]{height:.88rem}.item .title .img-v[data-v-3d7dac32]{width:.28rem;height:.24rem}.item .l_h[data-v-3d7dac32]{padding:.2rem 0}.item .content_h[data-v-3d7dac32]{height:1.55rem}.item .img-left[data-v-3d7dac32]{width:1.55rem;height:1.55rem}.item .img-s[data-v-3d7dac32]{width:.28rem}.item .img-p[data-v-3d7dac32]{width:.44rem}.item .time_b[data-v-3d7dac32]{height:.32rem;background:#eee;border-radius:.16rem;padding:.05rem .1rem}.shou[data-v-3d7dac32]{background:#65a8ff}.jian[data-v-3d7dac32],.shou[data-v-3d7dac32]{width:.32rem;height:.32rem;border-radius:.04rem}.jian[data-v-3d7dac32]{background:#f40}.threeElisp[data-v-3d7dac32]{-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;\n  /*! autoprefixer: off */-webkit-box-orient:vertical;line-height:.33rem}.search_name[data-v-3d7dac32]{box-sizing:border-box}.search_name .search_content[data-v-3d7dac32]{background-color:#f4f4f4;border-radius:.1rem;height:.5rem;font-size:.3rem!important;border:none;outline:none;padding-left:.2rem}",""])},286:function(e,t,o){"use strict";o.r(t);var r=o(115),n={name:"SelectAddress",props:{top:{type:String,default:"0"}},data:()=>({showMask:!1,list:[],cityList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1}]}),watch:{showMask(e,t){r.default.get("mCityHistoryListGongSi")&&e&&(this.list=r.default.get("mCityHistoryListGongSi"))}},methods:{selectedHis(e){this.showMask=!1,this.$emit("setArea",[e.startProvince,e.startCity])},back(){this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince(e){"全国"===e.name?(this.$emit("setArea",["","",""]),this.showMask=!1):this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(t=>{let data=t.data;200===data.status&&(this.cityList=data.data&&data.data||[],this.showAddr=[{code:e.code,name:e.name,show:!1},{code:"",name:"",show:!0}])}).catch(e=>{})},selectCity(e){this.showMask=!1,this.$set(this.showAddr,1,{code:e.code,name:e.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name]),e.startProvince=this.showAddr[0].name,e.startCity=this.showAddr[1].name,this.setHistory(e)},setHistory(data){if(r.default.get("mCityHistoryListGongSi")){let e=r.default.get("mCityHistoryListGongSi");e.some(e=>e.code===data.code)||(e.length>=4&&e.splice(3,1),e.unshift(data)),r.default.set("mCityHistoryListGongSi",e)}else r.default.set("mCityHistoryListGongSi",[data])},beforeEnter(e){e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter(e){e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px"},leave(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave(e){e.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},l=o(0);var c=Object(l.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?o("div",{staticClass:" heightTran"},[o("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[o("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("历史城市")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.list,function(t,r){return o("div",{key:r,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(o){return e.selectedHis(t)}}},[e._v(e._s("全市"===t.name?t.name1:t.name))])])}),0),e._v(" "),o("div",{staticClass:"flex_a"},[e.showAddr[0].show?o("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("选择城市")]):o("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(t){return e.back()}}},[e._v("返回上一线")]),e._v(" "),o("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[e._v(e._s(e.showAddr[0].name)+e._s(e.showAddr[1].name))]),e._v(" "),o("div",{staticClass:"flex_1"})]),e._v(" "),e.showAddr[0].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.$store.state.m.provinceList,function(t,r){return o("div",{key:r,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectProvince(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[1].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.cityList,function(t,r){return o("div",{key:r,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectCity(t)}}},[e._v(e._s(t.name))])])}),0):e._e()])]):e._e()]),e._ssrNode(" <div"+e._ssrClass(null,[e.showMask?"mask2":""])+e._ssrStyle(null,{top:e.top},null)+" data-v-162f4d6c></div>")],2)},[],!1,function(e){var t=o(236);t.__inject__&&t.__inject__(e)},"162f4d6c","72542c16").exports,d={name:"PageGongSi",components:{Release:o(134).a,SelectAddress:c},data:()=>({isShowMask:[!1,!1,!1],showSearch:!1,value:"",options:{pullDownRefresh:{txt:" "},pullUpLoad:{txt:{more:"",noMore:"没有更多数据了"}},scrollbar:!0}}),mounted(){this.$nextTick(()=>{this.$refs.scroll1.scrollTo(0,this.$store.state.m.gongsi.scrollTo)}),this.value=this.$store.state.m.gongsi.companyName},methods:{search(){this.$store.commit("m/gongsi/setData",{name:"companyName",data:this.value}),this.onPullingDown()},clickStart(){this.isShowMask=[!1,!1,!1],this.$refs.selectRelease.showMask=!1,this.$set(this.isShowMask,0,!this.isShowMask[0]),this.$refs.selectStartAddress.showMask=!this.$refs.selectStartAddress.showMask},clickRelease(){this.isShowMask=[!1,!1,!1],this.$refs.selectStartAddress.showMask=!1,this.$set(this.isShowMask,1,!this.isShowMask[1]),this.$refs.selectRelease.showMask=!this.$refs.selectRelease.showMask},clickRange(e){this.$router.push(`/m/gongsi/detail?id=${e}`)},getStartArea(data){this.$set(this.isShowMask,0,!1),data&&(this.$store.dispatch("m/gongsi/SETDATA",{data:data,name:"startName"}),this.onPullingDown())},getRelease(data){this.$set(this.isShowMask,1,!1),data&&(this.$store.commit("m/gongsi/setData",{name:"orderBy",data:data}),this.onPullingDown())},onPullingDown(){this.$nextTick(()=>{this.$refs.scroll1.scrollTo(0,0)}),this.$store.commit("m/gongsi/setData",{name:"scrollTo",data:0}),this.$store.commit("m/gongsi/setData",{name:"currentPage",data:1}),this.$store.commit("m/gongsi/setData",{name:"rangeList",data:[]}),this.getRangeList()},onPullingUp(){this.getRangeList()},getScroll(e){this.$store.commit("m/gongsi/setData",{name:"scrollTo",data:e.y})},getRangeList(){console.log(this.$store.state.m.gongsi.currentPage),console.log(this.$store.state.m.gongsi.pages),this.$store.state.m.gongsi.currentPage>this.$store.state.m.gongsi.pages&&this.$refs.scroll1.forceUpdate();let e={currentPage:this.$store.state.m.gongsi.currentPage,pageSize:20,province:this.$store.state.m.gongsi.startName[0],city:this.$store.state.m.gongsi.startName[1],orderBy:this.$store.state.m.gongsi.orderBy.value,companyName:this.$store.state.m.gongsi.companyName};this.$store.dispatch("m/gongsi/GETRANGELIST",{data:e,name:"rangeList"})}}};var h=Object(l.a)(d,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex_f flex_1"},[e._ssrNode("<div data-v-3d7dac32>","</div>",[e._ssrNode('<div class="flex_a f-26 b_b page_view_top b_c_w" data-v-3d7dac32><div'+e._ssrClass("flex_1 flex",[e.isShowMask[0]?"f_b":"c-3"])+' data-v-3d7dac32><span class="margin_r_10" data-v-3d7dac32>'+e._ssrEscape(e._s(""===e.$store.state.m.gongsi.startName[0]?"全国":e.$store.state.m.gongsi.startName[1]))+"</span> <div"+e._ssrClass(null,[e.isShowMask[0]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+' data-v-3d7dac32></div></div> <div class="flex_1 flex" data-v-3d7dac32><span'+e._ssrClass("margin_r_10",[!0===e.isShowMask[1]?"f_b":"c-3"])+" data-v-3d7dac32>"+e._ssrEscape(e._s(e.$store.state.m.gongsi.orderBy.name))+"</span> <div"+e._ssrClass(null,[e.isShowMask[1]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+' data-v-3d7dac32></div></div> <div class="flex_1 flex_ce margin_r_40" data-v-3d7dac32><img src="/m/gongsi/wuliugs_chaxun.png" class="search" data-v-3d7dac32></div></div> '),e._ssrNode('<div class="p_r" data-v-3d7dac32>',"</div>",[o("SelectAddress",{ref:"selectStartAddress",attrs:{top:"auto"},on:{setArea:e.getStartArea}}),e._ssrNode(" "),o("Release",{ref:"selectRelease",attrs:{top:"auto",form:"gongsi"},on:{setArea:e.getRelease}}),e._ssrNode(" "+(e.showSearch?'<div class="search_name padding_10 flex_a b_c_w" data-v-3d7dac32><input type="text"'+e._ssrAttr("value",e.value)+' class="search_content flex_1" data-v-3d7dac32> <div class="c-3 f-30 margin_l_10" data-v-3d7dac32>搜索</div></div>':"\x3c!----\x3e"))],2)],2),e._ssrNode(" "+(0===e.$store.state.m.gongsi.pages?'<div class="flex f-26 margin_t_40" data-v-3d7dac32>\n    没有相关数据\n  </div>':"\x3c!----\x3e")+" "),o("cube-scroll",{ref:"scroll1",staticClass:"mScroll flex_1",attrs:{"scroll-events":["scroll-end"],data:e.$store.state.m.gongsi.rangeList,options:e.options},on:{"pulling-down":e.onPullingDown,"pulling-up":e.onPullingUp,"scroll-end":e.getScroll}},e._l(e.$store.state.m.gongsi.rangeList,function(t,r){return o("div",{key:r,staticClass:"item",on:{click:function(o){return e.clickRange(t.id)}}},[o("div",{staticClass:"title c-3 f-30 b_b flex_sb"},[o("div",{staticClass:"flex_a"},[o("span",[e._v(e._s(t.companyName))]),e._v(" "),o("img",{staticClass:"img-v margin_l_20",attrs:{src:"/m/zhuanxian/details-icon-vip.png"}})]),e._v(" "),o("div",{staticClass:"flex_a f-20 f_w"},[o("div",{staticClass:"shou flex"},[e._v("授")]),e._v(" "),o("div",{staticClass:"jian margin_l_10 flex"},[e._v("荐")])])]),e._v(" "),o("div",{staticClass:"l_h"},[o("div",{staticClass:"f-36 f_w_b flex_a content_h"},[t.companyFacadeFile?o("img",{staticClass:"img-left margin_l_20 margin_r_20",attrs:{src:t.companyFacadeFile}}):o("img",{staticClass:"img-left margin_l_20 margin_r_20",attrs:{src:"/gongsi/images/moren.png"}}),e._v(" "),o("div",{staticClass:"flex_1 height_100"},[o("div",{staticClass:"flex_sb margin_b_10"},[o("img",{staticClass:"img-s",attrs:{src:"/images/huizong/icon_huangguan.gif"}}),e._v(" "),o("span",{staticClass:"time_b f-20 c-9 flex"},[e._v(e._s(t.browseNumber)+"人浏览")])]),e._v(" "),o("div",{staticClass:"flex_sb f-28 c-9"},[o("div",{staticClass:"threeElisp"},[e._v(e._s(t.allServiceNameList.join(",")))]),e._v(" "),o("a",{attrs:{href:"tel:"+t.mobile}},[o("img",{staticClass:"img-p",attrs:{src:"/m/zhuanxian/phone.png"},on:{click:function(e){e.stopPropagation()}}})])])])])])])}),0)],2)},[],!1,function(e){var t=o(238);t.__inject__&&t.__inject__(e)},"3d7dac32","99c446e0");t.default=h.exports}};
//# sourceMappingURL=c49b5804f78693d45a54.js.map