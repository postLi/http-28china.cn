<template>
  <div class="huo_box">
    <div class="main">
      <div class="right main_nr">
        <!-- <div class="nr_bt">
          <div class="nr_bt1"><span>在线下单</span></div>
        </div>	 -->
        <!-- 下单部分 -->
        <!-- <img src="/images/wzlImg/wz.png"> -->
        <div class="nr order-create-main">
          <div class="order-step"><img 
            src="/images/wzlImg/dp.png" 
            class="dp">发布货源信息，让物流企业和运输车辆主动联系您，价比三家，省时省力</div>
          <div class="order-line-info order-input-tab">
            <div class="order-title">线路信息 <span>（提示：待*为必填）</span></div>
            <!-- 出发地 -->
            <div class="order-line-from clearfix">
              <div class="order-form-item">
                <div class="order-form-label"><span class="required">*</span>出发地：</div>
                <div class="order-form-input">
                  <input 
                    wtmap="" 
                    maxlength="40" 
                    type="text"><img 
                      src="/images/wzlImg/qd.png" 
                      class="qd">
                </div>
              </div>
              <div class="order-form-item form-detail">
                <div class="order-form-label"><span class="required">*</span>街道/门牌号：</div>
                <div class="order-form-input">
                  <input 
                    wtmapinit="" 
                    wtmap="{township}{street}{building}" 
                    maxlength="40" 
                    type="text"><img 
                      src="/images/wzlImg/wz.png" 
                      class="wz1">
                </div>
              </div>
            </div>
            <!-- 目的地 -->
            <div class="order-line-to clearfix">
              <div class="order-form-item">
                <div class="order-form-label"><span class="required">*</span>到达地：</div>
                <div class="order-form-input">
                  <input 
                    wtmap="" 
                    maxlength="40" 
                    type="text" ><img 
                      src="/images/wzlImg/zd.png" 
                      class="zd">
                </div>
              </div>
              <div class="order-form-item form-detail">
                <div class="order-form-label"><span class="required">*</span>街道/门牌号：</div>
                <div class="order-form-input">
                  <input 
                    wtmapinit="" 
                    wtmap="{township}{street}{building}" 
                    maxlength="40" 
                    type="text"><img 
                      src="/images/wzlImg/wz.png" 
                      class="wz2">
                </div>
              </div>
            </div>
          </div>
          <!-- 货物信息 -->
          <div class="order-input-tab order-cargo-info">
            <div class="order-title">货物信息</div>
            <div class="order-caro-con">
              <div class="order-cargo-title clearfix">
              <!-- <span><span class="required">*</span>货物名称</span> -->
              <!-- <span>总件数</span> -->
              <!-- <span><span class="required">*</span>预估重量</span> -->
              <!-- <span><span class="required">*</span>预估体积</span> -->
              </div>
              <ul class="order-cargo-list">
                <li>
                  <div class="input">
                    <span><span class="required">*</span>货物名称</span>
                    <input 
                      class="cargoname" 
                      maxlength="40" 
                      type="text">
                  </div>
                  <div class="input">
                    <span><span class="required">*</span>总件数</span>
                    <input 
                      maxlength="12" 
                      type="text">
                    <span class="append">件</span>
                  </div>
                  <div class="input">
                    <span><span class="required">*</span>预估重量</span>
                    <input 
                      class="caroweight" 
                      maxlength="12" 
                      type="text">
                    <span class="append">公斤</span>
                  </div>
                  <div class="input">
                    <span><span class="required">*</span>预估体积</span>
                    <input 
                      class="cargovolume" 
                      maxlength="12" 
                      type="text">
                    <span class="append">立方</span>
                  </div>
                  <span class="btn_c">重置</span>
                  <span class="btn_c">+</span>
                </li>
              </ul>
              <!-- <div class="reset-cargo-list"></div> -->
              <div class="add-cargo-list"/>
            </div>
          </div>
          <!-- 货源类型 -->
          <div class="order-input-tab order-company-info">
            <div class="order-title">货源类型</div>
            <div class="order_check order_top">
              选择类型：
              <span class="minbox checked">单次急发货源</span>
              <span class="minbox">长期稳定货源</span>
            </div>
                
          </div>
          <!-- 联系方式 -->
          <div class="order-input-tab order-contact-info">
            <div class="order-title">联系方式</div>
            <!-- 发货人 -->
            <div class="order-contact-from clearfix">
              <div class="order-form-item">
                <div class="order-form-label"><span class="required">*</span>发货人：</div>
                <div class="order-form-input">
                  <input 
                    maxlength="40" 
                    type="text" >
                </div>
              </div>
              <div class="order-form-item">
                <div class="order-form-label"><span class="required">*</span>发货人手机：</div>
                <div class="order-form-input">
                  <input 
                    maxlength="40" 
                    type="text" >
                </div>
              </div>
              <span class="order-usual-button">选择常用联系人</span>
              <div class="order-save-usual">
                <label >
                  <input 
                    id="" 
                    type="checkbox" 
                    name="">
                  保存到常用发货人
                </label>
              </div>
            </div>
            <!-- 收货人 -->
            <div class="order-contact-to clearfix">
              <div class="order-form-item">
                <div class="order-form-label">收货人：</div>
                <div class="order-form-input">
                  <input 
                    maxlength="40" 
                    type="text" >
                </div>
              </div>
              <div class="order-form-item">
                <div class="order-form-label">收货人手机：</div>
                <div class="order-form-input">
                  <input 
                    maxlength="40" 
                    type="text" >
                </div>
              </div>
              <span class="order-usual-button">选择常用联系人</span>
              <div class="order-save-usual">
                <label >
                  <input 
                    id="" 
                    type="checkbox" 
                    name="">
                  保存到常用收货人
                </label>
              </div>
            </div>
          </div>
          <!-- 提交按钮 -->
          <div class="order-agree-info">
            <label for="agree">
              <input 
                id="agree" 
                type="checkbox" 
                checked 
                name="agree">
              我已阅读并接受<a 
                href="/h5/EnterpriseAgreement.html" 
                target="_blank" 
                rel="noopener noreferrer">《中国专线物流网服务协议》</a> <a 
                  href="/h5/SecrecyAgreement.html" 
                  target="_blank" 
                  rel="noopener noreferrer">《网络用户信息保密协议》</a>
            </label>
          </div>
          <div class="order-submit-btn">立即发布</div>
        </div>
        <!-- 成功部分 -->
        <div class="order-success-main">
          <div class="order-success-txt">订单提交成功！等待物流公司承运</div>
          <!-- 温馨提示 -->
          <div class="order-success-tip">
            <span class="order-tip">温馨提示：</span><br>1、请您和吴瑞承运商签订真实有效的运单，签约前请勿支付押金、定金等一切费用；<br>2、查验物流公司和运输车辆证件，积极维护自身权益！
          </div>
          <!-- 订单信息 -->
          <div class="order-success-order order-success-tab clearfix">
            <div class="order-success-label">订单信息</div>
            <ul>
              <li class="order-num"><i>订单号</i> <span>AFZG201812240001</span></li>
              <li class="order-from"><i>发货方信息</i> <span>李宝强  15978951234</span></li>
              <li class="order-to"><i>收货方信息</i> <span>李宝强  15978951234</span></li>
            </ul>
          </div>
          <!-- 货物信息 -->
          <div class="order-success-order order-success-tab clearfix">
            <div class="order-success-label">货物信息</div>
            <ul>
              <li class="order-cargo"><i>货物名称</i> <span>AFZG201812240001</span></li>
              <li class="order-cargo-num"><i>总数量</i> <span>李宝强  15978951234</span></li>
              <li class="order-cago-class"><i>货物类型</i> <span>李宝强  15978951234</span></li>
              <li class="order-cargo-weight"><i>预估重量</i> <span>李宝强  15978951234</span></li>
              <li class="order-cargo-volume"><i>预估体积</i> <span>李宝强  15978951234</span></li>
              <li class="order-cargo-fee"><i>预估运费</i> <span>李宝强  15978951234</span></li>
            </ul>
          </div>
          <!-- 线路信息 -->
          <div class="order-success-order order-success-tab clearfix">
            <div class="order-success-label">线路信息</div>
            <ul>
              <li class="order-lineinfo-from"><i>出发地</i> <span>AFZG201812240001</span></li>
              <li class="order-lineinfo-to"><i>到达地</i> <span>李宝强  15978951234</span></li>
            </ul>
          </div>
          <!-- 操作按钮 -->
          <div class="order-success-btns">
            <span class="continue-create-order">继续下单</span>
            <a 
              href="/ydcx" 
              class="track-order">跟踪订单</a>
            <a 
              href="/" 
              class="return-to-index">返回首页</a>
          </div>
        </div>
        <!-- 弹窗部分 -->
        <!-- 货物选择列表 -->
        <div class="order-caro-pop">
          <ul>
            <li>食品</li>
          </ul>
        </div>
        
        <!-- 最佳网点 -->
        <div class="wlname-info"><div class="wlname-title">最佳网点</div> <ul><li><span class="wlnamev">出发地网点：<span/></span><span class="wlnameh">距发货地：<span>km</span></span> <p class="wladdress"/> <p>联系人：<span class="wluser"/></p> <p>联系电话：<span class="wlphone"/></p></li><li><span class="wlnamev">目的地网点：<span/></span><span class="wlnameh">距收货地：<span>km</span></span> <p/> <p>联系人：<span class="wluser"/></p> <p>联系电话：<span class="wlphone"/></p></li></ul> <div class="select-other-net">重新选择网点</div></div>
        
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HuoOrder',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/huo_order.css' },
      { rel: 'stylesheet', href: '/layer3/css/layui.css' },
      { rel: 'stylesheet', href: '/fancybox/jquery.fancybox.min.css' }
    ],
    script: [
      // { src: '/layer/layer.js' },
      // { src: '/js/gaodemap2.js' },
      // { src: '/js/huo_order.js' },
      // { src: '/js/index.js' },
      // { src: '/js/AFLC_API.js' },
      // { src: '/js/city-picker.data.js' }
      // { src: '/js/city-picker.js' },
      // { src: '/js/jquery.pagination.min.js' }
    ]
  },

  mounted() {
    seajs.use(['/layer/layer.js', 'api'], function() {
      seajs.use(['/js/gaodemap2.js'], function() {
        // seajs.use(['/js/huo_order.js'], function() {
        seajs.use(['/js/huoOrder.js'], function() {})
        // })
      })
    })
  }
}
</script>

<style  scoped>
.huo_box {
  max-width: 1400px;
  margin: 0 auto;
}
.box1_list {
  border: 1px solid #ddd;
}
.box2_list {
  border: 1px solid #ddd;
}
</style>
