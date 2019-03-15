<template>
  <div>
    <div class="list_box">

      <div class="list_nav">
        <a href="/">物流首页</a>&gt;<a
          id="list_nav_a"
          href="">货源信息</a>
      </div>
      <div class="list_left">
        <div
          class="w1036"
          style=" background-color: #fff;">
          <div class="zx_sx"><span class="biaozhi"/><span>货源筛选</span>
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
          <div class="select_con" >
            <dl >
              <dt>货源线路&nbsp;：</dt>
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
                  id="HuoyuanFrom"
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
                  src="/images/list_wlzx/02jiantou.png">
                <div
                  id="HuoyuanTo"
                  class="fl list_input"
                  style="position:relative" >
                  <input
                    name="ddd"
                    style="height: 100%;"
                    data-toggle="city-picker"
                    data-level="district"
                    type="text"
                    placeholder="请输入到达地" >
                </div>
                <input
                  id="search_huoyuan"
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

              <dt>重量区间&nbsp;:</dt>
              <dd id="tjcx_01">
                <a
                  v-for="(item,index) in AF03801"
                  :class="[item.id === AF03801Id ? 'now':'']"
                  :key="index"
                  href="javascript:"
                  @click="AF03801Click(item)">{{ index===0? item.name : item.name + '公斤' }}</a>
              </dd>
              <dt>体积区间&nbsp;:</dt>
              <dd>
                <a
                  v-for="(item,index) in AF03802"
                  :class="[item.id === AF03802Id ? 'now':'']"
                  :key="index"
                  href="javascript:"
                  @click="AF03802Click(item)">{{ index===0? item.name : item.name + '立方' }}</a>

              </dd>


              <dt>货源类型&nbsp;:</dt>
              <dd>
                <a
                  v-for="(item,index) in orderClassList"
                  :class="[item.id === orderClass ? 'now':'']"
                  :key="index"
                  href="javascript:"
                  @click="orderClassClick(item)">{{ item.name }}</a>
              </dd>
            </dl>
          </div>
        </div>
        <div class="w1036 list_hy">
          <div class="zx_sx"><span class="biaozhi"/><span>货源信息</span></div>
          <!--<div class="list_tiaoj"><span class="active">默认排序</span><span>交易量</span><span>运输时效</span><span>重货价格</span></div>-->
          <div
            v-if="hyList.length === 0"
            class="list_none"
            style="display: block">
            <span>暂时没有找到您要查询的信息，可以看看其他货源哦</span>
            <img src="/images/none_pic.png">
          </div>
          <ul
            v-for="(item,index) in hyList"
            :key="index"
            class="wlzx_list">

            <li id="wlzx_list_0">
              <a
                :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"
                class="list-title-a"
                target="_blank" >
                <div class="position">

                  <span class="list-icon lines-sprite-icons icon-start"/>
                  <em>{{ item.start }}</em>
                  <span class="list-icon lines-sprite-icons icon-through"/>
                  <span class="list-icon lines-sprite-icons icon-end"/>
                  <em>{{ item.end }}</em>

                </div>
              </a>
              <div class="distance_total">[全程<em>{{ item.distance ? item.distance : 0 }}</em>公里]</div>
              <div class="sc_num"><img src="/images/list_wlzx/ll_num.png"><span><i>浏览量:<em>{{ item.browseNumber?item.browseNumber:0 }}</em></i></span></div>
              <div class="view_num"><img src="/images/list_wlzx/sc_num.png"><span><i>收藏量:<em>{{ item.collectNum?item.collectNum:0 }}</em></i></span></div>
            </li>


            <li class="wlzx_list_1">
              <p class="p1"/>
              <p class="p2"><img src="/images/list_wlzx/hy_item1.png"><i>货物：</i><font>{{ item.goodsTypeName }} </font></p>
              <p class="p3"><img src="/images/list_wlzx/hy_item2.png"><i>规格：</i>
                <span>{{ item.goodsNum ? item.goodsNum : 0 }}<font id="nr0420" >件&nbsp;|&nbsp;</font></span>
                <span>{{ item.goodsWeight }}<font >公斤&nbsp;|&nbsp;</font></span>
                <span>{{ item.goodsVolume }}<font >立方米</font></span>
              </p>
            </li>
            <li class="wlzx_list_2">
              <p class="p3"/>
              <p
                class="p1"
                :title="item.companyName"><img src="/images/list_wlzx/hy_item3.png"><span>发布者：</span><i>{{ item.companyName }}</i></P>
              <p class="p2"><img src="/images/list_wlzx/hy_item4.png"><span>联系人：</span><i>{{ item.contacts }}</i></P>
            </li>
            <li class="wlzx_list_4">
              <p class="p3"/>
              <p class="p1"><img src="/images/list_wlzx/hy_item5.png"><span>货源类型：</span><i>{{ item.orderClass }}</i></P>
              <p class="p2"><img src="/images/list_wlzx/hy_item6.png"><span>发布时间：</span><i>{{ item.createTime.substring(0, 16) }}</i></P>
            </li>
            <li class="wlzx_list_3">
              <p class="p1"><img
                v-if="item.authStatus === 'AF0010403'"
                src="/images/list_wlzx/10shiming.png"></P>
              <p class="p2"><img
                v-if="item.isVip && item.isVip === '1'"
                src="/images/list_wlzx/11xinyong.png"></P>
            </li>

            <li class="wlzx_list_6">
              <p class="p1"><a
                :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"
                target="_blank"><input
                  readonly
                  value="查看"></a>
              </p>
              <!-- <p class="p2"><a
                v-if="item.qq"
                :href="'http://wpa.qq.com/msgrd?v=3&uin='+item.qq+'&site=qq&menu=yes'"
                target="_blank">
              <input value="QQ交谈"></a>
              </p> -->
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
        class="hot-city-layer line-city-box">
          <div class="hot-city-unit">
            <h3
            class="news-unit-title line-title">{{ recommendBy28Label }}</h3>
            <ul class="hot-cities">
              <li 
                v-for="(item,index) in recommendBy28"
                :key="index" 
                class="hot-cities-li"><a
                  target="_blank"
                  :href="'/huoyuan?goodsVolumeLower=&' +goodsVolumeLower + '&goodsVolumeUpper=' + goodsVolumeUpper + '&goodsWeightLower='+goodsWeightLower +'&goodsWeightUpper='+goodsWeightUpper +'&orderClass='+orderClass+'&isLongCar='+item.isLongCar+'&startCity='+item.startCity+'&startProvince='+item.startProvince"
                  class="hot-cities-a">{{ item.title }}</a></li>
            </ul>
            <!-- <ul class="hot-cities">
              <li class="hot-cities-li"><a
                class="hot-cities-a"
                href="/goods/f440300.html">深圳找车拉货</a></li>
              <li class="hot-cities-li"><a
                class="hot-cities-a"
                href="/goods/f440100.html">广州找车拉货</a></li>
              <li class="hot-cities-li"><a
                class="hot-cities-a"
                href="/goods/f441900.html">东莞市到上海市货源</a></li>
              <li class="hot-cities-li"><a
                class="hot-cities-a"
                href="/goods/f140400.html">长治找车拉货</a></li>
              <li class="hot-cities-li"><a
                class="hot-cities-a"
                href="/goods/f440500.html">汕头找车拉货</a></li>
              <li class="hot-cities-li"><a
                class="hot-cities-a"
                href="/goods/f440600.html">佛山找车拉货</a></li>
              <li class="hot-cities-li"><a
                class="hot-cities-a"
                href="/goods/f440700.html">江门找车拉货</a></li>
              <li class="hot-cities-li"><a
                class="hot-cities-a"
                href="/goods/f440800.html">湛江找车拉货</a></li>
              <li class="hot-cities-li"><a
                class="hot-cities-a"
                href="/goods/f440900.html">茂名找车拉货</a></li>
              <li class="hot-cities-li"><a
                class="hot-cities-a"
                href="/goods/f441200.html">肇庆找车拉货</a></li>
            </ul> -->
          </div>
        </div>
        <!-- 28为您推荐end -->
      </div>
 
      <div class="box_right">
        <!-- 最新车源start -->
        <div class="list_new">
          <div class="zx_sx"><span class="biaozhi"/><span>最新货源</span></div>
          <div class="list_new_box">
            <ul 
            class="list_new_ul">
              <li
                v-for="(item,index) in newestCar"
                :key="index"
                class="manage_box">
                <div class="li_one">
                  <a 
                    target="_blank" 
                    :title="item.startProvince+item.startCity+'->'+item.endProvince+item.endCity">{{ item.startProvince }}{{ item.startCity }}->{{ item.endProvince }}{{ item.endCity }}</a>
                  <span>{{ item.createTime }}</span>
                </div>
                <div class="li_two">
                  <a><span>长{{ item.carLength }}米</span>|<span>载重{{ item.carLoad }}吨</span>|<span>{{ item.carSourceTypeName }}</span></a>
                  <span><a
                    target="_blank"
                    :href="'/cheyuan/detail?id=' + item.id"
                    class="li_check">查看详情</a></span>
                </div>
              </li>
            </ul>
          </div>

        </div>
        <!-- 最新车源end -->
        <!-- 订阅优质货源start -->
        <div class="list_help">
          <div class="list-box-r-top">
            <form action="">
              <h2 class="list_help_title">订阅优质货源</h2>
              <div class="ltl-input">
                <input
                  id="right-bar-form"
                  autocomplete="off"
                  wtmap=""
                  type="text"
                  class="ltl-location"
                  placeholder="请选择出发地">
                <i class="ltl-icons ss56-common-sprite1 ltl-ico-start"/>
              </div>
              <div class="ltl-input">
                <input
                  id="right-bar-to"
                  autocomplete="off"
                  wtmap=""
                  type="text"
                  class="ltl-location"
                  placeholder="请选择目到达地">
                <i class="ltl-icons ss56-common-sprite2 ltl-ico-end"/>
              </div>
              <div class="ltl-input">
                <h4 class="ltl-text">订阅货源，第一时间获得系统消息通知</h4>
                <h4 class="ltl-text">已有18965人订阅后达成交易</h4>
              </div>
              <input
                id="check-fee"
                type="button"
                value="上新提醒我"
                class="right-top-btn">
            </form>
          </div>
        </div>
        <!-- 订阅优质货源end -->
        <div class="list_right">
          <div class="zx_sx"><span class="biaozhi"/><span>货源推荐</span></div>
          <div
            v-if="recommendList.length === 0"
            class="tj_none hy_tj_none"
            style="display: block">
            <span>没有相关货源推荐</span>
          </div>
          <div
            v-for="(item,index) in recommendList"
            :key="index"
            class="che_box">
            <div class="tj_list">
              <div class="p p1"><img src="/images/04gongsi.png" ><span><a
              target="_blank" >{{ item.companyName }}</a></span>
                <span class="img_icon">
                  <img
                    v-if="item.authStatus === 'AF0010403'"
                    src="/images/list_wlzx/shiming.png" >
                  <img
                    v-if="item.isVip && item.isVip === '1'"
                    src="/images/list_wlzx/xinyong.png" >
                </span>


              </div>
              <div class="p p2">
                <a
                  :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"
                  class="list-title-a"
                  target="_blank" >
                  <span class="list-icon lines-sprite-icons icon-start"/>
                  <em>{{ item.start }}</em>
                  <span class="list-icon lines-sprite-icons icon-through"/>
                  <span class="list-icon lines-sprite-icons icon-end"/>
                  <em>{{ item.end }}</em>
                </a>
              </div>

              <div class="p p3">
                <ul>
                  <li class="tj_left"><i>货物：</i><span
                    :title="item.goodsTypeName"
                    v-if="item.goodsTypeName">{{ item.goodsTypeName }}</span></li>
                  <li class="tj_right"><i>数量：</i><span v-if="item.goodsNum">{{ item.goodsNum ? item.goodsNum : 0 }}件</span></li>
                  <li class="tj_left"><i >重量：</i><font v-if="item.goodsWeight">{{ item.goodsWeight }}</font><em>公斤</em></li>
                  <li class="tj_right"><i >体积：</i><font v-if="item.goodsVolume">{{ item.goodsVolume }}</font><em>立方米</em></li>
                </ul>
              </div>
              <div class="p p6">
                <div class="sc_num1"><img src="/images/list_wlzx/ll_num.png"><span><i><em>{{ item.browseNumber ? item.browseNumber: 0 }}</em></i>浏览</span></div>
                <div class="view_num1"><img src="/images/list_wlzx/sc_num.png"><span><i><em>{{ item.collectNum ? item.collectNum: 0 }}</em>人收藏</i></span></div>
              </div>
            </div>
          </div>

        </div>
        <!--车主月人气榜start-->
        <div
          class="arc_main4-content"
          style="margin-top: 20px">
          <div class="zx_sx"><span class="biaozhi"/><span>企业月人气榜</span></div>
          <div 
            v-for="(item,index) in popularity" 
            :key="index" 
            class="rc_list">
            <a :href="'/member/'+item.id">
              <div class="left">
                <p :class="{'oneColor':index == 0,'twoColor':index== 1 , 'trihColor':index==2}">{{ index+1 }}</p>
              </div>
              <div 
                v-if="index < 3" 
                class="img">
                <img :src="'/line/images/touxiang'+(index+1)+'.png'" >
              </div>
              <div class="right">
                <span>{{ item.companyName }}</span>
                <span style="float: right">人气值：<i style="color: red">{{ item.popularity }}</i></span>
              </div>
            </a>
          </div>
        </div>

       
      </div>
      <!-- 全国热门物流专线start -->
      <div class="hot-city-layer main-width">
        <div class="hot-city-unit hot_box ">
          <h3 class="news-unit-title">{{ hotRecommendLabel }}</h3>
          <ul class="hot-cities">
            <li 
              v-for="(item,index) in hotRecommend" 
              :key="index" 
              class="hot-cities-li"><a
                target="_blank"
                :href="'/huoyuan?goodsVolumeLower=&' +goodsVolumeLower + '&goodsVolumeUpper=' + goodsVolumeUpper + '&goodsWeightLower='+goodsWeightLower +'&goodsWeightUpper='+goodsWeightUpper +'&orderClass='+orderClass+'&isLongCar='+item.isLongCar+'&startCity='+item.startCity+'&startProvince='+item.startProvince+'&endCity='+item.endCity+'&endProvince='+item.endProvince"
                class="hot-cities-a">{{ item.title }}</a></li>
          </ul>
          <!-- <ul class="hot-cities">
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f440300.html">深圳找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f440100.html">广州找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f441900.html">东莞市到上海市货源</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f140400.html">长治找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f440500.html">汕头找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f440600.html">佛山找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f440700.html">江门找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f440800.html">湛江找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f440900.html">茂名找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f441200.html">肇庆找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f440300.html">深圳找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f440100.html">广州找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f441900.html">东莞市到上海市货源</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f140400.html">长治找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f440500.html">汕头找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f440600.html">佛山找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f440700.html">江门找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f440800.html">湛江找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f440900.html">茂名找车拉货</a></li>
            <li class="hot-cities-li"><a
              class="hot-cities-a"
              href="/goods/f441200.html">肇庆找车拉货</a></li>
          </ul> -->
        </div>
      </div>
      <!-- 全国热门物流专线end -->
      <div class="hot-city-unit hot_box">
        <h3 class="news-unit-title">{{ startFromRecommendLabel }}</h3>
        <ul class="hot-cities">
          <li 
            v-for="(item,index) in startFromRecommend"
            :key="index"
            class="hot-cities-li" ><a
              target="_blank"
              :href="'/huoyuan?goodsVolumeLower=&' +goodsVolumeLower + '&goodsVolumeUpper=' + goodsVolumeUpper + '&goodsWeightLower='+goodsWeightLower +'&goodsWeightUpper='+goodsWeightUpper +'&orderClass='+orderClass+'&isLongCar='+item.isLongCar+'&startCity='+item.startCity+'&startProvince='+item.startProvince+'&endCity='+item.endCity+'&endProvince='+item.endProvince"
              class="hot-cities-a">{{ item.title }}</a></li>
              
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
async function getHyList($axios, currentPage, vo = {}) {
  let parm = vo
  parm.currentPage = currentPage
  parm.pageSize = 20
  let res = await $axios.post('/28-web/lclOrder/list', parm)
  if (res.data.status === 200) {
    res.data.data.list.forEach(item => {
      for (let i in item) {
        item[i] = item[i] === null ? '' : item[i]
      }
      if (item.companyName && item.companyName > 8) {
        item.companyName = item.companyName.substring(0, 8) + '..'
      }
      if (!item.companyName) {
        item.companyName = '普通货主'
      }
      item.start = item.startCity + item.startArea
      item.end = item.endCity + item.endArea
      if (item.start) {
        item.start = item.start.substring(0, 6) + '..'
      }
      if (item.end) {
        item.end = item.end.substring(0, 6) + '..'
      }
      if (item.goodsTypeName) {
        item.goodsTypeName = item.goodsTypeName.substring(0, 14) + '..'
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
  let res = await $axios.post('/28-web/lclOrder/recommendList', parm)
  if (res.data.status === 200) {
    res.data.data.list.forEach(item => {
      for (let i in item) {
        item[i] = item[i] === null ? '' : item[i]
      }
      if (item.companyName && item.companyName > 12) {
        item.companyName = item.companyName.substring(0, 12) + '..'
      }
      if (!item.companyName) {
        item.companyName = '普通货主'
      }
      item.start = item.startCity + item.startArea
      item.end = item.endCity + item.endArea
      if (item.start) {
        item.start = item.start.substring(0, 6) + '..'
      }
      if (item.end) {
        item.end = item.end.substring(0, 6) + '..'
      }
      if (item.goodsTypeName) {
        item.goodsTypeName = item.goodsTypeName.substring(0, 6) + '..'
      }
    })

    return res.data.data.list
  } else {
    return []
  }
}
export default {
  name: 'HuoYuan',
  head: {
    link: [{ rel: 'stylesheet', href: '/css/jquery.pagination.css' }],
    script: [
      { src: './js/city-picker.data.js' },
      { src: './js/city-picker.js' },
      { src: './js/jquery.pagination.min.js' }
    ]
  },
  data() {
    return {
      hyList: [],
      pages: 0,
      currentPage: 1,
      recommendList: [],
      orderClassList: [
        { id: '', name: '不限' },
        { id: 'AF0490701', name: '单次急发货源' },
        { id: 'AF0490702', name: '长期稳定货源' }
      ],
      orderClass: '', //货源类型
      AF03802: [],
      AF03802Id: '',
      goodsVolumeLower: '', //体积区间
      goodsVolumeUpper: '', //体积区间
      AF03801: [],
      AF03801Id: '',
      goodsWeightLower: '', //重量区间
      goodsWeightUpper: '', //重量区间
      startProvince: '',
      startCity: '',
      startArea: '',
      endProvince: '',
      endCity: '',
      endArea: ''
    }
  },
  async asyncData({ $axios, app, query }) {
    let goodsVolumeLower = '',
      goodsVolumeUpper = '',
      goodsWeightLower = '',
      goodsWeightUpper = '',
      orderClass = '',
      AF03801Id = '',
      AF03802Id = '',
      endArea = '',
      endCity = '',
      endProvince = '',
      startArea = '',
      startCity = '',
      startProvince = ''
    if (query.goodsVolumeLower) {
      goodsVolumeLower = query.goodsVolumeLower
    }
    if (query.goodsVolumeUpper) {
      goodsVolumeUpper = query.goodsVolumeUpper
    }
    if (query.goodsWeightLower) {
      goodsWeightLower = query.goodsWeightLower
    }
    if (query.goodsWeightUpper) {
      goodsWeightUpper = query.goodsWeightUpper
    }
    if (query.orderClass) {
      orderClass = query.orderClass
    }
    if (query.AF03801Id) {
      AF03801Id = query.AF03801Id
    }
    if (query.AF03802Id) {
      AF03802Id = query.AF03802Id
    }
    if (query.endArea) {
      endArea = query.endArea
    }
    if (query.endCity) {
      endCity = query.endCity
    }
    if (query.endProvince) {
      endProvince = query.endProvince
    }
    if (query.startArea) {
      startArea = query.startArea
    }
    if (query.startCity) {
      startCity = query.startCity
    } else {
      startCity = app.$cookies.get('currentAreaFullName')
    }
    if (query.startProvince) {
      startProvince = query.startProvince
    } else {
      startProvince = app.$cookies.get('currentProvinceFullName')
    }
    let AF03801 = await $axios.get(
      '/28chinaservice/sysDict/getSysDictByCodeGet/AF03801'
    )
    if (AF03801.data.status === 200) {
      AF03801.data.data.unshift({ id: '', name: '不限' })
    }
    let AF03802 = await $axios.get(
      '/28chinaservice/sysDict/getSysDictByCodeGet/AF03802'
    )
    if (AF03802.data.status === 200) {
      AF03802.data.data.unshift({ id: '', name: '不限' })
    }
    let vo = {
      startProvince: startProvince,
      startCity: startCity,
      startArea: startArea,
      endProvince: endProvince,
      endCity: endCity,
      endArea: endArea,
      queryType: 2,
      orderClass: orderClass,
      AF03801Id: AF03801Id,
      AF03802Id: AF03802Id,
      goodsVolumeLower: goodsVolumeLower,
      goodsVolumeUpper: goodsVolumeUpper,
      goodsWeightLower: goodsWeightLower,
      goodsWeightUpper: goodsWeightUpper
    }
    let hyList = await getHyList($axios, 1, vo)
    let recommendList = await getRecommendList($axios, vo)
    console.log('vo:', vo)
    //货源底部推荐
    let recommend = await $axios.post('/28-web/lclOrder/list/related/links', vo)
    //企业人气榜
    let popularitys = await $axios
      .get('/28-web/logisticsCompany/popularity')
      .catch(err => {
        console.log(err)
      })
    let newestCarRes = await $axios.post('/28-web/carInfo/newest/recommend', {
      currentPage: 1,
      pageSize: 20
    }) //最新车源推荐列表
    // console.log(popularitys.data.data, 'ffffffffffffffffffffff')
    return {
      AF03801: AF03801.data.status === 200 ? AF03801.data.data : [],
      AF03802: AF03802.data.status === 200 ? AF03802.data.data : [],
      popularity: popularitys.data.status === 200 ? popularitys.data.data : [],
      newestCar: newestCarRes.data.status === 200 ? newestCarRes.data.data : [],
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
      recommendList: recommendList,
      hyList: hyList.list,
      pages: hyList.pages,
      goodsVolumeLower: goodsVolumeLower,
      goodsVolumeUpper: goodsVolumeUpper,
      goodsWeightLower: goodsWeightLower,
      goodsWeightUpper: goodsWeightUpper,
      orderClass: orderClass,
      AF03801Id: AF03801Id,
      AF03802Id: AF03802Id,
      endArea: endArea,
      endCity: endCity,
      endProvince: endProvince,
      startArea: startArea,
      startCity: startCity,
      startProvince: startProvince
    }
  },
  mounted() {
    console.log('hyList:', this.hyList)
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
      this.startCity +
        this.startArea +
        ' 到 ' +
        this.endCity +
        this.endArea +
        ' 货源信息'
    )
    if (
      (!this.startCity && !this.startArea) ||
      (!this.endCity && !this.endArea)
    ) {
      $('#list_nav_a').html(
        this.startCity +
          this.startArea +
          '  ' +
          this.endCity +
          this.endArea +
          '货源信息'
      )
    }
    $('#HuoyuanFrom input').citypicker({
      province: this.startProvince,
      city: this.startCity,
      district: this.startArea
    })
    $('#HuoyuanTo input').citypicker({
      province: this.endProvince,
      city: this.endCity,
      district: this.endArea
    })
    this.pagination()
  },
  methods: {
    searchDo() {
      let list1 = [],
        list2 = []
      $('#HuoyuanFrom .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      this.startProvince = list1[0] ? list1[0] : ''
      this.startCity = list1[1] ? list1[1] : ''
      this.startArea = list1[2] ? list1[2] : ''

      $('#HuoyuanTo .select-item').each(function(i, e) {
        list2.push($(this).text())
      })
      this.endProvince = list2[0] ? list2[0] : ''
      this.endCity = list2[1] ? list2[1] : ''
      this.endArea = list2[2] ? list2[2] : ''
    },
    search() {
      this.searchDo()
      window.location.href = `/huoyuan?goodsVolumeLower=${
        this.goodsVolumeLower
      }&AF03801Id=${this.AF03801Id}&goodsVolumeUpper=${
        this.goodsVolumeUpper
      }&AF03802Id=${this.AF03802Id}&goodsWeightLower=${
        this.goodsWeightLower
      }&goodsWeightUpper=${this.goodsWeightUpper}&orderClass=${
        this.orderClass
      }&endArea=${this.endArea}&endCity=${this.endCity}&endProvince=${
        this.endProvince
      }&startArea=${this.startArea}&startCity=${this.startCity}&startProvince=${
        this.startProvince
      }`
    },
    orderClassClick(item) {
      this.orderClass = item.id
      this.search()
    },
    AF03801Click(item) {
      this.AF03801Id = item.id
      if (item.name.indexOf('<') !== -1) {
        this.goodsWeightLower = 0
        this.goodsWeightUpper = item.name.substring(1, 20)
      } else if (item.name.indexOf('>') !== -1) {
        this.goodsWeightLower = item.name.substring(1, 20)
        this.goodsWeightUpper = 100000
      } else if (item.name === '不限') {
        this.goodsWeightLower = ''
        this.goodsWeightUpper = ''
      } else {
        this.goodsWeightLower = item.name.split('-', 2)[0]
        this.goodsWeightUpper = item.name.split('-', 2)[1]
      }
      this.search()
    },
    AF03802Click(item) {
      this.AF03802Id = item.id
      if (item.name.indexOf('<') !== -1) {
        this.goodsVolumeLower = 0
        this.goodsVolumeUpper = item.name.substring(1, 20)
      } else if (item.name.indexOf('>') !== -1) {
        this.goodsVolumeLower = item.name.substring(1, 20)
        this.goodsVolumeUpper = 100000
      } else if (item.name === '不限') {
        this.goodsVolumeLower = ''
        this.goodsVolumeUpper = ''
      } else {
        this.goodsVolumeLower = item.name.split('-', 2)[0]
        this.goodsVolumeUpper = item.name.split('-', 2)[1]
      }
      this.search()
    },
    pagination() {
      $('#pagination1').pagination({
        currentPage: this.currentPage,
        totalPage: this.pages,
        callback: async current => {
          // $('#current1').text(current)
          let hyList = await getHyList(this.$axios, current, {
            startProvince: this.startProvince,
            startCity: this.startCity,
            startArea: this.startArea,
            endProvince: this.endProvince,
            endCity: this.endCity,
            endArea: this.endArea,
            queryType: 2,
            orderClass: this.orderClass,
            AF03801Id: this.AF03801Id,
            AF03802Id: this.AF03802Id,
            goodsVolumeLower: this.goodsVolumeLower,
            goodsVolumeUpper: this.goodsVolumeUpper,
            goodsWeightLower: this.goodsWeightLower,
            goodsWeightUpper: this.goodsWeightUpper
          })
          this.hyList = hyList.list
          this.pages = hyList.pages
          this.current = hyList.current
          // window.location.href = '#top'
        }
      })
    },
    reload() {
      window.location.href = '/huoyuan'
    }
  }
}
</script>
<style scoped>
/*物流专线 S */
body {
  background-color: #f9f9f9;
}
.list_box {
  width: 1400px;
  height: auto !important;
  margin: 0 auto;
  overflow: hidden;
}
.zx_sx {
  overflow: hidden;
  line-height: 50px;
  height: 50px;
  color: #585858;
  font-size: 18px;
  font-weight: bold;
  background-color: #fff;
}
.list_hy .zx_sx {
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
  color: #999999;
}
.zx_sx .biaozhi {
  width: 3px;
  height: 18px;
  background-color: #3f94ee;
  border-radius: 1px;
  margin: 16px 12px 0px 10px;
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
  /* margin-left: 20px; */
  margin-bottom: 20px;
  background-color: white;
  margin-left: 20px;
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
.list_left {
  width: 1036px;
  float: left;
  margin-bottom: 40px;
}
.w1130 {
  width: 1130px;
  float: left;
  overflow: hidden;
}
.tywlist {
  width: 1130px;
}
.tyxboxWrap {
  float: left;
  width: 100%;
  position: relative;
}
.list_right {
  min-height: 246px;
  height: auto !important;
  width: 347px;
  margin: 0px 0px 0 16px;
  float: left;
}
.list_hy_page2 {
  width: 1400px;
}
.w260 {
  width: 260px;
}
.tylist {
  width: 240px;
}
.select_con {
  width: 1128px;
  border-color: #eee;
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
  color: #333;
  font-size: 14px;
  padding-left: 9px;
}
.list_input::-webkit-input-placeholder {
  color: #999;
}
.list_button {
  width: 72px;
  height: 28px;
  border-radius: 2px;
  border: solid 1px #3f94ee;
  background-color: #fff;
  color: #3f94ee;
  font-size: 15px;
  /*
      background: no-repeat url(../images/01search.png) 45px 6px;
      */
  text-align: left;
  /*padding-left: 8px;*/
  margin-left: 8px;
  cursor: pointer;
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
.select_con dl dd a {
  min-width: 65px;
  text-align: center;
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
  width: 1130px;
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
.img_icon {
  float: right;
  height: 33px;
  line-height: 33px;
  width: 76px;
}
.img_icon img {
  margin-top: 10px;
}
.list_box .wlzx_list {
  width: 1036px;
  /* height: 180px; */
  float: left;
  border: solid 1px #dfdfdf;
  border-left: 0;
  border-right: 0;
  margin-top: -1px;
  background-color: #fff;
  transition: all 0.4s;
}
.wlzx_list:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}

.wlzx_list li {
  float: left;
  overflow: hidden;
}
.wlzx_list img {
  transition: 0.7s;
  vertical-align: middle;
}
.wlzx_list img:hover {
  transform: scale(1.05);
}
.wlzx_list_1 {
  width: 180px;
  margin-left: 30px;
}
.wlzx_list_2 {
  width: 400px;
  margin-left: 30px;
}
.wlzx_list_3 {
  width: 150px;
  margin-left: 25px;
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
  margin-left: 50px;
}
.wlzx_list_2 p {
  height: 30px;
  line-height: 30px;
}
.wlzx_list_2 .p1 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
.wlzx_list_2 .p1 i,
.wlzx_list_2 .p2 i {
  color: #333;
  font-size: 14px;
}
.wlzx_list_2 .p2 font {
  color: #3f94ee;
  font-size: 13px;
  padding-left: 5px;
}
.wlzx_list_2 .p3 font,
.wlzx_list_2 .p4 font {
  color: #333;
  font-size: 14px;
}
.wlzx_list_2 .p3 i,
.wlzx_list_2 .p4 i {
  color: #333;
  font-size: 14px;
  padding-left: 5px;
}
.wlzx_list_3 p {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
.wlzx_list_3 .p1 {
  margin-top: 20px;
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
  height: 30px;
  line-height: 30px;
  font-size: 13px;
}
.wlzx_list_4 .p3 {
  line-height: 20px;
  height: 20px;
}
.wlzx_list_4 img {
  /* margin-top: 5px; */
}
.wlzx_list_5 p {
  height: 30px;
  line-height: 30px;
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
.wlzx_list_6 .p1 {
  margin-top: 20px;
}
.wlzx_list_6 p {
  margin-bottom: 14px;
}
.wlzx_list_6 .p1 input {
  background-color: #3f94ee;
  color: #fff;
  border: 0px;
  height: 28px;
}
.wlzx_list_6 .p1 input:hover {
  background-color: #2577ff;
}
/* img {
  vertical-align: middle;
  margin-top: 0 !important;
} */
.tj_list {
  background-color: #fff;
  /* margin-top: -1px; */
  border-bottom: 1px solid #dedede;
  width: 348px;
  font-size: 14px;
  transition: all 0.4s;
  float: left;
}
.tj_list:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}
.tj_list .p {
  line-height: 28px;
  padding-left: 27px;
  padding-right: 0px;
}

.tj_list .p1 {
  height: 50px;
  line-height: 50px;
  /* margin-left: 20px; */
}
.tj_list .p1 span {
  padding: 0 0 0 5px;
}
.tj_list .p2 {
  padding-left: 30px;
}
.tj_list .p2 i {
  color: #3f94ee;
  font-size: 16px;
  padding: 0 5px 0 5px;
}
.tj_list .p2 span {
  font-size: 16px;
  color: #3f94ee;
}
.tj_list .p3 {
  margin-top: 20px;
  margin-left: 21px;
  width: 272px;
  height: 80px;
  background-color: #f8f8f8;
}
.tj_list ul {
  padding-top: 10px;
}
.tj_list .p3 li {
  float: left;
  width: 130px;
  height: 35px;
}
.tj_list .p3 .tj_left {
  text-align: left;
}
.tj_list .p3 .tj_right {
  text-align: left;
  padding-left: 10px;
  width: 120px;
}
.tj_list .p3 i,
.tj_list .p4 i {
  font-size: 13px;
  color: #999;
}
.tj_list .p3 em {
  font-size: 13px;
  color: #333;
}
.tj_list .p3 font,
.tj_list .p4 font {
  font-size: 13px;
  color: #eb434d;
}
.tj_list .p3 span,
.tj_list .p4 span {
  font-size: 13px;
  color: #333;
}
.tj_list .p3 .tj_left span {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 86px;
  vertical-align: middle;
}
.tj_list .p3 font {
  font-size: 13px;
  color: #eb434d;
}

.tj_list .p5 img {
  margin-top: 5px;
  margin-bottom: 10px;
  margin-right: 8px;
}
.tj_list img {
  transition: 0.7s;
}
.tj_list img:hover {
  transform: scale(1.05);
}
.tj_list .p6 {
  float: left;
  margin: 24px 0px;
  margin-right: 15px;
  text-align: center;
}
.tj_list .p6 span {
  color: #333;
  font-size: 13px;
}
#nr0412 {
  font-size: 14px;
  color: #3f94ee;
  font-family: MicrosoftYaHei;
  font-weight: normal;
  font-stretch: normal;
  font-weight: bold;
}
/*物流专线 E */

/*车源信息 S */
.cy_list_1 {
  width: 351px;
  margin-left: 14px;
}
.cy_list_2 {
  width: 182px;
  margin-left: 100px;
}
.cy_list_3 {
  width: 75px;
  margin-left: 80px;
}
.cy_list_4 {
  width: 65px;
  margin-left: 60px;
}

.cy_list_5 {
  width: 102px;
  margin-left: 60px;
}
.cy_list_1 .p1 {
  margin-bottom: 3px;
}
.cy_list_1 p {
  height: 26px;
  line-height: 26px;
}
.cy_list_1 p a {
  /* color: #eb434d; */
  font-size: 16px;
}
.cy_list_1 p i {
  font-size: 13px;
  color: #666;
}
.cy_list_1 p span {
  font-size: 13px;
  color: #666;
  padding: 0 2px 0 2px;
}
.cy_list_1 p font {
  font-size: 13px;
  color: #333;
}

.cy_list_2 p {
  height: 27px;
  line-height: 27px;
}

.cy_list_2 p span {
  color: #666;
  font-size: 13px;
}
.cy_list_2 p i {
  font-size: 13px;
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
.box_right {
  float: right;
  width: 364px;
}
.wlzx_list_01 {
  width: 180px;
  margin-left: 30px;
  position: relative;
}
.wlzx_list_1 {
  width: 237px;
  margin-left: 30px;
}
.wlzx_list_2 {
  width: 200px;
  margin-left: 10px;
}
.wlzx_list_3 {
  width: 85px;
  margin-left: 20px;
}
.wlzx_list_4 {
  width: 240px;
  margin-left: 30px;
}
.wlzx_list_5 {
  width: 102px;
  margin-left: 60px;
}
.wlzx_list_1 .p1 {
  line-height: 20px;
  height: 20px;
}
.wlzx_list_1 p {
  height: 34px;
  line-height: 34px;
}
.wlzx_list_1 p a {
  font-size: 16px;
}
.wlzx_list_1 p i {
  font-size: 13px;
  color: #666;
}
.wlzx_list_1 p span {
  color: #eb434d;
  font-size: 13px;
}
.wlzx_list_1 p font {
  font-size: 13px;
  color: #333;
}

.wlzx_list_2 p {
  height: 34px;
  line-height: 34px;
}
.wlzx_list_2 .p3 {
  line-height: 20px;
  height: 20px;
}
.wlzx_list_2 p span {
  color: #666;
  font-size: 13px;
}
.wlzx_list_2 p i {
  font-size: 13px;
}
.wlzx_list_2 p font {
  color: #333;
}
.wlzx_list_3 p {
  height: 34px;
  line-height: 34px;
}
.wlzx_list_6 .p2 input {
  background-color: #eb434d;
  color: #fff;
  border: 0;
}
#wlzx_list_view:hover {
  background-color: #f1f1f1;
}
#wlzx_list_view {
  border: solid 1px #8dadd8;
  font-size: 13px;
  background-color: #fff;
  color: #3f94ee;
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

/*V1.1版本S*/
#HuoyuanFrom {
  width: 222px;
  background: url(/images/list_wlzx/start_addr.png) no-repeat 200px 8px #fff;
  background-size: 16px 17px;
  padding-right: 20px;
}
#HuoyuanTo {
  width: 222px;
  background: url(/images/list_wlzx/end_addr.png) no-repeat 200px 8px #fff;
  background-size: 16px 17px;
  padding-right: 20px;
}
#wlgs {
  width: 220px;
  margin-left: 10px;
}
#search_huoyuan {
  width: 42px;
  height: 28px;
  border-radius: 2px;
  color: #f9f9f9;
  font-size: 13px;
  background: no-repeat url(/images/white_search.png) 10px 6px #3f94ee;
  text-align: left;
  padding-left: 30px;
  padding-right: 5px;
  margin-left: 8px;
  cursor: pointer;
}
.w1036 {
  width: 1036px;
  float: left;
  /*OVERFLOW: hidden;*/
  border: 1px solid #eee;
  /* border-bottom: 0; */
}
.select_con {
  width: 1036px;
  border-left: 0;
  border-right: 0;
}

#wlzx_list_0 {
  width: 100%;
  float: left;
}
.view_num {
  float: right;
  height: 26px;
  width: 120px;
  font-size: 12px;
  line-height: 26px;
  margin-top: 16px;
}
.sc_num {
  float: right;
  height: 26px;
  width: 120px;
  font-size: 12px;
  line-height: 26px;
  margin-top: 16px;
}
#wlzx_list_0 img {
  margin-top: 3px;
  float: left;
  margin-right: 7px;
}
#nr_a41_1 {
  font-weight: bold;
}
#nr_a41_2 {
  font-weight: bold;
}
.view_num span,
.sc_num span {
  float: left;
  /* margin-top: 13px; */
}
.wlzx_list_2 .p5 {
  height: auto;
}
.wlzx_list_2 .p5 img {
  padding-right: 5px;
}
#qq {
  position: relative;
  top: 5px;
}
#tj_shiming,
#tj_xinyong,
#tj_danbao {
  position: relative;
  left: 5px;
  top: 10px;
}
.list_hy {
  margin-top: 20px;
  background: #fff;
}

.distance {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 180px;
  height: 24px;

  background: url(/images/list_wlzx/distance.png) #010101 no-repeat 155px 5px;
  opacity: 0.5;
}
.distance span {
  line-height: 24px;
  padding-left: 9px;
  color: #fff;
  font-size: 12px;
}
#qq {
  background-color: #fff;
  border-radius: 3px;
  border: solid 1px #dedede;
  font-size: 13px;
  color: #333;
  background: no-repeat url(/images/article_wlzx/15qq.gif) 12px 3px;
  padding-left: 15px;
  width: 87px;
}

.lines-sprite-icons {
  background: url(/images/list_wlzx/ss56-lines-sprite.png) no-repeat;
}
.list-title-a {
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #333333;
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
  float: right;
  height: 26px;
  width: 140px;
  font-size: 12px;
  line-height: 26px;
}
.sc_num1 {
  float: right;
  height: 26px;
  width: 140px;
  font-size: 12px;
  line-height: 26px;
}
.view_num1 img,
.sc_num1 img {
  float: left;
  margin-left: 32px;
  margin-right: 10px;
  margin-top: 3px;
}
.view_num1 span,
.sc_num1 span {
  float: left;
}
.position {
  float: left;
  height: 26px;
  min-width: 250px;
  margin-left: 30px;
  margin-top: 18px;
}
.distance_total {
  float: left;
  height: 26px;
  margin-left: 20px;
  margin-top: 20px;
  min-width: 100px;
  color: #f00;
  font-size: 14px;
}
.wlzx_list_1 img,
.wlzx_list_2 img,
.wlzx_list_4 img {
  padding-right: 5px;
}
.che_box {
  float: left;
  width: 100%;
}

.list_help {
  width: 342px;
  margin-left: 20px;
  box-sizing: border-box;
  float: right;
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
  /* margin-top: 20px; */
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
.ltl-text {
  width: 100%;
  display: block;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #999999;
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
  font-weight: bold;
  font-size: 20px;
  color: #333333;
}
.line-city-box {
  max-width: 1036px;
  float: left;
  width: 1043px;
}
.line-title {
  color: #3f94ee;
  border-bottom: 2px solid #3f94ee;
}
.hot-cities-li {
  display: inline-block;
  padding: 10px;
}
.hot-cities-a {
  font-size: 14px;
  display: block;
  width: 133px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  /* color: #333; */
}
.arc_main4-content {
  background-color: #ffffff;
  float: left;
  width: 100%;
  margin-bottom: 20px;
  margin-left: 16px;
}
.zx_sx {
  line-height: 50px;
  height: 49px;
  color: #2577e3;
  font-size: 18px;
  background-color: #fff;
  border-bottom: 1px solid #2577e3;
  font-weight: bold;
  box-sizing: border-box;
}
.rc_list {
  padding: 10px;
  /* box-sizing: border-box; */
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
  text-align: center;
  color: #ffffff;
  margin: 0 15px;
  background-color: #8eb9f5;
}
.oneColor {
  background-color: #f65050 !important ;
}
.twoColor {
  background-color: #ff8547 !important ;
}
.trihColor {
  background-color: #ffac38 !important ;
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
.rc_list .img img {
  width: 50px;
  display: block;
  border-radius: 50%;
}
.rc_list .right span:nth-child(1) {
  display: inline-block;
  width: 120px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.rc_list .right span:nth-child(2) {
  display: inline-block;
  width: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.ps-list {
  padding: 10px;
}

.ps-list li {
  list-style: square;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 28px;
  letter-spacing: 1.1px;
  color: #333333;
  list-style: none;
  margin-bottom: 10px;
}
</style>
