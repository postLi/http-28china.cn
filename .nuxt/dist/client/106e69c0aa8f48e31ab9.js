(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{251:function(t,e,r){t.exports=r.p+"img/58a2773.png"},306:function(t,e,r){var content=r(417);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("f22c023e",content,!0,{sourceMap:!1})},416:function(t,e,r){"use strict";var n=r(306);r.n(n).a},417:function(t,e,r){(t.exports=r(12)(!1)).push([t.i,"",""])},610:function(t,e,r){"use strict";r.r(e);r(62);var n=r(8);function c(t,e){return o.apply(this,arguments)}function o(){return(o=Object(n.a)(regeneratorRuntime.mark(function t(e,r){var n,c,o,l=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=l.length>2&&void 0!==l[2]?l[2]:{},(c=n).currentPage=r,c.pageSize=21,t.next=6,e.post("/28-web/logisticsPark/list",c);case 6:if(200!==(o=t.sent).data.status){t.next=11;break}return t.abrupt("return",{list:o.data.data.list,pages:o.data.data.pages,currentPage:o.data.data.pageNum});case 11:return t.abrupt("return",{list:[],pages:0,currentPage:1});case 12:case"end":return t.stop()}},t)}))).apply(this,arguments)}var l={name:"WuLiu",head:{link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/list_wlyq.css"}],script:[{src:"../js/city.js"},{src:"/layer/dist/layui.js"},{src:"../js/city-picker.js"},{src:"../js/jquery.pagination.min.js"}]},data:function(){return{pages:0,currentPage:1}},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,o,l,v,_,d,h,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.app,o=e.query,l={parkName:o.parkName?o.parkName:"",locationProvince:o.locationProvince?o.locationProvince:n.$cookies.get("currentProvinceFullName"),locationCity:o.locationCity?o.locationCity:n.$cookies.get("currentAreaFullName"),locationArea:o.locationArea?o.locationArea:""},(v=l).currentPage=1,v.pageSize=16,t.next=7,r.post("/28-web/logisticsPark/interested/list",v);case 7:return _=t.sent,(d=l).currentPage=1,d.pageSize=14,t.next=13,r.post("/28-web/logisticsPark/recommend/list",d);case 13:return h=t.sent,t.next=16,c(r,1,l);case 16:return f=t.sent,t.abrupt("return",{getGateWayList:f.list,pages:f.pages,currentPage:f.currentPage,getLogisticsPark:200===_.data.status?_.data.data.list:[],recommendParkList:200===h.data.status?h.data.data.list:[],vo:l});case 18:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){$("#parkAddress input").citypicker({province:this.vo.locationProvince,city:this.vo.locationCity,district:this.vo.locationArea}),$("#list_nav_a").html(this.vo.locationCity+this.vo.locationArea+"物流园区"),this.loadPagination()},methods:{search:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=[],$("#parkAddress .select-item").each(function(i,t){e.push($(this).text())}),this.vo.locationProvince=e[0]?e[0]:"",this.vo.locationCity=e[1]?e[1]:"",this.vo.locationArea=e[2]?e[2]:"",window.location.href="/wuliu?locationProvince=".concat(this.vo.locationProvince,"&locationCity=").concat(this.vo.locationCity,"&locationArea=").concat(this.vo.locationArea,"&parkName=").concat(this.vo.parkName);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),reload:function(){window.location.href="/wuliu"},loadPagination:function(){var t=this;$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return $("#current1").text(r),e.next=3,c(t.$axios,r,t.vo);case 3:n=e.sent,t.getGateWayList=n.list,t.currentPage=n.currentPage,window.location.href="#top";case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()})}}},v=(r(416),r(1)),component=Object(v.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yuanqu"},[n("div",{staticClass:"list_box"},[n("div",{staticClass:"herder"}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"list_left"},[n("div",{staticClass:"w1036",staticStyle:{"background-color":"#fff"}},[n("div",{staticClass:"select_con"},[n("dl",[t._m(1),t._v(" "),n("dd",[n("form",{attrs:{name:"zxaddform",method:"post",action:""}},[n("input",{attrs:{name:"a7",type:"hidden",value:"0"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"mid",value:"19"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"dopost",value:"search"}}),t._v(" "),t._m(2),t._v(" "),n("span",[t._v(" 园区名称 ：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vo.parkName,expression:"vo.parkName"}],staticClass:"list_input",attrs:{type:"text",placeholder:"请输入园区名称"},domProps:{value:t.vo.parkName},on:{input:function(e){e.target.composing||t.$set(t.vo,"parkName",e.target.value)}}}),t._v(" "),n("input",{staticClass:"list_button",attrs:{id:"search_wlyq",value:" 搜索 ",readonly:""},on:{click:function(e){return t.search()}}}),t._v(" "),n("input",{staticClass:"list_button",attrs:{id:"flush",name:"Submit2",value:"重置 ",readonly:""},on:{click:function(e){return t.reload()}}})])])])])]),t._v(" "),n("div",{staticClass:"w1036 list_wlyq"},[0===t.getGateWayList.length?n("div",{staticClass:"list_none",staticStyle:{display:"block"}},[n("span",[t._v("暂时没有找到您要查询的信息，可以看看其他园区哦")]),t._v(" "),n("img",{attrs:{src:r(251)}})]):t._e(),t._v(" "),t._l(t.getGateWayList,function(e,r){return n("ul",{key:r,staticClass:"wlzx_list"},[n("a",{attrs:{href:"/wuliu/detail?id="+e.id,target:"_blank"}},[n("li",{staticClass:"wlzx_list_01"},[n("img",{staticClass:"scrollLoading",attrs:{src:e.parkSignPicture?e.parkSignPicture:"../../static/images/list_wlzx/wlyq_pic.png",width:"268",height:"268"}})]),t._v(" "),n("li",{staticClass:"wlzx_list_02"},[n("span",[t._v(t._s(e.parkName))])]),t._v(" "),n("li",{staticClass:"wlzx_list_03"},[n("font",[t._v(t._s(e.transportNumber?e.transportNumber:0))]),n("i",[t._v("条")]),n("span",[t._v("优质专线")])],1),t._v(" "),n("li",{staticClass:"wlzx_list_04"},[n("span",[t._v(t._s(e.parkAddress))])]),t._v(" "),n("li",{staticClass:"wlzx_list_05"},[n("span",[t._v(t._s(e.browseNumber))])])])])})],2),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"bottom_wlyq"},[n("div",{staticClass:"bottom_wlyq_bt"},[t._v("您可能对这些感兴趣")]),t._v(" "),n("div",{staticClass:"bottom_wlyq_nr"},t._l(t.getLogisticsPark,function(e,r){return n("div",{key:r,staticClass:"bottom_wlyq_item"},[n("a",{attrs:{href:"/wuliu/detail?id="+e.id,target:"_blank"}},[t._v(t._s(e.parkName))])])}),0)])]),t._v(" "),n("div",{staticClass:"list_right"},[t._m(4),t._v(" "),t._m(5),t._v(" "),t._l(t.recommendParkList,function(e,r){return n("div",{key:r,staticClass:"tj_list"},[n("a",{attrs:{href:"/wuliu/detail?id="+e.id,target:"_blank"}},[n("div",{staticClass:"p p1"},[n("span",[t._v(t._s(e.parkName))])]),t._v(" "),n("div",{staticClass:"p p3"},[n("ul",[n("li",{staticClass:"tj_left tj_left1"},[n("font",[t._v(t._s(e.transportNumber)+"条")])],1),t._v(" "),t._m(6,!0),t._v(" "),n("li",{staticClass:"tj_left tj_left2"},[n("font",[t._v(t._s(e.netWorkNumber)),n("em",[t._v("家")])])],1),t._v(" "),t._m(7,!0)])]),t._v(" "),n("div",{staticClass:"p p4"},[n("span",[t._v(t._s(e.parkAddress))])]),t._v(" "),n("div",{staticClass:"p p5"},[n("span",[t._v(t._s(e.browseNumber))])])])])})],2)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list_nav"},[e("a",{attrs:{href:"/"}},[this._v("物流首页")]),this._v(">"),e("a",{attrs:{id:"list_nav_a",href:""}},[this._v("物流园区")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("span",[this._v("园区所在地 ：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"parkAddress"}},[e("input",{staticStyle:{height:"100%",border:"none",outline:"none"},attrs:{"data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请选择省-市-区"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"170px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination1"}}),this._v(" "),e("div",{staticClass:"info fl"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("园区推荐")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tj_none hy_tj_none"},[e("span",[this._v("暂无相关园区推荐")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"tj_right"},[e("span",[this._v("优质专线")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"tj_right"},[e("span",[this._v("优质物流公司")])])}],!1,null,null,null);e.default=component.exports}}]);