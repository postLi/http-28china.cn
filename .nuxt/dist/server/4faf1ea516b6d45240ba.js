exports.ids=[2],exports.modules={474:function(e,t,n){"use strict";n.r(t);var l={name:"Pay",head:{link:[{rel:"stylesheet",href:"/css/insurancePay.css"},{rel:"stylesheet",href:"/css/insuranceComon.css"}]},layout:"Sublayout",mounted(){seajs.use(["/js/insurance.js"],function(){$(function(){var e=getRequest(),t="/aflc-uc/usercenter/aflcinsurancepolicy/v1/"+e.id+"?access_token="+$.cookie("access_token");api.getInfo(t).done(function(e){$("#insuranceNum").html(e.data.insuranceNum),$("#theInsuredName").html(e.data.theInsuredName),$("#createTime").html(e.data.createTime),$("#insuranceName").html(e.data.insuranceName),$("#insuranceFee").html(e.data.insuranceFee+"元"),$(".pay_money").html("<font>"+e.data.insuranceFee+"</font><em>元</em>")}).fail(function(e){})})})}},r=n(0),component=Object(r.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pay"},[e._ssrNode('<div class="top_bg">',"</div>",[e._ssrNode('<div class="top center">',"</div>",[e._ssrNode("<ul>","</ul>",[e._ssrNode('<li class="top_1"><a href="/" target="_blank"><img src="/images/index_files/logor.png"></a></li> <li class="top_2"><span>保险商城</span></li> '),e._ssrNode('<li class="top_3">',"</li>",[e._ssrNode('<img src="/images/insurance/phone-bx.png"> <span>免费热线</span>'),n("font",[e._v("400-999-2828")])],2)],2)])]),e._ssrNode(" "),e._ssrNode('<div class="main center">',"</div>",[e._ssrNode('<form class="center">',"</form>",[e._ssrNode('<table><tr><th>投保单号</th><th>被保险人</th><th>产品名称</th><th>投保日期</th><th>保险金额</th></tr> <tr><td id="insuranceNum"></td><td id="theInsuredName"></td><td id="insuranceName"></td><td id="createTime"></td><td id="insuranceFee"></td></tr></table> '),e._ssrNode("<ul>","</ul>",[e._ssrNode('<li class="item_left">开具发票：</li><li class="item_right fapiao"><span class="item_fapiao fapiao_checked">不开</span> <span class="item_fapiao">开</span></li> <li class="item_left pay_way_sm">支付方式：</li><li class="item_right"><input readonly="readonly" value="微信支付" class="pay_input1 pay_checked1"> <input readonly="readonly" value="支付宝支付" class="pay_input2"></li> <li class="item_left pay_money_sm">应付金额：</li> <li class="item_right pay_money"></li> '),e._ssrNode('<li class="agree">',"</li>",[e._ssrNode('<span class="agree_none"></span>'),n("font",[e._v("我已阅读并接受"),n("a",{attrs:{href:"#",target:"_blank"}},[e._v("《平安保险投保须知》")]),e._v("和"),n("a",{attrs:{href:"#",target:"_blank"}},[e._v("《保险条款》")])])],2),e._ssrNode(' <li><input readonly="readonly" onclick="pay()" value="安全支付" class="pay_tj"></li>')],2)],2)])],2)},[],!1,null,null,"1fc729bc");t.default=component.exports}};
//# sourceMappingURL=4faf1ea516b6d45240ba.js.map