exports.ids=[47],exports.modules={417:function(e,m,l){"use strict";l.r(m);var c={components:{},layout:"member",computed:{plen(){return this.$store.state.member.company.productServiceCodeList.length},olen(){return this.$store.state.member.company.otherServiceCodeList.length},mid(){return this.$store.state.member.id},company(){return this.$store.state.member.company}},mounted(){var e=this;seajs.use(["/index/js/city-picker.data.js"],function(){seajs.use(["/js/gaodemap2.js","/index/js/city-picker.js","/member/js/banner.js","/index/js/collection.js"],function(){for(var m=e.company.productServiceCodeList,l=m.length,c=e.company.otherServiceCodeList,n=e.mid,i=1;i<10;i++)m&&-1!=m.indexOf("AF0270"+i)&&($(".main1_left .item"+i).css("display","block"),$("#cp0"+i).css("display","block")),c&&i<9&&-1!=c.indexOf("AF0250"+i)&&$(".main1_right .item"+i).css("display","block");9==l&&$(".main1_left .item9").css("display","none"),$("body").click(function(e){var m=$(".bill-search ");m.is(e.target)||0!==m.has(e.target).length||$(".bill-search").removeClass("show")}),$("#txtbill").mousedown(function(){$(".bill-search").addClass("show")}),$("#btn_onlineTracking").click(function(){console.log("$('#txtbill').val()",$("#txtbill").val());var e=$("#txtbill").val();e&&(location.href=n+"-chajian?num="+e),e||alert("请先输入运单号查询！")}),$(".news_item").length<=2&&$(".news_item0").css("display","block"),$("#search_wlLine").click(function(){var e=[],m=[];$("#wlLineFrom").parent("div").find(".select-item").each(function(i,m){e.push($(this).text())});var l=e[0],c=e[1],r=e[2];$("#wlLineTo").parent("div").find(".select-item").each(function(i,e){m.push($(this).text())});var t=m[0],d=m[1],_=m[2];l||(l=""),c||(c=""),r||(r=""),t||(t=""),d||(d=""),_||(_=""),l=encodeURI(l),c=encodeURI(c),r=encodeURI(r),t=encodeURI(t),d=encodeURI(d),_=encodeURI(_),location.href=n+"-line?startp="+l+"&startc="+c+"&starta="+r+"&endp="+t+"&endc="+d+"&enda="+_}),$("#search_wangdian").click(function(){var e=[];$("#wangdian").parent("div").find(".select-item").each(function(i,m){e.push($(this).text())});var m=encodeURI(e[0]||""),l=encodeURI(e[1]||""),c=encodeURI(e[2]||"");location.href=n+"-wangdian?startp="+m+"&startc="+l+"&starta="+c})})})},methods:{findPrice(e,m){let l=0;return e.length?(e.forEach(e=>{e.type===m&&0===e.startVolume&&(l=e.discountPrice||e.primeryPrice)}),l):0}},async fetch({store:e,params:m,$axios:l,error:c}){e.commit("member/setId",m.id),await e.dispatch("member/GETCOMPANYINFO",m.id).catch(e=>{"network"===e.type?c({statusCode:500,message:e.msg}):c({statusCode:404,message:e.msg})}),await e.dispatch("member/GETCOMPANYPOINTINFO",{companyId:m.id,pageSize:8,currentPage:1}),await e.dispatch("member/GETCOMPANYLINEINFO",{publishId:m.id,pageSize:4,currentPage:1})}},n=l(1),component=Object(n.a)(c,function(){var e=this,m=e.$createElement,l=e._self._c||m;return l("div",[e._ssrNode('<div id="content" class="index-banner"><div class="banner_text"><span><em id="nr_name">'+e._ssrEscape(e._s(e.company.contactsName))+'</em> \n        <em id="nr_tel">'+e._ssrEscape(e._s(e.company.mobile))+'</em></span></div> <div class="banner-box"><div class="banner-num"><span class="dot cur">1</span> <span class="dot">2</span> <span class="dot">3</span></div></div> <div class="content-main index-main"><div class="bill-search"><h2 class="bill-title"><img src="/member/images/001search.png"> <span>运单查询</span></h2> <div id="tab_onlineShipping" class="search_txt"><textarea id="txtbill" type="text" maxlength="60" placeholder="最多输入10个单号（多个用；隔开）" class="query_txt"></textarea></div> <input id="btn_onlineTracking" type="button" value="查询" class="search_btn"></div> <div class="shortcut-menu"><a id="btn_onlineShipping"'+e._ssrAttr("href",e.mid+"-wangdian")+' target="_blank" class="menu-item js-express-ship item-1"><div class="menu-icon"><img src="/member/images/002wangdian.png"></div> <span>网点分布</span></a> <a id="btn_siteQuery"'+e._ssrAttr("href",e.mid+"-line")+' target="_blank" class="menu-item js-express-website item-2"><div class="menu-icon"><img src="/member/images/003wuliu.png"></div> <span>物流专线</span></a> <a id="btn_offerTime"'+e._ssrAttr("href",e.mid+"-order?uid="+e.mid+"&publishId="+e.mid)+' target="_blank" class="menu-item js-express-price item-3 need_companyId"><div class="menu-icon"><img src="/member/images/004xiadan.png"></div> <span>在线下单</span></a> <a id="qq"'+e._ssrAttr("href","http://wpa.qq.com/msgrd?v=3&uin="+e.company.qq+"&site=qq&menu=yes")+' target="_blank" class="menu-item js-express-complain item-4"><div class="menu-icon"><img src="/member/images/005kf.png"></div> <span>在线客服</span></a></div></div></div> '),e._ssrNode('<div id="main">',"</div>",[e._ssrNode('<div class="h50"></div> <div class="main1"><div class="main1_left main1_box fl"><div class="main1_bt"><i></i> <span>产品与服务</span></div> '+(e.plen>=5||e.plen<1?'<div class="main1_nr cp_5_8"><ul><li class="item1"><img src="/member/images/index/cp_01.jpg"></li> <li class="item2"><img src="/member/images/index/cp_02.jpg"></li> <li class="item3"><img src="/member/images/index/cp_03.jpg"></li> <li class="item4"><img src="/member/images/index/cp_04.jpg"></li> <li class="item5"><img src="/member/images/index/cp_05.jpg"></li> <li class="item6"><img src="/member/images/index/cp_06.jpg"></li> <li class="item7"><img src="/member/images/index/cp_07.jpg"></li> <li class="item8"><img src="/member/images/index/cp_08.jpg"></li> <li class="item9"><img src="/member/images/index/cp_09.jpg"></li></ul></div>':"\x3c!----\x3e")+" "+(1===e.plen?'<div class="main1_nr cp_1"><ul><li class="item1"><img src="/member/images/index/cp_1_01.jpg"> <em>整车运输</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item2"><img src="/member/images/index/cp_1_02.jpg"> <em>零担运输</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item3"><img src="/member/images/index/cp_1_03.jpg"> <em>专线运输</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item4"><img src="/member/images/index/cp_1_04.jpg"> <em>特大货物运输</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item5"><img src="/member/images/index/cp_1_05.jpg"> <em>大件运输</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item6"><img src="/member/images/index/cp_1_06.jpg"> <em>集装箱运输</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item7"><img src="/member/images/index/cp_1_07.jpg"> <em>冷藏运输</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item8"><img src="/member/images/index/cp_1_08.jpg"> <em>危险品运输</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item9"><img src="/member/images/index/cp_1_09.jpg"> <em>仓储</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li></ul></div>':"\x3c!----\x3e")+" "+(2===e.plen?'<div class="main1_nr cp_2"><ul><li class="item1"><img src="/member/images/index/cp_2_01.jpg"> <em>整车运输</em></li> <li class="item2"><img src="/member/images/index/cp_2_02.jpg"> <em>零担运输</em></li> <li class="item3"><img src="/member/images/index/cp_2_03.jpg"> <em>专线运输</em></li> <li class="item4"><img src="/member/images/index/cp_2_04.jpg"> <em>特大货物运输</em></li> <li class="item5"><img src="/member/images/index/cp_2_05.jpg"> <em>大件运输</em></li> <li class="item6"><img src="/member/images/index/cp_2_06.jpg"> <em>集装箱运输</em></li> <li class="item7"><img src="/member/images/index/cp_2_07.jpg"> <em>冷藏运输</em></li> <li class="item8"><img src="/member/images/index/cp_2_08.jpg"> <em>危险品运输</em></li> <li class="item9"><img src="/member/images/index/cp_2_09.jpg"> <em>仓储</em></li></ul></div>':"\x3c!----\x3e")+" "+(3===e.plen?'<div class="main1_nr cp_3"><ul><li class="item1"><img src="/member/images/index/cp_3_01.jpg"> <em>整车运输</em></li> <li class="item2"><img src="/member/images/index/cp_3_02.jpg"> <em>零担运输</em></li> <li class="item3"><img src="/member/images/index/cp_3_03.jpg"> <em>专线运输</em></li> <li class="item4"><img src="/member/images/index/cp_3_04.jpg"> <em>特大货物运输</em></li> <li class="item5"><img src="/member/images/index/cp_3_05.jpg"> <em>大件运输</em></li> <li class="item6"><img src="/member/images/index/cp_3_06.jpg"> <em>集装箱运输</em></li> <li class="item7"><img src="/member/images/index/cp_3_07.jpg"> <em>冷藏运输</em></li> <li class="item8"><img src="/member/images/index/cp_3_08.jpg"> <em>危险品运输</em></li> <li class="item9"><img src="/member/images/index/cp_3_09.jpg"> <em>仓储</em></li></ul></div>':"\x3c!----\x3e")+" "+(4===e.plen?'<div class="main1_nr cp_4"><ul><li class="item1"><img src="/member/images/index/cp_4_01.jpg"></li> <li class="item2"><img src="/member/images/index/cp_4_02.jpg"></li> <li class="item3"><img src="/member/images/index/cp_4_03.jpg"></li> <li class="item4"><img src="/member/images/index/cp_4_04.jpg"></li> <li class="item5"><img src="/member/images/index/cp_4_05.jpg"></li> <li class="item6"><img src="/member/images/index/cp_4_06.jpg"></li> <li class="item7"><img src="/member/images/index/cp_4_07.jpg"></li> <li class="item8"><img src="/member/images/index/cp_4_08.jpg"></li> <li class="item9"><img src="/member/images/index/cp_4_09.jpg"></li></ul></div>':"\x3c!----\x3e")+'</div> <div class="main1_right main1_box fl"><div class="main1_bt"><i></i> <span>增值服务</span></div> '+(e.olen>=5||e.olen<1?'<div class="main1_nr fw_5_8"><ul><li class="item1"><img src="/member/images/index/fw_01.jpg"></li> <li class="item2"><img src="/member/images/index/fw_02.jpg"></li> <li class="item3"><img src="/member/images/index/fw_03.jpg"></li> <li class="item4"><img src="/member/images/index/fw_04.jpg"></li> <li class="item5"><img src="/member/images/index/fw_05.jpg"></li> <li class="item6"><img src="/member/images/index/fw_06.jpg"></li> <li class="item7"><img src="/member/images/index/fw_07.jpg"></li> <li class="item8"><img src="/member/images/index/fw_08.jpg"></li></ul></div>':"\x3c!----\x3e")+" "+(1===e.olen?'<div class="main1_nr fw_1"><ul><li class="item1"><img src="/member/images/index/fw_1_01.jpg"> <em>送货上楼</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item2"><img src="/member/images/index/fw_1_02.jpg"> <em>保价运输</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item3"><img src="/member/images/index/fw_1_03.jpg"> <em>运费到付</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item4"><img src="/member/images/index/fw_1_04.jpg"> <em>代收货款</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item5"><img src="/member/images/index/fw_1_05.jpg"> <em>开发票</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item6"><img src="/member/images/index/fw_1_06.jpg"> <em>上门提货</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item7"><img src="/member/images/index/fw_1_07.jpg"> <em>签单回收</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li> <li class="item8"><img src="/member/images/index/fw_1_08.jpg"> <em>时效保障</em> <i>据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</i></li></ul></div>':"\x3c!----\x3e")+" "+(2===e.olen?'<div class="main1_nr fw_2"><ul><li class="item1"><img src="/member/images/index/fw_2_01.jpg"> <em>送货上楼</em></li> <li class="item2"><img src="/member/images/index/fw_2_02.jpg"> <em>保价运输</em></li> <li class="item3"><img src="/member/images/index/fw_2_03.jpg"> <em>运费到付</em></li> <li class="item4"><img src="/member/images/index/fw_2_04.jpg"> <em>代收货款</em></li> <li class="item5"><img src="/member/images/index/fw_2_05.jpg"> <em>开发票</em></li> <li class="item6"><img src="/member/images/index/fw_2_06.jpg"> <em>上门提货</em></li> <li class="item7"><img src="/member/images/index/fw_2_07.jpg"> <em>签单回收</em></li> <li class="item8"><img src="/member/images/index/fw_2_08.jpg"> <em>时效保障</em></li></ul></div>':"\x3c!----\x3e")+" "+(3===e.olen?'<div class="main1_nr fw_3"><ul><li class="item1"><img src="/member/images/index/fw_3_01.jpg"> <em>送货上楼</em></li> <li class="item2"><img src="/member/images/index/fw_3_02.jpg"> <em>保价运输</em></li> <li class="item3"><img src="/member/images/index/fw_3_03.jpg"> <em>运费到付</em></li> <li class="item4"><img src="/member/images/index/fw_3_04.jpg"> <em>代收货款</em></li> <li class="item5"><img src="/member/images/index/fw_3_05.jpg"> <em>开发票</em></li> <li class="item6"><img src="/member/images/index/fw_3_06.jpg"> <em>上门提货</em></li> <li class="item7"><img src="/member/images/index/fw_3_07.jpg"> <em>签单回收</em></li> <li class="item8"><img src="/member/images/index/fw_3_08.jpg"> <em>时效保障</em></li></ul></div>':"\x3c!----\x3e")+" "+(4===e.olen?'<div class="main1_nr fw_4"><ul><li class="item1"><img src="/member/images/index/fw_4_01.jpg"></li> <li class="item2"><img src="/member/images/index/fw_4_02.jpg"></li> <li class="item3"><img src="/member/images/index/fw_4_03.jpg"></li> <li class="item4"><img src="/member/images/index/fw_4_04.jpg"></li> <li class="item5"><img src="/member/images/index/fw_4_05.jpg"></li> <li class="item6"><img src="/member/images/index/fw_4_06.jpg"></li> <li class="item7"><img src="/member/images/index/fw_4_07.jpg"></li> <li class="item8"><img src="/member/images/index/fw_4_08.jpg"></li></ul></div>':"\x3c!----\x3e")+"</div></div> "),e._ssrNode('<div id="js001" class="main2">',"</div>",[e._ssrNode('<div class="main2_bt"><div class="main2_bt1"><div class="main2_bt1_1"><i></i> <span>物流专线</span></div> <div class="main2_bt1_2"><div class="search_input"><div class="input_div"><input id="wlLineFrom" data-toggle="city-picker" data-level="district" placeholder="出发地" class="search_input1"></div><span>→</span><div class="input_div"><input id="wlLineTo" data-toggle="city-picker" data-level="district" placeholder="到达地" class="search_input2"></div></div> <div id="search_wlLine" class="search_button"><input readonly="readonly" value="搜索" class="search_search"></div></div> <div class="main2_bt1_3"><a target="_blank"'+e._ssrAttr("href",e.mid+"line")+'><span>更多&gt;&gt;</span></a></div></div> <div class="main2_bt2"><ul><li class="bt_01">出发地  → 到达地</li> <li class="bt_02">专线信息</li> <li class="bt_03">会员类型</li> <li class="bt_04">人气</li> <li class="bt_05">操作</li></ul></div></div> '),e._l(e.$store.state.member.lineList,function(m,c){return e._ssrNode('<div class="zx_item">',"</div>",[e._ssrNode("<ul>","</ul>",[e._ssrNode('<li class="zx_item01"><em id="nr001">'+e._ssrEscape(e._s(m.startCity||"")+e._s(m.startArea||""))+'</em> → \n            <em id="nr002">'+e._ssrEscape(e._s(m.endCity||"")+e._s(m.endArea||""))+"</em></li> "),e._ssrNode('<li class="zx_item02">',"</li>",[e._ssrNode("<p>","</p>",[l("font",[e._v("重货：\n                "),l("i",{attrs:{id:"nr003"}},[e._v(e._s(e.findPrice(m.rangePrices,"1")))]),e._v("元/公斤\n              ")]),e._ssrNode(' <span>时效：\n                <em id="nr004">'+e._ssrEscape(e._s(m.transportAging)+e._s(m.transportAgingUnit))+"</em></span>")],2),e._ssrNode(" "),e._ssrNode("<p>","</p>",[l("font",[e._v("轻货：\n                "),l("i",{attrs:{id:"nr005"}},[e._v(e._s(e.findPrice(m.rangePrices,"0")))]),e._v("元/立方\n              ")]),e._ssrNode(' <span>最低一票：\n                <em id="nr006">'+e._ssrEscape(e._s(m.lowerPrice||"面议"))+"</em></span>")],2)],2),e._ssrNode(' <li class="zx_item03"><p class="p1"><img id="nr007" src="/images/list_wlzx/10shiming.png"></p> <p class="p2"><img id="nr008" src="/images/list_wlzx/11xinyong.png"></p> <p class="p3"><img id="nr009" src="/images/list_wlzx/12danbao.png"></p></li> <li class="zx_item04"><p><a href="javacript:void(0)"><em id="nr0010">'+e._ssrEscape(e._s(m.browseNumber))+'</em>人询价\n              </a></p> <p><a href="javacript:void(0)"><em id="nr0011">'+e._ssrEscape(e._s(m.assessNumber))+'</em>条评价\n              </a></p></li> <li class="zx_item05"><a id="nr0007"'+e._ssrAttr("href",e.mid+"-order?id="+m.id+"&publishId="+m.companyId)+' target="_blank"><input readonly="readonly" value="下单" class="input1"></a> <a id="nr0012"'+e._ssrAttr("href","/zhuanxian/detail?id="+m.id+"&publishId="+m.companyId)+' target="_blank"><input readonly="readonly" value="查看" class="input2"></a></li>')],2)])})],2),e._ssrNode(' <div id="js002" class="main3"><div class="main3_bt1"><div class="main3_bt1_1"><i></i> <span>网点分布</span></div> <div class="main3_bt1_2"><div class="search_input"><input id="wangdian" data-toggle="city-picker" data-level="district" placeholder="请选择省-市" class="search_input3"></div> <div class="search_button"><input id="search_wangdian" readonly="readonly" value="搜索" class="search_search"></div></div> <div class="main3_bt1_3"><a target="_blank"'+e._ssrAttr("href",e.mid+"-wangdian")+"><span>更多&gt;&gt;</span></a></div></div> "+e._ssrList(e.$store.state.member.pointList,function(m,l){return'<div class="wd_item"><p id="nr011">'+e._ssrEscape(e._s(m.pointName))+'</p> <p><img src="/member/images/wd_lxr.png"> <em id="nr012">'+e._ssrEscape(e._s(m.name))+'</em> <em id="nr013">'+e._ssrEscape(e._s(m.mobile))+'</em></p> <p><img src="/member/images/wd_dw.png"> <em id="nr014">'+e._ssrEscape(e._s(m.belongCityName))+"</em></p></div>"})+'</div> <div class="main4"><div class="main4_left"><div class="main4_bt"><i></i> <span>公司简介</span> <em><a target="_blank"'+e._ssrAttr("href",e.mid+"-jianjie")+'>更多&gt;&gt;</a></em></div> <div id="nr082" class="main4_nr">'+e._ssrEscape(e._s(e.company.companyDes?e.company.companyDes.substring(0,470)+"...":"暂无内容"))+'</div></div> <div class="main4_right"><div class="main4_bt" style="margin-left: 0px;"><i></i> <span>公司动态</span> <em><a target="_blank"'+e._ssrAttr("href",e.mid+"-webnotice")+'>更多&gt;&gt;</a></em></div> <div class="news_item news_item0"><a href="javacript:void(0)" target="_blank"><img src="/member/images/news_demo.png"> <span>818刚打响 苏宁卖出第15亿台家电</span> <i>2018-8-31</i></a></div> <div class="news_item news_item0"><a href="javacript:void(0)" target="_blank"><img src="/member/images/news_demo.png"> <span>16周年庆典，今夜充满爱和感恩</span> <i>2018-9-8</i></a></div></div></div>')],2)],2)},[],!1,null,null,"169a050c");m.default=component.exports}};
//# sourceMappingURL=bfafa977d7fbc0e82cd9.js.map