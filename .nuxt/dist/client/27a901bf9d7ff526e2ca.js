(window.webpackJsonp=window.webpackJsonp||[]).push([[23,25],{269:function(e,t,n){"use strict";n.r(t),n.d(t,"formatAnfaTms",function(){return r}),n.d(t,"makeAnfaTmsUrl",function(){return c});n(29);function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(e+="").replace(/href=("|')http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,"href=$1/help").replace(/src="\/zixun\//gim,'src="/anfacms/').replace(/href="\/anfacms/gim,'href="/help').replace(/http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,"/help")}function c(path){return"/anfacms/"+path.replace("/help","")}},574:function(e,t,n){"use strict";n.r(t);n(29),n(58);var r=n(8),c=n(269),l={name:"CheYuan",layout:"subLayout",head:function(){return{title:this.metatitle,meta:[{hid:"description",name:"description",content:this.desc}],link:[{rel:"stylesheet",href:"/help/index.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/help/arc_question.css"},this.cssfile],script:[{src:"/js/city-picker.data.js"},{src:"/js/city-picker.js"},{src:"/js/jquery.pagination.min.js"},{src:"/help/suggest.js"}]}},data:function(){return{recommendList:[],dataset:[],content:"",metatitle:"帮助中心",desc:"",keyw:""}},asyncData:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n,r,path,l,h,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.app,t.query,t.params,r=t.route,-1===(path=r.path).indexOf(".jhtml")&&(path=path.replace(/\/?$/,"/index.jhtml")),e.next=5,n.get(Object(c.makeAnfaTmsUrl)(path));case 5:return l=e.sent,h=/(wzgg|khal)/.test(r.path),o={rel:"stylesheet",href:"/help/list_question.css"},h&&(o={rel:"stylesheet",href:"/help/list_help.css"}),e.abrupt("return",{content:Object(c.formatAnfaTms)(l.data),cssfile:o});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),mounted:function(){},methods:{}},h=n(1),component=Object(h.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this.content)}})},[],!1,null,null,null);t.default=component.exports}}]);