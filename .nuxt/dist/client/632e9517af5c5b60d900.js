(window.webpackJsonp=window.webpackJsonp||[]).push([[92,94],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"formatAnfaTms",function(){return r}),n.d(t,"makeAnfaTmsUrl",function(){return c});n(16);function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(e+="").replace(/href="http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?/gim,'href="').replace(/href="\/anfacms/gim,'href="/zixun').replace(/src="\/zixun\//gim,'src="/anfacms/').replace(/http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,"/zixun")}function c(path){return"/anfacms/"+path.replace("/zixun","")}},570:function(e,t,n){"use strict";n.r(t);n(16);var r=n(3),c=n(231),d={name:"CheYuan",head(){return{title:this.metatitle,meta:[{hid:"description",name:"description",content:this.desc}],link:[{rel:"stylesheet",href:"/zxnews_files/n/basic.css"},{rel:"stylesheet",href:"/zxnews_files/n/mains.css"}],script:[{src:"/js/city-picker.data.js"},{src:"/js/city-picker.js"},{src:"/js/jquery.pagination.min.js"}]}},data:()=>({recommendList:[],dataset:[],content:"",metatitle:"",desc:"",keyw:""}),asyncData:e=>Object(r.a)(function*(){let t=e.$axios,path=(e.app,e.query,e.params,e.route.path);-1===path.indexOf(".jhtml")&&(path=path.replace(/\/?$/,"/index.jhtml"));let n=yield t.get(Object(c.makeAnfaTmsUrl)(path));return{content:Object(c.formatAnfaTms)(n.data)}})(),mounted(){},methods:{}},l=n(1),component=Object(l.a)(d,function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this.content)}})},[],!1,null,null,null);t.default=component.exports}}]);