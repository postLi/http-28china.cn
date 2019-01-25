<template>
  <div>
    <div class="list_box">
      <div class="list_nav">
        <a href="/">物流首页</a>&gt;<a
          id="list_nav_a"
          href="">车源信息</a>
      </div>
      <div class="list_left" >
        <div
          class="w1036"
          style=" background-color: #fff;border:1px solid #eeeeee;">
          <div class="zx_sx"><span class="biaozhi"/><span>车源筛选</span>
            <a
              class="toggle-btn show-collapse"
              href="#">
              <span class="expand">
                <span>显示筛选</span><span class="arrow icon-btn-arrow-down-2"/>
              </span>
              <span class="collapse">
                <span>收起筛选</span><span class="arrow icon-btn-arrow-up-2"/>
              </span>
            </a>
          </div>
          <div class="select_con">
            <dl>
              <dt>车源线路&nbsp;：</dt>
              <dd><form
                name="zxaddform"
                method="post"
                action="" >
                <input
                  name="a7"
                  type="hidden"
                  value="0">
                <input
                  type="hidden"
                  name="mid"
                  value="19" >
                <input
                  type="hidden"
                  name="dopost"
                  value="search" >
                <div
                  id="carLineFrom"
                  class="fl list_input"
                  style="position:relative;" >
                  <input
                    name="cfd"
                    style="height: 100%;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    placeholder="请输入出发地" >
                </div>
                <img
                  class="fl list_img"
                  src="../../static/images/02jiantou.png">
                <div
                  id="carLineTo"
                  class="fl list_input"
                  style="position:relative" >
                  <input
                    name="ddd"
                    style="height: 100%;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    placeholder="请输入到达地" >
                </div>
                <input
                  id="search_cheyuan"
                  readonly
                  name="Submit2"
                  value=" 搜索 "
                  class="list_button">
                <input
                  id="flush"
                  name="Submit2"
                  readonly
                  value="重置 "
                  class="list_button">
              </form>
              </dd>

              <dt>车辆类型&nbsp;:</dt>
              <dd id="tjcx_01">
                <a
                  class="now all"
                  href="/cheyuan" >不限</a>
              </dd>

              <dt >车源类型&nbsp;:</dt>
              <dd id="tjcx_02">
                <a
                  class="now all"
                  href="/cheyuan" >不限</a>
                <a
                  class=""
                  href="/cheyuan" >本地车</a>
                <a
                  class=""
                  href="/cheyuan" >回程车</a>
              </dd>

              <dt >即时/长期&nbsp;:</dt>
              <dd id="tjcx_03">
                <a
                  class="now all"
                  href="/cheyuan">不限</a>
                <a
                  class=""
                  href="/cheyuan" >即时车源</a>
                <a
                  class=""
                  href="/cheyuan">长期车源</a>
              </dd>

              <dt >车厢长度&nbsp;:</dt>
              <dd id="tjcx_04">
                <a
                  class="now all"
                  href="/cheyuan" >不限</a>

              </dd>

              <dt>载重（吨）&nbsp;:</dt>
              <dd id="tjcx_05">
                <a
                  class="now all"
                  href="/cheyuan" >不限</a>

              </dd>
            </dl>
          </div>
        </div>
        <div
          id="js006"
          class="w1036 list_cy">
          <div class="zx_sx"><span class="biaozhi"/><span>车源信息</span></div>
          <!--<div class="list_tiaoj"><span class="active">默认排序</span><span>交易量</span><span>运输时效</span><span>重货价格</span></div>-->

          <div 
            class="list_none" 
            style="display:none">
            <span>暂时没有找到您要查询的信息，可以看看其他车源哦</span>
            <img src="../../static/images/none_pic.png">
          </div>
          <ul
            class="wlzx_list"
            style="display: none;">
            <li id="cy_list_0">
              <div class="sc_num"><img src="../../static/images/list_wlzx/sc_num.png"><span><i><em id="nr0520"/>收藏量</i></span></div>
              <div class="view_num"><img src="/_nuxt/static/images/wzlImg/lll.png"><span><i><em id="nr0521"/>浏览量</i></span></div>
            </li>
            <li class="cy_list_4">
              <a
                id="nr_a54"
                href="#"
                target="_blank"><img id="car_pic" ></a>

            </li>
            <li class="cy_list_1">
              <p class="p1">
                <a
                  id="nr_a51"
                  class="list-title-a"
                  target="_blank" >
                  <span class="list-icon lines-sprite-icons icon-start"/>
                  <em id="nr_a51_1"/>
                  <span class="list-icon lines-sprite-icons icon-through"/>
                  <span class="list-icon lines-sprite-icons icon-end"/>
                  <em id="nr_a51_2"/>
                </a>

              </P>
              <p class="p2"><i>车辆：</i><font id="nr051"/><span style="color: #dcdcdc;">|</span><font id="nr052"/><span style="color: #dcdcdc;">|</span><font id="nr053"/><span style="color: #dcdcdc;">|</span><font id="nr054"/><span style="color: #dcdcdc;">|</span><font id="nr055"/></p>
              <p class="p3"><i>常驻地：</i><font id="nr056" />&nbsp;&nbsp;<i>运价：</i><font id="nr057"/>&nbsp;&nbsp;<i>发布者：</i><font id="nr059"/></p>
              <p class="p4"><i>说明：</i><font id="nr058"/></p>
            </li>
            <li class="cy_list_3">
              <p class="p1"><img
                id="list_shiming"
                src="../../static/images/list_wlzx/10shiming.png"></P>
                <!--<p class="p2"><img id="list_xinyong" src="../../static/images/list_wlzx/11xinyong.png"/></P>-->
            </li>



            <li class="wlzx_list_6">
              <p class="p2"><a
                id="nr_a52"
                target="_blank" ><input
                  readonly
                  value="查看"></a>
              </p>
              <p class="p3"><a
                id="nr_a53"
                target="_blank"
                href="http://wpa.qq.com/msgrd?v=3&uin=596803544&site=qq&menu=yes"><input
                  id="qq"
                  value="QQ交谈">
              </a></p>
            </li>
          </ul>


        </div>
        <!--分页-->
        <div
          class="box"
          style="float: right;margin-right: 150px;">
          <div
            id="pagination1"
            class="page fl"/>
          <div class="info fl">
            <!--<p>当前页数：<span id="current1">1</span></p>-->
          </div>
        </div>
        <!--分页-->

      </div>


      <!-- 最新车源start -->
      <!-- <div class="list_new">
        <div class="zx_sx"><span class="biaozhi"/><span>最新车源</span></div>
        <ul class="list_new_ul">
          <li>
            <div class="li_one">
              <a>广东省广州市->北京市</a>
              <span>2019-02-24 12:11:00</span>
            </div>
            <div class="li_two">
              <a><span>长2米</span>|<span>载重5吨</span>|<span>本地车</span></a>
              <span><a class="li_check">查看详情</a></span>
            </div>
          </li>
        </ul>
      </div> -->
     
      <!-- 最新车源end -->

      <div class="list_right">

        <div class="zx_sx"><span class="biaozhi"/><span>车源信息推荐</span></div>

        <div 
          v-if="recommendList.length === 0" 
          class="tj_none cy_tj_none" 
          style="display: block">
          <span>没有相关车源推荐</span>
        </div>

        <div class="che_box">
          <div 
            v-for="(item,index) in recommendList" 
            :key="index" 
            class="tj_list">
            <p class="p1">
              <a
                :href=" '/cheyuan/detail?id=' + item.id + '&driverId=' + item.driverId"
                class="list-title-a"
                target="_blank" >
                <span class="list-icon lines-sprite-icons icon-start"/>
                <em>{{ (item.startCity + item.startArea).length > 6 ? (item.startCity + item.startArea).substring(0, 6) + '..' : item.startCity + item.startArea }}</em>
                <span class="list-icon lines-sprite-icons icon-through"/>
                <span class="list-icon lines-sprite-icons icon-end"/>
                <em>{{ (item.endCity + item.endArea).length > 6 ? (item.endCity + item.endArea).substring(0, 6) + '..' : item.endCity + item.endArea }}</em>
              </a>

            </p>
            <div class="che_che">
              <p class="p3"><i>车辆载重：</i><span><b>{{ item.carLoad }}吨</b></span><em>车长：</em><font><b>{{ item.carLength }}米</b></font></p>
              <p class="p3">
                <i>车源类型：</i><span>{{ item.carSourceTypeName }}</span><em>车辆类型：</em><font>{{ item.carTypeName }}</font>
              </p>
              <p class="p4">
                <i>常驻地：&nbsp;&nbsp;&nbsp;</i><span>{{ item.usualPlace }}</span>
              </p>
            </div>
            
            <!-- <p class="p4">
              <i>发车时间：</i><span id="nr0518"/>
            </p> -->
            <div class="p5">
              <span v-if="item.driverStatus === 'AF0010403'">
                <span><img src="member/images/list_wlzx/wlgs_shiming.png" ></span>
                <span><img src="member/images/list_wlzx/wlgs_xinyong.png" ></span>
                <span><img src="member/images/list_wlzx/wlgs_danbao.png" ></span>
              </span>
              <span>{{ item.startTime }}</span>
            </div>
            <!-- <p class="p5">
              <img src="member/images/list_wlzx/wlgs_xinyong.png" >
            </p>
            <p class="p5">
              <img src="member/images/list_wlzx/wlgs_danbao.png" >
            </p> -->
            <!-- <div class="p6">
              <div class="sc_num1"><img src="member/images/list_wlzx/sc_num.png"><span><i><em id="tj101"/>人收藏</i></span></div>
              <div class="view_num1"><img src="member/images/list_wlzx/ll_num.png"><span><i><em id="tj102"/>浏览量</i></span></div>
            </div> -->
          </div>
         
        </div>
        
      </div>

      <!-- 帮我找优质运动start -->
      <!-- <div class="list_help">
        <div class="list-box-r-top">
          <form action="">
            <h2>帮我找优质运力</h2>
            <div class="ltl-input">
              <input 
                id="right-bar-form" 
                autocomplete="off" 
                wtmap="" 
                type="text" 
                class="ltl-location" 
                placeholder="请选择出发地">
              <i class="ltl-icons ss56-common-sprite1 ltl-ico-start"/>
            </div>
            <div class="ltl-input">
              <input 
                id="right-bar-to" 
                autocomplete="off" 
                wtmap="" 
                type="text" 
                class="ltl-location" 
                placeholder="请选择目到达地">
              <i class="ltl-icons ss56-common-sprite2 ltl-ico-end"/>
            </div>
            <div class="ltl-input">
              <input 
                id="right-bar-to" 
                autocomplete="off" 
                wtmap="" 
                type="text" 
                class="ltl-location" 
                placeholder="请选择">
              <i class="ltl-icons ss56-common-sprite2 ltl-ico-end"/>
            </div>
            <div class="ltl-input">
              <input 
                id="right-bar-phone" 
                autocomplete="off" 
                wtmap="" 
                type="text" 
                class="ltl-location" 
                placeholder="请选择">
              <i class="ltl-icons ss56-common-sprite2 ltl-ico-end"/>
            </div>
            <input 
              id="check-fee" 
              type="button" 
              value="查询零担运费" 
              class="right-top-btn">
          </form>

        </div>
      </div> -->
      
      <!-- 帮我找优质运动end -->
    </div>
    <div class="h70"/>
  </div>
</template>

<script>
import { test } from './index.js'
export default {
  name: 'CheYuan',
  head: {
    link: [{ rel: 'stylesheet', href: '/css/jquery.pagination.css' }],
    script: [
      { src: './js/city-picker.data.js' },
      { src: './js/city-picker.js' },
      { src: './js/jquery.pagination.min.js' }
    ]
  },
  data() {
    return {
      recommendList: [],
      dataset: []
    }
  },
  async asyncData({ $axios, app, query }) {
    // const currentProvinceFullName = encodeURIComponent(
    //   app.$cookies.get('currentProvinceFullName')
    // )
    // const currentAreaFullName = encodeURIComponent(
    //   app.$cookies.get('currentAreaFullName')
    // )
    // let getRecommendList = await $axios.get(
    //   '/28chinaservice/carInfo/recommendList?startProvince=' +
    //     currentProvinceFullName +
    //     '&startCity=' +
    //     currentAreaFullName
    // )
    let getRecommendList = await test($axios, app)
    console.log(getRecommendList)
    return {
      recommendList:
        getRecommendList.data.status === 200 ? getRecommendList.data.data : []
    }
  },
  mounted() {
    $('.collapse').click(function() {
      $('.collapse').css('display', 'none')
      $('.expand').css('display', 'inline-block')
      $('.select_con').css('display', 'none')
    })
    $('.expand').click(function() {
      $('.collapse').css('display', 'inline-block')
      $('.expand').css('display', 'none')
      $('.select_con').css('display', 'block')
    })

    //获取参数的值
    function GetQueryString(e) {
      var t = new RegExp('(^|&)' + e + '=([^&]*)(&|$)'),
        s = window.location.search.substr(1).match(t)
      return null != s ? unescape(s[2]) : null
    }
    function GetUrlParam(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      var r = encodeURI(window.location.search)
        .substr(1)
        .match(reg)
      if (r != null) return unescape(r[2])
      return null
    }
    //当前url追加参数 UrlUpdateParams(window.location.href, "mid", 11111)
    function UrlUpdateParams(url, name, value) {
      var r = url
      if (r != null && r != 'undefined' && r != '') {
        value = encodeURIComponent(value)
        var reg = new RegExp('(^|)' + name + '=([^&]*)(|$)')
        var tmp = name + '=' + value
        if (url.match(reg) != null) {
          r = url.replace(eval(reg), tmp)
        } else {
          if (url.match('[?]')) {
            r = url + '&' + tmp
          } else {
            r = url + '?' + tmp
          }
        }
      }
      return r
    }
    function formatDate(objD) {
      var str, colorhead, colorfoot
      var yy = objD.getYear()
      if (yy < 1900) yy = yy + 1900
      var MM = objD.getMonth() + 1
      if (MM < 10) MM = '0' + MM
      var dd = objD.getDate()
      if (dd < 10) dd = '0' + dd
      var hh = objD.getHours()
      if (hh < 10) hh = '0' + hh
      var mm = objD.getMinutes()
      if (mm < 10) mm = '0' + mm
      var ss = objD.getSeconds()
      if (ss < 10) ss = '0' + ss
      str = yy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm
      return str
    }

    var startp1 = GetUrlParam('startp')
    var endp1 = GetUrlParam('endp')
    var startc1 = GetUrlParam('startc')
    var endc1 = GetUrlParam('endc')
    var starta1 = GetUrlParam('starta')
    var enda1 = GetUrlParam('enda')
    var carType1 = GetUrlParam('carType')
    var carSourceType1 = GetUrlParam('carSourceType')
    var carLength1 = GetUrlParam('carLength1')
    var carLength2 = GetUrlParam('carLength2')
    var carLoad1 = GetUrlParam('carLoad1')
    var carLoad2 = GetUrlParam('carLoad2')
    var isLongCar1 = GetUrlParam('isLongCar')

    var startp = decodeURI(startp1)
    var endp = decodeURI(endp1)
    var startc = decodeURI(startc1)
    var endc = decodeURI(endc1)
    var starta = decodeURI(starta1)
    var enda = decodeURI(enda1)
    var carType = decodeURI(carType1)
    var carSourceType = decodeURI(carSourceType1)
    var carLength1 = decodeURI(carLength1)
    var carLength2 = decodeURI(carLength2)
    var carLoad1 = decodeURI(carLoad1)
    var carLoad2 = decodeURI(carLoad2)
    var isLongCar = decodeURI(isLongCar1)

    var currentAreaFullName = $.cookie('currentAreaFullName')
    var currentProvinceFullName = $.cookie('currentProvinceFullName')

    var vo = new Object()
    vo.startProvince = startp
    vo.startCity = startc
    vo.startArea = starta
    vo.endProvince = endp
    vo.endCity = endc
    vo.endArea = enda
    vo.carType = carType
    vo.carSourceType = carSourceType
    vo.carLengthLower = carLength1
    vo.carLengthUpper = carLength2
    vo.carLoadLower = carLoad1
    vo.carLoadUpper = carLoad2
    vo.isLongCar = isLongCar

    if (startp || startc) {
      if (!startp || startp == 'null') {
        startp = ''
        delete vo.startProvince
      }
      if (!startc || startc == 'null') {
        startc = ''
        delete vo.startCity
      }
    }
    if ((!startp || startp == 'null') && (!startc || startc == 'null')) {
      startc = currentAreaFullName
      vo.startCity = startc
      startp = currentProvinceFullName
      vo.startProvince = startp
    }

    if (!starta || starta == 'null') {
      starta = ''
      delete vo.startArea
    }
    if (!endp || endp == 'null') {
      endp = ''
      delete vo.endProvince
    }
    if (!endc || endc == 'null') {
      endc = ''
      delete vo.endCity
    }
    if (!enda || enda == 'null') {
      enda = ''
      delete vo.endArea
    }
    if (!carType || carType == 'null') {
      carType = ''
      delete vo.carType
    }
    if (!carSourceType || carSourceType == 'null') {
      carSourceType = ''
      delete vo.carSourceType
    }
    if (!carLength1 || carLength1 == 'null') {
      carLength1 = ''
      delete vo.carLengthLower
    }
    if (!carLength2 || carLength2 == 'null') {
      carLength2 = ''
      delete vo.carLengthUpper
    }
    if (!carLoad1 || carLoad1 == 'null') {
      carLoad1 = ''
      delete vo.carLoadLower
    }
    if (!carLoad2 || carLoad2 == 'null') {
      carLoad2 = ''
      delete vo.carLoadUpper
    }
    if (!isLongCar || isLongCar == 'null') {
      isLongCar = ''
      delete vo.isLongCar
    }

    $('#list_nav_a').html(startc + starta + ' 到 ' + endc + enda + ' 车源信息')
    if ((!startc && !starta) || (!endc && !enda)) {
      $('#list_nav_a').html(startc + starta + '  ' + endc + enda + '车源信息')
    }

    $('#carLineFrom input').citypicker({
      province: startp,
      city: startc,
      district: starta
    })
    $('#carLineTo input').citypicker({
      province: endp,
      city: endc,
      district: enda
    })
    $('#tjcx_01 .all').attr(
      'href',
      UrlUpdateParams(window.location.href, 'carType', '')
    )
    $('#tjcx_02 .all').attr(
      'href',
      UrlUpdateParams(window.location.href, 'carSourceType', '')
    )
    $('#tjcx_03 .all').attr(
      'href',
      UrlUpdateParams(window.location.href, 'isLongCar', '')
    )
    $('#tjcx_04 .all').attr(
      'href',
      UrlUpdateParams(
        UrlUpdateParams(window.location.href, 'carLength1', ''),
        'carLength2',
        ''
      )
    )
    $('#tjcx_05 .all').attr(
      'href',
      UrlUpdateParams(
        UrlUpdateParams(window.location.href, 'carLoad1', ''),
        'carLoad2',
        ''
      )
    )
    //清空条件
    $('#flush').click(function() {
      console.log('清空地址')
      window.location.href = '/cheyuan'
    })
    //清空条件
    //车源搜索 S

    $('#search_cheyuan').click(function() {
      var list1 = [],
        list2 = []
      $('#carLineFrom .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      var startp = list1[0]
      var startc = list1[1]
      var starta = list1[2]

      $('#carLineTo .select-item').each(function(i, e) {
        list2.push($(this).text())
      })
      var endp = list2[0]
      var endc = list2[1]
      var enda = list2[2]
      if (!startp) {
        startp = ''
      }
      if (!startc) {
        startc = ''
      }
      if (!starta) {
        starta = ''
      }
      if (!endp) {
        endp = ''
      }
      if (!endc) {
        endc = ''
      }
      if (!enda) {
        enda = ''
      }
      startp = encodeURI(startp)
      startc = encodeURI(startc)
      starta = encodeURI(starta)
      endp = encodeURI(endp)
      endc = encodeURI(endc)
      enda = encodeURI(enda)

      window.location =
        '/cheyuan?startp=' +
        startp +
        '&startc=' +
        startc +
        '&starta=' +
        starta +
        '&endp=' +
        endp +
        '&endc=' +
        endc +
        '&enda=' +
        enda
    })

    //车源搜索 E

    //车源数据字典 S
    function tjcx01() {
      $.ajax({
        type: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        url: '/api/aflc-common/sysDict/getSysDictByCodeGet/AF018',

        success: function(res) {
          var datas = res.data
          for (var i = 0; i < datas.length; i++) {
            var name = datas[i].name
            var code = datas[i].code
            var myurl = UrlUpdateParams(window.location.href, 'carType', code)
            //       var s1='<a  href=/cheyuan&start='+start+'&end='+end;
            //				 var s2='&carType='+code+'>';
            //				 var s3=name+'</a>';
            var s1 = '<a href=' + myurl + '>'
            var s3 = name + '</a>'
            $('#tjcx_01').append(s1 + s3)
          }
          //选中状态 S
          if (carType) {
            $('#tjcx_01 a').each(function() {
              var aaa = $(this).attr('href')

              if (aaa.indexOf(carType) != -1) {
                console.log(aaa)
                $('#tjcx_01 a').removeClass('now')
                $(this).addClass('now')
              }
            })
          }
          //选中状态 E
        },
        error: function(err) {
          console.log(err.responseText)
        }
      })
    }
    tjcx01()
    function tjcx02() {
      var myurl1 = UrlUpdateParams(
        window.location.href,
        'carSourceType',
        'AF01802'
      )
      var myurl2 = UrlUpdateParams(
        window.location.href,
        'carSourceType',
        'AF01801'
      )
      $('#tjcx_02 a:eq(1)').attr('href', myurl1)
      $('#tjcx_02 a:eq(2)').attr('href', myurl2)
      $('#tjcx_02 a').each(function() {
        var aaa = window.location.href

        if (aaa.indexOf('carSourceType=AF01802') != -1) {
          $('#tjcx_02 a').removeClass('now')
          $('#tjcx_02 a:eq(1)').addClass('now')
        }
        if (aaa.indexOf('carSourceType=AF01801') != -1) {
          $('#tjcx_02 a').removeClass('now')
          $('#tjcx_02 a:eq(2)').addClass('now')
        }
      })
    }
    tjcx02()
    function tjcx03() {
      var myurl1 = UrlUpdateParams(window.location.href, 'isLongCar', '1')
      var myurl2 = UrlUpdateParams(window.location.href, 'isLongCar', '0')
      $('#tjcx_03 a:eq(1)').attr('href', myurl1)
      $('#tjcx_03 a:eq(2)').attr('href', myurl2)
      $('#tjcx_03 a').each(function() {
        var aaa = window.location.href

        if (aaa.indexOf('isLongCar=1') != -1) {
          $('#tjcx_03 a').removeClass('now')
          $('#tjcx_03 a:eq(1)').addClass('now')
        }
        if (aaa.indexOf('isLongCar=0') != -1) {
          $('#tjcx_03 a').removeClass('now')
          $('#tjcx_03 a:eq(2)').addClass('now')
        }
      })
    }
    tjcx03()
    function tjcx04() {
      $.ajax({
        type: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        url: '/api/aflc-common/sysDict/getSysDictByCodeGet/AF031',

        success: function(res) {
          var datas = res.data
          for (var i = 0; i < datas.length; i++) {
            var name = datas[i].name
            if (name.indexOf('<') != -1) {
              var name1 = 0
              var name2 = name.substring(1, 20)
            } else if (name.indexOf('>') != -1) {
              var name1 = name.substring(1, 20)
              var name2 = 99999
            } else {
              var name1 = name.split('-', 2)[0]
              var name2 = name.split('-', 2)[1]
            }

            var code = datas[i].code
            var myurl = UrlUpdateParams(
              UrlUpdateParams(window.location.href, 'carLength1', name1),
              'carLength2',
              name2
            )
            //       var s1='<a  href=/cheyuan&start='+start+'&end='+end;
            //				 var s2='&carLength1='+name1+'&carLength2='+name2+'>';
            //				 var s3=name+'米</a>';
            var s1 = '<a href=' + myurl + '>'
            var s3 = name + '米</a>'
            $('#tjcx_04').append(s1 + s3)
          }
          //选中状态 S
          if (carLength1 && carLength2) {
            $('#tjcx_04 a').each(function() {
              var aaa = $(this).attr('href')

              if (
                aaa.indexOf('carLength1=' + carLength1) != -1 &&
                aaa.indexOf('carLength2=' + carLength2) != -1
              ) {
                //console.log(aaa+":"+goodsWeight1+":"+goodsWeight2);
                $('#tjcx_04 a').removeClass('now')
                $(this).addClass('now')
              }
            })
          }
          //选中状态 E
        },
        error: function(err) {
          console.log(err.responseText)
        }
      })
    }
    tjcx04()
    function tjcx05() {
      $.ajax({
        type: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        url: '/api/aflc-common/sysDict/getSysDictByCodeGet/AF032',

        success: function(res) {
          var datas = res.data
          for (var i = 0; i < datas.length; i++) {
            var name = datas[i].name
            if (name.indexOf('<') != -1) {
              var name1 = 0
              var name2 = name.substring(1, 20)
            } else if (name.indexOf('>') != -1) {
              var name1 = name.substring(1, 20)
              var name2 = 9999
            } else {
              var name1 = name.split('-', 2)[0]
              var name2 = name.split('-', 2)[1]
            }

            var code = datas[i].code
            var myurl = UrlUpdateParams(
              UrlUpdateParams(window.location.href, 'carLoad1', name1),
              'carLoad2',
              name2
            )
            //       var s1='<a  href=/cheyuan&start='+start+'&end='+end;
            //				 var s2='&carLoad1='+name1+'&carLoad2='+name2+'>';
            //				 var s3=name+'吨</a>';
            var s1 = '<a href=' + myurl + '>'
            var s3 = name + '吨</a>'
            $('#tjcx_05').append(s1 + s3)
          }
          //选中状态 S
          if (carLoad1 && carLoad2) {
            $('#tjcx_05 a').each(function() {
              var aaa = $(this).attr('href')

              if (
                aaa.indexOf('carLoad1=' + carLoad1) != -1 &&
                aaa.indexOf('carLoad2=' + carLoad2) != -1
              ) {
                //console.log(aaa+":"+goodsWeight1+":"+goodsWeight2);
                $('#tjcx_05 a').removeClass('now')
                $(this).addClass('now')
              }
            })
          }
          //选中状态 E
        },
        error: function(err) {
          console.log(err.responseText)
        }
      })
    }
    tjcx05()
    //车源数据字典 E

    //车源信息栏目列表S
    function process02(currentPage) {
      var totalPage = 8

      $.ajax({
        type: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        url: '/api/28-web/carInfo/list',
        dataType: 'json',
        async: false,
        data: JSON.stringify({
          currentPage: currentPage,
          pageSize: 10,
          //vo:{	"strartAddress":start,"endAddress":end,"carType":carType,"carLengthLower":carLength1,"carLengthUpper":carLength2,"carLoadLower":carLoad1,"carLoadUpper":carLoad2}			//JSON.stringify({})
          vo: vo
        }),
        success: function(res) {
          $('#js006 .wlzx_list')
            .not(':eq(0)')
            .remove()
          if (res.data) {
            totalPage = res.data.pages
            console.log(totalPage)
          }
          if (!res.data || !res.data.total) {
            console.log('内容为空')
            $('.box').css('display', 'none')
            $('.list_none').css('display', 'block')
          }
          var datas = res.data.list
          for (var i = 0; i < datas.length; i++) {
            var id = datas[i].id
            var collectNum = datas[i].collectNum
            if (!collectNum) {
              collectNum = 0
            }
            var driverId = datas[i].driverId
            var carLoad = datas[i].carLoad
            var carNum = datas[i].carNum
            var createrName = datas[i].createrName
            if (!createrName) {
              createrName = ''
            }
            // var carNum = datas[i].
            // carNum.substring(0, 2) + '***' + carNum.substring(6, 10)
            var remark = datas[i].remark
            if (remark && remark.length > 19) {
              var remark = datas[i].remark.substring(0, 19) + '...'
            }
            var carLength = datas[i].carLength
            var carSourceTypeName = datas[i].carSourceTypeName
            var browseNumber = datas[i].browseNumber
            if (!browseNumber) {
              browseNumber = 0
            }

            var carTypeName = datas[i].carTypeName
            if (!datas[i].usualPlace) {
              var usualPlace = ''
            }
            var usualPlace = datas[i].usualPlace
            // var usualPlace = datas[i].usualPlace.substring(0, 12)
            var title = datas[i].title

            var startCity = datas[i].startCity
            var startArea = datas[i].startArea
            var endCity = datas[i].endCity
            var endArea = datas[i].endArea
            if (!startCity) {
              startCity = ''
            }
            if (!endCity) {
              endCity = ''
            }
            if (!startArea) {
              startArea = ''
            }
            if (!endArea) {
              endArea = ''
            }
            var start = startCity + startArea
            var end = endCity + endArea
            if (start && start.length > 6) {
              // start = start.substring(0, 6) + '..'
            }
            if (end && end.length > 6) {
              // end = end.substring(0, 6) + '..'
            }

            var expectPrice = datas[i].expectPrice
            var qq = datas[i].qq

            var credit28 = datas[i].credit28
            var driverStatus = datas[i].driverStatus

            var createTime1 = datas[i].createTime
            var createTime = formatDate(new Date(createTime1))
            if (!datas[i].carFile) {
              var carFile1 = ''
            }
            if (datas[i].carFile) {
              var carFile1 = datas[i].carFile.split(',')[0]
            }
            $('#car_pic').attr('src', carFile1)

            var arcurl = '/cheyuan/detail?id=' + id + '&driverId=' + driverId
            $('#nr_a51').attr('href', arcurl)
            $('#nr_a54').attr('href', arcurl)
            $('#nr_a51_1').html(start)
            $('#nr_a51_2').html(end)
            $('#nr_a52').attr('href', arcurl)
            $('#nr051').html(carNum)
            $('#nr052').html(carTypeName)
            $('#nr053').html('长' + '<b>' + carLength + '</b>米')
            $('#nr054').html('载重' + '<b>' + carLoad + '</b>吨')
            $('#nr055').html(carSourceTypeName)
            $('#nr056').html(usualPlace)
            $('#nr057').html(expectPrice + '元')
            if (!expectPrice) {
              $('#nr057').html('面议')
            }
            $('#nr058').html(remark)
            $('#nr059').html(createrName)
            $('#nr0510').html('发布时间：' + createTime)
            $('#nr0520').html(collectNum)
            $('#nr0521').html(browseNumber)
            $('#nr_a53').attr(
              'href',
              'tencent://message/?uin=' + qq + '&Site=&menu=yes'
            )
            var s1 = '<ul class="wlzx_list wlzx_list' + i + '">'
            var s2 = $('.wlzx_list').html()
            var s3 = '</ul>'
            $('#js006').append(s1 + s2 + s3)
            // if (!qq) {
            //   $('.wlzx_list' + i + ' #qq').css('display', 'none')
            // }
            //if(!credit28){console.log("is not Vip");
            //$('.wlzx_list'+i+' .cy_list_3 .p2').css("display","none")}
            if (driverStatus != 'AF0010403') {
              console.log('is not shiming')
              $('.wlzx_list' + i + ' .cy_list_3 .p1').css('display', 'none')
            }
          }
        },
        error: function(err) {
          console.log(err.responseText)
        }
      })
      console.log('最终总页数：' + totalPage)
      return totalPage
    }
    //process02(1);
    //车源信息栏目列表 E

    $('#pagination1').pagination({
      currentPage: 1,
      totalPage: process02(1),
      callback: function(current) {
        $('#current1').text(current)
        process02(current)
        window.location.href = '#top'
      }
    })
  },
  methods: {
    //
  }
}
</script>

<style scoped>
/*物流专线 S */
body {
  background-color: #f7f7f7;
}
.zx_sx {
  overflow: hidden;
  line-height: 50px;
  height: 50px;
  color: #585858;
  font-size: 18px;
  font-weight: bold;
  background-color: #fff;
  border-bottom: 2px solid #3f94ee;
}
.list_cy .zx_sx {
  border-bottom: 2px solid #3f94ee;
  margin-bottom: 1px;
}
.list_right .zx_sx {
  border-bottom: 2px solid #3f94ee;
  margin-bottom: 1px;
}
.zx_sx span {
  float: left;
  display: block;
  color: #3f94ee;
}
.expand span {
  color: #999;
}
.collapse span {
  color: #999;
}
.zx_sx .biaozhi {
  width: 3px;
  height: 18px;
  background-color: #3f94ee;
  border-radius: 1px;
  margin: 16px 12px 0px 10px;
}
.list_box {
  width: 1400px;
  height: auto !important;
  margin: 0 auto;
  overflow: hidden;
}
.list_left {
  width: 1036px;
  float: left;
}
.w1036 {
  width: 1036px;
  float: left;
  /*OVERFLOW: hidden;*/
  /* border: 1px solid #eee; */
  border-bottom: 0;
}
.tywlist {
  width: 1036px;
}
.tyxboxWrap {
  float: left;
  width: 100%;
  position: relative;
}
.list_right {
  min-height: 200px;
  height: auto !important;
  width: 344px;
  /* padding: 0px 0px 0 20px; */
  float: left;
  /* border: 1px solid #ddd; */
  box-sizing: border-box;
  margin-left: 20px;
}
.list_right > ul {
  float: left;
  width: 100%;
  background: #ffffff;
}
.list_hy_page2 {
  width: 1400px;
}
.w344 {
  width: 344px;
}
.tylist {
  width: 240px;
}
.select_con {
  width: 1034px;
  border-color: #eee;
  border-left: 0px;
  border-right: 0px;
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
  border: solid 1px #3f94ee;
  background-color: #fff;
  color: #3f94ee;
  font-size: 15px;
  text-align: left;
  margin-left: 8px;
  cursor: pointer;
}
#search_cheyuan {
  width: 72px;
  height: 28px;
  color: #f9f9f9;
  padding-left: 20px;
  background: no-repeat url(../../static/images/list_wlzx/wlgs_search.png) 10px
    6px #3f94ee;
}
#flush {
  width: 70px;
  border: solid 1px #e3e3e3;
  color: #999;
  text-align: center;
  margin-left: 10px;
  font-size: 13px;
}

.list_img {
  position: relative;
  top: 10px;
  left: 5px;
  margin-right: 5px;
}
.select_con dl dd a:hover,
.select_con dl dd a.now {
  background: #3371ff;
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
  width: 1036px;
  height: 39px;
  background-color: #f1f1f1;
  border: solid 1px #e6e6e6;
  margin-bottom: 14px;
  background: no-repeat url(../../static/images/list_wlzx/xiajt.png) #f1f1f1
    363px 16px;
  position: relative;
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
  /* border-radius: 6px;*/
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

.wlzx_list {
  width: 1034px;
  float: left;
  /* height: 180px; */
  /* height: none !important; */
  border: solid 1px #dfdfdf;
  border-left: 0px;
  border-right: 0px;
  margin-top: -1px;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.4s;
}
.wlzx_list:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}
.wlzx_list li {
  /* height: 140px; */
  float: left;
  overflow: hidden;
}
.wlzx_list img {
  transition: 0.7s;
}
.wlzx_list img:hover {
  transform: scale(1.05);
}
.wlzx_list_1 {
  width: 150px;
  margin-left: 9px;
}
.wlzx_list_2 {
  width: 300px;
  margin-left: 20px;
}
.wlzx_list_3 {
  width: 150px;
  margin-left: 30px;
}
.wlzx_list_4 {
  width: 90px;
  margin-left: 70px;
}
.wlzx_list_5 {
  width: 75px;
  margin-left: 65px;
}
.wlzx_list_6 {
  width: 110px;
  margin-left: 85px;
  margin-top: 63px;
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
  color: #3f94ee;
  font-size: 14px;
  padding-left: 5px;
}
.wlzx_list_2 .p3 font,
.wlzx_list_2 .p4 font {
  color: #333;
  font-size: 14px;
}
.wlzx_list_2 .p3 i,
.wlzx_list_2 .p4 i {
  color: #666;
  font-size: 14px;
  padding-left: 5px;
}

.wlzx_list_3 p {
  height: 27px;
  line-height: 27px;
  font-size: 14px;
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
  font-size: 14px;
}
.wlzx_list_4 img {
  margin-top: 5px;
}
.wlzx_list_5 p {
  height: 27px;
  line-height: 27px;
  font-size: 12px;
}
.wlzx_list_5 p:nth-child(1) {
  display: none;
}
.wlzx_list_5 p i {
  color: #999;
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
  border: solid 1px #dddddd;
}
.wlzx_list_6 p input:hover {
  opacity: 0.8;
}
.wlzx_list_6 .p1,
.wlzx_list_6 .p2 {
  margin-bottom: 12px;
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
  background: no-repeat url(../../static/images/article_wlzx/15qq.gif) 12px 3px;

  padding-left: 15px;
  width: 87px;
}
.tj_list {
  background-color: #fff;
  /* margin-top: -1px; */
  border-bottom: 1px solid #dedede;
  width: 342px;
  font-size: 14px;
  transition: all 0.4s;
  float: left;
}
.tj_list .p6 {
  display: flex;
}
.tj_list:last-child {
  border-bottom: none;
}
.tj_list .p6 > div {
  flex: 1;
  margin-left: 16px;
  margin-right: 16px;
}
.tj_list:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}
.tj_list p {
  height: 30px;
  line-height: 30px;
  padding-left: 22px;
  padding-right: 0px;
}

.tj_list .p1 {
  height: 50px;
  line-height: 50px;
}
.tj_list .p1 span {
  font-size: 16px;
  color: #3f94ee;
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
  font-size: 14px;
  color: #666;
}
.tj_list .p3 font,
.tj_list .p4 font {
  font-size: 14px;
  color: #eb434d;
}
.tj_list .p3 span,
.tj_list .p3 font,
.tj_list .p4 span {
  font-size: 14px;
  color: #333;
}
.tj_list .p3 i {
  float: left;
  width: 70px;
  height: 30px;
}
.tj_list .p3 b {
  font-weight: normal;
  color: #f00;
}
.tj_list .p3 em {
  float: left;
  /* width: 50px; */
  height: 30px;
}
.tj_list .p3 span {
  float: left;
  width: 80px;
  height: 30px;
}
.tj_list .p3 font {
  float: left;
  width: 60px;
  height: 30px;
}
.tj_list .p5 img {
  margin-top: 5px;
  margin-bottom: 10px;
  margin-right: 8px;
}
.tj_list .p5 {
  float: left;
  width: 100%;
  padding: 0 22px;
  box-sizing: border-box;
  /* display: flex; */
}
.tj_list .p5 span {
  float: left;
  /* flex: 1; */
  /* margin-left: 24px; */
}
.tj_list .p5 span:last-child {
  float: right;
  line-height: 35px;
  font-size: 12px;
  /* flex: 10; */
}
.che_che {
  float: left;
  margin: 12px 20px;
  background-color: #f8f8f8;
  box-sizing: border-box;
}
.tj_list img {
  transition: 0.7s;
}
.tj_list img:hover {
  transform: scale(1.05);
}
.tj_list .p6 {
  text-align: left;
  float: left;
}
.tj_list .p6 span {
  color: #3f94ee;
  font-size: 14px;
}
/*物流专线 E */

/*车源信息 S */
.cy_list_1 {
  width: 455px;
  margin-left: 30px;
}
.cy_list_2 {
  width: 182px;
  margin-left: 30px;
}
.cy_list_3 {
  width: 85px;
  margin-left: 30px;
  margin-top: 40px;
}
.cy_list_4 {
  width: 180px;
  margin-left: 11px;
}
.cy_list_4 > a {
  float: left;
}
.cy_list_5 {
  width: 102px;
  margin-left: 60px;
}
.cy_list_1 .p1 {
  margin-bottom: 3px;
}
.cy_list_1 p {
  height: 40px;
  line-height: 40px;
}
.cy_list_1 p a {
  /* color: #eb434d; */
  font-size: 16px;
}
.cy_list_1 p i {
  font-size: 14px;
  color: #666;
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
}

.cy_list_2 p span {
  color: #666;
  font-size: 14px;
}
.cy_list_2 p i {
  font-size: 14px;
}
.cy_list_4 p {
  height: 26px;
  margin: 0 0 5px 0;
}

.wlzx_list_6 .p2 input {
  background-color: #eb434d;
  color: #fff;
  border: 0;
}
/*车源信息 E */

/*货源信息 S */

.cy_list_5 {
  width: 102px;
  margin-left: 60px;
}
.cy_list_1 .p1 {
  margin-bottom: 8px;
}
.cy_list_1 .p1 a:hover em {
  color: #fa5000;
}
/* .cy_list_1 p {
  height: 30px;
  line-height: 30px;
} */
.cy_list_1 p a {
  /* color: #3f94ee; */
  font-size: 16px;
  font-weight: bold;
}
.cy_list_1 p i {
  font-size: 14px;
  color: #666;
}
.cy_list_1 p span {
  color: #eb434d;
  font-size: 14px;
}
.cy_list_1 p font {
  font-size: 14px;
  color: #333;
}
.cy_list_1 p b {
  color: #f00;
  font-weight: normal;
}
.cy_list_2 p {
  height: 27px;
  line-height: 27px;
}

.cy_list_2 p span {
  color: #666;
  font-size: 14px;
}
.cy_list_2 p i {
  font-size: 14px;
}
.cy_list_2 p font {
  color: #333;
}
.cy_list_3 p {
  height: 30px;
  line-height: 30px;
}
.wlzx_list_6 .p2 input {
  background-color: #3f94ee;
  color: #fff;
  border: 0;
}
#wlzx_list_view:hover {
  background-color: #f1f1f1;
}
#wlzx_list_view {
  border: solid 1px #dedede;
  background-color: #f9f9f9;
  font-size: 14px;
  color: #333;
}
/*货源信息 E */

.list_none {
  display: none;
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

/*显示隐藏S */
.toggle-btn {
  float: right;
  margin: 12px 15px 0 4px;
  height: 24px;
  line-height: 24px;
  border: solid 1px #e8e8e8;
  padding: 0 9px;
  background: #fff;
  color: #6b6b6b;
  cursor: pointer;
  text-decoration: none;
  font: 12px/1.5 tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
}

.show-collapse .expand {
  display: none;
  margin-top: 2px;
}
.toggle-btn .arrow {
  margin-left: 8px;
  vertical-align: middle;
}
.icon-btn-arrow-up-2,
.icon-btn-arrow-down-2 {
}

.icon-btn-arrow-down-2 {
  margin-top: 5px;
  display: inline-block;
  background: url(../../static/images/list_wlzx/xiajt.png);
  background-repeat: no-repeat;
  width: 12px;
  height: 7px;
  cursor: pointer;
}
.show-collapse .collapse {
  display: inline-block;
  margin-top: 2px;
}
.toggle-btn .arrow {
  margin-left: 8px;
  vertical-align: middle;
}

.icon-btn-arrow-up-2 {
  margin-top: 5px;
  display: inline-block;
  background: url(../../static/images/list_wlzx/up_jt.png);
  background-repeat: no-repeat;
  width: 12px;
  height: 7px;
  cursor: pointer;
}
/*显示隐藏E */

#carLineFrom {
  width: 220px;
  background: url(../../static/images/list_wlzx/start_addr.png) no-repeat 200px
    8px #fff;
  background-size: 16px 17px;
}
#carLineTo {
  width: 220px;
  background: url(../../static/images/list_wlzx/end_addr.png) no-repeat 200px
    8px #fff;
  background-size: 16px 17px;
}
#cy_list_0 {
  width: 100%;
  height: 26px;
  float: left;
}
.view_num {
  float: right;
  height: 26px;
  width: 120px;
  font-size: 12px;
  line-height: 26px;
}
.view_num img {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  margin: 0px 5px;
  vertical-align: middle;
}
.sc_num {
  float: right;
  height: 26px;
  width: 120px;
  font-size: 12px;
  line-height: 26px;
}
#cy_list_0 {
  overflow: visible;
}
#cy_list_0 img {
  margin-top: 32px;
  float: left;
  margin-right: 7px;
}
#cy_list_0 span {
  float: left;
  margin-top: 28px;
}
.cy_list_4 img {
  width: 180px;
  height: 180px;
}
.list_cy {
  margin-top: 20px;
  padding-bottom: 20px;
}

.lines-sprite-icons {
  background: url(../../static/images/list_wlzx/ss56-lines-sprite.png) no-repeat;
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
.view_num1 {
  float: left;
  height: 26px;
  width: 140px;
  font-size: 12px;
  line-height: 26px;
}
.sc_num1 {
  float: left;
  height: 26px;
  width: 140px;
  font-size: 12px;
  line-height: 26px;
}
.view_num1 img,
.sc_num1 img {
  float: left;
  margin-right: 10px;
  margin-top: 3px;
}
.view_num1 span,
.sc_num1 span {
  float: left;
}
.che_box {
  float: left;
}

.list_new {
  float: left;
  margin-left: 20px;
  margin-bottom: 20px;
}
.list_new .list_new_ul {
  width: 342px;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
}
.list_new .list_new_ul li {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.li_one {
  display: flex;
  font-size: 14px;
  flex: 1;
  height: 30px;
  line-height: 30px;
}
.li_two {
  display: flex;
  font-size: 14px;
  flex: 1;
  height: 30px;
  line-height: 30px;
}
.li_one a {
  flex: 1;
  cursor: pointer;
  color: #333333;
}
.li_one span {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  color: #999999;
  font-size: 12px;
}
.li_two a {
  flex: 1;
  cursor: pointer;
  color: #333333;
}
.li_two span {
  color: #999999;
}
.li_two .li_check {
  border-bottom: 1px solid #3f94ee;
  color: #3f94ee;
}

.list_help {
  width: 342px;
  margin-left: 20px;
  box-sizing: border-box;
  float: left;
  margin-top: 20px;
}
.list-box-r-top {
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  padding: 20px 20px;
  /* border: 1px solid #ececec; */
  margin-bottom: 10px;
}
.ltl-input {
  position: relative;
  margin: 7px 0 10px 0;
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
  background-position: -10px -6px;
}
.ltl-icons {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 5px;
  top: 8px;
}
.ss56-common-sprite1 {
  background-image: url(/templets/default/images/wzlImg/qd.png);
  background-repeat: no-repeat;
}
.ltl-ico-end {
  background-position: -15px -5px;
}
.ltl-icons {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 5px;
  top: 8px;
}
.ss56-common-sprite2 {
  background-image: url(/templets/default/images/wzlImg/zd.png);
  background-repeat: no-repeat;
}

.ltl-location {
  width: 100%;
  border: 1px solid #ccc;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  padding-left: 8px;
  border-radius: 4px;
  padding-right: 50px;
  outline: 0;
}

.lines-sprite-icons {
  background: url(/templets/default/images/list_wlzx/ss56-lines-sprite.png)
    no-repeat;
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
</style>
