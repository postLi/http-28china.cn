exports.ids=[60],exports.modules={107:function(e,t,r){"use strict";var n=r(0),component=Object(n.a)({},function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"banner-box"},[this._ssrNode('<img src="/member/images/banner_gsjj.png">')])},[],!1,null,null,"759db938");t.a=component.exports},123:function(e,t,r){"use strict";var n={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},c=r(0),component=Object(c.a)(n,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"side_left"},[e._ssrNode('<ul><li class="side_title"><span>关于我们</span></li> <li'+e._ssrClass("side_memu",-1!==e.tpath.indexOf("jianjie")?"active":"")+"><a"+e._ssrAttr("href",e.mid+"-jianjie")+"><span>公司简介</span></a></li> <li"+e._ssrClass("side_memu",-1!==e.tpath.indexOf("contactus")?"active":"")+"><a"+e._ssrAttr("href",e.mid+"-contactus")+"><span>联系我们</span></a></li> <li"+e._ssrClass("side_memu",-1!==e.tpath.indexOf("cpfw")?"active":"")+"><a"+e._ssrAttr("href",e.mid+"-cpfw")+"><span>产品服务</span></a></li> "+(-1!==e.tpath.indexOf("cpfw")?'<ul class="side_submemu"><li'+e._ssrClass(null,-1===e.tpath.indexOf("cpfw2")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-cpfw")+"><span>主营产品</span></a></li> <li"+e._ssrClass(null,-1!==e.tpath.indexOf("cpfw2")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-cpfw2")+"><span>增值服务</span></a></li></ul>":"\x3c!----\x3e")+"</ul>")])},[],!1,null,null,"3cc03c54");t.a=component.exports},477:function(e,t,r){"use strict";r.r(t);var n=r(107),c=r(123),l={components:{MemberBanner:n.a,MemberSidebar:c.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"}]},layout:"member",computed:{company(){return this.$store.state.member.company}},mounted(){seajs.use(["/member/js/index.js","/js/collection.js"])},async fetch({store:e,params:t,$axios:r,error:n}){e.commit("member/setId",t.id),await e.dispatch("member/GETCOMPANYINFO",t.id).catch(e=>{"network"===e.type?n({statusCode:500,message:e.msg}):n({statusCode:404,message:e.msg})})}},m=r(0),component=Object(m.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("MemberBanner"),this._ssrNode(" "),this._ssrNode('<div class="main">',"</div>",[t("MemberSidebar"),this._ssrNode(' <div class="right main_nr"><div class="nr_bt"><div class="nr_bt1"><span>公司新闻</span></div></div> <div id="nr083" class="nr">'+this._ssrEscape(this._s(this.company.companyName||"本司")+"是一家经国家主管部门批准的专业经营物流运输业务的的现代化物流运输企业，集运输、仓储、包装、配送信息处理一体化于一身。经过多年的发展公司已拥有一支专业化的物流管理和从业人员队伍并拥有数目庞大的运输车队。")+"</div></div>")],2)],2)},[],!1,null,null,"0ffcb2a4");t.default=component.exports}};
//# sourceMappingURL=dc0c7b4239a4f705d3be.js.map