(window.webpackJsonp=window.webpackJsonp||[]).push([[43,44],{270:function(e,t,o){var content=o(357);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("ab0c80a2",content,!0,{sourceMap:!1})},271:function(e,t,o){var content=o(359);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(17).default)("25e64c12",content,!0,{sourceMap:!1})},322:function(e,t,o){"use strict";o.r(t);t.default={get:function(e){var t=window.localStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set:function(e,data){return window.localStorage.setItem(e,window.JSON.stringify(data))},remove:function(e){return window.localStorage.removeItem(e)},get_s:function(e){var t=window.sessionStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set_s:function(e,data){return window.sessionStorage.setItem(e,window.JSON.stringify(data))},remove_s:function(e){return window.sessionStorage.removeItem(e)}}},356:function(e,t,o){"use strict";var n=o(270);o.n(n).a},357:function(e,t,o){(e.exports=o(16)(!1)).push([e.i,".code_box[data-v-105daa2e]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-105daa2e]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-105daa2e]{border:.01rem solid #2fb301;color:#2fb301;background-color:rgba(47,179,1,.5)}.code_item_no_selected[data-v-105daa2e]{border:.01rem solid #999}.heightTran[data-v-105daa2e]{transition:all .2s;position:absolute;top:0;width:100%;height:9.3rem;z-index:100}.mask2[data-v-105daa2e]{position:fixed;top:0;left:0;z-index:13;width:100%;height:100%;background-color:rgba(0,0,0,.4)}",""])},358:function(e,t,o){"use strict";var n=o(271);o.n(n).a},359:function(e,t,o){(e.exports=o(16)(!1)).push([e.i,".home[data-v-ce25f6a8]{height:inherit;background:#f4f4f4}.home .top[data-v-ce25f6a8]{width:100%}.home .body[data-v-ce25f6a8]{position:relative;top:-1.3rem}.home .body .nav[data-v-ce25f6a8]{width:90%;margin:0 auto;height:3.68rem}.home .body .nav .nav_top[data-v-ce25f6a8]{height:.88rem;background-color:rgba(51,51,51,.5);border-top-left-radius:.16rem;border-top-right-radius:.16rem;color:#fff}.home .body .nav .nav_down[data-v-ce25f6a8]{background-color:#fff;border-bottom-left-radius:.16rem;border-bottom-right-radius:.16rem}.home .body .nav .nav_down .circle[data-v-ce25f6a8]{display:inline-block;width:.18rem;height:.18rem;border-radius:.18rem;margin-right:.14rem}.home .body .nav .nav_down .change[data-v-ce25f6a8]{width:.68rem;height:.68rem}.home .body .nav .nav_down .buttom[data-v-ce25f6a8]{width:95%;height:.8rem;background:linear-gradient(90deg,#61aeff,#3497ff);border-radius:.16rem}.home .body .content1[data-v-ce25f6a8]{height:1.88rem;background-color:#fff;padding:0 .59rem}.home .body .content1 .content1_circle[data-v-ce25f6a8]{width:1rem;height:1rem;border-radius:1rem;margin-bottom:.1rem}.home .body .content2[data-v-ce25f6a8]{background-color:#fff;padding:0 .59rem;height:4.27rem}.home .body .content2 img[data-v-ce25f6a8]{margin:.3rem 0 .1rem}.home footer[data-v-ce25f6a8]{position:fixed;width:100%;bottom:0;height:.98rem;padding:0 1.31rem;background:#f6f8fa;box-shadow:0 -.02rem .08rem 0 rgba(20,20,20,.05),0 0 .06rem 0 rgba(20,20,20,.05);color:#42474b;box-sizing:border-box}.home footer .middle[data-v-ce25f6a8]{position:relative;top:-.34rem}.home footer .circle[data-v-ce25f6a8]{width:1.16rem;height:1.16rem;border-radius:1.16rem;background-color:#3f94ee}.nav_top_selected[data-v-ce25f6a8]{background-color:#fff;border-top-left-radius:.16rem;border-top-right-radius:.16rem;color:#000}",""])},531:function(e,t,o){"use strict";o.r(t);o(56);var n=o(8),r=(o(6),o(322)),c={name:"SelectAddress",data:function(){return{showMask:!1,list:[],cityList:[],areaList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1},{code:"",name:"",show:!1}]}},watch:{showMask:function(e,t){r.default.get("mCityHistoryList")&&e&&(this.list=r.default.get("mCityHistoryList"))}},methods:{selectedHis:function(e){this.showMask=!1,this.$emit("setArea",[e.startProvince,e.startCity,"全市"===e.name?"":e.name])},back:function(){this.showAddr[2].show?(this.$set(this.showAddr,2,{code:"",name:"",show:!1}),this.$set(this.showAddr[1],"show",!0)):this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince:function(e){var t=this;this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(function(o){var data=o.data;200===data.status&&(t.cityList=data.data&&data.data||[],t.showAddr=[{code:e.code,name:e.name,show:!1},{code:"",name:"",show:!0},{code:"",name:"",show:!1}])}).catch(function(e){})},selectCity:function(e){var t=this;this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(function(o){var data=o.data;200===data.status&&(data.data?data.data.unshift({code:e.code,name:"全市",name1:e.name,parentCode:e.code}):data.data=[{code:e.code,name:"全市",name1:e.name,parentCode:e.code}],t.areaList=data.data&&data.data||[],t.$set(t.showAddr,1,{code:e.code,name:e.name,show:!1}),t.showAddr[2].show=!0)}).catch(function(e){})},selectArea:function(e){this.showMask=!1,this.$set(this.showAddr,2,{code:e.code,name:e.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name,"全市"===e.name?"":e.name]),e.startProvince=this.showAddr[0].name,e.startCity=this.showAddr[1].name,this.setHistory(e)},setHistory:function(data){if(r.default.get("mCityHistoryList")){var e=r.default.get("mCityHistoryList");e.some(function(e){return e.code===data.code})||(e.length>=4&&e.splice(3,1),e.unshift(data)),r.default.set("mCityHistoryList",e)}else r.default.set("mCityHistoryList",[data])},beforeEnter:function(e){e.style.height="0"},enter:function(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter:function(e){e.style.height=""},beforeLeave:function(e){e.style.height=e.scrollHeight+"px"},leave:function(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave:function(e){e.style.height=""},closeMask:function(){this.showMask=!1}}},d=(o(356),o(1)),l={components:{SelectAddress:Object(d.a)(c,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?o("div",{staticClass:" heightTran"},[o("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[o("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("历史城市")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.list,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(o){return e.selectedHis(t)}}},[e._v(e._s("全市"===t.name?t.name1:t.name))])])}),0),e._v(" "),o("div",{staticClass:"flex_a"},[e.showAddr[0].show?o("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("选择城市")]):o("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(t){return e.back()}}},[e._v("返回上一线")]),e._v(" "),o("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[e._v(e._s(e.showAddr[0].name)+e._s(e.showAddr[1].name)+e._s("全市"===e.showAddr[2].name?"":e.showAddr[2].name))]),e._v(" "),o("div",{staticClass:"flex_1"})]),e._v(" "),e.showAddr[0].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.$store.state.m.provinceList,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectProvince(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[1].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.cityList,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectCity(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[2].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.areaList,function(t,n){return o("div",{key:n,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[2].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectArea(t)}}},[e._v(e._s(t.name))])])}),0):e._e()])]):e._e()]),e._v(" "),o("div",{class:[e.showMask?"mask2":""],on:{click:function(t){return e.closeMask()}}})],1)},[],!1,null,"105daa2e",null).exports},layout:"m",data:function(){return{navList:[{id:0,name:"找专线"},{id:1,name:"找货源"},{id:2,name:"找车源"}],content1List:[{name:"专线大厅",url:"/m/home/home_zhuanxian.png",bc:"#929DFB",to:"/m/zhuanxian"},{name:"货源大厅",url:"/m/home/home_huoyuandt.png",bc:"#F77D5E",to:"/m/huoyuan"},{name:"车源大厅",url:"/m/home/home_cheyuandt.png",bc:"#F6CB43",to:"/m/cheyuan"},{name:"物流公司",url:"/m/home/home_wuliugs.png",bc:"#5592F7",to:"/m/gongsi"}],content2List:[{name:"在线下单",url:"/m/home/home_xiadan.png",to:"/m/zhuanxian"},{name:"运单查询",url:"/m/home/home_chaxun.png",to:"/m/huoyuan"},{name:"APP下载",url:"/m/home/home_app.png",to:"/m/cheyuan"},{name:"活动中心",url:"/m/home/home_huodong.png",to:"/m/gongsi"}]}},fetch:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.$axios,t.app,t.query,o=t.store,e.next=3,o.dispatch("m/GETPROVINCELIST",{data:"",name:"provinceList"});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),created:function(){},mounted:function(){},methods:{getEndArea:function(data){this.$store.dispatch("m/SETDATA",{data:data,name:"endName"})},getStartArea:function(data){this.$store.dispatch("m/SETDATA",{data:data,name:"startName"})},search:function(){console.log(this.$store.state.m)},toClick:function(e){},clickEnd:function(){this.$refs.selectEndAddress.showMask=!0},clickStart:function(){this.$refs.selectStartAddress.showMask=!0},clickChange:function(e,t){this.$store.dispatch("m/SETDATA",{data:t,name:"startName"}),this.$store.dispatch("m/SETDATA",{data:e,name:"endName"})},clickNav:function(e){this.$store.dispatch("m/SETDATA",{data:e,name:"navId"})}}},m=(o(358),Object(d.a)(l,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{staticClass:"top",attrs:{src:"/m/home/home_banner.png"}}),e._v(" "),o("div",{staticClass:"body flex_f"},[o("div",{staticClass:"nav flex_f"},[o("div",{staticClass:"nav_top flex_a f-34"},e._l(e.navList,function(t,n){return o("div",{key:n,staticClass:"flex_1 flex height_100",class:[t.id===e.$store.state.m.navId?"nav_top_selected":""],on:{click:function(o){return e.clickNav(t.id)}}},[e._v(e._s(t.name))])}),0),e._v(" "),o("div",{staticClass:"flex_1 nav_down padding_20 flex_f flex_sb"},[e._m(0),e._v(" "),o("div",{staticClass:"flex_sb width_100"},[o("div",{staticClass:"f-46 flex_1 oneElisp",class:[""===e.$store.state.m.startName[1]&&""===e.$store.state.m.startName[2]?"c-9":"c-3"],on:{click:function(t){return e.clickStart()}}},[e._v(e._s(""===e.$store.state.m.startName[1]&&""===e.$store.state.m.startName[2]?"选那儿送":""===e.$store.state.m.startName[2]?e.$store.state.m.startName[1]:e.$store.state.m.startName[2]))]),e._v(" "),o("div",{staticClass:"flex_1 flex"},[o("img",{staticClass:"change",attrs:{src:"/m/home/home_wangfan.png"},on:{click:function(t){return e.clickChange(e.$store.state.m.startName,e.$store.state.m.endName)}}})]),e._v(" "),o("div",{staticClass:"f-46 flex_1 oneElisp",class:[""===e.$store.state.m.endName[1]&&""===e.$store.state.m.endName[2]?"c-9":"c-3"],staticStyle:{"text-align":"end"},on:{click:function(t){return e.clickEnd()}}},[e._v(e._s(""===e.$store.state.m.endName[1]&&""===e.$store.state.m.endName[2]?"往那儿运":""===e.$store.state.m.endName[2]?e.$store.state.m.endName[1]:e.$store.state.m.endName[2]))])]),e._v(" "),o("div",{staticClass:"buttom f_w f-34 flex",on:{click:function(t){return e.search()}}},[e._v("立即搜索")])])]),e._v(" "),o("div",{staticClass:"content1 margin_t_20 flex_sb"},e._l(e.content1List,function(t,n){return o("nuxt-link",{key:n,attrs:{to:t.to}},[o("div",{staticClass:"content1_circle flex",style:{background:t.bc}},[o("img",{staticStyle:{width:"60%"},attrs:{src:t.url}})]),e._v(" "),o("div",{staticClass:"c-3 f-26"},[e._v(e._s(t.name))])])}),1),e._v(" "),o("div",{staticClass:"content2 margin_t_20 flex_as"},[o("div",{staticClass:"flex_sb width_100"},e._l(e.content2List,function(t,n){return o("div",{key:n},[o("div",{staticClass:"flex_a flex_f",on:{click:function(o){return e.toClick(t.name)}}},[o("img",{staticStyle:{height:"0.56rem"},attrs:{src:t.url}}),e._v(" "),o("div",{staticClass:"c-7 f-26"},[e._v(e._s(t.name))])])])}),0)])]),e._v(" "),e._m(1),e._v(" "),o("SelectAddress",{ref:"selectStartAddress",on:{setArea:e.getStartArea}}),e._v(" "),o("SelectAddress",{ref:"selectEndAddress",on:{setArea:e.getEndArea}})],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex_sb f-22 width_100"},[t("div",[t("span",{staticClass:"circle b_c_g"}),this._v("出发地")]),this._v(" "),t("div",[t("span",{staticClass:"circle b_c_r"}),this._v("到达地")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",{staticClass:"flex_sb f-16"},[o("div",{staticClass:"flex_f flex_a"},[o("img",{staticStyle:{width:"0.46rem"},attrs:{src:"/m/home/home_home.png"}}),e._v(" "),o("div",[e._v("首页")])]),e._v(" "),o("div",{staticClass:"flex_f flex_a middle"},[o("div",{staticClass:"circle flex"},[o("img",{staticStyle:{width:"0.76rem"},attrs:{src:"/m/home/home_fahuo.png"}})]),e._v(" "),o("div",[e._v("发货")])]),e._v(" "),o("div",{staticClass:"flex_f flex_a"},[o("img",{staticStyle:{width:"0.46rem"},attrs:{src:"/m/home/lobby_icon_activity.png"}}),e._v(" "),o("div",[e._v("公告")])])])}],!1,null,"ce25f6a8",null));t.default=m.exports}}]);