(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{213:function(e,o,t){var content=t(293);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(10).default)("1cce653e",content,!0,{sourceMap:!1})},292:function(e,o,t){"use strict";var n=t(213);t.n(n).a},293:function(e,o,t){(e.exports=t(9)(!1)).push([e.i,".showlogoutinfo{margin:30px auto;border:1px solid #ccc;background:#eee;text-align:center;width:300px;height:100px;line-height:100px}",""])},507:function(e,o,t){"use strict";t.r(o);var n={name:"Exit",layout:"empty",mounted(){let e=this.$cookies;e.remove("access_token"),e.remove("login_mobile"),e.remove("login_type"),e.remove("loginId"),e.remove("loginCompanyName"),location.href="/"}},l=(t(292),t(1)),component=Object(l.a)(n,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"showlogoutinfo"},[this._v(" 正在退出登录......")])},[],!1,null,null,null);o.default=component.exports}}]);