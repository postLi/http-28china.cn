(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{269:function(t,e,n){var content=n(340);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("01ce21e5",content,!0,{sourceMap:!1})},339:function(t,e,n){"use strict";var r=n(269);n.n(r).a},340:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,".wzlOrder{background-color:rgba(0,0,0,.5);width:100%;height:100%;position:fixed;top:0;left:0;display:block;padding:12% 30%}.add1_content{width:532px;float:left;background:#fff}.closeMe{height:40px;line-height:40px;width:100%;text-align:right;background:#ddd;cursor:pointer}.closeMe a{margin-right:20px}.imgbox{width:100%;float:left;margin:20px 0}.order_content,.order_content h3{float:left;width:100%;text-align:center}.order_content h3{line-height:40px;height:40px;font-weight:700;font-size:24px}.textbox{float:left;margin-left:100px;color:#2577e3}.textbox p{text-align:left}",""])},410:function(t,e,n){"use strict";n.r(e);n(65);var r=n(10),o={name:"Add",props:{isShowOrder:{type:Boolean,default:!1},dataInfo:{type:[Array,Object],default:function(){}},orderTitle:{type:String,default:function(){}}},head:{link:[{rel:"stylesheet",href:"/layer3/css/layui.css"}],script:[{src:"/layer/layer.js"},{src:"/js/AFLC_API.js"}]},data:function(){return{dialogKey:0,Title:""}},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),computed:{isShow:function(){return this.isShowOrder}},watch:{isShowOrder:{handler:function(t,e){t&&(this.Title=this.orderTitle)},deep:!0}},mounted:function(){},methods:{closeMe:function(){this.$emit("update:isShowOrder",!1)}}},c=(n(339),n(0)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"wzlOrder"},[n("div",{key:t.dialogKey,staticClass:"add1_content"},[n("div",{staticClass:"closeMe",on:{click:function(e){return t.closeMe()}}},[n("a",[t._v("关闭")])]),t._v(" "),n("div",{staticClass:"order_content"},[n("h3",[t._v(t._s(t.Title))]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"imgbox"},[e("img",{attrs:{src:"/images/28fast_download.png",width:"200",height:"200"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"textbox"},[n("p",{staticStyle:{"text-align":"center"}},[t._v("扫码获得多权益：")]),t._v(" "),n("p",[t._v("1.查看平台所有货源及联系方式，立即抢单达成交易")]),t._v(" "),n("p",[t._v("2.订阅货源，第一时间获得系统消息通知，快人一步")]),t._v(" "),n("p",[t._v("3.立即送2800元运费奖励，立马到账")]),t._v(" "),n("p",[t._v("4.便捷查询我的运力撮合情况")]),t._v(" "),n("p",[t._v("......")])])}],!1,null,null,null);e.default=component.exports}}]);