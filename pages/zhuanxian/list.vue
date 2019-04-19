
<template>
  <div class="lll-zhuangXian">
    <div class="list_box">
      <div class="list_nav">
        <a href="/">物流首页</a>&gt;<a
          id="list_nav_a1"
          href="">零担物流专线</a>&gt;<a
            id="list_nav_a2"
            href="">零担物流专线</a>&gt;<a
              id="list_nav_a3"
              href="">零担物流专线</a>
      </div>
      <div class="list_left">
        <div
          class="w1036"
          style=" background-color: #fff;">
          <div class="zx_sx"><span class="biaozhi"/><span>专线筛选</span>
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
              <dt>专线线路&nbsp;：</dt>
              <dd>
                <form
                  class="form-line"
                  name="zxaddform"
                  method="post"
                  action="">
                  <input
                    name="a7"
                    type="hidden"
                    value="0">
                  <input
                    type="hidden"
                    name="mid"
                    value="19">
                  <input
                    type="hidden"
                    name="dopost"
                    value="search">
                  <div
                    id="wlLineFrom"
                    class="fl list_input"
                    style="position:relative;">
                    <input
                      name="cfd"
                      style="height: 100%;"
                      data-level="district"
                      type="text"
                      placeholder="请输入出发地">
                  </div>
                  <img
                    class="fl list_img"
                    src="/line/images/02jiantou.png">
                  <div
                    id="wlLineTo"
                    class="fl list_input"
                    style="position:relative;">
                    <input
                      name="ddd"
                      style="height: 100%;"
                      data-level="district"
                      type="text"
                      placeholder="请输入到达地">
                  </div>
                  <input
                    id="wlgs_name"
                    name="wlgs"
                    type="text"
                    class="list_input"
                    style="margin-left: 16px;"
                    placeholder="请输入公司名称">
                  <input
                    id="search_wlLine"
                    readonly=""
                    name="Submit2"
                    value=" 搜索 "
                    class="list_button">
                  <input
                    id="flush"
                    readonly=""
                    @click="resetSearch"
                    name="Submit2"
                    value="重置 "
                    class="list_button">
                </form>
              </dd>
              <div>
                <dt>所属园区&nbsp;：</dt>
                <dd
                  id="tjcx_00"
                  style="position: relative;">
                  <input
                    id="select_wlyq"
                    placeholder="请选择园区"
                    class="list_wlzx_yq js_yq">
                  <div id="list_wlzx_yq">
                    <div class="wlzx_yq_bt js_yq">
                      <div
                        id="wlyq_pos"
                        class="fl list_wlyq_input"
                        style="position:relative;">
                        <input
                          style="height: 100%;"
                          data-toggle="city-picker"
                          data-level="district"
                          type="text"
                          name=""
                          placeholder="请选择园区所在地">
                      </div>
                      <input
                        id="wlyq_name"
                        class="list_wlyq_input"
                        placeholder="请输入园区名称">
                      <input
                        class="list_wlyq_cx"
                        readonly=""
                        value="查询">
                    </div>
                    <div
                      id="js010"
                      class="wlzx_yq_nr">
                      <div class="wlzx_yq_none">
                        <font>暂无园区信息</font>
                      </div>
                      <div
                        class="wlzx_yq_item"
                        style="display: none;">
                        <font
                          id="wlzx_yq_01"
                        />
                        <span
                          id="wlzx_yq_02"
                        />
                      </div>
                    </div>
                  </div>
                </dd>
              </div>
              <dt>选择品牌&nbsp;:</dt>
              <dd id="tjcx_02">
                <span
                  v-for="(item,index) in lineCodeB"
                  :key="index"
                  style="margin-right: 10px;">
                  <a
                    :href="'/zhuanxian/list?startp=' + vo.startProvince + '&startc=' + vo.startCity + '&starta=' + vo.startArea + '&endp=' + vo.endProvince + '&endc=' + vo.endCity + '&enda=' + vo.endArea + '&companyName=' + vo.companyName + '&parkId=' + vo.parkId + '&parkName=' + vo.parkName+ '&belongBrandCode=' + item.code+ '&otherServiceCode=' + vo.otherServiceCode"
                    :data-code="item.code"
                    :class=" item.name=='不限'? 'now':''"
                    class="all">{{ item.name }}</a>
                </span>
               
              </dd>
              <dt>其他&nbsp;:</dt>
              <dd id="tjcx_03">
                <span
                  v-for="(item,index) in lineCodeC"
                  :key="index"
                  style="margin-right: 10px;">
                  <a
                    :href="'/zhuanxian/list?startp=' + vo.startProvince + '&startc=' + vo.startCity + '&starta=' + vo.startArea + '&endp=' + vo.endProvince + '&endc=' + vo.endCity + '&enda=' + vo.endArea + '&companyName=' + vo.companyName + '&parkId=' + vo.parkId + '&parkName=' + vo.parkName+ '&belongBrandCode=' + vo.belongBrandCode+ '&otherServiceCode=' + item.code"
                    :data-code="item.code"
                    :class=" item.name=='不限'? 'now':''"
                    class="all">{{ item.name }}</a>
                </span>
              
              </dd>
            </dl>
          </div>
        </div>
        <div
          id="js002"
          class="w1036 list_wlzx">

          <div class="zx_sx"><span class="biaozhi"/><span>专线信息</span></div>
          <div class="list_tiaoj"><span
            id="seq0"
            class="active"
          >默认排序</span><span
            id="seq1"
            title="交易量从高到低">交易量</span><span
              id="seq2"
              title="运输时效从低到高">运输时效</span><span
              id="seq3">重货价格</span>
            <div
            id="tj_price">
              <span id="tj_price1">轻货价格从低到高</span>
              <span id="tj_price2">重货价格从低到高</span>
            </div>
          </div>
          <div
            v-if="!lineLists.length || lineLists==null"
            class="list_none">
            <span>暂时没有找到您要查询的信息，可以看看其他线路哦</span>
            <img src="/line/images/none_pic.png">
          </div>
         
          <div
          v-else >
            <ul
              v-for="(item , index) in lineLists"
              :key="index"
              class="wlzx_list">
              <li id="wlzx_list_0">
                <div class="sc_num"><img src="/line/images/ll_num.png"><span><i><em id="nr1001"/>{{ item.browseNumber?item.browseNumber:'0' }}人浏览</i></span></div>

                <div class="view_num"><img src="/line/images/pj_num.png"><span><i><em id="nr1002"/>{{ item.assessNumber?item.assessNumber:'0' }}条评论</i></span></div>
              </li>
              <li class="wlzx_list_1">
                <a
                  id="nr_a21"
                  :href="'/zhuanxian/detail?id='+ item.id+'&publishId='+item.publishId"
                  target="_blank"
                  class="nr_a21_img">
                  <img
                    v-if="item.rangeLogo==''"
                    :src="'/images/pic/bg' + item.num + '.png'"
                    width="180"
                    height="180">
                  <img
                    v-else
                    :src="item.rangeLogo"
                    class="scrollLoading"
                    width="180"
                    height="180">
              </a></li>
              <li class="wlzx_list_2">
                <p class="p1">
                  <a
                    id="nr02"
                    :href="'/zhuanxian/detail?id='+ item.id+'&publishId='+item.publishId"
                    class="list-title-a"
                    target="_blank">
                    <span class="list-icon lines-sprite-icons icon-start"/>
                    <em>{{ (item.startCity+item.startArea).length>7? (item.startCity+item.startArea).substring(0,7)+'..': item.startCity+item.startArea }}</em>
                 
                    <span class="list-icon lines-sprite-icons icon-through"/>
                    <span class="list-icon lines-sprite-icons icon-end"/>
                    <em>{{ (item.endCity+item.endArea).length>7? (item.endCity+item.endArea).substring(0,7)+'..': item.endCity+item.endArea }}</em>
                  
                  </a>
                </P>
                <p class="p2">
                  <img src="/line/images/04gongsi.png">
                  <a
                    id="nr03"
                    :href="'/member/'+item.companyId"
                    target="_blank"><font
                  class="">{{ item.companyName||'暂无' }}</font></a>
                  <a
                    v-if="item.companyName"
                    id="nr11"
                    target="_blank"
                    :href="'http://wpa.qq.com/msgrd?v=596803544&uin='+item.qq+'&site=qq&menu=yes'"><img
                      id="qq"
                      src="../../static/gongsi/images/15qq.gif"></a>
                  <img
                    id="tj_icon_1"
                    src="/line/images/wtjzx.gif">
                </p>
               
                <p
                  class="p21"
                  style="padding-top: 15px;">
                  <img
                    id="tj_shiming"
                    src="/line/images/shiming.png">
                  <img
                    id="tj_xinyong"
                    src="/line/images/xinyong.png">
                  <img
                    id="tj_danbao"
                    src="/line/images/danbao.png">
                </p>
                <p class="p3">
                <i>说明：</i><font>{{ item.transportRemark?item.transportRemark.substring(0,10):'暂无' }}</font></p>
                <p class="p4"><i>地址：</i><font
                  id="nr06"
                  class="">{{ item.address }}</font></p>
              </li>
              <li class="wlzx_list_3">
                <p class="p1"><i
                  class="zhuo"
                  style="color: #666">重货：{{ item.weightDiscountPrice || item.weightPrice }}</i><span style="color: #333">元/公斤</span></P>
                <p class="p2"><i
                  class="zhuo"
                  style="color: #666">轻货：</i>{{ item.lightDiscountPrice || item.lightPrice }}<span style="color: #333">元/m³</span></p>
                <p class="p3"><i>时效：</i><span>{{ item.transportAging?item.transportAging:'' }}{{ item.transportAging?item.transportAgingUnit:'暂无' }}</span></p>
                <p class="p4"><i>频率：</i><span>{{ item.departureHzData?item.departureHzData+'天':'' }}</span><span>{{ item.departureHzData?item.departureHzTime+'次':'暂无' }}</span></p>
              </li>
              <li class="wlzx_list_6">
                <p class="p1"><a
                  id="nr_order"
                  :href="'/create/line?id='+ item.id+'&publishId='+ item.publishId+'&uid='+ item.account"
                  target="_blank"><input
                    readonly=""
                    value="下单"

                ></a>
                </p>
              
                <p class="p2"><a
                  id="nr_a22"
                  :href="'/zhuanxian/detail?id='+ item.id+'&publishId='+item.publishId"
                  target="_blank"><input
                    readonly=""
                    value="查看"></a>
                </p>
              <p class="p3"/></li>
            </ul>
          </div>

        </div>

        <div
          v-if="lineLists==[] || !lineLists.length==0"
          class="clearfix">
          <div
            class="box"
            style="float: right;margin-right: 100px;">
            <div
              id="pagination1"
              class="page fl"/>
            <div class="info fl"/>
          </div>
        </div>

        <div class="lll-line--othet">
          <div class="lll-recommend clearfix">
            <div
              class="zx_sx1"
            ><span class="biaozhi"/><span class="zx_sxl_tit">{{ lineLinks.recommendBy28.label||'' }}</span></div>
            <FooterLinks :info="lineLinks.recommendBy28.links || []"/>
          </div>
          <div
            class="lll-recommend"
            style="padding-top: 40px;">
            <div
              class="zx_sx"
            ><span class="biaozhi"/><span>{{ lineLinks.otherRecommend.label ||'' }}</span></div>
            <FooterLinks :info="lineLinks.otherRecommend.links|| []"/>
          </div>
        </div>
        <div class="lll-line-bot">
          <div
          class="lll-recommend clearfix">
            <div
              class="zx_sx"
            ><span class="biaozhi"/><span>{{ lineLinks.hotRecommend.label }}</span></div>
            <FooterLinks :info="lineLinks.hotRecommend.links"/>
          </div>
          <div
          class="lll-recommend clearfix">
            <div
              class="zx_sx"
            ><span class="biaozhi"/><span>{{ lineLinks.startArriveRecommend.label }}</span></div>
            <FooterLinks :info="lineLinks.startArriveRecommend.links"/>
          </div>
          <div
          class="lll-recommend clearfix">
            <div
              class="zx_sx"
            ><span class="biaozhi"/><span>{{ lineLinks.startFromRecommend.label }}</span></div>
            <FooterLinks :info="lineLinks.startFromRecommend.links"/>
          </div>
        </div>
      </div>

      <div
        id="js007"
        class="list_right"
        style="margin-bottom: 20px;">

        <div class="list-box-r-top">
          <form action="">
            <span>出发地</span>
            <div class="ltl-input">
              <input
                id="right-bar-form"
                autocomplete="off"
                wtmap=""
                type="text"
                class="ltl-location "
                placeholder="请选择出发地">
              <i class="ltl-icons ss56-common-sprite1 ltl-ico-start"/>
            </div>
            <span>目的地</span>
            <div class="ltl-input">
              <input
                id="right-bar-to"
                autocomplete="off"
                wtmap=""
                type="text"
                class="ltl-location"
                placeholder="请选择目的地">
              <i class="ltl-icons ss56-common-sprite2 ltl-ico-end"/>
            </div>
            <input
              id="check-fee"
              type="button"
              value="查询零担运费"
              class="right-top-btn">
          </form>
        </div>
        <div class="list-box-r-phone">
          <div class="zx_p_tit">帮我找优质承运商</div>
          <selectMap 
          :line="true"/>
        </div>
        <div class="list-box-r-top">
          <img
            src="/line/images/guangg.jpg"
            alt="">
        </div>
        <div class="zx_sx"><span class="biaozhi"/><span>专线信息推荐</span></div>
        <div
          v-if="lineRecoms.length==0||lineRecoms==null"
          class="tj_none">
          <span>没有相关线路推荐</span>
        </div>
        <div
          v-for="(item,index) in lineRecoms"
          v-else
          :key="index"
          class="tj_list_box">
          <div
            class="tj_list"
          >
            <div class="p p1">
              <img src="/line/images/04gongsi.png"><span><a
                id="tj_a011"
                :href="'/member/'+ item.companyId"
                :title="item.companyName"
                target="_blank">{{ item.companyName }}</a></span>
              <img
                id="tj_shiming"
                src="/line/images/shiming.png">
              
            </div>
            <div class="p p2">

              <a
                id="tj010"
                :href="'/zhuanxian/detail?id='+ item.id+'&publishId='+item.publishId"
                class="list-title-a"
                target="_blank">
                <span class="list-icon lines-sprite-icons icon-start"/>
              
                <em id="tj011">{{ (item.startCity+item.startArea).length>7? (item.startCity+item.startArea).substring(0,7)+'..': item.startCity+item.startArea }}</em>
                <span class="list-icon lines-sprite-icons icon-through"/>
                <span class="list-icon lines-sprite-icons icon-end"/>
                <em id="tj012">{{ (item.endCity+item.endArea).length>7? (item.endCity+item.endArea).substring(0,7)+'..': item.endCity+item.endArea }}</em>
              </a>
            </div>

            <div class="p p3">
              <ul>
                <li class="tj_left"><i>时效：</i><span>{{ item.transportAging + item.transportAgingUnit.replace("多", "") }}</span></li>
                <li class="tj_right"><i>最低一票：</i><span id="tj016">{{ item.lowerPrice?item.lowerPrice+'元':'面议' }}</span></li>
                <li class="tj_left"><i>重货：</i><font id="tj013">{{ parseFloat(item.weightDiscountPrice || item.weightPrice).toFixed(1) }}</font><span>元/公斤</span></li>
                <li class="tj_right"><i>轻货：</i><font id="tj014">{{ parseFloat(item.lightDiscountPrice || item.lightPrice).toFixed(1) }}</font><span>元/m³</span></li>
              </ul>

            </div>

            <div class="p p6">
              <div class="sc_num1"><img src="/line/images/ll_num.png"><span><i><em id="tj101">{{ item.browseNumber?item.browseNumber:'0' }}</em>人浏览</i></span></div>
              <div class="view_num1"><img src="/line/images/pj_num.png"><span><i><em id="tj102">{{ item.assessNumber?item.assessNumber:'0' }}</em>条评论</i></span></div>

            </div>
          </div>
        </div>
        <HotList :lines="lineHots"/>

      </div>

    </div>
    

    <div class="h70"/>
    <SidebarNav />
  </div>
</template>

<script>
import FooterLinks from '../../components/footerLinks'
import selectMap from './selectMap'
import HotList from '../../components/hotList'
import SidebarNav from '~/components/public/sidebarNav'
async function lineList($axios, currentPage, vo = {}) {
  let parm = vo
  parm.currentPage = currentPage
  parm.pageSize = 15
  let res = await $axios.post('/28-web/range/list', parm)
  if (res.data.status == 200) {
    return {
      list: res.data.data.list,
      page: res.data.data.pages,
      currentPage: res.data.data.pageNum
    }
  }
}
export default {
  name: 'Zhuanxian',
  components: {
    FooterLinks,
    selectMap,
    HotList,
    SidebarNav
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/line/css/list_wlzx.css' },
      { rel: 'stylesheet', href: '/gongsi/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' }
    ]
  },
  data() {
    return {
      infoLinks: {},
      showImg: 0,
      pages: 0,
      currentPage: 1,
      lineList: [],
      lineLists: [],
      vo: {}
    }
  },
  async asyncData({ $axios, query, app, error }) {
    let cookie = app.$cookies
    let areaData = {
      currentArea: cookie.get('currentArea'),
      currentAreaFullName: cookie.get('currentAreaFullName'),
      currentAreaName: cookie.get('currentAreaName'),
      currentProvince: cookie.get('currentProvince'),
      currentProvinceFullName: cookie.get('currentProvinceFullName'),
      currentProvinceName: cookie.get('currentProvinceName')
    }

    if (!areaData.currentProvince) {
      areaData = store.state.area
    }

    let aurl = ''
    let startp =
      query.startp === ''
        ? ''
        : query.startp || areaData.currentProvinceFullName
    let startc =
      query.startc === '' ? '' : query.startc || areaData.currentAreaFullName
    let starta = query.starta
    let endp = query.endp
    let enda = query.enda
    let endc = query.endc

    if (!starta || starta == 'null') {
      starta = ''
    }
    if (!endp || endp == 'null') {
      endp = ''
    }
    if (!enda || enda == 'null') {
      enda = ''
    }
    if (!endc || endc == 'null') {
      endc = ''
    }
    let vo = {
      currentPage: 1,
      pageSize: 15,
      startProvince: startp,
      startCity: startc,
      startArea: starta,
      endProvince: endp,
      endCity: endc,
      endArea: enda,
      belongBrandCode: query.belongBrandCode || '',
      departureTimeCode: query.departureTimeCode || '',
      otherServiceCode: query.otherServiceCode || '',
      parkId: query.parkId || '',
      companyName: query.companyName || '',
      parkName: query.parkName || ''
    }

    let vo1 = vo
    vo1.pageSize = 5
    let [listA, listB, listC, listD, codeA, codeB, codeC] = await Promise.all([
      $axios.post(aurl + `/28-web/range/list`, {
        currentPage: 1,
        pageSize: 15,
        startProvince: startp,
        startCity: startc,
        startArea: starta,
        endProvince: endp,
        endCity: endc,
        endArea: enda,
        belongBrandCode: query.belongBrandCode || '',
        departureTimeCode: query.departureTimeCode || '',
        otherServiceCode: query.otherServiceCode || '',
        parkId: query.parkId || '',
        companyName: query.companyName || ''
      }),
      $axios.post(aurl + `/28-web/range/recommend`, vo1),
      $axios.post(aurl + `/28-web/range/related/links`, {
        startProvince: startp,
        startCity: startc,
        startArea: starta,
        endProvince: endp,
        endCity: endc,
        endArea: enda
      }),
      $axios.get(aurl + '/28-web/logisticsCompany/popularity'),
      $axios.get(aurl + '/28-web/sysDict/getSysDictByCodeGet/AF026'),
      $axios.get(aurl + '/28-web/sysDict/getSysDictByCodeGet/AF029'),
      $axios.get(aurl + '/28-web/sysDict/getSysDictByCodeGet/AF025')
    ])
    if (
      listA.data.status == 200 ||
      listB.data.status == 200 ||
      codeA.data.status == 200 ||
      codeB.data.status == 200 ||
      codeC.data.status == 200
    ) {
      listA.data.data.list.forEach(item => {
        let arr = (item.id || '').split('')
        let num = 0
        arr.forEach(el => {
          num += el.charCodeAt(0) || 0
        })
        item.num = (num % 30) + 1
      })

      let codeObj = {
        name: '不限',
        code: ''
      }
      codeA.data.data.unshift(codeObj)
      codeB.data.data.unshift(codeObj)
      codeC.data.data.unshift(codeObj)
      return {
        lineListsTotalPage: listA.data.data.pages,
        lineLists: listA.data.data.list,
        lineRecoms: listB.data.status == 200 ? listB.data.data : [],
        lineLinks: listC.data.status == 200 ? listC.data.data : [],
        lineHots: listD.data.status == 200 ? listD.data.data : [],
        lineCodeA: codeA.data.status == 200 ? codeA.data.data : [],
        lineCodeB: codeB.data.status == 200 ? codeB.data.data : [],
        lineCodeC: codeC.data.status ? codeC.data.data : [],
        vo
      }
    } else {
      error({ statusCode: 500, message: '查找不到该专线列表' })
    }
  },
  computed: {},
  mounted() {
    if (process.client) {
      let _this = this
      let $axios = this.$axios
      seajs.use(['layer'], function() {
        seajs.use(
          ['/js/jquery.pagination.min.js', '/js/LLL-AFLC_API.js'],
          function() {
            seajs.use(['/line/js/list_wlzx.js'], function() {
              seajs.use(['/js/collection.js'], function() {
                seajs.use(['/js/gaodemap2.js'], function() {
                  let orderBy = 'default'
                  let currentPage = 1
                  $('.list_tiaoj span').click(function() {
                    $('.list_tiaoj span').removeClass('active')
                    $(this).toggleClass('active')
                  })

                  function onCheckPage() {
                    var beginPage = parseInt(
                      document.beginPagefrm.beginPage.value
                    )
                    if (isNaN(beginPage)) {
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
                    totalPage: _this.lineListsTotalPage,
                    callback: function(current) {
                      $('#current1').text(current)
                      currentPage = current
                      fetchLineList(currentPage, orderBy)
                    }
                  })
                  function clickPrice() {
                    $('#seq0').click(function() {
                      orderBy = 'default'
                      fetchLineList(currentPage, orderBy)
                    })
                    $('#seq1').click(function() {
                      orderBy = 'orderDesc'
                      fetchLineList(currentPage, orderBy)
                    })
                    $('#seq2').click(function() {
                      orderBy = 'transportAgingAsc'
                      fetchLineList(currentPage, orderBy)
                    })
                    $('#tj_price2').click(function() {
                      $('#tj_price').css('display', 'none')
                      orderBy = 'weigthPrice'
                      fetchLineList(currentPage, orderBy)
                    })
                    $('#tj_price1').click(function() {
                      $('#tj_price').css('display', 'none')
                      orderBy = 'lightPrice'
                      fetchLineList(currentPage, orderBy)
                    })
                  }
                  function fetchLineList(currentPage, orderBy) {
                    let aurl = ''

                    let vo = {
                      startProvince: _this.$route.query.startp,
                      startCity: _this.$route.query.startc,
                      startArea: _this.$route.query.starta,
                      endProvince: _this.$route.query.endp,
                      endArea: _this.$route.query.enda,
                      endCity: _this.$route.query.endc,
                      belongBrandCode: _this.$route.query.belongBrandCode,
                      departureTimeCode: _this.$route.query.departureTimeCode,
                      otherServiceCode: _this.$route.query.otherServiceCode,
                      parkId: _this.$route.query.parkId,
                      companyName: _this.$route.query.companyName,
                      pageSize: 15,
                      currentPage: currentPage,
                      orderBy: orderBy
                    }

                    $axios.post(aurl + `/28-web/range/list`, vo).then(res => {
                      let getList =
                        res.data.status == 200 ? res.data.data.list : []
                      getList.forEach(item => {
                        let arr = (item.id || '').split('')
                        let num = 0
                        arr.forEach(el => {
                          num += el.charCodeAt(0) || 0
                        })
                        item.num = (num % 30) + 1
                      })
                      _this.lineLists = getList
                    })
                  }
                  clickPrice()
                })
              })
            })
          }
        )
      })
    }
  },
  methods: {
    resetSearch() {
      location.href = '/zhuanxian/list'
    }
  }
}
</script>

<style lang="scss">
.lll-zhuangXian {
  margin-bottom: 70px;
  .list_left {
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
  }

  .textareaDiv {
    height: 64px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    border-color: #ccc;
  }
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
  .lll-line--othet {
    .lll-recommend:first-of-type {
      ul.footerLinks {
        li {
          width: 16.67%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .lll-recommend:last-of-type {
      ul.footerLinks {
        li {
          width: 14.63%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .lll-line-bot {
    width: 100%;
    height: auto !important;
    margin: 30px auto;
    overflow: hidden;
    background: #fff;
    margin-top: 20px;
    .lll-recommend {
      padding-bottom: 20px;
      border-bottom: dotted 1px #e7e7e7;
      ul.footerLinks {
        li {
          width: 17.5%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .lll-recommend:last-of-type {
      border-bottom-color: #fff;
    }
  }
  #search_wlLine {
    width: 42px;
    height: 28px;
    border-radius: 2px;
    color: #f9f9f9;
    font-size: 16px;
    background: no-repeat url(../../static/line/images/wlgs_search.png) 10px 6px
      #3f94ee;
    text-align: left;
    padding-left: 30px;
    margin-left: 20px;
    padding-right: 5px;
    cursor: pointer;
  }
  .list_right {
    .tj_list_box {
      .tj_list4 {
        border-bottom: none;
      }
    }
    .list-box-r-phone {
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
      .form_findme {
        padding-left: 10px;
      }
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
    background-image: url('../../static/line/images/xiajt.png');
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
    background: url(../../static/line/images/up_jt.png);
    background-repeat: no-repeat;
    width: 12px;
    height: 7px;
    cursor: pointer;
  }
  /**/
  .form-line {
    #wlLineFrom {
      width: 190px;
      background: url(../../static/line/images/start_addr.png) no-repeat 200px
        8px #fff;
      background-size: 16px 17px;
      padding-right: 20px;
    }
    #wlLineTo {
      width: 190px;
      background: url(/line/images/end_addr.png) no-repeat 200px 8px #fff;
      background-size: 16px 17px;
      padding-right: 20px;
    }
  }

  .ss56-common-sprite1 {
    background-image: url(/line/images/qd.png);
    background-repeat: no-repeat;
  }
  .ss56-common-sprite2 {
    background-image: url(/line/images/zd.png);
    background-repeat: no-repeat;
  }
  .lines-sprite-icons {
    background: url(/line/images/ss56-lines-sprite.png) no-repeat;
  }
  /**/
  .ss56-common-sprite11,
  .ss56-common-sprite-icon {
    background: url('/line/images/downicon.png') no-repeat 0 11px;
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
}
</style>
