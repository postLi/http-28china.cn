exports.ids=[5],exports.modules={320:function(t,e,o){"use strict";o.r(e);var n={name:"Step2",head:{link:[{rel:"stylesheet",href:"/css/insuranceStep2.css"},{rel:"stylesheet",href:"/css/insuranceComon.css"}]},layout:"subLayout",mounted(){seajs.use("/js/insurance.js",function(){$(function(){location.search.substr(1);var t={goodsType:$("#data1").val(),goodsName:$("#data2").val(),goodsPack:$("#data3").val(),goodsNumber:$("#data4").val(),goodsValue:$("#data5").val()};window.sessionStorage.setItem("step2",JSON.stringify(t)),$(".next_button").click(function(){insuranceValidate.check()&&(t.goodsType=$("#data1").val(),t.goodsName=$("#data2").val(),t.goodsPack=$("#data3").val(),t.goodsNumber=$("#data4").val(),t.goodsValue=$("#data5").val(),window.sessionStorage.setItem("step2",JSON.stringify(t)),2===window.history.length?window.location.href="/Insurance/step3":window.history.forward())})})})}},d=o(0),component=Object(d.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"step2"},[t._ssrNode('<div class="top_bg">',"</div>",[t._ssrNode('<div class="top center">',"</div>",[t._ssrNode("<ul>","</ul>",[t._ssrNode('<li class="top_1"><a href="/" target="_blank"><img src="/images/index_files/logor.png"></a></li> <li class="top_2"><span>保险商城</span></li> '),t._ssrNode('<li class="top_3">',"</li>",[t._ssrNode('<img src="/images/insurance/phone-bx.png"> <span>免费热线</span>'),o("font",[t._v("400-999-2828")])],2)],2)])]),t._ssrNode(' <div class="main center"><div class="m_border center"><form class="center validateForm"><table><tr><div class="main_bt"><span>货物类型</span><i></i></div></tr> <tr class="tbr"><td><i>*</i>货物类型：</td><td><select id="data1" validate="{"msg":"请选择货物类型"}" class="select01"><option name>请选择货物类型</option> <option name>工业类、纺织服装类</option> <option name>手机办公、家用电器类</option> <option name>全新机器设备、普货</option> <option name>普通家具、食品</option></select></td></tr> <tr class="tbr_id"><td><i>*</i>货物名称：</td><td><input id="data2" maxlength="30" validate="{"msg":"请输入货物名称"}" placeholder="请输入承保货物名称" class="input02"></td></tr> <tr class="bbr_lx"><td><i>*</i>货物包装：</td><td><select id="data3" validate="{"msg":"请选择货物包装"}" class="select01"><option name>请选择货物包装</option> <option name>袋装</option> <option name>散装、裸装</option> <option name>罐装</option> <option name>复合式包装</option> <option name>箱装</option> <option name>桶装</option> <option name>其他</option></select></td></tr> <tr class="bbr"><td><i>*</i>货物数量：</td><td><input id="data4" maxlength="10" validate="{"msg":"请输入货物数量","regG":"^[1-9][0-9]*$","regMsg":"请输入正整数"}" placeholder="请输入货物数量" class="input02"></td></tr> <tr class="bbr_id"><td><i>*</i>货物价值：</td><td><input id="data5" maxlength="7" oninput="checkValue(this)" validate="{"msg":"请输入货物价值","regG":"^[1-9][0-9]*$","regMsg":"请输入正整数"}" placeholder="(300万以内）" class="input02"></td></tr> <tr class="next_step"><td><a target="_self" onclick="window.history.go(-1)" class="pointer">上一步</a></td><td><input onclick="next()" readonly="readonly" value="下一步" class="next_button"></td></tr></table></form></div></div>')],2)},[],!1,null,null,"bc735f40");e.default=component.exports}};
//# sourceMappingURL=995ab045eb862eefc07e.js.map