(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{477:function(t,e,r){"use strict";r.r(e);r(15),r(53);var n=r(6),c={name:"Detail",components:{},head:{link:[{rel:"stylesheet",href:"/css/article_huoyuan.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"}],script:[{src:"/js/city-picker.data.js"},{src:"/js/city-picker.js"},{src:"../vendor/layer/layer.js"},{src:"../js/jquery.pagination.min.js"},{src:"../js/WTMap.min.js"},{src:"https://echarts.baidu.com/dist/echarts.min.js"}]},layout:"subLayout",data:function(){return{zxList:[],inTerVar:null,inTerVar1:null,otherInfoList:[],hyDetail:[],pages:0,currentPage:1,gldhList:[{title:"注册28快运会员",subTitle:"免费发布车源货源专线信息，轻松一键搞定",url:"/regisiter",img:"/images/cy/04zc.png"},{title:"快速下单",subTitle:"下单立即响应，甄选优质运力，发货有保障",url:"/",img:"/images/cy/05xd.png"},{title:"发布车源",subTitle:"让客户主动找我，让平台为我撮合",url:"/create/cheyuan",img:"/images/cy/06cy.png"},{title:"发布货源",subTitle:"精准匹配合适物流，方便快捷省钱",url:"/create/huoyuan",img:"/images/cy/07hy.png"},{title:"发布专线",subTitle:"平台智能推荐货源，实施提醒撮合交易",url:"/create/line",img:"/images/cy/08zx.png"}]}},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,c,_,l,v,o,d,h,m,C,y,f,x;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,e.app,n=e.query,t.next=3,r.get("/28-web/lclOrder/detail/"+n.id).catch(function(t){});case 3:return c=t.sent,_={currentPage:1,pageSize:10,startProvince:c.data.data.startProvince,startCity:c.data.data.startCity},l={endArea:c.data.data.endArea,endCity:c.data.data.endCity,endProvince:c.data.data.endProvince,startArea:c.data.data.startArea,startCity:c.data.data.startCity,startProvince:c.data.data.startProvince},t.next=8,r.post("/28-web/shipper/archival?shipperId="+n.shipperId);case 8:return v=t.sent,console.log(v.data.data,"item province:"),t.next=12,r.get("/28-web/lclOrder/newList");case 12:return o=t.sent,t.next=15,r.post("/28-web/lclOrder/list",_).catch(function(t){});case 15:return d=t.sent,t.next=18,r.post("/28-web/lclOrder/shipper/lastList",{shipperId:n.shipperId}).catch(function(t){});case 18:return h=t.sent,t.next=21,r.get("/28-web/shipper/comprehensive?shipperId="+n.shipperId).catch(function(t){});case 21:return m=t.sent,t.next=24,r.get("/28-web/hotSearch/supply/detail/links");case 24:return C=t.sent,t.next=27,r.get("/28-web/logisticsCompany/popularity");case 27:return y=t.sent,t.next=30,r.post("/28-web/lclOrder/detail/related/links",l);case 30:return f=t.sent,x=function(t){switch(t.startProvince){case null:t.startProvince=""}switch(t.startCity){case null:t.startCity=""}switch(t.startArea){case null:t.startArea=""}switch(t.endProvince){case null:t.endProvince=""}switch(t.endCity){case null:t.endCity=""}switch(t.endArea){case null:t.endArea=""}t.carSourceType="",t.targetLinks="","1000"==t.type&&(t.targetLinks="/gongsi/"),"2000"==t.type&&(t.targetLinks="/zhuanxian/list"),"2001"==t.type&&(t.targetLinks="/member/"+t.companyId+"-line"),"3000"!=t.type&&"3003"!=t.type&&"3002"!=t.type||(t.targetLinks="/cheyuan"),"3001"==t.type&&(t.targetLinks="/cheyuan",t.carSourceType="AF01801"),"4000"==t.type&&(t.targetLinks="/huoyuan"),"4001"==t.type&&(t.targetLinks="/member/"+t.companyId+"-huo")},f.data.data.brandOrder.links.forEach(x),f.data.data.interestOrder.links.forEach(x),C.data.data.links.forEach(x),t.abrupt("return",{archival:200===v.data.status?v.data.data:[],hyDetail:200===c.data.status?c.data.data:{},popularity:200===y.data.status?y.data.data:[],huoComprehensive:200===m.data.status?m.data.data:[],newestHuoyuanRe:200===h.data.status?h.data.data.list:[],newList:200===o.data.status?o.data.data:[],zxList:[],huoInfoList:200===d.data.status?d.data.data.list:[],huoLink:200===f.data.status?f.data.data.brandOrder.links:[],huoLabel:200===f.data.status?f.data.data.brandOrder.label:"",interestOrder:200===f.data.status?f.data.data.interestOrder.links:[],interesLabel:200===f.data.status?f.data.data.interestOrder.label:"",hotSearchList:200===C.data.status?C.data.data.links:[]});case 36:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){var t=this;$("#wlLineFrom input").citypicker({}),$("#wlLineTo input").citypicker({});var e=$(".list_new_box").height(),r=$(".zx_sx_new");r.append(r.html());var c=4,_=this.newestHuoyuanRe.length,l=$(".manage_box").height(),v=function(){t.inTerVar=setInterval(function(){r.stop().animate({top:"".concat(c*-l,"px")},2e3,function(){c>_&&(c=4,r.css("top","0px"))}),c+=4},6e3)};l*_>e&&v(),$(".list_new_box").hover(function(){clearInterval(t.inTerVar),t.inTerVar=null},function(){v()});var o=$(".top_left").height(),d=$(".top_left_ul");d.append(d.html());var h=1,m=this.newList.length,C=$(".top_left_ul_li").height();C*m>o&&(t.inTerVar1=setInterval(function(){d.stop().animate({top:"".concat(h*-C,"px")},2e3,function(){h>m&&(h=1,d.css("top","0px"))}),h+=1},6e3)),$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:$("#current1").text(e);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()})},destroyed:function(){clearInterval(this.inTerVar),this.inTerVar=null},methods:{goToCy:function(){window.location.href="/huoyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity=&endProvince=&isLongCar=&startArea=&startCity=".concat(this.hyDetail.startCity,"&startProvince=").concat(this.hyDetail.startProvince)},goToCy1:function(){window.location.href="/huoyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity=&endProvince=&isLongCar=&startArea=&startCity=".concat(this.hyDetail.endCity,"&startProvince=").concat(this.hyDetail.endProvince)},clickImg:function(t){this.showImg=t},findAnother:function(){var t={endArea:this.hyDetail.endArea,endCity:this.hyDetail.endCity,endProvince:this.hyDetail.endProvince,startArea:this.hyDetail.startArea,startCity:this.hyDetail.startCity,startProvince:this.hyDetail.startProvince};this.$axios.post("/28-web/lclOrder/another",t).then(function(t){200===t.data.status&&(console.log(t.data.data.id,"00000000"),window.location.href="/huoyuan/detail?id=".concat(t.data.data.id,"&shipperId=").concat(t.data.data.shipperId))})}}},_=r(1),component=Object(_.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"arc_main"},[r("div",{staticClass:"arc_top1"},[r("div",{staticClass:"arc_top1_1"},[r("span",[t._v(t._s(t.hyDetail.startProvinceCityArea+"\t→"+t.hyDetail.endProvinceCityArea))])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),r("div",{staticClass:"arc_top2"},[t._m(2),t._v(" "),r("div",{staticClass:"arc_top2_2"},t._l(t.zxList,function(e,n){return n<14?r("a",{key:n},[r("span",[t._v(t._s(0===n?"直达"+e.name.substring(0,2):e.name.substring(0,2)))])]):t._e()}),0),t._v(" "),t.zxList.length>14?r("div",{staticClass:"arc_top2_3",staticStyle:{display:"block"},attrs:{onmouseover:"$('.city_box').css('display','block');"}},[t._m(3)]):t._e(),t._v(" "),r("div",{staticClass:"city_box",attrs:{id:"city_box",onmouseover:"$('.city_box').css('display','block');",onmouseout:"$('.city_box').css('display','none');"}},t._l(t.zxList,function(e,n){return n>=14?r("a",{key:n},[r("span",[t._v(t._s(e.name.substring(0,2)))])]):t._e()}),0)]),t._v(" "),r("div",{staticClass:"arc_main1"},[r("div",{staticClass:"arc_left"},[r("div",{staticClass:"arc_left_1"},[r("div",{staticClass:"top_left"},[r("ul",{staticClass:"top_left_ul"},t._l(t.newList,function(e,n){return r("li",{key:n,staticClass:"top_left_ul_li"},[r("span",[t._v("用户"),r("em",{staticStyle:{color:"#2577e3"}},[t._v(t._s(e.creater))])]),t._v(" "),r("span",[r("em",{staticStyle:{color:"#2577e3"}},[t._v(t._s(e.startCity))]),t._v("到")]),t._v(" "),r("span",[r("em",{staticStyle:{color:"#2577e3"}},[t._v(t._s(e.endCity))]),t._v("货源")]),t._v(" "),r("span",[t._v(t._s(e.time)+"3分钟前")])])}),0)]),t._v(" "),r("p",{staticClass:"arc_p1"},[r("span",[t._v(t._s(t.hyDetail.startProvinceCityArea+"\t→"+t.hyDetail.endProvinceCityArea))]),t._v(" "),r("span",{staticClass:"arc_p2"},[r("img",{staticClass:"imgarc_p2",attrs:{src:"/images/list_wlzx/ll_num.png"}}),r("i",[t._v("浏览量："),r("em",[t._v(t._s(t.hyDetail.browseNumber))])])])]),t._v(" "),r("div",{staticClass:"arc_middle1-2"},[t._m(4),r("span",{staticStyle:{"margin-right":"50px"}},[t._v("发布日期："+t._s(t.hyDetail.createTime))]),t._m(5),r("span",[t._v("收藏量："+t._s(t.hyDetail.collectNumber)),r("i",{staticClass:"my_cz_num"})])])]),t._v(" "),r("div",{staticClass:"arc_left_2"},[r("div",{staticClass:"arc_left_2_1"},[t._m(6),t._v(" "),r("div",{staticClass:"arc_left_2_1_2"},[r("table",[r("tr",[r("td",{staticClass:"arc_td1"},[t._v("名称：")]),r("td",{staticClass:"arc_td2"},[r("font",[t._v(t._s(t.hyDetail.goodsName))])],1)]),t._v(" "),r("tr",[r("td",{staticClass:"arc_td1"},[t._v("数量：")]),r("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.goodsNum?t.hyDetail.goodsNum+"件":""))])]),t._v(" "),r("tr",[r("td",{staticClass:"arc_td1"},[t._v("重量：")]),r("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.goodsWeight)+"公斤")])]),t._v(" "),r("tr",[r("td",{staticClass:"arc_td1"},[t._v("体积：")]),r("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.goodsVolume)+"立方米")])]),t._v(" "),r("tr",[r("td",{staticClass:"arc_td1"},[t._v("有效期：")]),r("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.orderClass))])]),t._v(" "),r("tr",[r("td",{staticClass:"arc_td1"},[t._v("其他：")]),r("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.extraName))])]),t._v(" "),r("tr",[r("td",{staticClass:"arc_td1"},[t._v("备注：")]),r("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.remark))])])])])]),t._v(" "),r("div",{staticClass:"arc_left_2_2"},[t._m(7),t._v(" "),t._m(8),t._v(" "),r("div",{staticClass:"arc_left_2_1_2"},[r("table",[r("tr",[r("td",{staticClass:"arc_td1"},[t._v("出发地：")]),r("td",{staticClass:"arc_td2"},[r("font",[t._v(t._s(t.hyDetail.startProvinceCityArea))])],1)]),t._v(" "),r("tr",[r("td",{staticClass:"arc_td1"},[t._v("到达地：")]),r("td",{staticClass:"arc_td2"},[r("font",[t._v(t._s(t.hyDetail.endProvinceCityArea))])],1)]),t._v(" "),r("tr",[r("td",{staticClass:"arc_td1"},[t._v("联系人：")]),r("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.consignor))])]),t._v(" "),r("tr",[r("td",{staticClass:"arc_td1"},[t._v("联系电话：")]),r("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.consignorPhone))])]),t._v(" "),r("tr",[r("td",{staticClass:"arc_td1"},[t._v("装货时间：")]),r("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.createTime))])]),t._v(" "),r("tr",[r("td",{staticClass:"arc_td1"},[t._v("里程：")]),r("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.distance))])]),t._v(" "),r("tr",[r("td",{staticClass:"arc_td1"},[t._v("期望运价：")]),r("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.totalAmount))])])])])]),t._v(" "),r("div",{staticClass:"arc_bottom"},[t._m(9),t._v(" "),r("div",{staticClass:"arc_middle5"},[r("div",{staticClass:"arc_m5_1"},[r("span",[t._v("小贴士：对此货源有意向可点击“抢单”，货主即可看到您的联系信息，提高成交率！")]),t._v(" "),r("div",{staticStyle:{"margin-top":"15px"}},[r("a",{staticClass:"button1",attrs:{href:""}},[t._v("立即下单")]),t._v(" "),t._m(10),t._v(" "),r("span",{staticStyle:{"margin-left":"47px"}},[r("img",{attrs:{src:"/images/cy/14fresh.png"}}),t._v(" "),r("span",{staticClass:"arc_middle5-right",on:{click:function(e){return t.findAnother()}}},[t._v("换一个")])])])])])])])]),t._v(" "),"AF00107"===t.archival.shipperType?r("div",{staticClass:"arc_right"},[r("p",{staticClass:"arc_right01"},[r("img",{attrs:{src:"/images/article_wlzx/04gongsi.png"}}),r("span",[t._v(t._s(t.archival.companyName))])]),t._v(" "),t.archival.credit>=0&&t.archival.credit<=150?r("p",{staticClass:"arc_right02"},[r("i",[t._v("信誉：")]),t._v(" "),t._l(t.hyDetail.starS,function(t,e){return r("img",{key:e,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:"/images/article_wlzx/gold.png"}})})],2):t._e(),t._v(" "),t.archival.isEnable>=151?r("p",{staticClass:"arc_right02"},[r("i",[t._v("信誉：")]),t._v(" "),t._l(t.hyDetail.starB,function(t,e){return r("img",{key:e,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:"/images/article_wlzx/yellowguan.png"}})})],2):t._e(),t._v(" "),r("p",{staticClass:"arc_right03"},[r("span",[t._v("质量")]),r("span",[t._v("时效")]),r("span",[t._v("价格")]),r("br"),t._v(" "),r("font",[t._v(t._s(t.archival.serverQualityScore))]),r("font",[t._v(t._s(t.archival.transportAgingScore))]),r("font",[t._v(t._s(t.archival.serverPriceScore))])],1),t._v(" "),r("p",{staticClass:"arc_right04"},[r("span",{staticClass:"arc_right04_1"},[r("i",[t._v("联系人：")]),r("font",[t._v(t._s(t.archival.contactsName))])],1),t._v(" "),r("span",[r("i",[t._v("手机：")]),r("font",[t._v(t._s(t.archival.mobile))])],1),t._v(" "),r("span",[r("i",[t._v("Q Q：")]),t.archival.qq?r("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin="+t.archival.qq+"&site=qq&menu=yes",target:"_blank"}},[r("input",{attrs:{value:"QQ交谈"}})]):t._e()]),t._v(" "),r("span",[r("i",[t._v("地址：")]),t.archival.consignorAddress?r("font",[t._v(t._s(t.archival.consignorAddress.substring(0,10)))]):t._e()],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),r("p",{staticClass:"arc_right07"},[t.hyDetail.isVip?r("img",{attrs:{src:"/images/article_wlzx/11xinyong.png"}}):t._e(),t._v(" "),"AF0010403"===t.hyDetail.authStatus?r("img",{attrs:{src:"/images/article_wlzx/10shiming.png"}}):t._e(),t._v(" "),"AF0010403"===t.hyDetail.authStatus||t.hyDetail.isVip&&0!==t.hyDetail.isVip?t._e():r("span",[t._v("暂无认证信息")])])]):t._e(),t._v(" "),r("div",{staticClass:"arc_right1"},[r("div",{staticClass:"arc_top_title"},["AF0010101"===t.archival.shipperType?r("h4",[t._v("货主档案")]):t._e(),t._v(" "),r("h4",{attrs:{else:"archival.shipperType === 'AF0010102'"}},[t._v(t._s(t.archival.companyName))])]),t._v(" "),"AF0010101"===t.archival.shipperType?r("div",{staticClass:"arc_top_img"},[r("img",{attrs:{src:"/images/cy/gold.png"}})]):t._e(),t._v(" "),r("div",{staticClass:"arc_middle"},[r("img",{attrs:{src:"/images/cy/09sj.png"}}),t._v(" "),r("p",{staticStyle:{color:"#fa9925"}},[t._v(t._s(t.archival.shipperTypeName))]),t._v(" "),t._m(13),t._v(" "),r("p",[r("img",{attrs:{src:"/images/cy/13hot.png"}}),t._v("活跃度："),r("i",{staticStyle:{color:"#fa9925"}},[t._v(t._s(t.archival.liveness))])])]),t._v(" "),r("ul",{staticClass:"bottom_ul"},[r("li",[t._v("联系人："+t._s(t.archival.contacts))]),t._v(" "),t._m(14),t._v(" "),r("li",[t._v("已加入："+t._s(t.archival.registerDays)+"天")]),t._v(" "),r("li",[t._v("好评数："+t._s(t.archival.evaGoodCount))])])])]),t._v(" "),r("div",{staticClass:"arc_main3"},[r("div",{staticClass:"right"},[t._m(15),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"content-left"},[t._m(16),t._v(" "),r("div",{staticClass:"name"},[t._v(t._s(t.huoComprehensive.shipperTypeName))]),t._v(" "),r("div",{staticClass:"name"},["AF0010403"===t.huoComprehensive.accountStatus?r("img",{attrs:{src:"/images/article_wlzx/10shiming.png"}}):t._e()])]),t._v(" "),r("div",{staticClass:"content-right"},[r("img",{attrs:{src:"/images/cy/gold.png"}}),t._v(" "),r("div",{staticClass:"content-right-row"},[r("img",{staticClass:"img",attrs:{src:"/images/cy/13hot.png"}}),t._v("活跃度："),r("i",[t._v(t._s(t.huoComprehensive.liveness))])]),t._v(" "),r("div",{staticClass:"content-right-row"},[t._v("最近三个月发布货源 "),r("i",[t._v(t._s(t.huoComprehensive.lastThreeMonthSupplyNum))]),t._v(" 次")]),t._v(" "),r("div",{staticClass:"content-right-row"},[t._v("共成交 "),r("i",[t._v(t._s(t.huoComprehensive.orderNumber))]),t._v(" 笔订单，收到好评 "),r("i",[t._v(t._s(t.huoComprehensive.evaGoodCount))]),t._v(" 次")]),t._v(" "),r("div",{staticClass:"content-right-row"},[t._v("大家对他的印象:")]),t._v(" "),t._l(t.huoComprehensive.labels,function(e,n){return r("div",{key:n,staticClass:"content-right-row"},[r("span",[t._v(t._s(e.name)+"（"+t._s(e.count)+"）")])])}),t._v(" "),t._m(17)],2)])]),t._v(" "),r("div",{staticClass:"left"},[t._m(18),t._v(" "),r("div",{staticClass:"list_new_box"},[r("ul",{staticClass:"zx_sx_new"},t._l(t.newestHuoyuanRe,function(e,n){return r("li",{key:n,staticClass:"manage_box"},[r("span",[t._v(t._s(e.startProvinceCityArea))]),t._v(" "),r("span",[t._v(t._s(e.endProvinceCityArea))]),t._v(" "),r("span",[t._v(t._s(e.goodsName))]),t._v(" "),r("span",[r("em",{staticStyle:{color:"#f14747"}},[t._v(t._s(e.goodsWeight))]),t._v("公斤")]),t._v(" "),r("span",[r("em",{staticStyle:{color:"#f14747"}},[t._v(t._s(e.goodsVolume))]),t._v("方")]),t._v(" "),r("span",[t._v(t._s(e.createTime))])])}),0)])])]),t._v(" "),r("div",{staticClass:"arc_main4"},[r("div",{staticClass:"w1036 list_hy"},[r("div",{staticClass:"listInfo1"},[r("div",{staticClass:"main3_1_1"},[r("div",{staticClass:"floatl"},[r("b",{staticClass:"b_title"},[t._v("更多从"+t._s(t.hyDetail.startCity)+"出发的货源")]),t._v(" "),t._m(19),t._v(" "),r("input",{staticClass:"search_hy",attrs:{id:"search_wlLine",type:"button",value:""}})]),t._v(" "),t._m(20)]),t._v(" "),0===t.huoInfoList.length?r("div",{staticClass:"list_none",staticStyle:{display:"block"}},[r("span",[t._v("暂时没有找到您要查询的信息，可以看看其他货源哦")]),t._v(" "),r("img",{attrs:{src:"/images/none_pic.png"}})]):t._e(),t._v(" "),t._l(t.huoInfoList,function(e,n){return r("ul",{key:n,staticClass:"wlzx_list"},[r("li",{attrs:{id:"wlzx_list_0"}},[r("a",{staticClass:"list-title-a",attrs:{href:"/huoyuan/detail?id="+e.id+"&shipperId="+e.shipperId,target:"_blank"}},[r("div",{staticClass:"position"},[r("span",{staticClass:"list-icon lines-sprite-icons icon-start"}),t._v(" "),r("em",[t._v(t._s(e.startCity))]),t._v(" "),r("span",{staticClass:"list-icon lines-sprite-icons icon-through"}),t._v(" "),r("span",{staticClass:"list-icon lines-sprite-icons icon-end"}),t._v(" "),r("em",[t._v(t._s(e.endCity))])])]),t._v(" "),r("div",{staticClass:"distance_total"},[t._v("[全程"),r("em",[t._v(t._s(e.distance))]),t._v("公里]")]),t._v(" "),r("div",{staticClass:"sc_num"},[r("img",{attrs:{src:"/images/list_wlzx/ll_num.png"}}),r("span",[r("i",[t._v("浏览量:"),r("em",[t._v(t._s(e.browseNumber?e.browseNumber:0))])])])]),t._v(" "),r("div",{staticClass:"view_num"},[r("img",{attrs:{src:"/images/list_wlzx/sc_num.png"}}),r("span",[r("i",[t._v("收藏量:"),r("em",[t._v(t._s(e.collectNum?e.collectNum:0))])])])])]),t._v(" "),r("li",{staticClass:"wlzx_list_1"},[r("p",{staticClass:"p1"}),t._v(" "),r("p",{staticClass:"p2"},[r("img",{attrs:{src:"/images/list_wlzx/hy_item1.png"}}),r("i",[t._v("货物：")]),r("font",[t._v(t._s(e.goodsName)+" ")])],1),t._v(" "),r("p",{staticClass:"p3"},[r("img",{attrs:{src:"/images/list_wlzx/hy_item2.png"}}),r("i",[t._v("规格：")]),t._v(" "),r("span",[t._v(t._s(e.goodsNum)),r("font",{attrs:{id:"nr0420"}},[t._v("件 | ")])],1),t._v(" "),r("span",[t._v(t._s(e.goodsWeight)),r("font",[t._v("公斤 | ")])],1),t._v(" "),r("span",[t._v(t._s(e.goodsVolume)),r("font",[t._v("立方米")])],1)])]),t._v(" "),r("li",{staticClass:"wlzx_list_2"},[r("p",{staticClass:"p3"}),t._v(" "),r("p",{staticClass:"p1"},[r("img",{attrs:{src:"/images/list_wlzx/hy_item3.png"}}),r("span",[t._v("发布者：")]),r("i",[t._v(t._s(e.companyName))])]),t._v(" "),r("p",{staticClass:"p2"},[r("img",{attrs:{src:"/images/list_wlzx/hy_item4.png"}}),r("span",[t._v("联系人：")]),r("i",[t._v(t._s(e.shipperName))])])]),t._v(" "),r("li",{staticClass:"wlzx_list_4"},[r("p",{staticClass:"p3"}),t._v(" "),r("p",{staticClass:"p1"},[r("img",{attrs:{src:"/images/list_wlzx/hy_item5.png"}}),r("span",[t._v("货源类型：")]),r("i",[t._v(t._s(0===e.orderClass?"单次急发货源":"长期稳定货源"))])]),t._v(" "),r("p",{staticClass:"p2"},[r("img",{attrs:{src:"/images/list_wlzx/hy_item6.png"}}),r("span",[t._v("发布时间：")]),r("i",[t._v(t._s(e.createTime.substring(0,16)))])])]),t._v(" "),r("li",{staticClass:"wlzx_list_3"},[r("p",{staticClass:"p1"},["AF0010403"===e.authStatus?r("img",{attrs:{src:"/images/list_wlzx/10shiming.png"}}):t._e()]),t._v(" "),r("p",{staticClass:"p2"},[e.isVip&&"1"===e.isVip?r("img",{attrs:{src:"/images/list_wlzx/11xinyong.png"}}):t._e()])]),t._v(" "),r("li",{staticClass:"wlzx_list_6"},[r("p",{staticClass:"p1"},[r("a",{attrs:{href:"/huoyuan/detail?id="+e.id+"&shipperId="+e.shipperId,target:"_blank"}},[r("input",{attrs:{readonly:"",value:"查看"}})])]),t._v(" "),r("p",{staticClass:"p2"},[e.qq?r("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin="+e.qq+"&site=qq&menu=yes",target:"_blank"}},[r("input",{attrs:{value:"QQ交谈"}})]):t._e()])])])})],2),t._v(" "),t._m(21),t._v(" "),r("div",{staticClass:"listInfo2"},[r("div",{staticClass:"zx_sx"},[r("span",{staticClass:"biaozhi"}),r("span",[t._v("更多从"+t._s(t.hyDetail.endCity)+"出发的货源")]),t._v(" "),r("i",{staticStyle:{cursor:"pointer",float:"right","font-size":"14px"},on:{click:function(e){return t.goToCy()}}},[t._v("更多>")])]),t._v(" "),0===t.huoInfoList.length?r("div",{staticClass:"list_none",staticStyle:{display:"block"}},[r("span",[t._v("暂时没有找到您要查询的信息，可以看看其他货源哦")]),t._v(" "),r("img",{attrs:{src:"/images/none_pic.png"}})]):t._e(),t._v(" "),t._l(t.huoInfoList,function(e,n){return r("ul",{key:n,staticClass:"wlzx_list"},[r("li",{attrs:{id:"wlzx_list_0"}},[r("a",{staticClass:"list-title-a",attrs:{href:"/huoyuan/detail?id="+e.id+"&shipperId="+e.shipperId,target:"_blank"}},[r("div",{staticClass:"position"},[r("span",{staticClass:"list-icon lines-sprite-icons icon-start"}),t._v(" "),r("em",[t._v(t._s(e.startCity))]),t._v(" "),r("span",{staticClass:"list-icon lines-sprite-icons icon-through"}),t._v(" "),r("span",{staticClass:"list-icon lines-sprite-icons icon-end"}),t._v(" "),r("em",[t._v(t._s(e.endCity))])])]),t._v(" "),r("div",{staticClass:"distance_total"},[t._v("[全程"),r("em",[t._v(t._s(e.distance))]),t._v("公里]")]),t._v(" "),r("div",{staticClass:"sc_num"},[r("img",{attrs:{src:"/images/list_wlzx/ll_num.png"}}),r("span",[r("i",[t._v("浏览量:"),r("em",[t._v(t._s(e.browseNumber?e.browseNumber:0))])])])]),t._v(" "),r("div",{staticClass:"view_num"},[r("img",{attrs:{src:"/images/list_wlzx/sc_num.png"}}),r("span",[r("i",[t._v("收藏量:"),r("em",[t._v(t._s(e.collectNum?e.collectNum:0))])])])])]),t._v(" "),r("li",{staticClass:"wlzx_list_1"},[r("p",{staticClass:"p1"}),t._v(" "),r("p",{staticClass:"p2"},[r("img",{attrs:{src:"/images/list_wlzx/hy_item1.png"}}),r("i",[t._v("货物：")]),r("font",[t._v(t._s(e.goodsName)+" ")])],1),t._v(" "),r("p",{staticClass:"p3"},[r("img",{attrs:{src:"/images/list_wlzx/hy_item2.png"}}),r("i",[t._v("规格：")]),t._v(" "),r("span",[t._v(t._s(e.goodsNum)),r("font",{attrs:{id:"nr0420"}},[t._v("件 | ")])],1),t._v(" "),r("span",[t._v(t._s(e.goodsWeight)),r("font",[t._v("公斤 | ")])],1),t._v(" "),r("span",[t._v(t._s(e.goodsVolume)),r("font",[t._v("立方米")])],1)])]),t._v(" "),r("li",{staticClass:"wlzx_list_2"},[r("p",{staticClass:"p3"}),t._v(" "),r("p",{staticClass:"p1"},[r("img",{attrs:{src:"/images/list_wlzx/hy_item3.png"}}),r("span",[t._v("发布者：")]),r("i",[t._v(t._s(e.companyName))])]),t._v(" "),r("p",{staticClass:"p2"},[r("img",{attrs:{src:"/images/list_wlzx/hy_item4.png"}}),r("span",[t._v("联系人：")]),r("i",[t._v(t._s(e.shipperName))])])]),t._v(" "),r("li",{staticClass:"wlzx_list_4"},[r("p",{staticClass:"p3"}),t._v(" "),r("p",{staticClass:"p1"},[r("img",{attrs:{src:"/images/list_wlzx/hy_item5.png"}}),r("span",[t._v("货源类型：")]),r("i",[t._v(t._s(0===e.orderClass?"单次急发货源":"长期稳定货源"))])]),t._v(" "),r("p",{staticClass:"p2"},[r("img",{attrs:{src:"/images/list_wlzx/hy_item6.png"}}),r("span",[t._v("发布时间：")]),r("i",[t._v(t._s(e.createTime.substring(0,16)))])])]),t._v(" "),r("li",{staticClass:"wlzx_list_3"},[r("p",{staticClass:"p1"},["AF0010403"===e.authStatus?r("img",{attrs:{src:"/images/list_wlzx/10shiming.png"}}):t._e()]),t._v(" "),r("p",{staticClass:"p2"},[e.isVip&&"1"===e.isVip?r("img",{attrs:{src:"/images/list_wlzx/11xinyong.png"}}):t._e()])]),t._v(" "),r("li",{staticClass:"wlzx_list_6"},[r("p",{staticClass:"p1"},[r("a",{attrs:{href:"/huoyuan/detail?id="+e.id+"&shipperId="+e.shipperId,target:"_blank"}},[r("input",{attrs:{readonly:"",value:"查看"}})])]),t._v(" "),r("p",{staticClass:"p2"},[e.qq?r("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin="+e.qq+"&site=qq&menu=yes",target:"_blank"}},[r("input",{attrs:{value:"QQ交谈"}})]):t._e()])])])})],2)]),t._v(" "),r("div",{staticClass:"right4"},[r("div",{staticClass:"arc_main4-content"},[t._m(22),t._v(" "),t._l(t.gldhList,function(e,n){return r("a",{key:n,staticClass:"gldh_list",attrs:{href:e.url,target:"_blank"}},[r("div",{staticClass:"img"},[r("img",{attrs:{src:e.img}})]),t._v(" "),r("div",[r("p",[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.subTitle))])])])})],2),t._v(" "),t._m(23),t._v(" "),r("div",{staticClass:"arc_main4-content"},[t._m(24),t._v(" "),r("div",{staticStyle:{padding:"10px"}},t._l(t.hotSearchList,function(e,n){return r("a",{key:n,staticClass:"rmsx_list",attrs:{href:e.targetLinks+"?startp="+e.startProvince+"&startc="+e.startCity+"&starta="+e.startArea+"&endp="+e.endProvince+"&endc="+e.endCity+"&enda="+e.endArea+"&carSourceType="+e.carSourceType,target:"_blank"}},[t._v("\n            "+t._s(e.title)+"\n          ")])}),0)]),t._v(" "),r("div",{staticClass:"arc_main4-content",staticStyle:{"margin-top":"20px"}},[t._m(25),t._v(" "),t._l(t.popularity,function(e,n){return r("div",{key:n,staticClass:"rc_list"},[r("a",{attrs:{href:"/member/"+e.id}},[r("div",{staticClass:"left"},[r("p",{class:{oneColor:0==n,twoColor:1==n,trihColor:2==n}},[t._v(t._s(n+1))])]),t._v(" "),n<3?r("div",{staticClass:"img"},[r("img",{attrs:{src:e.companyFile}})]):t._e(),t._v(" "),r("div",{staticClass:"right"},[r("span",[t._v(t._s(e.companyName))]),t._v(" "),r("span",{staticStyle:{float:"right"}},[t._v("人气值："),r("i",{staticStyle:{color:"red"}},[t._v(t._s(e.popularity))])])])])])})],2),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30)])]),t._v(" "),r("div",{staticClass:"arc_main4"},[r("div",{staticClass:"zx_sx1"},[r("span",{staticClass:"biaozhi1"}),r("span",[t._v("更多从广州出发的"+t._s(t.huoLabel))])]),t._v(" "),r("ul",{staticClass:"hot-cities"},t._l(t.huoLink,function(e,n){return r("li",{key:n,staticClass:"hot-cities-li"},[r("a",{staticClass:"hot-cities-a",attrs:{href:e.targetLinks+"?startp="+e.startProvince+"&startc="+e.startCity+"&starta="+e.startArea+"&endp="+e.endProvince+"&endc="+e.endCity+"&enda="+e.endArea+"&carSourceType="+e.carSourceType}},[t._v(t._s(e.title))])])}),0)]),t._v(" "),r("div",{staticClass:"arc_main4"},[r("div",{staticClass:"zx_sx1"},[r("span",{staticClass:"biaozhi1"}),r("span",[t._v(t._s(t.interesLabel))])]),t._v(" "),r("ul",{staticClass:"hot-cities"},t._l(t.interestOrder,function(e,n){return r("li",{key:n,staticClass:"hot-cities-li"},[r("a",{staticClass:"hot-cities-a",attrs:{href:e.targetLinks+"?startp="+e.startProvince+"&startc="+e.startCity+"&starta="+e.startArea+"&endp="+e.endProvince+"&endc="+e.endCity+"&enda="+e.endArea+"&carSourceType="+e.carSourceType}},[t._v(t._s(e.title))])])}),0)]),t._v(" "),r("div",{staticClass:"arc_bottom",staticStyle:{display:"none"},attrs:{id:"js011"}},[t._m(31),t._v(" "),r("div",{staticClass:"tj_list",staticStyle:{display:"none"}},[t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),r("p",{staticClass:"p02"},[r("span",[r("i",[t._v("重量：")]),r("font",{attrs:{id:"nr0915"}},[t._v("15吨")])],1),t._v(" "),r("span",[r("i",[t._v("体积：")]),r("font",{attrs:{id:"nr0916"}},[t._v("30立方米")])],1)]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_top1_3"},[e("a",{attrs:{id:"search_huo",target:"_blank"}},[e("input",{staticClass:"arc_input3",attrs:{value:"搜全网"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_top1_2"},[e("select",{attrs:{id:"search_type"}},[e("option",{attrs:{name:"zx"}},[this._v("找专线")]),e("option",{attrs:{name:"che"}},[this._v("找车源")]),e("option",{attrs:{name:"huo"}},[this._v("找货源")])]),this._v(" "),e("input",{staticClass:"arc_input1",attrs:{wtmap:"",placeholder:"出发地"}}),this._v(" "),e("span",[this._v("→")]),this._v(" "),e("input",{staticClass:"arc_input2",attrs:{wtmap:"",placeholder:"到达地"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_top2_1"},[e("a",{attrs:{href:"/"}},[e("span",[this._v("首页")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"javascript:void(0)"}},[e("span",[this._v("更多+")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("img",{staticClass:"img1",attrs:{src:"/images/list_wlzx/hy_item6.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("img",{staticClass:"img2",attrs:{src:"/images/list_wlzx/sc_num.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_left_2_1_1"},[e("span",[this._v("货源信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"collection_zx"},[e("div",{staticClass:"bt_close",attrs:{onclick:"$('.collection_zx').hide()"}},[e("img",{attrs:{src:"/images/article_wlzx/xxx.png"}})]),this._v(" "),e("div",{staticClass:"collection_zx_nr"},[e("img",{attrs:{src:"/images/article_wlzx/yes.png"}}),this._v(" "),e("span",[this._v("成功加入")]),e("a",{attrs:{id:"collection_url",target:"_blank",href:"#"}},[this._v("收藏夹")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_left_2_1_1"},[e("span",[this._v("线路信息")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"arc_left_3"},[r("div",[r("img",{attrs:{src:"/images/28fast_download.png",width:"72",height:"72"}})]),t._v(" "),r("div",[t._v("\n              下载"),r("span",[t._v("【28快运APP】")]),t._v("，您可查看更多"),r("span",[t._v("广州")]),t._v("到"),r("span",[t._v("东莞")]),t._v("的货源，并可实时接 收28快运为您推荐的精品货源提醒!\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"button2",attrs:{href:"javascript:;"}},[e("img",{attrs:{src:"/images/cy/03u41008 2.gif"}}),this._v("此线路上新货源提醒我")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"arc_right05"},[e("a",{staticClass:"website",attrs:{href:"#"}},[this._v("进入官网")]),this._v(" "),e("input",{staticClass:"collection_hz",staticStyle:{cursor:"pointer"},attrs:{readonly:"",value:"收藏"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"arc_right06"},[e("span",[this._v("相关认证")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/article_wlzx/10shiming.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("手机："),e("a",{staticStyle:{"list-style":"underline"}},[this._v("查看电话")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("货主综合力评估")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img"},[e("img",{attrs:{src:"/images/cy/09sj.png",width:"82",height:"82"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-right-row",staticStyle:{clear:"both"}},[e("a",{staticClass:"button2",attrs:{href:"javascript:;"}},[e("img",{attrs:{src:"/images/cy/03u41008 2.gif"}}),this._v("帮我选择优质货源")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("货主最近货源信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index_search floatl"},[e("div",{staticClass:"fl index_search_input",staticStyle:{position:"relative"},attrs:{id:"wlLineFrom"}},[e("input",{staticStyle:{height:"100%"},attrs:{"data-toggle":"city-picker","data-level":"district",type:"text",name:"",placeholder:"请选择出发地",readonly:""}})]),this._v(" "),e("em",[this._v("→")]),this._v(" "),e("div",{staticClass:"fl index_search_input",staticStyle:{position:"relative"},attrs:{id:"wlLineTo"}},[e("input",{staticStyle:{height:"100%"},attrs:{"data-toggle":"city-picker","data-level":"district",type:"text",name:"",placeholder:"请选择到达地",readonly:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"more floatr"},[e("a",{attrs:{href:"/huoyuan",target:"_blank"}},[this._v("更多>")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"middle-ad"},[e("img",{attrs:{src:"/images/cy/10banner.png",alt:"广告"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("28快运平台功能导航源")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_main4-content"},[e("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("热门搜索")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("企业月人气榜")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_main4-content"},[e("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_main4-content"},[e("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_main4-content"},[e("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_main4-content"},[e("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"arc_main4-content"},[r("ul",{staticClass:"ps-list",staticStyle:{"padding-left":"30px","list-style":"square"}},[r("li",[r("div",{staticClass:"btn_span"},[r("span",[t._v("代理")]),t._v(" "),r("span",[t._v("其他")])]),t._v(" "),r("a",{attrs:{href:""}},[t._v("货运全国，一站式服务！")])]),t._v(" "),r("li",[r("div",{staticClass:"btn_span"},[r("span",[t._v("供应")]),t._v(" "),r("span",[t._v("报关行")])]),t._v(" "),r("a",{attrs:{href:""}},[t._v("长期供应香港进出口拖车报关！")])]),t._v(" "),r("li",[r("div",{staticClass:"btn_span"},[r("span",[t._v("合作")]),t._v(" "),r("span",[t._v("其他")])]),t._v(" "),r("a",{attrs:{href:""}},[t._v("货运全国，一站式服务！")])]),t._v(" "),r("li",[r("div",{staticClass:"btn_span"},[r("span",[t._v("代理")]),t._v(" "),r("span",[t._v("其他")])]),t._v(" "),r("a",{attrs:{href:""}},[t._v("货运全国，一站式服务！")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("此路线其他货源")]),e("a",{attrs:{href:"/plus/list.php?tid=2"}},[e("span",{staticClass:"arc_bottom_more"},[this._v("更多+")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p01"},[e("a",{attrs:{id:"nr0910",target:"_blank"}},[e("span",{attrs:{id:"nr0911"}},[this._v("广东-东莞")]),e("i",[this._v("→")]),e("span",{attrs:{id:"nr0912"}},[this._v("广东-深圳")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p03"},[e("img",{attrs:{src:"[field:global.cfg_templets_skin/]/images/04gongsi.png"}}),this._v(" "),e("span",[e("a",{attrs:{id:"nr0913",href:"/member/index.php?uid=ybyb120"}},[this._v("广州明科物流有限公司")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p03"},[e("i",[this._v("货物名称：")]),e("span",{attrs:{id:"nr0914"}},[this._v("电子电器")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p04"},[e("i",[this._v("数量：")]),e("span",{attrs:{id:"nr0917"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p05"},[e("img",{attrs:{src:"[field:global.cfg_templets_skin/]/images/11xinyong.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"p06"},[e("a",{staticStyle:{cursor:"pointer"},attrs:{id:"nr0918",href:"Javascript:void(0)"}},[e("span",[this._v("查看 >")])])])}],!1,null,"1e0946d4",null);e.default=component.exports}}]);