<template>
  <div class="wzlwangdian">
    <div class="list_box" >
      <div class="list_nav">
        <a href="/">物流首页</a>&gt;<a
          id="list_nav_a"
          href="">物流网点</a>
      </div>
      <div class="list_left">
        <div
          class="w1036"
          style=" background-color: #fff;margin-bottom: 20px;">
          <div class="select_con">
            <dl>
              <dt>所在地：</dt>
              <dd><form
                name="zxaddform"
                method="post"
                action=""
                style="float:left;"
              >
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
                  id="addressFrom"
                  class="fl list_input"
                  style="position:relative;" >
                  <input
                    name="cfd"
                    style="height: 100%;width:100%;border: none;outline: none;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    placeholder="请输入出发地" >
                </div>
                <div
                  id="addressTo"
                  class="fl list_input"
                  style="position:relative" >
                  <input
                    name="ddd"
                    style="height: 100%;width:100%;border: none;outline: none;"
                    wtmap="detail"
                    type="text"
                    placeholder="请输入详细地址查附近网点" >
                </div>
                <div 
                  
                style="float:left;position:relative;font-size:14px;" >
                  关键字：
                  <input
                    v-model="keyword"
                    name="cfd"
                    type="text"
                    class="list_input"
                    placeholder="公司/网点名称/地址/电话" >
                </div>
              </form>
                <br>
              </dd>
              <!-- <dt>公司名称&nbsp;:</dt>
              <dd >
                <input
                  id="companyName"
                  v-model="companyName"
                  name="cfd"
                  type="text"
                  class="list_input"
                  placeholder="请输入公司或网点名称" >
              </dd> -->
              <dt>所属园区:</dt>

              <dd
                id="tjcx_00"
                style="position: relative;">
                <input
                  id="select_wlyq"
                  v-model="parkName"
                  placeholder="请选择园区"
                  class="list_wlzx_yq js_yq">
                <div id="list_wlzx_yq">
                  <div class="wlzx_yq_bt js_yq">
                    <div
                      id="wlyq_pos"
                      class="fl list_wlyq_input"
                      style="position:relative;" >
                      <input
                        style="height: 100%;"
                        data-toggle="city-picker"
                        data-level="district"
                        type="text"
                        name=""
                        placeholder="请选择园区所在地" >
                    </div>
                    <input
                      id="wlyq_name"
                      v-model="vo.parkName"
                      class="list_wlyq_input"
                      placeholder="请输入园区名称" >
                    <input
                      class="list_wlyq_cx"
                      readonly=""
                      value="查询"
                      @click="seachlist"
                    >
                  </div>
                  <div
                    id="js010"
                    class="wlzx_yq_nr">
                    <div 
                      v-if="logisticsPark.length==0"
                      class="wlzx_yq_none">
                      <font>暂无园区信息</font>
                    </div>

                    <div
                      v-for="(item,index) in logisticsPark"
                      :key="index"
                      class="wlzx_yq_item"
                      @click="addTitle(item)"
                    >
                      <font id="wlzx_yq_01">{{ item.parkName }}</font>
                      <span id="wlzx_yq_02">{{ item.parkAddress }}</span>
                    </div>
                  </div>
                </div>
              </dd>
              <div class="showbox">
                <dt>品牌&nbsp;:</dt>
                <dd id="tjcx_02" >
                  <a
                    v-for="(item,index) in AF029"
                    :class="[item.code === vo.belongBrandCode ? 'now':'all']"
                    :key="index"
                    href="javascript:"
                    @click="AF029Click(item)">{{ item.name }}</a>
                </dd>
                <dt >其他&nbsp;:</dt>
                <dd id="tjcx_03">
                  <a
                    v-for="(item,index) in AF025"
                    :class="[item.code === vo.otherServiceCode ? 'now':'all']"
                    :key="index"
                    href="javascript:"
                    @click="AF025Click(item)">{{ item.name }}</a>
                </dd>
              </div>
              <dd id="tjcx_04">
                <input
                  id="search_wangdian"
                  name="Submit2"
                  readonly=""
                  value=" 搜索 "
                  class="list_button"
                  @click="search()">
                <input
                  id="flush"
                  name="Submit2"
                  readonly=""
                  value="重置 "
                  @click="reload()">
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
              </dd>
            </dl>
          </div>
        </div>
        <div
          id="js002"
          class="w1036" >
          <!-- <div class="zx_sx"><span class="biaozhi"/><span id="wangdian_list">网点列表</span></div> -->
          <div class="list_tiaoj">
            <span
              id="seq1"
              class="active">综合排序</span>
            <span
              id="seq2"
              title="距离从近到远">距离最近</span>
            <div class="wzlwad">
              <span class="icon active">
                <img 
                  style="width:25px;float:left;margin:8px;" 
                  src="/wd/images/mue.png">
              </span>
              <span class="icon">
                <img 
                  style="width:25px;float:left;margin:8px;"
                  src="/wd/images/map.png">
              </span>
              <span class="city">在{{ vo.startProvince + '-' + vo.startCity }}共找到<strong>{{ total }}</strong>个网点</span>
            </div>
          </div>

          <div
            v-if="WangdiangInfoList.length === 0"
            class="list_none"
            style="display: block">
            <span>暂时没有找到您要查询的信息，可以看看其他线路哦</span>
            <img src="/images/none_pic.png">
          </div>
          <ul
            v-for="(item,index) in WangdiangInfoList"
            :key="index"
            class="wlzx_list"
          >

            <li class="wlzx_list_2">
              <p class="p1"><a
                id="nr01"
                :href="'/member/'+ item.companyId"
                target="_blank">{{ item.pointName }}</a></P>
              <p class="p2"><a
                id="nr01_1"
                :href="'/member/'+ item.companyId"
                target="_blank"><font id="nr02">{{ item.companyName ? item.companyName : '普通货主' }}</font></a></p>
              <p class="p3"><i>地址：</i><font
                id="nr03"
                class="">{{ item.pointAddress }}</font></p>
              <p 
                class="p4" 
                v-if="item.distance"><i>约</i><em id="nr04">{{ item.distance }}</em><i>公里</i></p>
            </li>
            <li class="wlzx_list_3">
              <p class="p1"><i>联系人：</i><span id="nr05">{{ item.contactsName }}</span><a
                target="_black"
                style="margin-left:10px;" 
                :href="'http://wpa.qq.com/msgrd?v=3&uin='+ item.qq+'&site=qq&menu=yes'"
                v-if="item.qq != ''"> <img src="/images/article_wlzx/15qq.gif"></a></P>
              <p class="p2"><i>电话：</i><span id="nr06">{{ item.mobile }}</span></p>
              <p class="p2"><i>固话：</i><span id="nr06">{{ item.contactsTel }}</span></p>
            </li>
            <li class="wlzx_list_4">
              <p
                v-if="item.authStatus === 'AF0010403'"
                class="p1"><img
                  id="list_shiming"
                  src="/wd/images/10shiming.png"></P>
              <p
                v-if="item.isVip && item.isVip === 1"
                class="p2" ><img
                  id="list_xinyong"
                  src="/wd/images/11xinyong.png"></p>
              <p
                v-if="item.collateral && item.collateral !== 0"
                class="p3" ><img
                  id="list_danbao"
                  src="/wd/images/12danbao.png"></p>
            </li>
            <li class="wlzx_list_6">
              <p class="p1"><a 
                :href="'/member/'+ item.companyId + '-order?publishId=' + item.companyId"
                target="_blank"><input
                  value="下单"
                  readonly></a>
              </p><p class="p2"><a 
                :href="'/member/'+ item.companyId"
                target="_blank"><input
                  value="查看"
                  readonly
              ></a>
            </p></li>
          </ul>
        </div>
        <div
          class="box"
          style="float: right;margin-right: 170px;">
          <div
            id="pagination1"
            class="page fl"/>
          <div class="info fl"/>
        </div>
        <!-- gongsi -->
        <div class="header_links_l">
          <ul>
            <li
              v-for="(item, index) in lineAdviseRecommend.slice(0,8)"
              :key="index"
              style="float:left;width: 260px;height:97px;text-align: center;"><a
                target="_blank"
                :href="'/member/'+ item.id">
                <p style="font-size: 16px;color: #2577e3;padding-top: 20px;">{{ item.companyName.length>12?item.companyName.substring(0,12)+'..':item.companyName }}</p>

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
        <!-- footer -->
        <div class="lll-recommend clearfix">
          <div class="lll-recommend clearfix">
            <div
              class="zx_sx1"
            ><span class="biaozhi"/><span class="zx_sxl_tit">{{ lineLinks.brandRecommend.label }}</span></div>
            <FooterLinks :info="lineLinks.brandRecommend.links"/>
          </div>
        </div>
        <div class="lll-recommend clearfix">
          <div
            class="zx_sx1"
            style="border-color: #e7e7e7"
          ><span class="biaozhi"/><span>{{ lineLinks.interestedRecommend.label }}</span></div>
          <FooterLinks
            :info="lineLinks.interestedRecommend.links"
            :types="types"/>
        </div>
      </div>
      <div class="list_right">
        <div class="last_li">
          <div class="btn_top">
            <button
              class="layui-btn"
              @click="callme"
              style="width: 298px;background: #3f94ee;height:48px;color:#fff;border:none">实力承运商入驻</button></div>
          <div
            class="rem_bot"
            style="margin-top: 10px"
          >
            <div class="rem_bot_t">
              <div
                class="rem_bot_titp"
                style="text-align: center;color: #ffffff;padding-top: 10px; ">
                <img
                  src="/gongsi/images/06tj.png"
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
                style="padding-top: 16px;font-size:14px; padding-left: 10px;">
                <div><span
                  class="rem_bot_b_title"
                  style="color:#333;vertical-align: middle;padding-right:10px">{{ item.companyName.length>10?item.companyName.substring(0,10)+'..':item.companyName }}</span>
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
        </div>
        <!-- 帮我找优质运动start -->
        <div class="list_help">
          <div class="list-box-r-top">
            <h2 class="list_help_title">帮我找优质承运商</h2>
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
                <i class="ltl-icons ss56-common-sprite1 ltl-ico-start"/>
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
                <i class="ltl-icons ss56-common-sprite2 ltl-ico-end"/>
              </div>
              <textarea
                id="form2"
                v-model="checkNotice.select"
                maxlength="100"
                style="padding:18px;height:80px;width:238px;"
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
        <div
          class="header_links_r"
          style="margin:20px 0;float:left;width:100%;position: relative;background-color: #fafcff;float:left;border: solid 1px #deedfd;box-sizing:border-box;">
          <p
            style="font-size: 18px;color: #0d91e9;box-sizing:border-box;height:50px;line-height:50px;padding-left:20px;font-weight: bold;border-bottom:1px solid #2577e3;margin-bottom:20px;"
            class="header_links_r_search">运单查询</p>
          <input
            id="yd_nr"
            rows="3"
            cols="20"
            maxlength="20"
            placeholder="请输入运单号，例如："
            style="width: 262px;margin-left: 10px;height:40px;">
          <input
            type="button"
            style="height: 42px;border-right:none;">
          <div
            class="ydh"
            style="position: absolute; left: 145px;width: 100px;height: 28px;cursor: pointer; top: 82px;;color:#0d91e9;margin-left: 30px"
          >
            <span>1809260061</span>
          </div>
          <div><button
            id="yd_cx1"
            class="layui-btn"
            style="width: 277px;height:40px;line-height:40px;border-radius: 4px;border:none;border-radius: 3px;margin:20px 10px;background:#3f94ee;color:#fff;"
          >立即查询</button></div>
        </div>
        <div class="remqy">
          <div class="zx_sx"><span class="biaozhi"/><span>推荐企业</span>
            <i
              style="color: #EE8C18;float: right;font-size: 15px;cursor: pointer;padding-right:10px;text-decoration:underline;"
              @click="findMe">我也想出现在这里</i>
          </div>
          <div
            class="tj_none"
            v-if="listG==[] || listG==null">
            <span>没有相关物流公司推荐</span>
          </div>
          <ul>
            <li
              style="margin:10px;padding: 13px 6px 10px 6px;background: rgb(208,104,105);"
              v-for="(item, i) in listG"
              :key="i"
              :class="'bg'+i">
              <a
                :href="'/member/'+ item.id"
                target="_blank">
                <p style="font-size: 20px;color: rgb(253,240,3);text-align: center">{{ item.companyName.length>10?item.companyName.substring(0,10) +'..':item.companyName }}</p>
                 
                <div
                style="text-align: center;width: 200px;border: 1px solid #ccc;padding:10px;margin:20px 45px 0 32px;">
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
        <ComNews
          :info="gongsi_jryw"
          :infoyw="gongsi_jryw01"
          :infos="gongsi_wlzx"
          :infosyw="gongsi_wlzx01"/>
      </div>
    </div>

    <Add
      :show = "isAdd"
      :types="types"
      @close="noaddFn"/>
    <div class="h70"/>
  </div>
</template>

<script>
import ComNews from '../../components/comNews'
import Add from '../gongsi/add'
import FooterLinks from '../../components/footerLinks'
async function getWdiangSearchList($axios, vo) {
  let res = await $axios.post('/28-web/logisticsPark/search', vo)
  if (res.data.status === 200) {
    return res.data.data.list
  } else {
    return { list: [] }
  }
}

async function getWangdiangInfoList($axios, currentPage, vo = {}) {
  let parm = vo
  parm.currentPage = currentPage
  parm.pageSize = 10
  let prefix = ''

  let res = await $axios.post('/28-web/pointNetwork/list', parm)
  if (res.data.status === 200) {
    res.data.data.list.forEach(item => {
      if (item.pointName && item.pointName.length > 15) {
        item.pointName = item.pointName.substring(0, 15) + '..'
      }
      if (item.companyName && item.companyName.length > 15) {
        item.companyName = item.companyName.substring(0, 15) + '..'
      }
      if (item.pointAddress && item.pointAddress.length > 15) {
        item.pointAddress = item.pointAddress.substring(0, 15) + '..'
      }
    })
    // console.log(res.data.data, 'res.data.data.total')
    return {
      list: res.data.data.list,
      pages: res.data.data.pages,
      currentPage: res.data.data.pageNum,
      total: res.data.data.total
    }
  } else {
    return { list: [], pages: 0, currentPage: 1 }
  }
}
async function getRecommendList($axios, vo) {
  let parm = vo
  parm.currentPage = 1
  parm.pageSize = 10
  let res = await $axios.post(
    '/28-web/logisticsCompany/pointNetwork/recommend',
    {
      province: parm.startProvince,
      city: parm.startCity,
      ...parm
    }
  )
  if (res.data.status === 200) {
    return res.data.data.list
  } else {
    return []
  }
}
export default {
  name: 'Index',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/wangdian.css' },
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' },
      { rel: 'stylesheet', href: '/layer/dist/css/layui.css' }
    ],
    script: [{ src: '/js/jquery.pagination.min.js' }]
  },
  components: {
    ComNews,
    Add,
    FooterLinks
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
      wangdianInfoList: [],
      totalPage: 1,
      currentPage: 1,
      isAdd: false,
      types: 0,
      parkName: '',
      startProvince: '',
      startCity: '',
      startArea: '',
      endProvince: '',
      endCity: '',
      endArea: '',
      companyName: '',
      keyword: ''
    }
  },
  async asyncData({ $axios, app, query, error }) {
    let pos = query.pos ? query.pos.split(',') : ['', '']
    let vo = {
      startProvince: query.startProvince
        ? query.startProvince
        : app.$cookies.get('currentProvinceFullName'),
      startCity: query.startCity
        ? query.startCity
        : app.$cookies.get('currentAreaFullName'),
      startArea: query.startArea ? query.startArea : '',
      endProvince: query.endProvince ? query.startProvince : '',
      endCity: query.endCity ? query.endCity : '',
      endArea: query.endArea ? query.endArea : '',
      authStatus: query.authStatus ? query.authStatus : '',

      parkName: query.parkName ? query.parkName : '',
      otherServiceCode: query.otherServiceCode ? query.otherServiceCode : '',
      belongBrandCode: query.belongBrandCode ? query.belongBrandCode : '',
      companyName: query.companyName ? query.companyName : '',
      keyword: query.keyword ? query.keyword : '',
      latitude: pos[1],
      longitude: pos[0],
      parkId: query.parkId || ''
    }
    vo.province = vo.startProvince
    vo.city = vo.startCity
    vo.area = vo.startArea
    let WangdiangInfoList = await getWangdiangInfoList($axios, 1, vo)
    let recommendList = await getRecommendList($axios, vo)
    let listC = await $axios.post(
      `/28-web/logisticsCompany/list/related/links`,
      vo
    )
    let listD = await $axios.get(`/28-web/logisticsCompany/adviseRecommend`)
    if (listD.data.status == 200) {
      listD.data.data.forEach(item => {
        item.advService = item.productServiceNameList
          ? item.productServiceNameList
          : item.otherServiceNameList
      })
    }
    let listE = await $axios.get(
      `/28-web/logisticsCompany/excellent?currentPage=1&pageSize=3`
    )
    if (listE.data.status == 200) {
      listE.data.data.forEach(item => {
        item.advService = item.productServiceNameList
          ? item.productServiceNameList
          : item.otherServiceNameList
      })
    }
    let listG = await $axios.get(`/28-web/logisticsCompany/enterpriseRecommend`)
    if (listG.data.status == 200) {
      listG.data.data.forEach(item => {
        item.advService = item.productServiceNameList
          ? item.productServiceNameList
          : item.otherServiceNameList
      })
    }
    recommendList.forEach(item => {
      if (item.credit >= 0 && item.credit <= 3) {
        item.showcreadimg = true
        item.creditImg = 1
      }
      if (item.credit >= 4 && item.credit <= 10) {
        item.showcreadimg = true
        item.creditImg = 2
      }
      if (item.credit >= 11 && item.credit <= 40) {
        item.showcreadimg = true
        item.creditImg = 3
      }
      if (item.credit >= 41 && item.credit <= 90) {
        item.showcreadimg = true
        item.creditImg = 4
      }
      if (item.credit >= 91 && item.credit <= 150) {
        item.showcreadimg = true
        item.creditImg = 5
      }
      if (item.credit >= 151 && item.credit <= 250) {
        item.showcreadeng = true
        item.creditdeng = 1
      }
      if (item.credit >= 251 && item.credit <= 500) {
        item.showcreadeng = true
        item.creditdeng = 2
      }
      if (item.credit >= 500 && item.credit <= 1000) {
        item.showcreadeng = true
        item.creditdeng = 3
      }
      if (item.credit >= 1001 && item.credit <= 2000) {
        item.showcreadeng = true
        item.creditdeng = 4
      }
      if (item.credit >= 2001) {
        item.showcreadeng = true
        item.creditdeng = 5
      }
    })
    let AF029 = await $axios.get(
      '/aflc-common/sysDict/getSysDictByCodeGet/AF029'
    )
    let AF025 = await $axios.get(
      '/aflc-common/sysDict/getSysDictByCodeGet/AF025'
    )

    let logisticsPark = await getWdiangSearchList($axios, {
      locationArea: vo.startArea,
      locationCity: vo.startCity,
      locationProvince: vo.startProvince,
      ...vo
    })
    if (AF029.data.status === 200) {
      AF029.data.data.unshift({ code: '', name: '不限' })
    }
    if (AF025.data.status === 200) {
      AF025.data.data.unshift({ code: '', name: '不限' })
    }
    if (AF029.data.status === 200 || AF025.data.status === 200) {
      return {
        AF029: AF029.data.status === 200 ? AF029.data.data : [],
        AF025: AF025.data.status === 200 ? AF025.data.data : [],
        listE: listE.data.status == 200 ? listE.data.data : [],
        listG: listG.data.status == 200 ? listG.data.data : [],
        lineLinks: listC.data.status == 200 ? listC.data.data : [],
        lineAdviseRecommend: listD.data.status == 200 ? listD.data.data : [],
        logisticsPark: logisticsPark,
        WangdiangInfoList: WangdiangInfoList.list,
        total: WangdiangInfoList.total,
        pages: WangdiangInfoList.pages,
        recommendList: recommendList,
        vo: vo,
        companyName: query.companyName || ''
      }
    } else {
      error({ statusCode: 500, message: '查找不到该物流网点' })
    }
  },
  async fetch({ store, params, $axios, error, app }) {
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
        return data.map((el, index) => {
          el.url = el.url.replace(
            /http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,
            '/zixun'
          )

          return el
        })
      }
    })
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
    }
  },
  mounted() {
    seajs.use(['/layer/layer.js', '/layer/dist/layui.js'], function() {
      layui.use('form', function() {
        $('.ydh').click(function() {
          $('#yd_nr').val('1809260061')
          $('.ydh').css('display', 'none')
        })
        $('#yd_nr').keyup(function() {
          if ($('#yd_nr').val()) {
            $('#yd_cx1').css('background-color', '#eb434d')
            $('#yd_cx1').css('color', '#f9f9f9')
            $('.ydh').css('display', 'none')
          }
          if (!$('#yd_nr').val()) {
            $('#yd_cx1').css('background-color', '#3f94ee')
            $('#yd_cx1').css('color', '#red')
            $('.ydh').css('display', 'block')
          }
        })

        $('#yd_cx1').click(function() {
          var num = $('#yd_nr').val()
          if (num) {
            window.open('/ydcx?num=' + num)
          }
          if (!num) {
            alert('请先输入运单号查询！')
          }
        })

        var form = layui.form
        form.render()
      })
    })

    this.companyName = this.$route.query.companyName || ''
    seajs.use(['/js/gaodemap2.js'])
    $('.collapse').click(function() {
      $('.collapse').css('display', 'none')
      $('.expand').css('display', 'inline-block')
      $('.showbox').hide()
    })
    $('.expand').click(function() {
      $('.collapse').css('display', 'inline-block')
      $('.expand').css('display', 'none')
      $('.showbox').show()
    })
    let _this = this
    $('#select_wlyq').mousedown(function() {
      $('#list_wlzx_yq').css('display', 'block')
    })
    $('.icon').click(function() {
      $('.icon').removeClass('active')
      $(this).addClass('active')
    })
    $('#seq1').click(async function() {
      $('#seq2').removeClass('active')
      $(this).addClass('active')
      let filterSign = 1
      let WangdiangInfoList = await getWangdiangInfoList(
        _this.$axios,
        _this.current,
        Object.assign(
          {
            filterSign: 1
          },
          _this.vo
        )
      )
      _this.WangdiangInfoList = WangdiangInfoList.list
    })

    $('#seq2').click(async function() {
      $('#seq1').removeClass('active')
      $(this).addClass('active')
      let filterSign = 2
      let WangdiangInfoList = await getWangdiangInfoList(
        _this.$axios,
        _this.current,
        Object.assign(
          {
            filterSign: 2
          },
          _this.vo
        )
      )
      _this.WangdiangInfoList = WangdiangInfoList.list
    })
    $('body').click(function(e) {
      var _con = $('.js_yq')
      if (!_con.is(e.target) && _con.has(e.target).length === 0) {
        $('#list_wlzx_yq').css('display', 'none')
      }
    })

    $('#select_wlyq').val(this.$route.query.parkName || '')
    $('#select_wlyq').attr('name', this.$route.query.parkId || '')
    $('#addressFrom input').citypicker({
      province: this.vo.startProvince,
      city: this.vo.startCity,
      district: this.vo.startArea
    })
    $('#addressTo input').on('mouseenter', () => {
      this.setMap()
    })
    $('#addressTo input').val(this.$route.query.address || '')

    this.pagination()
  },
  methods: {
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
      let re = /^1[3|4|5|7|8|9]\d{9}$/
      if (this.checkNotice.phone === '') {
        $('.ltl-phone').css('border-color', 'red')
        this.phoneHolder = '请输入正确手机号'
      } else {
        if (re.test(this.checkNotice.phone)) {
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
        this.$axios.post('/28-web/helpFind/range/create', obj).then(res => {
          if (res.data.status === 200) {
            layer.msg('提交成功，客服稍后将会与您联系')
            this.reset()
          } else {
            layer.msg(res.data.errorInfo)
          }
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
    setMap() {
      this.searchDo()
      $('#addressTo input').attr(
        'wtmapinit',
        this.startProvince + this.startCity + this.startArea
      )
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
    searchDo() {
      let list1 = [],
        list2 = []
      $('#addressFrom .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      this.startProvince = list1[0] ? list1[0] : ''
      this.startCity = list1[1] ? list1[1] : ''
      this.startArea = list1[2] ? list1[2] : ''
      this.checkNotice.startAddres =
        this.startProvince + this.startCity + this.startArea
      $('#addressTo .select-item').each(function(i, e) {
        list2.push($(this).text())
      })
      this.endProvince = list2[0] ? list2[0] : ''
      this.endCity = list2[1] ? list2[1] : ''
      this.endArea = list2[2] ? list2[2] : ''
      this.checkNotice.endAddres =
        this.endProvince + this.endCity + this.endArea
    },
    search() {
      this.searchDo()
      let pos = $('#addressTo input').attr('thepos') || ''
      let address = $('#addressTo input').val() || ''
      window.location.href = `/wangdian/?&belongBrandCode=${
        this.vo.belongBrandCode
      }&otherServiceCode=${this.vo.otherServiceCode}&keyword=${
        this.keyword
      }&parkName=${this.parkName}&endArea=${this.endArea}&endCity=${
        this.endCity
      }&endProvince=${this.endProvince}&startArea=${this.startArea}&startCity=${
        this.startCity
      }&startProvince=${
        this.startProvince
      }&pos=${pos}&address=${address}&parkId=${this.parkId || ''}`
    },
    AF029Click(item) {
      this.vo.belongBrandCode = item.code
      this.search()
    },
    AF025Click(item) {
      this.vo.otherServiceCode = item.code
      this.search()
    },
    addTitle(item) {
      this.parkName = item.parkName
      this.parkId = item.id
    },
    async seachlist() {
      let list1 = []
      $('#wlyq_pos .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      this.vo.startProvince = list1[0] ? list1[0] : ''
      this.vo.startCity = list1[1] ? list1[1] : ''
      this.vo.startArea = list1[2] ? list1[2] : ''
      this.logisticsPark = await getWdiangSearchList(this.$axios, {
        locationArea: this.vo.startArea,
        locationCity: this.vo.startCity,
        locationProvince: this.vo.startProvince,
        ...this.vo
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
    },
    addFn() {
      this.isAdd = true
    },
    noaddFn() {
      this.isAdd = false
    },
    pagination() {
      $('#pagination1').pagination({
        currentPage: this.currentPage,
        totalPage: this.pages,
        callback: async current => {
          $('#current1').text(current)
          let hyList = await getWangdiangInfoList(this.$axios, current, this.vo)
          this.totalPage = hyList.pages
          this.current = hyList.current
          this.WangdiangInfoList = hyList.list
        }
      })
    },
    reload() {
      window.location.href = '/wangdian'
    }
  }
}
</script>

<style lang="scss">
#tjcx_02 span > a,
#tjcx_03 span > a {
  margin-right: 10px;
}
#tjcx_04 {
  text-align: center;
}
.showbox {
  float: left;
}
#tjcx_04:hover a {
  background: none !important;
}
.rem_bot {
  border: solid 1px #ffb65f;
  box-sizing: border-box;
}
.rem_bot_t {
  background: url('/gongsi/images/tj.png') no-repeat;
  height: 95px;
}
.wzlwangdian {
  .lll-line--othet {
    // display: inline-block;
    float: left;
  }
  .lll-recommend {
    transition: all 0.4s;
    background: #fff;
    padding-bottom: 15px;
    width: 100%;
    float: left;
  }
  .zx_sx1 {
    border-bottom: 1px solid #e7e7e7;
    line-height: 50px;
    font-size: 18px;
    font-weight: bold;
    float: left;
    width: 100%;
    color: #3f94ee;
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
  .header_links_l ul {
    float: left;
    li {
      margin-right: 13px;
      background: url('../../static/gongsi/images/05bg.png');
      margin-bottom: 15px;
      box-sizing: border-box;
    }
  }
  .header_links_l ul li:nth-child(4) {
    margin-right: 0;
  }
  .header_links_l ul li:nth-child(8) {
    margin-right: 0;
  }
  .list-box-r-top {
    #form0 {
      .city-picker-dropdown {
        left: -45px !important;
      }
    }
    #form1 {
      .city-picker-dropdown {
        left: -45px !important;
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
    border: none;
  }
  .toggle-btn {
    margin: 12px 150px 0 4px;
    height: 24px;
    line-height: 24px;
    font-size: 14px;

    padding: 0 9px;
    background: #fff;
    color: #6b6b6b;
    cursor: pointer;
    text-decoration: none;
    font: 12px/1.5 tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
  }
  .toggle-btn span {
    font-weight: bold;
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
        // color: #fff;
      }
    }
  }
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
  .select_con dl dd a.now {
    background: #3371ff;
    color: #fff;
  }
}
.list-box-r-news {
  float: left;
}
.today_news {
  float: left;
}
</style>
