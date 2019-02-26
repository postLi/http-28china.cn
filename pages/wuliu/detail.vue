<template>
  <div>
    <div class="list_box" >
      <div class="list_nav">
        <a href="/">物流首页</a>&gt;<a 
          id="arc_nav_a1" 
          href="">物流园区</a>&gt;<a>{{ gatewayData.parkName }}</a>
      </div>
      <div class="list_left">
        <div class="left_main">
          <div class="left_bt"><span>{{ gatewayData.parkName }}</span></div>
          <div class="left_nr">
            <div class="left_nr_1"><img
              :src="gatewayData.parkSignPicture?gatewayData.parkSignPicture:'../../static/images/article_wlzx/wlyq_pic.png'"></div>
            <div class="left_nr_2">
              <div 
                id="allmap" 
                onmouseout="$('#allmap').css('display', 'none')"
                onmouseover="$('#allmap').css('display', 'block')" />
              <ul>
                <li class="list_yq1"><img src="../../static/images/article_wlzx/peple.png"><span>{{ gatewayData.parkContact }}</span></li>
                <li class="list_yq2"><img src="../../static/images/article_wlzx/phone-ico.png"><span>{{ gatewayData.parkMobile }}</span></li>
                <li class="list_yq3"><span>电话：<em>{{ gatewayData.parkNum }}</em></span></li>
                <li class="list_yq4"><a
                  v-if="gatewayData.contactQq"
                  :href=" 'http://wpa.qq.com/msgrd?v=3&uin=' + gatewayData.contactQq + '&site=qq&menu=yes'"
                  target="_blank"><span>QQ：<em>{{ gatewayData.contactQq }}</em></span></a></li>
                <li class="list_yq5"><span>区域：<em>{{ gatewayData.locationProvince }}{{ gatewayData.locationCity }}{{ gatewayData.locationArea }}</em></span></li>
                <li class="list_yq6"><span>详细地址：<em>{{ gatewayData.parkAddress }}</em></span><a
                  target="_blank"
                  @click="seeMap()">[查看地图]</a></li>
              </ul>
            </div>
          </div>
          <div class="left_jianjie_bt"><span class="biaozhi"/><span>园区信息</span></div>
          <div class="left_jianjie_nr">
            <p>{{ gatewayData.parkIntroduce }}</p>
          </div>
        </div>

        <div class="list_tiaoj"><span 
          id="checked_zx" 
          class="active">物流专线</span><span id="checked_wangdian">物流网点</span></div>
        <div class="list_left_zx">
          <div 
            class="w1036" 
            style=" background-color: #fff;margin-bottom: 20px;">

            <div class="select_con">
              <dl>
                <dd style="margin-left: -80px;">
                  <div 
                    id="wlLineFrom" 
                    class="fl list_input" 
                    style="position:relative;" >
                    <input 
                      name="cfd" 
                      style="height: 100%;" 
                      data-toggle="city-picker" 
                      data-level="district" 
                      type="text"
                      placeholder="请输入出发地" >
                  </div>
                  <img 
                    class="fl list_img" 
                    src="../../static/images/02jiantou.png">
                  <div 
                    id="wlLineTo" 
                    class="fl list_input" 
                    style="position:relative;" >
                    <input 
                      name="ddd" 
                      style="height: 100%;" 
                      data-toggle="city-picker" 
                      data-level="district" 
                      type="text" 
                      placeholder="请输入到达地" >
                  </div>

                  <input
                    v-model="searchWLGS"
                    type="text" 
                    class="list_input"
                    placeholder="请输入公司名称">
                  <input
                    name="Submit2" 
                    value="搜索" 
                    readonly="" 
                    class="list_button"
                    @click="searchWlLine()">
                  <input
                    id="flush"
                    name="Submit2" 
                    value="重置" 
                    readonly="" 
                    @click="flush()">

                </dd>


                <dt >排序&nbsp;:</dt>
                <dd>
                  <a
                    v-for="(item,index) in AF025"
                    :key="index"
                    :class="[AF025Name === item.name ? 'now': '']"
                    @click="selectAF025(item)">{{ item.name }}</a>
                </dd>
                <dt >其他&nbsp;:</dt>
                <dd>
                  <a
                    v-for="(item,index) in sortList"
                    :key="index"
                    :class="[sortName === item.name ? 'now': '']"
                    @click="selectSort(item)">{{ item.name }}</a>
                </dd>
              </dl>
            </div>
          </div>
          <div class="w1036" >
            <dl class="zx_bt" >
              <dd class="bt01">出发地&nbsp;&rarr;&nbsp;到达地</dd>
              <dd class="bt02">重货价格</dd>
              <dd class="bt03">轻货价格</dd>
              <dd class="bt04">时效</dd>
              <dd class="bt05">物流公司</dd>
              <dd class="bt06">操作</dd>
            </dl>
            <ul
              class="zx_nr "
              style="margin-top: 0px;">
              <div
                v-if="transportRange.length === 0"
                class="list_none"
                style="display: block;">
                <span>暂时没有找到您要查询的信息，可以看看其他物流园区哦</span>
                <img src="../../static/images/none_pic.png">
              </div>
              <li 
                v-for="(item,index) in transportRange" 
                :key="index">
                <a
                  :href="'/shixiao/detail?id=' + item.rangeId +'&publishId=' + item.companyId"
                  target="_blank"><span class="nr01">{{ item.startCity }}{{ item.startArea }}&nbsp;&rarr;&nbsp;{{ item.endCity }}{{ item.endArea }}</span></a>
                <a
                  :href="'/shixiao/detail?id=' + item.rangeId +'&publishId=' + item.companyId"
                  target="_blank"><span class="nr02" ><font style="color:#f00">{{ item.discountPrice0 ? item.discountPrice0 : item.primeryPrice0 }}</font>元/公斤</span></a>
                <a
                  :href="'/shixiao/detail?id=' + item.rangeId +'&publishId=' + item.companyId"
                  target="_blank"><span class="nr03" ><font style="color:#f00">{{ item.primeryPrice1 }}</font>元/方</span> </a>
                <a
                  :href="'/shixiao/detail?id=' + item.rangeId +'&publishId=' + item.companyId"
                  target="_blank"><span class="nr04">{{ item.transportAging }}{{ item.transportAgingUnit }}</span></a>
                <a
                  :href="'/shixiao/detail?id=' + item.rangeId +'&publishId=' + item.companyId"
                  target="_blank"><span class="nr05">{{ item.companyName }}</span></a>
                <a
                  :href="'/shixiao/detail?id=' + item.rangeId +'&publishId=' + item.companyId"
                  target="_blank"><span class="nr06">详情</span></a>
              </li>
            </ul>
          </div>

          <!--分页-->
          <div 
            class="box" 
            style="float: right;margin-right: 160px;">
            <div 
              id="pagination1" 
              class="page fl"/>
            <div class="info fl">
              <!--<p>当前页数：<span id="current1">1</span></p>-->
            </div>
          </div>
          <!--分页-->
        </div>


        <div class="list_left_wangdian">
          <div 
            class="w1036" 
            style=" background-color: #fff;margin-bottom: 20px;">

            <div class="select_con">
              <dl>
                <dd style="margin-left: -80px;">
                  <input
                    v-model="searchWDKey"
                    type="text"
                    class="list_input" 
                    placeholder="请输入网点名称" >
                  <input
                    value=" 搜索 " 
                    readonly="" 
                    class="list_button" 
                    @click="searchWD()">

                </dd>

                <dt >其他&nbsp;:</dt>
                <dd>
                  <a class="now all">不限</a>
                  <a class="shiming" >认证</a>
                </dd>
              </dl>
            </div>
          </div>
          <div class="w1036" >
            <div 
              v-if="logisticsCompany.length === 0" 
              class="list_none"
              style="display: block;">
              <span>暂时没有找到您要查询的信息，可以看看其他物流园区哦</span>
              <img src="../../static/images/none_pic.png">
            </div>
            <ul 
              v-for="(item,index) in logisticsCompany" 
              :key="index"
              class="wlzx_list">
              <li class="wlzx_list_2">
                <p class="p1">
                  <font>{{ item.pointName }}</font><a
                    v-if="item.qq"
                    :href="'http://wpa.qq.com/msgrd?v='+ item.qq +'&uin=&site=qq&menu=yes'" 
                    target="_blank"><img src="../../static/images/article_wlzx/15qq.gif"></a>
                </P>

                <p class="p2"><a href="#">{{ item.companyName }}</a></p>
                <p 
                  v-if="item.credit >= 0 && item.credit <= 150" 
                  class="p3"><i>信誉：</i>
                  <img
                    v-for="(item1,index1) in item.starS" 
                    :key="index1"
                    class="xy_zuan" 
                    src="../../static/images/article_wlzx/blue.gif" 
                    style="display: inline">
                </p>
                <p 
                  v-if="item.credit >= 151" 
                  class="p3"><i>信誉：</i>
                  <img
                    v-for="(item1,index1) in item.starB" 
                    :key="index1"
                    class="xy_zuan"
                    src="../../static/images/article_wlzx/34huanguan.gif" 
                    style="display: inline">
                </p>
                <p class="p4"><i>联系人：</i><font>{{ item.contactsName }}</font></p>
                <p class="p5"><i>电话：</i><font>{{ item.contactsTel }}{{ item.mobile }}</font></p>
              </li>
              <li class="wlzx_list_3">
                <p class="p1"><i>经营范围：</i><span>{{ item.productService1 }}</span></P>
                <p class="p2"><i>增值服务：</i><span>{{ item.otherService1 }}</span></p>
              </li>
              <li class="wlzx_list_4">
                <p
                  v-if="item.authStatus === 'AF0010403'"
                  class="p1"><img src="../../static/images/10shiming.png"></P>
                <p
                  v-if="item.isVip === 1"
                  class="p2"><img src="../../static/images/11xinyong.png"></p>
                <p
                  v-if="item.collateral > 0"
                  class="p3"><img src="../../static/images/12danbao.png"></p>
              </li>
              <li class="wlzx_list_6">
                <p class="p1"><a
                  :href=" '/create/order?&uid=' + item.account +'&publishId=' + item.companyId"
                  target="_blank"><input value="下单"></a>
                </p><p class="p2"><a
                  :href="'/member/' + item.companyId + ''"
                  target="_blank"><input value="查看官网"></a>
              </p><p class="p3"/></li>
            </ul>
          </div>
          <!--分页-->
          <div 
            class="box" 
            style="float: right;margin-right: 170px;">
            <div 
              id="pagination2" 
              class="page fl"/>
            <div class="info fl">
              <!--<p>当前页数：<span id="current1">1</span></p>-->
            </div>
          </div>
          <!--分页-->
        </div>


      </div>

      <div class="list_right">

        <div class="zx_sx"><span class="biaozhi"/><span>承运商推荐</span></div>
        <div 
          v-if="companysList.length === 0" 
          class="tj_none">
          <span>没有相关承运商推荐</span>
        </div>
        <div 
          v-for="(item,index) in companysList" 
          :key="index" 
          class="tj_list tj_list0">
          <p class="p1">
            <span>{{ item.companyName }}</span>
          </p>
          <p
            v-if="item.credit >= 0 && item.credit <= 150"
            class="p2">
            <img
              v-for="(item1,index1) in item.starS"
              :key="index1"
              class="xy_zuan"
              src="../../static/images/article_wlzx/blue.gif" 
              style="display: inline">
          </p>
          <p
            v-if="item.credit >= 151"
            class="p2">
            <img
              v-for="(item1,index1) in item.starB"
              :key="index1"
              class="xy_zuan"
              src="../../static/images/article_wlzx/34huanguan.gif"
              style="display: inline">
          </p>
          <p class="p3"><i data-v-63732202="">联系人：</i><font>{{ item.contactsName }}</font></p>
          <p class="p4"><i>电话：</i><font> {{ item.mobile }}</font></p>
          <p class="p5"><i data-v-63732202="">地址：</i><font>{{ item.address }}</font></p>
          <p class="p6"><a 
            :href="'/member/'+item.companyId+''"
            target="_blank"><span data-v-63732202="">查看&nbsp;&gt;</span></a></p>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
function setCredit(item) {
  if (item.credit >= 0 && item.credit <= 3) {
    item.starS = new Array(1)
  }
  if (item.credit >= 4 && item.credit <= 10) {
    item.starS = new Array(2)
  }
  if (item.credit >= 11 && item.credit <= 40) {
    item.starS = new Array(3)
  }
  if (item.credit >= 41 && item.credit <= 90) {
    item.starS = new Array(4)
  }
  if (item.credit >= 91 && item.credit <= 150) {
    item.starS = new Array(5)
  }
  if (item.credit >= 151 && item.credit <= 250) {
    item.starB = new Array(1)
  }
  if (item.credit >= 251 && item.credit <= 500) {
    item.starB = new Array(2)
  }
  if (item.credit >= 501 && item.credit <= 1000) {
    item.starB = new Array(3)
  }
  if (item.credit >= 1001 && item.credit <= 2000) {
    item.starB = new Array(4)
  }
  if (item.credit >= 2001) {
    item.starB = new Array(5)
  }
}
async function getLogisticsCompany(
  $axios,
  query,
  vo = { parkId: 1, defaultSort: 1 }
) {
  let list,
    parm1 = {
      currentPage: 1,
      pageSize: 100,
      vo
    }
  await $axios
    .post(
      '/aflc-portal/portalt/aflclogisticspark/v1/Gateway/getLogisticsCompany/' +
        query.id,
      parm1
    )
    .then(res => {
      res.data.data.list.forEach(item => {
        if (JSON.parse(item.productService).length > 0) {
          item.productService1 = `
        ${JSON.parse(item.productService)[0]}
        ${JSON.parse(item.productService)[1]}
        ${JSON.parse(item.productService)[2]}`
        }
        if (JSON.parse(item.otherService).length > 0) {
          item.otherService1 = `
        ${JSON.parse(item.otherService)[0]}
        ${JSON.parse(item.otherService)[1]}
        ${JSON.parse(item.otherService)[2]}`
        }
        setCredit(item)
      })
      if (res.data.status === 200) {
        list = res.data.data.list
      }
    })
  return list
}
async function getTransportRange($axios, query, vo = {}) {
  let list,
    parm1 = {
      currentPage: 1,
      pageSize: 100,
      vo
    }
  await $axios
    .post(
      '/aflc-portal/portalt/aflclogisticspark/v1/Gateway/getTransportRange/' +
        query.id,
      parm1
    )
    .then(res => {
      res.data.data.list.forEach(item => {
        item.transportAgingUnit = item.transportAgingUnit.replace('多', '')
      })
      if (res.data.status === 200) {
        list = res.data.data.list
      }
    })
  return list
}
export default {
  name: 'WuLiu',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/basic.css' },
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/article_wlyq.css' }
    ],
    script: [
      {
        src:
          'http://api.map.baidu.com/api?v=2.0&ak=e0abRWFWOrgmN7emYjQGPj4Z0vyTVTfo'
      }
    ]
  },
  data() {
    return {
      AF025Name: '不限',
      sortList: [
        { name: '默认排序', vo: { defaultSort: 1 } },
        { name: '交易量', vo: { orderNumber: 1 } },
        { name: '运输时效', vo: { transportAging: 1 } },
        { name: '重货价格', vo: { weigthPrice: 1 } }
      ],
      sortName: '默认排序',
      searchWLGS: '',
      searchWDKey: ''
    }
  },
  async asyncData({ $axios, query }) {
    let gatewayData = await $axios.get('/28-web/logisticsPark/' + query.id)
    let jwd = ''
    const longitude = gatewayData.data.data.longitude
    const latitude = gatewayData.data.data.latitude
    if (longitude && latitude) {
      jwd = longitude + ',' + latitude
    }
    let parm = {
      currentPage: 1,
      pageSize: 100,
      vo: {
        parkId: query.id
      }
    }
    let companysList = await $axios.post(
      '/aflc-portal/portalt/aflcLogisticsCompany/v1/recommendCompanys',
      parm
    )
    companysList.data.data.list.forEach(item => {
      setCredit(item)
    })
    const transportRange = await getTransportRange($axios, query)
    const logisticsCompany = await getLogisticsCompany($axios, query)
    let AF025 = await $axios.get(
      '/aflc-common/sysDict/getSysDictByCodeGet/AF025'
    )
    AF025.data.data.unshift({ name: '不限', code: '' })
    return {
      gatewayData: gatewayData.data.status === 200 ? gatewayData.data.data : {},
      jwd,
      companysList:
        companysList.data.status === 200 ? companysList.data.data.list : [],
      transportRange: transportRange,
      logisticsCompany: logisticsCompany,
      AF025: AF025.data.status === 200 ? AF025.data.data : []
    }
  },
  mounted() {
    seajs.use(['../js/city-picker.data.js'], function() {
      seajs.use(['../js/city-picker.js'], function() {
        //切换内容 S
        $('#checked_zx').click(function() {
          $('.list_left_zx').css('display', 'block')
          $('#checked_zx').addClass('active')
          $('.list_left_wangdian').css('display', 'none')
          $('#checked_wangdian').removeClass('active')
        })
        $('#checked_wangdian').click(function() {
          $('.list_left_zx').css('display', 'none')
          $('#checked_zx').removeClass('active')
          $('.list_left_wangdian').css('display', 'block')
          $('#checked_wangdian').addClass('active')
        })
        //切换内容 E
        var locationProvince = $.cookie('currentProvinceFullName')
        var locationCity = $.cookie('currentAreaFullName')
        $('#arc_nav_a1').attr(
          'href',
          '/wuliu?tid=1' +
            '&locationProvince=' +
            locationProvince +
            '&locationCity=' +
            locationCity
        )
        $('#arc_nav_a1').html(locationCity + '物流园区')
      })
    })
  },
  methods: {
    async searchWlLine() {
      let list1 = [],
        list2 = []
      $('#wlLineFrom .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      let startp = list1[0]
      let startc = list1[1]
      let starta = list1[2]

      $('#wlLineTo .select-item').each(function(i, e) {
        list2.push($(this).text())
      })
      let endp = list2[0]
      let endc = list2[1]
      let enda = list2[2]
      let vo = {
        companyName: this.searchWLGS,
        endArea: enda,
        endCity: endc,
        endProvince: endp,
        startArea: starta,
        startCity: startc,
        startProvince: startp
      }
      this.transportRange = await getTransportRange(
        this.$axios,
        this.$route.query,
        vo
      )
    },
    async flush() {
      $('#wlLineFrom input').citypicker('reset')
      $('#wlLineTo input').citypicker('reset')
      this.AF025Name = '不限'
      this.sortName = '默认排序'
      this.searchWLGS = ''
      this.transportRange = await getTransportRange(
        this.$axios,
        this.$route.query
      )
    },
    searchWD() {
      window.open('/gongsi?&wangdian=' + this.searchWDKey)
    },
    async selectSort(item) {
      this.sortName = item.name
      this.transportRange = await getTransportRange(
        this.$axios,
        this.$route.query,
        item.vo
      )
    },
    async selectAF025(item) {
      this.AF025Name = item.name
      this.transportRange = await getTransportRange(
        this.$axios,
        this.$route.query,
        { otherServiceCode: item.code }
      )
    },
    map_init() {
      let map = new BMap.Map('allmap')
      let jwd = this.jwd ? this.jwd : '113.339865,23.138652'
      let newLoc = jwd.split(',')
      let point = new BMap.Point(parseFloat(newLoc[0]), parseFloat(newLoc[1]))
      map.centerAndZoom(point, 17)
      let marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      marker.setAnimation(BMAP_ANIMATION_BOUNCE) //跳动的动画

      //添加地图类型控件

      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      )
      map.setCurrentCity('广州') // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
      var opts = { type: BMAP_NAVIGATION_CONTROL_SMALL }
      map.addControl(new BMap.NavigationControl(opts))
    },
    map_block() {
      $('#allmap').css('display', 'block')
    },
    seeMap() {
      this.map_block()
      this.map_init()
    }
  }
}
</script>

<style scoped>
</style>
