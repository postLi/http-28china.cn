(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{245:function(t,e,r){var content=r(416);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("59c032f2",content,!0,{sourceMap:!1})},415:function(t,e,r){"use strict";var n=r(245);r.n(n).a},416:function(t,e,r){(t.exports=r(10)(!1)).push([t.i,".left_main[data-v-16321df0]{min-height:420px}",""])},510:function(t,e,r){"use strict";r.r(e);r(17),r(35),r(2);var n=r(4);function l(t){t.credit>=0&&t.credit<=3&&(t.starS=new Array(1)),t.credit>=4&&t.credit<=10&&(t.starS=new Array(2)),t.credit>=11&&t.credit<=40&&(t.starS=new Array(3)),t.credit>=41&&t.credit<=90&&(t.starS=new Array(4)),t.credit>=91&&t.credit<=150&&(t.starS=new Array(5)),t.credit>=151&&t.credit<=250&&(t.starB=new Array(1)),t.credit>=251&&t.credit<=500&&(t.starB=new Array(2)),t.credit>=501&&t.credit<=1e3&&(t.starB=new Array(3)),t.credit>=1001&&t.credit<=2e3&&(t.starB=new Array(4)),t.credit>=2001&&(t.starB=new Array(5))}function c(){return(c=Object(n.a)(function*(t,e){arguments.length>2&&void 0!==arguments[2]&&arguments[2];let r,n={currentPage:1,pageSize:100,parkId:e.id,comAuthStatus:e.comAuthStatus};return yield t.post("/28-web/pointNetwork/findParkNet",n).then(t=>{t.data.data.list.forEach(t=>{JSON.parse(t.productService).length>0&&(t.productService1=(t.productServiceNameList||[]).join(" ")),JSON.parse(t.otherService).length>0&&(t.otherService1=(t.otherServiceNameList||[]).join(" ")),l(t)}),200===t.data.status&&(r=t.data.data.list)}),r})).apply(this,arguments)}function o(t,e){return _.apply(this,arguments)}function _(){return(_=Object(n.a)(function*(t,e){let r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.currentPage=1,n.pageSize=100,n.parkId=e.id,yield t.post("/28-web/range/park/list/",n).then(t=>{t.data.data.list.forEach(t=>{t.transportAgingUnit=t.transportAgingUnit.replace("多","")}),200===t.data.status&&(r=t.data.data.list)}),r})).apply(this,arguments)}var d={name:"WuLiu",head:{link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/article_wlyq.css"}],script:[{src:"http://api.map.baidu.com/api?v=2.0&ak=e0abRWFWOrgmN7emYjQGPj4Z0vyTVTfo"}]},data:()=>({AF025Name:"不限",sortList:[{name:"默认排序",orderBy:"default"},{name:"交易量",orderBy:"orderDesc"},{name:"运输时效",orderBy:"transportAgingAsc"},{name:"重货价格",orderBy:"weigthPriceAsc"}],sortName:"默认排序",searchWLGS:"",searchWDKey:""}),asyncData:t=>Object(n.a)(function*(){let e=t.$axios,r=t.query,n=yield e.get("/28-web/logisticsPark/"+r.id),_="";const d=n.data.data.longitude,v=n.data.data.latitude;d&&v&&(_=d+","+v);r.id;let m=yield e.get("/28-web/logisticsCompany/excellent?pageSize=5&flag=");m.data.data.forEach(t=>{l(t)});const h=yield o(e,r,void 0),y=yield function(t,e){return c.apply(this,arguments)}(e,r);let f=yield e.get("/28-web/sysDict/getSysDictByCodeGet/AF025");return f.data.data.unshift({name:"不限",code:""}),{gatewayData:200===n.data.status?n.data.data:{},jwd:_,companysList:200===m.data.status?m.data.data:[],transportRange:h,logisticsCompany:y,AF025:200===f.data.status?f.data.data:[]}})(),mounted(){seajs.use(["../js/city-picker.data.js"],function(){seajs.use(["../js/city-picker.js"],function(){$("#checked_zx").click(function(){$(".list_left_zx").css("display","block"),$("#checked_zx").addClass("active"),$(".list_left_wangdian").css("display","none"),$("#checked_wangdian").removeClass("active")}),$("#checked_wangdian").click(function(){$(".list_left_zx").css("display","none"),$("#checked_zx").removeClass("active"),$(".list_left_wangdian").css("display","block"),$("#checked_wangdian").addClass("active")});var t=$.cookie("currentProvinceFullName"),e=$.cookie("currentAreaFullName");$("#arc_nav_a1").attr("href","/wuliu?tid=1&locationProvince="+t+"&locationCity="+e),$("#arc_nav_a1").html(e+"物流园区")})})},methods:{searchWlLine(){var t=this;return Object(n.a)(function*(){let e=[],r=[];$("#wlLineFrom .select-item").each(function(i,t){e.push($(this).text())});let n=e[0],l=e[1],c=e[2];$("#wlLineTo .select-item").each(function(i,t){r.push($(this).text())});let _=r[0],d=r[1],v=r[2];t.transportRange=yield o(t.$axios,t.$route.query,{companyName:t.searchWLGS,endArea:v,endCity:d,endProvince:_,startArea:c,startCity:l,startProvince:n})})()},flush(){var t=this;return Object(n.a)(function*(){$("#wlLineFrom input").citypicker("reset"),$("#wlLineTo input").citypicker("reset"),t.AF025Name="不限",t.sortName="默认排序",t.searchWLGS="",t.transportRange=yield o(t.$axios,t.$route.query)})()},searchWD(){window.open("/gongsi?&wangdian="+this.searchWDKey)},selectSort(t){var e=this;return Object(n.a)(function*(){let r=[],n=[];$("#wlLineFrom .select-item").each(function(i,t){r.push($(this).text())});let l=r[0],c=r[1],_=r[2];$("#wlLineTo .select-item").each(function(i,t){n.push($(this).text())});let d=n[0],v=n[1],m=n[2];e.sortName=t.name,e.transportRange=yield o(e.$axios,e.$route.query,{companyName:e.searchWLGS,endArea:m,endCity:v,endProvince:d,startArea:_,startCity:c,startProvince:l,orderBy:t.orderBy})})()},selectAF025(t){var e=this;return Object(n.a)(function*(){let r=[],n=[];$("#wlLineFrom .select-item").each(function(i,t){r.push($(this).text())});let l=r[0],c=r[1],_=r[2];$("#wlLineTo .select-item").each(function(i,t){n.push($(this).text())});let d=n[0],v=n[1],m=n[2];e.AF025Name=t.name,e.transportRange=yield o(e.$axios,e.$route.query,{companyName:e.searchWLGS,endArea:m,endCity:v,endProvince:d,startArea:_,startCity:c,startProvince:l,otherServiceCode:t.code})})()},map_init(){let map=new BMap.Map("allmap"),t=(this.jwd?this.jwd:"113.339865,23.138652").split(","),e=new BMap.Point(parseFloat(t[0]),parseFloat(t[1]));map.centerAndZoom(e,17);let marker=new BMap.Marker(e);map.addOverlay(marker),marker.setAnimation(BMAP_ANIMATION_BOUNCE),map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),map.setCurrentCity("广州"),map.enableScrollWheelZoom(!0);var r={type:BMAP_NAVIGATION_CONTROL_SMALL};map.addControl(new BMap.NavigationControl(r))},map_block(){$("#allmap").css("display","block")},seeMap(){this.map_block(),this.map_init()}}},v=(r(415),r(1)),component=Object(v.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"list_box"},[r("div",{staticClass:"list_nav"},[r("a",{attrs:{href:"/"}},[t._v("物流首页")]),t._v(">"),r("a",{attrs:{id:"arc_nav_a1",href:""}},[t._v("物流园区")]),t._v(">"),r("a",[t._v(t._s(t.gatewayData.parkName))])]),t._v(" "),r("div",{staticClass:"list_left"},[r("div",{staticClass:"left_main"},[r("div",{staticClass:"left_bt"},[r("span",[t._v(t._s(t.gatewayData.parkName))])]),t._v(" "),r("div",{staticClass:"left_nr"},[r("div",{staticClass:"left_nr_1"},[r("img",{attrs:{src:t.gatewayData.parkSignPicture?t.gatewayData.parkSignPicture:"/yuanqu/images/wlyq_pic.png",alt:""}})]),t._v(" "),r("div",{staticClass:"left_nr_2"},[r("div",{attrs:{id:"allmap",onmouseout:"$('#allmap').css('display', 'none')",onmouseover:"$('#allmap').css('display', 'block')"}}),t._v(" "),r("ul",[r("li",{staticClass:"list_yq1"},[r("img",{attrs:{src:"/images/article_wlzx/peple.png"}}),r("span",[t._v(t._s(t.gatewayData.parkContact||"暂无"))])]),t._v(" "),r("li",{staticClass:"list_yq2"},[r("img",{attrs:{src:"/images/article_wlzx/phone-ico.png"}}),r("span",[t._v(t._s(t.gatewayData.parkMobile||"暂无"))])]),t._v(" "),r("li",{staticClass:"list_yq3"},[r("span",[t._v("电话："),r("em",[t._v(t._s(t.gatewayData.parkNum||"暂无"))])])]),t._v(" "),r("li",{staticClass:"list_yq4"},[t.gatewayData.contactQq?r("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin="+t.gatewayData.contactQq+"&site=qq&menu=yes",target:"_blank"}},[r("span",[t._v("QQ："),r("em",[t._v(t._s(t.gatewayData.contactQq))])])]):t._e()]),t._v(" "),r("li",{staticClass:"list_yq5"},[r("span",[t._v("区域："),r("em",[t._v(t._s(t.gatewayData.locationProvince)+t._s(t.gatewayData.locationCity)+t._s(t.gatewayData.locationArea))])])]),t._v(" "),r("li",{staticClass:"list_yq6"},[r("span",[t._v("详细地址："),r("em",[t._v(t._s(t.gatewayData.parkAddress||"暂无"))])]),r("a",{attrs:{target:"_blank"},on:{click:function(e){return t.seeMap()}}},[t._v("[查看地图]")])])])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"left_jianjie_bt"},[r("span",{staticClass:"biaozhi"}),r("span",[t._v("园区信息")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"left_jianjie_nr"},[r("p",[t._v(t._s(t.gatewayData.parkIntroduce||"暂无园区信息"))])])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"list_left_zx"},[r("div",{staticClass:"w1036",staticStyle:{"background-color":"#fff","margin-bottom":"20px"}},[r("div",{staticClass:"select_con"},[r("dl",[r("dd",{staticStyle:{"margin-left":"-80px"}},[t._m(1),t._v(" "),r("img",{staticClass:"fl list_img",attrs:{src:"/images/02jiantou.png"}}),t._v(" "),t._m(2),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchWLGS,expression:"searchWLGS"}],staticClass:"list_input",attrs:{type:"text",placeholder:"请输入公司名称"},domProps:{value:t.searchWLGS},on:{input:function(e){e.target.composing||(t.searchWLGS=e.target.value)}}}),t._v(" "),r("input",{staticClass:"list_button",attrs:{name:"Submit2",value:"搜索",readonly:""},on:{click:function(e){return t.searchWlLine()}}}),t._v(" "),r("input",{attrs:{id:"flush",name:"Submit2",value:"重置",readonly:""},on:{click:function(e){return t.flush()}}})]),t._v(" "),r("dt",[t._v("增值服务 :")]),t._v(" "),r("dd",t._l(t.AF025,function(e,n){return r("a",{key:n,class:[t.AF025Name===e.name?"now":""],on:{click:function(r){return t.selectAF025(e)}}},[t._v(t._s(e.name))])}),0),t._v(" "),r("dt",[t._v("排序 :")]),t._v(" "),r("dd",t._l(t.sortList,function(e,n){return r("a",{key:n,class:[t.sortName===e.name?"now":""],on:{click:function(r){return t.selectSort(e)}}},[t._v(t._s(e.name))])}),0)])])]),t._v(" "),r("div",{staticClass:"w1036"},[t._m(3),t._v(" "),r("ul",{staticClass:"zx_nr ",staticStyle:{"margin-top":"0px"}},[0===t.transportRange.length?r("div",{staticClass:"list_none",staticStyle:{display:"block"}},[r("span",[t._v("暂时没有找到您要查询的信息，可以看看其他物流园区哦")]),t._v(" "),r("img",{attrs:{src:"/images/none_pic.png"}})]):t._e(),t._v(" "),t._l(t.transportRange,function(e,n){return r("li",{key:n},[r("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[r("span",{staticClass:"nr01"},[t._v(t._s(e.startCity)+t._s(e.startArea)+" → "+t._s(e.endCity)+t._s(e.endArea))])]),t._v(" "),r("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[r("span",{staticClass:"nr02"},[r("font",{staticStyle:{color:"#f00"}},[t._v(t._s(e.weightPrice||0))]),t._v("元/公斤")],1)]),t._v(" "),r("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[r("span",{staticClass:"nr03"},[r("font",{staticStyle:{color:"#f00"}},[t._v(t._s(e.lightPrice||0))]),t._v("元/方")],1)]),t._v(" "),r("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[r("span",{staticClass:"nr04"},[t._v(t._s(e.transportAging)+t._s(e.transportAgingUnit))])]),t._v(" "),r("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[r("span",{staticClass:"nr05"},[t._v(t._s(e.companyName))])]),t._v(" "),r("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[r("span",{staticClass:"nr06"},[t._v("详情")])])])})],2)]),t._v(" "),t._m(4)]),t._v(" "),r("div",{staticClass:"list_left_wangdian"},[r("div",{staticClass:"w1036",staticStyle:{"background-color":"#fff","margin-bottom":"20px"}},[r("div",{staticClass:"select_con"},[r("dl",[r("dd",{staticStyle:{"margin-left":"-80px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchWDKey,expression:"searchWDKey"}],staticClass:"list_input",attrs:{type:"text",placeholder:"请输入网点名称"},domProps:{value:t.searchWDKey},on:{input:function(e){e.target.composing||(t.searchWDKey=e.target.value)}}}),t._v(" "),r("input",{staticClass:"list_button",attrs:{value:" 搜索 ",readonly:""},on:{click:function(e){return t.searchWD()}}})]),t._v(" "),r("dt",[t._v("其他 :")]),t._v(" "),r("dd",[r("a",{staticClass:"all",class:[t.$route.query.comAuthStatus?"all":"now"],attrs:{href:"/wuliu/detail?&id="+t.$route.query.id}},[t._v("不限")]),t._v(" "),r("a",{staticClass:"shiming",class:{now:t.$route.query.comAuthStatus},attrs:{href:"/wuliu/detail?comAuthStatus=AF0010403&id="+t.$route.query.id}},[t._v("认证")])])])])]),t._v(" "),r("div",{staticClass:"w1036"},[0===t.logisticsCompany.length?r("div",{staticClass:"list_none",staticStyle:{display:"block"}},[r("span",[t._v("暂时没有找到您要查询的信息，可以看看其他物流园区哦")]),t._v(" "),r("img",{attrs:{src:"/images/none_pic.png"}})]):t._e(),t._v(" "),t._l(t.logisticsCompany,function(e,n){return r("ul",{key:n,staticClass:"wlzx_list"},[r("li",{staticClass:"wlzx_list_2"},[r("p",{staticClass:"p1"},[r("font",[t._v(t._s(e.pointName))]),e.qq?r("a",{attrs:{href:"http://wpa.qq.com/msgrd?v="+e.qq+"&uin=&site=qq&menu=yes",target:"_blank"}},[r("img",{attrs:{src:"/images/article_wlzx/15qq.gif"}})]):t._e()],1),t._v(" "),r("p",{staticClass:"p2"},[r("a",{attrs:{href:"#"}},[t._v(t._s(e.companyName))])]),t._v(" "),e.credit>=0&&e.credit<=150?r("p",{staticClass:"p3"},[r("i",[t._v("信誉：")]),t._v(" "),t._l(e.starS,function(t,e){return r("img",{key:e,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:"/images/article_wlzx/blue.gif"}})})],2):t._e(),t._v(" "),e.credit>=151?r("p",{staticClass:"p3"},[r("i",[t._v("信誉：")]),t._v(" "),t._l(e.starB,function(t,e){return r("img",{key:e,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:"/images/article_wlzx/34huanguan.gif"}})})],2):t._e(),t._v(" "),r("p",{staticClass:"p4"},[r("i",[t._v("联系人：")]),r("font",[t._v(t._s(e.contactsName))])],1),t._v(" "),r("p",{staticClass:"p5"},[r("i",[t._v("电话：")]),r("font",[t._v(t._s(e.contactsTel)+" "+t._s(e.mobile))])],1)]),t._v(" "),r("li",{staticClass:"wlzx_list_3"},[r("p",{staticClass:"p1"},[r("i",[t._v("经营范围：")]),r("span",[t._v(t._s(e.productService1))])]),t._v(" "),r("p",{staticClass:"p2"},[r("i",[t._v("增值服务：")]),r("span",[t._v(t._s(e.otherService1))])])]),t._v(" "),r("li",{staticClass:"wlzx_list_4"},["AF0010403"===e.authStatus?r("p",{staticClass:"p1"},[r("img",{attrs:{src:"/images/10shiming.png"}})]):t._e(),t._v(" "),1===e.isVip?r("p",{staticClass:"p2"},[r("img",{attrs:{src:"/images/11xinyong.png"}})]):t._e(),t._v(" "),e.collateral>0?r("p",{staticClass:"p3"},[r("img",{attrs:{src:"/images/12danbao.png"}})]):t._e()]),t._v(" "),r("li",{staticClass:"wlzx_list_6"},[r("p",{staticClass:"p1"},[r("a",{attrs:{href:"/create/order?&uid="+e.account+"&publishId="+e.companyId,target:"_blank"}},[r("input",{attrs:{value:"下单"}})])]),r("p",{staticClass:"p2"},[r("a",{attrs:{href:"/member/"+e.companyId,target:"_blank"}},[r("input",{attrs:{value:"查看官网"}})])]),r("p",{staticClass:"p3"})])])})],2),t._v(" "),t._m(5)])]),t._v(" "),r("div",{staticClass:"list_right"},[t._m(6),t._v(" "),0==t.companysList.length||null==t.companysList?r("div",{staticClass:"tj_none",staticStyle:{display:"block"}},[r("span",[t._v("没有相关承运商推荐")])]):r("div",t._l(t.companysList,function(e,n){return r("div",{key:n,staticClass:"tj_list tj_list0"},[r("p",{staticClass:"p1"},[r("a",{attrs:{href:"/member/"+e.id,target:"_blank"}},[r("span",[t._v(t._s(e.companyName))])])]),t._v(" "),e.credit>=0&&e.credit<=150?r("p",{staticClass:"p2"},t._l(e.starS,function(t,e){return r("img",{key:e,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:"/images/article_wlzx/blue.gif"}})}),0):t._e(),t._v(" "),e.credit>=151?r("p",{staticClass:"p2"},t._l(e.starB,function(t,e){return r("img",{key:e,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:"/images/article_wlzx/34huanguan.gif"}})}),0):t._e(),t._v(" "),r("p",{staticClass:"p3"},[r("i",{attrs:{"data-v-63732202":""}},[t._v("联系人：")]),r("font",[t._v(t._s(e.contactsName||"暂无"))])],1),t._v(" "),r("p",{staticClass:"p4"},[r("i",[t._v("电话：")]),r("font",[t._v(" "+t._s(e.mobile||"暂无"))])],1),t._v(" "),r("p",{staticClass:"p5"},[r("i",{attrs:{"data-v-63732202":""}},[t._v("地址：")]),r("font",[t._v(t._s(e.address||"暂无"))])],1),t._v(" "),r("p",{staticClass:"p6"},[r("a",{attrs:{href:"/member/"+e.id,target:"_blank"}},[r("span",{attrs:{"data-v-63732202":""}},[t._v("查看 >")])])])])}),0)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list_tiaoj"},[e("span",{staticClass:"active",attrs:{id:"checked_zx"}},[this._v("物流专线")]),e("span",{attrs:{id:"checked_wangdian"}},[this._v("物流网点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"wlLineFrom"}},[e("input",{staticStyle:{height:"100%"},attrs:{name:"cfd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入出发地"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"wlLineTo"}},[e("input",{staticStyle:{height:"100%"},attrs:{name:"ddd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入到达地"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dl",{staticClass:"zx_bt"},[r("dd",{staticClass:"bt01"},[t._v("出发地 → 到达地")]),t._v(" "),r("dd",{staticClass:"bt02"},[t._v("重货价格")]),t._v(" "),r("dd",{staticClass:"bt03"},[t._v("轻货价格")]),t._v(" "),r("dd",{staticClass:"bt04"},[t._v("时效")]),t._v(" "),r("dd",{staticClass:"bt05"},[t._v("物流公司")]),t._v(" "),r("dd",{staticClass:"bt06"},[t._v("操作")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"160px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination1"}}),this._v(" "),e("div",{staticClass:"info fl"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"170px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination2"}}),this._v(" "),e("div",{staticClass:"info fl"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("承运商推荐")])])}],!1,null,"16321df0",null);e.default=component.exports}}]);