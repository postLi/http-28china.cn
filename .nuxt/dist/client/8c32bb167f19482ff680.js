(window.webpackJsonp=window.webpackJsonp||[]).push([[92,94],{288:function(e,t,n){"use strict";n.r(t),n.d(t,"formatAnfaTms",function(){return r}),n.d(t,"makeAnfaTmsUrl",function(){return c});n(25);function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(e+="").replace(/href="http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?/gim,'href="').replace(/href="\/anfacms/gim,'href="/zixun').replace(/src="\/zixun\//gim,'src="/anfacms/').replace(/http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,"/zixun")}function c(path){return"/anfacms/"+path.replace("/zixun","")}},590:function(e,t,n){"use strict";n.r(t);n(25),n(65);var r=n(10),c=n(288),o={name:"CheYuan",head:function(){return{title:this.metatitle,meta:[{hid:"description",name:"description",content:this.desc}],link:[{rel:"stylesheet",href:"/zxnews_files/n/basic.css"},{rel:"stylesheet",href:"/zxnews_files/n/mains.css"}],script:[{src:"/js/city-picker.data.js"},{src:"/js/city-picker.js"},{src:"/js/jquery.pagination.min.js"}]}},data:function(){return{recommendList:[],dataset:[],content:"",metatitle:"",desc:"",keyw:""}},asyncData:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n,r,path,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.app,t.query,t.params,r=t.route,-1===(path=r.path).indexOf(".jhtml")&&(path=path.replace(/\/?$/,"/index.jhtml")),e.next=5,n.get(Object(c.makeAnfaTmsUrl)(path));case 5:return o=e.sent,e.abrupt("return",{content:Object(c.formatAnfaTms)(o.data)});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),mounted:function(){},methods:{}},f=n(0),component=Object(f.a)(o,function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this.content)}})},[],!1,null,null,null);t.default=component.exports}}]);