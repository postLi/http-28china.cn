exports.ids=[69],exports.modules={164:function(t,e,r){t.exports=r.p+"img/832205e.png"},166:function(t,e,r){t.exports=r.p+"img/10138ca.png"},172:function(t,e,r){t.exports=r.p+"img/bd92ae0.png"},173:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAYAAAA8sqwkAAAABGdBTUEAALGPC/xhBQAAAL1JREFUGBljYACCffv2hf3//58RxMYFgGrMQXKMR44c4f3x48dJIHu/i4tLNjYNQMWVQAPz2NjYtJhsbGw+MzIyugKxF1CiFV3Dnj17yv79+1cA1OBsa2v7ngmkwNnZ+SmQcgEKJu3du7cEpgmouBhoUAkzM7Mz0PZrIHEUdx88eFD39+/fB4CKyoFyPEBcDTIZqPgSSDEIoGgACezfv9/i79+/O4HM30xMTM5OTk4XQeJ4AdAvzkDbDLEpAgBml01PUiCtkgAAAABJRU5ErkJggg=="},174:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAYAAAA8sqwkAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAL1JREFUKFNjwAYOHjxouG/fPmcoFwUwQmk4ACrU//fv314gk5WZmdnd0dHxBEQGApigNBjs2bNH7////3sYGRlbgLj479+/W4G26UKlwQBuw/79+3WAJu8Dauh0cXHpBYnt3bu3BEgVA7GNs7PzXZAYWAPQZC0gtR+Ie4GKu0BiMAB0YivQkCggE6TpKePhw4cFf/36dQ3ohElOTk7tEGWoAGjgVCDlyMHBYQ4WAJoCYeAAQBsYgWrCGBgYGAAfL0qEuWSOgQAAAABJRU5ErkJggg=="},179:function(t,e,r){var content=r(289);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(3).default;t.exports.__inject__=function(t){n("0a2f5269",content,!0,t)}},288:function(t,e,r){"use strict";r.r(e);var n=r(179),o=r.n(n);for(var d in n)"default"!==d&&function(t){r.d(e,t,function(){return n[t]})}(d);e.default=o.a},289:function(t,e,r){e=t.exports=r(2)(!1);var n=r(33),o=n(r(172)),d=n(r(173)),c=n(r(174));e.push([t.i,"#tjcx_02 span>a,#tjcx_03 span>a{margin-right:10px}#tjcx_04{text-align:center}.showbox{float:left}#tjcx_04:hover a{background:none!important}.rem_bot_t{background:url(/gongsi/images/tj.png) no-repeat;height:95px}.wzlwangdian .list_button{width:42px;height:28px;border-radius:2px;color:#f9f9f9;font-size:15px;background:no-repeat url("+o+') 10px 6px #2577e3;text-align:left;padding-left:30px;margin-left:8px;padding-right:5px;cursor:pointer;border:none}.wzlwangdian .toggle-btn{margin:12px 150px 0 4px;height:24px;line-height:24px;font-size:14px;padding:0 9px;background:#fff;color:#6b6b6b;cursor:pointer;text-decoration:none;font:12px/1.5 tahoma,arial,Hiragino Sans GB,"\\5b8b\\4f53",sans-serif}.wzlwangdian .toggle-btn span{font-weight:700}.wzlwangdian .show-collapse .expand{display:none;margin-top:2px}.wzlwangdian .icon-btn-arrow-down-2{margin-top:5px;display:inline-block;background:url('+d+");background-repeat:no-repeat;width:12px;height:7px;cursor:pointer}.wzlwangdian .show-collapse .collapse{display:inline-block;margin-top:2px}.wzlwangdian .toggle-btn .arrow{margin-left:8px;vertical-align:middle}.wzlwangdian .icon-btn-arrow-up-2{margin-top:5px;display:inline-block;background:url("+c+");background-repeat:no-repeat;width:12px;height:7px;cursor:pointer}.wzlwangdian .select_con dl dd a.now{background:#3371ff;color:#fff}",""])},490:function(t,e,r){"use strict";r.r(e);async function n(t,e){let r=await t.post("/28-web/logisticsPark/search",e);return 200===r.data.status?r.data.data.list:{list:[]}}async function o(t,e,r={}){let n=r;n.currentPage=e,n.pageSize=10;let o=await t.post("/28-web/pointNetwork/list",n);return 200===o.data.status?(o.data.data.list.forEach(t=>{t.pointName&&t.pointName.length>15&&(t.pointName=t.pointName.substring(0,15)+".."),t.companyName&&t.companyName.length>15&&(t.companyName=t.companyName.substring(0,15)+".."),t.pointAddress&&t.pointAddress.length>15&&(t.pointAddress=t.pointAddress.substring(0,15)+"..")}),{list:o.data.data.list,pages:o.data.data.pages,currentPage:o.data.data.pageNum,total:o.data.data.total}):{list:[],pages:0,currentPage:1}}var d={name:"Index",head:{link:[{rel:"stylesheet",href:"/css/wangdian.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/WTMap.css"}],script:[{src:"/js/jquery.pagination.min.js"},{src:"layer/layer.js"}]},data:()=>({checkNotice:{startAddres:"",endAddres:"",select:"",phone:""},phoneHolder:"请输入正确手机号",wangdianInfoList:[],totalPage:1,currentPage:1,parkName:"",startProvince:"",startCity:"",startArea:"",endProvince:"",endCity:"",endArea:"",companyName:""}),async asyncData({$axios:t,app:e,query:r,error:d}){let c=r.pos?r.pos.split(","):["",""],l={startProvince:r.startProvince?r.startProvince:e.$cookies.get("currentProvinceFullName"),startCity:r.startCity?r.startCity:e.$cookies.get("currentAreaFullName"),startArea:r.startArea?r.startArea:"",endProvince:r.endProvince?r.startProvince:"",endCity:r.endCity?r.endCity:"",endArea:r.endArea?r.endArea:"",authStatus:r.authStatus?r.authStatus:"",parkName:r.parkName?r.parkName:"",otherServiceCode:r.otherServiceCode?r.otherServiceCode:"",belongBrandCode:r.belongBrandCode?r.belongBrandCode:"",companyName:r.companyName?r.companyName:"",latitude:c[1],longitude:c[0],parkId:r.parkId||""};l.province=l.startProvince,l.city=l.startCity,l.area=l.startArea;let h=await o(t,1,l),m=await async function(t,e){let r=e;r.currentPage=1,r.pageSize=10;let n=await t.post("/28-web/logisticsCompany/pointNetwork/recommend",{province:r.startProvince,city:r.startCity,...r});return 200===n.data.status?n.data.data.list:[]}(t,l),v=await t.get("/28-web/logisticsCompany/excellent?currentPage=1&pageSize=3");200==v.data.status&&v.data.data.forEach(t=>{t.advService=t.productServiceNameList?t.productServiceNameList:t.otherServiceNameList});let y=await t.get("/28-web/logisticsCompany/enterpriseRecommend");200==y.data.status&&y.data.data.forEach(t=>{t.advService=t.productServiceNameList?t.productServiceNameList:t.otherServiceNameList}),m.forEach(t=>{t.credit>=0&&t.credit<=3&&(t.showcreadimg=!0,t.creditImg=1),t.credit>=4&&t.credit<=10&&(t.showcreadimg=!0,t.creditImg=2),t.credit>=11&&t.credit<=40&&(t.showcreadimg=!0,t.creditImg=3),t.credit>=41&&t.credit<=90&&(t.showcreadimg=!0,t.creditImg=4),t.credit>=91&&t.credit<=150&&(t.showcreadimg=!0,t.creditImg=5),t.credit>=151&&t.credit<=250&&(t.showcreadeng=!0,t.creditdeng=1),t.credit>=251&&t.credit<=500&&(t.showcreadeng=!0,t.creditdeng=2),t.credit>=500&&t.credit<=1e3&&(t.showcreadeng=!0,t.creditdeng=3),t.credit>=1001&&t.credit<=2e3&&(t.showcreadeng=!0,t.creditdeng=4),t.credit>=2001&&(t.showcreadeng=!0,t.creditdeng=5)});let _=await t.get("/aflc-common/sysDict/getSysDictByCodeGet/AF029"),f=await t.get("/aflc-common/sysDict/getSysDictByCodeGet/AF025"),x=await n(t,{locationArea:l.startArea,locationCity:l.startCity,locationProvince:l.startProvince,...l});if(200===_.data.status&&_.data.data.unshift({code:"",name:"不限"}),200===f.data.status&&f.data.data.unshift({code:"",name:"不限"}),200===_.data.status||200===f.data.status)return{AF029:200===_.data.status?_.data.data:[],AF025:200===f.data.status?f.data.data:[],listE:200==v.data.status?v.data.data:[],listG:200==y.data.status?y.data.data:[],logisticsPark:x,WangdiangInfoList:h.list,total:h.total,pages:h.pages,recommendList:m,vo:l,companyName:r.companyName||""};d({statusCode:500,message:"查找不到该物流网点"})},mounted(){seajs.use(["/layer/layer.js","/layer/dist/layui.js"],function(){layui.use("form",function(){$(".ydh").click(function(){$("#yd_nr").val("1809260061"),$(".ydh").css("display","none")}),$("#yd_nr").keyup(function(){$("#yd_nr").val()&&($("#yd_cx1").css("background-color","#eb434d"),$("#yd_cx1").css("color","#f9f9f9"),$(".ydh").css("display","none")),$("#yd_nr").val()||($("#yd_cx1").css("background-color","#3f94ee"),$("#yd_cx1").css("color","#red"),$(".ydh").css("display","block"))}),$("#yd_cx1").click(function(){var t=$("#yd_nr").val();t&&window.open("/ydcx?num="+t),t||alert("请先输入运单号查询！")}),layui.form.render()})}),this.companyName=this.$route.query.companyName||"",seajs.use(["/js/gaodemap2.js"]),$(".collapse").click(function(){$(".collapse").css("display","none"),$(".expand").css("display","inline-block"),$(".showbox").hide()}),$(".expand").click(function(){$(".collapse").css("display","inline-block"),$(".expand").css("display","none"),$(".showbox").show()});let t=this;$("#select_wlyq").mousedown(function(){$("#list_wlzx_yq").css("display","block")}),$(".icon").click(function(){$(".icon").removeClass("active"),$(this).addClass("active")}),$("#seq1").click(async function(){$("#seq2").removeClass("active"),$(this).addClass("active");let e=await o(t.$axios,t.current,Object.assign({filterSign:1},t.vo));t.WangdiangInfoList=e.list}),$("#seq2").click(async function(){$("#seq1").removeClass("active"),$(this).addClass("active");let e=await o(t.$axios,t.current,Object.assign({filterSign:2},t.vo));t.WangdiangInfoList=e.list}),$("body").click(function(t){var e=$(".js_yq");e.is(t.target)||0!==e.has(t.target).length||$("#list_wlzx_yq").css("display","none")}),$("#select_wlyq").val(this.$route.query.parkName||""),$("#select_wlyq").attr("name",this.$route.query.parkId||""),$("#addressFrom input").citypicker({province:this.vo.startProvince,city:this.vo.startCity,district:this.vo.startArea}),$("#addressTo input").on("mouseenter",()=>{this.setMap()}),$("#addressTo input").val(this.$route.query.address||""),this.pagination()},methods:{sendNotice(){this.sendNot();let t={startProvince:this.startProvince,startCity:this.startCity,startArea:this.startArea,endProvince:this.endProvince,endCity:this.endCity,endArea:this.endArea};""===this.checkNotice.startAddres?$("#form0").css("border-color","red"):""!=this.checkNotice.startAddres&&$("#form0").css("border-color","#e5e5e5"),""===this.checkNotice.endAddres?$("#form1").css("border-color","red"):""!=this.checkNotice.endAddres&&$("#form1").css("border-color","#e5e5e5"),""===this.checkNotice.select?$("#form2").css("border-color","red"):($("#form2").css("border-color","#e5e5e5"),t.memo=this.checkNotice.select);let e=/^1[3|4|5|7|8|9]\d{9}$/;""===this.checkNotice.phone?($(".ltl-phone").css("border-color","red"),this.phoneHolder="请输入正确手机号"):e.test(this.checkNotice.phone)?($(".ltl-phone").css("border-color","#e5e5e5"),t.msgMobile=this.checkNotice.phone):($(".ltl-phone").css("border-color","red"),this.checkNotice.phone="",this.phoneHolder="请输入正确手机号"),""!=this.checkNotice.startAddres&&""!=this.checkNotice.endAddres&&""!=this.checkNotice.select&&""!=this.checkNotice.phone&&this.$axios.post("/28-web/helpFind/range/create",t).then(t=>{this.reset(),200===t.data.status?layer.msg("提交成功，客服稍后将会与您联系"):layer.msg(t.data.errorInfo)}).catch(t=>{layer.msg(res.data.errorInfo)})},setMap(){this.searchDo(),$("#addressTo input").attr("wtmapinit",this.startProvince+this.startCity+this.startArea)},sendNot(){let t=[],e=[];$("#form0 .select-item").each(function(i,e){t.push($(this).text())}),this.startProvince=t[0]?t[0]:"",this.startCity=t[1]?t[1]:"",this.startArea=t[2]?t[2]:"",this.checkNotice.startAddres=this.startProvince+this.startCity+this.startArea,$("#form1 .select-item").each(function(i,t){e.push($(this).text())}),this.endProvince=e[0]?e[0]:"",this.endCity=e[1]?e[1]:"",this.endArea=e[2]?e[2]:"",this.checkNotice.endAddres=this.endProvince+this.endCity+this.endArea},searchDo(){let t=[],e=[];$("#addressFrom .select-item").each(function(i,e){t.push($(this).text())}),this.startProvince=t[0]?t[0]:"",this.startCity=t[1]?t[1]:"",this.startArea=t[2]?t[2]:"",this.checkNotice.startAddres=this.startProvince+this.startCity+this.startArea,$("#addressTo .select-item").each(function(i,t){e.push($(this).text())}),this.endProvince=e[0]?e[0]:"",this.endCity=e[1]?e[1]:"",this.endArea=e[2]?e[2]:"",this.checkNotice.endAddres=this.endProvince+this.endCity+this.endArea},search(){this.searchDo();let t=$("#addressTo input").attr("thepos")||"",address=$("#addressTo input").val()||"";window.location.href=`/wangdian/?&belongBrandCode=${this.vo.belongBrandCode}&otherServiceCode=${this.vo.otherServiceCode}&companyName=${this.companyName}&parkName=${this.parkName}&endArea=${this.endArea}&endCity=${this.endCity}&endProvince=${this.endProvince}&startArea=${this.startArea}&startCity=${this.startCity}&startProvince=${this.startProvince}&pos=${t}&address=${address}&parkId=${this.parkId||""}`},AF029Click(t){this.vo.belongBrandCode=t.code,this.search()},AF025Click(t){this.vo.otherServiceCode=t.code,this.search()},addTitle(t){this.parkName=t.parkName,this.parkId=t.id},async seachlist(){let t=[];$("#wlyq_pos .select-item").each(function(i,e){t.push($(this).text())}),this.vo.startProvince=t[0]?t[0]:"",this.vo.startCity=t[1]?t[1]:"",this.vo.startArea=t[2]?t[2]:"",this.logisticsPark=await n(this.$axios,{locationArea:this.vo.startArea,locationCity:this.vo.startCity,locationProvince:this.vo.startProvince,...this.vo})},getFung(t){getGSList(this.$axios,1,t)},findMe(){this.addFn(),this.types=2},callme(){this.addFn(),this.types=1},addFn(){this.isAdd=!0},noaddFn(){this.isAdd=!1},pagination(){$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:async t=>{$("#current1").text(t);let e=await o(this.$axios,t,this.vo);this.totalPage=e.pages,this.current=e.current,this.WangdiangInfoList=e.list}})},reload(){window.location.href="/wangdian"}}},c=r(0);var component=Object(c.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wzlwangdian"},[t._ssrNode('<div class="list_box">',"</div>",[t._ssrNode('<div class="list_nav"><a href="/">物流首页</a>&gt;<a id="list_nav_a" href>物流网点</a></div> '),t._ssrNode('<div class="list_left">',"</div>",[t._ssrNode('<div class="w1036" style=" background-color: #fff;margin-bottom: 20px;">',"</div>",[t._ssrNode('<div class="select_con">',"</div>",[t._ssrNode("<dl>","</dl>",[t._ssrNode('<dt>所在地：</dt> <dd><form name="zxaddform" method="post" action style="float:left;"><input name="a7" type="hidden" value="0"> <input type="hidden" name="mid" value="19"> <input type="hidden" name="dopost" value="search"> <div id="addressFrom" class="fl list_input" style="position:relative;"><input name="cfd" data-toggle="city-picker" data-level="district" type="text" placeholder="请输入出发地" style="height: 100%;width:100%;border: none;outline: none;"></div> <div id="addressTo" class="fl list_input" style="position:relative"><input name="ddd" wtmap="detail" type="text" placeholder="请输入详细地址查附近网点" style="height: 100%;width:100%;border: none;outline: none;"></div> <div style="float:left;position:relative;font-size:14px;">\n                关键字：\n                <input id="companyName" name="cfd" type="text" placeholder="公司/网点名称/地址/电话"'+t._ssrAttr("value",t.companyName)+' class="list_input"></div></form> <br></dd> <dt>公司名称 :</dt> <dd><input id="companyName" name="cfd" type="text" placeholder="请输入公司或网点名称"'+t._ssrAttr("value",t.companyName)+' class="list_input"></dd> <dt>所属园区:</dt> '),t._ssrNode('<dd id="tjcx_00" style="position: relative;">',"</dd>",[t._ssrNode('<input id="select_wlyq" placeholder="请选择园区"'+t._ssrAttr("value",t.parkName)+' class="list_wlzx_yq js_yq"> '),t._ssrNode('<div id="list_wlzx_yq">',"</div>",[t._ssrNode('<div class="wlzx_yq_bt js_yq"><div id="wlyq_pos" class="fl list_wlyq_input" style="position:relative;"><input data-toggle="city-picker" data-level="district" type="text" name placeholder="请选择园区所在地" style="height: 100%;"></div> <input id="wlyq_name" placeholder="请输入园区名称"'+t._ssrAttr("value",t.vo.parkName)+' class="list_wlyq_input"> <input readonly="readonly" value="查询" class="list_wlyq_cx"></div> '),t._ssrNode('<div id="js010" class="wlzx_yq_nr">',"</div>",[0==t.logisticsPark.length?t._ssrNode('<div class="wlzx_yq_none">',"</div>",[n("font",[t._v("暂无园区信息")])],1):t._e(),t._ssrNode(" "),t._l(t.logisticsPark,function(e,r){return t._ssrNode('<div class="wlzx_yq_item">',"</div>",[n("font",{attrs:{id:"wlzx_yq_01"}},[t._v(t._s(e.parkName))]),t._ssrNode(' <span id="wlzx_yq_02">'+t._ssrEscape(t._s(e.parkAddress))+"</span>")],2)})],2)],2)],2),t._ssrNode(' <div class="showbox"><dt>品牌 :</dt> <dd id="tjcx_02">'+t._ssrList(t.AF029,function(e,r){return'<a href="javascript:"'+t._ssrClass(null,[e.code===t.vo.belongBrandCode?"now":"all"])+">"+t._ssrEscape(t._s(e.name))+"</a>"})+'</dd> <dt>其他 :</dt> <dd id="tjcx_03">'+t._ssrList(t.AF025,function(e,r){return'<a href="javascript:"'+t._ssrClass(null,[e.code===t.vo.otherServiceCode?"now":"all"])+">"+t._ssrEscape(t._s(e.name))+"</a>"})+'</dd></div> <dd id="tjcx_04"><input id="search_wangdian" name="Submit2" readonly="readonly" value=" 搜索 " class="list_button"> <input id="flush" name="Submit2" readonly="readonly" value="重置 "> <a href="#" class="toggle-btn show-collapse"><span class="expand"><span>显示筛选</span><span class="arrow icon-btn-arrow-down-2"></span></span> <span class="collapse"><span>收起筛选</span><span class="arrow icon-btn-arrow-up-2"></span></span></a></dd>')],2)])]),t._ssrNode(" "),t._ssrNode('<div id="js002" class="w1036">',"</div>",[t._ssrNode('<div class="list_tiaoj"><span id="seq1" class="active">综合排序</span> <span id="seq2" title="距离从近到远">距离最近</span> <div class="wzlwad"><span class="icon active"><img src="wd/images/mue.png" style="width:25px;float:left;margin:8px;"></span> <span class="icon"><img src="wd/images/map.png" style="width:25px;float:left;margin:8px;"></span> <span class="city">'+t._ssrEscape("在"+t._s(t.vo.startProvince+"-"+t.vo.startCity)+"共找到")+"<strong>"+t._ssrEscape(t._s(t.total))+"</strong>个网点</span></div></div> "+(0===t.WangdiangInfoList.length?'<div class="list_none" style="display: block"><span>暂时没有找到您要查询的信息，可以看看其他线路哦</span> <img src="/images/none_pic.png"></div>':"\x3c!----\x3e")+" "),t._l(t.WangdiangInfoList,function(e,r){return t._ssrNode('<ul class="wlzx_list">',"</ul>",[t._ssrNode('<li class="wlzx_list_2">',"</li>",[t._ssrNode('<p class="p1"><a id="nr01"'+t._ssrAttr("href","/member/"+e.companyId)+' target="_blank">'+t._ssrEscape(t._s(e.pointName))+"</a></p> "),t._ssrNode('<p class="p2">',"</p>",[t._ssrNode('<a id="nr01_1"'+t._ssrAttr("href","/member/"+e.companyId)+' target="_blank">',"</a>",[n("font",{attrs:{id:"nr02"}},[t._v(t._s(e.companyName?e.companyName:"普通货主"))])],1)]),t._ssrNode(" "),t._ssrNode('<p class="p3">',"</p>",[t._ssrNode("<i>地址：</i>"),n("font",{attrs:{id:"nr03"}},[t._v(t._s(e.pointAddress))])],2),t._ssrNode(" "+(e.distance?'<p class="p4"><i>约</i><em id="nr04">'+t._ssrEscape(t._s(e.distance))+"</em><i>公里</i></p>":"\x3c!----\x3e"))],2),t._ssrNode(' <li class="wlzx_list_3"><p class="p1"><i>联系人：</i><span id="nr05">'+t._ssrEscape(t._s(e.contactsName))+'</span></p> <p class="p2"><i>电话：</i><span id="nr06">'+t._ssrEscape(t._s(e.contactsTel?e.contactsTel+"-":"")+t._s(e.mobile))+'</span></p></li> <li class="wlzx_list_4">'+(e.authStatus?'<p class="p1"><img id="list_shiming" src="/wd/images/10shiming.png"></p>':"\x3c!----\x3e")+" "+(e.isVip?'<p class="p2"><img id="list_xinyong" src="/wd/images/11xinyong.png"></p>':"\x3c!----\x3e")+" "+(e.collateral?'<p class="p3"><img id="list_danbao" src="/wd/images/12danbao.png"></p>':"\x3c!----\x3e")+'</li> <li class="wlzx_list_6"><p class="p1"><a'+t._ssrAttr("href","/member/"+e.companyId+"-order?publishId="+e.companyId)+' target="_blank"><input value="下单" readonly="readonly"></a></p><p class="p2"><a'+t._ssrAttr("href","/member/"+e.companyId)+' target="_blank"><input value="查看" readonly="readonly"></a></p></li>')],2)})],2),t._ssrNode(' <div class="box" style="float: right;margin-right: 170px;"><div id="pagination1" class="page fl"></div> <div class="info fl"></div></div>')],2),t._ssrNode(' <div class="list_right"><div class="last_li"><div class="btn_top"><button class="layui-btn" style="width: 298px;background: #3f94ee;height:48px;color:#fff;border:none">实力承运商入驻</button></div> <div class="rem_bot" style="margin-top: 10px"><div class="rem_bot_t"><div class="rem_bot_titp" style="text-align: center;color: #ffffff;padding-top: 10px; "><img src="/gongsi/images/06tj.png" alt><span style="font-size: 20px;text-align: center;vertical-align: middle;padding-left:10px">优质承运商推荐</span> <p style="text-align: center;">优质承运商推荐，钱力心</p></div></div> <ul class="rem_bot_b" style="padding: 10px 15px 15px">'+t._ssrList(t.listE,function(e,i){return'<li style="padding-top: 16px;font-size:14px; padding-left: 10px;"><div><span class="rem_bot_b_title" style="color:#333;vertical-align: middle;padding-right:10px">'+t._ssrEscape(t._s(e.companyName.length>10?e.companyName.substring(0,10)+"..":e.companyName))+"</span> <img"+t._ssrAttr("src",r(164))+' alt></div> <p style="padding-top:2px">'+t._ssrList(e.advService.length>3?e.advService.slice(0,3):e.advService,function(e,i){return'<span style="padding-right: 16px;color: #666;font-size:14px">'+t._ssrEscape(t._s(e))+"</span>"})+"</p> <p><a"+t._ssrAttr("href","/member/"+e.id)+' target="_blank" style="cursor: pointer;color:#2577e3;font-size:14px;padding-top:5px">进入官网</a></p></li>'})+'</ul></div></div> <div class="list_help"><div class="list-box-r-top"><h2 class="list_help_title">帮我找优质承运商</h2> <form action><div id="form0" class="ltl-input0"><input id="right-bar-form" data-toggle="city-picker" data-level="district" type="text" placeholder="请选择出发地"'+t._ssrAttr("value",t.checkNotice.startAddres)+' class="ltl-location"> <i class="ltl-icons ss56-common-sprite1 ltl-ico-start"></i></div> <div id="form1" class="ltl-input0"><input autocomplete="off" data-toggle="city-picker" data-level="district" type="text" placeholder="请选择目到达地"'+t._ssrAttr("value",t.checkNotice.endAddres)+' class="ltl-location"> <i class="ltl-icons ss56-common-sprite2 ltl-ico-end"></i></div> <textarea id="form2" maxlength="100" placeholder="备注信息，如：期望发货时间、货物体积重量等信息..." class="textare" style="padding:18px;height:80px;width:238px;">'+t._ssrEscape(t._s(t.checkNotice.select))+'</textarea> <div id="form3" class="ltl-input"><input'+t._ssrAttr("placeholder",t.phoneHolder)+' type="text" maxlength="11"'+t._ssrAttr("value",t.checkNotice.phone)+' class="ltl-phone"> <span class="ltl-button">找到通知我</span></div></form></div></div> <div class="header_links_r" style="margin:20px 0;float:left;width:100%;position: relative;background: #fff;float:left;"><p class="header_links_r_search" style="font-size: 18px;color: #0d91e9;height:55px;line-height:55px;margin-left:20px;font-weight: bold ">运单查询</p> <input id="yd_nr" rows="3" cols="20" placeholder="请输入运单号，例如：" style="width: 262px;margin-left: 10px;height:40px;"> <input type="button" style="height: 42px;border-right:none;"> <div class="ydh" style="position: absolute; left: 145px;width: 100px;height: 28px;cursor: pointer; top: 70px;;color:#0d91e9;margin-left: 30px"><span>1809260061</span></div> <div><button id="yd_cx1" class="layui-btn" style="width: 277px;height:40px;line-height:40px;border-radius: 4px;border:none;border-radius: 3px;margin:20px 10px;background:#3f94ee;color:#fff;">立即查询</button></div></div> <div class="remqy"><div class="zx_sx"><span class="biaozhi"></span><span>推荐企业</span> <i style="color: rgb(255,116,23);float: right;font-size: 15px;border-bottom: 1px solid rgb(255,116,23);cursor: pointer;padding-right:5px">我也想出现在这里</i></div> '+(t.listG==[]||null==t.listG?'<div class="tj_none"><span>没有相关物流公司推荐</span></div>':"\x3c!----\x3e")+" <ul>"+t._ssrList(t.listG,function(e,i){return"<li"+t._ssrClass(null,"bg"+i)+' style="padding: 13px 6px 10px 6px;background: rgb(208,104,105);margin-top: 10px"><a'+t._ssrAttr("href","/member/"+e.id)+' target="_blank"><p style="font-size: 20px;color: rgb(253,240,3);text-align: center">'+t._ssrEscape(t._s(e.companyName.length>10?e.companyName.substring(0,10)+"..":e.companyName))+'</p> <div style="text-align: center;width: 200px;border: 1px solid #ccc;padding:10px;margin:20px 45px 0 32px;"><i style="color: #ffffff;font-size: 12px;font-weight: bold">+</i> '+t._ssrList(e.advService,function(e,i){return'<span style="font-size: 12px;color: #fff;padding-right: 5px">'+t._ssrEscape(t._s(e))+"</span>"})+'</div> <p style="font-size: 20px;color: #fff;margin-top: 20px;text-align: center">'+(e.mobile||null!=e.mobile?"<img"+t._ssrAttr("src",r(166))+" alt>":"\x3c!----\x3e")+' <span style="vertical-align: middle;padding-left: 5px">'+t._ssrEscape(t._s(e.mobile))+"</span></p></a></li>"})+"</ul></div></div>")],2),t._ssrNode(' <div class="h70"></div>')],2)},[],!1,function(t){var e=r(288);e.__inject__&&e.__inject__(t)},null,"8ecc5e82");e.default=component.exports}};
//# sourceMappingURL=46e35f6a5b218f349ac8.js.map