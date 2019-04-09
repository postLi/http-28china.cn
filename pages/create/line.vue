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
            <!-- <div class="order3"/> -->
            <div class="order-company-list">
              <div class="order-form-label">重货价格：<span class="required">(阶梯价格最大值不填，代表无穷大，例如：500-，代表500公斤以上)</span></div>
              <div class="todoTable">
                <span 
                  class="addbox add1"
                  @click="cargoAdd()"
                >+</span>
                <span 
                  class="delete"
                  @click="cargoDelete()"
                  v-if="heavyList.length>1">-</span>             
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
                    <tr 
                      class="box1_list"
                      v-for="(item, index) in heavyList" 
                      :key="index">
                      <td colspan="2">
                        <div class="inputbox">              
                          <input 
                            maxlength="40" 
                            type="number" 
                            class="volume"
                            disabled
                            v-model="item.startVolume">                                       
                          <label>------</label>
                          <label v-if="index===0">                      
                            <input 
                              maxlength="40" 
                              type="number" 
                              class="volumeEnd" 
                              v-model="item.endVolume"
                              @change="cargoChange()"
                            >
                          </label>
                          <label v-else>                      
                            <input 
                              maxlength="40" 
                              type="number" 
                              class="volumeEnd" 
                              v-model="item.endVolume">
                          </label>
                          <label>元/公斤</label>
                        </div>
                      </td>
                      <td colspan="2">
                        <div class="inputbox">
                          <input 
                            maxlength="40" 
                            type="number" 
                            class="origina"
                            v-model="item.primeryPrice">
                          <label>元/公斤</label>
                        </div>
                      </td>
                      <td colspan="2">
                        <div class="inputbox">
                          <input 
                            maxlength="40" 
                            type="number" 
                            class="discount"
                            v-model="item.discountPrice">
                          <label>元/公斤</label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="order-company-list">
              <div class="order-form-label">轻货价格：<span class="required">(阶梯价格最大值不填，代表无穷大，例如：10-，代表10立方以上)</span></div>
              <div class="todoTable">
                <span 
                  class="addbox add1" 
                  @click="cargoAdd(0)">+</span>
                <span 
                  class="delete"
                  @click="cargoDelete(0)"
                  v-if="lightList.length>1">-</span> 
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
                    <tr 
                      class="box2_list"
                      v-for="(item, index) in lightList" 
                      :key="index">
                      <td colspan="2">
                        <div class="inputbox">              
                          <input 
                            maxlength="40" 
                            type="number" 
                            class="volume"
                            disabled
                            v-model="item.startVolume">                                       
                          <label>------</label>
                          <label v-if="index===0">                      
                            <input 
                              maxlength="40" 
                              type="number" 
                              class="volumeEnd" 
                              v-model="item.endVolume"
                              @change="cargoChange(0)"
                            >
                          </label>
                          <label v-else>                      
                            <input 
                              maxlength="40" 
                              type="number" 
                              class="volumeEnd" 
                              v-model="item.endVolume">
                          </label>
                          <label>元/公斤</label>
                        </div>
                      </td>
                      <td colspan="2">
                        <div class="inputbox">
                          <input 
                            maxlength="40" 
                            type="number" 
                            class="origina"
                            v-model="item.primeryPrice">
                          <label>元/公斤</label>
                        </div>
                      </td>
                      <td colspan="2">
                        <div class="inputbox">
                          <input 
                            maxlength="40" 
                            type="number" 
                            class="discount"
                            v-model="item.discountPrice">
                          <label>元/公斤</label>
                        </div>
                      </td>
                    </tr>
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
            <div 
            class="order-line-from clearfix">
              <div class="order-form-label">专线照片：</div>
              <p style="padding-top: 10px">建议传</p>
              <div class="upload_box">
                <upload 
                  @imgData="imgListDataFn"
                  :limit="3"
                  :istoken="true"
                  ref="mychild"
                />
              </div>
                
              <!-- <ul class="img_box">
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
              </ul> -->
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
import Upload from '~/components/uploadImg/singleImage2'
export default {
  name: 'Linerder',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/line_order.css' },
      { rel: 'stylesheet', href: '/layer3/css/layui.css' },
      { rel: 'stylesheet', href: '/fancybox/jquery.fancybox.min.css' }
    ],
    script: [
      {
        src: '/vendor/lrz.all.bundle.js'
      }
    ]
  },
  components: {
    Upload
  },
  data() {
    return {
      heavyList: [
        {
          startVolume: '0',
          endVolume: '',
          primeryPrice: '',
          discountPrice: '',
          type: '1'
        }
      ],
      lightList: [
        {
          startVolume: '0',
          endVolume: '',
          primeryPrice: '',
          discountPrice: '',
          type: '0'
        }
      ],
      //组件返回图片字符串
      imgList: []
    }
  },
  mounted() {
    let that = this
    seajs.use(['/js/insurance.js'], function() {
      // seajs.use(['/js/laydate.js'], function() {
      seajs.use(['/js/gaodemap2.js'], function() {
        seajs.use(['/fancybox/jquery.fancybox.min.js'], function() {
          seajs.use(['layer'], function() {
            $(function() {
              //---------------------------------

              var theRequest = getRequest()
              // var obj = {
              //   startLocationCoordinate: '',
              //   endLocationCoordinate: '',
              //   startLocation: '',
              //   endLocation: '',
              //   startProvince: '',
              //   startCity: '',
              //   startArea: '',
              //   endProvince: '',
              //   endCity: '',
              //   endArea: '',
              //   startLocationContacts: '',
              //   startLocationContactsMobile: '',
              //   endLocationContacts: '',
              //   endLocationContactsMobile: '',
              //   transportAging: '',
              //   transportAgingUnit: '', //运输时效单位
              //   departureHzData: '', //天
              //   departureHzTime: '', //次
              //   lowerPrice: '', //最低一票价格
              //   departureTime: '', //发车时间
              //   transportRemark: '', //发车备注
              //   rangeLogo: '', //专线照片
              //   publishId: '', //公司id
              //   publishName: '', //物流公司名称
              //   rangePrices: []
              // }

              var obj = {
                startLocationCoordinate: '', //出发的坐标
                endLocationCoordinate: '', //到达的坐标
                // startLocation: '',
                // endLocation: '',
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
                departureTimeCode: '', //发车时间
                transportRemark: '', //发车备注
                rangeLogo: '', //专线照片
                // publishId: '', //公司id
                // publishName: '', //物流公司名称
                rangePrices: []
              }

              //获取运输时效和发车时间
              function getValue() {
                obj.departureTimeCode = $('#order_buttom .checked').attr('type')
                obj.transportAgingUnit = $('#order_top .checked').text()
              }
              //初始化页面，一进来就执行
              function initEvent() {
                var _this = this
                getValue()

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

              //验证必填信息
              function validate() {
                var check = true

                if ($('.start').val()) {
                  obj.startLocationCoordinate = $('.start').attr('thepos')
                  obj.startProvince = $('.start').attr('theprovince')
                  obj.startCity = $('.start').attr('thecity')
                  obj.startArea = $('.start').attr('thearea')
                } else {
                  layer.msg('出发地不能为空')
                  return false
                }

                if ($('.end').val()) {
                  obj.endLocationCoordinate = $('.end').attr('thepos')
                  obj.endProvince = $('.end').attr('theprovince')
                  obj.endCity = $('.end').attr('thecity')
                  obj.endArea = $('.end').attr('thearea')
                } else {
                  layer.msg('到达地不能为空')
                  return false
                }

                if ($('.startName').val()) {
                  obj.startLocationContacts = $('.startName').val()
                } else {
                  layer.msg('出发地联系人不能为空')
                  return false
                }

                let startPhone = parseInt($('.startPhone').val())
                if (AFLC_VALID.MOBILE.test(startPhone)) {
                  obj.startLocationContactsMobile = $('.startPhone').val()
                } else {
                  if (!startPhone) {
                    layer.msg('出发地联系人电话不能为空')
                    return false
                  }

                  layer.msg('出发地联系人电话不正确')
                  return false
                }

                if ($('.endName').val()) {
                  obj.endLocationContacts = $('.endName').val()
                } else {
                  layer.msg('到达地联系人不能为空')
                  return false
                }

                let endPhone = parseInt($('.endPhone').val())
                console.log(endPhone)
                if (AFLC_VALID.MOBILE.test(endPhone)) {
                  obj.endLocationContactsMobile = $('.endPhone').val()
                  console.log('电话号码', obj.endLocationContactsMobile)
                } else {
                  if (!endPhone) {
                    layer.msg('到达地联系人电话不能为空')
                    return false
                  }

                  layer.msg('到达地联系人电话不正确')
                  return false
                }
                //轻货重货验证，轻货重货赋值
                let isHeavy = that.cargoValidate()
                if (!isHeavy) {
                  return false
                }
                let isLight = that.cargoValidate(0)
                if (!isLight) {
                  return false
                }

                let heavy = that.heavyList
                let light = that.lightList
                obj.rangePrices = [...heavy, ...light]
                //最低价格
                if (
                  $('#lowerPrice')
                    .val()
                    .charAt() == '-' ||
                  $('#lowerPrice').val() == '0'
                ) {
                  layer.msg('最低一票价格格式不正确')
                  return false
                } else {
                  obj.lowerPrice = $('#lowerPrice').val()
                }
                //线路说明可以为空
                let textarea = $('#textarea').val()
                if (
                  (textarea !== '' && textarea.length < 3) ||
                  textarea.length > 200
                ) {
                  layer.msg('线路说明不能少于3个字符,不能超过200个字符')
                  return false
                } else if (textarea === '') {
                  obj.transportRemark = ''
                } else {
                  obj.transportRemark = textarea
                }

                //默认单位
                if ($('#transportAging').val()) {
                  obj.transportAging = $('#transportAging').val()
                }
                if ($('#days').val()) {
                  obj.departureHzData = $('#days').val()
                }
                if ($('#once').val()) {
                  obj.departureHzTime = $('#once').val()
                }
                //图片赋值
                obj.rangeLogo = that.imgList.join(',')

                // getForm()
                return check
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
                //清空重货，轻货数据
                that.clearCargoFn()
                //清空上传图片的数据
                that.$refs.mychild.clearimgFn()
              }
              //发布专线请求接口
              function next() {
                if (!$.cookie('access_token')) {
                  that.loginFn()
                  return false
                }
                var check = validate()
                // console.log('到达电话', obj.startLocationContactsMobile)
                // console.log('到达电话', obj.endLocationContactsMobile)
                // console.log('到达区', obj.endArea)
                // console.log('到达区', obj.Area)
                var url =
                  '/28-web/range/create?access_token=' +
                  $.cookie('access_token') +
                  '&&user_token=' +
                  $.cookie('login_userToken')
                if (check) {
                  if ($.cookie('login_type') === 'aflc-2') {
                    // obj.publishId = $.cookie('loginId')
                    // obj.publishName = $.cookie('loginCompanyName')
                    var options = $.extend(obj, theRequest)
                    api
                      .postInfo1(url, options)
                      .done(function(res) {
                        console.log('请求返回的数据', res)
                        let url = `/create/cySuccess?id=${
                          res.data.id
                        }&publishId=${res.data.publishId}&text=专线`
                        // window.location.href = huoyuanUrl
                        window.open(url)
                      })
                      .fail(function(err) {
                        layer.msg(
                          '发布失败：' +
                            (err.errorInfo || err.text || '未知错误')
                        )
                      })
                  } else {
                    layer.msg('当前账号，不能发布专线')
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
    // })
  },
  methods: {
    //获取子组件的值
    imgListDataFn(val) {
      this.imgList = val
    },
    //子组件获取父组件的事件
    loginFn() {
      $('body').trigger('login.show')
    },
    //添加轻货，重货
    cargoAdd(type = 1) {
      let isAdd = this.cargoValidate(type)
      if (!isAdd) {
        return false
      }
      let cargo = {
        startVolume: '0',
        endVolume: '',
        primeryPrice: '',
        discountPrice: '',
        type: ''
      }
      if (type === 1) {
        let endVolume = this.heavyList[this.heavyList.length - 1].endVolume
        cargo.startVolume = endVolume
        cargo.type = '1'
        this.heavyList.push(cargo)
        console.log(this.heavyList)
      } else {
        let endVolume = this.lightList[this.heavyList.length - 1].endVolume
        cargo.startVolume = endVolume
        cargo.type = '0'
        this.lightList.push(cargo)
        console.log(this.lightList)
      }
    },
    //删除货物
    cargoDelete(type = 1) {
      let delNum
      if (type === 1) {
        delNum = this.heavyList.length - 1
        this.heavyList = this.heavyList.splice(delNum, 1)
        layer.msg('成功删除重货最后一条内容！')
      } else {
        delNum = this.lightList.length - 1
        this.lightList = this.lightList.splice(delNum, 1)
        layer.msg('成功删除轻货最后一条内容！')
      }
    },
    //验证终货，轻货的数据
    cargoValidate(type = 1) {
      //还差token这里验证
      if (type === 1) {
        let heavy = this.heavyList[this.heavyList.length - 1]
        let startVolume = parseFloat(heavy.startVolume)
        let endVolume = parseFloat(heavy.endVolume)
        let discountPrice = parseFloat(heavy.discountPrice)
        let primeryPrice = parseFloat(heavy.primeryPrice)
        if (!heavy.endVolume || !heavy.primeryPrice || !heavy.discountPrice) {
          layer.msg('重货数据没有填满不能添加！')
          return false
        }
        if (!(startVolume < endVolume)) {
          layer.msg('重货运量开始不能大于结束！')
          return false
        }
        if (!(discountPrice < primeryPrice)) {
          layer.msg('重货折后价不能大于原价！')
          return false
        }
        return true
      } else {
        let light = this.lightList[this.lightList.length - 1]
        let startVolume = parseFloat(light.startVolume)
        let endVolume = parseFloat(light.endVolume)
        let discountPrice = parseFloat(light.discountPrice)
        let primeryPrice = parseFloat(light.primeryPrice)
        if (!light.endVolume || !light.primeryPrice || !light.discountPrice) {
          layer.msg('轻货数据没有填满不能添加！')
          return false
        }
        if (!(startVolume < endVolume)) {
          layer.msg('轻货运量开始不能大于结束！')
          return false
        }
        if (!(discountPrice < primeryPrice)) {
          layer.msg('轻货折后价不能大于原价！')
          return false
        }
        return true
      }
    },
    //清空数据
    cargoChange(type = 1) {
      let heavyLen = this.heavyList.length
      let lightLen = this.lightList.length
      let cargo = [
        {
          startVolume: '0',
          endVolume: '',
          primeryPrice: '',
          discountPrice: '',
          type: ''
        }
      ]
      console.log('轻货，重货的长度', heavyLen)
      if (type === 1 && heavyLen > 1) {
        console.log('清空数据')
        cargo.type = '1'
        this.heavyList = cargo
        console.log('重货的列表', this.heavyList)
      } else if (type === 0 && lightLen > 1) {
        cargo.type = '0'
        this.lightList = cargo
      }
    },
    //表单重置清空数据
    clearCargoFn() {
      this.heavyList = [
        {
          startVolume: '0',
          endVolume: '',
          primeryPrice: '',
          discountPrice: '',
          type: '1'
        }
      ]
      this.lightList = [
        {
          startVolume: '0',
          endVolume: '',
          primeryPrice: '',
          discountPrice: '',
          type: '0'
        }
      ]
    }
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
.inputbox input {
  width: 100px;
  padding-left: 20px;
  height: 40px;
  border-radius: 2px;
  border: solid 1px #d2d2d2;
}
.upload_box {
  margin: 20px 0 0 70px;
}
</style>
