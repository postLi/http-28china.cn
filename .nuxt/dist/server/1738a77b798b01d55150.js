exports.ids=[53],exports.modules={103:function(e,t,r){"use strict";var n={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},l=r(0),component=Object(l.a)(n,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"side_left"},[e._ssrNode('<ul><li class="side_title"><span>关于我们</span></li> <li'+e._ssrClass("side_memu",-1!==e.tpath.indexOf("jianjie")?"active":"")+"><a"+e._ssrAttr("href",e.mid+"-jianjie")+"><span>公司简介</span></a></li> <li"+e._ssrClass("side_memu",-1!==e.tpath.indexOf("contactus")?"active":"")+"><a"+e._ssrAttr("href",e.mid+"-contactus")+"><span>联系我们</span></a></li> <li"+e._ssrClass("side_memu",-1!==e.tpath.indexOf("cpfw")?"active":"")+"><a"+e._ssrAttr("href",e.mid+"-cpfw")+"><span>产品服务</span></a></li> "+(-1!==e.tpath.indexOf("cpfw")?'<ul class="side_submemu"><li'+e._ssrClass(null,-1===e.tpath.indexOf("cpfw2")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-cpfw")+"><span>主营产品</span></a></li> <li"+e._ssrClass(null,-1!==e.tpath.indexOf("cpfw2")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-cpfw2")+"><span>增值服务</span></a></li></ul>":"\x3c!----\x3e")+"</ul>")])},[],!1,null,null,"760a7ed4");t.a=component.exports},436:function(e,t,r){"use strict";r.r(t);var n=r(88),l=r(103),c={components:{MemberBanner:n.a,MemberSidebar:l.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"}]},layout:"member",mounted(){seajs.use(["/member/js/index.js","/index/js/collection.js"])},async fetch({store:e,params:t,$axios:r,error:n}){e.commit("member/setId",t.id),await e.dispatch("member/GETCOMPANYINFO",t.id).catch(e=>{"network"===e.type?n({statusCode:500,message:e.msg}):n({statusCode:404,message:e.msg})})}},d=r(0),component=Object(d.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("MemberBanner"),this._ssrNode(" "),this._ssrNode('<div class="main">',"</div>",[t("MemberSidebar"),this._ssrNode(' <div class="right main_nr"><div class="nr_bt"><div class="nr_bt1"><span>公坸简介</span></div></div> <div id="nr083" class="nr">'+this._ssrEscape(this._s(this.$store.state.member.company.companyDes||""))+"</div></div>")],2)],2)},[],!1,null,null,"bc1468ce");t.default=component.exports},88:function(e,t,r){"use strict";var n=r(0),component=Object(n.a)({},function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"banner-box"},[this._ssrNode('<img src="/member/images/banner_gsjj.png">')])},[],!1,null,null,"1f56de38");t.a=component.exports}};
//# sourceMappingURL=1738a77b798b01d55150.js.map