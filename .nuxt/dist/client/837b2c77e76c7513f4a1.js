(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{170:function(t,e,r){"use strict";r.d(e,"b",function(){return o}),r.d(e,"a",function(){return v}),r.d(e,"d",function(){return m}),r.d(e,"c",function(){return h});r(73),r(18);var n=r(4);let c=["天津市","北京市","上海市","重庆市"],l=[{p:"北京市",c:"北京市"},{p:"天津市",c:"天津市"},{p:"黑龙江省",c:"哈尔滨市"},{p:"江苏省",c:"南京市"},{p:"江苏省",c:"无锡市"},{p:"江苏省",c:"苏州市"},{p:"浙江省",c:"杭州市"},{p:"浙江省",c:"宁波市"},{p:"山东省",c:"青岛市"},{p:"河南省",c:"郑州市"},{p:"湖北省",c:"武汉市"},{p:"湖南省",c:"长沙市"},{p:"广东省",c:"广州市"},{p:"广东省",c:"深圳市"},{p:"重庆市",c:"重庆市"},{p:"四川省",c:"成都市"}];function o(t,e){return _.apply(this,arguments)}function _(){return(_=Object(n.a)(function*(t,e){const r=yield t.get("../js/province.json");for(let i=0;i<r.data.length;i++){if(e===r.data[i].name)return r.data[i].code}})).apply(this,arguments)}function v(t,e,r){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(function*(t,code,e){return yield t.get("/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code="+code)})).apply(this,arguments)}function m(time,t){if(0===arguments.length)return null;if(!time)return"";const e=t||"{y}-{m}-{d} {h}:{i}:{s}";let r;if("object"==typeof time?r=time:(time="number"==typeof time?time:(""+time).trim(),/^\d{10}$/.test(time)?time=1e3*parseInt(time):/(\d){4}-(\d){2}-(\d){2}\s+(\d){2}:(\d){2}:(\d){2}/.test(time)&&(time=time.replace(/-/g,"/")),r=new Date(time)),-1!==r.toString().indexOf("Invalid"))return time;const n={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()};return e.replace(/{(y|m|d|h|i|s|a)+}/g,(t,e)=>{let r=n[e];return"a"===e?["一","二","三","四","五","六","日"][r-1]:(t.length>0&&r<10&&(r="0"+r),r||0)})}function h(){let param=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},data={startProvince:param.startProvince||"",startCity:param.startCity||"",endProvince:param.endProvince||"",endCity:param.endCity||""};if(data.startProvince&&data.endProvince&&data.startCity&&data.endCity&&data.startProvince===data.endProvince&&data.startCity===data.endCity)if(t=data.startCity,-1!==c.indexOf(t)){let t=l.filter(t=>data.endCity!==t.c),e=t[Math.ceil(t.length*Math.random())];data.endProvince=e.p,data.endCity=e.c}else data.endCity="";var t;return data}},439:function(t,e,r){"use strict";r.r(e);var n=r(4),c=r(170);function l(){return(l=Object(n.a)(function*(t,e,r){let n=yield t.get(`/28-web/carInfo/findOtherCarInfoList/${r.id}?pageNum=${e}&pageSize=5`);return 200===n.data.status?{list:n.data.data.list,pages:n.data.data.pages,currentPage:n.data.data.pageNum}:{list:[],pages:0,currentPage:1}})).apply(this,arguments)}var o={name:"Detail",head:{link:[{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/article_cheyuan.css"},{rel:"stylesheet",href:"/css/WTMap.css"}],script:[{src:"../vendor/layer/layer.js"},{src:"../js/jquery.pagination.min.js"},{src:"../js/WTMap.min.js"},{src:"https://echarts.baidu.com/dist/echarts.min.js"}]},layout:"subLayout",data:()=>({cy1:{},zxList:[],otherCarSourceList:[],otherCarInfoList:[],showImg:0,pages:0,currentPage:1,gldhList:[{title:"注册28快运会员",subTitle:"免费发布车源货源专线信息，轻松一键搞定",url:"/regisiter",img:"/images/cy/04zc.png"},{title:"快速下单",subTitle:"下单立即响应，甄选优质运力，发货有保障",url:"/",img:"/images/cy/05xd.png"},{title:"发布车源",subTitle:"让客户主动找我，让平台为我撮合",url:"/create/cheyuan",img:"/images/cy/06cy.png"},{title:"发布货源",subTitle:"精准匹配合适物流，方便快捷省钱",url:"/create/huoyuan",img:"/images/cy/07hy.png"},{title:"发布专线",subTitle:"平台智能推荐货源，实施提醒撮合交易",url:"/create/line",img:"/images/cy/08zx.png"}],hotSearchList:[{name:"广州到杭州货源",url:"/huoyuan?goodsVolumeLower=&AF03801Id=&goodsVolumeUpper=&AF03802Id=&goodsWeightLower=&goodsWeightUpper=&orderClass=&endArea=&endCity=杭州市&endProvince=浙江省&startArea=&startCity=广州市&startProvince=广东省"},{name:"山西到甘肃的货源",url:"/huoyuan?goodsVolumeLower=&AF03801Id=&goodsVolumeUpper=&AF03802Id=&goodsWeightLower=&goodsWeightUpper=&orderClass=&endArea=&endCity=&endProvince=甘肃省&startArea=&startCity=&startProvince=山西省"},{name:"广东广州到山西太原的货源",url:"/huoyuan?goodsVolumeLower=&AF03801Id=&goodsVolumeUpper=&AF03802Id=&goodsWeightLower=&goodsWeightUpper=&orderClass=&endArea=&endCity=太原市&endProvince=山西省&startArea=&startCity=广州市&startProvince=广东省"},{name:"找上海货源",url:"/huoyuan?goodsVolumeLower=&AF03801Id=&goodsVolumeUpper=&AF03802Id=&goodsWeightLower=&goodsWeightUpper=&orderClass=&endArea=&endCity=&endProvince=&startArea=&startCity=上海市&startProvince=上海市"},{name:"沈阳到广州的货源",url:"/huoyuan?goodsVolumeLower=&AF03801Id=&goodsVolumeUpper=&AF03802Id=&goodsWeightLower=&goodsWeightUpper=&orderClass=&endArea=&endCity=广州市&endProvince=广东省&startArea=&startCity=沈阳市&startProvince=辽宁省"},{name:"苏州货源",url:"/huoyuan?goodsVolumeLower=&AF03801Id=&goodsVolumeUpper=&AF03802Id=&goodsWeightLower=&goodsWeightUpper=&orderClass=&endArea=&endCity=&endProvince=&startArea=&startCity=苏州市&startProvince=江苏省"},{name:"上海到江西的运力",url:"/cheyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity=&endProvince=江西省&isLongCar=&startArea=&startCity=&startProvince=上海市"},{name:"广州出发的专线",url:"/huoyuan?goodsVolumeLower=&AF03801Id=&goodsVolumeUpper=&AF03802Id=&goodsWeightLower=&goodsWeightUpper=&orderClass=&endArea=&endCity=&endProvince=&startArea=&startCity=广州市&startProvince=广东省"},{name:"广州物流公司",url:"/gongsi/?tid=80&startp=广东省&startc=广州市&starta=&address=广东省广州市&companyName="},{name:"上海地区运力",url:"/cheyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity=&endProvince=&isLongCar=&startArea=&startCity=上海市&startProvince=上海市"}]}),asyncData:t=>Object(n.a)(function*(){let e,r,n,l=t.$axios,o=(t.app,t.query);const _=yield l.post("/28-web/carInfo/"+o.id);if(200===_.data.status){_.data.data.num=Math.ceil(30*Math.random()),_.data.data.startTime1=Object(c.d)(_.data.data.startTime,"{y}-{m}-{d} {h}:{i}:{s}");let code=yield Object(c.b)(l,_.data.data.endProvince);e=yield Object(c.a)(l,code,_.data.data.startCity);let t={currentPage:1,pageSize:10,startProvince:_.data.data.startProvince,startCity:_.data.data.startCity};r=yield l.post("/28-web/carInfo/list",t);let o={currentPage:1,pageSize:10,startProvince:_.data.data.endProvince,startCity:_.data.data.endCity};n=yield l.post("/28-web/carInfo/list",o)}let v=yield l.get("/28-web/carInfo/carPopularityList");console.log("车主月人气榜",v.data);let d=yield l.get("/28chinaservice/carInfo/newestCreateCar");return console.log("24小时内发布的车源中最新的前10条车源信息",d.data),{cy1:200===_.data.status?_.data.data:{},zxList:e&&200===e.data.status?e.data.data:[],otherCarSourceList:[],carInfoStartList:r&&200===r.data.status?r.data.data.list:[],carInfoEndList:n&&200===n.data.status?n.data.data.list:[],carPopularityList:200===v.data.status?v.data.data:[],newestCreateCar:200===d.data.status?d.data.data:[]}})(),mounted(){var t=this;seajs.use(["../js/city.js"],function(){seajs.use(["../js/arc_cheyuan.js"],function(){seajs.use(["../js/collection.js"],function(){seajs.use(["../js/gaodemap2.js"],function(){})})})});let option={title:{text:"",subtext:""},tooltip:{trigger:"axis"},xAxis:{show:!1,type:"category",boundaryGap:!1,data:["大品牌报价","优质专线报价","行业均价（高点）","行业均价（低点）","本供应商价"]},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},type:"value",max:15},series:[{name:"",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 0.5)"}},data:[11,10,8,6,{value:5,symbol:"image:///images/cy/12d.png",symbolSize:20}],markPoint:{symbol:"image:///images/cy/11wk.png",symbolOffset:[0,"-70%"],symbolSize:[82,62],itemStyle:{color:"white"},label:{position:"insideTop",formatter:function(t){return console.log(t),`{color1|${t.name}}\n{color0|${t.value}万}`},rich:{color0:{fontSize:14,align:"center",fontWeight:"normal",color:"#FF7836",padding:[0,0,6,0]},color1:{fontSize:12,align:"center",fontWeight:"normal",color:"#6F6F6F",padding:[0,0,6,0]}}},data:[{name:"",type:"min"}]},itemStyle:{normal:{color:"#6F6F6F",opacity:1},emphasis:{color:"#6F6F6F"}},symbolSize:6,hoverAnimation:!1,symbol:"circle",label:{show:!0,position:"bottom",textStyle:{color:"#6F6F6F"},formatter:function(t){let e;return e=t.dataIndex<=1?"color1":"color0",4===t.dataIndex?"":`{${e}|${t.value}万}\n{color2|${t.name}}`},rich:{color0:{fontSize:18,align:"center",color:"#FF7836"},color1:{fontSize:18,align:"center",color:"#6F6F6F"},color2:{color:"#413A43",align:"center",fontSize:14,padding:[5,5,5,5]}}},tooltip:{show:!1}},{name:"",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},areaStyle:{normal:{origin:"end",color:"rgba(255,161,77, 0.5)"}},data:[null,null,8,6],tooltip:{show:!1}},{name:"平行于y轴的趋势线",type:"line",markLine:{name:"xfdsvffds",symbol:["circle","none"],symbolSize:6,lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},label:{show:!0,position:"end",formatter:function(t){if(1===t.dataIndex)return"{style|建议价格区间}"},rich:{style:{fontSize:15,padding:[0,110,0,0],color:"#FF7836"}}},data:[[{coord:["行业均价（高点）",8]},{coord:["行业均价（高点）",15]}],[{coord:["行业均价（低点）",6]},{coord:["行业均价（低点）",15]}]]}}]};echarts.init(document.getElementById("echart")).setOption(option),$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:function(){var e=Object(n.a)(function*(e){$("#current1").text(e),console.log(e);let r=yield function(t,e,r){return l.apply(this,arguments)}(t.$axios,e,{id:t.$route.query.id});t.otherCarInfoList=r.list,t.currentPage=r.currentPage,t.pages=r.pages,window.location.href="#top"});return function(t){return e.apply(this,arguments)}}()})},methods:{showPrice(){layer.open({type:1,title:" ",area:["580px","540px"],closeBtn:1,shadeClose:!0,success:(t,e)=>{let r=5,n=setInterval(()=>{if($("#seconds").html(r+"S"),--r<0){clearInterval(n),$(".show1").hide(),$(".show2").show();let t={title:{text:"",subtext:""},tooltip:{trigger:"axis"},xAxis:{show:!1,type:"category",boundaryGap:!1,data:["大品牌报价","优质专线报价","行业均价（高点）","行业均价（低点）","本供应商价"]},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},type:"value",max:15},series:[{name:"",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 0.5)"}},data:[11,10,8,6,{value:5,symbol:"image:///images/cy/12d.png",symbolSize:20}],markPoint:{symbol:"image:///images/cy/11wk.png",symbolOffset:[0,"-70%"],symbolSize:[82,62],itemStyle:{color:"white"},label:{position:"insideTop",formatter:function(t){return console.log(t),`{color1|${t.name}}\n{color0|${t.value}万}`},rich:{color0:{fontSize:14,align:"center",fontWeight:"normal",color:"#FF7836",padding:[0,0,6,0]},color1:{fontSize:12,align:"center",fontWeight:"normal",color:"#6F6F6F",padding:[0,0,6,0]}}},data:[{name:"",type:"min"}]},itemStyle:{normal:{color:"#6F6F6F",opacity:1},emphasis:{color:"#6F6F6F"}},symbolSize:6,hoverAnimation:!1,symbol:"circle",label:{show:!0,position:"bottom",textStyle:{color:"#6F6F6F"},formatter:function(t){let e;return e=t.dataIndex<=1?"color1":"color0",4===t.dataIndex?"":`{${e}|${t.value}万}\n{color2|${t.name}}`},rich:{color0:{fontSize:18,align:"center",color:"#FF7836"},color1:{fontSize:18,align:"center",color:"#6F6F6F"},color2:{color:"#413A43",align:"center",fontSize:14,padding:[5,5,5,5]}}},tooltip:{show:!1}},{name:"",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},areaStyle:{normal:{origin:"end",color:"rgba(255,161,77, 0.5)"}},data:[null,null,8,6],tooltip:{show:!1}},{name:"平行于y轴的趋势线",type:"line",markLine:{name:"xfdsvffds",symbol:["circle","none"],symbolSize:6,lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},label:{show:!0,position:"end",formatter:function(t){if(1===t.dataIndex)return"{style|建议价格区间}"},rich:{style:{fontSize:15,padding:[0,110,0,0],color:"#FF7836"}}},data:[[{coord:["行业均价（高点）",8]},{coord:["行业均价（高点）",15]}],[{coord:["行业均价（低点）",6]},{coord:["行业均价（低点）",15]}]]}}]};echarts.init(document.getElementById("echart2")).setOption(t)}},1e3)},content:'<div class="show1"><div class="myLayer_title">稍等。。。</div><div class="myLayer_content">28平台智能运输大数据中心正在为您核算从<span>'+this.cy1.startCity+"</span>至<span>"+this.cy1.endCity+'</span>全网优质车源的最新报价</div><div class="myLayer_footer"><span id="seconds">5S</span></div></div><div class="show2"><div class="myLayer_title2"><span></span> <span>价格参考</span><span>大数据智能模型精准定价，28智能平台指导定价</span></div><div class="myLayer_content2">广州→深圳17.5米整车</div><div id="echart2"></div><div class="myLayer_content2">车主李先平的报价<span>低于</span><i>92.6%的车主</i>，承运价格<span>低于</span>行业均价低点，此数据源于平台用户提报的历史数据统计，仅供参考！</div></div>'})},findAnother(){let t={strartAddress:this.cy1.strartAddress,endAddress:this.cy1.endAddress};this.$axios.post("/28-web/carInfo/findAnother",t).then(t=>{200===t.data.status&&(window.location.href=`/cheyuan/detail?id=${t.data.data.id}`)})},goToCy(){window.location.href=`/cheyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity=&endProvince=&isLongCar=&startArea=&startCity=${this.cy1.startCity}&startProvince=${this.cy1.startProvince}`},goToCy1(){window.location.href=`/cheyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity=&endProvince=&isLongCar=&startArea=&startCity=${this.cy1.endCity}&startProvince=${this.cy1.endProvince}`},clickImg(t){this.showImg=t}}},_=r(1),component=Object(_.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"arc_top1"},[r("div",{staticClass:"arc_top1_1"},[r("span",[t._v(t._s(t.cy1.startCity+t.cy1.startArea+" → "+t.cy1.endCity+t.cy1.endArea))])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),r("div",{staticClass:"cy_top_banner"}),t._v(" "),r("div",{staticClass:"arc_main"},[r("div",{staticClass:"arc_top2"},[t._m(2),t._v(" "),r("div",{staticClass:"arc_top2_2"},t._l(t.zxList,function(e,n){return n<14?r("a",{key:n},[r("span",[t._v(t._s(0===n?"直达"+e.name.substring(0,2):e.name.substring(0,2)))])]):t._e()}),0),t._v(" "),t.zxList.length>14?r("div",{staticClass:"arc_top2_3",staticStyle:{display:"block"},attrs:{onmouseover:"$('.city_box').css('display', 'block')"}},[t._m(3)]):t._e(),t._v(" "),r("div",{staticClass:"city_box",attrs:{id:"city_box",onmouseover:"$('.city_box').css('display', 'block');",onmouseout:"$('.city_box').css('display', 'none');"}},t._l(t.zxList,function(e,n){return n>=14?r("a",{key:n},[r("span",[t._v(t._s(e.name.substring(0,2)))])]):t._e()}),0)]),t._v(" "),r("div",{staticClass:"arc_main1"},[r("div",{staticClass:"arc_left"},[r("div",{staticClass:"arc_left_1"},[t.cy1.carFile?r("img",{attrs:{src:t.cy1.carFile.split(",")[t.showImg]}}):r("img",{attrs:{src:"../../images/pic/bg"+t.cy1.num+".png"}})]),t._v(" "),r("div",{staticClass:"arc_left_2"},[r("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.clickImg(0)}}},[t.cy1.carFile?r("img",{attrs:{src:t.cy1.carFile.split(",")[0]}}):r("img",{attrs:{src:"../../images/pic/bg"+t.cy1.num+".png"}})]),t._v(" "),r("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.clickImg(1)}}},[t.cy1.carFile&&t.cy1.carFile.split(",")[1]?r("img",{attrs:{src:t.cy1.carFile.split(",")[1]}}):t._e()]),t._v(" "),r("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.clickImg(2)}}},[t.cy1.carFile&&t.cy1.carFile.split(",")[2]?r("img",{attrs:{src:t.cy1.carFile.split(",")[2]}}):t._e()])]),t._v(" "),t._m(4)]),t._v(" "),r("div",{staticClass:"arc_middle"},[t._m(5),t._v(" "),r("div",{staticClass:"arc_middle1"},[r("span",[t._v(t._s(t.cy1.strartAddress+" → "+t.cy1.endAddress))]),t._v(" "),t._m(6)]),t._v(" "),t._m(7),t._v(" "),r("div",{staticClass:"arc_middle2"},[r("div",{staticClass:"arc_middle2_1"},[r("p",{staticClass:"p1"},[r("i",[t._v("运价：")]),r("font",{staticClass:"font1",attrs:{id:"nr062"}},[t._v(" "+t._s(t.cy1.expectPrice?"¥ "+t.cy1.expectPrice:"面议"))])],1),t._v(" "),r("p",{staticClass:"p2"},[r("i",[t._v("车源类型：")]),r("span",[t._v(t._s(t.cy1.carSourceTypeName))])])]),t._v(" "),r("div",{staticClass:"arc_middle2_2"},[r("div",{staticClass:"num1"},[r("span",[t._v(t._s(t.cy1.browseNumber))])]),r("div",{staticClass:"num2"}),t._v(" "),t._m(8),r("div",{staticClass:"num4"})])]),t._v(" "),r("div",{staticClass:"arc_middle3"},[r("div",{staticClass:"arc_m3"},[r("i",[t._v("车辆类型：")]),r("span",[t._v(t._s(t.cy1.carTypeName))]),r("span",[t._v(t._s(1===t.cy1.isLongCar?"(即时车源)":"(长期车源)"))])]),t._v(" "),r("div",{staticClass:"arc_m3"},[r("i",[t._v("车辆载重：")]),r("span",[t._v(t._s(t.cy1.carLoad)+"吨")])]),t._v(" "),r("div",{staticClass:"arc_m3_2"},[r("i",[t._v("车长：      ")]),r("span",[t._v(t._s(t.cy1.carLength)+"米")])]),t._v(" "),r("div",{staticClass:"arc_m3_2"},[r("i",[t._v("途径点：   ")]),r("span",[t._v(t._s(t.cy1.viaAddress?t.cy1.viaAddress:"暂无"))])]),t._v(" "),r("div",{staticClass:"arc_m3_2"},[r("i",[t._v("发车时间： ")]),r("span",[t._v(t._s(t.cy1.startTime1))])])]),t._v(" "),r("div",{staticClass:"arc_middle4"},[r("div",{staticClass:"arc_m3"},[r("i",[t._v("联系人：")]),r("span",[t._v(t._s(t.cy1.belongDriver))])]),t._v(" "),r("div",{staticClass:"arc_m3"},[r("i",[t._v("手机：")]),r("span",[r("font",{staticStyle:{color:"#eb434d"}},[t._v(t._s(t.cy1.phone))])],1)]),t._v(" "),r("div",{staticClass:"arc_m3_2"},[r("i",[t._v("说明：")]),r("span",[t._v(t._s(t.cy1.carTagName))]),t.cy1.remark?r("span",[t._v(t._s("|"+t.cy1.remark.substring(0,30)))]):t._e()])]),t._v(" "),r("div",{staticClass:"arc_middle5"},[r("div",{staticClass:"arc_m5_1"},[r("span",[t._v("联系我时，请说明是从28快运上看到此信息，谢谢！")]),t._v(" "),r("div",{staticStyle:{"margin-top":"15px"}},[r("a",{attrs:{href:""}},[t._v("快速下单")]),t._v(" "),r("span",{staticStyle:{"margin-left":"47px"}},[r("img",{attrs:{src:"/images/cy/14fresh.png"}}),t._v(" "),r("span",{staticClass:"arc_middle5-right",on:{click:function(e){return t.findAnother()}}},[t._v("换一个")])])])])])]),t._v(" "),r("div",{staticClass:"arc_right"},[t._m(9),t._v(" "),r("p",{staticClass:"arc_right04"},[r("span",{staticClass:"arc_right04_1"},[r("i",[t._v("车牌号：")]),t.cy1.carNum?r("font",[t._v(t._s(t.cy1.carNum.substring(0,2)+"***"+t.cy1.carNum.substring(6,10)))]):t._e()],1),t._v(" "),r("span",[r("i",[t._v("常驻地：")]),t.cy1.usualPlace?r("font",[t._v(t._s(t.cy1.usualPlace.substring(0,10)))]):t._e()],1),t._v(" "),r("span",[r("i",[t._v("车长：")]),r("font",[t._v(t._s(t.cy1.carLength)+"米")])],1),t._v(" "),r("span",[r("i",[t._v("车辆类型：")]),r("font",[t._v(t._s(t.cy1.carTypeName))])],1),t._v(" "),r("span",[r("i",[t._v("车辆载重：")]),r("font",[t._v(t._s(t.cy1.carLoad)+"吨")])],1),t._v(" "),r("span",[r("i",[t._v("联系人：")]),r("font",[t._v(t._s(t.cy1.belongDriver))])],1),t._v(" "),r("span",[r("i",[t._v("手机号：")]),r("font",[t._v(t._s(t.cy1.phone))])],1),t._v(" "),r("span",[r("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin="+t.cy1.qq+"&site=qq&menu=yes",target:"_blank"}},[r("i",[t._v("Q Q：")]),t.cy1.qq?r("input",{attrs:{value:"QQ交谈"}}):t._e()])])]),t._v(" "),r("p",{staticStyle:{clear:"both"}}),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),r("div",{staticClass:"arc_right07"},["AF0010403"===t.cy1.driverStatus?r("img",{attrs:{src:"/images/article_wlzx/10shiming.png"}}):t._e(),t._v(" "),"AF0010403"!==t.cy1.driverStatus?r("span",[t._v("暂无认证信息")]):t._e()])])]),t._v(" "),t._m(12),t._v(" "),r("div",{staticClass:"arc_main3"},[t._m(13),t._v(" "),r("div",{staticClass:"right"},[t._m(14),t._v(" "),r("div",{staticClass:"content"},[t._m(15),t._v(" "),r("div",{staticClass:"content-right"},[r("img",{attrs:{src:"/images/cy/02gold.png"}}),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),r("div",{staticClass:"content-right-row"},[t._v("大家对他的印象:")]),t._v(" "),t._m(19),t._v(" "),r("div",{staticClass:"content-right-row",staticStyle:{clear:"both"}},[t._v("大家对他的印象:")]),t._v(" "),t._m(20),t._v(" "),r("div",{staticClass:"content-right-row",staticStyle:{clear:"both"}},[r("a",{staticClass:"button1",attrs:{href:"javascript:;"},on:{click:function(e){return t.showPrice()}}},[t._v("标准价")]),t._v(" "),t._m(21)])])])])]),t._v(" "),r("div",{staticClass:"arc_main4"},[r("div",{staticClass:"left4"},[r("div",[r("div",{staticClass:"zx_sx"},[r("span",{staticClass:"biaozhi"}),r("span",[t._v("更多从"+t._s(t.cy1.startCity)+"出发的货源")]),t._v(" "),r("i",{staticStyle:{cursor:"pointer",float:"right","font-size":"14px"},on:{click:function(e){return t.goToCy()}}},[t._v("更多>")])]),t._v(" "),r("div",{staticClass:"arc_main4-content"},[0===t.carInfoStartList.length?r("div",{staticClass:"list_none",staticStyle:{display:"block"}},[r("span",[t._v("暂时没有找到您要查询的信息，可以看看其他车源哦")]),t._v(" "),r("img",{attrs:{src:"/images/none_pic.png"}})]):t._e(),t._v(" "),t._l(t.carInfoStartList,function(e,n){return r("ul",{key:n,staticClass:"wlzx_list"},[r("li",{attrs:{id:"cy_list_0"}},[r("div",{staticClass:"sc_num"},[r("img",{attrs:{src:"/images/list_wlzx/sc_num.png"}}),r("span",[r("i",[r("em",[t._v(t._s(e.collectNum?e.collectNum:0))]),t._v("收藏量")])])]),t._v(" "),r("div",{staticClass:"view_num"},[r("img",{attrs:{src:"/images/wzlImg/lll.png"}}),r("span",[r("i",[r("em",[t._v(t._s(e.browseNumber?e.browseNumber:0))]),t._v("浏览量")])])])]),t._v(" "),r("li",{staticClass:"cy_list_4"},[r("a",{attrs:{href:"/cheyuan/detail?id="+e.id,target:"_blank"}},[r("img",{attrs:{src:e.carFile?e.carFile.split(",")[0]:""}})])]),t._v(" "),r("li",{staticClass:"cy_list_1"},[r("p",{staticClass:"p1"},[r("a",{staticClass:"list-title-a",attrs:{href:"/cheyuan/detail?id="+e.id,target:"_blank"}},[r("span",{staticClass:"list-icon lines-sprite-icons icon-start"}),t._v(" "),r("em",[t._v(t._s(e.startCity?e.startCity:""+e.startArea?e.startArea:""))]),t._v(" "),r("span",{staticClass:"list-icon lines-sprite-icons icon-through"}),t._v(" "),r("span",{staticClass:"list-icon lines-sprite-icons icon-end"}),t._v(" "),r("em",[t._v(t._s(e.endCity?e.endCity:""+e.endArea?e.endArea:""))])])]),t._v(" "),r("p",{staticClass:"p2"},[r("i",[t._v("车辆：")]),r("font",[t._v(t._s(e.carNum))]),t._v(" "),r("font",[t._v(t._s(e.carTypeName))]),t._v(" "),r("font",[t._v("长"),r("b",[t._v(t._s(e.carLength))]),t._v("米")]),t._v(" "),r("font",[t._v("载重"),r("b",[t._v(t._s(e.carLoad))]),t._v("吨")]),t._v(" "),r("font",[t._v(t._s(e.carSourceTypeName))])],1),t._v(" "),r("p",{staticClass:"p3"},[r("i",[t._v("常驻地：")]),r("font",[t._v(t._s(e.usualPlace))]),t._v("  "),r("i",[t._v("运价：")]),t._v(" "),r("font",[t._v(t._s(e.expectPrice?e.expectPrice+"元":"面议"))]),t._v("  "),r("i",[t._v("发布者：")]),t._v(" "),r("font",[t._v(t._s(e.createrName?e.createrName:""))])],1),t._v(" "),r("p",{staticClass:"p4"},[r("i",[t._v("说明：")]),r("font",[t._v(t._s(e.remark))])],1)]),t._v(" "),r("li",{staticClass:"cy_list_3"},[r("p",{staticClass:"p1"},["AF0010403"===e.driverStatus?r("img",{attrs:{src:"/images/list_wlzx/10shiming.png"}}):t._e()])]),t._v(" "),r("li",{staticClass:"wlzx_list_6"},[r("p",{staticClass:"p2"},[r("a",{attrs:{href:"/cheyuan/detail?id="+e.id,target:"_blank"}},[r("input",{attrs:{readonly:"",value:"查看"}})])]),t._v(" "),r("p",{staticClass:"p3"},[e.qq?r("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin="+e.qq+"&site=qq&menu=yes",target:"_blank"}},[r("input",{attrs:{value:"QQ交谈"}})]):t._e()])])])})],2)]),t._v(" "),t._m(22),t._v(" "),r("div",[r("div",{staticClass:"zx_sx"},[r("span",{staticClass:"biaozhi"}),r("span",[t._v("更多从"+t._s(t.cy1.endCity)+"出发的货源")]),t._v(" "),r("i",{staticStyle:{cursor:"pointer",float:"right","font-size":"14px"},on:{click:function(e){return t.goToCy1()}}},[t._v("更多>")])]),t._v(" "),r("div",{staticClass:"arc_main4-content"},[0===t.carInfoEndList.length?r("div",{staticClass:"list_none",staticStyle:{display:"block"}},[r("span",[t._v("暂时没有找到您要查询的信息，可以看看其他车源哦")]),t._v(" "),r("img",{attrs:{src:"/images/none_pic.png"}})]):t._e(),t._v(" "),t._l(t.carInfoEndList,function(e,n){return r("ul",{key:n,staticClass:"wlzx_list"},[r("li",{attrs:{id:"cy_list_0"}},[r("div",{staticClass:"sc_num"},[r("img",{attrs:{src:"/images/list_wlzx/sc_num.png"}}),r("span",[r("i",[r("em",[t._v(t._s(e.collectNum?e.collectNum:0))]),t._v("收藏量")])])]),t._v(" "),r("div",{staticClass:"view_num"},[r("img",{attrs:{src:"/images/wzlImg/lll.png"}}),r("span",[r("i",[r("em",[t._v(t._s(e.browseNumber?e.browseNumber:0))]),t._v("浏览量")])])])]),t._v(" "),r("li",{staticClass:"cy_list_4"},[r("a",{attrs:{href:"/cheyuan/detail?id="+e.id,target:"_blank"}},[r("img",{attrs:{src:e.carFile?e.carFile.split(",")[0]:""}})])]),t._v(" "),r("li",{staticClass:"cy_list_1"},[r("p",{staticClass:"p1"},[r("a",{staticClass:"list-title-a",attrs:{href:"/cheyuan/detail?id="+e.id,target:"_blank"}},[r("span",{staticClass:"list-icon lines-sprite-icons icon-start"}),t._v(" "),r("em",[t._v(t._s(e.startCity?e.startCity:""+e.startArea?e.startArea:""))]),t._v(" "),r("span",{staticClass:"list-icon lines-sprite-icons icon-through"}),t._v(" "),r("span",{staticClass:"list-icon lines-sprite-icons icon-end"}),t._v(" "),r("em",[t._v(t._s(e.endCity?e.endCity:""+e.endArea?e.endArea:""))])])]),t._v(" "),r("p",{staticClass:"p2"},[r("i",[t._v("车辆：")]),r("font",[t._v(t._s(e.carNum))]),t._v(" "),r("font",[t._v(t._s(e.carTypeName))]),t._v(" "),r("font",[t._v("长"),r("b",[t._v(t._s(e.carLength))]),t._v("米")]),t._v(" "),r("font",[t._v("载重"),r("b",[t._v(t._s(e.carLoad))]),t._v("吨")]),t._v(" "),r("font",[t._v(t._s(e.carSourceTypeName))])],1),t._v(" "),r("p",{staticClass:"p3"},[r("i",[t._v("常驻地：")]),r("font",[t._v(t._s(e.usualPlace))]),t._v("  "),r("i",[t._v("运价：")]),t._v(" "),r("font",[t._v(t._s(e.expectPrice?e.expectPrice+"元":"面议"))]),t._v("  "),r("i",[t._v("发布者：")]),t._v(" "),r("font",[t._v(t._s(e.createrName?e.createrName:""))])],1),t._v(" "),r("p",{staticClass:"p4"},[r("i",[t._v("说明：")]),r("font",[t._v(t._s(e.remark))])],1)]),t._v(" "),r("li",{staticClass:"cy_list_3"},[r("p",{staticClass:"p1"},["AF0010403"===e.driverStatus?r("img",{attrs:{src:"/images/list_wlzx/10shiming.png"}}):t._e()])]),t._v(" "),r("li",{staticClass:"wlzx_list_6"},[r("p",{staticClass:"p2"},[r("a",{attrs:{href:"/cheyuan/detail?id="+e.id,target:"_blank"}},[r("input",{attrs:{readonly:"",value:"查看"}})])]),t._v(" "),r("p",{staticClass:"p3"},[e.qq?r("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin="+e.qq+"&site=qq&menu=yes",target:"_blank"}},[r("input",{attrs:{value:"QQ交谈"}})]):t._e()])])])})],2)]),t._v(" "),t._m(23)]),t._v(" "),r("div",{staticClass:"right4"},[r("div",{staticClass:"arc_main4-content"},[t._m(24),t._v(" "),t._l(t.gldhList,function(e,n){return r("a",{key:n,staticClass:"gldh_list",attrs:{href:e.url,target:"_blank"}},[r("div",{staticClass:"img"},[r("img",{attrs:{src:e.img}})]),t._v(" "),r("div",[r("p",[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.subTitle))])])])})],2),t._v(" "),t._m(25),t._v(" "),r("div",{staticClass:"arc_main4-content"},[t._m(26),t._v(" "),r("div",{staticStyle:{padding:"10px"}},t._l(t.hotSearchList,function(e,n){return r("a",{key:n,staticClass:"rmsx_list",attrs:{href:e.url,target:"_blank"}},[t._v("\n              "+t._s(e.name)+"\n            ")])}),0)]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32)])]),t._v(" "),t._m(33)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_top1_3"},[e("input",{staticClass:"arc_input3",attrs:{value:"搜全网"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_top1_2"},[e("select",{attrs:{id:"search_type"}},[e("option",{attrs:{name:"zx"}},[this._v("找专线")]),e("option",{attrs:{name:"che"}},[this._v("找车源")]),e("option",{attrs:{name:"huo"}},[this._v("找货源")])]),this._v(" "),e("input",{staticClass:"arc_input1",attrs:{wtmap:"",placeholder:"出发地"}}),this._v(" "),e("span",[this._v("→")]),this._v(" "),e("input",{staticClass:"arc_input2",attrs:{wtmap:"",placeholder:"到达地"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_top2_1"},[e("a",{attrs:{href:"/"}},[e("span",[this._v("首页")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"javascript:void(0)"}},[e("span",[this._v("更多+")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"arc_left_3"},[r("div",[r("img",{attrs:{src:"/images/28fast_download.png",width:"72",height:"72"}})]),t._v(" "),r("div",[t._v("\n            下载"),r("span",[t._v("【28快运APP】")]),t._v("，您可查看更多"),r("span",[t._v("广州")]),t._v("到"),r("span",[t._v("东莞")]),t._v("的货源，并可实时接 收28快运为您推荐的精品货源提醒!\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"collection_zx"},[e("div",{staticClass:"bt_close",attrs:{onclick:"$('.collection_zx').hide()"}},[e("img",{attrs:{src:"/images/article_wlzx/xxx.png"}})]),this._v(" "),e("div",{staticClass:"collection_zx_nr"},[e("img",{attrs:{src:"/images/article_wlzx/yes.png"}}),this._v(" "),e("span",[this._v("成功加入")]),e("a",{attrs:{id:"collection_url",target:"_blank",href:"#"}},[this._v("收藏夹")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"release_box"},[r("div",{staticClass:"release_scroll"},[r("div",{staticClass:"manage_box"},[t._v("用户159***5898发布"),r("i",[t._v("广州")]),t._v("到"),r("i",[t._v("长沙")]),t._v("货源   3分钟前")]),t._v(" "),r("div",{staticClass:"manage_box"},[t._v("用户159***5898发布"),r("i",[t._v("广州")]),t._v("到"),r("i",[t._v("长沙")]),t._v("货源   3分钟前")]),t._v(" "),r("div",{staticClass:"manage_box"},[t._v("用户159***5898发布"),r("i",[t._v("广州")]),t._v("到"),r("i",[t._v("长沙")]),t._v("货源   3分钟前")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_middle1-2"},[e("span",[e("img",{staticClass:"img1",attrs:{src:"/images/list_wlzx/hy_item6.png"}})]),e("span",[this._v("发布日期：2019-01-18 13:25:20 ")]),e("span",[e("img",{staticClass:"img2",attrs:{src:"/images/list_wlzx/sc_num.png"}})]),e("span",[this._v("收藏量："),e("i",{staticClass:"my_cz_num"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"num3"},[e("span",[this._v("浏览量")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"arc_right01"},[e("img",{attrs:{src:"/images/article_wlzx/04gongsi.png"}}),e("span",[this._v("车辆档案")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"arc_right05"},[e("input",{staticClass:"collection_cz",staticStyle:{cursor:"pointer"},attrs:{readonly:"",value:"收藏"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"arc_right06"},[e("span",[this._v("相关认证")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_main1-1"},[this._v("\n      想要更多"),e("span",[this._v("广州")]),this._v("到"),e("span",[this._v("深圳")]),this._v("的车源信息，您可以"),e("i",[this._v("发布货源")]),this._v("，让车主主动来联系您，达成交易\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"left"},[e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("价格参考")]),e("i",{staticStyle:{"margin-left":"12px",color:"#333333"}},[this._v("大数据智能模型精准定价，28智能平台指导定价")])]),this._v(" "),e("div",{attrs:{id:"echart"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("车主综合力评估")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-left"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:"/images/28fast_download.png",width:"82",height:"82"}})]),this._v(" "),e("div",{staticClass:"name"},[this._v("企业货主名")]),this._v(" "),e("div",{staticClass:"name"},[e("img",{attrs:{src:"/images/article_wlzx/10shiming.png"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-right-row"},[e("img",{staticClass:"img",attrs:{src:"/images/cy/13hot.png"}}),this._v("活跃度："),e("i",[this._v("30")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-right-row"},[this._v("最近三个月发布货源 "),e("i",[this._v("15")]),this._v(" 次")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-right-row"},[this._v("共成交 "),e("i",[this._v("146")]),this._v(" 笔订单，收到好评 "),e("i",[this._v("28")]),this._v(" 次")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-right-row"},[r("span",[t._v("付款及时（15）")]),t._v(" "),r("span",[t._v("付款及时（15）")]),t._v(" "),r("span",[t._v("付款及时（15）")]),t._v(" "),r("span",[t._v("最想合作的伙伴（15）")]),t._v(" "),r("span",[t._v("付款及时（15）")]),t._v(" "),r("span",[t._v("付款及时（15）")]),t._v(" "),r("span",[t._v("付款及时（15）")]),t._v(" "),r("span",[t._v("付款及时（15）")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-right-row"},[r("em",[t._v("广州"),r("img",{attrs:{src:"/images/yd_zx.png"}}),t._v("武汉")]),t._v(" "),r("em",[t._v("广州"),r("img",{attrs:{src:"/images/yd_zx.png"}}),t._v("武汉")]),t._v(" "),r("em",[t._v("广州"),r("img",{attrs:{src:"/images/yd_zx.png"}}),t._v("武汉")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"button2",attrs:{href:"javascript:;"}},[e("img",{attrs:{src:"/images/cy/03u41008 2.gif"}}),this._v("帮我选择优质车源")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"middle-ad"},[e("img",{attrs:{src:"/images/cy/10banner.png",alt:"广告"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{clear:"both"}},[e("div",{staticClass:"zx_sx1"},[e("span",{staticClass:"biaozhi1"}),e("span",[this._v("您可能对这些感兴趣")])]),this._v(" "),e("ul",{staticClass:"hot-cities"},[e("li",{staticClass:"hot-cities-li"},[e("a",{staticClass:"hot-cities-a",attrs:{href:"/cheyuan/detail?id=null"}},[this._v("广州到北京物流专线")])]),this._v(" "),e("li",{staticClass:"hot-cities-li"},[e("a",{staticClass:"hot-cities-a",attrs:{href:"/cheyuan/detail?id=null"}},[this._v("广州物流专线")])]),this._v(" "),e("li",{staticClass:"hot-cities-li"},[e("a",{staticClass:"hot-cities-a",attrs:{href:"/cheyuan/detail?id=null"}},[this._v("北京物流专线")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("28快运平台功能导航源")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_main4-content"},[e("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("热门搜索")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"arc_main4-content",staticStyle:{"margin-top":"20px"}},[r("div",{staticClass:"zx_sx"},[r("span",{staticClass:"biaozhi"}),r("span",[t._v("车主月人气榜")])]),t._v(" "),r("div",{staticClass:"rc_list"},[r("div",{staticClass:"left"},[r("p",[t._v("1")])]),t._v(" "),r("div",{staticClass:"img"},[r("img",{attrs:{src:"/images/index/wlgs_tj_00.png"}})]),t._v(" "),r("div",{staticClass:"right"},[r("span",[t._v("李先生 粤A***56")]),r("span",{staticStyle:{float:"right"}},[t._v("人气值："),r("i",{staticStyle:{color:"red"}},[t._v("123")])])])]),t._v(" "),r("div",{staticClass:"rc_list"},[r("div",{staticClass:"left"},[r("p",[t._v("2")])]),t._v(" "),r("div",{staticClass:"right"},[r("span",[t._v("李先生 粤A***56")]),r("span",{staticStyle:{float:"right"}},[t._v("人气值："),r("i",{staticStyle:{color:"red"}},[t._v("123")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_main4-content"},[e("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_main4-content"},[e("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_main4-content"},[e("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_main4-content"},[e("img",{staticClass:"ad",attrs:{src:"/images/cy/09banner.png",alt:"广告"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_main4-content"},[e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("仓储与配送")])]),this._v(" "),e("ul",{staticClass:"ps-list",staticStyle:{"padding-left":"30px","list-style":"square"}},[e("li",[e("a",{attrs:{href:""}},[this._v("末端共同配送这把良药，让通达系吃下去有点难")])]),this._v(" "),e("li",[e("a",{attrs:{href:""}},[this._v("末端共同配送这把良药，让通达系吃下去有点难")])]),this._v(" "),e("li",[e("a",{attrs:{href:""}},[this._v("末端共同配送这把良药，让通达系吃下去有点难")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arc_main4"},[e("div",{staticClass:"zx_sx1"},[e("span",{staticClass:"biaozhi1"}),e("span",[this._v("为您推荐车源")])]),this._v(" "),e("ul",{staticClass:"hot-cities"},[e("li",{staticClass:"hot-cities-li"},[e("a",{staticClass:"hot-cities-a",attrs:{href:"/cheyuan/detail?id=null"}},[this._v("广州到南京物流专线")])]),this._v(" "),e("li",{staticClass:"hot-cities-li"},[e("a",{staticClass:"hot-cities-a",attrs:{href:"/cheyuan/detail?id=null"}},[this._v("广州到南京物流专线")])]),this._v(" "),e("li",{staticClass:"hot-cities-li"},[e("a",{staticClass:"hot-cities-a",attrs:{href:"/cheyuan/detail?id=null"}},[this._v("广州到南京物流专线")])])])])}],!1,null,"511f3ff8",null);e.default=component.exports}}]);