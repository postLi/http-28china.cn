exports.ids=[51],exports.modules={101:function(e,t,r){"use strict";var n=r(0),component=Object(n.a)({},function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"banner-box"},[this._ssrNode('<img src="/member/images/banner_gsjj.png">')])},[],!1,null,null,"759db938");t.a=component.exports},115:function(e,t,r){"use strict";var n={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},d=r(0),component=Object(d.a)(n,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"side_left"},[e._ssrNode('<ul><li class="side_title"><span>关于我们</span></li> <li'+e._ssrClass("side_memu",-1!==e.tpath.indexOf("jianjie")?"active":"")+"><a"+e._ssrAttr("href",e.mid+"-jianjie")+"><span>公司简介</span></a></li> <li"+e._ssrClass("side_memu",-1!==e.tpath.indexOf("contactus")?"active":"")+"><a"+e._ssrAttr("href",e.mid+"-contactus")+"><span>联系我们</span></a></li> <li"+e._ssrClass("side_memu",-1!==e.tpath.indexOf("cpfw")?"active":"")+"><a"+e._ssrAttr("href",e.mid+"-cpfw")+"><span>产品服务</span></a></li> "+(-1!==e.tpath.indexOf("cpfw")?'<ul class="side_submemu"><li'+e._ssrClass(null,-1===e.tpath.indexOf("cpfw2")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-cpfw")+"><span>主营产品</span></a></li> <li"+e._ssrClass(null,-1!==e.tpath.indexOf("cpfw2")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-cpfw2")+"><span>增值服务</span></a></li></ul>":"\x3c!----\x3e")+"</ul>")])},[],!1,null,null,"3cc03c54");t.a=component.exports},459:function(e,t,r){"use strict";r.r(t);var n=r(101),d=r(115),c={components:{MemberBanner:n.a,MemberSidebar:d.a},layout:"member",head:{link:[{rel:"stylesheet",href:"/member/css/list.css"},{rel:"stylesheet",href:"/member/css/contactUs.css"}]},computed:{company(){return this.$store.state.member.company}},mounted(){seajs.use(["http://api.map.baidu.com/getscript?v=2.0&ak=e0abRWFWOrgmN7emYjQGPj4Z0vyTVTfo&services=&t=20190102133327","/member/js/index.js","/js/collection.js"],function(){var map=new BMap.Map("allmap"),e=(new Object,member_01().jwd.split(",")),t=new BMap.Point(parseFloat(e[0]),parseFloat(e[1]));map.centerAndZoom(t,17);var marker=new BMap.Marker(t);map.addOverlay(marker),marker.setAnimation(BMAP_ANIMATION_BOUNCE),map.addControl(new BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]})),map.setCurrentCity("广州"),map.enableScrollWheelZoom(!0);var r={type:BMAP_NAVIGATION_CONTROL_SMALL};map.addControl(new BMap.NavigationControl(r))})},async fetch({store:e,params:t,$axios:r,error:n}){e.commit("member/setId",t.id),await e.dispatch("member/GETCOMPANYINFO",t.id).catch(e=>{"network"===e.type?n({statusCode:500,message:e.msg}):n({statusCode:404,message:e.msg})})}},l=r(0),component=Object(l.a)(c,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("MemberBanner"),e._ssrNode(" "),e._ssrNode('<div class="main">',"</div>",[r("MemberSidebar"),e._ssrNode(' <div class="contact main_nr"><div class="nr_bt"><div class="nr_bt1"><span>联系我们</span></div></div> <ul><li class="contact1"><p id="nr091" class="p1">'+e._ssrEscape(e._s(e.company.companyName))+'</p> <p>联系人：<em id="nr092">'+e._ssrEscape(e._s(e.company.contactsName))+'</em></p> <p>联系电话：<em id="nr093">'+e._ssrEscape(e._s(e.company.mobile))+'</em></p> <p>QQ：<em id="nr094">'+e._ssrEscape(e._s(e.company.qq))+'</em></p> <p>公司地址：<em id="nr095">'+e._ssrEscape(e._s(e.company.address))+'</em></p></li> <li class="contact2"><p class="p1">企业信息</p> <p>公司名称：<em id="nr096">'+e._ssrEscape(e._s(e.company.companyName))+'</em></p> <p>营业执照：<em id="nr097"></em></p> <p>法人/负责人：<em id="nr098">'+e._ssrEscape(e._s(e.company.corporation))+'</em></p> <p>公司成立时间：<em id="nr099">'+e._ssrEscape(e._s(e.company.foundTime))+'</em></p> <p>代收货款：<em id="nr0910"></em></p></li></ul> <div class="map"><div id="allmap" style="overflow: hidden; position: relative; z-index: 0; background-color: rgb(243, 241, 236); color: rgb(0, 0, 0); text-align: left;"></div> <div class="detail"><div class="detail-main"><dl class="address"><dt><div class="bg-img first"></div> <p>地址</p></dt> <dd id="nr0911">'+e._ssrEscape(e._s(e.company.address))+'</dd></dl> <dl><dt class="postal-code"><div class="bg-img"></div> <p>法人代表</p></dt> <dd id="nr0912">'+e._ssrEscape(e._s(e.company.corporation))+'</dd></dl> <dl class="server-phone"><dt><div class="bg-img"></div> <p>全国统一客服热线</p></dt> <dd id="nr0913">'+e._ssrEscape(e._s(e.company.mobile))+'</dd></dl> <dl class="website"><dt><div class="bg-img"></div> <p>公司名称</p></dt> <dd id="nr0914">'+e._ssrEscape(e._s(e.company.companyName))+"</dd></dl></div></div></div></div>")],2)],2)},[],!1,null,null,"2b6bf986");t.default=component.exports}};
//# sourceMappingURL=a8803434a9839d5ecac6.js.map