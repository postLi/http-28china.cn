exports.ids=[14],exports.modules={169:function(e,l,t){var content=t(251);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var r=t(4).default;e.exports.__inject__=function(e){r("530e2570",content,!0,e)}},250:function(e,l,t){"use strict";t.r(l);var r=t(169),d=t.n(r);for(var n in r)"default"!==n&&function(e){t.d(l,e,function(){return r[e]})}(n);l.default=d.a},251:function(e,l,t){(e.exports=t(3)(!1)).push([e.i,".main_nr{width:1400px;margin:0 auto;background:none;box-shadow:none}.main_nr .nr{padding:0 0 20px;text-indent:0;border:none}.main_nr .nr_bt{border:none}.main_nr .nr_bt1{padding-top:0;display:none}.order-cargo-list input,.order-cargo-title>span{width:180px}.order-cargo-list input{width:130px}.reset-cargo-list{left:910px;top:28px}.add-cargo-list{left:1000px}.order-contact-info .order-form-item{width:400px}.order-contact-info .order-form-item input{width:230px}.order-success-tab ul{width:958px}",""])},358:function(e,l,t){"use strict";t.r(l);var r={head:()=>({title:"创建运单",link:[{rel:"stylesheet",href:"/member/css/onlineOrder.css"}],script:[{src:"/js/AFLC_API.js"}]}),mounted(){seajs.use(["/js/onlineOrder.js"])}},d=t(0);var component=Object(d.a)(r,function(){var e=this.$createElement;return(this._self._c||e)("div",[this._ssrNode('<div class="main"><div class="right main_nr"><div class="nr_bt"><div class="nr_bt1"><span>在线下单</span></div></div> <div class="nr order-create-main"><div class="order-step"></div> <div class="order-line-info order-input-tab"><div class="order-title">线路信息 <span>（提示：待*为必填）</span></div> <div class="order-line-from clearfix"><div class="order-form-item"><div class="order-form-label"><span class="required">*</span>出发地：</div> <div class="order-form-input"><input wtmap maxlength="40" type="text" placeholder="请选择 省-市-县"></div></div> <div class="order-form-item form-detail"><div class="order-form-label"><span class="required">*</span>街道/门牌号：</div> <div class="order-form-input"><input wtmapinit wtmap="{township}{street}{building}" maxlength="40" type="text" placeholder="请填写详细地址"></div></div></div> <div class="order-line-to clearfix"><div class="order-form-item"><div class="order-form-label"><span class="required">*</span>到达地：</div> <div class="order-form-input"><input wtmap maxlength="40" type="text" placeholder="请选择 省-市-县"></div></div> <div class="order-form-item form-detail"><div class="order-form-label"><span class="required">*</span>街道/门牌号：</div> <div class="order-form-input"><input wtmapinit wtmap="{township}{street}{building}" maxlength="40" type="text" placeholder="请填写详细地址"></div></div></div></div> <div class="order-input-tab order-cargo-info"><div class="order-title">货物信息</div> <div class="order-caro-con"><div class="order-cargo-title clearfix"><span><span class="required">*</span>货物名称</span> <span>总件数</span> <span><span class="required">*</span>预估重量</span> <span><span class="required">*</span>预估体积</span></div> <ul class="order-cargo-list"><li><div class="input"><input maxlength="40" type="text" class="cargoname"></div> <div class="input"><input maxlength="12" type="text"> <span class="append">件</span></div> <div class="input"><input maxlength="12" type="text" class="caroweight"> <span class="append">公斤</span></div> <div class="input"><input maxlength="12" type="text" class="cargovolume"> <span class="append">立方</span></div> <span class="deletecargo">[删除]</span></li></ul> <div class="reset-cargo-list"></div> <div class="add-cargo-list"></div></div></div> <div class="order-input-tab order-company-info"><div class="order-title">物流公司报价</div> <div class="order-company-list"><table><thead><tr><th colspan="2" width="252">承运商</th> <th width="62">起步价</th> <th width="170">重货</th> <th width="170">轻货</th> <th width="140">时效</th> <th>发车频率</th></tr></thead> <tbody class="lineinfo"></tbody> <tbody class="nocompany"><tr><td colspan="7">请先选择出发地、目的地</td></tr></tbody> <tbody class="noline"><tr><td colspan="7">此物流公司暂未发布该条线路的专线，您可以选择继续下单</td></tr></tbody> <tbody class="findnone"><tr><td colspan="7">暂无相关物流公司推荐，换换其他路线哦</td></tr></tbody></table></div> <div class="order-calc-price">预估运费总金额：<span>0元</span></div></div> <div class="order-input-tab order-contact-info"><div class="order-title">联系方式</div> <div class="order-contact-from clearfix"><div class="order-form-item"><div class="order-form-label"><span class="required">*</span>发货人：</div> <div class="order-form-input"><input maxlength="40" type="text"></div></div> <div class="order-form-item"><div class="order-form-label"><span class="required">*</span>发货人手机：</div> <div class="order-form-input"><input maxlength="40" type="text"></div></div> <span class="order-usual-button">选择常用联系人</span> <div class="order-save-usual"><label><input id type="checkbox" name>\n                保存到常用发货人\n              </label></div></div> <div class="order-contact-to clearfix"><div class="order-form-item"><div class="order-form-label">收货人：</div> <div class="order-form-input"><input maxlength="40" type="text"></div></div> <div class="order-form-item"><div class="order-form-label">收货人手机：</div> <div class="order-form-input"><input maxlength="40" type="text"></div></div> <span class="order-usual-button">选择常用联系人</span> <div class="order-save-usual"><label><input id type="checkbox" name>\n                保存到常用收货人\n              </label></div></div></div> <div class="order-agree-info"><label for="agree"><input id="agree" type="checkbox" checked="checked" name="agree">\n            我已阅读并接受<a href="/h5/EnterpriseAgreement.html" target="_blank" rel="noopener noreferrer">《28快运服务协议》</a> <a href="/h5/SecrecyAgreement.html" target="_blank" rel="noopener noreferrer">《网络用户信息保密协议》</a></label></div> <div class="order-submit-btn">立即下单</div></div> <div class="order-success-main"><div class="order-success-txt">订单提交成功！等待物流公司承运</div> <div class="order-success-tip"><span class="order-tip">温馨提示：</span><br>1、请您和吴瑞承运商签订真实有效的运单，签约前请勿支付押金、定金等一切费用；<br>2、查验物流公司和运输车辆证件，积极维护自身权益！\n        </div> <div class="order-success-order order-success-tab clearfix"><div class="order-success-label">订单信息</div> <ul><li class="order-num"><i>订单号</i> <span>AFZG201812240001</span></li> <li class="order-from"><i>发货方信息</i> <span>李宝强  15978951234</span></li> <li class="order-to"><i>收货方信息</i> <span>李宝强  15978951234</span></li></ul></div> <div class="order-success-order order-success-tab clearfix"><div class="order-success-label">货物信息</div> <ul><li class="order-cargo"><i>货物名称</i> <span>AFZG201812240001</span></li> <li class="order-cargo-num"><i>总数量</i> <span>李宝强  15978951234</span></li> <li class="order-cago-class"><i>货物类型</i> <span>李宝强  15978951234</span></li> <li class="order-cargo-weight"><i>预估重量</i> <span>李宝强  15978951234</span></li> <li class="order-cargo-volume"><i>预估体积</i> <span>李宝强  15978951234</span></li> <li class="order-cargo-fee"><i>预估运费</i> <span>李宝强  15978951234</span></li></ul></div> <div class="order-success-order order-success-tab clearfix"><div class="order-success-label">线路信息</div> <ul><li class="order-lineinfo-from"><i>出发地</i> <span>AFZG201812240001</span></li> <li class="order-lineinfo-to"><i>到达地</i> <span>李宝强  15978951234</span></li></ul></div> <div class="order-success-btns"><span class="continue-create-order">继续下单</span> <a href="/plus/list.php?tid=76" class="track-order">跟踪订单</a> <a href="/" class="return-to-index">返回首页</a></div></div> <div class="order-caro-pop"><ul><li>食品</li></ul></div> <div class="wlname-info"><div class="wlname-title">最佳网点</div> <ul><li><span class="wlnamev">出发地网点：<span></span></span><span class="wlnameh">距发货地：<span>km</span></span> <p class="wladdress"></p> <p>联系人：<span class="wluser"></span></p> <p>联系电话：<span class="wlphone"></span></p></li><li><span class="wlnamev">目的地网点：<span></span></span><span class="wlnameh">距收货地：<span>km</span></span> <p></p> <p>联系人：<span class="wluser"></span></p> <p>联系电话：<span class="wlphone"></span></p></li></ul> <div class="select-other-net">重新选择网点</div></div></div></div> <div class="netListContent-wraper"><div class="netListContent-bg"></div> <div class="netListContent"><div class="netListContent-head"><span class="close">x</span> 网点选择\n      </div> <div class="el-dialog__body"><div class="popnet-title">请选择距您最近的出发地和到达地网点：</div> <div class="selectNetListPanel clearfix"><ul class="netPopChoiceList"><li class="start-net-icon"><span class="start-icon"></span>出发地:</li> <li class="clearfix"><span class="wlListName"><label role="radio" aria-checked="true" tabindex="0" class="el-radio is-checked"><input type="radio" aria-hidden="true" tabindex="-1" value="8a1e52787cd548f2af1984f35138d392" class="el-radio__original">广州新市营业部</label></span><span class="wlListMobile">距离：1.2709km</span> <span class="wlListAddres">广东省广州市白云区新市街道新市西街新市幼儿园</span></li><li class="clearfix"><span class="wlListName"><label role="radio" tabindex="0" class="el-radio"><input type="radio" aria-hidden="true" tabindex="-1" value="f257a9f46baa4bc3a75be9de629a90c1" class="el-radio__original">广州沙太北路收货站</label></span><span class="wlListMobile">距离：9.8661km</span> <span class="wlListAddres">广东省广州市白云区同和街道同宝路广州誉德莱国际学校</span></li></ul> <ul class="netPopChoiceList"><li class="end-net-icon"><span class="end-icon"></span>目的地:</li></ul></div></div> <div class="el-dialog__footer"><span class="cancel-net-select">取消</span> <span class="confirm-net-select">确定</span></div></div></div> <div class="order_usual_contacts_wrapper"><div class="order_usual_contacts_bg"></div> <div class="order_usual_contacts_pop order_list_contacts_pop"><div class="el-dialog__header"><span class="close">X</span> <span class="inner_title">常用联系人</span></div> <div class="el-dialog__body"><span class="search-input"><input type="text" autocomplete="off" placeholder="请输入姓名、手机号或地址搜索" class="el-input__inner"><span>搜索</span></span> <span class="addNewContact ">添加常用发货人</span></div> <ul class="contactPopList"><li class="clearfix"><span class="contactName">王泽熙</span> <span class="contactMobile">135656565</span> <span class="contactAddres">广东省广州市海珠区凤阳街道粤汇餐厅马岗顶工业区</span> <span class="contactManage">修改</span></li></ul></div> <div class="order_add_contacts_pop order_usual_contacts_pop"><div class="el-dialog__header"><span class="close">X</span> <span class="inner_title">添加常用发货人</span></div> <table><tr><th>姓名：</th> <td><input maxlength="15" type="text"></td></tr> <tr><th>电话：</th> <td><input type="text" maxlength="11"></td></tr> <tr><th>地址：</th> <td><input wtmap="detail" maxlength="30" type="text"></td></tr> <tr><th></th> <td><label><input id="setdefault" type="checkbox" name="setdefault">设置为默认地址</label></td></tr></table> <div class="contact-btns"><span class="add-cancel">取消</span> <span class="add-submit">保存</span></div></div></div>')])},[],!1,function(e){var l=t(250);l.__inject__&&l.__inject__(e)},null,"70a6a3fc");l.default=component.exports}};
//# sourceMappingURL=09532bf928912cdcba04.js.map