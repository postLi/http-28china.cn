exports.ids=[85],exports.modules={133:function(e,r,t){var content=t(205);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var o=t(3).default;e.exports.__inject__=function(e){o("3e5b9468",content,!0,e)}},204:function(e,r,t){"use strict";t.r(r);var o=t(133),c=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(r,e,function(){return o[e]})}(n);r.default=c.a},205:function(e,r,t){(e.exports=t(2)(!1)).push([e.i,".showPrice{position:relative}.showPrice .price_box1{display:block;top:45px;background-color:#fff7d3;border:1px solid #979797;border-radius:3px}.showPrice .price_box1,.showPrice .price_box2{width:400px;height:180px;min-height:110px;position:absolute;left:200px;margin-left:0;padding-left:15px;padding-top:10px}.showPrice .price_box2{top:80px;background-color:#fff;background-color:#fff7d3;border:1px solid #979797}.showPrice .price_box_bt{float:left;width:100%;color:#333;font-size:14px;font-weight:700;height:28px;line-height:28px}.showPrice .price_box_item1,.showPrice .price_box_item2{float:left;width:100%;height:24px;line-height:24px}.showPrice .price_box_item1 span,.showPrice .price_box_item2 span{float:left;font-size:12px;color:#333;min-width:130px;height:28px}.showPrice .price_box_item1 font,.showPrice .price_box_item2 font{text-decoration:line-through;float:left;font-size:12px;color:#333;width:47px;height:28px;margin-left:3px;text-align:right}",""])},232:function(e,r,t){"use strict";t.r(r);var o={name:"ShowPrice",props:{info:{type:[Array,Object],default:()=>{}},browse:{type:Number,default:()=>{}}},data:()=>({targetLinks:"",carSourceType:"",wEndVolume:"",wDiscountPrice:"",wPrimeryPrice:"",hPrimeryPrice:"",hDiscountPrice:"",pEndVolume:"",showPrice_box1:!1,showPrice_box2:!1,wPrice:[],hPrice:[],infodata:{}}),watch:{info(e,r){},browse(e,r){}},mounted(){this.init()},methods:{hidePrice_box1Fn(){this.showPrice_box1=!1},showPrice_box1Fn(){this.showPrice_box1=!0},hidePrice_box2Fn(){this.showPrice_box2=!1},showPrice_box2Fn(){this.showPrice_box2=!0},init(){this.browse=this.browse?this.browse:"0";this.info.forEach((e,r)=>{0==e.type&&this.hPrice.push(e),1==e.type&&this.wPrice.push(e)}),this.wPrice=Object.assign({},this.wPrice),this.hPrice=Object.assign({},this.hPrice),this.wPrice[0]&&(this.wEndVolume=this.wPrice[0].endVolume?"0-"+this.wPrice[0].endVolume+"公斤":this.wPrice[0].startVolume+"公斤以上",this.wDiscountPrice=this.wPrice[0].discountPrice?"￥"+this.wPrice[0].discountPrice.toFixed(2):"",this.wPrimeryPrice=0==this.wPrice[0].startVolume?this.wPrice[0].primeryPrice.toFixed(2):""),this.hPrice[0]&&(this.pEndVolume=this.hPrice[0].endVolume?"0-"+this.hPrice[0].endVolume+"立方":this.hPrice[0].startVolume+"立方以上",this.hDiscountPrice=this.hPrice[0].discountPrice?"￥"+this.hPrice[0].discountPrice.toFixed(2):"",this.hPrimeryPrice=0==this.hPrice[0].startVolume?this.hPrice[0].primeryPrice.toFixed(2):"")}}},c=t(0);var component=Object(c.a)(o,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"showPrice"},[e._ssrNode('<div class="arc_middle2_1">',"</div>",[e._ssrNode('<p class="p1">',"</p>",[e._ssrNode("<i>重货价：</i> <span>"+e._ssrEscape(e._s(e.wEndVolume))+"</span> "),t("font",{staticClass:"font1"},[e._v(e._s(e.wDiscountPrice))]),e._ssrNode(' <span class="span2"'+e._ssrStyle(null,e.wPrimeryPrice?"":"text-decoration:none",null)+">"+e._ssrEscape(e._s(e.wPrimeryPrice))+"</span> "),t("font",{staticClass:"font2",on:{mouseover:e.showPrice_box1Fn,mouseout:e.hidePrice_box1Fn}},[e._v("[阶梯价]")])],2),e._ssrNode(" "),e._ssrNode('<p class="p2">',"</p>",[e._ssrNode("<i>轻货价：</i> <span>"+e._ssrEscape(e._s(e.pEndVolume))+"</span>"),t("font",{staticClass:"font1"},[e._v(e._s(e.hDiscountPrice))]),e._ssrNode('<span class="span2"'+e._ssrStyle(null,e.hPrimeryPrice?"":"text-decoration:none",null)+">"+e._ssrEscape(e._s(e.hPrimeryPrice))+"</span>"),t("font",{staticClass:"font2",on:{mouseover:e.showPrice_box2Fn,mouseout:e.hidePrice_box2Fn}},[e._v("[阶梯价]")])],2)],2),e._ssrNode(' <div class="arc_middle2_2"><div class="num1"><span id="nr0746"></span></div> <div class="num2"><a href="javascript:void(0)"><span id="nr0745">'+e._ssrEscape(e._s(e.browse))+'</span></a></div> <div class="num4"><a href="javascript:void(0)"><span>累计评价</span></a></div></div> '+(e.showPrice_box1?'<div id="js018" class="price_box1"><div class="price_box_bt">阶梯价（重货）</div> '+e._ssrList(e.info,function(r,t){return 1==r.type?'<div class="price_box_item1"><span>'+e._ssrEscape(e._s(r.endVolume?r.startVolume+"-"+r.endVolume+"公斤":r.startVolume+"公斤以上"))+'</span><span style="color: #f00;">'+e._ssrEscape(e._s(r.discountPrice?r.discountPrice.toFixed(2)+"元/公斤":r.discountPrice))+'</span><span><em style="text-decoration:line-through">'+e._ssrEscape(e._s(r.primeryPrice?r.primeryPrice.toFixed(2):r.primeryPrice))+"</em><em>元/公斤</em></span></div>":"\x3c!----\x3e"})+"</div>":"\x3c!----\x3e")+' <div id="js019" class="price_box2"'+e._ssrStyle(null,null,{display:e.showPrice_box2?"":"none"})+'><div class="price_box_bt">阶梯价（轻货）</div> '+e._ssrList(e.info,function(r,t){return 0==r.type?'<div class="price_box_item2"><span>'+e._ssrEscape(e._s(r.endVolume?r.startVolume+"-"+r.endVolume+"立方":r.startVolume+"立方以上"))+'</span><span style="color: #f00;">'+e._ssrEscape(e._s(r.discountPrice?r.discountPrice.toFixed(2)+"元/立方":r.discountPrice))+'</span><span><em style="text-decoration:line-through">'+e._ssrEscape(e._s(r.primeryPrice?r.primeryPrice.toFixed(2):r.primeryPrice))+"</em><em>元/立方</em></span></div>":"\x3c!----\x3e"})+"</div>")],2)},[],!1,function(e){var r=t(204);r.__inject__&&r.__inject__(e)},null,"1fda28de");r.default=component.exports}};
//# sourceMappingURL=4f360d6ab6b23c4053fa.js.map