(window.webpackJsonp=window.webpackJsonp||[]).push([[48,55],{245:function(e,t,n){"use strict";n.r(t);t.default={get:function(e){var t=window.localStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set:function(e,data){return window.localStorage.setItem(e,window.JSON.stringify(data))},remove:function(e){return window.localStorage.removeItem(e)},get_s:function(e){var t=window.sessionStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set_s:function(e,data){return window.sessionStorage.setItem(e,window.JSON.stringify(data))},remove_s:function(e){return window.sessionStorage.removeItem(e)}}},249:function(e,t,n){var content=n(290);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("4bdf1dfa",content,!0,{sourceMap:!1})},273:function(e,t,n){var content=n(360);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("00a497f8",content,!0,{sourceMap:!1})},274:function(e,t,n){var content=n(362);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("4c75f558",content,!0,{sourceMap:!1})},280:function(e,t,n){"use strict";var o={name:"Release",props:{top:{type:String,default:"0"},form:{type:String,default:""}},data:function(){return{showMask:!1,listHuoYuan:[{name:"最新发布",value:"creditDesc"},{name:"价格最高",value:"weightPriceAsc"}],listCheYuan:[{name:"最新发布",value:"createTimeDesc"},{name:"价格最低",value:"expectPriceAsc"}],listGongSi:[{name:"最新发布",value:"createDesc"},{name:"信誉最高",value:"creditDesc"}]}},methods:{selectRelease:function(e){this.showMask=!1,this.$emit("setArea",e)},beforeEnter:function(e){e.style.height="0"},enter:function(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter:function(e){e.style.height=""},beforeLeave:function(e){e.style.height=e.scrollHeight+"px"},leave:function(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave:function(e){e.style.height=""},closeMask:function(){this.showMask=!1,this.$emit("setArea",!1)}}},r=(n(289),n(0)),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?n("div",{staticClass:" heightTran"},["huoyuan"===e.form?n("div",{staticClass:"b_c_w padding_l_20 padding_r_20 f-26 height_100 o_f"},e._l(e.listHuoYuan,function(t,o){return n("div",{key:o,staticClass:"item flex",class:[o===e.listHuoYuan.length-1?"":"b_b"],style:{color:e.$store.state.m.huoyuan.orderBy.value===t.value?"#54A7FF":""},on:{click:function(n){return e.selectRelease(t)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])}),0):e._e(),e._v(" "),"cheyuan"===e.form?n("div",{staticClass:"b_c_w padding_l_20 padding_r_20 f-26 height_100 o_f"},e._l(e.listCheYuan,function(t,o){return n("div",{key:o,staticClass:"item flex",class:[o===e.listCheYuan.length-1?"":"b_b"],style:{color:e.$store.state.m.cheyuan.orderBy.value===t.value?"#54A7FF":""},on:{click:function(n){return e.selectRelease(t)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])}),0):e._e(),e._v(" "),"gongsi"===e.form?n("div",{staticClass:"b_c_w padding_l_20 padding_r_20 f-26 height_100 o_f"},e._l(e.listGongSi,function(t,o){return n("div",{key:o,staticClass:"item flex",class:[o===e.listGongSi.length-1?"":"b_b"],style:{color:e.$store.state.m.gongsi.orderBy.value===t.value?"#54A7FF":""},on:{click:function(n){return e.selectRelease(t)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])}),0):e._e()]):e._e()]),e._v(" "),n("div",{class:[e.showMask?"mask2":""],style:{top:e.top},on:{click:function(t){return e.closeMask()}}})],1)},[],!1,null,"0d482994",null);t.a=component.exports},289:function(e,t,n){"use strict";var o=n(249);n.n(o).a},290:function(e,t,n){(e.exports=n(8)(!1)).push([e.i,".item[data-v-0d482994]{height:1rem}.heightTran[data-v-0d482994]{transition:all .2s;position:absolute;top:0;width:100%;height:2.1rem;z-index:100}",""])},359:function(e,t,n){"use strict";var o=n(273);n.n(o).a},360:function(e,t,n){(e.exports=n(8)(!1)).push([e.i,".code_box[data-v-162f4d6c]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-162f4d6c]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-162f4d6c]{border:1px solid #54a7ff;color:#54a7ff;background-color:rgba(84,167,255,.5)}.code_item_no_selected[data-v-162f4d6c]{border:1px solid #999}.heightTran[data-v-162f4d6c]{transition:all .2s;position:absolute;top:0;width:100%;height:8.3rem;z-index:100}",""])},361:function(e,t,n){"use strict";var o=n(274);n.n(o).a},362:function(e,t,n){(e.exports=n(8)(!1)).push([e.i,".search[data-v-3d7dac32]{width:.42rem;height:.44rem}.item[data-v-3d7dac32]{margin-top:.1rem;background:#fff;padding:0 .2rem .2rem}.item .title[data-v-3d7dac32]{height:.88rem}.item .title .img-v[data-v-3d7dac32]{width:.28rem;height:.24rem}.item .l_h[data-v-3d7dac32]{padding:.2rem 0}.item .content_h[data-v-3d7dac32]{height:1.55rem}.item .img-left[data-v-3d7dac32]{width:1.55rem;height:1.55rem}.item .img-s[data-v-3d7dac32]{width:.28rem}.item .img-p[data-v-3d7dac32]{width:.44rem}.item .time_b[data-v-3d7dac32]{height:.32rem;background:#eee;border-radius:.16rem;padding:.05rem .1rem}.shou[data-v-3d7dac32]{background:#65a8ff}.jian[data-v-3d7dac32],.shou[data-v-3d7dac32]{width:.32rem;height:.32rem;border-radius:.04rem}.jian[data-v-3d7dac32]{background:#f40}.threeElisp[data-v-3d7dac32]{-webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;\n  /*! autoprefixer: off */-webkit-box-orient:vertical;line-height:.33rem}.search_name[data-v-3d7dac32]{box-sizing:border-box}.search_name .search_content[data-v-3d7dac32]{background-color:#f4f4f4;border-radius:.1rem;height:.5rem;font-size:.3rem!important;border:none;outline:none;padding-left:.2rem}",""])},411:function(e,t,n){"use strict";n.r(t);n(3);var o=n(245),r={name:"SelectAddress",props:{top:{type:String,default:"0"}},data:function(){return{showMask:!1,list:[],cityList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1}]}},watch:{showMask:function(e,t){o.default.get("mCityHistoryListGongSi")&&e&&(this.list=o.default.get("mCityHistoryListGongSi"))}},methods:{selectedHis:function(e){this.showMask=!1,this.$emit("setArea",[e.startProvince,e.startCity])},back:function(){this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince:function(e){var t=this;"全国"===e.name?(this.$emit("setArea",["","",""]),this.showMask=!1):this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(function(n){var data=n.data;200===data.status&&(t.cityList=data.data&&data.data||[],t.showAddr=[{code:e.code,name:e.name,show:!1},{code:"",name:"",show:!0}])}).catch(function(e){})},selectCity:function(e){this.showMask=!1,this.$set(this.showAddr,1,{code:e.code,name:e.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name]),e.startProvince=this.showAddr[0].name,e.startCity=this.showAddr[1].name,this.setHistory(e)},setHistory:function(data){if(o.default.get("mCityHistoryListGongSi")){var e=o.default.get("mCityHistoryListGongSi");e.some(function(e){return e.code===data.code})||(e.length>=4&&e.splice(3,1),e.unshift(data)),o.default.set("mCityHistoryListGongSi",e)}else o.default.set("mCityHistoryListGongSi",[data])},beforeEnter:function(e){e.style.height="0"},enter:function(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter:function(e){e.style.height=""},beforeLeave:function(e){e.style.height=e.scrollHeight+"px"},leave:function(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave:function(e){e.style.height=""},closeMask:function(){this.showMask=!1,this.$emit("setArea",!1)}}},c=(n(359),n(0)),l=Object(c.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?n("div",{staticClass:" heightTran"},[n("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[n("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("历史城市")]),e._v(" "),n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.list,function(t,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(n){return e.selectedHis(t)}}},[e._v(e._s("全市"===t.name?t.name1:t.name))])])}),0),e._v(" "),n("div",{staticClass:"flex_a"},[e.showAddr[0].show?n("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("选择城市")]):n("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(t){return e.back()}}},[e._v("返回上一线")]),e._v(" "),n("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[e._v(e._s(e.showAddr[0].name)+e._s(e.showAddr[1].name))]),e._v(" "),n("div",{staticClass:"flex_1"})]),e._v(" "),e.showAddr[0].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.$store.state.m.provinceList,function(t,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return e.selectProvince(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[1].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.cityList,function(t,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return e.selectCity(t)}}},[e._v(e._s(t.name))])])}),0):e._e()])]):e._e()]),e._v(" "),n("div",{class:[e.showMask?"mask2":""],style:{top:e.top},on:{click:function(t){return e.closeMask()}}})],1)},[],!1,null,"162f4d6c",null).exports,d={name:"PageGongSi",components:{Release:n(280).a,SelectAddress:l},data:function(){return{isShowMask:[!1,!1,!1],showSearch:!1,value:"",options:{pullDownRefresh:{txt:" "},pullUpLoad:{txt:{more:"",noMore:"没有更多数据了"}},scrollbar:!0}}},mounted:function(){var e=this;this.$nextTick(function(){e.$refs.scroll1.scrollTo(0,e.$store.state.m.gongsi.scrollTo)}),this.value=this.$store.state.m.gongsi.companyName},methods:{search:function(){this.$store.commit("m/gongsi/setData",{name:"companyName",data:this.value}),this.onPullingDown()},clickStart:function(){this.isShowMask=[!1,!1,!1],this.$refs.selectRelease.showMask=!1,this.$set(this.isShowMask,0,!this.isShowMask[0]),this.$refs.selectStartAddress.showMask=!this.$refs.selectStartAddress.showMask},clickRelease:function(){this.isShowMask=[!1,!1,!1],this.$refs.selectStartAddress.showMask=!1,this.$set(this.isShowMask,1,!this.isShowMask[1]),this.$refs.selectRelease.showMask=!this.$refs.selectRelease.showMask},clickRange:function(e){this.$router.push("/m/gongsi/detail?id=".concat(e))},getStartArea:function(data){this.$set(this.isShowMask,0,!1),data&&(this.$store.dispatch("m/gongsi/SETDATA",{data:data,name:"startName"}),this.onPullingDown())},getRelease:function(data){this.$set(this.isShowMask,1,!1),data&&(this.$store.commit("m/gongsi/setData",{name:"orderBy",data:data}),this.onPullingDown())},onPullingDown:function(){var e=this;this.$nextTick(function(){e.$refs.scroll1.scrollTo(0,0)}),this.$store.commit("m/gongsi/setData",{name:"scrollTo",data:0}),this.$store.commit("m/gongsi/setData",{name:"currentPage",data:1}),this.$store.commit("m/gongsi/setData",{name:"rangeList",data:[]}),this.getRangeList()},onPullingUp:function(){this.getRangeList()},getScroll:function(e){this.$store.commit("m/gongsi/setData",{name:"scrollTo",data:e.y})},getRangeList:function(){console.log(this.$store.state.m.gongsi.currentPage),console.log(this.$store.state.m.gongsi.pages),this.$store.state.m.gongsi.currentPage>this.$store.state.m.gongsi.pages&&this.$refs.scroll1.forceUpdate();var e={currentPage:this.$store.state.m.gongsi.currentPage,pageSize:20,province:this.$store.state.m.gongsi.startName[0],city:this.$store.state.m.gongsi.startName[1],orderBy:this.$store.state.m.gongsi.orderBy.value,companyName:this.$store.state.m.gongsi.companyName};this.$store.dispatch("m/gongsi/GETRANGELIST",{data:e,name:"rangeList"})}}},h=(n(361),Object(c.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex_f flex_1"},[n("div",[n("div",{staticClass:"flex_a f-26 b_b page_view_top b_c_w"},[n("div",{staticClass:"flex_1 flex",class:[e.isShowMask[0]?"f_b":"c-3"],on:{click:function(t){return e.clickStart()}}},[n("span",{staticClass:"margin_r_10"},[e._v(e._s(""===e.$store.state.m.gongsi.startName[0]?"全国":e.$store.state.m.gongsi.startName[1]))]),e._v(" "),n("div",{class:[e.isShowMask[0]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})]),e._v(" "),n("div",{staticClass:"flex_1 flex",on:{click:function(t){return e.clickRelease()}}},[n("span",{staticClass:"margin_r_10",class:[!0===e.isShowMask[1]?"f_b":"c-3"]},[e._v(e._s(e.$store.state.m.gongsi.orderBy.name))]),e._v(" "),n("div",{class:[e.isShowMask[1]?"page_view_triangle-down-g":"page_view_triangle-down-9"]})]),e._v(" "),n("div",{staticClass:"flex_1 flex_ce margin_r_40"},[n("img",{staticClass:"search",attrs:{src:"/m/gongsi/wuliugs_chaxun.png"},on:{click:function(t){e.showSearch=!e.showSearch}}})])]),e._v(" "),n("div",{staticClass:"p_r"},[n("SelectAddress",{ref:"selectStartAddress",attrs:{top:"auto"},on:{setArea:e.getStartArea}}),e._v(" "),n("Release",{ref:"selectRelease",attrs:{top:"auto",form:"gongsi"},on:{setArea:e.getRelease}}),e._v(" "),e.showSearch?n("div",{staticClass:"search_name padding_10 flex_a b_c_w"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"search_content flex_1",attrs:{type:"text"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),n("div",{staticClass:"c-3 f-30 margin_l_10",on:{click:function(t){return e.search()}}},[e._v("搜索")])]):e._e()],1)]),e._v(" "),0===e.$store.state.m.gongsi.pages?n("div",{staticClass:"flex f-26 margin_t_40"},[e._v("\n    没有相关数据\n  ")]):e._e(),e._v(" "),n("cube-scroll",{ref:"scroll1",staticClass:"mScroll flex_1",attrs:{"scroll-events":["scroll-end"],data:e.$store.state.m.gongsi.rangeList,options:e.options},on:{"pulling-down":e.onPullingDown,"pulling-up":e.onPullingUp,"scroll-end":e.getScroll}},e._l(e.$store.state.m.gongsi.rangeList,function(t,o){return n("div",{key:o,staticClass:"item",on:{click:function(n){return e.clickRange(t.id)}}},[n("div",{staticClass:"title c-3 f-30 b_b flex_sb"},[n("div",{staticClass:"flex_a"},[n("span",[e._v(e._s(t.companyName))]),e._v(" "),n("img",{staticClass:"img-v margin_l_20",attrs:{src:"/m/zhuanxian/details-icon-vip.png"}})]),e._v(" "),n("div",{staticClass:"flex_a f-20 f_w"},[n("div",{staticClass:"shou flex"},[e._v("授")]),e._v(" "),n("div",{staticClass:"jian margin_l_10 flex"},[e._v("荐")])])]),e._v(" "),n("div",{staticClass:"l_h"},[n("div",{staticClass:"f-36 f_w_b flex_a content_h"},[t.companyFacadeFile?n("img",{staticClass:"img-left margin_l_20 margin_r_20",attrs:{src:t.companyFacadeFile}}):n("img",{staticClass:"img-left margin_l_20 margin_r_20",attrs:{src:"/gongsi/images/moren.png"}}),e._v(" "),n("div",{staticClass:"flex_1 height_100"},[n("div",{staticClass:"flex_sb margin_b_10"},[n("img",{staticClass:"img-s",attrs:{src:"/images/huizong/icon_huangguan.gif"}}),e._v(" "),n("span",{staticClass:"time_b f-20 c-9 flex"},[e._v(e._s(t.browseNumber)+"人浏览")])]),e._v(" "),n("div",{staticClass:"flex_sb f-28 c-9"},[n("div",{staticClass:"threeElisp"},[e._v(e._s(t.allServiceNameList.join(",")))]),e._v(" "),n("a",{attrs:{href:"tel:"+t.mobile}},[n("img",{staticClass:"img-p",attrs:{src:"/m/zhuanxian/phone.png"},on:{click:function(e){e.stopPropagation()}}})])])])])])])}),0)],1)},[],!1,null,"3d7dac32",null));t.default=h.exports}}]);