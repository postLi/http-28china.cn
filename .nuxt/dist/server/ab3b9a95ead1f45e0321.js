exports.ids=[64],exports.modules={141:function(t,e,n){t.exports=n.p+"img/bd92ae0.png"},142:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAYAAAA8sqwkAAAABGdBTUEAALGPC/xhBQAAAL1JREFUGBljYACCffv2hf3//58RxMYFgGrMQXKMR44c4f3x48dJIHu/i4tLNjYNQMWVQAPz2NjYtJhsbGw+MzIyugKxF1CiFV3Dnj17yv79+1cA1OBsa2v7ngmkwNnZ+SmQcgEKJu3du7cEpgmouBhoUAkzM7Mz0PZrIHEUdx88eFD39+/fB4CKyoFyPEBcDTIZqPgSSDEIoGgACezfv9/i79+/O4HM30xMTM5OTk4XQeJ4AdAvzkDbDLEpAgBml01PUiCtkgAAAABJRU5ErkJggg=="},143:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAYAAAA8sqwkAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAL1JREFUKFNjwAYOHjxouG/fPmcoFwUwQmk4ACrU//fv314gk5WZmdnd0dHxBEQGApigNBjs2bNH7////3sYGRlbgLj479+/W4G26UKlwQBuw/79+3WAJu8Dauh0cXHpBYnt3bu3BEgVA7GNs7PzXZAYWAPQZC0gtR+Ie4GKu0BiMAB0YivQkCggE6TpKePhw4cFf/36dQ3ohElOTk7tEGWoAGjgVCDlyMHBYQ4WAJoCYeAAQBsYgWrCGBgYGAAfL0qEuWSOgQAAAABJRU5ErkJggg=="},148:function(t,e,n){var content=n(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("0a2f5269",content,!0,t)}},237:function(t,e,n){"use strict";n.r(e);var r=n(148),d=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=d.a},238:function(t,e,n){e=t.exports=n(2)(!1);var r=n(20),d=r(n(141)),o=r(n(142)),l=r(n(143));e.push([t.i,".lll-wangdian .list_button{width:42px;height:28px;border-radius:2px;color:#f9f9f9;font-size:15px;background:no-repeat url("+d+') 10px 6px #2577e3;text-align:left;padding-left:30px;margin-left:8px;padding-right:5px;cursor:pointer;border:none}.lll-wangdian .toggle-btn{float:right;margin:12px 15px 0 4px;height:24px;line-height:24px;border:1px solid #e8e8e8;padding:0 9px;background:#fff;color:#6b6b6b;cursor:pointer;text-decoration:none;font:12px/1.5 tahoma,arial,Hiragino Sans GB,"\\5b8b\\4f53",sans-serif}.lll-wangdian .show-collapse .expand{display:none;margin-top:2px}.lll-wangdian .icon-btn-arrow-down-2{margin-top:5px;display:inline-block;background:url('+o+");background-repeat:no-repeat;width:12px;height:7px;cursor:pointer}.lll-wangdian .show-collapse .collapse{display:inline-block;margin-top:2px}.lll-wangdian .toggle-btn .arrow{margin-left:8px;vertical-align:middle}.lll-wangdian .icon-btn-arrow-up-2{margin-top:5px;display:inline-block;background:url("+l+");background-repeat:no-repeat;width:12px;height:7px;cursor:pointer}.lll-wangdian .select_con dl dd a.now{background:#3371ff;color:#fff}",""])},447:function(t,e,n){"use strict";n.r(e);async function r(t,e){let n=await t.post("/28-web/logisticsPark/search",e);if(200===n.data.status)return n.data.data.list}async function d(t,e,n={}){let r=n;r.currentPage=e,r.pageSize=10;let d=await t.post("/28-web/pointNetwork/list",r);return 200===d.data.status?(d.data.data.list.forEach(t=>{t.pointName&&t.pointName.length>15&&(t.pointName=t.pointName.substring(0,15)+"..."),t.companyName&&t.companyName.length>15&&(t.companyName=t.companyName.substring(0,15)+"..."),t.pointAddress&&t.pointAddress.length>15&&(t.pointAddress=t.pointAddress.substring(0,15)+"...")}),{list:d.data.data.list,pages:d.data.data.pages,currentPage:d.data.data.pageNum}):{list:[],pages:0,currentPage:1}}var o={name:"Index",head:{link:[{rel:"stylesheet",href:"/css/wangdian.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/WTMap.css"}],script:[{src:"/js/jquery.pagination.min.js"}]},data:()=>({wangdianInfoList:[],totalPage:1,currentPage:1,parkName:"",startProvince:"",startCity:"",startArea:"",endProvince:"",endCity:"",endArea:"",companyName:""}),async asyncData({$axios:t,app:e,query:n}){let o=n.pos?n.pos.split(","):["",""],l={startProvince:n.startProvince?n.startProvince:e.$cookies.get("currentProvinceFullName"),startCity:n.startCity?n.startCity:e.$cookies.get("currentAreaFullName"),startArea:n.startArea?n.startArea:"",endProvince:n.endProvince?n.startProvince:"",endCity:n.endCity?n.endCity:"",endArea:n.endArea?n.endArea:"",authStatus:n.authStatus?n.authStatus:"",parkName:n.parkName?n.parkName:"",otherServiceCode:n.otherServiceCode?n.otherServiceCode:"",belongBrandCode:n.belongBrandCode?n.belongBrandCode:"",companyName:n.companyName?n.companyName:"",latitude:o[1],longitude:o[0]},c=await d(t,1,l),_=await async function(t,e){let n=e;n.currentPage=1,n.pageSize=10;let r=await t.post("/28-web/logisticsCompany/pointNetwork/recommend",{province:n.startProvince,city:n.startCity,...n});return 200===r.data.status?r.data.data.list:[]}(t,l);console.log(_,"recommendList"),_.forEach(t=>{t.credit>=0&&t.credit<=3&&(t.showcreadimg=!0,t.creditImg=1),t.credit>=4&&t.credit<=10&&(t.showcreadimg=!0,t.creditImg=2),t.credit>=11&&t.credit<=40&&(t.showcreadimg=!0,t.creditImg=3),t.credit>=41&&t.credit<=90&&(t.showcreadimg=!0,t.creditImg=4),t.credit>=91&&t.credit<=150&&(t.showcreadimg=!0,t.creditImg=5),t.credit>=151&&t.credit<=250&&(t.showcreadeng=!0,t.creditdeng=1),t.credit>=251&&t.credit<=500&&(t.showcreadeng=!0,t.creditdeng=2),t.credit>=500&&t.credit<=1e3&&(t.showcreadeng=!0,t.creditdeng=3),t.credit>=1001&&t.credit<=2e3&&(t.showcreadeng=!0,t.creditdeng=4),t.credit>=2001&&(t.showcreadeng=!0,t.creditdeng=5)});let h=await t.get("/aflc-common/sysDict/getSysDictByCodeGet/AF029"),m=await t.get("/aflc-common/sysDict/getSysDictByCodeGet/AF025"),v=await r(t,l);return 200===h.data.status&&h.data.data.unshift({code:"",name:"不限"}),200===m.data.status&&m.data.data.unshift({code:"",name:"不限"}),{AF029:200===h.data.status?h.data.data:[],AF025:200===m.data.status?m.data.data:[],logisticsPark:v,WangdiangInfoList:c.list,pages:c.pages,recommendList:_,vo:l}},mounted(){seajs.use(["/js/gaodemap2.js"]),$(".collapse").click(function(){$(".collapse").css("display","none"),$(".expand").css("display","inline-block"),$(".select_con").css("display","none")}),$(".expand").click(function(){$(".collapse").css("display","inline-block"),$(".expand").css("display","none"),$(".select_con").css("display","block")});let t=this;$("#select_wlyq").mousedown(function(){$("#list_wlzx_yq").css("display","block")}),$("#seq1").click(async function(){$("#seq2").removeClass("active"),$(this).addClass("active");let e=await d(t.$axios,t.current,Object.assign({filterSign:1},t.vo));t.WangdiangInfoList=e.list}),$("#seq2").click(async function(){$("#seq1").removeClass("active"),$(this).addClass("active");let e=await d(t.$axios,t.current,Object.assign({filterSign:2},t.vo));t.WangdiangInfoList=e.list}),$("body").click(function(t){var e=$(".js_yq");e.is(t.target)||0!==e.has(t.target).length||$("#list_wlzx_yq").css("display","none")}),$("#select_wlyq").val(this.$route.query.parkName||""),$("#select_wlyq").attr("name",this.$route.query.parkId||""),$("#addressFrom input").citypicker({province:this.vo.startProvince,city:this.vo.startCity,district:this.vo.startArea}),$("#addressTo input").on("mouseenter",()=>{this.setMap()}),$("#addressTo input").val(this.$route.query.address||""),this.pagination()},methods:{setMap(){this.searchDo(),$("#addressTo input").attr("wtmapinit",this.startProvince+this.startCity+this.startArea)},searchDo(){let t=[],e=[];$("#addressFrom .select-item").each(function(i,e){t.push($(this).text())}),this.startProvince=t[0]?t[0]:"",this.startCity=t[1]?t[1]:"",this.startArea=t[2]?t[2]:"",$("#addressTo .select-item").each(function(i,t){e.push($(this).text())}),this.endProvince=e[0]?e[0]:"",this.endCity=e[1]?e[1]:"",this.endArea=e[2]?e[2]:""},search(){this.searchDo();let t=$("#addressTo input").attr("thepos")||"",address=$("#addressTo input").val()||"";window.location.href=`/wangdian/?&belongBrandCode=${this.vo.belongBrandCode}&otherServiceCode=${this.vo.otherServiceCode}&companyName=${this.companyName}&parkName=${this.parkName}&endArea=${this.endArea}&endCity=${this.endCity}&endProvince=${this.endProvince}&startArea=${this.startArea}&startCity=${this.startCity}&startProvince=${this.startProvince}&pos=${t}&address=${address}`},AF029Click(t){this.vo.belongBrandCode=t.code,this.search()},AF025Click(t){this.vo.otherServiceCode=t.code,this.search()},addTitle(t){this.parkName=t.parkName},async seachlist(){let t=[];$("#wlyq_pos .select-item").each(function(i,e){t.push($(this).text())}),this.vo.startProvince=t[0]?t[0]:"",this.vo.startCity=t[1]?t[1]:"",this.vo.startArea=t[2]?t[2]:"",this.logisticsPark=await r(this.$axios,this.vo)},pagination(){console.log("this.pages:",this.pages),$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:async t=>{$("#current1").text(t);let e=await d(this.$axios,t,this.vo);console.log(e,"hyList"),this.totalPage=e.pages,this.current=e.current,this.WangdiangInfoList=e.list}})},reload(){window.location.href="/wangdian"}}},l=n(0);var component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lll-wangdian"},[t._ssrNode('<div class="list_box">',"</div>",[t._ssrNode('<div class="list_nav"><a href="/">物流首页</a>&gt;<a id="list_nav_a" href>物流网点</a></div> '),t._ssrNode('<div class="list_left">',"</div>",[t._ssrNode('<div class="w1036" style=" background-color: #fff;margin-bottom: 20px;">',"</div>",[t._ssrNode('<div class="zx_sx" style="border-bottom: 2px solid #2577e3"><span class="biaozhi"></span><span>网点筛选</span> <a href="#" class="toggle-btn show-collapse"><span class="expand"><span>显示筛选</span><span class="arrow icon-btn-arrow-down-2"></span></span> <span class="collapse"><span>收起筛选</span><span class="arrow icon-btn-arrow-up-2"></span></span></a></div> '),t._ssrNode('<div class="select_con">',"</div>",[t._ssrNode("<dl>","</dl>",[t._ssrNode('<dt>所在地 ：</dt> <dd><form name="zxaddform" method="post" action style="float:left;"><input name="a7" type="hidden" value="0"> <input type="hidden" name="mid" value="19"> <input type="hidden" name="dopost" value="search"> <div id="addressFrom" class="fl list_input" style="position:relative;"><input name="cfd" data-toggle="city-picker" data-level="district" type="text" placeholder="请输入出发地" style="height: 100%;width:100%;border: none;outline: none;"></div> <div id="addressTo" class="fl list_input" style="position:relative"><input name="ddd" wtmap="detail" type="text" placeholder="请输入详细地址查附近网点" style="height: 100%;width:100%;border: none;outline: none;"></div> <input id="search_wangdian" name="Submit2" readonly="readonly" value=" 搜索 " class="list_button"> <input id="flush" name="Submit2" readonly="readonly" value="重置 "></form> <br></dd> <dt>公司名称 :</dt> <dd><input id="companyName" name="cfd" type="text" placeholder="请输入公司或网点名称"'+t._ssrAttr("value",t.companyName)+' class="list_input"></dd> <dt>所属园区:</dt> '),t._ssrNode('<dd id="tjcx_00" style="position: relative;">',"</dd>",[t._ssrNode('<input id="select_wlyq" placeholder="请选择园区"'+t._ssrAttr("value",t.parkName)+' class="list_wlzx_yq js_yq"> '),t._ssrNode('<div id="list_wlzx_yq">',"</div>",[t._ssrNode('<div class="wlzx_yq_bt js_yq"><div id="wlyq_pos" class="fl list_wlyq_input" style="position:relative;"><input data-toggle="city-picker" data-level="district" type="text" name placeholder="请选择园区所在地" style="height: 100%;"></div> <input id="wlyq_name" placeholder="请输入园区名称"'+t._ssrAttr("value",t.vo.parkName)+' class="list_wlyq_input"> <input readonly="readonly" value="查询" class="list_wlyq_cx"></div> '),t._ssrNode('<div id="js010" class="wlzx_yq_nr">',"</div>",[t._ssrNode('<div class="wlzx_yq_none">',"</div>",[n("font",[t._v("暂无园区信息")])],1),t._ssrNode(" "),t._l(t.logisticsPark,function(e,r){return t._ssrNode('<div class="wlzx_yq_item">',"</div>",[n("font",{attrs:{id:"wlzx_yq_01"}},[t._v(t._s(e.parkName))]),t._ssrNode(' <span id="wlzx_yq_02">'+t._ssrEscape(t._s(e.parkAddress))+"</span>")],2)})],2)],2)],2),t._ssrNode(' <dt>品牌 :</dt> <dd id="tjcx_02">'+t._ssrList(t.AF029,function(e,n){return'<a href="javascript:"'+t._ssrClass(null,[e.code===t.vo.belongBrandCode?"now":"all"])+">"+t._ssrEscape(t._s(e.name))+"</a>"})+'</dd> <dt>其他 :</dt> <dd id="tjcx_03">'+t._ssrList(t.AF025,function(e,n){return'<a href="javascript:"'+t._ssrClass(null,[e.code===t.vo.otherServiceCode?"now":"all"])+">"+t._ssrEscape(t._s(e.name))+"</a>"})+"</dd>")],2)])],2),t._ssrNode(" "),t._ssrNode('<div id="js002" class="w1036">',"</div>",[t._ssrNode('<div class="zx_sx"><span class="biaozhi"></span><span id="wangdian_list">网点列表</span></div> <div class="list_tiaoj"><span id="seq1" class="active">综合排序</span> <span id="seq2" title="距离从近到远">距离最近</span></div> '+(0===t.WangdiangInfoList.length?'<div class="list_none" style="display: block"><span>暂时没有找到您要查询的信息，可以看看其他线路哦</span> <img src="/images/none_pic.png"></div>':"\x3c!----\x3e")+" "),t._l(t.WangdiangInfoList,function(e,r){return t._ssrNode('<ul class="wlzx_list">',"</ul>",[t._ssrNode('<li class="wlzx_list_2">',"</li>",[t._ssrNode('<p class="p1"><a id="nr01"'+t._ssrAttr("href","/member/"+e.companyId)+' target="_blank">'+t._ssrEscape(t._s(e.pointName))+"</a></p> "),t._ssrNode('<p class="p2">',"</p>",[t._ssrNode('<a id="nr01_1"'+t._ssrAttr("href","/member/"+e.companyId)+' target="_blank">',"</a>",[n("font",{attrs:{id:"nr02"}},[t._v(t._s(e.companyName?e.companyName:"普通货主"))])],1)]),t._ssrNode(" "),t._ssrNode('<p class="p3">',"</p>",[t._ssrNode("<i>地址：</i>"),n("font",{attrs:{id:"nr03"}},[t._v(t._s(e.pointAddress))])],2),t._ssrNode(' <p class="p4"><i>约</i><em id="nr04">'+t._ssrEscape(t._s(e.distance))+"</em><i>公里</i></p>")],2),t._ssrNode(' <li class="wlzx_list_3"><p class="p1"><i>联系人：</i><span id="nr05">'+t._ssrEscape(t._s(e.contactsName))+'</span></p> <p class="p2"><i>电话：</i><span id="nr06">'+t._ssrEscape(t._s(e.contactsTel?e.contactsTel+"-":"")+t._s(e.mobile))+'</span></p></li> <li class="wlzx_list_4">'+(e.authStatus?'<p class="p1"><img id="list_shiming" src="/wd/images/10shiming.png"></p>':"\x3c!----\x3e")+" "+(e.isVip?'<p class="p2"><img id="list_xinyong" src="/wd/images/11xinyong.png"></p>':"\x3c!----\x3e")+" "+(e.collateral?'<p class="p3"><img id="list_danbao" src="/wd/images/12danbao.png"></p>':"\x3c!----\x3e")+'</li> <li class="wlzx_list_6"><p class="p1"><a'+t._ssrAttr("href","/member/"+e.companyId+"-order?publishId="+e.companyId)+' target="_blank"><input value="下单" readonly="readonly"></a></p><p class="p2"><a'+t._ssrAttr("href","/member/"+e.companyId)+' target="_blank"><input value="查看" readonly="readonly"></a></p></li>')],2)})],2),t._ssrNode(' <div class="box" style="float: right;margin-right: 170px;"><div id="pagination1" class="page fl"></div> <div class="info fl"></div></div>')],2),t._ssrNode(" "),t._ssrNode('<div id="js007" class="list_right">',"</div>",[t._ssrNode('<div class="zx_sx"><span class="biaozhi"></span><span>物流公司推荐</span></div> '+(0===t.recommendList.length?'<div class="tj_none"><span>没有相关物流公司推荐</span></div>':"\x3c!----\x3e")+" "),t._l(t.recommendList,function(e,r){return t._ssrNode('<div class="tj_list">',"</div>",[t._ssrNode('<p class="p1"><a id="tj010"'+t._ssrAttr("href","/member/"+e.id)+' target="_blank"><span id="tj_01">'+t._ssrEscape(t._s(e.companyName))+"</span></a></p> "+(e.showcreadimg?'<p class="p7">'+t._ssrList(e.creditImg,function(i,t){return'<img src="/wd/images/blue.gif">'})+"</p>":"\x3c!----\x3e")+" "+(e.showcreadeng?'<p class="p7">'+t._ssrList(e.creditdeng,function(i,t){return'<img src="/wd/images/34huanguan.gif">'})+"</p>":"\x3c!----\x3e")+" "),t._ssrNode('<p class="p3">',"</p>",[t._ssrNode("<i>联系人：</i>"),n("font",{attrs:{id:"tj_02"}},[t._v(t._s(e.contactsName))])],2),t._ssrNode(" "),t._ssrNode('<p class="p4">',"</p>",[t._ssrNode("<i>电话：</i>"),n("font",{attrs:{id:"tj_03"}},[t._v(t._s(e.contactsTel?e.contactsTel+"-":"")+t._s(e.mobile))])],2),t._ssrNode(" "),t._ssrNode('<p class="p5">',"</p>",[t._ssrNode("<i>地址：</i>"),n("font",{attrs:{id:"tj_04"}},[t._v(t._s(e.address))])],2),t._ssrNode(' <p class="p6"><a id="tj_05"'+t._ssrAttr("href","/member/"+e.id)+' target="_blank"><span>查看 &gt;</span></a></p>')],2)})],2)],2),t._ssrNode(' <div class="h70"></div>')],2)},[],!1,function(t){var e=n(237);e.__inject__&&e.__inject__(t)},null,"64e00382");e.default=component.exports}};
//# sourceMappingURL=ab3b9a95ead1f45e0321.js.map