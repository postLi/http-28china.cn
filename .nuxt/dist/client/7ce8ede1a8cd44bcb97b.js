(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{172:function(t,r,c){t.exports=c.p+"img/c9acb29.png"},181:function(t,r,c){"use strict";c.d(r,"b",function(){return l}),c.d(r,"a",function(){return d}),c.d(r,"d",function(){return m}),c.d(r,"c",function(){return C});c(79),c(17);var n=c(4);let _=["天津市","北京市","上海市","重庆市"],e=[{p:"北京市",c:"北京市"},{p:"天津市",c:"天津市"},{p:"黑龙江省",c:"哈尔滨市"},{p:"江苏省",c:"南京市"},{p:"江苏省",c:"无锡市"},{p:"江苏省",c:"苏州市"},{p:"浙江省",c:"杭州市"},{p:"浙江省",c:"宁波市"},{p:"山东省",c:"青岛市"},{p:"河南省",c:"郑州市"},{p:"湖北省",c:"武汉市"},{p:"湖南省",c:"长沙市"},{p:"广东省",c:"广州市"},{p:"广东省",c:"深圳市"},{p:"重庆市",c:"重庆市"},{p:"四川省",c:"成都市"}];function l(t,r){return v.apply(this,arguments)}function v(){return(v=Object(n.a)(function*(t,r){const c=yield t.get("../js/province.json");for(let i=0;i<c.data.length;i++){if(r===c.data[i].name)return c.data[i].code}})).apply(this,arguments)}function d(t,r,c){return o.apply(this,arguments)}function o(){return(o=Object(n.a)(function*(t,code,r){return yield t.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+code)})).apply(this,arguments)}function m(time,t){if(0===arguments.length)return null;if(!time)return"";const r=t||"{y}-{m}-{d} {h}:{i}:{s}";let c;if("object"==typeof time?c=time:(time="number"==typeof time?time:(""+time).trim(),/^\d{10}$/.test(time)?time=1e3*parseInt(time):/(\d){4}-(\d){2}-(\d){2}\s+(\d){2}:(\d){2}:(\d){2}/.test(time)&&(time=time.replace(/-/g,"/")),c=new Date(time)),-1!==c.toString().indexOf("Invalid"))return time;const n={y:c.getFullYear(),m:c.getMonth()+1,d:c.getDate(),h:c.getHours(),i:c.getMinutes(),s:c.getSeconds(),a:c.getDay()};return r.replace(/{(y|m|d|h|i|s|a)+}/g,(t,r)=>{let c=n[r];return"a"===r?["一","二","三","四","五","六","日"][c-1]:(t.length>0&&c<10&&(c="0"+c),c||0)})}function C(){let param=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},data={startProvince:param.startProvince||"",startCity:param.startCity||"",endProvince:param.endProvince||"",endCity:param.endCity||""};if(data.startProvince&&data.endProvince&&data.startCity&&data.endCity&&data.startProvince===data.endProvince&&data.startCity===data.endCity)if(t=data.startCity,-1!==_.indexOf(t)){let t=e.filter(t=>data.endCity!==t.c),r=t[Math.ceil(t.length*Math.random())];data.endProvince=r.p,data.endCity=r.c}else data.endCity="";var t;return data}},184:function(t,r,c){t.exports=c.p+"img/d7cb4dd.gif"},185:function(t,r,c){t.exports=c.p+"img/6ad6f1a.gif"},259:function(t,r,c){t.exports=c.p+"img/5100aba.png"},260:function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVQ4T6XTIU4DURDG8d8KFBdAVeLgAFUgGgI1IEhaDoYsNa1BQYLCVJEQDOEKIDhGM2RJti9vd9N9I9+b75+Zb2YqhVEV6qWAI/z2QHdymoARvjDBRwtkjBec4jty0gpusMAUbwnkDE+4qyF/3zkPQrzGZQMS4mfMm+I2QLwHZIVrHOARt3hNW+uaQngRwogAbXK+dAH+qxgECDOXtQ+H+7YQ4gdcDTFxhntcZHahd4zHeMc5PnsW6QQ/uTEWrfKguyq+xi2mJCYR1JnglAAAAABJRU5ErkJggg=="},261:function(t,r,c){var content=c(448);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(11).default)("51888910",content,!0,{sourceMap:!1})},280:function(t,r,c){t.exports=c.p+"img/098551f.png"},419:function(t,r,c){t.exports=c.p+"img/3f8d318.png"},420:function(t,r,c){t.exports=c.p+"img/7c61f13.png"},421:function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA0ElEQVQ4T82TyRHCMAxFv4uAJqAHEpqgHEI30AQJPUATUISZjy28LwcO6OIZy3ravpU+Q+MHpv4ctNoBr1vYaOdd2No4G8g8mpOQ/QJcB5cgfmPTpjPKwbaTgdN3n9KqAeSHzUrWA0BAzS7q6+3f2kEDXmDMd6DN0VWQC+gGSQoJ4Nkyzutx+rxKWytl5r2/vShJH0g2yQV4VfisOkjm9lyctgQaySAE+QKU1ed0w3eirUSQ4mSgQFhJzei3X6qsI7bVMrux/NZawQV/v7IbCd6EPHu/Fhze+wAAAABJRU5ErkJggg=="},422:function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA40lEQVQ4T2N0mfLtPwMVAOPQMCjWlIVh8ek/JHkYw2t6UkwMcWYsDCUbfjHszubEaZjr1O8ochgGgVwDAiAXgQxC1wCSwyaOYRCyIrINArkmzowV7gqQQYtO/cbwHrIamCSKi2BhAvMOskEgzTBD8RoECxtsinCFC7JTcYYRvhiDGYAcEXgDG6QBlhz0pZkZLj79C04W2ABeg0CG9AaygwMfFoM9AWwMi079Ybj07B/+dATTAIvB4vU/wZpg4jAXXnz6DyX1Y3URSDModSPbjJ6mQAYiuwprysaWzwjlv8FXjAAAU16tfRu4zEAAAAAASUVORK5CYII="},423:function(t,r,c){t.exports=c.p+"img/c620741.png"},424:function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA8UlEQVQ4T2N0mfLtPwMVAOPQMEhPionh0rN/cA/HmrIwLD79B28AYPXa7mxOhuL1P+GGgfiuU78z9ASwMVx8+g+roRgGgVzTG8gO1ggDMINAfJDr4sxYUSwCiWMYhM1WZINAmtC9jmEQzDWLTv1GCQ+QC7ABkDpY2KG4COQafWlmBnSD9KWZcIYNzAK4QSC/wzSAJJFjCSSHLobuQowwwqYJ5OU4MxaGkg2/cCYBogwC6UYPcLJcBIt2ZO+BXA5KU7CES7SLYDEKS6joiZZog2DpB5RYQbEKShLIiRZrygZpQs5ryOEBchksdpHVDL5iBAASe7N9/bK89gAAAABJRU5ErkJggg=="},425:function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAy0lEQVQ4T2P0XCf+n4EKgHGEGBStUcIQrVlCdIh5rZeAq8UbRtsCXzDAFIMsAYGlN3qwWoRhEEgzMWDp9R4UQ7EaBHMFLhdhcx3tXASyDVc4wLysK2IFZl5+cwx3YFMljGB+JyawQWouvTkGdxVKGCEbBHI+zOmgtAWKJWQxvAaBJEGKYQZWHAkCOw4We7AEix71IDUoLuqwWcegJ2rFUH4YYoAeNFBBLoIlCZhFMHUwV6MYhOx0EBtmEHJYIMcc3lgjNqDR1VGtPAIA4DGK/ekLUL4AAAAASUVORK5CYII="},426:function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA8UlEQVQ4T9VUuw3CMBS0ATEKFDAKNCDBBtCzAGIBekYIElUYhRRkkyCSoHviLOclliko4DXx5/n87t45ttgsavOFsP8BZEcT05+tzPO4F9IYI8rrWb7Yr/OsIUgntcHuIIk8SCABna9Ndb+5S4jWAgJIbzw1j+3SVYMKsFamSbCqBhBAEATiHGt+hZgPTxd3mdD1u0buOgnUfF0wRlDDFhD5aiBfcOZQv6BGosf7xpBPqzyLd03T0GCkGK1IeyY2D1KLHdT7HwNBeHF1mhhoQ/2i1PwOwcU0ISqhq7WnWu2nq/EEupL5zgCKivz39nu/kReTbLpzpxEfqAAAAABJRU5ErkJggg=="},427:function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA3UlEQVQ4T9WT4Q2CMBCFjyF0Cd1BcAnHEbfRJQR30CV0CMxnfVB6VUPiH5qQ0HL97r1XWnRH6+wPo5gBaLExW5Zmt4M3vNrn183MW6uaALi3A4h34Dzp+uPyqhuDULNtza61V7Ou/TpQBxLkXAYIG5sqvGNJSgR8A9TRK1IBYAYKBQGs9a+g2BAqyASbbFJ2UpmY92EDQD4q4mDZqMCBJ6c6gOKgKQKYG/pGM/LMnhob0wyYx8FjUXajRvkrsutG3Uzz9DR/glIVUvnh6P0PSecp41T01XO4/VOsRbVPD4eHv/Eipy8AAAAASUVORK5CYII="},428:function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABAElEQVQ4T9VUsQ3CMBB0dgDBCFCQASIYADrSZo1IMAJIWSOt6VgAlAFCASMgkR1Ahzjr33FEAQV8E+tt39/dfxzN7eBuvhDRfwBlo9zUTWVOTaVE75dXs9gNg0Z0Spv0EgUEcER5Kd4DoWIoVofUbGfW1DfNUrJuMSITfBGQt5lat8aCe2BH+QoIByCB9CmHgH5eynRABFkfU6dOspIFQqa3pOEQPKEk0icoqgBUFkQu2DV4EveTp7nygvTK714QCNXZJQkEJtjz2QQZEQTyaDYuSnDZLRqqGOFiNs6dR2x1jG6+8siBbXku1HC2uuZXkyMhfxn41TlHn7wmv/eMPACZUL392ckzeQAAAABJRU5ErkJggg=="},429:function(t,r,c){t.exports=c.p+"img/f6d99e6.png"},430:function(t,r,c){t.exports=c.p+"img/6a0e0d9.png"},431:function(t,r,c){t.exports=c.p+"img/e29f55e.png"},432:function(t,r,c){t.exports=c.p+"img/0531793.png"},433:function(t,r,c){t.exports=c.p+"img/008f853.png"},434:function(t,r,c){t.exports=c.p+"img/00fcf83.png"},435:function(t,r,c){t.exports=c.p+"img/e5c4019.png"},436:function(t,r,c){t.exports=c.p+"img/c0804bf.png"},437:function(t,r,c){t.exports=c.p+"img/c0e1ef6.png"},438:function(t,r,c){t.exports=c.p+"img/ddbdc45.png"},439:function(t,r,c){t.exports=c.p+"img/402359c.png"},440:function(t,r,c){t.exports=c.p+"img/df6df8d.png"},441:function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAPCAYAAAC7paJZAAABj0lEQVRIie2Xv0sCYRjHv6+GBRmiGBpogfYDzcXFoUHBRRyECAdB6F8ooiknlyAa+wdaGpodGkPXcJCSkBCqWSz8dSTq0713RRLeZS3doR94uXvueb/3Pb7cPXCMRDDhGP77AbSAagiUy4GWzMDqApA9ki/yI6+9VqmvJ40SM2oBsOwesJsGVgLAzTWw6QRCW8DBMfB0J/X5t8QSCc1r1GBKM6HOGGzpONBlwPwssLwGmO1AqwY8PwDtN8BEqF9cwfZxCy1rVCEFHnlrO0wUDhBFg0Q7UaLL868NZye60qihGMK9aNTjZn4H0Yad6DQrNzIZeXGSSaJYTBcaNRQ/ByoUUI5EsC6em/xWoFzHIJUCjEZuD2axgKpVoNkUX8suDMWipjV/mgnDQSzOAQ6B0IvH5Ua/D3Q6IEGQFq9NlYrmNb+eCZ8M8nm6Fbc1DvelWgiFqBMMUtvno5bHQ023W1eaUfwYwiizhtdLry4XvTidutR8Z6wQhs2oVJLq2hgmWtYMozoTJoXpvwOmIUi8A78dgeFA0JqBAAAAAElFTkSuQmCC"},442:function(t,r,c){t.exports=c.p+"img/59c08da.png"},443:function(t,r,c){t.exports=c.p+"img/d5fe8a8.png"},444:function(t,r,c){t.exports=c.p+"img/d1f3da1.png"},445:function(t,r,c){t.exports=c.p+"img/24c44a2.png"},446:function(t,r,c){t.exports=c.p+"img/968614a.png"},447:function(t,r,c){"use strict";var n=c(261);c.n(n).a},448:function(t,r,c){(t.exports=c(10)(!1)).push([t.i,'.lll-zhuangXian-detail .clearfix:after{content:" ";display:table}.lll-zhuangXian-detail .clearfix:before{content:"";display:table}.lll-zhuangXian-detail .clearfix:after{clear:both}.lll-zhuangXian-detail .arc_prinr_p{padding:20px 0 0 15px;font-size:14px}',""])},506:function(t,r,c){"use strict";c.r(r);var n=[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"arc_top1_3"},[r("a",{attrs:{id:"search_huo",target:"_blank"}},[r("input",{staticClass:"arc_input3",attrs:{value:"搜全网"}})])])},function(){var t=this,r=t.$createElement,c=t._self._c||r;return c("div",{staticClass:"arc_top1_2"},[c("select",{attrs:{id:"search_type"}},[c("option",{attrs:{name:"zx"}},[t._v("找专线")]),t._v(" "),c("option",{attrs:{name:"che"}},[t._v("找车源")]),t._v(" "),c("option",{attrs:{name:"huo"}},[t._v("找货源")])]),t._v(" "),c("input",{staticClass:"arc_input1",attrs:{wtmap:"",placeholder:"出发地"}}),t._v(" "),c("span",[t._v("→")]),t._v(" "),c("input",{staticClass:"arc_input2",attrs:{wtmap:"",placeholder:"到达地"}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"arc_top2_1"},[r("a",{attrs:{href:"/"}},[r("span",[this._v("首页")])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("a",{attrs:{href:"javascript:void(0)"}},[r("span",[this._v("更多+")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"arc_left_3"},[r("a",{attrs:{href:"javascript:void(0)"}},[r("img",{attrs:{src:c(419)}}),this._v(" "),r("span",{attrs:{id:"collection_zx"}},[this._v("收藏专线")]),r("i",[this._v(" ( "),r("em",{staticClass:"my_zx_num"}),this._v("人气 )")])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"collection_zx"},[r("div",{staticClass:"bt_close",attrs:{onclick:"$('.collection_zx').hide()"}},[r("img",{attrs:{src:c(260)}})]),this._v(" "),r("div",{staticClass:"collection_zx_nr"},[r("img",{attrs:{src:c(420)}}),this._v(" "),r("span",[this._v("成功加入")]),r("a",{attrs:{id:"collection_url",target:"_blank",href:"#"}},[this._v("收藏夹")])])])},function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"pj_price_box"},[n("div",{staticClass:"pj_price_box1"},[n("div",{staticClass:"bt_close",attrs:{onclick:"$('.pj_price_box').hide()"}},[n("img",{attrs:{src:c(260)}})])]),t._v(" "),n("div",{staticClass:"pj_price_box2"},[t._v("试算价格")]),t._v(" "),n("div",{staticClass:"item-form plr20"},[n("h2",{staticClass:"form-tit"},[t._v("货物重量/体积计算")]),t._v(" "),n("div",{staticClass:"item-cell"},[n("label",[n("span",{staticClass:"r-point"},[t._v("*")]),t._v("总重量：")]),t._v(" "),n("div",{staticClass:"item-primary w190"},[n("input",{staticClass:"item-input",attrs:{id:"goodsweight",type:"text",placeholder:""}})]),t._v(" "),n("span",{staticClass:"unit"},[t._v("千克")])]),t._v(" "),n("div",{staticClass:"item-cell"},[n("label",[n("span",{staticClass:"r-point"},[t._v("*")]),t._v("总体积：")]),t._v(" "),n("div",{staticClass:"item-primary w190"},[n("input",{staticClass:"item-input",attrs:{id:"goodsvolume",type:"text",placeholder:""}})]),t._v(" "),n("span",{staticClass:"unit"},[t._v("立方米")])]),t._v(" "),n("div",{staticClass:"item-cell c-red calculator"},[t._v("\n              辅助计算器\n              "),n("i",{staticClass:"icon i-down"})]),t._v(" "),n("p",{staticClass:"txt mb20 pl20 c-red"},[t._v("注：我们的工作人员会在接货时重新称重，此估算仅供参考。")]),t._v(" "),n("div",{staticClass:"cal-all cl",staticStyle:{display:"none"},attrs:{id:"_cal_div"}},[n("div",{staticClass:"cal-box"},[n("div",{staticClass:"cal-panel"},[n("ul",{staticClass:"cal-head"},[n("li",[n("label",[t._v("重量：")]),t._v(" "),n("div",{staticClass:"cal-primary"},[n("span",{staticClass:"num",attrs:{id:"_cal_weight",name:"_cal_weight"}}),t._v("kg\n                      ")])]),t._v(" "),n("li",[n("label",[t._v("体积：")]),t._v(" "),n("div",{staticClass:"cal-primary"},[n("span",{staticClass:"num",attrs:{id:"_cal_volume",name:"_cal_volume"}}),t._v("m3\n                      ")])]),t._v(" "),n("li",[n("label",[t._v("件数：")]),t._v(" "),n("div",{staticClass:"cal-primary"},[n("span",{staticClass:"num",attrs:{id:"_cal_package",name:"_cal_package"}})])])]),t._v(" "),n("div",{staticClass:"cal-hs fr"},[n("a",{staticClass:"calstop",attrs:{href:"javascript:;"}},[t._v("收起")]),t._v(" "),n("a",{staticClass:"caldel",attrs:{href:"javascript:;"}},[t._v("删除")])]),t._v(" "),n("div",{staticClass:"cal-body"},[n("div",{staticClass:"cal-cell"},[n("label",[t._v("单位重量")]),t._v(" "),n("div",{staticClass:"cal-primary"},[n("input",{attrs:{id:"_unit_weight",type:"text"}}),t._v(" "),n("span",[t._v("kg")])])]),t._v(" "),n("div",{staticClass:"cal-cell"},[n("label",[t._v("单位体积")]),t._v(" "),n("div",{staticClass:"cal-primary",attrs:{id:"_volume"}},[n("input",{attrs:{id:"_unit_length",type:"text",onkeyup:"Calculator._volume_cal(this)",placeholder:"长(m)"}}),t._v(" "),n("span",[t._v("x")]),t._v(" "),n("input",{attrs:{id:"_unit_width",type:"text",onkeyup:"Calculator._volume_cal(this)",placeholder:"宽(m)"}}),t._v(" "),n("span",[t._v("x")]),t._v(" "),n("input",{attrs:{id:"_unit_higth",type:"text",onkeyup:"Calculator._volume_cal(this)",placeholder:"高(m)"}}),t._v(" "),n("span",[t._v("=")]),t._v(" "),n("span",{staticClass:"cal-bulk",attrs:{id:"_unit_volume"}}),t._v(" "),n("span",[t._v("立方米")])])]),t._v(" "),n("div",{staticClass:"cal-cell"},[n("label",[t._v("件数")]),t._v(" "),n("div",{staticClass:"cal-primary"},[n("input",{attrs:{id:"_total_package",type:"text"}}),t._v(" "),n("a",{staticClass:"btn btn-orange btn-cal",attrs:{href:"javascript:;",onclick:"Calculator._confirm_cal(this)"}},[t._v("确认")])])])])])]),t._v(" "),n("div",{staticClass:"caladd-box fr"},[n("a",{staticClass:"btn btn-orange caladd",attrs:{href:"javascript:;"}},[t._v("添加")])])]),t._v(" "),n("h2",{staticClass:"form-tit"},[t._v("费用合计")]),t._v(" "),n("div",{staticClass:"item-cell item-block"},[n("label",[n("span",{staticClass:"r-point"},[t._v("*")]),t._v("预计费用：")]),t._v(" "),n("div",{attrs:{id:"_totalFee_div"}},[n("p",{staticClass:"loose-txt"},[n("span",{staticClass:"price-big mr10",attrs:{id:"_totalFee"}},[t._v("0.00")]),n("span",{staticClass:"c-red"},[t._v("元")])])])])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"arc_middle1"},[r("span",{attrs:{id:"nr072"}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"arc_middle2_2"},[r("div",{staticClass:"num1"},[r("span",{attrs:{id:"nr0746"}})]),this._v(" "),r("div",{staticClass:"num2"},[r("a",{attrs:{href:"javascript:void(0)"}},[r("span",{attrs:{id:"nr0745"}})])]),this._v(" "),r("div",{staticClass:"num3"},[r("span",[this._v("下单量")])]),this._v(" "),r("div",{staticClass:"num4"},[r("a",{attrs:{href:"javascript:void(0)"}},[r("span",[this._v("累计评价")])])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"arc_middle3"},[r("div",{staticClass:"arc_m3"},[r("i",[this._v("运输时效：")]),r("span",{attrs:{id:"nr077"}})]),this._v(" "),r("div",{staticClass:"arc_m3"},[r("i",[this._v("发货频次：")]),r("span",{attrs:{id:"nr078"}})]),this._v(" "),r("div",{staticClass:"arc_m3"},[r("i",[this._v("最低一票价格：")]),r("span",{attrs:{id:"nr079"}})])])},function(){var t=this,r=t.$createElement,c=t._self._c||r;return c("div",{staticClass:"arc_middle4"},[c("div",{staticClass:"arc_m4_1"},[c("div",[c("span",[t._v("出发地")])]),t._v(" "),c("div",[c("i",[t._v("联系人：")]),c("span",{attrs:{id:"nr0710"}})]),t._v(" "),c("div",[c("i",[t._v("手机：")]),c("span",{attrs:{id:"nr0711"}})])]),t._v(" "),c("div",{staticClass:"arc_m4_2"},[c("div",[c("span",[t._v("到达地")])]),t._v(" "),c("div",[c("i",[t._v("联系人：")]),c("span",{attrs:{id:"nr0712"}})]),t._v(" "),c("div",[c("i",[t._v("手机：")]),c("span",{attrs:{id:"nr0713"}})])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"arc_middle5"},[r("div",{staticClass:"arc_m5_1"},[r("span",[this._v("联系我时，请说明是从28快运上看到此信息，谢谢！")])]),this._v(" "),r("div",{staticClass:"arc_m5_2"},[r("div",{staticClass:"arc_m5_2_1",attrs:{id:"order_price",onclick:"$('.pj_price_box').show()"}},[r("a",{attrs:{href:"javascript:void(0)"}},[r("span",[this._v("试算价格")])])]),this._v(" "),r("div",{staticClass:"arc_m5_2_2",attrs:{id:"order_arc"}},[r("a",{attrs:{id:"nr_order",target:"_blank",href:"javascript:void(0)"}},[r("span",[this._v("快速下单")])])])])])},function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"arc_middle6"},[n("div",{staticClass:"arc_m6_1"},[n("i",[t._v("增值服务：")])]),t._v(" "),n("div",{staticClass:"arc_m6_2"},[n("div",{staticClass:"item_zzfw1"},[n("img",{attrs:{src:c(421)}}),n("span",[t._v("送货上门")])]),t._v(" "),n("div",{staticClass:"item_zzfw2"},[n("img",{attrs:{src:c(422)}}),n("span",[t._v("保价运输")])]),t._v(" "),n("div",{staticClass:"item_zzfw3"},[n("img",{attrs:{src:c(423)}}),n("span",[t._v("运费到付")])]),t._v(" "),n("div",{staticClass:"item_zzfw4"},[n("img",{attrs:{src:c(424)}}),n("span",[t._v("代收货款")])]),t._v(" "),n("div",{staticClass:"item_zzfw5"},[n("img",{attrs:{src:c(425)}}),n("span",[t._v("上门提货")])]),t._v(" "),n("div",{staticClass:"item_zzfw6"},[n("img",{attrs:{src:c(426)}}),n("span",[t._v("开发票")])]),t._v(" "),n("div",{staticClass:"item_zzfw7"},[n("img",{attrs:{src:c(427)}}),n("span",[t._v("签单回收")])]),t._v(" "),n("div",{staticClass:"item_zzfw8"},[n("img",{attrs:{src:c(428)}}),n("span",[t._v("时效保障")])])])])},function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("p",{staticClass:"arc_right02"},[n("i",[t._v("信誉：")]),t._v(" "),n("img",{staticClass:"xy_zuan",attrs:{src:c(185)}}),t._v(" "),n("img",{staticClass:"xy_zuan",attrs:{src:c(185)}}),t._v(" "),n("img",{staticClass:"xy_zuan",attrs:{src:c(185)}}),t._v(" "),n("img",{staticClass:"xy_zuan",attrs:{src:c(185)}}),t._v(" "),n("img",{staticClass:"xy_zuan",attrs:{src:c(185)}}),t._v(" "),n("img",{staticClass:"xy_guan",attrs:{src:c(184)}}),t._v(" "),n("img",{staticClass:"xy_guan",attrs:{src:c(184)}}),t._v(" "),n("img",{staticClass:"xy_guan",attrs:{src:c(184)}}),t._v(" "),n("img",{staticClass:"xy_guan",attrs:{src:c(184)}}),t._v(" "),n("img",{staticClass:"xy_guan",attrs:{src:c(184)}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("span",[r("i",[this._v("Q Q：")]),r("a",{attrs:{id:"nr1023",target:"_blank"}},[r("input",{attrs:{id:"qq",value:"QQ交谈"}})])])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",{staticClass:"arc_right05"},[r("a",{attrs:{id:"nr1024",target:"_blank"}},[r("input",{attrs:{id:"arc_right05_1",readonly:"",value:"进入官网"}})]),this._v(" "),r("a",[r("input",{attrs:{id:"collection_wlgs",readonly:"",value:"收藏"}})])])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",{staticClass:"arc_right06"},[r("span",[this._v("相关认证")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",{staticClass:"arc_right07"},[r("img",{attrs:{id:"right_xinyong",src:c(429)}}),this._v(" "),r("img",{attrs:{id:"right_shiming",src:c(430)}}),this._v(" "),r("img",{attrs:{id:"right_baozhengjin",src:c(280)}}),r("span",{attrs:{id:"nr1037"}},[this._v("1000元")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"arc_left2_bt"},[r("span",[this._v("公司网点分布")]),r("i",[r("a",{attrs:{id:"wd_more",target:"_blank"}},[this._v("更多")])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",{staticClass:"p01"},[r("span",{attrs:{id:"nr1011"}},[this._v("广州网点")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",{staticClass:"p02"},[r("img",{attrs:{src:c(259)}}),this._v(" \n                "),r("span",[r("a",{attrs:{id:"nr1012",target:"_blank",href:"#"}})])])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",{staticClass:"p04"},[r("i",[this._v("所在地：")]),r("span",{attrs:{id:"nr1015"}},[this._v("浙江省 杭州市 下城区")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",{staticClass:"p05"},[r("img",{attrs:{src:c(431)}}),this._v(" "),r("span",{attrs:{id:"nr1016"}},[this._v("金黄大道永福路博洋物流园10号")])])},function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"arc_nr ",attrs:{id:"arc_nr1"}},[n("div",{staticClass:"arc_nr1"},[n("div",{staticClass:"arc_fw item_fw1"},[n("div",{staticClass:"fw_img"},[n("img",{attrs:{src:c(432)}})]),t._v(" "),n("div",{staticClass:"fw_nr"},[n("p",{staticClass:"fw_nr1"},[n("span",[t._v("送货上门")])]),t._v(" "),n("p",{staticClass:"fw_nr2"},[n("i",[t._v("收取客户货物后，将货物送到指定收件对象的服务。")])])])]),t._v(" "),n("div",{staticClass:"arc_fw item_fw2"},[n("div",{staticClass:"fw_img"},[n("img",{attrs:{src:c(433)}})]),t._v(" "),n("div",{staticClass:"fw_nr"},[n("p",{staticClass:"fw_nr1"},[n("span",[t._v("保价运输")])]),t._v(" "),n("p",{staticClass:"fw_nr2"},[n("i",[t._v("保价运输是我司与您共同确定的以托运人申明货物价值为基础的一种特殊运输方式，您向我司声明其托运货物的实际价值，按保价运输的货物，托运人除缴纳运输费用外，按照规定缴纳一定的保价费用，若货物在运输过程中出险，我司将按照托运人的声明价值赔偿一定损失。")])])])]),t._v(" "),n("div",{staticClass:"arc_fw item_fw3"},[n("div",{staticClass:"fw_img"},[n("img",{attrs:{src:c(434)}})]),t._v(" "),n("div",{staticClass:"fw_nr"},[n("p",{staticClass:"fw_nr1"},[n("span",[t._v("运费到付")])]),t._v(" "),n("p",{staticClass:"fw_nr2"},[n("i",[t._v("为您提供派送末端支付运费服务，当货物到达收货人时由收货人支付运费。")])])])]),t._v(" "),n("div",{staticClass:"arc_fw item_fw4"},[n("div",{staticClass:"fw_img"},[n("img",{attrs:{src:c(435)}})]),t._v(" "),n("div",{staticClass:"fw_nr"},[n("p",{staticClass:"fw_nr1"},[n("span",[t._v("代收货款")])]),t._v(" "),n("p",{staticClass:"fw_nr2"},[n("i",[t._v("按照寄件方（卖家）与收件方（买家）达成交易协议的要求，为寄件方提供承运、寄递物品的同时，并代寄件方向收件方收取货款，同时按照约定时间将货款返还给寄件方的服务。")])])])]),t._v(" "),n("div",{staticClass:"arc_fw item_fw5"},[n("div",{staticClass:"fw_img"},[n("img",{attrs:{src:c(436)}})]),t._v(" "),n("div",{staticClass:"fw_nr"},[n("p",{staticClass:"fw_nr1"},[n("span",[t._v("上门提货")])]),t._v(" "),n("p",{staticClass:"fw_nr2"},[n("i",[t._v("按照客户指令到指定地点收取货物的服务。")])])])]),t._v(" "),n("div",{staticClass:"arc_fw item_fw6"},[n("div",{staticClass:"fw_img"},[n("img",{attrs:{src:c(437)}})]),t._v(" "),n("div",{staticClass:"fw_nr"},[n("p",{staticClass:"fw_nr1"},[n("span",[t._v("开发票")])]),t._v(" "),n("p",{staticClass:"fw_nr2"},[n("i",[t._v("客户可向物流公司申请开具货物运输发票。")])])])]),t._v(" "),n("div",{staticClass:"arc_fw item_fw7"},[n("div",{staticClass:"fw_img"},[n("img",{attrs:{src:c(438)}})]),t._v(" "),n("div",{staticClass:"fw_nr"},[n("p",{staticClass:"fw_nr1"},[n("span",[t._v("签单回收")])]),t._v(" "),n("p",{staticClass:"fw_nr2"},[n("i",[t._v("在货物正常签收后，将寄件客户提供的需收件客户签名的收条或收货单等单据返还寄件客户的服务。")])])])]),t._v(" "),n("div",{staticClass:"arc_fw item_fw8"},[n("div",{staticClass:"fw_img"},[n("img",{attrs:{src:c(439)}})]),t._v(" "),n("div",{staticClass:"fw_nr"},[n("p",{staticClass:"fw_nr1"},[n("span",[t._v("时效保障")])]),t._v(" "),n("p",{staticClass:"fw_nr2"},[n("i",[t._v("承诺在规定时间内送达的时效保障服务。")])])])])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"arc_nr arc_nr_none",attrs:{id:"arc_nr2"}},[r("div",{staticClass:"arc_nr2",attrs:{id:"nr1035"}})])},function(){var t=this,r=t.$createElement,c=t._self._c||r;return c("div",{staticClass:"arc_pjnr_bt1"},[c("div",{staticClass:"arc_pjbt_item"},[c("input",{attrs:{type:"radio",name:"radio",value:""}}),c("span",[t._v("全部")]),c("i",{attrs:{id:"nr1044"}},[t._v("(439)")])]),t._v(" "),c("div",{staticClass:"arc_pjbt_item"},[c("input",{attrs:{type:"radio",name:"radio",value:"AF0360101"}}),c("span",[t._v("好评")]),c("i",{attrs:{id:"nr1045"}},[t._v("(400)")])]),t._v(" "),c("div",{staticClass:"arc_pjbt_item"},[c("input",{attrs:{type:"radio",name:"radio",value:"AF0360102"}}),c("span",[t._v("中评")]),c("i",{attrs:{id:"nr1046"}},[t._v("(30)")])]),t._v(" "),c("div",{staticClass:"arc_pjbt_item"},[c("input",{attrs:{type:"radio",name:"radio",value:"AF0360103"}}),c("span",[t._v("差评")]),c("i",{attrs:{id:"nr1047"}},[t._v("(9)")])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"pj_box1"},[r("div",{staticClass:"bt_close",attrs:{onclick:"$('.pj_box').hide()"}},[r("img",{attrs:{src:c(260)}})])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"pj_box2_1"},[r("img",{attrs:{src:c(440)}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"pj_box3"},[r("div",{staticClass:"pj_box3_left"},[this._v("服务价格：")]),this._v(" "),r("div",{staticClass:"pj_box3_right",attrs:{id:"pj_box_item1"}},[r("img",{attrs:{id:"pjxx1_1",src:c(172)}}),r("img",{attrs:{id:"pjxx1_2",src:c(172)}}),r("img",{attrs:{id:"pjxx1_3",src:c(172)}}),r("img",{attrs:{id:"pjxx1_4",src:c(172)}}),r("img",{attrs:{id:"pjxx1_5",src:c(172)}}),r("span",{attrs:{id:"pj_f1"}})])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"pj_box3"},[r("div",{staticClass:"pj_box3_left"},[this._v("服务质量：")]),this._v(" "),r("div",{staticClass:"pj_box3_right",attrs:{id:"pj_box_item2"}},[r("img",{attrs:{id:"pjxx2_1",src:c(172)}}),r("img",{attrs:{id:"pjxx2_2",src:c(172)}}),r("img",{attrs:{id:"pjxx2_3",src:c(172)}}),r("img",{attrs:{id:"pjxx2_4",src:c(172)}}),r("img",{attrs:{id:"pjxx2_5",src:c(172)}}),r("span",{attrs:{id:"pj_f2"}})])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"pj_box3"},[r("div",{staticClass:"pj_box3_left"},[this._v("运输时效：")]),this._v(" "),r("div",{staticClass:"pj_box3_right",attrs:{id:"pj_box_item3"}},[r("img",{attrs:{id:"pjxx3_1",src:c(172)}}),r("img",{attrs:{id:"pjxx3_2",src:c(172)}}),r("img",{attrs:{id:"pjxx3_3",src:c(172)}}),r("img",{attrs:{id:"pjxx3_4",src:c(172)}}),r("img",{attrs:{id:"pjxx3_5",src:c(172)}}),r("span",{attrs:{id:"pj_f3"}})])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"pj_box3_right"},[r("i",{attrs:{id:"pj_box_zh"}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"pj_box4"},[r("div",{staticClass:"pj_box4_left"},[this._v("评价说明：")]),this._v(" "),r("div",{staticClass:"pj_box4_right"},[r("textarea",{attrs:{id:"pj_nr",maxlength:"400",rows:"3",cols:"30"}})])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"pj_box5"},[r("span",[this._v("还可输入"),r("i",{attrs:{id:"pj_limit"}},[this._v("400")]),this._v("字")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"pj_box6"},[r("input",{staticClass:"pj_input2",attrs:{id:"pj_submit",value:"提交评价"}}),r("input",{staticClass:"pj_input1",attrs:{onclick:"$('.pj_box').hide()",value:"取消"}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"pj_box7"},[this._v("打分和评价都将是其他用户的参考依据，并影响该承运商信誉值。\n                请发布真实、客观的本人消费体验评价。如您受到威逼、利诱如优惠等干扰而发布的评价或并非本人体验的虚假/恶意评价，则点评视为违规，同时影响您的信誉度。更多请见 "),r("span",[this._v("这里的说明")]),this._v("。\n                ")])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",{staticClass:"item_p2"},[r("img",{attrs:{src:c(441)}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",{staticClass:"item_p3"},[r("span",{attrs:{id:"nr1032"}},[this._v("内容真实，可靠！")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",{staticClass:"item_p4"},[r("i",{attrs:{id:"nr1033"}},[this._v("2018-08-01 10:00")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"70px"}},[r("div",{staticClass:"page fl",attrs:{id:"pagination1"}}),this._v(" "),r("div",{staticClass:"info fl"})])},function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"arc_nr arc_nr_none",attrs:{id:"arc_nr4"}},[n("div",{staticClass:"arc_nr1",attrs:{id:"block_bzj"}},[n("div",{staticClass:"arc_fw_bt"},[n("img",{attrs:{src:c(442)}})]),t._v(" "),n("div",{staticClass:"arc_fw arc_fw2"},[n("div",{staticClass:"fw_img"},[n("img",{attrs:{src:c(443)}})]),t._v(" "),n("div",{staticClass:"fw_nr"},[n("p",{staticClass:"fw_nr1"},[n("span",[t._v("物流运输保障服务")])]),t._v(" "),n("p",{staticClass:"fw_nr2"},[n("i",[t._v("此承运商已交")]),n("i",{attrs:{id:"nr1036"}}),n("i",[t._v("元诚信保证金")])]),t._v(" "),n("p",{staticClass:"fw_nr3"},[n("span",[t._v("如果您采用平台的担保交易，您与承运商洽谈好价格后，要平台上生成标准托运单，并把运费托管在平台上，如果承运商未能良好履约，您有权要求退回所有的运费。并根据托运单规定的规则条款，您有权对承运商要求相应的补偿。")])]),t._v(" "),n("p",{staticClass:"fw_nr4"},[n("span",[t._v("如果您线下私自与承运商进行交易，平台不承担任何协助您向承运商要求兑现承诺的义务。")])])])])]),t._v(" "),n("div",{staticClass:"arc_nr1",staticStyle:{display:"none"},attrs:{id:"none_bzj"}},[n("img",{attrs:{src:c(444)}}),t._v(" "),n("span",[t._v("暂未开通此项服务")])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"zx_sx"},[r("span",{staticClass:"biaozhi"}),r("span",[this._v("此路线其他专线")]),r("a",{attrs:{id:"arc_bottom_more",href:"#"}},[r("span",{staticClass:"arc_bottom_more"},[this._v("更多+")])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"p p02"},[r("img",{attrs:{src:c(259)}}),r("span",[r("a",{attrs:{id:"tj023"}})]),this._v(" "),r("img",{attrs:{id:"tj_shiming",src:c(445)}}),this._v(" "),r("img",{attrs:{id:"tj_xinyong",src:c(446)}}),this._v(" "),r("img",{attrs:{id:"tj_danbao",src:c(280)}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"p p01"},[r("a",{attrs:{id:"tj020",target:"_blank"}},[r("span",{attrs:{id:"tj021"}}),r("i",[this._v("→")]),r("span",{attrs:{id:"tj022"}})])])},function(){var t=this.$createElement,r=this._self._c||t;return r("li",{staticClass:"tj_left"},[r("i",[this._v("时效：")]),r("span",{attrs:{id:"tj026"}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("li",{staticClass:"tj_right"},[r("i",[this._v("最低一票：")]),r("span",{attrs:{id:"tj027"}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"p p06"},[r("a",{attrs:{id:"tj028",target:"_blank"}},[r("span",[this._v("查看>")])])])}],_=(c(2),c(35),c(4)),e=c(181),l={name:"Index",head:{link:[{rel:"stylesheet",href:"/line/css/article_wlzx.css"},{rel:"stylesheet",href:"/line/css/price.css"},{rel:"stylesheet",href:"/gongsi/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/WTMap.css"}]},layout:"subLayout",data:()=>({showImg:0,pages:0,currentPage:1,linedata:{},lineCitys:[]}),asyncData:t=>Object(_.a)(function*(){let r,c,n=t.$axios,_=(t.app,t.query),l=yield n.get(""+`/28-web/range/${_.id}`);if(console.log(`/api/28-web/range/${_.id}`,"res",l.data,l.data.data.endLocation),200===l.data.status){r=yield Object(e.b)(n,l.data.data.endProvince),c=yield Object(e.a)(n,r,l.data.data.startCity);let t=l.data.data,_=(t.id||"").split(""),v=0;return _.forEach(t=>{v+=t.charCodeAt(0)||0}),t.num=v%30+1,console.log(l.data.data,"res.data.data.num"),{linedata:t,lineCitys:c.data.data}}})(),mounted(){seajs.use(["../js/city.js","../js/calculator.js"],function(){seajs.use(["../js/city-picker.js"],function(){seajs.use(["/line/js/arc_wlzx.js"],function(){seajs.use(["../js/collection.js"],function(){seajs.use(["../js/gaodemap2.js"],function(){$(".arc_top2_3").mouseover(function(){$(".city_box").css("display","block")}),$(".city_box").mouseover(function(){$(".city_box").css("display","block")}),$(".city_box").mouseover(function(){$(".city_box").css("display","none")}),$("#zh_price").mouseover(function(){$(".price_box1").css("display","block")}),$("#zh_price").mouseout(function(){$(".price_box1").css("display","none")}),$("#qh_price").mouseover(function(){$(".price_box2").css("display","block")}),$("#qh_price").mouseout(function(){$(".price_box2").css("display","none")}),$("#arc_bt1").click(function(){$(".arc_span").removeClass("arc_active"),$(this).addClass("arc_active"),$(".arc_nr").addClass("arc_nr_none"),$("#arc_nr1").removeClass("arc_nr_none")}),$("#arc_bt2").click(function(){$(".arc_span").removeClass("arc_active"),$(this).addClass("arc_active"),$(".arc_nr").addClass("arc_nr_none"),$("#arc_nr2").removeClass("arc_nr_none")}),$("#arc_bt3").click(function(){$(".arc_span").removeClass("arc_active"),$(this).addClass("arc_active"),$(".arc_nr").addClass("arc_nr_none"),$("#arc_nr3").removeClass("arc_nr_none")}),$("#arc_bt4").click(function(){$(".arc_span").removeClass("arc_active"),$(this).addClass("arc_active"),$(".arc_nr").addClass("arc_nr_none"),$("#arc_nr4").removeClass("arc_nr_none")})})})})})})},methods:{clickImg(t){this.showImg=t}}},v=(c(447),c(1)),component=Object(v.a)(l,function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"lll-zhuangXian-detail"},[n("div",{staticClass:"arc_main"},[n("div",{staticClass:"arc_top1"},[n("div",{staticClass:"arc_top1_1"},[n("span",[t._v(t._s(t.linedata.startLocation+" → "+t.linedata.endLocation))])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"arc_top2"},[t._m(2),t._v(" "),n("div",{staticClass:"arc_top2_2",attrs:{id:"arc_city"}},t._l(t.lineCitys,function(r,c){return c<14?n("a",{key:c,attrs:{href:""}},[n("span",[t._v(t._s(0===c?"直达"+r.name.substring(0,2):r.name.substring(0,2)))])]):t._e()}),0),t._v(" "),t.lineCitys.length>14?n("div",{staticClass:"arc_top2_3"},[t._m(3)]):t._e(),t._v(" "),n("div",{staticClass:"city_box",attrs:{id:"city_box"}})]),t._v(" "),n("div",{staticClass:"arc_main1"},[n("div",{staticClass:"arc_left"},[n("div",{staticClass:"arc_left_1"},[t.linedata.rangeLogo?n("img",{attrs:{src:t.linedata.rangeLogo.split(",")[t.showImg]}}):n("img",{attrs:{src:"/static/images/pic/bg"+t.linedata.num+".png",alt:""}})]),t._v(" "),n("div",{staticClass:"arc_left_2"},[n("a",{attrs:{href:"javascript:void(0)"}},[t.linedata.rangeLogo?n("img",{attrs:{src:t.linedata.rangeLogo.split(",")[0]},on:{click:function(r){return t.clickImg(0)}}}):t._e(),n("img",{attrs:{src:"/static/images/pic/bg"+t.linedata.num+".png"},on:{click:function(r){return t.clickImg(0)}}})]),t._v(" "),n("a",{attrs:{href:"javascript:void(0)"}},[t.linedata.rangeLogo?n("img",{attrs:{src:t.linedata.rangeLogo.split(",")[1]},on:{click:function(r){return t.clickImg(1)}}}):t._e(),n("img",{attrs:{src:"/static/images/pic/bg"+t.linedata.num+".png"},on:{click:function(r){return t.clickImg(1)}}})]),t._v(" "),n("a",{attrs:{href:"javascript:void(0)"}},[t.linedata.rangeLogo?n("img",{attrs:{src:t.linedata.rangeLogo.split(",")[2]},on:{click:function(r){return t.clickImg(2)}}}):n("img",{attrs:{src:"/static/images/pic/bg"+t.linedata.num+".png"},on:{click:function(r){return t.clickImg(2)}}})])]),t._v(" "),t._m(4)]),t._v(" "),n("div",{staticClass:"arc_middle"},[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("div",{staticClass:"arc_middle2"},[n("div",{staticClass:"arc_middle2_1"},[n("p",{staticClass:"p1"},[n("i",[t._v("重货价：")]),n("span",{attrs:{id:"nr0741"}}),n("font",{staticClass:"font1",attrs:{id:"nr073"}}),n("span",{staticClass:"span2",attrs:{id:"nr074"}}),n("font",{staticClass:"font2",attrs:{id:"zh_price"}},[t._v("[阶梯价]")])],1),t._v(" "),n("p",{staticClass:"p2"},[n("i",[t._v("轻货价：")]),n("span",{attrs:{id:"nr0742"}}),n("font",{staticClass:"font1",attrs:{id:"nr075"}}),n("span",{staticClass:"span2",attrs:{id:"nr076"}}),n("font",{staticClass:"font2",attrs:{id:"qh_price"}},[t._v("[阶梯价]")])],1)]),t._v(" "),t._m(8),t._v(" "),n("div",{staticClass:"price_box1",attrs:{id:"js018",onmouseover:"price_block1();",onmouseout:"price_none1();"}},[n("div",{staticClass:"price_box_bt"},[t._v("阶梯价（重货）")]),t._v(" "),n("div",{staticClass:"price_box_item1",staticStyle:{display:"none"}},[n("span",{attrs:{id:"nr0743"}}),n("i",{attrs:{id:"nr0720"}}),n("font",{attrs:{id:"nr0721"}}),n("em",{attrs:{id:"nr07210"}},[t._v("元/吨")])],1)]),t._v(" "),n("div",{staticClass:"price_box2",attrs:{id:"js019",onmouseover:"price_block2();",onmouseout:"price_none2();"}},[n("div",{staticClass:"price_box_bt"},[t._v("阶梯价（轻货）")]),t._v(" "),n("div",{staticClass:"price_box_item2",staticStyle:{display:"none"}},[n("span",{attrs:{id:"nr0744"}}),n("i",{attrs:{id:"nr0730"}}),n("font",{attrs:{id:"nr0731"}}),n("em",{attrs:{id:"nr07310"}},[t._v("元/立方")])],1)])]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12)]),t._v(" "),n("div",{staticClass:"arc_right"},[n("p",{staticClass:"arc_right01"},[n("img",{attrs:{src:c(259)}}),n("span",{attrs:{id:"nr1020"}},[t._v(t._s(t.linedata.publishName))])]),t._v(" "),t._m(13),t._v(" "),n("p",{staticClass:"arc_right03"},[n("span",[t._v("质量")]),n("span",[t._v("时效")]),n("span",[t._v("价格")]),n("br"),t._v(" "),n("font",{attrs:{id:"nr1041"}}),n("font",{attrs:{id:"nr1042"}}),n("font",{attrs:{id:"nr1043"}})],1),t._v(" "),n("p",{staticClass:"arc_right04"},[n("span",{staticClass:"arc_right04_1"},[n("i",[t._v("联系人：")]),n("font",{attrs:{id:"nr1021"}})],1),t._v(" "),n("span",[n("i",[t._v("手机：")]),n("font",{attrs:{id:"nr1022"}})],1),t._v(" "),t._m(14),t._v(" "),n("span",[n("i",[t._v("地址：")]),n("font",{attrs:{id:"nr10232"}})],1)]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17)])]),t._v(" "),n("div",{staticClass:"arc_main2"},[n("div",{staticClass:"arc_left2"},[t._m(18),t._v(" "),n("div",{staticClass:"arc_left2_nr",attrs:{id:"js013"}},[n("div",{attrs:{id:"tag07eb8b4d92e4d69bb7b5d30cf3bb012e"}},[n("div",{staticClass:"tjwd_list",staticStyle:{display:"none"}},[t._m(19),t._v(" "),t._m(20),t._v(" "),n("p",{staticClass:"p03"},[n("i",[t._v("联系人：")]),n("span",{attrs:{id:"nr1013"}},[t._v("李明")]),t._v("   "),n("i",[t._v("手机号：")]),n("font",{attrs:{id:"nr1014"}},[t._v("13416233760")])],1),t._v(" "),t._m(21),t._v(" "),t._m(22)])])])]),t._v(" "),n("div",{staticClass:"arc_right2"},[n("div",{staticClass:"arc_right2_bt"},[n("span",{staticClass:"arc_span arc_active",attrs:{id:"arc_bt1"}},[t._v("增值服务")]),t._v(" "),n("span",{staticClass:"arc_span",attrs:{id:"arc_bt2"}},[t._v("专线介绍")]),t._v(" "),n("span",{staticClass:"arc_span",attrs:{id:"arc_bt3"}},[t._v("累计评价 "),n("font",{staticStyle:{color:"#eb434d"},attrs:{id:"nr1048"}})],1),t._v(" "),n("span",{staticClass:"arc_span",attrs:{id:"arc_bt4"}},[t._v("专享服务")])]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),n("div",{staticClass:"arc_nr arc_nr_none",attrs:{id:"arc_nr3"}},[n("div",{staticClass:"arc_pjnr_bt"},[t._m(25),t._v(" "),n("div",{staticClass:"arc_pjnr_bt2"},[n("input",{attrs:{value:"我要评价",onclick:"$('.pj_box').show()"}}),t._v(" "),n("div",{staticClass:"pj_box"},[t._m(26),t._v(" "),n("div",{staticClass:"pj_box2"},[t._m(27),t._v(" "),n("div",{staticClass:"pj_box2_2"},[n("p",{staticClass:"pj_box2_2_p1"},[t._v("物流公司需要您的建议哦！")]),t._v(" "),n("P",{staticClass:"pj_box2_2_p2"},[t._v("认真填写评价平台会给你推荐最优质的物流专线")])],1)]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),n("div",{staticClass:"pj_box3 "},[n("div",{staticClass:"pj_box3_left"},[n("font",[t._v("综合评价")]),t._v("：")],1),t._v(" "),t._m(31)]),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35)])])]),t._v(" "),n("div",{staticClass:"arc_pjnr_nr",attrs:{id:"js014"}},[n("p",{staticClass:"arc_prinr_p",staticStyle:{display:"none"}},[t._v("dfdfdfsdfdfdf")]),t._v(" "),n("div",{staticClass:"arc_pjnr_item",staticStyle:{display:"none"}},[n("div",{staticClass:"arc_pjnr_item_left"},[n("p",{staticClass:"item_p1"},[n("font",{attrs:{id:"nr1031"}},[t._v("134****1323")])],1),t._v(" "),t._m(36)]),t._v(" "),n("div",{staticClass:"arc_pjnr_item_right"},[t._m(37),t._v(" "),t._m(38),t._v(" "),n("p",{staticClass:"item_p5",staticStyle:{display:"none"},attrs:{id:"item_p5"}},[n("font",{attrs:{id:"nr10340"}},[t._v("[回复]：")]),n("font",{attrs:{id:"nr1034"}})],1)])])]),t._v(" "),t._m(39)]),t._v(" "),t._m(40)])])]),t._v(" "),n("div",{staticClass:"arc_bottom",attrs:{id:"js017"}},[t._m(41),t._v(" "),n("div",{staticClass:"tj_list",staticStyle:{display:"none"}},[t._m(42),t._v(" "),t._m(43),t._v(" "),n("div",{staticClass:"p p03"},[n("ul",[t._m(44),t._v(" "),t._m(45),t._v(" "),n("li",{staticClass:"tj_left"},[n("i",[t._v("重货：")]),n("font",{attrs:{id:"tj024"}}),n("span",[t._v("元/吨")])],1),t._v(" "),n("li",{staticClass:"tj_right"},[n("i",[t._v("轻货：")]),n("font",{attrs:{id:"tj025"}}),n("span",[t._v("元/方")])],1)])]),t._v(" "),n("div",{staticClass:"p p05"}),t._v(" "),t._m(46)])])])},n,!1,null,null,null);r.default=component.exports}}]);