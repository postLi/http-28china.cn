(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{654:function(t,e,m){"use strict";m.r(e);m(65);var _=m(10),r=(m(40),{components:{},layout:"member",computed:{plen:function(){return this.$store.state.member.company.productServiceCodeList.length},olen:function(){return this.$store.state.member.company.otherServiceCodeList.length},mid:function(){return this.$store.state.member.id},company:function(){return this.$store.state.member.company}},mounted:function(){var t=this;seajs.use(["/js/city-picker.js"],function(){seajs.use(["/js/gaodemap2.js","/member/js/banner.js","/js/collection.js"],function(){for(var e=t.company.productServiceCodeList,m=e.length,_=t.company.otherServiceCodeList,r=t.mid,i=1;i<10;i++)e&&-1!=e.indexOf("AF0270"+i)&&($(".main1_left .item"+i).css("display","block"),$("#cp0"+i).css("display","block")),_&&i<9&&-1!=_.indexOf("AF0250"+i)&&$(".main1_right .item"+i).css("display","block");9==m&&$(".main1_left .item9").css("display","none"),$("body").click(function(t){var e=$(".bill-search ");e.is(t.target)||0!==e.has(t.target).length||$(".bill-search").removeClass("show")}),$("#txtbill").mousedown(function(){$(".bill-search").addClass("show")}),$("#btn_onlineTracking").click(function(){console.log("$('#txtbill').val()",$("#txtbill").val());var t=$("#txtbill").val();t&&(location.href=r+"-chajian?num="+t),t||alert("请先输入运单号查询！")}),$(".news_item").length<=2&&$(".news_item0").css("display","block"),$("#search_wlLine").click(function(){var t=[],e=[];$("#wlLineFrom").parent("div").find(".select-item").each(function(i,e){t.push($(this).text())});var m=t[0],_=t[1],n=t[2];$("#wlLineTo").parent("div").find(".select-item").each(function(i,t){e.push($(this).text())});var c=e[0],l=e[1],v=e[2];m||(m=""),_||(_=""),n||(n=""),c||(c=""),l||(l=""),v||(v=""),m=encodeURI(m),_=encodeURI(_),n=encodeURI(n),c=encodeURI(c),l=encodeURI(l),v=encodeURI(v),location.href=r+"-line?startp="+m+"&startc="+_+"&starta="+n+"&endp="+c+"&endc="+l+"&enda="+v}),$("#search_wangdian").click(function(){var t=[];$("#wangdian").parent("div").find(".select-item").each(function(i,e){t.push($(this).text())});var e=encodeURI(t[0]||""),m=encodeURI(t[1]||""),_=encodeURI(t[2]||"");location.href=r+"-wangdian?startp="+e+"&startc="+m+"&starta="+_})})})},methods:{findPrice:function(t,e){var m=0;return t.length?(t.forEach(function(t){t.type===e&&0===t.startVolume&&(m=t.discountPrice||t.primeryPrice)}),m):0}},fetch:function(){var t=Object(_.a)(regeneratorRuntime.mark(function t(e){var m,_,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m=e.store,_=e.params,e.$axios,r=e.error,m.commit("member/setId",_.id),t.next=4,m.dispatch("member/GETCOMPANYINFO",_.id).catch(function(t){"network"===t.type?r({statusCode:500,message:t.msg}):r({statusCode:404,message:t.msg})});case 4:return t.next=6,m.dispatch("member/GETCOMPANYPOINTINFO",{companyId:_.id,pageSize:8,currentPage:1});case 6:return t.next=8,m.dispatch("member/GETCOMPANYLINEINFO",{publishId:_.id,pageSize:4,currentPage:1});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}),n=m(0),component=Object(n.a)(r,function(){var t=this,e=t.$createElement,m=t._self._c||e;return m("div",[m("div",{staticClass:"index-banner",attrs:{id:"content"}},[m("div",{staticClass:"banner_text"},[m("span",[m("em",{attrs:{id:"nr_name"}},[t._v(t._s(t.company.contactsName))]),t._v(" \n        "),m("em",{attrs:{id:"nr_tel"}},[t._v(t._s(t.company.mobile))])])]),t._v(" "),t._m(0),t._v(" "),m("div",{staticClass:"content-main index-main"},[t._m(1),t._v(" "),m("div",{staticClass:"shortcut-menu"},[m("a",{staticClass:"menu-item js-express-ship item-1",attrs:{id:"btn_onlineShipping",href:t.mid+"-wangdian",target:"_blank"}},[t._m(2),t._v(" "),m("span",[t._v("网点分布")])]),t._v(" "),m("a",{staticClass:"menu-item js-express-website item-2",attrs:{id:"btn_siteQuery",href:t.mid+"-line",target:"_blank"}},[t._m(3),t._v(" "),m("span",[t._v("物流专线")])]),t._v(" "),m("a",{staticClass:"menu-item js-express-price item-3 need_companyId",attrs:{id:"btn_offerTime",href:t.mid+"-order?uid="+t.mid+"&publishId="+t.mid,target:"_blank"}},[t._m(4),t._v(" "),m("span",[t._v("在线下单")])]),t._v(" "),m("a",{staticClass:"menu-item js-express-complain item-4",attrs:{id:"qq",href:"http://wpa.qq.com/msgrd?v=3&uin="+t.company.qq+"&site=qq&menu=yes",target:"_blank"}},[t._m(5),t._v(" "),m("span",[t._v("在线客服")])])])])]),t._v(" "),m("div",{attrs:{id:"main"}},[m("div",{staticClass:"h50"}),t._v(" "),m("div",{staticClass:"main1"},[m("div",{staticClass:"main1_left main1_box fl"},[t._m(6),t._v(" "),t.plen>=5||t.plen<1?m("div",{staticClass:"main1_nr cp_5_8"},[t._m(7)]):t._e(),t._v(" "),1===t.plen?m("div",{staticClass:"main1_nr cp_1"},[t._m(8)]):t._e(),t._v(" "),2===t.plen?m("div",{staticClass:"main1_nr cp_2"},[t._m(9)]):t._e(),t._v(" "),3===t.plen?m("div",{staticClass:"main1_nr cp_3"},[t._m(10)]):t._e(),t._v(" "),4===t.plen?m("div",{staticClass:"main1_nr cp_4"},[t._m(11)]):t._e()]),t._v(" "),m("div",{staticClass:"main1_right main1_box fl"},[t._m(12),t._v(" "),t.olen>=5||t.olen<1?m("div",{staticClass:"main1_nr fw_5_8"},[t._m(13)]):t._e(),t._v(" "),1===t.olen?m("div",{staticClass:"main1_nr fw_1"},[t._m(14)]):t._e(),t._v(" "),2===t.olen?m("div",{staticClass:"main1_nr fw_2"},[t._m(15)]):t._e(),t._v(" "),3===t.olen?m("div",{staticClass:"main1_nr fw_3"},[t._m(16)]):t._e(),t._v(" "),4===t.olen?m("div",{staticClass:"main1_nr fw_4"},[t._m(17)]):t._e()])]),t._v(" "),m("div",{staticClass:"main2",attrs:{id:"js001"}},[m("div",{staticClass:"main2_bt"},[m("div",{staticClass:"main2_bt1"},[t._m(18),t._v(" "),t._m(19),t._v(" "),m("div",{staticClass:"main2_bt1_3"},[m("a",{attrs:{target:"_blank",href:t.mid+"-line"}},[m("span",[t._v("更多>>")])])])]),t._v(" "),t._m(20)]),t._v(" "),t._l(t.$store.state.member.lineList,function(e,_){return m("div",{key:_,staticClass:"zx_item"},[m("ul",[m("li",{staticClass:"zx_item01"},[m("em",{attrs:{id:"nr001"}},[t._v(t._s(e.startCity||"")+t._s(e.startArea||""))]),t._v(" → \n            "),m("em",{attrs:{id:"nr002"}},[t._v(t._s(e.endCity||"")+t._s(e.endArea||""))])]),t._v(" "),m("li",{staticClass:"zx_item02"},[m("p",[m("font",[t._v("重货：\n                "),m("i",{attrs:{id:"nr003"}},[t._v(t._s(t.findPrice(e.rangePrices,"1")))]),t._v("元/公斤\n              ")]),t._v(" "),m("span",[t._v("时效：\n                "),m("em",{attrs:{id:"nr004"}},[t._v(t._s(e.transportAging)+t._s(e.transportAgingUnit))])])],1),t._v(" "),m("p",[m("font",[t._v("轻货：\n                "),m("i",{attrs:{id:"nr005"}},[t._v(t._s(t.findPrice(e.rangePrices,"0")))]),t._v("元/立方\n              ")]),t._v(" "),m("span",[t._v("最低一票：\n                "),m("em",{attrs:{id:"nr006"}},[t._v(t._s(e.lowerPrice||"面议"))])])],1)]),t._v(" "),t._m(21,!0),t._v(" "),m("li",{staticClass:"zx_item04"},[m("p",[m("a",{attrs:{href:"javacript:void(0)"}},[m("em",{attrs:{id:"nr0010"}},[t._v(t._s(e.browseNumber))]),t._v("人询价\n              ")])]),t._v(" "),m("p",[m("a",{attrs:{href:"javacript:void(0)"}},[m("em",{attrs:{id:"nr0011"}},[t._v(t._s(e.assessNumber))]),t._v("条评价\n              ")])])]),t._v(" "),m("li",{staticClass:"zx_item05"},[m("a",{attrs:{id:"nr0007",href:t.mid+"-order?id="+e.id+"&publishId="+e.companyId,target:"_blank"}},[m("input",{staticClass:"input1",attrs:{readonly:"",value:"下单"}})]),t._v(" "),m("a",{attrs:{id:"nr0012",href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.companyId,target:"_blank"}},[m("input",{staticClass:"input2",attrs:{readonly:"",value:"查看"}})])])])])})],2),t._v(" "),m("div",{staticClass:"main3",attrs:{id:"js002"}},[m("div",{staticClass:"main3_bt1"},[t._m(22),t._v(" "),t._m(23),t._v(" "),m("div",{staticClass:"main3_bt1_3"},[m("a",{attrs:{target:"_blank",href:t.mid+"-wangdian"}},[m("span",[t._v("更多>>")])])])]),t._v(" "),t._l(t.$store.state.member.pointList,function(e,_){return m("div",{key:_,staticClass:"wd_item"},[m("p",{attrs:{id:"nr011"}},[t._v(t._s(e.pointName))]),t._v(" "),m("p",[m("img",{attrs:{src:"/member/images/wd_lxr.png"}}),t._v(" "),m("em",{attrs:{id:"nr012"}},[t._v(t._s(e.name))]),t._v(" "),m("em",{attrs:{id:"nr013"}},[t._v(t._s(e.mobile))])]),t._v(" "),m("p",[m("img",{attrs:{src:"/member/images/wd_dw.png"}}),t._v(" "),m("em",{attrs:{id:"nr014"}},[t._v(t._s(e.belongCityName))])])])})],2),t._v(" "),m("div",{staticClass:"main4"},[m("div",{staticClass:"main4_left"},[m("div",{staticClass:"main4_bt"},[m("i"),t._v(" "),m("span",[t._v("公司简介")]),t._v(" "),m("em",[m("a",{attrs:{target:"_blank",href:t.mid+"-jianjie"}},[t._v("更多>>")])])]),t._v(" "),m("div",{staticClass:"main4_nr",attrs:{id:"nr082"}},[t._v(t._s(t.company.companyDes?t.company.companyDes.substring(0,470)+"...":"暂无内容"))])]),t._v(" "),m("div",{staticClass:"main4_right"},[m("div",{staticClass:"main4_bt",staticStyle:{"margin-left":"0px"}},[m("i"),t._v(" "),m("span",[t._v("公司动态")]),t._v(" "),m("em",[m("a",{attrs:{target:"_blank",href:t.mid+"-news"}},[t._v("更多>>")])])]),t._v(" "),m("div",{staticClass:"news_item news_item0"},[m("a",{attrs:{href:t.mid+"-jianjie",target:"_blank"}},[m("img",{attrs:{src:"/member/images/news/1.jpg"}}),t._v(" "),m("span",[t._v(t._s(t.company.companyName||"本司")+"真诚期待与您的合作！")])])]),t._v(" "),m("div",{staticClass:"news_item news_item0"},[m("a",{attrs:{href:t.mid+"-news",target:"_blank"}},[m("img",{attrs:{src:"/member/images/news/2.jpg"}}),t._v(" "),m("span",[t._v(t._s(t.company.companyName||"本司")+"竭诚为您服务！")])])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("div",{staticClass:"banner-num"},[e("span",{staticClass:"dot cur"},[this._v("1")]),this._v(" "),e("span",{staticClass:"dot"},[this._v("2")]),this._v(" "),e("span",{staticClass:"dot"},[this._v("3")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bill-search"},[e("h2",{staticClass:"bill-title"},[e("img",{attrs:{src:"/member/images/001search.png"}}),this._v(" "),e("span",[this._v("运单查询")])]),this._v(" "),e("div",{staticClass:"search_txt",attrs:{id:"tab_onlineShipping"}},[e("textarea",{staticClass:"query_txt",attrs:{id:"txtbill",type:"text",maxlength:"60",placeholder:"最多输入10个单号（多个用；隔开）"}})]),this._v(" "),e("input",{staticClass:"search_btn",attrs:{id:"btn_onlineTracking",type:"button",value:"查询"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu-icon"},[e("img",{attrs:{src:"/member/images/002wangdian.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu-icon"},[e("img",{attrs:{src:"/member/images/003wuliu.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu-icon"},[e("img",{attrs:{src:"/member/images/004xiadan.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu-icon"},[e("img",{attrs:{src:"/member/images/005kf.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main1_bt"},[e("i"),this._v(" "),e("span",[this._v("产品与服务")])])},function(){var t=this,e=t.$createElement,m=t._self._c||e;return m("ul",[m("li",{staticClass:"item1"},[m("img",{attrs:{src:"/member/images/index/cp_01.jpg"}})]),t._v(" "),m("li",{staticClass:"item2"},[m("img",{attrs:{src:"/member/images/index/cp_02.jpg"}})]),t._v(" "),m("li",{staticClass:"item3"},[m("img",{attrs:{src:"/member/images/index/cp_03.jpg"}})]),t._v(" "),m("li",{staticClass:"item4"},[m("img",{attrs:{src:"/member/images/index/cp_04.jpg"}})]),t._v(" "),m("li",{staticClass:"item5"},[m("img",{attrs:{src:"/member/images/index/cp_05.jpg"}})]),t._v(" "),m("li",{staticClass:"item6"},[m("img",{attrs:{src:"/member/images/index/cp_06.jpg"}})]),t._v(" "),m("li",{staticClass:"item7"},[m("img",{attrs:{src:"/member/images/index/cp_07.jpg"}})]),t._v(" "),m("li",{staticClass:"item8"},[m("img",{attrs:{src:"/member/images/index/cp_08.jpg"}})]),t._v(" "),m("li",{staticClass:"item9"},[m("img",{attrs:{src:"/member/images/index/cp_09.jpg"}})])])},function(){var t=this,e=t.$createElement,m=t._self._c||e;return m("ul",[m("li",{staticClass:"item1"},[m("img",{attrs:{src:"/member/images/index/cp_1_01.jpg"}}),t._v(" "),m("em",[t._v("整车运输")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item2"},[m("img",{attrs:{src:"/member/images/index/cp_1_02.jpg"}}),t._v(" "),m("em",[t._v("零担运输")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item3"},[m("img",{attrs:{src:"/member/images/index/cp_1_03.jpg"}}),t._v(" "),m("em",[t._v("专线运输")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item4"},[m("img",{attrs:{src:"/member/images/index/cp_1_04.jpg"}}),t._v(" "),m("em",[t._v("特大货物运输")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item5"},[m("img",{attrs:{src:"/member/images/index/cp_1_05.jpg"}}),t._v(" "),m("em",[t._v("大件运输")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item6"},[m("img",{attrs:{src:"/member/images/index/cp_1_06.jpg"}}),t._v(" "),m("em",[t._v("集装箱运输")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item7"},[m("img",{attrs:{src:"/member/images/index/cp_1_07.jpg"}}),t._v(" "),m("em",[t._v("冷藏运输")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item8"},[m("img",{attrs:{src:"/member/images/index/cp_1_08.jpg"}}),t._v(" "),m("em",[t._v("危险品运输")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item9"},[m("img",{attrs:{src:"/member/images/index/cp_1_09.jpg"}}),t._v(" "),m("em",[t._v("仓储")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])])])},function(){var t=this,e=t.$createElement,m=t._self._c||e;return m("ul",[m("li",{staticClass:"item1"},[m("img",{attrs:{src:"/member/images/index/cp_2_01.jpg"}}),t._v(" "),m("em",[t._v("整车运输")])]),t._v(" "),m("li",{staticClass:"item2"},[m("img",{attrs:{src:"/member/images/index/cp_2_02.jpg"}}),t._v(" "),m("em",[t._v("零担运输")])]),t._v(" "),m("li",{staticClass:"item3"},[m("img",{attrs:{src:"/member/images/index/cp_2_03.jpg"}}),t._v(" "),m("em",[t._v("专线运输")])]),t._v(" "),m("li",{staticClass:"item4"},[m("img",{attrs:{src:"/member/images/index/cp_2_04.jpg"}}),t._v(" "),m("em",[t._v("特大货物运输")])]),t._v(" "),m("li",{staticClass:"item5"},[m("img",{attrs:{src:"/member/images/index/cp_2_05.jpg"}}),t._v(" "),m("em",[t._v("大件运输")])]),t._v(" "),m("li",{staticClass:"item6"},[m("img",{attrs:{src:"/member/images/index/cp_2_06.jpg"}}),t._v(" "),m("em",[t._v("集装箱运输")])]),t._v(" "),m("li",{staticClass:"item7"},[m("img",{attrs:{src:"/member/images/index/cp_2_07.jpg"}}),t._v(" "),m("em",[t._v("冷藏运输")])]),t._v(" "),m("li",{staticClass:"item8"},[m("img",{attrs:{src:"/member/images/index/cp_2_08.jpg"}}),t._v(" "),m("em",[t._v("危险品运输")])]),t._v(" "),m("li",{staticClass:"item9"},[m("img",{attrs:{src:"/member/images/index/cp_2_09.jpg"}}),t._v(" "),m("em",[t._v("仓储")])])])},function(){var t=this,e=t.$createElement,m=t._self._c||e;return m("ul",[m("li",{staticClass:"item1"},[m("img",{attrs:{src:"/member/images/index/cp_3_01.jpg"}}),t._v(" "),m("em",[t._v("整车运输")])]),t._v(" "),m("li",{staticClass:"item2"},[m("img",{attrs:{src:"/member/images/index/cp_3_02.jpg"}}),t._v(" "),m("em",[t._v("零担运输")])]),t._v(" "),m("li",{staticClass:"item3"},[m("img",{attrs:{src:"/member/images/index/cp_3_03.jpg"}}),t._v(" "),m("em",[t._v("专线运输")])]),t._v(" "),m("li",{staticClass:"item4"},[m("img",{attrs:{src:"/member/images/index/cp_3_04.jpg"}}),t._v(" "),m("em",[t._v("特大货物运输")])]),t._v(" "),m("li",{staticClass:"item5"},[m("img",{attrs:{src:"/member/images/index/cp_3_05.jpg"}}),t._v(" "),m("em",[t._v("大件运输")])]),t._v(" "),m("li",{staticClass:"item6"},[m("img",{attrs:{src:"/member/images/index/cp_3_06.jpg"}}),t._v(" "),m("em",[t._v("集装箱运输")])]),t._v(" "),m("li",{staticClass:"item7"},[m("img",{attrs:{src:"/member/images/index/cp_3_07.jpg"}}),t._v(" "),m("em",[t._v("冷藏运输")])]),t._v(" "),m("li",{staticClass:"item8"},[m("img",{attrs:{src:"/member/images/index/cp_3_08.jpg"}}),t._v(" "),m("em",[t._v("危险品运输")])]),t._v(" "),m("li",{staticClass:"item9"},[m("img",{attrs:{src:"/member/images/index/cp_3_09.jpg"}}),t._v(" "),m("em",[t._v("仓储")])])])},function(){var t=this,e=t.$createElement,m=t._self._c||e;return m("ul",[m("li",{staticClass:"item1"},[m("img",{attrs:{src:"/member/images/index/cp_4_01.jpg"}})]),t._v(" "),m("li",{staticClass:"item2"},[m("img",{attrs:{src:"/member/images/index/cp_4_02.jpg"}})]),t._v(" "),m("li",{staticClass:"item3"},[m("img",{attrs:{src:"/member/images/index/cp_4_03.jpg"}})]),t._v(" "),m("li",{staticClass:"item4"},[m("img",{attrs:{src:"/member/images/index/cp_4_04.jpg"}})]),t._v(" "),m("li",{staticClass:"item5"},[m("img",{attrs:{src:"/member/images/index/cp_4_05.jpg"}})]),t._v(" "),m("li",{staticClass:"item6"},[m("img",{attrs:{src:"/member/images/index/cp_4_06.jpg"}})]),t._v(" "),m("li",{staticClass:"item7"},[m("img",{attrs:{src:"/member/images/index/cp_4_07.jpg"}})]),t._v(" "),m("li",{staticClass:"item8"},[m("img",{attrs:{src:"/member/images/index/cp_4_08.jpg"}})]),t._v(" "),m("li",{staticClass:"item9"},[m("img",{attrs:{src:"/member/images/index/cp_4_09.jpg"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main1_bt"},[e("i"),this._v(" "),e("span",[this._v("增值服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",{staticClass:"item1"},[e("img",{attrs:{src:"/member/images/index/fw_01.jpg"}})]),this._v(" "),e("li",{staticClass:"item2"},[e("img",{attrs:{src:"/member/images/index/fw_02.jpg"}})]),this._v(" "),e("li",{staticClass:"item3"},[e("img",{attrs:{src:"/member/images/index/fw_03.jpg"}})]),this._v(" "),e("li",{staticClass:"item4"},[e("img",{attrs:{src:"/member/images/index/fw_04.jpg"}})]),this._v(" "),e("li",{staticClass:"item5"},[e("img",{attrs:{src:"/member/images/index/fw_05.jpg"}})]),this._v(" "),e("li",{staticClass:"item6"},[e("img",{attrs:{src:"/member/images/index/fw_06.jpg"}})]),this._v(" "),e("li",{staticClass:"item7"},[e("img",{attrs:{src:"/member/images/index/fw_07.jpg"}})]),this._v(" "),e("li",{staticClass:"item8"},[e("img",{attrs:{src:"/member/images/index/fw_08.jpg"}})])])},function(){var t=this,e=t.$createElement,m=t._self._c||e;return m("ul",[m("li",{staticClass:"item1"},[m("img",{attrs:{src:"/member/images/index/fw_1_01.jpg"}}),t._v(" "),m("em",[t._v("送货上楼")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item2"},[m("img",{attrs:{src:"/member/images/index/fw_1_02.jpg"}}),t._v(" "),m("em",[t._v("保价运输")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item3"},[m("img",{attrs:{src:"/member/images/index/fw_1_03.jpg"}}),t._v(" "),m("em",[t._v("运费到付")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item4"},[m("img",{attrs:{src:"/member/images/index/fw_1_04.jpg"}}),t._v(" "),m("em",[t._v("代收货款")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item5"},[m("img",{attrs:{src:"/member/images/index/fw_1_05.jpg"}}),t._v(" "),m("em",[t._v("开发票")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item6"},[m("img",{attrs:{src:"/member/images/index/fw_1_06.jpg"}}),t._v(" "),m("em",[t._v("上门提货")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item7"},[m("img",{attrs:{src:"/member/images/index/fw_1_07.jpg"}}),t._v(" "),m("em",[t._v("签单回收")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])]),t._v(" "),m("li",{staticClass:"item8"},[m("img",{attrs:{src:"/member/images/index/fw_1_08.jpg"}}),t._v(" "),m("em",[t._v("时效保障")]),t._v(" "),m("i",[t._v("据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！")])])])},function(){var t=this,e=t.$createElement,m=t._self._c||e;return m("ul",[m("li",{staticClass:"item1"},[m("img",{attrs:{src:"/member/images/index/fw_2_01.jpg"}}),t._v(" "),m("em",[t._v("送货上楼")])]),t._v(" "),m("li",{staticClass:"item2"},[m("img",{attrs:{src:"/member/images/index/fw_2_02.jpg"}}),t._v(" "),m("em",[t._v("保价运输")])]),t._v(" "),m("li",{staticClass:"item3"},[m("img",{attrs:{src:"/member/images/index/fw_2_03.jpg"}}),t._v(" "),m("em",[t._v("运费到付")])]),t._v(" "),m("li",{staticClass:"item4"},[m("img",{attrs:{src:"/member/images/index/fw_2_04.jpg"}}),t._v(" "),m("em",[t._v("代收货款")])]),t._v(" "),m("li",{staticClass:"item5"},[m("img",{attrs:{src:"/member/images/index/fw_2_05.jpg"}}),t._v(" "),m("em",[t._v("开发票")])]),t._v(" "),m("li",{staticClass:"item6"},[m("img",{attrs:{src:"/member/images/index/fw_2_06.jpg"}}),t._v(" "),m("em",[t._v("上门提货")])]),t._v(" "),m("li",{staticClass:"item7"},[m("img",{attrs:{src:"/member/images/index/fw_2_07.jpg"}}),t._v(" "),m("em",[t._v("签单回收")])]),t._v(" "),m("li",{staticClass:"item8"},[m("img",{attrs:{src:"/member/images/index/fw_2_08.jpg"}}),t._v(" "),m("em",[t._v("时效保障")])])])},function(){var t=this,e=t.$createElement,m=t._self._c||e;return m("ul",[m("li",{staticClass:"item1"},[m("img",{attrs:{src:"/member/images/index/fw_3_01.jpg"}}),t._v(" "),m("em",[t._v("送货上楼")])]),t._v(" "),m("li",{staticClass:"item2"},[m("img",{attrs:{src:"/member/images/index/fw_3_02.jpg"}}),t._v(" "),m("em",[t._v("保价运输")])]),t._v(" "),m("li",{staticClass:"item3"},[m("img",{attrs:{src:"/member/images/index/fw_3_03.jpg"}}),t._v(" "),m("em",[t._v("运费到付")])]),t._v(" "),m("li",{staticClass:"item4"},[m("img",{attrs:{src:"/member/images/index/fw_3_04.jpg"}}),t._v(" "),m("em",[t._v("代收货款")])]),t._v(" "),m("li",{staticClass:"item5"},[m("img",{attrs:{src:"/member/images/index/fw_3_05.jpg"}}),t._v(" "),m("em",[t._v("开发票")])]),t._v(" "),m("li",{staticClass:"item6"},[m("img",{attrs:{src:"/member/images/index/fw_3_06.jpg"}}),t._v(" "),m("em",[t._v("上门提货")])]),t._v(" "),m("li",{staticClass:"item7"},[m("img",{attrs:{src:"/member/images/index/fw_3_07.jpg"}}),t._v(" "),m("em",[t._v("签单回收")])]),t._v(" "),m("li",{staticClass:"item8"},[m("img",{attrs:{src:"/member/images/index/fw_3_08.jpg"}}),t._v(" "),m("em",[t._v("时效保障")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",{staticClass:"item1"},[e("img",{attrs:{src:"/member/images/index/fw_4_01.jpg"}})]),this._v(" "),e("li",{staticClass:"item2"},[e("img",{attrs:{src:"/member/images/index/fw_4_02.jpg"}})]),this._v(" "),e("li",{staticClass:"item3"},[e("img",{attrs:{src:"/member/images/index/fw_4_03.jpg"}})]),this._v(" "),e("li",{staticClass:"item4"},[e("img",{attrs:{src:"/member/images/index/fw_4_04.jpg"}})]),this._v(" "),e("li",{staticClass:"item5"},[e("img",{attrs:{src:"/member/images/index/fw_4_05.jpg"}})]),this._v(" "),e("li",{staticClass:"item6"},[e("img",{attrs:{src:"/member/images/index/fw_4_06.jpg"}})]),this._v(" "),e("li",{staticClass:"item7"},[e("img",{attrs:{src:"/member/images/index/fw_4_07.jpg"}})]),this._v(" "),e("li",{staticClass:"item8"},[e("img",{attrs:{src:"/member/images/index/fw_4_08.jpg"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main2_bt1_1"},[e("i"),this._v(" "),e("span",[this._v("物流专线")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main2_bt1_2"},[e("div",{staticClass:"search_input"},[e("div",{staticClass:"input_div"},[e("input",{staticClass:"search_input1",attrs:{id:"wlLineFrom","data-toggle":"city-picker","data-level":"district",placeholder:"出发地"}})]),e("span",[this._v("→")]),e("div",{staticClass:"input_div"},[e("input",{staticClass:"search_input2",attrs:{id:"wlLineTo","data-toggle":"city-picker","data-level":"district",placeholder:"到达地"}})])]),this._v(" "),e("div",{staticClass:"search_button",attrs:{id:"search_wlLine"}},[e("input",{staticClass:"search_search",attrs:{readonly:"",value:"搜索"}})])])},function(){var t=this,e=t.$createElement,m=t._self._c||e;return m("div",{staticClass:"main2_bt2"},[m("ul",[m("li",{staticClass:"bt_01"},[t._v("出发地  → 到达地")]),t._v(" "),m("li",{staticClass:"bt_02"},[t._v("专线信息")]),t._v(" "),m("li",{staticClass:"bt_03"},[t._v("会员类型")]),t._v(" "),m("li",{staticClass:"bt_04"},[t._v("人气")]),t._v(" "),m("li",{staticClass:"bt_05"},[t._v("操作")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"zx_item03"},[e("p",{staticClass:"p1"},[e("img",{attrs:{id:"nr007",src:"/images/list_wlzx/10shiming.png"}})]),this._v(" "),e("p",{staticClass:"p2"},[e("img",{attrs:{id:"nr008",src:"/images/list_wlzx/11xinyong.png"}})]),this._v(" "),e("p",{staticClass:"p3"},[e("img",{attrs:{id:"nr009",src:"/images/list_wlzx/12danbao.png"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main3_bt1_1"},[e("i"),this._v(" "),e("span",[this._v("网点分布")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main3_bt1_2"},[e("div",{staticClass:"search_input"},[e("input",{staticClass:"search_input3",attrs:{id:"wangdian","data-toggle":"city-picker","data-level":"district",placeholder:"请选择省-市"}})]),this._v(" "),e("div",{staticClass:"search_button"},[e("input",{staticClass:"search_search",attrs:{id:"search_wangdian",readonly:"",value:"搜索"}})])])}],!1,null,null,null);e.default=component.exports}}]);