(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{219:function(t,e,n){t.exports=n.p+"img/bd92ae0.png"},220:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAYAAAA8sqwkAAAABGdBTUEAALGPC/xhBQAAAL1JREFUGBljYACCffv2hf3//58RxMYFgGrMQXKMR44c4f3x48dJIHu/i4tLNjYNQMWVQAPz2NjYtJhsbGw+MzIyugKxF1CiFV3Dnj17yv79+1cA1OBsa2v7ngmkwNnZ+SmQcgEKJu3du7cEpgmouBhoUAkzM7Mz0PZrIHEUdx88eFD39+/fB4CKyoFyPEBcDTIZqPgSSDEIoGgACezfv9/i79+/O4HM30xMTM5OTk4XQeJ4AdAvzkDbDLEpAgBml01PUiCtkgAAAABJRU5ErkJggg=="},221:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAYAAAA8sqwkAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAL1JREFUKFNjwAYOHjxouG/fPmcoFwUwQmk4ACrU//fv314gk5WZmdnd0dHxBEQGApigNBjs2bNH7////3sYGRlbgLj479+/W4G26UKlwQBuw/79+3WAJu8Dauh0cXHpBYnt3bu3BEgVA7GNs7PzXZAYWAPQZC0gtR+Ie4GKu0BiMAB0YivQkCggE6TpKePhw4cFf/36dQ3ohElOTk7tEGWoAGjgVCDlyMHBYQ4WAJoCYeAAQBsYgWrCGBgYGAAfL0qEuWSOgQAAAABJRU5ErkJggg=="},226:function(t,e,n){var content=n(316);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("0a2f5269",content,!0,{sourceMap:!1})},315:function(t,e,n){"use strict";var r=n(226);n.n(r).a},316:function(t,e,n){e=t.exports=n(10)(!1);var r=n(54),o=r(n(219)),l=r(n(220)),c=r(n(221));e.push([t.i,".lll-wangdian .list_button{width:42px;height:28px;border-radius:2px;color:#f9f9f9;font-size:15px;background:no-repeat url("+o+') 10px 6px #2577e3;text-align:left;padding-left:30px;margin-left:8px;padding-right:5px;cursor:pointer;border:none}.lll-wangdian .toggle-btn{float:right;margin:12px 15px 0 4px;height:24px;line-height:24px;border:1px solid #e8e8e8;padding:0 9px;background:#fff;color:#6b6b6b;cursor:pointer;text-decoration:none;font:12px/1.5 tahoma,arial,Hiragino Sans GB,"\\5b8b\\4f53",sans-serif}.lll-wangdian .show-collapse .expand{display:none;margin-top:2px}.lll-wangdian .icon-btn-arrow-down-2{margin-top:5px;display:inline-block;background:url('+l+");background-repeat:no-repeat;width:12px;height:7px;cursor:pointer}.lll-wangdian .show-collapse .collapse{display:inline-block;margin-top:2px}.lll-wangdian .toggle-btn .arrow{margin-left:8px;vertical-align:middle}.lll-wangdian .icon-btn-arrow-up-2{margin-top:5px;display:inline-block;background:url("+c+");background-repeat:no-repeat;width:12px;height:7px;cursor:pointer}.lll-wangdian .select_con dl dd a.now{background:#3371ff;color:#fff}",""])},528:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(80),n(2),n(35),n(4));function l(t,e){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(function*(t,e){let n=yield t.post("/28-web/logisticsPark/search",e);if(200===n.data.status)return n.data.data.list})).apply(this,arguments)}function d(t,e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(function*(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n.currentPage=e,n.pageSize=10;let r=yield t.post("/28-web/pointNetwork/list",n);return 200===r.data.status?(r.data.data.list.forEach(t=>{t.pointName&&t.pointName.length>15&&(t.pointName=t.pointName.substring(0,15)+"..."),t.companyName&&t.companyName.length>15&&(t.companyName=t.companyName.substring(0,15)+"..."),t.pointAddress&&t.pointAddress.length>15&&(t.pointAddress=t.pointAddress.substring(0,15)+"...")}),{list:r.data.data.list,pages:r.data.data.pages,currentPage:r.data.data.pageNum}):{list:[],pages:0,currentPage:1}})).apply(this,arguments)}function _(){return(_=Object(o.a)(function*(t,e){let n=e;n.currentPage=1,n.pageSize=10;let o=yield t.post("/28-web/logisticsCompany/pointNetwork/recommend",Object(r.a)({province:n.startProvince,city:n.startCity},n));return 200===o.data.status?o.data.data.list:[]})).apply(this,arguments)}var m={name:"Index",head:{link:[{rel:"stylesheet",href:"/css/wangdian.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"},{rel:"stylesheet",href:"/css/WTMap.css"}],script:[{src:"/js/jquery.pagination.min.js"}]},data:()=>({wangdianInfoList:[],totalPage:1,currentPage:1,parkName:"",startProvince:"",startCity:"",startArea:"",endProvince:"",endCity:"",endArea:"",companyName:""}),asyncData:t=>Object(o.a)(function*(){let e=t.$axios,n=t.app,r=t.query,o=r.pos?r.pos.split(","):["",""],c={startProvince:r.startProvince?r.startProvince:n.$cookies.get("currentProvinceFullName"),startCity:r.startCity?r.startCity:n.$cookies.get("currentAreaFullName"),startArea:r.startArea?r.startArea:"",endProvince:r.endProvince?r.startProvince:"",endCity:r.endCity?r.endCity:"",endArea:r.endArea?r.endArea:"",authStatus:r.authStatus?r.authStatus:"",parkName:r.parkName?r.parkName:"",otherServiceCode:r.otherServiceCode?r.otherServiceCode:"",belongBrandCode:r.belongBrandCode?r.belongBrandCode:"",companyName:r.companyName?r.companyName:"",latitude:o[1],longitude:o[0]},v=yield d(e,1,c),m=yield function(t,e){return _.apply(this,arguments)}(e,c);console.log(m,"recommendList"),m.forEach(t=>{t.credit>=0&&t.credit<=3&&(t.showcreadimg=!0,t.creditImg=1),t.credit>=4&&t.credit<=10&&(t.showcreadimg=!0,t.creditImg=2),t.credit>=11&&t.credit<=40&&(t.showcreadimg=!0,t.creditImg=3),t.credit>=41&&t.credit<=90&&(t.showcreadimg=!0,t.creditImg=4),t.credit>=91&&t.credit<=150&&(t.showcreadimg=!0,t.creditImg=5),t.credit>=151&&t.credit<=250&&(t.showcreadeng=!0,t.creditdeng=1),t.credit>=251&&t.credit<=500&&(t.showcreadeng=!0,t.creditdeng=2),t.credit>=500&&t.credit<=1e3&&(t.showcreadeng=!0,t.creditdeng=3),t.credit>=1001&&t.credit<=2e3&&(t.showcreadeng=!0,t.creditdeng=4),t.credit>=2001&&(t.showcreadeng=!0,t.creditdeng=5)});let h=yield e.get("/aflc-common/sysDict/getSysDictByCodeGet/AF029"),y=yield e.get("/aflc-common/sysDict/getSysDictByCodeGet/AF025"),f=yield l(e,c);return 200===h.data.status&&h.data.data.unshift({code:"",name:"不限"}),200===y.data.status&&y.data.data.unshift({code:"",name:"不限"}),{AF029:200===h.data.status?h.data.data:[],AF025:200===y.data.status?y.data.data:[],logisticsPark:f,WangdiangInfoList:v.list,pages:v.pages,recommendList:m,vo:c}})(),mounted(){seajs.use(["/js/gaodemap2.js"]),$(".collapse").click(function(){$(".collapse").css("display","none"),$(".expand").css("display","inline-block"),$(".select_con").css("display","none")}),$(".expand").click(function(){$(".collapse").css("display","inline-block"),$(".expand").css("display","none"),$(".select_con").css("display","block")});let t=this;$("#select_wlyq").mousedown(function(){$("#list_wlzx_yq").css("display","block")}),$("#seq1").click(Object(o.a)(function*(){$("#seq2").removeClass("active"),$(this).addClass("active");let e=yield d(t.$axios,t.current,Object.assign({filterSign:1},t.vo));t.WangdiangInfoList=e.list})),$("#seq2").click(Object(o.a)(function*(){$("#seq1").removeClass("active"),$(this).addClass("active");let e=yield d(t.$axios,t.current,Object.assign({filterSign:2},t.vo));t.WangdiangInfoList=e.list})),$("body").click(function(t){var e=$(".js_yq");e.is(t.target)||0!==e.has(t.target).length||$("#list_wlzx_yq").css("display","none")}),$("#select_wlyq").val(this.$route.query.parkName||""),$("#select_wlyq").attr("name",this.$route.query.parkId||""),$("#addressFrom input").citypicker({province:this.vo.startProvince,city:this.vo.startCity,district:this.vo.startArea}),$("#addressTo input").on("mouseenter",()=>{this.setMap()}),$("#addressTo input").val(this.$route.query.address||""),this.pagination()},methods:{setMap(){this.searchDo(),$("#addressTo input").attr("wtmapinit",this.startProvince+this.startCity+this.startArea)},searchDo(){let t=[],e=[];$("#addressFrom .select-item").each(function(i,e){t.push($(this).text())}),this.startProvince=t[0]?t[0]:"",this.startCity=t[1]?t[1]:"",this.startArea=t[2]?t[2]:"",$("#addressTo .select-item").each(function(i,t){e.push($(this).text())}),this.endProvince=e[0]?e[0]:"",this.endCity=e[1]?e[1]:"",this.endArea=e[2]?e[2]:""},search(){this.searchDo();let t=$("#addressTo input").attr("thepos")||"",address=$("#addressTo input").val()||"";window.location.href=`/wangdian/?&belongBrandCode=${this.vo.belongBrandCode}&otherServiceCode=${this.vo.otherServiceCode}&companyName=${this.companyName}&parkName=${this.parkName}&endArea=${this.endArea}&endCity=${this.endCity}&endProvince=${this.endProvince}&startArea=${this.startArea}&startCity=${this.startCity}&startProvince=${this.startProvince}&pos=${t}&address=${address}`},AF029Click(t){this.vo.belongBrandCode=t.code,this.search()},AF025Click(t){this.vo.otherServiceCode=t.code,this.search()},addTitle(t){this.parkName=t.parkName},seachlist(){var t=this;return Object(o.a)(function*(){let e=[];$("#wlyq_pos .select-item").each(function(i,t){e.push($(this).text())}),t.vo.startProvince=e[0]?e[0]:"",t.vo.startCity=e[1]?e[1]:"",t.vo.startArea=e[2]?e[2]:"",t.logisticsPark=yield l(t.$axios,t.vo)})()},pagination(){var t=this;console.log("this.pages:",this.pages),$("#pagination1").pagination({currentPage:this.currentPage,totalPage:this.pages,callback:function(){var e=Object(o.a)(function*(e){$("#current1").text(e);let n=yield d(t.$axios,e,t.vo);console.log(n,"hyList"),t.totalPage=n.pages,t.current=n.current,t.WangdiangInfoList=n.list});return function(t){return e.apply(this,arguments)}}()})},reload(){window.location.href="/wangdian"}}},h=(n(315),n(1)),component=Object(h.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lll-wangdian"},[n("div",{staticClass:"list_box"},[t._m(0),t._v(" "),n("div",{staticClass:"list_left"},[n("div",{staticClass:"w1036",staticStyle:{"background-color":"#fff","margin-bottom":"20px"}},[t._m(1),t._v(" "),n("div",{staticClass:"select_con"},[n("dl",[n("dt",[t._v("所在地 ：")]),t._v(" "),n("dd",[n("form",{staticStyle:{float:"left"},attrs:{name:"zxaddform",method:"post",action:""}},[n("input",{attrs:{name:"a7",type:"hidden",value:"0"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"mid",value:"19"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"dopost",value:"search"}}),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("input",{staticClass:"list_button",attrs:{id:"search_wangdian",name:"Submit2",readonly:"",value:" 搜索 "},on:{click:function(e){return t.search()}}}),t._v(" "),n("input",{attrs:{id:"flush",name:"Submit2",readonly:"",value:"重置 "},on:{click:function(e){return t.reload()}}})]),t._v(" "),n("br")]),t._v(" "),n("dt",[t._v("公司名称 :")]),t._v(" "),n("dd",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.companyName,expression:"companyName"}],staticClass:"list_input",attrs:{id:"companyName",name:"cfd",type:"text",placeholder:"请输入公司或网点名称"},domProps:{value:t.companyName},on:{input:function(e){e.target.composing||(t.companyName=e.target.value)}}})]),t._v(" "),n("dt",[t._v("所属园区:")]),t._v(" "),n("dd",{staticStyle:{position:"relative"},attrs:{id:"tjcx_00"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.parkName,expression:"parkName"}],staticClass:"list_wlzx_yq js_yq",attrs:{id:"select_wlyq",placeholder:"请选择园区"},domProps:{value:t.parkName},on:{input:function(e){e.target.composing||(t.parkName=e.target.value)}}}),t._v(" "),n("div",{attrs:{id:"list_wlzx_yq"}},[n("div",{staticClass:"wlzx_yq_bt js_yq"},[t._m(4),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.vo.parkName,expression:"vo.parkName"}],staticClass:"list_wlyq_input",attrs:{id:"wlyq_name",placeholder:"请输入园区名称"},domProps:{value:t.vo.parkName},on:{input:function(e){e.target.composing||t.$set(t.vo,"parkName",e.target.value)}}}),t._v(" "),n("input",{staticClass:"list_wlyq_cx",attrs:{readonly:"",value:"查询"},on:{click:t.seachlist}})]),t._v(" "),n("div",{staticClass:"wlzx_yq_nr",attrs:{id:"js010"}},[n("div",{staticClass:"wlzx_yq_none"},[n("font",[t._v("暂无园区信息")])],1),t._v(" "),t._l(t.logisticsPark,function(e,r){return n("div",{key:r,staticClass:"wlzx_yq_item",on:{click:function(n){return t.addTitle(e)}}},[n("font",{attrs:{id:"wlzx_yq_01"}},[t._v(t._s(e.parkName))]),t._v(" "),n("span",{attrs:{id:"wlzx_yq_02"}},[t._v(t._s(e.parkAddress))])],1)})],2)])]),t._v(" "),n("dt",[t._v("品牌 :")]),t._v(" "),n("dd",{attrs:{id:"tjcx_02"}},t._l(t.AF029,function(e,r){return n("a",{key:r,class:[e.code===t.vo.belongBrandCode?"now":"all"],attrs:{href:"javascript:"},on:{click:function(n){return t.AF029Click(e)}}},[t._v(t._s(e.name))])}),0),t._v(" "),n("dt",[t._v("其他 :")]),t._v(" "),n("dd",{attrs:{id:"tjcx_03"}},t._l(t.AF025,function(e,r){return n("a",{key:r,class:[e.code===t.vo.otherServiceCode?"now":"all"],attrs:{href:"javascript:"},on:{click:function(n){return t.AF025Click(e)}}},[t._v(t._s(e.name))])}),0)])])]),t._v(" "),n("div",{staticClass:"w1036",attrs:{id:"js002"}},[t._m(5),t._v(" "),t._m(6),t._v(" "),0===t.WangdiangInfoList.length?n("div",{staticClass:"list_none",staticStyle:{display:"block"}},[n("span",[t._v("暂时没有找到您要查询的信息，可以看看其他线路哦")]),t._v(" "),n("img",{attrs:{src:"/images/none_pic.png"}})]):t._e(),t._v(" "),t._l(t.WangdiangInfoList,function(e,r){return n("ul",{key:r,staticClass:"wlzx_list"},[n("li",{staticClass:"wlzx_list_2"},[n("p",{staticClass:"p1"},[n("a",{attrs:{id:"nr01",href:"/member/"+e.companyId,target:"_blank"}},[t._v(t._s(e.pointName))])]),t._v(" "),n("p",{staticClass:"p2"},[n("a",{attrs:{id:"nr01_1",href:"/member/"+e.companyId,target:"_blank"}},[n("font",{attrs:{id:"nr02"}},[t._v(t._s(e.companyName?e.companyName:"普通货主"))])],1)]),t._v(" "),n("p",{staticClass:"p3"},[n("i",[t._v("地址：")]),n("font",{attrs:{id:"nr03"}},[t._v(t._s(e.pointAddress))])],1),t._v(" "),n("p",{staticClass:"p4"},[n("i",[t._v("约")]),n("em",{attrs:{id:"nr04"}},[t._v(t._s(e.distance))]),n("i",[t._v("公里")])])]),t._v(" "),n("li",{staticClass:"wlzx_list_3"},[n("p",{staticClass:"p1"},[n("i",[t._v("联系人：")]),n("span",{attrs:{id:"nr05"}},[t._v(t._s(e.contactsName))])]),t._v(" "),n("p",{staticClass:"p2"},[n("i",[t._v("电话：")]),n("span",{attrs:{id:"nr06"}},[t._v(t._s(e.contactsTel?e.contactsTel+"-":"")+t._s(e.mobile))])])]),t._v(" "),n("li",{staticClass:"wlzx_list_4"},[e.authStatus?n("p",{staticClass:"p1"},[n("img",{attrs:{id:"list_shiming",src:"/wd/images/10shiming.png"}})]):t._e(),t._v(" "),e.isVip?n("p",{staticClass:"p2"},[n("img",{attrs:{id:"list_xinyong",src:"/wd/images/11xinyong.png"}})]):t._e(),t._v(" "),e.collateral?n("p",{staticClass:"p3"},[n("img",{attrs:{id:"list_danbao",src:"/wd/images/12danbao.png"}})]):t._e()]),t._v(" "),n("li",{staticClass:"wlzx_list_6"},[n("p",{staticClass:"p1"},[n("a",{attrs:{href:"/member/"+e.companyId+"-order?publishId="+e.companyId,target:"_blank"}},[n("input",{attrs:{value:"下单",readonly:""}})])]),n("p",{staticClass:"p2"},[n("a",{attrs:{href:"/member/"+e.companyId,target:"_blank"}},[n("input",{attrs:{value:"查看",readonly:""}})])])])])})],2),t._v(" "),t._m(7)]),t._v(" "),n("div",{staticClass:"list_right",attrs:{id:"js007"}},[t._m(8),t._v(" "),0===t.recommendList.length?n("div",{staticClass:"tj_none"},[n("span",[t._v("没有相关物流公司推荐")])]):t._e(),t._v(" "),t._l(t.recommendList,function(e,r){return n("div",{key:r,staticClass:"tj_list"},[n("p",{staticClass:"p1"},[n("a",{attrs:{id:"tj010",href:"/member/"+e.id,target:"_blank"}},[n("span",{attrs:{id:"tj_01"}},[t._v(t._s(e.companyName))])])]),t._v(" "),e.showcreadimg?n("p",{staticClass:"p7"},t._l(e.creditImg,function(i,t){return n("img",{key:t,attrs:{src:"/wd/images/blue.gif"}})}),0):t._e(),t._v(" "),e.showcreadeng?n("p",{staticClass:"p7"},t._l(e.creditdeng,function(i,t){return n("img",{key:t,attrs:{src:"/wd/images/34huanguan.gif"}})}),0):t._e(),t._v(" "),n("p",{staticClass:"p3"},[n("i",[t._v("联系人：")]),n("font",{attrs:{id:"tj_02"}},[t._v(t._s(e.contactsName))])],1),t._v(" "),n("p",{staticClass:"p4"},[n("i",[t._v("电话：")]),n("font",{attrs:{id:"tj_03"}},[t._v(t._s(e.contactsTel?e.contactsTel+"-":"")+t._s(e.mobile))])],1),t._v(" "),n("p",{staticClass:"p5"},[n("i",[t._v("地址：")]),n("font",{attrs:{id:"tj_04"}},[t._v(t._s(e.address))])],1),t._v(" "),n("p",{staticClass:"p6"},[n("a",{attrs:{id:"tj_05",href:"/member/"+e.id,target:"_blank"}},[n("span",[t._v("查看 >")])])])])})],2)]),t._v(" "),n("div",{staticClass:"h70"})])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list_nav"},[e("a",{attrs:{href:"/"}},[this._v("物流首页")]),this._v(">"),e("a",{attrs:{id:"list_nav_a",href:""}},[this._v("物流网点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx",staticStyle:{"border-bottom":"2px solid #2577e3"}},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("网点筛选")]),this._v(" "),e("a",{staticClass:"toggle-btn show-collapse",attrs:{href:"#"}},[e("span",{staticClass:"expand"},[e("span",[this._v("显示筛选")]),e("span",{staticClass:"arrow icon-btn-arrow-down-2"})]),this._v(" "),e("span",{staticClass:"collapse"},[e("span",[this._v("收起筛选")]),e("span",{staticClass:"arrow icon-btn-arrow-up-2"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"addressFrom"}},[e("input",{staticStyle:{height:"100%",width:"100%",border:"none",outline:"none"},attrs:{name:"cfd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入出发地"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"addressTo"}},[e("input",{staticStyle:{height:"100%",width:"100%",border:"none",outline:"none"},attrs:{name:"ddd",wtmap:"detail",type:"text",placeholder:"请输入详细地址查附近网点"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl list_wlyq_input",staticStyle:{position:"relative"},attrs:{id:"wlyq_pos"}},[e("input",{staticStyle:{height:"100%"},attrs:{"data-toggle":"city-picker","data-level":"district",type:"text",name:"",placeholder:"请选择园区所在地"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",{attrs:{id:"wangdian_list"}},[this._v("网点列表")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list_tiaoj"},[e("span",{staticClass:"active",attrs:{id:"seq1"}},[this._v("综合排序")]),this._v(" "),e("span",{attrs:{id:"seq2",title:"距离从近到远"}},[this._v("距离最近")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"170px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination1"}}),this._v(" "),e("div",{staticClass:"info fl"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"zx_sx"},[e("span",{staticClass:"biaozhi"}),e("span",[this._v("物流公司推荐")])])}],!1,null,null,null);e.default=component.exports}}]);