exports.ids=[70],exports.modules={456:function(r,e,d){"use strict";d.r(e);var n={head:()=>({title:"运单查询",link:[{rel:"stylesheet",href:"/index/css/find_order.css"}],script:[{src:"js/domap.js"}]}),async fetch({store:r,params:e,$axios:d,error:n}){await r.dispatch("news/GETNEWSINFO",{params:{channelIds:"113,114,115,116",count:"6",orderBy:"9",channelOption:"0"},name:"cjwt",preFn:data=>data.map(r=>(r.url=r.url.replace("http://192.168.1.79/anfacms","/help"),r))})},mounted(){seajs.use(["https://webapi.amap.com/maps?v=1.4.8&key=e61aa7ddc6349acdb3b57c062080f730&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder&callback=loadedGaodeMap"],function(){!function(r){if(r){initDoMap("find_order_map","control"),r("#ydh").click(function(){r("#find_order_input").val("1809260061"),r(".find_order_search_tip").css("display","none")}),r("#find_order_input").keyup(function(){r("#find_order_input").val()||r(".find_order_search_tip").css("display","block"),r("#find_order_input").val()&&r(".find_order_search_tip").css("display","none")}),r("#find_order_input").on({keyup:function(){this.value?r(".find_order_search").addClass("hide_search_tip"):r(".find_order_search").removeClass("hide_search_tip")},focus:function(){},blur:function(){this.value?r(".find_order_search").addClass("hide_search_tip"):r(".find_order_search").removeClass("hide_search_tip")}});var e={url:"/api",findByNum:function(e){return r.get(this.url+"/aflc-portal/order/fclOrder/v1/queryCompanyBySerial/"+e)},getInfoById:function(e){return r.get(this.url+"/aflc-portal/order/fclOrder/v1/queryWaybillStateById/"+e)},getCompanyOrder:function(e,d){return r.get(this.url+"/aflc-portal/order/fclOrder/v1/queryCurrentCompanyWaybillInfoBySerial",{userName:e,serial:d})}},d=r.getParams("num"),n=r.getParams("uid");d&&n?(r("#find_order_input").val(d).trigger("blur"),t(n,d)):d?(r("#find_order_input").val(d).trigger("blur"),_(d)):r(".find_order_default").removeClass("hide"),r(".find_order_search_btn").on({click:function(){var e=r.trim(r("#find_order_input").val());if(e){var d=r.getParams("uid");d?t(d,e):_(e)}else alert("请输入你要搜索的值")}}),r(".find_order_company_list").on("click","span",function(){o(r(this).attr("rel")),getOrderLine(r(this).attr("data-name"),r(this).attr("data-ship"))}),r(".return_search").on("click",function(){r(".find_order_content_info").addClass("hide"),r(".find_order_search_list").removeClass("hide")}),r(".find_order_tabs a").on("click",function(){r(".find_order_tabs a").removeClass("active"),r(this).addClass("active"),-1!==r(this).text().indexOf("轨迹跟踪")?(r(".find_order_desc").hide(),r("#find_order_map").show(),window.pathSimplifierIns&&pathNavigs&&pathNavigs.length&&(console.log("pathNavigs",pathNavigs,window.pathSimplifierIns),window.pathSimplifierIns.setFitView())):(r("#find_order_map").hide(),r(".find_order_desc").show())})}function t(d,n){return e.getCompanyOrder(d,n).done(function(e){r(".find_order_con").addClass("hide");var data=e.data;200===e.status&&data.length?(r(".return_search").hide(),l(data),r(".find_order_content_info").removeClass("hide")):(r(".return_search").show(),r(".find_order_none").removeClass("hide"))}).fail(function(){alert("请求出错了~")})}function o(d){return e.getInfoById(d).done(function(e){200===e.status?(r(".find_order_con").addClass("hide"),l(e.data),r(".find_order_content_info").removeClass("hide")):alert("查询出错了:"+(e.errorInfo||e.text))}).fail(function(){alert("请求出错了~")})}function _(d){return e.findByNum(d).done(function(e){if(r(".find_order_con").addClass("hide"),200===e.status&&e.data.length)if(1===e.data.length)r(".return_search").hide(),o(e.data[0].id),getOrderLine(e.data[0].orgId,e.data[0].shipSn);else{r(".return_search").show();var data=e.data,title=r(".find_order_search_list .find_order_company");title.find("span").text(d),title.find("span").attr("title",d),title.find("i").text(data.length);for(var n="",t=data.length,i=0;i<t;i++)n+='<li><span rel="'+data[i].id+'" data-name="'+data[i].orgId+'" data-ship="'+data[i].shipSn+'" class="find_company_order">'+data[i].shipSn+" <i>"+data[i].companyName+"</i> </span></li>";r(".find_order_search_list ol").html(n),r(".find_order_search_list").removeClass("hide")}else r(".find_order_none").removeClass("hide")}).fail(function(){alert("请求出错了~")})}function l(data){data[0].orgName&&r(".find_order_content_info .find_order_company").text(data[0].orgName);for(var e="",d=data.length,i=0;i<d;i++)e+='<li class="{class}"> <span class="find_order_date">{date}</span> <span class="find_order_line"><i></i></span> <span class="find_order-info"><b>{trackNode}</b> {trackInfo} </span> </li>'.replace("{class}",0===i&&"签收"===data[i].trackNode&&0===data[i].trackType?"find_order_sign":i===d-1?"find_order_create":"").replace("{date}",data[i].createTime).replace("{trackNode}",data[i].trackNode).replace("{trackInfo}",data[i].trackInfo);r(".find_order_list").html(e)}}(window.jQuery)})}},t=d(0),component=Object(t.a)(n,function(){var r=this,e=r.$createElement;return(r._self._c||e)("div",{staticClass:"w1400 center clear"},[r._ssrNode('<div class="hyq_banner"><img src="/images/ydcx/banner.jpg" alt></div> <div class="find_order clearfix"><div class="find_order_left"><div class="find_order_tab"><div class="find_order_tab_title">常见问题</div> <ul>'+r._ssrList(r.$store.state.news.cjwt,function(e,d){return"<li><a"+r._ssrAttr("title",e.title)+r._ssrAttr("href",e.url)+' target="_blank">'+r._ssrEscape(r._s(e.title))+"</a></li>"})+'</ul></div> <div class="find_order_tab find_order_quesiton"><div class="find_order_tab_title">查单遇到问题？</div> <ul><li>客服热线：     <span class="findo_ico_mobile">400-9992828</span></li> <li>在线客服：<span class="find_ico_qq">QQ交谈</span></li></ul></div> <div class="find_order_tab find_order_tab_tip"><div class="find_order_tab_title">温馨提示</div> <ul><li>目前仅支持查询平台下单的运单哦</li></ul></div> <a href="/help/tsjy/index.jhtml" target="_blank" class="find_order_tousu">投诉建议</a> <a href="/create/order?" target="_blank" class="find_order_xiadan">我要下单</a></div> <div class="find_order_right find_order_tip"><h3 class="find_order_title">货物追踪</h3> <div class="find_order_search"><div class="find_order_search_tip">请输入运单号,例如：<div id="ydh">1809260061</div></div> <input id="find_order_input" type="text"><span class="find_order_search_btn">查询</span></div> <div class="find_order_default find_order_con hide"><p>\n            无内容真可怕<br>你试试查个运单号就有了！\n          </p></div> <div class="find_order_content find_order_content_info find_order_con hide"><div class="find_order_tabs"><a href="javascript:;" class="active">运单详情</a> <a href="javascript:;">轨迹跟踪</a></div> <div id="find_order_map"></div> <span class="return_search">返回搜索列表</span> <div class="find_order_company find_order_desc"></div> <div class="find_order_list find_order_desc"><ul></ul></div></div> <div class="find_order_search_list find_order_con find_order_content hide"><div class="find_order_company">为您找到“<span title="11111111">111111</span>”相关结果<i>2</i>个</div> <div class="find_order_company_list"><ol></ol></div></div> <div class="find_order_none find_order_con hide"><div class="none_tip_text">抱歉暂无查询记录</div> <div class="none_tip_desc">请您仔细核对物流公司名称和运单号码</div></div></div></div>')])},[],!1,null,null,"6aa84dca");e.default=component.exports}};
//# sourceMappingURL=0a3feff9c89349fcc58d.js.map