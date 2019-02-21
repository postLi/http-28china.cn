<template>
  <div class="arc_main">
    <!--<div class="arc_nav">-->
    <!--<a href="/">物流首页</a>&gt;<a -->
    <!--id="arc_nav_a1" -->
    <!--href="">货源信息</a>&gt;<a -->
    <!--id="arc_nav_a2" -->
    <!--href="">货源信息</a>-->
    <!--</div>-->
    <div class="arc_top1">
      <div class="arc_top1_1"><span>{{ hyDetail.startProvinceCityArea + '	&rarr;' + hyDetail.endProvinceCityArea }}</span></div>

      <div class="arc_top1_3"><a 
        id="search_huo" 
        target="_blank"><input 
          class="arc_input3" 
          value="搜全网"> </a></div>
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
        onmouseover="$('.city_box').css('display','block');"><a href="javascript:void(0)"><span>更多+</span></a></div>
      <!--更多城市-->
      <div 
        id="city_box" 
        class="city_box" 
        onmouseover="$('.city_box').css('display','block');"
        onmouseout="$('.city_box').css('display','none');">
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
          <span id="nr072"/><span style="float: left;font-size: 12px;padding-top:6px;"> 用户159***5898发布<span style="color: #2577e3;font-size: 12px;">广州</span>到<span style="color: #2577e3;font-size: 12px;">长沙</span>货源  3分钟前</span>

          <p class="arc_p1"><span>广东省，广州市{{ hyDetail.startProvinceCityArea + '	&rarr;' + hyDetail.endProvinceCityArea }}</span>
          
            <span class="arc_p2"><i>浏览量：<em>{{ hyDetail.browseNumber }}</em></i><i>收藏量：<em class="my_hz_num"/></i></span>
          </p>
          <div class="arc_middle1-2"><span><img
            class="img1"
            src="/images/list_wlzx/hy_item6.png"></span><span style="margin-right:50px;">发布日期：2019-01-18 13:25:20 </span><span><img
              class="img2"
              src="/images/list_wlzx/sc_num.png"></span><span>收藏量：<i class="my_cz_num"/></span></div>
        </div>
        <div class="arc_left_2">
          <div class="arc_left_2_1">
            <div class="arc_left_2_1_1"><span>货源信息</span></div>
            <div class="arc_left_2_1_2"><table>
              <tr><td class="arc_td1">名称：</td><td class="arc_td2"><font>{{ hyDetail.goodsName }}</font></td></tr>
              <tr><td class="arc_td1">数量：</td><td class="arc_td2">{{ hyDetail.goodsNum ? hyDetail.goodsNum + '件': '' }}</td></tr>
              <tr><td class="arc_td1">重量：</td><td
                class="arc_td2">{{ hyDetail.goodsWeight }}公斤</td></tr>
              <tr><td class="arc_td1">体积：</td><td class="arc_td2">{{ hyDetail.goodsVolume }}立方米</td></tr>
              <tr><td class="arc_td1">有效期：</td><td
                class="arc_td2">{{ hyDetail.orderClass === 0 ? '单次急发货源' : '长期稳定货源' }}</td></tr>
            </table>
            </div>
            <!-- <div class="arc_left_2_1_3">
              <a href="javascript:void(0)"><img src="../../static/images/article_wlzx/17shoucang.png">&nbsp;<span class="collection_hz">收藏货源</span><i>&nbsp;(&nbsp;<em class="my_hz_num">78</em>人气&nbsp;)</i></a>
             
            </div> -->
            
          </div>
          
          <div class="arc_left_2_2">
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
            <div class="arc_left_2_1_1"><span>线路信息</span></div>
            <div class="arc_left_2_1_2"><table>
              <tr><td class="arc_td1">出发地：</td><td class="arc_td2"><font>{{ hyDetail.startProvinceCityArea }}</font></td></tr>
              <tr><td class="arc_td1">到达地：</td><td class="arc_td2"><font>{{ hyDetail.endProvinceCityArea }}</font></td></tr>
              <tr><td class="arc_td1">联系人：</td><td class="arc_td2">{{ hyDetail.consignor }}</td></tr>
              <tr><td class="arc_td1">联系电话：</td><td class="arc_td2">{{ hyDetail.consignorPhone }}</td></tr>
              <tr><td class="arc_td1">发布时间：</td><td 
                v-if="hyDetail.createTime"
                class="arc_td2">{{ hyDetail.createTime.substring(0, 19) }}</td></tr>
            </table>
            </div>
            <!-- <div class="arc_left_2_1_3">
              <img src="../../static/images/article_wlzx/pj_zhuyi.png" ><span>联系我时，请说明是从28快运上看到此信息，谢谢！</span>
             
            </div> -->
           
          </div>
          <div class="arc_bottom">
            <div class="arc_left_3">
              <div>
                <img
                  src="/images/28fast_download.png"
                  width="72"
                  height="72">
              </div>
              <div>
                下载<span>【28快运APP】</span>，您可查看更多<span>广州</span>到<span>东莞</span>的货源，并可实时接 收28快运为您推荐的精品货源提醒!
              </div>

            </div>
            <div class="arc_middle5">
              <div class="arc_m5_1">
                <span>小贴士：对此货源有意向可点击“抢单”，货主即可看到您的联系信息，提高成交率！</span>
                <div style="margin-top: 15px">
                  <a 
                    href="" 
                    class="button1">立即下单</a>
                  <a 
                    href="javascript:;" 
                    class="button2" 
                  ><img 
                    src="/images/cy/03u41008 2.gif" 
                  >此线路上新货源提醒我</a>
                  <span style="margin-left: 47px">
                    <img src="/images/cy/14fresh.png">
                    <span
                      class="arc_middle5-right"
                      @click="findAnother()">换一个</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
      <div class="arc_right">
        <p class="arc_right01"><img src="../../static/images/article_wlzx/04gongsi.png"><span>{{ hyDetail.companyName }}</span></p>
        <p
          v-if="hyDetail.isEnable >= 0 && hyDetail.isEnable <= 150"
          class="arc_right02" ><i>信誉：</i>
          <img
            v-for="(item1,index1) in hyDetail.starS"
            :key="index1"
            class="xy_zuan"
            src="../../static/images/article_wlzx/gold.png"
            style="display: inline">
        </p>
        <p
          v-if="hyDetail.isEnable >= 151"
          class="arc_right02" ><i>信誉：</i>
          <img
            v-for="(item1,index1) in hyDetail.starB"
            :key="index1"
            class="xy_zuan"
            src="../../static/images/article_wlzx/yellowguan.png"
            style="display: inline">
        </p>
        <p class="arc_right03">
          <span>质量</span><span>时效</span><span>价格</span><br >
          <font>4.7</font><font>4.8</font><font>4.9</font>
        </p>
        <p class="arc_right04">
          <span class="arc_right04_1"><i>联系人：</i><font>{{ hyDetail.consignor }}</font></span>
          <span><i>手机：</i><font>{{ hyDetail.consignorPhone }}</font></span>
          <span><i>Q&nbsp;Q：</i><a
            v-if="hyDetail.qq"
            :href="'http://wpa.qq.com/msgrd?v=3&uin=' + hyDetail.qq + '&site=qq&menu=yes'" 
            target="_blank"><input value="QQ交谈"></a></span>
          <span><i>地址：</i><font v-if="hyDetail.consignorAddress">{{ hyDetail.consignorAddress.substring(0, 10) }}</font></span>
        </p>
        <p class="arc_right05">
          <a 
            href="#" 
            class="website">进入官网</a>
          <input 
            class="collection_hz" 
            style="cursor: pointer;" 
            readonly 
            value="收藏">
        </p>
        <p class="arc_right06">
          <span>相关认证</span>
        </p>
        <p class="arc_right07">
          <img
            v-if="hyDetail.isVip"
            src="../../static/images/article_wlzx/11xinyong.png">
          <img
            v-if="hyDetail.authStatus === 'AF0010403'"
            src="../../static/images/article_wlzx/10shiming.png">
          <!--<img src="../../static/images/article_wlzx/25baozhengjin.png"/>-->
          <span v-if="hyDetail.authStatus !== 'AF0010403' && (!hyDetail.isVip || hyDetail.isVip === 0)">暂无认证信息</span>
        </p>

      </div>

    </div>
    <!-- <div class="arc_main2">
      <div class="arc_left2">
        <div class="arc_left2_bt" >
          <span>货主介绍</span>
        </div>

        <div class="arc_left2_nr">{{ hyDetail.shipperDesc ? hyDetail.shipperDesc.substring(0, 400) :'暂未填写简介信息！' }}</div>
      </div>

      <div class="arc_right2">
        <div class="arc_right2_bt">
          <span 
            id="arc_bt2" 
            class="arc_span arc_active">货主其他求车信息</span>
        </div>

        <div class="arc_nr arc_right2_nr ">
          <div 
            v-for="(item,index) in otherInfoList" 
            :key="index" 
            class="arc_list_item">
            <a 
              :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"
              target="_blank"><div
                v-if="item.startProvinceCityArea && item.endProvinceCityArea" 
                class="arc_list_item_bt">{{ item.startProvinceCityArea + '	&rarr;' + item.endProvinceCityArea }}</div></a>
            <div class="arc_list_item_nr">
              <div class="arc_list_item_nr1">
                <i>货源信息：</i><span>{{ item.goodsName }}  </span><em/>
                <span ><font>{{ item.goodsNum }}</font>件 </span><em/>
                <span ><font>{{ item.goodsWeight }}</font>公斤  </span><em/>
                <span ><font>{{ item.goodsVolume }}</font>立方米  </span>
              </div>
              <div class="arc_list_item_nr2">
                <i>发布时间：</i><span v-if="item.createTime">{{ item.createTime.substring(0, 16) }}</span>

              </div>
              <div class="arc_list_item_nr3">
                <a
                  :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId"><input value="查看"></a>
              </div>

            </div>
          </div>


        </div>


        <div 
          class="box" 
          style="float: right;margin-right: 200px;">
          <div 
            id="pagination1" 
            class="page fl"/>
          <div class="info fl"/>
        </div>

      </div>
      <div class="clear"/>
    </div> -->
    <div class="arc_main3">
      <!-- <div class="left">
        <div class="zx_sx">
          <span class="biaozhi"/><span>价格参考</span><i style="margin-left: 12px;color: #333333">大数据智能模型精准定价，28智能平台指导定价</i>
        </div>
        <div id="echart"/>
      </div> -->
      <div class="right">
        <div class="zx_sx">
          <span class="biaozhi"/><span>车主综合力评估</span>
        </div>
        <div class="content">
          <div class="content-left">
            <div class="img">
              <img
                src="/images/28fast_download.png"
                width="82"
                height="82">
            </div>
            <div class="name">企业货主名</div>
            <div class="name">
              <img src="/images/article_wlzx/10shiming.png">
            </div>
          </div>
          <div class="content-right">
            <img src="/images/cy/02gold.png">
            <div class="content-right-row"><img
              class="img"
              src="/images/cy/13hot.png">活跃度：<i>30</i></div>
            <div class="content-right-row">最近三个月发布货源 <i>15</i> 次</div>
            <div class="content-right-row">共成交 <i>146</i> 笔订单，收到好评 <i>28</i> 次</div>
            <div class="content-right-row">大家对他的印象:</div>
            <div class="content-right-row">
              <span>付款及时（15）</span>
              <span>付款及时（15）</span>
              <span>付款及时（15）</span>
              <span>最想合作的伙伴（15）</span>
              <span>付款及时（15）</span>
              <span>付款及时（15）</span>
              <span>付款及时（15）</span>
              <span>付款及时（15）</span>
            </div>
            <div
              class="content-right-row"
              style="clear: both"
            >大家对他的印象:</div>
            <div class="content-right-row">
              <em>广州<img src="/images/yd_zx.png">武汉</em>
              <em>广州<img src="/images/yd_zx.png">武汉</em>
              <em>广州<img src="/images/yd_zx.png">武汉</em>
            </div>
            <div
              class="content-right-row"
              style="clear: both">
              <!-- <a
                href="javascript:;" 
                class="button1"
                @click="showPrice()">标准价</a> -->
              <a
                href="javascript:;"
                class="button2"><img src="/images/cy/03u41008 2.gif">帮我选择优质车源</a>
            </div>
          </div>
        </div>

      </div>
    </div>


    <div 
      id="js011" 
      class="arc_bottom"
      style="display: none">
      <div class="zx_sx"><span class="biaozhi"/><span>此路线其他货源</span><a href="/huoyuan"><span class="arc_bottom_more">更多+</span></a></div>

      <div 
        class="tj_list" 
        style="display: none;">
        <p class="p01"><a 
          id="nr0910" 
          target="_blank"><span id="nr0911">广东-东莞</span><i>&rarr;</i><span id="nr0912">广东-深圳</span></a></p>
        <p class="p03">
          <img src="[field:global.cfg_templets_skin/]/images/04gongsi.png" >&nbsp;<span><a 
            id="nr0913" 
            href="/member/index.php?uid=ybyb120">广州明科物流有限公司</a></span>

        </p>
        <p class="p03">
          <i>货物名称：</i><span id="nr0914">电子电器</span>

        </p>
        <p class="p02">
          <span><i>重量：</i><font id="nr0915">15吨</font></span>  <span><i>体积：</i><font id="nr0916">30立方米</font></span>
        </p>

        <p class="p04">
          <i>数量：</i><span id="nr0917"/>
        </p>
        <p class="p05">
          <img src="[field:global.cfg_templets_skin/]/images/11xinyong.png" >
        </p>
        <p class="p06">
          <a 
            id="nr0918" 
            href="Javascript:void(0)" 
            style="cursor: pointer;"><span>查看&nbsp;&gt;</span></a>
        </p>
      </div>


    </div>

  </div>
</template>
<script>
import { getCode, getCity } from '~/components/commonJs.js'
function setEnable(item) {
  if (item.isEnable >= 0 && item.isEnable <= 3) {
    item.starS = new Array(1)
  }
  if (item.isEnable >= 4 && item.isEnable <= 10) {
    item.starS = new Array(2)
  }
  if (item.isEnable >= 11 && item.isEnable <= 40) {
    item.starS = new Array(3)
  }
  if (item.isEnable >= 41 && item.isEnable <= 90) {
    item.starS = new Array(4)
  }
  if (item.isEnable >= 91 && item.isEnable <= 150) {
    item.starS = new Array(5)
  }
  if (item.isEnable >= 151 && item.isEnable <= 250) {
    item.starB = new Array(1)
  }
  if (item.isEnable >= 251 && item.isEnable <= 500) {
    item.starB = new Array(2)
  }
  if (item.isEnable >= 501 && item.isEnable <= 1000) {
    item.starB = new Array(3)
  }
  if (item.isEnable >= 1001 && item.isEnable <= 2000) {
    item.starB = new Array(4)
  }
  if (item.isEnable >= 2001) {
    item.starB = new Array(5)
  }
}
async function getOtherInfoList($axios, current, vo = {}) {
  let parm = vo
  parm.currentPage = current
  parm.pageSize = 5
  let res = await $axios.post('/28-web/lclOrder/findOtherInfoList', parm)
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
      { rel: 'stylesheet', href: '/css/article_huoyuan.css' },
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' }
    ],
    script: [{ src: '../js/jquery.pagination.min.js' }]
  },
  layout: 'subLayout',
  data() {
    return {
      zxList: [],
      otherInfoList: [],
      hyDetail: [],
      pages: 0,
      currentPage: 1
    }
  },
  async asyncData({ $axios, app, query }) {
    let zxList
    let hyDetail = await $axios.get('/28-web/lclOrder/detail/' + query.id)
    if (hyDetail.data.status === 200) {
      setEnable(hyDetail.data.data)
      let code = await getCode($axios, hyDetail.data.data.endProvince)
      zxList = await getCity($axios, code, hyDetail.data.data.startCity)
    }
    let otherInfoList = await getOtherInfoList($axios, 1, {
      id: query.id,
      shipperId: query.shipperId
    })
    return {
      hyDetail: hyDetail.data.status === 200 ? hyDetail.data.data : {},
      zxList: zxList && zxList.data.status === 200 ? zxList.data.data : [],
      otherInfoList: otherInfoList.list,
      currentPage: otherInfoList.currentPage,
      pages: otherInfoList.pages
    }
  },
  mounted() {
    $('#pagination1').pagination({
      currentPage: this.currentPage,
      totalPage: this.pages,
      callback: async current => {
        $('#current1').text(current)
        let otherInfoList = await getOtherInfoList(this.$axios, current, {
          id: this.$route.query.id,
          shipperId: this.$route.shipperId
        })
        this.otherInfoList = otherInfoList.list
        this.currentPage = otherInfoList.currentPage
        this.pages = otherInfoList.pages
        window.location.href = '#top'
      }
    })
    seajs.use(['../js/city.js'], function() {
      seajs.use(['../js/arc_huoyuan.js'], function() {
        seajs.use(['../js/collection.js'], function() {
          seajs.use(['../js/gaodemap2.js'], function() {})
        })
      })
    })
  }
}
</script>
<style scoped>
</style>
