(window.webpackJsonp=window.webpackJsonp||[]).push([[55,57],{191:function(t,e,o){var content=o(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(5).default)("eecd741e",content,!0,{sourceMap:!1})},200:function(t,e,o){"use strict";o.r(e);e.default={get:function(t){var e=window.localStorage.getItem(t);return null===e?null:window.JSON.parse(e)},set:function(t,data){return window.localStorage.setItem(t,window.JSON.stringify(data))},remove:function(t){return window.localStorage.removeItem(t)},get_s:function(t){var e=window.sessionStorage.getItem(t);return null===e?null:window.JSON.parse(e)},set_s:function(t,data){return window.sessionStorage.setItem(t,window.JSON.stringify(data))},remove_s:function(t){return window.sessionStorage.removeItem(t)}}},213:function(t,e,o){"use strict";var r=o(200),n={name:"SelectAddress",props:{top:{type:String,default:"0"}},data:()=>({showMask:!1,list:[],cityList:[],areaList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1},{code:"",name:"",show:!1}]}),watch:{showMask(t,e){r.default.get("mCityHistoryList")&&t&&(this.list=r.default.get("mCityHistoryList"))}},methods:{selectedHis(t){this.showMask=!1,this.$emit("setArea",[t.startProvince,t.startCity,"全市"===t.name?"":t.name])},back(){this.showAddr[2].show?(this.$set(this.showAddr,2,{code:"",name:"",show:!1}),this.$set(this.showAddr[1],"show",!0)):this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince(t){"全国"===t.name?(this.$emit("setArea",["","",""]),this.showMask=!1):this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t.code).then(e=>{let data=e.data;200===data.status&&(this.cityList=data.data&&data.data||[],this.showAddr=[{code:t.code,name:t.name,show:!1},{code:"",name:"",show:!0},{code:"",name:"",show:!1}])}).catch(t=>{})},selectCity(t){this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t.code).then(e=>{let data=e.data;200===data.status&&(data.data?data.data.unshift({code:t.code,name:"全市",name1:t.name,parentCode:t.code}):data.data=[{code:t.code,name:"全市",name1:t.name,parentCode:t.code}],this.areaList=data.data&&data.data||[],this.$set(this.showAddr,1,{code:t.code,name:t.name,show:!1}),this.showAddr[2].show=!0)}).catch(t=>{})},selectArea(t){this.showMask=!1,this.$set(this.showAddr,2,{code:t.code,name:t.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name,"全市"===t.name?"":t.name]),t.startProvince=this.showAddr[0].name,t.startCity=this.showAddr[1].name,this.setHistory(t)},setHistory(data){if(r.default.get("mCityHistoryList")){let t=r.default.get("mCityHistoryList");t.some(t=>t.code===data.code)||(t.length>=4&&t.splice(3,1),t.unshift(data)),r.default.set("mCityHistoryList",t)}else r.default.set("mCityHistoryList",[data])},beforeEnter(t){t.style.height="0"},enter(t){0!==t.scrollHeight?t.style.height=t.scrollHeight+"px":t.style.height=""},afterEnter(t){t.style.height=""},beforeLeave(t){t.style.height=t.scrollHeight+"px"},leave(t){0!==t.scrollHeight&&(t.style.height=0)},afterLeave(t){t.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},m=(o(215),o(2)),component=Object(m.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("transition",{on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},[t.showMask?o("div",{staticClass:" heightTran"},[o("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[o("div",{staticClass:"c-3 flex_1 f_w_b"},[t._v("历史城市")]),t._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.list,function(e,r){return o("div",{key:r,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(o){return t.selectedHis(e)}}},[t._v(t._s("全市"===e.name?e.name1:e.name))])])}),0),t._v(" "),o("div",{staticClass:"flex_a"},[t.showAddr[0].show?o("div",{staticClass:"c-3 flex_1 f_w_b"},[t._v("选择城市")]):o("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(e){return t.back()}}},[t._v("返回上一线")]),t._v(" "),o("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[t._v(t._s(t.showAddr[0].name)+t._s(t.showAddr[1].name)+t._s("全市"===t.showAddr[2].name?"":t.showAddr[2].name))]),t._v(" "),o("div",{staticClass:"flex_1"})]),t._v(" "),t.showAddr[0].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.$store.state.m.provinceList,function(e,r){return o("div",{key:r,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return t.selectProvince(e)}}},[t._v(t._s(e.name))])])}),0):t._e(),t._v(" "),t.showAddr[1].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.cityList,function(e,r){return o("div",{key:r,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return t.selectCity(e)}}},[t._v(t._s(e.name))])])}),0):t._e(),t._v(" "),t.showAddr[2].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.areaList,function(e,r){return o("div",{key:r,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[2].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return t.selectArea(e)}}},[t._v(t._s(e.name))])])}),0):t._e()])]):t._e()]),t._v(" "),o("div",{class:[t.showMask?"mask2":""],style:{top:t.top},on:{click:function(e){return t.closeMask()}}})],1)},[],!1,null,"0b6ec86c",null);e.a=component.exports},215:function(t,e,o){"use strict";var r=o(191);o.n(r).a},216:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,".code_box[data-v-0b6ec86c]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-0b6ec86c]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-0b6ec86c]{border:1px solid #54a7ff;color:#54a7ff;background-color:rgba(84,167,255,.5)}.code_item_no_selected[data-v-0b6ec86c]{border:1px solid #999}.heightTran[data-v-0b6ec86c]{transition:all .2s;position:absolute;top:0;width:100%;height:8.3rem;z-index:100}",""])},221:function(t,e,o){var content=o(283);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(5).default)("6a148644",content,!0,{sourceMap:!1})},282:function(t,e,o){"use strict";var r=o(221);o.n(r).a},283:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,".mask2[data-v-a04fa022]{position:fixed;top:0;left:0;z-index:13;width:100%;height:100%;background-color:rgba(0,0,0,.4)}.down_window[data-v-a04fa022]{width:80%;height:8.2rem;z-index:100;background:#ee595a;padding:.2rem}.down_window .down[data-v-a04fa022]{margin:0 auto;width:4.8rem;height:.9rem;background:#fa0}",""])},284:function(t,e,o){var content=o(410);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(5).default)("4f2e47ba",content,!0,{sourceMap:!1})},360:function(t,e,o){"use strict";var r={name:"DownApp",data:()=>({showMask:!1}),methods:{downApp(){window.location.href="http://h5.28tms.com/"}}},n=(o(282),o(2)),component=Object(n.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showMask?o("div",{staticClass:"flex",class:[t.showMask?"mask2":""],on:{click:function(e){t.showMask=!1}}},[o("div",{staticClass:"down_window flex_f",on:{click:function(t){t.stopPropagation(),t.preventDefault()}}},[o("div",{staticClass:"flex_jfe"},[o("img",{attrs:{src:"/images/login_close.png"},on:{click:function(e){t.showMask=!1}}})]),t._v(" "),o("div",{staticClass:"f-46 t_c f_w"},[t._v("APP下单发货")]),t._v(" "),o("div",{staticClass:"f-32 t_c f_w"},[t._v("注册立送8200元，名满即止")]),t._v(" "),o("div",{staticClass:"f-32 t_c f_w"},[t._v("发货贵了，差价双倍返还")]),t._v(" "),o("img",{staticClass:"width_100",attrs:{src:"/m/home/u23.png"}}),t._v(" "),o("div",{staticClass:"down f-32 f_w flex",on:{click:function(e){return t.downApp()}}},[t._v("前往下载")]),t._v(" "),o("div",{staticClass:"f-32 t_c f_w margin_t_20",on:{click:function(e){t.showMask=!1}}},[t._v("暂不")])])]):t._e()},[],!1,null,"a04fa022",null);e.a=component.exports},409:function(t,e,o){"use strict";var r=o(284);o.n(r).a},410:function(t,e,o){(t.exports=o(4)(!1)).push([t.i,".gg_item[data-v-a67d4424]{height:1.2rem;padding-left:.3rem}.gg_item img[data-v-a67d4424]{width:.78rem;height:.78rem}.gg_item .right[data-v-a67d4424]{line-height:.37rem}.home[data-v-a67d4424]{height:inherit;background:#f4f4f4}.home .top[data-v-a67d4424]{width:100%}.home .body[data-v-a67d4424]{position:relative;top:-1.3rem}.home .body .nav[data-v-a67d4424]{width:90%;margin:0 auto;height:3.68rem}.home .body .nav .nav_top[data-v-a67d4424]{height:.88rem;background-color:rgba(51,51,51,.5);border-top-left-radius:.16rem;border-top-right-radius:.16rem;color:#fff}.home .body .nav .nav_down[data-v-a67d4424]{background-color:#fff;border-bottom-left-radius:.16rem;border-bottom-right-radius:.16rem}.home .body .nav .nav_down .circle[data-v-a67d4424]{display:inline-block;width:.18rem;height:.18rem;border-radius:.18rem;margin-right:.14rem}.home .body .nav .nav_down .change[data-v-a67d4424]{width:.68rem;height:.68rem}.home .body .nav .nav_down .buttom[data-v-a67d4424]{width:95%;height:.8rem;background:linear-gradient(90deg,#61aeff,#3497ff);border-radius:.16rem}.home .body .content1[data-v-a67d4424]{height:1.88rem;width:90%;background-color:#fff;margin:.2rem auto 0;border-radius:.16rem}.home .body .content1 .content1_circle[data-v-a67d4424]{width:1rem;height:1rem;border-radius:1rem;margin-bottom:.1rem}.home .body .content2[data-v-a67d4424]{background-color:#fff;height:4.27rem;width:90%;border-radius:.16rem;margin:.2rem auto 0}.home .body .content2 img[data-v-a67d4424]{margin:.3rem 0 .1rem}.home footer[data-v-a67d4424]{position:fixed;width:100%;bottom:0;height:.98rem;padding:0 1.31rem;background:#f6f8fa;box-shadow:0 -.02rem .08rem 0 rgba(20,20,20,.05),0 0 .06rem 0 rgba(20,20,20,.05);color:#42474b;box-sizing:border-box}.home footer .h[data-v-a67d4424]{height:.8rem}.home footer .middle[data-v-a67d4424]{position:relative;top:-.34rem}.home footer .circle[data-v-a67d4424]{width:.46rem;height:.46rem}.home footer .circle_out[data-v-a67d4424]{width:1rem;height:1rem;background-color:#fff;position:absolute;top:-.5rem;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:.5rem;box-shadow:0 -2px 2px 0 hsla(0,0%,62%,.5)}.home footer .circle_out .circle_in[data-v-a67d4424]{width:85%;height:85%;border-radius:1.16rem;background-color:#3f94ee}.nav_top_selected[data-v-a67d4424]{background-color:#fff;border-top-left-radius:.16rem;border-top-right-radius:.16rem;color:#000}",""])},627:function(t,e,o){"use strict";o.r(e);var r=o(6),n=o(213),m={components:{DownApp:o(360).a,SelectAddress:n.a},layout:"m",data:()=>({navList:[{id:0,name:"找专线"},{id:1,name:"找货源"},{id:3,name:"找车源"}],content1List:[{id:0,name:"专线大厅",url:"/m/home/home_zhuanxian.png",bc:"#929DFB",to:"/m/pageView"},{id:1,name:"货源大厅",url:"/m/home/home_huoyuandt.png",bc:"#F77D5E",to:"/m/pageView"},{id:3,name:"车源大厅",url:"/m/home/home_cheyuandt.png",bc:"#F6CB43",to:"/m/pageView"},{id:4,name:"物流公司",url:"/m/home/home_wuliugs.png",bc:"#5592F7",to:"/m/pageView"}],content2List:[{name:"在线下单",url:"/m/home/home_xiadan.png",to:""},{name:"运单查询",url:"/m/home/home_chaxun.png",to:"/m/ydcx"},{name:"APP下载",url:"/m/home/home_app.png",to:""},{name:"活动中心",url:"/m/home/home_huodong.png",to:""}]}),fetch:t=>Object(r.a)(function*(){t.$axios,t.app,t.query,t.store})(),created(){},mounted(){},methods:{toHome(t){this.$store.commit("m/setData",{name:"showHome",data:t})},toNotice(t){this.$router.push("/m/gg/ggList?name=".concat(t.name?t.name:"","&noticeGroupCode=").concat(t.code))},getEndArea(data){data&&this.$store.dispatch("m/SETDATA",{data:data,name:"endName"})},getStartArea(data){data&&this.$store.dispatch("m/SETDATA",{data:data,name:"startName"})},search(){this.$store.commit("m/pageView/setData",{name:"footerId",data:this.$store.state.m.navId}),this.$router.push("/m/pageView");let t=[this.$store.state.m.startName[0],this.$store.state.m.startName[1],this.$store.state.m.startName[2]],e=[this.$store.state.m.endName[0],this.$store.state.m.endName[1],this.$store.state.m.endName[2]];if(0===this.$store.state.m.navId){this.$store.commit("m/zhuanxian/resetData"),this.$store.commit("m/zhuanxian/setData",{name:"startName",data:t}),this.$store.commit("m/zhuanxian/setData",{name:"endName",data:e});let o={currentPage:this.$store.state.m.zhuanxian.currentPage,pageSize:20,startProvince:this.$store.state.m.zhuanxian.startName[0],startCity:this.$store.state.m.zhuanxian.startName[1],startArea:this.$store.state.m.zhuanxian.startName[2],endProvince:this.$store.state.m.zhuanxian.endName[0],endCity:this.$store.state.m.zhuanxian.endName[1],endArea:this.$store.state.m.zhuanxian.endName[2],orderBy:this.$store.state.m.zhuanxian.orderBy.value};this.$store.dispatch("m/zhuanxian/GETRANGELIST",{data:o,name:"rangeList"})}if(1===this.$store.state.m.navId){this.$store.commit("m/huoyuan/resetData"),this.$store.commit("m/huoyuan/setData",{name:"startName",data:t}),this.$store.commit("m/huoyuan/setData",{name:"endName",data:e});let o={currentPage:this.$store.state.m.huoyuan.currentPage,pageSize:20,startProvince:this.$store.state.m.huoyuan.startName[0],startCity:this.$store.state.m.huoyuan.startName[1],startArea:this.$store.state.m.huoyuan.startName[2],endProvince:this.$store.state.m.huoyuan.endName[0],endCity:this.$store.state.m.huoyuan.endName[1],endArea:this.$store.state.m.huoyuan.endName[2],queryOrderType:this.$store.state.m.huoyuan.queryOrderType.value,orderType:this.$store.state.m.huoyuan.screen.orderType,loadTimeType:this.$store.state.m.huoyuan.screen.loadTimeType,useCarType:this.$store.state.m.huoyuan.screen.useCarType,specName:this.$store.state.m.huoyuan.screen.specName};this.$store.dispatch("m/huoyuan/GETRANGELIST",{data:o,name:"rangeList"})}if(3===this.$store.state.m.navId){this.$store.commit("m/cheyuan/resetData"),this.$store.commit("m/cheyuan/setData",{name:"startName",data:t}),this.$store.commit("m/cheyuan/setData",{name:"endName",data:e});let o={currentPage:this.$store.state.m.cheyuan.currentPage,pageSize:20,startProvince:this.$store.state.m.cheyuan.startName[0],startCity:this.$store.state.m.cheyuan.startName[1],startArea:this.$store.state.m.cheyuan.startName[2],endProvince:this.$store.state.m.cheyuan.endName[0],endCity:this.$store.state.m.cheyuan.endName[1],endArea:this.$store.state.m.cheyuan.endName[2],orderBy:this.$store.state.m.cheyuan.orderBy.value,carSpec:this.$store.state.m.cheyuan.carSpec,carType:this.$store.state.m.cheyuan.carType};this.$store.dispatch("m/cheyuan/GETRANGELIST",{data:o,name:"rangeList"})}},toList(t){if(this.$router.push(t.to),this.$store.commit("m/pageView/setData",{name:"footerId",data:t.id}),"专线大厅"===t.name){this.$store.commit("m/zhuanxian/resetData"),this.$store.commit("m/zhuanxian/setData",{name:"startName",data:[this.$store.state.m.startName0[0],this.$store.state.m.startName0[1],""]});let t={currentPage:this.$store.state.m.zhuanxian.currentPage,pageSize:20,startProvince:this.$store.state.m.zhuanxian.startName[0],startCity:this.$store.state.m.zhuanxian.startName[1],startArea:this.$store.state.m.zhuanxian.startName[2],endProvince:this.$store.state.m.zhuanxian.endName[0],endCity:this.$store.state.m.zhuanxian.endName[1],endArea:this.$store.state.m.zhuanxian.endName[2],orderBy:this.$store.state.m.zhuanxian.orderBy.value};this.$store.dispatch("m/zhuanxian/GETRANGELIST",{data:t,name:"rangeList"})}if("货源大厅"===t.name){this.$store.commit("m/huoyuan/resetData"),this.$store.commit("m/huoyuan/setData",{name:"startName",data:[this.$store.state.m.startName0[0],this.$store.state.m.startName0[1],""]});let t={currentPage:this.$store.state.m.huoyuan.currentPage,pageSize:20,startProvince:this.$store.state.m.huoyuan.startName[0],startCity:this.$store.state.m.huoyuan.startName[1],startArea:this.$store.state.m.huoyuan.startName[2],endProvince:this.$store.state.m.huoyuan.endName[0],endCity:this.$store.state.m.huoyuan.endName[1],endArea:this.$store.state.m.huoyuan.endName[2],queryOrderType:this.$store.state.m.huoyuan.queryOrderType.value,orderType:this.$store.state.m.huoyuan.screen.orderType,loadTimeType:this.$store.state.m.huoyuan.screen.loadTimeType,useCarType:this.$store.state.m.huoyuan.screen.useCarType,specName:this.$store.state.m.huoyuan.screen.specName};this.$store.dispatch("m/huoyuan/GETRANGELIST",{data:t,name:"rangeList"})}if("车源大厅"===t.name){this.$store.commit("m/cheyuan/resetData"),this.$store.commit("m/cheyuan/setData",{name:"startName",data:[this.$store.state.m.startName0[0],this.$store.state.m.startName0[1],""]});let t={currentPage:this.$store.state.m.cheyuan.currentPage,pageSize:20,startProvince:this.$store.state.m.cheyuan.startName[0],startCity:this.$store.state.m.cheyuan.startName[1],startArea:this.$store.state.m.cheyuan.startName[2],endProvince:this.$store.state.m.cheyuan.endName[0],endCity:this.$store.state.m.cheyuan.endName[1],endArea:this.$store.state.m.cheyuan.endName[2],orderBy:this.$store.state.m.cheyuan.orderBy.value,carSpec:this.$store.state.m.cheyuan.carSpec,carType:this.$store.state.m.cheyuan.carType};this.$store.dispatch("m/cheyuan/GETRANGELIST",{data:t,name:"rangeList"})}if("物流公司"===t.name){this.$store.commit("m/gongsi/resetData"),this.$store.commit("m/gongsi/setData",{name:"startName",data:[this.$store.state.m.startName0[0],this.$store.state.m.startName0[1]]});let t={currentPage:this.$store.state.m.gongsi.currentPage,pageSize:20,province:this.$store.state.m.gongsi.startName[0],city:this.$store.state.m.gongsi.startName[1],orderBy:this.$store.state.m.gongsi.orderBy.value,companyName:this.$store.state.m.gongsi.companyName};this.$store.dispatch("m/gongsi/GETRANGELIST",{data:t,name:"rangeList"})}},toClick(t){"在线下单"!==t.name&&"APP下载"!==t.name||(this.$refs.downApp.showMask=!0),"运单查询"===t.name&&this.$router.push(t.to),"活动中心"===t.name&&this.$store.commit("m/setData",{name:"showHome",data:1})},clickEnd(){this.$refs.selectEndAddress.showMask=!0},clickStart(){this.$refs.selectStartAddress.showMask=!0},clickChange(t,e){this.$store.dispatch("m/SETDATA",{data:e,name:"startName"}),this.$store.dispatch("m/SETDATA",{data:t,name:"endName"})},clickNav(t){this.$store.dispatch("m/SETDATA",{data:t,name:"navId"})}}},c=(o(409),o(2)),component=Object(c.a)(m,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[0===t.$store.state.m.showHome?o("img",{staticClass:"top",attrs:{src:"/m/home/home_banner.png"}}):t._e(),t._v(" "),0===t.$store.state.m.showHome?o("div",{staticClass:"body flex_f"},[o("div",{staticClass:"nav flex_f"},[o("div",{staticClass:"nav_top flex_a f-34"},t._l(t.navList,function(e,r){return o("div",{key:r,staticClass:"flex_1 flex height_100",class:[e.id===t.$store.state.m.navId?"nav_top_selected":""],on:{click:function(o){return t.clickNav(e.id)}}},[t._v(t._s(e.name))])}),0),t._v(" "),o("div",{staticClass:"flex_1 nav_down padding_20 flex_f flex_sb"},[t._m(0),t._v(" "),o("div",{staticClass:"flex_sb width_100"},[o("div",{staticClass:"f-46 flex_1 oneElisp",class:[""!==t.$store.state.m.startName[0]&&""===t.$store.state.m.startName[1]&&""===t.$store.state.m.startName[2]?"c-9":"c-3"],on:{click:function(e){return t.clickStart()}}},[t._v(t._s(""===t.$store.state.m.startName[0]?"全国":""===t.$store.state.m.startName[1]&&""===t.$store.state.m.startName[2]?"选那儿送":""===t.$store.state.m.startName[2]?t.$store.state.m.startName[1]:t.$store.state.m.startName[2]))]),t._v(" "),o("div",{staticClass:"flex_1 flex"},[o("img",{staticClass:"change",attrs:{src:"/m/home/home_wangfan.png"},on:{click:function(e){return t.clickChange(t.$store.state.m.startName,t.$store.state.m.endName)}}})]),t._v(" "),o("div",{staticClass:"f-46 flex_1 oneElisp",class:[""!==t.$store.state.m.endName[0]&&""===t.$store.state.m.endName[1]&&""===t.$store.state.m.endName[2]?"c-9":"c-3"],staticStyle:{"text-align":"end"},on:{click:function(e){return t.clickEnd()}}},[t._v(t._s(""===t.$store.state.m.endName[0]?"全国":""===t.$store.state.m.endName[1]&&""===t.$store.state.m.endName[2]?"往那儿运":""===t.$store.state.m.endName[2]?t.$store.state.m.endName[1]:t.$store.state.m.endName[2]))])]),t._v(" "),o("div",{staticClass:"buttom f_w f-34 flex",on:{click:function(e){return t.search()}}},[t._v("立即搜索")])])]),t._v(" "),o("div",{staticClass:"content1 margin_t_20 flex_saf"},t._l(t.content1List,function(e,r){return o("div",{key:r,staticClass:"flex_f flex",on:{click:function(o){return t.toList(e,r)}}},[o("div",{staticClass:"content1_circle flex",style:{background:e.bc}},[o("img",{staticStyle:{width:"60%"},attrs:{src:e.url}})]),t._v(" "),o("div",{staticClass:"c-3 f-26"},[t._v(t._s(e.name))])])}),0),t._v(" "),o("div",{staticClass:"content2 flex_as"},[o("div",{staticClass:"flex_saf width_100"},t._l(t.content2List,function(e,r){return o("div",{key:r,staticClass:"flex_f flex"},[o("div",{staticClass:"flex_a flex_f",on:{click:function(o){return t.toClick(e)}}},[o("img",{staticStyle:{height:"0.56rem"},attrs:{src:e.url}}),t._v(" "),o("div",{staticClass:"c-7 f-26"},[t._v(t._s(e.name))])])])}),0)])]):t._e(),t._v(" "),1===t.$store.state.m.showHome?o("div",[o("img",{staticClass:"top",attrs:{src:"/m/home/banner.png"}}),t._v(" "),t._l(t.$store.state.m.NoticeList,function(e,r){return o("div",{key:r,staticClass:"flex_a b_c_w gg_item",on:{click:function(o){return t.toNotice(e)}}},[r%2==0?o("img",{attrs:{src:"/m/home/gonggao_huozhu.png"}}):t._e(),t._v(" "),r%2!=0?o("img",{attrs:{src:"/m/home/gonggao_fuli.png"}}):t._e(),t._v(" "),o("div",{staticClass:"margin_l_20 right"},[o("div",{staticClass:"c-3 f-32"},[t._v(t._s(e.name))]),t._v(" "),o("div",{staticClass:"c-9 f-26"},[t._v(t._s(e.title))])])])}),t._v(" "),o("div",{staticClass:"flex_a b_c_w gg_item",on:{click:function(e){return t.$router.push("/m/gg/ggList?adcode="+t.$store.state.m.adcode)}}},[o("img",{attrs:{src:"/m/home/gonggao_miji.png"}}),t._v(" "),o("div",{staticClass:"margin_l_20 right"},[o("div",{staticClass:"c-3 f-32"},[t._v("货主公告")]),t._v(" "),o("div",{staticClass:"c-9 f-26"},[t._v(t._s(t.$store.state.m.HZGGList[0].title))])])])],2):t._e(),t._v(" "),o("footer",{staticClass:"flex_sb f-16 p_r"},[o("div",{staticClass:"circle_out flex",on:{click:function(e){t.$refs.downApp.showMask=!0}}},[t._m(1)]),t._v(" "),o("div",{staticClass:"h flex_sb flex_f",on:{click:function(e){return t.toHome(0)}}},[o("img",{staticStyle:{width:"0.46rem"},attrs:{src:"/m/home/home_home.png"}}),t._v(" "),o("div",{staticClass:"f-16"},[t._v("首页")])]),t._v(" "),o("div",{staticClass:"h flex_sb flex_f",on:{click:function(e){t.showMask=!0}}},[t._m(2),t._v(" "),o("div",{staticClass:"f-16"},[t._v("发货")])]),t._v(" "),o("div",{staticClass:"h flex_sb flex_f",on:{click:function(e){return t.toHome(1)}}},[o("img",{staticStyle:{width:"0.46rem"},attrs:{src:"/m/home/lobby_icon_activity.png"}}),t._v(" "),o("div",{staticClass:"f-16"},[t._v("公告")])])]),t._v(" "),o("SelectAddress",{ref:"selectStartAddress",on:{setArea:t.getStartArea}}),t._v(" "),o("SelectAddress",{ref:"selectEndAddress",on:{setArea:t.getEndArea}}),t._v(" "),o("down-app",{ref:"downApp"})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex_sb f-22 width_100"},[e("div",[e("span",{staticClass:"circle b_c_g"}),this._v("出发地")]),this._v(" "),e("div",[e("span",{staticClass:"circle b_c_r"}),this._v("到达地")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"circle_in flex"},[e("img",{staticStyle:{width:"50%"},attrs:{src:"/m/home/home_fahuo.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"circle flex"},[e("div",{staticClass:"circle"})])}],!1,null,"a67d4424",null);e.default=component.exports}}]);