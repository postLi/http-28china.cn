(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{361:function(t,e,o){"use strict";o.r(e);var n=o(25),r=(o(4),o(38),{name:"ShowEchart",props:{info:{type:[Object,Array],default:function(){}}},data:function(){return{cargoType0:{},cargoType1:{},sendEchart:[],sendEchart1:[]}},watch:{info:function(t,e){}},mounted:function(){var t=this;this.info.forEach(function(e,o){"0"===e.cargoType&&(t.cargoType0=e,t.comInfo(t.sendEchart,t.cargoType0))}),this.info.forEach(function(e,o){"1"===e.cargoType&&(t.cargoType1=e,t.comInfo(t.sendEchart1,t.cargoType1))});var e=Object.assign(this.sendEchart1[2]),o=Object.assign(this.sendEchart[2]),n=this.sendEchart[0];this.sendEchart.forEach(function(t){n<t&&(n=t)});var r=this.sendEchart1[0];this.sendEchart1.forEach(function(t){r<t&&(r=t)});var c=echarts.init(document.getElementById("lllEchart")),option={title:{text:"",subtext:""},tooltip:{trigger:"axis"},legend:{data:["重货","轻货"],selected:{"重货":!0,"轻货":!1},bottom:30,left:"left",selectedMode:"single",textStyle:{color:"#FFA657"}},xAxis:{show:!1,type:"category",boundaryGap:!1,data:["最高","行情价(高)","本专线","行情价(低)","最低"]},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},type:"value"},series:[{name:"重货",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 0.5)"}},data:this.sendEchart1,markPoint:{symbol:"image:///images/cy/11wk.png",symbolOffset:[0,"-70%"],symbolSize:[82,62],itemStyle:{color:"white"},label:{position:"insideTop",formatter:function(t){return"{color1|".concat(t.name,"}\n{color0|").concat(t.value,"元/公斤}")},rich:{color0:{fontSize:14,align:"center",fontWeight:"normal",color:"#FF7836",padding:[0,0,10,0]},color1:{fontSize:12,align:"center",fontWeight:"normal",color:"#6F6F6F",padding:[0,0,10,0]}}},data:[{name:"",coord:[2,e.value],value:e.value}]},itemStyle:{normal:{color:"#6F6F6F",opacity:1},emphasis:{color:"#6F6F6F"}},symbolSize:6,hoverAnimation:!1,symbol:"rect",label:{show:!0,position:"bottom",textStyle:{color:"#6F6F6F"},formatter:function(t){var e;return e=t.dataIndex<=1?"color1":"color0",2===t.dataIndex?"":"{".concat(e,"|").concat(t.value,"元/公斤}\n{color2|").concat(t.name,"}")},rich:{color0:{fontSize:14,align:"center",color:"#FF7836"},color1:{fontSize:14,align:"center",color:"#6F6F6F"},color2:{color:"#413A43",align:"center",fontSize:14,padding:[5,5,5,5]}}},tooltip:{show:!1}},{name:"重货",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},areaStyle:{normal:{origin:"end",color:"rgba(255,161,77, 0.5)"}},data:[null,this.sendEchart1[1],this.sendEchart1[2],this.sendEchart1[3]],tooltip:{show:!1}},{name:"重货",type:"line",markLine:{name:"xfdsvffds",symbol:["circle","none"],symbolSize:6,lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},label:{show:!0,position:"end",formatter:function(t){if(1===t.dataIndex)return"{style|建议价格区间}"},rich:{style:{fontSize:15,padding:[0,150,0,0],color:"#FF7836"}}},data:[[{coord:["行业均价（高点）",this.sendEchart1[1]]},{coord:["行业均价（高点）",r]}],[{coord:["行业均价（低点）",this.sendEchart1[3]]},{coord:["行业均价（低点）",r]}]]}},{name:"轻货",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 0.5)"}},data:this.sendEchart,markPoint:{symbol:"image:///images/cy/11wk.png",symbolOffset:[0,"-70%"],symbolSize:[82,62],itemStyle:{color:"white"},label:{position:"insideTop",formatter:function(t){return"{color1|".concat(t.name,"}\n{color0|").concat(t.value,"元/立方}")},rich:{color0:{fontSize:14,align:"center",fontWeight:"normal",color:"#FF7836",padding:[0,0,6,0]},color1:{fontSize:12,align:"center",fontWeight:"normal",color:"#6F6F6F",padding:[0,0,6,0]}}},data:[{name:"",coord:[2,o.value],value:o.value}]},itemStyle:{normal:{color:"#6F6F6F",opacity:1},emphasis:{color:"#6F6F6F"}},symbolSize:6,hoverAnimation:!1,symbol:"rect",label:{show:!0,position:"bottom",textStyle:{color:"#6F6F6F"},formatter:function(t){var e;return e=t.dataIndex<=1?"color1":"color0",2===t.dataIndex?"":"{".concat(e,"|").concat(t.value,"元/立方}\n{color2|").concat(t.name,"}")},rich:{color0:{fontSize:14,align:"center",color:"#FF7836"},color1:{fontSize:14,align:"center",color:"#6F6F6F"},color2:{color:"#413A43",align:"center",fontSize:14,padding:[5,5,5,5]}}},tooltip:{show:!1}},{name:"轻货",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},areaStyle:{normal:{origin:"end",color:"rgba(255,161,77, 0.5)"}},data:[null,this.sendEchart[1],this.sendEchart[2],this.sendEchart[3]],tooltip:{show:!1}},{name:"轻货",type:"line",markLine:{name:"xfdsvffds",symbol:["circle","none"],symbolSize:6,lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},label:{show:!0,position:"end",formatter:function(t){if(1===t.dataIndex)return"{style|建议价格区间}"},rich:{style:{fontSize:15,padding:[0,110,0,0],color:"#FF7836"}}},data:[[{coord:["行业均价（高点）",this.sendEchart[2]]},{coord:["行业均价（高点）",n]}],[{coord:["行业均价（低点）",this.sendEchart[3]]},{coord:["行业均价（低点）",n]}]]}}]};this.sendEchart1,e.value,e.value,this.sendEchart1[1],this.sendEchart1[2],this.sendEchart1[3],this.sendEchart1[1],this.sendEchart1[3],this.sendEchart,o.value,o.value,this.sendEchart[1],this.sendEchart[2],this.sendEchart[3],this.sendEchart[2],this.sendEchart[3],this.sendEchart1,this.sendEchart1[2],this.sendEchart1[3],this.sendEchart1[2],this.sendEchart1[3],this.sendEchart,this.sendEchart[2],this.sendEchart[3],this.sendEchart[2],this.sendEchart[3];c.setOption(option)},methods:{comInfo:function(t,e){t[0]=e.highestPrice>100?Math.floor(e.highestPrice):e.highestPrice,t[1]=e.highAveragePrice>100?Math.floor(e.highAveragePrice):e.highAveragePrice,t[2]={value:e.thisRangePrice>100?Math.floor(e.thisRangePrice):e.thisRangePrice,symbol:"image:///images/cy/12d.png",symbolSize:20},t[3]=e.lowAveragePrice>100?Math.floor(e.lowAveragePrice):e.lowAveragePrice,t[4]=e.lowestPrice>100?Math.floor(e.lowestPrice):e.lowestPrice,console.log(Object(n.a)(t[3]),t[4])}}}),c=o(1),component=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"lllEchart",staticStyle:{width:"576px",height:"340px"},attrs:{id:"lllEchart"}})},[],!1,null,"764ab8d2",null);e.default=component.exports}}]);