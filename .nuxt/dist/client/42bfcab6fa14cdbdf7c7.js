(window.webpackJsonp=window.webpackJsonp||[]).push([[29,30],{234:function(e,t,l){"use strict";l.r(t),l.d(t,"formatAnfaTms",function(){return n}),l.d(t,"makeAnfaTmsUrl",function(){return r});l(13);function n(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(e+="").replace(/href=("|')http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,"href=$1/help").replace(/src="\/zixun\//gim,'src="/anfacms/').replace(/href="\/anfacms/gim,'href="/help').replace(/http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,"/help")}function r(path){return"/anfacms/"+path.replace("/help","")}},588:function(e,t,l){"use strict";l.r(t);var n=l(5),r=l(234),c={name:"Help",layout:"subLayout",head:{title:"帮助中心",meta:[{hid:"description",name:"description",content:"28快运是专业提供零担运输和整车运输等物流服务平台，同时提供免费发布货源、车源、专线。货主在线发货，物流跟踪查询，服务有保障，让您发货省时，省钱，更省心！"},{hid:"keywords",name:"keywords",content:"物流,物流平台,物流专线,物流公司,物流服务,在线发货,查询运价,运单查询,运单跟踪,物流帮"}],link:[{rel:"stylesheet",href:"/help/index.css"},{rel:"stylesheet",href:"/help/list_question.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/help/list_help.css"}],script:[{src:"/js/city-picker.data.js"},{src:"/js/city-picker.js"},{src:"/zxnews_files/ty_window.js"},{src:"/zxnews_files/jquery.SuperSlide.2.1.1.js"},{src:"/index/js/pic_scroll.js"}]},data:()=>({recommendList:[],dataset:[],content:""}),asyncData:e=>Object(n.a)(function*(){let t=e.$axios,l=(e.app,e.query,e.params,e.route);console.log("route.path:",l.path);let n=yield t.get(Object(r.makeAnfaTmsUrl)(l.path));return{content:Object(r.formatAnfaTms)(n.data)}})(),mounted(){{var e=$(".echart_scroll_nr"),t=$(".echart_scroll_nr1"),l=$(".echart_scroll_nr2");function n(){l[0].offsetWidth-e[0].scrollLeft<=0?e[0].scrollLeft-=t[0].offsetWidth:e[0].scrollLeft++}l.html(t.html()),console.log("tab2:"+l.html());var r=setInterval(n,30);e.mouseover(function(){clearInterval(r)}),e.mouseout(function(){r=setInterval(n,30)}),$("#slideBox1").slide({mainCell:".bd ul",autoPlay:!0,delayTime:0,trigger:"click"}),$("#slideBox2").slide({mainCell:".bd ul",autoPlay:!0}),$("#slideBox3").slide({mainCell:".bd ul",autoPlay:!0}),$(".scrollLoading").scrollLoading()}},methods:{}},o=l(1),component=Object(o.a)(c,function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this.content)}})},[],!1,null,null,null);t.default=component.exports}}]);