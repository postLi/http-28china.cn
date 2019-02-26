exports.ids=[1],exports.modules={349:function(e,n,r){"use strict";r.r(n);var d={name:"Insurance",head:{link:[{rel:"stylesheet",href:"/css/insuranceIndex.css"},{rel:"stylesheet",href:"/css/insuranceComon.css"}]},layout:"subLayout",mounted(){seajs.use(["/js/insurance.js"],function(){$(function(){var e=getRequest();"综合险"===$("input[name='a']:checked").val()?($("#bx_lx1_label").addClass("bx_checked"),$("#bx_sm1").css("display","block"),$("#bx_sm2").css("display","none")):($("#bx_lx2_label").addClass("bx_checked"),$("#bx_sm1").css("display","none"),$("#bx_sm2").css("display","block"));let n="/aflc-portal/portalt/aflcinsurancepolicy/v1/"+e.id;$.ajax({url:"/api"+n,type:"GET",dataType:"json",processData:!1,cache:!1,contentType:!1,headers:{"Content-Type":"application/json"},success:function(e){$("#insuranceNumber").html(e.data.insuranceNumber),$("#browseNumber").html(e.data.browseNumber)},error:function(e){"invalid_token"===JSON.parse(e.responseText).error&&($("body").toast({content:"您还未登录，请先登录",duration:3e3}),$(".login_box").show())}})})})}},o=r(0),component=Object(o.a)(d,function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"Insurance"},[e._ssrNode('<div class="top_bg">',"</div>",[e._ssrNode('<div class="top center">',"</div>",[e._ssrNode("<ul>","</ul>",[e._ssrNode('<li class="top_1"><a href="/" target="_blank"><img src="/images/index_files/logor.png"></a></li> <li class="top_2"><span>保险商城</span></li> '),e._ssrNode('<li class="top_3">',"</li>",[e._ssrNode('<img src="/images/insurance/phone-bx.png"> <span>免费热线</span>'),r("font",[e._v("400-999-2828")])],2)],2)])]),e._ssrNode(' <div class="main_bg center"></div> '),e._ssrNode('<div class="main center">',"</div>",[e._ssrNode('<div class="main1">',"</div>",[e._ssrNode("<ul>","</ul>",[e._ssrNode("<li>","</li>",[e._ssrNode("<i>01</i> <span>选择面广</span> "),r("font",[e._v("国内，国际，海陆空运输方式全覆盖")])],2),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode("<i>02</i> <span>超低价格</span> "),r("font",[e._v("费率低至万二，多家大品牌可选")])],2),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode("<i>03</i> <span>方便快捷</span> "),r("font",[e._v("24小时在线投保，30分钟极速出单")])],2),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode("<i>04</i> <span>放心售后</span> "),r("font",[e._v("一对一协助理赔，全程跟踪服务")])],2)],2)]),e._ssrNode(" "),e._ssrNode('<div class="main2">',"</div>",[e._ssrNode('<div class="main2_1"><span>预约投保流程</span></div> <div class="main2_2"></div> '),e._ssrNode('<div class="main2_3">',"</div>",[e._ssrNode("<ul>","</ul>",[e._ssrNode("<li>","</li>",[e._ssrNode("<span>第一步</span> "),r("font",[e._v("选择保险")])],2),e._ssrNode(' <img src="images/insurance/jt.png"> '),e._ssrNode("<li>","</li>",[e._ssrNode("<span>第二步</span> "),r("font",[e._v("在线填单")])],2),e._ssrNode(' <img src="images/insurance/jt.png"> '),e._ssrNode("<li>","</li>",[e._ssrNode("<span>第三步</span> "),r("font",[e._v("网上支付")])],2),e._ssrNode(' <img src="images/insurance/jt.png"> '),e._ssrNode("<li>","</li>",[e._ssrNode("<span>第四步</span> "),r("font",[e._v("下载保单")])],2)],2)])],2),e._ssrNode(" "),e._ssrNode('<div class="main3">',"</div>",[e._ssrNode('<div class="main3_1"><span>国内货物运输保险</span></div> <div class="main3_2"></div> '),e._ssrNode('<div class="main3_3">',"</div>",[e._ssrNode("<ul>","</ul>",[e._ssrNode("<li>","</li>",[e._ssrNode('<a href="/Insurance/product?id=1" target="_blank">',"</a>",[e._ssrNode('<div class="item_01"><img src="images/insurance/big_pic.png"></div> '),e._ssrNode('<div class="item_02">',"</div>",[e._ssrNode("<span>平安货物运输保险运</span> "),r("font",[e._v("起")]),e._ssrNode(" <i>￥10</i>")],2),e._ssrNode(' <div class="item_03"><span>运输必备</span> <img src="images/insurance/logo3.png"></div>')],2)]),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode('<a href="javascript:;" target="_blank" onclick="clickHandle()">',"</a>",[e._ssrNode('<div class="item_01"><img src="images/insurance/1-2bx.png"></div> '),e._ssrNode('<div class="item_02">',"</div>",[e._ssrNode("<span>人保货运险</span> "),r("font",[e._v("起")]),e._ssrNode(" <i>￥10</i>")],2),e._ssrNode(' <div class="item_03"><span>保障充足</span> <img src="images/insurance/logo4.png"></div>')],2)]),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode('<a href="javascript:;" target="_blank" onclick="clickHandle()">',"</a>",[e._ssrNode('<div class="item_01"><img src="images/insurance/1bx.png"></div> '),e._ssrNode('<div class="item_02">',"</div>",[e._ssrNode("<span>安达货运险</span> "),r("font",[e._v("起")]),e._ssrNode(" <i>￥5</i>")],2),e._ssrNode(' <div class="item_03"><span>专业风险保障</span> <img src="images/insurance/logo1.png"></div>')],2)]),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode('<a href="javascript:;" target="_blank" onclick="clickHandle()">',"</a>",[e._ssrNode('<div class="item_01"><img src="images/insurance/2bx.png"></div> '),e._ssrNode('<div class="item_02">',"</div>",[e._ssrNode("<span>太平洋货物运输保险</span> "),r("font",[e._v("起")]),e._ssrNode(" <i>￥10</i>")],2),e._ssrNode(' <div class="item_03"><span>运输必备</span> <img src="images/insurance/logo5.png"></div>')],2)]),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode('<a href="javascript:;" target="_blank" onclick="clickHandle()">',"</a>",[e._ssrNode('<div class="item_01"><img src="images/insurance/3bx.png"></div> '),e._ssrNode('<div class="item_02">',"</div>",[e._ssrNode("<span>安联全车盗抢险</span> "),r("font",[e._v("起")]),e._ssrNode(" <i>￥20</i>")],2),e._ssrNode(' <div class="item_03"><span>透明快速</span> <img src="images/insurance/logo2.jpg"></div>')],2)]),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode('<a href="javascript:;" target="_blank" onclick="clickHandle()">',"</a>",[e._ssrNode('<div class="item_01"><img src="images/insurance/4bx.png"></div> '),e._ssrNode('<div class="item_02">',"</div>",[e._ssrNode("<span>国内货物运输保险</span> "),r("font",[e._v("起")]),e._ssrNode(" <i>￥15</i>")],2),e._ssrNode(' <div class="item_03"><span>运输必备</span> <img src="images/insurance/small_pic.png"></div>')],2)]),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode('<a href="javascript:;" target="_blank" onclick="clickHandle()">',"</a>",[e._ssrNode('<div class="item_01"><img src="images/insurance/5bx.png"></div> '),e._ssrNode('<div class="item_02">',"</div>",[e._ssrNode("<span>安达货运险</span> "),r("font",[e._v("起")]),e._ssrNode(" <i>￥10</i>")],2),e._ssrNode(' <div class="item_03"><span>专业风险保障</span> <img src="images/insurance/logo1.png"></div>')],2)]),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode('<a href="javascript:;" target="_blank" onclick="clickHandle()">',"</a>",[e._ssrNode('<div class="item_01"><img src="images/insurance/6bx.png"></div> '),e._ssrNode('<div class="item_02">',"</div>",[e._ssrNode("<span>人保货运险</span> "),r("font",[e._v("起")]),e._ssrNode(" <i>￥15</i>")],2),e._ssrNode(' <div class="item_03"><span>保障充足</span> <img src="images/insurance/logo4.png"></div>')],2)])],2),e._ssrNode(' <div class="main3_sm"><span>我们保证: 为客户提供详细全面的产品介绍，为您定制合适的保障方案，24小时客服服务，全程提供售前售后及理赔服务</span></div>')],2)],2)],2),e._ssrNode(" "),e._ssrNode('<div class="footer_sm">',"</div>",[e._ssrNode('<div class="item_sm center">',"</div>",[e._ssrNode("<ul>","</ul>",[e._ssrNode("<li>","</li>",[e._ssrNode('<img src="images/insurance/footer_ico.png"> <span>全程理赔服务</span> '),r("font",[e._v("理赔不再是难题")])],2),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode('<img src="images/insurance/footer_ico.png"> <span>10年+保险服务 </span> '),r("font",[e._v("专业可信赖")])],2),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode('<img src="images/insurance/footer_ico.png"> <span>咨询、投保、保全 </span> '),r("font",[e._v("专人服务一站搞定")])],2),e._ssrNode(" "),e._ssrNode("<li>","</li>",[e._ssrNode('<img src="images/insurance/footer_ico.png"> <span>支持在线比价 </span> '),r("font",[e._v("提供有市场竞争力的定价")])],2)],2)])])],2)},[],!1,null,null,"2401d04c");n.default=component.exports}};
//# sourceMappingURL=1e1704b6df837c91a2e9.js.map