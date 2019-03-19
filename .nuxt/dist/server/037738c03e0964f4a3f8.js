exports.ids=[70],exports.modules={440:function(t,e,c){"use strict";c.r(e);async function d(t,e,c={}){let d=c;d.currentPage=e,d.pageSize=21;let l=await t.post("/28-web/logisticsPark/list",d);return 200===l.data.status?{list:l.data.data.list,pages:l.data.data.pages,currentPage:l.data.data.pageNum}:{list:[],pages:0,currentPage:1}}var l={name:"WuLiu",head:{link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/list_wlyq.css"}],script:[{src:"./js/city-picker.data.js"},{src:"./js/city-picker.js"},{src:"./js/jquery.pagination.min.js"}]},data:()=>({pages:0,currentPage:1}),async asyncData({$axios:t,app:e,query:c}){let l={parkName:c.parkName?c.parkName:"",locationProvince:c.locationProvince?c.locationProvince:e.$cookies.get("currentProvinceFullName"),locationCity:c.locationCity?c.locationCity:e.$cookies.get("currentAreaFullName"),locationArea:c.locationArea?c.locationArea:""},r=l;r.currentPage=1,r.pageSize=16;let o=await t.post("/28-web/logisticsPark/interested/list",r),n=l;n.currentPage=1,n.pageSize=14;let v=await t.post("/28-web/logisticsPark/recommend/list",n),_=await d(t,1,l);return console.log(v.data.data.list,"recommendParkList"),{getGateWayList:_.list,pages:_.pages,currentPage:_.currentPage,getLogisticsPark:200===o.data.status?o.data.data.list:[],recommendParkList:200===v.data.status?v.data.data.list:[],vo:l}},mounted(){$("#parkAddress input").citypicker({province:this.vo.locationProvince,city:this.vo.locationCity,district:this.vo.locationArea}),$("#list_nav_a").html(this.vo.locationCity+this.vo.locationArea+"物流园区"),this.loadPagination()},methods:{async search(){let t=[];$("#parkAddress .select-item").each(function(i,e){t.push($(this).text())}),this.vo.locationProvince=t[0]?t[0]:"",this.vo.locationCity=t[1]?t[1]:"",this.vo.locationArea=t[2]?t[2]:"",window.location.href=`/wuliu?locationProvince=${this.vo.locationProvince}&locationCity=${this.vo.locationCity}&locationArea=${this.vo.locationArea}&parkName=${this.vo.parkName}`},reload(){window.location.href="/wuliu"},loadPagination(){$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:async t=>{$("#current1").text(t);let e=await d(this.$axios,t,this.vo);this.getGateWayList=e.list,this.currentPage=e.currentPage,window.location.href="#top"}})}}},r=c(0);var component=Object(r.a)(l,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[t._ssrNode('<div class="list_box" data-v-7ac8a73e>',"</div>",[t._ssrNode('<div class="list_nav" data-v-7ac8a73e><a href="/" data-v-7ac8a73e>物流首页</a>&gt;<a id="list_nav_a" href data-v-7ac8a73e>物流园区</a></div> '),t._ssrNode('<div class="list_left" data-v-7ac8a73e>',"</div>",[t._ssrNode('<div class="w1036" style=" background-color: #fff;" data-v-7ac8a73e><div class="select_con" data-v-7ac8a73e><dl data-v-7ac8a73e><dt data-v-7ac8a73e><span data-v-7ac8a73e>园区所在地 ：</span></dt> <dd data-v-7ac8a73e><form name="zxaddform" method="post" action data-v-7ac8a73e><input name="a7" type="hidden" value="0" data-v-7ac8a73e> <input type="hidden" name="mid" value="19" data-v-7ac8a73e> <input type="hidden" name="dopost" value="search" data-v-7ac8a73e> <div id="parkAddress" class="fl list_input" style="position:relative;" data-v-7ac8a73e><input data-toggle="city-picker" data-level="district" type="text" placeholder="请选择省-市-区" style="height: 100%;border: none;outline: none;" data-v-7ac8a73e></div> <span data-v-7ac8a73e> 园区名称 ：</span> <input type="text" placeholder="请输入园区名称"'+t._ssrAttr("value",t.vo.parkName)+' class="list_input" data-v-7ac8a73e> <input id="search_wlyq" value=" 搜索 " readonly="readonly" class="list_button" data-v-7ac8a73e> <input id="flush" name="Submit2" value="重置 " readonly="readonly" class="list_button" data-v-7ac8a73e></form></dd></dl></div></div> '),t._ssrNode('<div class="w1036 list_wlyq" data-v-7ac8a73e>',"</div>",[t._ssrNode((null==t.getGateWayList||t.getGateWayList==[]?'<div class="list_none" style="display: block" data-v-7ac8a73e><span data-v-7ac8a73e>暂时没有找到您要查询的信息，可以看看其他园区哦</span> <img src="/images/none_pic.png" data-v-7ac8a73e></div>':"\x3c!----\x3e")+" "),t._l(t.getGateWayList,function(e,d){return t._ssrNode('<ul class="wlzx_list" data-v-7ac8a73e>',"</ul>",[t._ssrNode("<a"+t._ssrAttr("href","/wuliu/detail?id="+e.id)+' target="_blank" data-v-7ac8a73e>',"</a>",[t._ssrNode('<li class="wlzx_list_01" data-v-7ac8a73e><img'+t._ssrAttr("src",e.parkSignPicture?e.parkSignPicture:"/yuanqu/images/wlyq_pic.png")+' width="268" height="268" class="scrollLoading" data-v-7ac8a73e></li> <li class="wlzx_list_02" data-v-7ac8a73e><span data-v-7ac8a73e>'+t._ssrEscape(t._s(e.parkName))+"</span></li> "),t._ssrNode('<li class="wlzx_list_03" data-v-7ac8a73e>',"</li>",[c("font",[t._v(t._s(e.transportNumber?e.transportNumber:0))]),t._ssrNode("<i data-v-7ac8a73e>条</i><span data-v-7ac8a73e>优质专线</span>")],2),t._ssrNode(' <li class="wlzx_list_04" data-v-7ac8a73e><span data-v-7ac8a73e>'+t._ssrEscape(t._s(e.parkAddress))+'</span></li> <li class="wlzx_list_05" data-v-7ac8a73e><span data-v-7ac8a73e>'+t._ssrEscape(t._s(e.browseNumber))+"</span></li>")],2)])})],2),t._ssrNode(' <div class="box" style="float: right;margin-right: 170px;" data-v-7ac8a73e><div id="pagination1" class="page fl" data-v-7ac8a73e></div> <div class="info fl" data-v-7ac8a73e></div></div> <div class="bottom_wlyq" data-v-7ac8a73e><div class="bottom_wlyq_bt" data-v-7ac8a73e>您可能对这些感兴趣</div> <div class="bottom_wlyq_nr" data-v-7ac8a73e>'+t._ssrList(t.getLogisticsPark,function(e,c){return'<div class="bottom_wlyq_item" data-v-7ac8a73e><a'+t._ssrAttr("href","/wuliu/detail?id="+e.id)+' target="_blank" data-v-7ac8a73e>'+t._ssrEscape(t._s(e.parkName))+"</a></div>"})+"</div></div>")],2),t._ssrNode(" "),t._ssrNode('<div class="list_right" data-v-7ac8a73e>',"</div>",[t._ssrNode('<div class="zx_sx" data-v-7ac8a73e><span class="biaozhi" data-v-7ac8a73e></span><span data-v-7ac8a73e>园区推荐</span></div> '+(null==t.recommendParkList||t.recommendParkList==[]?'<div class=" hy_tj_none" style=" background-color: #fff;height: 220px;border: 1px solid #eee;margin-top: -1px;width: 342px;    height: 186px;" data-v-7ac8a73e><span style="float: left;width: 100%;text-align: center;height: 100px;line-height: 100px;font-size: 14px; margin-top: 0px;" data-v-7ac8a73e>暂无相关园区推荐</span></div>':"\x3c!----\x3e")+" "),t._l(t.recommendParkList,function(e,d){return t._ssrNode('<div class="tj_list" data-v-7ac8a73e>',"</div>",[t._ssrNode("<a"+t._ssrAttr("href","/wuliu/detail?id="+e.id)+' target="_blank" data-v-7ac8a73e>',"</a>",[t._ssrNode('<div class="p p1" data-v-7ac8a73e><span data-v-7ac8a73e>'+t._ssrEscape(t._s(e.parkName))+"</span></div> "),t._ssrNode('<div class="p p3" data-v-7ac8a73e>',"</div>",[t._ssrNode("<ul data-v-7ac8a73e>","</ul>",[t._ssrNode('<li class="tj_left tj_left1" data-v-7ac8a73e>',"</li>",[c("font",[t._v(t._s(e.transportNumber||0)+"条")])],1),t._ssrNode(' <li class="tj_right" data-v-7ac8a73e><span data-v-7ac8a73e>优质专线</span></li> '),t._ssrNode('<li class="tj_left tj_left2" data-v-7ac8a73e>',"</li>",[c("font",[t._v(t._s(e.netWorkNumber)),c("em",[t._v("家")])])],1),t._ssrNode(' <li class="tj_right" data-v-7ac8a73e><span data-v-7ac8a73e>优质物流公司</span></li>')],2)]),t._ssrNode(' <div class="p p4" data-v-7ac8a73e><span data-v-7ac8a73e>'+t._ssrEscape(t._s(e.parkAddress))+'</span></div> <div class="p p5" data-v-7ac8a73e><span data-v-7ac8a73e>'+t._ssrEscape(t._s(e.browseNumber))+"</span></div>")],2)])})],2)],2)])},[],!1,function(t){},"7ac8a73e","e1874ae8");e.default=component.exports}};
//# sourceMappingURL=037738c03e0964f4a3f8.js.map