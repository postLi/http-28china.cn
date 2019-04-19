<template>
  <div class="che_box">
    <div class="main">
      <div class="right main_nr">

        <div class="nr order-create-main">
          <div class="order-step">
            <img 
              src="../../static/images/wzlImg/dp.png" 
              class="dp">发布车源信息，享受免费线上推广，越容易被发货客户找到您</div>
          <div class="order-line-info order-input-tab">
            <div class="order-title">基本信息 <span>（提示：带*为必填）</span></div>
          
            <div class="order-line-from clearfix">
              <div class="order-form-item">
                <div class="order-form-label"><span class="required">*</span>出发地：</div>
                <div class="order-form-input">
                  <input 
                    wtmap="" 
                    maxlength="40" 
                    type="text" 
                    class="start" 
                    placeholder="请选择出发地">
                </div>
              </div>
              <div class="order-form-item">
                <div 
                  class="order-form-label" 
                  style="padding-left:13px"><span class="required">*</span>到达地：</div>
                <div class="order-form-input">
                  <input 
                    wtmap="" 
                    maxlength="40" 
                    type="text" 
                    class="end" 
                    placeholder="请选择到达地">
                </div>
              </div>
            </div>
         
            <div class="order-line-to clearfix">
              <div class="order-form-item form-detail">
                <div class="order-form-label"><span class="required">*</span>途径地：</div>
                <div class="order-form-input">
                  <input 
                    wtmapinit="" 
                    wtmap="" 
                    maxlength="40" 
                    type="text" 
                    class="midile" 
                    placeholder="请选择途径地">
                </div>
              </div>
              <div class="order-form-item form-detail">
                <div class="order-form-label"><span class="required">*</span>发车时间：</div>
                <div class="order-form-input">
                  <input 
                    id="data3" 
                    class="input02 date" 
                    placeholder="请选择日期" 
                    lay-key="1">
                </div>
              </div>
            </div>
            <div class="order-line-to clearfix">
              <div class="order-cargo-list">
                <div class="input">
                  <span>期望运价：</span>
                  <input 
                    class="cargoname" 
                    maxlength="40" 
                    type="text">
                  <span>元/车 （运价不填自动为面议）</span>
                </div>
                <p style="color:red;margin-left:70px;position: absolute;top:280px;">填写运价，车源线路将排名优先，让车源线路更有竞争力！</p>
              </div>
          
              <div class="order-cargo-list">
                <div class="order_check check1">
                  选择类型：
                  <span 
                    class="minbox checked" 
                    type="AF0560101">回程车</span>
                  <span 
                    class="minbox" 
                    type="AF0560102">本地车</span>

                </div>
              </div>
              <div 
                class="order-cargo-list"
                style="margin-top:10px">
                <div 
                  class="order_check check2" 
                  style="padding-left:0;">
                  即时/长期：
                  <span 
                    class="minbox checked" 
                    type="AF0560201">即时车源</span>
                  <span 
                    class="minbox" 
                    type="AF0560202">长期车源</span>
                </div>
              </div>
            </div>
          </div>
          <div class="order-input-tab order-cargo-info">
            <div class="order-title">备注信息</div>
            <div class="order_minlist">
              <label>备注：</label>
              <div 
                class="remark" 
                style="width: 700px;"/>
              <textarea 
                maxlength="30"
                id="textarea" 
                placeholder="请填写备注信息"/>
              <p style="margin-left: 40px;font-size: 12px">请填写备注(0-30)字</p>
            </div>
          </div>
          
          <div class="btn_bottom">
            <div 
              id="reset" 
              class="order-submit-btn">重置</div>
            <div 
              id="next" 
              class="order-submit-btn click">立即发布</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CheOrder',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/che_order.css' },
      { rel: 'stylesheet', href: '/theme/default/laydate.css' }
    ]
  },
  mounted() {
    if (this.$route.query.startProvince) {
      let strartAddress =
        this.$route.query.startProvince +
        this.$route.query.startCity +
        this.$route.query.startArea
      $('.start').val(strartAddress)
      $('.start').attr('theprovince', this.$route.query.startProvince)
      $('.start').attr('thearea', this.$route.query.startArea)
      $('.start').attr('thecity', this.$route.query.startCity)
      let endAddress =
        this.$route.query.endProvince +
        this.$route.query.endCity +
        this.$route.query.endArea
      $('.end').val(endAddress)
      $('.end').attr('theprovince', this.$route.query.endProvince)
      $('.end').attr('thearea', this.$route.query.endArea)
      $('.end').attr('thecity', this.$route.query.endCity)
    }

    seajs.use(['/js/insurance.js', '/js/LLL-AFLC_API.js'], function() {
      seajs.use(['/js/laydate.js'], function() {
        seajs.use(['/js/gaodemap2.js'], function() {
          seajs.use(['/layer/layer.js'], function() {
            $(function() {
              var theRequest = getRequest()
              var obj = {
                strartAddressCoordinate: '',
                endAddressCoordinate: '',
                viaAddressCoordinate: '',
                strartAddress: '',
                endAddress: '',
                startProvince: '',
                startCity: '',
                startArea: '',
                endProvince: '',
                endCity: '',
                endArea: '',
                viaAddress: '',
                expectPrice: '',
                carSourceType: 'AF0560102',
                isLongCar: 'AF0560201',
                remark: ''
              }
              laydate.render({ elem: '#data3', type: 'datetime' })

              function initEvent() {
                var _this = this
                $('.check1 .minbox').click(function(event) {
                  event.stopPropagation()
                  $('.check1 .minbox').removeClass('checked')
                  $(this).addClass('checked')
                  var type = $(this).attr('type')
                  obj.carSourceType = type
                })
                $('.check2 .minbox').click(function(event) {
                  event.stopPropagation()
                  $('.check2 .minbox').removeClass('checked')
                  $(this).addClass('checked')
                  var type = $(this).attr('type')
                  obj.isLongCar = type
                })
                $('.order-submit-btn').click(function(event) {
                  event.stopPropagation()
                  $('.order-submit-btn').removeClass('click')
                  $(this).addClass('click')
                })
                $('#reset').click(function() {
                  resetForm()
                })
                $('#next').click(function() {
                  next()
                })
                $(document).on('click', '.remark span', function(event) {
                  event.stopPropagation()
                  var cls = $(this).attr('class')
                  if (cls) {
                    $(this).removeClass('check')
                  } else {
                    $(this).addClass('check')
                  }
                  return false
                })
              }
              function validate() {
                var checkinfo = {
                  done: true,
                  err: ''
                }

                if ($('.start').val()) {
                  obj.strartAddress = $('.start').val()
                  obj.strartAddressCoordinate = $('.start').attr('thepos')
                  obj.startProvince = $('.start').attr('theprovince')

                  obj.strartAddressName = $('.start').val()

                  obj.startArea = $('.start').attr('thearea')
                  if (obj.startProvince == '北京市') {
                    obj.startCity = '北京市'
                  } else if (obj.startProvince == '上海市') {
                    obj.startCity = '上海市'
                  } else if (obj.startProvince == '重庆市') {
                    obj.startCity = '重庆市'
                  } else if (obj.startProvince === '天津市') {
                    obj.startCity = '天津市'
                  } else {
                    obj.startCity = $('.start').attr('thecity')
                  }
                } else {
                  checkinfo.done = false
                  layer.msg('出发地不能为空')
                  return
                }
                if ($('.end').val()) {
                  obj.endAddress = $('.end').val()
                  obj.endAddressCoordinate = $('.end').attr('thepos')
                  obj.endProvince = $('.end').attr('theprovince')
                  obj.endAddressName = $('.end').val()
                  obj.endArea = $('.end').attr('thearea')
                  if (obj.endProvince == '北京市') {
                    obj.endCity = '北京市'
                  } else if (obj.endProvince == '上海市') {
                    obj.endCity = '上海市'
                  } else if (obj.endProvince == '重庆市') {
                    obj.endCity = '重庆市'
                  } else if (obj.endProvince === '天津市') {
                    obj.endCity = '天津市'
                  } else {
                    obj.endCity = $('.end').attr('thecity')
                  }
                } else {
                  checkinfo.done = false
                  layer.msg('到达地不能为空')
                  return
                }
                if ($('.midile').val()) {
                  obj.viaAddress = $('.midile').val()
                  obj.viaAddressName = $('.midile').val()
                  obj.viaAddressCoordinate = $('.midile').attr('thepos')
                } else {
                  checkinfo.done = false
                  layer.msg('途径地不能为空')
                  return
                }
                if ($('#data3').val()) {
                  var time = $('#data3').val()
                  obj.startTime = Date.parse(time)
                } else {
                  checkinfo.done = false
                  layer.msg('发车时间不能为空')
                  return
                }
                if ($('.cargoname').val()) {
                  let reg = window.Lll_AFLC_VALID
                  let expectPrice = $('.cargoname').val()
                  if (reg.ONLY_NUMBER.test(expectPrice)) {
                    obj.expectPrice = expectPrice
                  } else {
                    $('.cargoname').val('')
                    layer.msg('期望运价请输入数字')
                    checkinfo.done = false
                    return
                  }
                }
                obj.remark = $('#textarea').val() ? $('#textarea').val() : ''

                if ($('.start').val() && $('.end').val()) {
                  obj.title = $('.start').val() + '->' + $('.end').val()
                }
                return checkinfo
              }

              function resetForm() {
                $('.start').val('')
                $('.end').val('')
                $('.midile').val('')
                $('.cargoname').val('')
                $('#data3').val('')
                $('#textarea').val('')
                if (
                  $('.check1 .minbox')
                    .eq(1)
                    .hasClass('checked')
                ) {
                  $('.check1 .minbox')
                    .eq(1)
                    .removeClass('checked')
                  $('.check1 .minbox')
                    .eq(0)
                    .addClass('checked')
                }
                if (
                  $('.check2 .minbox')
                    .eq(1)
                    .hasClass('checked')
                ) {
                  $('.check2 .minbox')
                    .eq(1)
                    .removeClass('checked')
                  $('.check2 .minbox')
                    .eq(0)
                    .addClass('checked')
                }
              }
              function next() {
                var check = validate()
                let userToken =
                  $.cookie('login_userToken') || $.cookie('user_token')
                var url =
                  '/28-web/carInfo/home/createCar?access_token=' +
                  $.cookie('access_token') +
                  '&user_token=' +
                  userToken
                if (check) {
                  var options = $.extend(obj, theRequest)
                  if ($.cookie('access_token') && userToken) {
                    var options = $.extend(obj, theRequest)
                    api
                      .postAdd(url, options)
                      .done(function(res) {
                        if (res.status === 200) {
                          layer.msg('发布成功', { time: 3000 }, function(
                            params
                          ) {
                            debugger
                            window.location.href =
                              '/create/cySuccess?driverId=' +
                              res.data +
                              '&text=车源'
                          })
                        } else {
                          layer.msg(
                            '发布失败：' + (err.text || err.error || '未知错误')
                          )
                        }
                      })
                      .fail(function(err) {
                        layer.msg(
                          '发布失败：' + (err.text || err.error || '未知错误')
                        )
                      })
                  } else {
                    $('.login_box').show()
                  }
                } else {
                  return false
                }
              }

              initEvent()
            })
          })
        })
      })
    })
  }
}
</script>
<style scoped>
.che_box {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
