(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{259:function(t,e,n){var content=n(367);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("724616e0",content,!0,{sourceMap:!1})},366:function(t,e,n){"use strict";var c=n(259);n.n(c).a},367:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".cy .order-content .content-list li h3,.cy .order-content .content-list li p{padding-left:5px}",""])},569:function(t,e,n){"use strict";n.r(e);var c={name:"CySuccess",head:{link:[{rel:"stylesheet",href:"/css/create/cySuccess.css"}]},data:()=>({}),mounted(){var t=this.$route.query.text,e=this.$route.query.id,n=this.$route.query.publishId,c=this.$route.query.shipperId,r=this.$route.query.driverId,o="/zhuanxian/detail?id="+e+"&publishId="+n,l="/cheyuan/detail?id="+r,d="/huoyuan/detail?id="+e+"&shipperId="+c;$(".btn_bottom").append('<div class="order-submit-btn" id="continue">继续发布'+t+'</div><div class="order-submit-btn" id="check">查看'+t+'详情</div><div class="order-submit-btn" id="management">管理我的'+t+"</div>"),$("#continue").click(function(){window.location.href="车源"===t?"/create/cheyuan":"货源"===t?"/create/huoyuan":"/create/line"}),$("#check").click(function(){"车源"===t?window.open(l):"货源"===t?window.open(d):window.open(o)}),$("#management").click(function(){0!==location.href.indexOf("192.168.1.")&&(window.location.href="车源"===t?"http://192.168.1.157:9526/carinfo/manage":"货源"===t?"http://192.168.1.157:9526/carinfo/manage":"http://192.168.1.157:9526/logistics/manage")})}},r=(n(366),n(1)),component=Object(r.a)(c,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cy"},[n("div",{staticClass:"main"},[n("div",{staticClass:"right main_nr"},[n("div",{staticClass:"nr order-create-main"},[n("div",{staticClass:"order-line-info order-input-tab"},[n("div",{staticClass:"order-success"},[n("img",{attrs:{src:"/images/wzlImg/dagou (1).png",id:"gou"}}),n("h3",[t._v("恭喜发布成功！")])]),t._v(" "),n("div",{staticClass:"order-content"},[n("h4",[n("img",{attrs:{src:"/images/wzlImg/dengpao.png"}}),t._v("物流课堂小秘笈")]),t._v(" "),n("ul",{staticClass:"content-list"},[n("li",[n("img",{staticClass:"li_imgbox",attrs:{src:"/images/wzlImg/xh1.png"}}),t._v(" "),n("h3",[t._v("更多曝光机会")]),t._v(" "),n("p",[t._v("专线内容完善度越高，展示及推荐的次数越多！")])]),t._v(" "),n("li",[n("img",{staticClass:"li_imgbox",attrs:{src:"/images/wzlImg/xh2.png"}}),t._v(" "),n("h3",[t._v("获取更多商机")]),t._v(" "),n("p",[t._v("准确、完整的填写您的企业信息，有利于获得客户的信任，赢得更多商机！")])]),t._v(" "),n("li",[n("img",{staticClass:"li_imgbox",attrs:{src:"/images/wzlImg/xh3.png"}}),t._v(" "),n("h3",[t._v("更多曝光机会")]),t._v(" "),n("p",[t._v("及时反馈用户留言能够提升客户满意度！")])]),t._v(" "),n("li",[n("img",{staticClass:"li_imgbox",attrs:{src:"/images/wzlImg/xh4.png"}}),t._v(" "),n("h3",[t._v("更多曝光机会")]),t._v(" "),n("p",[t._v("定期发布及更新信息享受线上推广，获得更多的展示，让更多用户找到你！")])])])])]),t._v(" "),n("div",{staticClass:"btn_bottom"})])])])])}],!1,null,null,null);e.default=component.exports}}]);