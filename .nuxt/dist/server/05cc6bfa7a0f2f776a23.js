exports.ids=[65],exports.modules={113:function(t,e,r){var content=r(133);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var d=r(3).default;t.exports.__inject__=function(t){d("2b13c9e9",content,!0,t)}},114:function(t,e,r){"use strict";var d={props:{url:{type:String,default:"/member/images/banner_gsjj.jpg"}}},c=r(0),component=Object(c.a)(d,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"banner-box"},[this._ssrNode("<img"+this._ssrAttr("src",this.url)+">")])},[],!1,null,null,"759db938");e.a=component.exports},132:function(t,e,r){"use strict";r.r(e);var d=r(113),c=r.n(d);for(var n in d)"default"!==n&&function(t){r.d(e,t,function(){return d[t]})}(n);e.default=c.a},133:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".side_left ul[data-v-19f9c8ac]{height:auto}",""])},135:function(t,e,r){"use strict";var d={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},c=r(0);var component=Object(c.a)(d,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"side_left"},[t._ssrNode('<ul data-v-19f9c8ac><li class="side_title" data-v-19f9c8ac><span data-v-19f9c8ac>客户服务</span></li> <li'+t._ssrClass("side_memu",-1!==t.tpath.indexOf("order")?"active":"")+" data-v-19f9c8ac><a"+t._ssrAttr("href",t.mid+"-order")+" data-v-19f9c8ac><span data-v-19f9c8ac>在线下单</span></a></li> <li"+t._ssrClass("side_memu",-1===t.tpath.indexOf("order")&&-1===t.tpath.indexOf("recruit")?"active":"")+' data-v-19f9c8ac><span data-v-19f9c8ac>查询服务</span></li> <ul class="side_submemu " data-v-19f9c8ac><li'+t._ssrClass(null,-1!==t.tpath.indexOf("chajian")?"now":"")+" data-v-19f9c8ac><a"+t._ssrAttr("href",t.mid+"-chajian")+" data-v-19f9c8ac><span data-v-19f9c8ac>查件（物流追踪）</span></a></li> <li"+t._ssrClass(null,-1!==t.tpath.indexOf("line")?"now":"")+" data-v-19f9c8ac><a"+t._ssrAttr("href",t.mid+"-line")+" data-v-19f9c8ac><span data-v-19f9c8ac>物流专线</span></a></li> <li"+t._ssrClass(null,-1!==t.tpath.indexOf("wangdian")?"now":"")+" data-v-19f9c8ac><a"+t._ssrAttr("href",t.mid+"-wangdian")+" data-v-19f9c8ac><span data-v-19f9c8ac>网点分布</span></a></li> <li"+t._ssrClass(null,-1!==t.tpath.indexOf("huo")?"now":"")+" data-v-19f9c8ac><a"+t._ssrAttr("href",t.mid+"-huo")+" data-v-19f9c8ac><span data-v-19f9c8ac>货源信息</span></a></li></ul> <li"+t._ssrClass("side_memu",-1!==t.tpath.indexOf("recruit")?"active":"")+" data-v-19f9c8ac><a"+t._ssrAttr("href",t.mid+"-recruit")+" data-v-19f9c8ac><span data-v-19f9c8ac>招聘信息</span></a></li></ul>")])},[],!1,function(t){var e=r(132);e.__inject__&&e.__inject__(t)},"19f9c8ac","5b5ef78e");e.a=component.exports},291:function(t,e,r){var content=r(524);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var d=r(3).default;t.exports.__inject__=function(t){d("5a96ac0a",content,!0,t)}},523:function(t,e,r){"use strict";r.r(e);var d=r(291),c=r.n(d);for(var n in d)"default"!==n&&function(t){r.d(e,t,function(){return d[t]})}(n);e.default=c.a},524:function(t,e,r){(t.exports=r(2)(!1)).push([t.i,".search_input3 input[data-v-5a32991b]{border:none;width:100%}.right_bt2 .bt_04[data-v-5a32991b],.wd_item04[data-v-5a32991b]{width:130px}.right_bt2 .bt_06[data-v-5a32991b]{width:210px}.wd_item06[data-v-5a32991b]{width:220px}",""])},586:function(t,e,r){"use strict";r.r(e);var d=r(114),c=r(135),n={components:{MemberBanner:d.a,MemberSidebar:c.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"}]},layout:"member",data:()=>({query:{belongCityName:""}}),mounted(){let t=this.$store.state.member.id,e=this;seajs.use(["/member/js/jquery.pagination.min.js"],function(){seajs.use(["/js/city-picker.js"],function(){$("#pagination1").pagination({currentPage:1,totalPage:e.$store.state.member.pointTotal,callback:function(t){$("#current1").text(t),e.$store.dispatch("member/getRecruitList",{companyId:e.$route.params.id,pageSize:10,jobTitle:e.$route.query.key,currentPage:t}),window.location.href="#top"}}),$(".search_search").click(function(){window.location="/member/"+t+"-recruit?key="+($("#search_key").val()||"")})})})},async fetch({store:t,params:e,$axios:r,error:d,query:c}){t.commit("member/setId",e.id),await Promise.all([t.dispatch("member/GETCOMPANYINFO",e.id).catch(t=>{"network"===t.type?d({statusCode:500,message:t.msg}):d({statusCode:404,message:t.msg})}),t.dispatch("member/getRecruitList",{companyId:e.id,jobTitle:c.key,pageSize:10,currentPage:1})])}},l=r(0);var component=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("MemberBanner",{attrs:{url:"/member/images/banner_wd.jpg"}}),t._ssrNode(" "),t._ssrNode('<div class="main" data-v-5a32991b>',"</div>",[r("MemberSidebar"),t._ssrNode(' <div id="js004" class="right" data-v-5a32991b><div class="right_bt1" data-v-5a32991b><div class="right_bt1_1" data-v-5a32991b><img src="/member/images/wd.png" data-v-5a32991b><span data-v-5a32991b>招聘信息</span></div> <div class="right_bt1_2" data-v-5a32991b><div class="search_input search_input3" data-v-5a32991b><input id="search_key" placeholder="请输入职位名称"'+t._ssrAttr("value",t.$route.query.key)+' style="height: 100%;" data-v-5a32991b></div> <div class="search_button" data-v-5a32991b><input readonly="readonly" value="搜索" class="search_search" data-v-5a32991b></div></div></div> <div class="right_bt2" data-v-5a32991b><ul data-v-5a32991b><li class="bt_01" data-v-5a32991b>职位名称</li> <li class="bt_02" data-v-5a32991b>招聘人数</li> <li class="bt_03" data-v-5a32991b>薪资范围</li> <li class="bt_04" data-v-5a32991b>学历要求</li> <li class="bt_05" data-v-5a32991b>工作地址</li> <li class="bt_06" data-v-5a32991b>发布时间</li></ul></div> <div class="wd_none" data-v-5a32991b><span data-v-5a32991b>暂无网点信息</span></div> '+t._ssrList(t.$store.state.member.recruitList.list,function(e,r){return'<div class="wd_item" data-v-5a32991b><a'+t._ssrAttr("href","/member/"+t.$store.state.member.id+"-recruitdetail?id="+e.id)+' target="_blank" data-v-5a32991b><ul data-v-5a32991b><li class="wd_item01" data-v-5a32991b><span'+t._ssrAttr("title",e.jobTitle)+' id="nr031" data-v-5a32991b>'+t._ssrEscape(t._s(e.jobTitle))+'</span></li> <li class="wd_item02" data-v-5a32991b><span id="nr032" data-v-5a32991b>'+t._ssrEscape(t._s(e.recruitNum))+'</span></li> <li class="wd_item03" data-v-5a32991b><span id="nr033" data-v-5a32991b>'+t._ssrEscape(t._s(e.salaryBegin)+"-"+t._s(e.salaryEnd))+'</span></li> <li class="wd_item04" data-v-5a32991b><span id="nr034" data-v-5a32991b>'+t._ssrEscape(t._s(e.education))+'</span></li> <li class="wd_item05" data-v-5a32991b><span id="nr035" data-v-5a32991b>'+t._ssrEscape(t._s(e.workProvince)+t._s(e.workCity)+t._s(e.workArea))+"</span></li> <li"+t._ssrAttr("title",e.updateTime||e.createTime)+' class="wd_item06" data-v-5a32991b>'+t._ssrEscape(t._s(e.updateTime||e.createTime))+"</li></ul></a></div>"})+'</div> <div class="box" style="float: right;margin-right: 200px;" data-v-5a32991b><div id="pagination1" class="page fl" data-v-5a32991b></div> <div class="info fl" data-v-5a32991b></div></div>')],2)],2)},[],!1,function(t){var e=r(523);e.__inject__&&e.__inject__(t)},"5a32991b","5b97ad7d");e.default=component.exports}};
//# sourceMappingURL=05cc6bfa7a0f2f776a23.js.map