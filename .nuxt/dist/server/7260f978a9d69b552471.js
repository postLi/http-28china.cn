exports.ids=[55],exports.modules={173:function(t,e,r){var content=r(251);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var l=r(3).default;t.exports.__inject__=function(t){l("f22c023e",content,!0,t)}},250:function(t,e,r){"use strict";r.r(e);var l=r(173),o=r.n(l);for(var n in l)"default"!==n&&function(t){r.d(e,t,function(){return l[t]})}(n);e.default=o.a},251:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,"",""])},384:function(t,e,r){"use strict";r.r(e);async function l(t,e,r={}){let l=r;l.currentPage=e,l.pageSize=21;let o=await t.post("/28-web/logisticsPark/list",l);return 200===o.data.status?{list:o.data.data.list,pages:o.data.data.pages,currentPage:o.data.data.pageNum}:{list:[],pages:0,currentPage:1}}var o={name:"WuLiu",head:{link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/list_wlyq.css"}],script:[{src:"../js/city.js"},{src:"/layer/dist/layui.js"},{src:"../js/city-picker.js"},{src:"../js/jquery.pagination.min.js"}]},data:()=>({pages:0,currentPage:1}),async asyncData({$axios:t,app:e,query:r}){let o={parkName:r.parkName?r.parkName:"",locationProvince:r.locationProvince?r.locationProvince:e.$cookies.get("currentProvinceFullName"),locationCity:r.locationCity?r.locationCity:e.$cookies.get("currentAreaFullName"),locationArea:r.locationArea?r.locationArea:""},n=o;n.currentPage=1,n.pageSize=16;let c=await t.post("/28-web/logisticsPark/interestedList",n),d=o;d.currentPage=1,d.pageSize=14;let _=await t.post("/28-web/logisticsPark/recommendList",d),v=await l(t,1,o);return{getGateWayList:v.list,pages:v.pages,currentPage:v.currentPage,getLogisticsPark:200===c.data.status?c.data.data.list:[],recommendParkList:200===_.data.status?_.data.data.list:[],vo:o}},mounted(){$("#parkAddress input").citypicker({province:this.vo.locationProvince,city:this.vo.locationCity,district:this.vo.locationArea}),$("#list_nav_a").html(this.vo.locationCity+this.vo.locationArea+"物流园区"),this.loadPagination()},methods:{async search(){let t=[];$("#parkAddress .select-item").each(function(i,e){t.push($(this).text())}),this.vo.locationProvince=t[0]?t[0]:"",this.vo.locationCity=t[1]?t[1]:"",this.vo.locationArea=t[2]?t[2]:"",window.location.href=`/wuliu?locationProvince=${this.vo.locationProvince}&locationCity=${this.vo.locationCity}&locationArea=${this.vo.locationArea}&parkName=${this.vo.parkName}`},reload(){window.location.href="/wuliu"},loadPagination(){$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:async t=>{$("#current1").text(t);let e=await l(this.$axios,t,this.vo);this.getGateWayList=e.list,this.currentPage=e.currentPage,window.location.href="#top"}})}}},n=r(1);var component=Object(n.a)(o,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"yuanqu"},[t._ssrNode('<div class="list_box">',"</div>",[t._ssrNode('<div class="herder"></div> <div class="list_nav"><a href="/">物流首页</a>&gt;<a id="list_nav_a" href>物流园区</a></div> '),t._ssrNode('<div class="list_left">',"</div>",[t._ssrNode('<div class="w1036" style=" background-color: #fff;"><div class="select_con"><dl><dt><span>园区所在地 ：</span></dt> <dd><form name="zxaddform" method="post" action><input name="a7" type="hidden" value="0"> <input type="hidden" name="mid" value="19"> <input type="hidden" name="dopost" value="search"> <div id="parkAddress" class="fl list_input" style="position:relative;"><input data-toggle="city-picker" data-level="district" type="text" placeholder="请选择省-市-区" style="height: 100%;border: none;outline: none;"></div> <span> 园区名称 ：</span> <input type="text" placeholder="请输入园区名称"'+t._ssrAttr("value",t.vo.parkName)+' class="list_input"> <input id="search_wlyq" value=" 搜索 " readonly="readonly" class="list_button"> <input id="flush" name="Submit2" value="重置 " readonly="readonly" class="list_button"></form></dd></dl></div></div> '),t._ssrNode('<div class="w1036 list_wlyq">',"</div>",[t._ssrNode((0===t.getGateWayList.length?'<div class="list_none" style="display: block"><span>暂时没有找到您要查询的信息，可以看看其他园区哦</span> <img'+t._ssrAttr("src",r(84))+"></div>":"\x3c!----\x3e")+" "),t._l(t.getGateWayList,function(e,r){return t._ssrNode('<ul class="wlzx_list">',"</ul>",[t._ssrNode("<a"+t._ssrAttr("href","/wuliu/detail?id="+e.id)+' target="_blank">',"</a>",[t._ssrNode('<li class="wlzx_list_01"><img'+t._ssrAttr("src",e.parkSignPicture?e.parkSignPicture:"../../static/images/list_wlzx/wlyq_pic.png")+' width="268" height="268" class="scrollLoading"></li> <li class="wlzx_list_02"><span>'+t._ssrEscape(t._s(e.parkName))+"</span></li> "),t._ssrNode('<li class="wlzx_list_03">',"</li>",[l("font",[t._v(t._s(e.transportNumber?e.transportNumber:0))]),t._ssrNode("<i>条</i><span>优质专线</span>")],2),t._ssrNode(' <li class="wlzx_list_04"><span>'+t._ssrEscape(t._s(e.parkAddress))+'</span></li> <li class="wlzx_list_05"><span>'+t._ssrEscape(t._s(e.browseNumber))+"</span></li>")],2)])})],2),t._ssrNode(' <div class="box" style="float: right;margin-right: 170px;"><div id="pagination1" class="page fl"></div> <div class="info fl"></div></div> <div class="bottom_wlyq"><div class="bottom_wlyq_bt">您可能对这些感兴趣</div> <div class="bottom_wlyq_nr">'+t._ssrList(t.getLogisticsPark,function(e,r){return'<div class="bottom_wlyq_item"><a'+t._ssrAttr("href","/wuliu/detail?id="+e.id)+' target="_blank">'+t._ssrEscape(t._s(e.parkName))+"</a></div>"})+"</div></div>")],2),t._ssrNode(" "),t._ssrNode('<div class="list_right">',"</div>",[t._ssrNode('<div class="zx_sx"><span class="biaozhi"></span><span>园区推荐</span></div> <div class="tj_none hy_tj_none"><span>暂无相关园区推荐</span></div> '),t._l(t.recommendParkList,function(e,r){return t._ssrNode('<div class="tj_list">',"</div>",[t._ssrNode("<a"+t._ssrAttr("href","/wuliu/detail?id="+e.id)+' target="_blank">',"</a>",[t._ssrNode('<div class="p p1"><span>'+t._ssrEscape(t._s(e.parkName))+"</span></div> "),t._ssrNode('<div class="p p3">',"</div>",[t._ssrNode("<ul>","</ul>",[t._ssrNode('<li class="tj_left tj_left1">',"</li>",[l("font",[t._v(t._s(e.transportNumber)+"条")])],1),t._ssrNode(' <li class="tj_right"><span>优质专线</span></li> '),t._ssrNode('<li class="tj_left tj_left2">',"</li>",[l("font",[t._v(t._s(e.netWorkNumber)),l("em",[t._v("家")])])],1),t._ssrNode(' <li class="tj_right"><span>优质物流公司</span></li>')],2)]),t._ssrNode(' <div class="p p4"><span>'+t._ssrEscape(t._s(e.parkAddress))+'</span></div> <div class="p p5"><span>'+t._ssrEscape(t._s(e.browseNumber))+"</span></div>")],2)])})],2)],2)])},[],!1,function(t){var e=r(250);e.__inject__&&e.__inject__(t)},null,"2938b112");e.default=component.exports},84:function(t,e,r){t.exports=r.p+"img/58a2773.png"}};
//# sourceMappingURL=7260f978a9d69b552471.js.map