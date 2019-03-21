
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
        <li
          class="first_li"
          style="background: #fff;">
          <div class="company">
            <div
              class="company_name"
              style="padding: 15px 0 5px 20px"
            ><img
              src="../../static/gongsi/images/01dw.png"
              alt=""><span style="padding-left: 5px;color:#333;font-weight:both">公司所在地</span></div>
            <div class="company_address">
              <ul
                v-for="(item,i) in 1"
                :key="i"
                id="index_map1"
                class="header_middles"
                style="width: 100%;">
                <li
                  style="position: relative;width: 30%;text-align: center;border-radius:5px
                "><span
                  class="spanclass"
                  id="spanclass"
                  data-pinyin="pinyin"
                  name="name">全国</span>
                  <ul
                    class="index_uls"
                    style="position: absolute;left: -1%;top: 98%;display: none;width: 320px;height: 160px;background-color: #ffffff;border: solid 1px #cccccc;box-shadow: 0px 0px 20px rgba(0,0,0,0.3); z-index: 999;padding: 10px 0 10px 10px;">
                    <li
                    style="width: 33%;text-align: center;"><a
                      href="#"
                      class="liclass"
                      id="liclass"
                      data-pinyin="pinyin"
                      name="name"><span>广州</span></a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          class="sec_li"
          style="margin:0 20px;">
          <div class="top">
            <div
              id="test1"
              class="layui-carousel"
              style="width: 100%; height: 250px;">
              <div carousel-item>
                <div
                  v-for="(item, i) in 3"
                  :key="i"><img src="../../static/gongsi/images/02banner.png"></div>
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

            >
              <img
                src="../../static/gongsi/images/03shuju.png"
                alt=""
                style="width: 248px;height: 135px;"
              >
            </a>
          </div>
        </li>
        <li class="last_li">
          <div class="btn_top"><button
            class="layui-btn"
            @click="callme"
            style="width: 298px;background: #3f94ee;height:48px">实力承运商入驻</button></div>
          <div
            class="rem_bot"
            style="margin-top: 10px"
          >
            <div class="rem_bot_t">
              <div
                class="rem_bot_titp"
                style="text-align: center;color: #ffffff;padding-top: 10px; "><img
                  src="../../static/gongsi/images/06tj.png"
                  style=""
                  alt=""><span style="font-size: 20px;text-align: center;vertical-align: middle;padding-left:10px">优质承运商推荐</span>
              <p style="text-align: center;">优质承运商推荐，钱力心</p></div>

            </div>

            <ul
              class="rem_bot_b"
              style="padding: 10px 15px 15px">
              <li
                v-for="(item,i) in listE"
                :key="i"
                style="padding-top: 16px;font-size:16px; padding-left: 10px;">
                <div><span
                  class="rem_bot_b_title"
                  style="color:#333">{{ item.companyName.length>10?item.companyName.substring(0,10)+'..':item.companyName }}</span>
                  <img
                    src="../../static/gongsi/images/04tuijian.png"
                    alt=""></div>
                <p style="padding-top:2px">

                  <span
                    style="padding-right: 16px;color: #666;font-size:14px"
                    v-for="(item, i) in (item.advService.length>3?item.advService.slice(0,3):item.advService)"
                    :key="i">{{ item }}</span>
                </p>
                <p>
                  <a
                    :href="'/member/'+item.id"
                    target="_blank"
                    style="cursor: pointer;color:#2577e3;font-size:14px;padding-top:5px" >进入官网</a></p>
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
            v-for="(item, index) in lineAdviseRecommend.slice(0,8)"
            :key="index"
            style="float:left;width: 248px;height:95px;text-align: center;border: solid 1px #e0e0e0;"><a
              target="_blank"
              :href="'/member/'+ item.id">
              <p style="font-size: 16px;color: #2577e3;padding-top: 20px;">{{ item.companyName?item.companyName:'' }}</p>

              <p
                v-if="item.advService.length"
                style="padding: 10px 0 10px;font-size: 13px;color:#666"
              ><span
                v-for="(item, index) in (item.advService?item.advService.slice(0,2):'')"
                :key="index"
                style="padding-right:10px;color: #666;font-size: 13px;">{{ item }}</span></p>

          </a></li>
        </ul>
      </div>
      <div
        class="header_links_r"
        style="position: relative;margin-left: 20px;background: #fff;padding-left: 20px"
      >
        <p
          style="font-size: 18px;color: #0d91e9;padding: 15px 0 40px 10px;font-weight: bold "
          class="header_links_r_search">运单查询</p>
        <input
          id="yd_nr"
          rows="3"
          cols="20"
          placeholder="请输入运单号，例如："
          style="width: 230px;margin-left: 10px;height:40px">
        <input

          type="button"
          style="height: 42px;">
        <div
          class="ydh"
          style="position: absolute; left: 145px;width: 100px;height: 28px;cursor: pointer; top: 92px;;color:#0d91e9;margin-left: 30px"
        >
          <span>1809260061</span>
        </div>
        <div><button
          id="yd_cx1"
          class="layui-btn"
          style="width: 252px;margin-top: 10px;border-radius: 3px;margin-left: 10px;background:#3f94ee;margin-top: 25px;"
        >立即查询</button></div>
      </div>
    </div>
    <div class="list_box" >
      <div
        class="list_down"
        style="background-color:#fff7e4;border: solid 1px #f7e9c8;padding: 13px 0 14px 17px;font-size: 14px;"><a
          href="http://h5.28tms.com/"
          target="_blank"
          style="color: #2577e3"
      >下载<span style="color: rgb(255,116,23)">【28快运APP】</span>，实时接收推荐的精品车货源与合作信息，在线下单推荐优质承运商，便捷查询运单。</a></div>
      <div class="banner h62">
        <div class="echart_scroll">
          <div
            class="fl echart_scroll_sm"
            style="padding-left: 20px;color: #333333;"
          >最新入驻企业</div>
          <div class="fl echart_scroll_nr">
            <div class="fl echart_scroll_nr800">
              <ul
                class="echart_scroll_nr1"
              >
                <li
                  v-for="(item, i) in listF"
                  :key="i">

                  <a
                    :href="'/member/'+ item.id"
                    target="_blank"><span style="font-size: 14px;color: #333333;">{{ item.companyName?item.companyName:'' }}</span>
                  </a>
                  <!-- </li> -->

                  <!-- <li><a
                  href="javascript:void(0)"
                  target="_blank"
                  v-for="(item, i) in 10"
                  :key="i"><span>广州发合肥</span></a></li> -->



                  <!--<li><a-->
                  <!--href="javascript:void(0)"-->
                  <!--target="_blank"><span>广州发重庆</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>-->
                  <!--<li><a-->
                  <!--href="javascript:void(0)"-->
                  <!--target="_blank"><span>广州发南昌</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>-->
                  <!--<li><a-->
                  <!--href="javascript:void(0)"-->
                  <!--target="_blank"><span>广州发郑州</span><i>重货：</i><font>0.45</font><i>元/公斤&nbsp;&nbsp;</i><font>+5%</font><span>轻货：</span><font>200</font><i>元/方&nbsp;&nbsp;</i><em>-2%</em></a></li>-->
              </li></ul>
              <ul class="echart_scroll_nr2"/>
            </div>
          </div>
        </div>
      </div>
      <div
        class="list_checkbox"
        style="display: flex;line-height: 38px;border: solid 1px #dedede;padding:6px 20px;margin-bottom:20px;background:#fff">

        <div class="form_class">

          <ul>
            <li
            style="float: left;padding-right: 32px">

              <input
                type="checkbox"
                id="buxian"
                name="buxian"
                class="input_class"
                :data-code="listH[0].code"
                :data-pcode="listH[0].pcode">
              <label
                for="buxian"
                style="padding-left: 5px">{{ listH[0].name }}</label>
            </li>
            <li
              v-for="(item, i) in listH.slice(1)"
              :key="i"
              style="float: left;padding-right: 32px"
              class="checkobxli">
              <input
                type="checkbox"
                id="input_class"
                name = "checkbox"
                class="input_class"
                :data-code="item.code"
                :data-pcode="item.pcode">
              <label
                for=""
                style="padding-left: 5px">{{ item.name }}</label>
            </li>
          </ul>
        </div>
        <div style="display: inherit;padding-left:55px;position: relative">
          <input
            type="text"
            placeholder="公司名称"
            class="layui-input parkname"
            style="width: 280px"
            v-model="companyName">
          <a @click="searchCompanyName"><i
            class="layui-icon layui-icon-search"
            style="font-size: 20px; color: #1E9FFF;display: inherit;vertical-align: middle;position: absolute; top: 3px;right: 10px;cursor: pointer"
          /></a>
        </div>

      </div>


      <div class="list_center">
        <div class="list_left">

          <div class="zx_sx"><span class="biaozhi"/><span>物流公司列表</span></div>


          <div
            v-if="!getgsListFn.length"
            class="list_none">
            <span style="  float: left;width: 100%;text-align: center;height: 40px;line-height: 40px;font-size: 16px; margin-top: 40px;">暂时没有找到您要查询的信息，可以看看其他物流公司哦</span>
            <img
              src="../../static/gongsi/images/none_pic.png"
              style="float: left;width: 300px;height: 160px;margin: 20px 0 20px 400px;">
          </div>
          <DetailList :info="getgsListFn"/>
          <img
            src="../../static/gongsi/images/listbg.png"
            alt=""
            width="1040"
          >
          <DetailList :info="getgsListsFn"/>
          <!--分页-->
          <div

            class="box"
            style="float: right;margin-right: 170px;">
            <div
              id="pagination1"
              class="page fl"/>
            <div class="info fl">
            <!--<p>当前页数：<span id="current1">1</span></p>-->
            </div>
          </div>
          <!--分页-->
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
            <div class="list-box-r-phone">
              <div class="zx_p_tit">帮我找优质承运商</div>
              <div class="list-box-r-top">
                <selectMap/>
              </div>
            </div>
            <div class="remqy">
              <div class="zx_sx"><span class="biaozhi"/><span>推荐企业</span>
                <i
                  style="color: rgb(255,116,23);float: right;font-size: 15px;border-bottom: 1px solid rgb(255,116,23);cursor: pointer"
                  @click="findMe">我也想出现在这里</i>
              </div>
              <div
                class="tj_none"
                v-if="listG==[] || listG==null">
                <span>没有相关物流公司推荐</span>
              </div>
              <ul>
                <li
                  style="padding: 13px 6px 10px 6px;background: rgb(208,104,105);margin-top: 10px"
                  v-for="(item, i) in listG"
                  :key="i"
                  :class="'bg'+i">
                  <a
                    :href="'/member/'+ item.id"
                    target="_blank">
                    <p style="font-size: 20px;color: rgb(253,240,3);text-align: center">{{ item.companyName }}</p>
                    <!--<p style="font-size: 25px;color: rgb(253,240,3); text-align: center">广州业务部</p>-->
                    <div
                    style="text-align: center;width: 200px;border: 1px solid #ccc;margin-left: 65px;padding:10px;margin-top: 20px">
                      <i style="color: #ffffff;font-size: 12px;font-weight: bold">+</i>
                      <span
                        style="font-size: 12px;color: #fff;padding-right: 5px"
                        v-for="(item, i) in item.advService"
                        :key="i"

                    >{{ item }}</span></div>
                    <p style="font-size: 20px;color: #fff;margin-top: 20px;text-align: center">
                      <img
                        v-if="item.mobile || item.mobile != null"
                        src="../../static/gongsi/images/phoneico.png"
                        alt="">
                      <span style="vertical-align: middle;padding-left: 5px">{{ item.mobile }}</span>
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <HotList
            :lines="lineHots"
            :gongsi="true"/>
          <!-- <div class="list-box-r-phone">
            <div class="zx_p_tit">帮我找优质承运商</div>
            <div class="list-box-r-top">
              <selectMap/>
            </div>
          </div> -->
          <div class="list-box-r-news">
            <div
              v-if="gongsi_jryw01"
              class="today_news"><div
                class="zx_sx"
                style="border-bottom: 1px solid #ccc;"><span class=""/><span style="color: rgb(54,54,54);padding-left: 10px">今日要闻</span><a
                  href="/zixun/"
                  style="text-align: right;font-size: 14px;color: #ccc;float: right;padding-right: 5px"
                  target="_blank"
              >更多>></a></div>
              <div style="padding: 0 20px 10px 10px;background:#fff">
                <p style="font-size: 15px;color: #333;padding:20px 0 10px;font-weight: bold">{{ gongsi_jryw01.title }}
                </p>
                <div style="display: flex"><img
                  style="width: 120px;height: 98px;display: inline-block;"
                  width="120"
                  height="98"
                  :src="gongsi_jryw01.typeImg||'/gongsi/images/u1075.png'"
                  alt=""><span style="padding-left: 5px">{{ (gongsi_jryw01. description || '').substr(0,28) + '...' }}<a
                    :href="gongsi_jryw01.url"
                    style="color: #0d91e9">[详细]</a></span>
                </div>

                <ul>
                  <li
                    v-for="(item, i) in gongsi_jryw"
                    :key="i"
                    style="padding-top: 15px"><a
                      :href="item.url"
                      target="_blank">{{ item.title }}</a>

                  </li>
                </ul>
              </div>
            </div>
            <div
              v-if="gongsi_wlzx01"
              class="wuliu_news"
              style="margin-top: 10px;">
              <div
                class="zx_sx"
                style="border-bottom: 1px solid #ccc;"><span class=""/><span style="color: rgb(54,54,54);padding-left: 10px">物流资讯</span><a
                  href="/zixun/"
                  style="text-align: right;font-size: 14px;color: #ccc;float: right;padding-right: 5px"
                  target="_blank">更多>></a></div>
              <div style="padding: 0 20px 10px 10px;background:#fff">
                <p style="font-size: 15px;color: #333;padding:20px 0 10px;font-weight: bold">{{ gongsi_wlzx01.title }}
                </p>
                <div style="display: flex"><img
                  width="120"
                  height="98"
                  :src="gongsi_wlzx01.typeImg||'/gongsi/images/u1075.png'"
                  alt=""><span style="padding-left: 5px">{{ (gongsi_wlzx01. description || '').substr(0,28) + '...' }}<a
                    :href="gongsi_wlzx01.url"
                    style="color: #0d91e9">[详细]</a></span></div>
                <ul>
                  <li
                    v-for="(item, i) in gongsi_wlzx"
                    :key="i"
                    style="padding-top: 15px"><a
                      :href="item.url"
                      target="_blank">{{ item.title }}</a>

                  </li>
                </ul>
              </div>
            </div>
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
      :types="types"
      @close="noaddFn"/>
  </div>
</template>
<script>
import DetailList from '../../components/detailList'
import HotList from '../../components/hotList'
import selectMap from '../zhuanxian/selectMap'
import FooterLinks from '../../components/footerLinks'
import Add from './add'
async function getGSList($axios, currentPage, vo = {}, companyName) {
  let parm = vo
  parm.currentPage = currentPage
  parm.pageSize = 20
  parm.companyName = companyName
  let aurl = ''

  let res = await $axios.post(aurl + '/28-web/logisticsCompany/list', parm)
  if (res.data.status === 200) {
    return {
      list: res.data.data.list,
      pages: res.data.data.pages,
      currentPage: res.data.data.pageNum
    }
  } else {
    return { list: [], pages: 0, currentPage: 1 }
  }
}
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
      pages: 0, //总页数
      currentPage: 1, //当前页
      isAdd: false,
      types: 0,
      companyName: '',
      isChecked: false,
      checkboxItem: [],
      gsList: [],
      getgsList: [],
      vo: {},
      locationCity: ''
      // lineHots: []
    }
  },
  async fetch({ store, params, $axios, error, app }) {
    // 今日要闻
    await store.dispatch('news/GETNEWSINFO', {
      params: {
        channelIds:
          '94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110',
        count: 6,
        orderBy: 2,
        channelOption: 0
      },
      name: 'gongsi_jryw',
      preFn: data => {
        // console.log(data, 'datadfdf')
        return data.map((el, index) => {
          el.url = el.url.replace(
            /http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,
            '/zixun'
          )

          return el
        })
      }
    })
    // 物流资讯
    await store.dispatch('news/GETNEWSINFO', {
      params: {
        channelIds: '101',
        count: 6,
        orderBy: 9,
        channelOption: 0
      },
      name: 'gongsi_wlzx',
      preFn: data => {
        return data.map((el, index) => {
          el.url = el.url.replace(
            /http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,
            '/zixun'
          )

          return el
        })
      }
    })
  },
  async asyncData({ $axios, app, query }) {
    // console.log(query, 'queryquery')
    let aurl = ''
    let vo = {
      currentPage: 1,
      pageSize: 5,
      // companyName: query.companyName ? query.companyName : '',
      city: query.locationCity ? query.locationCity : '',
      province: query.locationProvince ? query.locationProvince : '',
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
    }
    let vo1 = vo
    delete vo1.currentPage
    delete vo1.pageSize

    // delete vo1.locationProvince
    // delete vo1.locationCity
    // /logisticsCompany/adviseRecommend
    // 广告推荐物流公司
    let [listA, listC, listD, listE, listF, listG, listH] = await Promise.all([
      $axios.get(aurl + '/28-web/logisticsCompany/popularity'),
      $axios.post(aurl + `/28-web/logisticsCompany/list/related/links`, vo1),
      $axios.get(aurl + `/28-web/logisticsCompany/adviseRecommend`),
      $axios.get(
        aurl + `/28-web/logisticsCompany/excellent?currentPage=1&pageSize=3`
      ),
      $axios.get(aurl + `/28-web/logisticsCompany/enter`),
      $axios.get(aurl + `/28-web/logisticsCompany/enterpriseRecommend`),
      $axios.get(aurl + '/28-web/sysDict/getSysDictByCodeGet/AF025')
    ])
    if (listD.data.status == 200) {
      listD.data.data.forEach(item => {
        item.advService = item.productServiceNameList
          ? item.productServiceNameList
          : item.otherServiceNameList

        // console.log(item.advService, 'advService')
      })
    }
    if (listE.data.status == 200) {
      listE.data.data.forEach(item => {
        item.advService = item.productServiceNameList
          ? item.productServiceNameList
          : item.otherServiceNameList
        // console.log(item.advService.slice(3), 'bbbb')
      })
    }
    if (listG.data.status == 200) {
      listG.data.data.forEach(item => {
        item.advService = item.productServiceNameList
          ? item.productServiceNameList
          : item.otherServiceNameList
      })
    }
    console.log(listE.data.data, 'listE')

    let codeObj = {
      name: '不限',
      code: ''
    }
    if (listH.data.status == 200) {
      listH.data.data.unshift(codeObj)
      listH.data.data.forEach(item => {
        item.checked = false
      })
    }

    //checkbox

    // console.log(listH.data.data, 'listHlistH')

    // getGSList
    let gsList = await getGSList($axios, 1, vo, '')
    gsList.list.forEach(item => {
      // item.num = Math.ceil(Math.random() * 30)
      let arr = (item.id || '').split('')
      let num = 0
      arr.forEach(el => {
        num += el.charCodeAt(0) || 0
      })
      item.num = (num % 30) + 1
      let authStatus = item.authStatus
      let collateral = item.collateral
      let isVip = item.isVip
      let credit = item.credit

      if (!isVip || isVip == 0) {
        item.showIsVip = false
      }
      if (authStatus == 'AF0010403') {
        item.isAuthStatus = true
        item.isRenZhen = true

        // linedataB.data.data.renZhen = '暂无认证信息'
      }
      if (authStatus != 'AF0010403') {
        item.isAuthStatus = false
        item.isRenZhen = false

        // linedataB.data.data.renZhen = '暂无认证信息'
      }

      if (collateral > 0) {
        item.collateral = item.collateral + '元'
        item.isCollateral = true
      }
      if (collateral <= 0) {
        item.collateral = ''
        item.isCollateral = false
      }
      if (
        authStatus != 'AF0010403' &&
        (!isVip || isVip == 0) &&
        (!collateral || collateral == 0)
      ) {
        // linedataB.data.data.isRenZhen = true
        // $('.arc_right07').html('<br/>暂无认证信息')
      }

      if (credit >= 0 && credit <= 3) {
        item.eq1 = 1
        item.isEq = true
        // linedataB.data.data
      }
      if (credit >= 4 && credit <= 10) {
        item.eq1 = 2
        item.isEq = true
      }
      if (credit >= 11 && credit <= 40) {
        item.eq1 = 3
        item.isEq = true
      }
      if (credit >= 41 && credit <= 90) {
        item.eq1 = 4
        item.isEq = true
      }
      if (credit >= 91 && credit <= 150) {
        item.eq1 = 5
        item.isZuan = true
      }
      if (credit >= 151 && credit <= 250) {
        item.hZhuan = 1
        item.isHZhuan = true
      }
      if (credit >= 251 && credit <= 500) {
        item.hZhuan = 2
        item.isHZhuan = true
      }
      if (credit >= 500 && credit <= 1000) {
        item.hZhuan = 3
        item.isHZhuan = true
      }
      if (credit >= 1001 && credit <= 2000) {
        item.hZhuan = 4
        item.isHZhuan = true
      }
      if (credit >= 2001) {
        item.hZhuan = 5
        item.isHZhuan = true
      }
    })

    // console.log(listG.data.data, 'listGlistG.list')
    return {
      lineHots: listA.data.status == 200 ? listA.data.data : [],
      lineLinks: listC.data.status == 200 ? listC.data.data : [],
      lineAdviseRecommend: listD.data.status == 200 ? listD.data.data : [],
      listE: listE.data.status == 200 ? listE.data.data : [],
      gsList: gsList.list,
      // listF: listF.data.data == [] ? '' : '',
      listF: listF.data.status == 200 ? listF.data.data : [],
      listG: listG.data.status == 200 ? listG.data.data : [],
      listH: listH.data.status == 200 ? listH.data.data : [],
      vo: vo
    }
  },
  computed: {
    gongsi_jryw() {
      return this.$store.state.news.gongsi_jryw.slice(1)
    },
    gongsi_wlzx() {
      return this.$store.state.news.gongsi_wlzx.slice(1)
    },
    gongsi_jryw01() {
      return this.$store.state.news.gongsi_jryw[0]
    },
    gongsi_wlzx01() {
      return this.$store.state.news.gongsi_wlzx[0]
    },
    getgsListFn() {
      return this.gsList.slice(0, 10)
      //       item.num = (num % 30) + 1
      // return this.gsList.slice(0, 10).forEach(item => {
      //   item.num = (num % 30) + 1
      // })
    },
    getgsListsFn() {
      return this.gsList.slice(10)
    }
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/gongsi/css/list_wlgs.css' },
      { rel: 'stylesheet', href: '/gongsi/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' },
      { rel: 'stylesheet', href: '/layer/dist/css/layui.css' }
    ],
    script: [{ src: './js/jquery.pagination.min.js' }]
  },
  mounted() {
    // this.companyName = this.$route.query.companyName

    // console.log(this.$route.query.companyName, '$route')
    // this.companyName = decodeURI(GetUrlParam('companyName')) || ''
    var newArr = new Array()
    var _newArr = new Array()
    let _this = this
    var uniqueNames = []
    var newArr = []
    $('#buxian').change(async function() {
      if ($(this).prop('checked')) {
        $('input[name=checkbox]').prop('checked', false)
        newArr = []
        _this.checkboxItem = newArr
        // console.log(_this.checkboxItem, 'uniqueNames1')
        let vo = {}
        vo.otherServiceCodes = _this.checkboxItem
        vo.locationCity =
          decodeURI(GetUrlParam('locationCity')) == 'null'
            ? ''
            : decodeURI(GetUrlParam('locationCity'))
        vo.locationProvince =
          decodeURI(GetUrlParam('locationProvince')) == 'null'
            ? ''
            : decodeURI(GetUrlParam('locationProvince'))
        let getgsList = await getGSList(_this.$axios, 1, vo, _this.companyName)
        _this.gsLists = getgsList.list
      } else {
      }
    })

    $('input[name=checkbox]:checkbox').click(async function() {
      newArr.length = 0
      $('input[name=checkbox]:checkbox').each(function() {
        if ($(this).prop('checked')) {
          newArr.push($(this).attr('data-code'))
          $('#buxian').prop('checked', false)
          console.log(newArr, 'newArrnewArr')
          // newArr = []
        } else {
          console.log($(this).attr('data-code'), '$(this)')
        }
      })
      uniqueNames = []
      $.each(newArr, function(i, el) {
        if ($.inArray(el, uniqueNames) === -1) {
          // uniqueNames = []
          uniqueNames.push(el)
        }
      })

      // var checkboxItem = []
      _this.checkboxItem = uniqueNames
      let vo = {}
      vo.otherServiceCodes = _this.checkboxItem
      vo.locationCity =
        decodeURI(GetUrlParam('locationCity')) == 'null'
          ? ''
          : decodeURI(GetUrlParam('locationCity'))
      vo.locationProvince =
        decodeURI(GetUrlParam('locationProvince')) == 'null'
          ? ''
          : decodeURI(GetUrlParam('locationProvince'))
      let getgsList = await getGSList(_this.$axios, 1, vo, _this.companyName)
      _this.gsList = getgsList.list
      _this.gsList.forEach(item => {
        // item.num = Math.ceil(Math.random() * 30)
        let arr = (item.id || '').split('')
        let num = 0
        arr.forEach(el => {
          num += el.charCodeAt(0) || 0
        })
        item.num = (num % 30) + 1
      })
      // console.log(getgsList.list, vo, this.gsList, 'quanxuan')
    })
    seajs.use(
      [
        '../js/city.js',
        '/layer/layer.js',
        '/layer/dist/layui.js',
        '/js/AFLC_API.js'
      ],
      function() {
        seajs.use(['../js/city-picker.js', '/js/AFLC_API.js'], function() {
          seajs.use(['../gongsi/js/list_wlgs.js'], function() {
            seajs.use(['../js/collection.js', '../js/diqu1.js'], function() {
              seajs.use(['../js/gaodemap2.js'], function() {
                // this.loadPagination()
                // $('#buxian').change(function() {
                //   // var item = $('.input_class')
                //   console.log($(this).attr('data-code'), 'data-code')
                //   if ($(this).prop('checked')) {
                //     $('input[name=checkbox]').prop('checked', false)
                //   } else {
                //   }
                // })
                // var newArr = new Array()
                // $('input[name=checkbox]:checkbox').click(function() {
                //   $('input[name=checkbox]:checkbox').each(function() {
                //     // newArr = []
                //     if ($(this).prop('checked')) {
                //       newArr.push($(this).attr('data-code'))
                //     }
                //   })
                //   var uniqueNames = []
                //   $.each(newArr, function(i, el) {
                //     if ($.inArray(el, uniqueNames) === -1)
                //       uniqueNames.push(el)
                //     this.checkboxItem.push(el)
                //   })
                //   // var checkboxItem = []
                //   // checkboxItem.push(uniqueNames)
                //   console.log(this.checkboxItem, 'uniqueNames')
                // })

                //
                layui.use('form', function() {
                  var form = layui.form
                  form.render()
                })

                var speed = 30
                var tab = $('.echart_scroll_nr')
                var tab1 = $('.echart_scroll_nr1')
                var tab2 = $('.echart_scroll_nr2')
                tab2.html(tab1.html())
                // console.log('tab2:' + tab2.html())
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
                // $('#pagination1').pagination({
                //   currentPage: 1,
                //   totalPage: process02(1),
                //   callback: function(current) {
                //     $('#current1').text(current)
                //     process02(current)
                //     window.location.href = '#top'
                //   }
                // })
              })
            })
          })
        })
      }
    )
  },
  methods: {
    searchCompanyName() {
      console.log(this.companyName, 'this.companyName')
      let vo = {}
      vo.locationCity =
        decodeURI(GetUrlParam('locationCity')) == 'null'
          ? ''
          : decodeURI(GetUrlParam('locationCity'))
      vo.locationProvince =
        decodeURI(GetUrlParam('locationProvince')) == 'null'
          ? ''
          : decodeURI(GetUrlParam('locationProvince'))
      getGSList(this.$axios, 1, vo, this.companyName).then(res => {
        this.gsList = res.list
        this.gsList.forEach(item => {
          item.num = (num % 30) + 1
        })
        // console.log(res, 'res', this.gsList)
      })
    },
    loadPagination() {
      $('#pagination1').pagination({
        currentPage: this.currentPage,
        totalPage: this.pages,
        callback: async current => {
          $('#current1').text(current)
          let obj = await getGSList(this.$axios, current, this.vo)
          this.gsList = obj.list
          this.currentPage = obj.currentPage
          window.location.href = '#top'
        }
      })
    },
    getFung(vo) {
      let gslist = getGSList(this.$axios, 1, vo)
    },
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
  .header_links_l ul li {
    background: url('../../static/gongsi/images/05bg.png');
  }
  .rem_bot_t {
    background: url('../../static/gongsi/images/tj.png') no-repeat;
    height: 95px;
  }
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
  .form_class {
    ul {
      li {
        input {
          width: 16px;
          height: 16px;
          margin-top: 0;
          background-color: #fff;
          border: 1px solid #c9c9c9;
          border-radius: 2px;
          color: #fff;
          text-align: center;
          line-height: 15px;
          -webkit-appearance: none;
          -moz-appearance: none;
          -ms-appearance: none;
          -o-appearance: none;
          appearance: none;
          outline: none;
        }

        input:hover {
          border-color: #43adea;
        }

        input:checked {
          color: #fff;
          background-color: #43adea;
          border: 1px solid #43adea;
        }

        input:after {
          content: '✔';
        }
      }
    }
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
  // 推荐企业
  .list_right {
    ul {
      .bg0,
      .bg2,
      .bg4，,
      .bg6,
      .bg8,
      .bg10,
      .bg12 {
        background: rgb(208, 104, 106) !important;
      }
      .bg0 {
        background: rgb(208, 104, 106) !important;
      }
      .bg1,
      .bg3,
      .bg5,
      .bg7,
      .bg9,
      .bg11 {
        background: rgb(25, 138, 194) !important;
      }
      a:hover {
        color: #fff;
      }
    }
  }
  // 推荐企业
  .first_li {
    .company_address {
      ul#index_map1 {
        li.spanclass:hover {
          background: rgb(78, 142, 212);
          color: #fff !important;
        }
      }
    }
  }
}
</style>
