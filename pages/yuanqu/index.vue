<template>
  <div class="yuanqu">
    <div class="list_box">
      <div class="herder">
      <!-- <img 
          src="../../static/yuanqu/images/hearder.png" 
          alt=""> -->
      </div>
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
                    style="height: 100%;border: none;outline: none;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    placeholder="请选择省-市-区" >
                </div>
                <span>&nbsp;园区名称&nbsp;：</span>
                <input
                  v-model="vo.parkName"
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
                  @click="reload()">
              </form>
              </dd>

            </dl>
          </div>
        </div>
        <div class="w1036 list_wlyq">
          <div
            v-if="getGateWayList.length === 0"
            class="list_none"
            style="display: block">
            <span>暂时没有找到您要查询的信息，可以看看其他园区哦</span>
            <img src="../../static/images/none_pic.png">
          </div>

          <ul
            v-for="(item,index) in getGateWayList"
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
          <div class="bottom_wlyq_bt">您可能对这些感兴趣</div>
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
          v-for="(item,index) in recommendParkList"
          :key="index"
          class="tj_list">
          <a
            :href="'/wuliu/detail?id=' + item.id"
            target="_blank">
            <div class="p p1"><span>{{ item.parkName }}</span></div>
            <div class="p p3">
              <ul>
                <li class="tj_left tj_left1"><font >{{ item.transportNumber }}条</font></li>
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
async function gateWayList($axios, currentPage, vo = {}) {
  let parm = vo
  parm.currentPage = currentPage
  parm.pageSize = 21
  let res = await $axios.post('/28-web/logisticsPark/list', parm)
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
  name: 'WuLiu',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/basic.css' },
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/list_wlyq.css' }
    ],
    script: [
      { src: '../js/city.js' },
      { src: '/layer/dist/layui.js' },
      { src: '../js/city-picker.js' },
      { src: '../js/jquery.pagination.min.js' }
      // { src: './js/city-picker.data.js' },
      // { src: './js/city-picker.js' },
      // { src: './js/jquery.pagination.min.js' }
    ]
  },
  data() {
    return {
      pages: 0, //总页数
      currentPage: 1 //当前页
    }
  },
  async asyncData({ $axios, app, query }) {
    let vo = {
      parkName: query.parkName ? query.parkName : '',
      locationProvince: query.locationProvince
        ? query.locationProvince
        : app.$cookies.get('currentProvinceFullName'),
      locationCity: query.locationCity
        ? query.locationCity
        : app.$cookies.get('currentAreaFullName'),
      locationArea: query.locationArea ? query.locationArea : ''
    }
    let parm = vo
    parm.currentPage = 1
    parm.pageSize = 16
    let getLogisticsPark = await $axios.post(
      '/28-web/logisticsPark/interestedList',
      parm
    )
    let parm1 = vo
    parm1.currentPage = 1
    parm1.pageSize = 14
    let recommendParkList = await $axios.post(
      '/28-web/logisticsPark/recommendList',
      parm1
    )
    let getGateWayListData = await gateWayList($axios, 1, vo)
    return {
      getGateWayList: getGateWayListData.list,
      pages: getGateWayListData.pages,
      currentPage: getGateWayListData.currentPage,
      getLogisticsPark:
        getLogisticsPark.data.status === 200
          ? getLogisticsPark.data.data.list
          : [],
      recommendParkList:
        recommendParkList.data.status === 200
          ? recommendParkList.data.data.list
          : [],
      vo: vo
    }
  },
  mounted() {
    $('#parkAddress input').citypicker({
      province: this.vo.locationProvince,
      city: this.vo.locationCity,
      district: this.vo.locationArea
    })
    $('#list_nav_a').html(
      this.vo.locationCity + this.vo.locationArea + '物流园区'
    )
    this.loadPagination()
  },
  methods: {
    async search() {
      let list1 = []
      $('#parkAddress .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      this.vo.locationProvince = list1[0] ? list1[0] : ''
      this.vo.locationCity = list1[1] ? list1[1] : ''
      this.vo.locationArea = list1[2] ? list1[2] : ''
      window.location.href = `/wuliu?locationProvince=${
        this.vo.locationProvince
      }&locationCity=${this.vo.locationCity}&locationArea=${
        this.vo.locationArea
      }&parkName=${this.vo.parkName}`
    },
    reload() {
      window.location.href = '/wuliu'
    },
    loadPagination() {
      $('#pagination1').pagination({
        currentPage: this.currentPage,
        totalPage: this.pages,
        callback: async current => {
          $('#current1').text(current)
          let obj = await gateWayList(this.$axios, current, this.vo)
          this.getGateWayList = obj.list
          this.currentPage = obj.currentPage
          window.location.href = '#top'
        }
      })
    }
  }
}
</script>

<style lang="scss">
.yuanqu {
}
</style>
