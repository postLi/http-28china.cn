exports.ids=[55],exports.modules={104:function(e,t,n){"use strict";var r={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},l=n(0),component=Object(l.a)(r,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"side_left"},[e._ssrNode('<ul><li class="side_title"><span>客户服务</span></li> <li'+e._ssrClass("side_memu",-1!==e.tpath.indexOf("order")?"active":"")+"><a"+e._ssrAttr("href",e.mid+"-order")+"><span>在线下单</span></a></li> <li"+e._ssrClass("side_memu",-1===e.tpath.indexOf("order")?"active":"")+'><span>查询服务</span></li> <ul class="side_submemu "><li'+e._ssrClass(null,-1!==e.tpath.indexOf("chajian")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-chajian")+"><span>查件（物流追踪）</span></a></li> <li"+e._ssrClass(null,-1!==e.tpath.indexOf("line")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-line")+"><span>物流专线</span></a></li> <li"+e._ssrClass(null,-1!==e.tpath.indexOf("wangdian")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-wangdian")+"><span>网点分布</span></a></li> <li"+e._ssrClass(null,-1!==e.tpath.indexOf("huo")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-huo")+"><span>货源信息</span></a></li></ul></ul>")])},[],!1,null,null,"5b5ef78e");t.a=component.exports},196:function(e,t,n){"use strict";var r={props:{list:{type:Array,default:()=>[]},getCode:{type:Boolean,default:!1}},data:()=>({current:""}),methods:{setVal(code,e,t){this.current=t;let n=e.replace(/>(.*)/,"$1-").split("-");this.getCode&&(n=code),this.$emit("input",n)}}},l=n(0),component=Object(l.a)(r,function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",[e._ssrNode('<a href="#"'+e._ssrClass("all",""===e.current?"now":"")+">不限</a> "+e._ssrList(e.list,function(t,n){return"<a"+e._ssrAttr("rel",t.code)+' href="#"'+e._ssrClass(null,e.current===n?"now":"")+">"+e._ssrEscape(e._s(t.name))+"</a>"}))])},[],!1,null,null,"085e3e1d");t.a=component.exports},413:function(e,t,n){"use strict";n.r(t);var r=n(93),l=n(104),c=n(196),d={components:{MemberBanner:r.a,MemberSidebar:l.a,SelectType:c.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"}]},layout:"member",data:()=>({stime:"",query:{departureTimeCode:"",endArea:"",endCity:"",endProvince:"",startArea:"",startCity:"",startProvince:"",orderBy:""}}),computed:{AF026(){return this.$store.state.dictList.AF026}},mounted(){let e=this;this.$store.state.member.id;seajs.use(["/js/city-picker.js","/js/jquery.pagination.min.js"],function(){var t=$.getParams("startp"),n=$.getParams("endp"),r=$.getParams("startc"),l=$.getParams("endc"),c=$.getParams("starta"),d=$.getParams("enda");$("#wlLineFrom input").citypicker({province:t,city:r,district:c}),$("#wlLineTo input").citypicker({province:n,city:l,district:d}),$("#seq0").click(function(){e.query.orderBy="",e.fetchData(1),e.setPagination()}),$("#seq1").click(function(){e.query.orderBy="orderDesc",e.fetchData(1),e.setPagination()}),$("#seq2").click(function(){e.query.orderBy="transportAgingAsc",e.fetchData(1),e.setPagination()}),$("#seq3").mouseenter(function(){$("#tj_price").css("display","block")}),$("#seq3").mouseleave(function(){$("#tj_price").css("display","none")}),$("#tj_price").mouseenter(function(){$("#tj_price").css("display","block")}),$("#tj_price").mouseleave(function(){$("#tj_price").css("display","none")}),$("#tj_price2").click(function(){$("#tj_price").css("display","none"),e.query.orderBy="weigthPrice",e.fetchData(1),e.setPagination()}),$("#tj_price1").click(function(){$("#tj_price").css("display","none"),e.query.orderBy="lightPrice",e.fetchData(1),e.setPagination()}),$(".list_tiaoj span").click(function(){$(".list_tiaoj span").removeClass("active"),$(this).toggleClass("active")}),e.setPagination(),$("#search_wlLine1").click(function(){var t=[],n=[];$("#wlLineFrom .select-item").each(function(i,e){t.push($(this).text())});var r=t[0]||"",l=t[1]||"",c=t[2]||"";$("#wlLineTo .select-item").each(function(i,e){n.push($(this).text())});var d=n[0]||"",o=n[1]||"",m=n[2]||"";e.query.startProvince=r,e.query.startCity=l,e.query.startArea=c,e.query.endProvince=d,e.query.endCity=o,e.query.endArea=m,e.query.departureTimeCode=e.stime,e.fetchData(1).then(t=>{e.setPagination()})}),$("#search_wlLine2").click(function(){var e=[],t=[];$("#wlLineFrom .select-item").each(function(i,t){e.push($(this).text())});var n=e[0]||"",r=e[1]||"",l=e[2]||"";$("#wlLineTo .select-item").each(function(i,e){t.push($(this).text())});var c=t[0]||"",d=t[1]||"",o=t[2]||"",m="/zhuanxian/list?startp="+(n=encodeURI(n))+"&startc="+(r=encodeURI(r))+"&starta="+(l=encodeURI(l))+"&endp="+(c=encodeURI(c))+"&endc="+(d=encodeURI(d))+"&enda="+(o=encodeURI(o));window.open(m)})})},async fetch({store:e,params:t,$axios:n,error:r,query:l}){e.commit("member/setId",t.id);let c=l.startp||"",d=l.endp||"",o=l.startc||"",m=l.endc||"",_=l.starta||"",h=l.enda||"";return Promise.all([e.dispatch("getDictList",{name:"AF026"}),e.dispatch("member/GETCOMPANYINFO",t.id).catch(e=>{"network"===e.type?r({statusCode:500,message:e.msg}):r({statusCode:404,message:e.msg})}),e.dispatch("member/GETCOMPANYLINEINFO",{publishId:t.id,pageSize:10,currentPage:1,startProvince:c,endProvince:d,startCity:o,endCity:m,startArea:_,endArea:h})])},methods:{fetchData(e){return this.$store.dispatch("member/GETCOMPANYLINEINFO",{publishId:this.$route.params.id,pageSize:10,currentPage:e,...this.query})},setPagination(){let e=this;$("#pagination1").pagination({currentPage:1,count:10,totalPage:this.$store.state.member.lineTotal,callback:function(t){$("#current1").text(t),e.fetchData(t)}})},findPrice(e,t){let n=0;return e.length?(e.forEach(e=>{e.type===t&&0===e.startVolume&&(n=e.discountPrice||e.primeryPrice)}),n):0}}},o=n(0),component=Object(o.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("MemberBanner"),e._ssrNode(" "),e._ssrNode('<div class="main">',"</div>",[n("MemberSidebar"),e._ssrNode(" "),e._ssrNode('<div id="js003" class="right">',"</div>",[e._ssrNode('<div class="right_bt1"><div class="right_bt1_1"><img src="/member/images/line.png"><span>物流专线</span></div> <div class="huo_tj line_tj"><div class="select_con"><dl><dt>选择专线线路 ：</dt> <dd><form name="zxaddform" method="post" action><input name="a7" type="hidden" value="0"> <input type="hidden" name="mid" value="19"> <input type="hidden" name="dopost" value="search"> <div id="wlLineFrom" class="fl list_input" style="position:relative"><input name="cfd" data-toggle="city-picker" data-level="district" type="text" placeholder="请输入出发地" style="height: 100%;"></div> <img src="/images/02jiantou.png" class="fl list_img"> <div id="wlLineTo" class="fl list_input" style="position:relative"><input name="ddd" data-toggle="city-picker" data-level="district" type="text" placeholder="请输入到达地" style="height: 100%;"></div> <input id="search_wlLine1" name="Submit2" value="搜本站" readonly="readonly" class="list_button button_active"> <input id="search_wlLine2" name="Submit2" value="搜全站" readonly="readonly" class="list_button"></form></dd></dl></div></div></div> <div class="list_tiaoj"><span id="seq0" class="active">默认排序</span><span id="seq1" title="交易量从高到低">交易量</span><span id="seq2" title="运输时效从低到高">运输时效</span><span id="seq3">重货价格</span> <div id="tj_price"><span id="tj_price1">轻货价格从低到高</span> <span id="tj_price2">重货价格从低到高</span></div></div> <div class="right_bt2 line_bt2 clear"><ul><li class="bt_01">出发地 → 到达地</li> <li class="bt_02">专线信息</li> <li class="bt_03">会员类型</li> <li class="bt_04">人气</li> <li class="bt_05">操作</li></ul></div> <div class="line_none"'+e._ssrStyle(null,null,{display:0===e.$store.state.member.lineList.length?"":"none"})+"><span>暂无物流专线信息</span></div> "),e._l(e.$store.state.member.lineList,function(t,r){return e._ssrNode('<div class="line_item">',"</div>",[e._ssrNode("<ul>","</ul>",[e._ssrNode('<li class="line_item01"><a id="nr021"'+e._ssrAttr("href","/zhuanxian/detail?id="+t.id+"&publishId="+t.companyId)+' target="_blank"><span><em id="nr022">'+e._ssrEscape(e._s(t.startCity||"")+e._s(t.startArea||""))+'</em> → <em id="nr023">'+e._ssrEscape(e._s(t.endCity||"")+e._s(t.endArea||""))+"</em></span></a></li> "),e._ssrNode('<li class="line_item02">',"</li>",[e._ssrNode('<span>重货:<i id="nr024">'+e._ssrEscape(e._s(e.findPrice(t.rangePrices,"1")))+"</i><em>元/公斤</em></span>"),n("font",[e._v("时效:"),n("i",{attrs:{id:"nr025"}},[e._v(e._s(t.transportAging)+e._s(t.transportAgingUnit))])]),e._ssrNode(' <span>轻货:<i id="nr026">'+e._ssrEscape(e._s(e.findPrice(t.rangePrices,"0")))+"</i><em>元/立方</em></span>"),n("font",[e._v("最低一票:"),n("i",{attrs:{id:"nr027"}},[e._v(e._s(t.lowerPrice||"面议"))])])],2),e._ssrNode(' <li class="line_item03"><p class="p1"><img id="list_shiming" src="/images/list_wlzx/10shiming.png"></p> <p class="p2"><img id="list_xinyong" src="/images/list_wlzx/11xinyong.png"></p> <p class="p3"><img id="list_danbao" src="/images/list_wlzx/12danbao.png"></p></li> <li class="line_item04"><p class="p1"><span><em id="nr028">'+e._ssrEscape(e._s(t.browseNumber))+'</em>浏览量</span></p> <p class="p2"><span><em id="nr029">'+e._ssrEscape(e._s(t.assessNumber))+'</em>收藏量</span></p></li> <li class="line_item05"><a id="nr_order"'+e._ssrAttr("href",e.$store.state.member.id+"-order?id="+t.id+"&publishId="+t.companyId)+' target="_blank"><input id="fahuo" readonly="readonly" value="下单"></a> <a id="nr0210"'+e._ssrAttr("href","/zhuanxian/detail?id="+t.id+"&publishId="+t.companyId)+'><input readonly="readonly" value="查看"></a></li>')],2)])})],2),e._ssrNode(' <div class="box" style="float: right;margin-right: 200px;"><div id="pagination1" class="page fl"></div> <div class="info fl"></div></div>')],2)],2)},[],!1,null,null,"03b25f45");t.default=component.exports},93:function(e,t,n){"use strict";var r=n(0),component=Object(r.a)({},function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"banner-box"},[this._ssrNode('<img src="/member/images/banner_gsjj.png">')])},[],!1,null,null,"759db938");t.a=component.exports}};
//# sourceMappingURL=dd303a7ce2400b6e3e3d.js.map