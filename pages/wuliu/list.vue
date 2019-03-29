<template>
  <div class="yuanqu">
    <div class="header">
      <a
        href="/wuliu/detail?id=1"
        target="_blank">
        <img
          src="../../static/yuanqu/images/hearder.png"
          alt=""
          width="1900">
      </a>
    </div>
    <div class="list_box">

      <!--<div-->
      <!--class="list_nav"-->
      <!--style="padding-top:20px"-->
      <!--&gt;-->
      <!--<a href="/">物流首页</a>&gt;<a-->
      <!--id="list_nav_a"-->
      <!--href="">物流园区</a>-->
      <!--</div>-->
      <div
        style="padding-top:20px"
        class="list_left">
        <div
          class=""
          style=" background-color: #fff;">

          <div
            class="select_con"
            style="float:left;width: 900px;">

            <dl>
              <!-- <dt><span style="padding-left:0">园区所在地&nbsp;：</span></dt> -->
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
                  <!-- <span>&nbsp;园区名称&nbsp;：</span> -->
                  <input
                    style="height:45px;width:270px;"
                    v-model="vo.parkName"
                    type="text"
                    class="list_input"
                    placeholder="请选择园区名称" >
                  <input
                    id="search_wlyq"
                    value=" 搜索园区 "
                    readonly=""
                    class="list_button"
                    style="width:100px"
                    @click="search()">
                    <!-- <input
                  id="flush"
                  name="Submit2"
                  value="重置 "
                  readonly=""
                  class="list_button"
                  @click="reload()"> -->
                </form>
              </dd>

            </dl>

          </div>

          <div><a
            href="/regisiter"
            target="_blank"><button
              id="yd_cx1"
              class="layui-btn"
              style="width: 252px;margin-top: 10px;border-radius: 3px;margin-left: 10px;background:#3f94ee;float:right;height:45px;line-height:45px"
          >物流公司入驻</button></a></div>

        </div>
        <div
          class="clearfix"
          style="clear: both;"><i>热门：</i>
          <a

            href="/wuliu?locationProvince=上海市&locationCity=上海市"
            target="_blank">
            <span
            style="padding-right:10px">上海</span>
          </a>
          <a

            href="/wuliu?locationProvince=北京市&locationCity=北京市"
            target="_blank">
            <span
            style="padding-right:10px">北京</span>
          </a>
          <a

            href="/wuliu?locationProvince=广东省&locationCity=深圳市"
            target="_blank">
            <span
            style="padding-right:10px">深圳</span>
          </a>
          <a

            href="/wuliu?locationProvince=重庆市&locationCity=重庆市"
            target="_blank">
            <span
            style="padding-right:10px">重庆</span>
          </a>
          <a
            href="/wuliu?locationProvince=天津市&locationCity=天津市"
            target="_blank">
            <span
            style="padding-right:10px">天津</span>
          </a>
          <a
            href="/wuliu?locationProvince=江苏省&locationCity=苏州市"
            target="_blank">
            <span
            style="padding-right:10px">苏州</span>
          </a>
          <a
            href="/wuliu?locationProvince=四川省&locationCity=成都市"
            target="_blank">
            <span
            style="padding-right:10px">成都</span>
          </a>
          <a
            href="/wuliu?locationProvince=湖北省&locationCity=武汉市"
            target="_blank">
            <span
            style="padding-right:10px">武汉</span>
          </a>
        </div>
        <div class="tuijian">
          <div
            class="tuijian_title"
            style=" height: 50px; line-height: 50px;padding-top: 20px;">
            <h5 style="color:rgb(196,69,76);font-size:18px;float: left;font-weight: bold;">推荐园区</h5>
            <a
              href="/wuliu"
              target="_blank"><span style="float:right"> 更多></span></a>
          </div>
          <div class="tuijian_content">
            <div
              v-if="getRecommendList.length==0|| getRecommendList.list==[] "
              class="list_none"
              style="display: block">
              <span>暂时没有找到您要查询的信息，可以看看其他园区哦</span>
              <img 
                style="margin: 20px 0 20px 545px;"
                src="../../static/images/none_pic.png">
            </div>
            <ul v-else>
              <li
                v-for="(item,i) in getRecommendList"
                :key="i"
                style="float:left;padding-right:25px">
                <a
                  :href="'/wuliu/detail?id=' + item.id"
                  target="_blank"
                  style="position:relative"><img
                    :src="item.parkSignPicture?item.parkSignPicture:'http://aflc.oss-cn-shenzhen.aliyuncs.com//tms/20181218/ryeGbJyAGatZj4DaSMFQeXDB4b5KPrdN.jpg'"
                    width="260"
                    height="165"
                    alt=""><span style="position:absolute;bottom:-74px;left:1px;background:rgba(0,0,0,0.1);color:rgb(255,255,255);padding: 5px 0px;font-size:14px;width: 260px;text-align: center;">{{ item.parkName.length>15?item.parkName.substring(0,15):item.parkName }}</span>
                  <span
                    v-if="item.isInvestment==true"
                    style="position:absolute;bottom:61px;left:0px;background:rgba(194,0,13,1);color:rgb(255,255,255);padding: 5px 20px;">招商中</span>
                </a>
                <!-- ourRatings -->
                <p style="width: 260px;text-align: center;padding-top:10px"><span
                style="padding-right:10px">推荐指数</span><img

                  v-for="(item,i) in item.ourRatings"
                  :key="i"
                  src="../../static/yuanqu/images/zhishu.png"
                  alt=""
                >

              </p></li>
            </ul>
          </div>
        </div>
        <div
          class="new"
          style="clear: both;">
          <div
            class="new_title"
            style="padding:30px 0 25px">
            <h5

            style="display: inline-block;color:rgb(255,255,255);font-size:18px;background:rgb(0,136,238);width:135px;padding:10px">最新动态</h5>
            <div
              style="display: inline-block;font-size: 12px;height: 16px;line-height: 16px;overflow: hidden;margin-top: 7px;width: 315px;"
              class="top_left">
              <ul
                style="position:relative"
                class="top_left_ul" >
                <li
                  v-for="(item,index) in newslist"
                  :key="index"
                  class="top_left_ul_li" >
                  <span> {{ item.list+index }}</span>
              
                </li>
              </ul>
            </div>
           
          </div>



        </div>
        <div>
          <div
            class="ruzhu"
            style="width: 635px;float: left">
            <div
              class="ruzhu_title"
              style="padding:30px 0 25px">
              <h5 style="color:rgb(196,69,76);font-size:18px;float: left;font-weight: bold;">新入驻园区
              </h5>
              <a href=""><span style="float:right"> 更多></span></a>
            </div>
            <div
              v-if="getNewestList.length==0 || getNewestList.list ==[] "
              class="list_none"
              style="display: block">
              <span>暂时没有找到您要查询的信息，可以看看其他园区哦</span>
              <img 
                style="margin: 20px 0 20px 150px;"
                src="../../static/images/none_pic.png">
            </div>
            <ul v-else>
              <!-- :href="'/wuliu/detail?id=' + item.id"
                  target="_blank" -->
              <li
                v-for="(item,i) in getNewestList"
                :key="i"
                style="padding-top: 20px"><a

                  :href="'/wuliu/detail?id=' + item.id"
                  target="_blank">
                  <img
                    src="../../static/yuanqu/images/jiantou.png"
                    alt=""><span style="padding: 0px 40px 0 30px;width: 100px;display: inline-block;">{{ item.parkName.length>6?item.parkName.substring(0,6)+'..':item.parkName }}
                  </span><span
              style="width: 320px;display: inline-block;"><i style="padding-right:10px">地址:</i>{{ item.parkAddress.length > 19?item.parkAddress.substring(0,19)+'..':item.parkAddress }}</span></a></li>
            </ul>
          </div>
          <div
            class="zizhu"
            style="width: 710px;float: left;margin-left:50px">
            <div
              class="zizhu_title"
              style="padding:30px 0 25px">
              <h5 style="color:rgb(196,0,13);font-size:18px;font-weight: bold;">自助服务
              </h5>
              <!--<a href=""><span style="float:right">更多></span></a> -->
            </div>
            <div
              style="margin-left: 10px;"
              class="zizhu_content">
              <div>
                <ul>
                  <li
                    style="float:left;padding-right:30px;padding-top:10px"
                    v-for="(item,i) in ziZhuServerList"
                    :key="i"><a
                      :href="item.url"
                      target="_blank"
                      style="width: 185px;padding-left:15px;height: 60px;background: rgb(51,153,255);display: inline-block;color: white;text-align: left;line-height: 60px;font-size: 18px;"><img
                        :src="item.img"
                        alt=""
                        width="40"
                        style="padding-right:20px"
                  >{{ item.title }}</a></li>
        
                </ul>
              </div>
              <div
                class="zizhu_bot"
                style="border:1px solid #ccc;width:660px;height:150px;clear: both;">
                <div>
                  <!--<label class="layui-form-label">短输入框</label> -->
                  <div
                    class="layui-input-inline"
                    style="margin: 30px 20px 10px 20px;float: left;">
                    <input
                      style="height: 38px;line-height: 1.3;line-height: 38px;border-width: 1px;border-style: solid;background-color: #fff;border-radius: 2px;padding-left: 10px;border-color: #D2D2D2;"
                      type="text"
                      maxlength="11"
                      placeholder="输入您的手机号"
                      v-model="inputData">
                    <span
                      style="width: 90px;height: 38px;line-height: 38px;text-align: center;background: rgb(51,153,255) ;display: inline-block;color:#fff"
                      @click="openYuanqu">园区入驻</span>
                    <p
                      style="color:red;padding-top:5px"
                      v-if="isMobile">请输入正确手机号</p>
                    <p style="padding-top: 10px">入驻免费提供发布信息，园区宣传</p>
                    <!--<label class="layui-form-label">园区入驻1</label>-->
                  </div>
                  <div
                    style="display: inline-block;margin:20px;background:rgb(242,242,242);padding: 10px;"
                    class="zizhu_bot_r">
                    <img
                      src="../../static/yuanqu/images/down.png"
                      alt=""
                      style="width: 90px;height: 80px;float:left">
                    <p style="width: 150px;float:left;padding-left: 10px"><a

                      href="http://h5.28tms.com/"
                      target="_blank">下载<i style="color:rgb(0,102,255)">【28快运APP】</i>，随时随地查看专线，在线下单推荐优质承运商，便捷查询运单</a></p>
                  </div>
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
            style="padding:30px 0 25px 0">
            <h5 style="color:rgb(196,69,76);font-size:18px;float: left;font-weight: bold;">热门园区</h5>
            <span style="padding-left:30px;height: 24px;line-height: 24px;"><i style="color:rgb(249,155,42)">1365</i>个园区，为您优选10个热门园区</span>
            <a
              href="/wuliu"
              target="_blank"><span style="float:right;height: 24px;line-height: 24px;"> 更多></span></a>
          </div>
          <div
            style="border-top:none"
            class="select_con"
          >

            <dl>
              <!-- <dt><span style="padding-left:0">园区所在地&nbsp;：</span></dt> -->
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
                    style="position:relative;width:300px" >
                    <input
                      style="height: 100%;border: none;outline: none;"
                      data-toggle="city-picker"
                      data-level="district"
                      type="text"
                      placeholder="请选择园区所在地" >
                  </div>
                  <!-- <span>&nbsp;园区名称&nbsp;：</span>
                  <input
                    v-model="vo.parkName"
                    type="text"
                    class="list_input"
                    placeholder="请输入园区名称" > -->
                  <input
                    id="search_wlyq1"
                    value=" 搜索园区 "
                    readonly=""
                    class="list_button"
                    style="width:100px;background: #2577e3;color: #fff;text-align:center"
                    @click="search1()">
                </form>
              </dd>

            </dl>

          </div>

        </div>
        <div
          style="margin-top: 30px;"
          class="list_wlyq ">
          <div
            v-if="getHottList.length === 0 || getHottList.list ==null "
            class="list_none"
            style="display: block">
            <span>暂时没有找到您要查询的信息，可以看看其他园区哦</span>
            <img src="../../static/images/none_pic.png">
          </div>

          <ul
            v-for="(item,index) in getHottList.list"
            :key="index"
            class="wlzx_list"
            style="margin-right: 20px;width:260px;height:360px;margin-top: 0px;">
            <a
              :href="'/wuliu/detail?id=' + item.id"
              target="_blank">
              <!-- require('../static/images/pic/bg' + item.num + '.png') -->
              <li
                style="height: 200px;"
                class="wlzx_list_01"><img
                  :src="item.parkSignPicture?item.parkSignPicture:require('../../static/yuanqu/images/wlyq_pic.png')"

                  class="scrollLoading"
                  width="240"
                  height="210"></li>
              <li class="wlzx_list_02"><span>{{ item.parkName.length>12?item.parkName.substring(0,12):item.parkName }}</span></li>
              <li class="wlzx_list_03">
                <span>
                  <font style="padding-left: 0px;">{{ item.transportNumber?item.transportNumber: 0 }}</font><i>条</i><span style="padding-left: 2px;">优质专线</span>
                </span>
                <span>
                  <font style="padding-left: 0px;">{{ item.netWorkNumber?item.netWorkNumber: 0 }}</font><i/><span style="padding-left: 2px;">家物流网点</span>
                </span>
              </li>
              <li
                style="margin-bottom:0"
                class="wlzx_list_04"><span>{{ item.parkAddress.length>13?item.parkAddress.substring(0,13)+'..':item.parkAddress }}</span></li>
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
          style="margin-top:20px"
          src="../../static/gongsi/images/listbg.png">
        <div
          class="youzhi"
          style="clear: both;">
          <div
            class="youzhi_title"
            style="padding:40px 0 25px 0">
            <h5 style="color:rgb(196,69,76);font-size:18px;float: left;font-weight: bold;">本月优质承运</h5>
            <span style="padding-left:30px;font-size:14px;height: 24px;line-height: 24px;">货主说好才是真的好</span>
            <a
              href="/gongsi"
              target="_blank"><span style="float:right"> 所有物流企业></span></a>
          </div>
          <div class="youzhi_content">
            <!-- v-if="getRecommendList.length==0|| getRecommendList.list==[] " -->
            <div
              v-if="getExcellentList.length==0|| getExcellentList.list==[] "
              class="list_none"
              style="display: block">
              <span>暂时没有找到您要查询的信息，可以看看其他园区哦</span>
              <img 
                style="margin: 20px 0 20px 545px;"
                src="../../static/images/none_pic.png">
            </div>
            <ul v-else>
              <li
                v-for="(item,i) in getExcellentList.slice(0,6)"
                :key="i"
                style="float:left;padding-right:33px">
                <a
                  :href="'/member/' + item.id"
                  target="_blank"
                  style="position:relative"><img
                    :src="item.personalImageFile?personalImageFile:'http://aflc.oss-cn-shenzhen.aliyuncs.com//tms/20181218/ryeGbJyAGatZj4DaSMFQeXDB4b5KPrdN.jpg'"
                    width="205"
                    height="160"
                    alt="">
                  <!-- <span style="display: inline-block;width: 255px;position:absolute;bottom:-74px;left:1px;background:rgba(0,0,0,0.5);color:rgb(255,255,255);padding: 10px 0px;text-align: center;">{{ item.companyName }}</span> -->
                  <span
                    :class="'noclass'+i"
                    class="NOclass"
                    style="position:absolute;bottom:40px;left:5px;color:rgb(255,255,255);    padding: 5px 20px;border-radius:15px">NO{{ i+1 }}</span></a>
                <div style="padding-top:5px;">
                  <a
                    target="_blank"
                    :href="'/member/' + item.id"> <span style="padding-top:10px;color: rgb(51,153,255);font-size:16px">{{ item.companyName.length>12?item.companyName.substring(0,12)+'..':item.companyName }}</span></a>
                </div>
                <p style="padding-top:10px"><span style="padding-right:20px">推荐指数{{ item.ourRatings }}</span><img
                  v-for="(item,i) in 4"
                  :key="i"
                  src="../../static/yuanqu/images/zhishu.png"
                  alt=""
                >

                </p>
                <p style="padding:10px 0">好评率{{ item.excellentRate? item.excellentRate:0 }}%

              </p></li>
            </ul>
          </div>

        </div>
        <div>
          <div
            class="zixun_l"
            style="width: 670px;float: left">
            <div
              class="zixuntitle"
              style="padding:60px 0 25px;margin-bottom:10px">
              <h5 style="color:rgb(196,69,76);font-size:18px;float: left;font-weight: bold;">行业资讯
              </h5>
              <a
                href="/zixun/xyzx/index.jhtml"
                target="_blank"><span style="float:right"> 更多>></span></a>
            </div>
            <div
              class="zixun_content"
              style="position:relative">
              <img
                src="../../static/gongsi/images/u1075.png"
                style="width:280px;height:170px;float:left">
              <a
                href="/zixun/ccyps/205.jhtml"
                target="_blank"
              >
              <span style=" position: absolute;bottom: -170px;left: 1px; background: rgba(0, 0, 0, 0.3);color: rgb(255, 255, 255);padding: 10px 14px;">瑞幸融资估值翻倍，背后是同城物流的...</span></a>
              <ul style="float:left">
                <li
                  v-for="(item,i) in 5"
                  :key="i"
                  style="padding-top:15px">
                  <a
                    href="/zixun/ccyps/205.jhtml"
                    target="_blank">
                <p><span style="padding-left:20px">瑞幸融资估值翻倍，背后是同城物流的...</span><span style="padding-left:30px">2019-02-19</span></p></a></li>
              </ul>
            </div>

          </div>
          <div
            class="zixun_r"
            style="width: 670px;float: left;margin-left:40px">
            <div
              class="zixun_title"
              style="padding:60px 0 25px;margin-bottom:10px">
              <h5 style="color:rgb(196,69,76);font-size:18px;float: left;font-weight: bold;">仓储与配送
              </h5>
              <a
                href="/zixun/ccyps/index.jhtml"
                target="_blank"><span style="float:right"> 更多>></span></a>
            </div>
            <div
              class="zixun_content"
              style="position:relative">
              <img
                src="../../static/yuanqu/images/zixun.png"
                style="width:280px;height:170px;float:left"><a
                  href="/zixun/ccyps/205.jhtml"
                  target="_blank"
                ><span style=" position: absolute;bottom: -170px;left: 1px; background: rgba(0, 0, 0, 0.3);color: rgb(255, 255, 255);padding: 10px 14px;">瑞幸融资估值翻倍，背后是同城物流的...</span></a>
              <ul style="float:left">
                <li
                  v-for="(item,i) in 5"
                  :key="i"
                  style="padding-top:15px">
                  <a
                    href="/zixun/ccyps/205.jhtml"
                    target="_blank">
                <p><span style="padding-left:20px">瑞幸融资估值翻倍，背后是同城物流的...</span><span style="padding-left:30px">2019-02-19</span></p></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="getyouzhi"
          style="clear: both;    text-align: center;padding-top: 100px;font-size:28px;color:rgb(60,180,69);font-width:bloth;">
          <span>快速成为承运商获取优质货源</span>
          <a
            href="/regisiter"
            target="_blank"><buttom style="width: 180px;color: white;background: rgb(60,180,69);height: 50px;line-height: 50px;text-align: center;border-radius: 5px;    display: inline-block;margin-left:50px;cursor: pointer">我要入驻</buttom></a>
        </div>
    

      </div>

  
    </div>
    <Add
      :show = "isAdd"
      @close="noaddFn"
      :info="inputData"
      @fromAdd="fromAdd"
    />
  </div>
</template>

<script>
import Add from './add'
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
  components: {
    Add
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/basic.css' },
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/yuanqu/css/list_wlyq.css' },
      { rel: 'stylesheet', href: '/layer/dist/css/layui.css' }
      // { rel: 'stylesheet', href: '/css/list_wlyq.css' }
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
      pages: 0, //总页数
      currentPage: 1, //当前页
      newslist: [
        { list: '【2019-2-25】深圳物流业增加值10年增加4倍多' },
        { list: '【2019-2-25】深圳物流业增加值10年增加4倍多' },
        { list: '【2019-2-25】深圳物流业增加值10年增加4倍多' },
        { list: '【2019-2-25】深圳物流业增加值10年增加4倍多' },
        { list: '【2019-2-25】深圳物流业增加值10年增加4倍多' },
        { list: '【2019-2-25】深圳物流业增加值10年增加4倍多' },
        { list: '【2019-2-25】深圳物流业增加值10年增加4倍多' },
        { list: '【2019-2-25】深圳物流业增加值10年增加4倍多' },
        { list: '【2019-2-25】深圳物流业增加值10年增加4倍多' },
        { list: '【2019-2-25】深圳物流业增加值10年增加4倍多2' }
      ],
      ziZhuServerList: [
        {
          img: require('../../static/yuanqu/images/xiadan.png'),
          title: '快速下单',
          url: '/create/order'
        },
        {
          img: require('../../static/yuanqu/images/line.png'),
          title: '发布专线',
          url: '/create/line'
        },
        {
          img: require('../../static/yuanqu/images/cheyuan.png'),
          title: '发布车源',
          url: '/create/cheyuan'
        },
        {
          img: require('../../static/yuanqu/images/check.png'),
          title: '运单查询',
          url: '/ydcx'
        },

        {
          img: require('../../static/yuanqu/images/shixiao.png'),
          title: '时效查询',
          url: '/shixiao'
        },
        {
          img: require('../../static/yuanqu/images/wangdian.png'),
          title: '网点查询',
          url: '/wangdian'
        }
      ]
    }
  },
  async asyncData({ $axios, app, query, error }) {
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
    let parm2 = vo
    parm2.currentPage = 1
    parm2.pageSize = 5
    delete parm2.parkName
    let getRecommendList = await $axios.post(
      '/28-web/logisticsPark/main/recommend/list',
      parm2
    )
    let parm4 = vo
    parm4.pageSize = 10
    let getNewestList = await $axios.post(
      '/28-web//logisticsPark/newest/list',
      parm4
    )
    let parm3 = vo
    parm3.pageSize = 10
    let flag = 'excellentRate'
    let getHottList = await $axios.post('/28-web/logisticsPark/hot/list', parm3)
    let getExcellentList = await $axios.get(
      '/28-web/logisticsCompany/excellent?flag=' + flag
    )

    // /logisticsPark/hot/list
    // console.log(getExcellentList.data.data, 'getExcellentList')
    let vo1 = vo
    if (
      getExcellentList.data.status === 200 ||
      getHottList.data.status === 200 ||
      getRecommendList.data.status === 200 ||
      getNewestList.data.status === 200 ||
      getLogisticsPark.data.status === 200 ||
      recommendParkList.data.status === 200
    ) {
      return {
        getExcellentList:
          getExcellentList.data.status === 200
            ? getExcellentList.data.data
            : [],
        getHottList:
          getHottList.data.status === 200 ? getHottList.data.data : [],
        getRecommendList:
          getRecommendList.data.status === 200
            ? getRecommendList.data.data.list
            : [],
        getNewestList:
          getNewestList.data.status === 200 ? getNewestList.data.data.list : [],
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
    // console.log(roll_ul_h, 'roll_ul_h')
    let num = 1
    let newList_l = this.newslist.length
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
      // this.vo.parkName = this.vo.parkName ? this.vo.parkName : ''
      // console.log(this.vo.parkName, 'this.vo.parkName')
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
    }
  }
}
</script>

<style lang="scss">
.yuanqu {
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
  .youzhi_content {
    ul {
      .noclass0 {
        display: block !important;
        background: rgb(230, 80, 13);
      }
      .noclass1 {
        display: block !important;
        background: rgb(102, 105, 255) !important;
      }
      .noclass2 {
        display: block !important;
        background: rgb(60, 180, 109);
      }
      .NOclass {
        display: none;
      }
    }
  }
  .tuijian {
    .tuijian_content {
      li:last-of-type {
        padding-right: 0 !important;
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
          padding-right: 0px !important;
        }
      }
    }
  }
  .zizhu {
    .zizhu_content {
      li:nth-of-type(n + 4) {
        margin-top: 15px;
      }
      li:last-of-type {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
