(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{306:function(o,e,n){var content=n(426);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(14).default)("1cce653e",content,!0,{sourceMap:!1})},425:function(o,e,n){"use strict";var l=n(306);n.n(l).a},426:function(o,e,n){(o.exports=n(13)(!1)).push([o.i,".showlogoutinfo{margin:30px auto;border:1px solid #ccc;background:#eee;text-align:center;width:300px;height:100px;line-height:100px}",""])},665:function(o,e,n){"use strict";n.r(e);var l={name:"Exit",layout:"empty",mounted:function(){var o=this.$cookies;o.remove("access_token"),o.remove("login_mobile"),o.remove("login_type"),o.remove("loginId"),o.remove("loginCompanyName"),o.remove("login_userId"),o.remove("login_userToken"),o.remove("login_userName");var e=location.hostname;-1!==e.indexOf("28kuaiyun.cn")&&(e=".28kuaiyun.cn");var n={domain:e};$.cookie("access_token",null,n),$.cookie("login_mobile",null,n),$.cookie("login_type",null,n),$.cookie("loginId",null,n),$.cookie("loginCompanyName",null,n),$.cookie("login_userId",null,n),$.cookie("login_userToken",null,n),$.cookie("login_userName",null,n),location.href="/"}},t=(n(425),n(2)),component=Object(t.a)(l,function(){var o=this.$createElement;return(this._self._c||o)("div",{staticClass:"showlogoutinfo"},[this._v(" 正在退出登录......")])},[],!1,null,null,null);e.default=component.exports}}]);