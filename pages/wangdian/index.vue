<template>
  <div class="lll-wangdian">
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
          <div
            class="zx_sx"
            style="border-bottom: 2px solid #2577e3"><span class="biaozhi"/><span>网点筛选</span>
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
              <dt>所在地&nbsp;：</dt>
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
                
              </form>
                <br>
                <!-- 出发地
                <div class="order-line-from clearfix">
                  <div class="order-form-item">
                    <div class="order-form-label"><span class="required">*</span>出发地：</div>
                    <div class="order-form-input" >
                      <input 
                        id="start_position" 
                        wtmap="" 
                        maxlength="40" 
                        type="text" 
                        placeholder="请选择 省-市-县">
                    </div>
                  </div>
                  <div class="order-form-item form-detail">
                    <div class="order-form-label">街道/门牌号：</div>
                    <div class="order-form-input">
                      <input 
                        wtmapinit="" 
                        wtmap="{township}{street}{building}" 
                        maxlength="40" 
                        type="text" 
                        placeholder="请填写详细地址">
                    </div>
                  </div>
                </div> -->


              </dd>
              <dt>公司名称&nbsp;:</dt>
              <dd >
                <input
                  id="companyName"
                  v-model="companyName"
                  name="cfd"
                  type="text"
                  class="list_input"
                  placeholder="请输入公司或网点名称" >
              </dd>
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
              <dt>品牌&nbsp;:</dt>

              <dd id="tjcx_02" >
                <selectType
                  name="AF029"
                  :code="vo.belongBrandCode" />
                <br>
                <a
                  v-for="(item,index) in AF029"
                  :class="[item.code === vo.belongBrandCode ? 'now':'all']"
                  :key="index"
                  href="javascript:"
                  @click="AF029Click(item)">{{ item.name }}</a>
              </dd>
              <dt >其他&nbsp;:</dt>
              <dd id="tjcx_03">
                <selectType
                  name="AF025"
                  :code="vo.otherServiceCode" />
                <br>
                <a
                  v-for="(item,index) in AF025"
                  :class="[item.code === vo.otherServiceCode ? 'now':'all']"
                  :key="index"
                  href="javascript:"
                  @click="AF025Click(item)">{{ item.name }}</a>
              </dd>
            </dl>
          </div>
        </div>
        <div
          id="js002"
          class="w1036" >
          <div class="zx_sx"><span class="biaozhi"/><span id="wangdian_list">网点列表</span></div>
          <div class="list_tiaoj"><span
            id="seq1"
            class="active">综合排序</span>
            <span
              id="seq2"
              title="距离从近到远">距离最近</span>
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
              <p class="p1"><i>联系人：</i><span id="nr05">{{ item.contactsName }}</span></P>
              <p class="p2"><i>电话：</i><span id="nr06">{{ item.contactsTel? item.contactsTel + '-' : '' }}{{ item.mobile }}</span></p>
            </li>
            <li class="wlzx_list_4">
              <p
                v-if="item.authStatus"
                class="p1"><img
                  id="list_shiming"
                  src="/wd/images/10shiming.png"></P>
              <p
                v-if="item.isVip"
                class="p2" ><img
                  id="list_xinyong"
                  src="/wd/images/11xinyong.png"></p>
              <p
                v-if="item.collateral"
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
      </div>
      <div
        id="js007"
        class="list_right">

        <div class="zx_sx"><span class="biaozhi"/><span>物流公司推荐</span></div>
        <div
          v-if="recommendList.length === 0"
          class="tj_none" >
          <span>没有相关物流公司推荐</span>
        </div>
        <div
          v-for="(item,index) in recommendList"
          :key="index"
          class="tj_list"
        >
          <p class="p1"><a
            id="tj010"
            :href="'/member/'+ item.id"
            target="_blank"><span id="tj_01">{{ item.companyName }}</span></a></p>

          <p class="p7">
            <creditIcon :credit="item.credit" />
          </p>

          <p class="p3"><i>联系人：</i><font id="tj_02">{{ item.contactsName }}</font></p>
          <p class="p4"><i>电话：</i><font id="tj_03">{{ item.contactsTel ? item.contactsTel + '-' : '' }}{{ item.mobile }}</font></p>
          <p class="p5"><i>地址：</i><font
            id="tj_04"
            class="">{{ item.address }}</font></p>
          <p class="p6">
            <a
              id="tj_05"
              :href="'/member/'+ item.id"
              target="_blank"><span>查看&nbsp;&gt;</span></a>
          </p>
        </div>

      </div>

    </div>


    <div class="h70"/>
  </div>
</template>

<script>
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
    return {
      list: res.data.data.list,
      pages: res.data.data.pages,
      currentPage: res.data.data.pageNum
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
      { rel: 'stylesheet', href: '/css/WTMap.css' }
    ],
    script: [{ src: '/js/jquery.pagination.min.js' }]
  },
  data() {
    return {
      wangdianInfoList: [],
      totalPage: 1,
      currentPage: 1,
      parkName: '',
      startProvince: '',
      startCity: '',
      startArea: '',
      endProvince: '',
      endCity: '',
      endArea: '',
      companyName: ''
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
      latitude: pos[1],
      longitude: pos[0],
      parkId: query.parkId || ''
    }
    vo.province = vo.startProvince
    vo.city = vo.startCity
    vo.area = vo.startArea
    let WangdiangInfoList = await getWangdiangInfoList($axios, 1, vo)
    let recommendList = await getRecommendList($axios, vo)
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
        logisticsPark: logisticsPark,
        WangdiangInfoList: WangdiangInfoList.list,
        pages: WangdiangInfoList.pages,
        recommendList: recommendList,
        vo: vo,
        companyName: query.companyName || ''
      }
    } else {
      error({ statusCode: 500, message: '查找不到该物流网点' })
    }
  },
  mounted() {
    this.companyName = this.$route.query.companyName || ''
    seajs.use(['/js/gaodemap2.js'])
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
    let _this = this
    $('#select_wlyq').mousedown(function() {
      $('#list_wlzx_yq').css('display', 'block')
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
    setMap() {
      this.searchDo()
      $('#addressTo input').attr(
        'wtmapinit',
        this.startProvince + this.startCity + this.startArea
      )
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

      $('#addressTo .select-item').each(function(i, e) {
        list2.push($(this).text())
      })
      this.endProvince = list2[0] ? list2[0] : ''
      this.endCity = list2[1] ? list2[1] : ''
      this.endArea = list2[2] ? list2[2] : ''
    },
    search() {
      this.searchDo()
      let pos = $('#addressTo input').attr('thepos') || ''
      let address = $('#addressTo input').val() || ''
      window.location.href = `/wangdian/?&belongBrandCode=${
        this.vo.belongBrandCode
      }&otherServiceCode=${this.vo.otherServiceCode}&companyName=${
        this.companyName
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
          // window.location.href = '#top'
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
.lll-wangdian {
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
  .select_con dl dd a.now {
    background: #3371ff;
    color: #fff;
  }
}
</style>
