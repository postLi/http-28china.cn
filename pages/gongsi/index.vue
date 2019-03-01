
<template>
  <div class="lll-gongsi">
    <div class="header_list">
      <ul class="first_ul">
        <li class="first_li">
          <div class="company">
            <div class="company_name"><img
              src="../../static/gongsi/images/wlyq_gs.png"
              alt=""><span>公司名</span></div>
            <div class="company_address">
              <ul style="padding: 10px">
                <li
                  v-for="(item, index) in 10"
                  :key="index"
                  style="width: 33%; text-align: center">不限</li>
              </ul>
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
                <div><img src="//res.layui.com/images/layui/demo/1.png"></div>
                <div><img src="//res.layui.com/images/layui/demo/2.png"></div>
                <div><img src="//res.layui.com/images/layui/demo/3.png"></div>
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
              style="display: inline-block; width: 30%;height: 100%;background: skyblue;margin-left: 10px">
              <!--<img-->
              <!--src="../../static/gongsi/images/wlgs_danbao.png"-->
              <!--alt=""-->
              <!--style="width: 30%;height: 135px;"-->
            <!--&gt;-->
            </a>
          </div>
        </li>
        <li class="last_li">
          <div class="btn_top"><button
            class="layui-btn"
            @click="callme"
            style="width: 280px;background: #3f94ee">实力承运商入驻</button></div>
          <div class="rem_bot">
            <div class="rem_bot_t">
              <div class="rem_bot_titp"><img
                src=""
                alt=""><span>优质承运商推荐</span></div>
            </div>
            <p>优质承运商推荐，钱力心</p>
            <ul class="rem_bot_b">
              <li>
                <p>北京吉盛通达物流有限公司</p>
                <p><span>整车运输</span><span>仓储配送</span><span>整车运输...</span></p>
                <p><span>推荐承运商

                </span><a href="#">进入官网</a></p>
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
              <p>{{ item.contactsName }}</p><p
              ><span
                v-for="(item, index) in item.advService"
                :key="index">{{ item }}</span></p>
          </a></li>
        </ul>
      </div>
      <div class="header_links_r">
        <p>运单查询运单查询</p>
        <input
          type="text"
          name="title"
          required
          lay-verify="required"
          placeholder="请输入运单号，例如1809260061"
          autocomplete="off"
          class="layui-input">
        <div><button
          class="layui-btn"
          style="width: 280px"
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
                <li
                  v-for="(item, i) in 6"
                  :key="i"

                ><a
                  href="javascript:void(0)"
                  target="_blank"><span>广州发武汉广州发武汉{{ i }}</span></a></li>
                  <!--<li><a-->
                  <!--href="javascript:void(0)"-->
                  <!--target="_blank"><span>广州发合肥</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>-->
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
          class="layui-form"

        > <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
          <div
            class="layui-form-item"
            pane="">
            <!--<label class="layui-form-label">原始复选框</label>-->
            <div class="layui-input-block">
              <input
                v-for="(item, i) in 10"
                :key="i"
                type="checkbox"
                name="like1[write]"
                lay-skin="primary"
                title="写作"
                checked="">
            </div>
          </div>

        </form>
        <form
          class="layui-form layui-form-pane"
          action="">
          <div class="layui-form-item">
            <label class="layui-form-label">密码框</label>
            <div class="layui-input-inline">
              <input
                type="password"
                name="password"
                required=""
                lay-verify="required"
                placeholder="公司名称"
                autocomplete="off"
                class="layui-input">

            </div>
            <div class="layui-form-mid layui-word-aux"> <img

              src="../../static/images/yd_search.png"
              alt=""
              style="border: 1px solid #ccc;"></div>
            <div class="layui-form-mid layui-word-aux">辅助文字</div>
          </div>
        </form>
      </div>

      <div class="list_nav">
        <a href="/">物流首页</a>&gt;<a
          id="list_nav_a"
          href="">物流公司</a>
      </div>
      <div class="list_center">
        <div class="list_left">
          <DetailList/>
          <div class="lll-line--othet">
            <div class="lll-recommend clearfix">
              <div
                class="zx_sx1"
              ><span class="biaozhi"/><span class="zx_sxl_tit">{{ lineLinks.recommendBy28.label }}</span></div>
              <FooterLinks :info="lineLinks.recommendBy28.links"/>
            </div>
          </div>
        </div>

        <div class="list_right">
          <div
            id="js007"
            class="">
            <div class="zx_sx"><span class="biaozhi"/><span>推荐企业</span></div>
            <div class="tj_none">
              <span>没有相关物流公司推荐</span>
            </div>

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
            ><span class="biaozhi"/><span>{{ lineLinks.recommendBy28.label }}</span></div>
            <FooterLinks :info="lineLinks.recommendBy28.links"/>
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
      isAdd: false
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
    let [listA, listB, listC, listD] = await Promise.all([
      $axios.get(aurl + '/api/28-web/logisticsCompany/popularity'),
      $axios.post(aurl + '/api/28-web/logisticsCompany/list', vo),
      $axios.post(aurl + `/api/28-web/range/related/links`, vo1),
      $axios.get(aurl + `/api/28-web/logisticsCompany/adviseRecommend`)
    ])

    // (lineAdviseRecommend.productServiceCode?lineAdviseRecommend.productServiceCode:lineAdviseRecommend.otherService)
    listD.data.data.forEach(item => {
      item.advService = item.productService
        ? item.productService
        : item.otherService
      // console.log(item.advService, 'advService')
    })

    // console.log(listD.data.data, 'listD1')
    return {
      lineHots: listA.data.data,
      lineLinks: listC.data.data,
      lineAdviseRecommend: listD.data.status == 200 ? listD.data.data : ''
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
    // layui.use('carousel', () => {
    //   var carousel = layui.carousel
    //   //建造实例
    //   carousel.render({
    //     elem: '#test1',
    //     width: '100%', //设置容器宽度
    //     arrow: 'always' //始终显示箭头
    //     //,anim: 'updown' //切换动画方式
    //   })
    // })
    seajs.use(
      ['../js/city.js', '/layer/layer.js', '/layer/dist/layui.js'],
      function() {
        seajs.use(
          [
            '../js/city-picker.js',
            './js/jquery.pagination.min.js',
            '/js/AFLC_API.js'
          ],
          function() {
            seajs.use(['../gongsi/js/list_wlgs.js'], function() {
              seajs.use(['../js/collection.js'], function() {
                seajs.use(['../js/gaodemap2.js'], function() {
                  //
                  layui.use('form', function() {
                    var form = layui.form()
                    form.render()
                  })
                  //
                  //echart滚动脚本
                  var speed = 30 //数字越大速度越慢
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
    callme() {
      this.addFn()
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
