exports.ids=[66,68],exports.modules={161:function(e,t,n){"use strict";function r(e=""){return(e+="").replace(/href="http:\/\/192\.168\.1\.79/gim,'href="').replace(/href="\/anfacms/gim,'href="/zixun').replace(/src="\/zixun\//gim,'src="/anfacms/')}function c(path){return"http://192.168.1.180/anfacms/"+path.replace("/zixun","")}n.r(t),n.d(t,"formatAnfaTms",function(){return r}),n.d(t,"makeAnfaTmsUrl",function(){return c})},383:function(e,t,n){"use strict";n.r(t);var r=n(161),c={name:"CheYuan",head(){return{title:this.metatitle,meta:[{hid:"description",name:"description",content:this.desc}],link:[{rel:"stylesheet",href:"/zxnews_files/n/basic.css"},{rel:"stylesheet",href:"/zxnews_files/n/mains.css"}],script:[{src:"/js/city-picker.data.js"},{src:"/js/city-picker.js"},{src:"/js/jquery.pagination.min.js"}]}},data:()=>({recommendList:[],dataset:[],content:"",metatitle:"",desc:"",keyw:""}),async asyncData({$axios:e,app:t,query:n,params:c,route:m}){let path=m.path;-1===path.indexOf(".jhtml")&&(path=path.replace(/\/?$/,"/index.jhtml"));let l=await e.get(Object(r.makeAnfaTmsUrl)(path));return{content:Object(r.formatAnfaTms)(l.data)}},mounted(){},methods:{}},m=n(1),component=Object(m.a)(c,function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this.content)}},[])},[],!1,null,null,"df495d44");t.default=component.exports}};
//# sourceMappingURL=162ebb15500b3f726071.js.map