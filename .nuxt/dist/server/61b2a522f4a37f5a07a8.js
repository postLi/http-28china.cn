exports.ids=[31],exports.modules={422:function(e,t,n){"use strict";n.r(t);var d={props:{list:{type:Array,default:()=>[]},id:{type:String,default:""}}},l=n(0),r={name:"HomePage",components:{NewsList:Object(l.a)(d,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"jtabcon",attrs:{id:e.id}},[e._ssrNode(e._ssrList(e.list,function(t,n){return(0===n?"<a"+e._ssrAttr("href",t.url)+e._ssrAttr("title",t.title)+' target="_blank"><img'+e._ssrAttr("src",t.typeImg||"/images/index/28w.png")+e._ssrAttr("alt",t.title)+"></a>":"\x3c!----\x3e")+" "+(0===n?"<a"+e._ssrAttr("href",t.url)+e._ssrAttr("title",t.title)+' target="_blank"><span>'+e._ssrEscape(e._s(t.title))+"</span></a>":"\x3c!----\x3e")+" "+(0!==n?"<a"+e._ssrAttr("href",t.url)+e._ssrAttr("title",t.title)+' target="_blank">'+e._ssrEscape("\n      "+e._s(t.title)+"\n    ")+"</a>":"\x3c!----\x3e")+" <br> "+(0===n?'<div class="h18"></div>':"\x3c!----\x3e")}))])},[],!1,null,null,"423a8d95").exports},data:()=>({title:"首页",lists:[],ip:"",islogin:!1,username:""}),computed:{dailyData(){return this.$store.state.dailyData}},async fetch({store:e,params:t,$axios:n,error:d,app:l}){let r=l.$cookies,c={currentArea:r.get("currentArea"),currentAreaFullName:r.get("currentAreaFullName"),currentAreaName:r.get("currentAreaName"),currentProvince:r.get("currentProvince"),currentProvinceFullName:r.get("currentProvinceFullName"),currentProvinceName:r.get("currentProvinceName")};c.currentProvince||(c=e.state.area);let _={startProvince:c.currentProvinceFullName,startCity:c.currentAreaFullName,startArea:""},o={index_khal:{channelIds:"118",count:3,orderBy:9,channelOption:0},index_wlzx:{channelIds:"94",count:4,orderBy:9,channelOption:0},index_lzzx:{channelIds:"97",count:4,orderBy:9,channelOption:0},index_wlqy:{channelIds:"105",count:4,orderBy:9,channelOption:0},index_wlxyfx:{channelIds:"107",count:4,orderBy:9,channelOption:0},index_cgzx:{channelIds:"100",count:4,orderBy:9,channelOption:0},index_ccyps:{channelIds:"101",count:4,orderBy:9,channelOption:0},index_wlswxx:{channelIds:"119",count:16,orderBy:9,channelOption:0}},v=Object.values(o).map(e=>JSON.stringify(e)),h=Object.keys(o);await Promise.all([e.dispatch("news/GETMULTYNEWSINFO",{params:"{"+v.join(";")+"}",names:h,preFn:data=>data.map((e,t)=>e.map(e=>(e.url=e.url.replace(/http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,0===t?"/help":"/zixun"),e)))}),e.dispatch("company/GETRECOMMEND",{data:Object.assign({pageSize:8},_)}),e.dispatch("company/GETCOMPANYLIST",{data:Object.assign({pageSize:27},_),name:"index_list"}),e.dispatch("wuliu/GETLIST",{data:Object.assign({pageSize:9},_),name:"index_list"}),e.dispatch("line/GETRECOMMEND",{data:Object.assign({pageSize:27},_),name:"index_list"}),e.dispatch("huoyuan/GETLIST",{data:Object.assign({pageSize:27},_),name:"index_list"}),e.dispatch("cheyuan/GETLIST",{data:Object.assign({pageSize:27},_),name:"index_list"})])},head:{link:[{rel:"stylesheet",href:"/index/css/echarts.css"}]},mounted(){0}},c=Object(l.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"index_container"},[e._ssrNode('<div class="w1400 center clear">',"</div>",[e._ssrNode('<div class="main1"><div class="main1_1"><div class="main1_1_l"><div id="m1_01_1" class="m1_01 m1_01_01  m1_on_01">发物流 </div> <div id="m1_01_2" class="m1_01 m1_01_02">找大货车</div> <div id="m1_01_3" class="m1_01 m1_01_03">找小货车</div></div> <div class="title"><img src="/images/index/10tb.png" class="imgtj"> <p id="desc_01">推荐物流承运商，提供免费上门接货和送货到家服务，发货省心又省钱</p> <p id="desc_02">整车运输，车辆不放空，门到门、代签回单、无挤压、无破损、速度快</p> <p id="desc_03">同城货运价格低，上门快，更安全</p></div> <div id="main1_1_m1" class="main1_1_m"><div class="m1_02_fh center"><span>发货地</span><input id="zhidaFrom" wtmap="detail" type="text" placeholder="您的货物在哪里？" readonly="readonly"></div> <div class="m1_02_sh center"><span>收货地</span><input id="zhidaTo" wtmap="detail" type="text" placeholder="把货运到哪里？" readonly="readonly"></div> <div class="m1_02_search center"><input id="order_01" type="button" value="快速下单" onclick="javascript:void(0)"> <input id="order_02" type="button" value="快速下单" onclick="javascript:void(0)"> <input id="order_03" type="button" value="快速下单" onclick="javascript:void(0)"></div></div> <div id="main1_1_m2" class="main1_1_m"><div class="m1_02_fh center"><span>发货地</span><input id="peisongFrom" wtmap="detail" type="text" placeholder="您的货物在哪里？" readonly="readonly"></div> <div class="m1_02_sh center"><span>收货地</span><input id="peisongTo" wtmap="detail" type="text" placeholder="把货运到哪里？" readonly="readonly"></div> <div class="m1_02_search center"><input type="button" value="快速下单2" onclick="window.location.href=\'/zhuanxian/list\'"></div></div> <div id="main1_1_m3" class="main1_1_m"><div class="m1_02_fh center"><span>发货地</span><input id="zhengcheFrom" wtmap="detail" type="text" placeholder="您的货物在哪里？" readonly="readonly"></div> <div class="m1_02_sh center"><span>收货地</span><input id="zhengcheTo" wtmap="detail" type="text" placeholder="把货运到哪里？" readonly="readonly"></div> <div class="m1_02_search center"><input type="button" value="快速下单3" onclick="window.location.href=\'/zhuanxian/list\'"></div></div> <div id="main1_1_m4" class="main1_1_m"><div class="m1_02_fh center"><span>发货地</span><input id="baocheFrom" wtmap="detail" type="text" placeholder="您的货物在哪里？" readonly="readonly"></div> <div class="m1_02_sh center"><span>收货地</span><input id="baocheTo" wtmap="detail" type="text" placeholder="把货运到哪里？" readonly="readonly"></div> <div class="m1_02_search center"><input type="button" value="快速下单4" onclick="window.location.href=\'/zhuanxian/list\'"></div></div> <div class="main1_1_xx"></div></div> <div class="main1_2"><ul class="yd_box"><li class="yd_1"><img src="/images/index/12kd.png"></li> <li class="yd_2"><input id="yd_nr" rows="3" cols="20" placeholder="请输入运单号，例如："> <input id="yd_cx" type="button"> <div class="ydh"><span>001380</span></div></li> <li class="yd_4"><ul><li class="yd_item"><img src="/images/yd_huo.png"><a target="_blank" href="/huoyuan"><span>当前货物</span> <i id="data001">'+e._ssrEscape(e._s(e.dailyData.goodsCount))+'</i></a></li> <li class="yd_item"><img src="/images/yd_zx.png"><a target="_blank" href="/zhuanxian/list"><span>物流专线</span> <i id="data002">'+e._ssrEscape(e._s(e.dailyData.transportRangeCount))+'</i></a></li> <li class="yd_item"><img src="/images/yd_che.png"><a target="_blank" href="/cheyuan"><span>车源信息</span> <i id="data003">'+e._ssrEscape(e._s(e.dailyData.carInfoCount))+'</i></a></li></ul></li> <li class="yd_5"><img src="/images/yd_jt.png"> <span>今日新增:</span><a target="_blank" href="/huoyuan"><span>货源</span><i id="data004">'+e._ssrEscape(e._s(e.dailyData.toDayGoodsCount))+'</i></a><a target="_blank" href="/zhuanxian/list"><span>专线</span><i id="data005">'+e._ssrEscape(e._s(e.dailyData.toDayTransportRangeCount))+'</i></a><a target="_blank" href="/cheyuan"><span>车源</span><i id="data006">'+e._ssrEscape(e._s(e.dailyData.toDayCarInfoCount))+'</i></a></li></ul></div> <div class="main1_3"><div class="main1_3_1"><div onclick="window.open(\'/create/line\')" class="order_list">发布专线</div> <div onclick="window.open(\'/create/huoyuan\')" class="order_list">发布货源</div> <div onclick="window.open(\'create/cheyuan\')" class="order_list">发布车源</div></div> <div class="main1_3_2">'+(e.islogin?"\x3c!----\x3e":'<div id="_userlogin2" class="userLogin"><div class="yhimg"><img src="/images/index/19stx.png"></div> <div class="userHeader"><div class="img_"></div> <span id="ts">您好，欢迎来到28快运！</span></div> <div class="operation"><div class="loginBtn"><a href="/login">登录</a></div> <div class="regBtn"><a href="/regisiter">注册</a></div></div></div>')+" "+(e.islogin?'<div id="_userlogin2_2" class="userLogin"><div class="userHeader"><div class="yhimg"><img src="/images/index/19stx.png"></div> <span>您好，<span id="login_name2">'+e._ssrEscape(e._s(e.username))+'</span> </span> <span style="cursor: pointer"><a href="/exit" class="exit_anfa">【安全退出】</a></span></div> <div class="operation"><div class="loginBtn"><a target="_blank" href="/hyzx">会员中心</a></div> '+("aflc-5"===e.$cookies.get("login_type")?'<div class="regBtn"><a id="my_website" target="_blank"'+e._ssrAttr("href","/member/"+e.$cookies.get("login_userId",{parseJSON:!1}))+">我的网站</a></div>":"\x3c!----\x3e")+"</div></div>":"\x3c!----\x3e")+' <div class="main1_c"><ul><li class="kefu_index"><a href="/zixun" onmouseout="kefu_none();">咨讯</a> <a href="/help/ggp/index.jhtml" onmouseout="kefu_none();">帮助</a> <a onmouseover="kefu_block();">客服</a> <a target="_blank" href="/help/tsjy/index.jhtml" onmouseout="kefu_none();">建议</a></li> '+e._ssrList(e.$store.state.news.index_wlzx.slice(0,3),function(t,n){return'<li><a target="_blank"'+e._ssrAttr("href",t.url)+">"+e._ssrEscape(e._s(t.title))+"</a></li>"})+'</ul></div> <div onmouseover="kefu_block();" onmouseout="kefu_none();" class="kefu_box"><div class="kefu_box_1"><img src="/images/kefu_weixin.png"></div> <div class="kefu_box_2"></div> <div class="kefu_box_3"><ul onclick="window.open(\'http://wpa.qq.com/msgrd?v=3&uin=596803544&site=qq&menu=yes\')" style="cursor: pointer;"><li><img src="/images/kefu_qq.png"></li><li class="kefu_box_3_1">QQ交谈</li></ul> <ul><li><img src="/images/kefu_phone.png" class="kefu_box_3_phone"></li><li class="kefu_box_3_2">客服电话：<br>400-9992828</li></ul></div></div></div></div></div> '),e._ssrNode('<div class="banner h62">',"</div>",[e._ssrNode('<div class="echart_scroll">',"</div>",[e._ssrNode('<div class="fl echart_scroll_sm">全国专线价</div> '),e._ssrNode('<div class="fl echart_scroll_nr">',"</div>",[e._ssrNode('<div class="fl echart_scroll_nr800">',"</div>",[e._ssrNode('<ul class="echart_scroll_nr1">',"</ul>",[e._ssrNode("<li>","</li>",[e._ssrNode('<a href="javascript:void(0)" target="_blank">',"</a>",[e._ssrNode("<span>广州发武汉</span><i>重货：</i>"),n("font",[e._v("320")]),e._ssrNode("<i>元/吨  </i>"),n("font",[e._v("+5%")]),e._ssrNode("<span>轻货：</span>"),n("font",[e._v("100")]),e._ssrNode("<i>元/方  </i><em>-2%</em>")],2)]),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode('<a href="javascript:void(0)" target="_blank">',"</a>",[e._ssrNode("<span>广州发合肥</span><i>重货：</i>"),n("font",[e._v("350")]),e._ssrNode("<i>元/吨  </i>"),n("font",[e._v("+4%")]),e._ssrNode("<span>轻货：</span>"),n("font",[e._v("120")]),e._ssrNode("<i>元/方  </i><em>-1%</em>")],2)]),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode('<a href="javascript:void(0)" target="_blank">',"</a>",[e._ssrNode("<span>广州发重庆</span><i>重货：</i>"),n("font",[e._v("550")]),e._ssrNode("<i>元/吨  </i>"),n("font",[e._v("+7%")]),e._ssrNode("<span>轻货：</span>"),n("font",[e._v("130")]),e._ssrNode("<i>元/方  </i><em>-3%</em>")],2)]),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode('<a href="javascript:void(0)" target="_blank">',"</a>",[e._ssrNode("<span>广州发南昌</span><i>重货：</i>"),n("font",[e._v("300")]),e._ssrNode("<i>元/吨  </i>"),n("font",[e._v("+8%")]),e._ssrNode("<span>轻货：</span>"),n("font",[e._v("80")]),e._ssrNode("<i>元/方  </i><em>-2%</em>")],2)]),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode('<a href="javascript:void(0)" target="_blank">',"</a>",[e._ssrNode("<span>广州发郑州</span><i>重货：</i>"),n("font",[e._v("400")]),e._ssrNode("<i>元/吨  </i>"),n("font",[e._v("+6%")]),e._ssrNode("<span>轻货：</span>"),n("font",[e._v("140")]),e._ssrNode("<i>元/方  </i><em>-5%</em>")],2)])],2),e._ssrNode(' <ul class="echart_scroll_nr2"></ul>')],2)])],2)]),e._ssrNode(" "),e._ssrNode('<div id="rf01" class="main3 center ">',"</div>",[e._ssrNode('<div class="main3_12">',"</div>",[e._ssrNode('<div class="hy main3_99 clear">',"</div>",[e._ssrNode('<div class="main3_1_1"><div class="xt_bottom"></div> <div class="floatl"><b>找物流专线</b> <div class="index_search floatl"><div id="wlLineFrom" class="fl index_search_input" style="position:relative;"><input data-toggle="city-picker" data-level="district" type="text" name placeholder="请选择出发地" readonly="readonly" style="height: 100%;"></div> <em>→</em> <div id="wlLineTo" class="fl index_search_input" style="position:relative;"><input data-toggle="city-picker" data-level="district" type="text" name placeholder="请选择到达地" readonly="readonly" style="height: 100%;"></div></div> <input id="search_wlLine" type="button" value class="search_hy"></div> <div class="more floatr"><a href="/zhuanxian/list" target="_blank">更多&gt;</a></div></div> <dl class="hy_d"><dd class="d001">出发地            →</dd> <dd class="d002">到达地</dd> <dd class="d003">重货价格</dd> <dd class="d004">轻货价格</dd> <dd class="d005">时效</dd> <dd class="d006">物流公司</dd> <dd class="d007">操作</dd></dl> '),0===e.$store.state.line.index_list.length?e._ssrNode('<div class="none_zx">',"</div>",[e._ssrNode("<span>暂无专线信息</span>")],2):e._ssrNode('<div class="clear scroll_nr2 ">',"</div>",[e._ssrNode('<ul id="js001" class="hy_nr " style="margin-top: 0px;">',"</ul>",e._l(e.$store.state.line.index_list,function(t,d){return e._ssrNode("<li>","</li>",[e._ssrNode('<a id="nr_a01"'+e._ssrAttr("href","/zhuanxian/detail?id="+t.id+"&publishId="+t.companyId)+' target="_blank"><span id="nr001" class="t001">'+e._ssrEscape(e._s(t.startCity+t.startArea))+'</span></a> <a id="nr_a01"'+e._ssrAttr("href","/zhuanxian/detail?id="+t.id+"&publishId="+t.companyId)+' target="_blank"><span id="nr001_2" class="t002">'+e._ssrEscape(e._s(t.endCity+t.endArea))+"</span></a> "),e._ssrNode('<a id="nr_a02"'+e._ssrAttr("href","/zhuanxian/detail?id="+t.id+"&publishId="+t.companyId)+' target="_blank">',"</a>",[e._ssrNode('<span class="t003">',"</span>",[n("font",{staticStyle:{color:"#f00"},attrs:{id:"nr002"}},[e._v(e._s(t.weightDiscountPrice||t.weightPrice))]),e._ssrNode("元/公斤")],2)]),e._ssrNode(" "),e._ssrNode('<a id="nr_a03"'+e._ssrAttr("href","/zhuanxian/detail?id="+t.id+"&publishId="+t.companyId)+' target="_blank">',"</a>",[e._ssrNode('<span class="t004">',"</span>",[n("font",{staticStyle:{color:"#f00"},attrs:{id:"nr003"}},[e._v(e._s(t.lightDiscountPrice||t.lightPrice))]),e._ssrNode("元/方")],2)]),e._ssrNode(' <a id="nr_a04"'+e._ssrAttr("href","/zhuanxian/detail?id="+t.id+"&publishId="+t.companyId)+' target="_blank"><span id="nr004" class="t005">'+e._ssrEscape(e._s(t.transportAging+(t.transportAgingUnit||"").replace("多","")))+'</span></a> <a id="nr005"'+e._ssrAttr("href","/member/"+t.companyId)+' target="_blank"><span id="nr006" class="t006">'+e._ssrEscape(e._s(t.companyName))+'</span></a> <a id="nr_a05"'+e._ssrAttr("href","/zhuanxian/detail?id="+t.id+"&publishId="+t.companyId)+' target="_blank"><span id="t006" class="t007">详情</span></a>')],2)}),0)])],2)]),e._ssrNode(' <div class="right_box"><div class="right_price_bt1"><div class="xt_bottom w102"></div> <div class="floatl"><b>价格指数</b></div></div> <div class="linelist"><div class="line-list-ul"><ul><li><p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">武汉</span></p> <p class="line_bt2">重货：<span><i class="linezhong">320</i>元/吨</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">100</i>元/方<span><em class="lineqing-percent">↓2%</em></span></p></li> <li><p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">重庆</span></p> <p class="line_bt2">重货：<span><i class="linezhong">550</i>元/吨</span><span><i class="linezhong-percent">↑7%</i></span> 轻货：<i class="lineqing">130</i>元/方<span><em class="lineqing-percent">↓3%</em></span></p></li> <li><p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">南昌</span></p> <p class="line_bt2">重货：<span><i class="linezhong">300</i>元/吨</span><span><i class="linezhong-percent">↑8%</i></span> 轻货：<i class="lineqing">80</i>元/方<span><em class="lineqing-percent">↓2%</em></span></p></li> <li><p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">长沙</span></p> <p class="line_bt2">重货：<span><i class="linezhong">240</i>元/吨</span><span><i class="linezhong-percent">↑6%</i></span> 轻货：<i class="lineqing">126</i>元/方<span><em class="lineqing-percent">↓4%</em></span></p></li> <li><p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">郑州</span></p> <p class="line_bt2">重货：<span><i class="linezhong">400</i>元/吨</span><span><i class="linezhong-percent">↑6%</i></span> 轻货：<i class="lineqing">140</i>元/方<span><em class="lineqing-percent">↓5%</em></span></p></li> <li><p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">合肥</span></p> <p class="line_bt2">重货：<span><i class="linezhong">350</i>元/吨</span><span><i class="linezhong-percent">↑4%</i></span> 轻货：<i class="lineqing">120</i>元/方<span><em class="lineqing-percent">↓1%</em></span></p></li></ul></div> <div class="line-list-echart"><div class="echartbox"></div> <div class="line-list-links"><a id="echart_order" target="_blank" href="/create/order">闪电下单</a> <a id="echart_price" href="#">即刻比价</a> <a target="_blank" href="/ydcx">一键查单</a> <a id="echart_sx" href="/shixiao">时效查询</a></div></div></div></div>')],2)],2),e._ssrNode(' <div class="banner"><img src="/images/index/23banner.png"></div> '),e._ssrNode('<div id="rf01" class="main3 main_cy_hy center ">',"</div>",[e._ssrNode('<div class="main3_12">',"</div>",[e._ssrNode('<div id="rf02" class="main3_11">',"</div>",[e._ssrNode('<div class="main3_1_1"><div class="xt_bottom"></div> <div class="floatl"><b>找车源信息</b> <div class="index_search floatl"><div id="carLineFrom" class="fl index_search_input" style="position:relative;"><input data-toggle="city-picker" data-level="district" type="text" name placeholder="请选择出发地" readonly="readonly" style="height: 100%;"></div> <em>→</em> <div id="carLineTo" class="fl index_search_input" style="position:relative;"><input data-toggle="city-picker" data-level="district" type="text" name placeholder="请选择到达地" readonly="readonly" style="height: 100%;"></div></div> <input id="search_cheyuan" type="button" value class="search_hy"></div> <div class="more floatr"><a href="/cheyuan?" target="_blank">更多&gt;</a></div></div> '),e._ssrNode('<div class="hy clear">',"</div>",[e._ssrNode('<dl class="hy_d"><dd class="d1">出发地            →</dd> <dd class="d2">到达地</dd> <dd class="d3">车牌号</dd> <dd class="d4">车型</dd> <dd class="d5">车长</dd> <dd class="d6">载重</dd> <dd class="d7">运输价格</dd> <dd class="d8">操作</dd></dl> '),0===e.$store.state.cheyuan.index_list.length?e._ssrNode('<div class="none_cy">',"</div>",[e._ssrNode("<span>暂无车源信息</span>")],2):e._ssrNode('<div class="clear scroll_nr3">',"</div>",[e._ssrNode('<ul id="js003" class="hy_nr" style="margin-top: 0px;">',"</ul>",[e._l(e.$store.state.cheyuan.index_list,function(t,d){return[e._ssrNode("<li>","</li>",[e._ssrNode('<a id="nr_a11"'+e._ssrAttr("href","/cheyuan/detail?id="+t.id)+e._ssrAttr("title",t.strartAddress)+'><span id="nr021" class="t1">'+e._ssrEscape(e._s(t.strartAddress))+'</span></a> <a id="nr_a11"'+e._ssrAttr("href","/cheyuan/detail?id="+t.id)+e._ssrAttr("title",t.endAddress)+'><span id="nr021_2" class="t2">'+e._ssrEscape(e._s(t.endAddress))+'</span></a> <a id="nr_a12"'+e._ssrAttr("href","/cheyuan/detail?id="+t.id)+' target="_blank"><span id="nr022" class="t3">'+e._ssrEscape(e._s((t.carNum||"").replace(/^(..).*(..)$/,"$1***$2")))+'</span></a> <a id="nr_a13"'+e._ssrAttr("href","/cheyuan/detail?id="+t.id)+' target="_blank"><span id="nr023" class="t4">'+e._ssrEscape(e._s(t.carTypeName))+"</span></a> "),e._ssrNode('<a id="nr_a14"'+e._ssrAttr("href","/cheyuan/detail?id="+t.id)+' target="_blank">',"</a>",[e._ssrNode('<span class="t5">',"</span>",[n("font",{staticStyle:{color:"#f00"},attrs:{id:"nr024"}},[e._v(e._s(t.carLength))]),e._ssrNode("米")],2)]),e._ssrNode(" "),e._ssrNode('<a id="nr_a15"'+e._ssrAttr("href","/cheyuan/detail?id="+t.id)+' target="_blank">',"</a>",[e._ssrNode('<span class="t6">',"</span>",[n("font",{staticStyle:{color:"#f00"},attrs:{id:"nr025"}},[e._v(e._s(t.carLoad))]),e._ssrNode("吨")],2)]),e._ssrNode(" "),e._ssrNode('<a id="nr_a16"'+e._ssrAttr("href","/cheyuan/detail?id="+t.id)+' target="_blank">',"</a>",[e._ssrNode('<span class="t7">',"</span>",[n("font",{staticStyle:{color:"#f00"},attrs:{id:"nr026"}},[e._v(e._s(t.expectPrice))])],1)]),e._ssrNode(' <a id="nr_a17"'+e._ssrAttr("href","/cheyuan/detail?id="+t.id)+' target="_blank"><span id="t7" class="t8">查看</span></a>')],2)]})],2)])],2)],2),e._ssrNode(' <div class="h30 w970 bg_f7"></div> '),e._ssrNode('<div id="rf03" class="main3_1">',"</div>",[e._ssrNode('<div class="main3_1_1"><div class="xt_bottom"></div> <div class="floatl"><b>找货源信息</b> <div class="index_search floatl"><div id="HuoyuanFrom" class="fl index_search_input" style="position:relative;"><input data-toggle="city-picker" data-level="district" type="text" name placeholder="请选择出发地" readonly="readonly" style="height: 100%;"></div> <em>→</em> <div id="HuoyuanTo" class="fl index_search_input" style="position:relative;"><input data-toggle="city-picker" data-level="district" type="text" name placeholder="请选择到达地" readonly="readonly" style="height: 100%;"></div></div> <input id="search_huoyuan" type="button" value class="search_hy"></div> <div class="more floatr"><a href="/huoyuan" target="_blank">更多&gt;</a></div></div> '),e._ssrNode('<div class="hy clear">',"</div>",[e._ssrNode('<dl class="hy_d"><dd class="d1">出发地            →</dd> <dd class="d2">到达地</dd> <dd class="d3">货物名称</dd> <dd class="d4">重量</dd> <dd class="d5">体积</dd> <dd class="d6">运输类型</dd> <dd class="d7">发布时间</dd> <dd class="d8">操作</dd></dl> '),0===e.$store.state.huoyuan.index_list.length?e._ssrNode('<div class="none_hy">',"</div>",[e._ssrNode("<span>暂无货源信息</span>")],2):e._ssrNode('<div class="clear scroll_nr1">',"</div>",[e._ssrNode('<ul id="js004" class="hy_nr " style="margin-top: 0px;">',"</ul>",[e._l(e.$store.state.huoyuan.index_list,function(t,d){return[e._ssrNode("<li>","</li>",[e._ssrNode('<a id="nr_a31"'+e._ssrAttr("href","/huoyuan/detail?id="+t.id+"&shipperId="+t.shipperId)+e._ssrAttr("title",t.startProvinceCityArea)+'><span id="nr031" class="t1">'+e._ssrEscape(e._s(t.startProvinceCityArea))+'</span></a> <a id="nr_a31"'+e._ssrAttr("href","/huoyuan/detail?id="+t.id+"&shipperId="+t.shipperId)+e._ssrAttr("title",t.endProvinceCityArea)+'><span id="nr031_2" class="t2">'+e._ssrEscape(e._s(t.endProvinceCityArea))+'</span></a> <a id="nr_a33"'+e._ssrAttr("href","/huoyuan/detail?id="+t.id+"&shipperId="+t.shipperId)+'><span id="nr033" class="t3">'+e._ssrEscape(e._s(t.goodsTypeName))+"</span></a> "),e._ssrNode('<a id="nr_a34"'+e._ssrAttr("href","/huoyuan/detail?id="+t.id+"&shipperId="+t.shipperId)+">","</a>",[e._ssrNode('<span class="t4">',"</span>",[n("font",{staticStyle:{color:"#f00"},attrs:{id:"nr034"}},[e._v(e._s(t.goodsWeight)+"公斤")])],1)]),e._ssrNode(" "),e._ssrNode('<a id="nr_a35"'+e._ssrAttr("href","/huoyuan/detail?id="+t.id+"&shipperId="+t.shipperId)+">","</a>",[e._ssrNode('<span class="t5">',"</span>",[n("font",{staticStyle:{color:"#f00"},attrs:{id:"nr035"}},[e._v(e._s(t.goodsVolume)+"方")])],1)]),e._ssrNode(' <a id="nr_a36"'+e._ssrAttr("href","/huoyuan/detail?id="+t.id+"&shipperId="+t.shipperId)+'><span id="nr036" class="t6">'+e._ssrEscape(e._s(t.orderType))+'</span></a> <a id="nr_a37"'+e._ssrAttr("href","/huoyuan/detail?id="+t.id+"&shipperId="+t.shipperId)+e._ssrAttr("title",t.createTime)+'><span id="nr037" class="t7">'+e._ssrEscape(e._s((t.createTime||"").replace(/^.*-(\d{2}-\d{2}).*/,"$1")))+'</span></a> <a id="nr_a38"'+e._ssrAttr("href","/huoyuan/detail?id="+t.id+"&shipperId="+t.shipperId)+' target="_blank"><span id="t8" class="t8">查看</span></a>')],2)]})],2)])],2)],2)],2),e._ssrNode(' <div class="right_box"><div class="right_price_bt1"><div class="xt_bottom w102"></div> <div class="floatl"><b>价格指数</b></div></div> <div class="linelist linelist2"><div class="line-list-ul2"><ul><li class="current"><p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">武汉</span></p> <p class="line_bt2">重货：<span><i class="linezhong">320</i>元/吨</span><span><i class="linezhong-percent">↑5%</i></span> 轻货：<i class="lineqing">100</i>元/方,<span><em class="lineqing-percent">↓2%</em></span></p></li> <li><p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">南昌</span></p> <p class="line_bt2">重货：<span><i class="linezhong">300</i>元/吨</span><span><i class="linezhong-percent">↑8%</i></span> 轻货：<i class="lineqing">80</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p></li> <li><p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">重庆</span></p> <p class="line_bt2">重货：<span><i class="linezhong">550</i>元/吨</span><span><i class="linezhong-percent">↑7%</i></span> 轻货：<i class="lineqing">130</i>元/方,<span><em class="lineqing-percent">↓3%</em></span></p></li> <li><p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">长沙</span></p> <p class="line_bt2">重货：<span><i class="linezhong">240</i>元/吨</span><span><i class="linezhong-percent">↑6%</i></span> 轻货：<i class="lineqing">126</i>元/方,<span><em class="lineqing-percent">↓4%</em></span></p></li> <li><p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">郑州</span></p> <p class="line_bt2">重货：<span><i class="linezhong">400</i>元/吨</span><span><i class="linezhong-percent">↑6%</i></span> 轻货：<i class="lineqing">140</i>元/方,<span><em class="lineqing-percent">↓5%</em></span></p></li> <li><p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">合肥</span></p> <p class="line_bt2">重货：<span><i class="linezhong">350</i>元/吨</span><span><i class="linezhong-percent">↑4%</i></span> 轻货：<i class="lineqing">120</i>元/方,<span><em class="lineqing-percent">↓1%</em></span></p></li> <li><p class="line_bt1"><span class="linestart">广州</span>发<span class="lineend">贵阳</span></p> <p class="line_bt2">重货：<span><i class="linezhong">350</i>元/吨</span><span><i class="linezhong-percent">↑3%</i></span> 轻货：<i class="lineqing">95</i>元/方,<span><em class="lineqing-percent">↓6%</em></span></p></li></ul> <div class="echartbox2"><strong>本周价格：</strong> <div class="zhong-info"><span class="zhong-info-price">重货 ：<i>0.45</i>元/吨</span><i class="zhong-info-tong">↑5%</i>，环比<em class="zhong-info-huan">-6%</em></div> <div class="qing-info"><span class="qing-info-price">轻货：  <i>200</i>元/方</span><i class="qing-info-tong">↑5%</i>，环比<em class="qing-info-huan">-3%</em></div> <div class="echartwrapper"></div></div></div> <div class="hq-news-from"><form style="position: relative;"><div id="cx_start" class="fl from-input noieclear" style="position:relative;"><input data-toggle="city-picker" data-level="district" type="text" autocomplete="off" placeholder="出发地" style="height: 100%;"></div> <img src="/index_files/search_jiantou.png" class="fl"> <div id="cx_end" class="fl from-input noieclear" style="position:relative;"><input data-toggle="city-picker" data-level="district" type="text" autocomplete="off" placeholder="目的地" style="height: 100%;"></div> <a id="hqzx_btn1" href="javascript:void(0)" onclick="line_cx()" class="hq-a-text">查询其他专线</a></form></div></div></div>')],2),e._ssrNode(' <div class="banner"><img src="/images/index/24banners2.png"></div> <div id="rf04" class="main4 center "><div class="main4_1"><div class="main4_1_1"><div class="xt_bottom"></div> <div class="floatl"><b>找物流公司</b></div> <div class="more2 floatr"><a href="/gongsi?" target="_blank">更多&gt;</a></div></div> <div class="hy clear"><dl class="wlyq_d"><dd class="d0001">公司名称</dd> <dd class="d0002">公司所在地</dd> <dd class="d0003">经营范围</dd> <dd class="d0004">操作</dd></dl> '+(0===e.$store.state.company.index_list.length?'<div class="none_wlgs"><span>暂无物流公司信息</span></div>':'<div class="clear scroll_nr4"><ul id="js_wlgs" class="wlyq_nr">'+e._ssrList(e.$store.state.company.index_list,function(t,n){return'<li><a id="wlgs_a1"'+e._ssrAttr("href","/member/"+t.id)+e._ssrAttr("title",t.companyName)+' target="_blank" style="color: #fff;"><span id="wlgs_name" class="t0001">'+e._ssrEscape(e._s(t.companyName))+'</span></a> <a id="wlgs_a2"'+e._ssrAttr("href","/member/"+t.id)+' target="_blank" style="color: #fff;"><span id="wlgs_postion" class="t0002">'+e._ssrEscape(e._s(t.belongCityName))+'</span></a> <a id="wlgs_a3"'+e._ssrAttr("href","/member/"+t.id)+' target="_blank" style="color: #fff;"><span id="wlgs_jyfw"'+e._ssrAttr("title",(t.productService||"").replace(/(\[|\])/g,""))+' class="t0003">'+e._ssrEscape(e._s((t.productService||"").replace(/(\[|\]|")/g,"")))+'</span></a> <span id="t77" class="t0004"><a id="wlgs_a"'+e._ssrAttr("href","/member/"+t.id)+' target="_blank">查看</a></span></li>'})+"</ul></div>")+'</div></div> <div class="main4_2"><div class="main4_2_1"><div class="xt_bottom"></div> <div class="floatl"><b>找物流园区</b></div> <div class="more2 floatr"><a href="/wuliu?" target="_blank"><span>更多&gt;</span></a></div></div> <div class="h10"></div> <div class="hy clear"><dl class="wlyq_d"><dd class="d01">物流园名称</dd> <dd class="d02">所在地</dd> <dd class="d03">专线数量</dd> <dd class="d04">操作</dd></dl> <div class="clear "><ul id="js_wlyq" class="wlyq_nr">'+e._ssrList(e.$store.state.wuliu.index_list,function(t,n){return'<li><a id="wlyq_a1"'+e._ssrAttr("title",t.parkName)+e._ssrAttr("href","/wuliu/detail?id="+t.id)+' target="_blank" style="color: #fff;"><span id="wlyq_name" class="t01">'+e._ssrEscape(e._s(t.parkName))+'</span></a> <a id="wlyq_a2"'+e._ssrAttr("title",t.parkAddress)+e._ssrAttr("href","/wuliu/detail?id="+t.id)+' target="_blank" style="color: #fff;"><span id="wlyq_postion" class="t02">'+e._ssrEscape(e._s(t.parkAddress))+'</span></a> <a id="wlyq_a3"'+e._ssrAttr("href","/wuliu/detail?id="+t.id)+' target="_blank" style="color: #fff;"><span id="wlyq_num" class="t03">'+e._ssrEscape(e._s(t.transportNumber))+'</span></a> <span id="t77" class="t04"><a id="wlyq_a4"'+e._ssrAttr("href","/wuliu/detail?id="+t.id)+' target="_blank">查看</a></span></li>'})+"</ul></div></div></div></div> "),e._ssrNode('<div id="rf06" class="main3 center ">',"</div>",[e._ssrNode('<div class="tyxbox"><div class="tyxboxWrap"><div class="tyxleft tyxleft1"><div class="sHeadern"><div class="xt_bottom"></div> <b>物流商务信息</b> <span><a href="/zixun/wlswxx/index.jhtml" title="更多物流商务信息">更多&gt;</a></span></div> <ul class="swlist fls">'+e._ssrList(e.$store.state.news.index_wlswxx,function(t,n){return"<li"+e._ssrClass("nods",n%2?"extra":"")+"><a"+e._ssrAttr("href",t.url)+' class="cur">代理</a><a'+e._ssrAttr("href",t.url)+' class="tag">其他</a><a'+e._ssrAttr("href",t.url)+e._ssrAttr("title",t.title)+">"+e._ssrEscape(e._s(t.title))+"</a><span><a"+e._ssrAttr("href",t.url)+' class="cur">详情</a></span></li>'})+'</ul></div> <div class="tyxright tyxright1"><div class="sHeadern "><div class="xt_bottom"></div> <b>物流公司推荐</b></div> <ul id="wlgs_tj">'+e._ssrList(e.$store.state.company.recommend,function(t,n){return"<li"+e._ssrClass("arank",n>2?"arank2":"")+"><div"+e._ssrClass("avatar",n>2?"avatar2":"")+"><a"+e._ssrAttr("href","/member/"+t.id)+e._ssrAttr("title",t.companyName)+' target="_blank"><span>'+e._ssrEscape(e._s(n+1))+'</span></a></div> <div class="info">'+(n<3?'<div class="wlgs_pic"><img'+e._ssrAttr("src","/images/index/wlgs_tj_0"+n+".png")+' alt class="scrollLoading"></div>':"\x3c!----\x3e")+' <div class="company"><a'+e._ssrAttr("href","/member/"+t.id)+e._ssrAttr("title",t.companyName)+' target="_blank" class="yh">'+e._ssrEscape(e._s(t.companyName))+"</a></div></div></li>"})+'</ul></div></div></div> <div class="banner"><img src="/images/index/26banners3.png"></div> '),e._ssrNode('<div id="rf07" class="main5 center">',"</div>",[e._ssrNode('<div class="main5_1 jtabwrap">',"</div>",[e._ssrNode('<div id="main5_1_1"><div class="xt_bottom_w92"></div> <div id="bt1_5_1"><a class="zx_a1 jtabtit">物流资讯</a></div> <div id="bt2_5_1"><a class="zx_a1 jtabtit">理政资讯</a></div> <div id="more1_5_1" class="morelink"><a href="/zixun/xyzx/index.jhtml" target="_blank">更多&gt;</a></div> <div id="more2_5_1" class="morelink"><a href="/zixun/lzzx/index.jhtml" target="_blank">更多&gt;</a></div></div> <div class="clear"></div> '),n("NewsList",{attrs:{id:"main5_1_nr1",list:e.$store.state.news.index_wlzx}}),e._ssrNode(" "),n("NewsList",{attrs:{id:"main5_1_nr2",list:e.$store.state.news.index_lzzx}})],2),e._ssrNode(" "),e._ssrNode('<div class="main5_2 jtabwrap">',"</div>",[e._ssrNode('<div id="main5_2_1"><div class="xt_bottom_w92"></div> <div id="bt1_5_2"><a class="zx_a2 jtabtit">物流前沿</a></div> <div id="bt2_5_2"><a class="zx_a2 jtabtit">物流行业分析</a></div> <div id="more1_5_2" class="morelink"><a href="/zixun/wlqy/index.jhtml" target="_blank">更多&gt;</a></div> <div id="more2_5_2" class="morelink"><a href="/zixun/wlxyfx/index.jhtml" target="_blank">更多&gt;</a></div></div> <div class="clear"></div> '),n("NewsList",{attrs:{id:"main5_2_nr1",list:e.$store.state.news.index_wlqy}}),e._ssrNode(" "),n("NewsList",{attrs:{id:"main5_2_nr2",list:e.$store.state.news.index_wlxyfx}})],2),e._ssrNode(" "),e._ssrNode('<div class="main5_3 jtabwrap">',"</div>",[e._ssrNode('<div id="main5_3_1"><div class="xt_bottom_w92"></div> <div id="bt1_5_2"><a class="zx_a3 jtabtit">采购资讯</a></div> <div id="bt2_5_2"><a class="zx_a3 jtabtit">仓储与配送</a></div> <div id="more1_5_2" class="morelink"><a href="/zixun/cgzx/index.jhtml" target="_blank">更多&gt;</a></div> <div id="more2_5_2" class="morelink"><a href="/zixun/ccyps/index.jhtml" target="_blank">更多&gt;</a></div></div> <div class="clear"></div> '),n("NewsList",{attrs:{id:"main5_3_nr1",list:e.$store.state.news.index_cgzx}}),e._ssrNode(" "),n("NewsList",{attrs:{id:"main5_3_nr2",list:e.$store.state.news.index_ccyps}})],2)],2),e._ssrNode(' <div class="main5 center"><div class="main5_1"><div id="main6_1_1"><div class="xt_bottom_w92"></div> <div id="bt1_5_1"><a>会员量</a></div></div> <div class="clear"></div> <div id="main6_1_hy"><div class="hyl"><img src="/uploads/181211/1-1Q211145A2U6.png" width="60px" height="60px"> <span>工厂</span> <i>852</i></div> <div class="hyl"><img src="/uploads/181211/1-1Q21114563U54.png" width="60px" height="60px"> <span>商贸</span> <i>2078</i></div> <div class="hyl"><img src="/uploads/181211/1-1Q211145620612.png" width="60px" height="60px"> <span>物流公司</span> <i>2018</i></div> <div class="hyl"><img src="/uploads/181211/1-1Q21114552W24.png" width="60px" height="60px"> <span>三方物流</span> <i>2046</i></div> <div class="hyl"><img src="/uploads/181211/1-1Q211145501230.png" width="60px" height="60px"> <span>信息部</span> <i>3012</i></div> <div class="hyl"><img src="/uploads/181211/1-1Q211145442243.png" width="60px" height="60px"> <span>快递公司</span> <i>886</i></div> <div class="hyl"><img src="/uploads/181211/1-1Q2111454245S.png" width="60px" height="60px"> <span>车主</span> <i>2088</i></div> <div class="hyl"><img src="/uploads/181211/1-1Q21114540QZ.png" width="60px" height="60px"> <span>其他类型</span> <i>1122</i></div></div></div> <div class="main5_2"><div id="main5_2_1"><div class="xt_bottom_w92"></div> <div id="bt1_5_2"><a>客户案例</a></div> <div id="more1_5_2"><a href="/help/khal/index.jhtml" target="_blank">更多&gt;</a></div></div> <div class="clear"></div> <div id="main6_2_nr1">'+e._ssrList(e.$store.state.news.index_khal,function(t,n){return'<div class="anli"><div class="floatl"><a'+e._ssrAttr("href",t.url)+e._ssrAttr("title",t.title)+' target="_blank"><img'+e._ssrAttr("src",t.typeImg)+e._ssrAttr("alt",t.title)+' width="90px" height="68px"></a></div> <div class="anlixq"><span>'+e._ssrEscape(e._s(t.title))+"</span><br> <a"+e._ssrAttr("href",t.url)+' target="_blank">'+e._ssrEscape(e._s((t.description||"").substr(0,28)+"..."))+"</a></div></div>"})+'</div></div> <div class="main5_3"><div id="main6_3_1"><div class="xt_bottom_w92"></div> <div id="bt1_6_3"><a>常用工具</a></div></div> <div class="clear"></div> <div id="tools"><div class="t"><a target="_blank" href="http://www.chajiaotong.com/jiashizheng/#guangdong"><em>•</em>驾驶证查询</a></div> <div class="t bold"><a target="_blank" href="http://www.chajiaotong.com/jiashizheng/#guangdong"><em>•</em>行驶证查询</a></div> <div class="t bold"><a target="_blank" href="https://www.kuaidi100.com/"><em>•</em>快递查询</a></div> <div class="t"><a target="_blank" href="http://www.weizhang8.cn/"><em>•</em>交通违章查询</a></div> <div class="t"><a target="_blank" href="http://tianqi.2345.com/"><em>•</em>天气预报</a></div> <div class="t"><a target="_blank" href="https://shenfenzheng.51240.com/"><em>•</em>身份证查询</a></div> <div class="t"><a target="_blank" href="https://shouji.51240.com/"><em>•</em>手机号码归属地</a></div> <div class="t bold"><a target="_blank" href="https://wannianrili.51240.com/"><em>•</em>万年历</a></div> <div class="t"><a target="_blank" href="http://www.chinacar.com.cn/vin_index.html"><em>•</em>车辆代码查询</a></div> <div class="t"><a target="_blank" href="https://youbian.51240.com/"><em>•</em>邮政编号查询</a></div> <div class="t bold"><a target="_blank" href="http://map.baidu.com/fwmap/zt/traffic/"><em>•</em>全国路况信息查询</a></div> <div class="t bold"><a target="_blank" href="https://www.icauto.com.cn/gonglu/"><em>•</em>全国高速公路查询</a></div> <div class="t"><a target="_blank" href="http://www.zou114.com/highwaycode/"><em>•</em>国家干线公路查询</a></div> <div class="t"><a target="_blank" href="http://cal.apple886.com/"><em>•</em>在线计算器</a></div></div></div></div> <div class="partner center w1400"><div class="bt"><span>28快运可以为您提供什么服务保障？</span></div> <div class="bt2"><span>集结众多货运能力，提供真实可靠的物流服务</span></div> <div style="width:1400px;height:322px;"><div class="partner_item"><p><img src="/images/index/partner_1.png"></p> <p class="item_txt1">海量运力</p> <p class="item_txt2">链接上千家快运物流公司，产品囊括小票、大票零担，网络线路覆盖千万级，实现一点发全国。</p></div> <div class="partner_item"><p><img src="/images/index/partner_2.png"></p> <p class="item_txt1">独享低价</p> <p class="item_txt2">大量批发货主合伙人，独享物流费用议价能力，实现全网线上比价，在线下单可统一管理物流订单。</p></div> <div class="partner_item"><p><img src="/images/index/partner_3.png"></p> <p class="item_txt1">物流跟踪</p> <p class="item_txt2">物流节点及时更新，货物物流跟踪全程可视，让发货方和收货方的交易因物流而变得更信任。</p></div> <div class="partner_item"><p><img src="/images/index/partner_4.png"></p> <p class="item_txt1">发货保障</p> <p class="item_txt2">28快运在线发货，服务有保障，若有异议可在线投诉，客服及时介入处理，让您发货无忧。</p></div></div></div>')],2),e._ssrNode(' <div class="floatNavBar"><div class="nav-bd"><div class="rightKfCon"><a class="rightKf"></a></div> <div class="rightBarHidden"><div class="item"><i class="kfImg"></i> <div class="kfTop"><h3>在线客服</h3> <p>周一至周五 9:00-18:00</p></div> <div class="kfCenter"><a onclick="javascript:window.open(\'tencent://message/?uin=596803544&Site=&menu=yes\');" class="keFu1"><img src="/images/kefu1.png"></a> <a onclick="javascript:window.open(\'tencent://message/?uin=596803544&Site=&menu=yes\');"><img src="/images/kefu2.png"></a></div> <div class="kfRight"><span>客服电话</span><br> <span class="phone">400-9992828</span></div></div></div> <ul class="nav-flo"><li><a href="#rf01" title="找专线">找专线</a></li> <li><a href="#rf02" title="找车源">找车源</a></li> <li><a href="#rf03" title="找货源">找货源</a></li> <li><a href="#rf04" title="找园区">找园区</a></li> <li><a href="#rf00" title="回顶部" class="last">回顶部<br> <i class="whiteArw"></i></a></li></ul></div></div>')],2)},[],!1,null,null,"638f756e");t.default=c.exports}};
//# sourceMappingURL=61b2a522f4a37f5a07a8.js.map