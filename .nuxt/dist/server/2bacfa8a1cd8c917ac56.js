exports.ids=[47,49],exports.modules={109:function(e,t,o){var content=o(128);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=o(3).default;e.exports.__inject__=function(e){r("eecd741e",content,!0,e)}},115:function(e,t,o){"use strict";o.r(t);t.default={get:function(e){var t=window.localStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set:function(e,data){return window.localStorage.setItem(e,window.JSON.stringify(data))},remove:function(e){return window.localStorage.removeItem(e)},get_s:function(e){var t=window.sessionStorage.getItem(e);return null===t?null:window.JSON.parse(t)},set_s:function(e,data){return window.sessionStorage.setItem(e,window.JSON.stringify(data))},remove_s:function(e){return window.sessionStorage.removeItem(e)}}},125:function(e,t,o){"use strict";var r=o(115),d={name:"SelectAddress",props:{top:{type:String,default:"0"}},data:()=>({showMask:!1,list:[],cityList:[],areaList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1},{code:"",name:"",show:!1}]}),watch:{showMask(e,t){r.default.get("mCityHistoryList")&&e&&(this.list=r.default.get("mCityHistoryList"))}},methods:{selectedHis(e){this.showMask=!1,this.$emit("setArea",[e.startProvince,e.startCity,"全市"===e.name?"":e.name])},back(){this.showAddr[2].show?(this.$set(this.showAddr,2,{code:"",name:"",show:!1}),this.$set(this.showAddr[1],"show",!0)):this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince(e){"全国"===e.name?(this.$emit("setArea",["","",""]),this.showMask=!1):this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(t=>{let data=t.data;200===data.status&&(this.cityList=data.data&&data.data||[],this.showAddr=[{code:e.code,name:e.name,show:!1},{code:"",name:"",show:!0},{code:"",name:"",show:!1}])}).catch(e=>{})},selectCity(e){this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e.code).then(t=>{let data=t.data;200===data.status&&(data.data?data.data.unshift({code:e.code,name:"全市",name1:e.name,parentCode:e.code}):data.data=[{code:e.code,name:"全市",name1:e.name,parentCode:e.code}],this.areaList=data.data&&data.data||[],this.$set(this.showAddr,1,{code:e.code,name:e.name,show:!1}),this.showAddr[2].show=!0)}).catch(e=>{})},selectArea(e){this.showMask=!1,this.$set(this.showAddr,2,{code:e.code,name:e.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name,"全市"===e.name?"":e.name]),e.startProvince=this.showAddr[0].name,e.startCity=this.showAddr[1].name,this.setHistory(e)},setHistory(data){if(r.default.get("mCityHistoryList")){let e=r.default.get("mCityHistoryList");e.some(e=>e.code===data.code)||(e.length>=4&&e.splice(3,1),e.unshift(data)),r.default.set("mCityHistoryList",e)}else r.default.set("mCityHistoryList",[data])},beforeEnter(e){e.style.height="0"},enter(e){0!==e.scrollHeight?e.style.height=e.scrollHeight+"px":e.style.height=""},afterEnter(e){e.style.height=""},beforeLeave(e){e.style.height=e.scrollHeight+"px"},leave(e){0!==e.scrollHeight&&(e.style.height=0)},afterLeave(e){e.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},n=o(0);var component=Object(n.a)(d,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e.showMask?o("div",{staticClass:" heightTran"},[o("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[o("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("历史城市")]),e._v(" "),o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.list,function(t,r){return o("div",{key:r,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(o){return e.selectedHis(t)}}},[e._v(e._s("全市"===t.name?t.name1:t.name))])])}),0),e._v(" "),o("div",{staticClass:"flex_a"},[e.showAddr[0].show?o("div",{staticClass:"c-3 flex_1 f_w_b"},[e._v("选择城市")]):o("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(t){return e.back()}}},[e._v("返回上一线")]),e._v(" "),o("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[e._v(e._s(e.showAddr[0].name)+e._s(e.showAddr[1].name)+e._s("全市"===e.showAddr[2].name?"":e.showAddr[2].name))]),e._v(" "),o("div",{staticClass:"flex_1"})]),e._v(" "),e.showAddr[0].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.$store.state.m.provinceList,function(t,r){return o("div",{key:r,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectProvince(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[1].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.cityList,function(t,r){return o("div",{key:r,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectCity(t)}}},[e._v(e._s(t.name))])])}),0):e._e(),e._v(" "),e.showAddr[2].show?o("div",{staticClass:"f_f flex_a c-3 margin_t_20"},e._l(e.areaList,function(t,r){return o("div",{key:r,staticClass:"code_box flex"},[o("div",{staticClass:"code_item oneElisp width_100",class:[t.code===e.showAddr[2].code?"code_item_selected":"code_item_no_selected"],on:{click:function(o){return e.selectArea(t)}}},[e._v(e._s(t.name))])])}),0):e._e()])]):e._e()]),e._ssrNode(" <div"+e._ssrClass(null,[e.showMask?"mask2":""])+e._ssrStyle(null,{top:e.top},null)+" data-v-0b6ec86c></div>")],2)},[],!1,function(e){var t=o(127);t.__inject__&&t.__inject__(e)},"0b6ec86c","03e67ddf");t.a=component.exports},127:function(e,t,o){"use strict";o.r(t);var r=o(109),d=o.n(r);for(var n in r)"default"!==n&&function(e){o.d(t,e,function(){return r[e]})}(n);t.default=d.a},128:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".code_box[data-v-0b6ec86c]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-0b6ec86c]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-0b6ec86c]{border:1px solid #54a7ff;color:#54a7ff;background-color:rgba(84,167,255,.5)}.code_item_no_selected[data-v-0b6ec86c]{border:1px solid #999}.heightTran[data-v-0b6ec86c]{transition:all .2s;position:absolute;top:0;width:100%;height:8.3rem;z-index:100}",""])},199:function(e,t,o){var content=o(326);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=o(3).default;e.exports.__inject__=function(e){r("49228323",content,!0,e)}},325:function(e,t,o){"use strict";o.r(t);var r=o(199),d=o.n(r);for(var n in r)"default"!==n&&function(e){o.d(t,e,function(){return r[e]})}(n);t.default=d.a},326:function(e,t,o){(e.exports=o(2)(!1)).push([e.i,".home[data-v-34599450]{height:inherit;background:#f4f4f4}.home .top[data-v-34599450]{width:100%}.home .body[data-v-34599450]{position:relative;top:-1.3rem}.home .body .nav[data-v-34599450]{width:90%;margin:0 auto;height:3.68rem}.home .body .nav .nav_top[data-v-34599450]{height:.88rem;background-color:rgba(51,51,51,.5);border-top-left-radius:.16rem;border-top-right-radius:.16rem;color:#fff}.home .body .nav .nav_down[data-v-34599450]{background-color:#fff;border-bottom-left-radius:.16rem;border-bottom-right-radius:.16rem}.home .body .nav .nav_down .circle[data-v-34599450]{display:inline-block;width:.18rem;height:.18rem;border-radius:.18rem;margin-right:.14rem}.home .body .nav .nav_down .change[data-v-34599450]{width:.68rem;height:.68rem}.home .body .nav .nav_down .buttom[data-v-34599450]{width:95%;height:.8rem;background:linear-gradient(90deg,#61aeff,#3497ff);border-radius:.16rem}.home .body .content1[data-v-34599450]{height:1.88rem;width:90%;background-color:#fff;margin:.2rem auto 0;border-radius:.16rem}.home .body .content1 .content1_circle[data-v-34599450]{width:1rem;height:1rem;border-radius:1rem;margin-bottom:.1rem}.home .body .content2[data-v-34599450]{background-color:#fff;height:4.27rem;width:90%;border-radius:.16rem;margin:.2rem auto 0}.home .body .content2 img[data-v-34599450]{margin:.3rem 0 .1rem}.home footer[data-v-34599450]{position:fixed;width:100%;bottom:0;height:.98rem;padding:0 1.31rem;background:#f6f8fa;box-shadow:0 -.02rem .08rem 0 rgba(20,20,20,.05),0 0 .06rem 0 rgba(20,20,20,.05);color:#42474b;box-sizing:border-box}.home footer .h[data-v-34599450]{height:.8rem}.home footer .middle[data-v-34599450]{position:relative;top:-.34rem}.home footer .circle[data-v-34599450]{width:.46rem;height:.46rem}.home footer .circle_out[data-v-34599450]{width:1rem;height:1rem;background-color:#fff;position:absolute;top:-.5rem;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:.5rem;box-shadow:0 -2px 2px 0 hsla(0,0%,62%,.5)}.home footer .circle_out .circle_in[data-v-34599450]{width:85%;height:85%;border-radius:1.16rem;background-color:#3f94ee}.nav_top_selected[data-v-34599450]{background-color:#fff;border-top-left-radius:.16rem;border-top-right-radius:.16rem;color:#000}.mask2[data-v-34599450]{position:fixed;top:0;left:0;z-index:13;width:100%;height:100%;background-color:rgba(0,0,0,.4)}.down_window[data-v-34599450]{width:80%;height:8.2rem;z-index:100;background:#ee595a;padding:.2rem}.down_window .down[data-v-34599450]{margin:0 auto;width:4.8rem;height:.9rem;background:#fa0}",""])},581:function(e,t,o){"use strict";o.r(t);var r={components:{SelectAddress:o(125).a},layout:"m",data:()=>({showMask:!1,navList:[{id:0,name:"找专线"},{id:1,name:"找货源"},{id:2,name:"找车源"}],content1List:[{id:0,name:"专线大厅",url:"/m/home/home_zhuanxian.png",bc:"#929DFB",to:"/m/pageView"},{id:1,name:"货源大厅",url:"/m/home/home_huoyuandt.png",bc:"#F77D5E",to:"/m/pageView"},{id:3,name:"车源大厅",url:"/m/home/home_cheyuandt.png",bc:"#F6CB43",to:"/m/pageView"},{id:4,name:"物流公司",url:"/m/home/home_wuliugs.png",bc:"#5592F7",to:"/m/pageView"}],content2List:[{name:"在线下单",url:"/m/home/home_xiadan.png",to:""},{name:"运单查询",url:"/m/home/home_chaxun.png",to:"/m/ydcx"},{name:"APP下载",url:"/m/home/home_app.png",to:""},{name:"活动中心",url:"/m/home/home_huodong.png",to:"/m/gongsi"}]}),async fetch({$axios:e,app:t,query:o,store:r}){},created(){},mounted(){},methods:{getEndArea(data){data&&this.$store.dispatch("m/SETDATA",{data:data,name:"endName"})},getStartArea(data){data&&this.$store.dispatch("m/SETDATA",{data:data,name:"startName"})},search(){console.log(this.$store.state.m)},toList(e){if(this.$router.push(e.to),this.$store.commit("m/pageView/setData",{name:"footerId",data:e.id}),"专线大厅"===e.name){this.$store.commit("m/zhuanxian/resetData"),this.$store.commit("m/zhuanxian/setData",{name:"startName",data:[this.$store.state.m.startName0[0],this.$store.state.m.startName0[1],""]});let e={currentPage:this.$store.state.m.zhuanxian.currentPage,pageSize:20,startProvince:this.$store.state.m.zhuanxian.startName[0],startCity:this.$store.state.m.zhuanxian.startName[1],startArea:this.$store.state.m.zhuanxian.startName[2],endProvince:this.$store.state.m.zhuanxian.endName[0],endCity:this.$store.state.m.zhuanxian.endName[1],endArea:this.$store.state.m.zhuanxian.endName[2],orderBy:this.$store.state.m.zhuanxian.orderBy.value};this.$store.dispatch("m/zhuanxian/GETRANGELIST",{data:e,name:"rangeList"})}if("货源大厅"===e.name){this.$store.commit("m/huoyuan/resetData"),this.$store.commit("m/huoyuan/setData",{name:"startName",data:[this.$store.state.m.startName0[0],this.$store.state.m.startName0[1],""]});let e={currentPage:this.$store.state.m.huoyuan.currentPage,pageSize:20,startProvince:this.$store.state.m.huoyuan.startName[0],startCity:this.$store.state.m.huoyuan.startName[1],startArea:this.$store.state.m.huoyuan.startName[2],endProvince:this.$store.state.m.huoyuan.endName[0],endCity:this.$store.state.m.huoyuan.endName[1],endArea:this.$store.state.m.huoyuan.endName[2],queryOrderType:this.$store.state.m.huoyuan.queryOrderType.value,orderType:this.$store.state.m.huoyuan.screen.orderType,loadTimeType:this.$store.state.m.huoyuan.screen.loadTimeType,useCarType:this.$store.state.m.huoyuan.screen.useCarType,specName:this.$store.state.m.huoyuan.screen.specName};this.$store.dispatch("m/huoyuan/GETRANGELIST",{data:e,name:"rangeList"})}if("车源大厅"===e.name){this.$store.commit("m/cheyuan/resetData"),this.$store.commit("m/cheyuan/setData",{name:"startName",data:[this.$store.state.m.startName0[0],this.$store.state.m.startName0[1],""]});let e={currentPage:this.$store.state.m.cheyuan.currentPage,pageSize:20,startProvince:this.$store.state.m.cheyuan.startName[0],startCity:this.$store.state.m.cheyuan.startName[1],startArea:this.$store.state.m.cheyuan.startName[2],endProvince:this.$store.state.m.cheyuan.endName[0],endCity:this.$store.state.m.cheyuan.endName[1],endArea:this.$store.state.m.cheyuan.endName[2],orderBy:this.$store.state.m.cheyuan.orderBy.value,carSpec:this.$store.state.m.cheyuan.carSpec,carType:this.$store.state.m.cheyuan.carType};this.$store.dispatch("m/cheyuan/GETRANGELIST",{data:e,name:"rangeList"})}if("物流公司"===e.name){this.$store.commit("m/gongsi/resetData"),this.$store.commit("m/gongsi/setData",{name:"startName",data:[this.$store.state.m.startName0[0],this.$store.state.m.startName0[1]]});let e={currentPage:this.$store.state.m.gongsi.currentPage,pageSize:20,province:this.$store.state.m.gongsi.startName[0],city:this.$store.state.m.gongsi.startName[1],orderBy:this.$store.state.m.gongsi.orderBy.value,companyName:this.$store.state.m.gongsi.companyName};this.$store.dispatch("m/gongsi/GETRANGELIST",{data:e,name:"rangeList"})}},toClick(e){"在线下单"!==e.name&&"APP下载"!==e.name||(this.showMask=!0),"运单查询"!==e.name&&"活动中心"!==e.name||this.$router.push(e.to)},clickEnd(){this.$refs.selectEndAddress.showMask=!0},clickStart(){this.$refs.selectStartAddress.showMask=!0},clickChange(e,t){this.$store.dispatch("m/SETDATA",{data:t,name:"startName"}),this.$store.dispatch("m/SETDATA",{data:e,name:"endName"})},clickNav(e){this.$store.dispatch("m/SETDATA",{data:e,name:"navId"})},downApp(){window.location.href="http://h5.28tms.com/"}}},d=o(0);var component=Object(d.a)(r,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[e._ssrNode('<img src="/m/home/home_banner.png" class="top" data-v-34599450> <div class="body flex_f" data-v-34599450><div class="nav flex_f" data-v-34599450><div class="nav_top flex_a f-34" data-v-34599450>'+e._ssrList(e.navList,function(t,o){return"<div"+e._ssrClass("flex_1 flex height_100",[t.id===e.$store.state.m.navId?"nav_top_selected":""])+" data-v-34599450>"+e._ssrEscape(e._s(t.name))+"</div>"})+'</div> <div class="flex_1 nav_down padding_20 flex_f flex_sb" data-v-34599450><div class="flex_sb f-22 width_100" data-v-34599450><div data-v-34599450><span class="circle b_c_g" data-v-34599450></span>出发地</div> <div data-v-34599450><span class="circle b_c_r" data-v-34599450></span>到达地</div></div> <div class="flex_sb width_100" data-v-34599450><div'+e._ssrClass("f-46 flex_1 oneElisp",[""!==e.$store.state.m.startName[0]&&""===e.$store.state.m.startName[1]&&""===e.$store.state.m.startName[2]?"c-9":"c-3"])+" data-v-34599450>"+e._ssrEscape(e._s(""===e.$store.state.m.startName[0]?"全国":""===e.$store.state.m.startName[1]&&""===e.$store.state.m.startName[2]?"选那儿送":""===e.$store.state.m.startName[2]?e.$store.state.m.startName[1]:e.$store.state.m.startName[2]))+'</div> <div class="flex_1 flex" data-v-34599450><img src="/m/home/home_wangfan.png" class="change" data-v-34599450></div> <div'+e._ssrClass("f-46 flex_1 oneElisp",[""!==e.$store.state.m.endName[0]&&""===e.$store.state.m.endName[1]&&""===e.$store.state.m.endName[2]?"c-9":"c-3"])+' style="text-align: end" data-v-34599450>'+e._ssrEscape(e._s(""===e.$store.state.m.endName[0]?"全国":""===e.$store.state.m.endName[1]&&""===e.$store.state.m.endName[2]?"往那儿运":""===e.$store.state.m.endName[2]?e.$store.state.m.endName[1]:e.$store.state.m.endName[2]))+'</div></div> <div class="buttom f_w f-34 flex" data-v-34599450>立即搜索</div></div></div> <div class="content1 margin_t_20 flex_saf" data-v-34599450>'+e._ssrList(e.content1List,function(t,o){return'<div class="flex_f flex" data-v-34599450><div class="content1_circle flex"'+e._ssrStyle(null,{background:t.bc},null)+" data-v-34599450><img"+e._ssrAttr("src",t.url)+' style="width: 60%" data-v-34599450></div> <div class="c-3 f-26" data-v-34599450>'+e._ssrEscape(e._s(t.name))+"</div></div>"})+'</div> <div class="content2 flex_as" data-v-34599450><div class="flex_saf width_100" data-v-34599450>'+e._ssrList(e.content2List,function(t,o){return'<div class="flex_f flex" data-v-34599450><div class="flex_a flex_f" data-v-34599450><img'+e._ssrAttr("src",t.url)+' style="height: 0.56rem" data-v-34599450> <div class="c-7 f-26" data-v-34599450>'+e._ssrEscape(e._s(t.name))+"</div></div></div>"})+'</div></div></div> <footer class="flex_sb f-16 p_r" data-v-34599450><div class="circle_out flex" data-v-34599450><div class="circle_in flex" data-v-34599450><img src="/m/home/home_fahuo.png" style="width: 50%" data-v-34599450></div></div> <div class="h flex_sb flex_f" data-v-34599450><img src="/m/home/home_home.png" style="width: 0.46rem" data-v-34599450> <div class="f-16" data-v-34599450>首页</div></div> <div class="h flex_sb flex_f" data-v-34599450><div class="circle flex" data-v-34599450><div class="circle" data-v-34599450></div></div> <div class="f-16" data-v-34599450>发货</div></div> <div class="h flex_sb flex_f" data-v-34599450><img src="/m/home/lobby_icon_activity.png" style="width: 0.46rem" data-v-34599450> <div class="f-16" data-v-34599450>公告</div></div></footer> '),o("SelectAddress",{ref:"selectStartAddress",on:{setArea:e.getStartArea}}),e._ssrNode(" "),o("SelectAddress",{ref:"selectEndAddress",on:{setArea:e.getEndArea}}),e._ssrNode(" "+(e.showMask?"<div"+e._ssrClass("flex",[e.showMask?"mask2":""])+' data-v-34599450><div class="down_window flex_f" data-v-34599450><div class="flex_jfe" data-v-34599450><img src="/images/login_close.png" data-v-34599450></div> <div class="f-46 t_c f_w" data-v-34599450>APP下单发货</div> <div class="f-32 t_c f_w" data-v-34599450>注册立送8200元，名满即止</div> <div class="f-32 t_c f_w" data-v-34599450>发货贵了，差价双倍返还</div> <img src="/m/home/u23.png" class="width_100" data-v-34599450> <div class="down f-32 f_w flex" data-v-34599450>前往下载</div> <div class="f-32 t_c f_w margin_t_20" data-v-34599450>暂不</div></div></div>':"\x3c!----\x3e"))],2)},[],!1,function(e){var t=o(325);t.__inject__&&t.__inject__(e)},"34599450","a7e8f082");t.default=component.exports}};
//# sourceMappingURL=2bacfa8a1cd8c917ac56.js.map