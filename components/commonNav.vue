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
              height="80px"
              width="135px"
              src="../static/index_files/logor.png"></a></div>
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
                onclick="document.getElementById(&#39;h_m_search001&#39;).style.display=&#39;block&#39;;document.getElementById(&#39;h_m_search002&#39;).style.display=&#39;none&#39;;document.getElementById(&#39;h_m_search003&#39;).style.display=&#39;none&#39;;document.getElementById(&#39;h_m_search004&#39;).style.display=&#39;none&#39;;
      document.getElementById(&#39;h_m_span1&#39;).style.color=&#39;#3f94ee&#39;;document.getElementById(&#39;h_m_span2&#39;).style.color=&#39;#333&#39;;document.getElementById(&#39;h_m_span3&#39;).style.color=&#39;#333&#39;;document.getElementById(&#39;h_m_span4&#39;).style.color=&#39;#333&#39;;	"
                href="#">
                <span
                  id="h_m_span1"
                  style="color:#3f94ee;">找专线</span></a>
              <a
                onclick="document.getElementById(&#39;h_m_search002&#39;).style.display=&#39;block&#39;;document.getElementById(&#39;h_m_search001&#39;).style.display=&#39;none&#39;;document.getElementById(&#39;h_m_search003&#39;).style.display=&#39;none&#39;;document.getElementById(&#39;h_m_search004&#39;).style.display=&#39;none&#39;;
      document.getElementById(&#39;h_m_span2&#39;).style.color=&#39;#3f94ee&#39;;document.getElementById(&#39;h_m_span1&#39;).style.color=&#39;#333&#39;;document.getElementById(&#39;h_m_span3&#39;).style.color=&#39;#333&#39;;document.getElementById(&#39;h_m_span4&#39;).style.color=&#39;#333&#39;;	"
                href="#">
              <span id="h_m_span2">找货</span></a>
              <a
                onclick="document.getElementById(&#39;h_m_search003&#39;).style.display=&#39;block&#39;;document.getElementById(&#39;h_m_search001&#39;).style.display=&#39;none&#39;;document.getElementById(&#39;h_m_search002&#39;).style.display=&#39;none&#39;;document.getElementById(&#39;h_m_search004&#39;).style.display=&#39;none&#39;;
      document.getElementById(&#39;h_m_span3&#39;).style.color=&#39;#3f94ee&#39;;document.getElementById(&#39;h_m_span1&#39;).style.color=&#39;#333&#39;;document.getElementById(&#39;h_m_span2&#39;).style.color=&#39;#333&#39;;document.getElementById(&#39;h_m_span4&#39;).style.color=&#39;#333&#39;;	"
                href="#">
              <span id="h_m_span3">找车</span></a>

            </div>
            <div class="h3"/>
            <!--找专线 S -->

            <div
              id="h_m_search001"
              class="h_m_search2"
              style="display: block;">
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
                id="search_wlLine0"
                type="button"
                class="h_m_search"
                onclick="window.location.href=&#39;/plus/list.php?tid=4&#39;"
                value=""></div>
            </div>
            <!-- 找专线  E -->
            <!--找货 S -->
            <div
              id="h_m_search002"
              class="h_m_search2"
              style="display: none;">
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
                id="search_huoyuan0"
                type="button"
                class="h_m_search"
                onclick="window.location.href=&#39;/plus/list.php?tid=2&#39;"
                value=""></div>
            </div>
            <!-- 找货 E -->
            <!--找车 S -->
            <div
              id="h_m_search003"
              class="h_m_search2"
              style="display: none;">
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
                id="search_cheyuan0"
                type="button"
                class="h_m_search"
                onclick="window.location.href=&#39;/plus/list.php?tid=3&#39;"
                value=""></div>
            </div>
            <!-- 找车 E -->
            <!--找园区 S -->
            <div
              id="h_m_search004"
              class="h_m_search2"
              style="display:none;">
              <div class="h_m_search3 floatl">
                <div class="h_m_cfd floatl"><input
                  id="phLine1From"
                  wtmap=""
                  type="text"
                  name=""
                  class=""
                  placeholder=" 请输入出发地"
                  readonly=""></div>
                <div class="h_m_jt floatl"><img src="../static/images/index/02jt.png"></div>
                <div class="h_m_ddd floatl"><input
                  id="phLine1To"
                  wtmap=""
                  type="text"
                  name=""
                  class=""
                  placeholder=" 请输入到达地"
                  readonly=""></div>
              </div>

              <div class=" floatl"><input
                id=""
                type="button"
                class="h_m_search"
                onclick="window.location.href=&#39;/plus/list.php?tid=1&#39;"
                value=""></div>
            </div>
            <!-- 找园区 E -->

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
          <li><nuxt-link to="/">首页</nuxt-link></li>
          <li
            id="wlzx"
            style="margin-left: 20px;"
            onclick="gotoline();"><a href="#" >物流专线</a></li>
          <li
            id="hy"
            style="margin-left: 20px;"><nuxt-link to="/huoyuan">货源信息</nuxt-link></li>
          <li
            id="cy"
            style="margin-left: 20px;"><nuxt-link to="/cheyuan">车源信息</nuxt-link></li>
          <li
            id="gs"
            style="margin-left: 20px;"><nuxt-link to="/plus/list.php?tid=80">物流公司</nuxt-link></li>
          <li
            id="wd"
            style="margin-left: 20px;"><nuxt-link to="/plus/list.php?tid=81">物流网点</nuxt-link></li>
          <li
            id="sx"
            style="margin-left: 20px;"><nuxt-link to="/shixiao">时效查询</nuxt-link></li>
          <li
            id="wlyq"
            style="margin-left: 20px;"><nuxt-link to="/wuliu">物流园区</nuxt-link></li>

          <li
            id="jgzs"
            style="margin-left: 20px;"><a href="#">价格指数</a></li>
          <li style="margin-left: 20px;"><a
            target="_blank"
            href="/Insurance">保险商城</a></li>
          <li
            id="news"
            style="margin-left: 20px;"><a href="/plus/list.php?tid=12">物流资讯</a></li>
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
  watch: {
    $route: 'routeChange'
  },
  mounted() {
    this.changeNav()
    seajs.use([location.origin + '/js/city-picker.data.js'], function() {
      seajs.use([location.origin + '/js/city-picker.js'], function() {
        seajs.use([location.origin + '/js/diqu.js'])
      })
    })
  },
  methods: {
    routeChange() {
      $('#nav li').each(function() {
        if ($(this).hasClass('nav-active')) {
          $(this).removeClass('nav-active')
        }
      })
      this.changeNav()
    },
    changeNav() {
      switch (this.$route.name) {
        case 'huoyuan':
          $('#hy').addClass('nav-active')
          break
        case 'cheyuan':
          $('#cy').addClass('nav-active')
          break
        case 'shixiao':
          $('#sx').addClass('nav-active')
          break
        case 'wuliu':
          $('#wlyq').addClass('nav-active')
          break
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
  height: 120px;
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
  color: #333;
  font-size: 12px;
  padding: 0 20px;
}
.h_m_search1 span:hover {
  color: #eb434d;
}
.h_m_search2 {
  width: 540px;
  height: 40px;
}
.h_m_search33 {
  border: solid 1px #ccc;
  border-right: 0px;
  width: fit-content;
  height: 40px;
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
.tel_l {
  float: left;
  padding-top: 5px;
}
.tel_r {
  float: left;
}
.tel_r1 {
  height: 28px;
  line-height: 28px;
  font-size: 14px;
  color: #666666;
  font-weight: normal;
}
.tel_r2 {
  height: 28px;
  line-height: 28px;
  color: #eb434d;
  font-size: 24px;
  font-weight: bold;
}
.header_middle4 {
  float: left;
  margin-left: 25px;
  margin-top: 20px;
}
.header_middle5 {
  float: left;
  margin-left: 5px;
  margin-top: 20px;
  font-size: 14px;
  color: #333333;
  width: 20px;
  line-height: 15px;
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
  background-color: #1373bc;
}
.header_bottom li:visited {
  background-color: #1373bc;
}
.header_bottom .nav-active {
  background-color: #1373bc;
}

.header_bottom li a {
  color: #ffffff;
}
</style>
