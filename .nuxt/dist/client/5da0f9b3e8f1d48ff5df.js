(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{255:function(t,e,o){var content=o(327);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("13961bbb",content,!0,{sourceMap:!1})},326:function(t,e,o){"use strict";var n=o(255);o.n(n).a},327:function(t,e,o){(t.exports=o(10)(!1)).push([t.i,".home[data-v-029887be]{height:inherit;background:#f4f4f4}.home .top[data-v-029887be]{width:100%}.home .body[data-v-029887be]{position:relative;top:-1.3rem}.home .body .nav[data-v-029887be]{width:90%;margin:0 auto;height:3.68rem}.home .body .nav .nav_top[data-v-029887be]{height:.88rem;background-color:rgba(51,51,51,.5);border-top-left-radius:.16rem;border-top-right-radius:.16rem;color:#fff}.home .body .nav .nav_down[data-v-029887be]{background-color:#fff;border-bottom-left-radius:.16rem;border-bottom-right-radius:.16rem}.home .body .nav .nav_down .circle[data-v-029887be]{display:inline-block;width:.18rem;height:.18rem;border-radius:.18rem;margin-right:.14rem}.home .body .nav .nav_down .change[data-v-029887be]{width:.68rem;height:.68rem}.home .body .nav .nav_down .buttom[data-v-029887be]{width:95%;height:.8rem;background:linear-gradient(90deg,#61aeff,#3497ff);border-radius:.16rem}.home .body .content1[data-v-029887be]{height:1.88rem;background-color:#fff;padding:0 .59rem}.home .body .content1 .content1_circle[data-v-029887be]{width:1rem;height:1rem;border-radius:1rem;margin-bottom:.1rem}.home .body .content2[data-v-029887be]{background-color:#fff;padding:0 .59rem;height:4.27rem}.home .body .content2 img[data-v-029887be]{margin:.3rem 0 .1rem}.home footer[data-v-029887be]{position:fixed;width:100%;bottom:0;height:.98rem;padding:0 1.31rem;background:#f6f8fa;box-shadow:0 -.02rem .08rem 0 rgba(20,20,20,.05),0 0 .06rem 0 rgba(20,20,20,.05);color:#42474b;box-sizing:border-box}.home footer .middle[data-v-029887be]{position:relative;top:-.34rem}.home footer .circle[data-v-029887be]{width:1.16rem;height:1.16rem;border-radius:1.16rem;background-color:#3f94ee}.nav_top_selected[data-v-029887be]{background-color:#fff;border-top-left-radius:.16rem;border-top-right-radius:.16rem;color:#000}",""])},524:function(t,e,o){"use strict";o.r(e);var n={layout:"m",data:()=>({navId:0,navList:[{id:0,name:"找专线"},{id:1,name:"找货源"},{id:2,name:"找车源"}],content1List:[{name:"专线大厅",url:"/m/home/home_zhuanxian.png",bc:"#929DFB",to:"/m/zhuanxian"},{name:"货源大厅",url:"/m/home/home_huoyuandt.png",bc:"#F77D5E",to:"/m/huoyuan"},{name:"车源大厅",url:"/m/home/home_cheyuandt.png",bc:"#F6CB43",to:"/m/cheyuan"},{name:"物流公司",url:"/m/home/home_wuliugs.png",bc:"#5592F7",to:"/m/gongsi"}],content2List:[{name:"在线下单",url:"/m/home/home_xiadan.png",to:"/m/zhuanxian"},{name:"运单查询",url:"/m/home/home_chaxun.png",to:"/m/huoyuan"},{name:"APP下载",url:"/m/home/home_app.png",to:"/m/cheyuan"},{name:"活动中心",url:"/m/home/home_huodong.png",to:"/m/gongsi"}]}),created(){},mounted(){},methods:{search(){},toClick(t){},clickEnd(){},clickStart(){},clickChange(){},clickNav(t){this.navId=t}}},r=(o(326),o(1)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{staticClass:"top",attrs:{src:"/m/home/home_banner.png"}}),t._v(" "),o("div",{staticClass:"body flex_f"},[o("div",{staticClass:"nav flex_f"},[o("div",{staticClass:"nav_top flex_a f-34"},t._l(t.navList,function(e,n){return o("div",{key:n,staticClass:"flex_1 flex height_100",class:[e.id===t.navId?"nav_top_selected":""],on:{click:function(o){return t.clickNav(e.id)}}},[t._v(t._s(e.name))])}),0),t._v(" "),o("div",{staticClass:"flex_1 nav_down padding_20 flex_f flex_sb"},[t._m(0),t._v(" "),o("div",{staticClass:"flex_sb width_100"},[o("div",{staticClass:"f-46 flex_1",on:{click:function(e){return t.clickStart()}}},[t._v("广州")]),t._v(" "),o("div",{staticClass:"flex_1 flex"},[o("img",{staticClass:"change",attrs:{src:"/m/home/home_wangfan.png"},on:{click:function(e){return t.clickChange()}}})]),t._v(" "),o("div",{staticClass:"f-46 c-9 flex_1 flex_ce",on:{click:function(e){return t.clickEnd()}}},[t._v("往那儿运")])]),t._v(" "),o("div",{staticClass:"buttom f_w f-34 flex",on:{click:function(e){return t.search()}}},[t._v("立即搜索")])])]),t._v(" "),o("div",{staticClass:"content1 margin_t_20 flex_sb"},t._l(t.content1List,function(e,n){return o("nuxt-link",{key:n,attrs:{to:e.to}},[o("div",{staticClass:"content1_circle flex",style:{background:e.bc}},[o("img",{staticStyle:{width:"60%"},attrs:{src:e.url}})]),t._v(" "),o("div",{staticClass:"c-3 f-26"},[t._v(t._s(e.name))])])}),1),t._v(" "),o("div",{staticClass:"content2 margin_t_20 flex_as"},[o("div",{staticClass:"flex_sb width_100"},t._l(t.content2List,function(e,n){return o("div",{key:n},[o("div",{staticClass:"flex_a flex_f",on:{click:function(o){return t.toClick(e.name)}}},[o("img",{staticStyle:{height:"0.56rem"},attrs:{src:e.url}}),t._v(" "),o("div",{staticClass:"c-7 f-26"},[t._v(t._s(e.name))])])])}),0)])]),t._v(" "),t._m(1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex_sb f-22 width_100"},[e("div",[e("span",{staticClass:"circle b_c_g"}),this._v("出发地")]),this._v(" "),e("div",[e("span",{staticClass:"circle b_c_r"}),this._v("到达地")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"flex_sb f-16"},[o("div",{staticClass:"flex_f flex_a"},[o("img",{staticStyle:{width:"0.46rem"},attrs:{src:"/m/home/home_home.png"}}),t._v(" "),o("div",[t._v("首页")])]),t._v(" "),o("div",{staticClass:"flex_f flex_a middle"},[o("div",{staticClass:"circle flex"},[o("img",{staticStyle:{width:"0.76rem"},attrs:{src:"/m/home/home_fahuo.png"}})]),t._v(" "),o("div",[t._v("发货")])]),t._v(" "),o("div",{staticClass:"flex_f flex_a"},[o("img",{staticStyle:{width:"0.46rem"},attrs:{src:"/m/home/lobby_icon_activity.png"}}),t._v(" "),o("div",[t._v("公告")])])])}],!1,null,"029887be",null);e.default=component.exports}}]);