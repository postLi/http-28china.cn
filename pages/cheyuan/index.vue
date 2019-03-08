<template>
  <div>
    <div class="list_box">
      <div class="list_nav">
        <a href="/">物流首页</a>&gt;<a
          id="list_nav_a"
          href="">车源信息</a>
      </div>
      <div class="list_left" >
        <div
          class="w1036"
          style=" background-color: #fff;border:1px solid #eeeeee;">
          <div class="zx_sx"><span class="biaozhi"/><span>车源筛选</span>
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
              <dt>车源线路&nbsp;：</dt>
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
                  id="carLineFrom"
                  class="fl list_input"
                  style="position:relative;" >
                  <input
                    name="cfd"
                    style="height: 80%;border: none;outline: none;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    placeholder="请输入出发地" >
                </div>
                <img
                  class="fl list_img"
                  src="/images/02jiantou.png">
                <div
                  id="carLineTo"
                  class="fl list_input"
                  style="position:relative" >
                  <input
                    name="ddd"
                    style="height: 80%;border: none;outline: none;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    placeholder="请输入到达地" >
                </div>
                <input
                  id="search_cheyuan"
                  readonly
                  name="Submit2"
                  value=" 搜索 "
                  class="list_button"
                  @click="search()">
                <input
                  id="flush"
                  name="Submit2"
                  readonly
                  value="重置 "
                  class="list_button"
                  @click="reload()">
              </form>
              </dd>

              <dt>车辆类型&nbsp;:</dt>
              <dd>
                <a
                  v-for="(item,index) in AF018"
                  :class="[item.code === vo.carType ? 'now':'']"
                  :key="index"
                  href="javascript:"
                  @click="AF018Click(item)">{{ item.name }}</a>
              </dd>

              <dt >车源类型&nbsp;:</dt>
              <dd>
                <a
                  v-for="(item,index) in carSourceList"
                  :class="[item.value === vo.carSourceType ? 'now':'']"
                  :key="index"
                  href="javascript:"
                  @click="carSourceTypeClick(item)">{{ item.name }}</a>
              </dd>

              <dt >即时/长期&nbsp;:</dt>
              <dd>
                <a
                  v-for="(item,index) in longCarList"
                  :class="[item.value === vo.isLongCar ? 'now':'']"
                  :key="index"
                  href="javascript:"
                  @click="longCarClick(item)">{{ item.name }}</a>
              </dd>

              <dt >车厢长度&nbsp;:</dt>
              <dd>
                <a
                  v-for="(item,index) in AF031"
                  :class="[item.id === vo.AF031Id ? 'now':'']"
                  :key="index"
                  href="javascript:"
                  @click="AF031Click(item)">{{ index===0? item.name : item.name + '米' }}</a>
              </dd>

              <dt>载重（吨）&nbsp;:</dt>
              <dd>
                <a
                  v-for="(item,index) in AF032"
                  :class="[item.id === vo.AF032Id ? 'now':'']"
                  :key="index"
                  href="javascript:"
                  @click="AF032Click(item)">{{ index===0? item.name : item.name + '吨' }}</a>
              </dd>
            </dl>
          </div>
        </div>
        <div
          id="js006"
          class="w1036 list_cy">
          <div class="zx_sx"><span class="biaozhi"/><span>车源信息</span></div>
          <!--<div class="list_tiaoj"><span class="active">默认排序</span><span>交易量</span><span>运输时效</span><span>重货价格</span></div>-->

          <div 
            v-if="carInfoList.length === 0"
            class="list_none"
            style="display: block">
            <span>暂时没有找到您要查询的信息，可以看看其他车源哦</span>
            <img src="/images/none_pic.png">
          </div>
          <ul 
            v-for="(item,index) in carInfoList" 
            :key="index" 
            class="wlzx_list">
            <li id="cy_list_0">
              <div class="sc_num"><img src="/images/list_wlzx/sc_num.png"><span><i><em>{{ item.collectNumber?item.collectNumber:0 }}</em>收藏量</i></span></div>
              <div class="view_num"><img src="/images/wzlImg/lll.png"><span><i><em>{{ item.browseNumber?item.browseNumber:0 }}</em>浏览量</i></span></div>
            </li>
            <li class="cy_list_4">
              <a
                :href="'/cheyuan/detail?id=' + item.id"
                target="_blank">
                <img :src="item.carFile?item.carFile.split(',')[0]:''" >
              </a>

            </li>
            <li class="cy_list_1">
              <p class="p1">
                <a
                  :href="'/cheyuan/detail?id=' + item.id"
                  class="list-title-a"
                  target="_blank" >
                  <span class="list-icon lines-sprite-icons icon-start"/>
                  <em>{{ item.startCity?item.startCity:'' + item.startArea?item.startArea:'' }}</em>
                  <span class="list-icon lines-sprite-icons icon-through"/>
                  <span class="list-icon lines-sprite-icons icon-end"/>
                  <em>{{ item.endCity?item.endCity:'' + item.endArea?item.endArea:'' }}</em>
                </a>

              </P>
              <p class="p2"><i>车辆：</i><font>{{ item.carNum }}</font>
                <font>{{ item.carTypeName }}</font>
                <font>长<b>{{ item.carLength }}</b>米</font>
                <font>载重<b>{{ item.carLoad }}</b>吨</font>
                <font>{{ item.carSourceTypeName }}</font>
              </p>
              <p class="p3"><i>常驻地：</i><font>{{ item.usualPlace }}</font>&nbsp;&nbsp;<i>运价：</i>
                <font>{{ item.expectPrice?item.expectPrice + '元':'面议' }}</font>&nbsp;&nbsp;<i>发布者：</i>
              <font>{{ item.creater }}</font></p>
              <p class="p4"><i>说明：</i><font>{{ item.remark }}</font></p>
            </li>
            <li class="cy_list_3">
              <p class="p1"><img
                v-if="item.driverStatus === 'AF0010403'"
                src="/images/list_wlzx/10shiming.png"></P>
                <!--<p class="p2"><img id="list_xinyong" src="/images/list_wlzx/11xinyong.png"/></P>-->
            </li>
            <li class="wlzx_list_6">
              <p class="p2"><a
                :href="'/cheyuan/detail?id=' + item.id"
                target="_blank" ><input
                  readonly
                  value="查看"></a>
              </p>
              <!-- <p class="p3"><a
                v-if="item.qq"
                :href="'http://wpa.qq.com/msgrd?v=3&uin=' + item.qq + '&site=qq&menu=yes'"
                target="_blank"><input
                value="QQ交谈">
              </a></p> -->
            </li>
          </ul>
        </div>
        <!--分页-->
        <div
          class="box"
          style="float: right;margin-right: 150px;">
          <div
            id="pagination1"
            class="page fl"/>
          <div class="info fl">
          <!--<p>当前页数：<span id="current1">1</span></p>-->
          </div>
        </div>
        <!--分页-->

        <!-- 28为您推荐start -->
        <div
          class="hot-city-layer" 
          style="min-width:1036px;float:left">
          <div class="hot-city-unit">
            <h3 class="news-unit-title">{{ recommendBy28Label }}</h3>
            <ul class="hot-cities">
              <li 
                v-for="(item,index) in recommendBy28"
                :key="index" 
                class="hot-cities-li"><a
                  :href="'/cheyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity=&endProvince=&isLongCar=&startArea=&startCity='+item.startCity+'&startProvince='+item.startProvince"
                  class="hot-cities-a">{{ item.title }}</a></li>
            </ul>
          </div>
        </div>
        <!-- 28为您推荐end -->
         
      </div>
      <!-- 最新车源start -->
      <div class="list_new">
        <div class="zx_sx"><span class="biaozhi"/><span>最新车源</span></div>
        <div class="list_new_box">
          <ul 
          class="list_new_ul">
            <li
              v-for="(item,index) in newestCar"
              :key="index"
              class="manage_box"
            >
              <div class="li_one">
                <a :title="item.startProvince+item.startCity+'->'+item.endProvince+item.endCity">{{ item.startProvince }}{{ item.startCity }}->{{ item.endProvince }}{{ item.endCity }}</a>
                <span>{{ item.createTime }}</span>
              </div>
              <div class="li_two">
                <a><span>长{{ item.carLength }}米</span>|<span>载重{{ item.carLoad }}吨</span>|<span>{{ item.carSourceTypeName }}</span></a>
                <span><a
                  :href="'/cheyuan/detail?id=' + item.id"
                  class="li_check">查看详情</a></span>
              </div>
            </li>
          </ul>
        </div>

      </div>
      <!-- 最新车源end -->

      <div class="list_right">

        <div class="zx_sx"><span class="biaozhi"/><span>车源信息推荐</span></div>

        <div 
          v-if="$store.state.cheyuan.list_recommend.length === 0" 
          class="tj_none cy_tj_none" 
          style="display: block">
          <span>没有相关车源推荐</span>
        </div>

        <div class="che_box">
          <div 
            v-for="(item,index) in $store.state.cheyuan.list_recommend" 
            :key="index" 
            class="tj_list">
            <p class="p1">
              <a
                :href=" '/cheyuan/detail?id=' + item.id"
                class="list-title-a"
                target="_blank" >
                <span class="list-icon lines-sprite-icons icon-start"/>
                <em>{{ item.startCity + item.startArea }}</em>
                <span class="list-icon lines-sprite-icons icon-through"/>
                <span class="list-icon lines-sprite-icons icon-end"/>
                <em>{{ item.endCity + item.endArea }}</em>
              </a>

            </p>
            <div class="che_che">
              <p class="p3"><i>车辆载重：</i><span><b>{{ item.carLoad }}吨</b></span><em>车长：</em><font><b>{{ item.carLength }}米</b></font></p>
              <p class="p3">
                <i>车源类型：</i><span>{{ item.carSourceTypeName }}</span><em>车辆类型：</em><font>{{ item.carTypeName }}</font>
              </p>
              <p class="p4">
                <i>常驻地：&nbsp;&nbsp;&nbsp;</i><span>{{ item.usualPlace }}</span>
              </p>
            </div>
            
            <!-- <p class="p4">
              <i>发车时间：</i><span id="nr0518"/>
            </p> -->
            <div class="p5">
              <span v-if="item.driverStatus === 'AF0010403'">
                <span><img src="member/images/list_wlzx/wlgs_shiming.png" ></span>
                <span><img src="member/images/list_wlzx/wlgs_xinyong.png" ></span>
                <span><img src="member/images/list_wlzx/wlgs_danbao.png" ></span>
              </span>
              <span>{{ item.startTime }}</span>
            </div>
            <!-- <p class="p5">
              <img src="member/images/list_wlzx/wlgs_xinyong.png" >
            </p>
            <p class="p5">
              <img src="member/images/list_wlzx/wlgs_danbao.png" >
            </p> -->
            <!-- <div class="p6">
              <div class="sc_num1"><img src="member/images/list_wlzx/sc_num.png"><span><i><em id="tj101"/>人收藏</i></span></div>
              <div class="view_num1"><img src="member/images/list_wlzx/ll_num.png"><span><i><em id="tj102"/>浏览量</i></span></div>
            </div> -->
          </div>
         
        </div>
        
      </div>

      <!--车主月人气榜start-->
      <div 
        class="list_right"
        style="margin-top: 20px">
        <div class="zx_sx"><span class="biaozhi"/><span>车主月人气榜</span></div>
        <div 
          v-for="(item, index) in $store.state.cheyuan.list_pop_carowner" 
          :key="index"
          :class="index < 3 ? 'rc_list'+index : ''" 
          class="rc_list">
          <div class="left"><p>{{ index+1 }}</p></div>
          <div 
            v-if="index < 3" 
            class="img"><img :src="'/images/index/wlgs_tj_0'+index+'.png'" ></div>
          <div class="right"><span>{{ item.driverName }} {{ item.carNum }}</span><span style="float: right">人气值：<i style="color: red">{{ item.popNum }}</i></span></div>
        </div>
      </div>

      <!-- 帮我找优质运动start -->
      <div class="list_help">
        <div class="list-box-r-top">
          <form action="">
            <h2 class="list_help_title">帮我找优质运力</h2>
            <div 
              id="form0" 
              class="ltl-input0">
              <input 
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
                autocomplete="off"
                data-toggle="city-picker"
                data-level="district"
                type="text" 
                class="ltl-location" 
                placeholder="请选择目到达地">
              <i class="ltl-icons ss56-common-sprite2 ltl-ico-end"/>
            </div>
            <div 
              id="form2" 
              class="ltl-input0">
              <select 
                v-model="checkNotice.selectValue"
                :style="{'color':checkNotice.selectValue === '请选择车型'?'#aaaaaa':'#333333'}"
                class="ltl-select">
                <option>请选择车型</option>
                <option 
                  v-for="(item,index) in AF018Select"
                  :value="item.code"
                  :key="index">{{ item.name }}</option>
              </select>
              <i class="ltl-icons ss56-common-sprite2 ltl-ico-end"/>
            </div>

            <div class="ltl-input">
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

      <!-- 全国热门物流专线start -->
      <div class="hot-city-layer main-width">
        <div class="hot-city-unit hot_box">
          <h3 class="news-unit-title">{{ hotRecommendLabel }}</h3>
          <ul class="hot-cities">
            <li 
              v-for="(item,index) in hotRecommend" 
              :key="index" 
              class="hot-cities-li"><a
                :href="'/cheyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity='+item.endCity+'&endProvince='+item.endProvince+'&isLongCar=&startArea=&startCity='+item.startCity+'&startProvince='+item.startProvince"
                class="hot-cities-a">{{ item.title }}</a></li>
          </ul>
        </div>
        <div class="hot-city-unit hot_box">
          <h3 class="news-unit-title">{{ startFromRecommendLabel }}</h3>
          <ul class="hot-cities">
            <li 
              v-for="(item,index) in startFromRecommend"
              :key="index"
              class="hot-cities-li" ><a
                :href="'/cheyuan?carLengthLower=&AF031Id=&carLengthUpper=&AF032Id=&carLoadLower=&carLoadUpper=&carSourceType=&carType=&endArea=&endCity='+item.endCity+'&endProvince='+item.endProvince+'&isLongCar=&startArea=&startCity='+item.startCity+'&startProvince='+item.startProvince"
                class="hot-cities-a">{{ item.title }}</a></li>
          </ul>
        </div>
      </div>
      <!-- 全国热门物流专线end -->
    </div>
  </div>
</template>

<script>
async function getCarInfoList($axios, currentPage, vo = {}) {
  let parm = vo
  parm.currentPage = currentPage
  parm.pageSize = 10
  let res = await $axios.post('/28-web/carInfo/list', parm) //车源信息列表
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
  name: 'CheYuan',
  head: {
    link: [{ rel: 'stylesheet', href: '/css/jquery.pagination.css' }],
    script: [
      { src: './js/city-picker.data.js' },
      { src: './js/city-picker.js' },
      { src: './js/jquery.pagination.min.js' },
      { src: '/js/gaodemap2.js' }
    ]
  },
  data() {
    return {
      pages: 0,
      currentPage: 1,
      longCarList: [
        { name: '不限', value: '' },
        { name: '即时车源', value: '1' },
        { name: '长期车源', value: '0' }
      ],
      carSourceList: [
        { name: '不限', value: '' },
        { name: '本地车', value: 'AF01802' },
        { name: '回程车', value: 'AF01801' }
      ],
      inTerVar: null,
      checkNotice: {
        start: '',
        end: '',
        selectValue: '请选择车型',
        phone: ''
      },
      phoneHolder: '请输入正确手机号'
    }
  },
  async fetch({ $axios, app, query, store }) {
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

    let vo = {
      carType: query.carType ? query.carType : '', //车辆类型
      carSourceType: query.carSourceType ? query.carSourceType : '', //车源类型
      isLongCar: query.isLongCar ? query.isLongCar : '', //即时/长期
      AF032Id: query.AF032Id ? query.AF032Id : '',
      AF031Id: query.AF031Id ? query.AF031Id : '',
      carLengthLower: query.carLengthLower ? query.carLengthLower : '', //车厢长度
      carLengthUpper: query.carLengthUpper ? query.carLengthUpper : '', //车厢长度
      carLoadLower: query.carLoadLower ? query.carLoadLower : '', //载重
      carLoadUpper: query.carLoadUpper ? query.carLoadUpper : '', //载重
      endArea: query.endArea ? query.endArea : '',
      endCity: query.endCity ? query.endCity : '',
      endProvince: query.endProvince ? query.endProvince : '',
      startArea: query.startArea ? query.startArea : '',
      startCity: query.startCity
        ? query.startCity
        : areaData.currentAreaFullName,
      startProvince: query.startProvince
        ? query.startProvince
        : areaData.currentProvinceFullName
    }
    // 获取物流公司列表
    let vor = Object.assign({ pageSize: 5 }, vo)
    // console.log('vor:', vor)
    await store.dispatch('cheyuan/GETRECOMMEND', {
      data: {
        startProvince: vo.startProvince,
        startCity: vo.startCity,
        pageSize: 5
      },
      name: 'list_recommend'
    })
    await store.dispatch('cheyuan/GETPOPCARLIST', {
      name: 'list_pop_carowner'
    })
  },
  async asyncData({ $axios, app, query }) {
    let vo = {
      carType: query.carType ? query.carType : '', //车辆类型
      carSourceType: query.carSourceType ? query.carSourceType : '', //车源类型
      isLongCar: query.isLongCar ? query.isLongCar : '', //即时/长期
      AF032Id: query.AF032Id ? query.AF032Id : '',
      AF031Id: query.AF031Id ? query.AF031Id : '',
      carLengthLower: query.carLengthLower ? query.carLengthLower : '', //车厢长度
      carLengthUpper: query.carLengthUpper ? query.carLengthUpper : '', //车厢长度
      carLoadLower: query.carLoadLower ? query.carLoadLower : '', //载重
      carLoadUpper: query.carLoadUpper ? query.carLoadUpper : '', //载重
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
    let AF018 = await $axios.get(
      '/28-web/sysDict/getSysDictByCodeGet/AF018' //车辆类型列表
    )
    // let AF018Select = await $axios.get(
    //   '/28-web/sysDict/getSysDictByCodeGet/AF018' //车辆类型列表
    // )
    if (AF018.data.status === 200) {
      AF018.data.data.unshift({ code: '', name: '不限' })
    }
    let AF031 = await $axios.get(
      '/28-web/sysDict/getSysDictByCodeGet/AF031' //车厢长度列表
    )
    if (AF031.data.status === 200) {
      AF031.data.data.unshift({ id: '', name: '不限' })
    }
    let AF032 = await $axios.get(
      '/28-web/sysDict/getSysDictByCodeGet/AF032' //载重列表
    )
    if (AF032.data.status === 200) {
      AF032.data.data.unshift({ id: '', name: '不限' })
    }
    let carInfoLists = await getCarInfoList($axios, 1, vo)
    console.log(carInfoLists, 'carInfoLists4444444')

    //车源底部推荐
    let recommend = await $axios.post('/28-web/carInfo/related/links', vo)
    let newestCarRes = await $axios.get('/28-web/carInfo/newestCar') //最新车源推荐列表
    return {
      AF018: AF018.data.status === 200 ? AF018.data.data : [], //车辆类型列表
      AF018Select: AF018.data.status === 200 ? AF018.data.data : [], //优质运力 车辆类型列表
      AF031: AF031.data.status === 200 ? AF031.data.data : [], //车厢长度列表
      AF032: AF032.data.status === 200 ? AF032.data.data : [], //载重列表
      recommendBy28:
        recommend.data.status === 200
          ? recommend.data.data.recommendBy28.links
          : [], //28快运为您推荐
      recommendBy28Label:
        recommend.data.status === 200
          ? recommend.data.data.recommendBy28.label
          : '',
      startFromRecommend:
        recommend.data.status === 200
          ? recommend.data.data.startFromRecommend.links
          : [], //广州市出发的车源
      startFromRecommendLabel:
        recommend.data.status === 200
          ? recommend.data.data.startFromRecommend.label
          : '',
      hotRecommend:
        recommend.data.status === 200
          ? recommend.data.data.hotRecommend.links
          : [], ////全国热门车源信息
      hotRecommendLabel:
        recommend.data.status === 200
          ? recommend.data.data.hotRecommend.label
          : '',
      carInfoList: carInfoLists.list,
      pages: carInfoLists.pages,
      vo: vo,
      newestCar: newestCarRes.data.status === 200 ? newestCarRes.data.data : []
    }
  },

  mounted() {
    console.log(this.carInfoList)
    let rollContainer_h = $('.list_new_box').height()
    let roll = $('.list_new_ul')
    roll.append(roll.html())
    let number = 4
    let l = this.newestCar.length
    let manage_box_h = $('.manage_box').height()
    let startScroll = () => {
      this.inTerVar = setInterval(() => {
        roll
          .stop()
          .animate({ top: `${number * -manage_box_h}px` }, 2000, () => {
            if (number > l) {
              number = 4
              roll.css('top', '0px')
            }
          })
        number = number + 4
      }, 6000)
    }
    if (manage_box_h * l > rollContainer_h) {
      startScroll()
    }
    $('.list_new_box').hover(
      () => {
        clearInterval(this.inTerVar)
        this.inTerVar = null
      },
      () => {
        startScroll()
      }
    )

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
    $('#list_nav_a').html(
      this.vo.startCity +
        this.vo.startArea +
        ' 到 ' +
        this.vo.endCity +
        this.vo.endArea +
        ' 车源信息'
    )
    if (
      (!this.vo.startCity && !this.vo.startArea) ||
      (!this.vo.endCity && !this.vo.endArea)
    ) {
      $('#list_nav_a').html(
        this.vo.startCity +
          this.vo.startArea +
          '  ' +
          this.vo.endCity +
          this.vo.endArea +
          '车源信息'
      )
    }
    $('#carLineFrom input').citypicker({
      province: this.vo.startProvince,
      city: this.vo.startCity,
      district: this.vo.startArea
    })
    $('#carLineTo input').citypicker({
      province: this.vo.endProvince,
      city: this.vo.endCity,
      district: this.vo.endArea
    })
    this.pagination()
  },
  destroyed() {
    clearInterval(this.inTerVar)
    this.inTerVar = null
  },
  methods: {
    sendNotice() {
      if (this.checkNotice.start === '') {
        $('#form0').css('border-color', 'red')
      } else {
        $('#form0').css('border-color', '#e5e5e5')
      }
      if (this.checkNotice.end === '') {
        $('#form1').css('border-color', 'red')
      } else {
        $('#form1').css('border-color', '#e5e5e5')
      }
      if (this.checkNotice.selectValue === '请选择类型') {
        $('#form2').css('border-color', 'red')
      } else {
        $('#form2').css('border-color', '#e5e5e5')
      }
      let re = /^1[3|4|5|7|8|9]\d{9}$/
      if (this.checkNotice.phone === '') {
        $('.ltl-phone').css('border-color', 'red')
        this.phoneHolder = '请输入正确手机号'
      } else {
        if (re.test(this.checkNotice.phone)) {
          $('.ltl-phone').css('border-color', '#e5e5e5')
        } else {
          $('.ltl-phone').css('border-color', 'red')
          this.checkNotice.phone = ''
          this.phoneHolder = '请输入正确手机号'
        }
      }
    },
    searchDo() {
      let list1 = [],
        list2 = []
      $('#carLineFrom .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      this.vo.startProvince = list1[0] ? list1[0] : ''
      this.vo.startCity = list1[1] ? list1[1] : ''
      this.vo.startArea = list1[2] ? list1[2] : ''

      $('#carLineTo .select-item').each(function(i, e) {
        list2.push($(this).text())
      })
      this.vo.endProvince = list2[0] ? list2[0] : ''
      this.vo.endCity = list2[1] ? list2[1] : ''
      this.vo.endArea = list2[2] ? list2[2] : ''
    },
    async search() {
      this.searchDo()
      // let carInfoList = await getCarInfoList(this.$axios, 1, this.vo)
      // this.carInfoList = carInfoList.list
      // this.pages = carInfoList.pages
      // this.currentPage = carInfoList.currentPage
      // this.pagination()
      window.location.href = `/cheyuan?carLengthLower=${
        this.vo.carLengthLower
      }&AF031Id=${this.vo.AF031Id}&carLengthUpper=${
        this.vo.carLengthUpper
      }&AF032Id=${this.vo.AF032Id}&carLoadLower=${
        this.vo.carLoadLower
      }&carLoadUpper=${this.vo.carLoadUpper}&carSourceType=${
        this.vo.carSourceType
      }&carType=${this.vo.carType}&endArea=${this.vo.endArea}&endCity=${
        this.vo.endCity
      }&endProvince=${this.vo.endProvince}&isLongCar=${
        this.vo.isLongCar
      }&startArea=${this.vo.startArea}&startCity=${
        this.vo.startCity
      }&startProvince=${this.vo.startProvince}`
    },
    AF032Click(item) {
      this.vo.AF032Id = item.id
      if (item.name.indexOf('<') !== -1) {
        this.vo.carLoadLower = 0
        this.vo.carLoadUpper = item.name.substring(1, 20)
      } else if (item.name.indexOf('>') !== -1) {
        this.vo.carLoadLower = item.name.substring(1, 20)
        this.vo.carLoadUpper = 9999
      } else if (item.name === '不限') {
        this.vo.carLoadLower = ''
        this.vo.carLoadUpper = ''
      } else {
        this.vo.carLoadLower = item.name.split('-', 2)[0]
        this.vo.carLoadUpper = item.name.split('-', 2)[1]
      }
      this.search()
    },
    AF031Click(item) {
      this.vo.AF031Id = item.id
      if (item.name.indexOf('<') !== -1) {
        this.vo.carLengthLower = 0
        this.vo.carLengthUpper = item.name.substring(1, 20)
      } else if (item.name.indexOf('>') !== -1) {
        this.vo.carLengthLower = item.name.substring(1, 20)
        this.vo.carLengthUpper = 9999
      } else if (item.name === '不限') {
        this.vo.carLengthLower = ''
        this.vo.carLengthUpper = ''
      } else {
        this.vo.carLengthLower = item.name.split('-', 2)[0]
        this.vo.carLengthUpper = item.name.split('-', 2)[1]
      }
      this.search()
    },
    longCarClick(item) {
      this.vo.isLongCar = item.value
      this.search()
    },
    carSourceTypeClick(item) {
      this.vo.carSourceType = item.value
      this.search()
    },
    AF018Click(item) {
      this.vo.carType = item.code
      this.search()
    },
    pagination() {
      $('#pagination1').pagination({
        currentPage: this.currentPage,
        totalPage: this.pages,
        callback: async current => {
          $('#current1').text(current)
          this.searchDo()
          let carInfoList = await getCarInfoList(this.$axios, current, this.vo)
          this.carInfoList = carInfoList.list
          this.pages = carInfoList.pages
          this.current = carInfoList.current
          window.location.href = '#top'
        }
      })
    },
    reload() {
      window.location.href = '/cheyuan'
    }
  }
}
</script>

<style scoped>
/*物流专线 S */
body {
  background-color: #f7f7f7;
}
.zx_sx {
  overflow: hidden;
  line-height: 60px;
  height: 60px;
  color: #585858;
  font-size: 18px;
  font-weight: bold;
  background-color: #fff;
  border-bottom: 2px solid #3f94ee;
}
.list_cy .zx_sx {
  border-bottom: 2px solid #3f94ee;
  margin-bottom: 1px;
}
.list_right .zx_sx {
  border-bottom: 2px solid #3f94ee;
  margin-bottom: 1px;
}
.zx_sx span {
  float: left;
  display: block;
  color: #3f94ee;
}
.expand span {
  color: #999;
}
.collapse span {
  color: #999;
}
.zx_sx .biaozhi {
  width: 3px;
  height: 18px;
  background-color: #3f94ee;
  border-radius: 1px;
  margin: 16px 12px 0px 10px;
}
.list_box {
  width: 1400px;
  height: auto !important;
  margin: 0 auto;
  overflow: hidden;
}
.list_left {
  width: 1036px;
  float: left;
  margin-bottom: 40px;
}
.w1036 {
  width: 1036px;
  float: left;
  /*OVERFLOW: hidden;*/
  /* border: 1px solid #eee; */
  border-bottom: 0;
}
.tywlist {
  width: 1036px;
}
.tyxboxWrap {
  float: left;
  width: 100%;
  position: relative;
}
.list_right {
  min-height: 200px;
  height: auto !important;
  width: 344px;
  /* padding: 0px 0px 0 20px; */
  float: left;
  /* border: 1px solid #ddd; */
  box-sizing: border-box;
  margin-left: 20px;
}
.list_right > ul {
  float: left;
  width: 100%;
  background: #ffffff;
}
.list_hy_page2 {
  width: 1400px;
}
.w344 {
  width: 344px;
}
.tylist {
  width: 240px;
}
.select_con {
  width: 1034px;
  border-color: #eee;
  border-left: 0px;
  border-right: 0px;
}
.select_con dl dt {
  font-size: 13px;
  height: 39px;
  line-height: 39px;
  padding: 3px 0 0 20px;
}

.list_input {
  width: 161px;
  height: 32px;
  border-radius: 2px;
  border: solid 1px #e5e5e5;
  background: none;
  color: #999;
  font-size: 14px;
  padding-left: 9px;
}
.list_button {
  width: 72px;
  height: 28px;
  border-radius: 2px;
  border: solid 1px #3f94ee;
  background-color: #fff;
  color: #3f94ee;
  font-size: 15px;
  text-align: left;
  margin-left: 8px;
  cursor: pointer;
}
#search_cheyuan {
  width: 72px;
  height: 28px;
  color: #f9f9f9;
  padding-left: 20px;
  background: no-repeat url(/images/list_wlzx/wlgs_search.png) 10px 6px #3f94ee;
}
#flush {
  width: 70px;
  border: solid 1px #e3e3e3;
  color: #999;
  text-align: center;
  margin-left: 10px;
  font-size: 13px;
}

.list_img {
  position: relative;
  top: 10px;
  left: 5px;
  margin-right: 5px;
}
.select_con dl dd a:hover,
.select_con dl dd a.now {
  background: #3371ff;
  color: #fff;
}
.ck_input {
  width: 14px;
  height: 14px;
  border: solid 1px #ccc;
  position: relative;
  top: -2px;
  right: 3px;
  cursor: pointer;
}
.list_tiaoj {
  width: 1036px;
  height: 39px;
  background-color: #f1f1f1;
  border: solid 1px #e6e6e6;
  margin-bottom: 14px;
  background: no-repeat url(/images/list_wlzx/xiajt.png) #f1f1f1 363px 16px;
  position: relative;
}
.list_tiaoj span {
  display: block;
  text-align: center;
  line-height: 39px;
  float: left;
  width: 94px;
  height: 39px;
  cursor: pointer;
  font-size: 13px;
}
.list_tiaoj .active {
  background-color: #ffffff;
  color: #eb434d;
}
#tj_price {
  width: 140px;
  height: 100px;
  position: absolute;
  left: 300px;
  top: 40px;
  margin-left: 0px;
  /* border-radius: 6px;*/
  display: none;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  padding-top: 15px;
}
#tj_price1,
#tj_price2 {
  color: #ff6633;
  width: 140px;
  padding-bottom: 5px;
}
#tj_price1:hover,
#tj_price2:hover {
  color: #f00;
}

.wlzx_list {
  width: 1034px;
  float: left;
  /* height: 180px; */
  /* height: none !important; */
  border: solid 1px #dfdfdf;
  border-left: 0px;
  border-right: 0px;
  margin-top: -1px;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.4s;
}
.wlzx_list:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}
.wlzx_list li {
  /* height: 140px; */
  float: left;
  overflow: hidden;
}
.wlzx_list img {
  transition: 0.7s;
}
.wlzx_list img:hover {
  transform: scale(1.05);
}
.wlzx_list_1 {
  width: 150px;
  margin-left: 9px;
}
.wlzx_list_2 {
  width: 300px;
  margin-left: 20px;
}
.wlzx_list_3 {
  width: 150px;
  margin-left: 30px;
}
.wlzx_list_4 {
  width: 90px;
  margin-left: 70px;
}
.wlzx_list_5 {
  width: 75px;
  margin-left: 65px;
}
.wlzx_list_6 {
  width: 110px;
  margin-left: 85px;
  margin-top: 63px;
}
.wlzx_list_2 p {
  height: 26px;
  line-height: 26px;
}
.wlzx_list_2 .p1 {
  margin-bottom: 3px;
}
.wlzx_list_2 .p1 a {
  color: #333333;
  font-size: 16px;
  font-weight: normal;
}
.wlzx_list_2 .p1 font {
  color: #666666;
  font-size: 12px;
  padding-left: 5px;
}
.wlzx_list_2 .p2 font {
  color: #3f94ee;
  font-size: 14px;
  padding-left: 5px;
}
.wlzx_list_2 .p3 font,
.wlzx_list_2 .p4 font {
  color: #333;
  font-size: 14px;
}
.wlzx_list_2 .p3 i,
.wlzx_list_2 .p4 i {
  color: #666;
  font-size: 14px;
  padding-left: 5px;
}

.wlzx_list_3 p {
  height: 27px;
  line-height: 27px;
  font-size: 14px;
}
.wlzx_list_3 p i {
  color: #999;
}
.wlzx_list_3 p font {
  color: #fb5000;
}
.wlzx_list_3 p span {
  color: #333;
}
.wlzx_list_4 p {
  height: 27px;
  line-height: 27px;
  font-size: 14px;
}
.wlzx_list_4 img {
  margin-top: 5px;
}
.wlzx_list_5 p {
  height: 27px;
  line-height: 27px;
  font-size: 12px;
}
.wlzx_list_5 p:nth-child(1) {
  display: none;
}
.wlzx_list_5 p i {
  color: #999;
}

.wlzx_list_6 p input {
  display: block;
  width: 102px;
  height: 26px;
  line-height: 26px;
  border-radius: 3px;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  border: solid 1px #dddddd;
}
.wlzx_list_6 p input:hover {
  opacity: 0.8;
}
.wlzx_list_6 .p1,
.wlzx_list_6 .p2 {
  margin-bottom: 12px;
}
.wlzx_list_6 .p1 input {
  background-color: #eb434d;
  color: #fff;
  border: 0px;
  height: 28px;
}
.wlzx_list_6 .p1 input:hover {
  background-color: #ff0000;
}

.wlzx_list_6 .p3 input {
  background: no-repeat url(/images/article_wlzx/15qq.gif) 12px 3px;

  padding-left: 15px;
  width: 87px;
}
.tj_list {
  background-color: #fff;
  /* margin-top: -1px; */
  border-bottom: 1px solid #dedede;
  width: 342px;
  font-size: 14px;
  transition: all 0.4s;
  float: left;
}
.tj_list .p6 {
  display: flex;
}
.tj_list:last-child {
  border-bottom: none;
}
.tj_list .p6 > div {
  flex: 1;
  margin-left: 16px;
  margin-right: 16px;
}
.tj_list:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}
.tj_list p {
  height: 30px;
  line-height: 30px;
  padding-left: 22px;
  padding-right: 0px;
}

.tj_list .p1 {
  height: 50px;
  line-height: 50px;
}
.tj_list .p1 span {
  font-size: 16px;
  color: #3f94ee;
}
.tj_list .p1 i {
  color: #c5c5c5;
  font-size: 16px;
  padding: 0 3px 0 3px;
}
.tj_list .p2 span {
  padding: 0 0 0 5px;
}

.tj_list .p3 i,
.tj_list .p3 em,
.tj_list .p4 i {
  font-size: 14px;
  color: #666;
}
.tj_list .p3 font,
.tj_list .p4 font {
  font-size: 14px;
  color: #eb434d;
}
.tj_list .p3 span,
.tj_list .p3 font,
.tj_list .p4 span {
  font-size: 14px;
  color: #333;
}
.tj_list .p3 i {
  float: left;
  width: 70px;
  height: 30px;
}
.tj_list .p3 b {
  font-weight: normal;
  color: #f00;
}
.tj_list .p3 em {
  float: left;
  /* width: 50px; */
  height: 30px;
}
.tj_list .p3 span {
  float: left;
  width: 80px;
  height: 30px;
}
.tj_list .p3 font {
  float: left;
  width: 60px;
  height: 30px;
}
.tj_list .p5 img {
  margin-top: 5px;
  margin-bottom: 10px;
  margin-right: 8px;
}
.tj_list .p5 {
  float: left;
  width: 100%;
  padding: 0 22px;
  box-sizing: border-box;
  /* display: flex; */
}
.tj_list .p5 span {
  float: left;
  /* flex: 1; */
  /* margin-left: 24px; */
}
.tj_list .p5 span:last-child {
  float: right;
  line-height: 35px;
  font-size: 12px;
  /* flex: 10; */
}
.che_che {
  float: left;
  margin: 12px 20px;
  background-color: #f8f8f8;
  box-sizing: border-box;
}
.tj_list img {
  transition: 0.7s;
}
.tj_list img:hover {
  transform: scale(1.05);
}
.tj_list .p6 {
  text-align: left;
  float: left;
}
.tj_list .p6 span {
  color: #3f94ee;
  font-size: 14px;
}
/*物流专线 E */

/*车源信息 S */
.cy_list_1 {
  width: 495px;
  margin-left: 30px;
}
.cy_list_2 {
  width: 182px;
  margin-left: 30px;
}
.cy_list_3 {
  width: 85px;
  margin-left: 30px;
  margin-top: 40px;
}
.cy_list_4 {
  width: 180px;
  margin-left: 11px;
}
.cy_list_4 > a {
  float: left;
}
.cy_list_5 {
  width: 102px;
  margin-left: 60px;
}
.cy_list_1 .p1 {
  margin-bottom: 3px;
}
.cy_list_1 p {
  height: 40px;
  line-height: 40px;
  white-space: nowrap;
}
.cy_list_1 p a {
  /* color: #eb434d; */
  font-size: 16px;
}
.cy_list_1 p i {
  font-size: 14px;
  color: #666;
}
.cy_list_1 p span {
  font-size: 14px;
  color: #666;
  padding: 0 2px 0 2px;
}
.cy_list_1 p font {
  font-size: 14px;
  color: #333;
  padding-right: 25px;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
}

.cy_list_2 p {
  height: 27px;
  line-height: 27px;
}

.cy_list_2 p span {
  color: #666;
  font-size: 14px;
}
.cy_list_2 p i {
  font-size: 14px;
}
.cy_list_4 p {
  height: 26px;
  margin: 0 0 5px 0;
}

.wlzx_list_6 .p2 input {
  background-color: #eb434d;
  color: #fff;
  border: 0;
}
/*车源信息 E */

/*货源信息 S */

.cy_list_5 {
  width: 102px;
  margin-left: 60px;
}
.cy_list_1 .p1 {
  margin-bottom: 8px;
}
.cy_list_1 .p1 a:hover em {
  color: #fa5000;
}
/* .cy_list_1 p {
  height: 30px;
  line-height: 30px;
} */
.cy_list_1 p a {
  /* color: #3f94ee; */
  font-size: 16px;
  font-weight: bold;
}
.cy_list_1 p i {
  font-size: 14px;
  color: #666;
}
.cy_list_1 p span {
  color: #eb434d;
  font-size: 14px;
}
.cy_list_1 p font {
  font-size: 14px;
  color: #333;
}
.cy_list_1 p b {
  color: #f00;
  font-weight: normal;
}
.cy_list_2 p {
  height: 27px;
  line-height: 27px;
}

.cy_list_2 p span {
  color: #666;
  font-size: 14px;
}
.cy_list_2 p i {
  font-size: 14px;
}
.cy_list_2 p font {
  color: #333;
}
.cy_list_3 p {
  height: 30px;
  line-height: 30px;
}
.wlzx_list_6 .p2 input {
  background-color: #3f94ee;
  color: #fff;
  border: 0;
}
#wlzx_list_view:hover {
  background-color: #f1f1f1;
}
#wlzx_list_view {
  border: solid 1px #dedede;
  background-color: #f9f9f9;
  font-size: 14px;
  color: #333;
}
/*货源信息 E */

.list_none {
  display: none;
}
.list_none span {
  float: left;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  margin-top: 40px;
}
.list_none img {
  float: left;
  width: 300px;
  height: 160px;
  margin: 20px 0 20px 400px;
}

.tj_none {
  display: none;
  background-color: #fff;
  width: 100%;
  height: 220px;
}
.tj_none span {
  float: left;
  width: 100%;
  text-align: center;
  height: 100px;
  line-height: 100px;
  font-size: 14px;
  margin-top: 0px;
}
.hy_tj_none {
  height: 186px;
}
.cy_tj_none {
  height: 290px;
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
  background: url(/images/list_wlzx/xiajt.png);
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
  background: url(/images/list_wlzx/up_jt.png);
  background-repeat: no-repeat;
  width: 12px;
  height: 7px;
  cursor: pointer;
}
/*显示隐藏E */

#carLineFrom {
  width: 220px;
  background: url(/images/list_wlzx/start_addr.png) no-repeat 200px 8px #fff;
  background-size: 16px 17px;
}
#carLineTo {
  width: 220px;
  background: url(/images/list_wlzx/end_addr.png) no-repeat 200px 8px #fff;
  background-size: 16px 17px;
}
#cy_list_0 {
  width: 100%;
  height: 26px;
  float: left;
}
.view_num {
  float: right;
  height: 26px;
  width: 120px;
  font-size: 12px;
  line-height: 26px;
}
.view_num img {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  margin: 0px 5px;
  vertical-align: middle;
}
.sc_num {
  float: right;
  height: 26px;
  width: 120px;
  font-size: 12px;
  line-height: 26px;
}
#cy_list_0 {
  overflow: visible;
}
#cy_list_0 img {
  margin-top: 32px;
  float: left;
  margin-right: 7px;
}
#cy_list_0 span {
  float: left;
  margin-top: 28px;
}
.cy_list_4 img {
  width: 180px;
  height: 180px;
}
.list_cy {
  margin-top: 20px;
  padding-bottom: 20px;
}

.lines-sprite-icons {
  background: url(/images/list_wlzx/ss56-lines-sprite.png) no-repeat;
}
.list-title-a {
  color: #333;
  font-size: 16px;
}
.list-title-a em {
  display: inline-block;
  vertical-align: middle;
  max-width: 6em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list-title {
  font-weight: 300;
  font-size: 18px;
  color: #333;
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
.view_num1 {
  float: left;
  height: 26px;
  width: 140px;
  font-size: 12px;
  line-height: 26px;
}
.sc_num1 {
  float: left;
  height: 26px;
  width: 140px;
  font-size: 12px;
  line-height: 26px;
}
.view_num1 img,
.sc_num1 img {
  float: left;
  margin-right: 10px;
  margin-top: 3px;
}
.view_num1 span,
.sc_num1 span {
  float: left;
}
.che_box {
  float: left;
}
.list_new_box {
  height: 400px;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
}
.list_new {
  float: left;
  margin-left: 20px;
  margin-bottom: 20px;
  background-color: white;
}
.list_new .list_new_ul {
  position: relative;
  width: 342px;
  background: #fff;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.list_new .list_new_ul li {
  /*flex: 1;*/
  /*display: flex;*/
  /*flex-direction: column;*/
  margin-bottom: 5px;
}
.li_one {
  display: flex;
  font-size: 12px;
  flex: 1;
  height: 20px;
  line-height: 20px;
}
.li_two {
  display: flex;
  font-size: 12px;
  flex: 1;
  height: 20px;
  line-height: 20px;
}
.li_one a {
  flex: 1;
  cursor: pointer;
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.li_one span {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  color: #999999;
  font-size: 12px;
}
.li_two a {
  flex: 1;
  cursor: pointer;
  color: #333333;
}
.li_two span {
  color: #999999;
}
.li_two .li_check {
  border-bottom: 1px solid #3f94ee;
  color: #3f94ee;
}

.list_help {
  width: 342px;
  margin-left: 20px;
  box-sizing: border-box;
  float: left;
  margin-top: 20px;
}
.list-box-r-top {
  width: 100%;
  box-sizing: border-box;
  background: url(/images/list_wlzx/che_background.png) no-repeat;
  /* background: #fff; */
  padding: 20px 20px;
  /* border: 1px solid #ececec; */
  margin-bottom: 10px;
}
.ltl-input0 {
  position: relative;
  margin: 7px 0 10px 0;
  width: 100%;
  height: 32px;
  border-radius: 2px;
  border: solid 1px #e5e5e5;
  background: white;
  font-size: 14px;
  line-height: 32px;
}
.ltl-select {
  appearance: none;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  border: none;
  outline: none;
}
.ltl-select option {
  color: #333333;
}
.ltl-input {
  position: relative;
  margin: 7px 0 10px 0;
}
.right-top-btn {
  display: block;
  height: 40px;
  width: 300px;
  background: #3f94ee;
  border: 0;
  outline: 0;
  border-radius: 4px;
  margin-top: 20px;
  color: #fff;
  cursor: pointer;
}
.ltl-ico-start {
  background-position: 0px 8px;
}
.ltl-icons {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 5px;
  top: 8px;
}
.ss56-common-sprite1 {
  background-image: url(/images/list_wlzx/select_icon.png);
  background-repeat: no-repeat;
}
.ltl-ico-end {
  background-position: 0px 8px;
}
.ltl-icons {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 5px;
  top: 8px;
}
.ss56-common-sprite2 {
  background-image: url(/images/list_wlzx/select_icon.png);
  background-repeat: no-repeat;
}
.list_help_title {
  color: #3f94ee;
}
.ltl-location {
  width: 100%;
  border: 1px solid #ccc;
  height: 35px;
  line-height: 35px;
  box-sizing: border-box;
  padding-left: 8px;
  /* border-radius: 4px; */
  padding-right: 50px;
  outline: 0;
}
.ltl-phone {
  width: 200px;
  border: 1px solid #ccc;
  height: 35px;
  line-height: 35px;
  box-sizing: border-box;
  padding-left: 8px;
  /* border-radius: 4px; */
  padding-right: 50px;
  outline: 0;
  margin-right: 5px;
}
.ltl-button {
  display: block;
  width: 92px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  box-sizing: border-box;
  background-color: #589def;
  color: #fff;
  border: 1px solid #589def;
  cursor: pointer;
  float: right;
}
.lines-sprite-icons {
  background: url(/images/list_wlzx/ss56-lines-sprite.png) no-repeat;
}
.list-title-a {
  color: #333;
  font-size: 16px;
}
.list-title {
  font-weight: 300;
  font-size: 18px;
  color: #333;
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

.main-width {
  width: 1400px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}
.hot_box {
  border-bottom: 1px dashed #dfdfdf;
}
.hot-city-unit {
  box-sizing: border-box;
  /* border: 1px solid #ececec; */
  background: #fff;
  padding: 10px;
}
.news-unit-title:after {
  position: absolute;
  content: '';
  height: 15px;
  width: 3px;
  left: 0;
  top: 8px;
  background: #589def;
}
.news-unit-title {
  position: relative;
  height: 32px;
  line-height: 32px;
  padding-left: 15px;
  /* border-bottom: 1px solid #ededed; */
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
}
.hot-cities-li {
  display: inline-block;
  padding: 10px;
}
.hot-cities-a {
  font-size: 14px;
  /* color: #333; */
}
.rc_list {
  margin: 10px 0;
}
.rc_list div {
  display: table-cell;
  vertical-align: middle;
  font-size: 14px;
}
.rc_list .left p {
  height: 20px;
  line-height: 20px;
  width: 20px;
  background-color: #8eb9f5;
  text-align: center;
  color: #ffffff;
  margin: 0 17px;
}
.rc_list0 .left p {
  background-color: #f65050;
}
.rc_list1 .left p {
  background-color: #ff8547;
}
.rc_list2 .left p {
  background-color: #ffac38;
}
.rc_list .img {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  padding-right: 9px;
}
.rc_list .right {
  color: #333333;
  width: 100%;
}
</style>
