(window.webpackJsonp=window.webpackJsonp||[]).push([[95,96],{244:function(e,t,n){"use strict";n.r(t),n.d(t,"formatAnfaTms",function(){return r}),n.d(t,"makeAnfaTmsUrl",function(){return l});n(13);function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(e+="").replace(/href="http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?/gim,'href="').replace(/href="\/anfacms/gim,'href="/zixun').replace(/src="\/zixun\//gim,'src="/anfacms/').replace(/http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,"/zixun")}function l(path){return"/anfacms/"+path.replace("/zixun","")}},600:function(e,t,n){"use strict";n.r(t);var r=n(5),l=n(244),c={name:"Zixun",head:{title:"物流资讯",meta:[{hid:"description",name:"description",content:"28快运是专业提供零担运输和整车运输等物流服务平台，同时提供免费发布货源、车源、专线。货主在线发货，物流跟踪查询，服务有保障，让您发货省时，省钱，更省心！"},{hid:"keywords",name:"keywords",content:"物流,物流平台,物流专线,物流公司,物流服务,在线发货,查询运价,运单查询,运单跟踪,物流帮"}],link:[{rel:"stylesheet",href:"/zxnews_files/basic.css"},{rel:"stylesheet",href:"/zxnews_files/mains.css"}],script:[{src:"/js/city-picker.data.js"},{src:"/js/city-picker.js"},{src:"/zxnews_files/ty_window.js"},{src:"/zxnews_files/jquery.SuperSlide.2.1.1.js"},{src:"/index/js/pic_scroll.js"}]},data:()=>({recommendList:[],dataset:[],content:""}),asyncData:e=>Object(r.a)(function*(){let t=e.$axios,n=(e.app,e.query,e.params,e.route);console.log("route.path:",n.path);let r=yield t.get(Object(l.makeAnfaTmsUrl)(n.path));return{content:Object(l.formatAnfaTms)(r.data)}})(),mounted(){{var e=$(".echart_scroll_nr"),t=$(".echart_scroll_nr1"),n=$(".echart_scroll_nr2");function r(){n[0].offsetWidth-e[0].scrollLeft<=0?e[0].scrollLeft-=t[0].offsetWidth:e[0].scrollLeft++}n.html(t.html()),console.log("tab2:"+n.html());var l=setInterval(r,30);e.mouseover(function(){clearInterval(l)}),e.mouseout(function(){l=setInterval(r,30)}),$("#slideBox1").slide({mainCell:".bd ul",autoPlay:!0,delayTime:0,trigger:"click"}),$("#slideBox2").slide({mainCell:".bd ul",autoPlay:!0}),$("#slideBox3").slide({mainCell:".bd ul",autoPlay:!0}),$(".scrollLoading").scrollLoading()}},methods:{}},o=n(0),component=Object(o.a)(c,function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this.content)}})},[],!1,null,null,null);t.default=component.exports}}]);