<template>
  <div>
    <div class="bj_blue">
      <div class="hy_wrap clearfix">
        <div class="col1">
          <div class="p_category_menu">
            <div class="p_hz_title">
              <h2>货源</h2>
            </div>
            <h4 class="category_menu_title">热门城市</h4>
            <div 
              class="category_menu_list"
              v-if="hotCityData!== undefined && hotCityData!== null &&hotCityData.length>0">
              <span 
                class="item"
                v-for="(item, index) in hotCityData" 
                :key="index">
                <a
                  target="_blank"
                  :href="'/zhuanxian/list?startp=' + item.provinceName + '&startc=' + item.cityName">{{ item.cityShortName }}</a></span>  
            </div> 
            <div
              class="error" 
              v-else>没有数据</div>        
          </div>
          <!--导航 -->
        </div>
        <div class="col2">
          <div 
            id="ad"
            class="ad">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div 
                  class="swiper-slide" 
                  :key="index"
                  v-for="(banner, index) in banners">
                  <a 
                    target="_blank"
                    href="/create/order">
                    <img :src="banner">
                  </a>
                </div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination"/>
              <!-- Add Arrows -->
              <div class="swiper-button-next"/>
              <div class="swiper-button-prev"/>
            </div>
            <!-- 幻灯片 -->
          </div>
          <div class="type clearfix">
            <div class="type_box">
              <a 
                target="_blank"
                :href="'/huoyuan?startProvince=' +currentProvince + '&startCity=' +currentArea+'&orderClass=AF0490702'"
              ><img src="../../static/images/huizong/hy_ad1.jpg"></a>
            </div>
            <div class="type_box">
              <a
                target="_blank"
                :href="'/huoyuan?startProvince=' +currentProvince + '&startCity=' +currentArea"><img src="../../static/images/huizong/hy_ad2.jpg"></a>
            </div>
            <div class="type_box">
              <a 
                target="_blank"
                :href="'/huoyuan?startProvince=' +currentProvince + '&startCity=' +currentArea+'&userAuth=AF0010403'"><img src="../../static/images/huizong/hy_ad3.jpg"></a></div>
          </div>
        </div>
        <div class="col3">
          <div class="p_user_login">
            <div class="user_pic"><img src="../../static/images/index/19stx.png"></div>
            <div class="user_show">
              <p class="user_txt">Hi~欢迎来到28快运！</p>
              <p class="user_profit">
                <a 
                  class="login"
                  href="/login">登录</a>
                <a href="/regisiter">注册</a>
              </p>
            </div>
          </div>
          <!-- 用户登录 -->
          <div class="hongbao_ad">
            <a href="#"><img src="../../static/images/huizong/hy_hongbao_ad.jpg"></a>
          </div>
        </div>
      </div>
    </div>
    <!--货源-->
    <div 
      id="owner_swiper"
      class="owner">
      <div class="p_title clearfix">
        <div class="title_line_box fl"><span/></div>
        <h3 class="title_txt fl">优质货主</h3>
        <div class="title_line_box fl"><span/></div>
      </div>
      <div 
        class="swiper-container" 
        v-if="shipperData.list.length>0">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="p_owner_list clearfix">
              <li                
                v-for="(item, index) in shipperData.list"       
                v-if="index<5"
                :key="index" >
                <a 
                  target="_blank"
                  :href="'/member/' + item.companyId">
                  <div class="owner_pic"><img :src="item.companyFacadeFile"></div>
                  <div class="owner_info">
                    <p 
                      class="owner_name"               
                      :title="item.companyName">{{ item.companyName }}暂无名字
                     
                    </p>
                    <p class="owner_total">
                      <span class="p_r20">累计成交<span class="owner_total_num">{{ item.orderNumber }}</span></span>
                      收到好评<span class="owner_total_num">{{ item.evaGoodCount }}</span>
                    </p>
                    <p class="owner_num">
                      今日发货{{ item.todayOrderCount }}次
                      <span class="owner_num_liveness fr"><i class="iconfont iconhuo"/>{{ item.liveness }}</span>
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul class="p_owner_list clearfix">
              <li                
                v-for="(item, index) in shipperData.list"       
                v-if="index>4"
                :key="index" >
                <a 
                  target="_blank"
                  :href="'/member/' + item.companyId">
                  <div class="owner_pic"><img :src="item.companyFacadeFile"></div>
                  <div class="owner_info">
                    <p 
                      class="owner_name"               
                      :title="item.companyName">{{ item.companyName }}暂无名字
                     
                    </p>
                    <p class="owner_total">
                      <span class="p_r20">累计成交<span class="owner_total_num">{{ item.orderNumber }}</span></span>
                      收到好评<span class="owner_total_num">{{ item.evaGoodCount }}</span>
                    </p>
                    <p class="owner_num">
                      今日发货{{ item.todayOrderCount }}次
                      <span class="owner_num_liveness fr"><i class="iconfont iconhuo"/>{{ item.liveness }}</span>
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="swiper-pagination"/>
      </div>
      <div 
        class="error" 
        v-else>
        没有数据
      </div>
    </div>
    <!-- 优质货主 -->
    <div class="our clearfix">
      <div class="p_title clearfix">
        <div class="title_line_box fl"><span/></div>
        <h3 class="title_txt fl">选择我们，您可以</h3>
        <div class="title_line_box fl"><span/></div>
      </div>
      <div class="col1 clearfix">
        <div class="our_tool our_tool_older">
          <div class="pic"><img src="../../static/images/huizong/our_01.jpg"></div>
          <ul class="link link2 clearfix">
            <li>
              <span><i class="iconfont iconxiadan"/></span>
              <span>
                <a 
                  class="btn_order" 
                  target="_blank"
                  href="/create/order">在线下单</a>
              </span>
            </li>
            <li>
              <span><i class="iconfont iconfabu"/></span>
              <span><a 
                class="btn_send"
                target="_blank"
                href="/create/huoyuan">发布货源</a></span>
            </li>           
          </ul>
          <div class="num">今日已有<b>2368</b>人在线下单获得优惠</div>
        </div>
        <div class="our_tool">
          <div class="pic"><img src="../../static/images/huizong/our_02.jpg"></div>
          <ul class="link clearfix">
            <li>
              <span><i class="iconfont iconchaxunsousuo"/></span>
              <span>
                <a 
                  target="_blank"
                  href="/ydcx">运单查询</a>
              </span>
            </li>
            <li>
              <span><i class="iconfont iconlianxikefu"/></span>
              <span>
                <a
                  target="_blank"
                  href="http://wpa.qq.com/msgrd?v=3&uin=1075930808&site=qq&menu=yes">
                  客服服务
                  <img 
                    style=" display: none"
                    border="0" 
                    src="http://wpa.qq.com/pa?p=2:2708444167:51" 
                    alt="点击这里给我发消息"
                    title="点击这里给我发消息">
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div class="our_tool">
          <div class="pic"><img src="../../static/images/huizong/our_03.jpg"></div>
          <ul class="link clearfix">
            <li>
              <span><i class="iconfont iconicon_siji"/></span>
              <span>
                <a 
                  target="_blank"
                  href="/regisiter">司机加入</a>
              </span>
            </li>
            <li>
              <span><i class="iconfont iconjiaru"/></span>
              <span>
                <a
                  target="_blank"
                  href="/regisiter">专线加盟</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col2">
        <div class="our_ad">
          <a href="#"><img src="../../static/images/huizong/our_ad.jpg"></a>
        </div>
        <a 
          class="btn_hy_link" 
          target="_blank"
          :href="'/huoyuan?startProvince=' +currentProvince + '&startCity=' +currentArea">进入货源大厅</a>   
          <!-- 新增货源 -->
      </div>
    </div>
    <!-- 选择我们 -->
    <div class="p_hy_info clearfix">
      <div class="hy_info_col1 fl clearfix">
        <div class="hy_info_tit fl">
          <h3>最新货源信息</h3>
        </div>
        <div class="hy_info_user_box fl">
          <ul 
            class="hy_info_user_list"
            v-if="newListData!== undefined && newListData!== null &&newListData.length>0">
            <li
              v-for="(item, index) in newListData" 
              :key="index">
              <div class="hy_info_user_info">
                <span class="hy_info_user_info_user">用户 {{ item.creater }} </span>
                <span class="hy_info_user_info_time">{{ item.time }}</span>
              </div>
              <div class="hy_info_user_text ">
                <span class="p_l5">发布</span>
                <span class="info_user_item">{{ item.startCity }}→{{ item.endCity }}</span>
                <span class="info_user_item">{{ item.goodsTypeName }}</span>
                <span class="info_user_item">{{ item.goodsNum }}件</span>
                <span class="info_user_item">{{ item.goodsWeight }}公斤</span>
                <span class="info_user_item">体积{{ item.goodsVolume }}方 </span>                     
              </div>
              <div class="hy_info_user_link">                
                <a 
                  target="_blank"
                  :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId">查看货源</a>
              </div>
            </li>
          </ul>
          <div 
            class="error"
            v-else>没有数据</div>
        </div>
      </div>
      <div class="hy_info_col2 fl clearfix">
        <div class="hy_info_num">
          <ul class="hy_info_list clearfix">
            <li>
              <span>
                <i class="iconfont iconhuowudui"/>
                <a
                  target="_blank" 
                  href="/huoyuan">当前货物</a>
              </span>
              <span class="hy_info_list_num">{{ statisticsData.goodsCount }}</span>
            </li>
            <li>
              <span>
                <i class="iconfont iconjiantou_zuoyouqiehuan"/>
                <a
                  target="_blank" 
                  href="/zhuanxian/list">物流专线</a>
              </span>
              <span class="hy_info_list_num">{{ statisticsData.transportRangeCount }}</span>
            </li>
            <li>
              <span>
                <i class="iconfont iconhuoche"/>
                <a
                  target="_blank" 
                  href="/cheyuan">当前车源</a>
              </span>
              <span class="hy_info_list_num">{{ statisticsData.carInfoCount }}</span>
            </li>
          </ul>
          <ul class="hy_info_text_list">
            <li><i class="iconfont iconshang--jiantou"/>今日新增:</li>
            <li>
              <a
                target="_blank" 
                href="/huoyuan">
                货源<span class="hy_info_text_num">{{ statisticsData.toDayGoodsCount }}</span>
              </a>
            </li>
            <li>
              <a
                target="_blank" 
                href="/zhuanxian/list">
                专线<span class="hy_info_text_num">{{ statisticsData.toDayTransportRangeCount }}</span>
              </a>
            </li>
            <li>
              <a
                target="_blank" 
                href="/cheyuan">
                车源<span class="hy_info_text_num">{{ statisticsData.toDayCarInfoCount }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 最新货源 -->
    <div class="p_hy_groom clearfix">
      <div class="hd clearfix">
        <h3 class="gr_title">货源推荐</h3>
        <div class="gr_txt"><span>{{ statisticsData.goodsCount }}条</span>专线，为您优选<span>12条</span>热门优质专线</div>
        <div class="gr_sch">
          <div 
            id="huoyuan_from1"
            class="gr_sch_city">
            <input 
              type="text" 
              placeholder="请输入出发地" 
              id="huoyuan_pageinp1">
          </div>
          <div class="gr_sch_icon"><i class="iconfont iconjiantou_xiangyou_o"/></div>
          <div 
            id="huoyuan_from2"
            class="gr_sch_city">
            <input 
              type="text" 
              placeholder="请输入到达地" 
              id="huoyuan_pageinp2">
          </div>
          <div class="gr_sch_btn"><a 
          @click="groomSearch()">搜索</a></div>
        </div>
        <a 
          class="gr_link"
          target="_blank"
          :href="'/huoyuan?startProvince=' +currentProvince + '&startCity=' +currentArea">
        货源大厅<i class="iconfont iconjiantou_xiangyouliangci_o"/></a>
      </div>
      <div class="bd">
        <div class="col1">
          <div class="p_type_nav">
            <a 
              target="_blank"
              :href="'/huoyuan?startProvince=' +currentProvince + '&startCity=' +currentArea">最新货源</a>
            <a 
              target="_blank"
              :href="'/huoyuan?startProvince=' +currentProvince + '&startCity=' +currentArea+'&orderClass=AF0490702'">长期稳定货源</a>
          </div>
          <ul 
            class="p_hy_list clearfix"
            v-if="recommendData.list.length>0">
            <li               
              v-for="(item, index) in recommendData.list" 
              :key="index">
              <a 
                target="_blank"
                :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId">
                <div class="hd_box">
                  <span class="p_l5">物流商:</span>
                  <span>{{ item.wlName }}暂无名字</span>
                  <span><i class="iconfont iconrenzheng"/></span>
                </div>
                <div class="md_box">
                  <div class="city">{{ item.startCity }}</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">{{ item.endCity }}</div>
                </div>
     
                <div class="type_box">
                  <span class="p_l5">规格:</span>
                  <span class="type_box_item type_box_num">{{ item.goodsNum }}件</span>
                  <span class="type_box_item">{{ item.goodsWeight }}公斤</span>
                  <span class="type_box_item">{{ item.goodsVolume }}m³</span>
                  <!-- <span class="time">{{ item.time }}</span> -->
                </div>
                <div class="list_goods">
                  <span class="p_l5">货物:</span>
                  <span>{{ item.goodsTypeName }}</span>
                  <span class="list_goods_time fr">{{ item.time }}</span>
                </div>
              </a>
            </li>
          </ul>
          <div 
            class="error" 
            v-else>
            没有数据
          </div>
        </div>
        <div class="col2">
          <div class="subscribe">
            <h4 class="tit">订阅优质支援</h4>
            <div class="city_box clearfix">
              <input 
                type="text" 
                placeholder="请输入出发地" 
                id="sb_pageinp1">
              <i class="iconfont iconjiantou32"/>
            </div>
            <div class="city_box clearfix">
              <input 
                type="text" 
                placeholder="请输入到达地" 
                id="sb_pageinp2">
              <i class="iconfont iconjiantou32"/>
            </div>
            <div class="subscribe_txt">
              订阅货源，第一时间获得系统消息通知
              已有<span class="subscribe_txt_num">18965</span>人订阅后达成交易
            </div>
            <a class="subscribe_remind_btn">上新提醒我</a>
          </div>
          <!-- <div class="weixin">
            <div class="pic"><img src="../../static/images/huizong/weixin.png"></div>
            下载
            <a
              target="_blank" 
              href="http://h5.28tms.com/">【28快运APP】</a>，您可查看更多货源，并可实时接收28快运为您推荐的精品货源提醒
          </div> -->
          <div class="release_car">
            <div class="release_car_num">
              <span class="release_car_item">5</span>
              <span class="release_car_item">3</span>
              <span class="release_car_item">8</span>
              <span class="release_car_item">8</span>
              <span class="release_car_item">2</span>
            </div>
            <div class="release_car_tit">平台已撮合货源达成交易</div>
            <a class="release_car_btn">发布求车信息</a>
            <div class="release_car_txt">
              快速发布货源，让承运商主动来找我<br>
              自主挑选合适承运商
            </div>
          </div>
   
        </div>
      </div>
    </div>
    <!-- 货源推荐 -->
    <div class="p_release">
      <div class="release_box">
        <div class="release_box_txt fl">
          <h3 class="release_box_txt_tit">让承运商主动来找我</h3>
          快速发布货源，让承运商主动联系我，自主挑选合适承运商
        </div>
        <a
          class="btn_release fr" 
          target="_blank"
          href="/create/huoyuan"
        >发布车源信息</a>
      </div>
      <div class="release_total">
        <span class="release_total_txt">平台已撮合</span>
        <span class="release_total_num">5</span>
        <span class="release_total_num">3</span>
        <span class="release_total_num">8</span>
        <span class="release_total_num">8</span>
        <span class="release_total_num">2</span>
        <span class="release_total_txt">货源达成交易</span>
      </div>
    </div>
    <!-- 发布信息 -->
    <div class="bj_2">
      <div class="rank_people clearfix">
        <div class="p_title_box">
          <h3 class="title">货量达人榜</h3>
          <span class="title_txt">近3个月发布货源最多的货主</span>
        </div>
        <div class="col1">
          <div 
            class="clearfix" 
            v-if="darenData!== undefined && darenData!== null &&darenData.length>0">
            <div 
              class="rank_box"
              v-for="(item, index) in darenData" 
              :key="index">
              <ul class="ranking_info clearfix">

                <li 
                  class="rank_num no1"
                  v-if="index === 0">NO.I</li>
                <li 
                  class="rank_num no2"
                  v-else-if="index === 1">NO.2</li>
                <li
                  class="rank_num no3"
                  v-else-if="index === 2">NO.3</li>                                   
                
                <li class="rank_name">{{ item.companyName }}</li>
                <li class="rank_sure"><span class="span1">证</span><span class="span2">实名认证</span></li>
              </ul>
              <div class="bd">
                <div class="col1">
                  <img 
                    v-if="index === 0"
                    src="../../static/images/huizong/daren_01.png" >
                  <img 
                    v-else-if="index === 1"
                    src="../../static/images/huizong/daren_02.png" >
                  <img 
                    v-else-if="index === 2"
                    src="../../static/images/huizong/daren_03.png" >
                </div>
                <div class="col2">
                  <p>最近三个月发布货源<b>{{ item.lastThreeMonthSupplyNum }}</b>次</p>
                  <p>累计成交<b>{{ item.orderNumber }}</b>笔订单，收到好评<b>{{ item.evaGoodCount }}</b>次</p>
                  <p>使用现金券省<b class="money">{{ item.usedCoupon }}</b>元</p>
                  <p class="rank_prize"><span class="rank_prize_tit">奖：</span>平台额外奖励{{ item.evaGoodCount }}元现金</p>
                </div>
              </div>
            </div>
          </div>
          <div 
            class="error"
            v-else>
            没有数据
          </div>
        </div>
        <div class="col2">
          <a
            target="_blank"
            href="/create/huoyuan">
            <img src="../../static/images/huizong/rank_ad.jpg">
          </a>
        </div>
      </div>
    </div>
    <!-- 货量达人榜 -->
    <div class="bj_2">
      <div class="p_company_owner">
        <div class="p_title_box">
          <h3 class="title">本月优质企业货主</h3>
          <span class="title_txt">稳定货源，好评率高</span>
        </div>  
        <ul 
          class="p_co_owner_list clearfix"
          v-if="monthShipperData.length>0">
          <li 
            v-for="(item, index) in monthShipperData.list" 
            :key="index">
            <a 
              target="_blank"
              :href="'/member/' + item.companyId"
            >
              <div 
                class="rank_num no1" 
                v-if="index === 0">
                NO.1
              </div>
              <div 
                class="rank_num no2" 
                v-else-if="index === 1">
                NO.2
              </div>
              <div 
                class="rank_num no3" 
                v-else-if="index === 2">
                NO.3
              </div>
              <div class="rank_pic"><img :src="item.companyFacadeFile" ></div>
              <div class="rank_tit">
                <span 
                  class="rank_tit_name" 
                  :title="item.companyName ">{{ item.companyName }} </span>
                <span class="rank_tit_icon_tuijian">推</span>
              </div>
              <div class="rank_groom"><span class="name">推荐指数</span><span class="star"/></div>
              <div class="rank_praise">好评率{{ item.recommendedNumber }}%</div>
            </a>
          </li>
        </ul>  
        <div
          class="error"
          v-else>
          没有数据
        </div>  
      </div>
    </div>
    <!-- 本月优质企业货主 -->
    <div class="bj_2">
      <div class="p_our_virtue">
        <h3 class="p_title">我们的优势</h3>
        <ul class="our_virtue_list clearfix">
          <li>
            <div class="our_virtue_pic"><img src="../../static/images/huizong/u295.png"></div>
            <h4 class="our_virtue_tit color_orange">海量货源</h4>
            <div class="our_virtue_content">专业的项目客户团队，为成员引进更多的线上货源机会</div>
          </li>
          <li>
            <div class="our_virtue_pic"><img src="../../static/images/huizong/u299.png"></div>
            <h4 class="our_virtue_tit color_green">安全保障</h4>
            <div class="our_virtue_content">流程标准化，降低货损率；完善的理赔保障体系，小额快赔的贴心设计，为成员的每一票货物保驾护航</div>
          
          </li>
          <li>
            <div class="our_virtue_pic"><img src="../../static/images/huizong/u301.png"></div>
            <h4 class="our_virtue_tit color_blue">降本增效</h4>
            <div class="our_virtue_content">金融、保险等丰富的产品选择，带来集采价产品服务，为成员增效，助力事业腾飞</div>   
          </li>
          <li>
            <div class="our_virtue_pic"><img src="../../static/images/huizong/u295.png"></div>
            <h4 class="our_virtue_tit color_violet">信息系统</h4>
            <div class="our_virtue_content">强大的交易管理系统，让交易更便捷，管理更轻松，更少的人员投入，更多的业务承接</div>     
          </li>
        </ul>
      </div>
    </div>
    <!-- 我们的优势 -->
    <div class="novice_steps clearfix">
      <div class="right-ward-container fl">
        <div class="right-ward-hd"><div class="title-zh">新手6步</div><div class="title-en">NOVICE GUIDANCE</div></div>
        <p class="right-ward-desc">更多花样发货技能，点击“<a href="#">领取</a>“</p>
      </div>
      <div class="step-container fl">
        <div class="step-item-box fl">
          <div class="step-item-hd"><span class="step-circle">1</span><span class="step-title">下单</span></div>
          <div class="step-item-md img-wrapper"><img src="../../static/images/huizong/step01.svg" ></div>
          <div class="step-item-ft">线上发货，一键操作； 货发全国，价格真实</div>
        </div>
        <div class="img-wrapper fl">
          <img src="../../static/images/huizong/step_line.png">
        </div>
        <div class="step-item-box fl">
          <div class="step-item-hd"><span class="step-circle">2</span><span class="step-title">受理</span></div>
          <div class="step-item-md img-wrapper"><img src="../../static/images/huizong/step02.svg" ></div>
          <div class="step-item-ft">物流商承诺下单后一小内受理， 遇特殊情况及时告知</div>
        </div>
        <div class="img-wrapper fl">
          <img src="../../static/images/huizong/step_line.png">
        </div>
        <div class="step-item-box fl">
          <div class="step-item-hd"><span class="step-circle">3</span><span class="step-title">揽收</span></div>
          <div class="step-item-md img-wrapper"><img src="../../static/images/huizong/step03.svg" ></div>
          <div class="step-item-ft">受理后网点联系约定上门取货时间， 也可上网点投递</div>
        </div>
        <div class="img-wrapper fl">
          <img src="../../static/images/huizong/step_line.png">
        </div>
        <div class="step-item-box fl">
          <div class="step-item-hd"><span class="step-circle">4</span><span class="step-title">运输</span></div>
          <div class="step-item-md img-wrapper"><img src="../../static/images/huizong/step04.svg" ></div>
          <div class="step-item-ft">运输时效透明展示， 物流跟踪全程可视</div>
        </div>
        <div class="img-wrapper fl">
          <img src="../../static/images/huizong/step_line.png">
        </div>
        <div class="step-item-box fl">
          <div class="step-item-hd"><span class="step-circle">5</span><span class="step-title">签收</span></div>
          <div class="step-item-md img-wrapper"><img src="../../static/images/huizong/step05.svg" ></div>
          <div class="step-item-ft">签收异常: 货物破损、毁损、遗失赔付</div>
        </div>
        <div class="img-wrapper fl">
          <img src="../../static/images/huizong/step_line.png">
        </div>
        <div class="step-item-box fl">
          <div class="step-item-hd"><span class="step-circle">6</span><span class="step-title">保障</span></div>
          <div class="step-item-md img-wrapper"><img src="../../static/images/huizong/step06.svg" ></div>
          <div class="step-item-ft">若线上申请投诉，菜鸟客服介入处理</div>
        </div>
      </div>
    </div>
    <!-- 新手步骤 -->
    <div class="bj_2">
      <div class="hy_partner">
        <h3 class="p_title">我们的合作伙伴</h3>
        <ul class="partner_list clearfix">
          <li><img src="../../static/images/huizong/partner1.jpg" ></li>
          <li><img src="../../static/images/huizong/partner2.jpg" ></li>
          <li><img src="../../static/images/huizong/partner3.jpg" ></li>
          <li><img src="../../static/images/huizong/partner4.jpg" ></li>
          <li><img src="../../static/images/huizong/partner5.jpg" ></li>
          <li><img src="../../static/images/huizong/partner6.jpg" ></li>
          <li><img src="../../static/images/huizong/partner7.jpg" ></li>
          <li><img src="../../static/images/huizong/partner8.jpg" ></li>
          <li><img src="../../static/images/huizong/partner9.jpg" ></li>
          <li><img src="../../static/images/huizong/partner10.jpg" ></li>
          <li><img src="../../static/images/huizong/partner11.jpg" ></li>
          <li><img src="../../static/images/huizong/partner12.jpg" ></li>
        </ul>
      </div>
    </div>
    <!-- 合作伙伴 -->
    <div class="bj_2">
      <div class="p_answers">
        <div class="p_title_box">
          <h3 class="title">28问答</h3>
          <a 
            target="_blank"
            href="/help/ggp/index.jhtml" 
            class="answers_link">全部<i class="iconfont iconjiantou2"/>
          </a>         
        </div>
        <ul class="answers_list">
          <li>
            <p class="answers_list_tit"><i class="iconfont iconinformatiom_"/>什么是订阅货源？</p>
            <p>您可以选择自己常跑的线路，订阅成功后，此线路有新发货源则会在APP即时提醒您</p>
          </li>
          <li>
            <p class="answers_list_tit"><i class="iconfont iconinformatiom_"/>怎么在平台接单？</p>
            <p> 您可以选择自己常跑的线路，订阅成功后，此线路有新发货源则会在APP即时提醒您</p>
          </li>
          <li>
            <p class="answers_list_tit"><i class="iconfont iconinformatiom_"/>怎么申请成为推荐承运商</p>
            <p>您可以选择自己常跑的线路，订阅成功后，此线路有新发货源则会在APP即时提醒您</p>
          </li>
          <li>
            <p class="answers_list_tit"><i class="iconfont iconinformatiom_"/>承运商入驻需要什么材料？</p>
            <p> 您可以选择自己常跑的线路，订阅成功后，此线路有新发货源则会在APP即时提醒您</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 28问答 -->
    <div class="p_live clearfix">
      <div class="live_txt">
        <span class="live_txt_tit">快速成为承运商获取优质货源</span>
        <span class="live_txt_phone">免费咨询电话：400-999-2828</span>
      </div>
      <a 
        class="live_btn"
        target="_blank"
        href="/regisiter"
      >我要入驻</a>
    </div>
    <!-- 入住 -->
   
</div></template>
<script>
import Swiper from 'Swiper'
export default {
  name: 'HuiZong',
  head: {},
  filters: {
    kilogram(value) {
      return value
    }
  },
  layout: 'huizong',
  data() {
    return {
      banners: [
        require('../../static/images/huizong/hy_banner1.jpg'),
        require('../../static/images/huizong/banner02.jpg'),
        require('../../static/images/huizong/banner03.jpg')
      ],
      currentArea: '',
      currentProvince: '',
      // 地点插件
      hyStartProvince: '',
      hyStartCity: '',
      hyStartArea: '',
      hyEndProvince: '',
      hyEndCity: '',
      hyEndArea: ''
    }
  },
  async asyncData({ $axios, query, app, error }) {
    // let [, ] = await Promise.all([   ])
    //热门城市
    let hotCityData = await $axios.get('/28-web/city/hot')
    // 优质货主
    let shipperData = await $axios.post('/28-web/shipper/excellent', {
      currentPage: 1,
      pageSize: 10
    })
    //本月优质货主
    let monthShipperData = await $axios.post(
      '/28-web/shipper/month/excellent',
      {
        currentPage: 1,
        pageSize: 5
      }
    )
    // 货源推荐
    let recommendData = await $axios.post(
      '/28-web/lclOrder/orderSummary/recommendList',
      {
        currentPage: 1,
        pageSize: 12
      }
    )
    // 榜单达人
    let darenData = await $axios.post(
      '/28-web/lclOrder/orderSummary/findOrderDaren'
    )
    //获取最新24小时内10条货源信息列表
    let newListData = await $axios.get('/28-web/lclOrder/newList')
    //查询首页车源、货源、专线数量
    let statisticsData = await $axios.get('/28-web//index/today/statistics')

    if (
      hotCityData.status === 200 ||
      shipperData.status === 200 ||
      monthShipperData.status === 200 ||
      recommendData.status === 200 ||
      darenData.status === 200 ||
      newListData.status === 200 ||
      statisticsData.status === 200
    ) {
      return {
        hotCityData: hotCityData.data ? hotCityData.data.data : [],
        shipperData: shipperData.data ? shipperData.data.data : [],
        monthShipperData: monthShipperData ? monthShipperData.data.data : [],
        recommendData: recommendData.data ? recommendData.data.data : [],
        darenData: darenData.data ? darenData.data.data : [],
        newListData: newListData.data ? newListData.data.data : [],
        statisticsData: statisticsData.data ? statisticsData.data.data : []
      }
    } else {
      error({ statusCode: 500, message: '查找不到该专线列表' })
    }
  },
  mounted() {
    this.$nextTick(() => {
      console.log('优质货主', this.shipperData)
      console.log('本月货主', this.monthShipperData)
      console.log('货源推荐', this.recommendData)
      console.log('热门城市', this.hotCityData)
      console.log('货量达人', this.darenData)
      console.log('24小时在线新闻', this.newListData)
      console.log('统计数据', this.statisticsData)
      console.log('cookies', decodeURIComponent(document.cookie))
      //优质货主
      this.shipperData.list = this.shipperData.list ? this.shipperData.list : []
      //本月货主
      this.monthShipperData.list = this.monthShipperData.list
        ? this.monthShipperData.list
        : []
      //货源推荐
      this.recommendData.list = this.recommendData.list
        ? this.recommendData.list
        : []

      this.currentArea = this.getCookie('currentAreaFullName')
      this.currentProvince = this.getCookie('currentProvinceFullName')

      this.intSwiper1()
      this.intSwiper2()
    })
    seajs.use(['layer', '/js/jq_scroll.js'], function() {
      /*地点插件 */
      $('#huoyuan_pageinp1').citypicker()
      $('#huoyuan_pageinp2').citypicker()
      $('#sb_pageinp1').citypicker()
      $('#sb_pageinp2').citypicker()

      /* 文字滚动*/
      $('.p_hy_info .hy_info_user_box').Scroll({
        line: 1,
        speed: 600,
        timer: 3000
      })
    })
  },
  methods: {
    intSwiper1() {
      this.$nextTick(() => {
        // 幻灯片
        $('#ad').hover(
          function() {
            $(this)
              .find('.swiper-button-next,.swiper-button-prev')
              .removeClass('hide')
          },
          function() {
            $(this)
              .find('.swiper-button-next,.swiper-button-prev')
              .addClass('hide')
          }
        )
        let adSwiper = new Swiper('#ad .swiper-container', {
          effect: 'fade',
          spaceBetween: 30,
          loop: true,
          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '#ad .swiper-pagination',
            dynamicBullets: true,
            clickable: true
          },
          navigation: {
            nextEl: '#ad .swiper-button-next',
            prevEl: '#ad .swiper-button-prev',
            disabledClass: '#ad my-button-disabled'
          }
        })
      })
    },
    intSwiper2() {
      this.$nextTick(() => {
        // 货主
        let swiper = new Swiper('#owner_swiper .swiper-container', {
          pagination: {
            el: '#owner_swiper .swiper-pagination',
            clickable: true
            // renderBullet: function(index, className) {
            //   return (
            //     '<span class="' + className + '">' + (index + 1) + '</span>'
            //   )
            // }
          }
        })
        // let hahaswiper = new Swiper('#owner_swiper .swiper-container', {
        //   slidesPerView: 5,
        //   spaceBetween: 20,
        //   freeMode: true,
        //   pagination: {
        //     el: '#owner_swiper .swiper-pagination',
        //     clickable: true
        //   },
        //   navigation: {
        //     nextEl: '#owner_swiper .swiper-button-next',
        //     prevEl: '#owner_swiper .swiper-button-prev',
        //     disabledClass: '#owner_swiper .my-button-disabled'
        //   }
        // })
      })
    },
    //搜索货源
    groomSearch() {
      this.getPlace(
        '#huoyuan_from1',
        'hyStartProvince',
        'hyStartCity',
        'hyStartArea'
      )
      this.getPlace('#huoyuan_from2', 'hyEndProvince', 'hyEndCity', 'hyEndArea')
      // 跳转
      let huoyuanUrl = `/huoyuan?startProvince=${
        this.hyStartProvince
      }&startCity=${this.hyStartCity}&startArea=${
        this.hyStartArea
      }&endProvince=${this.hyEndProvince}&endCity${this.hyEndCity}&endArea${
        this.hyEndArea
      }`
      // window.location.href = huoyuanUrl
      window.open(huoyuanUrl, '_blank')
    },
    //表单获取数据封装
    getPlace(el, province, city, area) {
      let arr = []
      $(el + ' .select-item').each(function(i, e) {
        arr.push($(this).text())
      })
      this[province] = arr[0] ? arr[0] : ''
      this[city] = arr[0] ? arr[0] : ''
      this[area] = arr[0] ? arr[0] : ''
    },
    //获取cookies的值
    getCookie(cookieName) {
      var strCookie = document.cookie
      var arrCookie = strCookie.split('; ')
      for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split('=')
        if (cookieName == arr[0]) {
          return decodeURIComponent(arr[1])
        }
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/common_index.scss';
/*全局影响样式处理*/
a {
  span,
  p {
    color: $tit_color;
  }
}
/*1、货源导航*/
.bj_blue {
  box-sizing: border-box;
  background: $blue;
}
.hy_wrap {
  // display: flex;
  // justify-content: space-between;
  margin: 0 auto 0 auto;
  padding: 5px 0 20px 0;
  width: $w_1400;
  font-size: $f_14;
  .col1,
  .col2,
  .col3 {
    height: 516px;
    background: $white;
  }
  .col1 {
    @extend .fl;
    width: 230px;
  }
  .col2 {
    @extend .fl;
    margin-left: 20px;
    width: 832px;
    background: none;
  }
  .col3 {
    @extend .fr;
    width: 298px;
  }
}
/*幻灯片*/
.ad {
  overflow: hidden;
  height: 360px;
  background: $white;
  .swiper-container {
    height: 360px;
    > .swiper-slide {
      display: none;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.type {
  margin-top: 20px;
  height: 125px;
  .type_box {
    @extend .fl;
    box-sizing: border-box;
    width: 277px;
    height: 134px;
    background: $white;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

/*优质货主*/
.owner {
  margin: 0 auto;
  width: $w_1400;
  > .swiper-container {
    height: 460px;
    /deep/ .swiper-pagination-bullet {
      margin: 0 10px;
      width: 60px;
      height: 10px;
      border-radius: 5px;
      background: #e1e1e1;
      opacity: 1;
    }
    /deep/ .swiper-pagination-bullet-active {
      background: #9bc0fe;
    }
  }

  > .error {
    font-size: $f_14;
  }
}
/*选择我们*/
.our {
  margin: 0 auto 20px auto;
  width: $w_1400;
  font-size: $f_14;
  .p_title {
    width: 480px;
  }
  .col1,
  .col2 {
    height: 352px;
  }
  .col1 {
    float: left;
    width: 1065px;
  }
  .col2 {
    float: right;
    width: 335px;
  }

  .our_tool {
    @extend .fl;
    width: 335px;
    height: 336px;
    background: $white;
    &:nth-child(2) {
      margin: 0 20px;
    }
    .pic {
      overflow: hidden;
      height: 168px;
    }
    .link {
      padding-top: 15px;
      li {
        &:nth-child(1) {
          span:nth-child(1) {
            border-right: 1px solid $line_color;
          }
        }
        @extend .fl;
        display: block;
        width: 167px;
        > span {
          &:nth-child(1) {
            margin: 10px 0;
            .iconfont {
              font-size: 50px;
              color: #7498ff;
            }
          }
          > a {
            font-size: $f_16;
            line-height: 32px;
            color: $gray;
          }
          display: block;
          text-align: center;
        }
      }
    }
    .link2 {
      li {
        width: 166px;
        > span {
          > a {
            display: block;
            margin: 0 auto;
            width: 110px;
            height: 32px;
            line-height: 32px;
            border-radius: 5px;
            font-weight: normal;
            cursor: pointer;
            &.btn_order {
              color: $white;
              background: #ff5858;
            }
            &.btn_send {
              color: $white;
              background: #5883ff;
            }
          }
        }
      }
    }
    .num {
      margin: 10px 0 0 28px;
      b {
        padding: 0 5px;
        color: $txt_red_color;
      }
    }
  }
  .our_tool_older {
    border: 1px solid $border_color;
  }
  .our_ad {
    overflow: hidden;
    height: 266px;
  }
  .btn_hy_link {
    margin-top: 20px;
    display: block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: $white;
    font-size: 24px;
    font-weight: bold;
    background: $light_orange;
  }
}
/*货源推荐*/
.p_hy_groom {
  margin-top: 65px;
  .bd {
    margin-top: 50px;
    .col1 {
      overflow: hidden;
      @extend .fl;
      width: 1102px;
    }
    .col2 {
      @extend .fr;
      width: 298px;
    }
  }
  .subscribe {
    padding: 0 20px;
    width: 256px;
    height: 268px;
    background: url('../../static/images/huizong/bj_hy_dingyue.jpg') no-repeat;
    // padding: 20px;
    background-color: #edf6fc;
    border: 1px solid #e1eef7;
    .tit {
      padding: 15px 0;
      font-weight: normal;
      font-size: $f_18;
      color: $tit_blue_color;
      .iconfont {
        padding-right: 5px;
        color: $orange;
      }
    }
    .city_box {
      position: relative;
      margin-bottom: 10px;
      padding: 0 10px;
      height: 32px;
      line-height: 32px;
      background: $white;
      border: 1px solid $border_color;
      > input {
        border: 0;
      }
      .iconfont {
        position: absolute;
        top: 0;
        right: 5px;
        color: $light_gray;
      }
    }
    .subscribe_txt {
      overflow: hidden;
      margin: 20px 0;
      color: $light_gray;
      .subscribe_txt_num {
        padding: 0 5px;
        color: $txt_red_color;
      }
    }
    .subscribe_remind_btn {
      display: block;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: $white;
      background: $orange;
      cursor: pointer;
    }
  }
  // .weixin {
  //   overflow: hidden;
  //   margin-top: 20px;
  //   padding: 20px 10px;
  //   background: #fcfac1;
  //   // height: 116px;
  //   .pic {
  //     overflow: hidden;
  //     @extend .fl;
  //     margin-right: 10px;
  //     width: 85px;
  //     height: 85px;
  //     img {
  //       width: 100%;
  //       height: 100%;
  //     }
  //   }
  //   > a {
  //     color: #0066ff;
  //   }
  // }
  .release_car {
    margin-top: 20px;
    padding-top: 20px;
    width: 297px;
    height: 215px;
    background: $white;
    border: 1px solid $border_color;
    font-size: $f_18;
    text-align: center;
    color: $tit_color;
    .release_car_num {
      font-size: 0;
      .release_car_item {
        display: inline-block;
        margin: 0 3px;
        width: 34px;
        height: 34px;
        line-height: 34px;
        font-weight: bold;
        text-align: center;
        color: $white;
        font-size: $f_18;
        background: $orange;
        font-weight: normal;
      }
    }
    .release_car_tit {
      padding: 10px 0 30px 0;
    }
    .release_car_btn {
      margin: 0 auto;
      display: block;
      width: 183px;
      height: 40px;
      line-height: 40px;
      background: $btn_blue_color;
      color: $white;
    }
    .release_car_txt {
      margin-top: 10px;
      font-size: $f_14;
      line-height: 25px;
    }
  }
}

.p_release {
  .release_box {
    .release_box_txt {
      width: 230px;
    }
  }
}
// .p_hy_list {
//   > li {
//     height: auto;
//   }
// }
/*货量达人榜*/
.rank_people {
  margin: 0 auto 20px auto;
  width: $w_1400;
  font-size: $f_14;
  > .col1 {
    @extend .fl;
    display: table;
    word-spacing: -1em;
    width: 1210px;
  }
  > .col2 {
    @extend .fr;
    width: 230px;
    height: 202px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .rank_box {
    overflow: hidden;
    display: inline-block;
    margin-right: 25px;
    padding: 15px;
    width: 346px;
    height: 160px;
    background: $white;
    border: 1px solid $border_color;
    box-shadow: 2px 2px 5px #ddd;
    color: $tit_color;
    .ranking_info {
      overflow: hidden;
      margin-bottom: 20px;
      line-height: 22px;
      > li {
        @extend .fl;
        &.rank_num {
          width: 75px;
          font-size: 20px;
          font-weight: bold;
        }
        &.no1 {
          color: $orange;
        }
        &.no2 {
          color: $blue;
        }
        &.no3 {
          color: $green;
        }
        &.rank_name {
          margin-right: 15px;
          font-weight: bold;
        }
        &.rank_sure {
          display: table;
          word-spacing: -1em;
          border: 1px solid $light_orange;
          font-size: $f_12;
          color: $orange;
          height: 20px;
          line-height: 20px;
          > span {
            display: inline-block;
            &.span1 {
              padding: 0 5px;
              color: $white;
              background: $light_orange;
            }
            &.span2 {
              padding: 0 5px;
              color: $light_orange;
            }
          }
        }
      }
    }
    .bd {
      overflow: hidden;
      .col1 {
        @extend .fl;
        width: 70px;
      }
      .col2 {
        @extend .fr;
        width: 275px;
        > p {
          margin-bottom: 8px;
          b {
            font-size: 16px;
            color: $orange;
            &.money {
              font-weight: normal;
            }
          }
          &.rank_prize {
            font-weight: bold;
            .rank_prize_tit {
              font-size: 18px;
              color: $light_orange;
            }
          }
        }
      }
    }
  }
}

/*新手步骤*/
.novice_steps {
  overflow: hidden;
  margin: 0 auto;
  width: $w_1400;
  height: 234px;
  .right-ward-container {
    position: relative;
    width: 180px;
    // height: 240px;
    padding: 56px 22px;
    background-image: linear-gradient(-135deg, #1251ff, #267dff);
    &:after {
      content: '';
      position: absolute;
      right: -11px;
      top: 108px;
      width: 0;
      height: 0;
      border-top: 12px solid transparent;
      border-left: 12px solid #1251ff;
      border-bottom: 12px solid transparent;
    }
    .right-ward-hd {
      width: 128px;
      margin: auto;
      text-align: center;
    }
    .title-zh {
      font-family: PingFangSC-Thin;
      font-size: 32px;
      color: #fff;
      letter-spacing: 0;
    }
    .title-en {
      font-family: PingFangSC-Thin;
      font-size: 12px;
      color: #fff;
      letter-spacing: 0;
    }
    .right-ward-desc {
      margin-top: 20px;
    }
    .right-ward-desc,
    .right-ward-desc > a {
      font-family: PingFangSC-Thin;
      font-size: 16px;
      color: hsla(0, 0%, 100%, 0.62);
      letter-spacing: 0;
      text-align: center;
      vertical-align: middle;
    }
  }
  .step-container {
    // width: 1100px;
    // height: 240px;
    padding: 24px 24px 28px;

    .step-item-hd {
      .step-circle {
        display: inline-block;
        border: 1px solid #bfd2f7;
        width: 32px;
        height: 32px;
        border-radius: 100%;
        line-height: 32px;
        font-family: HelveticaNeue-BoldItalic;
        font-size: 24px;
        color: #185fff;
        letter-spacing: 0;
        text-align: center;
      }
      .step-title {
        margin-left: 11px;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #333;
        letter-spacing: 0;
        text-align: left;
      }
    }
    .step-item-box {
      max-width: 154px;
      text-align: center;
      .step-item-md {
        margin-top: 38px;
      }
      .step-item-ft {
        margin-top: 28px;
        font-family: PingFangSC-Thin;
        font-size: 12px;
        color: #666;
        letter-spacing: 0;
        text-align: center;
      }
    }
    > .img-wrapper {
      margin-left: 20px;
      margin-right: 15px;
      height: 184px;
      line-height: 184px;
    }
  }
}
/*合作伙伴*/
.hy_partner {
  margin: 0 auto;
  padding: 20px 0;
  width: $w_1400;
  .p_title {
    text-align: center;
  }
  .partner_list {
    margin: 0 auto;
    width: 1140px;
    > li {
      overflow: hidden;
      @extend .fl;
      margin: 0 30px 30px 30px;
      width: 130px;
      height: 120px;
      vertical-align: middle;
      text-align: center;
      border-radius: 50%;
      box-shadow: 0 0 8px #bbb;
      > img {
        margin-top: 30px;
      }
    }
  }
}
/*幻灯片箭头显示隐藏*/

.swiper-container {
  .hide {
    opacity: 0;
  }

  .swiper-button-next,
  .swiper-button-prev {
    transition: opacity 0.5s;
  }
}
</style>
