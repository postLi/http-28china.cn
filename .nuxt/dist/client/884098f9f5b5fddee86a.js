(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{214:function(e,t,r){var content=r(287);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(7).default)("3e5b9468",content,!0,{sourceMap:!1})},286:function(e,t,r){"use strict";var o=r(214);r.n(o).a},287:function(e,t,r){(e.exports=r(6)(!1)).push([e.i,".showPrice{position:relative}.showPrice .price_box1{display:block;top:45px;background-color:#fff7d3;border:1px solid #979797;border-radius:3px}.showPrice .price_box1,.showPrice .price_box2{width:400px;height:180px;min-height:110px;position:absolute;left:200px;margin-left:0;padding-left:15px;padding-top:10px}.showPrice .price_box2{top:80px;background-color:#fff;background-color:#fff7d3;border:1px solid #979797}.showPrice .price_box_bt{float:left;width:100%;color:#333;font-size:14px;font-weight:700;height:28px;line-height:28px}.showPrice .price_box_item1,.showPrice .price_box_item2{float:left;width:100%;height:24px;line-height:24px}.showPrice .price_box_item1 span,.showPrice .price_box_item2 span{float:left;font-size:12px;color:#333;min-width:130px;height:28px}.showPrice .price_box_item1 font,.showPrice .price_box_item2 font{text-decoration:line-through;float:left;font-size:12px;color:#333;width:47px;height:28px;margin-left:3px;text-align:right}",""])},312:function(e,t,r){"use strict";r.r(t);var o={name:"ShowPrice",props:{info:{type:[Array,Object],default:()=>{}},browse:{type:Number,default:()=>{}}},data:()=>({targetLinks:"",carSourceType:"",wEndVolume:"",wDiscountPrice:"",wPrimeryPrice:"",hPrimeryPrice:"",hDiscountPrice:"",pEndVolume:"",showPrice_box1:!1,showPrice_box2:!1,wPrice:[],hPrice:[],infodata:{}}),watch:{info(e,t){},browse(e,t){}},mounted(){this.init()},methods:{hidePrice_box1Fn(){this.showPrice_box1=!1},showPrice_box1Fn(){this.showPrice_box1=!0},hidePrice_box2Fn(){this.showPrice_box2=!1},showPrice_box2Fn(){this.showPrice_box2=!0},init(){this.browse=this.browse?this.browse:"0";this.info.forEach((e,t)=>{0==e.type&&this.hPrice.push(e),1==e.type&&this.wPrice.push(e)}),this.wPrice=Object.assign({},this.wPrice),this.hPrice=Object.assign({},this.hPrice),this.wPrice[0]&&(this.wEndVolume=this.wPrice[0].endVolume?"0-"+this.wPrice[0].endVolume+"公斤":this.wPrice[0].startVolume+"公斤以上",this.wDiscountPrice=this.wPrice[0].discountPrice?"￥"+this.wPrice[0].discountPrice.toFixed(2):"",this.wPrimeryPrice=0==this.wPrice[0].startVolume?this.wPrice[0].primeryPrice.toFixed(2):""),this.hPrice[0]&&(this.pEndVolume=this.hPrice[0].endVolume?"0-"+this.hPrice[0].endVolume+"立方":this.hPrice[0].startVolume+"立方以上",this.hDiscountPrice=this.hPrice[0].discountPrice?"￥"+this.hPrice[0].discountPrice.toFixed(2):"",this.hPrimeryPrice=0==this.hPrice[0].startVolume?this.hPrice[0].primeryPrice.toFixed(2):"")}}},c=(r(286),r(1)),component=Object(c.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"showPrice"},[r("div",{staticClass:"arc_middle2_1"},[r("p",{staticClass:"p1"},[r("i",[e._v("重货价：")]),e._v(" "),r("span",[e._v(e._s(e.wEndVolume))]),e._v(" "),r("font",{staticClass:"font1"},[e._v(e._s(e.wDiscountPrice))]),e._v(" "),r("span",{staticClass:"span2",style:e.wPrimeryPrice?"":"text-decoration:none"},[e._v(e._s(e.wPrimeryPrice))]),e._v(" "),r("font",{staticClass:"font2",on:{mouseover:e.showPrice_box1Fn,mouseout:e.hidePrice_box1Fn}},[e._v("[阶梯价]")])],1),e._v(" "),r("p",{staticClass:"p2"},[r("i",[e._v("轻货价：")]),e._v(" "),r("span",[e._v(e._s(e.pEndVolume))]),r("font",{staticClass:"font1"},[e._v(e._s(e.hDiscountPrice))]),r("span",{staticClass:"span2",style:e.hPrimeryPrice?"":"text-decoration:none"},[e._v(e._s(e.hPrimeryPrice))]),r("font",{staticClass:"font2",on:{mouseover:e.showPrice_box2Fn,mouseout:e.hidePrice_box2Fn}},[e._v("[阶梯价]")])],1)]),e._v(" "),r("div",{staticClass:"arc_middle2_2"},[e._m(0),e._v(" "),r("div",{staticClass:"num2"},[r("a",{attrs:{href:"javascript:void(0)"}},[r("span",{attrs:{id:"nr0745"}},[e._v(e._s(e.browse))])])]),e._v(" "),e._m(1)]),e._v(" "),e.showPrice_box1?r("div",{staticClass:"price_box1",attrs:{id:"js018"}},[r("div",{staticClass:"price_box_bt"},[e._v("阶梯价（重货）")]),e._v(" "),e._l(e.info,function(t,o){return 1==t.type?r("div",{key:o,staticClass:"price_box_item1"},[r("span",[e._v(e._s(t.endVolume?t.startVolume+"-"+t.endVolume+"公斤":t.startVolume+"公斤以上"))]),r("span",{staticStyle:{color:"#f00"}},[e._v(e._s(t.discountPrice?t.discountPrice.toFixed(2)+"元/公斤":t.discountPrice))]),r("span",[r("em",{staticStyle:{"text-decoration":"line-through"}},[e._v(e._s(t.primeryPrice?t.primeryPrice.toFixed(2):t.primeryPrice))]),r("em",{},[e._v("元/公斤")])])]):e._e()})],2):e._e(),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showPrice_box2,expression:"showPrice_box2"}],staticClass:"price_box2",attrs:{id:"js019"}},[r("div",{staticClass:"price_box_bt"},[e._v("阶梯价（轻货）")]),e._v(" "),e._l(e.info,function(t,o){return 0==t.type?r("div",{key:o,staticClass:"price_box_item2"},[r("span",[e._v(e._s(t.endVolume?t.startVolume+"-"+t.endVolume+"立方":t.startVolume+"立方以上"))]),r("span",{staticStyle:{color:"#f00"}},[e._v(e._s(t.discountPrice?t.discountPrice.toFixed(2)+"元/立方":t.discountPrice))]),r("span",[r("em",{staticStyle:{"text-decoration":"line-through"}},[e._v(e._s(t.primeryPrice?t.primeryPrice.toFixed(2):t.primeryPrice))]),r("em",{},[e._v("元/立方")])])]):e._e()})],2)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"num1"},[t("span",{attrs:{id:"nr0746"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"num4"},[t("a",{attrs:{href:"javascript:void(0)"}},[t("span",[this._v("累计评价")])])])}],!1,null,null,null);t.default=component.exports}}]);