exports.ids=[75],exports.modules={118:function(e,t,c){e.exports=c.p+"img/58a2773.png"},234:function(e,t,c){e.exports=c.p+"img/6ad6f1a.gif"},235:function(e,t,c){e.exports=c.p+"img/d7cb4dd.gif"},362:function(e,t,c){e.exports=c.p+"img/b4e72d6.png"},363:function(e,t,c){e.exports=c.p+"img/7dffb10.png"},364:function(e,t,c){e.exports=c.p+"img/7c0cfc9.png"},365:function(e,t,c){e.exports=c.p+"img/017cd2b.gif"},366:function(e,t,c){e.exports=c.p+"img/92f339f.png"},367:function(e,t,c){e.exports=c.p+"img/9cbef05.png"},368:function(e,t,c){e.exports=c.p+"img/70e28de.png"},495:function(e,t,c){"use strict";c.r(t);function d(e){e.credit>=0&&e.credit<=3&&(e.starS=new Array(1)),e.credit>=4&&e.credit<=10&&(e.starS=new Array(2)),e.credit>=11&&e.credit<=40&&(e.starS=new Array(3)),e.credit>=41&&e.credit<=90&&(e.starS=new Array(4)),e.credit>=91&&e.credit<=150&&(e.starS=new Array(5)),e.credit>=151&&e.credit<=250&&(e.starB=new Array(1)),e.credit>=251&&e.credit<=500&&(e.starB=new Array(2)),e.credit>=501&&e.credit<=1e3&&(e.starB=new Array(3)),e.credit>=1001&&e.credit<=2e3&&(e.starB=new Array(4)),e.credit>=2001&&(e.starB=new Array(5))}async function r(e,t,c={}){let d,r={currentPage:1,pageSize:100,vo:c};return await e.post("/aflc-portal/portalt/aflclogisticspark/v1/Gateway/getTransportRange/"+t.id,r).then(e=>{e.data.data.list.forEach(e=>{e.transportAgingUnit=e.transportAgingUnit.replace("多","")}),200===e.data.status&&(d=e.data.data.list)}),d}var n={name:"WuLiu",head:{link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/article_wlyq.css"}],script:[{src:"http://api.map.baidu.com/api?v=2.0&ak=e0abRWFWOrgmN7emYjQGPj4Z0vyTVTfo"}]},data:()=>({AF025Name:"不限",sortList:[{name:"默认排序",vo:{defaultSort:1}},{name:"交易量",vo:{orderNumber:1}},{name:"运输时效",vo:{transportAging:1}},{name:"重货价格",vo:{weigthPrice:1}}],sortName:"默认排序",searchWLGS:"",searchWDKey:""}),async asyncData({$axios:e,query:t}){let c=await e.get("/28-web/logisticsPark/"+t.id),n="";const l=c.data.data.longitude,o=c.data.data.latitude;l&&o&&(n=l+","+o);let v={currentPage:1,pageSize:100,vo:{parkId:t.id}},_=await e.post("/aflc-portal/portalt/aflcLogisticsCompany/v1/recommendCompanys",v);_.data.data.list.forEach(e=>{d(e)});const m=await r(e,t),y=await async function(e,t,c={parkId:1,defaultSort:1}){let r,n={currentPage:1,pageSize:100,vo:c};return await e.post("/aflc-portal/portalt/aflclogisticspark/v1/Gateway/getLogisticsCompany/"+t.id,n).then(e=>{e.data.data.list.forEach(e=>{JSON.parse(e.productService).length>0&&(e.productService1=`\n        ${JSON.parse(e.productService)[0]}\n        ${JSON.parse(e.productService)[1]}\n        ${JSON.parse(e.productService)[2]}`),JSON.parse(e.otherService).length>0&&(e.otherService1=`\n        ${JSON.parse(e.otherService)[0]}\n        ${JSON.parse(e.otherService)[1]}\n        ${JSON.parse(e.otherService)[2]}`),d(e)}),200===e.data.status&&(r=e.data.data.list)}),r}(e,t);let h=await e.get("/aflc-common/sysDict/getSysDictByCodeGet/AF025");return h.data.data.unshift({name:"不限",code:""}),{gatewayData:200===c.data.status?c.data.data:{},jwd:n,companysList:200===_.data.status?_.data.data.list:[],transportRange:m,logisticsCompany:y,AF025:200===h.data.status?h.data.data:[]}},mounted(){seajs.use(["../js/city-picker.data.js"],function(){seajs.use(["../js/city-picker.js"],function(){$("#checked_zx").click(function(){$(".list_left_zx").css("display","block"),$("#checked_zx").addClass("active"),$(".list_left_wangdian").css("display","none"),$("#checked_wangdian").removeClass("active")}),$("#checked_wangdian").click(function(){$(".list_left_zx").css("display","none"),$("#checked_zx").removeClass("active"),$(".list_left_wangdian").css("display","block"),$("#checked_wangdian").addClass("active")});var e=$.cookie("currentProvinceFullName"),t=$.cookie("currentAreaFullName");$("#arc_nav_a1").attr("href","/wuliu?tid=1&locationProvince="+e+"&locationCity="+t),$("#arc_nav_a1").html(t+"物流园区")})})},methods:{async searchWlLine(){let e=[],t=[];$("#wlLineFrom .select-item").each(function(i,t){e.push($(this).text())});let c=e[0],d=e[1],n=e[2];$("#wlLineTo .select-item").each(function(i,e){t.push($(this).text())});let l=t[0],o=t[1],v=t[2],_={companyName:this.searchWLGS,endArea:v,endCity:o,endProvince:l,startArea:n,startCity:d,startProvince:c};this.transportRange=await r(this.$axios,this.$route.query,_)},async flush(){$("#wlLineFrom input").citypicker("reset"),$("#wlLineTo input").citypicker("reset"),this.AF025Name="不限",this.sortName="默认排序",this.searchWLGS="",this.transportRange=await r(this.$axios,this.$route.query)},searchWD(){window.open("/gongsi?&wangdian="+this.searchWDKey)},async selectSort(e){this.sortName=e.name,this.transportRange=await r(this.$axios,this.$route.query,e.vo)},async selectAF025(e){this.AF025Name=e.name,this.transportRange=await r(this.$axios,this.$route.query,{otherServiceCode:e.code})},map_init(){let map=new BMap.Map("allmap"),e=(this.jwd?this.jwd:"113.339865,23.138652").split(","),t=new BMap.Point(parseFloat(e[0]),parseFloat(e[1]));map.centerAndZoom(t,17);let marker=new BMap.Marker(t);map.addOverlay(marker),marker.setAnimation(BMAP_ANIMATION_BOUNCE),map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),map.setCurrentCity("广州"),map.enableScrollWheelZoom(!0);var c={type:BMAP_NAVIGATION_CONTROL_SMALL};map.addControl(new BMap.NavigationControl(c))},map_block(){$("#allmap").css("display","block")},seeMap(){this.map_block(),this.map_init()}}},l=c(0);var component=Object(l.a)(n,function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",[e._ssrNode('<div class="list_box" data-v-1e8e0c67>',"</div>",[e._ssrNode('<div class="list_nav" data-v-1e8e0c67><a href="/" data-v-1e8e0c67>物流首页</a>&gt;<a id="arc_nav_a1" href data-v-1e8e0c67>物流园区</a>&gt;<a data-v-1e8e0c67>'+e._ssrEscape(e._s(e.gatewayData.parkName))+"</a></div> "),e._ssrNode('<div class="list_left" data-v-1e8e0c67>',"</div>",[e._ssrNode('<div class="left_main" data-v-1e8e0c67><div class="left_bt" data-v-1e8e0c67><span data-v-1e8e0c67>'+e._ssrEscape(e._s(e.gatewayData.parkName))+'</span></div> <div class="left_nr" data-v-1e8e0c67><div class="left_nr_1" data-v-1e8e0c67><img'+e._ssrAttr("src",e.gatewayData.parkSignPicture?e.gatewayData.parkSignPicture:"../../static/images/article_wlzx/wlyq_pic.png")+" data-v-1e8e0c67></div> <div class=\"left_nr_2\" data-v-1e8e0c67><div id=\"allmap\" onmouseout=\"$('#allmap').css('display', 'none')\" onmouseover=\"$('#allmap').css('display', 'block')\" data-v-1e8e0c67></div> <ul data-v-1e8e0c67><li class=\"list_yq1\" data-v-1e8e0c67><img"+e._ssrAttr("src",c(362))+" data-v-1e8e0c67><span data-v-1e8e0c67>"+e._ssrEscape(e._s(e.gatewayData.parkContact))+'</span></li> <li class="list_yq2" data-v-1e8e0c67><img'+e._ssrAttr("src",c(363))+" data-v-1e8e0c67><span data-v-1e8e0c67>"+e._ssrEscape(e._s(e.gatewayData.parkMobile))+'</span></li> <li class="list_yq3" data-v-1e8e0c67><span data-v-1e8e0c67>电话：<em data-v-1e8e0c67>'+e._ssrEscape(e._s(e.gatewayData.parkNum))+'</em></span></li> <li class="list_yq4" data-v-1e8e0c67>'+(e.gatewayData.contactQq?"<a"+e._ssrAttr("href","http://wpa.qq.com/msgrd?v=3&uin="+e.gatewayData.contactQq+"&site=qq&menu=yes")+' target="_blank" data-v-1e8e0c67><span data-v-1e8e0c67>QQ：<em data-v-1e8e0c67>'+e._ssrEscape(e._s(e.gatewayData.contactQq))+"</em></span></a>":"\x3c!----\x3e")+'</li> <li class="list_yq5" data-v-1e8e0c67><span data-v-1e8e0c67>区域：<em data-v-1e8e0c67>'+e._ssrEscape(e._s(e.gatewayData.locationProvince)+e._s(e.gatewayData.locationCity)+e._s(e.gatewayData.locationArea))+'</em></span></li> <li class="list_yq6" data-v-1e8e0c67><span data-v-1e8e0c67>详细地址：<em data-v-1e8e0c67>'+e._ssrEscape(e._s(e.gatewayData.parkAddress))+'</em></span><a target="_blank" data-v-1e8e0c67>[查看地图]</a></li></ul></div></div> <div class="left_jianjie_bt" data-v-1e8e0c67><span class="biaozhi" data-v-1e8e0c67></span><span data-v-1e8e0c67>园区信息</span></div> <div class="left_jianjie_nr" data-v-1e8e0c67><p data-v-1e8e0c67>'+e._ssrEscape(e._s(e.gatewayData.parkIntroduce))+'</p></div></div> <div class="list_tiaoj" data-v-1e8e0c67><span id="checked_zx" class="active" data-v-1e8e0c67>物流专线</span><span id="checked_wangdian" data-v-1e8e0c67>物流网点</span></div> '),e._ssrNode('<div class="list_left_zx" data-v-1e8e0c67>',"</div>",[e._ssrNode('<div class="w1036" style=" background-color: #fff;margin-bottom: 20px;" data-v-1e8e0c67><div class="select_con" data-v-1e8e0c67><dl data-v-1e8e0c67><dd style="margin-left: -80px;" data-v-1e8e0c67><div id="wlLineFrom" class="fl list_input" style="position:relative;" data-v-1e8e0c67><input name="cfd" data-toggle="city-picker" data-level="district" type="text" placeholder="请输入出发地" style="height: 100%;" data-v-1e8e0c67></div> <img'+e._ssrAttr("src",c(364))+' class="fl list_img" data-v-1e8e0c67> <div id="wlLineTo" class="fl list_input" style="position:relative;" data-v-1e8e0c67><input name="ddd" data-toggle="city-picker" data-level="district" type="text" placeholder="请输入到达地" style="height: 100%;" data-v-1e8e0c67></div> <input type="text" placeholder="请输入公司名称"'+e._ssrAttr("value",e.searchWLGS)+' class="list_input" data-v-1e8e0c67> <input name="Submit2" value="搜索" readonly="readonly" class="list_button" data-v-1e8e0c67> <input id="flush" name="Submit2" value="重置" readonly="readonly" data-v-1e8e0c67></dd> <dt data-v-1e8e0c67>排序 :</dt> <dd data-v-1e8e0c67>'+e._ssrList(e.AF025,function(t,c){return"<a"+e._ssrClass(null,[e.AF025Name===t.name?"now":""])+" data-v-1e8e0c67>"+e._ssrEscape(e._s(t.name))+"</a>"})+"</dd> <dt data-v-1e8e0c67>其他 :</dt> <dd data-v-1e8e0c67>"+e._ssrList(e.sortList,function(t,c){return"<a"+e._ssrClass(null,[e.sortName===t.name?"now":""])+" data-v-1e8e0c67>"+e._ssrEscape(e._s(t.name))+"</a>"})+"</dd></dl></div></div> "),e._ssrNode('<div class="w1036" data-v-1e8e0c67>',"</div>",[e._ssrNode('<dl class="zx_bt" data-v-1e8e0c67><dd class="bt01" data-v-1e8e0c67>出发地 → 到达地</dd> <dd class="bt02" data-v-1e8e0c67>重货价格</dd> <dd class="bt03" data-v-1e8e0c67>轻货价格</dd> <dd class="bt04" data-v-1e8e0c67>时效</dd> <dd class="bt05" data-v-1e8e0c67>物流公司</dd> <dd class="bt06" data-v-1e8e0c67>操作</dd></dl> '),e._ssrNode('<ul class="zx_nr " style="margin-top: 0px;" data-v-1e8e0c67>',"</ul>",[e._ssrNode((0===e.transportRange.length?'<div class="list_none" style="display: block;" data-v-1e8e0c67><span data-v-1e8e0c67>暂时没有找到您要查询的信息，可以看看其他物流园区哦</span> <img'+e._ssrAttr("src",c(118))+" data-v-1e8e0c67></div>":"\x3c!----\x3e")+" "),e._l(e.transportRange,function(t,c){return e._ssrNode("<li data-v-1e8e0c67>","</li>",[e._ssrNode("<a"+e._ssrAttr("href","/zhuanxian/detail?id="+t.rangeId+"&publishId="+t.companyId)+' target="_blank" data-v-1e8e0c67><span class="nr01" data-v-1e8e0c67>'+e._ssrEscape(e._s(t.startCity)+e._s(t.startArea)+" → "+e._s(t.endCity)+e._s(t.endArea))+"</span></a> "),e._ssrNode("<a"+e._ssrAttr("href","/zhuanxian/detail?id="+t.rangeId+"&publishId="+t.companyId)+' target="_blank" data-v-1e8e0c67>',"</a>",[e._ssrNode('<span class="nr02" data-v-1e8e0c67>',"</span>",[d("font",{staticStyle:{color:"#f00"}},[e._v(e._s(t.discountPrice0?t.discountPrice0:t.primeryPrice0))]),e._ssrNode("元/公斤")],2)]),e._ssrNode(" "),e._ssrNode("<a"+e._ssrAttr("href","/zhuanxian/detail?id="+t.rangeId+"&publishId="+t.companyId)+' target="_blank" data-v-1e8e0c67>',"</a>",[e._ssrNode('<span class="nr03" data-v-1e8e0c67>',"</span>",[d("font",{staticStyle:{color:"#f00"}},[e._v(e._s(t.primeryPrice1))]),e._ssrNode("元/方")],2)]),e._ssrNode(" <a"+e._ssrAttr("href","/zhuanxian/detail?id="+t.rangeId+"&publishId="+t.companyId)+' target="_blank" data-v-1e8e0c67><span class="nr04" data-v-1e8e0c67>'+e._ssrEscape(e._s(t.transportAging)+e._s(t.transportAgingUnit))+"</span></a> <a"+e._ssrAttr("href","/zhuanxian/detail?id="+t.rangeId+"&publishId="+t.companyId)+' target="_blank" data-v-1e8e0c67><span class="nr05" data-v-1e8e0c67>'+e._ssrEscape(e._s(t.companyName))+"</span></a> <a"+e._ssrAttr("href","/zhuanxian/detail?id="+t.rangeId+"&publishId="+t.companyId)+' target="_blank" data-v-1e8e0c67><span class="nr06" data-v-1e8e0c67>详情</span></a>')],2)})],2)],2),e._ssrNode(' <div class="box" style="float: right;margin-right: 160px;" data-v-1e8e0c67><div id="pagination1" class="page fl" data-v-1e8e0c67></div> <div class="info fl" data-v-1e8e0c67></div></div>')],2),e._ssrNode(" "),e._ssrNode('<div class="list_left_wangdian" data-v-1e8e0c67>',"</div>",[e._ssrNode('<div class="w1036" style=" background-color: #fff;margin-bottom: 20px;" data-v-1e8e0c67><div class="select_con" data-v-1e8e0c67><dl data-v-1e8e0c67><dd style="margin-left: -80px;" data-v-1e8e0c67><input type="text" placeholder="请输入网点名称"'+e._ssrAttr("value",e.searchWDKey)+' class="list_input" data-v-1e8e0c67> <input value=" 搜索 " readonly="readonly" class="list_button" data-v-1e8e0c67></dd> <dt data-v-1e8e0c67>其他 :</dt> <dd data-v-1e8e0c67><a class="now all" data-v-1e8e0c67>不限</a> <a class="shiming" data-v-1e8e0c67>认证</a></dd></dl></div></div> '),e._ssrNode('<div class="w1036" data-v-1e8e0c67>',"</div>",[e._ssrNode((0===e.logisticsCompany.length?'<div class="list_none" style="display: block;" data-v-1e8e0c67><span data-v-1e8e0c67>暂时没有找到您要查询的信息，可以看看其他物流园区哦</span> <img'+e._ssrAttr("src",c(118))+" data-v-1e8e0c67></div>":"\x3c!----\x3e")+" "),e._l(e.logisticsCompany,function(t,r){return e._ssrNode('<ul class="wlzx_list" data-v-1e8e0c67>',"</ul>",[e._ssrNode('<li class="wlzx_list_2" data-v-1e8e0c67>',"</li>",[e._ssrNode('<p class="p1" data-v-1e8e0c67>',"</p>",[d("font",[e._v(e._s(t.pointName))]),e._ssrNode(t.qq?"<a"+e._ssrAttr("href","http://wpa.qq.com/msgrd?v="+t.qq+"&uin=&site=qq&menu=yes")+' target="_blank" data-v-1e8e0c67><img'+e._ssrAttr("src",c(365))+" data-v-1e8e0c67></a>":"\x3c!----\x3e")],2),e._ssrNode(' <p class="p2" data-v-1e8e0c67><a href="#" data-v-1e8e0c67>'+e._ssrEscape(e._s(t.companyName))+"</a></p> "+(t.credit>=0&&t.credit<=150?'<p class="p3" data-v-1e8e0c67><i data-v-1e8e0c67>信誉：</i> '+e._ssrList(t.starS,function(t,d){return"<img"+e._ssrAttr("src",c(234))+' class="xy_zuan" style="display: inline" data-v-1e8e0c67>'})+"</p>":"\x3c!----\x3e")+" "+(t.credit>=151?'<p class="p3" data-v-1e8e0c67><i data-v-1e8e0c67>信誉：</i> '+e._ssrList(t.starB,function(t,d){return"<img"+e._ssrAttr("src",c(235))+' class="xy_zuan" style="display: inline" data-v-1e8e0c67>'})+"</p>":"\x3c!----\x3e")+" "),e._ssrNode('<p class="p4" data-v-1e8e0c67>',"</p>",[e._ssrNode("<i data-v-1e8e0c67>联系人：</i>"),d("font",[e._v(e._s(t.contactsName))])],2),e._ssrNode(" "),e._ssrNode('<p class="p5" data-v-1e8e0c67>',"</p>",[e._ssrNode("<i data-v-1e8e0c67>电话：</i>"),d("font",[e._v(e._s(t.contactsTel)+e._s(t.mobile))])],2)],2),e._ssrNode(' <li class="wlzx_list_3" data-v-1e8e0c67><p class="p1" data-v-1e8e0c67><i data-v-1e8e0c67>经营范围：</i><span data-v-1e8e0c67>'+e._ssrEscape(e._s(t.productService1))+'</span></p> <p class="p2" data-v-1e8e0c67><i data-v-1e8e0c67>增值服务：</i><span data-v-1e8e0c67>'+e._ssrEscape(e._s(t.otherService1))+'</span></p></li> <li class="wlzx_list_4" data-v-1e8e0c67>'+("AF0010403"===t.authStatus?'<p class="p1" data-v-1e8e0c67><img'+e._ssrAttr("src",c(366))+" data-v-1e8e0c67></p>":"\x3c!----\x3e")+" "+(1===t.isVip?'<p class="p2" data-v-1e8e0c67><img'+e._ssrAttr("src",c(367))+" data-v-1e8e0c67></p>":"\x3c!----\x3e")+" "+(t.collateral>0?'<p class="p3" data-v-1e8e0c67><img'+e._ssrAttr("src",c(368))+" data-v-1e8e0c67></p>":"\x3c!----\x3e")+'</li> <li class="wlzx_list_6" data-v-1e8e0c67><p class="p1" data-v-1e8e0c67><a'+e._ssrAttr("href","/create/order?&uid="+t.account+"&publishId="+t.companyId)+' target="_blank" data-v-1e8e0c67><input value="下单" data-v-1e8e0c67></a></p><p class="p2" data-v-1e8e0c67><a'+e._ssrAttr("href","/member/"+t.companyId)+' target="_blank" data-v-1e8e0c67><input value="查看官网" data-v-1e8e0c67></a></p><p class="p3" data-v-1e8e0c67></p></li>')],2)})],2),e._ssrNode(' <div class="box" style="float: right;margin-right: 170px;" data-v-1e8e0c67><div id="pagination2" class="page fl" data-v-1e8e0c67></div> <div class="info fl" data-v-1e8e0c67></div></div>')],2)],2),e._ssrNode(" "),e._ssrNode('<div class="list_right" data-v-1e8e0c67>',"</div>",[e._ssrNode('<div class="zx_sx" data-v-1e8e0c67><span class="biaozhi" data-v-1e8e0c67></span><span data-v-1e8e0c67>承运商推荐</span></div> '+(0===e.companysList.length?'<div class="tj_none" data-v-1e8e0c67><span data-v-1e8e0c67>没有相关承运商推荐</span></div>':"\x3c!----\x3e")+" "),e._l(e.companysList,function(t,r){return e._ssrNode('<div class="tj_list tj_list0" data-v-1e8e0c67>',"</div>",[e._ssrNode('<p class="p1" data-v-1e8e0c67><span data-v-1e8e0c67>'+e._ssrEscape(e._s(t.companyName))+"</span></p> "+(t.credit>=0&&t.credit<=150?'<p class="p2" data-v-1e8e0c67>'+e._ssrList(t.starS,function(t,d){return"<img"+e._ssrAttr("src",c(234))+' class="xy_zuan" style="display: inline" data-v-1e8e0c67>'})+"</p>":"\x3c!----\x3e")+" "+(t.credit>=151?'<p class="p2" data-v-1e8e0c67>'+e._ssrList(t.starB,function(t,d){return"<img"+e._ssrAttr("src",c(235))+' class="xy_zuan" style="display: inline" data-v-1e8e0c67>'})+"</p>":"\x3c!----\x3e")+" "),e._ssrNode('<p class="p3" data-v-1e8e0c67>',"</p>",[e._ssrNode("<i data-v-63732202 data-v-1e8e0c67>联系人：</i>"),d("font",[e._v(e._s(t.contactsName))])],2),e._ssrNode(" "),e._ssrNode('<p class="p4" data-v-1e8e0c67>',"</p>",[e._ssrNode("<i data-v-1e8e0c67>电话：</i>"),d("font",[e._v(" "+e._s(t.mobile))])],2),e._ssrNode(" "),e._ssrNode('<p class="p5" data-v-1e8e0c67>',"</p>",[e._ssrNode("<i data-v-63732202 data-v-1e8e0c67>地址：</i>"),d("font",[e._v(e._s(t.address))])],2),e._ssrNode(' <p class="p6" data-v-1e8e0c67><a'+e._ssrAttr("href","/member/"+t.companyId)+' target="_blank" data-v-1e8e0c67><span data-v-63732202 data-v-1e8e0c67>查看 &gt;</span></a></p>')],2)})],2)],2)])},[],!1,function(e){},"1e8e0c67","d6d39708");t.default=component.exports}};
//# sourceMappingURL=3d38e480ed306eb0b2d6.js.map