(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{598:function(r,e,t){"use strict";t.r(e);t(40),t(66),t(124),t(121),t(25),t(65);var n=t(10),d={head:function(){return{title:"运单查询",link:[{rel:"stylesheet",href:"/index/css/find_order.css"}],script:[{src:"js/domap.js"},{src:"https://webapi.amap.com/maps?v=1.4.8&key=e61aa7ddc6349acdb3b57c062080f730&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder&callback=loadedGaodeMap"},{src:"//webapi.amap.com/ui/1.0/main.js"}]}},fetch:function(){var r=Object(n.a)(regeneratorRuntime.mark(function r(e){var t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.store,e.params,e.$axios,e.error,r.next=3,t.dispatch("news/GETNEWSINFO",{params:{channelIds:"113,114,115,116",count:"6",orderBy:"9",channelOption:"0"},name:"cjwt",preFn:function(data){return data.map(function(r){return r.url=r.url.replace(/http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,"/help"),r})}});case 3:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}(),mounted:function(){!function(r){if(r){initDoMap("find_order_map","control"),jQuery.getParams=function(r,e){var t=r||"",n=e||location.search;if(!(n=n.replace(/&amp;/gi,"&")))return"";var d=new RegExp("[?&]"+t+"=([^&]*)[&$]?","i"),_=n.match(d);return _?_[1]:""},r("#ydh").click(function(){r("#find_order_input").val("1809260061"),r(".find_order_search_tip").css("display","none")}),r("#find_order_input").keyup(function(){r("#find_order_input").val()||r(".find_order_search_tip").css("display","block"),r("#find_order_input").val()&&r(".find_order_search_tip").css("display","none")}),r("#find_order_input").on({keyup:function(){this.value?r(".find_order_search").addClass("hide_search_tip"):r(".find_order_search").removeClass("hide_search_tip")},focus:function(){},blur:function(){this.value?r(".find_order_search").addClass("hide_search_tip"):r(".find_order_search").removeClass("hide_search_tip")}});var e={url:"/api",findByNum:function(e){return r.get(this.url+"/aflc-portal/order/fclOrder/v1/queryCompanyBySerial/"+e)},getInfoById:function(e){return r.get(this.url+"/aflc-portal/order/fclOrder/v1/queryWaybillStateById/"+e)},getCompanyOrder:function(e,t){return r.get(this.url+"/aflc-portal/order/fclOrder/v1/queryCurrentCompanyWaybillInfoBySerial",{userName:e,serial:t})}},t=r.getParams("num"),n=r.getParams("uid");t&&n?(r("#find_order_input").val(t).trigger("blur"),d(n,t)):t?(r("#find_order_input").val(t).trigger("blur"),o(t)):r(".find_order_default").removeClass("hide"),r(".find_order_search_btn").on({click:function(){var e=r.trim(r("#find_order_input").val());if(e){var t=r.getParams("uid");t?d(t,e):o(e)}else alert("请输入你要搜索的值")}}),r(".find_order_company_list").on("click","span",function(){_(r(this).attr("rel")),getOrderLine(r(this).attr("data-name"),r(this).attr("data-ship"))}),r(".return_search").on("click",function(){r(".find_order_content_info").addClass("hide"),r(".find_order_search_list").removeClass("hide")}),r(".find_order_tabs a").on("click",function(){r(".find_order_tabs a").removeClass("active"),r(this).addClass("active"),-1!==r(this).text().indexOf("轨迹跟踪")?(r(".find_order_desc").hide(),r("#find_order_map").show(),window.pathSimplifierIns&&pathNavigs&&pathNavigs.length&&(console.log("pathNavigs",pathNavigs,window.pathSimplifierIns),window.pathSimplifierIns.setFitView())):(r("#find_order_map").hide(),r(".find_order_desc").show())})}function d(t,n){return e.getCompanyOrder(t,n).done(function(e){r(".find_order_con").addClass("hide");var data=e.data;200===e.status&&data.length?(r(".return_search").hide(),c(data),r(".find_order_content_info").removeClass("hide")):(r(".return_search").show(),r(".find_order_none").removeClass("hide"))}).fail(function(){alert("请求出错了~")})}function _(t){return e.getInfoById(t).done(function(e){200===e.status?(r(".find_order_con").addClass("hide"),c(e.data),r(".find_order_content_info").removeClass("hide")):alert("查询出错了:"+(e.errorInfo||e.text))}).fail(function(){alert("请求出错了~")})}function o(t){return e.findByNum(t).done(function(e){if(r(".find_order_con").addClass("hide"),200===e.status&&e.data.length)if(1===e.data.length)r(".return_search").hide(),_(e.data[0].id),getOrderLine(e.data[0].orgId,e.data[0].shipSn);else{r(".return_search").show();var data=e.data,title=r(".find_order_search_list .find_order_company");title.find("span").text(t),title.find("span").attr("title",t),title.find("i").text(data.length);for(var n="",d=data.length,i=0;i<d;i++)n+='<li><span rel="'+data[i].id+'" data-name="'+data[i].orgId+'" data-ship="'+data[i].shipSn+'" class="find_company_order">'+data[i].shipSn+" <i>"+data[i].companyName+"</i> </span></li>";r(".find_order_search_list ol").html(n),r(".find_order_search_list").removeClass("hide")}else r(".find_order_none").removeClass("hide")}).fail(function(){alert("请求出错了~")})}function c(data){data[0].orgName&&r(".find_order_content_info .find_order_company").text(data[0].orgName);for(var e="",t=data.length,i=0;i<t;i++)e+='<li class="{class}"> <span class="find_order_date">{date}</span> <span class="find_order_line"><i></i></span> <span class="find_order-info"><b>{trackNode}</b> {trackInfo} </span> </li>'.replace("{class}",0===i&&"签收"===data[i].trackNode&&0===data[i].trackType?"find_order_sign":i===t-1?"find_order_create":"").replace("{date}",data[i].createTime).replace("{trackNode}",data[i].trackNode).replace("{trackInfo}",data[i].trackInfo);r(".find_order_list").html(e)}}(window.jQuery)}},_=t(0),component=Object(_.a)(d,function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"w1400 center clear"},[r._m(0),r._v(" "),t("div",{staticClass:"find_order clearfix"},[t("div",{staticClass:"find_order_left"},[t("div",{staticClass:"find_order_tab"},[t("div",{staticClass:"find_order_tab_title"},[r._v("常见问题")]),r._v(" "),t("ul",r._l(r.$store.state.news.cjwt,function(e,n){return t("li",{key:n},[t("a",{attrs:{title:e.title,href:e.url,target:"_blank"}},[r._v(r._s(e.title))])])}),0)]),r._v(" "),r._m(1),r._v(" "),r._m(2),r._v(" "),t("a",{staticClass:"find_order_tousu",attrs:{href:"/help/tsjy/index.jhtml",target:"_blank"}},[r._v("投诉建议")]),r._v(" "),t("a",{staticClass:"find_order_xiadan",attrs:{href:"/create/order?",target:"_blank"}},[r._v("我要下单")])]),r._v(" "),r._m(3)])])},[function(){var r=this.$createElement,e=this._self._c||r;return e("div",{staticClass:"hyq_banner"},[e("img",{attrs:{src:"/images/ydcx/banner.jpg",alt:""}})])},function(){var r=this.$createElement,e=this._self._c||r;return e("div",{staticClass:"find_order_tab find_order_quesiton"},[e("div",{staticClass:"find_order_tab_title"},[this._v("查单遇到问题？")]),this._v(" "),e("ul",[e("li",[this._v("客服热线：     "),e("span",{staticClass:"findo_ico_mobile"},[this._v("400-9992828")])]),this._v(" "),e("li",[this._v("在线客服："),e("span",{staticClass:"find_ico_qq"},[this._v("QQ交谈")])])])])},function(){var r=this.$createElement,e=this._self._c||r;return e("div",{staticClass:"find_order_tab find_order_tab_tip"},[e("div",{staticClass:"find_order_tab_title"},[this._v("温馨提示")]),this._v(" "),e("ul",[e("li",[this._v("目前仅支持查询平台下单的运单哦")])])])},function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"find_order_right find_order_tip"},[t("h3",{staticClass:"find_order_title"},[r._v("货物追踪")]),r._v(" "),t("div",{staticClass:"find_order_search"},[t("div",{staticClass:"find_order_search_tip"},[r._v("请输入运单号,例如："),t("div",{attrs:{id:"ydh"}},[r._v("1809260061")])]),r._v(" "),t("input",{attrs:{id:"find_order_input",type:"text"}}),t("span",{staticClass:"find_order_search_btn"},[r._v("查询")])]),r._v(" "),t("div",{staticClass:"find_order_default find_order_con hide"},[t("p",[r._v("\n            无内容真可怕"),t("br"),r._v("你试试查个运单号就有了！\n          ")])]),r._v(" "),t("div",{staticClass:"find_order_content find_order_content_info find_order_con hide"},[t("div",{staticClass:"find_order_tabs"},[t("a",{staticClass:"active",attrs:{href:"javascript:;"}},[r._v("运单详情")]),r._v(" "),t("a",{attrs:{href:"javascript:;"}},[r._v("轨迹跟踪")])]),r._v(" "),t("div",{attrs:{id:"find_order_map"}}),r._v(" "),t("span",{staticClass:"return_search"},[r._v("返回搜索列表")]),r._v(" "),t("div",{staticClass:"find_order_company find_order_desc"}),r._v(" "),t("div",{staticClass:"find_order_list find_order_desc"},[t("ul")])]),r._v(" "),t("div",{staticClass:"find_order_search_list find_order_con find_order_content hide"},[t("div",{staticClass:"find_order_company"},[r._v("为您找到“"),t("span",{attrs:{title:"11111111"}},[r._v("111111")]),r._v("”相关结果"),t("i",[r._v("2")]),r._v("个")]),r._v(" "),t("div",{staticClass:"find_order_company_list"},[t("ol")])]),r._v(" "),t("div",{staticClass:"find_order_none find_order_con hide"},[t("div",{staticClass:"none_tip_text"},[r._v("抱歉暂无查询记录")]),r._v(" "),t("div",{staticClass:"none_tip_desc"},[r._v("请您仔细核对物流公司名称和运单号码")])])])}],!1,null,null,null);e.default=component.exports}}]);