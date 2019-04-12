<template>
  <div class="yuanqu">
    <div
      style="position:relative"
      class="header">
      <a
        href="/wuliu/detail?id=1"
        target="_blank">
        <img
          src="../../static/yuanqu/images/hearder.jpg"
          alt=""
          width="1900">
      </a>
      <div
        style="display: inline-block;font-size: 12px;height: 16px;line-height: 16px;overflow: hidden;margin-top: 7px;width: 1500px;position: absolute;bottom: 10px;color: #fff;left: 280px;"
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
              :title="item.title"
              target="_blank"><img
                style="width:20px;height:20px"
                src="../../static/yuanqu/images/lb.png"> <span style="padding:0 10px">最新公告 :</span><span style="padding-right:10px">{{ (item.releaseDate || '').split(' ')[0] }} </span><span >{{ item.title }} </span></a>

          </li>
        </ul>
      </div>
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
                    style="height:45px;width:270px;    margin-left: 25px;"
                    v-model="vo.parkName"
                    type="text"
                    class="list_input"
                    placeholder="请选择园区名称" >
                  <input
                    id="search_wlyq"
                    value=" 搜索 "
                    readonly=""
                    class="list_button"

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
            style=" height: 50px; line-height: 50px;padding-top: 20px;    margin-bottom: 40px;">
            <h5 style="color:#2577E3;font-size:20px;float: left;">推荐园区</h5>
            <a
              href="/wuliu"
              target="_blank"><span style="float:right"> 更多</span></a>
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
                style="float:left;    margin-right: 20px;background: #fff;">
                <a
                  :href="'/wuliu/detail?id=' + item.id"
                  target="_blank"
                  style="position:relative"><img
                    :src="item.parkSignPicture?item.parkSignPicture:'http://aflc.oss-cn-shenzhen.aliyuncs.com//tms/20181218/ryeGbJyAGatZj4DaSMFQeXDB4b5KPrdN.jpg'"
                    width="264"
                    height="264"
                    alt="">
                  <span
                    v-if="item.isInvestment==true"
                    style="position:absolute; top: -121px;;left:0px;background:linear-gradient(67deg,rgba(249,72,72,1),rgba(255,117,117,1));color:rgb(255,255,255);padding: 5px 20px;border:1px solid rgba(218,218,218,1);">招商中</span>
                </a>
                <!-- ourRatings -->
                <p style="width: 260px;text-align: left;padding-top:20px;color:#333333"><span
                  style="padding-left:10px"
                >{{ item.parkName.length>15?item.parkName.substring(0,15):item.parkName }}</span>

                </p>
                <p style="width: 260px;text-align: left;padding:10px 0;"><span
                style="padding:0 10px">推荐指数</span><img

                  v-for="(item,i) in item.ourRatings"
                  :key="i"
                  src="../../static/yuanqu/images/zhishu.png"
                  alt=""
                >

              </p></li>
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
              <a href=""><span style="float:right;margin-right:30px"> 更多</span></a>
            </div>
            <div
              v-if=" getNewestList.list ==[] "
              class="list_none"
              style="display: block">
              <span>暂时没有找到您要查询的信息，可以看看其他园区哦</span>
              <img
                style="margin: 20px 0 20px 150px;"
                src="../../static/images/none_pic.png">
            </div>
            <ul 
              style="margin-bottom: 10px;"
              v-else>
              <!-- :href="'/wuliu/detail?id=' + item.id"
                  target="_blank" -->
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
              style="background: #fff;    border: 1px solid rgba(227,238,252,1);">
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
                <!--<label class="layui-form-label">短输入框</label> -->
                <div
                  class="layui-input-inline"
                  style="margin: 30px 20px 10px 50px;float: left;">
                  <input
                    style="height: 38px;line-height: 1.3;line-height: 38px;border-width: 1px;border-style: solid;background-color: #fff;border-radius: 2px;padding-left: 10px;border-color: #D2D2D2;"
                    type="text"
                    maxlength="11"
                    placeholder="输入您的手机号"
                    v-model="inputData">
                  <span
                    style="width: 90px;height: 38px;line-height: 38px;text-align: center;background: #2577E3;display: inline-block;color:#fff;font-size:16px"
                    @click="openYuanqu">入驻</span>
                  <p
                    style="color:red;padding-top:5px"
                    v-if="isMobile">请输入正确手机号</p>
                  <p style="padding-top: 25px;color:#2577E3;padding-left: 20px;">入驻免费提供发布信息，园区宣传</p>
                  <!--<label class="layui-form-label">园区入驻1</label>-->
                </div>
                <div
                  style="display: inline-block;margin:20px;background:#FFFEE2;padding: 10px;"
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
        <div
          class="hot"
          style="clear: both;">
          <div
            class="hot_title"
            style="padding:30px 0 25px 0">
            <h5 style="color:rgb(196,69,76);font-size:18px;float: left;font-weight: bold;">热门园区</h5>
            <span style="padding-left:30px;height: 24px;line-height: 24px;"><i style="color:rgb(249,155,42)">1365</i>个园区，为您优选10个热门园区</span>
            <div
              style="border-top:none;    display: inline-block;    height: 30px;    line-height: 30px;margin-left: 150px"
              class=""
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
                    placeholder="请输入园区名称" > 
                    background: no-repeat url(../images/search.png) 10px 14px #2577e3;-->
                    <input
                      id="search_wlyq1"
                      value=" 搜索 "
                      readonly=""
                      class="list_button"
                      style="width:100px;background: #2577e3;color: #fff;text-align:center"
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
                :href="wuliu_hyzx_show.url"
                target="_blank"
              >
              <span style=" position: absolute;bottom: -170px;left: 1px; background: rgba(0, 0, 0, 0.3);color: rgb(255, 255, 255);padding: 10px 14px;">{{ wuliu_hyzx_show.title }}</span></a>
              <ul style="float:left">
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
                      style="padding-left:20px">{{ item.title }}</span><span style="padding-left:30px">{{ (item.releaseDate || '').split(' ')[0] }}</span></p></a></li>
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
                  :href="wuliu_ccyps_show.url"
                  target="_blank"
                ><span style=" position: absolute;bottom: -170px;left: 1px; background: rgba(0, 0, 0, 0.3);color: rgb(255, 255, 255);padding: 10px 14px;">{{ wuliu_ccyps_show.title }}</span></a>
              <ul style="float:left">
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
                      style="padding-left:20px">{{ item.title }}</span><span style="padding-left:30px">{{ (item.releaseDate || '').split(' ')[0] }}</span></p></a></li>
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
            target="_blank"><button style="width: 180px;color: white;background: rgb(60,180,69);height: 50px;line-height: 50px;text-align: center;border-radius: 5px;    display: inline-block;margin-left:50px;cursor: pointer">我要入驻</button></a>
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
      ]
    }
  },
  computed: {
    wuliu_newest() {
      return this.$store.state.news.wuliu_newest
    },
    wuliu_hyzx() {
      return this.$store.state.news.wuliu_hyzx.slice(1, 6)
    },
    wuliu_hyzx_show() {
      return this.$store.state.news.wuliu_hyzx[0] || {}
    },
    wuliu_ccyps() {
      return this.$store.state.news.wuliu_ccyps.slice(1, 6)
    },
    wuliu_ccyps_show() {
      return this.$store.state.news.wuliu_ccyps[0] || {}
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
            // console.log('el typemg', el.typeImg)
            return el
          })
        })
      }
    })
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
      '/28-web/logisticsPark/interested/list',
      parm
    )
    let parm1 = vo
    parm1.currentPage = 1
    parm1.pageSize = 14
    let recommendParkList = await $axios.post(
      '/28-web/logisticsPark/recommend/list',
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
.news_title {
  width: 17em;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.top_left_ul {
  li {
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
    a {
      color: #fff;
    }
    a:hover {
      span {
        color: red;
      }
    }
  }
  // &:hover {
  //   color: red !important;
  // }
}
.yuanqu {
  background: rgb(249, 249, 249);
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
        // margin-bottom: 80px;
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
