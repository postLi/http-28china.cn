(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{331:function(t,e,r){var content=r(504);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("ca4348ae",content,!0,{sourceMap:!1})},503:function(t,e,r){"use strict";var l=r(331);r.n(l).a},504:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".title[data-v-0a31fb77]{position:absolute;top:.3rem;left:0}.body[data-v-0a31fb77]{margin:.3rem}.body .search[data-v-0a31fb77]{height:.8rem;background:#e5e5e5;border-radius:.18rem}.body .search .left[data-v-0a31fb77]{width:.5rem;margin:0 .14rem 0 .2rem}.body .search input[data-v-0a31fb77]{border:none;outline:none;background-color:transparent}.body .search .placeHolder[data-v-0a31fb77]{position:absolute;top:50%;left:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.body .no_res[data-v-0a31fb77]{width:4.42rem;height:2.55rem;margin-top:1.41rem}.button[data-v-0a31fb77]{height:.96rem;background:#4a90e2;border-radius:.16rem}.circle[data-v-0a31fb77]{width:.33rem;height:.33rem;margin:0 .09rem;z-index:100}.content[data-v-0a31fb77]{line-height:.3rem}.content .left[data-v-0a31fb77]{white-space:nowrap}.line[data-v-0a31fb77]{position:absolute;left:50%;top:.16rem;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:1px;background-color:#ccc}",""])},666:function(t,e,r){"use strict";r.r(e);var l=r(1),style=r(201),n=r.n(style),c=r(370),o=r.n(c);r(202),r(371);l.a.use(n.a),l.a.use(o.a);var d={layout:"m",data:()=>({value:"",showPlaceHolder:!0,showNoRes:!1,lineHeight:0,list:[{t1:"2019-05-06",t2:"03:15:23",n1:"送货上门",n2:"送货中，送货人：毛思111111吉，电话：1384858485"},{t1:"2019-05-26",t2:"03:15:23",n1:"送货上门",n2:"已到货，客户电话：1939495649，上一站：南昌网点"},{t1:"2019-05-01",t2:"03:15:23",n1:"送货上门",n2:"已到货，客户电话：1939495649，上一站：南昌网点"}]}),watch:{value:function(t,e){this.showPlaceHolder=t.length<=0}},mounted(){let t=0,e=[];for(let i=0;i<this.$refs.item.length-1;i++)t+=this.$refs.item[i].clientHeight+10;this.lineHeight=t;let r=document.querySelectorAll(".content .left");r.forEach(t=>{e.push(t.clientWidth)}),r.forEach(t=>{t.style.minWidth=Math.max(...e)+"px"})},methods:{search(){""!==this.value?this.$axios.get("/aflc-portal/order/fclOrder/v1/queryCompanyBySerial/"+this.value).then(t=>{}):this.$createToast({txt:"请输入你要搜索的值",type:"txt"}).show()}}},v=(r(503),r(2)),component=Object(v.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"p_r"},[r("img",{staticClass:"width_100",attrs:{src:"/m/ydcx/Bitmap.png"}}),t._v(" "),r("div",{staticClass:"title flex_r width_100 f_w f-36"},[r("div",{staticClass:"flex_1 flex_a"},[r("i",{staticClass:"padding_l_20 cubeic-back",on:{click:function(e){return t.$router.go(-1)}}})]),t._v(" "),r("div",{staticClass:"flex_1 flex"},[t._v("28快运")]),t._v(" "),r("div",{staticClass:"flex_1"})])]),t._v(" "),r("div",{staticClass:"body"},[r("div",{staticClass:"search flex_a p_r f-26"},[r("img",{staticClass:"left",attrs:{src:"/m/ydcx/fahuodz_nav_search.png"}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"flex_1",attrs:{type:"text",placeholder:"请输入运单号，例如："},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),t._v(" "),t.showPlaceHolder?r("div",{staticClass:"placeHolder f_b"},[t._v("18030405063")]):t._e()]),t._v(" "),r("div",{staticClass:"button flex f_w f-36 margin_t_40",on:{click:function(e){return t.search()}}},[t._v("查询")]),t._v(" "),t.showNoRes?r("div",{staticClass:"flex"},[r("img",{staticClass:"no_res",attrs:{src:"/m/ydcx/yundancx_kong.png"}})]):t._e(),t._v(" "),r("div",{staticClass:"margin_t_20"},[r("div",{staticClass:"f-34 c-3"},[t._v("物流跟踪：广东分拨中心")]),t._v(" "),t._l(t.list,function(e,l){return r("div",{key:l,ref:"item",refInFor:!0,staticClass:"flex_r margin_t_20 content",class:[0===l?"f_b":"c-9"]},[r("div",{staticClass:"f-22 left"},[r("div",[t._v(t._s(e.t1))]),t._v(" "),r("div",[t._v(t._s(e.t2))])]),t._v(" "),0===l?r("div",{staticClass:"p_r flex_r"},[r("img",{staticClass:"circle",attrs:{src:"/m/ydcx/dindanxq_current.png"}}),t._v(" "),r("div",{staticClass:"line",style:{height:t.lineHeight+"px"}})]):t._e(),t._v(" "),0!==l&&l!==t.list.length-1?r("div",{staticClass:"p_r flex_r"},[r("img",{staticClass:"circle",attrs:{src:"/m/ydcx/current.png"}})]):t._e(),t._v(" "),l===t.list.length-1?r("div",{staticClass:"p_r flex_r"},[r("img",{staticClass:"circle",attrs:{src:"/m/ydcx/start.png"}})]):t._e(),t._v(" "),r("div",{staticClass:"f-24"},[r("div",[t._v(t._s(e.n1))]),t._v(" "),r("div",[t._v(t._s(e.n2))])])])})],2)])])},[],!1,null,"0a31fb77",null);e.default=component.exports}}]);