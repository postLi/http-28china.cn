(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{524:function(t,e,_){"use strict";_.r(e);var n={head:{link:[{rel:"stylesheet",href:"/css/insuranceProduct.css"},{rel:"stylesheet",href:"/css/insuranceComon.css"}]},layout:"Sublayout",mounted(){seajs.use(["/js/insurance.js"],function(){$(function(){var t=getRequest();"综合险"===$("input[name='a']:checked").val()?($("#bx_lx1_label").addClass("bx_checked"),$("#bx_sm1").css("display","block"),$("#bx_sm2").css("display","none")):($("#bx_lx2_label").addClass("bx_checked"),$("#bx_sm1").css("display","none"),$("#bx_sm2").css("display","block")),$("#toubao").click(function(){window.sessionStorage.setItem("step0",$("input[name='a']:checked").val()),window.open("/Insurance/step1")});let e="/aflc-portal/portalt/aflcinsurancepolicy/v1/"+t.id;$.ajax({url:"/api"+e,type:"GET",dataType:"json",processData:!1,cache:!1,contentType:!1,headers:{"Content-Type":"application/json"},success:function(t){$("#insuranceNumber").html(t.data.insuranceNumber),$("#browseNumber").html(t.data.browseNumber)},error:function(t){"invalid_token"===JSON.parse(t.responseText).error&&($("body").toast({content:"您还未登录，请先登录",duration:3e3}),$(".login_box").show())}})})})}},v=_(1),component=Object(v.a)(n,function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"product"},[_("div",{staticClass:"top_bg"},[_("div",{staticClass:"top center"},[_("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),_("li",{staticClass:"top_3"},[_("img",{attrs:{src:"/images/insurance/phone-bx.png"}}),t._v(" "),_("span",[t._v("免费热线")]),_("font",[t._v("400-999-2828")])],1)])])]),t._v(" "),_("div",{staticClass:"main_bg center"},[_("div",{staticClass:"baoxian"},[_("ul",[_("li",{staticClass:"bx_01"},[t._v("平安保险")]),t._v(" "),_("li",{staticClass:"bx_02"},[_("i",[t._v("货运运输保险")]),t._v(" "),_("font",[t._v("投保"),_("em",{attrs:{id:"insuranceNumber"}})]),t._v(" "),t._m(2)],1),t._v(" "),_("li",{staticClass:"bx_03"},[_("font",[t._v("5")]),t._v("元起")],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])]),t._v(" "),_("div",{staticClass:"main center"},[_("div",{staticClass:"item1"},[t._m(6),t._v(" "),_("div",{staticClass:"item1_nr"},[_("ul",[_("li",[_("font",[t._v("保单类型：")]),t._v(" "),_("span",[t._v("电子保单   纸质保单")])],1),t._v(" "),_("li",[_("font",[t._v("承保公司：")]),t._v(" "),_("span",[t._v("中国平安财产保险股份有限公司安徽分公司")])],1),t._v(" "),_("li",[_("font",[t._v("运输范围：")]),t._v(" "),_("span",[t._v("全国范围（不包括西藏、香港、澳门、台湾地区）")])],1),t._v(" "),_("li",[_("font",[t._v("保费依据：")]),t._v(" "),_("span",[t._v("以货物种类区分不同保费费率")])],1)])])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"top_1"},[e("a",{attrs:{href:"/",target:"_blank"}},[e("img",{attrs:{src:"/images/index_files/logor.png"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"top_2"},[e("span",[this._v("保险商城")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("浏览"),e("em",{attrs:{id:"browseNumber"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"bx_04"},[e("span",[this._v("险种：")]),this._v(" "),e("input",{staticClass:"display_none",attrs:{id:"bx_lx1",type:"radio",checked:"checked",name:"a",value:"综合险"}}),this._v(" "),e("label",{staticClass:"bx_item input01",attrs:{id:"bx_lx1_label",for:"bx_lx1"}},[this._v("综合险")]),this._v(" "),e("input",{staticClass:"display_none",attrs:{id:"bx_lx2",type:"radio",name:"a",value:"基本险"}}),this._v(" "),e("label",{staticClass:"bx_item input01",attrs:{id:"bx_lx2_label",for:"bx_lx2"}},[this._v("基本险")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"bx_05"},[e("span",{attrs:{id:"bx_sm1"}},[this._v("承保基本款所有保障范围+运输中碰撞、挤压、雨淋+盗窃哄抢")]),this._v(" "),e("span",{attrs:{id:"bx_sm2"}},[this._v("承保火灾、爆炸、车辆碰撞倾覆事故及暴雨等自然灾害造成的货物损失+装卸货损失+施救费用+盗窃哄抢")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"bx_06"},[e("input",{attrs:{id:"toubao",onclick:"next()",readonly:"",value:"立即投保"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item1_bt"},[e("img",{attrs:{src:"/Insurance/images/cpxx.png"}})])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"item2"},[_("div",{staticClass:"item2_bt"},[_("img",{attrs:{src:"/Insurance/images/bzxm.png"}})]),t._v(" "),_("div",{staticClass:"item2_nr"},[_("table",[_("tr",[_("th",[t._v("保障项目")]),t._v(" "),_("th",[t._v("保障说明")])]),t._v(" "),_("tr",[_("td",[t._v("平安险")]),t._v(" "),_("td",[t._v("承保被保险人货物在运输途中因恶劣气候、雷电、海啸、地震、洪水等自然灾害造成的货物全损；因运输工具搁浅、触礁、沉没、互撞，与流冰或其他物体碰撞以及失火、爆炸等意外事故造成的货物部分损失；装卸、转船过程中，被保险货物落海所造成的全损或部分损失；运输工具在中途港或避难港停靠引起的装卸货、存仓及运送货物产生的费用；共同海损引起的牺牲、公摊费、救助费用、合理施救费用。")])]),t._v(" "),_("tr",[_("td",[t._v("水渍险")]),t._v(" "),_("td",[t._v('水渍险在承保"平安险"的各项责任外，还负责被保险货物在运输过程中由于恶劣气候、雷电、海啸、地震、洪水等自然灾害所造成的部分损失。')])]),t._v(" "),_("tr",[_("td",[t._v("一切险")]),t._v(" "),_("td",[t._v("一切险在承保“平安险”、“水渍险”的所有责任外，还负责被保险货物在运输过程中，因一般外来风险所造成保险货物的损失，如被窃、雨淋、渗漏、碰损、破碎、串味、受潮受热、钩损等。")])]),t._v(" "),_("tr",[_("td",[t._v("航空险")]),t._v(" "),_("td",[t._v("航空险承保被保险货物在运输途中遭受雷电、火灾或爆炸或由于飞机遭受恶劣气候或其它危难事故而被抛弃，或由于飞机遭受碰撞、倾覆、坠落或失踪意外事故所造成的全部或部分损失；被保险人对遭受承保责任内危险的货物采取抢救，防止或减少货损的措施而支付的合理费用，但以不超过该批被救货物的保险金额为限。")])]),t._v(" "),_("tr",[_("td",[t._v("航空一切险")]),t._v(" "),_("td",[t._v("航空一切险除包括“航空运输险”的责任外，还负责被保险货物由于外来原因所致的全部或部分损失。")])]),t._v(" "),_("tr",[_("td",[t._v("陆运险")]),t._v(" "),_("td",[t._v("陆运险承保被保险货物在运输途中遭受暴风、雷电、洪水、地震等自然灾害，或因运输工具遭受碰撞、倾覆、出轨，或在驳运过程中因驳运工具遭受搁浅、触礁、沉没、碰撞，或由于遭受隧道坍塌、崖崩，或失火、爆炸意外事故所造成的全部或部分损失；被保险人对遭受承保责任内危险的货物采取抢救、防止或减少货损的措施而支付的合理费用。")])]),t._v(" "),_("tr",[_("td",[t._v("陆运一切险")]),t._v(" "),_("td",[t._v("陆运一切险除包括“陆运险”的责任外，还负责被保险货物在运输途中由于外来原因所致的全部或部分损失。")])])])])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"item3"},[_("div",{staticClass:"item3_bt"},[_("img",{attrs:{src:"/Insurance/images/lpzn.png"}})]),t._v(" "),_("div",{staticClass:"item3_nr"},[_("table",[_("tr",[_("td",[t._v("第一条")]),t._v(" "),_("td",[t._v("经中国货运保险网购买本产品的顾客，保险期间内发生保险责任内事故，可直接拨打平安财险客服电话95511报案、理赔，也可拨打智慧保险网客服热线4007797711，中国货运保险网将提供全程协助理赔服务。")])]),t._v(" "),_("tr",[_("td"),_("td",[t._v("索赔资料")])]),t._v(" "),_("tr",[_("td",[t._v("第二条")]),t._v(" "),_("td",[t._v("\n              国内水路、陆路货物运输保险理赔所需单证"),_("br"),t._v("\n              1、保险凭证：保单正本；"),_("br"),t._v("\n              2、索赔资料：出险通知书、索赔函、索赔清单；"),_("br"),t._v("\n              3、事故证明资料：交通事故责任认定书、公安证明、消防证明、行驶证、驾驶证复印件、运输合同或运输协议等；"),_("br"),t._v("\n              4、损失证明资料：承运部门签发的货运记录、运单(货票)、发货票、装箱单、磅码单、提单、托运单、交接验收记录、收货人入库记录、收货人货损货差证明、货物发票总价复印件、受损货物的维修发票或维修/更换项目清单（报价）、鉴定书或第三方检验报告；"),_("br"),t._v("\n            5、其他材料：如涉及第三者责任还须提供向责任方追偿的有关函电及其他必要单证或文件、照片、赔款收据及权益转让书等保险公司要求提供的材料")])]),t._v(" "),_("tr",[_("td",[t._v("第三条")]),t._v(" "),_("td",[t._v("\n              进出口货运险理赔所需单证"),_("br"),t._v("\n              1、保单原件一份；"),_("br"),t._v("\n              2、提单原件一份（电放可提供复印件，但需正本的电放通知函）；"),_("br"),t._v("\n              3、装箱单；"),_("br"),t._v("\n              4、发票；"),_("br"),t._v("\n              5、出口报关单退税联复印件；"),_("br"),t._v("\n              6、运输过程中使用的单据（比如集装箱设备交接单，拼箱货的拆箱报告等）；"),_("br"),t._v("\n              7、货损货差证明（资料的具体要求视案件情况再细化，具体根据个案告知）；"),_("br"),t._v("\n              8、索赔函；"),_("br"),t._v("\n              9、出险通知书；"),_("br"),t._v("\n              10、受损标的清单；"),_("br"),t._v("\n              11、赔款收据及权益转让书；"),_("br"),t._v("\n              12、照片。\n            ")])])])])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"item4"},[_("div",{staticClass:"item4_bt"},[_("img",{attrs:{src:"/Insurance/images/bxtk.png"}})]),t._v(" "),_("div",{staticClass:"item4_nr"},[_("table",[_("tr",[_("td",[t._v("第一条")]),_("td",[t._v("国内水路、陆路货物运输保险条款")])]),t._v(" "),_("tr",[_("td",[t._v("第二条")]),_("td",[t._v("陆上运输货物保险（火车、汽车）条款")])]),t._v(" "),_("tr",[_("td",[t._v("第三条")]),_("td",[t._v("航空运输货物保险条款")])]),t._v(" "),_("tr",[_("td",[t._v("第四条")]),_("td",[t._v("海洋运输货物保险条款")])])])])])}],!1,null,null,null);e.default=component.exports}}]);