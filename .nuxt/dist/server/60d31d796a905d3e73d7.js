exports.ids=[15],exports.modules={224:function(c,e,d){var content=d(367);"string"==typeof content&&(content=[[c.i,content,""]]),content.locals&&(c.exports=content.locals);var t=d(3).default;c.exports.__inject__=function(c){t("747ad034",content,!0,c)}},366:function(c,e,d){"use strict";d.r(e);var t=d(224),v=d.n(t);for(var r in t)"default"!==r&&function(c){d.d(e,c,function(){return t[c]})}(r);e.default=v.a},367:function(c,e,d){(c.exports=d(2)(!1)).push([c.i,".huo_box[data-v-02be5cc9]{max-width:1400px;margin:0 auto}.box1_list[data-v-02be5cc9],.box2_list[data-v-02be5cc9]{border:1px solid #ddd}",""])},587:function(c,e,d){"use strict";d.r(e);var t={name:"HuoOrder",head:{link:[{rel:"stylesheet",href:"/css/huo_order.css"},{rel:"stylesheet",href:"/layer3/css/layui.css"},{rel:"stylesheet",href:"/fancybox/jquery.fancybox.min.css"}],script:[]},mounted(){seajs.use(["/layer/layer.js","api"],function(){seajs.use(["/js/gaodemap2.js"],function(){seajs.use(["/js/huoOrder.1.js"],function(){})})})}},v=d(0);var component=Object(v.a)(t,function(){var c=this.$createElement;return(this._self._c||c)("div",{staticClass:"huo_box"},[this._ssrNode('<div class="main" data-v-02be5cc9><div class="right main_nr" data-v-02be5cc9><div class="nr order-create-main" data-v-02be5cc9><div class="order-step" data-v-02be5cc9><img src="/images/wzlImg/dp.png" class="dp" data-v-02be5cc9>发布货源信息，让物流企业和运输车辆主动联系您，价比三家，省时省力</div> <div class="order-line-info order-input-tab" data-v-02be5cc9><div class="order-title" data-v-02be5cc9>线路信息 <span data-v-02be5cc9>（提示：待*为必填）</span></div> <div class="order-line-from clearfix" data-v-02be5cc9><div class="order-form-item" data-v-02be5cc9><div class="order-form-label" data-v-02be5cc9><span class="required" data-v-02be5cc9>*</span>出发地：</div> <div class="order-form-input" data-v-02be5cc9><input wtmap maxlength="40" type="text" data-v-02be5cc9><img src="/images/wzlImg/qd.png" class="qd" data-v-02be5cc9></div></div> <div class="order-form-item form-detail" data-v-02be5cc9><div class="order-form-label" data-v-02be5cc9><span class="required" data-v-02be5cc9>*</span>街道/门牌号：</div> <div class="order-form-input" data-v-02be5cc9><input wtmapinit wtmap="{township}{street}{building}" maxlength="40" type="text" data-v-02be5cc9><img src="/images/wzlImg/wz.png" class="wz1" data-v-02be5cc9></div></div></div> <div class="order-line-to clearfix" data-v-02be5cc9><div class="order-form-item" data-v-02be5cc9><div class="order-form-label" data-v-02be5cc9><span class="required" data-v-02be5cc9>*</span>到达地：</div> <div class="order-form-input" data-v-02be5cc9><input wtmap maxlength="40" type="text" data-v-02be5cc9><img src="/images/wzlImg/zd.png" class="zd" data-v-02be5cc9></div></div> <div class="order-form-item form-detail" data-v-02be5cc9><div class="order-form-label" data-v-02be5cc9><span class="required" data-v-02be5cc9>*</span>街道/门牌号：</div> <div class="order-form-input" data-v-02be5cc9><input wtmapinit wtmap="{township}{street}{building}" maxlength="40" type="text" data-v-02be5cc9><img src="/images/wzlImg/wz.png" class="wz2" data-v-02be5cc9></div></div></div></div> <div class="order-input-tab order-cargo-info" data-v-02be5cc9><div class="order-title" data-v-02be5cc9>货物信息</div> <div class="order-caro-con" data-v-02be5cc9><div class="order-cargo-title clearfix" data-v-02be5cc9></div> <ul class="order-cargo-list" data-v-02be5cc9><li data-v-02be5cc9><div class="input" data-v-02be5cc9><span data-v-02be5cc9><span class="required" data-v-02be5cc9>*</span>货物名称</span> <input maxlength="40" type="text" class="cargoname" data-v-02be5cc9></div> <div class="input" data-v-02be5cc9><span data-v-02be5cc9><span class="required" data-v-02be5cc9>*</span>总件数</span> <input maxlength="12" type="text" data-v-02be5cc9> <span class="append" data-v-02be5cc9>件</span></div> <div class="input" data-v-02be5cc9><span data-v-02be5cc9><span class="required" data-v-02be5cc9>*</span>预估重量</span> <input maxlength="12" type="text" class="caroweight" data-v-02be5cc9> <span class="append" data-v-02be5cc9>公斤</span></div> <div class="input" data-v-02be5cc9><span data-v-02be5cc9><span class="required" data-v-02be5cc9>*</span>预估体积</span> <input maxlength="12" type="text" class="cargovolume" data-v-02be5cc9> <span class="append" data-v-02be5cc9>立方</span></div></li></ul> <div class="reset-cargo-list" data-v-02be5cc9></div> <div class="add-cargo-list" data-v-02be5cc9></div></div></div> <div class="order-input-tab order-company-info" data-v-02be5cc9><div class="order-title" data-v-02be5cc9>货源类型</div> <div class="order_check order_top" data-v-02be5cc9>\n            选择类型：\n            <span type="AF0490701" class="minbox checktype" data-v-02be5cc9>单次急发货源</span> <span type="AF0490702" class="minbox" data-v-02be5cc9>长期稳定货源</span></div></div> <div class="order-input-tab order-contact-info" data-v-02be5cc9><div class="order-title" data-v-02be5cc9>联系方式</div> <div class="order-contact-from clearfix" data-v-02be5cc9><div class="order-form-item" data-v-02be5cc9><div class="order-form-label" data-v-02be5cc9><span class="required" data-v-02be5cc9>*</span>发货人：</div> <div class="order-form-input" data-v-02be5cc9><input maxlength="40" type="text" data-v-02be5cc9></div></div> <div class="order-form-item" data-v-02be5cc9><div class="order-form-label" data-v-02be5cc9><span class="required" data-v-02be5cc9>*</span>发货人手机：</div> <div class="order-form-input" data-v-02be5cc9><input maxlength="11" type="text" data-v-02be5cc9></div></div> <span class="order-usual-button" data-v-02be5cc9>选择常用联系人</span> <div class="order-save-usual" data-v-02be5cc9><label data-v-02be5cc9><input id type="checkbox" name data-v-02be5cc9>\n                保存到常用发货人\n              </label></div></div> <div class="order-contact-to clearfix" data-v-02be5cc9><div class="order-form-item" data-v-02be5cc9><div class="order-form-label" data-v-02be5cc9>收货人：</div> <div class="order-form-input" data-v-02be5cc9><input maxlength="40" type="text" data-v-02be5cc9></div></div> <div class="order-form-item" data-v-02be5cc9><div class="order-form-label" data-v-02be5cc9>收货人手机：</div> <div class="order-form-input" data-v-02be5cc9><input maxlength="11" type="text" data-v-02be5cc9></div></div> <span class="order-usual-button" data-v-02be5cc9>选择常用联系人</span> <div class="order-save-usual" data-v-02be5cc9><label data-v-02be5cc9><input id type="checkbox" name data-v-02be5cc9>\n                保存到常用收货人\n              </label></div></div></div> <div class="order_usual_contacts_wrapper" data-v-02be5cc9><div class="order_usual_contacts_bg" data-v-02be5cc9></div> <div class="order_usual_contacts_pop order_list_contacts_pop" data-v-02be5cc9><div class="el-dialog__header" data-v-02be5cc9><span class="close" data-v-02be5cc9>X</span> <span class="inner_title" data-v-02be5cc9>常用联系人</span></div> <div class="el-dialog__body" data-v-02be5cc9><span class="search-input" data-v-02be5cc9><input type="text" autocomplete="off" placeholder="请输入姓名、手机号或地址搜索" class="el-input__inner" data-v-02be5cc9><span data-v-02be5cc9>搜索</span></span> <span class="addNewContact " data-v-02be5cc9>添加常用发货人</span></div> <ul class="contactPopList" data-v-02be5cc9><li class="clearfix" data-v-02be5cc9><span class="contactName" data-v-02be5cc9>王泽熙</span> <span class="contactMobile" data-v-02be5cc9>135656565</span> <span class="contactAddres" data-v-02be5cc9>广东省广州市海珠区凤阳街道粤汇餐厅马岗顶工业区</span> <span class="contactManage" data-v-02be5cc9>修改</span></li></ul></div> <div class="order_add_contacts_pop order_usual_contacts_pop" data-v-02be5cc9><div class="el-dialog__header" data-v-02be5cc9><span class="close" data-v-02be5cc9>X</span> <span class="inner_title" data-v-02be5cc9>添加常用发货人</span></div> <table data-v-02be5cc9><tbody data-v-02be5cc9><tr data-v-02be5cc9><th data-v-02be5cc9>姓名：</th> <td data-v-02be5cc9><input placeholder="请输入联系人" maxlength="15" type="text" data-v-02be5cc9></td></tr> <tr data-v-02be5cc9><th data-v-02be5cc9>电话：</th> <td data-v-02be5cc9><input placeholder="请输入联系人电话号码" type="text" maxlength="11" data-v-02be5cc9></td></tr> <tr data-v-02be5cc9><th data-v-02be5cc9>地址：</th> <td data-v-02be5cc9><input placeholder="请选择地址" wtmap="detail" maxlength="30" type="text" data-v-02be5cc9></td></tr> <tr data-v-02be5cc9><th data-v-02be5cc9></th> <td data-v-02be5cc9><label data-v-02be5cc9><input type="checkbox" name="setdefault" id="setdefault" data-v-02be5cc9>设置为默认地址</label></td></tr></tbody></table> <div class="contact-btns" data-v-02be5cc9><span class="add-cancel" data-v-02be5cc9>取消</span> <span class="add-submit" data-v-02be5cc9>保存</span></div></div></div> <div class="order-agree-info" data-v-02be5cc9><label for="agree" data-v-02be5cc9><input id="agree" type="checkbox" checked="checked" name="agree" data-v-02be5cc9>\n            我已阅读并接受<a href="/h5/EnterpriseAgreement.html" target="_blank" rel="noopener noreferrer" data-v-02be5cc9>《中国专线物流网服务协议》</a> <a href="/h5/SecrecyAgreement.html" target="_blank" rel="noopener noreferrer" data-v-02be5cc9>《网络用户信息保密协议》</a></label></div> <div class="order-submit-btn" data-v-02be5cc9>立即发布</div></div> <div class="order-success-main" data-v-02be5cc9><div class="order-success-txt" data-v-02be5cc9>订单提交成功！等待物流公司承运</div> <div class="order-success-tip" data-v-02be5cc9><span class="order-tip" data-v-02be5cc9>温馨提示：</span><br data-v-02be5cc9>1、请您和吴瑞承运商签订真实有效的运单，签约前请勿支付押金、定金等一切费用；<br data-v-02be5cc9>2、查验物流公司和运输车辆证件，积极维护自身权益！\n        </div> <div class="order-success-order order-success-tab clearfix" data-v-02be5cc9><div class="order-success-label" data-v-02be5cc9>订单信息</div> <ul data-v-02be5cc9><li class="order-num" data-v-02be5cc9><i data-v-02be5cc9>订单号</i> <span data-v-02be5cc9>AFZG201812240001</span></li> <li class="order-from" data-v-02be5cc9><i data-v-02be5cc9>发货方信息</i> <span data-v-02be5cc9>李宝强  15978951234</span></li> <li class="order-to" data-v-02be5cc9><i data-v-02be5cc9>收货方信息</i> <span data-v-02be5cc9>李宝强  15978951234</span></li></ul></div> <div class="order-success-order order-success-tab clearfix" data-v-02be5cc9><div class="order-success-label" data-v-02be5cc9>货物信息</div> <ul data-v-02be5cc9><li class="order-cargo" data-v-02be5cc9><i data-v-02be5cc9>货物名称</i> <span data-v-02be5cc9>AFZG201812240001</span></li> <li class="order-cargo-num" data-v-02be5cc9><i data-v-02be5cc9>总数量</i> <span data-v-02be5cc9>李宝强  15978951234</span></li> <li class="order-cago-class" data-v-02be5cc9><i data-v-02be5cc9>货物类型</i> <span data-v-02be5cc9>李宝强  15978951234</span></li> <li class="order-cargo-weight" data-v-02be5cc9><i data-v-02be5cc9>预估重量</i> <span data-v-02be5cc9>李宝强  15978951234</span></li> <li class="order-cargo-volume" data-v-02be5cc9><i data-v-02be5cc9>预估体积</i> <span data-v-02be5cc9>李宝强  15978951234</span></li> <li class="order-cargo-fee" data-v-02be5cc9><i data-v-02be5cc9>预估运费</i> <span data-v-02be5cc9>李宝强  15978951234</span></li></ul></div> <div class="order-success-order order-success-tab clearfix" data-v-02be5cc9><div class="order-success-label" data-v-02be5cc9>线路信息</div> <ul data-v-02be5cc9><li class="order-lineinfo-from" data-v-02be5cc9><i data-v-02be5cc9>出发地</i> <span data-v-02be5cc9>AFZG201812240001</span></li> <li class="order-lineinfo-to" data-v-02be5cc9><i data-v-02be5cc9>到达地</i> <span data-v-02be5cc9>李宝强  15978951234</span></li></ul></div> <div class="order-success-btns" data-v-02be5cc9><span class="continue-create-order" data-v-02be5cc9>继续下单</span> <a href="/ydcx" class="track-order" data-v-02be5cc9>跟踪订单</a> <a href="/" class="return-to-index" data-v-02be5cc9>返回首页</a></div></div> <div class="order-caro-pop" data-v-02be5cc9><ul data-v-02be5cc9><li data-v-02be5cc9>食品</li></ul></div> <div class="wlname-info" data-v-02be5cc9><div class="wlname-title" data-v-02be5cc9>最佳网点</div> <ul data-v-02be5cc9><li data-v-02be5cc9><span class="wlnamev" data-v-02be5cc9>出发地网点：<span data-v-02be5cc9></span></span><span class="wlnameh" data-v-02be5cc9>距发货地：<span data-v-02be5cc9>km</span></span> <p class="wladdress" data-v-02be5cc9></p> <p data-v-02be5cc9>联系人：<span class="wluser" data-v-02be5cc9></span></p> <p data-v-02be5cc9>联系电话：<span class="wlphone" data-v-02be5cc9></span></p></li><li data-v-02be5cc9><span class="wlnamev" data-v-02be5cc9>目的地网点：<span data-v-02be5cc9></span></span><span class="wlnameh" data-v-02be5cc9>距收货地：<span data-v-02be5cc9>km</span></span> <p data-v-02be5cc9></p> <p data-v-02be5cc9>联系人：<span class="wluser" data-v-02be5cc9></span></p> <p data-v-02be5cc9>联系电话：<span class="wlphone" data-v-02be5cc9></span></p></li></ul> <div class="select-other-net" data-v-02be5cc9>重新选择网点</div></div></div></div>')])},[],!1,function(c){var e=d(366);e.__inject__&&e.__inject__(c)},"02be5cc9","92e03802");e.default=component.exports}};
//# sourceMappingURL=60d31d796a905d3e73d7.js.map