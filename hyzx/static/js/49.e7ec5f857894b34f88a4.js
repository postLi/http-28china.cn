webpackJsonp([49],{"0+Xf":function(t,r,e){"use strict";var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"rateplant identification"},[t._m(0),t._v(" "),e("div",{staticClass:"rateInfomation"},[e("div",{},[e("div",{staticClass:"rate_content rate_orderInfo"},[e("h2",[t._v("专线信息")]),t._v(" "),e("div",{staticClass:"carrierInfo"},[e("table",[t._m(1),t._v(" "),e("tbody",[e("tr",[e("td",{staticClass:"moreWidth"},[t._v("\n                                        出发地："+t._s(t.rangeForm.startLocation)+"\n                                    ")]),t._v(" "),e("td",{staticClass:"priceTimeOut",attrs:{rowspan:"2"}},[e("p",[t._v("运输时效："+t._s(t.rangeForm.transportAging)+" "+t._s(t.rangeForm.transportAgingUnit))]),e("br")]),t._v(" "),e("td",{attrs:{rowspan:"2"}},t._l(t.rangeForm.weightcargo,function(r){return e("div",{key:r.id,staticClass:"cargo"},[e("p",[t._v(t._s(r.startVolume)+"-"+t._s(r.endVolume)+"公斤")]),t._v(" "),e("p",[t._v("原报价："),e("del",[t._v(t._s(r.primeryPrice))]),t._v("元/公斤")]),t._v(" "),e("p",[t._v("折后价："),e("span",[t._v(t._s(r.discountPrice))]),t._v("元/公斤")])])})),t._v(" "),e("td",{attrs:{rowspan:"2"}},t._l(t.rangeForm.lightcargo,function(r){return e("div",{key:r.id,staticClass:"cargo"},[e("p",[t._v(t._s(r.startVolume)+"-"+t._s(r.endVolume)+"公斤")]),t._v(" "),e("p",[t._v("原报价："),e("del",[t._v(t._s(r.primeryPrice))]),t._v("元/公斤")]),t._v(" "),e("p",[t._v("折后价："),e("span",[t._v(t._s(r.discountPrice))]),t._v("元/公斤")])])}))]),t._v(" "),e("tr",[e("td",[t._v("\n                                        到达地："+t._s(t.rangeForm.endLocation)+"\n                                    ")])])])]),t._v(" "),e("h4",[t._v("最低一票价格："),e("span",[t._v(t._s(t.rangeForm.lowerPrice))]),t._v(" 元  "),e("span",[t._v("专线类型："+t._s(t.rangeForm.rangeTypeName))]),t._v(" "),e("span",[t._v("发车时间："+t._s(t.rangeForm.departureTime))])])])]),t._v(" "),e("div",{staticClass:"rate_content rate_info "},[e("h2",[t._v("游客对我的评价")]),t._v(" "),e("div",{staticClass:"clearfix rate_info_content"},[e("div",{staticClass:"clearfix rate_info_order "},[e("div",[e("div",{staticClass:"rateStar"},[e("p",[t._v("\n                                        服务价格：\n                                        "),e("el-rate",{attrs:{"show-text":"",texts:t.textsArr,disabled:"","text-color":"#ed001d"},model:{value:t.transportForm.serverPriceStarLevelScore,callback:function(r){t.$set(t.transportForm,"serverPriceStarLevelScore",r)},expression:"transportForm.serverPriceStarLevelScore"}})],1),t._v(" "),e("p",[t._v("\n                                        服务质量：\n                                        "),e("el-rate",{attrs:{"show-text":"",texts:t.textsArr,disabled:"","text-color":"#ed001d"},model:{value:t.transportForm.serverQualityStarLevelScore,callback:function(r){t.$set(t.transportForm,"serverQualityStarLevelScore",r)},expression:"transportForm.serverQualityStarLevelScore"}})],1),t._v(" "),e("p",[t._v("\n                                        运输时效：\n                                        "),e("el-rate",{attrs:{"show-text":"",texts:t.textsArr,"text-color":"#ed001d",disabled:""},model:{value:t.transportForm.transportAgingStarLevelScore,callback:function(r){t.$set(t.transportForm,"transportAgingStarLevelScore",r)},expression:"transportForm.transportAgingStarLevelScore"}})],1),t._v(" "),e("p",[t._v("\n                                        评价说明："),e("span",[t._v(" "+t._s(t.transportForm.evaluationDes))])])])]),t._v(" "),e("div",{staticClass:"rateReply"},[e("h4",[t._v("我对游客的回复")]),t._v(" "),e("div",{staticClass:"rateReply_info"},[t.transportForm.replyDes?e("p",[t._v("\n                                       "+t._s(t.transportForm.replyDes)),e("br"),t._v(" "),e("span",[t._v(t._s(t.transportForm.replyTime))])]):e("div",[e("div",{staticClass:"rateReply_input"},[e("el-input",{attrs:{type:"textarea",rows:2,maxlength:t.retalength,placeholder:"可在此输入回复内容，回复后不可修改"},model:{value:t.replyDes,callback:function(r){t.replyDes=r},expression:"replyDes"}}),t._v(" "),e("p",[e("span",[t._v(t._s(t.replyDes.length))]),t._v(" / "+t._s(t.retalength))])],1),t._v(" "),e("el-button",{attrs:{type:"primary",disabled:!t.replyDes},on:{click:t.submitForm}},[t._v("回复")])],1)])])])])])])])])},n=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"carrierTitle"},[e("div",{staticClass:"realname"},[e("h2",[t._v("评价详情")])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("thead",[e("th",[t._v("基本信息")]),t._v(" "),e("th",[t._v("价格时效")]),t._v(" "),e("th",[t._v("重货价格")]),t._v(" "),e("th",[t._v("轻货价格")])])}],s={render:a,staticRenderFns:n};r.a=s},"5aaV":function(t,r){},"9fMR":function(t,r,e){"use strict";var a=e("woOf"),n=e.n(a),s=(e("TIfe"),e("TuTs"));r.a={components:{},data:function(){return{textsArr:["1分  非常不满","2分  不满意","3分  一般","4分  满意","5分  非常满意"],retalength:100,UserInfo:{},rangeForm:{},replyDes:"",transportForm:{},optionsReason:[]}},mounted:function(){this.firstblood()},methods:{firstblood:function(){var t=this,r=this.$route.query.transportRangeId,e=this.$route.query.evaluationId;Object(s.c)(r).then(function(r){t.rangeForm=r.data,t.rangeForm.weightcargo=[],t.rangeForm.lightcargo=[],t.rangeForm.rangePrices.forEach(function(r){switch(r.type){case"0":t.rangeForm.lightcargo.push(r);break;case"1":t.rangeForm.weightcargo.push(r)}}),t.rangeForm.lightcargo.sort(function(t,r){return t.startVolume-r.startVolume}),t.rangeForm.weightcargo.sort(function(t,r){return t.startVolume-r.startVolume})}),Object(s.b)(e).then(function(r){t.transportForm=r.data})},submitForm:function(){var t=this,r=n()({},{id:this.transportForm.id,replyDes:this.replyDes,replyId:this.UserInfo.id,replyName:this.UserInfo.contactsName});Object(s.g)(r).then(function(r){t.firstblood()})}}}},TuTs:function(t,r,e){"use strict";function a(t,r,e){return u.b.axios({url:"/"+p+"/usercenter/aflcTransportEvaluation/v1/findCompanyShipperEvaluation",method:"post",data:{currentPage:t,pageSize:r,vo:e}})}function n(t,r,e){return u.b.axios({url:"/"+p+"/usercenter/aflcTransportEvaluation/v1/findCompanyMyEvaluation",method:"post",data:{currentPage:t,pageSize:r,vo:e}})}function s(t){return u.b.axios({url:"/"+p+"/usercenter/aflcTransportRange/v1/findMemberAflcTransportRange/"+t,method:"get"})}function o(t){return u.b.axios({url:"/"+p+"/usercenter/aflcTransportEvaluation/v1/"+t,method:"get"})}function i(t){return u.b.axios({url:"/"+p+"/usercenter/aflcTransportEvaluation/v1/findByOrderSerial/"+t,method:"get"})}function c(t){return u.b.axios({url:"/"+p+"/usercenter/aflcShipperEvaluation/v1/findByOrderSerial/"+t,method:"get"})}function l(t){return u.b.axios({url:"/"+p+"/usercenter/aflcShipperEvaluation/v1/update",method:"put",data:t})}function v(t){return u.b.axios({url:"/"+p+"/usercenter/aflcTransportEvaluation/v1/update",method:"put",data:t})}r.a=a,r.d=n,r.c=s,r.b=o,r.e=i,r.f=c,r.h=l,r.g=v;var u=e("Vo7i"),p="aflc-uc"},e7XG:function(t,r,e){"use strict";function a(t){e("5aaV")}Object.defineProperty(r,"__esModule",{value:!0});var n=e("9fMR"),s=e("0+Xf"),o=e("VU/8"),i=a,c=o(n.a,s.a,i,null,null);r.default=c.exports}});