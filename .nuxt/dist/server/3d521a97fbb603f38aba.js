exports.ids=[40],exports.modules={161:function(t,e,r){"use strict";r.r(e);var o=r(94),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,function(){return o[t]})}(l);e.default=n.a},162:function(t,e,r){(t.exports=r(3)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},163:function(t,e,r){var content=r(223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(4).default;t.exports.__inject__=function(t){o("724355f2",content,!0,t)}},187:function(t,e,r){"use strict";var o=r(0);var component=Object(o.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"VueToNuxtLogo"},[this._ssrNode('<div class="Triangle Triangle--two"></div> <div class="Triangle Triangle--one"></div> <div class="Triangle Triangle--three"></div> <div class="Triangle Triangle--four"></div>')])},[],!1,function(t){var e=r(161);e.__inject__&&e.__inject__(t)},null,"267a9e85");e.a=component.exports},222:function(t,e,r){"use strict";r.r(e);var o=r(163),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,function(){return o[t]})}(l);e.default=n.a},223:function(t,e,r){(t.exports=r(3)(!1)).push([t.i,".container{min-height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},375:function(t,e,r){"use strict";r.r(e);var o=r(187),n=r(2),l=r.n(n),d={components:{Logo:o.a},async asyncData(){const{data:data}=await l.a.get("https://jsonplaceholder.typicode.com/users");return{users:data}}},c=r(0);var component=Object(c.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[t._ssrNode("<div>","</div>",[r("logo"),t._ssrNode(' <h1 class="title">\n      nuxtpage24\n    </h1> <h2 class="subtitle">\n      My primo Nuxt.js project\n    </h2> <div class="links"><a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a> <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a></div> <h2>Users</h2> '),t._ssrNode('<ul class="users">',"</ul>",t._l(t.users,function(e){return t._ssrNode("<li>","</li>",[r("nuxt-link",{attrs:{to:"/product/"+e.id}},[t._v("\n          "+t._s(e.name)+"\n        ")])],1)}),0)],2)])},[],!1,function(t){var e=r(222);e.__inject__&&e.__inject__(t)},null,"9b9fc3c2");e.default=component.exports},94:function(t,e,r){var content=r(162);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(4).default;t.exports.__inject__=function(t){o("1c93b39a",content,!0,t)}}};
//# sourceMappingURL=3d521a97fbb603f38aba.js.map