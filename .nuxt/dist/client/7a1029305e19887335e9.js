(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{294:function(t,e,r){var content=r(467);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("3bbd3389",content,!0,{sourceMap:!1})},466:function(t,e,r){"use strict";var n=r(294);r.n(n).a},467:function(t,e,r){(t.exports=r(16)(!1)).push([t.i,".left_main[data-v-5bb18c14]{min-height:420px}",""])},563:function(t,e,r){"use strict";r.r(e);r(29),r(59),r(6),r(58);var n=r(8);function c(t){t.credit>=0&&t.credit<=3&&(t.starS=new Array(1)),t.credit>=4&&t.credit<=10&&(t.starS=new Array(2)),t.credit>=11&&t.credit<=40&&(t.starS=new Array(3)),t.credit>=41&&t.credit<=90&&(t.starS=new Array(4)),t.credit>=91&&t.credit<=150&&(t.starS=new Array(5)),t.credit>=151&&t.credit<=250&&(t.starB=new Array(1)),t.credit>=251&&t.credit<=500&&(t.starB=new Array(2)),t.credit>=501&&t.credit<=1e3&&(t.starB=new Array(3)),t.credit>=1001&&t.credit<=2e3&&(t.starB=new Array(4)),t.credit>=2001&&(t.starB=new Array(5))}function l(t,e){return o.apply(this,arguments)}function o(){return(o=Object(n.a)(regeneratorRuntime.mark(function t(e,r){var n,l,o=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o.length>2&&void 0!==o[2]?o[2]:{parkId:1,defaultSort:1},l={currentPage:1,pageSize:100,parkId:r.id,comAuthStatus:r.comAuthStatus},t.next=4,e.post("/28-web/pointNetwork/findParkNet",l).then(function(t){200===t.data.status&&(t.data.data.list.forEach(function(t){t.productService&&(t.productService1=(t.productServiceNameList||[]).join(" ")),t.otherService&&(t.otherService1=(t.otherServiceNameList||[]).join(" ")),c(t)}),n=t.data.data.list)});case 4:return t.abrupt("return",n);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function _(t,e){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark(function t(e,r){var n,c,l,o=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>2&&void 0!==o[2]?o[2]:{},(l=n).currentPage=1,l.pageSize=100,l.parkId=r.id,t.next=7,e.post("/28-web/range/park/list/",l).then(function(t){200===t.data.status&&(t.data.data.list.forEach(function(t){t.transportAgingUnit=t.transportAgingUnit.replace("多","")}),c=t.data.data.list)});case 7:return t.abrupt("return",c);case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)}var v={name:"WuLiu",head:{link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/article_wlyq.css"}],script:[{src:"http://api.map.baidu.com/api?v=2.0&ak=e0abRWFWOrgmN7emYjQGPj4Z0vyTVTfo"}]},data:function(){return{AF025Name:"不限",sortList:[{name:"默认排序",orderBy:"default"},{name:"交易量",orderBy:"orderDesc"},{name:"运输时效",orderBy:"transportAgingAsc"},{name:"重货价格",orderBy:"weigthPriceAsc"}],sortName:"默认排序",searchWLGS:"",searchWDKey:""}},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,o,d,v,h,m,f,y,C;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.query,t.next=3,r.get("/28-web/logisticsPark/"+n.id);case 3:return o=t.sent,d="",v="",h="",o.data.data&&(v=o.data.data.longitude,h=o.data.data.latitude),v&&h&&(d=v+","+h),{currentPage:1,pageSize:100,vo:{parkId:n.id}},"",t.next=13,r.get("/28-web/logisticsCompany/excellent?pageSize=5&flag=");case 13:return(m=t.sent).data.data.forEach(function(t){c(t)}),t.next=17,_(r,n,void 0);case 17:return f=t.sent,t.next=20,l(r,n);case 20:return y=t.sent,t.next=23,r.get("/28-web/sysDict/getSysDictByCodeGet/AF025");case 23:return(C=t.sent).data.data.unshift({name:"不限",code:""}),t.abrupt("return",{gatewayData:200===o.data.status?o.data.data:{},jwd:d,companysList:200===m.data.status?m.data.data:[],transportRange:f||[],logisticsCompany:y||[],AF025:200===C.data.status?C.data.data:[]});case 26:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){seajs.use(["../js/city-picker.data.js"],function(){seajs.use(["../js/city-picker.js"],function(){$("#checked_zx").click(function(){$(".list_left_zx").css("display","block"),$("#checked_zx").addClass("active"),$(".list_left_wangdian").css("display","none"),$("#checked_wangdian").removeClass("active")}),$("#checked_wangdian").click(function(){$(".list_left_zx").css("display","none"),$("#checked_zx").removeClass("active"),$(".list_left_wangdian").css("display","block"),$("#checked_wangdian").addClass("active")});var t=$.cookie("currentProvinceFullName"),e=$.cookie("currentAreaFullName");$("#arc_nav_a1").attr("href","/wuliu?tid=1&locationProvince="+t+"&locationCity="+e),$("#arc_nav_a1").html(e+"物流园区")})})},methods:{searchWlLine:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n,c,l,o,d,v;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],r=[],$("#wlLineFrom .select-item").each(function(i,t){e.push($(this).text())}),n=e[0],c=e[1],l=e[2],$("#wlLineTo .select-item").each(function(i,t){r.push($(this).text())}),o=r[0],d=r[1],v=r[2],t.next=11,_(this.$axios,this.$route.query,{companyName:this.searchWLGS,endArea:v,endCity:d,endProvince:o,startArea:l,startCity:c,startProvince:n,otherServiceCode:this.AF025Code,orderBy:this.sortCode});case 11:this.transportRange=t.sent;case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),flush:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return $("#wlLineFrom input").citypicker("reset"),$("#wlLineTo input").citypicker("reset"),this.AF025Name="不限",this.sortName="默认排序",this.searchWLGS="",t.next=7,_(this.$axios,this.$route.query);case 7:this.transportRange=t.sent;case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),searchWD:function(){window.open("/gongsi?&wangdian="+this.searchWDKey)},selectSort:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,c,l,o,d,v,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],n=[],$("#wlLineFrom .select-item").each(function(i,t){r.push($(this).text())}),c=r[0],l=r[1],o=r[2],$("#wlLineTo .select-item").each(function(i,t){n.push($(this).text())}),d=n[0],v=n[1],h=n[2],this.sortName=e.name,this.sortCode=e.orderBy,t.next=13,_(this.$axios,this.$route.query,{companyName:this.searchWLGS,endArea:h,endCity:v,endProvince:d,startArea:o,startCity:l,startProvince:c,orderBy:e.orderBy});case 13:this.transportRange=t.sent;case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),selectAF025:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,c,l,o,d,v,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],n=[],$("#wlLineFrom .select-item").each(function(i,t){r.push($(this).text())}),c=r[0],l=r[1],o=r[2],$("#wlLineTo .select-item").each(function(i,t){n.push($(this).text())}),d=n[0],v=n[1],h=n[2],this.AF025Name=e.name,this.AF025Code=e.code,t.next=13,_(this.$axios,this.$route.query,{companyName:this.searchWLGS,endArea:h,endCity:v,endProvince:d,startArea:o,startCity:l,startProvince:c,otherServiceCode:e.code});case 13:this.transportRange=t.sent;case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),map_init:function(){var map=new BMap.Map("allmap"),t=(this.jwd?this.jwd:"113.339865,23.138652").split(","),e=new BMap.Point(parseFloat(t[0]),parseFloat(t[1]));map.centerAndZoom(e,17);var marker=new BMap.Marker(e);map.addOverlay(marker),marker.setAnimation(BMAP_ANIMATION_BOUNCE),map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),map.setCurrentCity("广州"),map.enableScrollWheelZoom(!0);var r={type:BMAP_NAVIGATION_CONTROL_SMALL};map.addControl(new BMap.NavigationControl(r))},map_block:function(){$("#allmap").css("display","block")},seeMap:function(){this.map_block(),this.map_init()}}},h=(r(466),r(1)),component=Object(h.a)(v,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"list_box"},[r("div",{staticClass:"list_nav"},[r("a",{attrs:{href:"/"}},[t._v("物流首页")]),t._v(">"),r("a",{attrs:{id:"arc_nav_a1",href:""}},[t._v("物流园区")]),t._v(">"),r("a",[t._v(t._s(t.gatewayData.parkName))])]),t._v(" "),r("div",{staticClass:"list_left"},[r("div",{staticClass:"left_main"},[r("div",{staticClass:"left_bt"},[r("span",[t._v(t._s(t.gatewayData.parkName))])]),t._v(" "),r("div",{staticClass:"left_nr"},[r("div",{staticClass:"left_nr_1"},[r("img",{attrs:{src:t.gatewayData.parkSignPicture?t.gatewayData.parkSignPicture:"/yuanqu/images/wlyq_pic.png",alt:""}})]),t._v(" "),r("div",{staticClass:"left_nr_2"},[r("div",{attrs:{id:"allmap",onmouseout:"$('#allmap').css('display', 'none')",onmouseover:"$('#allmap').css('display', 'block')"}}),t._v(" "),r("ul",[r("li",{staticClass:"list_yq1"},[r("img",{attrs:{src:"/images/article_wlzx/peple.png"}}),r("span",[t._v(t._s(t.gatewayData.parkContact||"暂无"))])]),t._v(" "),r("li",{staticClass:"list_yq2"},[r("img",{attrs:{src:"/images/article_wlzx/phone-ico.png"}}),r("span",[t._v(t._s(t.gatewayData.parkMobile||"暂无"))])]),t._v(" "),r("li",{staticClass:"list_yq3"},[r("span",[t._v("电话："),r("em",[t._v(t._s(t.gatewayData.parkNum||"暂无"))])])]),t._v(" "),r("li",{staticClass:"list_yq4"},[t.gatewayData.contactQq?r("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin="+t.gatewayData.contactQq+"&site=qq&menu=yes",target:"_blank"}},[r("span",[t._v("QQ："),r("em",[t._v(t._s(t.gatewayData.contactQq))])])]):t._e()]),t._v(" "),r("li",{staticClass:"list_yq5"},[r("span",[t._v("区域："),r("em",[t._v(t._s(t.gatewayData.locationProvince)+t._s(t.gatewayData.locationCity)+t._s(t.gatewayData.locationArea))])])]),t._v(" "),r("li",{staticClass:"list_yq6"},[r("span",[t._v("详细地址："),r("em",[t._v(t._s(t.gatewayData.parkAddress||"暂无"))])]),r("a",{attrs:{target:"_blank"},on:{click:function(e){return t.seeMap()}}},[t._v("[查看地图]")])])])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"left_jianjie_bt"},[r("span",{staticClass:"biaozhi"}),r("span",[t._v("园区信息")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"left_jianjie_nr"},[r("p",[t._v(t._s(t.gatewayData.parkIntroduce||"暂无园区信息"))])])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"list_left_zx"},[r("div",{staticClass:"w1036",staticStyle:{"background-color":"#fff","margin-bottom":"20px"}},[r("div",{staticClass:"select_con"},[r("dl",[r("dd",{staticStyle:{"margin-left":"-80px"}},[t._m(1),t._v(" "),r("img",{staticClass:"fl list_img",attrs:{src:"/images/02jiantou.png"}}),t._v(" "),t._m(2),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchWLGS,expression:"searchWLGS"}],staticClass:"list_input",attrs:{type:"text",placeholder:"请输入公司名称"},domProps:{value:t.searchWLGS},on:{input:function(e){e.target.composing||(t.searchWLGS=e.target.value)}}}),t._v(" "),r("input",{staticClass:"list_button",attrs:{name:"Submit2",value:"搜索",readonly:""},on:{click:function(e){return t.searchWlLine()}}}),t._v(" "),r("input",{attrs:{id:"flush",name:"Submit2",value:"重置",readonly:""},on:{click:function(e){return t.flush()}}})]),t._v(" "),r("dt",[t._v("增值服务 :")]),t._v(" "),r("dd",t._l(t.AF025,function(e,n){return r("a",{key:n,class:[t.AF025Name===e.name?"now":""],on:{click:function(r){return t.selectAF025(e)}}},[t._v(t._s(e.name))])}),0),t._v(" "),r("dt",[t._v("排序 :")]),t._v(" "),r("dd",t._l(t.sortList,function(e,n){return r("a",{key:n,class:[t.sortName===e.name?"now":""],on:{click:function(r){return t.selectSort(e)}}},[t._v(t._s(e.name))])}),0)])])]),t._v(" "),r("div",{staticClass:"w1036"},[t._m(3),t._v(" "),r("ul",{staticClass:"zx_nr ",staticStyle:{"margin-top":"0px"}},[0===t.transportRange.length?r("div",{staticClass:"list_none",staticStyle:{display:"block"}},[r("span",[t._v("暂时没有找到您要查询的信息，可以看看其他物流园区哦")]),t._v(" "),r("img",{attrs:{src:"/images/none_pic.png"}})]):t._e(),t._v(" "),t._l(t.transportRange,function(e,n){return r("li",{key:n},[r("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[r("span",{staticClass:"nr01"},[t._v(t._s(e.startCity)+t._s(e.startArea)+" → "+t._s(e.endCity)+t._s(e.endArea))])]),t._v(" "),r("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[r("span",{staticClass:"nr02"},[r("font",{staticStyle:{color:"#f00"}},[t._v(t._s(e.weightPrice||0))]),t._v("元/公斤")],1)]),t._v(" "),r("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[r("span",{staticClass:"nr03"},[r("font",{staticStyle:{color:"#f00"}},[t._v(t._s(e.lightPrice||0))]),t._v("元/方")],1)]),t._v(" "),r("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[r("span",{staticClass:"nr04"},[t._v(t._s(e.transportAging)+t._s(e.transportAgingUnit))])]),t._v(" "),r("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[r("span",{staticClass:"nr05"},[t._v(t._s(e.companyName))])]),t._v(" "),r("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[r("span",{staticClass:"nr06"},[t._v("详情")])])])})],2)]),t._v(" "),t._m(4)]),t._v(" "),r("div",{staticClass:"list_left_wangdian"},[r("div",{staticClass:"w1036",staticStyle:{"background-color":"#fff","margin-bottom":"20px"}},[r("div",{staticClass:"select_con"},[r("dl",[r("dd",{staticStyle:{"margin-left":"-80px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchWDKey,expression:"searchWDKey"}],staticClass:"list_input",attrs:{type:"text",placeholder:"请输入网点名称"},domProps:{value:t.searchWDKey},on:{input:function(e){e.target.composing||(t.searchWDKey=e.target.value)}}}),t._v(" "),r("input",{staticClass:"list_button",attrs:{value:" 搜索 ",readonly:""},on:{click:function(e){return t.searchWD()}}})]),t._v(" "),r("dt",[t._v("其他 :")]),t._v(" "),r("dd",[r("a",{staticClass:"all",class:[t.$route.query.comAuthStatus?"all":"now"],attrs:{href:"/wuliu/detail?&id="+t.$route.query.id}},[t._v("不限")]),t._v(" "),r("a",{staticClass:"shiming",class:{now:t.$route.query.comAuthStatus},attrs:{href:"/wuliu/detail?comAuthStatus=AF0010403&id="+t.$route.query.id}},[t._v("认证")])])])])]),t._v(" "),r("div",{staticClass:"w1036"},[0===t.logisticsCompany.length?r("div",{staticClass:"list_none",staticStyle:{display:"block"}},[r("span",[t._v("暂时没有找到您要查询的信息，可以看看其他物流园区哦")]),t._v(" "),r("img",{attrs:{src:"/images/none_pic.png"}})]):t._e(),t._v(" "),t._l(t.logisticsCompany,function(e,n){return r("ul",{key:n,staticClass:"wlzx_list"},[r("li",{staticClass:"wlzx_list_2"},[r("p",{staticClass:"p1"},[r("font",[t._v(t._s(e.pointName))]),e.qq?r("a",{attrs:{href:"http://wpa.qq.com/msgrd?v="+e.qq+"&uin=&site=qq&menu=yes",target:"_blank"}},[r("img",{attrs:{src:"/images/article_wlzx/15qq.gif"}})]):t._e()],1),t._v(" "),r("p",{staticClass:"p2"},[r("a",{attrs:{href:"#"}},[t._v(t._s(e.companyName))])]),t._v(" "),e.credit>=0&&e.credit<=150?r("p",{staticClass:"p3"},[r("i",[t._v("信誉：")]),t._v(" "),t._l(e.starS,function(t,e){return r("img",{key:e,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:"/images/article_wlzx/blue.gif"}})})],2):t._e(),t._v(" "),e.credit>=151?r("p",{staticClass:"p3"},[r("i",[t._v("信誉：")]),t._v(" "),t._l(e.starB,function(t,e){return r("img",{key:e,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:"/images/article_wlzx/34huanguan.gif"}})})],2):t._e(),t._v(" "),r("p",{staticClass:"p4"},[r("i",[t._v("联系人：")]),r("font",[t._v(t._s(e.contactsName))])],1),t._v(" "),r("p",{staticClass:"p5"},[r("i",[t._v("电话：")]),r("font",[t._v(t._s(e.contactsTel)+" "+t._s(e.mobile))])],1)]),t._v(" "),r("li",{staticClass:"wlzx_list_3"},[r("p",{staticClass:"p1"},[r("i",[t._v("经营范围：")]),r("span",[t._v(t._s(e.productService1))])]),t._v(" "),r("p",{staticClass:"p2"},[r("i",[t._v("增值服务：")]),r("span",[t._v(t._s(e.otherService1))])])]),t._v(" "),r("li",{staticClass:"wlzx_list_4"},["AF0010403"===e.authStatus?r("p",{staticClass:"p1"},[r("img",{attrs:{src:"/images/10shiming.png"}})]):t._e(),t._v(" "),1===e.isVip?r("p",{staticClass:"p2"},[r("img",{attrs:{src:"/images/11xinyong.png"}})]):t._e(),t._v(" "),e.collateral>0?r("p",{staticClass:"p3"},[r("img",{attrs:{src:"/images/12danbao.png"}})]):t._e()]),t._v(" "),r("li",{staticClass:"wlzx_list_6"},[r("p",{staticClass:"p1"},[r("a",{attrs:{href:"/create/order?&uid="+e.account+"&publishId="+e.companyId,target:"_blank"}},[r("input",{attrs:{value:"下单"}})])]),r("p",{staticClass:"p2"},[r("a",{attrs:{href:"/member/"+e.companyId,target:"_blank"}},[r("input",{attrs:{value:"查看官网"}})])]),r("p",{staticClass:"p3"})])])})],2),t._v(" "),t._m(5)])]),t._v(" "),r("div",{staticClass:"list_right"},[t._m(6),t._v(" "),0==t.companysList.length||null==t.companysList?r("div",{staticClass:"tj_none",staticStyle:{display:"block"}},[r("span",[t._v("没有相关承运商推荐")])]):r("div",t._l(t.companysList,function(e,n){return r("div",{key:n,staticClass:"tj_list tj_list0"},[r("p",{staticClass:"p1"},[r("a",{attrs:{href:"/member/"+e.id,title:e.companyName,target:"_blank"}},[r("span",[t._v(t._s(e.companyName))])])]),t._v(" "),e.credit>=0&&e.credit<=150?r("p",{staticClass:"p2"},t._l(e.starS,function(t,e){return r("img",{key:e,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:"/images/article_wlzx/blue.gif"}})}),0):t._e(),t._v(" "),e.credit>=151?r("p",{staticClass:"p2"},t._l(e.starB,function(t,e){return r("img",{key:e,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:"/images/article_wlzx/34huanguan.gif"}})}),0):t._e(),t._v(" "),r("p",{staticClass:"p3"},[r("i",{attrs:{"data-v-63732202":""}},[t._v("联系人：")]),r("font",[t._v(t._s(e.contactsName||"暂无"))])],1),t._v(" "),r("p",{staticClass:"p4"},[r("i",[t._v("电话：")]),r("font",[t._v(" "+t._s(e.mobile||"暂无"))])],1),t._v(" "),r("p",{staticClass:"p5"},[r("i",{attrs:{"data-v-63732202":""}},[t._v("地址：")]),r("font",[t._v(t._s(e.address||"暂无"))])],1),t._v(" "),r("p",{staticClass:"p6"},[r("a",{attrs:{href:"/member/"+e.id,target:"_blank"}},[r("span",{attrs:{"data-v-63732202":""}},[t._v("查看 >")])])])])}),0)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list_tiaoj"},[e("span",{staticClass:"active",attrs:{id:"checked_zx"}},[this._v("物流专线")]),e("span",{attrs:{id:"checked_wangdian"}},[this._v("物流网点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"wlLineFrom"}},[e("input",{staticStyle:{height:"100%"},attrs:{name:"cfd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入出发地"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"wlLineTo"}},[e("input",{staticStyle:{height:"100%"},attrs:{name:"ddd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入到达地"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dl",{staticClass:"zx_bt"},[r("dd",{staticClass:"bt01"},[t._v("出发地 → 到达地")]),t._v(" "),r("dd",{staticClass:"bt02"},[t._v("重货价格")]),t._v(" "),r("dd",{staticClass:"bt03"},[t._v("轻货价格")]),t._v(" "),r("dd",{staticClass:"bt04"},[t._v("时效")]),t._v(" "),r("dd",{staticClass:"bt05"},[t._v("物流公司")]),t._v(" "),r("dd",{staticClass:"bt06"},[t._v("操作")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"160px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination1"}}),this._v(" "),e("div",{staticClass:"info fl"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"170px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination2"}}),this._v(" "),e("div",{staticClass:"info fl"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("承运商推荐")])])}],!1,null,"5bb18c14",null);e.default=component.exports}}]);