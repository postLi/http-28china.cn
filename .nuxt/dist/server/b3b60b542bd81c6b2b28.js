exports.ids=[55],exports.modules={100:function(t,e,c){t.exports=c.p+"img/017cd2b.gif"},150:function(t,e,c){t.exports=c.p+"img/b4e72d6.png"},151:function(t,e,c){t.exports=c.p+"img/7dffb10.png"},152:function(t,e,c){t.exports=c.p+"img/7c0cfc9.png"},153:function(t,e,c){t.exports=c.p+"img/92f339f.png"},154:function(t,e,c){t.exports=c.p+"img/9cbef05.png"},155:function(t,e,c){t.exports=c.p+"img/70e28de.png"},381:function(t,e,c){"use strict";c.r(e);function d(t){t.credit>=0&&t.credit<=3&&(t.starS=new Array(1)),t.credit>=4&&t.credit<=10&&(t.starS=new Array(2)),t.credit>=11&&t.credit<=40&&(t.starS=new Array(3)),t.credit>=41&&t.credit<=90&&(t.starS=new Array(4)),t.credit>=91&&t.credit<=150&&(t.starS=new Array(5)),t.credit>=151&&t.credit<=250&&(t.starB=new Array(1)),t.credit>=251&&t.credit<=500&&(t.starB=new Array(2)),t.credit>=501&&t.credit<=1e3&&(t.starB=new Array(3)),t.credit>=1001&&t.credit<=2e3&&(t.starB=new Array(4)),t.credit>=2001&&(t.starB=new Array(5))}async function r(t,e,c={}){let d,r={currentPage:1,pageSize:100,vo:c};return await t.post("/aflc-portal/portalt/aflclogisticspark/v1/Gateway/getTransportRange/"+e.id,r).then(t=>{t.data.data.list.forEach(t=>{t.transportAgingUnit=t.transportAgingUnit.replace("多","")}),200===t.data.status&&(d=t.data.data.list)}),d}var f={name:"WuLiu",head:{link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/article_wlyq.css"}],script:[{src:"http://api.map.baidu.com/api?v=2.0&ak=e0abRWFWOrgmN7emYjQGPj4Z0vyTVTfo"}]},data:()=>({AF025Name:"不限",sortList:[{name:"默认排序",vo:{defaultSort:1}},{name:"交易量",vo:{orderNumber:1}},{name:"运输时效",vo:{transportAging:1}},{name:"重货价格",vo:{weigthPrice:1}}],sortName:"默认排序",searchWLGS:"",searchWDKey:""}),async asyncData({$axios:t,query:e}){let c=await t.get("/28-web/logisticsPark/"+e.id),f="";const n=c.data.data.longitude,l=c.data.data.latitude;n&&l&&(f=n+","+l);let o={currentPage:1,pageSize:100,vo:{parkId:e.id}},v=await t.post("/aflc-portal/portalt/aflcLogisticsCompany/v1/recommendCompanys",o);v.data.data.list.forEach(t=>{d(t)});const _=await r(t,e),m=await async function(t,e,c={parkId:1,defaultSort:1}){let r,f={currentPage:1,pageSize:100,vo:c};return await t.post("/aflc-portal/portalt/aflclogisticspark/v1/Gateway/getLogisticsCompany/"+e.id,f).then(t=>{t.data.data.list.forEach(t=>{JSON.parse(t.productService).length>0&&(t.productService1=`\n        ${JSON.parse(t.productService)[0]}\n        ${JSON.parse(t.productService)[1]}\n        ${JSON.parse(t.productService)[2]}`),JSON.parse(t.otherService).length>0&&(t.otherService1=`\n        ${JSON.parse(t.otherService)[0]}\n        ${JSON.parse(t.otherService)[1]}\n        ${JSON.parse(t.otherService)[2]}`),d(t)}),200===t.data.status&&(r=t.data.data.list)}),r}(t,e);let y=await t.get("/aflc-common/sysDict/getSysDictByCodeGet/AF025");return y.data.data.unshift({name:"不限",code:""}),{gatewayData:200===c.data.status?c.data.data:{},jwd:f,companysList:200===v.data.status?v.data.data.list:[],transportRange:_,logisticsCompany:m,AF025:200===y.data.status?y.data.data:[]}},mounted(){seajs.use(["../js/city-picker.data.js"],function(){seajs.use(["../js/city-picker.js"],function(){$("#checked_zx").click(function(){$(".list_left_zx").css("display","block"),$("#checked_zx").addClass("active"),$(".list_left_wangdian").css("display","none"),$("#checked_wangdian").removeClass("active")}),$("#checked_wangdian").click(function(){$(".list_left_zx").css("display","none"),$("#checked_zx").removeClass("active"),$(".list_left_wangdian").css("display","block"),$("#checked_wangdian").addClass("active")});var t=$.cookie("currentProvinceFullName"),e=$.cookie("currentAreaFullName");$("#arc_nav_a1").attr("href","/wuliu?tid=1&locationProvince="+t+"&locationCity="+e),$("#arc_nav_a1").html(e+"物流园区")})})},methods:{async searchWlLine(){let t=[],e=[];$("#wlLineFrom .select-item").each(function(i,e){t.push($(this).text())});let c=t[0],d=t[1],f=t[2];$("#wlLineTo .select-item").each(function(i,t){e.push($(this).text())});let n=e[0],l=e[1],o=e[2],v={companyName:this.searchWLGS,endArea:o,endCity:l,endProvince:n,startArea:f,startCity:d,startProvince:c};this.transportRange=await r(this.$axios,this.$route.query,v)},async flush(){$("#wlLineFrom input").citypicker("reset"),$("#wlLineTo input").citypicker("reset"),this.AF025Name="不限",this.sortName="默认排序",this.searchWLGS="",this.transportRange=await r(this.$axios,this.$route.query)},searchWD(){window.open("/gongsi?&wangdian="+this.searchWDKey)},async selectSort(t){this.sortName=t.name,this.transportRange=await r(this.$axios,this.$route.query,t.vo)},async selectAF025(t){this.AF025Name=t.name,this.transportRange=await r(this.$axios,this.$route.query,{otherServiceCode:t.code})},map_init(){let map=new BMap.Map("allmap"),t=(this.jwd?this.jwd:"113.339865,23.138652").split(","),e=new BMap.Point(parseFloat(t[0]),parseFloat(t[1]));map.centerAndZoom(e,17);let marker=new BMap.Marker(e);map.addOverlay(marker),marker.setAnimation(BMAP_ANIMATION_BOUNCE),map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),map.setCurrentCity("广州"),map.enableScrollWheelZoom(!0);var c={type:BMAP_NAVIGATION_CONTROL_SMALL};map.addControl(new BMap.NavigationControl(c))},map_block(){$("#allmap").css("display","block")},seeMap(){this.map_block(),this.map_init()}}},n=c(1);var component=Object(n.a)(f,function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[t._ssrNode('<div class="list_box" data-v-c53fb0fa>',"</div>",[t._ssrNode('<div class="list_nav" data-v-c53fb0fa><a href="/" data-v-c53fb0fa>物流首页</a>&gt;<a id="arc_nav_a1" href data-v-c53fb0fa>物流园区</a>&gt;<a data-v-c53fb0fa>'+t._ssrEscape(t._s(t.gatewayData.parkName))+"</a></div> "),t._ssrNode('<div class="list_left" data-v-c53fb0fa>',"</div>",[t._ssrNode('<div class="left_main" data-v-c53fb0fa><div class="left_bt" data-v-c53fb0fa><span data-v-c53fb0fa>'+t._ssrEscape(t._s(t.gatewayData.parkName))+'</span></div> <div class="left_nr" data-v-c53fb0fa><div class="left_nr_1" data-v-c53fb0fa><img'+t._ssrAttr("src",t.gatewayData.parkSignPicture?t.gatewayData.parkSignPicture:"../../static/images/article_wlzx/wlyq_pic.png")+" data-v-c53fb0fa></div> <div class=\"left_nr_2\" data-v-c53fb0fa><div id=\"allmap\" onmouseout=\"$('#allmap').css('display', 'none')\" onmouseover=\"$('#allmap').css('display', 'block')\" data-v-c53fb0fa></div> <ul data-v-c53fb0fa><li class=\"list_yq1\" data-v-c53fb0fa><img"+t._ssrAttr("src",c(150))+" data-v-c53fb0fa><span data-v-c53fb0fa>"+t._ssrEscape(t._s(t.gatewayData.parkContact))+'</span></li> <li class="list_yq2" data-v-c53fb0fa><img'+t._ssrAttr("src",c(151))+" data-v-c53fb0fa><span data-v-c53fb0fa>"+t._ssrEscape(t._s(t.gatewayData.parkMobile))+'</span></li> <li class="list_yq3" data-v-c53fb0fa><span data-v-c53fb0fa>电话：<em data-v-c53fb0fa>'+t._ssrEscape(t._s(t.gatewayData.parkNum))+'</em></span></li> <li class="list_yq4" data-v-c53fb0fa>'+(t.gatewayData.contactQq?"<a"+t._ssrAttr("href","http://wpa.qq.com/msgrd?v=3&uin="+t.gatewayData.contactQq+"&site=qq&menu=yes")+' target="_blank" data-v-c53fb0fa><span data-v-c53fb0fa>QQ：<em data-v-c53fb0fa>'+t._ssrEscape(t._s(t.gatewayData.contactQq))+"</em></span></a>":"\x3c!----\x3e")+'</li> <li class="list_yq5" data-v-c53fb0fa><span data-v-c53fb0fa>区域：<em data-v-c53fb0fa>'+t._ssrEscape(t._s(t.gatewayData.locationProvince)+t._s(t.gatewayData.locationCity)+t._s(t.gatewayData.locationArea))+'</em></span></li> <li class="list_yq6" data-v-c53fb0fa><span data-v-c53fb0fa>详细地址：<em data-v-c53fb0fa>'+t._ssrEscape(t._s(t.gatewayData.parkAddress))+'</em></span><a target="_blank" data-v-c53fb0fa>[查看地图]</a></li></ul></div></div> <div class="left_jianjie_bt" data-v-c53fb0fa><span class="biaozhi" data-v-c53fb0fa></span><span data-v-c53fb0fa>园区信息</span></div> <div class="left_jianjie_nr" data-v-c53fb0fa><p data-v-c53fb0fa>'+t._ssrEscape(t._s(t.gatewayData.parkIntroduce))+'</p></div></div> <div class="list_tiaoj" data-v-c53fb0fa><span id="checked_zx" class="active" data-v-c53fb0fa>物流专线</span><span id="checked_wangdian" data-v-c53fb0fa>物流网点</span></div> '),t._ssrNode('<div class="list_left_zx" data-v-c53fb0fa>',"</div>",[t._ssrNode('<div class="w1036" style=" background-color: #fff;margin-bottom: 20px;" data-v-c53fb0fa><div class="select_con" data-v-c53fb0fa><dl data-v-c53fb0fa><dd style="margin-left: -80px;" data-v-c53fb0fa><div id="wlLineFrom" class="fl list_input" style="position:relative;" data-v-c53fb0fa><input name="cfd" data-toggle="city-picker" data-level="district" type="text" placeholder="请输入出发地" style="height: 100%;" data-v-c53fb0fa></div> <img'+t._ssrAttr("src",c(152))+' class="fl list_img" data-v-c53fb0fa> <div id="wlLineTo" class="fl list_input" style="position:relative;" data-v-c53fb0fa><input name="ddd" data-toggle="city-picker" data-level="district" type="text" placeholder="请输入到达地" style="height: 100%;" data-v-c53fb0fa></div> <input type="text" placeholder="请输入公司名称"'+t._ssrAttr("value",t.searchWLGS)+' class="list_input" data-v-c53fb0fa> <input name="Submit2" value="搜索" readonly="readonly" class="list_button" data-v-c53fb0fa> <input id="flush" name="Submit2" value="重置" readonly="readonly" data-v-c53fb0fa></dd> <dt data-v-c53fb0fa>排序 :</dt> <dd data-v-c53fb0fa>'+t._ssrList(t.AF025,function(e,c){return"<a"+t._ssrClass(null,[t.AF025Name===e.name?"now":""])+" data-v-c53fb0fa>"+t._ssrEscape(t._s(e.name))+"</a>"})+"</dd> <dt data-v-c53fb0fa>其他 :</dt> <dd data-v-c53fb0fa>"+t._ssrList(t.sortList,function(e,c){return"<a"+t._ssrClass(null,[t.sortName===e.name?"now":""])+" data-v-c53fb0fa>"+t._ssrEscape(t._s(e.name))+"</a>"})+"</dd></dl></div></div> "),t._ssrNode('<div class="w1036" data-v-c53fb0fa>',"</div>",[t._ssrNode('<dl class="zx_bt" data-v-c53fb0fa><dd class="bt01" data-v-c53fb0fa>出发地 → 到达地</dd> <dd class="bt02" data-v-c53fb0fa>重货价格</dd> <dd class="bt03" data-v-c53fb0fa>轻货价格</dd> <dd class="bt04" data-v-c53fb0fa>时效</dd> <dd class="bt05" data-v-c53fb0fa>物流公司</dd> <dd class="bt06" data-v-c53fb0fa>操作</dd></dl> '),t._ssrNode('<ul class="zx_nr " style="margin-top: 0px;" data-v-c53fb0fa>',"</ul>",[t._ssrNode((0===t.transportRange.length?'<div class="list_none" style="display: block;" data-v-c53fb0fa><span data-v-c53fb0fa>暂时没有找到您要查询的信息，可以看看其他物流园区哦</span> <img'+t._ssrAttr("src",c(84))+" data-v-c53fb0fa></div>":"\x3c!----\x3e")+" "),t._l(t.transportRange,function(e,c){return t._ssrNode("<li data-v-c53fb0fa>","</li>",[t._ssrNode("<a"+t._ssrAttr("href","/shixiao/detail?id="+e.rangeId+"&publishId="+e.companyId)+' target="_blank" data-v-c53fb0fa><span class="nr01" data-v-c53fb0fa>'+t._ssrEscape(t._s(e.startCity)+t._s(e.startArea)+" → "+t._s(e.endCity)+t._s(e.endArea))+"</span></a> "),t._ssrNode("<a"+t._ssrAttr("href","/shixiao/detail?id="+e.rangeId+"&publishId="+e.companyId)+' target="_blank" data-v-c53fb0fa>',"</a>",[t._ssrNode('<span class="nr02" data-v-c53fb0fa>',"</span>",[d("font",{staticStyle:{color:"#f00"}},[t._v(t._s(e.discountPrice0?e.discountPrice0:e.primeryPrice0))]),t._ssrNode("元/公斤")],2)]),t._ssrNode(" "),t._ssrNode("<a"+t._ssrAttr("href","/shixiao/detail?id="+e.rangeId+"&publishId="+e.companyId)+' target="_blank" data-v-c53fb0fa>',"</a>",[t._ssrNode('<span class="nr03" data-v-c53fb0fa>',"</span>",[d("font",{staticStyle:{color:"#f00"}},[t._v(t._s(e.primeryPrice1))]),t._ssrNode("元/方")],2)]),t._ssrNode(" <a"+t._ssrAttr("href","/shixiao/detail?id="+e.rangeId+"&publishId="+e.companyId)+' target="_blank" data-v-c53fb0fa><span class="nr04" data-v-c53fb0fa>'+t._ssrEscape(t._s(e.transportAging)+t._s(e.transportAgingUnit))+"</span></a> <a"+t._ssrAttr("href","/shixiao/detail?id="+e.rangeId+"&publishId="+e.companyId)+' target="_blank" data-v-c53fb0fa><span class="nr05" data-v-c53fb0fa>'+t._ssrEscape(t._s(e.companyName))+"</span></a> <a"+t._ssrAttr("href","/shixiao/detail?id="+e.rangeId+"&publishId="+e.companyId)+' target="_blank" data-v-c53fb0fa><span class="nr06" data-v-c53fb0fa>详情</span></a>')],2)})],2)],2),t._ssrNode(' <div class="box" style="float: right;margin-right: 160px;" data-v-c53fb0fa><div id="pagination1" class="page fl" data-v-c53fb0fa></div> <div class="info fl" data-v-c53fb0fa></div></div>')],2),t._ssrNode(" "),t._ssrNode('<div class="list_left_wangdian" data-v-c53fb0fa>',"</div>",[t._ssrNode('<div class="w1036" style=" background-color: #fff;margin-bottom: 20px;" data-v-c53fb0fa><div class="select_con" data-v-c53fb0fa><dl data-v-c53fb0fa><dd style="margin-left: -80px;" data-v-c53fb0fa><input type="text" placeholder="请输入网点名称"'+t._ssrAttr("value",t.searchWDKey)+' class="list_input" data-v-c53fb0fa> <input value=" 搜索 " readonly="readonly" class="list_button" data-v-c53fb0fa></dd> <dt data-v-c53fb0fa>其他 :</dt> <dd data-v-c53fb0fa><a class="now all" data-v-c53fb0fa>不限</a> <a class="shiming" data-v-c53fb0fa>认证</a></dd></dl></div></div> '),t._ssrNode('<div class="w1036" data-v-c53fb0fa>',"</div>",[t._ssrNode((0===t.logisticsCompany.length?'<div class="list_none" style="display: block;" data-v-c53fb0fa><span data-v-c53fb0fa>暂时没有找到您要查询的信息，可以看看其他物流园区哦</span> <img'+t._ssrAttr("src",c(84))+" data-v-c53fb0fa></div>":"\x3c!----\x3e")+" "),t._l(t.logisticsCompany,function(e,r){return t._ssrNode('<ul class="wlzx_list" data-v-c53fb0fa>',"</ul>",[t._ssrNode('<li class="wlzx_list_2" data-v-c53fb0fa>',"</li>",[t._ssrNode('<p class="p1" data-v-c53fb0fa>',"</p>",[d("font",[t._v(t._s(e.pointName))]),t._ssrNode(e.qq?"<a"+t._ssrAttr("href","http://wpa.qq.com/msgrd?v="+e.qq+"&uin=&site=qq&menu=yes")+' target="_blank" data-v-c53fb0fa><img'+t._ssrAttr("src",c(100))+" data-v-c53fb0fa></a>":"\x3c!----\x3e")],2),t._ssrNode(' <p class="p2" data-v-c53fb0fa><a href="#" data-v-c53fb0fa>'+t._ssrEscape(t._s(e.companyName))+"</a></p> "+(e.credit>=0&&e.credit<=150?'<p class="p3" data-v-c53fb0fa><i data-v-c53fb0fa>信誉：</i> '+t._ssrList(e.starS,function(e,d){return"<img"+t._ssrAttr("src",c(92))+' class="xy_zuan" style="display: inline" data-v-c53fb0fa>'})+"</p>":"\x3c!----\x3e")+" "+(e.credit>=151?'<p class="p3" data-v-c53fb0fa><i data-v-c53fb0fa>信誉：</i> '+t._ssrList(e.starB,function(e,d){return"<img"+t._ssrAttr("src",c(93))+' class="xy_zuan" style="display: inline" data-v-c53fb0fa>'})+"</p>":"\x3c!----\x3e")+" "),t._ssrNode('<p class="p4" data-v-c53fb0fa>',"</p>",[t._ssrNode("<i data-v-c53fb0fa>联系人：</i>"),d("font",[t._v(t._s(e.contactsName))])],2),t._ssrNode(" "),t._ssrNode('<p class="p5" data-v-c53fb0fa>',"</p>",[t._ssrNode("<i data-v-c53fb0fa>电话：</i>"),d("font",[t._v(t._s(e.contactsTel)+t._s(e.mobile))])],2)],2),t._ssrNode(' <li class="wlzx_list_3" data-v-c53fb0fa><p class="p1" data-v-c53fb0fa><i data-v-c53fb0fa>经营范围：</i><span data-v-c53fb0fa>'+t._ssrEscape(t._s(e.productService1))+'</span></p> <p class="p2" data-v-c53fb0fa><i data-v-c53fb0fa>增值服务：</i><span data-v-c53fb0fa>'+t._ssrEscape(t._s(e.otherService1))+'</span></p></li> <li class="wlzx_list_4" data-v-c53fb0fa>'+("AF0010403"===e.authStatus?'<p class="p1" data-v-c53fb0fa><img'+t._ssrAttr("src",c(153))+" data-v-c53fb0fa></p>":"\x3c!----\x3e")+" "+(1===e.isVip?'<p class="p2" data-v-c53fb0fa><img'+t._ssrAttr("src",c(154))+" data-v-c53fb0fa></p>":"\x3c!----\x3e")+" "+(e.collateral>0?'<p class="p3" data-v-c53fb0fa><img'+t._ssrAttr("src",c(155))+" data-v-c53fb0fa></p>":"\x3c!----\x3e")+'</li> <li class="wlzx_list_6" data-v-c53fb0fa><p class="p1" data-v-c53fb0fa><a'+t._ssrAttr("href","/create/order?&uid="+e.account+"&publishId="+e.companyId)+' target="_blank" data-v-c53fb0fa><input value="下单" data-v-c53fb0fa></a></p><p class="p2" data-v-c53fb0fa><a'+t._ssrAttr("href","/member/"+e.companyId)+' target="_blank" data-v-c53fb0fa><input value="查看官网" data-v-c53fb0fa></a></p><p class="p3" data-v-c53fb0fa></p></li>')],2)})],2),t._ssrNode(' <div class="box" style="float: right;margin-right: 170px;" data-v-c53fb0fa><div id="pagination2" class="page fl" data-v-c53fb0fa></div> <div class="info fl" data-v-c53fb0fa></div></div>')],2)],2),t._ssrNode(" "),t._ssrNode('<div class="list_right" data-v-c53fb0fa>',"</div>",[t._ssrNode('<div class="zx_sx" data-v-c53fb0fa><span class="biaozhi" data-v-c53fb0fa></span><span data-v-c53fb0fa>承运商推荐</span></div> '+(0===t.companysList.length?'<div class="tj_none" data-v-c53fb0fa><span data-v-c53fb0fa>没有相关承运商推荐</span></div>':"\x3c!----\x3e")+" "),t._l(t.companysList,function(e,r){return t._ssrNode('<div class="tj_list tj_list0" data-v-c53fb0fa>',"</div>",[t._ssrNode('<p class="p1" data-v-c53fb0fa><span data-v-c53fb0fa>'+t._ssrEscape(t._s(e.companyName))+"</span></p> "+(e.credit>=0&&e.credit<=150?'<p class="p2" data-v-c53fb0fa>'+t._ssrList(e.starS,function(e,d){return"<img"+t._ssrAttr("src",c(92))+' class="xy_zuan" style="display: inline" data-v-c53fb0fa>'})+"</p>":"\x3c!----\x3e")+" "+(e.credit>=151?'<p class="p2" data-v-c53fb0fa>'+t._ssrList(e.starB,function(e,d){return"<img"+t._ssrAttr("src",c(93))+' class="xy_zuan" style="display: inline" data-v-c53fb0fa>'})+"</p>":"\x3c!----\x3e")+" "),t._ssrNode('<p class="p3" data-v-c53fb0fa>',"</p>",[t._ssrNode("<i data-v-63732202 data-v-c53fb0fa>联系人：</i>"),d("font",[t._v(t._s(e.contactsName))])],2),t._ssrNode(" "),t._ssrNode('<p class="p4" data-v-c53fb0fa>',"</p>",[t._ssrNode("<i data-v-c53fb0fa>电话：</i>"),d("font",[t._v(" "+t._s(e.mobile))])],2),t._ssrNode(" "),t._ssrNode('<p class="p5" data-v-c53fb0fa>',"</p>",[t._ssrNode("<i data-v-63732202 data-v-c53fb0fa>地址：</i>"),d("font",[t._v(t._s(e.address))])],2),t._ssrNode(' <p class="p6" data-v-c53fb0fa><a'+t._ssrAttr("href","/member/"+e.companyId)+' target="_blank" data-v-c53fb0fa><span data-v-63732202 data-v-c53fb0fa>查看 &gt;</span></a></p>')],2)})],2)],2)])},[],!1,function(t){},"c53fb0fa","196456fc");e.default=component.exports},84:function(t,e,c){t.exports=c.p+"img/58a2773.png"},92:function(t,e,c){t.exports=c.p+"img/6ad6f1a.gif"},93:function(t,e,c){t.exports=c.p+"img/d7cb4dd.gif"}};
//# sourceMappingURL=b3b60b542bd81c6b2b28.js.map