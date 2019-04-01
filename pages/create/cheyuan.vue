<template>
  <div class="che_box">
    <div class="main">
      <div class="right main_nr">
        <!-- <div class="nr_bt">
          <div class="nr_bt1"><span>在线下单</span></div>
        </div>	 -->
        <!-- 下单部分 -->
        <div class="nr order-create-main">
          <div class="order-step"><img 
            src="/templets/default/images/wzlImg/dp.png" 
            class="dp">发布车源信息，享受免费线上推广，越容易被发货客户找到您</div>
          <div class="order-line-info order-input-tab">
            <div class="order-title">基本信息 <span>（提示：带*为必填）</span></div>
            <!-- 出发地 -->
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
            <!-- 目的地 -->
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
            <!-- 期望运价 -->
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
              <!-- 选择类型 -->
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
              <!-- 选择类型 -->
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
          <!--备注信息 -->
          <div class="order-input-tab order-cargo-info">
            <div class="order-title">备注信息</div>
            <!-- <div class="title">备注：</div> -->
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
          
          <!-- 提交按钮 -->
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
async function sendAdd($axios, vo = {}, access_token, user_token) {
  let parm = vo
  let res = $axios.post(
    '/28-web/carInfo/home/createCar?access_token=' +
      access_token +
      '&user_token=' +
      user_token
  )
  console.log(res, 'resresres1')
}
export default {
  name: 'CheOrder',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/che_order.css' },
      { rel: 'stylesheet', href: '/theme/default/laydate.css' }
    ]
  },
  mounted() {
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
                expectPrice: '', //期望运价
                carSourceType: 'AF0560102', //车源类型
                isLongCar: 'AF0560201', //即时/长期车源(0:长期车源，1：短期车源)
                remark: ''
                // carTag: '',
                // carTagName: '',
                // title: ''
              }
              //调用layer
              laydate.render({ elem: '#data3', type: 'datetime' })
              //初始化页面，一进来就执行
              function initEvent() {
                var _this = this
                // remark()
                //选择类型
                $('.check1 .minbox').click(function(event) {
                  event.stopPropagation()
                  $('.check1 .minbox').removeClass('checked')
                  $(this).addClass('checked')
                  var type = $(this).attr('type')
                  obj.carSourceType = type
                  // console.log(obj.carSourceType, 'obj.carSourceType')
                })
                //即时/长期
                $('.check2 .minbox').click(function(event) {
                  event.stopPropagation()
                  $('.check2 .minbox').removeClass('checked')
                  $(this).addClass('checked')
                  var type = $(this).attr('type')
                  obj.isLongCar = type
                  // console.log(obj.isLongCar, 'obj.isLongCar')
                })
                //切换
                $('.order-submit-btn').click(function(event) {
                  event.stopPropagation()
                  $('.order-submit-btn').removeClass('click')
                  $(this).addClass('click')
                })
                //重置
                $('#reset').click(function() {
                  resetForm()
                })
                //发布
                $('#next').click(function() {
                  next()
                })
                //点击选择remark
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
              //验证必填信息
              function validate() {
                var checkinfo = {
                  done: true,
                  err: ''
                  // atransferAddressList:[]
                }

                if ($('.start').val()) {
                  obj.strartAddress = $('.start').val()
                  obj.strartAddressCoordinate = $('.start').attr('thepos')
                  obj.startProvince = $('.start').attr('theprovince')

                  obj.strartAddressName = $('.start').attr('thecity')

                  obj.startArea = $('.start').attr('thearea')
                  // comCity(obj.startProvince, obj.startCity)
                  // console.log(obj.startCity, ' obj.startCity')
                  if (obj.startProvince == '北京市') {
                    obj.startCity = '北京市'
                  } else if (obj.startProvince == '上海市') {
                    obj.startCity = '上海市'
                  } else if (obj.startProvince == '重庆市') {
                    obj.startCity = '重庆市'
                  } else {
                    obj.startCity = $('.start').attr('thecity')
                  }
                } else {
                  checkinfo.done = false
                  layer.msg('出发地不能为空')
                  return
                  // checkinfo.err += '<br>出发地不能为空';
                }
                if ($('.end').val()) {
                  obj.endAddress = $('.end').val()
                  obj.endAddressCoordinate = $('.end').attr('thepos')
                  obj.endProvince = $('.end').attr('theprovince')
                  // obj.endCity = $('.end').attr('thecity')
                  obj.endAddressName = $('.end').attr('thecity')
                  obj.endArea = $('.end').attr('thearea')
                  if (obj.endProvince == '北京市') {
                    obj.endCity = '北京市'
                  } else if (obj.endProvince == '上海市') {
                    obj.endCity = '上海市'
                  } else if (obj.endProvince == '重庆市') {
                    obj.endCity = '重庆市'
                  } else {
                    obj.endCity = $('.thecity').attr('thecity')
                  }
                } else {
                  checkinfo.done = false
                  layer.msg('到达地不能为空')
                  return
                }
                if ($('.midile').val()) {
                  obj.viaAddress = $('.midile').val()
                  obj.viaAddressName = $('.midile').attr('thecity')
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
                    // console.log(expectPrice, 'expectPrice')
                  } else {
                    $('.cargoname').val('')
                    layer.msg('期望运价请输入数字')
                    checkinfo.done = false
                    return
                    // console.log(expectPrice, 'expectPrice2')
                  }
                }
                // if ($('#textarea').val()) {
                //   obj.remark = $('#textarea').val()
                // } else {
                //   checkinfo.done = false
                //   layer.msg('请填写备注信息')
                //   return
                // }

                // if ($('.remark span[class="check"]').length > 0) {
                //   $('.remark span[class="check"]').each(function(index, ele) {
                //     obj.carTag = obj.carTag + $(ele).attr('code') + '|'
                //     obj.carTagName = obj.carTagName + $(ele).text() + '|'
                //   })
                //   obj.carTag = obj.carTag.substring(0, obj.carTag.length - 1)
                //   obj.carTagName = obj.carTagName.substring(
                //     0,
                //     obj.carTagName.length - 1
                //   )
                // }
                if ($('.start').val() && $('.end').val()) {
                  obj.title = $('.start').val() + '->' + $('.end').val()
                }
                return checkinfo
              }
              function comCity(obj, startCity) {
                if (obj === '北京市') {
                  // startCity = '北京市'
                  startCity = Object.assign({}, obj.startCity, '北京市')
                  // this.$set(obj, 'startCity', '北京市')
                  console.log(startCity, obj, 'obj')
                } else if (obj === '上海市') {
                  startCity = '上海市'
                } else if (obj === '重庆市') {
                  startCity = '重庆市'
                } else {
                  startCity = $('.start').attr('thecity')
                }
              }
              //重置清空输入框
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
              //发布车源请求接口
              function next() {
                var check = validate()
                var url =
                  '/28-web/carInfo/home/createCar?access_token=' +
                  $.cookie('access_token') +
                  '&user_token=' +
                  $.cookie('user_token')
                if (check) {
                  var options = $.extend(obj, theRequest)
                  // console.log(options, options)

                  if ($.cookie('access_token') && $.cookie('user_token')) {
                    var options = $.extend(obj, theRequest)
                    api
                      .postInfo(url, options)
                      .done(function(res) {
                        // console.log(res, '发布成功，请完善司机车辆信息！')
                        // window.location.href='/Insurance/pay.htm?id=' + res.data
                        if (res.status === 200) {
                          layer.msg('发布成功', { time: 3000 }, function(
                            params
                          ) {
                            window.location.href = '/cheyuan'
                          })
                        } else {
                          layer.msg(
                            '发布失败：' + (err.text || err.error || '未知错误')
                          )
                          // window.location.href = '/cheyuan'
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
                  // layer.alert(check.err)
                  return false
                }
              }

              //获取备注信息
              // function remark() {
              //   var url =
              //     '/aflccommonservice/sysDict/getSysDictByCodeGet/AF042?access_token=' +
              //     $.cookie('access_token') +
              //     '&user_token=' +
              //     $.cookie('user_token')
              //   if ($.cookie('access_token') && $.cookie('user_token')) {
              //     var options = $.extend(theRequest)
              //     api
              //       .getInfo(url, options)
              //       .done(function(res) {
              //         console.log(res.data)
              //         $.each(res.data, function(index, item) {
              //           // console.log(this.name,this.code)
              //           $('.remark').append(
              //             '<span code="' +
              //               item.code +
              //               '">' +
              //               item.name +
              //               '</span>'
              //           )
              //         })
              //       })
              //       .fail(function(err) {
              //         layer.msg(err.errorInfo || err.text || '未知错误')
              //       })
              //   } else {
              //     $('.login_box').show()
              //   }
              // }

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
