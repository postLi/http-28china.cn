(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{206:function(t,e,r){t.exports=r.p+"img/58a2773.png"},345:function(t,e,r){t.exports=r.p+"img/6ad6f1a.gif"},346:function(t,e,r){t.exports=r.p+"img/d7cb4dd.gif"},487:function(t,e,r){t.exports=r.p+"img/b4e72d6.png"},488:function(t,e,r){t.exports=r.p+"img/7dffb10.png"},489:function(t,e,r){t.exports=r.p+"img/7c0cfc9.png"},490:function(t,e,r){t.exports=r.p+"img/017cd2b.gif"},491:function(t,e,r){t.exports=r.p+"img/92f339f.png"},492:function(t,e,r){t.exports=r.p+"img/9cbef05.png"},493:function(t,e,r){t.exports=r.p+"img/70e28de.png"},572:function(t,e,r){"use strict";r.r(e);r(13),r(18);var n=r(5);function c(t){t.credit>=0&&t.credit<=3&&(t.starS=new Array(1)),t.credit>=4&&t.credit<=10&&(t.starS=new Array(2)),t.credit>=11&&t.credit<=40&&(t.starS=new Array(3)),t.credit>=41&&t.credit<=90&&(t.starS=new Array(4)),t.credit>=91&&t.credit<=150&&(t.starS=new Array(5)),t.credit>=151&&t.credit<=250&&(t.starB=new Array(1)),t.credit>=251&&t.credit<=500&&(t.starB=new Array(2)),t.credit>=501&&t.credit<=1e3&&(t.starB=new Array(3)),t.credit>=1001&&t.credit<=2e3&&(t.starB=new Array(4)),t.credit>=2001&&(t.starB=new Array(5))}function l(){return(l=Object(n.a)(function*(t,e){let r,n={currentPage:1,pageSize:100,vo:arguments.length>2&&void 0!==arguments[2]?arguments[2]:{parkId:1,defaultSort:1}};return yield t.post("/aflc-portal/portalt/aflclogisticspark/v1/Gateway/getLogisticsCompany/"+e.id,n).then(t=>{t.data.data.list.forEach(t=>{JSON.parse(t.productService).length>0&&(t.productService1="\n        ".concat(JSON.parse(t.productService)[0],"\n        ").concat(JSON.parse(t.productService)[1],"\n        ").concat(JSON.parse(t.productService)[2])),JSON.parse(t.otherService).length>0&&(t.otherService1="\n        ".concat(JSON.parse(t.otherService)[0],"\n        ").concat(JSON.parse(t.otherService)[1],"\n        ").concat(JSON.parse(t.otherService)[2])),c(t)}),200===t.data.status&&(r=t.data.data.list)}),r})).apply(this,arguments)}function o(t,e){return _.apply(this,arguments)}function _(){return(_=Object(n.a)(function*(t,e){let r,n={currentPage:1,pageSize:100,vo:arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}};return yield t.post("/aflc-portal/portalt/aflclogisticspark/v1/Gateway/getTransportRange/"+e.id,n).then(t=>{t.data.data.list.forEach(t=>{t.transportAgingUnit=t.transportAgingUnit.replace("多","")}),200===t.data.status&&(r=t.data.data.list)}),r})).apply(this,arguments)}var d={name:"WuLiu",head:{link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/article_wlyq.css"}],script:[{src:"http://api.map.baidu.com/api?v=2.0&ak=e0abRWFWOrgmN7emYjQGPj4Z0vyTVTfo"}]},data:()=>({AF025Name:"不限",sortList:[{name:"默认排序",vo:{defaultSort:1}},{name:"交易量",vo:{orderNumber:1}},{name:"运输时效",vo:{transportAging:1}},{name:"重货价格",vo:{weigthPrice:1}}],sortName:"默认排序",searchWLGS:"",searchWDKey:""}),asyncData:t=>Object(n.a)(function*(){let e=t.$axios,r=t.query,n=yield e.get("/28-web/logisticsPark/"+r.id),_="";const d=n.data.data.longitude,v=n.data.data.latitude;d&&v&&(_=d+","+v);let m={currentPage:1,pageSize:100,vo:{parkId:r.id}},y=yield e.post("/aflc-portal/portalt/aflcLogisticsCompany/v1/recommendCompanys",m);y.data.data.list.forEach(t=>{c(t)});const f=yield o(e,r),h=yield function(t,e){return l.apply(this,arguments)}(e,r);let C=yield e.get("/aflc-common/sysDict/getSysDictByCodeGet/AF025");return C.data.data.unshift({name:"不限",code:""}),{gatewayData:200===n.data.status?n.data.data:{},jwd:_,companysList:200===y.data.status?y.data.data.list:[],transportRange:f,logisticsCompany:h,AF025:200===C.data.status?C.data.data:[]}})(),mounted(){seajs.use(["../js/city-picker.data.js"],function(){seajs.use(["../js/city-picker.js"],function(){$("#checked_zx").click(function(){$(".list_left_zx").css("display","block"),$("#checked_zx").addClass("active"),$(".list_left_wangdian").css("display","none"),$("#checked_wangdian").removeClass("active")}),$("#checked_wangdian").click(function(){$(".list_left_zx").css("display","none"),$("#checked_zx").removeClass("active"),$(".list_left_wangdian").css("display","block"),$("#checked_wangdian").addClass("active")});var t=$.cookie("currentProvinceFullName"),e=$.cookie("currentAreaFullName");$("#arc_nav_a1").attr("href","/wuliu?tid=1&locationProvince="+t+"&locationCity="+e),$("#arc_nav_a1").html(e+"物流园区")})})},methods:{searchWlLine(){var t=this;return Object(n.a)(function*(){let e=[],r=[];$("#wlLineFrom .select-item").each(function(i,t){e.push($(this).text())});let n=e[0],c=e[1],l=e[2];$("#wlLineTo .select-item").each(function(i,t){r.push($(this).text())});let _=r[0],d=r[1],v=r[2],m={companyName:t.searchWLGS,endArea:v,endCity:d,endProvince:_,startArea:l,startCity:c,startProvince:n};t.transportRange=yield o(t.$axios,t.$route.query,m)})()},flush(){var t=this;return Object(n.a)(function*(){$("#wlLineFrom input").citypicker("reset"),$("#wlLineTo input").citypicker("reset"),t.AF025Name="不限",t.sortName="默认排序",t.searchWLGS="",t.transportRange=yield o(t.$axios,t.$route.query)})()},searchWD(){window.open("/gongsi?&wangdian="+this.searchWDKey)},selectSort(t){var e=this;return Object(n.a)(function*(){e.sortName=t.name,e.transportRange=yield o(e.$axios,e.$route.query,t.vo)})()},selectAF025(t){var e=this;return Object(n.a)(function*(){e.AF025Name=t.name,e.transportRange=yield o(e.$axios,e.$route.query,{otherServiceCode:t.code})})()},map_init(){let map=new BMap.Map("allmap"),t=(this.jwd?this.jwd:"113.339865,23.138652").split(","),e=new BMap.Point(parseFloat(t[0]),parseFloat(t[1]));map.centerAndZoom(e,17);let marker=new BMap.Marker(e);map.addOverlay(marker),marker.setAnimation(BMAP_ANIMATION_BOUNCE),map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),map.setCurrentCity("广州"),map.enableScrollWheelZoom(!0);var r={type:BMAP_NAVIGATION_CONTROL_SMALL};map.addControl(new BMap.NavigationControl(r))},map_block(){$("#allmap").css("display","block")},seeMap(){this.map_block(),this.map_init()}}},v=r(0),component=Object(v.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"list_box"},[n("div",{staticClass:"list_nav"},[n("a",{attrs:{href:"/"}},[t._v("物流首页")]),t._v(">"),n("a",{attrs:{id:"arc_nav_a1",href:""}},[t._v("物流园区")]),t._v(">"),n("a",[t._v(t._s(t.gatewayData.parkName))])]),t._v(" "),n("div",{staticClass:"list_left"},[n("div",{staticClass:"left_main"},[n("div",{staticClass:"left_bt"},[n("span",[t._v(t._s(t.gatewayData.parkName))])]),t._v(" "),n("div",{staticClass:"left_nr"},[n("div",{staticClass:"left_nr_1"},[n("img",{attrs:{src:t.gatewayData.parkSignPicture?t.gatewayData.parkSignPicture:"../../static/images/article_wlzx/wlyq_pic.png"}})]),t._v(" "),n("div",{staticClass:"left_nr_2"},[n("div",{attrs:{id:"allmap",onmouseout:"$('#allmap').css('display', 'none')",onmouseover:"$('#allmap').css('display', 'block')"}}),t._v(" "),n("ul",[n("li",{staticClass:"list_yq1"},[n("img",{attrs:{src:r(487)}}),n("span",[t._v(t._s(t.gatewayData.parkContact))])]),t._v(" "),n("li",{staticClass:"list_yq2"},[n("img",{attrs:{src:r(488)}}),n("span",[t._v(t._s(t.gatewayData.parkMobile))])]),t._v(" "),n("li",{staticClass:"list_yq3"},[n("span",[t._v("电话："),n("em",[t._v(t._s(t.gatewayData.parkNum))])])]),t._v(" "),n("li",{staticClass:"list_yq4"},[t.gatewayData.contactQq?n("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin="+t.gatewayData.contactQq+"&site=qq&menu=yes",target:"_blank"}},[n("span",[t._v("QQ："),n("em",[t._v(t._s(t.gatewayData.contactQq))])])]):t._e()]),t._v(" "),n("li",{staticClass:"list_yq5"},[n("span",[t._v("区域："),n("em",[t._v(t._s(t.gatewayData.locationProvince)+t._s(t.gatewayData.locationCity)+t._s(t.gatewayData.locationArea))])])]),t._v(" "),n("li",{staticClass:"list_yq6"},[n("span",[t._v("详细地址："),n("em",[t._v(t._s(t.gatewayData.parkAddress))])]),n("a",{attrs:{target:"_blank"},on:{click:function(e){return t.seeMap()}}},[t._v("[查看地图]")])])])])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"left_jianjie_nr"},[n("p",[t._v(t._s(t.gatewayData.parkIntroduce))])])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"list_left_zx"},[n("div",{staticClass:"w1036",staticStyle:{"background-color":"#fff","margin-bottom":"20px"}},[n("div",{staticClass:"select_con"},[n("dl",[n("dd",{staticStyle:{"margin-left":"-80px"}},[t._m(2),t._v(" "),n("img",{staticClass:"fl list_img",attrs:{src:r(489)}}),t._v(" "),t._m(3),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchWLGS,expression:"searchWLGS"}],staticClass:"list_input",attrs:{type:"text",placeholder:"请输入公司名称"},domProps:{value:t.searchWLGS},on:{input:function(e){e.target.composing||(t.searchWLGS=e.target.value)}}}),t._v(" "),n("input",{staticClass:"list_button",attrs:{name:"Submit2",value:"搜索",readonly:""},on:{click:function(e){return t.searchWlLine()}}}),t._v(" "),n("input",{attrs:{id:"flush",name:"Submit2",value:"重置",readonly:""},on:{click:function(e){return t.flush()}}})]),t._v(" "),n("dt",[t._v("排序 :")]),t._v(" "),n("dd",t._l(t.AF025,function(e,r){return n("a",{key:r,class:[t.AF025Name===e.name?"now":""],on:{click:function(r){return t.selectAF025(e)}}},[t._v(t._s(e.name))])}),0),t._v(" "),n("dt",[t._v("其他 :")]),t._v(" "),n("dd",t._l(t.sortList,function(e,r){return n("a",{key:r,class:[t.sortName===e.name?"now":""],on:{click:function(r){return t.selectSort(e)}}},[t._v(t._s(e.name))])}),0)])])]),t._v(" "),n("div",{staticClass:"w1036"},[t._m(4),t._v(" "),n("ul",{staticClass:"zx_nr ",staticStyle:{"margin-top":"0px"}},[0===t.transportRange.length?n("div",{staticClass:"list_none",staticStyle:{display:"block"}},[n("span",[t._v("暂时没有找到您要查询的信息，可以看看其他物流园区哦")]),t._v(" "),n("img",{attrs:{src:r(206)}})]):t._e(),t._v(" "),t._l(t.transportRange,function(e,r){return n("li",{key:r},[n("a",{attrs:{href:"/zhuanxian/detail?id="+e.rangeId+"&publishId="+e.companyId,target:"_blank"}},[n("span",{staticClass:"nr01"},[t._v(t._s(e.startCity)+t._s(e.startArea)+" → "+t._s(e.endCity)+t._s(e.endArea))])]),t._v(" "),n("a",{attrs:{href:"/zhuanxian/detail?id="+e.rangeId+"&publishId="+e.companyId,target:"_blank"}},[n("span",{staticClass:"nr02"},[n("font",{staticStyle:{color:"#f00"}},[t._v(t._s(e.discountPrice0?e.discountPrice0:e.primeryPrice0))]),t._v("元/公斤")],1)]),t._v(" "),n("a",{attrs:{href:"/zhuanxian/detail?id="+e.rangeId+"&publishId="+e.companyId,target:"_blank"}},[n("span",{staticClass:"nr03"},[n("font",{staticStyle:{color:"#f00"}},[t._v(t._s(e.primeryPrice1))]),t._v("元/方")],1)]),t._v(" "),n("a",{attrs:{href:"/zhuanxian/detail?id="+e.rangeId+"&publishId="+e.companyId,target:"_blank"}},[n("span",{staticClass:"nr04"},[t._v(t._s(e.transportAging)+t._s(e.transportAgingUnit))])]),t._v(" "),n("a",{attrs:{href:"/zhuanxian/detail?id="+e.rangeId+"&publishId="+e.companyId,target:"_blank"}},[n("span",{staticClass:"nr05"},[t._v(t._s(e.companyName))])]),t._v(" "),n("a",{attrs:{href:"/zhuanxian/detail?id="+e.rangeId+"&publishId="+e.companyId,target:"_blank"}},[n("span",{staticClass:"nr06"},[t._v("详情")])])])})],2)]),t._v(" "),t._m(5)]),t._v(" "),n("div",{staticClass:"list_left_wangdian"},[n("div",{staticClass:"w1036",staticStyle:{"background-color":"#fff","margin-bottom":"20px"}},[n("div",{staticClass:"select_con"},[n("dl",[n("dd",{staticStyle:{"margin-left":"-80px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchWDKey,expression:"searchWDKey"}],staticClass:"list_input",attrs:{type:"text",placeholder:"请输入网点名称"},domProps:{value:t.searchWDKey},on:{input:function(e){e.target.composing||(t.searchWDKey=e.target.value)}}}),t._v(" "),n("input",{staticClass:"list_button",attrs:{value:" 搜索 ",readonly:""},on:{click:function(e){return t.searchWD()}}})]),t._v(" "),n("dt",[t._v("其他 :")]),t._v(" "),t._m(6)])])]),t._v(" "),n("div",{staticClass:"w1036"},[0===t.logisticsCompany.length?n("div",{staticClass:"list_none",staticStyle:{display:"block"}},[n("span",[t._v("暂时没有找到您要查询的信息，可以看看其他物流园区哦")]),t._v(" "),n("img",{attrs:{src:r(206)}})]):t._e(),t._v(" "),t._l(t.logisticsCompany,function(e,c){return n("ul",{key:c,staticClass:"wlzx_list"},[n("li",{staticClass:"wlzx_list_2"},[n("p",{staticClass:"p1"},[n("font",[t._v(t._s(e.pointName))]),e.qq?n("a",{attrs:{href:"http://wpa.qq.com/msgrd?v="+e.qq+"&uin=&site=qq&menu=yes",target:"_blank"}},[n("img",{attrs:{src:r(490)}})]):t._e()],1),t._v(" "),n("p",{staticClass:"p2"},[n("a",{attrs:{href:"#"}},[t._v(t._s(e.companyName))])]),t._v(" "),e.credit>=0&&e.credit<=150?n("p",{staticClass:"p3"},[n("i",[t._v("信誉：")]),t._v(" "),t._l(e.starS,function(t,e){return n("img",{key:e,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:r(345)}})})],2):t._e(),t._v(" "),e.credit>=151?n("p",{staticClass:"p3"},[n("i",[t._v("信誉：")]),t._v(" "),t._l(e.starB,function(t,e){return n("img",{key:e,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:r(346)}})})],2):t._e(),t._v(" "),n("p",{staticClass:"p4"},[n("i",[t._v("联系人：")]),n("font",[t._v(t._s(e.contactsName))])],1),t._v(" "),n("p",{staticClass:"p5"},[n("i",[t._v("电话：")]),n("font",[t._v(t._s(e.contactsTel)+t._s(e.mobile))])],1)]),t._v(" "),n("li",{staticClass:"wlzx_list_3"},[n("p",{staticClass:"p1"},[n("i",[t._v("经营范围：")]),n("span",[t._v(t._s(e.productService1))])]),t._v(" "),n("p",{staticClass:"p2"},[n("i",[t._v("增值服务：")]),n("span",[t._v(t._s(e.otherService1))])])]),t._v(" "),n("li",{staticClass:"wlzx_list_4"},["AF0010403"===e.authStatus?n("p",{staticClass:"p1"},[n("img",{attrs:{src:r(491)}})]):t._e(),t._v(" "),1===e.isVip?n("p",{staticClass:"p2"},[n("img",{attrs:{src:r(492)}})]):t._e(),t._v(" "),e.collateral>0?n("p",{staticClass:"p3"},[n("img",{attrs:{src:r(493)}})]):t._e()]),t._v(" "),n("li",{staticClass:"wlzx_list_6"},[n("p",{staticClass:"p1"},[n("a",{attrs:{href:"/create/order?&uid="+e.account+"&publishId="+e.companyId,target:"_blank"}},[n("input",{attrs:{value:"下单"}})])]),n("p",{staticClass:"p2"},[n("a",{attrs:{href:"/member/"+e.companyId,target:"_blank"}},[n("input",{attrs:{value:"查看官网"}})])]),n("p",{staticClass:"p3"})])])})],2),t._v(" "),t._m(7)])]),t._v(" "),n("div",{staticClass:"list_right"},[t._m(8),t._v(" "),0===t.companysList.length?n("div",{staticClass:"tj_none"},[n("span",[t._v("没有相关承运商推荐")])]):t._e(),t._v(" "),t._l(t.companysList,function(e,c){return n("div",{key:c,staticClass:"tj_list tj_list0"},[n("p",{staticClass:"p1"},[n("span",[t._v(t._s(e.companyName))])]),t._v(" "),e.credit>=0&&e.credit<=150?n("p",{staticClass:"p2"},t._l(e.starS,function(t,e){return n("img",{key:e,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:r(345)}})}),0):t._e(),t._v(" "),e.credit>=151?n("p",{staticClass:"p2"},t._l(e.starB,function(t,e){return n("img",{key:e,staticClass:"xy_zuan",staticStyle:{display:"inline"},attrs:{src:r(346)}})}),0):t._e(),t._v(" "),n("p",{staticClass:"p3"},[n("i",{attrs:{"data-v-63732202":""}},[t._v("联系人：")]),n("font",[t._v(t._s(e.contactsName))])],1),t._v(" "),n("p",{staticClass:"p4"},[n("i",[t._v("电话：")]),n("font",[t._v(" "+t._s(e.mobile))])],1),t._v(" "),n("p",{staticClass:"p5"},[n("i",{attrs:{"data-v-63732202":""}},[t._v("地址：")]),n("font",[t._v(t._s(e.address))])],1),t._v(" "),n("p",{staticClass:"p6"},[n("a",{attrs:{href:"/member/"+e.companyId,target:"_blank"}},[n("span",{attrs:{"data-v-63732202":""}},[t._v("查看 >")])])])])})],2)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"left_jianjie_bt"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("园区信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list_tiaoj"},[e("span",{staticClass:"active",attrs:{id:"checked_zx"}},[this._v("物流专线")]),e("span",{attrs:{id:"checked_wangdian"}},[this._v("物流网点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"wlLineFrom"}},[e("input",{staticStyle:{height:"100%"},attrs:{name:"cfd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入出发地"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"wlLineTo"}},[e("input",{staticStyle:{height:"100%"},attrs:{name:"ddd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入到达地"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dl",{staticClass:"zx_bt"},[r("dd",{staticClass:"bt01"},[t._v("出发地 → 到达地")]),t._v(" "),r("dd",{staticClass:"bt02"},[t._v("重货价格")]),t._v(" "),r("dd",{staticClass:"bt03"},[t._v("轻货价格")]),t._v(" "),r("dd",{staticClass:"bt04"},[t._v("时效")]),t._v(" "),r("dd",{staticClass:"bt05"},[t._v("物流公司")]),t._v(" "),r("dd",{staticClass:"bt06"},[t._v("操作")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"160px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination1"}}),this._v(" "),e("div",{staticClass:"info fl"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("dd",[e("a",{staticClass:"now all"},[this._v("不限")]),this._v(" "),e("a",{staticClass:"shiming"},[this._v("认证")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"170px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination2"}}),this._v(" "),e("div",{staticClass:"info fl"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("承运商推荐")])])}],!1,null,"1e8e0c67",null);e.default=component.exports}}]);