<template>
  <div>
    <div class="list_box">
      <div class="list_nav">
        <a href="/">物流首页</a>&gt;<a
          id="list_nav_a"
          href="">物流园区</a>
      </div>
      <div class="list_left">
        <div
          class="w1036"
          style=" background-color: #fff;">

          <div class="select_con">

            <dl>
              <dt><span>园区所在地&nbsp;：</span></dt>
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
                  id="parkAddress"
                  class="fl list_input"
                  style="position:relative;" >
                  <input
                    style="height: 100%;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    placeholder="请选择省-市-区" >
                </div>
                <span>&nbsp;园区名称&nbsp;：</span>
                <input
                  v-model="searchKey"
                  type="text"
                  class="list_input"
                  placeholder="请输入园区名称" >
                <input
                  id="search_wlyq"
                  value=" 搜索 "
                  readonly=""
                  class="list_button"
                  @click="search()">
                <input
                  id="flush"
                  name="Submit2"
                  value="重置 "
                  readonly=""
                  class="list_button"
                  @click="flush()">
              </form>
              </dd>

            </dl>
          </div>
        </div>
        <div class="w1036 list_wlyq">
          <div
            v-if="getGatewaylist.length === 0"
            class="list_none"
            style="display: block">
            <span>暂时没有找到您要查询的信息，可以看看其他园区哦</span>
            <img src="../../static/images/none_pic.png">
          </div>

          <ul
            v-for="(item,index) in getGatewaylist"
            :key="index"
            class="wlzx_list">
            <a
              :href="'/wuliu/detail?id=' + item.id"
              target="_blank">
              <li class="wlzx_list_01"><img
                :src="item.parkSignPicture?item.parkSignPicture:'../../static/images/list_wlzx/wlyq_pic.png'"
                class="scrollLoading"
                width="268"
                height="268"></li>
              <li class="wlzx_list_02"><span>{{ item.parkName }}</span></li>
              <li class="wlzx_list_03"><font>{{ item.transportNumber?item.transportNumber: 0 }}</font><i>条</i><span>优质专线</span></li>
              <li class="wlzx_list_04"><span>{{ item.parkAddress }}</span></li>
              <li class="wlzx_list_05"><span>{{ item.browseNumber }}</span></li>
            </a>
          </ul>

        </div>

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

        <div class="bottom_wlyq" >
          <div class="bottom_wlyq_bt">您可能对这些感兴趣{{ currentPage }}</div>
          <div class="bottom_wlyq_nr">
            <div
              v-for="(item,index) in getLogisticsPark"
              :key="index"
              class="bottom_wlyq_item"><a
                :href="'/wuliu/detail?id=' + item.id"
                target="_blank">{{ item.parkName }}</a></div>
          </div>
        </div>

      </div>

      <div class="list_right">
        <div class="zx_sx"><span class="biaozhi"/><span>园区推荐</span></div>
        <div class="tj_none hy_tj_none">
          <span>暂无相关园区推荐</span>
        </div>
        <div
          v-for="(item,index) in recommendParklist"
          :key="index"
          class="tj_list">
          <a
            :href="'/wuliu/detail?id=' + item.id"
            target="_blank">
            <div class="p p1"><span>{{ item.parkName }}</span></div>
            <div class="p p3">
              <ul>
                <li class="tj_left tj_left1"><font >{{ item.transportNumber }}<em>条</em></font></li>
                <li class="tj_right"><span >优质专线</span></li>
                <li class="tj_left tj_left2"><font>{{ item.netWorkNumber }}<em>家</em></font></li>
                <li class="tj_right"><span >优质物流公司</span></li>
              </ul>
            </div>
            <div class="p p4"><span>{{ item.parkAddress }}</span></div>
            <div class="p p5"><span>{{ item.browseNumber }}</span></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
async function gatewaylist($axios, currentPage, vo = {}) {
  let list, pages
  let parm = {
    currentPage: currentPage,
    pageSize: 21,
    vo
  }
  await $axios
    .post('/aflc-portal/portalt/aflclogisticspark/v1/Gateway/Gatewaylist', parm)
    .then(res => {
      if (res.data.status === 200) {
        list = res.data.data.list
        pages = res.data.data.pages
      }
    })
  return { list, pages, currentPage }
}
export default {
  name: 'WuLiu',
  head: {
    title: '物流园区-28快运',
    meta: [
      {
        name: 'keywords',
        content:
          '物流,物流平台,物流专线,物流公司,物流服务,在线发货,查询运价,运单查询,运单跟踪,物流帮'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '28快运是专业提供零担运输和整车运输等物流服务平台，同时提供免费发布货源、车源、专线。货主在线发货，物流跟踪查询，服务有保障，让您发货省时，省钱，更省心！'
      }
    ],
    link: [
      { rel: 'stylesheet', href: '/css/basic.css' },
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/list_wlyq.css' }
    ]
  },
  data() {
    return {
      getGatewaylist: [],
      getLogisticsPark: [],
      recommendParklist: [],
      searchKey: '',
      pages: 0, //总页数
      currentPage: 1, //当前页
      locationProvince: '',
      locationCity: '',
      locationArea: ''
    }
  },
  async asyncData({ $axios, app, query }) {
    let parm = {
      currentPage: 1,
      pageSize: 16,
      vo: {}
    }
    let getLogisticsPark = await $axios.post(
      '/aflc-portal/portalt/aflclogisticspark/v1/Gateway/getLogisticsPark',
      parm
    )
    let parm1 = {
      currentPage: 1,
      pageSize: 14,
      vo: {}
    }
    let recommendParklist = await $axios.post(
      '/aflc-portal/portalt/aflclogisticspark/v1/Gateway/RecommendParklist',
      parm1
    )
    let getGatewaylist = await gatewaylist($axios, 1, {
      locationProvince: app.$cookies.get('currentProvinceFullName'),
      locationCity: app.$cookies.get('currentAreaFullName')
    })
    return {
      getGatewaylist: getGatewaylist.list,
      pages: getGatewaylist.pages,
      currentPage: getGatewaylist.currentPage,
      getLogisticsPark:
        getLogisticsPark.data.status === 200
          ? getLogisticsPark.data.data.list
          : [],
      recommendParklist:
        recommendParklist.data.status === 200
          ? recommendParklist.data.data.list
          : []
    }
  },
  mounted() {
    seajs.use(['./js/city-picker.data.js'], () => {
      seajs.use(['./js/city-picker.js'], () => {
        seajs.use(['./js/jquery.pagination.min.js'], () => {
          function GetUrlParam(name) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
            var r = encodeURI(window.location.search)
              .substr(1)
              .match(reg)
            if (r != null) return unescape(r[2])
            return null
          }

          var locationProvince1 = GetUrlParam('locationProvince')
          var locationCity1 = GetUrlParam('locationCity')
          var locationArea1 = GetUrlParam('locationArea')
          var parkName1 = GetUrlParam('parkName')

          var locationProvince = decodeURI(locationProvince1)
          var locationCity = decodeURI(locationCity1)
          var locationArea = decodeURI(locationArea1)
          var parkName = decodeURI(parkName1)

          var currentProvinceFullName = $.cookie('currentProvinceFullName')
          var currentAreaFullName = $.cookie('currentAreaFullName')

          var vo = new Object()

          vo.locationProvince = locationProvince
          vo.locationCity = locationCity
          vo.locationArea = locationArea
          vo.parkName = parkName

          if (!locationProvince || locationProvince == 'null') {
            locationProvince = currentProvinceFullName
            vo.locationProvince = locationProvince
          }
          if (!locationCity || locationCity == 'null') {
            locationCity = currentAreaFullName
            vo.locationCity = locationCity
          }
          if (!locationArea || locationArea == 'null') {
            locationArea = ''
            delete vo.locationArea
          }
          if (!parkName || parkName == 'null') {
            parkName = ''
            delete vo.parkName
          }
          $('#parkAddress input').citypicker({
            province: locationProvince,
            city: locationCity,
            district: locationArea
          })
          $('#list_nav_a').html(locationCity + locationArea + '物流园区')

          $('#parkName').val(parkName)
          this.loadPagination()
        })
      })
    })
  },
  methods: {
    async search() {
      let list1 = []
      $('#parkAddress .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      this.locationProvince = list1[0]
      this.locationCity = list1[1]
      this.locationArea = list1[2]
      let vo = {
        locationProvince: this.locationProvince,
        locationCity: this.locationCity,
        locationArea: this.locationArea,
        parkName: this.searchKey
      }
      let obj = await gatewaylist(this.$axios, 1, vo)
      this.getGatewaylist = obj.list
      this.currentPage = obj.currentPage
      if (obj.list.length === 0) {
        this.pages = 0
      } else {
        this.pages = obj.pages
      }
      this.loadPagination()
    },
    async flush() {
      this.searchKey = ''
      this.locationProvince = ''
      this.locationCity = ''
      this.locationArea = ''
      let currentProvinceFullName = this.$cookies.get('currentProvinceFullName')
      let currentAreaFullName = this.$cookies.get('currentAreaFullName')
      console.log(currentAreaFullName)
      // $('#parkAddress input').citypicker({
      //   province: currentProvinceFullName,
      //   city: currentAreaFullName,
      //   district: ''
      // })
      $('#parkAddress input').citypicker('reset')
      let obj = await gatewaylist(this.$axios, 1, {
        locationProvince: this.$cookies.get('currentProvinceFullName'),
        locationCity: this.$cookies.get('currentAreaFullName')
      })
      this.getGatewaylist = obj.list
      this.currentPage = obj.currentPage
      if (obj.list.length === 0) {
        this.pages = 0
      } else {
        this.pages = obj.pages
      }
      this.loadPagination()
    },
    loadPagination() {
      $('#pagination1').pagination({
        currentPage: this.currentPage,
        totalPage: this.pages,
        callback: async current => {
          $('#current1').text(current)
          let obj = await gatewaylist(this.$axios, current, {
            locationProvince: this.locationProvince
              ? this.locationProvince
              : this.$cookies.get('currentProvinceFullName'),
            locationCity: this.locationCity
              ? this.locationCity
              : this.$cookies.get('currentAreaFullName'),
            locationArea: this.locationArea ? this.locationArea : '',
            parkName: this.searchKey
          })
          this.getGatewaylist = obj.list
          this.currentPage = obj.currentPage
          window.location.href = '#top'
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
