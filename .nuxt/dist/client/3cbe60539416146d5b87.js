(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{223:function(t,e,n){var content=n(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("4dc96070",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";var r=n(223);n.n(r).a},253:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".component_header[data-v-31d73fec]{min-height:.88rem}.component_header img[data-v-31d73fec]{width:.2rem;height:.38rem}",""])},257:function(t,e,n){"use strict";var r=n(0),style=n(248),c=n.n(style);n(249);r.a.use(c.a);var _={name:"MyTop",props:{showLine:{type:Boolean,default:!0},backColor:{type:String,default:"#ffffff"},color:{type:String,default:"#42474b"}}},l=(n(252),n(1)),component=Object(l.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component_header flex_a",class:[t.showLine?"b_b":""],style:{background:t.backColor,color:t.color}},[n("div",{staticClass:"flex_1 flex_a f-36"},[n("i",{staticClass:"padding_l_20 cubeic-back",on:{click:function(e){return t.$router.go(-1)}}})]),t._v(" "),t._t("default"),t._v(" "),n("div",{staticClass:"flex_1"})],2)},[],!1,null,"31d73fec",null);e.a=component.exports},349:function(t,e,n){var content=n(529);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("5e917577",content,!0,{sourceMap:!1})},350:function(t,e,n){var content=n(531);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("527c1bf4",content,!0,{sourceMap:!1})},528:function(t,e,n){"use strict";var r=n(349);n.n(r).a},529:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".top[data-v-42e701e6]{height:4.74rem;overflow:hidden}.top .b_c[data-v-42e701e6]{background:#2f3241;width:10rem;height:2.44rem;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);top:-.02rem;z-index:-1;border-radius:0 0 50% 50%}.top .top_content[data-v-42e701e6]{position:absolute;top:0;padding:.36rem;box-sizing:border-box}.top .top_content .img[data-v-42e701e6]{position:absolute;top:0;right:5%}.top .top_content .circle[data-v-42e701e6]{height:.32rem;background:#eb9252;border-radius:.2rem;font-weight:500;color:#ff642b;line-height:.28rem;padding:0 .1rem}.top .top_content .img-item[data-v-42e701e6]{width:.46rem}.top .top_content .fav[data-v-42e701e6]{width:1.5rem;height:.52rem;background:hsla(0,0%,100%,.2);border-radius:.1rem;border:.02rem solid #fff}.item1[data-v-42e701e6]{height:.9rem;color:#42474b;background:linear-gradient(50deg,#fcf6f0,#fcf2d7);border-radius:.08rem}.item1 span[data-v-42e701e6]{color:#ff642b}.body_content[data-v-42e701e6]{width:95%;margin:0 auto}.c_b47[data-v-42e701e6]{color:#b4760e}.c_e2a[data-v-42e701e6]{color:#e2a237}.item_title[data-v-42e701e6]{height:.8rem}.item_h1[data-v-42e701e6]{height:2rem;border-bottom:1px solid #eee}.item_h1 i[data-v-42e701e6]{height:.32rem;background:#eee;border-radius:.16rem;color:#8a8d8f;line-height:.28rem;padding:0 .2rem}.item_h1 .footer[data-v-42e701e6]{color:#f40;line-height:.33rem}.item_h2[data-v-42e701e6]{height:2.72rem;border-bottom:1px solid #eee;padding:.3rem 0;box-sizing:border-box}.item_h2 img[data-v-42e701e6]{height:.31rem;margin-right:.2rem}.qs[data-v-42e701e6]{background:#3c92ef}.qs[data-v-42e701e6],.rs[data-v-42e701e6]{width:.66rem;height:.32rem;border-radius:.04rem}.rs[data-v-42e701e6]{background:#fad338}.divide[data-v-42e701e6]{height:.1rem;background:#f5f5f5}.swiper-h[data-v-42e701e6]{height:1.6rem}.swiper-h .swiper-item[data-v-42e701e6]{width:25%;box-sizing:border-box;float:left}.title_h[data-v-42e701e6]{height:.88rem}.swiper-wrapper img[data-v-42e701e6]{margin-bottom:.1rem}.info[data-v-42e701e6]{line-height:.35rem;margin-bottom:.77rem;text-indent:2em}",""])},530:function(t,e,n){"use strict";var r=n(350);n.n(r).a},531:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".my_active{background:#bbdcff!important}.my_bullet{width:.4rem;height:.06rem;background:#f6f6f6;border-radius:.05rem;display:inline-block;margin:0 5px}",""])},562:function(t,e,n){"use strict";n.r(e);n(5),n(58);var r=n(8),c=n(257),_=(n(277),{components:{MyTop:c.a},layout:"m",data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",bulletClass:"my_bullet",bulletActiveClass:"my_active"}}}},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,c,_,i,l,o,d,v;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,e.app,e.query,r=[],c=[],t.next=4,n.get("/28-web/sysDict/getSysDictByCodeGet/AF027");case 4:for((_=t.sent).data.data.forEach(function(t){switch(t.name){case"整车运输":t.img="/m/gongsi/zhencheys.png";break;case"零担运输":t.img="/m/gongsi/lingdanys.png";break;case"专线运输":t.img="/m/gongsi/zhuanxianys.png";break;case"特大货物运输":t.img="/m/gongsi/tedahwys.png";break;case"大件运输":t.img="/m/gongsi/dajianys.png";break;case"集装箱运输":t.img="/m/gongsi/jizhuangxys.png";break;case"冷藏运输":t.img="/m/gongsi/lengcangys.png";break;case"危险品运输":case"仓储":t.img="/m/gongsi/weixianpys.png"}}),i=0,l=_.data.data.length;i<l;i+=4)r.push(_.data.data.slice(i,i+4));return t.next=9,n.get("/28-web/sysDict/getSysDictByCodeGet/AF025");case 9:for((o=t.sent).data.data.forEach(function(t){switch(t.name){case"送货上门":t.img="/m/gongsi/songhuosl.png";break;case"保价运输":t.img="/m/gongsi/baojiays.png";break;case"运费到付":t.img="/m/gongsi/yunfeidf.png";break;case"代收货款":t.img="/m/gongsi/daishouhk.png";break;case"上门提货":t.img="/m/gongsi/shangmenth.png";break;case"开发票":t.img="/m/gongsi/kaifap.png";break;case"签单回收":t.img="/m/gongsi/qiandanhs.png";break;case"时效保障":t.img="/m/gongsi/shixiaobz.png"}}),d=0,v=o.data.data.length;d<v;d+=4)c.push(o.data.data.slice(d,d+4));return t.abrupt("return",{AF027result:r||[],AF025result:c||[]});case 13:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),methods:{}}),l=(n(528),n(530),n(1)),component=Object(l.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MyTop",{attrs:{"show-line":!1,color:"#ffffff","back-color":"#2F3241"}},[n("div",{staticClass:"flex_3 f-36 flex"},[t._v("公司详情")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[n("div",{staticClass:"swiper-wrapper"},t._l(t.AF027result,function(e,r){return n("div",{key:r,staticClass:"swiper-slide f-24 swiper-h"},t._l(e,function(e,r){return n("div",{key:r,staticClass:"flex_f flex_a swiper-item"},[n("img",{staticStyle:{width:"50%"},attrs:{src:e.img}}),t._v("\n          "+t._s(e.name)+"\n        ")])}),0)}),0),t._v(" "),n("div",{staticClass:"swiper-pagination",staticStyle:{bottom:"0"}})]),t._v(" "),t._m(3),t._v(" "),n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper1",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper1"}]},[n("div",{staticClass:"swiper-wrapper"},t._l(t.AF025result,function(e,r){return n("div",{key:r,staticClass:"swiper-slide f-24 swiper-h"},t._l(e,function(e,r){return n("div",{key:r,staticClass:"flex_f flex_a swiper-item"},[n("img",{staticStyle:{width:"50%"},attrs:{src:e.img}}),t._v("\n          "+t._s(e.name)+"\n        ")])}),0)}),0),t._v(" "),n("div",{staticClass:"swiper-pagination",staticStyle:{bottom:"0"}})]),t._v(" "),n("div",{staticClass:"divide"}),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"divide"}),t._v(" "),t._m(5),t._v(" "),n("div",{staticClass:"divide"}),t._v(" "),t._m(6)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top p_r"},[n("div",{staticClass:"b_c"}),t._v(" "),n("div",{staticClass:"body_content p_r"},[n("img",{staticClass:"width_100",attrs:{src:"/m/gongsi/mingpian_bg_normal.png"}}),t._v(" "),n("div",{staticClass:"width_100 height_100 top_content"},[n("img",{staticClass:"img",staticStyle:{width:"1.18rem"},attrs:{src:"/m/gongsi/youzhi.png"}}),t._v(" "),n("div",{staticClass:"f-42 c_b47"},[t._v("郑州利民物流有限公司")]),t._v(" "),n("div",{staticClass:"margin_t_20 flex_a"},[n("div",{staticClass:"circle f-20 flex"},[t._v("待认证")]),t._v(" "),n("div",{staticClass:"f-24 c_e2a margin_l_20 margin_r_20"},[t._v("综合信誉值")]),t._v(" "),n("img",{staticClass:"margin_l_20",staticStyle:{width:"0.3rem"},attrs:{src:"/m/gongsi/xinyuzhi.png"}}),t._v(" "),n("img",{staticClass:"margin_l_20",staticStyle:{width:"0.3rem"},attrs:{src:"/m/gongsi/xinyuzhi.png"}})]),t._v(" "),n("div",{staticStyle:{"margin-top":"0.5rem"}},[n("div",{staticClass:"flex_a"},[n("img",{staticClass:"img-item",attrs:{src:"/m/gongsi/dizhi1.png"}}),t._v(" "),n("div",{staticClass:"margin_l_20 f-26 c_b47 oneElisp"},[t._v("广东省广州市越秀区珠江新城富力中心旁")])]),t._v(" "),n("div",{staticClass:"flex_a margin_t_20"},[n("img",{staticClass:"img-item",attrs:{src:"/m/gongsi/renyuan1.png"}}),t._v(" "),n("div",{staticClass:"margin_l_20 f-26 c_b47"},[t._v("业务咨询：陈升 "),n("span",{staticClass:"f_b"},[t._v("17665765433")])])]),t._v(" "),n("div",{staticClass:"flex_a margin_t_20"},[n("img",{staticClass:"img-item",attrs:{src:"/m/gongsi/rexian1.png"}}),t._v(" "),n("div",{staticClass:"margin_l_20 f-26 c_b47"},[t._v("服务热线："),n("span",{staticClass:"f_b"},[t._v("020-29038810")])])])]),t._v(" "),n("div",{staticClass:"flex_sb margin_t_20"},[n("div",{staticClass:"f-24 c_b47"},[t._v("3216浏览")]),t._v(" "),n("div",{staticClass:"fav f-28 f_w flex"},[n("img",{staticStyle:{width:"0.25rem"},attrs:{src:"/m/gongsi/weishoucang.png"}}),t._v(" "),n("span",{staticClass:"margin_l_10"},[t._v("收 藏")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body_content"},[e("div",{staticClass:"flex item1 f-26 margin_t_10"},[this._v("\n      此专线物流公司诚信值超过"),e("span",[this._v("77.9%")]),this._v("的同行\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body_content"},[e("div",{staticClass:"f-32 title_h flex_a f_w_b"},[this._v("产品与服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body_content"},[e("div",{staticClass:"f-32 title_h flex_a f_w_b"},[this._v("增值服务")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body_content"},[n("div",{staticClass:"flex_sb item_title"},[n("div",{staticClass:"f-32 f_w_b"},[t._v("物流专线")]),t._v(" "),n("div",{staticClass:"f-22 f_b flex_a"},[t._v("\n        查看更多\n        "),n("img",{staticStyle:{width:"0.12rem"},attrs:{src:"/m/gongsi/tiaozhuan.png"}})])]),t._v(" "),n("div",{staticClass:"item_h1 flex_saf flex_f"},[n("div",{staticClass:"f-26 flex_a"},[t._v("郑州市 -> 徐州市 "),n("span",{staticClass:"margin_l_20 f_w f-20 f_w_b flex qs"},[t._v("强 势")])]),t._v(" "),n("div",{staticClass:"flex_a f-20"},[n("i",{staticClass:"flex"},[t._v("时效1天")]),t._v(" "),n("i",{staticClass:"flex margin_l_20"},[t._v("2876人浏览")])]),t._v(" "),n("div",{staticClass:"footer f-24"},[t._v("\n        轻货：116元～128元/公斤 重货：80元～100元/公斤\n      ")])]),t._v(" "),n("div",{staticClass:"item_h1 flex_saf flex_f"},[n("div",{staticClass:"f-26 flex_a"},[t._v("郑州市 -> 徐州市 "),n("span",{staticClass:"margin_l_20 f_w f-20 f_w_b flex rs"},[t._v("优 势")])]),t._v(" "),n("div",{staticClass:"flex_a f-20"},[n("i",{staticClass:"flex"},[t._v("时效1天")]),t._v(" "),n("i",{staticClass:"flex margin_l_20"},[t._v("2876人浏览")])]),t._v(" "),n("div",{staticClass:"footer f-24"},[t._v("\n        轻货：116元～128元/公斤 重货：80元～100元/公斤\n      ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body_content"},[n("div",{staticClass:"flex_sb item_title"},[n("div",{staticClass:"f-32 f_w_b"},[t._v("网点信息")]),t._v(" "),n("div",{staticClass:"f-22 f_b flex_a"},[t._v("\n        查看更多\n        "),n("img",{staticStyle:{width:"0.12rem"},attrs:{src:"/m/gongsi/tiaozhuan.png"}})])]),t._v(" "),n("div",{staticClass:"item_h2 flex_js flex_f"},[n("div",{staticClass:"f-30 f_b"},[t._v("网点1 : 嘉兴网点")]),t._v(" "),n("div",{staticClass:"f-26 flex_a c-3"},[n("img",{attrs:{src:"/m/gongsi/wangdian_dz.png"}}),t._v("湖南省益阳市新华区嘉兴物流综合服务楼 ")]),t._v(" "),n("div",{staticClass:"f-26 flex_a c-3"},[n("img",{attrs:{src:"/m/gongsi/wangdian_xm.png"}}),t._v("陈升 17665765433")]),t._v(" "),n("div",{staticClass:"f-26 flex_a c-3"},[n("img",{attrs:{src:"/m/gongsi/wangdian_dh.png"}}),t._v("020-29038810")])]),t._v(" "),n("div",{staticClass:"item_h2 flex_js flex_f"},[n("div",{staticClass:"f-30 f_b"},[t._v("网点1 : 嘉兴网点")]),t._v(" "),n("div",{staticClass:"f-26 flex_a c-3"},[n("img",{attrs:{src:"/m/gongsi/wangdian_dz.png"}}),t._v("湖南省益阳市新华区嘉兴物流综合服务楼 ")]),t._v(" "),n("div",{staticClass:"f-26 flex_a c-3"},[n("img",{attrs:{src:"/m/gongsi/wangdian_xm.png"}}),t._v("陈升 17665765433")]),t._v(" "),n("div",{staticClass:"f-26 flex_a c-3"},[n("img",{attrs:{src:"/m/gongsi/wangdian_dh.png"}}),t._v("020-29038810")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body_content"},[e("div",{staticClass:"f-32 title_h flex_a f_w_b"},[this._v("企业简介")]),this._v(" "),e("div",{staticClass:"f-26 info c-3"},[this._v("\n      郑州利民物流有限公司是一家业内领先的现代物流运输企业，我们致力于为国内的制造业客户和商贸流通业务提供专业且有价格竞争力的运输、仓储、包装、配送、代收代付等相关物流服务。我们目前处在迅猛发展阶段，以快速的增长速度在大力扩张货物运输业务范围，公司的专线运输范围基本覆盖华中，华东和华北三个大区的各省市县，承揽广州到湖南，湖北，上海，江苏，河南，北京，山东，天津全境的整车及零担业务，公司通过引入先进的供...\n      "),e("span",{staticClass:"f_b margin_l_10"},[this._v("详情")])])])}],!1,null,"42e701e6",null);e.default=component.exports}}]);