(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{186:function(t,e,l){var content=l(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(5).default)("4dc96070",content,!0,{sourceMap:!1})},194:function(t,e,l){"use strict";var n=l(186);l.n(n).a},195:function(t,e,l){(t.exports=l(4)(!1)).push([t.i,".component_header[data-v-31d73fec]{min-height:.88rem}.component_header img[data-v-31d73fec]{width:.2rem;height:.38rem}",""])},197:function(t,e,l){"use strict";var n=l(1),style=l(199),d=l.n(style);l(200);n.a.use(d.a);var o={name:"MyTop",props:{showLine:{type:Boolean,default:!0},backColor:{type:String,default:"#ffffff"},color:{type:String,default:"#42474b"}}},r=(l(194),l(2)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"component_header flex_a",class:[t.showLine?"b_b":""],style:{background:t.backColor,color:t.color}},[l("div",{staticClass:"flex_1 flex_a f-36"},[l("i",{staticClass:"padding_l_20 cubeic-back",on:{click:function(e){return t.$router.go(-1)}}})]),t._v(" "),t._t("default"),t._v(" "),l("div",{staticClass:"flex_1"})],2)},[],!1,null,"31d73fec",null);e.a=component.exports},347:function(t,e,l){var content=l(595);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(5).default)("b38d31fa",content,!0,{sourceMap:!1})},594:function(t,e,l){"use strict";var n=l(347);l.n(n).a},595:function(t,e,l){(t.exports=l(4)(!1)).push([t.i,".h[data-v-661e3037]{height:inherit}.body[data-v-661e3037]{padding:0 .3rem}.body .top[data-v-661e3037]{height:.94rem}.body .top .item[data-v-661e3037]{height:.54rem;border-radius:.47rem;padding:0 .18rem}.body .content[data-v-661e3037]{line-height:.4rem;padding:.28rem 0}.body .content .answer[data-v-661e3037]{background:#f6f8fa;border-radius:.1rem;padding:.1rem .2rem .2rem;margin-top:.3rem}.item_selected[data-v-661e3037]{border:.02rem solid #54a7ff;color:#54a7ff;background:#e0efff}.item_no_selected[data-v-661e3037]{border:.02rem solid #eee;color:#8a8d8f}.img-star[data-v-661e3037]{width:.28rem;height:.28rem;margin-right:.08rem}",""])},643:function(t,e,l){"use strict";l.r(e);var n=l(6),d=l(1),o=l(250),r=l.n(o),c=(l(251),l(197));let v=function(){var t=Object(n.a)(function*(t,e,l){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return yield t.post("/28-web/rangeEva/range/list",{currentPage:l,pageSize:20,transportRangeId:e.id,assessLevel:n})});return function(e,l,n){return t.apply(this,arguments)}}();d.a.use(r.a);var _={layout:"m",name:"Evaluate",components:{MyTop:c.a},data:()=>({id:0,currentPageAll:1,currentPageGood:1,currentPageMiddle:1,currentPageBad:1,scrollToAll:0,scrollToGood:0,scrollToMiddle:0,scrollToBad:0,options:{pullUpLoad:{txt:{more:"",noMore:"没有更多数据了"}},scrollbar:!0}}),asyncData:t=>Object(n.a)(function*(){let e=t.$axios,l=(t.app,t.query),n=(t.error,[]),d=yield e.get("/28-web/rangeEva/range/assessLevel/count?rangeId=".concat(l.id)),o=yield v(e,l,1),r=yield v(e,l,1,"AF0360101"),c=yield v(e,l,1,"AF0360102"),_=yield v(e,l,1,"AF0360103");return 200===d.data.status&&(n=[{id:0,name:"全部(".concat(d.data.data.all,")")},{id:1,name:"好评(".concat(d.data.data.good,")")},{id:2,name:"中评(".concat(d.data.data.middle,")")},{id:3,name:"差评(".concat(d.data.data.bad,")")}]),{linedataAll:200===o.data.status?o.data.data.list:[],pagesAll:200===o.data.status?o.data.data.pages:0,linedataGood:200===r.data.status?r.data.data.list:[],pagesGood:200===r.data.status?r.data.data.pages:0,linedataMiddle:200===c.data.status?c.data.data.list:[],pagesMiddle:200===c.data.status?c.data.data.pages:0,linedataBad:200===_.data.status?_.data.data.list:[],pagesBad:200===_.data.status?_.data.data.pages:0,linedataG:200===d.data.status?n:[]}})(),methods:{getScrollAll(t){this.scrollToAll=t.y},getScrollGood(t){this.scrollToGood=t.y},getScrollMiddle(t){this.scrollToMiddle=t.y},getScrollBad(t){this.scrollToBad=t.y},onPullingUpBad:function(){var t=Object(n.a)(function*(){if(this.currentPageBad>=this.pagesBad)return void this.$refs.scrollBad.forceUpdate();this.currentPageBad++;let t=yield v(this.$axios,this.$route.query,this.currentPageBad,"AF0360103");200===t.data.status&&(this.linedataBad=this.linedataBad.concat(t))});return function(){return t.apply(this,arguments)}}(),onPullingUpMiddle:function(){var t=Object(n.a)(function*(){if(this.currentPageMiddle>=this.pagesMiddle)return void this.$refs.scrollMiddle.forceUpdate();this.currentPageMiddle++;let t=yield v(this.$axios,this.$route.query,this.currentPageMiddle,"AF0360102");200===t.data.status&&(this.linedataMiddle=this.linedataMiddle.concat(t))});return function(){return t.apply(this,arguments)}}(),onPullingUpGood:function(){var t=Object(n.a)(function*(){if(this.currentPageGood>=this.pagesGood)return void this.$refs.scrollGood.forceUpdate();this.currentPageGood++;let t=yield v(this.$axios,this.$route.query,this.currentPageGood,"AF0360101");200===t.data.status&&(this.linedataGood=this.linedataGood.concat(t))});return function(){return t.apply(this,arguments)}}(),onPullingUpAll:function(){var t=Object(n.a)(function*(){if(this.currentPageAll>=this.pagesAll)return void this.$refs.scrollAll.forceUpdate();this.currentPageAll++;let t=yield v(this.$axios,this.$route.query,this.currentPageAll);200===t.data.status&&(this.linedataAll=this.linedataAll.concat(t))});return function(){return t.apply(this,arguments)}}(),clickEvaluate(t){this.id=t,this.$nextTick(()=>{0===t&&0!==this.linedataAll.length&&this.$refs.scrollAll.scrollTo(0,this.scrollToAll),1===t&&0!==this.linedataGood.length&&this.$refs.scrollGood.scrollTo(0,this.scrollToGood),2===t&&0!==this.linedataMiddle.length&&this.$refs.scrollMiddle.scrollTo(0,this.scrollToMiddle),3===t&&0!==this.linedataBad.length&&this.$refs.scrollBad.scrollTo(0,this.scrollToBad)})}}},f=(l(594),l(2)),component=Object(f.a)(_,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex_f h"},[l("MyTop",[l("div",{staticClass:"flex_3 f-36 flex"},[t._v("专线详情")])]),t._v(" "),l("div",{staticClass:"body"},[l("div",{staticClass:"top flex_a"},t._l(t.linedataG,function(e,n){return l("div",{key:n,staticClass:"item f-24 flex oneElisp",class:[e.id===t.id?"item_selected":"item_no_selected",n===t.linedataG.length-1?"":"margin_r_20"],on:{click:function(l){return t.clickEvaluate(e.id)}}},[t._v(t._s(e.name))])}),0)]),t._v(" "),0===t.linedataAll.length&&0===t.id?l("div",{staticClass:"content"},[l("div",{staticClass:"c-3 f-30 flex"},[t._v(" 此用户没有评论")])]):t._e(),t._v(" "),0!==t.linedataAll.length&&0===t.id?l("cube-scroll",{ref:"scrollAll",staticClass:"mScroll flex_1 body",attrs:{"scroll-events":["scroll-end"],data:t.linedataAll,options:t.options},on:{"pulling-up":t.onPullingUpAll,"scroll-end":t.getScrollAll}},t._l(t.linedataAll,function(e,n){return l("div",{key:n,staticClass:"content"},[l("div",{staticClass:"flex_a"},[l("span",{staticClass:"c-3 f-30 margin_r_20 f_w_b"},[t._v("\n          "+t._s(e.evaluationName)+"\n        ")]),t._v(" "),t._l(4,function(t,e){return l("img",{key:e,staticClass:"img-star",attrs:{src:"/m/zhuanxian/rate_star_yellow.png"}})})],2),t._v(" "),l("div",{staticClass:"f-24 c-9"},[t._v(" "+t._s(e.createTime))]),t._v(" "),l("div",{staticClass:"f-28 c-3"},[t._v(t._s(e.evaluationDes)+" ")]),t._v(" "),l("div",{staticClass:"answer"},[l("div",{staticClass:"f-24 c-9"},[t._v("[回复]：")]),t._v(" "),l("div",{staticClass:"f-28 c-3"},[t._v("\n          "+t._s(e.replyDes)+"\n        ")])])])}),0):t._e(),t._v(" "),0===t.linedataGood.length&&1===t.id?l("div",{staticClass:"content"},[l("div",{staticClass:"c-3 f-30 flex"},[t._v(" 此用户没有评论")])]):t._e(),t._v(" "),0!==t.linedataGood.length&&1===t.id?l("cube-scroll",{ref:"scrollGood",staticClass:"mScroll flex_1 body",attrs:{"scroll-events":["scroll-end"],data:t.linedataGood,options:t.options},on:{"pulling-up":t.onPullingUpGood,"scroll-end":t.getScrollGood}},t._l(t.linedataGood,function(e,n){return l("div",{key:n,staticClass:"content"},[l("div",{staticClass:"flex_a"},[l("span",{staticClass:"c-3 f-30 margin_r_20 f_w_b"},[t._v("\n          "+t._s(e.evaluationName)+"\n        ")]),t._v(" "),t._l(4,function(t,e){return l("img",{key:e,staticClass:"img-star",attrs:{src:"/m/zhuanxian/rate_star_yellow.png"}})})],2),t._v(" "),l("div",{staticClass:"f-24 c-9"},[t._v(" "+t._s(e.createTime))]),t._v(" "),l("div",{staticClass:"f-28 c-3"},[t._v(t._s(e.evaluationDes)+" ")]),t._v(" "),l("div",{staticClass:"answer"},[l("div",{staticClass:"f-24 c-9"},[t._v("[回复]：")]),t._v(" "),l("div",{staticClass:"f-28 c-3"},[t._v("\n          "+t._s(e.replyDes)+"\n        ")])])])}),0):t._e(),t._v(" "),0===t.linedataMiddle.length&&2===t.id?l("div",{staticClass:"content"},[l("div",{staticClass:"c-3 f-30 flex"},[t._v(" 此用户没有评论")])]):t._e(),t._v(" "),0!==t.linedataMiddle.length&&2===t.id?l("cube-scroll",{ref:"scrollMiddle",staticClass:"mScroll flex_1 body",attrs:{"scroll-events":["scroll-end"],data:t.linedataMiddle,options:t.options},on:{"pulling-up":t.onPullingUpMiddle,"scroll-end":t.getScrollMiddle}},t._l(t.linedataMiddle,function(e,n){return l("div",{key:n,staticClass:"content"},[l("div",{staticClass:"flex_a"},[l("span",{staticClass:"c-3 f-30 margin_r_20 f_w_b"},[t._v("\n          "+t._s(e.evaluationName)+"\n        ")]),t._v(" "),t._l(4,function(t,e){return l("img",{key:e,staticClass:"img-star",attrs:{src:"/m/zhuanxian/rate_star_yellow.png"}})})],2),t._v(" "),l("div",{staticClass:"f-24 c-9"},[t._v(" "+t._s(e.createTime))]),t._v(" "),l("div",{staticClass:"f-28 c-3"},[t._v(t._s(e.evaluationDes)+" ")]),t._v(" "),l("div",{staticClass:"answer"},[l("div",{staticClass:"f-24 c-9"},[t._v("[回复]：")]),t._v(" "),l("div",{staticClass:"f-28 c-3"},[t._v("\n          "+t._s(e.replyDes)+"\n        ")])])])}),0):t._e(),t._v(" "),0===t.linedataBad.length&&3===t.id?l("div",{staticClass:"content"},[l("div",{staticClass:"c-3 f-30 flex"},[t._v(" 此用户没有评论")])]):t._e(),t._v(" "),0!==t.linedataBad.length&&3===t.id?l("cube-scroll",{ref:"scrollBad",staticClass:"mScroll flex_1 body",attrs:{"scroll-events":["scroll-end"],data:t.linedataBad,options:t.options},on:{"pulling-up":t.onPullingUpBad,"scroll-end":t.getScrollBad}},t._l(t.linedataBad,function(e,n){return l("div",{key:n,staticClass:"content"},[l("div",{staticClass:"flex_a"},[l("span",{staticClass:"c-3 f-30 margin_r_20 f_w_b"},[t._v("\n          "+t._s(e.evaluationName)+"\n        ")]),t._v(" "),t._l(4,function(t,e){return l("img",{key:e,staticClass:"img-star",attrs:{src:"/m/zhuanxian/rate_star_yellow.png"}})})],2),t._v(" "),l("div",{staticClass:"f-24 c-9"},[t._v(" "+t._s(e.createTime))]),t._v(" "),l("div",{staticClass:"f-28 c-3"},[t._v(t._s(e.evaluationDes)+" ")]),t._v(" "),l("div",{staticClass:"answer"},[l("div",{staticClass:"f-24 c-9"},[t._v("[回复]：")]),t._v(" "),l("div",{staticClass:"f-28 c-3"},[t._v("\n          "+t._s(e.replyDes)+"\n        ")])])])}),0):t._e()],1)},[],!1,null,"661e3037",null);e.default=component.exports}}]);