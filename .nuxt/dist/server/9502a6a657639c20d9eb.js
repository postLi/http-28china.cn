exports.ids=[84,86],exports.modules={131:function(e,t,n){"use strict";function r(e=""){return(e+="").replace(/href="http:\/\/192\.168\.1\.79/gim,'href="').replace(/href="\/anfacms/gim,'href="/zixun').replace(/src="\/zixun\//gim,'src="/anfacms/').replace(/http:\/\/192.168.1.79\/anfacms/gim,"/zixun")}function c(path){return"/anfacms/"+path.replace("/zixun","")}n.r(t),n.d(t,"formatAnfaTms",function(){return r}),n.d(t,"makeAnfaTmsUrl",function(){return c})},440:function(e,t,n){"use strict";n.r(t);var r=n(131),c={name:"CheYuan",head(){return{title:this.metatitle,meta:[{hid:"description",name:"description",content:this.desc}],link:[{rel:"stylesheet",href:"/zxnews_files/n/basic.css"},{rel:"stylesheet",href:"/zxnews_files/n/mains.css"}],script:[{src:"/js/city-picker.data.js"},{src:"/js/city-picker.js"},{src:"/js/jquery.pagination.min.js"}]}},data:()=>({recommendList:[],dataset:[],content:"",metatitle:"",desc:"",keyw:""}),async asyncData({$axios:e,app:t,query:n,params:c,route:m}){let path=m.path;-1===path.indexOf(".jhtml")&&(path=path.replace(/\/?$/,"/index.jhtml"));let l=await e.get(Object(r.makeAnfaTmsUrl)(path));return{content:Object(r.formatAnfaTms)(l.data)}},mounted(){},methods:{}},m=n(0),component=Object(m.a)(c,function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this.content)}},[])},[],!1,null,null,"068bcede");t.default=component.exports}};
//# sourceMappingURL=9502a6a657639c20d9eb.js.map