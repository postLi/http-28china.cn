webpackJsonp([44],{"2dc9":function(e,r,t){"use strict";var a=t("woOf"),o=t.n(a),i=t("//Fk"),n=t.n(i),s=t("nOfT"),l=(t.n(s),t("TIfe")),c=t("t5DY"),v=t("TuTs");t("0xDb");r.a={components:{},data:function(){return{textsArr:["1分  非常不满","2分  不满意","3分  一般","4分  满意","5分  非常满意"],retalength:200,replyDes:"",UserInfo:{},carrierSerial:{},consignorSerial:{},orderForm:{},optionsReason:[],defaultIMG:"/static/null.png"}},mounted:function(){this.firstblood()},methods:{firstblood:function(){var e=this,r=this.$route.query.orderSerial;this.UserInfo=Object(l.d)(),n.a.all([Object(v.e)(r),Object(v.f)(r),Object(c.b)(r)]).then(function(r){console.log("resArr",r),e.carrierSerial=r[0].data||{},e.consignorSerial=r[1].data||{},e.orderForm=r[2].data||{}})},submitForm:function(){var e=this,r=o()({},{id:this.carrierSerial.id,replyDes:this.replyDes,replyId:this.UserInfo.id,replyName:this.UserInfo.contactsName});Object(v.g)(r).then(function(r){e.firstblood()})}}}},"5o9Q":function(e,r,t){"use strict";function a(e){t("uSay")}Object.defineProperty(r,"__esModule",{value:!0});var o=t("2dc9"),i=t("td9C"),n=t("VU/8"),s=a,l=n(o.a,i.a,s,null,null);r.default=l.exports},TuTs:function(e,r,t){"use strict";function a(e,r,t){return d.b.axios({url:"/"+u+"/usercenter/aflcTransportEvaluation/v1/findCompanyShipperEvaluation",method:"post",data:{currentPage:e,pageSize:r,vo:t}})}function o(e,r,t){return d.b.axios({url:"/"+u+"/usercenter/aflcTransportEvaluation/v1/findCompanyMyEvaluation",method:"post",data:{currentPage:e,pageSize:r,vo:t}})}function i(e){return d.b.axios({url:"/"+u+"/usercenter/aflcTransportRange/v1/findMemberAflcTransportRange/"+e,method:"get"})}function n(e){return d.b.axios({url:"/"+u+"/usercenter/aflcTransportEvaluation/v1/"+e,method:"get"})}function s(e){return d.b.axios({url:"/"+u+"/usercenter/aflcTransportEvaluation/v1/findByOrderSerial/"+e,method:"get"})}function l(e){return d.b.axios({url:"/"+u+"/usercenter/aflcShipperEvaluation/v1/findByOrderSerial/"+e,method:"get"})}function c(e){return d.b.axios({url:"/"+u+"/usercenter/aflcShipperEvaluation/v1/update",method:"put",data:e})}function v(e){return d.b.axios({url:"/"+u+"/usercenter/aflcTransportEvaluation/v1/update",method:"put",data:e})}r.a=a,r.d=o,r.c=i,r.b=n,r.e=s,r.f=l,r.h=c,r.g=v;var d=t("Vo7i"),u="aflc-uc"},nOfT:function(e,r){},t5DY:function(e,r,t){"use strict";function a(e){return e=e||"",f.b.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+e).then(function(r){return r.code=e,r})}function o(){return m?new _.a(function(e){e(m)}):f.b.get("/anfacommonservice/common/oss/v1/policy").then(function(e){return m=e.data||"",setTimeout(function(){m=""},18e4),m})}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return f.b.get("/28-web/sysDict/getSysDictByCodeGet/"+e).then(function(e){return e.data||[]})}function n(e){return f.b.axios({url:"/28-web/sysDict/getSysDictByCodeGet/"+e,method:"get"})}function s(e){return f.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile?mobile="+e,method:"get"})}function l(e){return f.b.axios({url:"/aflc-common/common/aflcMemberCenter/v1/getDriverInfoByMobile?mobile="+e,method:"get"})}function c(e){return f.b.get("/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile",{params:{mobile:e}})}function v(e){return f.b.axios({url:"/aflcorderservice/order/fclOrder/v1/getDetailsByOrderSerial/"+e,method:"get"})}function d(e,r){var t=new FormData;for(var a in r)t.append(a,r[a]);var o="";for(var i in r)o+="&"+i+"="+r[i];return f.b.request({url:"/aflc-common/common/aflcMemberCenter/v1/updatePassword?memberType="+e,method:"put",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:o})}r.a=a,r.h=o,r.f=i,r.c=n,r.g=s,r.d=l,r.e=c,r.b=v,r.i=d;var u=t("//Fk"),_=t.n(u),f=t("Vo7i"),m=void 0},td9C:function(e,r,t){"use strict";var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"rate identification"},[e._m(0),e._v(" "),t("div",{staticClass:"rateInfomation"},[t("div",{},[t("div",{staticClass:"rate_content rate_orderInfo"},[t("h2",[e._v("订单信息")]),e._v(" "),t("div",{staticClass:"orderInfo"},[t("ul",[t("li",[e._v("订单号："+e._s(e.orderForm.orderSerial))]),e._v(" "),t("li",[e._v("货品名称："+e._s(e.orderForm.goodsName))]),e._v(" "),t("li",[e._v("货品预估总体积（方）："+e._s(e.orderForm.goodsVolume))]),e._v(" "),t("li",[e._v("出发地："+e._s(e.orderForm.startAddress))]),e._v(" "),t("li",[e._v("发货人："+e._s(e.orderForm.consignor))]),e._v(" "),t("li",[e._v("收货人："+e._s(e.orderForm.consignee))])]),e._v(" "),t("ul",[t("li",[e._v("下单时间："+e._s(e._f("parseTime")(e.orderForm.useTime))+" \n                                "),t("el-popover",{attrs:{width:"100%",trigger:"hover"}},[t("p",{staticStyle:{margin:"5px"}},[e._v("提货时间："+e._s(e._f("parseTime")(e.orderForm.pickUpGoodsTime)))]),e._v(" "),t("p",{staticStyle:{margin:"5px"}},[e._v("发货时间："+e._s(e._f("parseTime")(e.orderForm.deliveryTime)))]),e._v(" "),t("p",{staticStyle:{margin:"5px"}},[e._v("收货时间："+e._s(e._f("parseTime")(e.orderForm.receiveTime)))]),e._v(" "),t("span",{staticClass:"reference",attrs:{slot:"reference",icon:"el-icon-caret-bottom"},slot:"reference"},[e._v("更多"),t("i",{attrs:{icon:"el-icon-caret-bottom"}})])])],1),e._v(" "),t("li",[e._v("货品总数量（件）："+e._s(e.orderForm.goodsNum))]),e._v(" "),t("li",[e._v("货物类型："+e._s(e.orderForm.goodsTypeName))]),e._v(" "),t("li",[e._v("到达地："+e._s(e.orderForm.endAddress))]),e._v(" "),t("li",[e._v("发货人手机："+e._s(e.orderForm.consignorPhone))]),e._v(" "),t("li",[e._v("收货人手机："+e._s(e.orderForm.consigneePhone))])]),e._v(" "),t("ul",[t("li",[e._v("物流公司："+e._s(e.orderForm.wlName))]),e._v(" "),t("li",[e._v("货品预估总重量（公斤）："+e._s(e.orderForm.goodsWeight))]),e._v(" "),t("li",[e._v("预估总费用（元）："+e._s(e.orderForm.totalAmount))])])])]),e._v(" "),t("div",{staticClass:"rate_content rate_info fl",staticStyle:{"margin-right":"0.2%"}},[t("h2",[e._v("我对货主的评价")]),e._v(" "),e.consignorSerial.goodsStarLevelScore?t("div",{staticClass:"clearfix rate_info_content"},[t("div",{staticClass:"clearfix rate_info_order "},[t("div",[t("div",{staticClass:"rateStar"},[t("p",[e._v("\n                                        货物包装：\n                                        "),t("el-rate",{attrs:{"show-text":"",texts:e.textsArr,disabled:"","text-color":"#ed001d"},model:{value:e.consignorSerial.goodsStarLevelScore,callback:function(r){e.$set(e.consignorSerial,"goodsStarLevelScore",r)},expression:"consignorSerial.goodsStarLevelScore"}})],1),e._v(" "),t("p",[e._v("\n                                        付款及时：\n                                        "),t("el-rate",{attrs:{"show-text":"",texts:e.textsArr,"text-color":"#ed001d",disabled:""},model:{value:e.consignorSerial.payStarLevelScore,callback:function(r){e.$set(e.consignorSerial,"payStarLevelScore",r)},expression:"consignorSerial.payStarLevelScore"}})],1),e._v(" "),t("p",[e._v("\n                                        装卸安排：\n                                        "),t("el-rate",{attrs:{"text-color":"#ed001d","show-text":"",texts:e.textsArr,disabled:""},model:{value:e.consignorSerial.dockStarLevelScore,callback:function(r){e.$set(e.consignorSerial,"dockStarLevelScore",r)},expression:"consignorSerial.dockStarLevelScore"}})],1),e._v(" "),e.consignorSerial.evaluationDes?t("p",[e._v("\n                                        评价说明："),t("span",[e._v(e._s(e.consignorSerial.evaluationDes))])]):e._e()])]),e._v(" "),t("div",{staticClass:"rateReply"},[t("h4",[e._v("货主对我的回复")]),e._v(" "),e.consignorSerial.replyDes?t("div",{staticClass:"rateReply_info"},[t("p",[e._v("\n                                       "+e._s(e.consignorSerial.replyDes)),t("br"),e._v(" "),t("span",[e._v(e._s(e.consignorSerial.replyTime))])])]):t("div",{staticClass:"rateReply_info"},[t("img",{attrs:{src:e.defaultIMG,alt:""}}),e._v(" "),t("span",[e._v("货主还未来得及回复哦，请您耐心等待！")])])])])]):t("div",{staticClass:"noReply"},[t("img",{attrs:{src:e.defaultIMG,alt:""}})])]),e._v(" "),t("div",{staticClass:"rate_content rate_info fl"},[t("h2",[e._v("货主对我的评价")]),e._v(" "),e.carrierSerial.serverPriceStarLevelScore?t("div",{staticClass:"clearfix rate_info_content"},[t("div",{staticClass:"clearfix rate_info_order "},[t("div",[t("div",{staticClass:"rateStar"},[t("p",[e._v("\n                                        服务价格：\n                                        "),t("el-rate",{attrs:{"show-text":"",texts:e.textsArr,"text-color":"#ed001d",disabled:""},model:{value:e.carrierSerial.serverPriceStarLevelScore,callback:function(r){e.$set(e.carrierSerial,"serverPriceStarLevelScore",r)},expression:"carrierSerial.serverPriceStarLevelScore"}})],1),e._v(" "),t("p",[e._v("\n                                        服务质量：\n                                        "),t("el-rate",{attrs:{"text-color":"#ed001d","show-text":"",texts:e.textsArr,disabled:""},model:{value:e.carrierSerial.serverQualityStarLevelScore,callback:function(r){e.$set(e.carrierSerial,"serverQualityStarLevelScore",r)},expression:"carrierSerial.serverQualityStarLevelScore"}})],1),e._v(" "),t("p",[e._v("\n                                        运输时效：\n                                        "),t("el-rate",{attrs:{"text-color":"#ed001d","show-text":"",texts:e.textsArr,disabled:""},model:{value:e.carrierSerial.transportAgingStarLevelScore,callback:function(r){e.$set(e.carrierSerial,"transportAgingStarLevelScore",r)},expression:"carrierSerial.transportAgingStarLevelScore"}})],1),e._v(" "),e.carrierSerial.evaluationDes?t("p",[e._v("\n                                        评价说明："),t("span",[e._v(e._s(e.carrierSerial.evaluationDes))])]):e._e()])]),e._v(" "),t("div",{staticClass:"rateReply"},[t("h4",[e._v("我对货主的回复")]),e._v(" "),t("div",{staticClass:"rateReply_info"},[e.carrierSerial.replyDes?t("p",[e._v("\n                                        "+e._s(e.carrierSerial.replyDes)),t("br"),e._v(" "),t("span",[e._v(e._s(e.carrierSerial.replyTime))])]):t("div",[t("div",{staticClass:"rateReply_input"},[t("el-input",{attrs:{type:"textarea",rows:2,maxlength:e.retalength,placeholder:"可在此输入回复内容，回复后不可修改"},model:{value:e.replyDes,callback:function(r){e.replyDes=r},expression:"replyDes"}}),e._v(" "),t("p",[t("span",[e._v(e._s(e.replyDes.length))]),e._v(" / "+e._s(e.retalength))])],1),e._v(" "),t("el-button",{attrs:{type:"primary",disabled:!e.replyDes},on:{click:e.submitForm}},[e._v("回复")])],1)])])])]):t("div",{staticClass:"noReply"},[t("img",{attrs:{src:e.defaultIMG,alt:""}}),e._v(" "),t("span",[e._v("货主还未来得及对您评价哦！")])])])])])])},o=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"carrierTitle"},[t("div",{staticClass:"realname"},[t("h2",[e._v("评价详情")])])])}],i={render:a,staticRenderFns:o};r.a=i},uSay:function(e,r){}});