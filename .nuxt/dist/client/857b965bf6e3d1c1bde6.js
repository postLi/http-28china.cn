(window.webpackJsonp=window.webpackJsonp||[]).push([[68,69],{285:function(e,t,n){"use strict";n.r(t),n.d(t,"formatAnfaTms",function(){return r}),n.d(t,"makeAnfaTmsUrl",function(){return c});n(28);function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(e+="").replace(/href="http:\/\/192\.168\.1\.79/gim,'href="').replace(/href="\/anfacms/gim,'href="/zixun').replace(/src="\/zixun\//gim,'src="/anfacms/')}function c(path){return"http://192.168.1.180/anfacms/"+path.replace("/zixun","")}},551:function(e,t,n){"use strict";n.r(t);n(53);var r=n(7),c=n(285),l={name:"Zixun",head:{title:"物流资讯",meta:[{hid:"description",name:"description",content:"28快运是专业提供零担运输和整车运输等物流服务平台，同时提供免费发布货源、车源、专线。货主在线发货，物流跟踪查询，服务有保障，让您发货省时，省钱，更省心！"},{hid:"keywords",name:"keywords",content:"物流,物流平台,物流专线,物流公司,物流服务,在线发货,查询运价,运单查询,运单跟踪,物流帮"}],link:[{rel:"stylesheet",href:"/zxnews_files/basic.css"},{rel:"stylesheet",href:"/zxnews_files/mains.css"}],script:[{src:"/js/city-picker.data.js"},{src:"/js/city-picker.js"},{src:"/zxnews_files/ty_window.js"},{src:"/zxnews_files/jquery.SuperSlide.2.1.1.js"},{src:"/index/js/pic_scroll.js"}]},data:function(){return{recommendList:[],dataset:[],content:""}},asyncData:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n,r,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.app,t.query,t.params,r=t.route,console.log("route.path:",r.path),e.next=4,n.get(Object(c.makeAnfaTmsUrl)(r.path));case 4:return l=e.sent,e.abrupt("return",{content:Object(c.formatAnfaTms)(l.data)});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),mounted:function(){var e=function(){r[0].offsetWidth-t[0].scrollLeft<=0?t[0].scrollLeft-=n[0].offsetWidth:t[0].scrollLeft++},t=$(".echart_scroll_nr"),n=$(".echart_scroll_nr1"),r=$(".echart_scroll_nr2");r.html(n.html()),console.log("tab2:"+r.html());var c=setInterval(e,30);t.mouseover(function(){clearInterval(c)}),t.mouseout(function(){c=setInterval(e,30)}),$("#slideBox1").slide({mainCell:".bd ul",autoPlay:!0,delayTime:0,trigger:"click"}),$("#slideBox2").slide({mainCell:".bd ul",autoPlay:!0}),$("#slideBox3").slide({mainCell:".bd ul",autoPlay:!0}),$(".scrollLoading").scrollLoading()},methods:{}},o=n(1),component=Object(o.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this.content)}})},[],!1,null,null,null);t.default=component.exports}}]);