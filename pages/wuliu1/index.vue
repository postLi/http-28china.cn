<template>
  <div class="yuanqu">
    <div class="list_box">
      <div class="header">
        <a
          href="/wuliu/detail?id=1"
          target="_blank">
          <img
            src="../../static/yuanqu/images/hearder.png"
            alt="">
        </a>
      </div>
      <div
        class="list_nav"
        style="padding-top:20px"
      >
        <a href="/">物流首页</a>&gt;<a
          id="list_nav_a"
          href="">物流园区</a>
      </div>
      <div class="list_left">
        <div
          class=""
          style=" background-color: #fff;">

          <div
            class="select_con"
            style="float:left;width: 900px;">

            <dl>
              <dt><span style="padding-left:0">园区所在地&nbsp;：</span></dt>
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
            style=" height: 50px; line-height: 50px;">
            <h5 style="color:rgb(196,69,76);font-size:18px;float: left;">推荐园区</h5>
            <a 
              href="/wuliu"
              target="_blank"><span style="float:right"> 更多></span></a>
          </div>
          <div class="tuijian_content">
            <ul>
              <li
                v-for="(item,i) in getRecommendList"
                :key="i"
                style="float:left;padding-right:20px">
                <a
                  :href="'/wuliu/detail?id=' + item.id"
                  target="_blank"
                  style="position:relative"><img
                    src="http://aflc.oss-cn-shenzhen.aliyuncs.com//tms/20181218/ryeGbJyAGatZj4DaSMFQeXDB4b5KPrdN.jpg"
                    width="260"
                    height="165"
                    alt=""><span style="position:absolute;bottom:-74px;left:1px;background:rgba(0,0,0,0.1);color:rgb(255,255,255);    padding: 5px 0px;font-size:14px;width: 260px;text-align: center;">{{ item.parkName }}</span>
                  <span
                    v-if="item.isInvestment==true"
                    style="position:absolute;bottom:50px;left:1px;background:rgba(194,0,13,1);color:rgb(255,255,255);    padding: 10px 20px;">招商中</span>
                </a>
                <!-- ourRatings -->
                <p style="width: 260px;text-align: center;padding-top:10px"><span style="padding-right:10px">推荐指数</span><img
                  v-for="(item,i) in 1"
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
            <h5 style="color:rgb(255,255,255);font-size:18px;background:rgb(0,136,238);width:135px;padding:10px">最新动态</h5>
            <!--<a href=""><span style="float:right"> 更多></span></a>-->
          </div>


        </div>
        <div>
          <div
            class="ruzhu"
            style="width: 635px;float: left">
            <div
              class="ruzhu_title"
              style="padding:30px 0 25px">
              <h5 style="color:rgb(196,69,76);font-size:18px;float: left;">新入驻园区

              </h5>
              <a href=""><span style="float:right"> 更多></span></a>
            </div>
            <ul>
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
                    alt=""><span style="padding: 0px 40px 0 30px;width: 100px;display: inline-block;">{{ item. parkName }}
                  </span><span
              style="width: 320px;display: inline-block;"><i style="padding-right:10px">地址:</i>{{ item.parkAddress.length > 13?item.parkAddress+'...':item.parkAddress }}</span></a></li>
            </ul>
          </div>
          <div
            class="zizhu"
            style="width: 670px;float: left;margin-left:40px">
            <div
              class="zizhu_title"
              style="padding:30px 0 25px">
              <h5 style="color:rgb(196,69,76);font-size:18px">自助服务
              </h5>
              <!-- <a href=""><span style="float:right"> 更多></span></a> -->
            </div>
            <div class="zizhu_content">
              <div>
                <ul>
                  <li
                  style="float:left;padding-right:20px;padding-top:10px"><a
                    href=""
                    style="width: 200px;height: 60px;background: rgb(51,153,255);display: inline-block;color: white;text-align: center;line-height: 60px;font-size: 18px;"><img
                      src="../../static/yuanqu/images/xiadan.png"
                      alt=""
                      width="40"
                      style="padding-right:20px"
                  >快速下单</a></li>
                  <li
                  style="float:left;padding-right:20px;padding-top:10px"><a
                    href="/create/line"
                    style="width: 200px;height: 60px;background: rgb(51,153,255);display: inline-block;color: white;text-align: center;line-height: 60px;font-size: 18px;"><img
                      src="../../static/yuanqu/images/line.png"
                      alt=""
                      width="40"
                      style="padding-right:20px"
                  >发布专线</a></li>
                  <li
                  style="float:left;padding-right:20px;padding-top:10px"><a
                    href="/create/cheyuan"
                    style="width: 200px;height: 60px;background: rgb(51,153,255);display: inline-block;color: white;text-align: center;line-height: 60px;font-size: 18px;"><img
                      src="../../static/yuanqu/images/cheyuan.png"
                      alt=""
                      width="40"
                      style="padding-right:20px"
                  >发布车源</a></li>
                  <li
                  style="float:left;padding-right:20px;padding-top:10px"><a
                    href=""
                    style="width: 200px;height: 60px;background: rgb(51,153,255);display: inline-block;color: white;text-align: center;line-height: 60px;font-size: 18px;"><img
                      src="../../static/yuanqu/images/check.png"
                      alt=""
                      width="40"
                      style="padding-right:20px"
                  >运单查询</a></li>
                  <li
                  style="float:left;padding-right:20px;padding-top:10px"><a
                    href=""
                    style="width: 200px;height: 60px;background: rgb(51,153,255);display: inline-block;color: white;text-align: center;line-height: 60px;font-size: 18px;"><img
                      src="../../static/yuanqu/images/shixiao.png"
                      alt=""
                      width="40"
                      style="padding-right:20px"
                  >时效查询</a></li>
                  <li
                  style="float:left;padding-right:20px;padding-top:10px;margin-bottom:10px"><a
                    href=""
                    style="width: 200px;height: 60px;background: rgb(51,153,255);display: inline-block;color: white;text-align: center;line-height: 60px;font-size: 18px;"><img
                      src="../../static/yuanqu/images/wangdian.png"
                      alt=""
                      width="40"
                      style="padding-right:20px"
                  >网点查询</a></li>
                </ul>
              </div>
              <div
                class="zizhu_bot"
                style="border:1px solid #ccc;width:660px;height:150px;clear: both;margin-top:20px">
                <div>
                  <!-- <label class="layui-form-label">短输入框</label> -->
                  <div
                    class="layui-input-inline "
                    style="margin: 30px 20px 10px 20px;    float: left;">
                    <input
                      style=" height: 38px;line-height: 1.3;line-height: 38px;border-width: 1px;border-style: solid;background-color: #fff;border-radius: 2px;padding-left: 10px;border-color: #D2D2D2;"
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
                    style="display: inline-block;margin:20px;background:rgb(242,242,242)"
                    class="zizhu_bot_r">
                    <img
                      src="../../static/gongsi/images/u1075.png"
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
            <h5 style="color:rgb(196,69,76);font-size:18px;float: left;">热门园区</h5>
            <span style="padding-left:30px;"><i style="color:rgb(249,155,42)">1365</i>个园区，为您优选10个热门园区</span>
            <a 
              href="/wuliu"
              target="_blank"><span style="float:right"> 更多></span></a>
          </div>
          <div
            class="select_con"
            style="width: 900px;    width: 900px;border: 1px solid #eee;border-left: 0;border-right: 0;border-bottom: none;padding: 15px 0;margin: 0;">

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
                  <!-- <span>&nbsp;园区名称&nbsp;：</span>
                  <input
                    v-model="vo.parkName"
                    type="text"
                    class="list_input"
                    placeholder="请输入园区名称" > -->
                  <input
                    id="search_wlyq"
                    value=" 搜索园区 "
                    readonly=""
                    class="list_button"
                    style="width:100px"
                    @click="search1()">
                </form>
              </dd>

            </dl>

          </div>

        </div>
        <div class=" list_wlyq">
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
            style="margin-right: 0px;width:260px;height:360px;margin-top: 0px;">
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
              <li class="wlzx_list_02"><span>{{ item.parkName }}</span></li>
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
                class="wlzx_list_04"><span>{{ item.parkAddress }}</span></li>
              <li class="wlzx_list_05">
                <img 
                  style="width:20px;height:20"
                  src="../../static/yuanqu/images/weibo.png" 
                  alt="">
              <span style="vertical-align:middle;pading-left:5px">{{ item.browseNumber }}</span></li>
            </a>
          </ul>

        </div>
        <!--<div class=" list_wlyq">-->
        <!--<div-->
        <!--v-if="getGateWayList.length === 0"-->
        <!--class="list_none"-->
        <!--style="display: block">-->
        <!--<span>暂时没有找到您要查询的信息，可以看看其他园区哦</span>-->
        <!--<img src="../../static/images/none_pic.png">-->
        <!--</div>-->

        <!--<ul-->
        <!--v-for="(item,index) in getGateWayList"-->
        <!--:key="index"-->
        <!--class="wlzx_list">-->
        <!--<a-->
        <!--:href="'/wuliu/detail?id=' + item.id"-->
        <!--target="_blank">-->
        <!--<li class="wlzx_list_01"><img-->
        <!--:src="item.parkSignPicture?item.parkSignPicture:'../../static/images/list_wlzx/wlyq_pic.png'"-->
        <!--class="scrollLoading"-->
        <!--width="268"-->
        <!--height="268"></li>-->
        <!--<li class="wlzx_list_02"><span>{{ item.parkName }}</span></li>-->
        <!--<li class="wlzx_list_03"><font>{{ item.transportNumber?item.transportNumber: 0 }}</font><i>条</i><span>优质专线</span></li>-->
        <!--<li class="wlzx_list_04"><span>{{ item.parkAddress }}</span></li>-->
        <!--<li class="wlzx_list_05"><span>{{ item.browseNumber }}</span></li>-->
        <!--</a>-->
        <!--</ul>-->

        <!--</div>-->
        <img 
          style="margin-top:20px"
          src="../../static/gongsi/images/listbg.png">
        <div
          class="youzhi"
          style="clear: both;">
          <div
            class="youzhi_title"
            style="padding:30px 0 25px 0">
            <h5 style="color:rgb(196,69,76);font-size:18px;float: left;">本月优质承运</h5>
            <span style="padding-left:30px;">货主说好才是真的好</span>
            <a 
              href="/gongsi"
              target="_blank"><span style="float:right"> 所有物流企业></span></a>
          </div>
          <div class="youzhi_content">
            <ul>
              <li
                v-for="(item,i) in getExcellentList"
                :key="i"
                style="float:left;padding-right:20px">
                <a
                  :href="'/gongsi?id=' + item.id"
                  target="_blank"
                  style="position:relative"><img
                    src="http://aflc.oss-cn-shenzhen.aliyuncs.com//tms/20181218/ryeGbJyAGatZj4DaSMFQeXDB4b5KPrdN.jpg"
                    width="260"
                    height="165"
                    alt="">
                  <!-- <span style="display: inline-block;width: 255px;position:absolute;bottom:-74px;left:1px;background:rgba(0,0,0,0.5);color:rgb(255,255,255);padding: 10px 0px;text-align: center;">{{ item.companyName }}</span> -->
                  <span 
                    :class="'noclass'+i"
                    class="NOclass"
                    style="position:absolute;bottom:40px;left:5px;color:rgb(255,255,255);    padding: 5px 20px;border-radius:5px">NO{{ i+1 }}</span></a>
                <p style="width: 260px;padding-top:10px;color: rgb(51,153,255);font-size:16px">{{ item.companyName }}</p>
                <p style="width: 260px;padding-top:10px"><span style="padding-right:10px">推荐指数{{ i+1 }}</span><img
                  v-for="(item,i) in 4"
                  :key="i"
                  src="../../static/gongsi/images/danbao.png"
                  alt=""
                >

                </p>
                <p style="width: 260px;padding-top:10px">好评率{{ item.excellentRate }}%

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
              style="padding:30px 0 25px;margin-bottom:10px">
              <h5 style="color:rgb(196,69,76);font-size:18px;float: left;">行业资讯
              </h5>
              <a 
                href="/zixun"
                target="_blank"><span style="float:right"> 更多>></span></a>
            </div>
            <div
              class="zixun_content"
              style="position:relative">
              <a
                href="/zixun"
                target="_blank"
              > <img
                src="../../static/gongsi/images/u1075.png"
                style="width:280px;height:170px;float:left"><span style=" position: absolute;bottom: -170px;left: 1px; background: rgba(0, 0, 0, 0.3);color: rgb(255, 255, 255);padding: 10px 14px;">瑞幸融资估值翻倍，背后是同城物流的...</span></a>
              <ul style="float:left">
                <li
                  v-for="(item,i) in 5"
                  :key="i"
                  style="padding-top:15px"><p><span style="padding-left:20px">瑞幸融资估值翻倍，背后是同城物流的...</span><span style="padding-left:30px">2019-02-19</span></p></li>
              </ul>
            </div>

          </div>
          <div
            class="zixun_r"
            style="width: 670px;float: left;margin-left:40px">
            <div
              class="zixun_title"
              style="padding:30px 0 25px;margin-bottom:10px">
              <h5 style="color:rgb(196,69,76);font-size:18px;    float: left;">仓储与配送
              </h5>
              <a href=""><span style="float:right"> 更多>></span></a>
            </div>
            <div
              class="zixun_content"
              style="position:relative">
              <a
                href=""
              > <img
                src="../../static/gongsi/images/u1075.png"
                style="width:280px;height:170px;float:left"><span style=" position: absolute;bottom: -170px;left: 1px; background: rgba(0, 0, 0, 0.3);color: rgb(255, 255, 255);padding: 10px 14px;">瑞幸融资估值翻倍，背后是同城物流的...</span></a>
              <ul style="float:left">
                <li
                  v-for="(item,i) in 5"
                  :key="i"
                  style="padding-top:15px"><p><span style="padding-left:20px">瑞幸融资估值翻倍，背后是同城物流的...</span><span style="padding-left:30px">2019-02-19</span></p></li>
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
        <!--&lt;!&ndash;分页&ndash;&gt;-->
        <!--<div-->
        <!--class="box"-->
        <!--style="float: right;margin-right: 170px;">-->
        <!--<div-->
        <!--id="pagination1"-->
        <!--class="page fl"/>-->
        <!--<div class="info fl">-->
        <!--&lt;!&ndash;<p>当前页数：<span id="current1">1</span></p>&ndash;&gt;-->
        <!--</div>-->
        <!--</div>-->
        <!--&lt;!&ndash;分页&ndash;&gt;-->

        <!--<div class="bottom_wlyq" >-->
        <!--<div class="bottom_wlyq_bt">您可能对这些感兴趣</div>-->
        <!--<div class="bottom_wlyq_nr">-->
        <!--<div-->
        <!--v-for="(item,index) in getLogisticsPark"-->
        <!--:key="index"-->
        <!--class="bottom_wlyq_item"><a-->
        <!--:href="'/wuliu/detail?id=' + item.id"-->
        <!--target="_blank">{{ item.parkName }}</a></div>-->
        <!--</div>-->
        <!--</div>-->

      </div>

      <!-- <div class="list_right">
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
      </div> -->
    </div>
    <Add
      :show = "isAdd"
      @close="noaddFn"/>
  </div>
</template>

<script>
import $axios from 'axios'
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
      { src: './js/city-picker.data.js' },
      { src: './js/city-picker.js' },
      { src: '/js/AFLC_API.js' },
      { src: './js/jquery.pagination.min.js' }
    ]
  },
  data() {
    return {
      isAdd: false,
      inputData: '',
      isMobile: false,
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
    // LLl
    let parm2 = vo
    parm2.currentPage = 1
    parm2.pageSize = 5
    delete parm2.parkName
    let getRecommendList = await $axios.post(
      '/28-web/logisticsPark/main/recommend/list',
      parm2
    )
    let getNewestList = await $axios.post(
      '/28-web//logisticsPark/newest/list',
      parm2
    )
    let parm3 = vo
    parm3.pageSize = 10
    let flag = 'excellentRate'
    let getHottList = await $axios.post('/28-web/logisticsPark/hot/list', parm3)
    let getExcellentList = await $axios.get(
      '/28-web/logisticsCompany/excellent?flag=' + flag
    )
    // /logisticsPark/hot/list
    console.log(getExcellentList.data.data, 'getExcellentList')

    return {
      getExcellentList:
        getExcellentList.data.status === 200 ? getExcellentList.data.data : [],
      getHottList: getHottList.data.status === 200 ? getHottList.data.data : [],
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
    addFn() {
      this.isAdd = true
    },
    noaddFn() {
      this.isAdd = false
    },
    openYuanqu() {
      if (this.inputData) {
        var validReg = window.AFLC_VALID
        console.log(validReg)
        let aurl = ''
        if (process.server) {
          aurl = 'http://localhost:3000'
        }
        if (validReg.MOBILE.test(this.inputData)) {
          this.addFn()
          alert(this.inputData)
          // $axios
          //   .post(aurl + '/api/28-web/helpFind/range/create', this.form)
          //   .then(res => {
          //     // console.log(res.data, 'resresres')
          //     if (res.data.status === 200) {
          //       layer.msg('提交成功，客服稍后将会与您联系')
          //     } else {
          //       layer.msg(
          //         res.data.errorInfo ? res.data.errorInfo : res.data.text
          //       )
          //     }
          //   })
        } else {
          this.isMobile = true
          this.inputData = ''
        }
      }
      // inputData
    },
    async search1() {
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
        }&locationArea=${this.vo.locationArea}&parkName=${this.vo.parkName}`
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
}
</style>
