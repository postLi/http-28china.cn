(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{235:function(e,o,t){var content=t(320);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(10).default)("1cce653e",content,!0,{sourceMap:!1})},319:function(e,o,t){"use strict";var n=t(235);t.n(n).a},320:function(e,o,t){(e.exports=t(9)(!1)).push([e.i,".showlogoutinfo{margin:30px auto;border:1px solid #ccc;background:#eee;text-align:center;width:300px;height:100px;line-height:100px}",""])},545:function(e,o,t){"use strict";t.r(o);var n={name:"Exit",layout:"empty",mounted(){let e=this.$cookies;e.remove("access_token"),e.remove("login_mobile"),e.remove("login_type"),e.remove("loginId"),e.remove("loginCompanyName"),e.remove("login_userId"),e.remove("login_userToken"),e.remove("login_userName"),location.href="/"}},r=(t(319),t(1)),component=Object(r.a)(n,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"showlogoutinfo"},[this._v(" 正在退出登录......")])},[],!1,null,null,null);o.default=component.exports}}]);