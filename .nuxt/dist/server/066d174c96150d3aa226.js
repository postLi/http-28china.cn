exports.ids=[21],exports.modules={479:function(c,d,n){"use strict";n.r(d);var o={name:"OrderSearch",mounted(){$(".ydh").click(function(){$("#yd_nr").val("1809260061"),$(".ydh").css("display","none")}),$("#yd_nr").keyup(function(){$("#yd_nr").val()&&(console.log("nr"),$("#yd_cx").css("background-color","#eb434d"),$("#yd_cx").css("color","#f9f9f9"),$(".ydh").css("display","none")),$("#yd_nr").val()||(console.log("nr"),$("#yd_cx").css("background-color","#fff"),$("#yd_cx").css("color","#f66618"),$(".ydh").css("display","block"))}),$("#yd_cx").click(function(){console.log($("#yd_nr").val());var c=$("#yd_nr").val();c&&window.open("/ydcx?num="+c),c||alert("请先输入运单号查询！")})}},r=n(0);var component=Object(r.a)(o,function(){var c=this.$createElement;return(this._self._c||c)("div",{staticClass:"yd_2"},[this._ssrNode('<input id="yd_nr" rows="3" cols="20" placeholder="请输入运单号，例如：" data-v-7597a16c> <input id="yd_cx" type="button" data-v-7597a16c> <div class="ydh" data-v-7597a16c><span data-v-7597a16c>001380</span></div>')])},[],!1,function(c){},"7597a16c","31972a85");d.default=component.exports}};
//# sourceMappingURL=066d174c96150d3aa226.js.map