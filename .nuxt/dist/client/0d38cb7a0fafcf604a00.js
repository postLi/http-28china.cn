(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{542:function(t,e,l){"use strict";l.r(e);var n={layout:"login",head:{title:"找回密码"},fetch(t){t.params;let e=t.store;t.req,t.res,t.query,t.route;e.commit("login/setReg",!1),e.commit("login/setPageType","findpassword"),e.commit("setPageClass","password-page")},mounted(){window.seajs.use(["layer","api"],function(){seajs.use(["./js/regisiter.js"])})}},v=l(1),component=Object(v.a)(n,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"content"},[l("div",{staticClass:"fpassword_wrap"},[l("div",{staticClass:"ff-title"},[t._v("找回密码 / "),l("span",{staticClass:"current"},[t._v("输入手机号")]),t._v(" "),l("span",[t._v("验证信息")]),t._v(" "),l("span",[t._v("重置密码")]),t._v(" "),l("span",[t._v("取回成功")])]),t._v(" "),l("div",{staticClass:"step_info step_info_ul_1"},[l("ul",{staticClass:"clfix"},[l("li",{staticClass:"step1 current"},[l("i",[t._v("1")]),t._v("输入手机号\n        ")]),t._v(" "),l("li",{staticClass:"step2"},[l("i",[t._v("2")]),t._v("\n          验证信息\n        ")]),t._v(" "),l("li",{staticClass:"step3"},[l("i",[t._v("3")]),t._v("\n          重置登录密码\n        ")]),t._v(" "),l("li",{staticClass:"step4"},[l("i",[t._v("3")]),t._v("\n          成功找回密码\n        ")])])]),t._v(" "),l("div",{staticClass:"step-content"},[l("div",{staticClass:"stepinfo step_1 current"},[l("div",{staticClass:"step_con"},[l("ul",[l("li",[l("span",{staticClass:"label"},[t._v("选择会员类型：")]),t._v(" "),l("select",{attrs:{id:"memeberType",name:"memeberType"}},[l("option",{attrs:{value:""}},[t._v("选择会员类型")]),t._v(" "),l("option",{attrs:{value:"aflc-2|AF00101"}},[t._v("货主")]),t._v(" "),l("option",{attrs:{value:"aflc-1|AF00102"}},[t._v("车主")])])]),t._v(" "),l("li",[l("span",{staticClass:"label"},[t._v("输入您的手机号：")]),t._v(" "),l("input",{attrs:{id:"mobile",name:"mobile",maxlength:"11",type:"text"}})]),t._v(" "),l("li",[l("span",{staticClass:"label"},[t._v("验证码：")]),t._v(" "),l("input",{attrs:{id:"vcode",maxlength:"5",type:"text"}}),t._v(" "),l("img",{attrs:{id:"vdimgck",src:"templets/img/vcode.jpg",alt:""}}),t._v(" "),l("span",{staticClass:"changevcode"},[t._v("看不清？")])]),t._v(" "),l("li",[l("span",{staticClass:"label"}),l("span",{staticClass:"next-btn"},[t._v("下一步")])]),t._v(" "),l("li",{staticClass:"last"},[l("span",{staticClass:"label"}),l("a",{attrs:{href:"/regisiter"}},[t._v("免费注册")]),t._v(" | "),l("a",{attrs:{href:"/login"}},[t._v("会员登录")])])])])]),t._v(" "),l("div",{staticClass:"stepinfo step_2"},[l("div",{staticClass:"step_con"},[l("strong",[t._v("您注册的手机号为：")]),t._v(" "),l("span",{staticClass:"mobile"},[t._v("18*****5685")]),t._v(" "),l("ul",[l("li",[l("span",{staticClass:"label"},[t._v("输入您的验证码：")]),t._v(" "),l("input",{attrs:{id:"smscode",type:"text",maxlength:"8"}}),t._v(" "),l("span",{staticClass:"getvcode"},[t._v("获取验证码")])]),t._v(" "),l("li",{staticClass:"tipinfo"},[t._v("\n              请输入您手机"),l("span",{staticClass:"mobile"},[t._v("138***8899")]),t._v("上收到的验证码，填写正确后即可重置密码\n            ")]),t._v(" "),l("li",[l("span",{staticClass:"next-btn"},[t._v("下一步")])])])])]),t._v(" "),l("div",{staticClass:"stepinfo step_3"},[l("div",{staticClass:"step_con"},[l("ul",[l("li",[l("span",{staticClass:"label"},[t._v("重新输入密码：")]),t._v(" "),l("input",{attrs:{id:"password",type:"password"}}),t._v(" "),l("span",{staticClass:"showtip"},[t._v("如何设置安全密码"),l("img",{attrs:{src:"templets/img/u15100.png",alt:""}})]),t._v(" "),l("div",{staticClass:"ptip"},[t._v("必须时6-20位字母或者数字")])]),t._v(" "),l("li",[l("span",{staticClass:"label"},[t._v("再次输入新密码：")]),t._v(" "),l("input",{attrs:{id:"repassword",type:"password"}})]),t._v(" "),l("li",[l("span",{staticClass:"label"}),l("a",{staticClass:"next-btn"},[t._v("下一步")])])])])]),t._v(" "),l("div",{staticClass:"stepinfo step_4"},[l("div",{staticClass:"step_con"},[l("div",{staticClass:"success-tip"},[l("a",{staticClass:"last-btn",attrs:{href:"/login"}},[t._v("重新登录")]),t._v(" "),l("a",{staticClass:"normal-btn",attrs:{href:"/"}},[t._v("返回首页")])])])])])])])}],!1,null,null,null);e.default=component.exports}}]);