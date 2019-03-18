exports.ids=[77],exports.modules={104:function(r,t,n){"use strict";n.d(t,"b",function(){return e}),n.d(t,"a",function(){return l}),n.d(t,"d",function(){return _}),n.d(t,"c",function(){return o});let c=["天津市","北京市","上海市","重庆市"],d=[{p:"北京市",c:"北京市"},{p:"天津市",c:"天津市"},{p:"黑龙江省",c:"哈尔滨市"},{p:"江苏省",c:"南京市"},{p:"江苏省",c:"无锡市"},{p:"江苏省",c:"苏州市"},{p:"浙江省",c:"杭州市"},{p:"浙江省",c:"宁波市"},{p:"山东省",c:"青岛市"},{p:"河南省",c:"郑州市"},{p:"湖北省",c:"武汉市"},{p:"湖南省",c:"长沙市"},{p:"广东省",c:"广州市"},{p:"广东省",c:"深圳市"},{p:"重庆市",c:"重庆市"},{p:"四川省",c:"成都市"}];async function e(r,t){const n=await r.get("../js/province.json");for(let i=0;i<n.data.length;i++){if(t===n.data[i].name)return n.data[i].code}}async function l(r,code,t){return await r.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+code)}function _(time,r){if(0===arguments.length)return null;if(!time)return"";const t=r||"{y}-{m}-{d} {h}:{i}:{s}";let n;if("object"==typeof time?n=time:(time="number"==typeof time?time:(""+time).trim(),/^\d{10}$/.test(time)?time=1e3*parseInt(time):/(\d){4}-(\d){2}-(\d){2}\s+(\d){2}:(\d){2}:(\d){2}/.test(time)&&(time=time.replace(/-/g,"/")),n=new Date(time)),-1!==n.toString().indexOf("Invalid"))return time;const c={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return t.replace(/{(y|m|d|h|i|s|a)+}/g,(r,t)=>{let n=c[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(r.length>0&&n<10&&(n="0"+n),n||0)})}function o(param={}){let data={startProvince:param.startProvince||"",startCity:param.startCity||"",endProvince:param.endProvince||"",endCity:param.endCity||""};if(data.startProvince&&data.endProvince&&data.startCity&&data.endCity&&data.startProvince===data.endProvince&&data.startCity===data.endCity)if(r=data.startCity,-1!==c.indexOf(r)){let r=d.filter(r=>data.endCity!==r.c),t=r[Math.ceil(r.length*Math.random())];data.endProvince=t.p,data.endCity=t.c}else data.endCity="";var r;return data}},107:function(r,t,n){r.exports=n.p+"img/d7cb4dd.gif"},108:function(r,t,n){r.exports=n.p+"img/6ad6f1a.gif"},175:function(r,t){r.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVQ4T6XTIU4DURDG8d8KFBdAVeLgAFUgGgI1IEhaDoYsNa1BQYLCVJEQDOEKIDhGM2RJti9vd9N9I9+b75+Zb2YqhVEV6qWAI/z2QHdymoARvjDBRwtkjBec4jty0gpusMAUbwnkDE+4qyF/3zkPQrzGZQMS4mfMm+I2QLwHZIVrHOARt3hNW+uaQngRwogAbXK+dAH+qxgECDOXtQ+H+7YQ4gdcDTFxhntcZHahd4zHeMc5PnsW6QQ/uTEWrfKguyq+xi2mJCYR1JnglAAAAABJRU5ErkJggg=="},176:function(r,t,n){r.exports=n.p+"img/5100aba.png"},177:function(r,t,n){var content=n(359);"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);var c=n(3).default;r.exports.__inject__=function(r){c("51888910",content,!0,r)}},190:function(r,t,n){r.exports=n.p+"img/098551f.png"},330:function(r,t,n){r.exports=n.p+"img/3f8d318.png"},331:function(r,t,n){r.exports=n.p+"img/7c61f13.png"},332:function(r,t){r.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA0ElEQVQ4T82TyRHCMAxFv4uAJqAHEpqgHEI30AQJPUATUISZjy28LwcO6OIZy3ravpU+Q+MHpv4ctNoBr1vYaOdd2No4G8g8mpOQ/QJcB5cgfmPTpjPKwbaTgdN3n9KqAeSHzUrWA0BAzS7q6+3f2kEDXmDMd6DN0VWQC+gGSQoJ4Nkyzutx+rxKWytl5r2/vShJH0g2yQV4VfisOkjm9lyctgQaySAE+QKU1ed0w3eirUSQ4mSgQFhJzei3X6qsI7bVMrux/NZawQV/v7IbCd6EPHu/Fhze+wAAAABJRU5ErkJggg=="},333:function(r,t){r.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA40lEQVQ4T2N0mfLtPwMVAOPQMCjWlIVh8ek/JHkYw2t6UkwMcWYsDCUbfjHszubEaZjr1O8ochgGgVwDAiAXgQxC1wCSwyaOYRCyIrINArkmzowV7gqQQYtO/cbwHrIamCSKi2BhAvMOskEgzTBD8RoECxtsinCFC7JTcYYRvhiDGYAcEXgDG6QBlhz0pZkZLj79C04W2ABeg0CG9AaygwMfFoM9AWwMi079Ybj07B/+dATTAIvB4vU/wZpg4jAXXnz6DyX1Y3URSDModSPbjJ6mQAYiuwprysaWzwjlv8FXjAAAU16tfRu4zEAAAAAASUVORK5CYII="},334:function(r,t,n){r.exports=n.p+"img/c620741.png"},335:function(r,t){r.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA8UlEQVQ4T2N0mfLtPwMVAOPQMEhPionh0rN/cA/HmrIwLD79B28AYPXa7mxOhuL1P+GGgfiuU78z9ASwMVx8+g+roRgGgVzTG8gO1ggDMINAfJDr4sxYUSwCiWMYhM1WZINAmtC9jmEQzDWLTv1GCQ+QC7ABkDpY2KG4COQafWlmBnSD9KWZcIYNzAK4QSC/wzSAJJFjCSSHLobuQowwwqYJ5OU4MxaGkg2/cCYBogwC6UYPcLJcBIt2ZO+BXA5KU7CES7SLYDEKS6joiZZog2DpB5RYQbEKShLIiRZrygZpQs5ryOEBchksdpHVDL5iBAASe7N9/bK89gAAAABJRU5ErkJggg=="},336:function(r,t){r.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAy0lEQVQ4T2P0XCf+n4EKgHGEGBStUcIQrVlCdIh5rZeAq8UbRtsCXzDAFIMsAYGlN3qwWoRhEEgzMWDp9R4UQ7EaBHMFLhdhcx3tXASyDVc4wLysK2IFZl5+cwx3YFMljGB+JyawQWouvTkGdxVKGCEbBHI+zOmgtAWKJWQxvAaBJEGKYQZWHAkCOw4We7AEix71IDUoLuqwWcegJ2rFUH4YYoAeNFBBLoIlCZhFMHUwV6MYhOx0EBtmEHJYIMcc3lgjNqDR1VGtPAIA4DGK/ekLUL4AAAAASUVORK5CYII="},337:function(r,t){r.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA8UlEQVQ4T9VUuw3CMBS0ATEKFDAKNCDBBtCzAGIBekYIElUYhRRkkyCSoHviLOclliko4DXx5/n87t45ttgsavOFsP8BZEcT05+tzPO4F9IYI8rrWb7Yr/OsIUgntcHuIIk8SCABna9Ndb+5S4jWAgJIbzw1j+3SVYMKsFamSbCqBhBAEATiHGt+hZgPTxd3mdD1u0buOgnUfF0wRlDDFhD5aiBfcOZQv6BGosf7xpBPqzyLd03T0GCkGK1IeyY2D1KLHdT7HwNBeHF1mhhoQ/2i1PwOwcU0ISqhq7WnWu2nq/EEupL5zgCKivz39nu/kReTbLpzpxEfqAAAAABJRU5ErkJggg=="},338:function(r,t){r.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA3UlEQVQ4T9WT4Q2CMBCFjyF0Cd1BcAnHEbfRJQR30CV0CMxnfVB6VUPiH5qQ0HL97r1XWnRH6+wPo5gBaLExW5Zmt4M3vNrn183MW6uaALi3A4h34Dzp+uPyqhuDULNtza61V7Ou/TpQBxLkXAYIG5sqvGNJSgR8A9TRK1IBYAYKBQGs9a+g2BAqyASbbFJ2UpmY92EDQD4q4mDZqMCBJ6c6gOKgKQKYG/pGM/LMnhob0wyYx8FjUXajRvkrsutG3Uzz9DR/glIVUvnh6P0PSecp41T01XO4/VOsRbVPD4eHv/Eipy8AAAAASUVORK5CYII="},339:function(r,t){r.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABAElEQVQ4T9VUsQ3CMBB0dgDBCFCQASIYADrSZo1IMAJIWSOt6VgAlAFCASMgkR1Ahzjr33FEAQV8E+tt39/dfxzN7eBuvhDRfwBlo9zUTWVOTaVE75dXs9gNg0Z0Spv0EgUEcER5Kd4DoWIoVofUbGfW1DfNUrJuMSITfBGQt5lat8aCe2BH+QoIByCB9CmHgH5eynRABFkfU6dOspIFQqa3pOEQPKEk0icoqgBUFkQu2DV4EveTp7nygvTK714QCNXZJQkEJtjz2QQZEQTyaDYuSnDZLRqqGOFiNs6dR2x1jG6+8siBbXku1HC2uuZXkyMhfxn41TlHn7wmv/eMPACZUL392ckzeQAAAABJRU5ErkJggg=="},340:function(r,t,n){r.exports=n.p+"img/f6d99e6.png"},341:function(r,t,n){r.exports=n.p+"img/6a0e0d9.png"},342:function(r,t,n){r.exports=n.p+"img/e29f55e.png"},343:function(r,t,n){r.exports=n.p+"img/0531793.png"},344:function(r,t,n){r.exports=n.p+"img/008f853.png"},345:function(r,t,n){r.exports=n.p+"img/00fcf83.png"},346:function(r,t,n){r.exports=n.p+"img/e5c4019.png"},347:function(r,t,n){r.exports=n.p+"img/c0804bf.png"},348:function(r,t,n){r.exports=n.p+"img/c0e1ef6.png"},349:function(r,t,n){r.exports=n.p+"img/ddbdc45.png"},350:function(r,t,n){r.exports=n.p+"img/402359c.png"},351:function(r,t,n){r.exports=n.p+"img/df6df8d.png"},352:function(r,t){r.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAPCAYAAAC7paJZAAABj0lEQVRIie2Xv0sCYRjHv6+GBRmiGBpogfYDzcXFoUHBRRyECAdB6F8ooiknlyAa+wdaGpodGkPXcJCSkBCqWSz8dSTq0713RRLeZS3doR94uXvueb/3Pb7cPXCMRDDhGP77AbSAagiUy4GWzMDqApA9ki/yI6+9VqmvJ40SM2oBsOwesJsGVgLAzTWw6QRCW8DBMfB0J/X5t8QSCc1r1GBKM6HOGGzpONBlwPwssLwGmO1AqwY8PwDtN8BEqF9cwfZxCy1rVCEFHnlrO0wUDhBFg0Q7UaLL868NZye60qihGMK9aNTjZn4H0Yad6DQrNzIZeXGSSaJYTBcaNRQ/ByoUUI5EsC6em/xWoFzHIJUCjEZuD2axgKpVoNkUX8suDMWipjV/mgnDQSzOAQ6B0IvH5Ua/D3Q6IEGQFq9NlYrmNb+eCZ8M8nm6Fbc1DvelWgiFqBMMUtvno5bHQ023W1eaUfwYwiizhtdLry4XvTidutR8Z6wQhs2oVJLq2hgmWtYMozoTJoXpvwOmIUi8A78dgeFA0JqBAAAAAElFTkSuQmCC"},353:function(r,t,n){r.exports=n.p+"img/59c08da.png"},354:function(r,t,n){r.exports=n.p+"img/d5fe8a8.png"},355:function(r,t,n){r.exports=n.p+"img/d1f3da1.png"},356:function(r,t,n){r.exports=n.p+"img/24c44a2.png"},357:function(r,t,n){r.exports=n.p+"img/968614a.png"},358:function(r,t,n){"use strict";n.r(t);var c=n(177),d=n.n(c);for(var e in c)"default"!==e&&function(r){n.d(t,r,function(){return c[r]})}(e);t.default=d.a},359:function(r,t,n){(r.exports=n(2)(!1)).push([r.i,'.lll-zhuangXian-detail .clearfix:after{content:" ";display:table}.lll-zhuangXian-detail .clearfix:before{content:"";display:table}.lll-zhuangXian-detail .clearfix:after{clear:both}.lll-zhuangXian-detail .arc_prinr_p{padding:20px 0 0 15px;font-size:14px}',""])},399:function(r,t,n){"use strict";n.r(t);var c=n(104),d={name:"Index",head:{link:[{rel:"stylesheet",href:"/line/css/article_wlzx.css"},{rel:"stylesheet",href:"/line/css/price.css"},{rel:"stylesheet",href:"/gongsi/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/WTMap.css"}]},layout:"subLayout",data:()=>({showImg:0,pages:0,currentPage:1,linedata:{},lineCitys:[]}),async asyncData({$axios:r,app:t,query:n}){let d,e,l="";l="http://localhost:3000";let _=await r.get(l+`/api/28-web/range/${n.id}`);if(console.log(`/api/28-web/range/${n.id}`,"res",_.data,_.data.data.endLocation),200===_.data.status){d=await Object(c.b)(r,_.data.data.endProvince),e=await Object(c.a)(r,d,_.data.data.startCity);let t=_.data.data,n=(t.id||"").split(""),l=0;return n.forEach(r=>{l+=r.charCodeAt(0)||0}),t.num=l%30+1,console.log(_.data.data,"res.data.data.num"),{linedata:t,lineCitys:e.data.data}}},mounted(){seajs.use(["../js/city.js","../js/calculator.js"],function(){seajs.use(["../js/city-picker.js"],function(){seajs.use(["/line/js/arc_wlzx.js"],function(){seajs.use(["../js/collection.js"],function(){seajs.use(["../js/gaodemap2.js"],function(){$(".arc_top2_3").mouseover(function(){$(".city_box").css("display","block")}),$(".city_box").mouseover(function(){$(".city_box").css("display","block")}),$(".city_box").mouseover(function(){$(".city_box").css("display","none")}),$("#zh_price").mouseover(function(){$(".price_box1").css("display","block")}),$("#zh_price").mouseout(function(){$(".price_box1").css("display","none")}),$("#qh_price").mouseover(function(){$(".price_box2").css("display","block")}),$("#qh_price").mouseout(function(){$(".price_box2").css("display","none")}),$("#arc_bt1").click(function(){$(".arc_span").removeClass("arc_active"),$(this).addClass("arc_active"),$(".arc_nr").addClass("arc_nr_none"),$("#arc_nr1").removeClass("arc_nr_none")}),$("#arc_bt2").click(function(){$(".arc_span").removeClass("arc_active"),$(this).addClass("arc_active"),$(".arc_nr").addClass("arc_nr_none"),$("#arc_nr2").removeClass("arc_nr_none")}),$("#arc_bt3").click(function(){$(".arc_span").removeClass("arc_active"),$(this).addClass("arc_active"),$(".arc_nr").addClass("arc_nr_none"),$("#arc_nr3").removeClass("arc_nr_none")}),$("#arc_bt4").click(function(){$(".arc_span").removeClass("arc_active"),$(this).addClass("arc_active"),$(".arc_nr").addClass("arc_nr_none"),$("#arc_nr4").removeClass("arc_nr_none")})})})})})})},methods:{clickImg(r){this.showImg=r}}},e=n(0);var component=Object(e.a)(d,function(){var r=this,t=r.$createElement,c=r._self._c||t;return c("div",{staticClass:"lll-zhuangXian-detail"},[r._ssrNode('<div class="arc_main">',"</div>",[r._ssrNode('<div class="arc_top1"><div class="arc_top1_1"><span>'+r._ssrEscape(r._s(r.linedata.startLocation+" → "+r.linedata.endLocation))+'</span></div> <div class="arc_top1_3"><a id="search_huo" target="_blank"><input value="搜全网" class="arc_input3"></a></div> <div class="arc_top1_2"><select id="search_type"><option name="zx">找专线</option> <option name="che">找车源</option> <option name="huo">找货源</option></select> <input wtmap placeholder="出发地" class="arc_input1"> <span>→</span> <input wtmap placeholder="到达地" class="arc_input2"></div></div> <div class="arc_top2"><div class="arc_top2_1"><a href="/"><span>首页</span></a></div> <div id="arc_city" class="arc_top2_2">'+r._ssrList(r.lineCitys,function(t,n){return n<14?"<a href><span>"+r._ssrEscape(r._s(0===n?"直达"+t.name.substring(0,2):t.name.substring(0,2)))+"</span></a>":"\x3c!----\x3e"})+"</div> "+(r.lineCitys.length>14?'<div class="arc_top2_3"><a href="javascript:void(0)"><span>更多+</span></a></div>':"\x3c!----\x3e")+' <div id="city_box" class="city_box"></div></div> '),r._ssrNode('<div class="arc_main1">',"</div>",[r._ssrNode('<div class="arc_left"><div class="arc_left_1">'+(r.linedata.rangeLogo?"<img"+r._ssrAttr("src",r.linedata.rangeLogo.split(",")[r.showImg])+">":"<img"+r._ssrAttr("src","/static/images/pic/bg"+r.linedata.num+".png")+" alt>")+'</div> <div class="arc_left_2"><a href="javascript:void(0)">'+(r.linedata.rangeLogo?"<img"+r._ssrAttr("src",r.linedata.rangeLogo.split(",")[0])+">":"\x3c!----\x3e")+"<img"+r._ssrAttr("src","/static/images/pic/bg"+r.linedata.num+".png")+'></a> <a href="javascript:void(0)">'+(r.linedata.rangeLogo?"<img"+r._ssrAttr("src",r.linedata.rangeLogo.split(",")[1])+">":"\x3c!----\x3e")+"<img"+r._ssrAttr("src","/static/images/pic/bg"+r.linedata.num+".png")+'></a> <a href="javascript:void(0)">'+(r.linedata.rangeLogo?"<img"+r._ssrAttr("src",r.linedata.rangeLogo.split(",")[2])+">":"<img"+r._ssrAttr("src","/static/images/pic/bg"+r.linedata.num+".png")+">")+'</a></div> <div class="arc_left_3"><a href="javascript:void(0)"><img'+r._ssrAttr("src",n(330))+'> <span id="collection_zx">收藏专线</span><i> ( <em class="my_zx_num"></em>人气 )</i></a></div></div> '),r._ssrNode('<div class="arc_middle">',"</div>",[r._ssrNode('<div class="collection_zx"><div onclick="$(\'.collection_zx\').hide()" class="bt_close"><img'+r._ssrAttr("src",n(175))+'></div> <div class="collection_zx_nr"><img'+r._ssrAttr("src",n(331))+'> <span>成功加入</span><a id="collection_url" target="_blank" href="#">收藏夹</a></div></div> <div class="pj_price_box"><div class="pj_price_box1"><div onclick="$(\'.pj_price_box\').hide()" class="bt_close"><img'+r._ssrAttr("src",n(175))+'></div></div> <div class="pj_price_box2">试算价格</div> <div class="item-form plr20"><h2 class="form-tit">货物重量/体积计算</h2> <div class="item-cell"><label><span class="r-point">*</span>总重量：</label> <div class="item-primary w190"><input id="goodsweight" type="text" placeholder class="item-input"></div> <span class="unit">千克</span></div> <div class="item-cell"><label><span class="r-point">*</span>总体积：</label> <div class="item-primary w190"><input id="goodsvolume" type="text" placeholder class="item-input"></div> <span class="unit">立方米</span></div> <div class="item-cell c-red calculator">\n              辅助计算器\n              <i class="icon i-down"></i></div> <p class="txt mb20 pl20 c-red">注：我们的工作人员会在接货时重新称重，此估算仅供参考。</p> <div id="_cal_div" class="cal-all cl" style="display: none;"><div class="cal-box"><div class="cal-panel"><ul class="cal-head"><li><label>重量：</label> <div class="cal-primary"><span id="_cal_weight" name="_cal_weight" class="num"></span>kg\n                      </div></li> <li><label>体积：</label> <div class="cal-primary"><span id="_cal_volume" name="_cal_volume" class="num"></span>m3\n                      </div></li> <li><label>件数：</label> <div class="cal-primary"><span id="_cal_package" name="_cal_package" class="num"></span></div></li></ul> <div class="cal-hs fr"><a href="javascript:;" class="calstop">收起</a> <a href="javascript:;" class="caldel">删除</a></div> <div class="cal-body"><div class="cal-cell"><label>单位重量</label> <div class="cal-primary"><input id="_unit_weight" type="text"> <span>kg</span></div></div> <div class="cal-cell"><label>单位体积</label> <div id="_volume" class="cal-primary"><input id="_unit_length" type="text" onkeyup="Calculator._volume_cal(this)" placeholder="长(m)"> <span>x</span> <input id="_unit_width" type="text" onkeyup="Calculator._volume_cal(this)" placeholder="宽(m)"> <span>x</span> <input id="_unit_higth" type="text" onkeyup="Calculator._volume_cal(this)" placeholder="高(m)"> <span>=</span> <span id="_unit_volume" class="cal-bulk"></span> <span>立方米</span></div></div> <div class="cal-cell"><label>件数</label> <div class="cal-primary"><input id="_total_package" type="text"> <a href="javascript:;" onclick="Calculator._confirm_cal(this)" class="btn btn-orange btn-cal">确认</a></div></div></div></div></div> <div class="caladd-box fr"><a href="javascript:;" class="btn btn-orange caladd">添加</a></div></div> <h2 class="form-tit">费用合计</h2> <div class="item-cell item-block"><label><span class="r-point">*</span>预计费用：</label> <div id="_totalFee_div"><p class="loose-txt"><span id="_totalFee" class="price-big mr10">0.00</span><span class="c-red">元</span></p></div></div></div></div> <div class="arc_middle1"><span id="nr072"></span></div> '),r._ssrNode('<div class="arc_middle2">',"</div>",[r._ssrNode('<div class="arc_middle2_1">',"</div>",[r._ssrNode('<p class="p1">',"</p>",[r._ssrNode('<i>重货价：</i><span id="nr0741"></span>'),c("font",{staticClass:"font1",attrs:{id:"nr073"}}),r._ssrNode('<span id="nr074" class="span2"></span>'),c("font",{staticClass:"font2",attrs:{id:"zh_price"}},[r._v("[阶梯价]")])],2),r._ssrNode(" "),r._ssrNode('<p class="p2">',"</p>",[r._ssrNode('<i>轻货价：</i><span id="nr0742"></span>'),c("font",{staticClass:"font1",attrs:{id:"nr075"}}),r._ssrNode('<span id="nr076" class="span2"></span>'),c("font",{staticClass:"font2",attrs:{id:"qh_price"}},[r._v("[阶梯价]")])],2)],2),r._ssrNode(' <div class="arc_middle2_2"><div class="num1"><span id="nr0746"></span></div> <div class="num2"><a href="javascript:void(0)"><span id="nr0745"></span></a></div> <div class="num3"><span>下单量</span></div> <div class="num4"><a href="javascript:void(0)"><span>累计评价</span></a></div></div> '),r._ssrNode('<div id="js018" onmouseover="price_block1();" onmouseout="price_none1();" class="price_box1">',"</div>",[r._ssrNode('<div class="price_box_bt">阶梯价（重货）</div> '),r._ssrNode('<div class="price_box_item1" style="display: none;">',"</div>",[r._ssrNode('<span id="nr0743"></span><i id="nr0720"></i>'),c("font",{attrs:{id:"nr0721"}}),r._ssrNode('<em id="nr07210">元/吨</em>')],2)],2),r._ssrNode(" "),r._ssrNode('<div id="js019" onmouseover="price_block2();" onmouseout="price_none2();" class="price_box2">',"</div>",[r._ssrNode('<div class="price_box_bt">阶梯价（轻货）</div> '),r._ssrNode('<div class="price_box_item2" style="display: none;">',"</div>",[r._ssrNode('<span id="nr0744"></span><i id="nr0730"></i>'),c("font",{attrs:{id:"nr0731"}}),r._ssrNode('<em id="nr07310">元/立方</em>')],2)],2)],2),r._ssrNode(' <div class="arc_middle3"><div class="arc_m3"><i>运输时效：</i><span id="nr077"></span></div> <div class="arc_m3"><i>发货频次：</i><span id="nr078"></span></div> <div class="arc_m3"><i>最低一票价格：</i><span id="nr079"></span></div></div> <div class="arc_middle4"><div class="arc_m4_1"><div><span>出发地</span></div> <div><i>联系人：</i><span id="nr0710"></span></div> <div><i>手机：</i><span id="nr0711"></span></div></div> <div class="arc_m4_2"><div><span>到达地</span></div> <div><i>联系人：</i><span id="nr0712"></span></div> <div><i>手机：</i><span id="nr0713"></span></div></div></div> <div class="arc_middle5"><div class="arc_m5_1"><span>联系我时，请说明是从28快运上看到此信息，谢谢！</span></div> <div class="arc_m5_2"><div id="order_price" onclick="$(\'.pj_price_box\').show()" class="arc_m5_2_1"><a href="javascript:void(0)"><span>试算价格</span></a></div> <div id="order_arc" class="arc_m5_2_2"><a id="nr_order" target="_blank" href="javascript:void(0)"><span>快速下单</span></a></div></div></div> <div class="arc_middle6"><div class="arc_m6_1"><i>增值服务：</i></div> <div class="arc_m6_2"><div class="item_zzfw1"><img'+r._ssrAttr("src",n(332))+'><span>送货上门</span></div> <div class="item_zzfw2"><img'+r._ssrAttr("src",n(333))+'><span>保价运输</span></div> <div class="item_zzfw3"><img'+r._ssrAttr("src",n(334))+'><span>运费到付</span></div> <div class="item_zzfw4"><img'+r._ssrAttr("src",n(335))+'><span>代收货款</span></div> <div class="item_zzfw5"><img'+r._ssrAttr("src",n(336))+'><span>上门提货</span></div> <div class="item_zzfw6"><img'+r._ssrAttr("src",n(337))+'><span>开发票</span></div> <div class="item_zzfw7"><img'+r._ssrAttr("src",n(338))+'><span>签单回收</span></div> <div class="item_zzfw8"><img'+r._ssrAttr("src",n(339))+"><span>时效保障</span></div></div></div>")],2),r._ssrNode(" "),r._ssrNode('<div class="arc_right">',"</div>",[r._ssrNode('<p class="arc_right01"><img'+r._ssrAttr("src",n(176))+'><span id="nr1020">'+r._ssrEscape(r._s(r.linedata.publishName))+'</span></p> <p class="arc_right02"><i>信誉：</i> <img'+r._ssrAttr("src",n(108))+' class="xy_zuan"> <img'+r._ssrAttr("src",n(108))+' class="xy_zuan"> <img'+r._ssrAttr("src",n(108))+' class="xy_zuan"> <img'+r._ssrAttr("src",n(108))+' class="xy_zuan"> <img'+r._ssrAttr("src",n(108))+' class="xy_zuan"> <img'+r._ssrAttr("src",n(107))+' class="xy_guan"> <img'+r._ssrAttr("src",n(107))+' class="xy_guan"> <img'+r._ssrAttr("src",n(107))+' class="xy_guan"> <img'+r._ssrAttr("src",n(107))+' class="xy_guan"> <img'+r._ssrAttr("src",n(107))+' class="xy_guan"></p> '),r._ssrNode('<p class="arc_right03">',"</p>",[r._ssrNode("<span>质量</span><span>时效</span><span>价格</span><br> "),c("font",{attrs:{id:"nr1041"}}),c("font",{attrs:{id:"nr1042"}}),c("font",{attrs:{id:"nr1043"}})],2),r._ssrNode(" "),r._ssrNode('<p class="arc_right04">',"</p>",[r._ssrNode('<span class="arc_right04_1">',"</span>",[r._ssrNode("<i>联系人：</i>"),c("font",{attrs:{id:"nr1021"}})],2),r._ssrNode(" "),r._ssrNode("<span>","</span>",[r._ssrNode("<i>手机：</i>"),c("font",{attrs:{id:"nr1022"}})],2),r._ssrNode(' <span><i>Q Q：</i><a id="nr1023" target="_blank"><input id="qq" value="QQ交谈"></a></span> '),r._ssrNode("<span>","</span>",[r._ssrNode("<i>地址：</i>"),c("font",{attrs:{id:"nr10232"}})],2)],2),r._ssrNode(' <p class="arc_right05"><a id="nr1024" target="_blank"><input id="arc_right05_1" readonly="readonly" value="进入官网"></a> <a><input id="collection_wlgs" readonly="readonly" value="收藏"></a></p> <p class="arc_right06"><span>相关认证</span></p> <p class="arc_right07"><img id="right_xinyong"'+r._ssrAttr("src",n(340))+'> <img id="right_shiming"'+r._ssrAttr("src",n(341))+'> <img id="right_baozhengjin"'+r._ssrAttr("src",n(190))+'><span id="nr1037">1000元</span></p>')],2)],2),r._ssrNode(" "),r._ssrNode('<div class="arc_main2">',"</div>",[r._ssrNode('<div class="arc_left2">',"</div>",[r._ssrNode('<div class="arc_left2_bt"><span>公司网点分布</span><i><a id="wd_more" target="_blank">更多</a></i></div> '),r._ssrNode('<div id="js013" class="arc_left2_nr">',"</div>",[r._ssrNode('<div id="tag07eb8b4d92e4d69bb7b5d30cf3bb012e">',"</div>",[r._ssrNode('<div class="tjwd_list" style="display: none;">',"</div>",[r._ssrNode('<p class="p01"><span id="nr1011">广州网点</span></p> <p class="p02"><img'+r._ssrAttr("src",n(176))+'> \n                <span><a id="nr1012" target="_blank" href="#"></a></span></p> '),r._ssrNode('<p class="p03">',"</p>",[r._ssrNode('<i>联系人：</i><span id="nr1013">李明</span>   <i>手机号：</i>'),c("font",{attrs:{id:"nr1014"}},[r._v("13416233760")])],2),r._ssrNode(' <p class="p04"><i>所在地：</i><span id="nr1015">浙江省 杭州市 下城区</span></p> <p class="p05"><img'+r._ssrAttr("src",n(342))+'> <span id="nr1016">金黄大道永福路博洋物流园10号</span></p>')],2)])])],2),r._ssrNode(" "),r._ssrNode('<div class="arc_right2">',"</div>",[r._ssrNode('<div class="arc_right2_bt">',"</div>",[r._ssrNode('<span id="arc_bt1" class="arc_span arc_active">增值服务</span> <span id="arc_bt2" class="arc_span">专线介绍</span> '),r._ssrNode('<span id="arc_bt3" class="arc_span">',"</span>",[r._ssrNode("累计评价 "),c("font",{staticStyle:{color:"#eb434d"},attrs:{id:"nr1048"}})],2),r._ssrNode(' <span id="arc_bt4" class="arc_span">专享服务</span>')],2),r._ssrNode(' <div id="arc_nr1" class="arc_nr "><div class="arc_nr1"><div class="arc_fw item_fw1"><div class="fw_img"><img'+r._ssrAttr("src",n(343))+'></div> <div class="fw_nr"><p class="fw_nr1"><span>送货上门</span></p> <p class="fw_nr2"><i>收取客户货物后，将货物送到指定收件对象的服务。</i></p></div></div> <div class="arc_fw item_fw2"><div class="fw_img"><img'+r._ssrAttr("src",n(344))+'></div> <div class="fw_nr"><p class="fw_nr1"><span>保价运输</span></p> <p class="fw_nr2"><i>保价运输是我司与您共同确定的以托运人申明货物价值为基础的一种特殊运输方式，您向我司声明其托运货物的实际价值，按保价运输的货物，托运人除缴纳运输费用外，按照规定缴纳一定的保价费用，若货物在运输过程中出险，我司将按照托运人的声明价值赔偿一定损失。</i></p></div></div> <div class="arc_fw item_fw3"><div class="fw_img"><img'+r._ssrAttr("src",n(345))+'></div> <div class="fw_nr"><p class="fw_nr1"><span>运费到付</span></p> <p class="fw_nr2"><i>为您提供派送末端支付运费服务，当货物到达收货人时由收货人支付运费。</i></p></div></div> <div class="arc_fw item_fw4"><div class="fw_img"><img'+r._ssrAttr("src",n(346))+'></div> <div class="fw_nr"><p class="fw_nr1"><span>代收货款</span></p> <p class="fw_nr2"><i>按照寄件方（卖家）与收件方（买家）达成交易协议的要求，为寄件方提供承运、寄递物品的同时，并代寄件方向收件方收取货款，同时按照约定时间将货款返还给寄件方的服务。</i></p></div></div> <div class="arc_fw item_fw5"><div class="fw_img"><img'+r._ssrAttr("src",n(347))+'></div> <div class="fw_nr"><p class="fw_nr1"><span>上门提货</span></p> <p class="fw_nr2"><i>按照客户指令到指定地点收取货物的服务。</i></p></div></div> <div class="arc_fw item_fw6"><div class="fw_img"><img'+r._ssrAttr("src",n(348))+'></div> <div class="fw_nr"><p class="fw_nr1"><span>开发票</span></p> <p class="fw_nr2"><i>客户可向物流公司申请开具货物运输发票。</i></p></div></div> <div class="arc_fw item_fw7"><div class="fw_img"><img'+r._ssrAttr("src",n(349))+'></div> <div class="fw_nr"><p class="fw_nr1"><span>签单回收</span></p> <p class="fw_nr2"><i>在货物正常签收后，将寄件客户提供的需收件客户签名的收条或收货单等单据返还寄件客户的服务。</i></p></div></div> <div class="arc_fw item_fw8"><div class="fw_img"><img'+r._ssrAttr("src",n(350))+'></div> <div class="fw_nr"><p class="fw_nr1"><span>时效保障</span></p> <p class="fw_nr2"><i>承诺在规定时间内送达的时效保障服务。</i></p></div></div></div></div> <div id="arc_nr2" class="arc_nr arc_nr_none"><div id="nr1035" class="arc_nr2"></div></div> '),r._ssrNode('<div id="arc_nr3" class="arc_nr arc_nr_none">',"</div>",[r._ssrNode('<div class="arc_pjnr_bt">',"</div>",[r._ssrNode('<div class="arc_pjnr_bt1"><div class="arc_pjbt_item"><input type="radio" name="radio" value><span>全部</span><i id="nr1044">(439)</i></div> <div class="arc_pjbt_item"><input type="radio" name="radio" value="AF0360101"><span>好评</span><i id="nr1045">(400)</i></div> <div class="arc_pjbt_item"><input type="radio" name="radio" value="AF0360102"><span>中评</span><i id="nr1046">(30)</i></div> <div class="arc_pjbt_item"><input type="radio" name="radio" value="AF0360103"><span>差评</span><i id="nr1047">(9)</i></div></div> '),r._ssrNode('<div class="arc_pjnr_bt2">',"</div>",[r._ssrNode('<input value="我要评价" onclick="$(\'.pj_box\').show()"> '),r._ssrNode('<div class="pj_box">',"</div>",[r._ssrNode('<div class="pj_box1"><div onclick="$(\'.pj_box\').hide()" class="bt_close"><img'+r._ssrAttr("src",n(175))+"></div></div> "),r._ssrNode('<div class="pj_box2">',"</div>",[r._ssrNode('<div class="pj_box2_1"><img'+r._ssrAttr("src",n(351))+"></div> "),r._ssrNode('<div class="pj_box2_2">',"</div>",[r._ssrNode('<p class="pj_box2_2_p1">物流公司需要您的建议哦！</p> '),c("P",{staticClass:"pj_box2_2_p2"},[r._v("认真填写评价平台会给你推荐最优质的物流专线")])],2)],2),r._ssrNode(' <div class="pj_box3"><div class="pj_box3_left">服务价格：</div> <div id="pj_box_item1" class="pj_box3_right"><img id="pjxx1_1"'+r._ssrAttr("src",n(93))+'><img id="pjxx1_2"'+r._ssrAttr("src",n(93))+'><img id="pjxx1_3"'+r._ssrAttr("src",n(93))+'><img id="pjxx1_4"'+r._ssrAttr("src",n(93))+'><img id="pjxx1_5"'+r._ssrAttr("src",n(93))+'><span id="pj_f1"></span></div></div> <div class="pj_box3"><div class="pj_box3_left">服务质量：</div> <div id="pj_box_item2" class="pj_box3_right"><img id="pjxx2_1"'+r._ssrAttr("src",n(93))+'><img id="pjxx2_2"'+r._ssrAttr("src",n(93))+'><img id="pjxx2_3"'+r._ssrAttr("src",n(93))+'><img id="pjxx2_4"'+r._ssrAttr("src",n(93))+'><img id="pjxx2_5"'+r._ssrAttr("src",n(93))+'><span id="pj_f2"></span></div></div> <div class="pj_box3"><div class="pj_box3_left">运输时效：</div> <div id="pj_box_item3" class="pj_box3_right"><img id="pjxx3_1"'+r._ssrAttr("src",n(93))+'><img id="pjxx3_2"'+r._ssrAttr("src",n(93))+'><img id="pjxx3_3"'+r._ssrAttr("src",n(93))+'><img id="pjxx3_4"'+r._ssrAttr("src",n(93))+'><img id="pjxx3_5"'+r._ssrAttr("src",n(93))+'><span id="pj_f3"></span></div></div> '),r._ssrNode('<div class="pj_box3 ">',"</div>",[r._ssrNode('<div class="pj_box3_left">',"</div>",[c("font",[r._v("综合评价")]),r._ssrNode("：")],2),r._ssrNode(' <div class="pj_box3_right"><i id="pj_box_zh"></i></div>')],2),r._ssrNode(' <div class="pj_box4"><div class="pj_box4_left">评价说明：</div> <div class="pj_box4_right"><textarea id="pj_nr" maxlength="400" rows="3" cols="30"></textarea></div></div> <div class="pj_box5"><span>还可输入<i id="pj_limit">400</i>字</span></div> <div class="pj_box6"><input id="pj_submit" value="提交评价" class="pj_input2"><input onclick="$(\'.pj_box\').hide()" value="取消" class="pj_input1"></div> <div class="pj_box7">打分和评价都将是其他用户的参考依据，并影响该承运商信誉值。\n                请发布真实、客观的本人消费体验评价。如您受到威逼、利诱如优惠等干扰而发布的评价或并非本人体验的虚假/恶意评价，则点评视为违规，同时影响您的信誉度。更多请见 <span>这里的说明</span>。\n                </div>')],2)],2)],2),r._ssrNode(" "),r._ssrNode('<div id="js014" class="arc_pjnr_nr">',"</div>",[r._ssrNode('<p class="arc_prinr_p" style="display: none">dfdfdfsdfdfdf</p> '),r._ssrNode('<div class="arc_pjnr_item" style="display: none;">',"</div>",[r._ssrNode('<div class="arc_pjnr_item_left">',"</div>",[r._ssrNode('<p class="item_p1">',"</p>",[c("font",{attrs:{id:"nr1031"}},[r._v("134****1323")])],1),r._ssrNode(' <p class="item_p2"><img'+r._ssrAttr("src",n(352))+"></p>")],2),r._ssrNode(" "),r._ssrNode('<div class="arc_pjnr_item_right">',"</div>",[r._ssrNode('<p class="item_p3"><span id="nr1032">内容真实，可靠！</span></p> <p class="item_p4"><i id="nr1033">2018-08-01 10:00</i></p> '),r._ssrNode('<p id="item_p5" class="item_p5" style="display: none">',"</p>",[c("font",{attrs:{id:"nr10340"}},[r._v("[回复]：")]),c("font",{attrs:{id:"nr1034"}})],1)],2)],2)],2),r._ssrNode(' <div class="box" style="float: right;margin-right: 70px;"><div id="pagination1" class="page fl"></div> <div class="info fl"></div></div>')],2),r._ssrNode(' <div id="arc_nr4" class="arc_nr arc_nr_none"><div id="block_bzj" class="arc_nr1"><div class="arc_fw_bt"><img'+r._ssrAttr("src",n(353))+'></div> <div class="arc_fw arc_fw2"><div class="fw_img"><img'+r._ssrAttr("src",n(354))+'></div> <div class="fw_nr"><p class="fw_nr1"><span>物流运输保障服务</span></p> <p class="fw_nr2"><i>此承运商已交</i><i id="nr1036"></i><i>元诚信保证金</i></p> <p class="fw_nr3"><span>如果您采用平台的担保交易，您与承运商洽谈好价格后，要平台上生成标准托运单，并把运费托管在平台上，如果承运商未能良好履约，您有权要求退回所有的运费。并根据托运单规定的规则条款，您有权对承运商要求相应的补偿。</span></p> <p class="fw_nr4"><span>如果您线下私自与承运商进行交易，平台不承担任何协助您向承运商要求兑现承诺的义务。</span></p></div></div></div> <div id="none_bzj" class="arc_nr1" style="display: none;"><img'+r._ssrAttr("src",n(355))+"> <span>暂未开通此项服务</span></div></div>")],2)],2)],2),r._ssrNode(" "),r._ssrNode('<div id="js017" class="arc_bottom">',"</div>",[r._ssrNode('<div class="zx_sx"><span class="biaozhi"></span><span>此路线其他专线</span><a id="arc_bottom_more" href="#"><span class="arc_bottom_more">更多+</span></a></div> '),r._ssrNode('<div class="tj_list" style="display: none;">',"</div>",[r._ssrNode('<div class="p p02"><img'+r._ssrAttr("src",n(176))+'><span><a id="tj023"></a></span> <img id="tj_shiming"'+r._ssrAttr("src",n(356))+'> <img id="tj_xinyong"'+r._ssrAttr("src",n(357))+'> <img id="tj_danbao"'+r._ssrAttr("src",n(190))+'></div> <div class="p p01"><a id="tj020" target="_blank"><span id="tj021"></span><i>→</i><span id="tj022"></span></a></div> '),r._ssrNode('<div class="p p03">',"</div>",[r._ssrNode("<ul>","</ul>",[r._ssrNode('<li class="tj_left"><i>时效：</i><span id="tj026"></span></li> <li class="tj_right"><i>最低一票：</i><span id="tj027"></span></li> '),r._ssrNode('<li class="tj_left">',"</li>",[r._ssrNode("<i>重货：</i>"),c("font",{attrs:{id:"tj024"}}),r._ssrNode("<span>元/吨</span>")],2),r._ssrNode(" "),r._ssrNode('<li class="tj_right">',"</li>",[r._ssrNode("<i>轻货：</i>"),c("font",{attrs:{id:"tj025"}}),r._ssrNode("<span>元/方</span>")],2)],2)]),r._ssrNode(' <div class="p p05"></div> <div class="p p06"><a id="tj028" target="_blank"><span>查看&gt;</span></a></div>')],2)],2)],2)},[],!1,function(r){var t=n(358);t.__inject__&&t.__inject__(r)},null,"914704dc");t.default=component.exports},93:function(r,t,n){r.exports=n.p+"img/c9acb29.png"}};
//# sourceMappingURL=058264237b9d5750181a.js.map