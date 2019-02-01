<template>
  <div class="pay">
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
      <form class="center">
        <table>
          <tr><th>投保单号</th><th>被保险人</th><th>产品名称</th><th>投保日期</th><th>保险金额</th></tr>
          <tr><td id="insuranceNum"/><td id="theInsuredName"/><td id="insuranceName"/><td id="createTime"/><td id="insuranceFee"/></tr>
        </table>
        <ul>
          <li class="item_left">开具发票：</li><li class="item_right fapiao">
            <span class="item_fapiao fapiao_checked">不开</span>
            <span class="item_fapiao">开</span>
          </li>
          <li class="item_left pay_way_sm">支付方式：</li><li class="item_right" >
            <input 
              readonly 
              class="pay_input1 pay_checked1" 
              value="微信支付">
            <input 
              readonly 
              class="pay_input2" 
              value="支付宝支付">
          </li>
          <li class="item_left pay_money_sm">应付金额：</li><li class="item_right pay_money">
            <!--<font>100.00</font><em>元</em>-->
          </li>
          <li class="agree"><span class="agree_none"/><font>我已阅读并接受<a 
            href="#" 
            target="_blank">《平安保险投保须知》</a>和<a 
              href="#" 
              target="_blank">《保险条款》</a></font></li>
          <li><input 
            class="pay_tj" 
            readonly="" 
            onclick="pay()" 
            value="安全支付"></li>
        </ul>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Pay',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/insurancePay.css' },
      { rel: 'stylesheet', href: '/css/insuranceComon.css' }
    ]
  },
  layout: 'Sublayout',
  mounted() {
    seajs.use(['/js/insurance.js'], function() {
      $(function() {
        var theRequest = getRequest()
        var timer = null
        var url =
          '/aflc-uc/usercenter/aflcinsurancepolicy/v1/' +
          theRequest.id +
          '?access_token=' +
          $.cookie('access_token')
        api
          .getInfo(url)
          .done(function(res) {
            $('#insuranceNum').html(res.data.insuranceNum)
            $('#theInsuredName').html(res.data.theInsuredName)
            $('#createTime').html(res.data.createTime)
            $('#insuranceName').html(res.data.insuranceName)
            $('#insuranceFee').html(res.data.insuranceFee + '元')
            $('.pay_money').html(
              '<font>' + res.data.insuranceFee + '</font><em>元</em>'
            )
          })
          .fail(function(err) {})
        function pay() {
          if (!$('.agree_none').hasClass('agree_yes')) {
            layer.alert('请接受《平安保险投保须知》和《保险条款》')
            return
          }
          var payChannel, invoiceType
          switch ($('.item_right .fapiao_checked').html()) {
            case '不开':
              var invoiceType = 0
              break
            case '开':
              var invoiceType = 1
              break
          }

          if ($('.item_right .pay_checked1').val() === '微信支付') {
            payChannel = 'wx'
          }
          if ($('.item_right .pay_checked2').val() === '支付宝支付') {
            payChannel = 'ali'
          }
          var url =
            '/api/aflc-uc/usercenter/aflcinsurancepolicy/v1/scanPay/' +
            theRequest.id +
            '?access_token=' +
            $.cookie('access_token') +
            '&invoiceType=' +
            invoiceType +
            '&payChannel=' +
            payChannel
          layer.open({
            type: 1,
            offset: 'auto',
            id: 'layerDemoAuto',
            content:
              '<div style="width: 340px;height: 340px;text-align: center;line-height: 340px">二维码加载中...<img id="imgcontainer" style="padding: 20px;top: 0;left: 0; position: absolute" /></div>',
            btnAlign: 'c',
            shade: 0,
            end: function() {
              clearTimeout(timer)
            }
          })

          var xhr = new XMLHttpRequest()
          xhr.open('post', url, true)
          xhr.responseType = 'blob'
          xhr.onload = function() {
            if (this.status === 200) {
              var blob = this.response
              $('#imgcontainer').attr('src', window.URL.createObjectURL(blob))
              getPayResult(theRequest.id, payChannel)
            }
          }
          xhr.send()
        }

        function getPayResult(id, payChannel) {
          var url =
            '/aflc-uc/usercenter/aflcinsurancepolicy/v1/result/' +
            id +
            '?access_token=' +
            $.cookie('access_token') +
            '&payChannel=' +
            payChannel
          clearTimeout(timer)
          timer = setTimeout(function() {
            api
              .getInfo(url)
              .done(function(res) {
                if (res.data !== '未支付') {
                  console.log('支付成功')
                  window.location.href =
                    '/Insurance/success.htm?id=' + theRequest.id
                } else {
                  // 支付失败
                  getPayResult(id, payChannel)
                }
              })
              .fail(function(err) {
                // 支付失败
                getPayResult(id, payChannel)
              })
          }, 2000)
        }
      })
    })
  }
}
</script>
