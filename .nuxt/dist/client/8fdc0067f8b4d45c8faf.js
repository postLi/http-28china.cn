(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{157:function(t,e,n){"use strict";var r=n(1),component=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("img",{attrs:{src:"/member/images/banner_gsjj.png"}})])}],!1,null,null,null);e.a=component.exports},164:function(t,e,n){"use strict";var r={data:()=>({tpath:""}),mounted(){this.tpath=window.location.pathname}},l=n(1),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side_left"},[n("ul",[t._m(0),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("order")?"active":""},[n("a",{attrs:{href:t.$store.state.member.id+"-order"}},[n("span",[t._v("在线下单")])])]),t._v(" "),n("li",{staticClass:"side_memu",class:-1===t.tpath.indexOf("order")?"active":""},[n("span",[t._v("查询服务")])]),t._v(" "),n("ul",{staticClass:"side_submemu "},[n("li",{class:-1!==t.tpath.indexOf("chajian")?"now":""},[n("a",{attrs:{href:t.$store.state.member.id+"-chajian"}},[n("span",[t._v("查件（物流追踪）")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("line")?"now":""},[n("a",{attrs:{href:t.$store.state.member.id+"-line"}},[n("span",[t._v("物流专线")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("wangdian")?"now":""},[n("a",{attrs:{href:t.$store.state.member.id+"-wangdian"}},[n("span",[t._v("网点分布")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("huo")?"now":""},[n("a",{attrs:{href:t.$store.state.member.id+"-huo"}},[n("span",[t._v("货源信息")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"side_title"},[e("span",[this._v("客户服务")])])}],!1,null,null,null);e.a=component.exports},433:function(t,e,n){"use strict";n.r(e);n(12);var r=n(4),l=n(157),c=n(164),d={components:{MemberBanner:l.a,MemberSidebar:c.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"}]},layout:"member",mounted(){let t=this,e=this.$store.state.member.id;seajs.use(["/member/js/jquery.pagination.min.js","/index/js/city-picker.data.js"],function(){seajs.use(["/index/js/city-picker.js","/member/js/line.js"],function(){$(".list_tiaoj span").click(function(){$(".list_tiaoj span").removeClass("active"),$(this).toggleClass("active")}),t.setPagination(),$("#search_wlLine1").click(function(){var t=[],n=[];$("#wlLineFrom .select-item").each(function(i,e){t.push($(this).text())});var r=t[0],l=t[1],c=t[2];$("#wlLineTo .select-item").each(function(i,t){n.push($(this).text())});var d=n[0],_=n[1],o=n[2];r||(r=""),l||(l=""),c||(c=""),d||(d=""),_||(_=""),o||(o=""),r=encodeURI(r),l=encodeURI(l),c=encodeURI(c),d=encodeURI(d),_=encodeURI(_),o=encodeURI(o),window.location=e+"-line?startp="+r+"&startc="+l+"&starta="+c+"&endp="+d+"&endc="+_+"&enda="+o}),$("#search_wlLine2").click(function(){var t=[],e=[];$("#wlLineFrom .select-item").each(function(i,e){t.push($(this).text())});var n=t[0],r=t[1],l=t[2];$("#wlLineTo .select-item").each(function(i,t){e.push($(this).text())});var c=e[0],d=e[1],_=e[2];n||(n=""),r||(r=""),l||(l=""),c||(c=""),d||(d=""),_||(_="");var o="/zhuanxian/list?startp="+(n=encodeURI(n))+"&startc="+(r=encodeURI(r))+"&starta="+(l=encodeURI(l))+"&endp="+(c=encodeURI(c))+"&endc="+(d=encodeURI(d))+"&enda="+(_=encodeURI(_));window.open(o)})})})},fetch:t=>Object(r.a)(function*(){let e=t.store,n=t.params;t.$axios,t.error,t.querys;e.commit("member/setId",n.id),yield e.dispatch("member/GETCOMPANYINFO",n.id),yield e.dispatch("member/GETCOMPANYLINEINFO",{publishId:n.id,pageSize:10,currentPage:1})})(),methods:{setPagination(){$("#pagination1").pagination({currentPage:1,count:10,totalPage:this.$store.state.member.lineTotal,callback:function(t){$("#current1").text(t),this.$store.dispatch("member/GETCOMPANYLINEINFO",{publishId:this.$store.state.member.company.id,pageSize:10,currentPage:t})}})},findPrice(t,e){let n=0;return t.length?(t.forEach(t=>{t.type===e&&0===t.startVolume&&(n=t.discountPrice||t.primeryPrice)}),n):0}}},_=n(1),component=Object(_.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MemberBanner"),t._v(" "),n("div",{staticClass:"main"},[n("MemberSidebar"),t._v(" "),n("div",{staticClass:"right",attrs:{id:"js003"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0===t.$store.state.member.lineList.length,expression:"$store.state.member.lineList.length === 0"}],staticClass:"line_none"},[n("span",[t._v("暂无物流专线信息")])]),t._v(" "),t._l(t.$store.state.member.lineList,function(e,r){return n("div",{key:r,staticClass:"line_item"},[n("ul",[n("li",{staticClass:"line_item01"},[n("a",{attrs:{id:"nr021",href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.companyId,target:"_blank"}},[n("span",[n("em",{attrs:{id:"nr022"}},[t._v(t._s(e.startCity||"")+t._s(e.startArea||""))]),t._v(" → "),n("em",{attrs:{id:"nr023"}},[t._v(t._s(e.endCity||"")+t._s(e.endArea||""))])])])]),t._v(" "),n("li",{staticClass:"line_item02"},[n("span",[t._v("重货:"),n("i",{attrs:{id:"nr024"}},[t._v(t._s(t.findPrice(e.rangePrices,"1")))]),n("em",[t._v("元/公斤")])]),n("font",[t._v("时效:"),n("i",{attrs:{id:"nr025"}},[t._v(t._s(e.transportAging)+t._s(e.transportAgingUnit))])]),t._v(" "),n("span",[t._v("轻货:"),n("i",{attrs:{id:"nr026"}},[t._v(t._s(t.findPrice(e.rangePrices,"0")))]),n("em",[t._v("元/立方")])]),n("font",[t._v("最低一票:"),n("i",{attrs:{id:"nr027"}},[t._v(t._s(e.lowerPrice||"面议"))])])],1),t._v(" "),t._m(3,!0),t._v(" "),n("li",{staticClass:"line_item04"},[n("p",{staticClass:"p1"},[n("span",[n("em",{attrs:{id:"nr028"}},[t._v(t._s(e.browseNumber))]),t._v("浏览量")])]),t._v(" "),n("p",{staticClass:"p2"},[n("span",[n("em",{attrs:{id:"nr029"}},[t._v(t._s(e.assessNumber))]),t._v("收藏量")])])]),t._v(" "),n("li",{staticClass:"line_item05"},[n("a",{attrs:{id:"nr_order",href:t.$store.state.member.id+"-order?id="+e.id+"&publishId="+e.companyId,target:"_blank"}},[n("input",{attrs:{id:"fahuo",readonly:"",value:"下单"}})]),t._v(" "),n("a",{attrs:{id:"nr0210",href:"/zhuanxian/detail?id="+e.id+"&publishId="+e.companyId}},[n("input",{attrs:{readonly:"",value:"查看"}})])])])])})],2),t._v(" "),t._m(4)],1)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right_bt1"},[n("div",{staticClass:"right_bt1_1"},[n("img",{attrs:{src:"/member/images/line.png"}}),n("span",[t._v("物流专线")])]),t._v(" "),n("div",{staticClass:"huo_tj line_tj"},[n("div",{staticClass:"select_con"},[n("dl",[n("dt",[t._v("选择专线线路 ：")]),t._v(" "),n("dd",[n("form",{attrs:{name:"zxaddform",method:"post",action:""}},[n("input",{attrs:{name:"a7",type:"hidden",value:"0"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"mid",value:"19"}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"dopost",value:"search"}}),t._v(" "),n("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"wlLineFrom"}},[n("input",{staticStyle:{height:"100%"},attrs:{name:"cfd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入出发地"}})]),t._v(" "),n("img",{staticClass:"fl list_img",attrs:{src:"/images/02jiantou.png"}}),t._v(" "),n("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"wlLineTo"}},[n("input",{staticStyle:{height:"100%"},attrs:{name:"ddd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入到达地"}})]),t._v(" "),n("input",{staticClass:"list_button button_active",attrs:{id:"search_wlLine1",name:"Submit2",value:"搜本站",readonly:""}}),t._v(" "),n("input",{staticClass:"list_button",attrs:{id:"search_wlLine2",name:"Submit2",value:"搜全站",readonly:""}})])]),t._v(" "),n("dt",[t._v("发车时间 :")]),t._v(" "),n("dd",{attrs:{id:"tjcx_01"}},[n("a",{staticClass:"now all",attrs:{href:"/huoyuan"}},[t._v("不限")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list_tiaoj"},[n("span",{staticClass:"active",attrs:{id:"seq0"}},[t._v("默认排序")]),n("span",{attrs:{id:"seq1",title:"交易量从高到低"}},[t._v("交易量")]),n("span",{attrs:{id:"seq2",title:"运输时效从低到高"}},[t._v("运输时效")]),n("span",{attrs:{id:"seq3"}},[t._v("重货价格")]),t._v(" "),n("div",{attrs:{id:"tj_price"}},[n("span",{attrs:{id:"tj_price1"}},[t._v("轻货价格从低到高")]),t._v(" "),n("span",{attrs:{id:"tj_price2"}},[t._v("重货价格从低到高")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right_bt2 line_bt2 clear"},[n("ul",[n("li",{staticClass:"bt_01"},[t._v("出发地 → 到达地")]),t._v(" "),n("li",{staticClass:"bt_02"},[t._v("专线信息")]),t._v(" "),n("li",{staticClass:"bt_03"},[t._v("会员类型")]),t._v(" "),n("li",{staticClass:"bt_04"},[t._v("人气")]),t._v(" "),n("li",{staticClass:"bt_05"},[t._v("操作")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"line_item03"},[e("p",{staticClass:"p1"},[e("img",{attrs:{id:"list_shiming",src:"/images/list_wlzx/10shiming.png"}})]),this._v(" "),e("p",{staticClass:"p2"},[e("img",{attrs:{id:"list_xinyong",src:"/images/list_wlzx/11xinyong.png"}})]),this._v(" "),e("p",{staticClass:"p3"},[e("img",{attrs:{id:"list_danbao",src:"/images/list_wlzx/12danbao.png"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"200px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination1"}}),this._v(" "),e("div",{staticClass:"info fl"})])}],!1,null,null,null);e.default=component.exports}}]);