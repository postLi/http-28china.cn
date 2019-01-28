<template>
  <div class="arc_main">
    <!--<div class="arc_nav">-->
    <!--<a href="/">物流首页</a>&gt;<a -->
    <!--id="arc_nav_a1" -->
    <!--href="">车源信息</a>&gt;<a -->
    <!--id="arc_nav_a2" -->
    <!--href="">车源信息</a>-->
    <!--</div>-->
    <div class="arc_top1">
      <div class="arc_top1_1"><span>{{ cy1.startCity + cy1.startArea + '&nbsp;&rarr;&nbsp;' + cy1.endCity + cy1.endArea }}</span></div>

      <div class="arc_top1_3"><input 
        class="arc_input3" 
        value="搜全网"> </div>
      <div class="arc_top1_2">
        <select id="search_type"><option name="zx">找专线</option><option name="che">找车源</option><option name="huo">找货源</option></select>
        <input 
          class="arc_input1" 
          wtmap="" 
          placeholder="出发地">
        <span>&rarr;</span>
        <input 
          class="arc_input2" 
          wtmap="" 
          placeholder="到达地">

      </div>



    </div>
    <div class="arc_top2">
      <div class="arc_top2_1"><a href="/"><span>首页</span></a></div>
      <div class="arc_top2_2">
        <a
          v-for="(item,index) in zxList"
          v-if="index < 14"
          :key="index"><span>{{ index === 0 ? '直达' + item.name.substring(0, 2) : item.name.substring(0, 2) }}</span>
        </a>
      </div>
      <div
        v-if="zxList.length >14"
        class="arc_top2_3"
        style="display: block"
        onmouseover="$('.city_box').css('display', 'block')"><a href="javascript:void(0)"><span>更多+</span></a></div>

      <!--更多城市-->
      <div 
        id="city_box" 
        class="city_box" 
        onmouseover="$('.city_box').css('display', 'block');"
        onmouseout="$('.city_box').css('display', 'none');">
        <a
          v-for="(item,index) in zxList"
          v-if="index >= 14"
          :key="index"><span>{{ item.name.substring(0, 2) }}</span>
        </a>
      </div>

    </div>
    <div class="arc_main1">
      <div class="arc_left">
        <div class="arc_left_1">
          <img
            v-if="cy1.carFile"
            :src="cy1.carFile.split(',')[showImg]">
          <img
            v-else
            :src="'../../images/pic/bg' + cy1.num + '.png'" >
        </div>
        <div class="arc_left_2">
          <a 
            href="javascript:void(0)" 
            @click="clickImg(0)"><img
              v-if="cy1.carFile"
              :src="cy1.carFile.split(',')[0]" >
            <img
              v-else
              :src="'../../images/pic/bg' + cy1.num + '.png'" >
          </a>
          <a 
            href="javascript:void(0)" 
            @click="clickImg(1)"><img
              v-if="cy1.carFile && cy1.carFile.split(',')[1]"
              :src="cy1.carFile.split(',')[1]" >
          </a>
          <a 
            href="javascript:void(0)" 
            @click="clickImg(2)"><img
              v-if="cy1.carFile && cy1.carFile.split(',')[2]"
              :src="cy1.carFile.split(',')[2]" >
          </a>
        </div>
        <div class="arc_left_3"><a href="javascript:void(0)"><img src="../../static/images/article_wlzx/17shoucang.png">&nbsp;<span class="collection_cz">收藏车源</span><i>&nbsp;(&nbsp;<em class="my_cz_num"/>人气&nbsp;)</i></a></div>
      </div>
      <div class="arc_middle">
        <div class="collection_zx">
          <div 
            class="bt_close" 
            onclick="$('.collection_zx').hide()" ><img src="../../static/images/article_wlzx/xxx.png"></div>
          <div class="collection_zx_nr">
            <img src="../../static/images/article_wlzx/yes.png">
            <span>成功加入</span><a 
              id="collection_url" 
              target="_blank" 
              href="#">收藏夹</a>
          </div>
        </div>
        <div class="arc_middle1"><span>{{ cy1.strartAddress + '&nbsp;&rarr;&nbsp;' + cy1.endAddress }}</span></div>
        <div class="arc_middle2">
          <div class="arc_middle2_1">
            <p class="p1"><i>运价：</i><font
              id="nr062"
              class="font1"> {{ cy1.expectPrice ? '&yen;&nbsp;' + cy1.expectPrice : '面议' }}</font></p>
            <p class="p2"><i>车源类型：</i><span>{{ cy1.carSourceTypeName }}</span></p>
          </div>
          <div class="arc_middle2_2">
            <div class="num1"><span>{{ cy1.browseNumber }}</span></div><div class="num2"><a href="javascript:void(0)"><span class="my_cz_num"/></a></div>
            <div class="num3"><span>浏览量</span></div><div class="num4"><a href="javascript:void(0)"><span>收藏量</span></a></div>
          </div>

        </div>
        <div class="arc_middle3">
          <div class="arc_m3"><i>车辆类型：</i><span>{{ cy1.carTypeName }}</span><span>{{ cy1.isLongCar === 1 ? '(即时车源)' : '(长期车源)' }}</span></div>
          <div class="arc_m3"><i>车辆载重：</i><span>{{ cy1.carLoad }}吨</span></div>
          <div class="arc_m3_2"><i>车长：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i><span>{{ cy1.carLength }}米</span></div>
          <div class="arc_m3_2"><i>途径点：&nbsp;&nbsp;&nbsp;</i><span>{{ cy1.viaAddress ? cy1.viaAddress : '暂无' }}</span></div>
          <div class="arc_m3_2"><i>发车时间：&nbsp;</i><span>{{ cy1.startTime1 }}</span></div>
        </div>
        <div class="arc_middle4">
          <div class="arc_m3"><i>联系人：</i><span>{{ cy1.belongDriver }}</span></div>
          <div class="arc_m3"><i>电话：</i><span><font
            style="color: #eb434d;">{{ cy1.phone }}</font></span></div>
          <div class="arc_m3_2"><i>说明：</i><span>{{ cy1.carTagName }}</span><span v-if="cy1.remark">{{ '|'+cy1.remark.substring(0, 30) }}</span></div>
        </div>

        <div class="arc_middle5">
          <div class="arc_m5_1"><span>联系我时，请说明是从28快运上看到此信息，谢谢！</span></div>

        </div>

      </div>
      <div class="arc_right">
        <p class="arc_right01"><img src="../../static/images/article_wlzx/04gongsi.png"><span>车辆档案</span></p>
        <p class="arc_right04">
          <span class="arc_right04_1"><i>车牌号：</i><font v-if="cy1.carNum">{{ cy1.carNum.substring(0, 2) + '***' + cy1.carNum.substring(6, 10) }}</font></span>
          <span><i>常驻地：</i><font v-if="cy1.usualPlace">{{ cy1.usualPlace.substring(0, 10) }}</font></span>
          <span><i>车长：</i><font>{{ cy1.carLength }}米</font></span>
          <span><i>车辆类型：</i><font>{{ cy1.carTypeName }}</font></span>
          <span><i>车辆载重：</i><font>{{ cy1.carLoad }}吨</font></span>
          <span><i>联系人：</i><font>{{ cy1.belongDriver }}</font></span>
          <span><i>手机号：</i><font>{{ cy1.phone }}</font></span>
          <span><a
            :href="'http://wpa.qq.com/msgrd?v=3&uin=' + cy1.qq + '&site=qq&menu=yes'"
            target="_blank"><i>Q&nbsp;Q：</i><input
              v-if="cy1.qq"
              value="QQ交谈" ></a></span>
        </p>
        <p style="clear: both;"/>
        <p class="arc_right05" >

          <input 
            class="collection_cz" 
            style="cursor: pointer;" 
            readonly 
            value="收藏">
        </p>
        <p class="arc_right06" >
          <span>相关认证</span>
        </p>
        <p class="arc_right07">
          <!--<img id="right_xinyong" src="/templets/default/images/article_wlzx/11xinyong.png"/>-->
          <img
            v-if="cy1.driverStatus === 'AF0010403'"
            src="../../static/images/article_wlzx/10shiming.png">
          <!--<img src="/templets/default/images/article_wlzx/25baozhengjin.png"/>-->
          <span
            v-if="cy1.driverStatus !== 'AF0010403'">暂无认证信息</span>
        </p>

      </div>

    </div>
    <div class="arc_main2">
      <div class="arc_left2">
        <div class="arc_left2_bt" >
          <span>车主简介</span>
        </div>

        <div class="arc_left2_nr">
          {{ cy1.driverDesc ? cy1.driverDesc.substring(0, 400) : '暂未填写简介信息！' }}
        </div>
      </div>
      <div class="arc_right2">
        <div class="arc_right2_bt">
          <div class="arc_bt1"><span>车主其他求货信息</span></div>
          <div class="arc_bt2"><i><a href="javascript:void(0)"><em style="font-size: 14px;color: #ccc;">&lt;&nbsp;</em></a><em style="color: #eb434d;">1</em>/100<a href="javascript:void(0)"><em style="font-size: 16px;color: #999;">&nbsp;&gt;</em></a></i></div>

        </div>
        <div 
          id="js012" 
          class="arc_right2_nr ">
          <div 
            v-if="otherCarInfoList.length === 0" 
            class="arc_none">暂无其他求货信息</div>
          <div 
            v-for="(item,index) in otherCarInfoList" 
            :key="index" 
            class="arc_list_item">
            <div class="arc_list_item_bt" ><a
              :href="'/cheyuan/detail?id=' + item.id + '&driverId=' + item.driverId"
              target="_blank">{{ item.strartAddress + '&nbsp;&rarr;&nbsp;' + item.endAddress }}</a> </div>
            <div class="arc_list_item_nr">
              <div class="arc_list_item_nr1">
                <i>车辆：</i><span v-if="item.carNum"> {{ item.carNum.substring(0, 2) + '***' + item.carNum.substring(6, 10) }} <em/></span>
                <span v-if="item.carTypeName">{{ item.carTypeName }} <em/></span><span>长{{ item.carLength }}米   <em/></span>
              <span> <span>载重{{ item.carLoad }}吨  <em/></span><span> {{ item.carSourceTypeName }}</span></span></div>
              <div class="arc_list_item_nr2">
                <i>发车时间：</i><span>{{ item.startTime }}</span>
              </div>
              <div class="arc_list_item_nr3">
                <a :href="'/cheyuan/detail?id=' + item.id + '&driverId=' + item.driverId"><input value="查看"></a>
              </div>

            </div>
          </div>

        </div>
        <!--分页-->
        <div 
          class="box" 
          style="float: right;margin-right: 200px;">
          <div 
            id="pagination1" 
            class="page fl"/>
          <div class="info fl">
            <!--<p>当前页数：<span id="current1">1</span></p>-->
          </div>
        </div>


      </div>
    </div>

    <div class="arc_bottom">
      <div class="zx_sx"><span class="biaozhi"/><span>此路线其他车源</span><a href="/plus/list.php?tid=3"><span class="arc_bottom_more">更多+</span></a></div>
      <div v-if="otherCarSourceList.length === 0">
        暂没有其它车源
      </div>
      <div
        v-for="(item,index) in otherCarSourceList" 
        :key="index"
        class="tj_list">
        <p class="p01"><span>{{ item.startCity }}</span><i>&rarr;</i><span>{{ item.endCity }}</span></p>
        <p class="p02">
          <span class="p_span1"><i>车辆载重：</i><font>{{ item.carLoad }}吨</font></span>  <span class="p_span2"><i>车长：</i><font>{{ item.carLength }}米</font></span>
        </p>
        <p class="p02">
          <span class="p_span1"><i>车源类型：</i><font>{{ item.carSourceTypeName }}</font></span>  <span class="p_span2"><i>车辆类型：</i><font>{{ item.carTypeName }}</font></span>
        </p>
        <p class="p03">
          <i>常驻地：</i><span>{{ item.usualPlace }}</span>

        </p>
        <p class="p04">
          <i>发车时间：</i><span>{{ item.createTime1 }}</span>
        </p>
        <p class="p05">
          <img 
            v-if="item.driverStatus === 'AF0010403'"
            src="../../static/images/list_wlzx/10shiming.png" >
        </p>
        <p class="p06">
          <a :href="'/cheyuan/detail?id=' + item.id + '&driverId=' + item.driverId"><span>查看&nbsp;&gt;</span></a>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import { getCode, getCity, parseTime } from '~/components/commonJs.js'
async function getOtherCarInfoList($axios, currentPage, vo) {
  let res = await $axios.get(
    `/28-web/carInfo/findOtherCarInfoList/${
      vo.id
    }?pageNum=${currentPage}&pageSize=5&driverId=${vo.driverId}`
  )
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
  name: 'Detail',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/article_cheyuan.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' }
    ],
    script: [
      { src: '../js/jquery.pagination.min.js' },
      { src: '../js/WTMap.min.js' }
    ]
  },
  layout: 'subLayout',
  data() {
    return {
      cy1: {},
      zxList: [],
      otherCarSourceList: [],
      otherCarInfoList: [],
      showImg: 0,
      pages: 0,
      currentPage: 1
    }
  },
  async asyncData({ $axios, app, query }) {
    let zxList, otherCarSourceList
    const cy1 = await $axios.post('/28-web/carInfo/' + query.id)
    if (cy1.data.status === 200) {
      cy1.data.data.num = Math.ceil(Math.random() * 30)
      cy1.data.data.startTime1 = parseTime(
        cy1.data.data.startTime,
        '{y}-{m}-{d} {h}:{i}:{s}'
      )
      let code = await getCode($axios, cy1.data.data.endProvince)
      zxList = await getCity($axios, code, cy1.data.data.startCity)
      otherCarSourceList = await $axios.get(
        '/28-web/carInfo/getOtherCarSourceList/' + query.id
      )
      if (otherCarSourceList.data.status === 200) {
        otherCarSourceList.data.data.forEach(item => {
          item.createTime1 = parseTime(
            item.createTime,
            '{y}-{m}-{d} {h}:{i}:{s}'
          )
        })
      }
    }
    let otherCarInfoList = await getOtherCarInfoList($axios, 1, {
      driverId: query.driverId,
      id: query.id
    })
    return {
      cy1: cy1.data.status === 200 ? cy1.data.data : {},
      zxList: zxList && zxList.data.status === 200 ? zxList.data.data : [],
      otherCarSourceList:
        otherCarSourceList && otherCarSourceList.data.status === 200
          ? otherCarSourceList.data.data
          : [],
      otherCarInfoList: otherCarInfoList.list,
      pages: otherCarInfoList.pages
    }
  },
  mounted() {
    seajs.use(['../js/city.js'], function() {
      seajs.use(['../js/arc_cheyuan.js'], function() {
        seajs.use(['../js/collection.js'], function() {
          seajs.use(['../js/gaodemap2.js'], function() {})
        })
      })
    })
    $('#pagination1').pagination({
      currentPage: this.currentPage,
      totalPage: this.pages,
      callback: async current => {
        $('#current1').text(current)
        console.log(current)
        let obj = await getOtherCarInfoList(this.$axios, current, {
          driverId: this.$route.query.driverId,
          id: this.$route.query.id
        })
        this.otherCarInfoList = obj.list
        this.currentPage = obj.currentPage
        this.pages = obj.pages
        window.location.href = '#top'
      }
    })
  },
  methods: {
    clickImg(int) {
      this.showImg = int
    }
  }
}
</script>

<style scoped>
</style>
