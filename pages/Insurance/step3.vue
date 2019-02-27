<template>
  <div class="step3">
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
      <div class="m_border center">
        <form class="center validateForm">
          <table>
            <tr><div class="main_bt"><span>运输信息</span><i/></div></tr>

            <tr class="start3"><td><i>*</i>起运地：</td><td>
              <input 
                id="data1" 
                data-toggle="city-picker" 
                data-level="district"
                wtmap="provinceCity" 
                class="input02 startp" 
                validate="{&quot;msg&quot;:&quot;请选择货物起运地&quot;}" 
                placeholder="请选择货物起运地" >
            </td></tr>
            <tr class="end3"><td><i>*</i>目的地：</td><td>
              <input 
                id="data2" 
                data-toggle="city-picker" 
                data-level="district"
                wtmap="provinceCity" 
                class="input02 endp" 
                validate="{&quot;msg&quot;:&quot;请选择货物目的地&quot;}" 
                placeholder="请选择货物目的地" >
            </td></tr>
            <tr class="center3"><td><i/>中转地：</td><td>
              <input 
                wtmap="provinceCity" 
                class="input02 centerp" 
                placeholder="请输入货物中转地" >
              <img 
                id="add1"
                src="images/add.png"></td></tr>
            <tr><td><i/></td><td>
              <span>若前往目的地途中需要绕路进行中转，请务必填写中转地，否则绕路途中导致的事故损失将不予赔付</span>
            </td></tr>
            <tr class="start3"><td><i>*</i>起运日期：</td><td>
              <input 
                id="data3" 
                class="input02" 
                validate="{&quot;msg&quot;:&quot;请选择日期&quot;}" 
                placeholder="请选择日期" >
            </td></tr>

            <tr><td><i/></td><td>
              <div>起运时间不得早于投保时间</div>
            </td></tr>

            <tr class="car_num"><td><i>*</i>车牌号：</td><td>
              <input 
                id="data4" 
                maxlength="15" 
                class="input02" 
                validate="{&quot;msg&quot;:&quot;请输入车牌号&quot;}" 
                placeholder="请输入车牌号" >
            </td></tr>
            <tr class="start3"><td><i>*</i>运单号：</td><td>
              <input 
                id="data5" 
                maxlength="30" 
                class="input02" 
                validate="{&quot;msg&quot;:&quot;请输入运单号&quot;}" 
                placeholder="请输入运单号" >
            </td></tr>

            <tr><td><i/></td><td>
              <div>若无运单号，可填写合同编号、发货单号或提货单号</div>
            </td></tr>

            <tr class="deductible"><td><i>*</i>免赔额：</td><td id="insuranceDeductibles">
            <!--<span>每次事故绝对免赔为人民币1000元或损失金额的5%，两者以高者为准‘针对盗抢事故，每次事故绝对免赔为损失金额的20%</span>-->
            </td></tr>
            <tr class="fee_total"><td><i>*</i>保费合计：</td><td id="insuranceFee">
            <!--<font>10.00</font><em>元</em>-->
            </td></tr>
            <tr class="fee_total"><td><i>*</i>费率：</td><td id="insuranceRate">
            <!--<font>10.00</font><em>元</em>-->
            </td></tr>
            <tr class="next_step3"><td><a 
              target="_self" 
              class="pointer" 
              onclick="window.history.go(-1)">上一步</a></td><td>
                <input 
                  class="next_button" 
                  readonly="" 
                  value="下一步">
            </td></tr>
          </table>
		
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Step3',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/insuranceStep3.css' },
      { rel: 'stylesheet', href: '/css/insuranceComon.css' },
      { rel: 'stylesheet', href: '/theme/default/laydate.css' }
    ]
  },
  layout: 'subLayout',
  mounted() {
    seajs.use(['/js/insurance.js'], function() {
      seajs.use(['/js/laydate.js'], function() {
        seajs.use(['/js/dedeajax2.js'], function() {
          seajs.use(['/js/gaodemap2.js'], function() {
            seajs.use(['/js/jquery.pagination.min.js'], function() {
              $(function() {
                var step1 = JSON.parse(window.sessionStorage.getItem('step1'))
                var step2 = JSON.parse(window.sessionStorage.getItem('step2'))
                var obj = {
                  insuranceCompany: '平安保险',
                  insuranceName: '平安保险国内' + step1.insuranceType,
                  startProvince: '', //起运地省
                  startCity: '', //起运地市
                  endProvince: '', //目的地省
                  endCity: '', //目的地市
                  atransferAddressList: [], //中转地
                  startTime: '', //起运日期
                  carNum: '', //车牌号
                  orderNum: '', //运单号
                  // invoiceType: 0,//是否开发票（0-不开  1-开）
                  paymentState: 0, //支付状态（0-未支付  1-已支付）
                  insuranceProductsId: '1' //保险产品id
                }
                var t = new Date()
                var now =
                  t.getFullYear() +
                  '-' +
                  (t.getMonth() + 1) +
                  '-' +
                  t.getDate() +
                  ' ' +
                  t.getHours() +
                  ':' +
                  t.getMinutes() +
                  ':' +
                  t.getSeconds()
                laydate.render({
                  elem: '#data3',
                  type: 'datetime',
                  min: now,
                  done: function(value, date, endDate) {
                    if (value) {
                      $('#data3').removeClass('error')
                      $('#data3')
                        .next()
                        .remove()
                      $('#data3').after(
                        "<img style='margin-left: 10px' src='/img/u198861.png' alt=''>"
                      )
                    } else {
                      $('#data3')
                        .next()
                        .remove()
                      $('#data3').after(
                        "<span style='margin-left: 10px'><img src='/img/u198863.png' alt=''><span style='position: relative;top: -3px;left: 5px;'>请选择日期</span></span>"
                      )
                      $('#data3').addClass('error')
                    }
                  }
                })

                function showTotal() {
                  if ($('#data1').val() && $('#data2').val()) {
                    var url =
                      '/aflc-portal/portalt/aflcinsurancepolicy/v1/computationalfee'
                    var parm = {
                      startProvince: $('#data1')
                        .val()
                        .split(',')[0],
                      endProvince: $('#data2')
                        .val()
                        .split(',')[0],
                      goodsValue: step2.goodsValue,
                      insuranceProductsId: obj.insuranceProductsId
                    }
                    api.postInfo(url, parm).done(function(res) {
                      $('#insuranceFee').html(
                        '<font>' + res.data.insuranceFee + '</font><em>元</em>'
                      )
                      $('#insuranceDeductibles').html(
                        '<span>' + res.data.insuranceDeductibles + '</span>'
                      )
                      $('#insuranceRate').html(
                        '<font>' + res.data.insuranceRate + '</font>'
                      )
                    })
                  }
                }
                showTotal()
                $('#afwl-map-button-confirm').on('click', function() {
                  showTotal()

                  if ($('#data1').val()) {
                    $('#data1').removeClass('error')
                    $('#data1')
                      .next()
                      .remove()
                    $('#data1').after(
                      "<img style='margin-left: 10px' src='/img/u198861.png' alt=''>"
                    )
                  } else {
                    $('#data1')
                      .next()
                      .remove()
                    $('#data1').after(
                      "<span style='margin-left: 10px'><img src='/img/u198863.png' alt=''><span style='position: relative;top: -3px;left: 5px;'>请选择日期</span></span>"
                    )
                    $('#data1').addClass('error')
                  }

                  if ($('#data2').val()) {
                    $('#data2').removeClass('error')
                    $('#data2')
                      .next()
                      .remove()
                    $('#data2').after(
                      "<img style='margin-left: 10px' src='/img/u198861.png' alt=''>"
                    )
                  } else {
                    $('#data2')
                      .next()
                      .remove()
                    $('#data2').after(
                      "<span style='margin-left: 10px'><img src='/img/u198863.png' alt=''><span style='position: relative;top: -3px;left: 5px;'>请选择日期</span></span>"
                    )
                    $('#data2').addClass('error')
                  }
                })
                $('.next_button').click(function() {
                  next()
                })
                function next() {
                  var url =
                    '/aflc-uc/usercenter/aflcinsurancepolicy/v1/?access_token=' +
                    $.cookie('access_token')
                  console.log(insuranceValidate.check())
                  if (insuranceValidate.check()) {
                    console.log(123213)
                    obj.startProvince = $('#data1')
                      .val()
                      .split(',')[0]
                    obj.startCity = $('#data1')
                      .val()
                      .split(',')[1]
                    obj.endProvince = $('#data2')
                      .val()
                      .split(',')[0]
                    obj.endCity = $('#data2')
                      .val()
                      .split(',')[1]
                    var list = [],
                      i = 1
                    $('.center3 input').each(function() {
                      if ($(this).val()) {
                        list.push({
                          transferCity: $(this)
                            .val()
                            .split(',')[1],
                          transferOrder: i++,
                          transferProvince: $(this)
                            .val()
                            .split(',')[0]
                        })
                      }
                    })
                    obj.atransferAddressList = list
                    obj.startTime = $('#data3').val()
                    obj.carNum = $('#data4').val()
                    obj.orderNum = $('#data5').val()

                    if ($.cookie('access_token')) {
                      var options = $.extend(obj, step1, step2)
                      api
                        .postInfo(url, options)
                        .done(function(res) {
                          window.location.href = '/Insurance/pay?id=' + res.data
                        })
                        .fail(function(err) {})
                    } else {
                      $('.login_box').show()
                      $('.login_box_mask').show()
                    }
                  }
                }
                $('#add1').click(function() {
                  add1()
                })
                function add1() {
                  $('.center3')
                    .eq(0)
                    .after(
                      '<tr class="center3"><td><i></i>中转地：</td><td><input wtmap="provinceCity" class="input02 centerp" placeholder="请输入货物中转地" /><img src="images/sub.png" onclick="sub1(this)"  /></td></tr>'
                    )
                  $().reLoadWtmap() //调用 gaodemap2,js 刷新DOM
                }

                function sub1(that) {
                  var index = $('.center3')
                    .find('img')
                    .index(that)
                  $('.center3')
                    .eq(index)
                    .remove()
                }
                var _this = this
                var timer
                $('.login-btn, .login-yzm').on('click', function() {
                  clearInterval(timer)
                  timer = setInterval(() => {
                    if ($.cookie('access_token')) {
                      clearInterval(timer)
                      _this.next()
                    }
                  }, 300)
                })
                $('.login_close img').on('click', function() {
                  clearInterval(timer)
                })
              })
            })
          })
        })
      })
    })
  }
}
</script>
