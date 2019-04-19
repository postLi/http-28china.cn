<template>
  <div>
    <div class="shixiao_banner">
      <img src="/images/wzlImg/sxbanner.png">
      <a 
        target="_black"
        href="http://h5.28tms.com/"
        class="baner_btn"/>
    </div>
    <div class="shixiao_box">
      <div class="fix_box">
        <div class="shixiao_left">
          <div class="left_top">
            <ul class="left_top_ul">
              <h2 class="list_help_title">帮助信息</h2>
              <li
                :class="[isBg == 'one' ? 'list_ul_one' : '']"
                @click="getShixiao('one')">
                <a>时效查询</a>
              </li>
              <li
                :class="[isBg == 'two' ? 'list_ul_one' : '']"
                @click="getShixiao('two')"><a 
                  target="_blank" 
                  :href="'/wangdian'">网点查询</a></li>
              <li
                :class="[isBg == 'thirty' ? 'list_ul_one' : '']"
                @click="getShixiao('thirty')"><a 
                  target="_blank" 
                  :href="'/ydcx'">运单查询</a></li>
              <li
                :class="[isBg == 'four' ? 'list_ul_one' : '']"
                @click="getShixiao('four')"><a 
                  target="_blank" 
                  :href="'/create/order'">快速下单</a></li>
            </ul>
          </div>
          <div class="list_kehu">
            <h2 class="list_help_title">客户服务</h2>
            <div class="kf_num">
              <p style="text-align: center;">
                <img src="/images/wzlImg/07kfj.png">
                <img src="/images/article_wlzx/15qq.gif">
                <img src="/images/article_wlzx/15qq.gif">
              </p>
              <p style="text-align: center;"><img src="/images/wzlImg/09400.png"></p>
            </div>
          </div>
          <!-- 帮我找优质运动start -->
          <div class="list_help">
            <h2 class="list_help_title">帮我找优质承运商</h2>
            <div class="list-box-r-top">
              <form action="">
                <div 
                  id="form0" 
                  class="ltl-input0">
                  <input 
                    v-model="checkNotice.startAddres"
                    id="right-bar-form"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text" 
                    class="ltl-location" 
                    placeholder="请选择出发地">
                  <i class="ss56-common-sprite1 ltl-ico-start"/>
                </div>
                <div 
                  id="form1" 
                  class="ltl-input0">
                  <input
                    v-model="checkNotice.endAddres"
                    autocomplete="off"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text" 
                    class="ltl-location" 
                    placeholder="请选择目到达地">
                  <i class="ss56-common-sprite2 ltl-ico-end"/>
                </div>
                <textarea
                  id="form2"
                  v-model="checkNotice.select"
                  maxlength="100"
                  style="padding:18px;height:80px;"
                  placeholder="备注信息，如：期望发货时间、货物体积重量等信息..."
                  class="textare"/>
                <div 
                  id="form3" 
                  class="ltl-input">
                  <input 
                    v-model="checkNotice.phone"
                    :placeholder="phoneHolder"
                    type="text"
                    class="ltl-phone"
                    maxlength="11"
                  >
                  <span 
                    class="ltl-button" 
                    @click="sendNotice()">找到通知我</span>
                </div>
              </form>
            </div>
          </div>
          <!-- 帮我找优质运动end -->
          <div class="list_ewm">
            <h2 class="list_help_title">便捷查询运单</h2>
            <div class="order_content">
              <div class="imgbox">
                <img 
                  src="/images/28fast_download.png" 
                  width="100" 
                  height="100">
              </div>
              <div class="textbox">
                <a 
                  target="_blank" 
                  href="http://h5.28tms.com/">
                下载【28快运APP】，随时随地查看专线，在线下单推荐优质承运商，便捷查询运单</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shixiao_right">
        <div class="list_left">
          <div class="list_search">
            <div class="zx_sx">
              <span class="biaozhi"/><span >时效查询</span>
              <div class="list_nav">
                <a href="/">物流首页</a>&gt;<a 
                  id="list_nav_a" 
                  href="">专线时效</a>
              </div>
            </div>
            <!-- 出发地 -->
            <div class="order-line-from clearfix">
              <div class="order-form-item">
                <div class="order-form-label"/>
                <div 
                  id="carLineFrom" 
                  class="order-form-input shixiao-input">
                  <input 
                    style="height: 100%;border: none;outline: none;"
                    data-toggle="city-picker" 
                    data-level="district" 
                    maxlength="40" 
                    placeholder="请选择出发地" 
                    type="text">
                  <img 
                    src="/images/wzlImg/10qid.png"
                    class="qd">
                </div>
              </div>

              <div class="order-form-item">
                <img 
                  src="/images/wzlImg/refresh.png"
                  class="qiehuan">
              </div>
              <div class="order-form-item form-detail">
                <div class="order-form-label"/>
                <div 
                  id="carLineTo" 
                  class="order-form-input shixiao-input">
                  <input 
                    style="height: 100%;border: none;outline: none;"
                    data-toggle="city-picker" 
                    data-level="district" 
                    placeholder="请选择到达地" 
                    wtmap="" 
                    maxlength="40" 
                    type="text">
                  <img 
                    src="/images/wzlImg/13zhongdian.png"
                    class="wzl">
                </div>
              </div>
              <div class="order-form-item">
                <span 
                  class="search" 
                  @click="search(1)">查询</span>
              </div>
            </div>
          </div>
          <div 
            class="list_none" 
            v-if="showLinst && listRangesAging.length === 0">
            <span>暂时没有找到您要查询的信息，可以看看其他信息哦</span>
            <img src="/images/none_pic.png">
          </div>
          <div 
            v-if="!showLinst"
            class="shixiao_fabu">
            <p>
              <img src="/images/wzlImg/14pic.png">
              <span>请输入出发地和目的地为你推荐精选专线</span>
            </p>
            <p>
              <span class="fabu_btn"><a :href="'/create/huoyuan'">发布货源</a></span>
            </p>
            <p>让承运商主动联系我</p>
          </div>
          <div 
            v-if="showLinst && listRangesAging.length != 0"
            class="list_line">
            <div class="zx_sx"><span class="biaozhi"/><span >为您精选20条优质专线</span>
              <div class="more floatr"><a 
                :href="'/zhuanxian/list?startp='+ vo.startProvince+'&startc='+vo.startCity" 
                target="_blank">更多专线&gt;</a></div>
            </div>
            <div class="list_tiaoj">
              <span 
                v-for="(item,index) in sortList" 
                :key="index"
                :class="[sortId === item.id ? 'active' : '']"
                @click="selectSort(item)">{{ item.name }}</span>
            </div>
            <div 
              v-for="(item,index) in listRangesAging.slice(0,20)" 
              :key="index" 
              class="wzl_box">
              <ul 
                class="wlzx_list1" 
                style="border:none" >
                <li class="cy_list_12">
                  <p class="p1">
                    <a 
                      :href="'/zhuanxian/detail?id=' + item.id + '&publishId=' + item.companyId" 
                      target="_blank">
                      <span class="list-icon lines-sprite-icons icon-start"/>
                      <span :title="item.startProvince + item.startCity + item.startArea">{{ item.startProvince }}{{ item.startCity.substring(0,3) }}</span>
                      <span class="list-icon lines-sprite-icons icon-through"/>
                      <span class="list-icon lines-sprite-icons icon-end"/>
                      <span :title="item.endProvince + item.endCity + item.endArea">{{ item.endProvince }}{{ item.endCity.substring(0,3) }}</span>
                    </a>
                  </p>
                  <p class="p2"><img src="/images/wzlImg/1.png"><font style="color: #2577e3;">{{ item.companyName ? item.companyName : '无' }}</font>
                    <a
                      target="_black"
                      style="margin-left:10px;" 
                      :href="'http://wpa.qq.com/msgrd?v=3&uin='+ item.qq+'&site=qq&menu=yes'"
                      v-if="item.qq"> <img src="/images/article_wlzx/15qq.gif"></a>
                  </p>
                  <p>
                    <img
                      v-if="item.collateral && item.collateral !== 0"
                      src="/images/list_wlzx/12danbao.png">
                    <img
                      v-if="item.isVip && item.isVip === 1"
                      src="/images/list_wlzx/11xinyong.png">
                    <img
                      v-if="item.authStatus === 'AF0010403'"
                      src="/images/list_wlzx/10shiming.png">
                  </p>
                  <p :title="item.transportRemark"><img 
                  src="/images/wzlImg/2.png">线路说明：{{ item.transportRemark ? item.transportRemark.substring(0,14) : '无' }}</p>
                  <p :title="item.address"><img src="/images/wzlImg/3.png">地址：{{ item.address ? item.address.substring(0,18) : '无' }}</p>
                </li>
                <li class="cy_list_7">
                  <p>时效：<span>{{ item.transportAging ? item.transportAging : '0' }}{{ item.transportAgingUnit ? item.transportAgingUnit : '' }}</span></p>
                </li>
                <li class="cy_list_2">
                  <p>重货：<span>{{ item.lightPrice ? item.lightPrice + '元/公斤': '0' }}</span></p>
                  <p>轻货：<span>{{ item.lightPrice ? item.lightPrice + '元/m3': '0' }}</span></p>
                  <p>频率：<span>{{ item.departureHzData ? item.departureHzData + '天': '' }}{{ item.departureHzTime ? item.departureHzTime + '次': '' }}</span></p>
                </li>
                <li class="wlzx_list_6">
                  <p class="p1"><span style="float:left"><img 
                    class="numlll" 
                    src="/images/wzlImg/lll.png">浏览量：{{ item.browseNumber ? item.browseNumber : '无' }}</span>
                    <span style="float:left"><img 
                      class="numlll" 
                      src="/images/wzlImg/pj.png">评价：{{ item.assessNumber ? item.assessNumber + '条': '无' }}</span>
                  </p>
                  <p class="p2"><a 
                    :href="'/create/order?&uid=' + item.account + '&id=' + item.id + '&publishId=' +item.companyIfvd"
                    target="_blank" 
                    class="check_btn" 
                    style="background: #2577e3;color: #fff;">下单</a>
                  </p>
                  <p class="p2"><a
                    :href="'/zhuanxian/detail?id=' + item.id + '&publishId=' + item.companyId"
                    target="_blank"
                    class="check_btn">查看</a>
                  </p>
                </li>
              </ul>
            </div>
            <div class="shixiao_fabu">
              <p>
                <span class="fabu_btn"><a :href="'/create/huoyuan'">发布货源</a></span>
              </p>
              <p>让承运商主动联系我</p>
            </div>
           
          </div>
          <div 
            id="js006" 
            class="w1130">
            <div class="zx_sx"><span class="biaozhi"/><span >优质承运商推荐</span></div>
            <div class="list_box">
              <ul class="ul_list">
                <li 
                  v-for="(item,index) in excellent" 
                  :key="index"
                 
                >
                  <a 
                    style="width:100%;float:left"
                    :href="'/member/'+item.id">
                    <h4 :title="item.companyName">{{ item.companyName }}</h4>
                    <p>
                      <span 
                        v-for="(i,n) in item.allServiceNameList.slice(0,2)" 
                        :key="n">{{ i }}</span>
                    </p>
                </a></li>
              </ul>
            </div>
            <div class="zx_sx"><span class="biaozhi"/><span >{{ vo.startCity }}出发热门专线</span><div class="more floatr"><a 
              :href="'/zhuanxian/list?startp='+ vo.startProvince+'&startc='+vo.startCity" 
              target="_blank">更多&gt;</a></div></div>
            <div 
              class="list_none" 
              v-if="hotLine.length === 0"
            >
              <span>暂时没有找到您要查询的信息，可以看看其他信息哦</span>
              <img src="/images/none_pic.png">
            </div>
            <div class="list_box">
              <ul class="ul_host">
                <li 
                  v-for="(item,index) in hotLine" 
                  :key="index">
                  <a 
                    style="width:100%;float:Left"
                    :href="'/zhuanxian/detail?id='+ item.id+'&publishId='+item.publishId"
                    target="_blank">
                    <p :title="item.companyName">物流商：{{ item.companyName.substring(0,4) }}
                      <span v-if="item.showcreadimg">
                        <img
                          v-for="(i,index1) in item.creditImg"
                          :key="index1"
                          class="xy_zuan"
                          src="/gongsi/images/34huanguan.gif"
                          style="display: inline">
                      </span>
                      <span v-if="item.showcreadeng">
                        <img
                          v-for="(i,index2) in item.creditdeng"
                          :key="index2"
                          class="xy_zuan"
                          src="/gongsi/images/blue.gif"
                          style="display: inline">
                      </span>
                    </p>
                    <p>
                      <strong>{{ item.startCity }}</strong>--发往--<strong>{{ item.endCity }}</strong>
                    </p>
                    <p style="font-size:12px;">重货：<span class="num_color">{{ item.weightPrice }}</span><s>{{ item.weightDiscountPrice }}</s>元/公斤</p>
                    <p style="font-size:12px;">轻货：<span class="num_color">{{ item.lightPrice }}</span><s>{{ item.lightDiscountPrice }}</s>元/公斤</p>
                    <p>已有<span class="num_color">{{ item.orderNumber }}</span>人下单</p>
                  </a>
                  <div class="titles">
                    <span v-if="item.hotRangeShowTag === '1'">担保交易</span>
                    <span v-if="item.hotRangeShowTag === '2'">28信用</span>
                    <span v-if="item.hotRangeShowTag === '3'">实名认证</span>
                    <span v-if="item.hotRangeShowTag === '4'">热门专线</span>
                    <span class="child2">
                      <a v-if="item.hotRangeShowTag === '1'">时效保障</a>
                      <a v-if="item.hotRangeShowTag === '2'">平台推荐</a>
                      <a v-if="item.hotRangeShowTag === '3'">资质保障</a>
                      <a v-if="item.hotRangeShowTag === '4'">HOT</a>
                      <a>{{ item.goodEvaCount }}人说好</a>
                    </span>
                    <span><a
                      style="color: #db4c26;"
                      target="_blank"
                      :href="'/create/order?startProvince='+ item.startProvince+'&startCity='+item.startCity+'&startArea='+item.startArea+'&endProvince='+item.endProvince+'&endCity='+item.endCity+'&endArea='+item.endArea">立即下单</a></span>
                  </div>
                </li>
              </ul>
            </div>
            <!-- 28快运为您推荐start -->
            <div class="hot-city-layer main-width">
              <div class="hot-city-unit hot_box ">
                <h3 class="news-unit-title">{{ recommendBy28Label }}</h3>
                <ul class="hot-cities">
                  <li 
                    v-for="(item,index) in recommendBy28" 
                    :key="index" 
                    class="hot-cities-li" >
                    <a
                      target="_blank"
                      :title="item.title"
                      :href="item.targetLinks+'?startProvince='+ item.startProvince+'&startCity='+item.startCity+'&startArea='+item.startArea+'&endProvince='+item.endProvince+'&endCity='+item.endCity+'&endArea='+item.endArea+'&carSourceType='+item.carSourceType"
                      class="hot-cities-a">{{ item.title }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 其他推荐start -->
            <div class="hot-city-layer main-width">
              <div class="hot-city-unit hot_box ">
                <h3 class="news-unit-title">{{ otherRecommendLabel }}</h3>
                <ul class="hot-cities">
                  <li 
                    v-for="(item,index) in otherRecommend" 
                    :key="index" 
                    class="hot-cities-li" >
                    <a
                      target="_blank"
                      :title="item.title"
                      :href="item.targetLinks+'?startProvince='+ item.startProvince+'&startCity='+item.startCity+'&startArea='+item.startArea+'&endProvince='+item.endProvince+'&endCity='+item.endCity+'&endArea='+item.endArea+'&carSourceType='+item.carSourceType"
                      class="hot-cities-a">{{ item.title }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MUTUAL from '@/static/js/wzl-commonJs.js'
async function getListRangesAging($axios, currentPage, vo = {}) {
  let list, totalPage
  let parm = vo
  parm.currentPage = currentPage
  parm.pageSize = 20
  await $axios.post('/28-web/range/aging/list', parm).then(res => {
    if (res.data.status === 200) {
      list = res.data.data.list
      totalPage = res.data.data.totalPage
    }
  })
  return { list, totalPage, currentPage }
}
async function getHotLines($axios, currentPage, vo = {}) {
  let list
  let parm = vo
  parm.currentPage = currentPage
  parm.pageSize = 8
  await $axios.post('/28-web/range/hot/list', parm).then(res => {
    if (res.data.status === 200) {
      res.data.data.list.forEach(item => {
        MUTUAL.GETCREDITITEM(item)
      })
      list = res.data.data.list
    }
  })
  return { list }
}
export default {
  name: 'ShiXiao',
  head: {
    link: [{ rel: 'stylesheet', href: '/css/jquery.pagination.css' }],
    script: [
      { src: '/layer/layer.js' },
      { src: './js/city-picker.data.js' },
      { src: './js/city-picker.js' },
      { src: './js/jquery.pagination.min.js' }
    ]
  },
  data() {
    return {
      checkNotice: {
        startAddres: '',
        endAddres: '',
        select: '',
        phone: ''
      },
      phoneHolder: '请输入正确手机号',
      listRangesAging: [],
      showLinst: false,
      totalPage: 0,
      isBg: '0',
      currentPage: 1,
      recommendBy28: '',
      recommendBy28Label: '',
      otherRecommend: '',
      otherRecommendLabel: '',
      sortList: [{ id: 1, name: '综合排序' }, { id: 2, name: '运输时效' }],
      sortId: 1
    }
  },
  async asyncData({ $axios, app, query }) {
    let vo = {
      filterSign: 1,
      endArea: query.endArea ? query.endArea : '',
      endCity: query.endCity ? query.endCity : '',
      endProvince: query.endProvince ? query.endProvince : '',
      startArea: query.startArea ? query.startArea : '',
      startCity: query.startCity
        ? query.startCity
        : app.$cookies.get('currentAreaFullName'),
      startProvince: query.startProvince
        ? query.startProvince
        : app.$cookies.get('currentProvinceFullName')
    }
    let listRangesAgingData = await getListRangesAging($axios, 1, vo)
    let excellents = await $axios
      .get('/28-web/logisticsCompany/excellent?pageSize=8')
      .catch(err => {
        console.log(err)
      })
    let parhort = vo
    delete vo.filterSign
    let hotLines = await getHotLines($axios, 1, parhort)
    return {
      listRangesAging: listRangesAgingData.list ? listRangesAgingData.list : [],
      hotLine: hotLines.list ? hotLines.list : [],
      totalPage: listRangesAgingData.totalPage
        ? listRangesAgingData.totalPage
        : 0,
      currentPage: listRangesAgingData.currentPage,
      vo: vo,
      excellent: excellents.status === 200 ? excellents.data.data : []
    }
  },
  mounted() {
    $('#list_nav_a').html(
      this.vo.startCity +
        this.vo.startArea +
        ' 到 ' +
        this.vo.endCity +
        this.vo.endArea +
        ' 专线时效'
    )
    if (
      (!this.vo.startCity && !this.vo.startArea) ||
      (!this.vo.endCity && !this.vo.endArea)
    ) {
      $('#list_nav_a').html(
        this.vo.startCity +
          this.vo.startArea +
          '  ' +
          this.vo.endCity +
          this.vo.endArea +
          '专线时效'
      )
    }

    $('#carLineFrom input').citypicker({
      province: this.vo.startProvince,
      city: this.vo.startCity,
      district: this.vo.startArea
    })
    $('#carLineTo input').citypicker({
      province: this.vo.endProvince,
      city: this.vo.endCity,
      district: this.vo.endArea
    })

    $('.qiehuan').click(function() {
      $(this)
        .css('transition', '0.3s')
        .css('transform', 'rotate(180deg)')
      let list1 = [],
        list2 = []
      $('#carLineFrom .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      let startp = list1[0]
      let startc = list1[1]
      let starta = list1[2]
      $('#carLineTo .select-item').each(function(i, e) {
        list2.push($(this).text())
      })
      let endp = list2[0]
      let endc = list2[1]
      let enda = list2[2]
      $('#carLineFrom input').pickerReload({
        province: endp,
        city: endc,
        district: enda
      })
      $('#carLineTo input').pickerReload({
        province: startp,
        city: startc,
        district: starta
      })
    })
    let qiehuan = document.querySelector('.qiehuan')
    qiehuan.addEventListener(
      'transitionend',
      () => {
        console.log(1)
        $('.qiehuan')
          .css('transition', '')
          .css('transform', '')
      },
      false
    )
    this.footLink()
    // this.scrollmenue()
  },
  methods: {
    getShixiao(type) {
      switch (type) {
        case 'one':
          this.isBg = 'one'
          layer.msg('当前是时效查询页面')
          break
        case 'two':
          this.isBg = 'two'
          break
        case 'thirty':
          this.isBg = 'thirty'
          break
        case 'four':
          this.isBg = 'four'
        default:
          break
      }
    },
    scrollmenue() {
      var _nav = $('.shixiao_left')
      //滚动条事件
      window.onscroll = function() {
        //滚动条滚动的高度
        let _height = $(document).scrollTop()
        if (_height >= 500) {
          _nav.css({ position: 'fixed', top: '0' })
        } else {
          _nav.css({ position: 'relative' })
        }
      }
    },
    sendNotice() {
      this.sendNot()
      let obj = {
        startProvince: this.startProvince,
        startCity: this.startCity,
        startArea: this.startArea,
        endProvince: this.endProvince,
        endCity: this.endCity,
        endArea: this.endArea
      }
      if (this.checkNotice.startAddres === '') {
        $('#form0').css('border-color', 'red')
      } else if (this.checkNotice.startAddres != '') {
        $('#form0').css('border-color', '#e5e5e5')
      }
      if (this.checkNotice.endAddres === '') {
        $('#form1').css('border-color', 'red')
      } else if (this.checkNotice.endAddres != '') {
        $('#form1').css('border-color', '#e5e5e5')
      }
      if (this.checkNotice.select === '') {
        $('#form2').css('border-color', 'red')
      } else {
        $('#form2').css('border-color', '#e5e5e5')
        obj.memo = this.checkNotice.select
      }
      if (this.checkNotice.phone === '') {
        $('.ltl-phone').css('border-color', 'red')
        this.phoneHolder = '请输入正确手机号'
      } else {
        if (MUTUAL.AFLCVALUE.MOBILE.test(this.checkNotice.phone)) {
          $('.ltl-phone').css('border-color', '#e5e5e5')
          obj.msgMobile = this.checkNotice.phone
        } else {
          $('.ltl-phone').css('border-color', 'red')
          this.checkNotice.phone = ''
          this.phoneHolder = '请输入正确手机号'
        }
      }
      if (
        this.checkNotice.startAddres != '' &&
        this.checkNotice.endAddres != '' &&
        this.checkNotice.select != '' &&
        this.checkNotice.phone != ''
      ) {
        this.$axios
          .post('/28-web/helpFind/range/create', obj)
          .then(res => {
            if (res.data.status === 200) {
              layer.msg('提交成功，客服稍后将会与您联系')
              this.reset()
            } else {
              layer.msg(res.data.errorInfo)
            }
          })
          .catch(err => {
            layer.msg(res.data.errorInfo)
          })
      } else {
        return
      }
    },
    reset() {
      setTimeout(function() {
        window.location.reload()
      }, 3000)
    },
    sendNot() {
      let startAds = [],
        endAds = []
      $('#form0 .select-item').each(function(i, e) {
        startAds.push($(this).text())
      })
      this.startProvince = startAds[0] ? startAds[0] : ''
      this.startCity = startAds[1] ? startAds[1] : ''
      this.startArea = startAds[2] ? startAds[2] : ''
      this.checkNotice.startAddres =
        this.startProvince + this.startCity + this.startArea
      $('#form1 .select-item').each(function(i, e) {
        endAds.push($(this).text())
      })
      this.endProvince = endAds[0] ? endAds[0] : ''
      this.endCity = endAds[1] ? endAds[1] : ''
      this.endArea = endAds[2] ? endAds[2] : ''
      this.checkNotice.endAddres =
        this.endProvince + this.endCity + this.endArea
    },
    async selectSort(item) {
      this.sortId = item.id
      let vo = this.vo
      vo.filterSign = this.sortId
      let obj = await getListRangesAging(this.$axios, this.currentPage, vo)
      this.listRangesAging = obj.list
    },
    async search() {
      this.showLinst = true
      this.getSearchForm()
      this.footLink()
      let vos = this.vo
      let obj = await getListRangesAging(this.$axios, 1, vos)
      if (obj.list) {
        this.listRangesAging = obj.list
      } else {
        this.listRangesAging = []
      }
      let parhort = this.vo
      delete this.vo.filterSign
      let hotLines = await getHotLines(this.$axios, 1, parhort)
      if (hotLines.list) {
        this.hotLine = hotLines.list
      } else {
        this.hotLines = []
      }
    },
    getSearchForm() {
      let list1 = [],
        list2 = []
      $('#carLineFrom .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      this.vo.startProvince = list1[0] ? list1[0] : ''
      this.vo.startCity = list1[1] ? list1[1] : ''
      this.vo.startArea = list1[2] ? list1[2] : ''
      $('#carLineTo .select-item').each(function(i, e) {
        list2.push($(this).text())
      })
      this.vo.endProvince = list2[0] ? list2[0] : ''
      this.vo.endCity = list2[1] ? list2[1] : ''
      this.vo.endArea = list2[2] ? list2[2] : ''
    },
    footLink() {
      this.getSearchForm()
      let serchForm = this.vo
      delete this.vo.currentPage
      delete this.vo.pageSize
      delete this.vo.filterSign
      this.$axios
        .post('/28-web/range/aging/list/related/links', serchForm)
        .then(res => {
          if (res.data.status === 200) {
            res.data.data.recommendBy28.links.forEach(item => {
              MUTUAL.HREFLINKS(item)
            })
            Object.assign({}, this.recommendBy28)
            res.data.data.otherRecommend.links.forEach(item => {
              MUTUAL.HREFLINKS(item)
            })
            Object.assign({}, this.otherRecommend)
            ;(this.recommendBy28 = res.data.data.recommendBy28.links),
              (this.recommendBy28Label = res.data.data.recommendBy28.label),
              (this.otherRecommend = res.data.data.otherRecommend.links),
              (this.otherRecommendLabel = res.data.data.otherRecommend.label)
          }
        })
        .catch(err => {})
    }
  }
}
</script>
<style scoped>
/*物流专线 S */
body {
  background-color: #f9f9f9;
}
img {
  vertical-align: middle;
}
.shixiao_box {
  width: 1400px;
  height: auto !important;
  margin: 0 auto;
  overflow: hidden;
}
.shixiao_banner {
  position: relative;
}
.shixiao_banner img {
  width: 100%;
  margin-bottom: 20px;
}
.baner_btn {
  position: absolute;
  width: 12%;
  height: 50px;
  left: 35%;
  bottom: 25%;
}
.shixiao_fabu {
  float: left;
  background: #fff;
  width: 100%;
  text-align: center;
}
.shixiao_fabu p {
  font-size: 14px;
}
.fabu_btn {
  width: 168px;
  height: 56px;
  line-height: 56px;
  color: #2577e3;
  font-size: 16px;
  border-radius: 3px;
  border: solid 1px #3f94ee;
  display: block;
  margin: 10px 492px;
  cursor: pointer;
  background: url(/images/wzlImg/15dw.png) no-repeat 20px;
}
.list_ul_one {
  background: url(/images/wzlImg/06sjx.png) no-repeat 166px 17px;
}
.list_ul_one a {
  color: #3f94ee;
}
.list_line {
  float: left;
}
.fix_box {
  width: 240px;
  height: 1500px;
  float: left;
}
.shixiao_left {
  float: left;
  width: 220px;
  background: #ffffff;
  margin-right: 20px;
  border: solid 1px #3f94ee;
  box-sizing: border-box;
}
.left_top {
  /* float: left; */
}
.left_top_ul {
  text-align: center;
}
.left_top_ul li {
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  padding: 12px 0;
  color: #333333;
  cursor: pointer;
}
.shixiao_right {
  float: left;
  width: 1160px;
}
.list_box {
  float: left;
  width: 100%;
  background: #fff;
}
.ul_list {
  float: left;
  margin: 23px;
}
.ul_list li {
  cursor: pointer;
}
.num_color {
  color: #e02121;
  margin: 0 10px;
  font-weight: bold;
}
.ul_list li {
  text-align: center;
  width: 260px;
  box-sizing: border-box;
  float: left;
  background: url('/images/wzlImg/05bg.png');
  overflow: hidden;
  /* padding: 19px 45px; */
  padding: 19px 0;
  margin: 9px;
  box-sizing: border-box;
}
.ul_list li p {
  /* display: flex; */
}
.ul_list li h4 {
  font-size: 18px;
  height: 30px;
  line-height: 30px;
  color: #2577e3;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ul_list li span {
  height: 30px;
  line-height: 30px;
  /* flex: 1; */
  margin: 8px;
}
.ul_host {
  width: 100%;
  float: left;
  margin: 20px;
}
.ul_host li {
  width: 260px;
  background-color: #eef8ff;
  position: relative;
  padding-bottom: 40px;
  margin: 10px;
  float: left;
}
.ul_host li:hover {
  box-shadow: 10px 10px 5px #888888;
}
.ul_list li:hover {
  background: #f7f9fb;
  filter: alpha(opacity=80);
  -moz-opacity: 0.8;
  -khtml-opacity: 0.8;
  opacity: 0.8;
  box-shadow: 10px 10px 5px #888888;
}
.ul_host li .titles {
  bottom: 0%;
  left: 0%;
  position: absolute;
  /* background: #2e2e2e; */
  color: #fff;
  height: 40px;
  line-height: 40px;
  width: 100%;
  /* padding: 5px 0 5px 1%; */
  text-align: left;
  /* filter: alpha(opacity=80); */
  /* -moz-opacity: 0.8; */
  /* -khtml-opacity: 0.8; */
  /* opacity: 0.8; */
  display: flex;
}
.ul_host li .titles span {
  flex: 1;
  height: 100%;
  text-align: center;
  cursor: pointer;
}
.ul_host li .titles span:nth-child(1) {
  background-color: #68b9ee;
  color: #ffffff;
  font-size: 20px;
}
.ul_host li .titles span:nth-child(2) {
  background-color: #68b9ee;
  color: #ffffff;
  display: flex;
  flex-direction: column;
}
.ul_host li .titles .child2 a {
  flex: 1;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  color: #fff;
}
.ul_host li .titles .child2 a:nth-child(1) {
  background-color: #feb323;
  border-radius: 2px;
  font-size: 12px;
  width: 60px;
  color: #ffffff;
  margin: 3px 0 3px 10px;
}
.ul_host li .titles span:nth-child(3) {
  background-color: #ffed20;
  color: #db4c26;
}
.ul_host li p {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  margin-left: 20px;
  color: #666666;
}
.ul_host li h4 {
  font-size: 18px;
  margin-left: 20px;
  cursor: pointer;
}
.main-width {
  width: 1173px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}
.hot-city-unit {
  box-sizing: border-box;
  background: #fff;
  padding: 10px;
}
.news-unit-title:after {
  position: absolute;
  content: '';
  height: 15px;
  width: 3px;
  left: 0;
  top: 8px;
  background: #3f94ee;
}
.news-unit-title {
  position: relative;
  height: 32px;
  line-height: 32px;
  padding-left: 15px;
  color: #2577e3;
  border-bottom: 2px solid #2577e3;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
}
.line-city-box {
  max-width: 1036px;
  float: left;
}
.line-title {
  color: #3f94ee;
  border-bottom: 2px solid #3f94ee;
}
.hot-cities-li {
  display: inline-block;
  padding: 10px;
}
.hot-cities-a {
  display: block;
  font-size: 14px;
  width: 140px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

/*时效end*/
.list_nav {
  height: 52px;
  line-height: 52px;
  float: left;
  font-size: 14px;
  color: #666666;
  font-weight: normal;
}
.zx_sx {
  overflow: hidden;
  line-height: 50px;
  height: 50px;
  color: #585858;
  font-size: 18px;
  font-weight: bold;
  background-color: #fff;
  border-bottom: 2px solid #2577e3;
  float: left;
  width: 100%;
}
.zx_sx span {
  float: left;
  display: block;
  color: #2577e3;
}
.zx_sx .biaozhi {
  width: 3px;
  height: 18px;
  background-color: #2577e3;
  border-radius: 1px;
  margin: 16px 12px 0 10px;
}

.list_left {
  width: 100%;
  float: right;
}
.w1130 {
  width: 100%;
  float: left;
  min-height: 400px;
}
.search:hover {
  opacity: 0.8;
}
#nr_a521:hover {
  opacity: 0.8;
}
#nr_a522:hover {
  background: #2577e3;
  color: #fff;
}
#nr_a522:hover a {
  color: #fff;
}
.tywlist {
  width: 1130px;
}
.tyxboxWrap {
  float: left;
  width: 100%;
  position: relative;
}
.list_right {
  min-height: 200px;
  height: auto !important;
  width: 260px;
  padding: 0px 0px 0 10px;
  float: left;
}

.list_hy_page2 {
  width: 1400px;
}
.w260 {
  width: 260px;
}
.tylist {
  width: 240px;
}
.select_con {
  width: 1128px;
  border-color: #e2e2e2;
}
.select_con dl dt {
  font-size: 13px;
  height: 39px;
  line-height: 39px;
  padding: 3px 0 0 20px;
}

.list_input {
  width: 161px;
  height: 32px;
  border-radius: 2px;
  border: solid 1px #e5e5e5;
  background: none;
  color: #999;
  font-size: 14px;
  padding-left: 9px;
}
.list_button {
  width: 72px;
  height: 28px;
  border-radius: 2px;
  border: solid 1px #eb434d;
  background-color: #fff;
  color: #eb434d;
  font-size: 15px;
  background: no-repeat url(/images/01search.png) 45px 6px;
  text-align: left;
  margin-left: 8px;
  cursor: pointer;
}
#flush {
  background: no-repeat url(/images/flush.png) 10px 6px;
  padding-left: 30px;
  width: 50px;
  border: solid 1px #e3e3e3;
  color: #999;
  margin-left: 30px;
}

.list_img {
  position: relative;
  top: 3px;
  left: 5px;
  margin-right: 5px;
}
.select_con dl dd a:hover,
.select_con dl dd a.now {
  background: #eb434d;
  color: #fff;
}
.ck_input {
  width: 14px;
  height: 14px;
  border: solid 1px #ccc;
  position: relative;
  top: -2px;
  right: 3px;
  cursor: pointer;
}
.list_tiaoj {
  width: 100%;
  height: 39px;
  background-color: #f1f1f1;
  position: relative;
  float: left;
}
.list_tiaoj span {
  display: block;
  text-align: center;
  line-height: 39px;
  float: left;
  width: 94px;
  height: 39px;
  cursor: pointer;
  font-size: 13px;
}
.list_tiaoj .active {
  background-color: #ffffff;
  color: #eb434d;
}
#tj_price {
  width: 140px;
  height: 100px;
  position: absolute;
  left: 300px;
  top: 40px;
  margin-left: 0px;
  display: none;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  padding-top: 15px;
}
#tj_price1,
#tj_price2 {
  color: #ff6633;
  width: 140px;
  padding-bottom: 5px;
}
#tj_price1:hover,
#tj_price2:hover {
  color: #f00;
}

.cy_list_12 {
  width: 484px;
  padding-left: 20px;
}
.cy_list_12 p {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
.cy_list_12 .p1 {
  color: #333333;
  font-size: 18px;
}
.wzl_box {
  float: left;
  width: 100%;
  border-bottom: 1px solid #ddd;
}
.wlzx_list1 {
  width: 100%;
  padding-top: 20px;
  /* margin-top: -1px; */
  background-color: #fff;
  float: left;
  transition: all 0.4s;
}
.wlzx_list1:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}
.cy_list_1 img {
  vertical-align: middle;
  float: left;
  margin-top: 6px;
}
.wlzx_list1 li {
  /* height: 140px; */
  float: left;
  /* overflow: hidden;	 */
}
.cy_list_1 .wlzx_list1 img {
  transition: 0.7s;
}
.wlzx_list1 img:hover {
  transform: scale(1.05);
}

.wlzx_list_2 p {
  height: 26px;
  line-height: 26px;
}
.wlzx_list_2 .p1 {
  margin-bottom: 3px;
}
.wlzx_list_2 .p1 a {
  color: #333333;
  font-size: 16px;
  font-weight: normal;
}
.wlzx_list_2 .p1 font {
  color: #666666;
  font-size: 12px;
  padding-left: 5px;
}
.wlzx_list_2 .p2 font {
  color: #2577e3;
  font-size: 13px;
  padding-left: 5px;
}
.wlzx_list_2 .p3 font,
.wlzx_list_2 .p4 font {
  color: #333;
  font-size: 13px;
}
.wlzx_list_2 .p3 i,
.wlzx_list_2 .p4 i {
  color: #666;
  font-size: 13px;
  padding-left: 5px;
}

.wlzx_list_3 p {
  height: 27px;
  line-height: 27px;
  font-size: 13px;
}
.wlzx_list_3 p i {
  color: #999;
}
.wlzx_list_3 p font {
  color: #fb5000;
}
.wlzx_list_3 p span {
  color: #333;
}
.wlzx_list_4 p {
  height: 27px;
  line-height: 27px;
  font-size: 13px;
}
.wlzx_list_4 img {
  margin-top: 5px;
}
.wlzx_list_5 p {
  height: 27px;
  line-height: 27px;
  font-size: 12px;
}
.wlzx_list_5 p i {
  color: #999;
}
.wlzx_list_6 {
  width: 220px;
  margin-left: 30px;
}
.wlzx_list_6 p input {
  display: block;
  width: 102px;
  height: 26px;
  line-height: 26px;
  border-radius: 3px;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  border: solid 1px #dedede;
}
.wlzx_list_6 p {
  float: left;
}
.wlzx_list_6 .p1 {
  margin-bottom: 30px;
}
.wlzx_list_6 .p2 {
  margin-left: 40px;
  margin-bottom: 20px;
}
.wlzx_list_6 .p1 input {
  background-color: #eb434d;
  color: #fff;
  border: 0px;
  height: 28px;
}
.wlzx_list_6 .p1 input:hover {
  background-color: #ff0000;
}

.wlzx_list_6 .p3 input {
  background: no-repeat url(/images/article_wlzx/15qq.gif) 12px 3px;

  padding-left: 15px;
  width: 87px;
}
.tj_list {
  background-color: #fff;
  margin-top: -1px;
  border: 1px solid #dedede;
  width: 258px;
  font-size: 14px;
}
.tj_list:hover {
  background-color: #f9f9f9;
}
.tj_list p {
  height: 28px;
  line-height: 28px;
  padding-left: 10px;
  padding-right: 0px;
}

.tj_list .p1 {
  height: 50px;
  line-height: 50px;
}
.tj_list .p1 span {
  font-size: 16px;
  color: #666;
}
.tj_list .p1 i {
  color: #c5c5c5;
  font-size: 16px;
  padding: 0 3px 0 3px;
}
.tj_list .p2 span {
  padding: 0 0 0 5px;
}

.tj_list .p3 i,
.tj_list .p3 em,
.tj_list .p4 i {
  font-size: 13px;
  color: #999;
}
.tj_list .p3 font,
.tj_list .p4 font {
  font-size: 13px;
  color: #eb434d;
}
.tj_list .p3 span,
.tj_list .p3 font,
.tj_list .p4 span {
  font-size: 13px;
  color: #666;
}
.tj_list .p3 i {
  float: left;
  width: 65px;
  height: 28px;
}
.tj_list .p3 em {
  float: left;
  width: 45px;
  height: 28px;
}
.tj_list .p3 span {
  float: left;
  width: 50px;
  height: 28px;
}
.tj_list .p3 font {
  float: left;
  width: 60px;
  height: 28px;
}
.tj_list .p5 img {
  margin-top: 5px;
  margin-bottom: 10px;
  margin-right: 8px;
}
.tj_list img {
  transition: 0.7s;
}
.tj_list img:hover {
  transform: scale(1.05);
}
.tj_list .p6 {
  border-top: solid 1px #cde0ff;
  text-align: center;
}
.tj_list .p6 span {
  color: #2577e3;
  font-size: 13px;
}
/*物流专线 E */

/*时效查询 S */
.cy_list_1 {
  width: 525px;
  margin-left: 20px;
}
.cy_list_2 {
  width: 200px;
  margin-left: 20px;
  margin-top: 50px;
}
.cy_list_3 {
  width: 100px;
  margin-left: 40px;
}
.cy_list_4 {
  width: 100px;
  margin-left: 50px;
}

.cy_list_5 {
  width: 100px;
  margin-left: 100px;
}

.cy_list_7 {
  width: 160px;
  margin-left: 20px;
  margin-top: 66px;
}
.cy_list_1 .p1 {
  margin-bottom: 3px;
  font-size: 16px;
}
.cy_list_1 .p1 a span {
  color: #333333;
  font-size: 16px;
  font-weight: bold;
}
.cy_list_1 .p1:hover a span {
  color: #ff5833;
  cursor: pointer;
}
.cy_list_1 p {
  height: 26px;
  line-height: 26px;
  font-size: 14px;
}
.cy_list_1 p a {
  color: #eb434d;
  font-size: 16px;
}
.cy_list_1 p i {
  font-size: 13px;
  color: #666;
  float: left;
}
.cy_list_1 .p4 font {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 30px;
  width: 220px;
  display: block;
  float: left;
}

.cy_list_1 p span {
  font-size: 14px;
  color: #666;
  padding: 0 2px 0 2px;
}
.cy_list_1 p font {
  font-size: 14px;
  color: #333;
}

.cy_list_2 p {
  height: 27px;
  line-height: 27px;
  font-size: 14px;
}

.cy_list_2 p span {
  color: #fb5000 !important;
  font-size: 14px;
}
.cy_list_2 p i {
  font-size: 14px;
}
.cy_list_4 p {
  height: 26px;
  margin: 0 0 5px 0;
}
.cy_list_7 p {
  color: #fb5000;
  font-size: 14px;
}
.wlzx_list_6 .p2 input {
  background-color: #eb434d;
  color: #fff;
  border: 0;
}
.cy_list_1 .p1 {
  margin-bottom: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cy_list_1 p {
  height: 26px;
  line-height: 26px;
}
.cy_list_1 p a {
  color: #eb434d;
  font-size: 16px;
}
.cy_list_1 p i {
  font-size: 13px;
  color: #666;
}
.cy_list_1 p span {
  color: #eb434d;
  font-size: 13px;
}
.cy_list_1 p font {
  font-size: 13px;
  color: #333;
}

.cy_list_2 p {
  height: 27px;
  line-height: 27px;
}

.cy_list_2 p span {
  color: #666;
  font-size: 13px;
}
.cy_list_2 p i {
  font-size: 13px;
}
.cy_list_2 p font {
  color: #333;
}
.cy_list_3 p {
  height: 27px;
  line-height: 27px;
}
.wlzx_list_6 .p2 .check_btn {
  width: 104px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  display: block;
  border-radius: 3px;
  border: solid 1px #8dadd8;
  color: #2577e3;
}
.check_btn:active {
  opacity: 0.5;
}
#wlzx_list_view:hover {
  background-color: #f1f1f1;
}
#wlzx_list_view {
  border: solid 1px #dedede;
  background-color: #f9f9f9;
  font-size: 13px;
  color: #333;
}
/*货源信息 E */

.list_none {
  /* display: none; */
  float: left;
  width: 100%;
}
.list_none span {
  float: left;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  margin-top: 40px;
}
.list_none img {
  float: left;
  width: 300px;
  height: 160px;
  margin: 20px 0 20px 400px;
}

.tj_none {
  display: none;
  background-color: #fff;
  width: 100%;
  height: 220px;
}
.tj_none span {
  float: left;
  width: 100%;
  text-align: center;
  height: 100px;
  line-height: 100px;
  font-size: 14px;
  margin-top: 0px;
}
.hy_tj_none {
  height: 186px;
}
.cy_tj_none {
  height: 290px;
}

/* 出发地到达地 */
.list_search {
  float: left;
}
.order-form-item {
  float: left;
  margin-left: 50px;
}
.order-form-item:first-child .order-form-label {
  padding-left: 10px;
}
.order-form-label,
.order-form-input {
  float: left;
  line-height: 40px;
  position: relative;
}
.order-form-label {
  text-align: right;
}
.shixiao-input {
  width: 340px;
  height: 45px;
  border-radius: 2px;
  border: solid 1px #d2d2d2;
  padding-left: 20px;
}
.order-line-from {
  background: #fff;
  padding: 20px 0px;
  float: left;
  width: 100%;
}
.order-line-from .qd {
  position: absolute;
  right: 13px;
  top: 7px;
}
.boxx {
  float: left;
}
.nr056 {
  width: 190px;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.order-line-from .wzl {
  position: absolute;
  right: 13px;
  top: 7px;
}
.search {
  display: block;
  width: 100px;
  height: 47px;
  line-height: 47px;
  background-image: linear-gradient(#79b3ff, #79b3ff),
    linear-gradient(#2577e3, #2577e3);
  background-blend-mode: normal, normal;
  border-radius: 3px;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
.cy_list_1 .bgr {
  float: left;
}
.cy_list_1 .p1 span {
  float: left;
}
.cy_list_1 #startLocation,
#endLocation {
  width: 114px;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
/* 为您推荐下面的列表 */
.numlll {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  margin: -2px 5px;
  vertical-align: middle;
}
.wzl_log span {
  display: block;
  width: 128px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  background: url(/images/wzlImg/bule.png) no-repeat;
}
.wzl_log .bgr {
  display: block;
  width: 128px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  background: url(/images/wzlImg/red.png) no-repeat;
}
.qiehuan {
  cursor: pointer;
}
.rotate {
  cursor: pointer;
  transition-duration: 1s;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -webkit-transform: rotate(180deg); /* Safari and Chrome */
  -o-transform: rotate(180deg); /* Opera */
  -moz-transform: rotate(180deg); /* Firefox */
}
.list_kehu {
  float: left;
  width: 100%;
}
.list_help {
  width: 100%;
  box-sizing: border-box;
  float: left;
  margin-top: 20px;
}
.list_help_title {
  text-align: center;
  line-height: 40px;
  height: 40px;
  background: #3f94ee;
  color: #fff;
}
.list_ewm {
  float: left;
  width: 100%;
}
.imgbox {
  text-align: center;
  margin: 10px;
}
.order_content {
  padding: 10px;
}
.list-box-r-top {
  width: 100%;
  float: left;
  box-sizing: border-box;
  padding: 0px 12px;
}
.ltl-input0 {
  position: relative;
  margin: 7px 0 10px 0;
  width: 100%;
  height: 32px;
  border-radius: 2px;
  border: solid 1px #e5e5e5;
  background: white;
  font-size: 14px;
  line-height: 32px;
}
.ltl-select {
  appearance: none;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  border: none;
  outline: none;
}
.ltl-select option {
  color: #333333;
}
.ltl-input {
  position: relative;
  margin: 7px 0 10px 0;
  float: left;
}
.right-top-btn {
  display: block;
  height: 40px;
  width: 300px;
  background: #3f94ee;
  border: 0;
  outline: 0;
  border-radius: 4px;
  margin-top: 20px;
  color: #fff;
  cursor: pointer;
}
.ltl-ico-start {
  background-position: 0px 8px;
}
.ltl-icons {
  position: absolute;
  width: 24px;
  height: 24px;
  /* right: 5px; */
  top: 8px;
}
.ss56-common-sprite1 {
  background-image: url(/images/list_wlzx/select_icon.png);
  background-repeat: no-repeat;
}
.ltl-ico-end {
  background-position: 0px 8px;
}
.ltl-icons {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 5px;
  top: 8px;
}
.ss56-common-sprite2 {
  background-image: url(/images/list_wlzx/select_icon.png);
  background-repeat: no-repeat;
}
.ltl-location {
  width: 100%;
  border: 1px solid #ccc;
  height: 35px;
  line-height: 35px;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 50px;
  outline: 0;
}
.ltl-phone {
  width: 119px;
  border: 1px solid #ccc;
  height: 35px;
  line-height: 35px;
  box-sizing: border-box;
  padding-left: 8px;
  outline: 0;
  float: left;
}
.ltl-button {
  display: block;
  width: 75px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  box-sizing: border-box;
  background-color: #3f94ee;
  color: #fff;
  border: 1px solid #3f94ee;
  cursor: pointer;
  float: left;
}
.lines-sprite-icons {
  background: url(/images/list_wlzx/ss56-lines-sprite.png) no-repeat;
}
.list-title-a {
  color: #333;
  font-size: 16px;
}
.list-title {
  font-weight: 300;
  font-size: 18px;
  color: #333;
}
.icon-through {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-position: -6px -62px;
  position: relative;
  top: 3px;
  margin: 0 10px;
}
.icon-end {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-position: -6px -6px;
  position: relative;
  top: 2px;
  margin-right: 3px;
}
.icon-start {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-position: -6px -34px;
  position: relative;
  top: 2px;
  margin-right: 3px;
}
.lines-sprite-icons {
  background: url(../../static/images/list_wlzx/ss56-lines-sprite.png) no-repeat;
}
.list-title-a {
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
}
.list-title {
  font-weight: 300;
  font-size: 18px;
  color: #333;
}
.icon-through {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-position: -6px -62px;
  position: relative;
  top: 3px;
  margin: 0 10px;
}
.icon-end {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-position: -6px -6px;
  position: relative;
  top: 2px;
  margin-right: 3px;
}
.icon-start {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-position: -6px -34px;
  position: relative;
  top: 2px;
  margin-right: 3px;
}
</style>
