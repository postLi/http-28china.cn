(window.webpackJsonp=window.webpackJsonp||[]).push([[28,30],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"formatAnfaTms",function(){return r}),n.d(t,"makeAnfaTmsUrl",function(){return c});n(13);function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(e+="").replace(/href=("|')http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,"href=$1/help").replace(/src="\/zixun\//gim,'src="/anfacms/').replace(/href="\/anfacms/gim,'href="/help').replace(/http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,"/help")}function c(path){return"/anfacms/"+path.replace("/help","")}},560:function(e,t,n){"use strict";n.r(t);n(13);var r=n(5),c=n(239),l={name:"CheYuan",layout:"subLayout",head(){return{title:this.metatitle,meta:[{hid:"description",name:"description",content:this.desc}],link:[{rel:"stylesheet",href:"/help/index.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/help/arc_question.css"},this.cssfile],script:[{src:"/js/city-picker.data.js"},{src:"/js/city-picker.js"},{src:"/js/jquery.pagination.min.js"},{src:"/help/suggest.js"}]}},data:()=>({recommendList:[],dataset:[],content:"",metatitle:"帮助中心",desc:"",keyw:""}),asyncData:e=>Object(r.a)(function*(){let t=e.$axios,n=(e.app,e.query,e.params,e.route),path=n.path;-1===path.indexOf(".jhtml")&&(path=path.replace(/\/?$/,"/index.jhtml"));let r=yield t.get(Object(c.makeAnfaTmsUrl)(path)),l={rel:"stylesheet",href:"/help/list_question.css"};return/(wzgg|khal)/.test(n.path)&&(l={rel:"stylesheet",href:"/help/list_help.css"}),{content:Object(c.formatAnfaTms)(r.data),cssfile:l}})(),mounted(){},methods:{}},h=n(0),component=Object(h.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this.content)}})},[],!1,null,null,null);t.default=component.exports}}]);