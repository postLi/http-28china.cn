(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{332:function(t,e,n){var content=n(505);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("7b140c0f",content,!0,{sourceMap:!1})},504:function(t,e,n){"use strict";var l=n(332);n.n(l).a},505:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".nr05[data-v-9b38c922]{color:#fe0000}.left_main[data-v-9b38c922]{min-height:420px}.wlzx_list_2 .p3 img[data-v-9b38c922]{display:inline!important}",""])},672:function(t,e,n){"use strict";n.r(e);n(13),n(16);var l=n(6),c=n(29),r=n(63);function o(t,e){return _.apply(this,arguments)}function _(){return(_=Object(l.a)(function*(t,e){let data={list:[],total:0},n={currentPage:e.currentPage||1,pageSize:e.pageSize||10,parkId:e.id,comAuthStatus:e.comAuthStatus,companyName:e.companyName};return yield t.post("/28-web/pointNetwork/findParkNet",n).then(t=>{200===t.data.status&&(data.list=t.data.data.list,data.total=t.data.data.pages)}),data})).apply(this,arguments)}function d(t,e){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(function*(t,e){arguments.length>2&&void 0!==arguments[2]&&arguments[2];let data={list:[],total:0},n=e;return n.parkId=e.id,yield t.post("/28-web/range/park/list",n).then(t=>{200===t.data.status&&(t.data.data.list.forEach(t=>{t.transportAgingUnit=t.transportAgingUnit.replace("多","")}),data.list=t.data.data.list,data.total=t.data.data.pages)}),data})).apply(this,arguments)}var m={name:"WuLiu",components:{creditIcon:c.a,selectType:r.a},head(){return{title:this.title,link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/article_wlyq.css?v2"}],script:[{src:"http://api.map.baidu.com/api?v=2.0&ak=e0abRWFWOrgmN7emYjQGPj4Z0vyTVTfo"}]}},data:()=>({AF025Name:"不限",sortList:[{name:"默认排序",code:"default"},{name:"交易量",code:"orderDesc"},{name:"运输时效",code:"transportAgingAsc"},{name:"重货价格",code:"weigthPriceAsc"}],sortName:"默认排序",searchWLGS:"",searchWDKey:"",transportRange:[],logisticsCompany:[],companysList:[],title:"",vo1Total:0,vo2Total:0,vo1:{pageSize:10,currentPage:1,otherServiceCode:"",orderBy:"",companyName:""},vo2:{pageSize:10,currentPage:1,comAuthStatus:"",companyName:""}}),asyncData:t=>Object(l.a)(function*(){let e=t.$axios,n=t.query,l=yield e.get("/28-web/logisticsPark/"+n.id).catch(t=>{}),c="",r="",_="",data={},title="";l.data.data&&200===l.data.status&&(r=(data=l.data.data).longitude,_=data.latitude,title=data.parkName+" "+(data.locationProvince?data.locationProvince+"物流园区":"")+(data.locationCity?" "+data.locationCity+"物流园区":"")),r&&_&&(c=r+","+_);let v={pageSize:25,currentPage:1,otherServiceCode:"",orderBy:"",companyName:""},m={pageSize:10,currentPage:1,comAuthStatus:"",companyName:""};v.id=n.id,m.id=n.id;const h=yield d(e,v),y=yield o(e,m);let f=yield e.get("/28-web/logisticsCompany/excellent?pageSize=5&parkId="+n.id+"&flag=");return{gatewayData:data,jwd:c,vo1:v,vo2:m,transportRange:h.list,vo1Total:h.total,logisticsCompany:y.list,vo2Total:y.total,companysList:200===f.data.status?f.data.data:[],title:title}})(),mounted(){var t=this;return Object(l.a)(function*(){{let l=t.$route.query;t.$axios;t.vo1.id=l.id,t.vo2.id=l.id,seajs.use(["/js/jquery.pagination.min.js"],()=>{t.initPage(),t.initPage2()}),$("#checked_zx").click(function(){$(".list_left_zx").css("display","block"),$("#checked_zx").addClass("active"),$(".list_left_wangdian").css("display","none"),$("#checked_wangdian").removeClass("active")}),$("#checked_wangdian").click(function(){$(".list_left_zx").css("display","none"),$("#checked_zx").removeClass("active"),$(".list_left_wangdian").css("display","block"),$("#checked_wangdian").addClass("active")});var e=$.cookie("currentProvinceFullName"),n=$.cookie("currentAreaFullName");$("#arc_nav_a1").attr("href","/wuliu?tid=1&locationProvince="+e+"&locationCity="+n),$("#arc_nav_a1").html(n+"物流园区")}})()},methods:{searchWlLine(){var t=this;return Object(l.a)(function*(){let e=[],n=[];$("#wlLineFrom .select-item").each(function(i,t){e.push($(this).text())});let l=e[0],c=e[1],r=e[2];$("#wlLineTo .select-item").each(function(i,t){n.push($(this).text())});let o=n[0],_=n[1],d=n[2];t.vo1=Object.assign(t.vo1,{endArea:d,endCity:_,endProvince:o,startArea:r,startCity:c,startProvince:l}),t.fetchData(!0)})()},flush:()=>Object(l.a)(function*(){location.reload()})(),searchWD(){this.fetchData2(!0)},map_init(){let map=new BMap.Map("allmap"),t=(this.jwd?this.jwd:"113.339865,23.138652").split(","),e=new BMap.Point(parseFloat(t[0]),parseFloat(t[1]));map.centerAndZoom(e,17);let marker=new BMap.Marker(e);map.addOverlay(marker),marker.setAnimation(BMAP_ANIMATION_BOUNCE),map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),map.setCurrentCity("广州"),map.enableScrollWheelZoom(!0);var n={type:BMAP_NAVIGATION_CONTROL_SMALL};map.addControl(new BMap.NavigationControl(n))},map_block(){$("#allmap").css("display","block")},seeMap(){this.map_block(),this.map_init()},fetchData(t){var e=this;return Object(l.a)(function*(){const n=yield d(e.$axios,e.vo1);e.transportRange=n.list,e.vo1Total=n.total,t&&e.initPage()})()},initPage(){let t=this;$("#pagination1").pagination({currentPage:1,totalPage:t.vo1Total,callback:function(e){t.vo1.currentPage=e,t.fetchData()}})},fetchData2(t){var e=this;return Object(l.a)(function*(){const n=yield o(e.$axios,e.vo2);e.logisticsCompany=n.list,e.vo2Total=n.total,t&&e.initPage2()})()},initPage2(){let t=this;console.log("_this.vo2Total:",t.vo2Total),$("#pagination2").pagination({currentPage:1,count:10,totalPage:t.vo2Total,callback:function(e){t.vo2.currentPage=e,t.fetchData2()}})}}},h=(n(504),n(2)),component=Object(h.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"list_box"},[n("div",{staticClass:"list_nav"},[n("a",{attrs:{href:"/"}},[t._v("物流首页")]),t._v(">"),n("a",{attrs:{id:"arc_nav_a1",href:""}},[t._v("物流园区")]),t._v(">"),n("a",[t._v(t._s(t.gatewayData.parkName))])]),t._v(" "),n("div",{staticClass:"list_left"},[n("div",{staticClass:"left_main"},[n("div",{staticClass:"left_bt"},[n("span",[t._v(t._s(t.gatewayData.parkName))])]),t._v(" "),n("div",{staticClass:"left_nr"},[n("div",{staticClass:"left_nr_1"},[n("img",{attrs:{src:t.gatewayData.parkSignPicture?t.gatewayData.parkSignPicture:"/yuanqu/images/wlyq_pic.png",alt:""}})]),t._v(" "),n("div",{staticClass:"left_nr_2"},[n("div",{attrs:{id:"allmap",onmouseout:"$('#allmap').css('display', 'none')",onmouseover:"$('#allmap').css('display', 'block')"}}),t._v(" "),n("ul",[n("li",{staticClass:"list_yq1"},[n("img",{attrs:{src:"/images/article_wlzx/peple.png"}}),n("span",[t._v(t._s(t.gatewayData.parkContact||"暂无"))])]),t._v(" "),n("li",{staticClass:"list_yq2"},[n("img",{attrs:{src:"/images/article_wlzx/phone-ico.png"}}),n("span",[t._v(t._s(t.gatewayData.parkMobile||"暂无"))])]),t._v(" "),n("li",{staticClass:"list_yq3"},[n("span",[t._v("电话："),n("em",[t._v(t._s(t.gatewayData.parkNum||"暂无"))])])]),t._v(" "),n("li",{staticClass:"list_yq4"},[t.gatewayData.contactQq?n("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin="+t.gatewayData.contactQq+"&site=qq&menu=yes",target:"_blank"}},[n("span",[t._v("QQ："),n("em",[t._v(t._s(t.gatewayData.contactQq))])])]):t._e()]),t._v(" "),n("li",{staticClass:"list_yq5"},[n("span",[t._v("区域："),n("em",[t._v(t._s(t.gatewayData.locationProvince)+t._s(t.gatewayData.locationCity)+t._s(t.gatewayData.locationArea))])])]),t._v(" "),n("li",{staticClass:"list_yq6"},[n("span",[t._v("详细地址："),n("em",[t._v(t._s(t.gatewayData.parkAddress||"暂无"))])]),n("a",{attrs:{target:"_blank"},on:{click:function(e){return t.seeMap()}}},[t._v("[查看地图]")])])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.gatewayData.parkIntroduce,expression:"gatewayData.parkIntroduce"}],staticClass:"left_jianjie_bt"},[n("span",{staticClass:"biaozhi"}),n("span",[t._v("园区信息")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.gatewayData.parkIntroduce,expression:"gatewayData.parkIntroduce"}],staticClass:"left_jianjie_nr"},[n("p",[t._v(t._s(t.gatewayData.parkIntroduce||"暂无园区信息"))])])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"list_left_zx"},[n("div",{staticClass:"w1036",staticStyle:{"background-color":"#fff","margin-bottom":"20px"}},[n("div",{staticClass:"select_con"},[n("dl",[n("dd",{staticStyle:{"margin-left":"-80px"}},[t._m(1),t._v(" "),n("img",{staticClass:"fl list_img",attrs:{src:"/images/02jiantou.png"}}),t._v(" "),t._m(2),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vo1.companyName,expression:"vo1.companyName"}],staticClass:"list_input",attrs:{type:"text",placeholder:"请输入公司名称"},domProps:{value:t.vo1.companyName},on:{input:function(e){e.target.composing||t.$set(t.vo1,"companyName",e.target.value)}}}),t._v(" "),n("input",{staticClass:"list_button",attrs:{name:"Submit2",value:"搜索",readonly:""},on:{click:function(e){return t.searchWlLine()}}}),t._v(" "),n("input",{attrs:{id:"flush",name:"Submit2",value:"重置",readonly:""},on:{click:function(e){return t.flush()}}})]),t._v(" "),n("dt",[t._v("增值服务 :")]),t._v(" "),n("dd",[n("selectType",{attrs:{name:"AF025"},on:{change:t.searchWlLine},model:{value:t.vo1.otherServiceCode,callback:function(e){t.$set(t.vo1,"otherServiceCode",e)},expression:"vo1.otherServiceCode"}})],1),t._v(" "),n("dt",[t._v("排序 :")]),t._v(" "),n("dd",[n("selectType",{attrs:{list:t.sortList,code:t.sortList[0].code,"show-default":!1},on:{change:t.searchWlLine},model:{value:t.vo1.orderBy,callback:function(e){t.$set(t.vo1,"orderBy",e)},expression:"vo1.orderBy"}})],1)])])]),t._v(" "),n("div",{staticClass:"w1036"},[t._m(3),t._v(" "),n("ul",{staticClass:"zx_nr ",staticStyle:{"margin-top":"0px"}},[0===t.transportRange.length?n("div",{staticClass:"list_none",staticStyle:{display:"block"}},[n("span",[t._v("暂时没有找到您要查询的信息，可以看看其他物流园区哦")]),t._v(" "),n("img",{attrs:{src:"/images/none_pic.png"}})]):t._e(),t._v(" "),t._l(t.transportRange,function(e,l){return n("li",{key:l},[n("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[n("span",{staticClass:"nr05"},[t._v(t._s(e.companyName))])]),t._v(" "),n("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[n("span",{staticClass:"nr01"},[t._v(t._s(e.startCity)+t._s(e.startArea)+" → "+t._s(e.endCity)+t._s(e.endArea))])]),t._v(" "),n("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[n("span",{staticClass:"nr02"},[n("font",{staticStyle:{color:"#f00"}},[t._v(t._s(e.weightDiscountPrice||e.weightPrice))]),t._v("元/公斤")],1)]),t._v(" "),n("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[n("span",{staticClass:"nr03"},[n("font",{staticStyle:{color:"#f00"}},[t._v(t._s(e.lightDiscountPrice||e.lightPrice))]),t._v("元/方")],1)]),t._v(" "),n("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[n("span",{staticClass:"nr04"},[t._v(t._s(e.transportAging)+t._s(e.transportAgingUnit))])]),t._v(" "),n("a",{attrs:{href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.publishId,target:"_blank"}},[n("span",{staticClass:"nr06"},[t._v("详情")])])])})],2)]),t._v(" "),t._m(4)]),t._v(" "),n("div",{staticClass:"list_left_wangdian"},[n("div",{staticClass:"w1036",staticStyle:{"background-color":"#fff","margin-bottom":"20px"}},[n("div",{staticClass:"select_con"},[n("dl",[n("dd",{staticStyle:{"margin-left":"-80px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.vo2.companyName,expression:"vo2.companyName"}],staticClass:"list_input",attrs:{type:"text",placeholder:"请输入网点名称"},domProps:{value:t.vo2.companyName},on:{input:function(e){e.target.composing||t.$set(t.vo2,"companyName",e.target.value)}}}),t._v(" "),n("input",{staticClass:"list_button",attrs:{value:" 搜索 ",readonly:""},on:{click:t.searchWD}})]),t._v(" "),n("dt",[t._v("其他 :")]),t._v(" "),n("dd",[n("selectType",{attrs:{list:[{code:"AF0010403",name:"认证"}]},on:{change:function(e){return t.searchWD()}},model:{value:t.vo2.comAuthStatus,callback:function(e){t.$set(t.vo2,"comAuthStatus",e)},expression:"vo2.comAuthStatus"}})],1)])])]),t._v(" "),n("div",{staticClass:"w1036"},[0===t.logisticsCompany.length?n("div",{staticClass:"list_none",staticStyle:{display:"block"}},[n("span",[t._v("暂时没有找到您要查询的信息，可以看看其他物流园区哦")]),t._v(" "),n("img",{attrs:{src:"/images/none_pic.png"}})]):t._e(),t._v(" "),t._l(t.logisticsCompany,function(e,l){return n("ul",{key:l,staticClass:"wlzx_list"},[n("li",{staticClass:"wlzx_list_2"},[n("p",{staticClass:"p1"},[n("font",[t._v(t._s(e.pointName))]),e.qq?n("a",{attrs:{href:"http://wpa.qq.com/msgrd?v="+e.qq+"&uin=&site=qq&menu=yes",target:"_blank"}},[n("img",{attrs:{src:"/images/article_wlzx/15qq.gif"}})]):t._e()],1),t._v(" "),n("p",{staticClass:"p2"},[n("a",{attrs:{href:"/member/"+e.companyId}},[t._v(t._s(e.companyName))])]),t._v(" "),n("p",{staticClass:"p3"},[n("creditIcon",{attrs:{credit:e.credit}})],1),t._v(" "),n("p",{staticClass:"p4"},[n("i",[t._v("联系人：")]),n("font",[t._v(t._s(e.contactsName))])],1),t._v(" "),n("p",{staticClass:"p5"},[n("i",[t._v("电话：")]),n("font",[t._v(t._s(e.contactsTel)+" "+t._s(e.mobile))])],1)]),t._v(" "),n("li",{staticClass:"wlzx_list_3"},[n("p",{staticClass:"p1"},[n("i",[t._v("经营范围：")]),n("span",[t._v(t._s((e.productServiceNameList||[]).join(",")))])]),t._v(" "),n("p",{staticClass:"p2"},[n("i",[t._v("增值服务：")]),n("span",[t._v(t._s((e.otherServiceNameList||[]).join(",")))])])]),t._v(" "),n("li",{staticClass:"wlzx_list_4"},["AF0010403"===e.authStatus?n("p",{staticClass:"p1"},[n("img",{attrs:{src:"/images/10shiming.png"}})]):t._e(),t._v(" "),1===e.isVip?n("p",{staticClass:"p2"},[n("img",{attrs:{src:"/images/11xinyong.png"}})]):t._e(),t._v(" "),e.collateral>0?n("p",{staticClass:"p3"},[n("img",{attrs:{src:"/images/12danbao.png"}})]):t._e()]),t._v(" "),n("li",{staticClass:"wlzx_list_6"},[n("p",{staticClass:"p1"},[n("a",{attrs:{href:"/create/order?&uid="+e.account+"&publishId="+e.companyId,target:"_blank"}},[n("input",{attrs:{value:"下单"}})])]),n("p",{staticClass:"p2"},[n("a",{attrs:{href:"/member/"+e.companyId,target:"_blank"}},[n("input",{attrs:{value:"查看官网"}})])]),n("p",{staticClass:"p3"})])])})],2),t._v(" "),t._m(5)])]),t._v(" "),n("div",{staticClass:"list_right"},[t._m(6),t._v(" "),0==t.companysList.length||null==t.companysList?n("div",{staticClass:"tj_none",staticStyle:{display:"block"}},[n("span",[t._v("没有相关承运商推荐")])]):n("div",t._l(t.companysList,function(e,l){return n("div",{key:l,staticClass:"tj_list tj_list0"},[n("p",{staticClass:"p1"},[n("a",{attrs:{href:"/member/"+e.id,title:e.companyName,target:"_blank"}},[n("span",[t._v(t._s(e.companyName))])])]),t._v(" "),n("div",{staticClass:"p2"},[n("creditIcon",{attrs:{credit:e.credit}})],1),t._v(" "),n("p",{staticClass:"p3"},[n("i",{attrs:{"data-v-63732202":""}},[t._v("联系人：")]),n("font",[t._v(t._s(e.contactsName||"暂无"))])],1),t._v(" "),n("p",{staticClass:"p4"},[n("i",[t._v("电话：")]),n("font",[t._v(" "+t._s(e.mobile||"暂无"))])],1),t._v(" "),n("p",{staticClass:"p5"},[n("i",{attrs:{"data-v-63732202":""}},[t._v("地址：")]),n("font",[t._v(t._s(e.address||"暂无"))])],1),t._v(" "),n("p",{staticClass:"p6"},[n("a",{attrs:{href:"/member/"+e.id,target:"_blank"}},[n("span",{attrs:{"data-v-63732202":""}},[t._v("查看 >")])])])])}),0)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list_tiaoj"},[e("span",{staticClass:"active",attrs:{id:"checked_zx"}},[this._v("物流专线")]),e("span",{attrs:{id:"checked_wangdian"}},[this._v("物流网点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"wlLineFrom"}},[e("input",{staticStyle:{height:"100%"},attrs:{name:"cfd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入出发地"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"wlLineTo"}},[e("input",{staticStyle:{height:"100%"},attrs:{name:"ddd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入到达地"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",{staticClass:"zx_bt"},[n("dd",{staticClass:"bt05"},[t._v("物流公司")]),t._v(" "),n("dd",{staticClass:"bt01"},[t._v("出发地 → 到达地")]),t._v(" "),n("dd",{staticClass:"bt02"},[t._v("重货价格")]),t._v(" "),n("dd",{staticClass:"bt03"},[t._v("轻货价格")]),t._v(" "),n("dd",{staticClass:"bt04"},[t._v("时效")]),t._v(" "),n("dd",{staticClass:"bt06"},[t._v("操作")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"160px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination1"}}),this._v(" "),e("div",{staticClass:"info fl"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"170px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination2"}}),this._v(" "),e("div",{staticClass:"info fl"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("承运商推荐")])])}],!1,null,"9b38c922",null);e.default=component.exports}}]);