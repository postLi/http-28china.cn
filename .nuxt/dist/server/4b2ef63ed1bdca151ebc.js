exports.ids=[71],exports.modules={152:function(t,d,e){"use strict";var c={props:{showDefault:{type:Boolean,default:!0},list:{type:Array,default:()=>[]},getCode:{type:Boolean,default:!0},code:{type:String,default:""},name:{type:String,default:""}},data:()=>({current:"",datas:[]}),mounted(){0},methods:{fetchData(t){return this.$store.dispatch("getDictList",{name:this.name})},initCurrent(){if(this.code){let t="";this.datas.forEach((d,e)=>{d.code===this.code&&(t=e)}),this.current=t}else this.current=""},setVal(code,t,d){this.current=d;let e=t.replace(/>(.*)/,"$1-").split("-");this.getCode&&(e=code),this.$emit("input",e),this.$emit("change",e)}}},l=e(0),component=Object(l.a)(c,function(){var t=this,d=t.$createElement;return(t._self._c||d)("span",[t._ssrNode((t.showDefault?'<a href="#"'+t._ssrClass("all",""===t.current?"now":"")+">不限</a>":"\x3c!----\x3e")+" "+t._ssrList(t.datas,function(d,e){return"<a"+t._ssrAttr("rel",d.code)+' href="#"'+t._ssrClass(null,t.current===e?"now":"")+">"+t._ssrEscape(t._s(d.name))+"</a>"}))])},[],!1,null,null,"085e3e1d");d.a=component.exports},206:function(t,d,e){var content=e(346);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var c=e(3).default;t.exports.__inject__=function(t){c("67b0fad4",content,!0,t)}},345:function(t,d,e){"use strict";e.r(d);var c=e(206),l=e.n(c);for(var r in c)"default"!==r&&function(t){e.d(d,t,function(){return c[t]})}(r);d.default=l.a},346:function(t,d,e){(t.exports=e(2)(!1)).push([t.i,".left_main[data-v-ed94c8d2]{min-height:420px}.wlzx_list_2 .p3 img[data-v-ed94c8d2]{display:inline!important}",""])},492:function(t,d,e){"use strict";e.r(d);var c=e(22),l=e(152);async function r(t,d){let data={list:[],total:0},e={currentPage:d.currentPage||1,pageSize:d.pageSize||10,parkId:d.id,comAuthStatus:d.comAuthStatus,companyName:d.companyName};return await t.post("/28-web/pointNetwork/findParkNet",e).then(t=>{200===t.data.status&&(data.list=t.data.data.list,data.total=t.data.data.pages)}),data}async function n(t,d,e={}){let data={list:[],total:0},c=d;return c.parkId=d.id,await t.post("/28-web/range/park/list",c).then(t=>{200===t.data.status&&(t.data.data.list.forEach(t=>{t.transportAgingUnit=t.transportAgingUnit.replace("多","")}),data.list=t.data.data.list,data.total=t.data.data.pages)}),data}var o={name:"WuLiu",components:{creditIcon:c.a,selectType:l.a},head(){return{title:this.title,link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/article_wlyq.css?v2"}],script:[{src:"http://api.map.baidu.com/api?v=2.0&ak=e0abRWFWOrgmN7emYjQGPj4Z0vyTVTfo"}]}},data:()=>({AF025Name:"不限",sortList:[{name:"默认排序",code:"default"},{name:"交易量",code:"orderDesc"},{name:"运输时效",code:"transportAgingAsc"},{name:"重货价格",code:"weigthPriceAsc"}],sortName:"默认排序",searchWLGS:"",searchWDKey:"",transportRange:[],logisticsCompany:[],companysList:[],title:"",vo1Total:0,vo2Total:0,vo1:{pageSize:10,currentPage:1,otherServiceCode:"",orderBy:"",companyName:""},vo2:{pageSize:10,currentPage:1,comAuthStatus:"",companyName:""}}),async asyncData({$axios:t,query:d}){let e=await t.get("/28-web/logisticsPark/"+d.id).catch(t=>{}),c="",l="",o="",data={},title="";e.data.data&&200===e.data.status&&(l=(data=e.data.data).longitude,o=data.latitude,title=data.parkName+" "+(data.locationProvince?data.locationProvince+"物流园区":"")+(data.locationCity?" "+data.locationCity+"物流园区":"")),l&&o&&(c=l+","+o);let v={pageSize:10,currentPage:1,otherServiceCode:"",orderBy:"",companyName:""},_={pageSize:10,currentPage:1,comAuthStatus:"",companyName:""};v.id=d.id,_.id=d.id;const m=await n(t,v),h=await r(t,_);let y=await t.get("/28-web/logisticsCompany/excellent?pageSize=8&parkId="+d.id+"&flag=");return{gatewayData:data,jwd:c,vo1:v,vo2:_,transportRange:m.list,vo1Total:m.total,logisticsCompany:h.list,vo2Total:h.total,companysList:200===y.data.status?y.data.data:[],title:title}},async mounted(){},methods:{async searchWlLine(){let t=[],d=[];$("#wlLineFrom .select-item").each(function(i,d){t.push($(this).text())});let e=t[0],c=t[1],l=t[2];$("#wlLineTo .select-item").each(function(i,t){d.push($(this).text())});let r=d[0],n=d[1],o=d[2];this.vo1=Object.assign(this.vo1,{endArea:o,endCity:n,endProvince:r,startArea:l,startCity:c,startProvince:e}),this.fetchData(!0)},async flush(){location.reload()},searchWD(){this.fetchData2(!0)},map_init(){let map=new BMap.Map("allmap"),t=(this.jwd?this.jwd:"113.339865,23.138652").split(","),d=new BMap.Point(parseFloat(t[0]),parseFloat(t[1]));map.centerAndZoom(d,17);let marker=new BMap.Marker(d);map.addOverlay(marker),marker.setAnimation(BMAP_ANIMATION_BOUNCE),map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),map.setCurrentCity("广州"),map.enableScrollWheelZoom(!0);var e={type:BMAP_NAVIGATION_CONTROL_SMALL};map.addControl(new BMap.NavigationControl(e))},map_block(){$("#allmap").css("display","block")},seeMap(){this.map_block(),this.map_init()},async fetchData(t){const d=await n(this.$axios,this.vo1);this.transportRange=d.list,this.vo1Total=d.total,t&&this.initPage()},initPage(){let t=this;$("#pagination1").pagination({currentPage:1,totalPage:t.vo1Total,callback:function(d){t.vo1.currentPage=d,t.fetchData()}})},async fetchData2(t){const d=await r(this.$axios,this.vo2);this.logisticsCompany=d.list,this.vo2Total=d.total,t&&this.initPage2()},initPage2(){let t=this;console.log("_this.vo2Total:",t.vo2Total),$("#pagination2").pagination({currentPage:1,count:10,totalPage:t.vo2Total,callback:function(d){t.vo2.currentPage=d,t.fetchData2()}})}}},v=e(0);var component=Object(v.a)(o,function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("div",[t._ssrNode('<div class="list_box" data-v-ed94c8d2>',"</div>",[t._ssrNode('<div class="list_nav" data-v-ed94c8d2><a href="/" data-v-ed94c8d2>物流首页</a>&gt;<a id="arc_nav_a1" href data-v-ed94c8d2>物流园区</a>&gt;<a data-v-ed94c8d2>'+t._ssrEscape(t._s(t.gatewayData.parkName))+"</a></div> "),t._ssrNode('<div class="list_left" data-v-ed94c8d2>',"</div>",[t._ssrNode('<div class="left_main" data-v-ed94c8d2><div class="left_bt" data-v-ed94c8d2><span data-v-ed94c8d2>'+t._ssrEscape(t._s(t.gatewayData.parkName))+'</span></div> <div class="left_nr" data-v-ed94c8d2><div class="left_nr_1" data-v-ed94c8d2><img'+t._ssrAttr("src",t.gatewayData.parkSignPicture?t.gatewayData.parkSignPicture:"/yuanqu/images/wlyq_pic.png")+" alt data-v-ed94c8d2></div> <div class=\"left_nr_2\" data-v-ed94c8d2><div id=\"allmap\" onmouseout=\"$('#allmap').css('display', 'none')\" onmouseover=\"$('#allmap').css('display', 'block')\" data-v-ed94c8d2></div> <ul data-v-ed94c8d2><li class=\"list_yq1\" data-v-ed94c8d2><img src=\"/images/article_wlzx/peple.png\" data-v-ed94c8d2><span data-v-ed94c8d2>"+t._ssrEscape(t._s(t.gatewayData.parkContact||"暂无"))+'</span></li> <li class="list_yq2" data-v-ed94c8d2><img src="/images/article_wlzx/phone-ico.png" data-v-ed94c8d2><span data-v-ed94c8d2>'+t._ssrEscape(t._s(t.gatewayData.parkMobile||"暂无"))+'</span></li> <li class="list_yq3" data-v-ed94c8d2><span data-v-ed94c8d2>电话：<em data-v-ed94c8d2>'+t._ssrEscape(t._s(t.gatewayData.parkNum||"暂无"))+'</em></span></li> <li class="list_yq4" data-v-ed94c8d2>'+(t.gatewayData.contactQq?"<a"+t._ssrAttr("href","http://wpa.qq.com/msgrd?v=3&uin="+t.gatewayData.contactQq+"&site=qq&menu=yes")+' target="_blank" data-v-ed94c8d2><span data-v-ed94c8d2>QQ：<em data-v-ed94c8d2>'+t._ssrEscape(t._s(t.gatewayData.contactQq))+"</em></span></a>":"\x3c!----\x3e")+'</li> <li class="list_yq5" data-v-ed94c8d2><span data-v-ed94c8d2>区域：<em data-v-ed94c8d2>'+t._ssrEscape(t._s(t.gatewayData.locationProvince)+t._s(t.gatewayData.locationCity)+t._s(t.gatewayData.locationArea))+'</em></span></li> <li class="list_yq6" data-v-ed94c8d2><span data-v-ed94c8d2>详细地址：<em data-v-ed94c8d2>'+t._ssrEscape(t._s(t.gatewayData.parkAddress||"暂无"))+'</em></span><a target="_blank" data-v-ed94c8d2>[查看地图]</a></li></ul></div></div> <div class="left_jianjie_bt"'+t._ssrStyle(null,null,{display:t.gatewayData.parkIntroduce?"":"none"})+' data-v-ed94c8d2><span class="biaozhi" data-v-ed94c8d2></span><span data-v-ed94c8d2>园区信息</span></div> <div class="left_jianjie_nr"'+t._ssrStyle(null,null,{display:t.gatewayData.parkIntroduce?"":"none"})+" data-v-ed94c8d2><p data-v-ed94c8d2>"+t._ssrEscape(t._s(t.gatewayData.parkIntroduce||"暂无园区信息"))+'</p></div></div> <div class="list_tiaoj" data-v-ed94c8d2><span id="checked_zx" class="active" data-v-ed94c8d2>物流专线</span><span id="checked_wangdian" data-v-ed94c8d2>物流网点</span></div> '),t._ssrNode('<div class="list_left_zx" data-v-ed94c8d2>',"</div>",[t._ssrNode('<div class="w1036" style=" background-color: #fff;margin-bottom: 20px;" data-v-ed94c8d2>',"</div>",[t._ssrNode('<div class="select_con" data-v-ed94c8d2>',"</div>",[t._ssrNode("<dl data-v-ed94c8d2>","</dl>",[t._ssrNode('<dd style="margin-left: -80px;" data-v-ed94c8d2><div id="wlLineFrom" class="fl list_input" style="position:relative;" data-v-ed94c8d2><input name="cfd" data-toggle="city-picker" data-level="district" type="text" placeholder="请输入出发地" style="height: 100%;" data-v-ed94c8d2></div> <img src="/images/02jiantou.png" class="fl list_img" data-v-ed94c8d2> <div id="wlLineTo" class="fl list_input" style="position:relative;" data-v-ed94c8d2><input name="ddd" data-toggle="city-picker" data-level="district" type="text" placeholder="请输入到达地" style="height: 100%;" data-v-ed94c8d2></div> <input type="text" placeholder="请输入公司名称"'+t._ssrAttr("value",t.vo1.companyName)+' class="list_input" data-v-ed94c8d2> <input name="Submit2" value="搜索" readonly="readonly" class="list_button" data-v-ed94c8d2> <input id="flush" name="Submit2" value="重置" readonly="readonly" data-v-ed94c8d2></dd> <dt data-v-ed94c8d2>增值服务 :</dt> '),t._ssrNode("<dd data-v-ed94c8d2>","</dd>",[e("selectType",{attrs:{name:"AF025"},on:{change:t.searchWlLine},model:{value:t.vo1.otherServiceCode,callback:function(d){t.$set(t.vo1,"otherServiceCode",d)},expression:"vo1.otherServiceCode"}})],1),t._ssrNode(" <dt data-v-ed94c8d2>排序 :</dt> "),t._ssrNode("<dd data-v-ed94c8d2>","</dd>",[e("selectType",{attrs:{list:t.sortList,code:t.sortList[0].code,"show-default":!1},on:{change:t.searchWlLine},model:{value:t.vo1.orderBy,callback:function(d){t.$set(t.vo1,"orderBy",d)},expression:"vo1.orderBy"}})],1)],2)])]),t._ssrNode(" "),t._ssrNode('<div class="w1036" data-v-ed94c8d2>',"</div>",[t._ssrNode('<dl class="zx_bt" data-v-ed94c8d2><dd class="bt01" data-v-ed94c8d2>出发地 → 到达地</dd> <dd class="bt02" data-v-ed94c8d2>重货价格</dd> <dd class="bt03" data-v-ed94c8d2>轻货价格</dd> <dd class="bt04" data-v-ed94c8d2>时效</dd> <dd class="bt05" data-v-ed94c8d2>物流公司</dd> <dd class="bt06" data-v-ed94c8d2>操作</dd></dl> '),t._ssrNode('<ul class="zx_nr " style="margin-top: 0px;" data-v-ed94c8d2>',"</ul>",[t._ssrNode((0===t.transportRange.length?'<div class="list_none" style="display: block;" data-v-ed94c8d2><span data-v-ed94c8d2>暂时没有找到您要查询的信息，可以看看其他物流园区哦</span> <img src="/images/none_pic.png" data-v-ed94c8d2></div>':"\x3c!----\x3e")+" "),t._l(t.transportRange,function(d,c){return t._ssrNode("<li data-v-ed94c8d2>","</li>",[t._ssrNode("<a"+t._ssrAttr("href","/zhuanxian/detail?id="+d.id+"&publishId="+d.publishId)+' target="_blank" data-v-ed94c8d2><span class="nr01" data-v-ed94c8d2>'+t._ssrEscape(t._s(d.startCity)+t._s(d.startArea)+" → "+t._s(d.endCity)+t._s(d.endArea))+"</span></a> "),t._ssrNode("<a"+t._ssrAttr("href","/zhuanxian/detail?id="+d.id+"&publishId="+d.publishId)+' target="_blank" data-v-ed94c8d2>',"</a>",[t._ssrNode('<span class="nr02" data-v-ed94c8d2>',"</span>",[e("font",{staticStyle:{color:"#f00"}},[t._v(t._s(d.weightDiscountPrice||d.weightPrice))]),t._ssrNode("元/公斤")],2)]),t._ssrNode(" "),t._ssrNode("<a"+t._ssrAttr("href","/zhuanxian/detail?id="+d.id+"&publishId="+d.publishId)+' target="_blank" data-v-ed94c8d2>',"</a>",[t._ssrNode('<span class="nr03" data-v-ed94c8d2>',"</span>",[e("font",{staticStyle:{color:"#f00"}},[t._v(t._s(d.lightDiscountPrice||d.lightPrice))]),t._ssrNode("元/方")],2)]),t._ssrNode(" <a"+t._ssrAttr("href","/zhuanxian/detail?id="+d.id+"&publishId="+d.publishId)+' target="_blank" data-v-ed94c8d2><span class="nr04" data-v-ed94c8d2>'+t._ssrEscape(t._s(d.transportAging)+t._s(d.transportAgingUnit))+"</span></a> <a"+t._ssrAttr("href","/zhuanxian/detail?id="+d.id+"&publishId="+d.publishId)+' target="_blank" data-v-ed94c8d2><span class="nr05" data-v-ed94c8d2>'+t._ssrEscape(t._s(d.companyName))+"</span></a> <a"+t._ssrAttr("href","/zhuanxian/detail?id="+d.id+"&publishId="+d.publishId)+' target="_blank" data-v-ed94c8d2><span class="nr06" data-v-ed94c8d2>详情</span></a>')],2)})],2)],2),t._ssrNode(' <div class="box" style="float: right;margin-right: 160px;" data-v-ed94c8d2><div id="pagination1" class="page fl" data-v-ed94c8d2></div> <div class="info fl" data-v-ed94c8d2></div></div>')],2),t._ssrNode(" "),t._ssrNode('<div class="list_left_wangdian" data-v-ed94c8d2>',"</div>",[t._ssrNode('<div class="w1036" style=" background-color: #fff;margin-bottom: 20px;" data-v-ed94c8d2>',"</div>",[t._ssrNode('<div class="select_con" data-v-ed94c8d2>',"</div>",[t._ssrNode("<dl data-v-ed94c8d2>","</dl>",[t._ssrNode('<dd style="margin-left: -80px;" data-v-ed94c8d2><input type="text" placeholder="请输入网点名称"'+t._ssrAttr("value",t.vo2.companyName)+' class="list_input" data-v-ed94c8d2> <input value=" 搜索 " readonly="readonly" class="list_button" data-v-ed94c8d2></dd> <dt data-v-ed94c8d2>其他 :</dt> '),t._ssrNode("<dd data-v-ed94c8d2>","</dd>",[e("selectType",{attrs:{list:[{code:"AF0010403",name:"认证"}]},on:{change:function(d){return t.searchWD()}},model:{value:t.vo2.comAuthStatus,callback:function(d){t.$set(t.vo2,"comAuthStatus",d)},expression:"vo2.comAuthStatus"}})],1)],2)])]),t._ssrNode(" "),t._ssrNode('<div class="w1036" data-v-ed94c8d2>',"</div>",[t._ssrNode((0===t.logisticsCompany.length?'<div class="list_none" style="display: block;" data-v-ed94c8d2><span data-v-ed94c8d2>暂时没有找到您要查询的信息，可以看看其他物流园区哦</span> <img src="/images/none_pic.png" data-v-ed94c8d2></div>':"\x3c!----\x3e")+" "),t._l(t.logisticsCompany,function(d,c){return t._ssrNode('<ul class="wlzx_list" data-v-ed94c8d2>',"</ul>",[t._ssrNode('<li class="wlzx_list_2" data-v-ed94c8d2>',"</li>",[t._ssrNode('<p class="p1" data-v-ed94c8d2>',"</p>",[e("font",[t._v(t._s(d.pointName))]),t._ssrNode(d.qq?"<a"+t._ssrAttr("href","http://wpa.qq.com/msgrd?v="+d.qq+"&uin=&site=qq&menu=yes")+' target="_blank" data-v-ed94c8d2><img src="/images/article_wlzx/15qq.gif" data-v-ed94c8d2></a>':"\x3c!----\x3e")],2),t._ssrNode(' <p class="p2" data-v-ed94c8d2><a'+t._ssrAttr("href","/member/"+d.companyId)+" data-v-ed94c8d2>"+t._ssrEscape(t._s(d.companyName))+"</a></p> "),t._ssrNode('<p class="p3" data-v-ed94c8d2>',"</p>",[e("creditIcon",{attrs:{credit:d.credit}})],1),t._ssrNode(" "),t._ssrNode('<p class="p4" data-v-ed94c8d2>',"</p>",[t._ssrNode("<i data-v-ed94c8d2>联系人：</i>"),e("font",[t._v(t._s(d.contactsName))])],2),t._ssrNode(" "),t._ssrNode('<p class="p5" data-v-ed94c8d2>',"</p>",[t._ssrNode("<i data-v-ed94c8d2>电话：</i>"),e("font",[t._v(t._s(d.contactsTel)+" "+t._s(d.mobile))])],2)],2),t._ssrNode(' <li class="wlzx_list_3" data-v-ed94c8d2><p class="p1" data-v-ed94c8d2><i data-v-ed94c8d2>经营范围：</i><span data-v-ed94c8d2>'+t._ssrEscape(t._s(d.productService1))+'</span></p> <p class="p2" data-v-ed94c8d2><i data-v-ed94c8d2>增值服务：</i><span data-v-ed94c8d2>'+t._ssrEscape(t._s(d.otherService1))+'</span></p></li> <li class="wlzx_list_4" data-v-ed94c8d2>'+("AF0010403"===d.authStatus?'<p class="p1" data-v-ed94c8d2><img src="/images/10shiming.png" data-v-ed94c8d2></p>':"\x3c!----\x3e")+" "+(1===d.isVip?'<p class="p2" data-v-ed94c8d2><img src="/images/11xinyong.png" data-v-ed94c8d2></p>':"\x3c!----\x3e")+" "+(d.collateral>0?'<p class="p3" data-v-ed94c8d2><img src="/images/12danbao.png" data-v-ed94c8d2></p>':"\x3c!----\x3e")+'</li> <li class="wlzx_list_6" data-v-ed94c8d2><p class="p1" data-v-ed94c8d2><a'+t._ssrAttr("href","/create/order?&uid="+d.account+"&publishId="+d.companyId)+' target="_blank" data-v-ed94c8d2><input value="下单" data-v-ed94c8d2></a></p><p class="p2" data-v-ed94c8d2><a'+t._ssrAttr("href","/member/"+d.companyId)+' target="_blank" data-v-ed94c8d2><input value="查看官网" data-v-ed94c8d2></a></p><p class="p3" data-v-ed94c8d2></p></li>')],2)})],2),t._ssrNode(' <div class="box" style="float: right;margin-right: 170px;" data-v-ed94c8d2><div id="pagination2" class="page fl" data-v-ed94c8d2></div> <div class="info fl" data-v-ed94c8d2></div></div>')],2)],2),t._ssrNode(" "),t._ssrNode('<div class="list_right" data-v-ed94c8d2>',"</div>",[t._ssrNode('<div class="zx_sx" data-v-ed94c8d2><span class="biaozhi" data-v-ed94c8d2></span><span data-v-ed94c8d2>承运商推荐</span></div> '),0==t.companysList.length||null==t.companysList?t._ssrNode('<div class="tj_none" style="display: block" data-v-ed94c8d2>',"</div>",[t._ssrNode("<span data-v-ed94c8d2>没有相关承运商推荐</span>")],2):t._ssrNode("<div data-v-ed94c8d2>","</div>",t._l(t.companysList,function(d,c){return t._ssrNode('<div class="tj_list tj_list0" data-v-ed94c8d2>',"</div>",[t._ssrNode('<p class="p1" data-v-ed94c8d2><a'+t._ssrAttr("href","/member/"+d.id)+t._ssrAttr("title",d.companyName)+' target="_blank" data-v-ed94c8d2><span data-v-ed94c8d2>'+t._ssrEscape(t._s(d.companyName))+"</span></a></p> "),t._ssrNode('<div class="p2" data-v-ed94c8d2>',"</div>",[e("creditIcon",{attrs:{credit:d.credit}})],1),t._ssrNode(" "),t._ssrNode('<p class="p3" data-v-ed94c8d2>',"</p>",[t._ssrNode("<i data-v-63732202 data-v-ed94c8d2>联系人：</i>"),e("font",[t._v(t._s(d.contactsName||"暂无"))])],2),t._ssrNode(" "),t._ssrNode('<p class="p4" data-v-ed94c8d2>',"</p>",[t._ssrNode("<i data-v-ed94c8d2>电话：</i>"),e("font",[t._v(" "+t._s(d.mobile||"暂无"))])],2),t._ssrNode(" "),t._ssrNode('<p class="p5" data-v-ed94c8d2>',"</p>",[t._ssrNode("<i data-v-63732202 data-v-ed94c8d2>地址：</i>"),e("font",[t._v(t._s(d.address||"暂无"))])],2),t._ssrNode(' <p class="p6" data-v-ed94c8d2><a'+t._ssrAttr("href","/member/"+d.id)+' target="_blank" data-v-ed94c8d2><span data-v-63732202 data-v-ed94c8d2>查看 &gt;</span></a></p>')],2)}),0)],2)],2)])},[],!1,function(t){var d=e(345);d.__inject__&&d.__inject__(t)},"ed94c8d2","fe030df2");d.default=component.exports}};
//# sourceMappingURL=4b2ef63ed1bdca151ebc.js.map