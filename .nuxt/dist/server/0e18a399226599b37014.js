exports.ids=[42,44],exports.modules={109:function(t,e,c){"use strict";var o=c(110),r={name:"SelectAddress",props:{top:{type:String,default:"0"}},data:()=>({showMask:!1,list:[],cityList:[],areaList:[],showAddr:[{code:"",name:"",show:!0},{code:"",name:"",show:!1},{code:"",name:"",show:!1}]}),watch:{showMask(t,e){o.default.get("mCityHistoryList")&&t&&(this.list=o.default.get("mCityHistoryList"))}},methods:{selectedHis(t){this.showMask=!1,this.$emit("setArea",[t.startProvince,t.startCity,"全市"===t.name?"":t.name])},back(){this.showAddr[2].show?(this.$set(this.showAddr,2,{code:"",name:"",show:!1}),this.$set(this.showAddr[1],"show",!0)):this.showAddr[1].show&&(this.$set(this.showAddr,1,{code:"",name:"",show:!1}),this.$set(this.showAddr[0],"show",!0))},selectProvince(t){"全国"===t.name?(this.$emit("setArea",["","",""]),this.showMask=!1):this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t.code).then(e=>{let data=e.data;200===data.status&&(this.cityList=data.data&&data.data||[],this.showAddr=[{code:t.code,name:t.name,show:!1},{code:"",name:"",show:!0},{code:"",name:"",show:!1}])}).catch(t=>{})},selectCity(t){this.$axios.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+t.code).then(e=>{let data=e.data;200===data.status&&(data.data?data.data.unshift({code:t.code,name:"全市",name1:t.name,parentCode:t.code}):data.data=[{code:t.code,name:"全市",name1:t.name,parentCode:t.code}],this.areaList=data.data&&data.data||[],this.$set(this.showAddr,1,{code:t.code,name:t.name,show:!1}),this.showAddr[2].show=!0)}).catch(t=>{})},selectArea(t){this.showMask=!1,this.$set(this.showAddr,2,{code:t.code,name:t.name,show:!0}),this.$emit("setArea",[this.showAddr[0].name,this.showAddr[1].name,"全市"===t.name?"":t.name]),t.startProvince=this.showAddr[0].name,t.startCity=this.showAddr[1].name,this.setHistory(t)},setHistory(data){if(o.default.get("mCityHistoryList")){let t=o.default.get("mCityHistoryList");t.some(t=>t.code===data.code)||(t.length>=4&&t.splice(3,1),t.unshift(data)),o.default.set("mCityHistoryList",t)}else o.default.set("mCityHistoryList",[data])},beforeEnter(t){t.style.height="0"},enter(t){0!==t.scrollHeight?t.style.height=t.scrollHeight+"px":t.style.height=""},afterEnter(t){t.style.height=""},beforeLeave(t){t.style.height=t.scrollHeight+"px"},leave(t){0!==t.scrollHeight&&(t.style.height=0)},afterLeave(t){t.style.height=""},closeMask(){this.showMask=!1,this.$emit("setArea",!1)}}},d=c(0);var component=Object(d.a)(r,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("transition",{on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},[t.showMask?c("div",{staticClass:" heightTran"},[c("div",{staticClass:"b_c_w padding_20 f-26 height_100 o_f"},[c("div",{staticClass:"c-3 flex_1 f_w_b"},[t._v("历史城市")]),t._v(" "),c("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.list,function(e,o){return c("div",{key:o,staticClass:"code_box flex"},[c("div",{staticClass:"code_item oneElisp width_100 code_item_no_selected",on:{click:function(c){return t.selectedHis(e)}}},[t._v(t._s("全市"===e.name?e.name1:e.name))])])}),0),t._v(" "),c("div",{staticClass:"flex_a"},[t.showAddr[0].show?c("div",{staticClass:"c-3 flex_1 f_w_b"},[t._v("选择城市")]):c("div",{staticClass:"f_b flex_1 f_w_b",on:{click:function(e){return t.back()}}},[t._v("返回上一线")]),t._v(" "),c("div",{staticClass:"c-3 flex_2 f_w_b oneElisp",staticStyle:{"text-align":"center"}},[t._v(t._s(t.showAddr[0].name)+t._s(t.showAddr[1].name)+t._s("全市"===t.showAddr[2].name?"":t.showAddr[2].name))]),t._v(" "),c("div",{staticClass:"flex_1"})]),t._v(" "),t.showAddr[0].show?c("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.$store.state.m.provinceList,function(e,o){return c("div",{key:o,staticClass:"code_box flex"},[c("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[0].code?"code_item_selected":"code_item_no_selected"],on:{click:function(c){return t.selectProvince(e)}}},[t._v(t._s(e.name))])])}),0):t._e(),t._v(" "),t.showAddr[1].show?c("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.cityList,function(e,o){return c("div",{key:o,staticClass:"code_box flex"},[c("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[1].code?"code_item_selected":"code_item_no_selected"],on:{click:function(c){return t.selectCity(e)}}},[t._v(t._s(e.name))])])}),0):t._e(),t._v(" "),t.showAddr[2].show?c("div",{staticClass:"f_f flex_a c-3 margin_t_20"},t._l(t.areaList,function(e,o){return c("div",{key:o,staticClass:"code_box flex"},[c("div",{staticClass:"code_item oneElisp width_100",class:[e.code===t.showAddr[2].code?"code_item_selected":"code_item_no_selected"],on:{click:function(c){return t.selectArea(e)}}},[t._v(t._s(e.name))])])}),0):t._e()])]):t._e()]),t._ssrNode(" <div"+t._ssrClass(null,[t.showMask?"mask2":""])+t._ssrStyle(null,{top:t.top},null)+" data-v-7f01b790></div>")],2)},[],!1,function(t){var e=c(111);e.__inject__&&e.__inject__(t)},"7f01b790","03e67ddf");e.a=component.exports},110:function(t,e,c){"use strict";c.r(e);e.default={get:function(t){var e=window.localStorage.getItem(t);return null===e?null:window.JSON.parse(e)},set:function(t,data){return window.localStorage.setItem(t,window.JSON.stringify(data))},remove:function(t){return window.localStorage.removeItem(t)},get_s:function(t){var e=window.sessionStorage.getItem(t);return null===e?null:window.JSON.parse(e)},set_s:function(t,data){return window.sessionStorage.setItem(t,window.JSON.stringify(data))},remove_s:function(t){return window.sessionStorage.removeItem(t)}}},111:function(t,e,c){"use strict";c.r(e);var o=c(99),r=c.n(o);for(var d in o)"default"!==d&&function(t){c.d(e,t,function(){return o[t]})}(d);e.default=r.a},112:function(t,e,c){(t.exports=c(2)(!1)).push([t.i,".code_box[data-v-7f01b790]{width:25%;padding:0 .1rem .2rem;box-sizing:border-box}.code_box .code_item[data-v-7f01b790]{text-align:center;height:.6rem;line-height:.6rem}.code_item_selected[data-v-7f01b790]{border:1px solid #2fb301;color:#2fb301;background-color:rgba(47,179,1,.5)}.code_item_no_selected[data-v-7f01b790]{border:1px solid #999}.heightTran[data-v-7f01b790]{transition:all .2s;position:absolute;top:0;width:100%;height:8.3rem;z-index:100}.mask2[data-v-7f01b790]{position:fixed;left:0;z-index:13;width:100%;height:100%;background-color:rgba(0,0,0,.4)}",""])},170:function(t,e,c){var content=c(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=c(3).default;t.exports.__inject__=function(t){o("2e18c77e",content,!0,t)}},267:function(t,e,c){"use strict";c.r(e);var o=c(170),r=c.n(o);for(var d in o)"default"!==d&&function(t){c.d(e,t,function(){return o[t]})}(d);e.default=r.a},268:function(t,e,c){(t.exports=c(2)(!1)).push([t.i,".home[data-v-0acc0c84]{height:inherit;background:#f4f4f4}.home .top[data-v-0acc0c84]{width:100%}.home .body[data-v-0acc0c84]{position:relative;top:-1.3rem}.home .body .nav[data-v-0acc0c84]{width:90%;margin:0 auto;height:3.68rem}.home .body .nav .nav_top[data-v-0acc0c84]{height:.88rem;background-color:rgba(51,51,51,.5);border-top-left-radius:.16rem;border-top-right-radius:.16rem;color:#fff}.home .body .nav .nav_down[data-v-0acc0c84]{background-color:#fff;border-bottom-left-radius:.16rem;border-bottom-right-radius:.16rem}.home .body .nav .nav_down .circle[data-v-0acc0c84]{display:inline-block;width:.18rem;height:.18rem;border-radius:.18rem;margin-right:.14rem}.home .body .nav .nav_down .change[data-v-0acc0c84]{width:.68rem;height:.68rem}.home .body .nav .nav_down .buttom[data-v-0acc0c84]{width:95%;height:.8rem;background:linear-gradient(90deg,#61aeff,#3497ff);border-radius:.16rem}.home .body .content1[data-v-0acc0c84]{height:1.88rem;width:90%;background-color:#fff;margin:.2rem auto 0;border-radius:.16rem}.home .body .content1 .content1_circle[data-v-0acc0c84]{width:1rem;height:1rem;border-radius:1rem;margin-bottom:.1rem}.home .body .content2[data-v-0acc0c84]{background-color:#fff;height:4.27rem;width:90%;border-radius:.16rem;margin:.2rem auto 0}.home .body .content2 img[data-v-0acc0c84]{margin:.3rem 0 .1rem}.home footer[data-v-0acc0c84]{position:fixed;width:100%;bottom:0;height:.98rem;padding:0 1.31rem;background:#f6f8fa;box-shadow:0 -.02rem .08rem 0 rgba(20,20,20,.05),0 0 .06rem 0 rgba(20,20,20,.05);color:#42474b;box-sizing:border-box}.home footer .h[data-v-0acc0c84]{height:.8rem}.home footer .middle[data-v-0acc0c84]{position:relative;top:-.34rem}.home footer .circle[data-v-0acc0c84]{width:.46rem;height:.46rem}.home footer .circle_out[data-v-0acc0c84]{width:1rem;height:1rem;background-color:#fff;position:absolute;top:-.5rem;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:.5rem;box-shadow:0 -2px 2px 0 hsla(0,0%,62%,.5)}.home footer .circle_out .circle_in[data-v-0acc0c84]{width:85%;height:85%;border-radius:1.16rem;background-color:#3f94ee}.nav_top_selected[data-v-0acc0c84]{background-color:#fff;border-top-left-radius:.16rem;border-top-right-radius:.16rem;color:#000}.mask2[data-v-0acc0c84]{position:fixed;top:0;left:0;z-index:13;width:100%;height:100%;background-color:rgba(0,0,0,.4)}.down_window[data-v-0acc0c84]{width:80%;height:8.2rem;z-index:100;background:#ee595a;padding:.2rem}.down_window .down[data-v-0acc0c84]{margin:0 auto;width:4.8rem;height:.9rem;background:#fa0}",""])},459:function(t,e,c){"use strict";c.r(e);var o={components:{SelectAddress:c(109).a},layout:"m",data:()=>({showMask:!1,navList:[{id:0,name:"找专线"},{id:1,name:"找货源"},{id:2,name:"找车源"}],content1List:[{name:"专线大厅",url:"/m/home/home_zhuanxian.png",bc:"#929DFB",to:"/m/pageView"},{name:"货源大厅",url:"/m/home/home_huoyuandt.png",bc:"#F77D5E",to:"/m/pageView"},{name:"车源大厅",url:"/m/home/home_cheyuandt.png",bc:"#F6CB43",to:"/m/pageView"},{name:"物流公司",url:"/m/home/home_wuliugs.png",bc:"#5592F7",to:"/m/pageView"}],content2List:[{name:"在线下单",url:"/m/home/home_xiadan.png",to:""},{name:"运单查询",url:"/m/home/home_chaxun.png",to:"/m/huoyuan"},{name:"APP下载",url:"/m/home/home_app.png",to:""},{name:"活动中心",url:"/m/home/home_huodong.png",to:"/m/gongsi"}]}),async fetch({$axios:t,app:e,query:c,store:o}){},created(){},mounted(){},methods:{getEndArea(data){data&&this.$store.dispatch("m/SETDATA",{data:data,name:"endName"})},getStartArea(data){data&&this.$store.dispatch("m/SETDATA",{data:data,name:"startName"})},search(){console.log(this.$store.state.m)},toList(t,i){if(this.$router.push(t.to),this.$store.commit("m/pageView/setData",{name:"footerId",data:i}),"专线大厅"===t.name){this.$store.commit("m/zhuanxian/setData",{name:"currentPage",data:1}),this.$store.commit("m/zhuanxian/setData",{name:"rangeList",data:[]}),this.$store.commit("m/zhuanxian/setData",{name:"scrollTo",data:0});let t={currentPage:this.$store.state.m.zhuanxian.currentPage,pageSize:20,startProvince:this.$store.state.m.zhuanxian.startName[0],startCity:this.$store.state.m.zhuanxian.startName[1],startArea:this.$store.state.m.zhuanxian.startName[2],endProvince:this.$store.state.m.zhuanxian.endName[0],endCity:this.$store.state.m.zhuanxian.endName[1],endArea:this.$store.state.m.zhuanxian.endName[2]};this.$store.dispatch("m/zhuanxian/GETRANGELIST",{data:t,name:"rangeList"})}if("货源大厅"===t.name){this.$store.commit("m/zhuanxian/setData",{name:"currentPage",data:1}),this.$store.commit("m/zhuanxian/setData",{name:"rangeList",data:[]}),this.$store.commit("m/zhuanxian/setData",{name:"scrollTo",data:0});let t={currentPage:this.$store.state.m.zhuanxian.currentPage,pageSize:20,startProvince:this.$store.state.m.zhuanxian.startName[0],startCity:this.$store.state.m.zhuanxian.startName[1],startArea:this.$store.state.m.zhuanxian.startName[2],endProvince:this.$store.state.m.zhuanxian.endName[0],endCity:this.$store.state.m.zhuanxian.endName[1],endArea:this.$store.state.m.zhuanxian.endName[2]};this.$store.dispatch("m/zhuanxian/GETRANGELIST",{data:t,name:"rangeList"})}if("物流公司"===t.name){this.$store.commit("m/gongsi/setData",{name:"currentPage",data:1}),this.$store.commit("m/gongsi/setData",{name:"rangeList",data:[]}),this.$store.commit("m/gongsi/setData",{name:"scrollTo",data:0});let t={currentPage:this.$store.state.m.gongsi.currentPage,pageSize:20,startProvince:this.$store.state.m.gongsi.startName[0],startCity:this.$store.state.m.gongsi.startName[1],startArea:this.$store.state.m.gongsi.startName[2],endProvince:this.$store.state.m.gongsi.endName[0],endCity:this.$store.state.m.gongsi.endName[1],endArea:this.$store.state.m.gongsi.endName[2]};this.$store.dispatch("m/gongsi/GETRANGELIST",{data:t,name:"rangeList"})}},toClick(t){"在线下单"!==t&&"APP下载"!==t||(this.showMask=!0)},clickEnd(){this.$refs.selectEndAddress.showMask=!0},clickStart(){this.$refs.selectStartAddress.showMask=!0},clickChange(t,e){this.$store.dispatch("m/SETDATA",{data:e,name:"startName"}),this.$store.dispatch("m/SETDATA",{data:t,name:"endName"})},clickNav(t){this.$store.dispatch("m/SETDATA",{data:t,name:"navId"})},downApp(){window.location.href="http://h5.28tms.com/"}}},r=c(0);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"home"},[t._ssrNode('<img src="/m/home/home_banner.png" class="top" data-v-0acc0c84> <div class="body flex_f" data-v-0acc0c84><div class="nav flex_f" data-v-0acc0c84><div class="nav_top flex_a f-34" data-v-0acc0c84>'+t._ssrList(t.navList,function(e,c){return"<div"+t._ssrClass("flex_1 flex height_100",[e.id===t.$store.state.m.navId?"nav_top_selected":""])+" data-v-0acc0c84>"+t._ssrEscape(t._s(e.name))+"</div>"})+'</div> <div class="flex_1 nav_down padding_20 flex_f flex_sb" data-v-0acc0c84><div class="flex_sb f-22 width_100" data-v-0acc0c84><div data-v-0acc0c84><span class="circle b_c_g" data-v-0acc0c84></span>出发地</div> <div data-v-0acc0c84><span class="circle b_c_r" data-v-0acc0c84></span>到达地</div></div> <div class="flex_sb width_100" data-v-0acc0c84><div'+t._ssrClass("f-46 flex_1 oneElisp",[""!==t.$store.state.m.startName[0]&&""===t.$store.state.m.startName[1]&&""===t.$store.state.m.startName[2]?"c-9":"c-3"])+" data-v-0acc0c84>"+t._ssrEscape(t._s(""===t.$store.state.m.startName[0]?"全国":""===t.$store.state.m.startName[1]&&""===t.$store.state.m.startName[2]?"选那儿送":""===t.$store.state.m.startName[2]?t.$store.state.m.startName[1]:t.$store.state.m.startName[2]))+'</div> <div class="flex_1 flex" data-v-0acc0c84><img src="/m/home/home_wangfan.png" class="change" data-v-0acc0c84></div> <div'+t._ssrClass("f-46 flex_1 oneElisp",[""!==t.$store.state.m.endName[0]&&""===t.$store.state.m.endName[1]&&""===t.$store.state.m.endName[2]?"c-9":"c-3"])+' style="text-align: end" data-v-0acc0c84>'+t._ssrEscape(t._s(""===t.$store.state.m.endName[0]?"全国":""===t.$store.state.m.endName[1]&&""===t.$store.state.m.endName[2]?"往那儿运":""===t.$store.state.m.endName[2]?t.$store.state.m.endName[1]:t.$store.state.m.endName[2]))+'</div></div> <div class="buttom f_w f-34 flex" data-v-0acc0c84>立即搜索</div></div></div> <div class="content1 margin_t_20 flex_saf" data-v-0acc0c84>'+t._ssrList(t.content1List,function(e,c){return'<div class="flex_f flex" data-v-0acc0c84><div class="content1_circle flex"'+t._ssrStyle(null,{background:e.bc},null)+" data-v-0acc0c84><img"+t._ssrAttr("src",e.url)+' style="width: 60%" data-v-0acc0c84></div> <div class="c-3 f-26" data-v-0acc0c84>'+t._ssrEscape(t._s(e.name))+"</div></div>"})+'</div> <div class="content2 flex_as" data-v-0acc0c84><div class="flex_saf width_100" data-v-0acc0c84>'+t._ssrList(t.content2List,function(e,c){return'<div class="flex_f flex" data-v-0acc0c84><div class="flex_a flex_f" data-v-0acc0c84><img'+t._ssrAttr("src",e.url)+' style="height: 0.56rem" data-v-0acc0c84> <div class="c-7 f-26" data-v-0acc0c84>'+t._ssrEscape(t._s(e.name))+"</div></div></div>"})+'</div></div></div> <footer class="flex_sb f-16 p_r" data-v-0acc0c84><div class="circle_out flex" data-v-0acc0c84><div class="circle_in flex" data-v-0acc0c84><img src="/m/home/home_fahuo.png" style="width: 50%" data-v-0acc0c84></div></div> <div class="h flex_sb flex_f" data-v-0acc0c84><img src="/m/home/home_home.png" style="width: 0.46rem" data-v-0acc0c84> <div class="f-16" data-v-0acc0c84>首页</div></div> <div class="h flex_sb flex_f" data-v-0acc0c84><div class="circle flex" data-v-0acc0c84><div class="circle" data-v-0acc0c84></div></div> <div class="f-16" data-v-0acc0c84>发货</div></div> <div class="h flex_sb flex_f" data-v-0acc0c84><img src="/m/home/lobby_icon_activity.png" style="width: 0.46rem" data-v-0acc0c84> <div class="f-16" data-v-0acc0c84>公告</div></div></footer> '),c("SelectAddress",{ref:"selectStartAddress",on:{setArea:t.getStartArea}}),t._ssrNode(" "),c("SelectAddress",{ref:"selectEndAddress",on:{setArea:t.getEndArea}}),t._ssrNode(" "+(t.showMask?"<div"+t._ssrClass("flex",[t.showMask?"mask2":""])+' data-v-0acc0c84><div class="down_window flex_f" data-v-0acc0c84><div class="flex_jfe" data-v-0acc0c84><img src="/images/login_close.png" data-v-0acc0c84></div> <div class="f-46 t_c f_w" data-v-0acc0c84>APP下单发货</div> <div class="f-32 t_c f_w" data-v-0acc0c84>注册立送8200元，名满即止</div> <div class="f-32 t_c f_w" data-v-0acc0c84>发货贵了，差价双倍返还</div> <img src="/m/home/u23.png" class="width_100" data-v-0acc0c84> <div class="down f-32 f_w flex" data-v-0acc0c84>前往下载</div> <div class="f-32 t_c f_w margin_t_20" data-v-0acc0c84>暂不</div></div></div>':"\x3c!----\x3e"))],2)},[],!1,function(t){var e=c(267);e.__inject__&&e.__inject__(t)},"0acc0c84","a7e8f082");e.default=component.exports},99:function(t,e,c){var content=c(112);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=c(3).default;t.exports.__inject__=function(t){o("1bfb57aa",content,!0,t)}}};
//# sourceMappingURL=0e18a399226599b37014.js.map