(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{495:function(t,s,a){"use strict";a.r(s);var e={layout:"login",head:{title:"注册"},fetch:function(t){t.params;var s,a=t.store;t.req,t.res,t.query;s=-1!==t.route.path.indexOf("/regisiter"),a.commit("login/setReg",s),a.commit("login/setPageType",""),a.commit("setPageClass","registiter-page")},mounted:function(){window.seajs.use(["layer","api"],function(){seajs.use(["./js/regisiter.js"])})}},i=a(0),l=Object(i.a)(e,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("div",{staticClass:"regisiter_wrap"},[a("div",{staticClass:"step_info step_info_ul_1"},[a("ul",{staticClass:"clfix"},[a("li",{staticClass:"step1 current"},[t._v("\n          选择会员类型\n        ")]),t._v(" "),a("li",{staticClass:"step2"},[t._v("\n          填写基本信息\n        ")]),t._v(" "),a("li",{staticClass:"step3"},[t._v("\n          完成注册\n        ")])])]),t._v(" "),a("div",{staticClass:"step-content"},[a("div",{staticClass:"stepinfo step_1 current"},[a("ul",[a("li",[a("h4",{attrs:{rel:"aflc-5",rel2:"AF00107"}},[t._v("物流公司")]),t._v(" "),a("ul",[a("li",[t._v("提供国内第三方物流运输服务的公司。")]),t._v(" "),a("li",[t._v("可免费发布各省、地、县收货、提货的网点，免费发布物流线路信息，免费查询车源、货源信息。")]),t._v(" "),a("li",[t._v("提醒：国内物流公司必须提供真实网点信息和具有物流公司的相关资质。")])])]),t._v(" "),a("li",[a("h4",{attrs:{rel:"aflc-2",rel2:"AF00101"}},[t._v("发货企业或个人")]),t._v(" "),a("ul",[a("li",[t._v("需要发货的企业或个人。")]),t._v(" "),a("li",[t._v("可免费发布国内外货物运输信息，免费查询运输车辆及物流公司信息。")])])]),t._v(" "),a("li",[a("h4",{attrs:{rel:"aflc-1",rel2:"AF00102"}},[t._v("车主")]),t._v(" "),a("ul",[a("li",[t._v("提供物流运输服务且具备营运资格的车队或个体车主。")]),t._v(" "),a("li",[t._v("可免费发布车辆信息，线路信息，免费查询货源信息。")])])])])]),t._v(" "),a("div",{staticClass:"stepinfo step_2"},[a("form",{attrs:{action:"/"}},[a("ul",{staticClass:"form"},[a("li",[a("span",{staticClass:"label"},[a("span",{staticClass:"hot"},[t._v("*")]),t._v(" 注册手机号")]),a("input",{attrs:{autocomplete:"new-password","data-valid":"checkMobile",name:"mobile",maxlength:"11",placeholder:"请输入手机号作为登录账号",type:"text"}}),t._v(" "),a("div",{staticClass:"tip"})]),t._v(" "),a("li",[a("span",{staticClass:"label"},[a("span",{staticClass:"hot"},[t._v("*")]),t._v("登录密码")]),a("input",{attrs:{autocomplete:"new-password","data-valid":"checkPassword",name:"password",type:"password",maxlength:"16",placeholder:"密码长度6~16个字符，字母区分大小写"}}),t._v(" "),a("div",{staticClass:"tip"}),t._v(" "),a("span",{staticClass:"eye"})]),t._v(" "),a("li",{staticClass:"vcodeinput"},[a("span",{staticClass:"label"},[a("span",{staticClass:"hot"},[t._v("*")]),t._v("验证码")]),a("input",{attrs:{autocomplete:"off","data-valid":"checkVcode",name:"imageCode",maxlength:"6",placeholder:"请输入验证码",type:"text"}}),t._v(" "),a("div",{staticClass:"vcode"},[a("img",{attrs:{id:"vdimgck",src:"#",alt:""}}),t._v("\n                看不清？"),a("span",{staticClass:"changeVcode"},[t._v("点击更换")])]),t._v(" "),a("div",{staticClass:"tip"})]),t._v(" "),a("li",{staticClass:"phonecodeInput"},[a("span",{staticClass:"label"},[a("span",{staticClass:"hot"},[t._v("*")]),t._v("手机验证码")]),a("input",{attrs:{autocomplete:"off","data-valid":"checkSmsCode",name:"smsCode",maxlength:"6",placeholder:"请输入短信验证码",type:"text"}}),t._v(" "),a("div",{staticClass:"getcode-btn"},[t._v("获取短信验证码")]),t._v(" "),a("div",{staticClass:"tip"})]),t._v(" "),a("li",{staticClass:"radioinput"},[a("span",{staticClass:"label"},[t._v(" ")]),a("label",[a("input",{attrs:{autocomplete:"off",name:"agree",checked:"",type:"checkbox"}}),t._v("我已阅读并接受"),a("a",{attrs:{href:"/h5/EnterpriseAgreement.html",target:"_blank"}},[t._v("《安发网络服务条款》")])])])])])]),t._v(" "),a("div",{staticClass:"stepinfo step_3"},[a("div",{staticClass:"success-text"},[t._v("\n          恭喜您，注册成功！  \n        ")]),t._v(" "),a("div",{staticClass:"tipinfo"},[a("span",{staticClass:"tipicon"}),t._v("完善基本信息，有更多惊喜等着您！ "),a("a",{attrs:{href:"http://192.168.1.157:9526/baseInfo/authentication",target:"_blank"}},[t._v("立即完善")])]),t._v(" "),a("div",{staticClass:"introinfo"},[a("ul",[a("li",{staticClass:"reg_shangji"},[a("strong",[t._v("获取等多商机")]),t._v(" "),a("p",[t._v("准确、完整的填写您的基本信息，有利于获得客户的信任，赢得更多商机！")])]),t._v(" "),a("li",{staticClass:"reg_qiyewz reg_chezhu"},[a("strong",[t._v("多权限多功能")]),t._v(" "),a("p",[t._v("完善基本信息，有利于及时通过我们的人工审核，通过审核后可开启更多功能权限！")])]),t._v(" "),a("li",{staticClass:"reg_qiyewz reg_wuliu"},[a("strong",[t._v("免费获赠企业网站")]),t._v(" "),a("p",[t._v("完善基本信息，有利于及时通过我们的人工审核，通过审核后可免费获赠专属网站一个！")])]),t._v(" "),a("li",{staticClass:"reg_gongsik"},[a("strong",[t._v("收录到28快运公司库")]),t._v(" "),a("p",[t._v("您的网站将被并收录到在28快运公司库中，免费为您推广，便于客户及时搜索到！")])])])])])]),t._v(" "),a("div",{staticClass:"step-next"},[a("div",{staticClass:"step-next1 current"},[a("div",{staticClass:"next-btn"},[t._v("下一步")])]),t._v(" "),a("div",{staticClass:"step-next2"},[a("div",{staticClass:"prev-btn"},[t._v("上一步")]),t._v(" "),a("div",{staticClass:"next-btn"},[t._v("注册")])]),t._v(" "),a("div",{staticClass:"step-next3"},[a("a",{staticClass:"normal-btn",attrs:{href:"/"}},[t._v("返回网站首页")]),t._v(" "),a("a",{staticClass:"last-btn",attrs:{href:"http://192.168.1.157:9526/baseInfo/authentication"}},[t._v("进入会员中心")])])])]),t._v(" "),a("div",{staticClass:"hidediv",staticStyle:{width:"0",height:"0",overflow:"hidden"}},[a("form",{attrs:{id:"form1",name:"form1",method:"POST",action:"index_do.php"}},[a("input",{attrs:{autocomplete:"off",type:"hidden",name:"fmdo",value:"login"}}),t._v(" "),a("input",{attrs:{autocomplete:"off",type:"hidden",name:"dopost",value:"login"}}),t._v(" "),a("input",{attrs:{autocomplete:"off",type:"hidden",name:"gourl",value:""}}),t._v(" "),a("input",{attrs:{id:"usermobile",autocomplete:"off",type:"text",name:"userid",placeholder:"请输入您的手机号"}}),t._v(" "),a("input",{attrs:{id:"userpwd",autocomplete:"off",type:"password",name:"pwd",placeholder:"请输入您的密码"}})])])])}],!1,null,null,null);s.default=l.exports}}]);