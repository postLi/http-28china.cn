
<template>
  <div class="lll-gongsi">

    <div class="header_list">
      <div
        class="list_nav"
        style="margin-bottom: 10px">
        <a href="/">物流首页</a>&gt;<a
          id="list_nav_a"
          href="">物流公司</a>
      </div>
      <ul class="first_ul">
        <li class="first_li">
          <div class="company">
            <div
              class="company_name"
              style="padding: 15px 0 5px 20px"
            ><img
              src="../../static/gongsi/images/wlyq_gs.png"
              alt=""><span style="padding-left: 20px">公司所在地</span></div>
            <div class="company_address">
              <div
                id="index_map1"
                class="header_middles">
                <span
                  v-for="(item, i) in 3"
                  :key="i"
                  id="diqu"
                  style="width: 33%; text-align: center;display: inline-block;">全国</span>
                <!--<a href="" style="width: 33%; text-align: center"><span id="diqu">全国</span><i/></a>-->
                <div
                  id="map_box1"
                  class="map_box1"
                  style="position: absolute;left: 18%;top: 29%;display: none;width: 510px;height: 150px;background-color: #ffffff;border: solid 1px #cccccc;box-shadow: 0px 0px 20px rgba(0,0,0,0.3); z-index: 999;padding: 10px 0 10px 20px;">
                  <a href="/"><span style="color: #3F94EE;font-weight: bold;" >全&nbsp;国</span></a>
                </div>

              </div>
              <!--<ul style="padding: 10px">-->
              <!--<li-->
              <!--v-for="(item, index) in 10"-->
              <!--:key="index"-->
              <!--style="width: 33%; text-align: center">不限</li>-->
              <!--</ul>-->
            </div>
          </div>
        </li>
        <li class="sec_li">
          <div class="top">
            <div
              id="test1"
              class="layui-carousel"
              style="width: 100%; height: 250px;">
              <div carousel-item>
                <div
                  v-for="(item, i) in 3"
                  :key="i"><img src="../../static/gongsi/images/demo/header.png"></div>
              </div>
            </div>
          </div>
          <div
            class="bot"
            style="width: 100%; height: 140px;">
            <a
              v-for="(item, index) in 3"
              :key="index"
              href="#"
              style="padding: 0 10px 0 10px"
            >
              <img
                src="../../static/gongsi/images/demo/gg.png"
                alt=""
                style="width: 30%;height: 135px;"
              >
            </a>
          </div>
        </li>
        <li class="last_li">
          <div class="btn_top"><button
            class="layui-btn"
            @click="callme"
            style="width: 280px;background: #3f94ee">实力承运商入驻</button></div>
          <div
            class="rem_bot"
            style="margin-top: 10px"
          >
            <div class="rem_bot_t">
              <div
                class="rem_bot_titp"
                style="text-align: center"><img
                  src=""
                  alt=""><span style="font-size: 20px;text-align: center">优质承运商推荐</span></div>
            </div>
            <p style="text-align: center;padding-top: 10px">优质承运商推荐，钱力心</p>
            <ul
              class="rem_bot_b"
              style="padding: 60px 15px 15px">
              <li
                v-for="(item,i) in listE"
                :key="i"
                style="padding-top: 10px">
                <p>{{ item.companyName }}</p>
                <p>
                  <!--<span-->
                  <!--style="padding-right: 10px"-->
                  <!--v-for="(item, i) in item.advService"-->
                  <!--:key="i"-->
                  <!--&gt;{{ item.length > 3 ? item.substring(0, 3) + '...' : '' }}</span>-->
                  <!--&lt;!&ndash;<span style="padding-right: 10px">仓储配送</span>-->
                  <span
                    style="padding-right: 10px;color: #ccc"
                    v-for="(item, i) in (item.advService.length>3?item.advService.slice(3):item.advService)"
                    :key="i">{{ item }}</span>
                </p>
                <p><span style="color: rgb(255,122,35)">推荐承运商

                </span><a
                  :href="'/member/'+item.id"
                  target="_blank"
                  style="float: right;cursor: pointer" >进入官网</a></p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="header_links">
      <div class="header_links_l">
        <ul>
          <li
            v-for="(item, index) in lineAdviseRecommend"
            :key="index"
            style="float:left;padding: 15px 40px 15px 40px"><a href="#">
              <p>{{ item.contactsName?item.contactsName:'' }}</p>

              <p
                v-if="item.advService.length"
              ><span
                v-for="(item, index) in item.advService"
                :key="index">{{ item }}</span></p>

          </a></li>
        </ul>
      </div>
      <div
        class="header_links_r"
        style="position: relative"
      >
        <p style="font-size: 18px;color: #0d91e9;padding: 15px 0 10px 10px ">运单查询运单查询</p>
        <input
          id="yd_nr"
          rows="3"
          cols="20"
          placeholder="请输入运单号，例如："
          style="width: 230px;margin-left: 10px">
        <input
        type="button">
        <div
          class="ydh"
          style="position: absolute; left: 145px;width: 100px;height: 28px;cursor: pointer;top: 55px;color:#0d91e9;margin-left: 10px"
        >
          <span>1809260061</span>
        </div>
        <div><button
          id="yd_cx1"
          class="layui-btn"
          style="width: 260px;margin-top: 10px;border-radius: 3px;margin-left: 10px"
        >立即查询</button></div>
      </div>
    </div>
    <div class="list_box" >
      <div class="list_down"><a
        href="http://h5.28tms.com/"
        target="_blank">下载<span>【28快运APP】</span>，实时接收推荐的精品车货源与合作信息，在线下单推荐优质承运商，便捷查询运单。</a></div>
      <div class="banner h62">
        <div class="echart_scroll">
          <div
            class="fl echart_scroll_sm"
            style="padding-left: 20px;"
          >最新入驻企业</div>
          <div class="fl echart_scroll_nr">
            <div class="fl echart_scroll_nr800">
              <ul
                class="echart_scroll_nr1"
              >
                <!--<li-->
                <!--v-for="(item, i) in listF"-->
                <!--:key="i"-->

                <!--&gt;<a-->
                <!--href="javascript:void(0)"-->
                <!--target="_blank"><span>{{ item.companyName?item.companyName:'' }}</span></a></li>-->
                <li><a
                  href="javascript:void(0)"
                  target="_blank"
                  v-for="(item, i) in 10"
                  :key="i"><span>广州发合肥</span></a></li>
                  <!--<li><a-->
                  <!--href="javascript:void(0)"-->
                  <!--target="_blank"><span>广州发重庆</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>-->
                  <!--<li><a-->
                  <!--href="javascript:void(0)"-->
                  <!--target="_blank"><span>广州发南昌</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>-->
                  <!--<li><a-->
                  <!--href="javascript:void(0)"-->
                  <!--target="_blank"><span>广州发郑州</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>-->
              </ul>
              <ul class="echart_scroll_nr2"/>
            </div>
          </div>
        </div>
      </div>
      <div
        class="list_checkbox"
        style="display: flex">

        <form
          action=""
          method="get">
          <label
            v-for="(item, i) in 5"
            :key="i">
            <input
              type="checkbox"
              value="" >132 </label>
        </form>
        <!--<form-->
        <!--class="layui-form"-->
        <!--&gt;-->
        <!--<div-->
        <!--class="layui-form-item"-->
        <!--pane="">-->
        <!--<div-->
        <!--class="layui-input-block"-->
        <!--style="margin-left: 0">-->
        <!--<input-->
        <!--type="checkbox"-->
        <!--name="like"-->
        <!--lay-filter="f_all"-->
        <!--lay-skin="primary"-->
        <!--:title="listH[0].name"-->
        <!--checked="">-->
        <!--<input-->
        <!--v-for="(item, i) in listH.slice(1)"-->
        <!--:key="i"-->
        <!--lay-filter="c_one"-->
        <!--type="checkbox"-->
        <!--name="like"-->
        <!--lay-skin="primary"-->
        <!--:title="item.name"-->
        <!--checked=""-->
        <!--class="checkbox_class"-->
        <!--&gt;-->
        <!--</div>-->
        <!--</div>-->

        <!--</form>-->
        <div style="display: inherit;padding-left:200px;position: relative">
          <input
            type="text"
            placeholder="公司名称"
            class="layui-input parkname"
            style="width: 275px"
            v-model="parkname">
          <a :href="'/gongsi/?parkName='+ parkname"><i
            class="layui-icon layui-icon-search"
            style="font-size: 20px; color: #1E9FFF;display: inherit;vertical-align: middle;position: absolute; top: 7px;right: 10px;cursor: pointer"
          /></a>
        </div>

      </div>


      <div class="list_center">
        <div class="list_left">
          <DetailList/>
          <div class="lll-line--othet">
            <div class="lll-recommend clearfix">
              <div
                class="zx_sx1"
              ><span class="biaozhi"/><span class="zx_sxl_tit">{{ lineLinks.brandRecommend.label }}</span></div>
              <FooterLinks :info="lineLinks.brandRecommend.links"/>
            </div>
          </div>
        </div>

        <div class="list_right">
          <div
            id="js007"
            class="">
            <div class="zx_sx"><span class="biaozhi"/><span>推荐企业</span>
              <i
                style="color: rgb(255,116,23);float: right;font-size: 15px;border-bottom: 1px solid rgb(255,116,23);cursor: pointer"
                @click="findMe">我也想出现在这里</i>
            </div>
            <div
              class="tj_none"
              v-if="!listG.length">
              <span>没有相关物流公司推荐</span>
            </div>
            <ul>
              <li
                style="padding: 13px 6px 10px 6px;background: rgb(208,104,105);margin-top: 10px"
                v-for="(item, i) in listG"
                :key="i">
                <p style="font-size: 25px;color: rgb(253,240,3)">{{ item.companyName }}</p>
                <p style="font-size: 25px;color: rgb(253,240,3); text-align: center">广州业务部</p>
                <div><span
                  style="font-size: 20px;color: #fff"
                  v-for="(item, i) in item.advService"
                  :key="i"

                >{{ item }}</span></div>
                <p style="font-size: 25px;color: #fff">{{ item.mobile }}</p>
              </li>
            </ul>
          </div>
          <HotList :lines="lineHots"/>
          <div class="list-box-r-phone">
            <div class="zx_p_tit">帮我找优质承运商</div>
            <div class="list-box-r-top">
              <selectMap/>
            </div>
          </div>
          <div class="list-box-r-news">
            <div class="today_news"><div class="zx_sx"><span class="biaozhi"/><span>今日要闻</span><a href="#">更多>></a></div>
              <p>瑞幸融资翻倍，背后是同城物流的暗战
              </p>
              <div style="display: flex"><img
                src="/static/gongsi/images/wlgs_danbao.png"
                alt=""><span>双12是主打新零售场景的购物节，不论是天猫、京东等电商平台，还是每日优鲜、盒马鲜生等新零售物种都展开了…<a
                  href="#"
                  style="color: #0d91e9">[详细]</a></span></div>
              <ul>
                <li
                  v-for="(item, i) in 10"
                  :key="i">瑞幸融资估值翻倍，背后是同城物流的...

                </li>
              </ul>
            </div>
            <div class="wuliu_news"/>
          </div>
        </div>

      </div>
      <div class="arc_main8">
        <div class="arc_main8_1">
          <div class="lll-recommend clearfix">
            <div
              class="zx_sx"
              style="border-color: #e7e7e7"
            ><span class="biaozhi"/><span>{{ lineLinks.interestedRecommend.label }}</span></div>
            <FooterLinks
              :info="lineLinks.interestedRecommend.links"
              :types="types"/>
              <!--linedataG    brandRecommend:-->
              <!--<FootList/>-->
          </div>
        </div>
      </div>
    </div>
    <Add
      :show = "isAdd"
      @close="noaddFn"/>
  </div>
</template>
<script>
import $axios from 'axios'
import DetailList from '../../components/detailList'
import HotList from '../../components/hotList'
import selectMap from '../zhuanxian/selectMap'
import FooterLinks from '../../components/footerLinks'
import Add from './add'

export default {
  name: `index`,
  components: {
    DetailList,
    selectMap,
    FooterLinks,
    Add,
    HotList
  },
  data() {
    return {
      isAdd: false,
      types: 0,
      parkname: ''
      // lineHots: []
    }
  },
  async asyncData({ $axios, app, query }) {
    let aurl = ''
    // let startp = query.startp
    // let startc = query.startc
    // let starta = query.starta
    // let endp = query.endp
    // // let starta = query.starta
    // let enda = query.enda
    // let endc = query.endc
    //
    // if (!startp || startp == 'null') {
    //   startp = ''
    // }
    // if (!startc || startc == 'null') {
    //   startc = ''
    // }
    // if (!starta || starta == 'null') {
    //   starta = ''
    // }
    // if (!endp || endp == 'null') {
    //   endp = ''
    // }
    // if (!enda || enda == 'null') {
    //   enda = ''
    // }
    // if (!endc || endc == 'null') {
    //   endc = ''
    // }
    let vo = {
      currentPage: 1,
      pageSize: 5,
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
    if (process.server) {
      aurl = 'http://localhost:3000'
    }
    let vo1 = vo
    delete vo1.currentPage
    delete vo1.pageSize
    // /logisticsCompany/adviseRecommend
    // 广告推荐物流公司
    let [
      listA,
      listB,
      listC,
      listD,
      listE,
      listF,
      listG,
      listH
    ] = await Promise.all([
      $axios.get(aurl + '/api/28-web/logisticsCompany/popularity'),
      $axios.post(aurl + '/api/28-web/logisticsCompany/list', vo),
      $axios.post(
        aurl + `/api/28-web/logisticsCompany/list/related/links`,
        vo1
      ),
      $axios.get(aurl + `/api/28-web/logisticsCompany/adviseRecommend`),
      $axios.get(aurl + `/api/28-web/logisticsCompany/excellent`),
      $axios.get(aurl + `/api/28-web/logisticsCompany/enter`),
      $axios.get(aurl + `/api/28-web/logisticsCompany/enterpriseRecommend`),
      $axios.get(aurl + '/api/28-web/sysDict/getSysDictByCodeGet/AF025')
    ])

    // (lineAdviseRecommend.productServiceCode?lineAdviseRecommend.productServiceCode:lineAdviseRecommend.otherService)
    listD.data.data.forEach(item => {
      item.advService = item.productServiceNameList
        ? item.productServiceNameList
        : item.otherServiceNameList
      // console.log(item.advService, 'advService')
    })
    listE.data.data.forEach(item => {
      item.advService = item.productServiceNameList
        ? item.productServiceNameList
        : item.otherServiceNameList
      // console.log(item.advService.slice(3), 'bbbb')
    })
    listG.data.data.forEach(item => {
      item.advService = item.productServiceNameList
        ? item.productServiceNameList
        : item.otherServiceNameList
    })

    let codeObj = {
      name: '不限',
      code: ''
    }
    listH.data.data.unshift(codeObj)
    // console.log(listF.data.data, 'listF')
    return {
      lineHots: listA.data.data,
      lineLinks: listC.data.data,
      lineAdviseRecommend: listD.data.status == 200 ? listD.data.data : '',
      listE: listE.data.status == 200 ? listE.data.data : '',
      // listF: listF.data.data == [] ? '' : '',
      listF: listF.data.status == 200 ? listF.data.data : '',
      listG: listG.data.status == 200 ? listG.data.data : '',
      listH: listH.data.status == 200 ? listH.data.data : ''
    }
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/gongsi/css/list_wlgs.css' },
      { rel: 'stylesheet', href: '/gongsi/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' },
      { rel: 'stylesheet', href: '/layer/dist/css/layui.css' }
    ]
  },
  mounted() {
    seajs.use(
      [
        '../js/city.js',
        '/layer/layer.js',
        '/layer/dist/layui.js',
        '/js/AFLC_API.js'
      ],
      function() {
        seajs.use(
          [
            '../js/city-picker.js',
            './js/jquery.pagination.min.js',
            '/js/AFLC_API.js'
          ],
          function() {
            seajs.use(['../gongsi/js/list_wlgs.js'], function() {
              seajs.use(['../js/collection.js', '../js/diqu1.js'], function() {
                seajs.use(['../js/gaodemap2.js'], function() {
                  //
                  layui.use('form', function() {
                    var form = layui.form
                    form.on('checkbox(f_all)', function(data) {
                      // console.log($(this), '$(this)')
                      var item = $('.checkbox_class')
                      item.each(function() {
                        if ($(this).prop('checked')) {
                          $(this).prop('checked', false)
                        } else {
                          $(this).prop('checked', true)
                        }
                      })
                      // var item = $(".cityId");
                      // item.each(function() {
                      //   if ($(this).prop('checked')) {
                      //     $(this).prop('checked', false)
                      //   } else {
                      //     $(this).prop('checked', true)
                      //   }
                      // })

                      // item.each(function() {
                      //   if ($(this).prop('checked')) {
                      //     $(this).prop('checked', false)
                      //   }
                      // })
                      // form.render()
                    })
                  })

                  var speed = 30
                  var tab = $('.echart_scroll_nr')
                  var tab1 = $('.echart_scroll_nr1')
                  var tab2 = $('.echart_scroll_nr2')
                  tab2.html(tab1.html())
                  console.log('tab2:' + tab2.html())
                  function Marquee() {
                    if (tab2[0].offsetWidth - tab[0].scrollLeft <= 0) {
                      tab[0].scrollLeft -= tab1[0].offsetWidth
                      //console.log('tab1[0].offsetWidth:'+tab1[0].offsetWidth)
                    } else {
                      tab[0].scrollLeft++
                      //console.log('tab[0].scrollLeft:'+tab1[0].scrollLeft)
                    }
                  }
                  var MyMar = setInterval(Marquee, speed)
                  tab.mouseover(function() {
                    clearInterval(MyMar)
                  })
                  tab.mouseout(function() {
                    MyMar = setInterval(Marquee, speed)
                  })
                  layui.use('carousel', function() {
                    var carousel = layui.carousel
                    //建造实例
                    carousel.render({
                      elem: '#test1',
                      width: '100%', //设置容器宽度
                      arrow: 'always' //始终显示箭头
                      //,anim: 'updown' //切换动画方式
                    })
                  })
                  $('.list_tiaoj span').click(function() {
                    //alert("1");
                    $('.list_tiaoj span').removeClass('active')
                    $(this).toggleClass('active')
                  })
                  function onCheckPage() {
                    var beginPage = parseInt(
                      document.beginPagefrm.beginPage.value
                    )
                    if (isNaN(beginPage)) {
                      alert('请输入数字！')
                      return false
                    }
                    if (beginPage <= 0) {
                      beginPage = 1
                    }
                    if (beginPage > 100) {
                      beginPage = 100
                    }
                    if (beginPage > 1) {
                      document.beginPagefrm.action =
                        '{dede:type typeid=’19′ row=1}[field:typelink /]{/dede:type}&PageNo=' +
                        beginPage
                    } else {
                      document.beginPagefrm.action =
                        '{dede:type typeid=’19′ row=1}[field:typelink /]{/dede:type}'
                    }
                    return true
                  }
                  $('#pagination1').pagination({
                    currentPage: 1,
                    totalPage: process02(1),
                    callback: function(current) {
                      $('#current1').text(current)
                      process02(current)
                      window.location.href = '#top'
                    }
                  })
                })
              })
            })
          }
        )
      }
    )
  },
  methods: {
    findMe() {
      this.addFn()
      this.types = 2
    },
    callme() {
      this.addFn()
      this.types = 1
      console.log(this.isAdd)
    },
    addFn() {
      this.isAdd = true
    },
    noaddFn() {
      this.isAdd = false
    },
    btbs() {
      layer.open({
        type: 1,
        content: '传入任意的文本或html' //这里content是一个普通的String
      })
    }
  }
}
</script>
<style lang="scss">
.lll-gongsi {
  margin-bottom: 100px;
  .clearfix:after {
    content: ' ';
    display: table;
  }
  .clearfix:before {
    content: '';
    display: table;
  }
  .clearfix:after {
    clear: both;
  }

  .zx_sx1 {
    border-bottom: 1px solid #e7e7e7;
    line-height: 50px;
    font-size: 18px;
    font-weight: bold;
    .biaozhi {
      width: 3px;
      height: 18px;
      background-color: #3f94ee;
      border-radius: 1px;
      margin: 16px 12px 0px 10px;
      float: left;
    }
    .zx_sxl_tit {
      color: #3f94ee;
    }
  }
  .lll-recommend {
    transition: all 0.4s;
    background: #fff;
    .zx_sx {
      border-bottom: 1px solid #e7e7e7;
      padding-top: 20px;
    }
  }
  .lll-line--othet {
    width: 1036px;
    display: inline-block;
    /*.lll-recommend:first-of-type {*/
    /*ul.footerLinks {*/
    /*li {*/
    /*width: 16.67%;*/
    /*!* text-align: center; *!*/
    /*overflow: hidden;*/
    /*text-overflow: ellipsis;*/
    /*white-space: nowrap;*/
    /*}*/
    /*}*/
    /*}*/
  }
  .list-box-r-phone {
    /*min-height: 246px;*/
    /*height: auto !important;*/
    /*width: 344px;*/
    /*margin: 20px 0px 0 16px;*/
    /*float: left;*/
    margin-top: 20px;
    background: url('/line/images/helpbg.png');

    .zx_p_tit {
      overflow: hidden;
      line-height: 50px;
      height: 50px;
      color: #3f94ee;
      font-size: 18px;
      font-weight: bold;
      padding-left: 20px;
    }
    .list-box-r-top {
      width: 100%;
      box-sizing: border-box;
      /*background: #fff;*/
      padding: 10px 20px 20px;
      border: 1px solid #ececec;
      margin-bottom: 10px;
      .textinput {
        width: 178px !important;
      }
    }
  }
  .list_button {
    width: 42px;
    height: 28px;
    border-radius: 2px;
    color: #f9f9f9;
    font-size: 15px;
    background: no-repeat url(../../static/images/list_wlzx/wlgs_search.png)
      10px 6px #2577e3;
    text-align: left;
    padding-left: 30px;
    margin-left: 8px;
    padding-right: 5px;
    cursor: pointer;
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
}
</style>
