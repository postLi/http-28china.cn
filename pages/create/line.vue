<template>
  <div class="line_box">
    <div class="main">
      <div class="right main_nr">
        <!-- <div class="nr_bt">
          <div class="nr_bt1"><span>在线下单</span></div>
        </div>	 -->
        <!-- 下单部分 -->
        <div 
          class="nr order-create-main layui-form" 
          action="">
          <!-- <div class="order-step"></div> -->
          <div class="order-line-info order-input-tab">
            <div class="order-title">基本信心 <span>（提示：待*为必填）</span></div>
            <!-- 出发地 -->
            <div class="order-line-from clearfix">
              <div class="order-form-item">
                <div class="order-form-label"><span class="required">*</span>出发地：</div>
                <div class="order-form-input">
                  <input 
                    wtmap="" 
                    maxlength="40" 
                    type="text" 
                    placeholder="请选择出发地 省-市-县" 
                    class="start">
                </div>
              </div>
              <!-- 联系人： -->
              <div class="order-contact-from clearfix">
                <div class="order-form-item">
                  <div class="order-form-label"><span class="required">*</span>联系人：</div>
                  <div class="order-form-input">
                    <input 
                      maxlength="40" 
                      type="text" 
                      class="startName" 
                      placeholder="请输入出发地联系人">
                  </div>
                </div>
                <div class="order-form-item">
                  <div class="order-form-label"><span class="required">*</span>联系人电话：</div>
                  <div class="order-form-input">
                    <input 
                      maxlength="11" 
                      type="text" 
                      class="startPhone" 
                      placeholder="请输入出发地联系人电话" 
                      onkeyup="value=value.replace(/[^\d]/g,'')">
                  </div>
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
                    type="text" 
                    placeholder="请选择到达地 省-市-县" 
                    class="end">
                </div>
              </div>
              <!-- 联系人： -->
              <div class="order-contact-from1 clearfix">
                <div class="order-form-item">
                  <div class="order-form-label"><span class="required">*</span>联系人：</div>
                  <div class="order-form-input">
                    <input 
                      maxlength="40" 
                      type="text" 
                      class="endName" 
                      placeholder="请输入到达地联系人">
                  </div>
                </div>
                <div class="order-form-item">
                  <div class="order-form-label"><span class="required">*</span>联系人电话：</div>
                  <div class="order-form-input">
                    <input 
                      maxlength="11" 
                      type="text" 
                      class="endPhone" 
                      placeholder="请输入到达地联系人电话">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 价格时效 -->
          <div class="order-input-tab order-company-info">
            <div class="order-title">价格时效</div>
            <div class="order1">
              <div class="order-line-from clearfix">
                <div 
                  class="order-form-item" 
                  style="width:225px"> 
                  <div class="order-form-label">运输时效：</div>
                  <div 
                    class="order-form-input" 
                    style="margin-right: 20px">
                    <input 
                      id="transportAging" 
                      maxlength="40" 
                      type="text" 
                      style="width:100px;padding-left:20px"
                      name="time" >
                  </div>
                </div>
                <div 
                  id="order_top" 
                  class="order_check order_top">
                  <span 
                    class="minbox checked" 
                    type="天">天</span>
                  <span 
                    class="minbox" 
                    type="小时">小时</span>
                  <span 
                    class="minbox" 
                    type="多天">多天</span>
                  <span> (多天填写如：2-5，其它只能填写阿拉伯数字)</span>
                </div>
              </div>
            </div>
            <ul class="order-line-from clearfix order-cargo-list">
              <li>
                <div class="input">
                  <span style="padding-left:7px">发车频率：</span>
                  <input 
                    id="days" 
                    maxlength="12" 
                    type="text" 
                    name="day">
                  <span class="append" >天</span>
                </div>
                <div 
                  class="input" 
                  style="position: absolute;left: 233px">
                  <input 
                    id="once" 
                    maxlength="12" 
                    type="text" 
                    name="times">
                  <span class="append" >次</span>
                </div>
              </li>
            </ul>
            <div class="order3"/>
            <div class="order-company-list">
              <div class="order-form-label">重货价格：<span class="required">(阶梯价格最大值不填，代表无穷大，例如：500-，代表500公斤以上)</span></div>
              <div class="todoTable">
                <table class="table1">
                  <thead>
                    <tr>
                      <th 
                        colspan="2" 
                        width="200">运量</th>
                      <th 
                        colspan="2" 
                        width="150">原报价（必填）</th>
                      <th 
                        colspan="2" 
                        width="150">折后价</th>
                    </tr>
                  </thead>
                  <tbody class="nocompany box1">
                    <tr class="box1_list">
                      <td colspan="2">
                        <div class="inputbox">
                          <input 
                            maxlength="40" 
                            type="number" 
                            class="volume"><label>------</label>
                          <input 
                            maxlength="40" 
                            type="number" 
                            class="volumeEnd" 
                            value=""><label>元/公斤</label>
                        </div>
                      </td>
                      <td colspan="2">
                        <div class="inputbox">
                          <input 
                            maxlength="40" 
                            type="number" 
                            class="origina"><label>元/公斤</label>
                        </div>
                      </td>
                      <td colspan="2">
                        <div class="inputbox">
                          <input 
                            maxlength="40" 
                            type="number" 
                            class="discount"><label>元/公斤</label>
                        </div>
                      </td>
                    </tr>
                    <span class="addbox add1">+</span>
                    <span class="delete">-</span>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="order-company-list">
              <div class="order-form-label">轻货价格：<span class="required">(阶梯价格最大值不填，代表无穷大，例如：10-，代表10立方以上)</span></div>
              <div class="todoTable">
                  
                <table class="table2">
                  <thead>
                    <tr>
                      <th 
                        colspan="2" 
                        width="200">运量</th>
                      <th 
                        colspan="2" 
                        width="150">原报价（必填）</th>
                      <th 
                        colspan="2" 
                        width="150">折后价</th>
                    </tr>
                  </thead>
                      
                  <tbody class="nocompany box2">
                    <tr class="box2_list">
                      <td colspan="2">
                        <div class="inputbox">
                          <input 
                            maxlength="40" 
                            type="number" 
                            class="volume"><label>------</label>
                          <input 
                            maxlength="40" 
                            class="volumeEnd" 
                            type="number"><label>元/公斤</label>
                        </div>
                      </td>
                      <td colspan="2">
                        <div class="inputbox">
                          <input 
                            maxlength="40" 
                            type="number" 
                            class="origina"><label>元/公斤</label>
                        </div>
                      </td>
                      <td colspan="2">
                        <div class="inputbox">
                          <input 
                            maxlength="40" 
                            type="number" 
                            class="discount"><label>元/公斤</label>
                              
                        </div>
                      </td>
                    </tr>
                    <span class="addbox add1">+</span>
                    <span class="delete">-</span>
                  </tbody>
                      
                </table>
              </div>
            </div>
            <div class="inputbox">
              <div class="order-form-label">最低一票价格：</div>
              <input 
                id="lowerPrice" 
                maxlength="10" 
                type="text"><label>元</label>
            </div>
          </div>
          <!-- 线路说明 -->
          <div class="order-input-tab order-company-info">
            <div class="order-title">线路说明</div>
            <!-- 发车时间 -->
            <div class="order-line-from clearfix">
              <div class="order-form-label">发车时间：</div>
              <div 
                id="order_buttom" 
                class="order_check order_buttom">
                <span 
                  class="minbox checked" 
                  type="AF02601">上午</span>
                <span 
                  class="minbox" 
                  type="AF02602">中午</span>
                <span 
                  class="minbox" 
                  type="AF02603">下午</span>
                <span 
                  class="minbox" 
                  type="AF02604">晚上</span>
              </div>
            </div>
            <!-- 线路说明 -->
            <div class="order-line-from clearfix">
              <div class="order-form-label">线路说明：</div>
              <textarea 
                id="textarea" 
                maxlength="200" 
                minlength="3" 
                style="width:600px;height: 160px;padding: 10px" 
                placeholder="请填写备注3-200字，提供原创说明有助于提升线路效果"/>
              <p style="margin-left: 70px">对您的线路进行补充说明，尽量使用市场上或物流行业内的常用词。</p>
            </div>
            <!-- 专线照片 -->
            <div class="order-line-from clearfix">
              <div class="order-form-label">专线照片：</div>
              <p style="padding-top: 10px">建议传</p>
                
              <ul class="img_box">
                <div class="button_img">
                  <button 
                    id="test1" 
                    type="button" 
                    class="layui-btn layui-btn-normal layui-btn-data">
                    <i class="layui-icon layui-icon-upload-drag"/>上传图片
                  </button>
                  <div 
                    data-v-5d7a9fe6="" 
                    class="upload__tip">（必须为jpg/png并且小于5M）</div>
                </div>
              </ul>
            </div>
          </div>
        
          <!-- 提交按钮 -->
          <div class="btn_bottom">
            <div 
              id="reset" 
              class="order-submit-btn click">重置</div>
            <div 
              id="next" 
              class="order-submit-btn">发布</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Linerder',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/line_order.css' },
      { rel: 'stylesheet', href: '/layer3/css/layui.css' },
      { rel: 'stylesheet', href: '/fancybox/jquery.fancybox.min.css' }
    ]
  },
  mounted() {
    seajs.use(['/js/insurance.js'], function() {
      seajs.use(['/js/laydate.js'], function() {
        seajs.use(['/js/gaodemap2.js'], function() {
          seajs.use(['/fancybox/jquery.fancybox.min.js'], function() {
            seajs.use(['/layer3/lay/modules/layer.js'], function() {
              seajs.use(['/layer/layer.js'], function() {
                $(function() {
                  // var theRequest = getRequest()
                  var obj = {
                    startLocationCoordinate: '',
                    endLocationCoordinate: '',
                    startLocation: '',
                    endLocation: '',
                    startProvince: '',
                    startCity: '',
                    startArea: '',
                    endProvince: '',
                    endCity: '',
                    endArea: '',
                    startLocationContacts: '',
                    startLocationContactsMobile: '',
                    endLocationContacts: '',
                    endLocationContactsMobile: '',
                    transportAging: '',
                    transportAgingUnit: '', //运输时效单位
                    departureHzData: '', //天
                    departureHzTime: '', //次
                    lowerPrice: '', //最低一票价格
                    departureTime: '', //发车时间
                    transportRemark: '', //发车备注
                    rangeLogo: '', //专线照片
                    publishId: '', //公司id
                    publishName: '', //物流公司名称
                    rangePrices: []
                  }
                  var tpl = {
                    cargo: `<tr class="box1_list">
                          <td colspan="2">
                            <div class="inputbox">
                              <input maxlength="40" type="number" class="volume"><label>------</label>
                              <input maxlength="40" type="number" class="volumeEnd"  /><label>元/公斤</label>
                            </div>
                            
                          </td>
                          <td colspan="2">
                            <div class="inputbox">
                              <input maxlength="40" type="number" class="origina"><label>元/公斤</label>
                            </div>
                          </td>
                          <td colspan="2">
                            <div class="inputbox">
                              <input maxlength="40" type="number" class="discount"><label>元/公斤</label>
                            </div>
                          </td>
                        </tr>`
                  }
                  //随机日期
                  function parseTime(time, cFormat) {
                    if (arguments.length === 0) {
                      return null
                    }
                    if (!time) {
                      return ''
                    }
                    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
                    let date
                    if (typeof time === 'object') {
                      date = time
                    } else {
                      // 判断时毫秒还是字符串
                      time =
                        typeof time === 'number' ? time : ('' + time).trim()
                      // 如果是秒级单位则转成毫秒
                      if (/^\d{10}$/.test(time)) {
                        time = parseInt(time) * 1000
                      } else if (
                        /(\d){4}-(\d){2}-(\d){2}\s+(\d){2}:(\d){2}:(\d){2}/.test(
                          time
                        )
                      ) {
                        // IE需要标准格式
                        // time = time.replace(/(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2}):(\d{2})/, '$1-$2-$3T$4:$5:$6Z')
                        time = time.replace(/-/g, '/')
                      }

                      date = new Date(time)
                    }
                    // 如果不能正确转换，则返回原有的数据
                    if (date.toString().indexOf('Invalid') !== -1) {
                      return time
                    }
                    const formatObj = {
                      y: date.getFullYear(),
                      m: date.getMonth() + 1,
                      d: date.getDate(),
                      h: date.getHours(),
                      i: date.getMinutes(),
                      s: date.getSeconds(),
                      a: date.getDay()
                    }
                    const time_str = format.replace(
                      /{(y|m|d|h|i|s|a)+}/g,
                      (result, key) => {
                        let value = formatObj[key]
                        if (key === 'a')
                          return ['一', '二', '三', '四', '五', '六', '日'][
                            value - 1
                          ]
                        if (result.length > 0 && value < 10) {
                          value = '0' + value
                        }
                        return value || 0
                      }
                    )
                    return time_str
                  }
                  // 设置随机的文件名
                  function random_string(len) {
                    len = len || 32
                    var chars =
                      'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
                    var maxPos = chars.length
                    var pwd = ''
                    for (var i = 0; i < len; i++) {
                      pwd += chars.charAt(Math.floor(Math.random() * maxPos))
                    }
                    return pwd
                  }
                  function getImages() {
                    var url =
                      '/anfacommonservice/common/oss/v1/policy?access_token=' +
                      $.cookie('access_token')
                    // var options = $.extend(theRequest);
                    api
                      .getInfo1(url)
                      .done(function(res) {
                        var dir = res.data.dir
                        var policy = res.data.policy
                        var OSSAccessKeyId = res.data.accessid
                        var signature = res.data.signature
                        var success_action_status = 201
                        layui.use('upload', function() {
                          var upload = layui.upload
                          var uploadInst = upload.render({
                            elem: '#test1', //绑定元素
                            method: 'post',
                            data: {
                              key: '',
                              policy: policy,
                              success_action_status: success_action_status,
                              OSSAccessKeyId: OSSAccessKeyId,
                              signature: signature
                            },
                            url: res.data.host,
                            before: function(obj) {
                              this.data.key =
                                dir +
                                  parseTime(new Date(), '{y}{m}{d}') +
                                  '/' +
                                  random_string() +
                                  '.jpg' || '.png'
                              // layer.load(); //上传loading
                            },
                            done: function(res, index, upload) {
                              console.log(res)
                              //这是返回来的图片
                              $('.img_box .button_img').before(
                                '<li><i class="layui-icon del_icon">&#xe640;</i><a style="float:left" class="fancybox-thumb" rel="fancybox-thumb" href="' +
                                  res.url +
                                  '" title="Golden Manarola (Sanjeev Deo)"><img src="' +
                                  res.url +
                                  '" alt="" /><i class="layui-icon add_icon">&#xe608</i></a></li>'
                              )

                              //点击放大图片
                              $('.fancybox-thumb').fancybox({
                                prevEffect: 'none',
                                nextEffect: 'none',
                                helpers: {
                                  title: {
                                    type: 'outside'
                                  },
                                  thumbs: {
                                    width: 50,
                                    height: 50
                                  }
                                }
                              })
                              $('.del_icon').click(function(e) {
                                e.target.parentNode.remove()
                                if ($('.img_box img').length < 3) {
                                  $('.button_img').show()
                                }
                              })
                              if ($('.img_box img').length > 2) {
                                $('.button_img').hide()
                                layer.msg('最多上传三张')
                                return
                              }
                            },
                            error: function() {
                              //请求异常回调
                              layer.load() //上传loading
                            }
                          })
                        })
                      })
                      .fail(function(err) {
                        layer.msg('您还未登入')
                      })
                  }
                  function getForm() {
                    obj.rangePrices = []
                    var isVad = true
                    $('.order-company-list').each(function(index, ele) {
                      if (!isVad) {
                        return false
                      }
                      var type = '1'
                      if (index == 1) {
                        type = '0'
                      }
                      $(this)
                        .find('table .nocompany tr')
                        .each(function(index, ele) {
                          var p = {
                            discountPrice: '',
                            endVolume: '',
                            primeryPrice: '',
                            startVolume: '',
                            type: type
                          }
                          if (type === '1') {
                            if (
                              $(this)
                                .find('.volumeEnd')
                                .val()
                            ) {
                              p.endVolume = $(this)
                                .find('.volumeEnd')
                                .val()
                            } else {
                              isVad = false
                              layer.msg('请补充重货运量')
                              return false
                            }
                            if (
                              $(this)
                                .find('.origina')
                                .val()
                            ) {
                              p.primeryPrice = $(this)
                                .find('.origina')
                                .val()
                            } else {
                              isVad = false
                              layer.msg('请补充重货原报价')
                              return false
                            }
                            p.startVolume = $(this)
                              .find('.discount')
                              .val()
                          } else {
                            if (
                              $(this)
                                .find('.volumeEnd')
                                .val()
                            ) {
                              p.endVolume = $(this)
                                .find('.volumeEnd')
                                .val()
                            } else {
                              isVad = false
                              layer.msg('请补充轻货运量')
                              return false
                            }
                            if (
                              $(this)
                                .find('.origina')
                                .val()
                            ) {
                              p.primeryPrice = $(this)
                                .find('.origina')
                                .val()
                            } else {
                              isVad = false
                              layer.msg('请补充轻货原报价')
                              return false
                            }
                            p.startVolume = $(this)
                              .find('.discount')
                              .val()
                          }
                          obj.rangePrices.push(p)
                        })
                    })
                  }
                  //获取运输时效和发车时间
                  function getValue() {
                    obj.departureTime = $('#order_buttom .checked').attr('type')
                    obj.transportAgingUnit = $('#order_top .checked').text()
                  }
                  //初始化页面，一进来就执行
                  function initEvent() {
                    var _this = this
                    getValue()
                    getImages()
                    var volume = $('.volume').val('0')
                    $('.volume').attr('disabled', 'disabled')
                    var listLen = $('.nocompany').find('.box1_list').length
                    if (listLen <= 1) {
                      $('.delete').hide()
                    } else {
                      $('.delete').show()
                    }
                    //删除整行
                    $('.delete').click(function() {
                      var $add = $(this).siblings('.add1')
                      var $tr = $(this)
                        .parent('.todoTable')
                        .find('table tbody tr')
                      $tr.last().remove()
                      if ($tr.length > 2) {
                        $(this).show()
                      } else {
                        $(this).hide()
                      }
                      if ($tr.length < 6) {
                        $add.show()
                      } else {
                        $add.hide()
                      }
                    })
                    $('#test1').click(function() {
                      console.log('fdsafas', $.cookie('access_token'))
                      if (!$.cookie('access_token')) {
                        $('body').trigger('login.show')
                      }
                    })
                    $(document).on('click', '.login-btn', function(event) {
                      event.preventDefault()
                      var timer = setInterval(() => {
                        if ($.cookie('access_token')) {
                          getImages()
                          clearInterval(timer)
                        }
                        // else {
                        //   clearInterval(timer)
                        // }
                      }, 5000)
                      return false
                    })
                    //添加第一个
                    $('.add1').on('click', function(event) {
                      event.stopPropagation()
                      var table = $(this)
                        .parent('.todoTable')
                        .find('table')
                      addCaroList(table)
                    })
                    //切换颜色
                    $('.order-submit-btn').click(function(event) {
                      event.stopPropagation()
                      $('.order-submit-btn').removeClass('click')
                      $(this).addClass('click')
                    })

                    //运输时效
                    $('#order_top .minbox').click(function(event) {
                      event.stopPropagation()
                      $('#order_top .minbox').removeClass('checked')
                      $(this).addClass('checked')
                      getValue()
                    })
                    //发车时间
                    $('#order_buttom .minbox').click(function(event) {
                      event.stopPropagation()
                      $('#order_buttom .minbox').removeClass('checked')
                      $(this).addClass('checked')
                      getValue()
                    })

                    //重置
                    $('#reset').click(function() {
                      resetForm()
                    })
                    //发布
                    $('#next').click(function() {
                      next()
                    })
                  }

                  //检查价格验证1
                  function checkCargoList($table) {
                    var $inputcargo = $table.find('.nocompany')
                    var volume = $inputcargo.find('.volume')
                    var origina = $inputcargo.find('.origina')
                    var discount = $inputcargo.find('.discount')
                    var volumeEnd = $inputcargo.find('.volumeEnd')
                    var flag = true
                    $inputcargo.find('tr').each(function(index, ele) {
                      var $volume = $(this).find('.volume')
                      var $origina = $(this).find('.origina')
                      var $discount = $(this).find('.discount')
                      var $volumeEnd = $(this).find('.volumeEnd')
                      if (!AFLC_VALID.ONLY_NUMBER_GT.test($volumeEnd.val())) {
                        flag = false
                        layer.msg('请补充重货运量')
                        $volumeEnd.focus()
                        return false
                      }
                      if (!AFLC_VALID.ONLY_NUMBER_GT.test($origina.val())) {
                        flag = false
                        layer.msg('请补充重货原报价')
                        $origina.focus()
                        return false
                      }
                      var volumeN = Number($volume.val())
                      var volumeEndN = Number($volumeEnd.val())
                      if (volumeEndN <= volumeN) {
                        flag = false
                        layer.msg('重货运量的最大值不能小于最小值')
                        $volumeEnd.focus()
                        return false
                      }
                    })
                    return flag
                  }
                  //点击增加按钮
                  function addCaroList($table) {
                    var _this = this
                    var flag = checkCargoList($table)
                    var $add1 = $table.parent('.todoTable').find('.add1')
                    var $delete = $table.parent('.todoTable').find('.delete')
                    if (flag) {
                      var $inputcargo = $table.find('.nocompany')
                      var volume = $inputcargo.find('.volume')
                      var volumeEnd = $inputcargo.find('.volumeEnd')
                      let orgvalue = ''
                      // let orgindex = ''
                      $.each(volumeEnd, function(index, ele) {
                        ele = $(ele)
                        var val = $.trim(ele.val())
                        orgvalue = val
                      })
                      var tmp = $(this.tpl.cargo)
                      tmp.find('.volume').val(orgvalue)

                      $inputcargo.append(tmp)
                      $('.volume').attr('disabled', 'disabled')
                      var listLen = $inputcargo.find('tr').length
                      if (listLen >= 1) {
                        $delete.show()
                      } else {
                        console.log(listLen)
                        $delete.hide()
                      }
                      if (listLen > 4) {
                        $add1.hide()
                      } else {
                        $add1.show()
                      }
                    }
                  }
                  //验证必填信息
                  function validate() {
                    var checkinfo = {
                      done: true,
                      err: ''
                    }
                    if ($('.start').val()) {
                      obj.startLocation = $('.start').attr('thepcd')
                      obj.startLocationCoordinate = $('.start').attr('thepos')
                      obj.startProvince = $('.start').attr('theprovince')
                      obj.startCity = $('.start').attr('thecity')
                      obj.startArea = $('.start').attr('thearea')
                    } else {
                      checkinfo.done = false
                      layer.msg('出发地不能为空')
                      return
                    }
                    if ($('.end').val()) {
                      obj.endLocation = $('.end').attr('thepcd')
                      obj.endLocationCoordinate = $('.end').attr('thepos')
                      obj.endProvince = $('.end').attr('theprovince')
                      obj.endCity = $('.end').attr('thecity')
                      obj.endArea = $('.end').attr('thearea')
                    } else {
                      checkinfo.done = false
                      layer.msg('到达地不能为空')
                      return
                    }
                    if ($('.startName').val()) {
                      obj.startLocationContacts = $('.startName').val()
                    } else {
                      checkinfo.done = false
                      layer.msg('出发地联系人不能为空')
                      return
                    }
                    if (AFLC_VALID.MOBILE.test($('.startPhone').val())) {
                      obj.endLocationContactsMobile = $('.startPhone').val()
                    } else {
                      if (!$('.startPhone').val()) {
                        checkinfo.done = false
                        layer.msg('出发地联系人电话不能为空')
                        return
                      }
                      checkinfo.done = false
                      layer.msg('出发地联系人电话不正确')
                      return
                    }
                    if ($('.endName').val()) {
                      obj.endLocationContacts = $('.endName').val()
                    } else {
                      checkinfo.done = false
                      layer.msg('到达地联系人不能为空')
                      return
                    }

                    if (AFLC_VALID.MOBILE.test($('.endPhone').val())) {
                      obj.endLocationContactsMobile = $('.endPhone').val()
                    } else {
                      if (!$('.endPhone').val()) {
                        checkinfo.done = false
                        layer.msg('到达地联系人电话不能为空')
                        return
                      }
                      checkinfo.done = false
                      layer.msg('到达地联系人电话不正确')
                      return
                    }
                    if ($('#textarea').val().length < 3) {
                      layer.msg('线路说明不能少于3个字符')
                      return
                    } else if ($('#textarea').val().length > 200) {
                      layer.msg('线路说明不能超过200个字符')
                      return
                    } else {
                      obj.transportRemark = $('#textarea').val()
                    }
                    if (
                      $('#lowerPrice')
                        .val()
                        .charAt() == '-' ||
                      $('#lowerPrice').val() == '0'
                    ) {
                      checkinfo.done = false
                      layer.msg('最低一票价格格式不正确')
                      return false
                    } else {
                      obj.lowerPrice = $('#lowerPrice').val()
                    }
                    if ($('#transportAging').val()) {
                      obj.transportAging = $('#transportAging').val()
                    }
                    if ($('#days').val()) {
                      obj.departureHzData = $('#days').val()
                    }
                    if ($('#once').val()) {
                      obj.departureHzTime = $('#once').val()
                    }
                    if ($('.img_box img').length === 0) {
                      layer.msg('请上传图片')
                      return
                    } else {
                      $('.img_box img').each(function(index, item) {
                        obj.rangeLogo =
                          obj.rangeLogo + $(this).attr('src') + ','
                      })
                      var length = obj.rangeLogo.length
                      obj.rangeLogo = obj.rangeLogo.substring(0, length - 1)
                    }
                    getForm()
                    return checkinfo
                  }
                  //重置清空输入框
                  function resetForm() {
                    $('.start').val('')
                    $('.end').val('')
                    $('.startName').val('')
                    $('.startPhone').val('')
                    $('.endName').val('')
                    $('.endPhone').val('')
                    $('#textarea').val('')
                    $('#lowerPrice').val('')
                    $('#transportAging').val('')
                    $('#days').val('')
                    $('#once').val('')
                  }
                  //发布专线请求接口
                  function next() {
                    var check = validate()
                    var url =
                      '/aflc-uc/usercenter/aflcTransportRange/v1/add?access_token=' +
                      $.cookie('access_token')
                    console.log($.cookie('access_token'))
                    if (check) {
                      if ($.cookie('login_type') === 'aflc-5') {
                        obj.publishId = $.cookie('loginId')
                        obj.publishName = $.cookie('loginCompanyName')
                        var options = $.extend(obj, theRequest)
                        api
                          .postInfo1(url, options)
                          .done(function(res) {
                            var id = res.data
                            var publishId = $.cookie('loginId')
                            if (res.status === '201') {
                              window.location.href =
                                '/plus/list.php?tid=86&status=201&text=专线&id=' +
                                id +
                                '&publishId=' +
                                publishId
                            } else {
                              window.location.href =
                                '/plus/list.php?tid=86&status=200&text=专线&id=' +
                                id +
                                '&publishId=' +
                                publishId
                            }
                          })
                          .fail(function(err) {
                            layer.msg(
                              '发布失败：' +
                                (err.errorInfo || err.text || '未知错误')
                            )
                          })
                      } else if (
                        $.cookie('login_type') === 'aflc-1' ||
                        $.cookie('login_type') === 'aflc-2'
                      ) {
                        layer.msg('当前账号不是物流公司，不能发布专线')
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
      })
    })
  }
}
</script>
<style  scoped>
.line_box {
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
