exports.ids=[51,47],exports.modules={111:function(e,t,n){var content=n(131);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var o=n(3).default;e.exports.__inject__=function(e){o("eecd741e",content,!0,e)}},119:function(e,t,n){"use strict";n.r(t);t.default={get:function(e){var t=window.localStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set:function(e,data){return window.localStorage.setItem(e,window.JSON.stringify(data))},remove:function(e){return window.localStorage.removeItem(e)},get_s:function(e){var t=window.sessionStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set_s:function(e,data){return window.sessionStorage.setItem(e,window.JSON.stringify(data))},remove_s:function(e){return window.sessionStorage.removeItem(e)}}},127:function(e,t,n){"use strict";var o=n(119),r={name:"SelectAddress",props:{top:{type:String,default:"0"}},data:()=>({showMask:!1,list:[],cityList:[],areaList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1},{code:"",name:"",show:!1}]}),watch:{showMask(e,t){o.default.get("mCityHistoryList")&&e&&(this.list=o.default.get("mCityHistoryList"))}},methods:{selectedHis(e){this.showMask=!1,this.$emit("setArea",[e.startProvince,e.startCity,"全市"===e.name?"":e.name])},back(){this.showAddr[2].show?(this.$set(this.showAddr,2,{code:"",name:"",show:!1}),this.$set(this.showAddr[1],"show",!0)):this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince(e){"全国"===e.name?(this.$emit("setArea",["","",""]),this.showMask=!1):this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(t=>{let data=t.data;200===data.status&&(this.cityList=data.data&&data.data||[],this.showAddr=[{code:e.code,name:e.name,show:!1},{code:"",name:"",show:!0},{code:"",name:"",show:!1}])}).catch(e=>{})},selectCity(e){this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(t=>{let data=t.data;200===data.status&&(data.data?data.data.unshift({code:e.code,name:"全市",name1:e.name,parentCode:e.code}):data.data=[{code:e.code,name:"全市",name1:e.name,parentCode:e.code}],this.areaList=data.data&&data.data||[],this.$set(this.showAddr,1,{code:e.code,name:e.name,show:!1}),this.showAddr[2].show=!0)}).catch(e=>{})},selectArea(e){this.showMask=!1,this.$set(this.showAddr,2,{code:e.code,name:e.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name,"全市"===e.name?"":e.name]),e.startProvince=this.showAddr[0].name,e.startCity=this.showAddr[1].name,this.setHistory(e)},setHistory(data){if(o.default.get("mCityHistoryList")){let e=o.default.get("mCityHistoryList");e.some(e=>e.code===data.code)||(e.length>=4&&e.splice(3,1),e.unshift(data)),o.default.set("mCityHistoryList",e)}else o.default.set("mCityHistoryList",[data])},beforeEnter(e){e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter(e){e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px"},leave(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave(e){e.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},c=n(0);var component=Object(c.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?n("div",{staticClass:" heightTran"},[n("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[n("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("历史城市")]),e._v(" "),n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.list,function(t,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(n){return e.selectedHis(t)}}},[e._v(e._s("全市"===t.name?t.name1:t.name))])])}),0),e._v(" "),n("div",{staticClass:"flex_a"},[e.showAddr[0].show?n("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("选择城市")]):n("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(t){return e.back()}}},[e._v("返回上一线")]),e._v(" "),n("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[e._v(e._s(e.showAddr[0].name)+e._s(e.showAddr[1].name)+e._s("全市"===e.showAddr[2].name?"":e.showAddr[2].name))]),e._v(" "),n("div",{staticClass:"flex_1"})]),e._v(" "),e.showAddr[0].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.$store.state.m.provinceList,function(t,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return e.selectProvince(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[1].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.cityList,function(t,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return e.selectCity(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[2].show?n("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.areaList,function(t,o){return n("div",{key:o,staticClass:"code_box flex"},[n("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[2].code?"code_item_selected":"code_item_no_selected"],on:{click:function(n){return e.selectArea(t)}}},[e._v(e._s(t.name))])])}),0):e._e()])]):e._e()]),e._ssrNode(" <div"+e._ssrClass(null,[e.showMask?"mask2":""])+e._ssrStyle(null,{top:e.top},null)+" data-v-0b6ec86c></div>")],2)},[],!1,function(e){var t=n(130);t.__inject__&&t.__inject__(e)},"0b6ec86c","03e67ddf");t.a=component.exports},130:function(e,t,n){"use strict";n.r(t);var o=n(111),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t.default=r.a},131:function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".code_box[data-v-0b6ec86c]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-0b6ec86c]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-0b6ec86c]{border:1px solid #54a7ff;color:#54a7ff;background-color:rgba(84,167,255,.5)}.code_item_no_selected[data-v-0b6ec86c]{border:1px solid #999}.heightTran[data-v-0b6ec86c]{transition:all .2s;position:absolute;top:0;width:100%;height:8.3rem;z-index:100}",""])},154:function(e,t,n){var content=n(242);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var o=n(3).default;e.exports.__inject__=function(e){o("099037f2",content,!0,e)}},155:function(e,t,n){var content=n(244);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var o=n(3).default;e.exports.__inject__=function(e){o("318c7ef9",content,!0,e)}},173:function(e,t,n){var content=n(174);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals),n(3).default("4475b8ad",content,!0)},174:function(e,t,n){(e.exports=n(2)(!1)).push([e.i,'.cube-action-sheet-fade-enter,.cube-action-sheet-fade-leave-active{opacity:0}.cube-action-sheet-fade-enter-active,.cube-action-sheet-fade-leave-active{-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.cube-action-sheet-panel{text-align:center;font-size:14px;background-color:#fff}.cube-action-sheet-move-enter,.cube-action-sheet-move-leave-active{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.cube-action-sheet-move-enter-active,.cube-action-sheet-move-leave-active{-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.cube-action-sheet-cancel{background-color:#fff}.cube-action-sheet-cancel span,.cube-action-sheet-item,.cube-action-sheet-title{display:block;padding:17px 16px;margin:0;text-align:center;overflow:hidden;white-space:nowrap;font-size:16px;font-weight:400;line-height:1;color:#666;background-color:#fff}.cube-action-sheet-cancel span:active,.cube-action-sheet-item:active{background-color:rgba(0,0,0,.04)}.cube-action-sheet-title{padding-top:16px;padding-bottom:16px;color:#333;font-size:18px}.cube-action-sheet-content{overflow:hidden;background:#fff}.cube-action-sheet-list{list-style:none}.cube-action-sheet-item{list-style:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cube-action-sheet-item:last-of-type:after,.cube-action-sheet-item:last-of-type:before{display:none}.cube-action-sheet-item[data-align=left]{text-align:left}.cube-action-sheet-item[data-align=right]{text-align:right}.cube-action-sheet-space{height:6px;background-color:rgba(37,38,45,.4)}.cube-action-sheet-item_active{color:#fc9153}.cube-action-sheet_picker .cube-action-sheet-space{height:0}.cube-action-sheet_picker .cube-action-sheet-title{height:1em;padding-top:21px;padding-bottom:21px}.cube-action-sheet_picker .cube-action-sheet-cancel{position:absolute;top:0;background-color:transparent}.cube-action-sheet_picker .cube-action-sheet-cancel span{padding-top:23px;padding-bottom:23px;color:#999;font-size:14px;background-color:transparent}.cube-action-sheet_picker .cube-action-sheet-cancel span:active{color:#ccc;background-color:transparent}.cube-popup{position:fixed;left:0;right:0;top:0;bottom:0;z-index:100;pointer-events:none}.cube-popup_mask{pointer-events:auto}.cube-popup_mask .cube-popup-mask{display:block}.cube-popup-container,.cube-popup-mask{position:absolute;width:100%;height:100%}.cube-popup-mask{display:none;overflow:hidden;background-color:#25262d;opacity:.4;pointer-events:auto}.cube-popup-mask:before{content:".";display:block;width:1px;height:1px;background-color:rgba(0,0,0,.1);margin-left:-10px}.cube-popup-container{-webkit-transform:translate(100%,100%);transform:translate(100%,100%)}.cube-popup-content{position:absolute;top:0;left:0;width:100%;box-sizing:border-box;-webkit-transform:translate(-100%,-100%);transform:translate(-100%,-100%);pointer-events:auto}.cube-popup-center .cube-popup-content,.cube-popup-left .cube-popup-content,.cube-popup-right .cube-popup-content{top:-50%;left:-50%;width:auto;max-width:100%;-webkit-transform:translate(0);transform:translate(0)}.cube-popup-left .cube-popup-content,.cube-popup-right .cube-popup-content{height:100%;top:-100%}.cube-popup-center .cube-popup-content{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.cube-popup-top .cube-popup-content{top:-100%;left:-100%;-webkit-transform:translate(0);transform:translate(0)}.cube-popup-right .cube-popup-content{top:-100%;right:100%}.cube-popup-left .cube-popup-content{left:-100%}',""])},241:function(e,t,n){"use strict";n.r(t);var o=n(154),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t.default=r.a},242:function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".item[data-v-394c8f9c]{height:1rem}.heightTran[data-v-394c8f9c]{transition:all .2s;position:absolute;top:0;width:100%;height:4.1rem;z-index:100}",""])},243:function(e,t,n){"use strict";n.r(t);var o=n(155),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t.default=r.a},244:function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".item[data-v-4b3794ae]{margin-top:.1rem;height:2.6rem;background:#fff;padding:0 .2rem .2rem}.item .title[data-v-4b3794ae]{height:.88rem}.item .title .img-v[data-v-4b3794ae]{width:.28rem;height:.24rem}.item .l_h[data-v-4b3794ae]{line-height:.44rem;padding:.3rem 0}.item .l_h .img-p[data-v-4b3794ae]{width:.44rem}.item .l_h .time[data-v-4b3794ae]{margin-top:.1rem}.item .l_h .time .time_b[data-v-4b3794ae]{height:.32rem;background:#eee;border-radius:.16rem;padding:.05rem .1rem}.shou[data-v-4b3794ae]{background:#65a8ff}.jian[data-v-4b3794ae],.shou[data-v-4b3794ae]{width:.32rem;height:.32rem;border-radius:.04rem}.jian[data-v-4b3794ae]{background:#f40}",""])},286:function(e,t,n){"use strict";n.r(t);var o=n(127),r={name:"Reputation",props:{top:{type:String,default:"0"}},data:()=>({showMask:!1,list:[{name:"信誉最高",value:"creditDesc"},{name:"运输时效",value:"transportAgingAsc"},{name:"重货价格最低",value:"weightPriceAsc"},{name:"轻货价格最低",value:"lightPriceAsc"}]}),methods:{selectReputation(e){this.showMask=!1,this.$emit("setArea",e)},beforeEnter(e){e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter(e){e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px"},leave(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave(e){e.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},c=n(0);var l=Object(c.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?n("div",{staticClass:" heightTran"},[n("div",{staticClass:"b_c_w padding_l_20 padding_r_20 f-26 height_100 o_f"},e._l(e.list,function(t,o){return n("div",{key:o,staticClass:"item flex",class:[o===e.list.length-1?"":"b_b"],style:{color:e.$store.state.m.zhuanxian.orderBy.value===t.value?"#54A7FF":""},on:{click:function(n){return e.selectReputation(t)}}},[e._v("\n          "+e._s(t.name)+"\n        ")])}),0)]):e._e()]),e._ssrNode(" <div"+e._ssrClass(null,[e.showMask?"mask2":""])+e._ssrStyle(null,{top:e.top},null)+" data-v-394c8f9c></div>")],2)},[],!1,function(e){var t=n(241);t.__inject__&&t.__inject__(e)},"394c8f9c","7211a502").exports,d=n(1),h=n.n(d),m=n(103),_=n.n(m);n(173);h.a.use(_.a);var f={name:"PageZhuanXian",components:{SelectAddress:o.a,Reputation:l},data:()=>({isShowMask:[!1,!1,!1],options:{pullDownRefresh:{txt:" "},pullUpLoad:{txt:{more:"",noMore:"没有更多数据了"}},scrollbar:!0}}),mounted(){this.$nextTick(()=>{this.$refs.scroll.scrollTo(0,this.$store.state.m.zhuanxian.scrollTo)})},methods:{phone(s,e){let t={},n={},o=[t=s?{content:"出发地手机号码"}:{content:"出发地还没有手机号码"},n=e?{content:"到达地手机号码"}:{content:"到达地还没有手机号码"}];this.$createActionSheet({title:"",pickerStyle:!0,data:o,onSelect:(t,n)=>{console.log(t),"出发地手机号码"===t.content&&(window.location.href=`tel:${s}`),"到达地手机号码"===t.content&&(window.location.href=`tel:${e}`)},onCancel:()=>{}}).show()},clickRange(e,t){this.$router.push(`/m/zhuanxian/detail?id=${e}&publishId=${t}`)},onPullingDown(){this.$store.commit("m/zhuanxian/setData",{name:"currentPage",data:1}),this.$store.commit("m/zhuanxian/setData",{name:"rangeList",data:[]}),this.getRangeList()},onPullingUp(){this.getRangeList()},getScroll(e){this.$store.commit("m/zhuanxian/setData",{name:"scrollTo",data:e.y})},getRangeList(){console.log(this.$store.state.m.zhuanxian.currentPage),console.log(this.$store.state.m.zhuanxian.pages),this.$store.state.m.zhuanxian.currentPage>this.$store.state.m.zhuanxian.pages&&this.$refs.scroll.forceUpdate();let e={currentPage:this.$store.state.m.zhuanxian.currentPage,pageSize:20,startProvince:this.$store.state.m.zhuanxian.startName[0],startCity:this.$store.state.m.zhuanxian.startName[1],startArea:this.$store.state.m.zhuanxian.startName[2],endProvince:this.$store.state.m.zhuanxian.endName[0],endCity:this.$store.state.m.zhuanxian.endName[1],endArea:this.$store.state.m.zhuanxian.endName[2],orderBy:this.$store.state.m.zhuanxian.orderBy.value};this.$store.dispatch("m/zhuanxian/GETRANGELIST",{data:e,name:"rangeList"})},clickStart(){this.isShowMask=[!1,!1,!1],this.$refs.selectEndAddress.showMask=!1,this.$refs.selectReputation.showMask=!1,this.$set(this.isShowMask,0,!this.isShowMask[0]),this.$refs.selectStartAddress.showMask=!this.$refs.selectStartAddress.showMask},clickEnd(){this.isShowMask=[!1,!1,!1],this.$refs.selectStartAddress.showMask=!1,this.$refs.selectReputation.showMask=!1,this.$set(this.isShowMask,1,!this.isShowMask[1]),this.$refs.selectEndAddress.showMask=!this.$refs.selectEndAddress.showMask},clickReputation(){this.isShowMask=[!1,!1,!1],this.$refs.selectStartAddress.showMask=!1,this.$refs.selectEndAddress.showMask=!1,this.$set(this.isShowMask,2,!this.isShowMask[2]),this.$refs.selectReputation.showMask=!this.$refs.selectReputation.showMask},getStartArea(data){this.$set(this.isShowMask,0,!1),data&&(this.$store.dispatch("m/zhuanxian/SETDATA",{data:data,name:"startName"}),this.onPullingDown())},getEndArea(data){this.$set(this.isShowMask,1,!1),data&&(this.$store.dispatch("m/zhuanxian/SETDATA",{data:data,name:"endName"}),this.onPullingDown())},getReputation(data){this.$set(this.isShowMask,2,!1),data&&(this.$store.commit("m/zhuanxian/setData",{name:"orderBy",data:data}),this.onPullingDown())}}};var v=Object(c.a)(f,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex_f flex_1"},[e._ssrNode("<div data-v-4b3794ae>","</div>",[e._ssrNode('<div class="flex_a f-26 b_b page_view_top b_c_w" data-v-4b3794ae><div'+e._ssrClass("flex_1 flex",[e.isShowMask[0]?"f_b":"c-3"])+' data-v-4b3794ae><span class="margin_r_10" data-v-4b3794ae>'+e._ssrEscape(e._s(""===e.$store.state.m.zhuanxian.startName[0]?"全国":""===e.$store.state.m.zhuanxian.startName[2]?e.$store.state.m.zhuanxian.startName[1]:e.$store.state.m.zhuanxian.startName[2]))+"</span> <div"+e._ssrClass(null,[e.isShowMask[0]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+" data-v-4b3794ae></div></div> <div"+e._ssrClass("flex_1 flex",[!0===e.isShowMask[1]?"f_b":"c-3"])+' data-v-4b3794ae><span class="margin_r_10" data-v-4b3794ae>'+e._ssrEscape(e._s(""===e.$store.state.m.zhuanxian.endName[0]?"全国":""===e.$store.state.m.zhuanxian.endName[2]?e.$store.state.m.zhuanxian.endName[1]:e.$store.state.m.zhuanxian.endName[2]))+"</span> <div"+e._ssrClass(null,[e.isShowMask[1]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+' data-v-4b3794ae></div></div> <div class="flex_1 flex" data-v-4b3794ae><span'+e._ssrClass("margin_r_10",[!0===e.isShowMask[2]?"f_b":"c-3"])+" data-v-4b3794ae>"+e._ssrEscape(e._s(e.$store.state.m.zhuanxian.orderBy.name))+"</span> <div"+e._ssrClass(null,[e.isShowMask[2]?"page_view_triangle-down-g":"page_view_triangle-down-9"])+" data-v-4b3794ae></div></div></div> "),e._ssrNode('<div class="p_r" data-v-4b3794ae>',"</div>",[n("SelectAddress",{ref:"selectStartAddress",attrs:{top:"auto"},on:{setArea:e.getStartArea}}),e._ssrNode(" "),n("SelectAddress",{ref:"selectEndAddress",attrs:{top:"auto"},on:{setArea:e.getEndArea}}),e._ssrNode(" "),n("Reputation",{ref:"selectReputation",attrs:{top:"auto"},on:{setArea:e.getReputation}})],2)],2),e._ssrNode(" "+(0===e.$store.state.m.zhuanxian.pages?'<div class="flex f-26 margin_t_40" data-v-4b3794ae>\n    没有相关数据\n  </div>':"\x3c!----\x3e")+" "),n("cube-scroll",{ref:"scroll",staticClass:"mScroll flex_1",attrs:{"scroll-events":["scroll-end"],data:e.$store.state.m.zhuanxian.rangeList,options:e.options},on:{"pulling-down":e.onPullingDown,"pulling-up":e.onPullingUp,"scroll-end":e.getScroll}},e._l(e.$store.state.m.zhuanxian.rangeList,function(t,o){return n("div",{key:o,staticClass:"item",on:{click:function(n){return e.clickRange(t.id,t.publishId)}}},[n("div",{staticClass:"title c-3 f-30 b_b flex_sb"},[n("div",{staticClass:"flex_a"},[n("span",[e._v(e._s(t.companyName))]),e._v(" "),n("img",{staticClass:"img-v margin_l_20",attrs:{src:"/m/zhuanxian/details-icon-vip.png"}})]),e._v(" "),n("div",{staticClass:"flex_a f-20 f_w"},[n("div",{staticClass:"shou flex"},[e._v("授")]),e._v(" "),n("div",{staticClass:"jian margin_l_10 flex"},[e._v("荐")])])]),e._v(" "),n("div",{staticClass:"l_h"},[n("div",{staticClass:"width_100"},[n("div",{staticClass:"f-36 f_w_b flex_sb"},[n("span",[e._v(e._s(t.startCity)+" "+e._s(t.startArea)+" -- "+e._s(t.endCity)+" "+e._s(t.endArea))]),e._v(" "),n("img",{staticClass:"img-p margin_l_20",attrs:{src:"/m/zhuanxian/phone.png"},on:{click:function(n){return n.stopPropagation(),e.phone(t.startLocationContactsMobile,t.endLocationContactsMobile)}}})]),e._v(" "),n("div",{staticClass:"time f-20 c-9"},[n("span",{staticClass:"time_b"},[e._v("时效"+e._s(t.transportAging)+e._s(t.transportAgingUnit))]),e._v(" "),n("span",{staticClass:"margin_l_20 time_b"},[e._v(e._s(t.browseNumber)+"人浏览")])])]),e._v(" "),n("div",{staticClass:"f-24 f_40"},[e._v("\n          轻货："+e._s(t.lightPrice)+"元/m³ 重货："+e._s(t.weightPrice)+"元/公斤\n        ")])])])}),0)],2)},[],!1,function(e){var t=n(243);t.__inject__&&t.__inject__(e)},"4b3794ae","5758df16");t.default=v.exports}};
//# sourceMappingURL=8b9b5f4cbb20104baa6c.js.map