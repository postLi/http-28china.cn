exports.ids=[51,47],exports.modules={111:function(e,t,n){var content=n(127);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(3).default;e.exports.__inject__=function(e){r("5fd193eb",content,!0,e)}},122:function(e,t,n){"use strict";var r=n(124),o={name:"SelectAddress",props:{top:{type:String,default:"0"}},data:()=>({showMask:!1,list:[],cityList:[],areaList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1},{code:"",name:"",show:!1}]}),watch:{showMask(e,t){r.default.get("mCityHistoryList")&&e&&(this.list=r.default.get("mCityHistoryList"))}},methods:{selectedHis(e){this.showMask=!1,this.$emit("setArea",[e.startProvince,e.startCity,"全市"===e.name?"":e.name])},back(){this.showAddr[2].show?(this.$set(this.showAddr,2,{code:"",name:"",show:!1}),this.$set(this.showAddr[1],"show",!0)):this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince(e){"全国"===e.name?(this.$emit("setArea",["","",""]),this.showMask=!1):this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(t=>{let data=t.data;200===data.status&&(this.cityList=data.data&&data.data||[],this.showAddr=[{code:e.code,name:e.name,show:!1},{code:"",name:"",show:!0},{code:"",name:"",show:!1}])}).catch(e=>{})},selectCity(e){this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(t=>{let data=t.data;200===data.status&&(data.data?data.data.unshift({code:e.code,name:"全市",name1:e.name,parentCode:e.code}):data.data=[{code:e.code,name:"全市",name1:e.name,parentCode:e.code}],this.areaList=data.data&&data.data||[],this.$set(this.showAddr,1,{code:e.code,name:e.name,show:!1}),this.showAddr[2].show=!0)}).catch(e=>{})},selectArea(e){this.showMask=!1,this.$set(this.showAddr,2,{code:e.code,name:e.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name,"全市"===e.name?"":e.name]),e.startProvince=this.showAddr[0].name,e.startCity=this.showAddr[1].name,this.setHistory(e)},setHistory(data){if(r.default.get("mCityHistoryList")){let e=r.default.get("mCityHistoryList");e.some(e=>e.code===data.code)||(e.length>=4&&e.splice(3,1),e.unshift(data)),r.default.set("mCityHistoryList",e)}else r.default.set("mCityHistoryList",[data])},beforeEnter(e){e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter(e){e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px"},leave(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave(e){e.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},d=n(0);var component=Object(d.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?n("div",{staticClass:" heightTran"},[n("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[n("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("历史城市")]),e._v(" "),n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.list,function(t,r){return n("div",{key:r,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(n){return e.selectedHis(t)}}},[e._v(e._s("全市"===t.name?t.name1:t.name))])])}),0),e._v(" "),n("div",{staticClass:"flex_a"},[e.showAddr[0].show?n("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("选择城市")]):n("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(t){return e.back()}}},[e._v("返回上一线")]),e._v(" "),n("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[e._v(e._s(e.showAddr[0].name)+e._s(e.showAddr[1].name)+e._s("全市"===e.showAddr[2].name?"":e.showAddr[2].name))]),e._v(" "),n("div",{staticClass:"flex_1"})]),e._v(" "),e.showAddr[0].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.$store.state.m.provinceList,function(t,r){return n("div",{key:r,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return e.selectProvince(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[1].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.cityList,function(t,r){return n("div",{key:r,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return e.selectCity(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[2].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.areaList,function(t,r){return n("div",{key:r,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[2].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return e.selectArea(t)}}},[e._v(e._s(t.name))])])}),0):e._e()])]):e._e()]),e._ssrNode(" <div"+e._ssrClass(null,[e.showMask?"mask2":""])+e._ssrStyle(null,{top:e.top},null)+" data-v-01e81835></div>")],2)},[],!1,function(e){var t=n(126);t.__inject__&&t.__inject__(e)},"01e81835","03e67ddf");t.a=component.exports},124:function(e,t,n){"use strict";n.r(t);t.default={get:function(e){var t=window.localStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set:function(e,data){return window.localStorage.setItem(e,window.JSON.stringify(data))},remove:function(e){return window.localStorage.removeItem(e)},get_s:function(e){var t=window.sessionStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set_s:function(e,data){return window.sessionStorage.setItem(e,window.JSON.stringify(data))},remove_s:function(e){return window.sessionStorage.removeItem(e)}}},126:function(e,t,n){"use strict";n.r(t);var r=n(111),o=n.n(r);for(var d in r)"default"!==d&&function(e){n.d(t,e,function(){return r[e]})}(d);t.default=o.a},127:function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".code_box[data-v-01e81835]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-01e81835]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-01e81835]{border:1px solid #54a7ff;color:#54a7ff;background-color:rgba(84,167,255,.5)}.code_item_no_selected[data-v-01e81835]{border:1px solid #999}.heightTran[data-v-01e81835]{transition:all .2s;position:absolute;top:0;width:100%;height:8.3rem;z-index:100}.mask2[data-v-01e81835]{position:fixed;left:0;z-index:13;width:100%;height:100%;background-color:rgba(0,0,0,.4)}",""])},132:function(e,t,n){var content=n(144);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals),n(3).default("407d98b2",content,!0)},144:function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".cube-scroll-wrapper{position:relative;height:100%;overflow:hidden}.cube-scroll-list-wrapper{overflow:hidden}.cube-pulldown-wrapper{position:absolute;width:100%;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transition:all;transition:all}.cube-pulldown-wrapper .before-trigger{height:54px;line-height:0;padding-top:6px}.cube-pulldown-wrapper .after-trigger .loading{padding:8px 0}.cube-pulldown-wrapper .after-trigger .cube-pulldown-loaded{padding:12px 0}.cube-pullup-wrapper{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cube-pullup-wrapper .before-trigger{padding:22px 0;min-height:1em}.cube-pullup-wrapper .after-trigger{padding:19px 0}.cube-scroll-content{position:relative;z-index:1}.cube-scroll-item{height:60px;line-height:60px;font-size:18px;padding-left:20px}.cube-loading{font-size:24px}.cube-loading-spinners{position:relative;display:block;width:1em;height:1em}.cube-loading-spinner{position:absolute;left:44.5%;top:37%;width:2px;height:25%;border-radius:50%/20%;opacity:.25;background-color:currentColor;-webkit-animation:spinner-fade 1s linear infinite;animation:spinner-fade 1s linear infinite}.cube-loading-spinner:first-child{-webkit-animation-delay:0s;animation-delay:0s;-webkit-transform:rotate(-150deg) translateY(-150%);transform:rotate(-150deg) translateY(-150%)}.cube-loading-spinner:nth-child(2){-webkit-animation-delay:.083333333333333s;animation-delay:.083333333333333s;-webkit-transform:rotate(-120deg) translateY(-150%);transform:rotate(-120deg) translateY(-150%)}.cube-loading-spinner:nth-child(3){-webkit-animation-delay:.166666666666667s;animation-delay:.166666666666667s;-webkit-transform:rotate(-90deg) translateY(-150%);transform:rotate(-90deg) translateY(-150%)}.cube-loading-spinner:nth-child(4){-webkit-animation-delay:.25s;animation-delay:.25s;-webkit-transform:rotate(-60deg) translateY(-150%);transform:rotate(-60deg) translateY(-150%)}.cube-loading-spinner:nth-child(5){-webkit-animation-delay:.333333333333333s;animation-delay:.333333333333333s;-webkit-transform:rotate(-30deg) translateY(-150%);transform:rotate(-30deg) translateY(-150%)}.cube-loading-spinner:nth-child(6){-webkit-animation-delay:.416666666666667s;animation-delay:.416666666666667s;-webkit-transform:rotate(0deg) translateY(-150%);transform:rotate(0deg) translateY(-150%)}.cube-loading-spinner:nth-child(7){-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-transform:rotate(30deg) translateY(-150%);transform:rotate(30deg) translateY(-150%)}.cube-loading-spinner:nth-child(8){-webkit-animation-delay:.583333333333333s;animation-delay:.583333333333333s;-webkit-transform:rotate(60deg) translateY(-150%);transform:rotate(60deg) translateY(-150%)}.cube-loading-spinner:nth-child(9){-webkit-animation-delay:.666666666666667s;animation-delay:.666666666666667s;-webkit-transform:rotate(90deg) translateY(-150%);transform:rotate(90deg) translateY(-150%)}.cube-loading-spinner:nth-child(10){-webkit-animation-delay:.75s;animation-delay:.75s;-webkit-transform:rotate(120deg) translateY(-150%);transform:rotate(120deg) translateY(-150%)}.cube-loading-spinner:nth-child(11){-webkit-animation-delay:.833333333333333s;animation-delay:.833333333333333s;-webkit-transform:rotate(150deg) translateY(-150%);transform:rotate(150deg) translateY(-150%)}.cube-loading-spinner:nth-child(12){-webkit-animation-delay:.916666666666667s;animation-delay:.916666666666667s;-webkit-transform:rotate(180deg) translateY(-150%);transform:rotate(180deg) translateY(-150%)}@-webkit-keyframes spinner-fade{0%{opacity:.85}50%{opacity:.25}to{opacity:.25}}@keyframes spinner-fade{0%{opacity:.85}50%{opacity:.25}to{opacity:.25}}",""])},146:function(e,t,n){var content=n(220);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(3).default;e.exports.__inject__=function(e){r("104dbb7b",content,!0,e)}},147:function(e,t,n){var content=n(222);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=n(3).default;e.exports.__inject__=function(e){r("6effb26d",content,!0,e)}},219:function(e,t,n){"use strict";n.r(t);var r=n(146),o=n.n(r);for(var d in r)"default"!==d&&function(e){n.d(t,e,function(){return r[e]})}(d);t.default=o.a},220:function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".item[data-v-0da1fb56]{height:1rem}.heightTran[data-v-0da1fb56]{transition:all .2s;position:absolute;top:0;width:100%;height:4.1rem;z-index:100}.mask2[data-v-0da1fb56]{position:fixed;left:0;z-index:13;width:100%;height:100%;background-color:rgba(0,0,0,.4)}",""])},221:function(e,t,n){"use strict";n.r(t);var r=n(147),o=n.n(r);for(var d in r)"default"!==d&&function(e){n.d(t,e,function(){return r[e]})}(d);t.default=o.a},222:function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".item[data-v-74b300e4]{margin-top:.1rem;height:2.6rem;background:#fff;padding:0 .2rem .2rem}.item .title[data-v-74b300e4]{height:.88rem}.item .title .img-v[data-v-74b300e4]{width:.28rem;height:.24rem}.item .l_h[data-v-74b300e4]{line-height:.44rem;padding:.3rem 0}.item .l_h .img-p[data-v-74b300e4]{width:.44rem}.item .l_h .time[data-v-74b300e4]{margin-top:.1rem}.item .l_h .time .time_b[data-v-74b300e4]{height:.32rem;background:#eee;border-radius:.16rem;padding:.05rem .1rem}.shou[data-v-74b300e4]{background:#65a8ff}.jian[data-v-74b300e4],.shou[data-v-74b300e4]{width:.32rem;height:.32rem;border-radius:.04rem}.jian[data-v-74b300e4]{background:#f40}",""])},266:function(e,t,n){"use strict";n.r(t);var r=n(122),o={name:"Reputation",props:{top:{type:String,default:"0"}},data:()=>({showMask:!1,id:"",list:[{id:0,name:"信誉最高",value:"creditDesc"},{id:1,name:"运输时效",value:"transportAgingAsc"},{id:2,name:"重货价格最低",value:"weightPriceAsc"},{id:3,name:"轻货价格最低",value:"lightPriceAsc"}]}),methods:{selectReputation(e){this.id=e.id,this.showMask=!1,this.$emit("setArea",e.value)},beforeEnter(e){e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter(e){e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px"},leave(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave(e){e.style.height=""},closeMask(){this.showMask=!1}}},d=n(0);var l=Object(d.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?n("div",{staticClass:" heightTran"},[n("div",{staticClass:"b_c_w padding_l_20 padding_r_20 f-26 height_100 o_f"},e._l(e.list,function(t,r){return n("div",{key:r,staticClass:"item flex",class:[r===e.list.length-1?"":"b_b"],style:{color:e.id===t.id?"#54A7FF":""},on:{click:function(n){return e.selectReputation(t)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])}),0)]):e._e()]),e._ssrNode(" <div"+e._ssrClass(null,[e.showMask?"mask2":""])+e._ssrStyle(null,{top:e.top},null)+" data-v-0da1fb56></div>")],2)},[],!1,function(e){var t=n(219);t.__inject__&&t.__inject__(e)},"0da1fb56","7211a502").exports,c=n(1),h=n.n(c),m=n(101),f=n.n(m);n(132);h.a.use(f.a);var _={name:"PageZhuanXian",components:{SelectAddress:r.a,Reputation:l},data:()=>({isShowMask:[!1,!1,!1],options:{pullDownRefresh:{txt:" "},pullUpLoad:{txt:{more:"",noMore:"没有更多数据了"}},scrollbar:!0}}),mounted(){this.$nextTick(()=>{this.$refs.scroll.scrollTo(0,this.$store.state.m.zhuanxian.scrollTo)})},methods:{clickRange(e,t){this.$router.push(`/m/zhuanxian/detail?id=${e}&publishId=${t}`)},onPullingDown(){this.$store.commit("m/zhuanxian/setData",{name:"currentPage",data:1}),this.$store.commit("m/zhuanxian/setData",{name:"rangeList",data:[]}),this.getRangeList()},onPullingUp(){this.getRangeList()},getScroll(e){this.$store.commit("m/zhuanxian/setData",{name:"scrollTo",data:e.y})},getRangeList(){console.log(this.$store.state.m.zhuanxian.currentPage),console.log(this.$store.state.m.zhuanxian.pages),this.$store.state.m.zhuanxian.currentPage>this.$store.state.m.zhuanxian.pages&&this.$refs.scroll.forceUpdate();let e={currentPage:this.$store.state.m.zhuanxian.currentPage,pageSize:20,startProvince:this.$store.state.m.zhuanxian.startName[0],startCity:this.$store.state.m.zhuanxian.startName[1],startArea:this.$store.state.m.zhuanxian.startName[2],endProvince:this.$store.state.m.zhuanxian.endName[0],endCity:this.$store.state.m.zhuanxian.endName[1],endArea:this.$store.state.m.zhuanxian.endName[2]};this.$store.dispatch("m/zhuanxian/GETRANGELIST",{data:e,name:"rangeList"})},clickStart(){this.$set(this.isShowMask,1,!1),this.$set(this.isShowMask,2,!1),this.$refs.selectEndAddress.showMask=!1,this.$refs.selectReputation.showMask=!1,this.$set(this.isShowMask,0,!this.isShowMask[0]),this.$refs.selectStartAddress.showMask=!this.$refs.selectStartAddress.showMask},clickEnd(){this.$set(this.isShowMask,0,!1),this.$set(this.isShowMask,2,!1),this.$refs.selectStartAddress.showMask=!1,this.$refs.selectReputation.showMask=!1,this.$set(this.isShowMask,1,!this.isShowMask[1]),this.$refs.selectEndAddress.showMask=!this.$refs.selectEndAddress.showMask},clickReputation(){this.$set(this.isShowMask,0,!1),this.$set(this.isShowMask,1,!1),this.$refs.selectStartAddress.showMask=!1,this.$refs.selectEndAddress.showMask=!1,this.$set(this.isShowMask,2,!this.isShowMask[2]),this.$refs.selectReputation.showMask=!this.$refs.selectReputation.showMask},getStartArea(data){this.$set(this.isShowMask,0,!1),data&&(this.$store.dispatch("m/zhuanxian/SETDATA",{data:data,name:"startName"}),this.onPullingDown())},getEndArea(data){this.$set(this.isShowMask,1,!1),data&&(this.$store.dispatch("m/zhuanxian/SETDATA",{data:data,name:"endName"}),this.onPullingDown())},getReputation(data){this.$set(this.isShowMask,2,!1),console.log(data)}}};var w=Object(d.a)(_,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex_f flex_1"},[e._ssrNode("<div data-v-74b300e4>","</div>",[e._ssrNode('<div class="flex_a f-26 b_b page_view_top b_c_w" data-v-74b300e4><div'+e._ssrClass("flex_1 flex",[e.isShowMask[0]?"f_b":"c-3"])+' data-v-74b300e4><span class="margin_r_10" data-v-74b300e4>'+e._ssrEscape(e._s(""===e.$store.state.m.zhuanxian.startName[0]?"全国":""===e.$store.state.m.zhuanxian.startName[2]?e.$store.state.m.zhuanxian.startName[1]:e.$store.state.m.zhuanxian.startName[2]))+"</span> <div"+e._ssrClass(null,[e.isShowMask[0]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+" data-v-74b300e4></div></div> <div"+e._ssrClass("flex_1 flex",[!0===e.isShowMask[1]?"f_b":"c-3"])+' data-v-74b300e4><span class="margin_r_10" data-v-74b300e4>'+e._ssrEscape(e._s(""===e.$store.state.m.zhuanxian.endName[0]?"全国":""===e.$store.state.m.zhuanxian.endName[2]?e.$store.state.m.zhuanxian.endName[1]:e.$store.state.m.zhuanxian.endName[2]))+"</span> <div"+e._ssrClass(null,[e.isShowMask[1]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+' data-v-74b300e4></div></div> <div class="flex_1 flex" data-v-74b300e4><span'+e._ssrClass("margin_r_10",[!0===e.isShowMask[2]?"f_b":"c-3"])+" data-v-74b300e4>信誉最高</span> <div"+e._ssrClass(null,[e.isShowMask[2]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+" data-v-74b300e4></div></div></div> "),e._ssrNode('<div class="p_r" data-v-74b300e4>',"</div>",[n("SelectAddress",{ref:"selectStartAddress",attrs:{top:"auto"},on:{setArea:e.getStartArea}}),e._ssrNode(" "),n("SelectAddress",{ref:"selectEndAddress",attrs:{top:"auto"},on:{setArea:e.getEndArea}}),e._ssrNode(" "),n("Reputation",{ref:"selectReputation",attrs:{top:"auto"},on:{setArea:e.getReputation}})],2)],2),e._ssrNode(" "+(0===e.$store.state.m.zhuanxian.pages?'<div class="flex f-26" data-v-74b300e4>\n    没有相关数据\n  </div>':"\x3c!----\x3e")+" "),n("cube-scroll",{ref:"scroll",staticClass:"mScroll flex_1",attrs:{"scroll-events":["scroll-end"],data:e.$store.state.m.zhuanxian.rangeList,options:e.options},on:{"pulling-down":e.onPullingDown,"pulling-up":e.onPullingUp,"scroll-end":e.getScroll}},e._l(e.$store.state.m.zhuanxian.rangeList,function(t,r){return n("div",{key:r,staticClass:"item",on:{click:function(n){return e.clickRange(t.id,t.publishId)}}},[n("div",{staticClass:"title c-3 f-30 b_b flex_sb"},[n("div",{staticClass:"flex_a"},[n("span",[e._v(e._s(t.companyName))]),e._v(" "),n("img",{staticClass:"img-v margin_l_20",attrs:{src:"/m/zhuanxian/details-icon-vip.png"}})]),e._v(" "),n("div",{staticClass:"flex_a f-20 f_w"},[n("div",{staticClass:"shou flex"},[e._v("授")]),e._v(" "),n("div",{staticClass:"jian margin_l_10 flex"},[e._v("荐")])])]),e._v(" "),n("div",{staticClass:"l_h"},[n("div",{staticClass:"width_100"},[n("div",{staticClass:"f-36 f_w_b flex_sb"},[n("span",[e._v(e._s(t.startCity)+" "+e._s(t.startArea)+" -- "+e._s(t.endCity)+" "+e._s(t.endArea))]),e._v(" "),n("img",{staticClass:"img-p margin_l_20",attrs:{src:"/m/zhuanxian/phone.png"}})]),e._v(" "),n("div",{staticClass:"time f-20 c-9"},[n("span",{staticClass:"time_b"},[e._v("时效"+e._s(t.transportAging)+e._s(t.transportAgingUnit))]),e._v(" "),n("span",{staticClass:"margin_l_20 time_b"},[e._v(e._s(t.browseNumber)+"人浏览")])])]),e._v(" "),n("div",{staticClass:"f-24 f-40"},[e._v("\n          轻货："+e._s(t.lightPrice)+"元/m³ 重货："+e._s(t.weightPrice)+"元/公斤\n        ")])])])}),0)],2)},[],!1,function(e){var t=n(221);t.__inject__&&t.__inject__(e)},"74b300e4","5758df16");t.default=w.exports}};
//# sourceMappingURL=14daff5083e717343c74.js.map