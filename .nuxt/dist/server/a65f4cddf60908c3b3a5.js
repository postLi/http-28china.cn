exports.ids=[23,24],exports.modules={135:function(e,t,r){"use strict";function n(e=""){return(e+="").replace(/href=("|')http:\/\/192\.168\.1\.79\/anfacms/gim,"href=$1/help").replace(/src="\/zixun\//gim,'src="/anfacms/').replace(/href="\/anfacms/gim,'href="/help').replace(/http:\/\/192.168.1.79\/anfacms/gim,"/help")}function c(path){return"/anfacms/"+path.replace("/help","")}r.r(t),r.d(t,"formatAnfaTms",function(){return n}),r.d(t,"makeAnfaTmsUrl",function(){return c})},455:function(e,t,r){"use strict";r.r(t);var n=r(135),c={name:"Help",layout:"subLayout",head:{title:"帮助中心",meta:[{hid:"description",name:"description",content:"28快运是专业提供零担运输和整车运输等物流服务平台，同时提供免费发布货源、车源、专线。货主在线发货，物流跟踪查询，服务有保障，让您发货省时，省钱，更省心！"},{hid:"keywords",name:"keywords",content:"物流,物流平台,物流专线,物流公司,物流服务,在线发货,查询运价,运单查询,运单跟踪,物流帮"}],link:[{rel:"stylesheet",href:"/help/index.css"},{rel:"stylesheet",href:"/help/list_question.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/help/list_help.css"}],script:[{src:"/js/city-picker.data.js"},{src:"/js/city-picker.js"},{src:"/zxnews_files/ty_window.js"},{src:"/zxnews_files/jquery.SuperSlide.2.1.1.js"},{src:"/index/js/pic_scroll.js"}]},data:()=>({recommendList:[],dataset:[],content:""}),async asyncData({$axios:e,app:t,query:r,params:c,route:l}){console.log("route.path:",l.path);let o=await e.get(Object(n.makeAnfaTmsUrl)(l.path));return{content:Object(n.formatAnfaTms)(o.data)}},mounted(){},methods:{}},l=r(0),component=Object(l.a)(c,function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this.content)}},[])},[],!1,null,null,"4db3188b");t.default=component.exports}};
//# sourceMappingURL=a65f4cddf60908c3b3a5.js.map