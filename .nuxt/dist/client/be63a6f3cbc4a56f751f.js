(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{186:function(t,e,c){var content=c(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(5).default)("4dc96070",content,!0,{sourceMap:!1})},194:function(t,e,c){"use strict";var l=c(186);c.n(l).a},195:function(t,e,c){(t.exports=c(4)(!1)).push([t.i,".component_header[data-v-31d73fec]{min-height:.88rem}.component_header img[data-v-31d73fec]{width:.2rem;height:.38rem}",""])},197:function(t,e,c){"use strict";var l=c(1),style=c(199),r=c.n(style);c(200);l.a.use(r.a);var d={name:"MyTop",props:{showLine:{type:Boolean,default:!0},backColor:{type:String,default:"#ffffff"},color:{type:String,default:"#42474b"}}},o=(c(194),c(2)),component=Object(o.a)(d,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"component_header flex_a",class:[t.showLine?"b_b":""],style:{background:t.backColor,color:t.color}},[c("div",{staticClass:"flex_1 flex_a f-36"},[c("i",{staticClass:"padding_l_20 cubeic-back",on:{click:function(e){return t.$router.go(-1)}}})]),t._v(" "),t._t("default"),t._v(" "),c("div",{staticClass:"flex_1"})],2)},[],!1,null,"31d73fec",null);e.a=component.exports},345:function(t,e,c){var content=c(588);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(5).default)("178364cb",content,!0,{sourceMap:!1})},587:function(t,e,c){"use strict";var l=c(345);c.n(l).a},588:function(t,e,c){(t.exports=c(4)(!1)).push([t.i,".h[data-v-6784b9ce]{height:inherit}.address[data-v-6784b9ce]{line-height:.4rem;padding-top:.2rem;box-sizing:border-box}.address .left[data-v-6784b9ce]{min-width:.68rem}.green_circle[data-v-6784b9ce]{background:#1daf01}.green_circle[data-v-6784b9ce],.red_circle[data-v-6784b9ce]{width:.18rem;height:.18rem;border-radius:.18rem}.red_circle[data-v-6784b9ce]{background:#e6454a}.line[data-v-6784b9ce]{position:absolute;top:-1.1rem;left:50%;width:.01rem;height:1rem;background:#d8d8d8}.content[data-v-6784b9ce]{padding:.3rem;background-color:#fff}.content .left[data-v-6784b9ce]{line-height:.45rem}.content1[data-v-6784b9ce]{padding:.31rem .3rem 0;background-color:#fff}.content1 .left[data-v-6784b9ce]{min-width:1.43rem}.divide[data-v-6784b9ce]{width:calc(100% - .6rem);margin:0 auto;border-top:1px solid #eee}.copy[data-v-6784b9ce]{width:.64rem;height:.32rem;border-radius:.04rem;border:1px solid #a9a9a9;color:#a9a9a9}",""])},656:function(t,e,c){"use strict";c.r(e);c(19);var l=c(6),r=c(197),d=c(1),o=c(583),n=c.n(o),f=(c(584),c(586));d.a.use(f.a),d.a.use(n.a);var _={components:{MyTop:r.a},layout:"m",data:()=>({}),asyncData:t=>Object(l.a)(function*(){let e=t.$axios,c=(t.app,t.query);t.error;const l=yield e.get("/28-web/lclOrder/app/detail/"+c.id);if(200===l.data.status){let t=(l.data.data.id||"").split(""),e=0;t.forEach(t=>{e+=t.charCodeAt(0)||0}),l.data.data.num=e%30+1}return{copyData:200===l.data.status?l.data.data.aflcLclOrder.orderSerial:"",infoData:200===l.data.status?l.data.data:{}}})(),methods:{handleSuccess(t){this.$createToast({txt:"复制成功",type:"txt"}).show()},handleError(t){this.$createToast({txt:"复制失败",type:"txt"}).show()}}},v=(c(587),c(2)),component=Object(v.a)(_,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"flex_f h"},[c("MyTop",[c("div",{staticClass:"flex_3 f-36 flex"},[t._v("货源详情")])]),t._v(" "),c("div",{staticClass:"flex_1",staticStyle:{"background-color":"#F4F4F4"}},[c("div",{staticClass:"padding_b_20 b_c_w"},t._l(t.infoData.aflcLclOrderAddresses,function(e,l){return c("div",{key:l,staticClass:"address flex_a"},[0===l?c("div",{staticClass:"left flex p_r"},[c("div",{staticClass:"green_circle"})]):t._e(),t._v(" "),l===t.infoData.aflcLclOrderAddresses.length-1?c("div",{staticClass:"left flex p_r"},[c("div",{staticClass:"red_circle"}),t._v(" "),c("div",{staticClass:"line"})]):t._e(),t._v(" "),c("div",{staticClass:"height_100 flex_f flex_saf padding_r_20 o_f"},[c("div",{staticClass:"f-32 c-3 oneElisp"},[t._v("\n            "+t._s(e.province)+t._s(e.city)+t._s(e.area)+"\n          ")]),t._v(" "),c("div",{staticClass:"f-28 c-9 oneElisp"},[t._v("\n            "+t._s(e.viaAddress)+"\n          ")]),t._v(" "),c("div",{staticClass:"f-28 f_b oneElisp"},[t._v("\n            "+t._s(e.contacts)+" "+t._s(e.contactsPhone)+"\n          ")])])])}),0),t._v(" "),c("div",{staticClass:"content margin_t_20"},t._l(t.infoData.aflcLclOrderGoodsList,function(e,l){return c("div",{key:l,staticClass:"flex_a flex_sb",class:[0!==l?"margin_t_10":""]},[c("div",{staticClass:"left"},[c("div",{staticClass:"f-32 c-3"},[t._v(t._s(e.goodsName))]),t._v(" "),c("div",{staticClass:"f-24 c-9"},[t._v(t._s(e.goodsWeight?e.goodsWeight+"公斤/":"")+t._s(e.goodsVolume?e.goodsVolume+"方":""))])]),t._v(" "),c("div",{staticClass:"f-28 c-3"},[t._v("X "+t._s(e.goodsNum))])])}),0),t._v(" "),t._m(0),t._v(" "),c("div",{staticClass:"b_c_w",staticStyle:{"padding-bottom":"0.3rem"}},[c("div",{staticClass:"content1 flex_r f-28"},[c("div",{staticClass:"c-9 left"},[t._v("货物合计：")]),t._v(" "),c("div",{staticClass:"c-3"},[t._v("\n          "+t._s(t.infoData.aflcLclOrder.goodsWeight?t.infoData.aflcLclOrder.goodsWeight+"公斤/":"")+"\n          "+t._s(t.infoData.aflcLclOrder.goodsVolume?t.infoData.aflcLclOrder.goodsVolume+"立方/":"")+"\n          "+t._s(t.infoData.aflcLclOrder.goodsNum?t.infoData.aflcLclOrder.goodsNum+"件":"")+"\n        ")])]),t._v(" "),c("div",{staticClass:"content1 flex_r f-28"},[c("div",{staticClass:"c-9 left"},[t._v("出       价：")]),t._v(" "),c("div",{staticStyle:{color:"#FF4400"}},[t._v(t._s(t.infoData.aflcLclOrder.goodsPrice?"￥"+t.infoData.aflcLclOrder.goodsPrice:"价格面议"))])]),t._v(" "),c("div",{staticClass:"content1 flex_r f-28"},[c("div",{staticClass:"c-9 left"},[t._v("装货时间：")]),t._v(" "),c("div",{staticClass:"c-3"},[t._v(t._s(t.infoData.aflcLclOrder.loadingTime)+" "+t._s(t.infoData.aflcLclOrder.loadingTimeFragment))])]),t._v(" "),c("div",{staticClass:"content1 flex_r f-28"},[c("div",{staticClass:"c-9 left"},[t._v("额外需求：")]),t._v(" "),c("div",{staticClass:"c-3"},[t._v(t._s(t.infoData.aflcLclOrder.extraName?t.infoData.aflcLclOrder.extraName:"无"))])]),t._v(" "),c("div",{staticClass:"content1 flex_r f-28"},[c("div",{staticClass:"c-9 left"},[t._v("货源类型：")]),t._v(" "),c("div",{staticClass:"c-3"},[t._v(t._s(t.infoData.aflcLclOrder.goodsTypeName?t.infoData.aflcLclOrder.goodsTypeName:"无"))])]),t._v(" "),c("div",{staticClass:"content1 flex_r f-28"},[c("div",{staticClass:"c-9 left"},[t._v("备注信息：")]),t._v(" "),c("div",{staticClass:"c-3"},[t._v(t._s(t.infoData.aflcLclOrder.remark?t.infoData.aflcLclOrder.remark:"无"))])])]),t._v(" "),c("div",{staticClass:"b_c_w",staticStyle:{"padding-bottom":"0.3rem"}},[c("div",{staticClass:"content1 flex_a f-28 margin_t_20"},[c("div",{staticClass:"c-9 left"},[t._v("货源单号：")]),t._v(" "),c("div",{staticClass:"c-3 flex_a "},[c("div",[t._v(" "+t._s(t.infoData.aflcLclOrder.orderSerial)+" ")]),t._v(" "),c("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.copyData,expression:"copyData"}],staticClass:"copy flex f-20 margin_l_20",on:{success:t.handleSuccess,error:t.handleError}},[t._v("复制")])])]),t._v(" "),c("div",{staticClass:"content1 flex_r f-28"},[c("div",{staticClass:"c-9 left"},[t._v("发布时间：")]),t._v(" "),c("div",{staticClass:"c-3"},[t._v(t._s(t.infoData.aflcLclOrder.createTime))])])])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"b_c_w"},[e("div",{staticClass:"divide"})])}],!1,null,"6784b9ce",null);e.default=component.exports}}]);