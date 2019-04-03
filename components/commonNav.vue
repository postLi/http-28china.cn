<template>
  <div>
    <div
      id="rf00"
      class="header">
      <top/>
      <div class="header_middle clear">
        <div
          class="header_m"
          style="width: 1400px;">

          <div class="header_middle1"><a
            href="/"
            target="_self"><img
              width="135px"
              src="/img/logo.png"></a></div>
          <div
            id="index_map"
            class="header_middles"
            style="margin-left: 88px;" >
            <a href=""><span id="diqu">全国</span><i/></a>
            <div
              id="map_box"
              class="map_box" >
              <a href="/"><span style="color: #3F94EE;font-weight: bold;" >全&nbsp;国</span></a>
            </div>

          </div>
          <div
            class="header_middle2"
            style="margin-left: 110px;">
            <div class="h_m_search1">
              <a
                v-for="(item,index) in navList"
                :key="index"
                :style="{'color':$store.state.topNav3.navId === item.id ? '#3f94ee' : '#333'}"
                href="javascript:"
                @click="clickNav(item)">
              <span>{{ item.name }}</span></a>
            </div>
            <div class="h3"/>
            <!--找专线 S -->

            <div
              v-show="$store.state.topNav3.navId === 4"
              id="h_m_search001"
              class="h_m_search2">
              <div class="h_m_search33 floatl">
                <!--<div class="h_m_cfd floatl"><input wtmap="" type="text" id="wlLineFrom0" name="" class="" placeholder=" 请输入出发地" readonly=""></div>-->
                <div
                  id="wlLineFrom0"
                  class="h_m_cfd floatl"
                  style="position: relative;">
                  <input
                    readonly
                    type="text"
                    data-toggle="city-picker"
                    data-level="district"
                    style="border: none"
                    placeholder="请输入出发地">
                </div>
                <div class="h_m_jt floatl"><img src="../static/images/index/02jt.png"></div>
                <!--<div class="h_m_ddd floatl"><input wtmap="" type="text" id="wlLineTo0" name="" class="" placeholder=" 请输入到达地" readonly=""></div>-->
                <div
                  id="wlLineTo0"
                  class="h_m_cfd floatl"
                  style="position: relative;">
                  <input
                    readonly
                    type="text"
                    data-toggle="city-picker"
                    data-level="district"
                    style="border: none"
                    placeholder="请输入到达地">
                </div>
              </div>

              <div class=" floatl"><input
                type="button"
                class="h_m_search"
                value=""
                @click="click4()"></div>
            </div>
            <!-- 找专线  E -->
            <!--找货 S -->
            <div
              v-show="$store.state.topNav3.navId === 2"
              id="h_m_search002"
              class="h_m_search2">
              <div class="h_m_search33 floatl">
                <!--<div class="h_m_cfd floatl"><input wtmap="" type="text" id="HuoyuanFrom0" name="" class="" placeholder=" 请输入出发地" readonly=""></div>-->
                <div
                  id="HuoyuanFrom0"
                  class="h_m_cfd floatl"
                  style="position: relative;">
                  <input
                    readonly
                    type="text"
                    data-toggle="city-picker"
                    data-level="district"
                    style="border: none"
                    placeholder="请输入出发地">
                </div>
                <div class="h_m_jt floatl"><img src="../static/images/index/02jt.png"></div>
                <!--<div class="h_m_ddd floatl"><input wtmap="" type="text" id="HuoyuanTo0" name="" class="" placeholder=" 请输入到达地" readonly=""></div>-->
                <div
                  id="HuoyuanTo0"
                  class="h_m_cfd floatl"
                  style="position: relative;">
                  <input
                    readonly
                    type="text"
                    data-toggle="city-picker"
                    data-level="district"
                    style="border: none"
                    placeholder="请输入到达地">
                </div>
              </div>

              <div class=" floatl"><input
                type="button"
                class="h_m_search"
                value=""
                @click="click2()"></div>
            </div>
            <!-- 找货 E -->
            <!--找车 S -->
            <div
              v-show="$store.state.topNav3.navId === 3"
              id="h_m_search003"
              class="h_m_search2">
              <div class="h_m_search33 floatl">
                <!--<div class="h_m_cfd floatl"><input wtmap="" type="text" id="carLineFrom0" name="" class="" placeholder=" 请输入出发地" readonly=""></div>-->
                <div
                  id="carLineFrom0"
                  class="h_m_cfd floatl"
                  style="position: relative;">
                  <input
                    readonly
                    type="text"
                    data-toggle="city-picker"
                    data-level="district"
                    style="border: none"
                    placeholder="请输入出发地">
                </div>
                <div class="h_m_jt floatl"><img src="../static/images/index/02jt.png"></div>
                <!--<div class="h_m_ddd floatl"><input wtmap="" type="text" id="carLineTo0" name="" class="" placeholder=" 请输入到达地" readonly=""></div>-->
                <div
                  id="carLineTo0"
                  class="h_m_cfd floatl"
                  style="position: relative;">
                  <input
                    readonly
                    type="text"
                    data-toggle="city-picker"
                    data-level="district"
                    style="border: none"
                    placeholder="请输入到达地">
                </div>
              </div>

              <div class=" floatl"><input
                type="button"
                class="h_m_search"
                value=""
                @click="click3()"></div>
            </div>
            <!-- 找车 E -->


          </div>
          <div
            class="header_middle3"
            style="margin-top: 35px;">

            <img
              src="../static/index_files/phone.png"
              style="width:200px;display:block">

          </div>

        </div>
      </div>
      <div class="header_bottom center" >
        <ul
          id="nav"
          style="width: 1400px;">
          <span class="re2"/>
          <span class="xin2"/>
          <li id="HomePage"><a href="/">首页</a></li>
          <li
            id="wlzx"
            style="margin-left: 20px;"
          ><a href="/zhuanxian/list" >物流专线</a></li>
          <li
            id="hy"
            style="margin-left: 20px;"><a href="/huoyuan">货源信息</a></li>
          <li
            id="cy"
            style="margin-left: 20px;"><a href="/cheyuan">车源信息</a></li>
          <li
            id="gs"
            style="margin-left: 20px;"><a href="/gongsi">物流公司</a></li>
          <li
            id="wd"
            style="margin-left: 20px;"><a href="/wangdian">物流网点</a></li>
          <li
            id="sx"
            style="margin-left: 20px;"><a href="/shixiao">时效查询</a></li>
          <li
            id="wlyq"
            style="margin-left: 20px;"><a href="/wuliu/list">物流园区</a></li>

          <li
            id="jgzs"
            style="margin-left: 20px;"><a 
              @click.stop.prevent="showNoneTip" 
              href="#">价格指数</a></li>
          <li style="margin-left: 20px;"><a
            target="_blank"
            href="/Insurance">保险商城</a></li>
          <li
            id="news"
            style="margin-left: 20px;"><a href="/zixun">物流资讯</a></li>
        </ul>


      </div>
    </div>
    <div class="clear"/>
  </div>
</template>
<script>
import Top from '../components/top'
export default {
  name: 'CommonNav',
  components: { Top },
  data() {
    return {
      navList: [
        { id: 4, name: '找专线' },
        { id: 2, name: '找货' },
        { id: 3, name: '找车' }
      ]
    }
  },
  head: {
    script: [
      {
        src: '/js/city-picker.js'
      }
    ]
  },
  watch: {
    $route: 'routeChange'
  },
  mounted() {
    this.changeNav()

    if (process.client) {
      seajs.use(['/js/diqu.js?V2'])
      $('.h_m_search1')
        .find('a')
        .on('click', function(e) {
          e.preventDefault()
          var inx = $(this).index()
          $('.h_m_search1')
            .find('a')
            .removeClass('actvied')
            .eq(inx)
            .addClass('actvied')
          $('.h_m_search2')
            .hide()
            .eq(inx)
            .show()
        })

      var code = $.cookie('currentArea')
      var url = code ? '/zhuanxian/' + code + '.htm' : '/zhuanxian/list'
      $('#wlzx a').attr('href', url)
    }
  },
  methods: {
    showNoneTip() {
      if (window.layer) {
        layer.msg('正在开发中')
      } else {
        alert('正在开发中')
      }
    },
    click4() {
      var list1 = [],
        list2 = []
      $('#wlLineFrom0 .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      var startp = list1[0]
      var startc = list1[1]
      var starta = list1[2]

      $('#wlLineTo0 .select-item').each(function(i, e) {
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
        '/zhuanxian/list?startp=' +
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
    },
    click2() {
      var list1 = [],
        list2 = []
      $('#HuoyuanFrom0 .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      var startp = list1[0]
      var startc = list1[1]
      var starta = list1[2]

      $('#HuoyuanTo0 .select-item').each(function(i, e) {
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
        '/huoyuan?startp=' +
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
    },
    click3() {
      var list1 = [],
        list2 = []
      $('#carLineFrom0 .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      var startp = list1[0]
      var startc = list1[1]
      var starta = list1[2]

      $('#carLineTo0 .select-item').each(function(i, e) {
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
    },
    clickNav(item) {
      this.$store.commit('topNav3/setNav', item.id)
    },
    routeChange() {
      $('#nav li').each(function() {
        if ($(this).hasClass('nav-active')) {
          $(this).removeClass('nav-active')
        }
      })
      this.changeNav()
    },
    changeNav() {
      let path = this.$route.path
      if (path === '/') {
        $('#HomePage').addClass('nav-active')
      }
      if (path.indexOf('/huoyuan') === 0) {
        $('#hy').addClass('nav-active')
      }
      if (path.indexOf('/cheyuan') === 0) {
        $('#cy').addClass('nav-active')
      }
      if (path.indexOf('/shixiao') === 0) {
        $('#sx').addClass('nav-active')
      }
      if (path.indexOf('/wuliu') === 0) {
        $('#wlyq').addClass('nav-active')
      }
      if (path.indexOf('/gongsi') === 0) {
        $('#gs').addClass('nav-active')
      }
      if (path.indexOf('/wangdian') === 0) {
        $('#wd').addClass('nav-active')
      }
      if (path.indexOf('/zixun') === 0) {
        $('#news').addClass('nav-active')
      }
      if (path.indexOf('/zhuanxian') === 0) {
        $('#wlzx').addClass('nav-active')
      }
    }
  }
}
</script>
<style scoped>
.header {
  background: none !important;
  margin: 0 auto;
  height: 194px;
  margin-bottom: 30px;
}
.header_middle {
  height: 120px !important;
  background-color: #fff;
}
.header_m {
  height: 120px;
  margin: 0 auto;
}
.header_middle1 {
  margin-top: 25px;
  /* margin-left:155px; */

  float: left;
}
#diqu {
  display: none;
}
.header_middles {
  margin-top: 50px;
  margin-left: 38px;
  display: block;
  width: 150px;
  float: left;
  font-size: 13px;
}
.header_middles a {
  color: #eb434d;
}
.header_middles a span {
  color: #666;
  font-size: 28px;
  float: left;
}
.header_middles a i {
  float: left;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #999;
  margin-left: 12px;
  margin-top: 12px;
}
.header_middle2 {
  margin-top: 20px;
  margin-left: 10px;
  float: left;
  height: 61px;
  width: 540px;
}
.h_m_search1 a:hover {
  text-decoration: none;
  color: #eb434d;
}
.h_m_search1 {
  width: 536px;
  height: 20px;
  padding-bottom: 5px;
}

.h_m_search1 span {
  font-size: 12px;
  padding: 0 20px;
}
.h_m_search1 span:hover {
  color: #eb434d;
}
.h_m_search1 .actvied span {
  color: #3f94ee;
  font-weight: bold;
}
.h_m_search2 {
  width: 540px;
  height: 40px;
}
.h_m_search33 {
  border: solid 2px #3f94ee;
  border-right: 0px;
  width: fit-content;
  height: 36px;
}
.h_m_search33 input {
  width: 180px;
  height: 37px;
  padding-left: 10px;
  /*	color:transparent;*/
}

*:focus {
  outline: none;
  background-color: transparent;
}

.h_m_cfd {
  width: 200px;
}
.h_m_cfd input {
  float: left;
  width: 180px;
  border: 0px;
}
.h_m_ddd input {
  float: left;
  width: 180px;
  border: 0px;
}
.h_m_jt {
  float: left;
  margin-top: 10px;
  margin-right: 10px;
  padding-left: 10px;
}
.h_m_search {
  float: left;
  width: 40px;
  height: 40px;
  border: 0px;
  background-color: #3f94ee;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  background: url(../static/images/index/03search.png) no-repeat #3f94ee center;
}

.header_middle3 {
  margin-top: 70px;
  margin-left: 60px;
  width: 200px;
  height: 50px;
  float: right;
}
.header_bottom {
  /* width: 1200px; */
  width: 100%;
  height: 44px;
  background-color: #3f94ee;
}
.header_bottom ul {
  width: 1200px;
  height: 44px;
  /* margin-left:352px; */
  margin: 0 auto;
  position: relative;
}

.header_bottom ul .xin {
  clear: both;
  top: -10px;
  background: url(../static/images/xin.gif) no-repeat 0px 0px;
  left: 360px;
  width: 19px;
  position: absolute;
  height: 21px;
  z-index: 1;
}
.header_bottom ul .re {
  clear: both;
  top: -10px;
  background: url(../static/images/re.gif) no-repeat 0px 0px;
  left: 150px;
  width: 19px;
  position: absolute;
  height: 21px;
  z-index: 2;
}
.header_bottom ul .xin2 {
  clear: both;
  top: -10px;
  background: url(../static/images/xin.gif) no-repeat 0px 0px;
  left: 420px;
  width: 19px;
  position: absolute;
  height: 21px;
  z-index: 1;
}
.header_bottom ul .re2 {
  clear: both;
  top: -10px;
  background: url(../static/images/re.gif) no-repeat 0px 0px;
  left: 175px;
  width: 19px;
  position: absolute;
  height: 21px;
  z-index: 2;
}

.header_bottom li {
  float: left;
  display: inline;
  line-height: 44px;
  font-size: 16px;
  padding-left: 20px;
  padding-right: 20px;
}
.header_bottom li:hover {
  background-color: #157ee2;
}
.header_bottom li:visited {
  background-color: #157ee2;
}
.header_bottom .nav-active {
  background-color: #157ee2;
}

.header_bottom li a {
  color: #ffffff;
}
</style>
