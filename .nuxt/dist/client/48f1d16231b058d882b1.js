(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{184:function(t,e,r){"use strict";var n=r(0),component=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("img",{attrs:{src:"/member/images/banner_gsjj.png"}})])}],!1,null,null,null);e.a=component.exports},207:function(t,e,r){"use strict";var n={data:()=>({tpath:""}),computed:{mid(){return this.$store.state.member.id}},mounted(){this.tpath=window.location.pathname}},l=r(0),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"side_left"},[r("ul",[t._m(0),t._v(" "),r("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("order")?"active":""},[r("a",{attrs:{href:t.mid+"-order"}},[r("span",[t._v("在线下单")])])]),t._v(" "),r("li",{staticClass:"side_memu",class:-1===t.tpath.indexOf("order")?"active":""},[r("span",[t._v("查询服务")])]),t._v(" "),r("ul",{staticClass:"side_submemu "},[r("li",{class:-1!==t.tpath.indexOf("chajian")?"now":""},[r("a",{attrs:{href:t.mid+"-chajian"}},[r("span",[t._v("查件（物流追踪）")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("line")?"now":""},[r("a",{attrs:{href:t.mid+"-line"}},[r("span",[t._v("物流专线")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("wangdian")?"now":""},[r("a",{attrs:{href:t.mid+"-wangdian"}},[r("span",[t._v("网点分布")])])]),t._v(" "),r("li",{class:-1!==t.tpath.indexOf("huo")?"now":""},[r("a",{attrs:{href:t.mid+"-huo"}},[r("span",[t._v("货源信息")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"side_title"},[e("span",[this._v("客户服务")])])}],!1,null,null,null);e.a=component.exports},559:function(t,e,r){"use strict";r.r(e);r(19);var n=r(8),l=r(184),c=r(60),o=r(207),d={components:{MemberBanner:l.a,MemberSidebar:o.a,SelectType:c.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"}]},layout:"member",data:()=>({volumn:[],weight:[],orderClass:"",query:{goodsVolumeLower:"",goodsVolumeUpper:"",goodsWeightLower:"",goodsWeightUpper:"",orderClass:"",endArea:"",endCity:"",endProvince:"",startArea:"",startCity:"",startProvince:""}}),computed:{list(){return this.$store.state.member.huoList.list},total(){return this.$store.state.member.huoList.total},AF03801(){return this.$store.state.dictList.AF03801},AF03802(){return this.$store.state.dictList.AF03802},AF04907(){return this.$store.state.dictList.AF04907}},mounted(){let t=this;seajs.use(["/js/jquery.pagination.min.js"],function(){seajs.use(["/js/city-picker.js","/js/collection.js"],function(){var e=$.getParams("startp"),r=$.getParams("endp"),n=$.getParams("startc"),l=$.getParams("endc"),c=$.getParams("starta"),o=$.getParams("enda");$("#HuoyuanFrom input").citypicker({province:e,city:n,district:c}),$("#HuoyuanTo input").citypicker({province:r,city:l,district:o}),$("#search_huoyuan1").click(function(){var e=[],r=[];$("#HuoyuanFrom .select-item").each(function(i,t){e.push($(this).text())});var n=e[0]||"",l=e[1]||"",c=e[2]||"";$("#HuoyuanTo .select-item").each(function(i,t){r.push($(this).text())});var o=r[0]||"",d=r[1]||"",h=r[2]||"";t.query.startProvince=n,t.query.startCity=l,t.query.startArea=c,t.query.endProvince=o,t.query.endCity=d,t.query.endArea=h,t.getParam(),t.fetchData(1).then(e=>{t.initPage()})}),$("#search_huoyuan2").click(function(){var t=[],e=[];$("#HuoyuanFrom .select-item").each(function(i,e){t.push($(this).text())});var r=t[0]||"",n=t[1]||"",l=t[2]||"";$("#HuoyuanTo .select-item").each(function(i,t){e.push($(this).text())});var c=e[0]||"",o=e[1]||"",d=e[2]||"";r=encodeURI(r),n=encodeURI(n),l=encodeURI(l),c=encodeURI(c),o=encodeURI(o),d=encodeURI(d),window.open("/huoyuan?startp="+r+"&startc="+n+"&starta="+l+"&endp="+c+"&endc="+o+"&enda="+d)}),t.initPage()})})},methods:{getParam(){this.query.orderClass=this.orderClass,this.query.goodsVolumeLower=this.volumn[0]||"",this.query.goodsVolumeUpper=this.volumn[1]||"",this.query.goodsWeightLower=this.weight[0]||"",this.query.goodsWeightUpper=this.weight[1]||""},fetchData(t){return this.$store.dispatch("member/getCompanyHuo",Object(n.a)({companyId:this.$route.params.id,pageSize:10,currentPage:t},this.query))},initPage(){let t=this;$("#pagination1").pagination({currentPage:1,totalPage:t.total,callback:function(e){$("#current1").text(e),t.fetchData(e)}})}},fetch(t){let e=t.store,r=t.params,n=(t.$axios,t.error);return e.commit("member/setId",r.id),Promise.all([e.dispatch("member/GETCOMPANYINFO",r.id).catch(t=>{"network"===t.type?n({statusCode:500,message:t.msg}):n({statusCode:404,message:t.msg})}),e.dispatch("getDictList",{name:"AF03801"}),e.dispatch("getDictList",{name:"AF03802"}),e.dispatch("getDictList",{name:"AF04907"}),e.dispatch("member/getCompanyHuo",{companyId:r.id,pageSize:10,currentPage:1})])}},h=r(0),component=Object(h.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("MemberBanner"),t._v(" "),r("div",{staticClass:"main"},[r("MemberSidebar"),t._v(" "),r("div",{staticClass:"right",attrs:{id:"js005"}},[r("div",{staticClass:"right_bt1"},[t._m(0),t._v(" "),r("div",{staticClass:"huo_tj"},[r("div",{staticClass:"select_con"},[r("dl",[r("dt",[t._v("选择货源线路 ：")]),t._v(" "),t._m(1),t._v(" "),r("dt",[t._v("重量区间 :")]),t._v(" "),r("dd",{attrs:{id:"tjcx_01"}},[r("SelectType",{attrs:{"get-code":!1,list:t.AF03801},model:{value:t.weight,callback:function(e){t.weight=e},expression:"weight"}})],1),t._v(" "),r("dt",[t._v("体积区间 :")]),t._v(" "),r("dd",{attrs:{id:"tjcx_02"}},[r("SelectType",{attrs:{"get-code":!1,list:t.AF03802},model:{value:t.volumn,callback:function(e){t.volumn=e},expression:"volumn"}})],1),t._v(" "),r("dt",[t._v("货源类型 :")]),t._v(" "),r("dd",{attrs:{id:"tjcx_03"}},[r("SelectType",{attrs:{list:t.AF04907},model:{value:t.orderClass,callback:function(e){t.orderClass=e},expression:"orderClass"}})],1)])])])]),t._v(" "),t._m(2),t._v(" "),t.list.length<1?r("div",{staticClass:"huo_none"},[r("span",[t._v("暂无货源信息")])]):t._l(t.list,function(e,n){return r("div",{key:n,staticClass:"hy_item"},[r("ul",[r("li",{staticClass:"hy_item01"},[r("a",{attrs:{href:"/huoyuan/detail?id="+e.id+"&shipperId="+e.shipperId,id:"nr041",target:"_blank"}},[r("span",[r("em",{attrs:{title:e.startProvinceCityArea,id:"nr042"}},[t._v(t._s(e.startProvinceCityArea))]),t._v("→"),r("em",{attrs:{title:e.endProvinceCityArea,id:"nr043"}},[t._v(t._s(e.endProvinceCityArea))])])])]),t._v(" "),r("li",{staticClass:"hy_item02"},[r("span",{attrs:{title:e.goodsTypeName,id:"nr044"}},[t._v(t._s(e.goodsTypeName))]),r("em"),r("span",[r("i",{attrs:{id:"nr045"}},[t._v(t._s(e.goodsNum))]),t._v("件")]),r("em"),r("span",[r("i",{attrs:{id:"nr046"}},[t._v(t._s(e.goodsWeight))]),t._v("公斤")]),r("em"),r("span",{attrs:{id:"nr047"}},[t._v(t._s(e.goodsVolume)+"立方")])]),t._v(" "),t._m(3,!0),t._v(" "),r("li",{staticClass:"hy_item04"},[r("p",{staticClass:"p1"},[r("span",[r("em",{attrs:{id:"nr048"}},[t._v(t._s(e.browseNumber))]),t._v("浏览量")])]),t._v(" "),r("p",{staticClass:"p2"},[r("span",[r("em",{attrs:{id:"nr049"}},[t._v(t._s(e.collectNumber))]),t._v("收藏量")])])]),t._v(" "),r("li",{staticClass:"hy_item05"},[r("a",{attrs:{id:"nr0410",href:"/huoyuan/detail?id="+e.id+"&shipperId="+e.shipperId,target:"_blank"}},[r("input",{attrs:{readonly:"",value:"查看"}})])])])])})],2),t._v(" "),t._m(4)],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right_bt1_1"},[e("img",{attrs:{src:"/member/images/huo.png"}}),e("span",[this._v("货源信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dd",[e("form",{attrs:{name:"zxaddform",method:"post",action:""}},[e("input",{attrs:{name:"a7",type:"hidden",value:"0"}}),this._v(" "),e("input",{attrs:{type:"hidden",name:"mid",value:"19"}}),this._v(" "),e("input",{attrs:{type:"hidden",name:"dopost",value:"search"}}),this._v(" "),e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"HuoyuanFrom"}},[e("input",{staticStyle:{height:"100%"},attrs:{name:"cfd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入出发地"}})]),this._v(" "),e("img",{staticClass:"fl list_img",attrs:{src:"/images/02jiantou.png"}}),this._v(" "),e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"HuoyuanTo"}},[e("input",{staticStyle:{height:"100%"},attrs:{name:"ddd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入到达地"}})]),this._v(" "),e("input",{staticClass:"list_button button_active",attrs:{id:"search_huoyuan1",name:"Submit2",value:"搜本站",readonly:""}}),this._v(" "),e("input",{staticClass:"list_button",attrs:{id:"search_huoyuan2",name:"Submit2",value:"搜全站",readonly:""}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"right_bt2 huoyuan_bt2 clear"},[r("ul",[r("li",{staticClass:"bt_01"},[t._v("出发地 → 到达地")]),t._v(" "),r("li",{staticClass:"bt_02"},[t._v("货源信息")]),t._v(" "),r("li",{staticClass:"bt_03"},[t._v("会员类型")]),t._v(" "),r("li",{staticClass:"bt_04"},[t._v("人气")]),t._v(" "),r("li",{staticClass:"bt_05"},[t._v("操作")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"hy_item03"},[e("p",{staticClass:"p1"},[e("img",{attrs:{id:"list_shiming",src:"/images/10shiming.png"}})]),this._v(" "),e("p",{staticClass:"p2"},[e("img",{attrs:{id:"list_xinyong",src:"/images/11xinyong.png"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"200px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination1"}}),this._v(" "),e("div",{staticClass:"info fl"})])}],!1,null,null,null);e.default=component.exports}}]);