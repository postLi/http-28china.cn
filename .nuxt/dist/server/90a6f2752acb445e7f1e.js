exports.ids=[55],exports.modules={107:function(e,t,l){"use strict";var c=l(0),component=Object(c.a)({},function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"banner-box"},[this._ssrNode('<img src="/member/images/banner_gsjj.png">')])},[],!1,null,null,"759db938");t.a=component.exports},123:function(e,t,l){"use strict";var c={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},n=l(0),component=Object(n.a)(c,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"side_left"},[e._ssrNode('<ul><li class="side_title"><span>关于我们</span></li> <li'+e._ssrClass("side_memu",-1!==e.tpath.indexOf("jianjie")?"active":"")+"><a"+e._ssrAttr("href",e.mid+"-jianjie")+"><span>公司简介</span></a></li> <li"+e._ssrClass("side_memu",-1!==e.tpath.indexOf("contactus")?"active":"")+"><a"+e._ssrAttr("href",e.mid+"-contactus")+"><span>联系我们</span></a></li> <li"+e._ssrClass("side_memu",-1!==e.tpath.indexOf("cpfw")?"active":"")+"><a"+e._ssrAttr("href",e.mid+"-cpfw")+"><span>产品服务</span></a></li> "+(-1!==e.tpath.indexOf("cpfw")?'<ul class="side_submemu"><li'+e._ssrClass(null,-1===e.tpath.indexOf("cpfw2")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-cpfw")+"><span>主营产品</span></a></li> <li"+e._ssrClass(null,-1!==e.tpath.indexOf("cpfw2")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-cpfw2")+"><span>增值服务</span></a></li></ul>":"\x3c!----\x3e")+"</ul>")])},[],!1,null,null,"3cc03c54");t.a=component.exports},486:function(e,t,l){"use strict";l.r(t);var c=l(107),n=l(123),r={components:{MemberBanner:c.a,MemberSidebar:n.a},computed:{opdata(){return this.$store.state.member.company.otherServiceCodeList},psdata(){return this.$store.state.member.company.productServiceCodeList}},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"}]},layout:"member",mounted(){seajs.use(["/member/js/index.js","/js/collection.js"])},async fetch({store:e,params:t,$axios:l,error:c}){e.commit("member/setId",t.id),await e.dispatch("member/GETCOMPANYINFO",t.id).catch(e=>{"network"===e.type?c({statusCode:500,message:e.msg}):c({statusCode:404,message:e.msg})})}},d=l(0),component=Object(d.a)(r,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("MemberBanner"),e._ssrNode(" "),e._ssrNode('<div class="main">',"</div>",[l("MemberSidebar"),e._ssrNode(' <div class="right main_nr"><div class="nr_bt"><div class="nr_bt1"><span>主营产品</span></div></div> <div class="nr"><ul>'+(-1!==e.psdata.indexOf("AF02701")?'<li id="cp01" class="cp"><p class="p1"><em></em><span style="float: left;">整车运输</span></p> <p class="p2">据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</p></li>':"\x3c!----\x3e")+" "+(-1!==e.psdata.indexOf("AF02702")?'<li id="cp02" class="cp"><p class="p1"><em></em><span style="float: left;">零担运输</span></p> <p class="p2">客户可享受“量多价优，全程无忧”的超值服务。</p></li>':"\x3c!----\x3e")+" "+(-1!==e.psdata.indexOf("AF02703")?'<li id="cp03" class="cp"><p class="p1"><em></em><span style="float: left;">专线运输</span></p> <p class="p2">据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</p></li>':"\x3c!----\x3e")+" "+(-1!==e.psdata.indexOf("AF02704")?'<li id="cp04" class="cp"><p class="p1"><em></em><span style="float: left;">特大货物运输</span></p> <p class="p2">以客为本、服务至上，可靠、安全的大件货运运输网络以及先进的管理技术</p></li>':"\x3c!----\x3e")+" "+(-1!==e.psdata.indexOf("AF02705")?'<li id="cp05" class="cp"><p class="p1"><em></em><span style="float: left;">大件运输</span></p> <p class="p2">提供一体化综合运输服务，以专业的大件运输方案，限度降低运输成本，满足客户对 运输服务更高层次的需求</p></li>':"\x3c!----\x3e")+" "+(-1!==e.psdata.indexOf("AF02706")?'<li id="cp06" class="cp"><p class="p1"><em></em><span style="float: left;">集装箱运输</span></p> <p class="p2">安全、迅速、简便、价廉”，实现快速、低耗、高效率及高效益地完成运输生产过程并将货物送达目的地交付给收货人</p></li>':"\x3c!----\x3e")+" "+(-1!==e.psdata.indexOf("AF02707")?'<li id="cp07" class="cp"><p class="p1"><em></em><span style="float: left;">冷藏运输</span></p> <p class="p2">在运输全过程中，无论是装卸搬运、变更运输方式、更换包装设备等环节，都使所运输货物始终保持一定温度的运输。</p></li>':"\x3c!----\x3e")+" "+(-1!==e.psdata.indexOf("AF02708")?'<li id="cp08" class="cp"><p class="p1"><em></em><span style="float: left;">危险品运输</span></p> <p class="p2">危险品是易燃易爆有强烈腐蚀性的物品的统称。包含：爆炸品、压缩气体和液化气体、易燃液体、易燃固体、自燃物品和遇湿易燃物品、氧化剂和有机过氧化物、毒害品和感染性物品、放射性物品、腐蚀品</p></li>':"\x3c!----\x3e")+" "+(-1!==e.psdata.indexOf("AF02709")?'<li id="cp09" class="cp"><p class="p1"><em></em><span style="float: left;">仓储</span></p> <p class="p2">依托自身强大的仓储和运输网络资源，为您提供一站式的供应链物流服务。</p></li>':"\x3c!----\x3e")+"</ul></div></div>")],2)],2)},[],!1,null,null,"7b2b6762");t.default=component.exports}};
//# sourceMappingURL=90a6f2752acb445e7f1e.js.map