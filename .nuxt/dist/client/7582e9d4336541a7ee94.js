(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{611:function(e,r,t){"use strict";t.r(r);t(13);var n=t(5),d={head:()=>({title:"运单查询",link:[{rel:"stylesheet",href:"/index/css/find_order.css"}],script:[{src:"js/domap.js"}]}),fetch:e=>Object(n.a)(function*(){let r=e.store;e.params,e.$axios,e.error;yield r.dispatch("news/GETNEWSINFO",{params:{channelIds:"113,114,115,116",count:"6",orderBy:"9",channelOption:"0"},name:"cjwt",preFn:data=>data.map(e=>(e.url=e.url.replace(/http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,"/help"),e))})})(),mounted(){seajs.use(["https://webapi.amap.com/maps?v=1.4.8&key=e61aa7ddc6349acdb3b57c062080f730&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder&callback=loadedGaodeMap"],function(){!function(e){if(e){initDoMap("find_order_map","control"),e("#ydh").click(function(){e("#find_order_input").val("1809260061"),e(".find_order_search_tip").css("display","none")}),e("#find_order_input").keyup(function(){e("#find_order_input").val()||e(".find_order_search_tip").css("display","block"),e("#find_order_input").val()&&e(".find_order_search_tip").css("display","none")}),e("#find_order_input").on({keyup:function(){this.value?e(".find_order_search").addClass("hide_search_tip"):e(".find_order_search").removeClass("hide_search_tip")},focus:function(){},blur:function(){this.value?e(".find_order_search").addClass("hide_search_tip"):e(".find_order_search").removeClass("hide_search_tip")}});var r={url:"/api",findByNum:function(r){return e.get(this.url+"/aflc-portal/order/fclOrder/v1/queryCompanyBySerial/"+r)},getInfoById:function(r){return e.get(this.url+"/aflc-portal/order/fclOrder/v1/queryWaybillStateById/"+r)},getCompanyOrder:function(r,t){return e.get(this.url+"/aflc-portal/order/fclOrder/v1/queryCurrentCompanyWaybillInfoBySerial",{userName:r,serial:t})}},t=e.getParams("num"),n=e.getParams("uid");t&&n?(e("#find_order_input").val(t).trigger("blur"),d(n,t)):t?(e("#find_order_input").val(t).trigger("blur"),o(t)):e(".find_order_default").removeClass("hide"),e(".find_order_search_btn").on({click:function(){var r=e.trim(e("#find_order_input").val());if(r){var t=e.getParams("uid");t?d(t,r):o(r)}else alert("请输入你要搜索的值")}}),e(".find_order_company_list").on("click","span",function(){_(e(this).attr("rel")),getOrderLine(e(this).attr("data-name"),e(this).attr("data-ship"))}),e(".return_search").on("click",function(){e(".find_order_content_info").addClass("hide"),e(".find_order_search_list").removeClass("hide")}),e(".find_order_tabs a").on("click",function(){e(".find_order_tabs a").removeClass("active"),e(this).addClass("active"),-1!==e(this).text().indexOf("轨迹跟踪")?(e(".find_order_desc").hide(),e("#find_order_map").show(),window.pathSimplifierIns&&pathNavigs&&pathNavigs.length&&(console.log("pathNavigs",pathNavigs,window.pathSimplifierIns),window.pathSimplifierIns.setFitView())):(e("#find_order_map").hide(),e(".find_order_desc").show())})}function d(t,n){return r.getCompanyOrder(t,n).done(function(r){e(".find_order_con").addClass("hide");var data=r.data;200===r.status&&data.length?(e(".return_search").hide(),c(data),e(".find_order_content_info").removeClass("hide")):(e(".return_search").show(),e(".find_order_none").removeClass("hide"))}).fail(function(){alert("请求出错了~")})}function _(t){return r.getInfoById(t).done(function(r){200===r.status?(e(".find_order_con").addClass("hide"),c(r.data),e(".find_order_content_info").removeClass("hide")):alert("查询出错了:"+(r.errorInfo||r.text))}).fail(function(){alert("请求出错了~")})}function o(t){return r.findByNum(t).done(function(r){if(e(".find_order_con").addClass("hide"),200===r.status&&r.data.length)if(1===r.data.length)e(".return_search").hide(),_(r.data[0].id),getOrderLine(r.data[0].orgId,r.data[0].shipSn);else{e(".return_search").show();var data=r.data,title=e(".find_order_search_list .find_order_company");title.find("span").text(t),title.find("span").attr("title",t),title.find("i").text(data.length);for(var n="",d=data.length,i=0;i<d;i++)n+='<li><span rel="'+data[i].id+'" data-name="'+data[i].orgId+'" data-ship="'+data[i].shipSn+'" class="find_company_order">'+data[i].shipSn+" <i>"+data[i].companyName+"</i> </span></li>";e(".find_order_search_list ol").html(n),e(".find_order_search_list").removeClass("hide")}else e(".find_order_none").removeClass("hide")}).fail(function(){alert("请求出错了~")})}function c(data){data[0].orgName&&e(".find_order_content_info .find_order_company").text(data[0].orgName);for(var r="",t=data.length,i=0;i<t;i++)r+='<li class="{class}"> <span class="find_order_date">{date}</span> <span class="find_order_line"><i></i></span> <span class="find_order-info"><b>{trackNode}</b> {trackInfo} </span> </li>'.replace("{class}",0===i&&"签收"===data[i].trackNode&&0===data[i].trackType?"find_order_sign":i===t-1?"find_order_create":"").replace("{date}",data[i].createTime).replace("{trackNode}",data[i].trackNode).replace("{trackInfo}",data[i].trackInfo);e(".find_order_list").html(r)}}(window.jQuery)})}},_=t(0),component=Object(_.a)(d,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"w1400 center clear"},[e._m(0),e._v(" "),t("div",{staticClass:"find_order clearfix"},[t("div",{staticClass:"find_order_left"},[t("div",{staticClass:"find_order_tab"},[t("div",{staticClass:"find_order_tab_title"},[e._v("常见问题")]),e._v(" "),t("ul",e._l(e.$store.state.news.cjwt,function(r,n){return t("li",{key:n},[t("a",{attrs:{title:r.title,href:r.url,target:"_blank"}},[e._v(e._s(r.title))])])}),0)]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),t("a",{staticClass:"find_order_tousu",attrs:{href:"/help/tsjy/index.jhtml",target:"_blank"}},[e._v("投诉建议")]),e._v(" "),t("a",{staticClass:"find_order_xiadan",attrs:{href:"/create/order?",target:"_blank"}},[e._v("我要下单")])]),e._v(" "),e._m(3)])])},[function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"hyq_banner"},[r("img",{attrs:{src:"/images/ydcx/banner.jpg",alt:""}})])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"find_order_tab find_order_quesiton"},[r("div",{staticClass:"find_order_tab_title"},[this._v("查单遇到问题？")]),this._v(" "),r("ul",[r("li",[this._v("客服热线：     "),r("span",{staticClass:"findo_ico_mobile"},[this._v("400-9992828")])]),this._v(" "),r("li",[this._v("在线客服："),r("span",{staticClass:"find_ico_qq"},[this._v("QQ交谈")])])])])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"find_order_tab find_order_tab_tip"},[r("div",{staticClass:"find_order_tab_title"},[this._v("温馨提示")]),this._v(" "),r("ul",[r("li",[this._v("目前仅支持查询平台下单的运单哦")])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"find_order_right find_order_tip"},[t("h3",{staticClass:"find_order_title"},[e._v("货物追踪")]),e._v(" "),t("div",{staticClass:"find_order_search"},[t("div",{staticClass:"find_order_search_tip"},[e._v("请输入运单号,例如："),t("div",{attrs:{id:"ydh"}},[e._v("1809260061")])]),e._v(" "),t("input",{attrs:{id:"find_order_input",type:"text"}}),t("span",{staticClass:"find_order_search_btn"},[e._v("查询")])]),e._v(" "),t("div",{staticClass:"find_order_default find_order_con hide"},[t("p",[e._v("\n            无内容真可怕"),t("br"),e._v("你试试查个运单号就有了！\n          ")])]),e._v(" "),t("div",{staticClass:"find_order_content find_order_content_info find_order_con hide"},[t("div",{staticClass:"find_order_tabs"},[t("a",{staticClass:"active",attrs:{href:"javascript:;"}},[e._v("运单详情")]),e._v(" "),t("a",{attrs:{href:"javascript:;"}},[e._v("轨迹跟踪")])]),e._v(" "),t("div",{attrs:{id:"find_order_map"}}),e._v(" "),t("span",{staticClass:"return_search"},[e._v("返回搜索列表")]),e._v(" "),t("div",{staticClass:"find_order_company find_order_desc"}),e._v(" "),t("div",{staticClass:"find_order_list find_order_desc"},[t("ul")])]),e._v(" "),t("div",{staticClass:"find_order_search_list find_order_con find_order_content hide"},[t("div",{staticClass:"find_order_company"},[e._v("为您找到“"),t("span",{attrs:{title:"11111111"}},[e._v("111111")]),e._v("”相关结果"),t("i",[e._v("2")]),e._v("个")]),e._v(" "),t("div",{staticClass:"find_order_company_list"},[t("ol")])]),e._v(" "),t("div",{staticClass:"find_order_none find_order_con hide"},[t("div",{staticClass:"none_tip_text"},[e._v("抱歉暂无查询记录")]),e._v(" "),t("div",{staticClass:"none_tip_desc"},[e._v("请您仔细核对物流公司名称和运单号码")])])])}],!1,null,null,null);r.default=component.exports}}]);