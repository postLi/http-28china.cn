<template>
  <div class="success">
    <div class="top_bg">
      <div class="top center">
        <ul>
          <li class="top_1"><a 
            href="/" 
            target="_blank"><img src="/images/index_files/logor.png"></a></li>
          <li class="top_2"><span>保险商城</span></li>
          <li class="top_3">
            <img src="/images/insurance/phone-bx.png">
          <span>免费热线</span><font>400-999-2828</font></li>
        </ul>
      </div>
    </div>
    <div class="main center">	
      <div class="success_main">
        <div class="success_top">
          <font>恭喜您，支付成功啦</font>
          <span>国内货运险已出单，该笔交易投保成功。</span>
        </div>
	
        <div class="success_detail">
          <table>
            <tr><th><span/><font>保单详情</font></th></tr>
            <tr class="success_detail01"><td>订单编号：</td><td id="insuranceNum"/></tr>
            <tr class="success_detail02"><td>支付保费：</td><td><i id="insuranceFee"/>元</td></tr>
            <tr class="success_detail03"><td>保障期限：</td><td>保险责任自签发保险凭证和保险货物运离起运地发货人的最后一个仓库或储运处所时起，至该保险凭证上注
            明的目的地的收货人在当地的第一个仓库或储存处所时终止。但保险货物运抵目的地后，如收货人未及时提
            货，则保险责任的终止期限最多延长至以收货人接到《到货通知单》后的十五天为限（以邮戳日期为准）。</td></tr>
          </table>
        </div>
      </div>
      <div class="success_go"><a 
        href="/insurance/manage" 
        target="_blank">进入投保管理</a></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Success',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/insuranceSuccess.css' },
      { rel: 'stylesheet', href: '/css/insuranceComon.css' }
    ]
  },
  layout: 'Sublayout',
  mounted() {
    seajs.use(['/js/insurance.js'], function() {
      $(function() {
        var theRequest = getRequest()
        var url =
          '/aflc-uc/usercenter/aflcinsurancepolicy/v1/' +
          theRequest.id +
          '?access_token=' +
          $.cookie('access_token')
        api
          .getInfo(url)
          .done(function(res) {
            if (res.status === 200 && res.data.paymentState === 1) {
              $('#insuranceNum').html(res.data.insuranceNum)
              $('#insuranceFee').html(res.data.insuranceFee)
            }
          })
          .fail(function(err) {})
      })
    })
  }
}
</script>
