(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{224:function(t,e,n){"use strict";var r=n(1),component=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-box"},[e("img",{attrs:{src:"/member/images/banner_gsjj.png"}})])}],!1,null,null,null);e.a=component.exports},237:function(t,e,n){"use strict";var r={data:function(){return{tpath:""}},computed:{mid:function(){return this.$store.state.member.id}},mounted:function(){this.tpath=window.location.pathname}},c=n(1),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side_left"},[n("ul",[t._m(0),t._v(" "),n("li",{staticClass:"side_memu",class:-1!==t.tpath.indexOf("order")?"active":""},[n("a",{attrs:{href:t.mid+"-order"}},[n("span",[t._v("在线下单")])])]),t._v(" "),n("li",{staticClass:"side_memu",class:-1===t.tpath.indexOf("order")?"active":""},[n("span",[t._v("查询服务")])]),t._v(" "),n("ul",{staticClass:"side_submemu "},[n("li",{class:-1!==t.tpath.indexOf("chajian")?"now":""},[n("a",{attrs:{href:t.mid+"-chajian"}},[n("span",[t._v("查件（物流追踪）")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("line")?"now":""},[n("a",{attrs:{href:t.mid+"-line"}},[n("span",[t._v("物流专线")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("wangdian")?"now":""},[n("a",{attrs:{href:t.mid+"-wangdian"}},[n("span",[t._v("网点分布")])])]),t._v(" "),n("li",{class:-1!==t.tpath.indexOf("huo")?"now":""},[n("a",{attrs:{href:t.mid+"-huo"}},[n("span",[t._v("货源信息")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"side_title"},[e("span",[this._v("客户服务")])])}],!1,null,null,null);e.a=component.exports},275:function(t,e,n){"use strict";n(29),n(60),n(5);var r={props:{showDefault:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},getCode:{type:Boolean,default:!0},code:{type:String,default:""},name:{type:String,default:""}},data:function(){return{current:"",datas:[]}},mounted:function(){var t=this;this.list.length?(this.datas=this.list,this.initCurrent()):this.name&&this.fetchData(this.name).then(function(e){console.log("res:::",e),t.datas=e.data,t.initCurrent()})},methods:{fetchData:function(t){return this.$store.dispatch("getDictList",{name:this.name})},initCurrent:function(){var t=this;if(this.code){var e="";this.datas.forEach(function(n,r){n.code===t.code&&(e=r)}),this.current=e}else this.current=""},setVal:function(code,t,e){this.current=e;var n=t.replace(/>(.*)/,"$1-").split("-");this.getCode&&(n=code),this.$emit("input",n),this.$emit("change",n)}}},c=n(1),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t.showDefault?n("a",{staticClass:"all",class:""===t.current?"now":"",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.setVal("","","")}}},[t._v("不限")]):t._e(),t._v(" "),t._l(t.datas,function(e,r){return n("a",{key:r,class:t.current===r?"now":"",attrs:{rel:e.code,href:"#"},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.setVal(e.code,e.name,r)}}},[t._v(t._s(e.name))])})],2)},[],!1,null,null,null);e.a=component.exports},583:function(t,e,n){"use strict";n.r(e);n(21),n(2),n(83);var r=n(15),c=n(224),o=n(275),l=n(237),d={components:{MemberBanner:c.a,MemberSidebar:l.a,SelectType:o.a},head:{link:[{rel:"stylesheet",href:"/member/css/list.css"},{rel:"stylesheet",href:"/css/jquery.pagination.css"}]},layout:"member",data:function(){return{volumn:[],weight:[],orderClass:"",query:{goodsVolumeLower:"",goodsVolumeUpper:"",goodsWeightLower:"",goodsWeightUpper:"",orderClass:"",endArea:"",endCity:"",endProvince:"",startArea:"",startCity:"",startProvince:""}}},computed:{list:function(){return this.$store.state.member.huoList.list},total:function(){return this.$store.state.member.huoList.total},AF03801:function(){return this.$store.state.dictList.AF03801},AF03802:function(){return this.$store.state.dictList.AF03802},AF04907:function(){return this.$store.state.dictList.AF04907}},mounted:function(){var t=this;seajs.use(["/js/jquery.pagination.min.js"],function(){seajs.use(["/js/city-picker.js","/js/collection.js"],function(){var e=$.getParams("startp"),n=$.getParams("endp"),r=$.getParams("startc"),c=$.getParams("endc"),o=$.getParams("starta"),l=$.getParams("enda");$("#HuoyuanFrom input").citypicker({province:e,city:r,district:o}),$("#HuoyuanTo input").citypicker({province:n,city:c,district:l}),$("#search_huoyuan1").click(function(){var e=[],n=[];$("#HuoyuanFrom .select-item").each(function(i,t){e.push($(this).text())});var r=e[0]||"",c=e[1]||"",o=e[2]||"";$("#HuoyuanTo .select-item").each(function(i,t){n.push($(this).text())});var l=n[0]||"",d=n[1]||"",h=n[2]||"";t.query.startProvince=r,t.query.startCity=c,t.query.startArea=o,t.query.endProvince=l,t.query.endCity=d,t.query.endArea=h,t.getParam(),t.fetchData(1).then(function(e){t.initPage()})}),$("#search_huoyuan2").click(function(){var t=[],e=[];$("#HuoyuanFrom .select-item").each(function(i,e){t.push($(this).text())});var n=t[0]||"",r=t[1]||"",c=t[2]||"";$("#HuoyuanTo .select-item").each(function(i,t){e.push($(this).text())});var o=e[0]||"",l=e[1]||"",d=e[2]||"";n=encodeURI(n),r=encodeURI(r),c=encodeURI(c),o=encodeURI(o),l=encodeURI(l),d=encodeURI(d),window.open("/huoyuan?startp="+n+"&startc="+r+"&starta="+c+"&endp="+o+"&endc="+l+"&enda="+d)}),t.initPage()})})},methods:{getParam:function(){this.query.orderClass=this.orderClass,this.query.goodsVolumeLower=this.volumn[0]||"",this.query.goodsVolumeUpper=this.volumn[1]||"",this.query.goodsWeightLower=this.weight[0]||"",this.query.goodsWeightUpper=this.weight[1]||""},fetchData:function(t){return this.$store.dispatch("member/getCompanyHuo",Object(r.a)({companyId:this.$route.params.id,pageSize:10,currentPage:t},this.query))},initPage:function(){var t=this;$("#pagination1").pagination({currentPage:1,totalPage:t.total,callback:function(e){$("#current1").text(e),t.fetchData(e)}})}},fetch:function(t){var e=t.store,n=t.params,r=(t.$axios,t.error);return e.commit("member/setId",n.id),Promise.all([e.dispatch("member/GETCOMPANYINFO",n.id).catch(function(t){"network"===t.type?r({statusCode:500,message:t.msg}):r({statusCode:404,message:t.msg})}),e.dispatch("getDictList",{name:"AF03801"}),e.dispatch("getDictList",{name:"AF03802"}),e.dispatch("getDictList",{name:"AF04907"}),e.dispatch("member/getCompanyHuo",{companyId:n.id,pageSize:10,currentPage:1})])}},h=n(1),component=Object(h.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MemberBanner"),t._v(" "),n("div",{staticClass:"main"},[n("MemberSidebar"),t._v(" "),n("div",{staticClass:"right",attrs:{id:"js005"}},[n("div",{staticClass:"right_bt1"},[t._m(0),t._v(" "),n("div",{staticClass:"huo_tj"},[n("div",{staticClass:"select_con"},[n("dl",[n("dt",[t._v("选择货源线路 ：")]),t._v(" "),t._m(1),t._v(" "),n("dt",[t._v("重量区间 :")]),t._v(" "),n("dd",{attrs:{id:"tjcx_01"}},[n("SelectType",{attrs:{"get-code":!1,list:t.AF03801},model:{value:t.weight,callback:function(e){t.weight=e},expression:"weight"}})],1),t._v(" "),n("dt",[t._v("体积区间 :")]),t._v(" "),n("dd",{attrs:{id:"tjcx_02"}},[n("SelectType",{attrs:{"get-code":!1,list:t.AF03802},model:{value:t.volumn,callback:function(e){t.volumn=e},expression:"volumn"}})],1),t._v(" "),n("dt",[t._v("货源类型 :")]),t._v(" "),n("dd",{attrs:{id:"tjcx_03"}},[n("SelectType",{attrs:{list:t.AF04907},model:{value:t.orderClass,callback:function(e){t.orderClass=e},expression:"orderClass"}})],1)])])])]),t._v(" "),t._m(2),t._v(" "),t.list.length<1?n("div",{staticClass:"huo_none"},[n("span",[t._v("暂无货源信息")])]):t._l(t.list,function(e,r){return n("div",{key:r,staticClass:"hy_item"},[n("ul",[n("li",{staticClass:"hy_item01"},[n("a",{attrs:{href:"/huoyuan/detail?id="+e.id+"&shipperId="+e.shipperId,id:"nr041",target:"_blank"}},[n("span",[n("em",{attrs:{title:e.startProvinceCityArea,id:"nr042"}},[t._v(t._s(e.startProvinceCityArea))]),t._v("→"),n("em",{attrs:{title:e.endProvinceCityArea,id:"nr043"}},[t._v(t._s(e.endProvinceCityArea))])])])]),t._v(" "),n("li",{staticClass:"hy_item02"},[n("span",{attrs:{title:e.goodsTypeName,id:"nr044"}},[t._v(t._s(e.goodsTypeName))]),n("em"),n("span",[n("i",{attrs:{id:"nr045"}},[t._v(t._s(e.goodsNum))]),t._v("件")]),n("em"),n("span",[n("i",{attrs:{id:"nr046"}},[t._v(t._s(e.goodsWeight))]),t._v("公斤")]),n("em"),n("span",{attrs:{id:"nr047"}},[t._v(t._s(e.goodsVolume)+"立方")])]),t._v(" "),t._m(3,!0),t._v(" "),n("li",{staticClass:"hy_item04"},[n("p",{staticClass:"p1"},[n("span",[n("em",{attrs:{id:"nr048"}},[t._v(t._s(e.browseNumber))]),t._v("浏览量")])]),t._v(" "),n("p",{staticClass:"p2"},[n("span",[n("em",{attrs:{id:"nr049"}},[t._v(t._s(e.collectNumber))]),t._v("收藏量")])])]),t._v(" "),n("li",{staticClass:"hy_item05"},[n("a",{attrs:{id:"nr0410",href:"/huoyuan/detail?id="+e.id+"&shipperId="+e.shipperId,target:"_blank"}},[n("input",{attrs:{readonly:"",value:"查看"}})])])])])})],2),t._v(" "),t._m(4)],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right_bt1_1"},[e("img",{attrs:{src:"/member/images/huo.png"}}),e("span",[this._v("货源信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dd",[e("form",{attrs:{name:"zxaddform",method:"post",action:""}},[e("input",{attrs:{name:"a7",type:"hidden",value:"0"}}),this._v(" "),e("input",{attrs:{type:"hidden",name:"mid",value:"19"}}),this._v(" "),e("input",{attrs:{type:"hidden",name:"dopost",value:"search"}}),this._v(" "),e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"HuoyuanFrom"}},[e("input",{staticStyle:{height:"100%"},attrs:{name:"cfd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入出发地"}})]),this._v(" "),e("img",{staticClass:"fl list_img",attrs:{src:"/images/02jiantou.png"}}),this._v(" "),e("div",{staticClass:"fl list_input",staticStyle:{position:"relative"},attrs:{id:"HuoyuanTo"}},[e("input",{staticStyle:{height:"100%"},attrs:{name:"ddd","data-toggle":"city-picker","data-level":"district",type:"text",placeholder:"请输入到达地"}})]),this._v(" "),e("input",{staticClass:"list_button button_active",attrs:{id:"search_huoyuan1",name:"Submit2",value:"搜本站",readonly:""}}),this._v(" "),e("input",{staticClass:"list_button",attrs:{id:"search_huoyuan2",name:"Submit2",value:"搜全站",readonly:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right_bt2 huoyuan_bt2 clear"},[n("ul",[n("li",{staticClass:"bt_01"},[t._v("出发地 → 到达地")]),t._v(" "),n("li",{staticClass:"bt_02"},[t._v("货源信息")]),t._v(" "),n("li",{staticClass:"bt_03"},[t._v("会员类型")]),t._v(" "),n("li",{staticClass:"bt_04"},[t._v("人气")]),t._v(" "),n("li",{staticClass:"bt_05"},[t._v("操作")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"hy_item03"},[e("p",{staticClass:"p1"},[e("img",{attrs:{id:"list_shiming",src:"/images/10shiming.png"}})]),this._v(" "),e("p",{staticClass:"p2"},[e("img",{attrs:{id:"list_xinyong",src:"/images/11xinyong.png"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box",staticStyle:{float:"right","margin-right":"200px"}},[e("div",{staticClass:"page fl",attrs:{id:"pagination1"}}),this._v(" "),e("div",{staticClass:"info fl"})])}],!1,null,null,null);e.default=component.exports}}]);