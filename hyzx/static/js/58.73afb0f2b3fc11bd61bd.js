webpackJsonp([58],{BILc:function(e,_,n){"use strict";_.a={data:function(){return{dialogTableVisible:!1,inputData:"安发网络"}},methods:{clipboardSuccess:function(){this.$message({message:"复制成功",type:"success",duration:1500})}}}},b7kg:function(e,_,n){"use strict";Object.defineProperty(_,"__esModule",{value:!0});var t=n("BILc"),v=n("zouM"),a=n("VU/8"),r=a(t.a,v.a,null,null,null);_.default=r.exports},zouM:function(e,_,n){"use strict";var t=function(){var e=this,_=e.$createElement,n=e._self._c||_;return n("div",[n("h2",[e._v("自定义过滤器")]),e._v(" "),n("blockquote",[e._v("\n    目前所有自定义过滤器都是注册到全局，可在子组件中直接使用\n  ")]),e._v(" "),n("h3",[e._v("timeAgo")]),e._v(" "),n("div",{staticClass:"type"},[e._v("接受数值格式的时间值")]),e._v(" "),n("p",[e._v("返回指定时间距离现在的时间段")]),e._v(" "),n("p",[e._v(e._s(e._f("timeAgo")(+new Date/1e3-1e3)))]),e._v(" "),n("p",[e._v(e._s(e._f("timeAgo")(+new Date/1e3-1e4)))]),e._v(" "),n("p",[e._v(e._s(e._f("timeAgo")(+new Date/1e3-1e5)))]),e._v(" "),n("p",[e._v(e._s(e._f("timeAgo")(new Date("2017/01/01 00:00:00"))))]),e._v(" "),n("pre",[e._v("    \n  ")]),e._v(" "),n("h3",[e._v("parseTime")]),e._v(" "),n("p",[e._v("将时间以指定格式输出展示")]),e._v(" "),n("p",[e._v("new Date() | parseTime "),n("br"),e._v("\n  "+e._s(e._f("parseTime")(new Date)))]),e._v(" "),n("p",[e._v("\n    new Date() | parseTime('{y}/{m}/{d}') "),n("br"),e._v("\n    "+e._s(e._f("parseTime")(new Date,"{y}/{m}/{d}"))+"\n  ")]),e._v(" "),n("p",[e._v("\n    new Date() | parseTime('{y}{m}{d} {h}:{i}:{s}')"),n("br"),e._v("\n    "+e._s(e._f("parseTime")(new Date,"{y}{m}{d} {h}:{i}:{s}"))+"\n  ")]),e._v(" "),n("h3",[e._v("formatTime")]),e._v(" "),n("p",[e._v("输出距离时间段")]),e._v(" "),n("p",[e._v("\n    +new Date()/1000 | formatTime"),n("br"),e._v("\n    "+e._s(e._f("formatTime")(+new Date/1e3))+"\n  ")]),e._v(" "),n("p",[e._v("\n    +new Date('2017/01/01 00:00:00')/1000 | formatTime"),n("br"),e._v("\n    "+e._s(e._f("formatTime")(+new Date("2017/01/01 00:00:00")/1e3))+"\n  ")]),e._v(" "),n("p",[e._v("\n    +new Date('2018/05/27 00:00:00')/1000 | formatTime"),n("br"),e._v("\n    "+e._s(e._f("formatTime")(+new Date("2018/05/27 00:00:00")/1e3))+"\n  ")]),e._v(" "),n("h3",[e._v("nFormatter")]),e._v(" "),n("p",[e._v("数字 格式化")]),e._v(" "),n("p",[e._v("\n     1111 | nFormatter "),n("br"),e._v("\n    "+e._s(e._f("nFormatter")(1111))+"\n  ")]),e._v(" "),n("p",[e._v("\n     2222222 | nFormatter "),n("br"),e._v("\n    "+e._s(e._f("nFormatter")(2222222))+"\n  ")]),e._v(" "),n("p",[e._v("\n     55555555 | nFormatter "),n("br"),e._v("\n    "+e._s(e._f("nFormatter")(55555555))+"\n  ")]),e._v(" "),n("p",[e._v("\n     999 | nFormatter "),n("br"),e._v("\n    "+e._s(e._f("nFormatter")(999))+"\n  ")]),e._v(" "),n("h3",[e._v("toThousandslsFilter")]),e._v(" "),n("p",[e._v("用逗号分隔数字")]),e._v(" "),n("p",[e._v("\n    1234567890 | toThousandslsFilte "),n("br"),e._v("\n    "+e._s(e._f("toThousandslsFilter")(1234567890))+"\n  ")])])},v=[],a={render:t,staticRenderFns:v};_.a=a}});