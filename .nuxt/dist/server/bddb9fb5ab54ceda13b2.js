exports.ids=[65],exports.modules={117:function(e,t,r){"use strict";var n={props:{url:{type:String,default:"/member/images/banner_gsjj.jpg"}}},l=r(0),component=Object(l.a)(n,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"banner-box"},[this._ssrNode("<img"+this._ssrAttr("src",this.url)+">")])},[],!1,null,null,"759db938");t.a=component.exports},145:function(e,t,r){"use strict";var n={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},l=r(0),component=Object(l.a)(n,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"side_left"},[e._ssrNode('<ul><li class="side_title"><span>客户服务</span></li> <li'+e._ssrClass("side_memu",-1!==e.tpath.indexOf("order")?"active":"")+"><a"+e._ssrAttr("href",e.mid+"-order")+"><span>在线下单</span></a></li> <li"+e._ssrClass("side_memu",-1===e.tpath.indexOf("order")?"active":"")+'><span>查询服务</span></li> <ul class="side_submemu "><li'+e._ssrClass(null,-1!==e.tpath.indexOf("chajian")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-chajian")+"><span>查件（物流追踪）</span></a></li> <li"+e._ssrClass(null,-1!==e.tpath.indexOf("line")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-line")+"><span>物流专线</span></a></li> <li"+e._ssrClass(null,-1!==e.tpath.indexOf("wangdian")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-wangdian")+"><span>网点分布</span></a></li> <li"+e._ssrClass(null,-1!==e.tpath.indexOf("huo")?"now":"")+"><a"+e._ssrAttr("href",e.mid+"-huo")+"><span>货源信息</span></a></li></ul></ul>")])},[],!1,null,null,"5b5ef78e");t.a=component.exports},574:function(e,t,r){"use strict";r.r(t);var n=r(117),l=r(145),d={components:{MemberBanner:n.a,MemberSidebar:l.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"}]},layout:"member",data:()=>({query:{belongCityName:""}}),mounted(){let e=this.$store.state.member.id,t=this;seajs.use(["/member/js/jquery.pagination.min.js"],function(){seajs.use(["/js/city-picker.js"],function(){$("#pagination1").pagination({currentPage:1,totalPage:t.$store.state.member.pointTotal,callback:function(e){$("#current1").text(e),t.$store.dispatch("member/GETCOMPANYPOINTINFO",{companyId:t.$route.params.id,pageSize:10,currentPage:e}),window.location.href="#top"}});var r=$.getParams("startp"),n=$.getParams("startc"),l=$.getParams("starta");$(".search_input3 input").citypicker({province:r,city:n,district:l}),$(".search_search").click(function(){var t=[];$(".search_input3 .select-item").each(function(i,e){t.push($(this).text())});var r=t[0],n=t[1],l=t[2];r||(r=""),n||(n=""),l||(l="");var address,d="&startp="+r+"&startc="+n+"&starta="+l;(address="&address="+(address=r+n+l))||(address=""),address=encodeURI(address),window.location="/member/"+e+"-wangdian?"+address+d})})})},async fetch({store:e,params:t,$axios:r,error:n,query:l}){e.commit("member/setId",t.id),await Promise.all([e.dispatch("member/GETCOMPANYINFO",t.id).catch(e=>{"network"===e.type?n({statusCode:500,message:e.msg}):n({statusCode:404,message:e.msg})}),e.dispatch("member/GETCOMPANYPOINTINFO",{companyId:t.id,pageSize:10,currentPage:1,belongCityName:(l.startp||"")+(l.startc||"")})])}},c=r(0),component=Object(c.a)(d,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("MemberBanner",{attrs:{url:"/member/images/banner_wd.jpg"}}),e._ssrNode(" "),e._ssrNode('<div class="main">',"</div>",[r("MemberSidebar"),e._ssrNode(' <div id="js004" class="right"><div class="right_bt1"><div class="right_bt1_1"><img src="/member/images/wd.png"><span>网点分布</span></div> <div class="right_bt1_2"><div class="search_input search_input3"><input data-toggle="city-picker" data-level="district" placeholder="请选择 省-市" style="height: 100%;"></div> <div class="search_button"><input readonly="readonly" value="搜索" class="search_search"></div></div></div> <div class="right_bt2"><ul><li class="bt_01">网点名称</li> <li class="bt_02">所在地</li> <li class="bt_03">联系人</li> <li class="bt_04">联系电话</li> <li class="bt_05">详细地址</li> <li class="bt_06">操作</li></ul></div> <div class="wd_none"><span>暂无网点信息</span></div> '+e._ssrList(e.$store.state.member.pointList,function(t,r){return'<div class="wd_item"><ul><li class="wd_item01"><span'+e._ssrAttr("title",t.pointName)+' id="nr031">'+e._ssrEscape(e._s(t.pointName))+'</span></li> <li class="wd_item02"><span id="nr032">'+e._ssrEscape(e._s(t.belongCityName))+'</span></li> <li class="wd_item03"><span id="nr033">'+e._ssrEscape(e._s(t.name))+'</span></li> <li class="wd_item04"><span id="nr034">'+e._ssrEscape(e._s(t.mobile))+'</span></li> <li class="wd_item05"><span id="nr035"'+e._ssrAttr("title",t.address||"")+">"+e._ssrEscape(e._s((t.address||"").replace(t.belongCityName,"")))+'</span></li> <li class="wd_item06"><a'+e._ssrAttr("href","/member/"+e.$store.state.member.id+"-order")+'><input readonly="readonly" value="下单"></a></li></ul></div>'})+'</div> <div class="box" style="float: right;margin-right: 200px;"><div id="pagination1" class="page fl"></div> <div class="info fl"></div></div>')],2)],2)},[],!1,null,null,"077fa646");t.default=component.exports}};
//# sourceMappingURL=bddb9fb5ab54ceda13b2.js.map