(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{488:function(t,o,e){"use strict";e.r(o);var n={name:"ShowEchart",props:{info:{type:[Object,Array],default:()=>{}}},data:()=>({cargoType0:{},cargoType1:{},sendEchart:[],sendEchart1:[]}),watch:{info(t,o){}},mounted(){this.info.forEach((t,o)=>{"0"===t.cargoType&&(this.cargoType0=t,this.comInfo(this.sendEchart,this.cargoType0))}),this.info.forEach((t,o)=>{"1"===t.cargoType&&(this.cargoType1=t,this.comInfo(this.sendEchart1,this.cargoType1))});let t=this.sendEchart[0];this.sendEchart.forEach(o=>{t<o&&(t=o)});let o=this.sendEchart1[0];this.sendEchart1.forEach(t=>{o<t&&(o=t)});let e=echarts.init(document.getElementById("echart")),option=(this.sendEchart,this.sendEchart[2],this.sendEchart[3],this.sendEchart[2],this.sendEchart[3],this.sendEchart1,this.sendEchart1[2],this.sendEchart1[3],this.sendEchart1[2],this.sendEchart1[3],{title:{text:"",subtext:""},tooltip:{trigger:"axis"},legend:{data:["重货","轻货"],selected:{"重货":!0,"轻货":!1},bottom:30,left:"left",selectedMode:"single",textStyle:{color:"#FFA657"}},xAxis:{show:!1,type:"category",boundaryGap:!1,data:["大品牌报价","优质专线报价","行业均价（高点）","行业均价（低点）","本供应商价"]},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},type:"value"},series:[{name:"重货",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 0.5)"}},data:this.sendEchart1,markPoint:{symbol:"image:///images/cy/11wk.png",symbolOffset:[0,"-70%"],symbolSize:[82,62],itemStyle:{color:"white"},label:{position:"insideTop",formatter:function(t){return"{color1|".concat(t.name,"}\n{color0|").concat(t.value,"元/公斤}")},rich:{color0:{fontSize:14,align:"center",fontWeight:"normal",color:"#FF7836",padding:[0,0,6,0]},color1:{fontSize:12,align:"center",fontWeight:"normal",color:"#6F6F6F",padding:[0,0,6,0]}}},data:[{name:"",type:"min"}]},itemStyle:{normal:{color:"#6F6F6F",opacity:1},emphasis:{color:"#6F6F6F"}},symbolSize:6,hoverAnimation:!1,symbol:"rect",label:{show:!0,position:"bottom",textStyle:{color:"#6F6F6F"},formatter:function(t){let o;return o=t.dataIndex<=1?"color1":"color0",4===t.dataIndex?"":"{".concat(o,"|").concat(t.value,"元/公斤}\n{color2|").concat(t.name,"}")},rich:{color0:{fontSize:18,align:"center",color:"#FF7836"},color1:{fontSize:18,align:"center",color:"#6F6F6F"},color2:{color:"#413A43",align:"center",fontSize:14,padding:[5,5,5,5]}}},tooltip:{show:!1}},{name:"重货",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},areaStyle:{normal:{origin:"end",color:"rgba(255,161,77, 0.5)"}},data:[null,null,this.sendEchart1[2],this.sendEchart1[3]],tooltip:{show:!1}},{name:"重货",type:"line",markLine:{name:"xfdsvffds",symbol:["circle","none"],symbolSize:6,lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},label:{show:!0,position:"end",formatter:function(t){if(1===t.dataIndex)return"{style|建议价格区间}"},rich:{style:{fontSize:15,padding:[0,110,0,0],color:"#FF7836"}}},data:[[{coord:["行业均价（高点）",this.sendEchart1[2]]},{coord:["行业均价（高点）",o]}],[{coord:["行业均价（低点）",this.sendEchart1[3]]},{coord:["行业均价（低点）",o]}]]}},{name:"轻货",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 0.5)"}},data:this.sendEchart,markPoint:{symbol:"image:///images/cy/11wk.png",symbolOffset:[0,"-70%"],symbolSize:[82,62],itemStyle:{color:"white"},label:{position:"insideTop",formatter:function(t){return"{color1|".concat(t.name,"}\n{color0|").concat(t.value,"元/立方}")},rich:{color0:{fontSize:14,align:"center",fontWeight:"normal",color:"#FF7836",padding:[0,0,6,0]},color1:{fontSize:12,align:"center",fontWeight:"normal",color:"#6F6F6F",padding:[0,0,6,0]}}},data:[{name:"",type:"min"}]},itemStyle:{normal:{color:"#6F6F6F",opacity:1},emphasis:{color:"#6F6F6F"}},symbolSize:6,hoverAnimation:!1,symbol:"rect",label:{show:!0,position:"bottom",textStyle:{color:"#6F6F6F"},formatter:function(t){let o;return o=t.dataIndex<=1?"color1":"color0",4===t.dataIndex?"":"{".concat(o,"|").concat(t.value,"元/立方}\n{color2|").concat(t.name,"}")},rich:{color0:{fontSize:18,align:"center",color:"#FF7836"},color1:{fontSize:18,align:"center",color:"#6F6F6F"},color2:{color:"#413A43",align:"center",fontSize:14,padding:[5,5,5,5]}}},tooltip:{show:!1}},{name:"轻货",type:"line",lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},areaStyle:{normal:{origin:"end",color:"rgba(255,161,77, 0.5)"}},data:[null,null,this.sendEchart[2],this.sendEchart[3]],tooltip:{show:!1}},{name:"轻货",type:"line",markLine:{name:"xfdsvffds",symbol:["circle","none"],symbolSize:6,lineStyle:{normal:{color:"rgba(255,173,101, 1)"}},label:{show:!0,position:"end",formatter:function(t){if(1===t.dataIndex)return"{style|建议价格区间}"},rich:{style:{fontSize:15,padding:[0,110,0,0],color:"#FF7836"}}},data:[[{coord:["行业均价（高点）",this.sendEchart[2]]},{coord:["行业均价（高点）",t]}],[{coord:["行业均价（低点）",this.sendEchart[3]]},{coord:["行业均价（低点）",t]}]]}}]});this.sendEchart1,this.sendEchart1[2],this.sendEchart1[3],this.sendEchart1[2],this.sendEchart1[3],this.sendEchart,this.sendEchart[2],this.sendEchart[3],this.sendEchart[2],this.sendEchart[3];e.setOption(option)},methods:{comInfo(t,o){t[0]=o.famousBrandPrice,t[1]=o.highAveragePrice,t[2]=o.highQualityPrice,t[3]=o.lowAveragePrice;let e="";1==o.cargoType&&(e=o.weightDiscountPrice),0==o.cargoType&&(e=o.lightDiscountPrice),t[4]={value:e,symbol:"image:///images/cy/12d.png",symbolSize:20}}}},r=e(1),component=Object(r.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"echart"}})},[],!1,null,"4b9cfeab",null);o.default=component.exports}}]);