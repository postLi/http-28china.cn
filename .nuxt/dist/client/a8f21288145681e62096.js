(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{279:function(t,e,n){var content=n(411);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(3).default)("724616e0",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";var c=n(279);n.n(c).a},411:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".cy .order-content .content-list li h3,.cy .order-content .content-list li p{padding-left:5px}",""])},604:function(t,e,n){"use strict";n.r(e);var c={name:"CySuccess",head:{link:[{rel:"stylesheet",href:"/css/create/cySuccess.css"}]},data:()=>({dataset:[{title:"更多曝光机会",contentText:"专线内容完善度越高，展示及推荐的次数越多！",num:1},{title:"获取更多商机",contentText:"准确、完整的填写您的企业信息，有利于获得客户的信任，赢得更多商机！",num:2},{title:"更多曝光机会",contentText:"及时反馈用户留言能够提升客户满意度！",num:3},{title:"更多曝光机会",contentText:"定期发布及更新信息享受线上推广，获得更多的展示，让更多用户找到你！",num:4}]}),mounted(){var t=this.$route.query.text,e=this.$route.query.id,n=this.$route.query.publishId;console.log(this.$route.query.publishId,"this.$route.query.publishId");var c=this.$route.query.shipperId,o=this.$route.query.driverId,r="/zhuanxian/detail?id="+e+"&publishId="+n,l="/cheyuan/detail?id="+o,d="/huoyuan/detail?id="+e+"&shipperId="+c;$(".btn_bottom").append('<div class="order-submit-btn" id="continue">继续发布'+t+'</div><div class="order-submit-btn" id="check">查看'+t+'详情</div><div class="order-submit-btn" id="management">管理我的'+t+"</div>"),$("#continue").click(function(){window.location.href="车源"===t?"/create/cheyuan":"货源"===t?"/create/huoyuan":"/create/line"}),$("#check").click(function(){"车源"===t?window.open(l):"货源"===t?window.open(d):window.open(r)}),$("#management").click(function(){0!==location.href.indexOf("192.168.1.")&&("车源"===t?window.location.href="http://192.168.1.157:9526/carinfo/manage":"货源"===t?window.location.href="http://192.168.1.157:9526/order/manage":"专线"===t&&(window.location.href="http://192.168.1.157:9526/logistics/manage"))})}},o=(n(410),n(0)),component=Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cy"},[n("div",{staticClass:"main"},[n("div",{staticClass:"nr order-create-main"},[n("div",{staticClass:"order-line-info order-input-tab"},[t._m(0),t._v(" "),n("div",{staticClass:"order-content"},[t._m(1),t._v(" "),n("ul",{staticClass:"content-list"},t._l(t.dataset,function(e,c){return n("li",{key:c},[n("img",{staticClass:"li_imgbox",attrs:{src:"/images/wzlImg/xh"+e.num+".png"}}),t._v(" "),n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.contentText))])])}),0)])]),t._v(" "),n("div",{staticClass:"btn_bottom"})])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"order-success"},[e("img",{attrs:{src:"/images/wzlImg/dagou (1).png",id:"gou"}}),e("h3",[this._v("恭喜发布成功！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",[e("img",{attrs:{src:"/images/wzlImg/dengpao.png"}}),this._v("物流课堂小秘笈")])}],!1,null,null,null);e.default=component.exports}}]);