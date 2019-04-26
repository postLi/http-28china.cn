<template>
  <div class="yuanqu yuanqu_page">
   
    <div class="list_box">
      <div
        style=" position: absolute;left: 0;cursor:pointer"
        class="header"
        onclick="window.open('/wuliu/detail?id=1')"/>
      <div style="width:100%;position:relative;height: 30px;top: 350px">
        <div
          style="display: inline-block;font-size: 12px;height: 16px;line-height: 16px;overflow: hidden;margin-top: 7px;width: 1400px;position: absolute;color: #fff;    left: 40px;;"
          class="top_left">
          <ul
            style="position:relative"
            class="top_left_ul" >
            <li
              v-for="(item,index) in wuliu_newest"
              :key="index"
              class="top_left_ul_li" >
              <a
                :href="item.url"
                target="_blank"
                :title="item.title"
              ><img
                style="width:20px;height:20px;margin-left:20px"
                src="../../static/yuanqu/images/lb.png"> <span style="padding:0 10px">最新公告 :</span><span style="padding-right:10px">{{ (item.releaseDate || '').split(' ')[0] }} </span><span >{{ item.title }} </span></a>

            </li>
          </ul>
        </div>
      </div>
     
     
      <div
        style="padding-top:20px;margin-top:400px"
        class="list_left">
        <div
          class=""
          style=" background-color: #fff;">

          <div
            class="select_con"
            style="float:left;width: 900px;border: 1px solid #fff;">

            <dl>
              <dd>
                <form
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
                      placeholder="请选择园区所在地" >
                  </div>
                  <input
                    style="height:45px;width:336px;    margin-left: 25px;"
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
                </form>
              </dd>

            </dl>

          </div>

          <div><a
            href="/regisiter"
            target="_blank"><button
              id="yd_cx1"
              class="layui-btn"
              style="width: 252px;margin-top: 10px;border-radius: 3px;margin-left: 10px;background:#2577ff;float:right;height:45px;line-height:45px"
          >物流公司入驻</button></a></div>

        </div>
        <div
          class="clearfix"
          style="clear: both;font-weight:400;;"><i>热门：</i>
          <a
            v-for="(item,index) in hotlinks"
            :key="index"
            :href="'/wuliu?locationProvince='+item.locationProvince+'&locationCity='+item.locationCity"
            target="_blank">
            <span
            style="padding-right:10px;font-weight:400;">{{ item.locationCity.slice(0,-1) }}</span>
          </a>
          
        </div>
        <div class="tuijian">
          <div
            class="tuijian_title"
            style=" height: 50px; line-height: 50px;padding-top: 20px;    margin-bottom: 40px;">
            <h5 style="color:#2577E3;font-size:20px;float: left;">推荐园区</h5>
            <a
              href="/wuliu"
              target="_blank"><span style="float:right"> 更多</span></a>
          </div>
          <div class="tuijian_content">
            <div
              v-if="getRecommendList==[] "
              class="list_none"
              style="display: block">
              <span>暂时没有找到您要的推荐园区信息，可以看看其他园区哦</span>
              <img
                style="margin: 20px 0 20px 545px;"
                src="../../static/images/none_pic.png">
            </div>
            <ul v-else>
              <li
                v-for="(item,i) in getRecommendList"
                :key="i"
                style="float:left;margin-right: 20px;background: #fff;">
                <a
                  :href="'/wuliu/detail?id=' + item.id"
                  target="_blank"
                  style="position:relative"><img
                    :src="item.parkSignPicture?item.parkSignPicture:'/images/pic/bg' + item.num + '.png'"
                    width="264"
                    height="264"
                    alt="">
                  <span
                    v-if="item.isInvestment==true"
                    style="position:absolute; top: -121px;;left:0px;background:linear-gradient(67deg,rgba(249,72,72,1),rgba(255,117,117,1));color:rgb(255,255,255);padding: 5px 20px;border:1px solid #F04F4F;border-radius:0px 0px 6px 6px;;box-shadow:2px 5px 5px -2px #DADADA">招商中</span>
               
                  <p style="width: 260px;text-align: left;padding-top:20px;color:#333333"><span
                    style="padding-left:10px"
                  >{{ item.parkName.length>15?item.parkName.substring(0,15)+'..':item.parkName }}</span>

                  </p>
                  <p style="width: 260px;text-align: left;padding:10px 0;"><span
                  style="padding:0 10px">推荐指数</span><img

                    v-for="(item,i) in item.ourRatings"
                    :key="i"
                    src="../../static/yuanqu/images/zhishu.png"
                    alt=""
                  >

                  </p>
              </a></li>
            </ul>
          </div>
        </div>
        <div>
          <div
            class="ruzhu"
            style="width: 688px;float: left; background: #fff;margin-top: 60px;    border: 1px solid rgba(227,238,252,1);">
            <div
              class="ruzhu_title"
              style="padding:10px 0 5px;height: 30px; line-height: 30px;">
              <h5 style="color:#2577E3;font-size:20px;float: left;padding-left:10px;">新入驻园区
              </h5>
              <a 
                href="/wuliu"
                target="_blank"><span style="float:right;margin-right:30px"> 更多</span></a>
            </div>
            <div
              v-if="getNewestList.length==0||getNewestList.list ==[] "
              class="list_none"
              style="display: block">
              <span>暂时没有找到您要的新入驻园区信息，可以看看其他园区哦</span>
              <img
                style="margin: 20px 0 20px 150px;"
                src="../../static/images/none_pic.png">
            </div>
            <ul 
              style="margin-bottom: 10px;"
              v-else>
              <li
                v-for="(item,i) in getNewestList"
                :key="i"
                style="padding-top:15px"><a

                  :href="'/wuliu/detail?id=' + item.id"
                  target="_blank">
                  <span
                    class="ruzhu_parkName"
                    style="padding: 0px 40px 0 30px;width: 110px;display: inline-block; margin-right:30px;color:#333333">{{ item.parkName.length>8?item.parkName.substring(0,8)+'..':item.parkName }}
                  </span><span
              style="width: 400px;display: inline-block;"><img src="../../static/yuanqu/images/address.png"><i style="padding-left:10px;vertical-align:middle">{{ item.parkAddress.length > 25?item.parkAddress.substring(0,25)+'..':item.parkAddress }}</i></span></a></li>
            </ul>
          </div>
          <div style="width: 688px;float: left;margin-left:20px;margin-top: 60px;">
            <div
              class="zizhu"
              style="background: #fff; border: 1px solid rgba(227,238,252,1);">
              <div
                class="zizhu_title"
                style="padding:10px 0 25px;height: 30px; line-height: 30px;">
                <h5 style="color:#2577E3;font-size:20px;padding-left:10px;;">自助服务
                </h5>

              </div>
              <div
                style="margin-left: 10px;"
                class="zizhu_content">
                <div style=" background: #fff; display: inline-block;margin-bottom: 25px">
                  <ul style="margin-left:40px">
                    <li
                      style="float:left;margin-right:30px;padding-top:10px"
                      v-for="(item,i) in ziZhuServerList"
                      :key="i"><a
                        :href="item.url"
                        target="_blank"
                        style="width: 165px;padding-left:15px;height: 60px;display: inline-block;color: white;text-align: left;line-height: 60px;font-size: 18px;border-radius:6px;"><img
                          :src="item.img"
                          alt=""
                          width="24"
                          style="padding-right:15px"
                    >{{ item.title }}</a></li>

                  </ul>
                </div>


              </div>
            </div>
            <div
              class="zizhu_bot"
              style="border:1px solid rgba(227,238,252,1);width:688px;height:165px;clear: both;margin-top:25px;    background: #fff;">
              <div>
                <div
                  class="layui-input-inline"
                  style="margin: 30px 0px 10px 50px;float: left;">
                  <input
                    style="width:200px;height: 38px;line-height: 38px;border-width: 1px;border-style: solid;background-color: #fff;border-radius: 2px;padding-left: 10px;border-color: #D2D2D2;border-radius:5px"
                    type="text"
                    maxlength="11"
                    placeholder="输入您的手机号"
                    v-model="inputData">
                  <span
                    style="width: 90px;height: 38px;line-height: 38px;text-align: center;background: #2577E3;display: inline-block;color:#fff;font-size:16px;    cursor: pointer;"
                    @click="openYuanqu">入驻</span>
                  <p
                    style="color:red;padding-top:10px;padding-left: 20px;"
                    v-if="isMobile">请输入正确手机号</p>
                  <p style="padding-top: 10px;color:#2577E3;padding-left: 20px;font-size: 16px;">入驻免费提供发布信息，园区宣传</p>
                </div>
                <div
                  style="display: inline-block;margin:24px;background:#FFFEE2;padding: 15px;"
                  class="zizhu_bot_r">
                  <img
                    src="../../static/yuanqu/images/down.png"
                    alt=""
                    style="width: 90px;height: 88px;float:left">
                  <p style="width: 150px;float:left;padding-left: 10px"><a

                    href="http://h5.28tms.com/"
                    target="_blank">下载<i style="color:rgb(0,102,255)">【28快运APP】</i>随时随地查看专线，在线下单推荐优质承运商，便捷查询运单</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="hot"
          style="clear: both;">
          <div
            class="hot_title"
            style="padding: 60px 0 25px 0;height: 40px;line-height: 40px;">
            <h5 style="color:#2577E3;font-size:20px;float: left;font-weight: bold;">热门园区</h5>
            <span style="padding-left:30px;height: 24px;line-height: 24px;color:#666;font-size:16px;"><i style="">1365</i>个园区，为您优选10个热门园区</span>
            <div
              style="border-top:none; display: inline-block; height: 44px;line-height: 44px;margin-left: 150px"
              class=""
            >
              <dl>
                <dd>
                  <form
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
                      id="parkAddress1"
                      class="fl list_input"
                      style="position:relative;width: 314px;padding-right: 10px" >
                      <input
                        style="height: 100%;border: none;outline: none;"
                        data-toggle="city-picker"
                        data-level="district"
                        type="text"
                        placeholder="请选择园区所在地" >
                    </div>
                   
                    <input
                      id="search_wlyq1"
                      value=" 搜索 "
                      readonly=""
                      class="list_button"
                      style="width:60px;color: #fff;text-align:center;margin-left: 30px;line-height:42x;height:42px"
                      @click="search1()">
                  </form>
                </dd>
              </dl>
            </div>
            <a
              href="/wuliu"
              target="_blank"><span style="float:right;height: 24px;line-height: 24px;"> 更多</span></a>
          </div>

        </div>
        <div
          style="margin-top: 30px;"
          class="list_wlyq ">
          <div
            v-if=" getHottList ==[] "
            class="list_none"
            style="display: block">
            <span>暂时没有找到您要的热门园区信息，可以看看其他园区哦</span>
            <img src="../../static/images/none_pic.png">
          </div>

          <ul
            v-for="(item,index) in getHottList"
            :key="index"
            class="wlzx_list"
            style="margin-right: 20px;width:260px;height:380px;margin-top: 0px;padding-bottom: 0px;margin-bottom: 20px;">
            <a
              :href="'/wuliu/detail?id=' + item.id"
              target="_blank">
              <li
                style=""
                class="wlzx_list_01"><img
                  :src="item.parkSignPicture?item.parkSignPicture:'/images/pic/bg' + item.num + '.png'"

                  class="scrollLoading"
                  width="260"
                  height="260"></li>
              <li class="wlzx_list_02"><span>{{ item.parkName.length>12?item.parkName.substring(0,12)+'..':item.parkName }}</span></li>
              <li class="wlzx_list_03">
                <span>
                  <img 
                    src="../../static/yuanqu/images/xz.png" 
                    alt="">
                  <font style="padding-left: 0px;">{{ item.transportNumber?item.transportNumber: 0 }}</font><i>条</i><span style="padding-left: 2px;">优质专线</span>
                </span>
                <span>
                  
                  <font style="padding-left: 0px;">{{ item.netWorkNumber?item.netWorkNumber: 0 }}</font><i/><span style="padding-left: 2px;">家物流网点</span>
                </span>
              </li>
              <li
                style="margin-bottom:0"
                class="wlzx_list_04">
                <img 
                  src="../../static/yuanqu/images/address-1.png" 
                  alt=""><span>{{ item.parkAddress.length>15?item.parkAddress.substring(0,15)+'..':item.parkAddress }}</span></li>
              <li class="wlzx_list_05">
                <img
                  style="width:20px;height:20"
                  src="../../static/yuanqu/images/weibo.png"
                  alt="">
              <span style="vertical-align:middle;pading-left:5px">{{ item.browseNumber?item.browseNumber:0 }}</span></li>
            </a>
          </ul>

        </div>

        <img
          style="margin-top:40px"
          src="../../static/gongsi/images/listbg.png">
        <div
          class="youzhi"
          style="clear: both;">
          <div
            class="youzhi_title"
            style="padding:40px 0 60px 0;height: 30px;line-height: 30px;">
            <h5 style="color:#2577E3;font-size:20px;float: left;font-weight: bold;">本月优质承运</h5>
            <span style="padding-left:20px;font-size:14px;">货主说好才是真的好</span>
            <a
              href="/gongsi"
              target="_blank"><span style="float:right"> 更多</span></a>
          </div>
          <div class="youzhi_content">
            <div
              v-if="getExcell==[] "
              class="list_none"
              style="display: block">
              <span>暂时没有找到您要的优质承运信息，可以看看其他园区哦</span>
              <img
                style="margin: 20px 0 20px 545px;"
                src="../../static/images/none_pic.png">
            </div>
            <ul v-else>
              <li
                v-for="(item,i) in getExcell"
                :key="i"
                style="float:left;margin-right:20px;background: #fff;cursor:pointer"
                @click="toWulLius(item)">
                <a
                style="position:relative"><img
                  :src="item.personalImageFile?personalImageFile:'/images/pic/bg' + item.num + '.png'"
                  width="260"
                  height="260"
                  alt="">
                  <span
                    :class="'noclass'+i"
                    class="NOclass"
                    style="position:absolute; top: -133px;left: 20px;color:rgb(255,255,255);padding: 5px 20px;border-radius:15px"/></a>
                <p style="padding-top:20px;padding-left:10px;font-size:16px;color:#333">{{ item.companyName.length>12?item.companyName.substring(0,12)+'..':item.companyName }}
                  <span style="margin-left:10px;display:inline-block;width:18px;;height:18px;background:red;color:#fff;font-size:14px;text-align:center" >荐</span>
                </p>
                <p style="padding-top:10px;padding-left:10px;"><span style="padding-right:20px">推荐指数{{ item.ourRatings }}</span><img
                  v-for="(item,i) in 4"
                  :key="i"
                  src="../../static/yuanqu/images/zhishu.png"
                  alt=""
                >

                </p>
                <p style="padding:10px 0 10px 10px">好评率{{ item.excellentRate? item.excellentRate:0 }}%

              </p></li>
            </ul>
          </div>

        </div>
        <div style="clear: both;padding-top: 50px;">
          <div
            class="zixun_l"
            style="width: 670px;float: left;background:#fff">
            <div
              class="zixuntitle"
              style="padding:10px 0 25px;margin-bottom:30px;">
              <h5 style="color:#2577E3;font-size:20px;float: left;font-weight: bold;padding-left:10px">行业资讯
              </h5>
              <a
                href="/zixun"
                target="_blank"><span style="float:right;padding-right: 10px;"> 更多</span></a>
            </div>
            <div
              class="zixun_content"
              style="position:relative">
              <a
                :href="wuliu_hyzx_show.url"
                target="_blank"
              >
                <img
                  src="../../static/gongsi/images/u1075.png"
                  style="width:270px;height:170px;float:left;padding-left: 10px;padding-bottom: 10px;">
             
              <span style=" position: absolute;bottom: -170px;left: 10px; background: rgba(0, 0, 0, 0.3);color: rgb(255, 255, 255);padding: 10px 14px; width: 240px;">{{ wuliu_hyzx_show.title.length>16?wuliu_hyzx_show.title.substring(0,16)+'..':wuliu_hyzx_show.title }}</span></a>
              <ul 
              style="float:left; padding-bottom: 20px;">
                <li
                  v-for="(item,i) in wuliu_hyzx"
                  :key="i"
                  style="padding-top:10px">
                  <a
                    :href="item.url"
                    :title="item.title"
                    target="_blank">
                    <p><span
                      class="news_title"
                      style="padding-left:40px">{{ item.title.length>16? item.title.substring(0,16)+'..':item.title }}</span><span style="padding-left:20px;overflow: hidden;display: inline-block">{{ (item.releaseDate || '').split(' ')[0] }}</span></p></a></li>
              </ul>
            </div>

          </div>
          <div
            class="zixun_r"
            style="width: 670px;float: left;margin-left:40px;background:#fff">
            <div
              class="zixun_title"
              style="padding:10px 0 25px;margin-bottom:30px">
              <h5 style="color:#2577E3;font-size:20px;float: left;font-weight: bold;padding-left:10px">仓储与配送
              </h5>
              <a
                href="/zixun"
                target="_blank"><span style="float:right;padding-right: 10px;"> 更多</span></a>
            </div>
            <div
              class="zixun_content"
              style="position:relative">
              <a
                :href="wuliu_ccyps_show.url"
                target="_blank"
              >
                <img
                  src="../../static/yuanqu/images/zixun.png"
                  style="width:270px;height:170px;float:left;padding-left: 10px;padding-bottom: 10px;"><span style=" position: absolute;bottom: -170px;left: 13px; background: rgba(0, 0, 0, 0.3);color: rgb(255, 255, 255);padding: 10px 14px;width: 240px;">{{ wuliu_ccyps_show.title.length>16?wuliu_ccyps_show.title.substring(0,16)+'..':wuliu_ccyps_show.title }}</span></a>
              <ul style="float:left ;padding-bottom: 20px;">
                <li
                  v-for="(item,i) in wuliu_ccyps"
                  :key="i"
                  style="padding-top:10px">
                  <a
                    :href="item.url"
                    :title="item.title"
                    target="_blank">
                    <p><span
                      class="news_title"
                      style="padding-left:40px">{{ item.title }}</span>
                <span style="padding-left:20px;overflow: hidden;display: inline-block">{{ (item.releaseDate || '').split(' ')[0] }}</span></p></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="getyouzhi"
          style="clear: both;text-align: center;padding: 100px 0;font-size:24px;color:#FF892A;font-width:bloth;">
          <span>快速成为承运商获取优质货源</span>
          <button 
            @click="toRegisiter"
            style="width: 280px;color: white;background: #FF892A;height:80px;;line-height: 80px;text-align: center;border-radius: 8px;    display: inline-block;margin-left:50px;cursor: pointer; border: none;color:rgba(255,255,255,1);font-size:24px;"><a 
              
          style="color:rgba(255,255,255,1);">我要入驻</a></button>
        
        </div>
      </div>


    </div>
    <Add
      :show = "isAdd"
      @close="noaddFn"
      :info="inputData"
      @fromAdd="fromAdd"
    />
    <!-- <Map 
      :showMap="isMap"
      @close="closeMap"/> -->
  </div>
</template>

<script>
import Add from './add'
// import Map from './map'
import { promised } from 'q'
function comNum(item) {
  let arr = (item.id || '').split('')
  let num = 0
  arr.forEach(el => {
    num += el.charCodeAt(0) || 0
  })
  item.num = (num % 30) + 1
}
async function gateWayList($axios, currentPage, vo = {}) {
  let res = await $axios.post('/28-web/logisticsPark/list', vo)
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
  components: {
    Add
    // Map
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/basic.css' },
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/yuanqu/css/list_wlyq.css' },
      { rel: 'stylesheet', href: '/layer/dist/css/layui.css' }
    ],
    script: [
      { src: '/js/city-picker.data.js' },
      { src: '/js/city-picker.js' },
      { src: '/js/gaodemap2.js' },

      { src: '/layer/layer.js' },
      { src: '/js/jquery.pagination.min.js' }
    ]
  },
  data() {
    return {
      isAdd: false,
      inputData: '',
      isMobile: false,
      pages: 0,
      currentPage: 1,
      isMap: false,
      ziZhuServerList: [
        {
          img: require('../../static/yuanqu/images/ksxd.png'),
          title: '快速下单',
          url: '/create/order'
        },
        {
          img: require('../../static/yuanqu/images/ksxd.png'),
          title: '发布专线',
          url: '/create/line'
        },
        {
          img: require('../../static/yuanqu/images/ksxd.png'),
          title: '发布车源',
          url: '/create/cheyuan'
        },
        {
          img: require('../../static/yuanqu/images/ksxd.png'),
          title: '运单查询',
          url: '/ydcx'
        },

        {
          img: require('../../static/yuanqu/images/ksxd.png'),
          title: '时效查询',
          url: '/shixiao'
        },
        {
          img: require('../../static/yuanqu/images/ksxd.png'),
          title: '网点查询',
          url: '/wangdian'
        }
      ],
      hotlinks: [
        {
          locationProvince: '上海市',
          locationCity: '上海市'
        },
        {
          locationProvince: '北京市',
          locationCity: '北京市'
        },
        {
          locationProvince: '广东省',
          locationCity: '深圳市'
        },
        {
          locationProvince: '广东省',
          locationCity: '广州市'
        },
        {
          locationProvince: '重庆市',
          locationCity: '重庆市'
        },
        {
          locationProvince: '天津市',
          locationCity: '天津市'
        },
        {
          locationProvince: '江苏省',
          locationCity: '苏州市'
        },
        {
          locationProvince: '四川省',
          locationCity: '成都市'
        },
        {
          locationProvince: '湖北省',
          locationCity: '武汉市'
        }
      ]
    }
  },
  computed: {
    wuliu_newest() {
      return this.$store.state.news.wuliu_newest
    },
    wuliu_hyzx() {
      return this.$store.state.news.wuliu_hyzx.slice(1, 8)
    },
    wuliu_hyzx_show() {
      return this.$store.state.news.wuliu_hyzx[0] || {}
    },
    wuliu_ccyps() {
      return this.$store.state.news.wuliu_ccyps.slice(1, 8)
    },
    wuliu_ccyps_show() {
      return this.$store.state.news.wuliu_ccyps[0] || {}
    },
    getExcell() {
      return this.getExcellentList.slice(0, 5)
    }
  },
  async fetch({ store, params, $axios, error, app, query }) {
    // 多个栏目的参数配置
    let paramsObj = {
      wuliu_newest: {
        channelIds: '94',
        count: 10,
        orderBy: 9,
        channelOption: 0
      },
      wuliu_hyzx: {
        channelIds: '100',
        count: 6,
        orderBy: 9,
        channelOption: 0
      },
      wuliu_ccyps: {
        channelIds: '101',
        count: 6,
        orderBy: 9,
        channelOption: 0
      }
    }
    let theparams = Object.values(paramsObj).map(el => JSON.stringify(el))
    let names = Object.keys(paramsObj)
    return store.dispatch('news/GETMULTYNEWSINFO', {
      params: '{' + theparams.join(';') + '}',
      names: names,
      preFn: data => {
        return data.map((els, index) => {
          return els.map(el => {
            el.url = el.url.replace(
              /http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,
              '/zixun'
            )
            return el
          })
        })
      }
    })
  },
  async asyncData({ $axios, app, query, error }) {
    let flag = 'excellentRate'

    let parkName = query.parkName ? query.parkName : ''
    let locationProvince = query.locationProvince
      ? query.locationProvince
      : app.$cookies.get('currentProvinceFullName')
    let locationCity = query.locationCity
      ? query.locationCity
      : app.$cookies.get('currentAreaFullName')
    let locationArea = query.locationArea ? query.locationArea : ''
    let currentPage = 1
    let vo = {
      parkName,
      locationProvince,
      locationCity,
      locationArea
    }
    let [
      getLogisticsPark,
      recommendParkList,
      getRecommendList,
      getNewestList,
      getHottList,
      getExcellentList
    ] = await Promise.all([
      $axios.post('/28-web/logisticsPark/interested/list', {
        parkName,
        locationProvince,
        locationCity,
        locationArea,
        currentPage,
        pageSize: 16
      }),
      $axios.post('/28-web/logisticsPark/recommend/list', {
        parkName,
        locationProvince,
        locationCity,
        locationArea,
        currentPage,
        pageSize: 14
      }),
      $axios.post('/28-web/logisticsPark/main/recommend/list', {
        parkName,
        locationProvince,
        locationCity,
        locationArea,
        currentPage,
        pageSize: 5
      }),
      $axios.post('/28-web//logisticsPark/newest/list', {
        parkName,
        locationProvince,
        locationCity,
        locationArea,
        currentPage,
        pageSize: 10
      }),
      $axios.post('/28-web/logisticsPark/hot/list', {
        parkName,
        locationProvince,
        locationCity,
        locationArea,
        currentPage,
        pageSize: 10
      }),
      $axios.get('/28-web/logisticsCompany/excellent?flag=' + flag)
    ])

    let vo1 = vo
    if (
      getExcellentList.data.status === 200 ||
      getHottList.data.status === 200 ||
      getRecommendList.data.status === 200 ||
      getNewestList.data.status === 200 ||
      getLogisticsPark.data.status === 200 ||
      recommendParkList.data.status === 200
    ) {
      getExcellentList.data.data.forEach(item => {
        comNum(item)
      })
      getRecommendList.data.data.list.forEach(item => {
        comNum(item)
      })
      getHottList.data.data.list.forEach(item => {
        comNum(item)
      })
      return {
        getExcellentList:
          getExcellentList.data.status === 200
            ? getExcellentList.data.data
            : [],
        getHottList:
          getHottList.data.status === 200 ? getHottList.data.data.list : [],
        getRecommendList:
          getRecommendList.data.status === 200
            ? getRecommendList.data.data.list
            : [],
        getNewestList:
          getNewestList.data.status === 200 ? getNewestList.data.data.list : [],

        getLogisticsPark:
          getLogisticsPark.data.status === 200
            ? getLogisticsPark.data.data.list
            : [],
        recommendParkList:
          recommendParkList.data.status === 200
            ? recommendParkList.data.data.list
            : [],
        vo: vo,
        vo1: vo1
      }
    } else {
      error({ statusCode: 500, message: '查找不到该物流园区列表' })
    }
  },
  mounted() {
    seajs.use(['/js/LLL-AFLC_API.js'])
    $('#parkAddress input').citypicker({
      province: this.vo.locationProvince,
      city: this.vo.locationCity,
      district: this.vo.locationArea
    })
    $('#parkAddress1 input').citypicker({
      province: this.vo1.locationProvince,
      city: this.vo1.locationCity,
      district: this.vo1.locationArea
    })
    $('#list_nav_a').html(
      this.vo.locationCity + this.vo.locationArea + '物流园区'
    )
    this.loadPagination()

    let top_left_h = $('.top_left').height()

    let roll_ul_h = $('.top_left_ul')
    roll_ul_h.append(roll_ul_h.html())
    let num = 1
    let newList_l = this.wuliu_newest.length
    let left_ul_li = $('.top_left_ul_li').height()
    let startScroll_top = () => {
      this.inTerVar1 = setInterval(() => {
        roll_ul_h
          .stop()
          .animate({ top: `${num * -left_ul_li}px` }, 2000, () => {
            if (num > newList_l) {
              num = 1
              roll_ul_h.css('top', '0px')
            }
          })
        num = num + 1
      }, 5000)
    }
    if (left_ul_li * newList_l > top_left_h) {
      startScroll_top()
    }
  },

  methods: {
    // mapFn() {
    //   this.isMap = true
    // },
    // closeMap() {
    //   this.isMap = false
    // },
    fromAdd(data) {
      this.inputData = data
      this.isMobile = false
    },
    addFn() {
      this.isAdd = true
    },
    noaddFn() {
      this.isAdd = false
    },
    openYuanqu() {
      if (this.inputData) {
        var validReg = window.Lll_AFLC_VALID
        let aurl = ''

        if (validReg.MOBILE.test(this.inputData)) {
          this.addFn()
        } else {
          this.isMobile = true
          this.inputData = ''
        }
      } else {
        this.isMobile = true
      }
      // inputData
    },
    async search1() {
      let list1 = []
      $('#parkAddress1 .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      this.vo.locationProvince = list1[0] ? list1[0] : ''
      this.vo.locationCity = list1[1] ? list1[1] : ''
      this.vo.locationArea = list1[2] ? list1[2] : ''
      window.open(
        `/wuliu?locationProvince=${this.vo.locationProvince}&locationCity=${
          this.vo.locationCity
        }&locationArea=${this.vo.locationArea}`
      )
    },
    async search() {
      let list1 = []
      $('#parkAddress .select-item').each(function(i, e) {
        list1.push($(this).text())
      })
      this.vo.locationProvince = list1[0] ? list1[0] : ''
      this.vo.locationCity = list1[1] ? list1[1] : ''
      this.vo.locationArea = list1[2] ? list1[2] : ''
      window.open(
        `/wuliu?locationProvince=${this.vo.locationProvince}&locationCity=${
          this.vo.locationCity
        }&locationArea=${this.vo.locationArea}&parkName=${
          this.vo.parkName ? this.vo.parkName : ''
        }`
      )
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
    },
    toWulLius(item) {
      window.open('/member/' + item.id)
    },
    toRegisiter() {
      window.open('/regisiter')
    }
  }
}
</script>

<style lang="scss">
.yuanqu_page {
  margin-top: -30px;
}
.news_title {
  width: 17em;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    top: 7px;
    left: 25px;
    width: 6px;
    height: 6px;
    background: #ee2626;
  }
}
.top_left_ul {
  li {
    a {
      color: #fff;
    }
    a:hover {
      span {
        color: red;
      }
    }
  }
}
.yuanqu {
  background: rgb(249, 249, 249);
  .header {
    background: url('../../static/yuanqu/images/hearder.jpg');
    width: 100%;
    height: 380px;
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
  #parkAddress {
    width: 320px;
    background: url('../../static/images/index/01xx.png') no-repeat 335px 18px
      #fff;
    background-size: 10px 8px;
    padding-right: 30px;
  }
  .youzhi_content {
    ul {
      .noclass0 {
        display: block !important;
        background: url('../../static/yuanqu/images/n1.png');
      }
      .noclass1 {
        display: block !important;
        background: url('../../static/yuanqu/images/n2.png');
      }
      .noclass2 {
        display: block !important;
        background: url('../../static/yuanqu/images/n3.png');
      }
      .NOclass {
        width: 63px;
        height: 28px;
        background-repeat: no-repeat;
        display: none;
      }
    }
  }
  .tuijian {
    margin-top: 35px;
    .tuijian_content {
      li:last-of-type {
        margin-right: 0 !important;
      }
      li {
        transition: all 0.4s;
      }
      li:hover {
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
        transform: translate3d(0, -2px, 0);
      }
    }
  }
  .hot {
    .list_wlyq {
      .wlzx_list:last-of-type {
        margin-right: 0px;
      }
      .wlzx_list:nth-of-type(5) {
        margin-right: 0px;
      }
    }
  }
  .youzhi {
    .youzhi_content {
      ul {
        li:last-of-type {
          margin-right: 0px !important;
        }
      }
    }
  }
  .zizhu {
    .zizhu_content {
      li:nth-of-type(n + 4) {
        margin-top: 15px;
      }
      li:first-of-type,
      li:last-of-type {
        a {
          background: #49b1e7;
        }
      }
      li:nth-of-type(2),
      li:nth-of-type(4) {
        a {
          background: #ffaf47;
        }
      }
      li:nth-of-type(3),
      li:nth-of-type(5) {
        a {
          background: #15db27;
        }
      }
    }
  }
}
</style>
