(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{483:function(t,s,a){"use strict";a.r(s);a(19),a(54);var i=a(7),e=a.n(i),r={name:"Detail",components:{},head:{link:[{rel:"stylesheet",href:"/css/article_huoyuan.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"}],script:[{src:"/js/city-picker.data.js"},{src:"/js/city-picker.js"},{src:"../vendor/layer/layer.js"},{src:"../js/jquery.pagination.min.js"},{src:"../js/WTMap.min.js"},{src:"https://echarts.baidu.com/dist/echarts.min.js"}]},layout:"subLayout",data:function(){return{zxList:[],inTerVar:null,inTerVar1:null,otherInfoList:[],hyDetail:[],pages:0,currentPage:1,gldhList:[{title:"注册28快运会员",subTitle:"免费发布车源货源专线信息，轻松一键搞定",url:"/regisiter",img:"/images/cy/04zc.png"},{title:"快速下单",subTitle:"下单立即响应，甄选优质运力，发货有保障",url:"/",img:"/images/cy/05xd.png"},{title:"发布车源",subTitle:"让客户主动找我，让平台为我撮合",url:"/create/cheyuan",img:"/images/cy/06cy.png"},{title:"发布货源",subTitle:"精准匹配合适物流，方便快捷省钱",url:"/create/huoyuan",img:"/images/cy/07hy.png"},{title:"发布专线",subTitle:"平台智能推荐货源，实施提醒撮合交易",url:"/create/line",img:"/images/cy/08zx.png"}]}},asyncData:function(){var t=e()(regeneratorRuntime.mark(function t(s){var a,i,e,r,n,c,_,l,v,o,p,d,h,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.$axios,s.app,i=s.query,t.next=3,a.get("/28-web/lclOrder/detail/"+i.id).catch(function(t){});case 3:return e=t.sent,r={currentPage:1,pageSize:10,startProvince:e.data.data.startProvince,startCity:e.data.data.startCity},n={endArea:e.data.data.endArea,endCity:e.data.data.endCity,endProvince:e.data.data.endProvince,startArea:e.data.data.startArea,startCity:e.data.data.startCity,startProvince:e.data.data.startProvince},t.next=8,a.post("/28-web/shipper/archival?shipperId="+i.shipperId);case 8:return c=t.sent,console.log(c.data.data,"item province:"),t.next=12,a.get("/28-web/lclOrder/newList");case 12:return _=t.sent,t.next=15,a.post("/28-web/lclOrder/list",r).catch(function(t){});case 15:return l=t.sent,t.next=18,a.post("/28-web/lclOrder/shipper/lastList",{shipperId:i.shipperId}).catch(function(t){});case 18:return v=t.sent,t.next=21,a.get("/28-web/shipper/comprehensive?shipperId="+i.shipperId).catch(function(t){});case 21:return o=t.sent,t.next=24,a.get("/28-web/hotSearch/supply/detail/links");case 24:return p=t.sent,t.next=27,a.get("/28-web/logisticsCompany/popularity");case 27:return d=t.sent,t.next=30,a.post("/28-web/lclOrder/detail/related/links",n);case 30:return h=t.sent,u=function(t){switch(t.startProvince){case null:t.startProvince=""}switch(t.startCity){case null:t.startCity=""}switch(t.startArea){case null:t.startArea=""}switch(t.endProvince){case null:t.endProvince=""}switch(t.endCity){case null:t.endCity=""}switch(t.endArea){case null:t.endArea=""}t.carSourceType="",t.targetLinks="","1000"==t.type&&(t.targetLinks="/gongsi/"),"2000"==t.type&&(t.targetLinks="/zhuanxian/list"),"2001"==t.type&&(t.targetLinks="/member/"+t.companyId+"-line"),"3000"!=t.type&&"3003"!=t.type&&"3002"!=t.type||(t.targetLinks="/cheyuan"),"3001"==t.type&&(t.targetLinks="/cheyuan",t.carSourceType="AF01801"),"4000"==t.type&&(t.targetLinks="/huoyuan"),"4001"==t.type&&(t.targetLinks="/member/"+t.companyId+"-huo")},h.data.data.brandOrder.links.forEach(u),h.data.data.interestOrder.links.forEach(u),p.data.data.links.forEach(u),t.abrupt("return",{archival:200===c.data.status?c.data.data:[],hyDetail:200===e.data.status?e.data.data:{},popularity:200===d.data.status?d.data.data:[],huoComprehensive:200===o.data.status?o.data.data:[],newestHuoyuanRe:200===v.data.status?v.data.data.list:[],newList:200===_.data.status?_.data.data:[],zxList:[],huoInfoList:200===l.data.status?l.data.data.list:[],huoLink:200===h.data.status?h.data.data.brandOrder.links:[],huoLabel:200===h.data.status?h.data.data.brandOrder.label:"",interestOrder:200===h.data.status?h.data.data.interestOrder.links:[],interesLabel:200===h.data.status?h.data.data.interestOrder.label:"",hotSearchList:200===p.data.status?p.data.data.links:[]});case 36:case"end":return t.stop()}},t)}));return function(s){return t.apply(this,arguments)}}(),mounted:function(){var t=this;$("#wlLineFrom input").citypicker({}),$("#wlLineTo input").citypicker({});var s=$(".list_new_box").height(),a=$(".zx_sx_new");a.append(a.html());var i=4,r=this.newestHuoyuanRe.length,n=$(".manage_box").height(),c=function(){t.inTerVar=setInterval(function(){a.stop().animate({top:"".concat(i*-n,"px")},2e3,function(){i>r&&(i=4,a.css("top","0px"))}),i+=4},6e3)};n*r>s&&c(),$(".list_new_box").hover(function(){clearInterval(t.inTerVar),t.inTerVar=null},function(){c()});var _=$(".top_left").height(),l=$(".top_left_ul");l.append(l.html());var v=1,o=this.newList.length,p=$(".top_left_ul_li").height();p*o>_&&(t.inTerVar1=setInterval(function(){l.stop().animate({top:"".concat(v*-p,"px")},2e3,function(){v>o&&(v=1,l.css("top","0px"))}),v+=1},6e3)),$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:function(){var t=e()(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:$("#current1").text(s);case 1:case"end":return t.stop()}},t)}));return function(s){return t.apply(this,arguments)}}()})},destroyed:function(){clearInterval(this.inTerVar),this.inTerVar=null},methods:{goToCy:function(){window.location.href="/huoyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity=&endProvince=&isLongCar=&startArea=&startCity=".concat(this.hyDetail.startCity,"&startProvince=").concat(this.hyDetail.startProvince)},goToCy1:function(){window.location.href="/huoyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity=&endProvince=&isLongCar=&startArea=&startCity=".concat(this.hyDetail.endCity,"&startProvince=").concat(this.hyDetail.endProvince)},clickImg:function(t){this.showImg=t},findAnother:function(){var t={endArea:this.hyDetail.endArea,endCity:this.hyDetail.endCity,endProvince:this.hyDetail.endProvince,startArea:this.hyDetail.startArea,startCity:this.hyDetail.startCity,startProvince:this.hyDetail.startProvince};this.$axios.post("/28-web/lclOrder/another",t).then(function(t){200===t.data.status&&(console.log(t.data.data.id,"00000000"),window.location.href="/huoyuan/detail?id=".concat(t.data.data.id,"&shipperId=").concat(t.data.data.shipperId))})}}},n=a(0),c=Object(n.a)(r,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"arc_main"},[a("div",{staticClass:"arc_top1"},[a("div",{staticClass:"arc_top1_1"},[a("span",[t._v(t._s(t.hyDetail.startProvinceCityArea+"\t→"+t.hyDetail.endProvinceCityArea))])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"arc_top2"},[t._m(2),t._v(" "),a("div",{staticClass:"arc_top2_2"},t._l(t.zxList,function(s,i){return i<14?a("a",{key:i},[a("span",[t._v(t._s(0===i?"直达"+s.name.substring(0,2):s.name.substring(0,2)))])]):t._e()}),0),t._v(" "),t.zxList.length>14?a("div",{staticClass:"arc_top2_3",staticStyle:{display:"block"},attrs:{onmouseover:"$('.city_box').css('display','block');"}},[t._m(3)]):t._e(),t._v(" "),a("div",{staticClass:"city_box",attrs:{id:"city_box",onmouseover:"$('.city_box').css('display','block');",onmouseout:"$('.city_box').css('display','none');"}},t._l(t.zxList,function(s,i){return i>=14?a("a",{key:i},[a("span",[t._v(t._s(s.name.substring(0,2)))])]):t._e()}),0)]),t._v(" "),a("div",{staticClass:"arc_main1"},[a("div",{staticClass:"arc_left"},[a("div",{staticClass:"arc_left_1"},[a("div",{staticClass:"top_left"},[a("ul",{staticClass:"top_left_ul"},t._l(t.newList,function(s,i){return a("li",{key:i,staticClass:"top_left_ul_li"},[a("span",[t._v("用户"),a("em",{staticStyle:{color:"#2577e3"}},[t._v(t._s(s.creater))])]),t._v(" "),a("span",[a("em",{staticStyle:{color:"#2577e3"}},[t._v(t._s(s.startCity))]),t._v("到")]),t._v(" "),a("span",[a("em",{staticStyle:{color:"#2577e3"}},[t._v(t._s(s.endCity))]),t._v("货源")]),t._v(" "),a("span",[t._v(t._s(s.time)+"3分钟前")])])}),0)]),t._v(" "),a("p",{staticClass:"arc_p1"},[a("span",[t._v(t._s(t.hyDetail.startProvinceCityArea+"\t→"+t.hyDetail.endProvinceCityArea))]),t._v(" "),a("span",{staticClass:"arc_p2"},[a("img",{staticClass:"imgarc_p2",attrs:{src:"/images/list_wlzx/ll_num.png"}}),a("i",[t._v("浏览量："),a("em",[t._v(t._s(t.hyDetail.browseNumber))])])])]),t._v(" "),a("div",{staticClass:"arc_middle1-2"},[t._m(4),a("span",{staticStyle:{"margin-right":"50px"}},[t._v("发布日期："+t._s(t.hyDetail.createTime))]),t._m(5),a("span",[t._v("收藏量："+t._s(t.hyDetail.collectNumber)),a("i",{staticClass:"my_cz_num"})])])]),t._v(" "),a("div",{staticClass:"arc_left_2"},[a("div",{staticClass:"arc_left_2_1"},[t._m(6),t._v(" "),a("div",{staticClass:"arc_left_2_1_2"},[a("table",[a("tr",[a("td",{staticClass:"arc_td1"},[t._v("名称：")]),a("td",{staticClass:"arc_td2"},[a("font",[t._v(t._s(t.hyDetail.goodsName))])],1)]),t._v(" "),a("tr",[a("td",{staticClass:"arc_td1"},[t._v("数量：")]),a("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.goodsNum?t.hyDetail.goodsNum+"件":""))])]),t._v(" "),a("tr",[a("td",{staticClass:"arc_td1"},[t._v("重量：")]),a("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.goodsWeight)+"公斤")])]),t._v(" "),a("tr",[a("td",{staticClass:"arc_td1"},[t._v("体积：")]),a("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.goodsVolume)+"立方米")])]),t._v(" "),a("tr",[a("td",{staticClass:"arc_td1"},[t._v("有效期：")]),a("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.orderClass))])]),t._v(" "),a("tr",[a("td",{staticClass:"arc_td1"},[t._v("其他：")]),a("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.extraName))])]),t._v(" "),a("tr",[a("td",{staticClass:"arc_td1"},[t._v("备注：")]),a("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.remark))])])])])]),t._v(" "),a("div",{staticClass:"arc_left_2_2"},[t._m(7),t._v(" "),t._m(8),t._v(" "),a("div",{staticClass:"arc_left_2_1_2"},[a("table",[a("tr",[a("td",{staticClass:"arc_td1"},[t._v("出发地：")]),a("td",{staticClass:"arc_td2"},[a("font",[t._v(t._s(t.hyDetail.startProvinceCityArea))])],1)]),t._v(" "),a("tr",[a("td",{staticClass:"arc_td1"},[t._v("到达地：")]),a("td",{staticClass:"arc_td2"},[a("font",[t._v(t._s(t.hyDetail.endProvinceCityArea))])],1)]),t._v(" "),a("tr",[a("td",{staticClass:"arc_td1"},[t._v("联系人：")]),a("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.consignor))])]),t._v(" "),a("tr",[a("td",{staticClass:"arc_td1"},[t._v("联系电话：")]),a("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.consignorPhone))])]),t._v(" "),a("tr",[a("td",{staticClass:"arc_td1"},[t._v("装货时间：")]),a("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.createTime))])]),t._v(" "),a("tr",[a("td",{staticClass:"arc_td1"},[t._v("里程：")]),a("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.distance))])]),t._v(" "),a("tr",[a("td",{staticClass:"arc_td1"},[t._v("期望运价：")]),a("td",{staticClass:"arc_td2"},[t._v(t._s(t.hyDetail.totalAmount))])])])])]),t._v(" "),a("div",{staticClass:"arc_bottom"},[t._m(9),t._v(" "),a("div",{staticClass:"arc_middle5"},[a("div",{staticClass:"arc_m5_1"},[a("span",[t._v("小贴士：对此货源有意向可点击“抢单”，货主即可看到您的联系信息，提高成交率！")]),t._v(" "),a("div",{staticStyle:{"margin-top":"15px"}},[a("a",{staticClass:"button1",attrs:{href:""}},[t._v("立即下单")]),t._v(" "),t._m(10),t._v(" "),a("span",{staticStyle:{"margin-left":"47px"}},[a("img",{attrs:{src:"/images/cy/14fresh.png"}}),t._v(" "),a("span",{staticClass:"arc_middle5-right",on:{click:function(s){return t.findAnother()}}},[t._v("换一个")])])])])])])])]),t._v(" "),"AF00107"===t.archival.shipperType?a("div",{staticClass:"arc_right"},[a("p",{staticClass:"arc_right01"},[a("img",{attrs:{src:"/images/article_wlzx/04gongsi.png"}}),a("span",[t._v(t._s(t.archival.companyName))])]),t._v(" "),t.archival.credit>=0&&t.archival.credit<=150?a("p",{staticClass:"arc_right02"},[a("i",[t._v("信誉：")]),t._v(" "),t._l(t.hyDetail.starS,function(t,s){return a("img",{key:s,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:"/images/article_wlzx/gold.png"}})})],2):t._e(),t._v(" "),t.archival.isEnable>=151?a("p",{staticClass:"arc_right02"},[a("i",[t._v("信誉：")]),t._v(" "),t._l(t.hyDetail.starB,function(t,s){return a("img",{key:s,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:"/images/article_wlzx/yellowguan.png"}})})],2):t._e(),t._v(" "),a("p",{staticClass:"arc_right03"},[a("span",[t._v("质量")]),a("span",[t._v("时效")]),a("span",[t._v("价格")]),a("br"),t._v(" "),a("font",[t._v(t._s(t.archival.serverQualityScore))]),a("font",[t._v(t._s(t.archival.transportAgingScore))]),a("font",[t._v(t._s(t.archival.serverPriceScore))])],1),t._v(" "),a("p",{staticClass:"arc_right04"},[a("span",{staticClass:"arc_right04_1"},[a("i",[t._v("联系人：")]),a("font",[t._v(t._s(t.archival.contactsName))])],1),t._v(" "),a("span",[a("i",[t._v("手机：")]),a("font",[t._v(t._s(t.archival.mobile))])],1),t._v(" "),a("span",[a("i",[t._v("Q Q：")]),t.archival.qq?a("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin="+t.archival.qq+"&site=qq&menu=yes",target:"_blank"}},[a("input",{attrs:{value:"QQ交谈"}})]):t._e()]),t._v(" "),a("span",[a("i",[t._v("地址：")]),t.archival.consignorAddress?a("font",[t._v(t._s(t.archival.consignorAddress.substring(0,10)))]):t._e()],1)]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",{staticClass:"arc_right07"},[t.hyDetail.isVip?a("img",{attrs:{src:"/images/article_wlzx/11xinyong.png"}}):t._e(),t._v(" "),"AF0010403"===t.hyDetail.authStatus?a("img",{attrs:{src:"/images/article_wlzx/10shiming.png"}}):t._e(),t._v(" "),"AF0010403"===t.hyDetail.authStatus||t.hyDetail.isVip&&0!==t.hyDetail.isVip?t._e():a("span",[t._v("暂无认证信息")])])]):t._e(),t._v(" "),a("div",{staticClass:"arc_right1"},[a("div",{staticClass:"arc_top_title"},["AF0010101"===t.archival.shipperType?a("h4",[t._v("货主档案")]):t._e(),t._v(" "),a("h4",{attrs:{else:"archival.shipperType === 'AF0010102'"}},[t._v(t._s(t.archival.companyName))])]),t._v(" "),"AF0010101"===t.archival.shipperType?a("div",{staticClass:"arc_top_img"},[a("img",{attrs:{src:"/images/cy/gold.png"}})]):t._e(),t._v(" "),a("div",{staticClass:"arc_middle"},[a("img",{attrs:{src:"/images/cy/09sj.png"}}),t._v(" "),a("p",{staticStyle:{color:"#fa9925"}},[t._v(t._s(t.archival.shipperTypeName))]),t._v(" "),t._m(13),t._v(" "),a("p",[a("img",{attrs:{src:"/images/cy/13hot.png"}}),t._v("活跃度："),a("i",{staticStyle:{color:"#fa9925"}},[t._v(t._s(t.archival.liveness))])])]),t._v(" "),a("ul",{staticClass:"bottom_ul"},[a("li",[t._v("联系人："+t._s(t.archival.contacts))]),t._v(" "),t._m(14),t._v(" "),a("li",[t._v("已加入："+t._s(t.archival.registerDays)+"天")]),t._v(" "),a("li",[t._v("好评数："+t._s(t.archival.evaGoodCount))])])])]),t._v(" "),a("div",{staticClass:"arc_main3"},[a("div",{staticClass:"right"},[t._m(15),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content-left"},[t._m(16),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.huoComprehensive.shipperTypeName))]),t._v(" "),a("div",{staticClass:"name"},["AF0010403"===t.huoComprehensive.accountStatus?a("img",{attrs:{src:"/images/article_wlzx/10shiming.png"}}):t._e()])]),t._v(" "),a("div",{staticClass:"content-right"},[a("img",{attrs:{src:"/images/cy/gold.png"}}),t._v(" "),a("div",{staticClass:"content-right-row"},[a("img",{staticClass:"img",attrs:{src:"/images/cy/13hot.png"}}),t._v("活跃度："),a("i",[t._v(t._s(t.huoComprehensive.liveness))])]),t._v(" "),a("div",{staticClass:"content-right-row"},[t._v("最近三个月发布货源 "),a("i",[t._v(t._s(t.huoComprehensive.lastThreeMonthSupplyNum))]),t._v(" 次")]),t._v(" "),a("div",{staticClass:"content-right-row"},[t._v("共成交 "),a("i",[t._v(t._s(t.huoComprehensive.orderNumber))]),t._v(" 笔订单，收到好评 "),a("i",[t._v(t._s(t.huoComprehensive.evaGoodCount))]),t._v(" 次")]),t._v(" "),a("div",{staticClass:"content-right-row"},[t._v("大家对他的印象:")]),t._v(" "),t._l(t.huoComprehensive.labels,function(s,i){return a("div",{key:i,staticClass:"content-right-row"},[a("span",[t._v(t._s(s.name)+"（"+t._s(s.count)+"）")])])}),t._v(" "),t._m(17)],2)])]),t._v(" "),a("div",{staticClass:"left"},[t._m(18),t._v(" "),a("div",{staticClass:"list_new_box"},[a("ul",{staticClass:"zx_sx_new"},t._l(t.newestHuoyuanRe,function(s,i){return a("li",{key:i,staticClass:"manage_box"},[a("span",[t._v(t._s(s.startProvinceCityArea))]),t._v(" "),a("span",[t._v(t._s(s.endProvinceCityArea))]),t._v(" "),a("span",[t._v(t._s(s.goodsName))]),t._v(" "),a("span",[a("em",{staticStyle:{color:"#f14747"}},[t._v(t._s(s.goodsWeight))]),t._v("公斤")]),t._v(" "),a("span",[a("em",{staticStyle:{color:"#f14747"}},[t._v(t._s(s.goodsVolume))]),t._v("方")]),t._v(" "),a("span",[t._v(t._s(s.createTime))])])}),0)])])]),t._v(" "),a("div",{staticClass:"arc_main4"},[a("div",{staticClass:"w1036 list_hy"},[a("div",{staticClass:"listInfo1"},[a("div",{staticClass:"main3_1_1"},[a("div",{staticClass:"floatl"},[a("b",{staticClass:"b_title"},[t._v("更多从"+t._s(t.hyDetail.startCity)+"出发的货源")]),t._v(" "),t._m(19),t._v(" "),a("input",{staticClass:"search_hy",attrs:{id:"search_wlLine",type:"button",value:""}})]),t._v(" "),t._m(20)]),t._v(" "),0===t.huoInfoList.length?a("div",{staticClass:"list_none",staticStyle:{display:"block"}},[a("span",[t._v("暂时没有找到您要查询的信息，可以看看其他货源哦")]),t._v(" "),a("img",{attrs:{src:"/images/none_pic.png"}})]):t._e(),t._v(" "),t._l(t.huoInfoList,function(s,i){return a("ul",{key:i,staticClass:"wlzx_list"},[a("li",{attrs:{id:"wlzx_list_0"}},[a("a",{staticClass:"list-title-a",attrs:{href:"/huoyuan/detail?id="+s.id+"&shipperId="+s.shipperId,target:"_blank"}},[a("div",{staticClass:"position"},[a("span",{staticClass:"list-icon lines-sprite-icons icon-start"}),t._v(" "),a("em",[t._v(t._s(s.startCity))]),t._v(" "),a("span",{staticClass:"list-icon lines-sprite-icons icon-through"}),t._v(" "),a("span",{staticClass:"list-icon lines-sprite-icons icon-end"}),t._v(" "),a("em",[t._v(t._s(s.endCity))])])]),t._v(" "),a("div",{staticClass:"distance_total"},[t._v("[全程"),a("em",[t._v(t._s(s.distance))]),t._v("公里]")]),t._v(" "),a("div",{staticClass:"sc_num"},[a("img",{attrs:{src:"/images/list_wlzx/ll_num.png"}}),a("span",[a("i",[t._v("浏览量:"),a("em",[t._v(t._s(s.browseNumber?s.browseNumber:0))])])])]),t._v(" "),a("div",{staticClass:"view_num"},[a("img",{attrs:{src:"/images/list_wlzx/sc_num.png"}}),a("span",[a("i",[t._v("收藏量:"),a("em",[t._v(t._s(s.collectNum?s.collectNum:0))])])])])]),t._v(" "),a("li",{staticClass:"wlzx_list_1"},[a("p",{staticClass:"p1"}),t._v(" "),a("p",{staticClass:"p2"},[a("img",{attrs:{src:"/images/list_wlzx/hy_item1.png"}}),a("i",[t._v("货物：")]),a("font",[t._v(t._s(s.goodsName)+" ")])],1),t._v(" "),a("p",{staticClass:"p3"},[a("img",{attrs:{src:"/images/list_wlzx/hy_item2.png"}}),a("i",[t._v("规格：")]),t._v(" "),a("span",[t._v(t._s(s.goodsNum)),a("font",{attrs:{id:"nr0420"}},[t._v("件 | ")])],1),t._v(" "),a("span",[t._v(t._s(s.goodsWeight)),a("font",[t._v("公斤 | ")])],1),t._v(" "),a("span",[t._v(t._s(s.goodsVolume)),a("font",[t._v("立方米")])],1)])]),t._v(" "),a("li",{staticClass:"wlzx_list_2"},[a("p",{staticClass:"p3"}),t._v(" "),a("p",{staticClass:"p1"},[a("img",{attrs:{src:"/images/list_wlzx/hy_item3.png"}}),a("span",[t._v("发布者：")]),a("i",[t._v(t._s(s.companyName))])]),t._v(" "),a("p",{staticClass:"p2"},[a("img",{attrs:{src:"/images/list_wlzx/hy_item4.png"}}),a("span",[t._v("联系人：")]),a("i",[t._v(t._s(s.shipperName))])])]),t._v(" "),a("li",{staticClass:"wlzx_list_4"},[a("p",{staticClass:"p3"}),t._v(" "),a("p",{staticClass:"p1"},[a("img",{attrs:{src:"/images/list_wlzx/hy_item5.png"}}),a("span",[t._v("货源类型：")]),a("i",[t._v(t._s(0===s.orderClass?"单次急发货源":"长期稳定货源"))])]),t._v(" "),a("p",{staticClass:"p2"},[a("img",{attrs:{src:"/images/list_wlzx/hy_item6.png"}}),a("span",[t._v("发布时间：")]),a("i",[t._v(t._s(s.createTime.substring(0,16)))])])]),t._v(" "),a("li",{staticClass:"wlzx_list_3"},[a("p",{staticClass:"p1"},["AF0010403"===s.authStatus?a("img",{attrs:{src:"/images/list_wlzx/10shiming.png"}}):t._e()]),t._v(" "),a("p",{staticClass:"p2"},[s.isVip&&"1"===s.isVip?a("img",{attrs:{src:"/images/list_wlzx/11xinyong.png"}}):t._e()])]),t._v(" "),a("li",{staticClass:"wlzx_list_6"},[a("p",{staticClass:"p1"},[a("a",{attrs:{href:"/huoyuan/detail?id="+s.id+"&shipperId="+s.shipperId,target:"_blank"}},[a("input",{attrs:{readonly:"",value:"查看"}})])]),t._v(" "),a("p",{staticClass:"p2"},[s.qq?a("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin="+s.qq+"&site=qq&menu=yes",target:"_blank"}},[a("input",{attrs:{value:"QQ交谈"}})]):t._e()])])])})],2),t._v(" "),t._m(21),t._v(" "),a("div",{staticClass:"listInfo2"},[a("div",{staticClass:"zx_sx"},[a("span",{staticClass:"biaozhi"}),a("span",[t._v("更多从"+t._s(t.hyDetail.endCity)+"出发的货源")]),t._v(" "),a("i",{staticStyle:{cursor:"pointer",float:"right","font-size":"14px"},on:{click:function(s){return t.goToCy()}}},[t._v("更多>")])]),t._v(" "),0===t.huoInfoList.length?a("div",{staticClass:"list_none",staticStyle:{display:"block"}},[a("span",[t._v("暂时没有找到您要查询的信息，可以看看其他货源哦")]),t._v(" "),a("img",{attrs:{src:"/images/none_pic.png"}})]):t._e(),t._v(" "),t._l(t.huoInfoList,function(s,i){return a("ul",{key:i,staticClass:"wlzx_list"},[a("li",{attrs:{id:"wlzx_list_0"}},[a("a",{staticClass:"list-title-a",attrs:{href:"/huoyuan/detail?id="+s.id+"&shipperId="+s.shipperId,target:"_blank"}},[a("div",{staticClass:"position"},[a("span",{staticClass:"list-icon lines-sprite-icons icon-start"}),t._v(" "),a("em",[t._v(t._s(s.startCity))]),t._v(" "),a("span",{staticClass:"list-icon lines-sprite-icons icon-through"}),t._v(" "),a("span",{staticClass:"list-icon lines-sprite-icons icon-end"}),t._v(" "),a("em",[t._v(t._s(s.endCity))])])]),t._v(" "),a("div",{staticClass:"distance_total"},[t._v("[全程"),a("em",[t._v(t._s(s.distance))]),t._v("公里]")]),t._v(" "),a("div",{staticClass:"sc_num"},[a("img",{attrs:{src:"/images/list_wlzx/ll_num.png"}}),a("span",[a("i",[t._v("浏览量:"),a("em",[t._v(t._s(s.browseNumber?s.browseNumber:0))])])])]),t._v(" "),a("div",{staticClass:"view_num"},[a("img",{attrs:{src:"/images/list_wlzx/sc_num.png"}}),a("span",[a("i",[t._v("收藏量:"),a("em",[t._v(t._s(s.collectNum?s.collectNum:0))])])])])]),t._v(" "),a("li",{staticClass:"wlzx_list_1"},[a("p",{staticClass:"p1"}),t._v(" "),a("p",{staticClass:"p2"},[a("img",{attrs:{src:"/images/list_wlzx/hy_item1.png"}}),a("i",[t._v("货物：")]),a("font",[t._v(t._s(s.goodsName)+" ")])],1),t._v(" "),a("p",{staticClass:"p3"},[a("img",{attrs:{src:"/images/list_wlzx/hy_item2.png"}}),a("i",[t._v("规格：")]),t._v(" "),a("span",[t._v(t._s(s.goodsNum)),a("font",{attrs:{id:"nr0420"}},[t._v("件 | ")])],1),t._v(" "),a("span",[t._v(t._s(s.goodsWeight)),a("font",[t._v("公斤 | ")])],1),t._v(" "),a("span",[t._v(t._s(s.goodsVolume)),a("font",[t._v("立方米")])],1)])]),t._v(" "),a("li",{staticClass:"wlzx_list_2"},[a("p",{staticClass:"p3"}),t._v(" "),a("p",{staticClass:"p1"},[a("img",{attrs:{src:"/images/list_wlzx/hy_item3.png"}}),a("span",[t._v("发布者：")]),a("i",[t._v(t._s(s.companyName))])]),t._v(" "),a("p",{staticClass:"p2"},[a("img",{attrs:{src:"/images/list_wlzx/hy_item4.png"}}),a("span",[t._v("联系人：")]),a("i",[t._v(t._s(s.shipperName))])])]),t._v(" "),a("li",{staticClass:"wlzx_list_4"},[a("p",{staticClass:"p3"}),t._v(" "),a("p",{staticClass:"p1"},[a("img",{attrs:{src:"/images/list_wlzx/hy_item5.png"}}),a("span",[t._v("货源类型：")]),a("i",[t._v(t._s(0===s.orderClass?"单次急发货源":"长期稳定货源"))])]),t._v(" "),a("p",{staticClass:"p2"},[a("img",{attrs:{src:"/images/list_wlzx/hy_item6.png"}}),a("span",[t._v("发布时间：")]),a("i",[t._v(t._s(s.createTime.substring(0,16)))])])]),t._v(" "),a("li",{staticClass:"wlzx_list_3"},[a("p",{staticClass:"p1"},["AF0010403"===s.authStatus?a("img",{attrs:{src:"/images/list_wlzx/10shiming.png"}}):t._e()]),t._v(" "),a("p",{staticClass:"p2"},[s.isVip&&"1"===s.isVip?a("img",{attrs:{src:"/images/list_wlzx/11xinyong.png"}}):t._e()])]),t._v(" "),a("li",{staticClass:"wlzx_list_6"},[a("p",{staticClass:"p1"},[a("a",{attrs:{href:"/huoyuan/detail?id="+s.id+"&shipperId="+s.shipperId,target:"_blank"}},[a("input",{attrs:{readonly:"",value:"查看"}})])]),t._v(" "),a("p",{staticClass:"p2"},[s.qq?a("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin="+s.qq+"&site=qq&menu=yes",target:"_blank"}},[a("input",{attrs:{value:"QQ交谈"}})]):t._e()])])])})],2)]),t._v(" "),a("div",{staticClass:"right4"},[a("div",{staticClass:"arc_main4-content"},[t._m(22),t._v(" "),t._l(t.gldhList,function(s,i){return a("a",{key:i,staticClass:"gldh_list",attrs:{href:s.url,target:"_blank"}},[a("div",{staticClass:"img"},[a("img",{attrs:{src:s.img}})]),t._v(" "),a("div",[a("p",[t._v(t._s(s.title))]),t._v(" "),a("p",[t._v(t._s(s.subTitle))])])])})],2),t._v(" "),t._m(23),t._v(" "),a("div",{staticClass:"arc_main4-content"},[t._m(24),t._v(" "),a("div",{staticStyle:{padding:"10px"}},t._l(t.hotSearchList,function(s,i){return a("a",{key:i,staticClass:"rmsx_list",attrs:{href:s.targetLinks+"?startp="+s.startProvince+"&startc="+s.startCity+"&starta="+s.startArea+"&endp="+s.endProvince+"&endc="+s.endCity+"&enda="+s.endArea+"&carSourceType="+s.carSourceType,target:"_blank"}},[t._v("\n            "+t._s(s.title)+"\n          ")])}),0)]),t._v(" "),a("div",{staticClass:"arc_main4-content",staticStyle:{"margin-top":"20px"}},[t._m(25),t._v(" "),t._l(t.popularity,function(s,i){return a("div",{key:i,staticClass:"rc_list"},[a("a",{attrs:{href:"/member/"+s.id}},[a("div",{staticClass:"left"},[a("p",{class:{oneColor:0==i,twoColor:1==i,trihColor:2==i}},[t._v(t._s(i+1))])]),t._v(" "),i<3?a("div",{staticClass:"img"},[a("img",{attrs:{src:s.companyFile}})]):t._e(),t._v(" "),a("div",{staticClass:"right"},[a("span",[t._v(t._s(s.companyName))]),t._v(" "),a("span",{staticStyle:{float:"right"}},[t._v("人气值："),a("i",{staticStyle:{color:"red"}},[t._v(t._s(s.popularity))])])])])])})],2),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30)])]),t._v(" "),a("div",{staticClass:"arc_main4"},[a("div",{staticClass:"zx_sx1"},[a("span",{staticClass:"biaozhi1"}),a("span",[t._v("更多从广州出发的"+t._s(t.huoLabel))])]),t._v(" "),a("ul",{staticClass:"hot-cities"},t._l(t.huoLink,function(s,i){return a("li",{key:i,staticClass:"hot-cities-li"},[a("a",{staticClass:"hot-cities-a",attrs:{href:s.targetLinks+"?startp="+s.startProvince+"&startc="+s.startCity+"&starta="+s.startArea+"&endp="+s.endProvince+"&endc="+s.endCity+"&enda="+s.endArea+"&carSourceType="+s.carSourceType}},[t._v(t._s(s.title))])])}),0)]),t._v(" "),a("div",{staticClass:"arc_main4"},[a("div",{staticClass:"zx_sx1"},[a("span",{staticClass:"biaozhi1"}),a("span",[t._v(t._s(t.interesLabel))])]),t._v(" "),a("ul",{staticClass:"hot-cities"},t._l(t.interestOrder,function(s,i){return a("li",{key:i,staticClass:"hot-cities-li"},[a("a",{staticClass:"hot-cities-a",attrs:{href:s.targetLinks+"?startp="+s.startProvince+"&startc="+s.startCity+"&starta="+s.startArea+"&endp="+s.endProvince+"&endc="+s.endCity+"&enda="+s.endArea+"&carSourceType="+s.carSourceType}},[t._v(t._s(s.title))])])}),0)]),t._v(" "),a("div",{staticClass:"arc_bottom",staticStyle:{display:"none"},attrs:{id:"js011"}},[t._m(31),t._v(" "),a("div",{staticClass:"tj_list",staticStyle:{display:"none"}},[t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),a("p",{staticClass:"p02"},[a("span",[a("i",[t._v("重量：")]),a("font",{attrs:{id:"nr0915"}},[t._v("15吨")])],1),t._v(" "),a("span",[a("i",[t._v("体积：")]),a("font",{attrs:{id:"nr0916"}},[t._v("30立方米")])],1)]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"arc_top1_3"},[s("a",{attrs:{id:"search_huo",target:"_blank"}},[s("input",{staticClass:"arc_input3",attrs:{value:"搜全网"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"arc_top1_2"},[s("select",{attrs:{id:"search_type"}},[s("option",{attrs:{name:"zx"}},[this._v("找专线")]),s("option",{attrs:{name:"che"}},[this._v("找车源")]),s("option",{attrs:{name:"huo"}},[this._v("找货源")])]),this._v(" "),s("input",{staticClass:"arc_input1",attrs:{wtmap:"",placeholder:"出发地"}}),this._v(" "),s("span",[this._v("→")]),this._v(" "),s("input",{staticClass:"arc_input2",attrs:{wtmap:"",placeholder:"到达地"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"arc_top2_1"},[s("a",{attrs:{href:"/"}},[s("span",[this._v("首页")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"javascript:void(0)"}},[s("span",[this._v("更多+")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",[s("img",{staticClass:"img1",attrs:{src:"/images/list_wlzx/hy_item6.png"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",[s("img",{staticClass:"img2",attrs:{src:"/images/list_wlzx/sc_num.png"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"arc_left_2_1_1"},[s("span",[this._v("货源信息")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"collection_zx"},[s("div",{staticClass:"bt_close",attrs:{onclick:"$('.collection_zx').hide()"}},[s("img",{attrs:{src:"/images/article_wlzx/xxx.png"}})]),this._v(" "),s("div",{staticClass:"collection_zx_nr"},[s("img",{attrs:{src:"/images/article_wlzx/yes.png"}}),this._v(" "),s("span",[this._v("成功加入")]),s("a",{attrs:{id:"collection_url",target:"_blank",href:"#"}},[this._v("收藏夹")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"arc_left_2_1_1"},[s("span",[this._v("线路信息")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"arc_left_3"},[a("div",[a("img",{attrs:{src:"/images/28fast_download.png",width:"72",height:"72"}})]),t._v(" "),a("div",[t._v("\n              下载"),a("span",[t._v("【28快运APP】")]),t._v("，您可查看更多"),a("span",[t._v("广州")]),t._v("到"),a("span",[t._v("东莞")]),t._v("的货源，并可实时接 收28快运为您推荐的精品货源提醒!\n            ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"button2",attrs:{href:"javascript:;"}},[s("img",{attrs:{src:"/images/cy/03u41008 2.gif"}}),this._v("此线路上新货源提醒我")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"arc_right05"},[s("a",{staticClass:"website",attrs:{href:"#"}},[this._v("进入官网")]),this._v(" "),s("input",{staticClass:"collection_hz",staticStyle:{cursor:"pointer"},attrs:{readonly:"",value:"收藏"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"arc_right06"},[s("span",[this._v("相关认证")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/images/article_wlzx/10shiming.png"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("手机："),s("a",{staticStyle:{"list-style":"underline"}},[this._v("查看电话")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"zx_sx"},[s("span",{staticClass:"biaozhi"}),s("span",[this._v("货主综合力评估")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img"},[s("img",{attrs:{src:"/images/cy/09sj.png",width:"82",height:"82"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content-right-row",staticStyle:{clear:"both"}},[s("a",{staticClass:"button2",attrs:{href:"javascript:;"}},[s("img",{attrs:{src:"/images/cy/03u41008 2.gif"}}),this._v("帮我选择优质货源")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"zx_sx"},[s("span",{staticClass:"biaozhi"}),s("span",[this._v("货主最近货源信息")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"index_search floatl"},[s("div",{staticClass:"fl index_search_input",staticStyle:{position:"relative"},attrs:{id:"wlLineFrom"}},[s("input",{staticStyle:{height:"100%"},attrs:{"data-toggle":"city-picker","data-level":"district",type:"text",name:"",placeholder:"请选择出发地",readonly:""}})]),this._v(" "),s("em",[this._v("→")]),this._v(" "),s("div",{staticClass:"fl index_search_input",staticStyle:{position:"relative"},attrs:{id:"wlLineTo"}},[s("input",{staticStyle:{height:"100%"},attrs:{"data-toggle":"city-picker","data-level":"district",type:"text",name:"",placeholder:"请选择到达地",readonly:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"more floatr"},[s("a",{attrs:{href:"/huoyuan",target:"_blank"}},[this._v("更多>")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"middle-ad"},[s("img",{attrs:{src:"/images/cy/10banner.png",alt:"广告"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"zx_sx"},[s("span",{staticClass:"biaozhi"}),s("span",[this._v("28快运平台功能导航源")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"arc_main4-content"},[s("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"zx_sx"},[s("span",{staticClass:"biaozhi"}),s("span",[this._v("热门搜索")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"zx_sx"},[s("span",{staticClass:"biaozhi"}),s("span",[this._v("企业月人气榜")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"arc_main4-content"},[s("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"arc_main4-content"},[s("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"arc_main4-content"},[s("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"arc_main4-content"},[s("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"arc_main4-content"},[a("ul",{staticClass:"ps-list",staticStyle:{"padding-left":"30px","list-style":"square"}},[a("li",[a("div",{staticClass:"btn_span"},[a("span",[t._v("代理")]),t._v(" "),a("span",[t._v("其他")])]),t._v(" "),a("a",{attrs:{href:""}},[t._v("货运全国，一站式服务！")])]),t._v(" "),a("li",[a("div",{staticClass:"btn_span"},[a("span",[t._v("供应")]),t._v(" "),a("span",[t._v("报关行")])]),t._v(" "),a("a",{attrs:{href:""}},[t._v("长期供应香港进出口拖车报关！")])]),t._v(" "),a("li",[a("div",{staticClass:"btn_span"},[a("span",[t._v("合作")]),t._v(" "),a("span",[t._v("其他")])]),t._v(" "),a("a",{attrs:{href:""}},[t._v("货运全国，一站式服务！")])]),t._v(" "),a("li",[a("div",{staticClass:"btn_span"},[a("span",[t._v("代理")]),t._v(" "),a("span",[t._v("其他")])]),t._v(" "),a("a",{attrs:{href:""}},[t._v("货运全国，一站式服务！")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"zx_sx"},[s("span",{staticClass:"biaozhi"}),s("span",[this._v("此路线其他货源")]),s("a",{attrs:{href:"/plus/list.php?tid=2"}},[s("span",{staticClass:"arc_bottom_more"},[this._v("更多+")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"p01"},[s("a",{attrs:{id:"nr0910",target:"_blank"}},[s("span",{attrs:{id:"nr0911"}},[this._v("广东-东莞")]),s("i",[this._v("→")]),s("span",{attrs:{id:"nr0912"}},[this._v("广东-深圳")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"p03"},[s("img",{attrs:{src:"[field:global.cfg_templets_skin/]/images/04gongsi.png"}}),this._v(" "),s("span",[s("a",{attrs:{id:"nr0913",href:"/member/index.php?uid=ybyb120"}},[this._v("广州明科物流有限公司")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"p03"},[s("i",[this._v("货物名称：")]),s("span",{attrs:{id:"nr0914"}},[this._v("电子电器")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"p04"},[s("i",[this._v("数量：")]),s("span",{attrs:{id:"nr0917"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"p05"},[s("img",{attrs:{src:"[field:global.cfg_templets_skin/]/images/11xinyong.png"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"p06"},[s("a",{staticStyle:{cursor:"pointer"},attrs:{id:"nr0918",href:"Javascript:void(0)"}},[s("span",[this._v("查看 >")])])])}],!1,null,"1e0946d4",null);s.default=c.exports}}]);