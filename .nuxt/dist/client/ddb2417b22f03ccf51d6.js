(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{306:function(o,e,t){"use strict";t.r(e);var n={name:"ShowEchart",props:{info:{type:[Object,Array],default:()=>{}}},data:()=>({cargoType0:{},cargoType1:{},sendEchart:[],sendEchart1:[]}),watch:{info(o,e){}},mounted(){this.info.forEach((o,e)=>{"0"===o.cargoType&&(this.cargoType0=o,this.comInfo(this.sendEchart,this.cargoType0))}),this.info.forEach((o,e)=>{"1"===o.cargoType&&(this.cargoType1=o,this.comInfo(this.sendEchart1,this.cargoType1),console.log(this.cargoType1,"this.cargoType1重货"))}),console.log(this.sendEchart1,"this.sendEchart1重货");let o=Object.assign(this.sendEchart1[4]),e=Object.assign(this.sendEchart[4]),t=this.sendEchart[0];this.sendEchart.forEach(o=>{t<o&&(t=o)});let n=this.sendEchart1[0];this.sendEchart1.forEach(o=>{n<o&&(n=o)});let r=echarts.init(document.getElementById("echart")),option={title:{text:"",subtext:""},tooltip:{trigger:"axis"},legend:{data:["重货","轻货"],selected:{"重货":!0,"轻货":!1},bottom:30,left:"left",selectedMode:"single",textStyle:{color:"#FFA657"}},xAxis:{show:!1,type:"category",boundaryGap:!1,data:["最高价","行业最高","本专线价","行业最低","最低价"]},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},type:"value"},series:[{name:"重货",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 0.5)"}},data:this.sendEchart1,markPoint:{symbol:"image:///images/cy/11wk.png",symbolOffset:[0,"-70%"],symbolSize:[82,62],itemStyle:{color:"white"},label:{position:"insideTop",formatter:function(o){return console.log("markPoint:",o),"{color1|".concat(o.name,"}\n{color0|").concat(o.value,"元/公斤}")},rich:{color0:{fontSize:14,align:"center",fontWeight:"normal",color:"#FF7836",padding:[0,0,10,0]},color1:{fontSize:12,align:"center",fontWeight:"normal",color:"#6F6F6F",padding:[0,0,10,0]}}},data:[{name:"",coord:[4,o.value],value:o.value}]},itemStyle:{normal:{color:"#6F6F6F",opacity:1},emphasis:{color:"#6F6F6F"}},symbolSize:6,hoverAnimation:!1,symbol:"rect",label:{show:!0,position:"bottom",textStyle:{color:"#6F6F6F"},formatter:function(o){let e;return e=o.dataIndex<=1?"color1":"color0",4===o.dataIndex?"":"{".concat(e,"|").concat(o.value,"元/公斤}\n{color2|").concat(o.name,"}")},rich:{color0:{fontSize:14,align:"center",color:"#FF7836"},color1:{fontSize:14,align:"center",color:"#6F6F6F"},color2:{color:"#413A43",align:"center",fontSize:14,padding:[5,5,5,5]}}},tooltip:{show:!1}},{name:"重货",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},areaStyle:{normal:{origin:"end",color:"rgba(255,161,77, 0.5)"}},data:[null,this.sendEchart1[1],this.sendEchart1[2],this.sendEchart1[3]],tooltip:{show:!1}},{name:"重货",type:"line",markLine:{name:"xfdsvffds",symbol:["circle","none"],symbolSize:6,lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},label:{show:!0,position:"end",formatter:function(o){if(1===o.dataIndex)return"{style|建议价格区间}"},rich:{style:{fontSize:15,padding:[0,150,0,0],color:"#FF7836"}}},data:[[{coord:["行业均价（高点）",this.sendEchart1[1]]},{coord:["行业均价（高点）",n]}],[{coord:["行业均价（低点）",this.sendEchart1[3]]},{coord:["行业均价（低点）",n]}]]}},{name:"轻货",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 0.5)"}},data:this.sendEchart,markPoint:{symbol:"image:///images/cy/11wk.png",symbolOffset:[0,"-70%"],symbolSize:[82,62],itemStyle:{color:"white"},label:{position:"insideTop",formatter:function(o){return"{color1|".concat(o.name,"}\n{color0|").concat(o.value,"元/立方}")},rich:{color0:{fontSize:14,align:"center",fontWeight:"normal",color:"#FF7836",padding:[0,0,6,0]},color1:{fontSize:12,align:"center",fontWeight:"normal",color:"#6F6F6F",padding:[0,0,6,0]}}},data:[{name:"",coord:[4,e.value],value:e.value}]},itemStyle:{normal:{color:"#6F6F6F",opacity:1},emphasis:{color:"#6F6F6F"}},symbolSize:6,hoverAnimation:!1,symbol:"rect",label:{show:!0,position:"bottom",textStyle:{color:"#6F6F6F"},formatter:function(o){let e;return e=o.dataIndex<=1?"color1":"color0",4===o.dataIndex?"":"{".concat(e,"|").concat(o.value,"元/立方}\n{color2|").concat(o.name,"}")},rich:{color0:{fontSize:14,align:"center",color:"#FF7836"},color1:{fontSize:14,align:"center",color:"#6F6F6F"},color2:{color:"#413A43",align:"center",fontSize:14,padding:[5,5,5,5]}}},tooltip:{show:!1}},{name:"轻货",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},areaStyle:{normal:{origin:"end",color:"rgba(255,161,77, 0.5)"}},data:[null,this.sendEchart[1],this.sendEchart[2],this.sendEchart[3]],tooltip:{show:!1}},{name:"轻货",type:"line",markLine:{name:"xfdsvffds",symbol:["circle","none"],symbolSize:6,lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},label:{show:!0,position:"end",formatter:function(o){if(1===o.dataIndex)return"{style|建议价格区间}"},rich:{style:{fontSize:15,padding:[0,110,0,0],color:"#FF7836"}}},data:[[{coord:["行业均价（高点）",this.sendEchart[2]]},{coord:["行业均价（高点）",t]}],[{coord:["行业均价（低点）",this.sendEchart[3]]},{coord:["行业均价（低点）",t]}]]}}]};this.sendEchart1,this.sendEchart1[2],this.sendEchart1[3],this.sendEchart1[2],this.sendEchart1[3],this.sendEchart,this.sendEchart[2],this.sendEchart[3],this.sendEchart[2],this.sendEchart[3];r.setOption(option)},methods:{comInfo(o,e){o[0]=e.highestPrice,o[1]=e.highAveragePrice,o[2]=e.thisRangePrice,o[3]=e.lowAveragePrice;let t="";1==e.cargoType&&(t=e.lowestPrice),0==e.cargoType&&(t=e.lowestPrice),o[4]={value:t,symbol:"image:///images/cy/12d.png",symbolSize:20}}}},r=t(1),component=Object(r.a)(n,function(){var o=this.$createElement;return(this._self._c||o)("div",{attrs:{id:"echart"}})},[],!1,null,"71948d54",null);e.default=component.exports}}]);