(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{612:function(t,e,n){"use strict";n.r(e);var r=n(5);function l(t,e){return o.apply(this,arguments)}function o(){return(o=Object(r.a)(function*(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n.currentPage=e,n.pageSize=21;let r=yield t.post("/28-web/logisticsPark/list",n);return 200===r.data.status?{list:r.data.data.list,pages:r.data.data.pages,currentPage:r.data.data.pageNum}:{list:[],pages:0,currentPage:1}})).apply(this,arguments)}var c={name:"WuLiu",head:{link:[{rel:"stylesheet",href:"/css/basic.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/list_wlyq.css"}],script:[{src:"./js/city-picker.data.js"},{src:"./js/city-picker.js"},{src:"./js/jquery.pagination.min.js"}]},data:()=>({pages:0,currentPage:1}),asyncData:t=>Object(r.a)(function*(){let e=t.$axios,n=t.app,r=t.query,o={parkName:r.parkName?r.parkName:"",locationProvince:r.locationProvince?r.locationProvince:n.$cookies.get("currentProvinceFullName"),locationCity:r.locationCity?r.locationCity:n.$cookies.get("currentAreaFullName"),locationArea:r.locationArea?r.locationArea:""},c=o;c.currentPage=1,c.pageSize=16;let _=yield e.post("/28-web/logisticsPark/interested/list",c),v=o;v.currentPage=1,v.pageSize=14;let d=yield e.post("/28-web/logisticsPark/recommend/list",v),h=yield l(e,1,o);return console.log(d.data.data.list,"recommendParkList"),{getGateWayList:h.list,pages:h.pages,currentPage:h.currentPage,getLogisticsPark:200===_.data.status?_.data.data.list:[],recommendParkList:200===d.data.status?d.data.data.list:[],vo:o}})(),mounted(){$("#parkAddress input").citypicker({province:this.vo.locationProvince,city:this.vo.locationCity,district:this.vo.locationArea}),$("#list_nav_a").html(this.vo.locationCity+this.vo.locationArea+"物流园区"),this.loadPagination()},methods:{search(){var t=this;return Object(r.a)(function*(){let e=[];$("#parkAddress .select-item").each(function(i,t){e.push($(this).text())}),t.vo.locationProvince=e[0]?e[0]:"",t.vo.locationCity=e[1]?e[1]:"",t.vo.locationArea=e[2]?e[2]:"",window.location.href="/wuliu?locationProvince=".concat(t.vo.locationProvince,"&locationCity=").concat(t.vo.locationCity,"&locationArea=").concat(t.vo.locationArea,"&parkName=").concat(t.vo.parkName)})()},reload(){window.location.href="/wuliu"},loadPagination(){var t=this;$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:function(){var e=Object(r.a)(function*(e){$("#current1").text(e);let n=yield l(t.$axios,e,t.vo);t.getGateWayList=n.list,t.currentPage=n.currentPage,window.location.href="#top"});return function(t){return e.apply(this,arguments)}}()})}}},_=n(0),component=Object(_.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"list_box"},[t._m(0),t._v(" "),n("div",{staticClass:"list_left"},[n("div",{staticClass:"w1036",staticStyle:{"background-color":"#fff"}},[n("div",{staticClass:"select_con"},[n("dl",[t._m(1),t._v(" "),n("dd",[n("form",{attrs:{name:"zxaddform",method:"post",action:""}},[n("input",{attrs:{name:"a7",type:"hidden",value:"0"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"mid",value:"19"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"dopost",value:"search"}}),t._v(" "),t._m(2),t._v(" "),n("span",[t._v(" 园区名称 ：")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vo.parkName,expression:"vo.parkName"}],staticClass:"list_input",attrs:{type:"text",placeholder:"请输入园区名称"},domProps:{value:t.vo.parkName},on:{input:function(e){e.target.composing||t.$set(t.vo,"parkName",e.target.value)}}}),t._v(" "),n("input",{staticClass:"list_button",attrs:{id:"search_wlyq",value:" 搜索 ",readonly:""},on:{click:function(e){return t.search()}}}),t._v(" "),n("input",{staticClass:"list_button",attrs:{id:"flush",name:"Submit2",value:"重置 ",readonly:""},on:{click:function(e){return t.reload()}}})])])])])]),t._v(" "),n("div",{staticClass:"w1036 list_wlyq"},[null==t.getGateWayList||t.getGateWayList==[]?n("div",{staticClass:"list_none",staticStyle:{display:"block"}},[n("span",[t._v("暂时没有找到您要查询的信息，可以看看其他园区哦")]),t._v(" "),n("img",{attrs:{src:"/images/none_pic.png"}})]):t._e(),t._v(" "),t._l(t.getGateWayList,function(e,r){return n("ul",{key:r,staticClass:"wlzx_list"},[n("a",{attrs:{href:"/wuliu/detail?id="+e.id,target:"_blank"}},[n("li",{staticClass:"wlzx_list_01"},[n("img",{staticClass:"scrollLoading",attrs:{src:e.parkSignPicture?e.parkSignPicture:"/yuanqu/images/wlyq_pic.png",width:"268",height:"268"}})]),t._v(" "),n("li",{staticClass:"wlzx_list_02"},[n("span",[t._v(t._s(e.parkName))])]),t._v(" "),n("li",{staticClass:"wlzx_list_03"},[n("font",[t._v(t._s(e.transportNumber?e.transportNumber:0))]),n("i",[t._v("条")]),n("span",[t._v("优质专线")])],1),t._v(" "),n("li",{staticClass:"wlzx_list_04"},[n("span",[t._v(t._s(e.parkAddress))])]),t._v(" "),n("li",{staticClass:"wlzx_list_05"},[n("span",[t._v(t._s(e.browseNumber))])])])])})],2),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"bottom_wlyq"},[n("div",{staticClass:"bottom_wlyq_bt"},[t._v("您可能对这些感兴趣")]),t._v(" "),n("div",{staticClass:"bottom_wlyq_nr"},t._l(t.getLogisticsPark,function(e,r){return n("div",{key:r,staticClass:"bottom_wlyq_item"},[n("a",{attrs:{href:"/wuliu/detail?id="+e.id,target:"_blank"}},[t._v(t._s(e.parkName))])])}),0)])]),t._v(" "),n("div",{staticClass:"list_right"},[t._m(4),t._v(" "),null==t.recommendParkList||t.recommendParkList==[]?n("div",{staticClass:" hy_tj_none",staticStyle:{"background-color":"#fff",height:"186px",border:"1px solid #eee","margin-top":"-1px",width:"342px"}},[n("span",{staticStyle:{float:"left",width:"100%","text-align":"center",height:"100px","line-height":"100px","font-size":"14px","margin-top":"0px"}},[t._v("暂无相关园区推荐")])]):t._e(),t._v(" "),t._l(t.recommendParkList,function(e,r){return n("div",{key:r,staticClass:"tj_list"},[n("a",{attrs:{href:"/wuliu/detail?id="+e.id,target:"_blank"}},[n("div",{staticClass:"p p1"},[n("span",[t._v(t._s(e.parkName))])]),t._v(" "),n("div",{staticClass:"p p3"},[n("ul",[n("li",{staticClass:"tj_left tj_left1"},[n("font",[t._v(t._s(e.transportNumber||0)+"条")])],1),t._v(" "),t._m(5,!0),t._v(" "),n("li",{staticClass:"tj_left tj_left2"},[n("font",[t._v(t._s(e.netWorkNumber)),n("em",[t._v("家")])])],1),t._v(" "),t._m(6,!0)])]),t._v(" "),n("div",{staticClass:"p p4"},[n("span",[t._v(t._s(e.parkAddress))])]),t._v(" "),n("div",{staticClass:"p p5"},[n("span",[t._v(t._s(e.browseNumber))])])])])})],2)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list_nav"},[e("a",{attrs:{href:"/"}},[this._v("物流首页")]),this._v(">"),e("a",{attrs:{id:"list_nav_a",href:""}},[this._v("物流园区")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("span",[this._v("园区所在地 ：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"parkAddress"}},[e("input",{staticStyle:{height:"100%",border:"none",outline:"none"},attrs:{"data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请选择省-市-区"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"170px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination1"}}),this._v(" "),e("div",{staticClass:"info fl"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("园区推荐")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"tj_right"},[e("span",[this._v("优质专线")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"tj_right"},[e("span",[this._v("优质物流公司")])])}],!1,null,"4f9f0468",null);e.default=component.exports}}]);