exports.ids=[50],exports.modules={381:function(t,e,c){"use strict";c.r(e);async function d(t,e,c={}){let d=c;d.currentPage=e,d.pageSize=21;let r=await t.post("/28-web/logisticsPark/list",d);return 200===r.data.status?{list:r.data.data.list,pages:r.data.data.pages,currentPage:r.data.data.pageNum}:{list:[],pages:0,currentPage:1}}var r={name:"WuLiu",head:{link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/list_wlyq.css"}],script:[{src:"./js/city-picker.data.js"},{src:"./js/city-picker.js"},{src:"./js/jquery.pagination.min.js"}]},data:()=>({pages:0,currentPage:1}),async asyncData({$axios:t,app:e,query:c}){let r={parkName:c.parkName?c.parkName:"",locationProvince:c.locationProvince?c.locationProvince:e.$cookies.get("currentProvinceFullName"),locationCity:c.locationCity?c.locationCity:e.$cookies.get("currentAreaFullName"),locationArea:c.locationArea?c.locationArea:""},l=r;l.currentPage=1,l.pageSize=16;let o=await t.post("/28-web/logisticsPark/interestedList",l),n=r;n.currentPage=1,n.pageSize=14;let v=await t.post("/28-web/logisticsPark/recommendList",n),_=await d(t,1,r);return{getGateWayList:_.list,pages:_.pages,currentPage:_.currentPage,getLogisticsPark:200===o.data.status?o.data.data.list:[],recommendParkList:200===v.data.status?v.data.data.list:[],vo:r}},mounted(){$("#parkAddress input").citypicker({province:this.vo.locationProvince,city:this.vo.locationCity,district:this.vo.locationArea}),$("#list_nav_a").html(this.vo.locationCity+this.vo.locationArea+"物流园区"),this.loadPagination()},methods:{async search(){let t=[];$("#parkAddress .select-item").each(function(i,e){t.push($(this).text())}),this.vo.locationProvince=t[0]?t[0]:"",this.vo.locationCity=t[1]?t[1]:"",this.vo.locationArea=t[2]?t[2]:"",window.location.href=`/wuliu?locationProvince=${this.vo.locationProvince}&locationCity=${this.vo.locationCity}&locationArea=${this.vo.locationArea}&parkName=${this.vo.parkName}`},reload(){window.location.href="/wuliu"},loadPagination(){$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:async t=>{$("#current1").text(t);let e=await d(this.$axios,t,this.vo);this.getGateWayList=e.list,this.currentPage=e.currentPage,window.location.href="#top"}})}}},l=c(1);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[t._ssrNode('<div class="list_box" data-v-0cea7536>',"</div>",[t._ssrNode('<div class="list_nav" data-v-0cea7536><a href="/" data-v-0cea7536>物流首页</a>&gt;<a id="list_nav_a" href data-v-0cea7536>物流园区</a></div> '),t._ssrNode('<div class="list_left" data-v-0cea7536>',"</div>",[t._ssrNode('<div class="w1036" style=" background-color: #fff;" data-v-0cea7536><div class="select_con" data-v-0cea7536><dl data-v-0cea7536><dt data-v-0cea7536><span data-v-0cea7536>园区所在地 ：</span></dt> <dd data-v-0cea7536><form name="zxaddform" method="post" action data-v-0cea7536><input name="a7" type="hidden" value="0" data-v-0cea7536> <input type="hidden" name="mid" value="19" data-v-0cea7536> <input type="hidden" name="dopost" value="search" data-v-0cea7536> <div id="parkAddress" class="fl list_input" style="position:relative;" data-v-0cea7536><input data-toggle="city-picker" data-level="district" type="text" placeholder="请选择省-市-区" style="height: 100%;border: none;outline: none;" data-v-0cea7536></div> <span data-v-0cea7536> 园区名称 ：</span> <input type="text" placeholder="请输入园区名称"'+t._ssrAttr("value",t.vo.parkName)+' class="list_input" data-v-0cea7536> <input id="search_wlyq" value=" 搜索 " readonly="readonly" class="list_button" data-v-0cea7536> <input id="flush" name="Submit2" value="重置 " readonly="readonly" class="list_button" data-v-0cea7536></form></dd></dl></div></div> '),t._ssrNode('<div class="w1036 list_wlyq" data-v-0cea7536>',"</div>",[t._ssrNode((0===t.getGateWayList.length?'<div class="list_none" style="display: block" data-v-0cea7536><span data-v-0cea7536>暂时没有找到您要查询的信息，可以看看其他园区哦</span> <img'+t._ssrAttr("src",c(84))+" data-v-0cea7536></div>":"\x3c!----\x3e")+" "),t._l(t.getGateWayList,function(e,c){return t._ssrNode('<ul class="wlzx_list" data-v-0cea7536>',"</ul>",[t._ssrNode("<a"+t._ssrAttr("href","/wuliu/detail?id="+e.id)+' target="_blank" data-v-0cea7536>',"</a>",[t._ssrNode('<li class="wlzx_list_01" data-v-0cea7536><img'+t._ssrAttr("src",e.parkSignPicture?e.parkSignPicture:"../../static/images/list_wlzx/wlyq_pic.png")+' width="268" height="268" class="scrollLoading" data-v-0cea7536></li> <li class="wlzx_list_02" data-v-0cea7536><span data-v-0cea7536>'+t._ssrEscape(t._s(e.parkName))+"</span></li> "),t._ssrNode('<li class="wlzx_list_03" data-v-0cea7536>',"</li>",[d("font",[t._v(t._s(e.transportNumber?e.transportNumber:0))]),t._ssrNode("<i data-v-0cea7536>条</i><span data-v-0cea7536>优质专线</span>")],2),t._ssrNode(' <li class="wlzx_list_04" data-v-0cea7536><span data-v-0cea7536>'+t._ssrEscape(t._s(e.parkAddress))+'</span></li> <li class="wlzx_list_05" data-v-0cea7536><span data-v-0cea7536>'+t._ssrEscape(t._s(e.browseNumber))+"</span></li>")],2)])})],2),t._ssrNode(' <div class="box" style="float: right;margin-right: 170px;" data-v-0cea7536><div id="pagination1" class="page fl" data-v-0cea7536></div> <div class="info fl" data-v-0cea7536></div></div> <div class="bottom_wlyq" data-v-0cea7536><div class="bottom_wlyq_bt" data-v-0cea7536>您可能对这些感兴趣</div> <div class="bottom_wlyq_nr" data-v-0cea7536>'+t._ssrList(t.getLogisticsPark,function(e,c){return'<div class="bottom_wlyq_item" data-v-0cea7536><a'+t._ssrAttr("href","/wuliu/detail?id="+e.id)+' target="_blank" data-v-0cea7536>'+t._ssrEscape(t._s(e.parkName))+"</a></div>"})+"</div></div>")],2),t._ssrNode(" "),t._ssrNode('<div class="list_right" data-v-0cea7536>',"</div>",[t._ssrNode('<div class="zx_sx" data-v-0cea7536><span class="biaozhi" data-v-0cea7536></span><span data-v-0cea7536>园区推荐</span></div> <div class="tj_none hy_tj_none" data-v-0cea7536><span data-v-0cea7536>暂无相关园区推荐</span></div> '),t._l(t.recommendParkList,function(e,c){return t._ssrNode('<div class="tj_list" data-v-0cea7536>',"</div>",[t._ssrNode("<a"+t._ssrAttr("href","/wuliu/detail?id="+e.id)+' target="_blank" data-v-0cea7536>',"</a>",[t._ssrNode('<div class="p p1" data-v-0cea7536><span data-v-0cea7536>'+t._ssrEscape(t._s(e.parkName))+"</span></div> "),t._ssrNode('<div class="p p3" data-v-0cea7536>',"</div>",[t._ssrNode("<ul data-v-0cea7536>","</ul>",[t._ssrNode('<li class="tj_left tj_left1" data-v-0cea7536>',"</li>",[d("font",[t._v(t._s(e.transportNumber)+"条")])],1),t._ssrNode(' <li class="tj_right" data-v-0cea7536><span data-v-0cea7536>优质专线</span></li> '),t._ssrNode('<li class="tj_left tj_left2" data-v-0cea7536>',"</li>",[d("font",[t._v(t._s(e.netWorkNumber)),d("em",[t._v("家")])])],1),t._ssrNode(' <li class="tj_right" data-v-0cea7536><span data-v-0cea7536>优质物流公司</span></li>')],2)]),t._ssrNode(' <div class="p p4" data-v-0cea7536><span data-v-0cea7536>'+t._ssrEscape(t._s(e.parkAddress))+'</span></div> <div class="p p5" data-v-0cea7536><span data-v-0cea7536>'+t._ssrEscape(t._s(e.browseNumber))+"</span></div>")],2)])})],2)],2)])},[],!1,function(t){},"0cea7536","7380e17e");e.default=component.exports},84:function(t,e,c){t.exports=c.p+"img/58a2773.png"}};
//# sourceMappingURL=e9a891e9fa62c4eb4d3d.js.map