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
              v-if="hotCityData.length>0">
              <span 
                class="item"
                v-for="(item, index) in hotCityData" 
                :key="index">
                <a
                  target="_blank"
                  :href="'/huoyuan?startp=' + item.provinceName + '&startc=' + item.cityName">{{ item.cityShortName }}</a></span>  
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

            <div 
              class="user_show"
              v-if="!isToken">
              <p class="user_txt">Hi~欢迎来到28快运！</p>
              <p class="user_profit">
                <a 
                  class="login"
                  @click.prevent.stop="showLogin">登录</a>
                <a href="/regisiter">注册</a>
              </p>
            </div>
            <div 
              class="user_show"
              v-else>
              <p class="user_txt">您好，{{ mobile }} <a href="/exit">【安全退出】</a></p>
              <p class="user_profit">
                <a href="/hyzx">会员中心</a>
              </p>
            </div>

          </div>
          <!-- 用户登录 -->
          <div class="hongbao_ad">
            <a @click="redPaperFn"><img src="../../static/images/huizong/hy_hongbao_ad.jpg"></a>
          </div>
        </div>
      </div>
    </div>
    <!--货源-->
    <div 
      id="owner_swiper"
      class="owner">
      <div class="p_centre_title clearfix">
        <div class="title_line_box fl"><span/></div>
        <h3 class="title_txt fl">优质货主</h3>
        <div class="title_line_box fl"><span/></div>
      </div>
      <div class="swiper-container" >
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul class="p_owner_list clearfix">
              <li                
                v-for="(item, index) in shipperData.list1"       
                :key="index" >
                <a 
                  target="_blank"
                  :href="'/member/' + item.companyId">
                  <div class="owner_pic"><img :src="item.companyFacadeFile?item.companyFacadeFile:noneImg"></div>
                  <div class="owner_info">
                    <p 
                      class="owner_name"               
                      :title="item.companyName">{{ item.companyName }}
                     
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
                v-for="(item, index) in shipperData.list2"  
                :key="index" >
                <a 
                  target="_blank"
                  :href="'/member/' + item.companyId">
                  <div class="owner_pic"><img :src="item.companyFacadeFile?item.companyFacadeFile:noneImg"></div>
                  <div class="owner_info">
                    <p 
                      class="owner_name"               
                      :title="item.companyName">{{ item.companyName }}
                     
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
 
    </div>
    <!-- 优质货主 -->
    <div class="our clearfix">
      <div class="p_centre_title clearfix">
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
            v-if="recommendData.length>0">
            <li               
              v-for="(item, index) in recommendData" 
              :key="index">
              <a 
                target="_blank"
                :href="'/huoyuan/detail?id=' + item.id + '&shipperId=' + item.shipperId">
                <div class="hd_box">
                  <span class="p_l5">物流商:</span>
                  <span>{{ item.companyName }}</span>
                  <span><i class="iconfont iconrenzheng"/></span>
                </div>
                <div :class="[ !item.startArea&&!item.endArea ?'':'md_area','md_box']">
                  <div 
                    class="city"
                    v-if="!item.startArea">{{ item.startCity }}</div>
                  <div
                    class="area"
                    v-else>
                    <span class="area_city">{{ item.startCity }}</span>
                    <span class="area_qx">{{ item.startArea }}</span>
                  </div>
              
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div 
                    class="city"
                    v-if="!item.endArea">{{ item.endCity }}
                  </div>
                  <div 
                    class="area"
                    v-else>
                    <span class="area_city">{{ item.endCity }}</span>
                    <span class="area_qx">{{ item.endArea }}</span>
                  </div>
                </div>
     
                <div class="type_box">
                  <span class="p_l5">规格:</span>
                  <span class="type_box_item type_box_num">{{ item.goodsNum }}件</span>
                  <span class="type_box_item">{{ item.goodsWeight }}公斤</span>
                  <span class="type_box_item">{{ item.goodsVolume }}m³</span>
                  <!-- <span class="time">{{ item.time }}</span> -->
                </div>
                <div class="list_goods">
                  <span class="p_l5 fl">货物:</span>
                  <span class="list_goods_name fl">{{ item.goodsTypeName }}</span>
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
            <div
              id="sub_star"
              class="city_box clearfix">
              <input 
                type="text" 
                placeholder="请输入出发地" 
                id="sb_pageinp1">
              <i class="iconfont iconjiantou32"/>
            </div>
            <div 
              id="sub_end"
              class="city_box clearfix">
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
            <a 
              class="subscribe_remind_btn"
              @click="sendNotice">上新提醒我</a>
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
            <a 
              class="release_car_btn"
              target="_blank"
              href="/create/huoyuan">发布求车信息</a>
            <div class="release_car_txt">
              快速发布货源，让承运商主动来找我<br>
              自主挑选合适承运商
            </div>
          </div>
   
        </div>
      </div>
    </div>
    <!-- 货源推荐 -->
    <div class="rank_people clearfix">
      <div class="p_title_box">
        <h3 class="title">货量达人榜</h3>
        <span class="title_txt">近3个月发布货源最多的货主</span>
      </div>
      <div class="col1">
        <div 
          class="clearfix" 
          v-if="darenData.length>0">
          <div 
            class="rank_box"
            v-for="(item, index) in darenData" 
            :key="index">
            <span 
              class="icon_square_no icon_square_no1"
              v-if="index === 0"/>
            <span 
              class="icon_square_no icon_square_no2"
              v-if="index === 1"/>
            <span 
              class="icon_square_no icon_square_no3"
              v-if="index === 2"/>
            <div class="rank_hd">
              <span class="rank_hd_name">{{ item.companyName }}</span>
            </div>
            <div class="rank_bd">
              <ul class="rank_bd_list">
                <li> 最近三个月发布货源 <span class="rank_bd_num">{{ item.lastThreeMonthSupplyNum }}</span> 次</li>
                <li> 累计成交 <span class="rank_bd_num">{{ item.orderNumber }}</span> 笔订单，收到好评 <span class="rank_bd_num">{{ item.evaGoodCount }}</span> 次</li>
                <li>使用现金券 <span class="rank_bd_num">{{ item.usedCoupon }}</span> 元</li>
              </ul>
              <div class="rank_bd_prize">平台额外奖励 <span class="rank_bd_num">{{ item.rewardCoupon }}</span> 元现金券</div>
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
          <img src="~/static/images/huizong/hy_hongbao.jpg">
        </a>
      </div>
    </div>
  
    <!-- 货量达人榜 -->
    <div class="p_company_owner">
      <div class="p_title_box">
        <h3 class="title">本月优质企业货主</h3>
        <span class="title_txt">稳定货源，好评率高</span>
      </div>  
      <ul 
        class="p_co_owner_list clearfix"
        v-if="monthShipperData.length>0">
        <li 
          v-for="(item, index) in monthShipperData" 
          :key="index">
          <a 
            target="_blank"
            :href="'/member/' + item.companyId">
            <span 
              class="icon_square_no icon_square_no1"
              v-if="index === 0"/>
            <span 
              class="icon_square_no icon_square_no2"
              v-if="index === 1"/>
            <span 
              class="icon_square_no icon_square_no3"
              v-if="index === 2"/>
            <div class="rank_pic"><img :src="item.companyFacadeFile?item.companyFacadeFile:noneImg" ></div>
            <div class="rank_txt">
              <div class="rank_txt_tit">
                <span 
                  class="txt_tit_name" 
                  :title="item.companyName ">{{ item.companyName }} </span>
                <span class="txt_tit_icon_tuijian">荐</span>
              </div>
              <div class="rank_txt_groom">
                <span class="name">推荐指数</span>
                <span><Star :start-num="item.recommendedNumber"/></span> 
              </div>
              <div class="rank_txt_praise">好评率{{ item.evaGoodCountRate }}%</div>
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
    <!-- 本月优质企业货主 -->
    <div class="p_our_virtue">
      <div class="p_centre_title clearfix">
        <div class="title_line_box fl"><span/></div>
        <h3 class="title_txt fl">我们的优势</h3>
        <div class="title_line_box fl"><span/></div>
      </div>
      <ul class="our_virtue_list clearfix">
        <li>
          <div class="our_virtue_pic"><img src="~/static/images/huizong/advantage1.jpg"></div>
          <h4 class="our_virtue_tit color_orange">海量货源</h4>
          <div class="our_virtue_txt">专业的项目客户团队，为成员引进更多的线上货源机会</div>
        </li>
        <li>
          <div class="our_virtue_pic"><img src="~/static/images/huizong/advantage2.jpg"></div>
          <h4 class="our_virtue_tit color_grass_green">安全保障</h4>
          <div class="our_virtue_txt">流程标准化，降低货损率；完善的理赔保障体系，小额快赔，为成员的每一票货物保驾护航</div>
          
        </li>
        <li>
          <div class="our_virtue_pic"><img src="~/static/images/huizong/advantage3.jpg"></div>
          <h4 class="our_virtue_tit color_blue">降本增效</h4>
          <div class="our_virtue_txt">金融、保险等丰富的产品选择，带来集采价产品服务，为成员增效，助力事业腾飞</div>   
        </li>
        <li>
          <div class="our_virtue_pic"><img src="~/static/images/huizong/advantage4.jpg"></div>
          <h4 class="our_virtue_tit  color_light_orange">信息系统</h4>
          <div class="our_virtue_txt">强大的交易管理系统，让交易更便捷，管理更轻松，更少的人员投入，更多的业务承接</div>     
        </li>
      </ul>
    </div>
    <!-- 我们的优势 -->
    <div class="novice_steps clearfix">
      <div class="p_centre_title clearfix">
        <div class="title_line_box fl"><span/></div>
        <h3 class="title_txt fl">新手6步</h3>
        <div class="title_line_box fl"><span/></div>
      </div>

      <div class="step-container fl">
        <div class="step-item-box fl">
          <div class="step-item-hd">1、下单</div>
          <div class="step-item-md "/>
          <div class="step-item-ft">线上发货，一键操作； 货发全国，价格真实</div>
        </div>
        <div class="img-wrapper fl"/>
        <div class="step-item-box fl">
          <div class="step-item-hd">2、受理</div>
          <div class="step-item-md icon-step2"/>
          <div class="step-item-ft">物流商承诺下单后一小内受理， 遇特殊情况及时告知</div>
        </div>
        <div class="img-wrapper fl"/>
        <div class="step-item-box fl">
          <div class="step-item-hd">3、揽收</div>
          <div class="step-item-md icon-setp3"/>
          <div class="step-item-ft">受理后网点联系约定上门取货时间， 也可上网点投递</div>
        </div>
        <div class="img-wrapper fl"/>
        <div class="step-item-box fl">
          <div class="step-item-hd">4、运输</div>
          <div class="step-item-md icon-step4"/>
          <div class="step-item-ft">运输时效透明展示， 物流跟踪全程可视</div>
        </div>
        <div class="img-wrapper fl"/>
        <div class="step-item-box fl">
          <div class="step-item-hd">5、签收</div>
          <div class="step-item-md icon-step5"/>
          <div class="step-item-ft">签收异常: 货物破损、毁损、遗失赔付</div>
        </div>
        <div class="img-wrapper fl"/>
        <div class="step-item-box fl">
          <div class="step-item-hd"><span class="step-circle">6、</span><span class="step-title">保障</span></div>
          <div class="step-item-md icon-step6"/>
          <div class="step-item-ft">若线上申请投诉，菜鸟客服介入处理</div>
        </div>
      </div>
    </div>
    <!-- 新手步骤 -->
    <div class="hy_partner">
      <div class="p_centre_title clearfix">
        <div class="title_line_box fl"><span/></div>
        <h3 class="title_txt fl">新手6步</h3>
        <div class="title_line_box fl"><span/></div>
      </div>
      <ul class="partner_list clearfix">
        <li><img src="~/static/images/huizong/partner1.jpg" ></li>
        <li><img src="~/static/images/huizong/partner2.jpg" ></li>
        <li><img src="~/static/images/huizong/partner3.jpg" ></li>
        <li><img src="~/static/images/huizong/partner4.jpg" ></li>
        <li><img src="~/static/images/huizong/partner5.jpg" ></li>
        <li><img src="~/static/images/huizong/partner6.jpg" ></li>
        <li><img src="~/static/images/huizong/partner7.jpg" ></li>
        <li><img src="~/static/images/huizong/partner8.jpg" ></li>
        <li><img src="~/static/images/huizong/partner9.jpg" ></li>
        <li><img src="~/static/images/huizong/partner10.jpg" ></li>
        <li><img src="~/static/images/huizong/partner11.jpg" ></li>
        <li><img src="~/static/images/huizong/partner12.jpg" ></li>
      </ul>
    </div>
    <Add 
      :is-show-add.sync="isShowAdd" 
      :data-info="dataInfo"/>
    <div 
      id="hongbao" 
      style="display: none">
      <img src="../../static/images/huizong/hy_honhbao.jpg">
    </div>
    <!-- 合作伙伴 -->
    <!-- <div class="bj_2">
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
    </div> -->
    <!-- 28问答 -->   
  </div>
</template>
<script>
//获取公共的函数
import until from '~/static/js/server/comonUntil'
import Add from '~/components/subscribe/add' //订阅
import Star from '~/components/star/star' //订阅
import Swiper from 'Swiper'

export default {
  name: 'HuiZong',
  head: {},
  // filters: {
  //   kilogram(value) {
  //     return value
  //   }
  // },
  // layout: 'huizong',
  components: { Add, Star },
  data() {
    return {
      //登录权限
      isToken: false,
      mobile: '',
      noneImg: require('../../static/images/huizong/none.jpg'),
      banners: [require('../../static/images/huizong/hy_banner1.jpg')],
      currentArea: '', //获取当前的城市
      currentProvince: '',
      // 地点插件
      hyStartProvince: '',
      hyStartCity: '',
      hyStartArea: '',
      hyEndProvince: '',
      hyEndCity: '',
      hyEndArea: '',
      //获取订阅的列表
      isShowAdd: false,
      dataInfo: {}
    }
  },
  async asyncData({ $axios, query, app, error }) {
    // let [, ] = await Promise.all([   ])
    // this.currentArea = $.cookie('currentAreaFullName')
    //服务端获取cookies
    let currentProvince = app.$cookies.get('currentProvinceFullName')
    let currentArea = app.$cookies.get('currentAreaFullName')

    //热门城市
    let hotCityData = await $axios.get('/28-web/city/hot')
    // 优质货主
    let shipperData = await $axios.post('/28-web/shipper/excellent', {
      currentPage: 1,
      pageSize: 10,
      startProvince: currentProvince,
      startCity: currentArea
    })
    //本月优质货主
    let monthShipperData = await $axios.post(
      '/28-web/shipper/month/excellent',
      {
        currentPage: 1,
        pageSize: 5,
        startProvince: currentProvince,
        startCity: currentArea
      }
    )
    // 货源推荐
    let recommendData = await $axios.post(
      '/28-web/lclOrder/orderSummary/recommendList',
      {
        currentPage: 1,
        pageSize: 12,
        startProvince: currentProvince,
        startCity: currentArea
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
        shipperData: shipperData.data ? shipperData.data.data.list : [],
        monthShipperData: monthShipperData
          ? monthShipperData.data.data.list
          : [],
        recommendData: recommendData.data ? recommendData.data.data.list : [],
        darenData: darenData.data ? darenData.data.data : [],
        newListData: newListData.data ? newListData.data.data : [],
        statisticsData: statisticsData.data ? statisticsData.data.data : []
      }
    } else {
      error({ statusCode: 500, message: '查找不到该专线列表' })
    }
  },
  created() {
    //优质货主
    // this.shipperData = this.shipperData.list
    //   ? this.shipperData.list
    //   : { list1: [], list2: [] }
    // //本月货主
    // this.monthShipperData = this.monthShipperData.list
    //   ? this.monthShipperData.list
    //   : []
    // //货源推荐
    // this.recommendData = this.recommendData.list ? this.recommendData.list : []

    //处理优质货主数据
    if (this.shipperData.length > 5) {
      let list1 = this.shipperData.filter((value, index, arr) => {
        return index < 5
      })
      let list2 = this.shipperData.filter((value, index, arr) => {
        return index > 4
      })
      this.shipperData = { list1: list1, list2: list2 }
      console.log('优质货主数据处理', this.shipperData)
    } else {
      this.shipperData.list1 = this.shipperData
    }
  },
  mounted() {
    let that = this
    this.$nextTick(() => {
      this.getCookies()
      this.intSwiper1()
      this.intSwiper2()
      this.getUser()
      console.log('优质货主', this.shipperData)
      console.log('本月货主', this.monthShipperData)
      console.log('货源推荐', this.recommendData)
      console.log('热门城市', this.hotCityData)
      console.log('货量达人', this.darenData)
      console.log('24小时在线新闻', this.newListData)
      console.log('统计数据', this.statisticsData)
      console.log('获取本地cookies', this.currentProvince, this.currentArea)
      console.log('获取用户token', this.isToken, this.mobile)
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
      $('body').on('login.success', () => {
        that.isToken = $.cookie('access_token') ? true : false
        that.mobile = $.cookie('login_mobile')
        // console.log('vue打印', that)
        // alert($.cookie('access_token'))
      })
    })
  },
  methods: {
    //登录
    showLogin() {
      $('body').trigger('login.show')
    },
    //获取用户信息
    getUser() {
      this.isToken = $.cookie('access_token') ? true : false
      this.mobile = $.cookie('login_mobile')
    },
    //幻灯片
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
          }
        })
      })
    },
    //处理获取数据
    getCookies() {
      //获取cookies
      //$.cookie
      this.currentProvince = $.cookie('currentProvinceFullName')
      this.currentArea = $.cookie('currentAreaFullName')
    },
    //搜索货源
    groomSearch() {
      let startPlace = until.getPlace('#huoyuan_from1')
      let endPlace = until.getPlace('#huoyuan_from2')

      // 开始城市赋值
      this.hyStartProvince = startPlace.province
      this.hyStartCity = startPlace.city
      this.hyStartArea = startPlace.area
      //到达城市赋值
      this.hyEndProvince = endPlace.province
      this.hyEndCity = endPlace.city
      this.hyEndArea = endPlace.area
      console.log(
        '开始城市赋值',
        this.hyStartProvince,
        this.hyStartCity,
        this.hyStartArea
      )
      console.log(
        '到达城市赋值',
        this.hyEndProvince,
        this.hyEndCity,
        this.hyEndArea
      )

      //跳转
      let huoyuanUrl = `/huoyuan?startProvince=${
        this.hyStartProvince
      }&startCity=${this.hyStartCity}&startArea=${
        this.hyStartArea
      }&endProvince=${this.hyEndProvince}&endCity${this.hyEndCity}&endArea${
        this.hyEndArea
      }`
      window.open(huoyuanUrl, '_blank')
    },
    //订阅货源
    sendNotice() {
      if (!this.isToken) {
        let startPlace = until.getPlace('#sub_star')
        let endPlace = until.getPlace('#sub_end')
        //开始
        this.dataInfo.startProvince = startPlace.province
        this.dataInfo.startCity = startPlace.city
        this.dataInfo.startArea = startPlace.area
        //结束
        this.dataInfo.endProvince = endPlace.province
        this.dataInfo.endCity = endPlace.city
        this.dataInfo.endArea = endPlace.area

        if (!this.dataInfo.startProvince && !this.dataInfo.endCity) {
          layer.msg('出发地省市不能为空！')
          return false
        }
        if (!this.dataInfo.endProvince && !this.dataInfo.endCity) {
          layer.msg('到达地省市不能为空！')
          return false
        }
        this.isShowAdd = true
      }
    },
    //点击领取红包
    redPaperFn() {
      layer.open({
        type: 1,
        title: '红包大派送',
        area: ['800px', '560px'], //宽高
        content: $('#hongbao')
      })
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/common_index.scss';
/*全局影响样式处理*/
a {
  span,
  p {
    color: $tit_color;
  }
}
/*******不同导航不同样式修改******/
.header {
  margin-bottom: 0 !important;
}
.header_bottom {
  height: 45px !important;
  background: #fff !important;

  ul {
    padding-left: 230px;
    width: 1170px !important ;
    > span {
      display: none !important;
    }
    li {
      margin-left: 0 !important;
      line-height: 45px !important;
      &.nav-active {
        > a {
          color: #1f81fe !important;
        }
        background: none !important;
      }
      &:hover {
        > a {
          color: #1f81fe !important;
        }
        background: none !important;
      }
      > span {
        display: none !important;
      }
      > a {
        color: #333 !important;
      }
    }
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
  .p_centre_title {
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
  margin: 0 auto 90px auto;
  width: $w_1400;
  font-size: $f_14;
  > .col1 {
    @extend .fl;
    display: table;
    word-spacing: -1em;
    width: 1102px;
    font-size: 0;
  }
  > .col2 {
    @extend .fr;
    width: 298px;
    height: 220px;
    font-style: 0;
  }
  .rank_box {
    position: relative;
    margin-right: 20px;
    display: inline-block;
    width: 345px;
    height: 218px;
    color: $tit_color;
    font-size: 14px;
    border: 1px solid #e1eef7;
    background: url('../../static/images/huizong/bj_daren.jpg') no-repeat;
    .rank_hd {
      overflow: hidden;
      margin: 30px 0 20px 0;
      font-size: $f_16;
      text-align: center;
      > span {
        display: inline-block;
        line-height: 22px;
        &.rank_hd_name {
          padding-right: 55px;
          font-weight: bold;
          background: url('../../static/images/huizong/icon_real.png') center
            right no-repeat;
        }
      }
    }
    .rank_bd {
      padding: 0 20px;
      .rank_bd_num {
        font-size: $f_16;
        color: $txt_red_color;
      }
      .rank_bd_list {
        > li {
          margin-bottom: 10px;
          padding-left: 10px;
          line-height: 20px;
          background: url('../../static/images/huizong/icon_square.jpg') left
            9px no-repeat;

          .icon_square {
            color: #ed1818;
            font-size: 12px;
          }
        }
      }
      .rank_bd_prize {
        padding-left: 33px;
        height: 36px;
        line-height: 36px;
        background: url('../../static/images/huizong/icon_prize.png') no-repeat;
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

/*新手步骤*/
.novice_steps {
  margin: 0 auto;
  width: $w_1400;

  .step-container {
    .step-item-hd {
      padding: 20px 0;
      font-size: $f_16;
      color: $tit_blue_color;
      text-align: center;
    }
    .step-item-box {
      width: 188px;
      height: 206px;
      background: $white;
      text-align: center;
      border-radius: 5px;
      box-shadow: 0px 0px 8px #bbb;
      .step-item-md {
        margin: 0 auto;
        width: 74px;
        height: 74px;
        background: url('../../static/images/huizong/icon_step.png') no-repeat;
        background-position: 0px 0px;
      }
      .icon-step2 {
        background-position: -75px 0px;
      }
      .icon-setp3 {
        background-position: -150px 0px;
      }
      .icon-step4 {
        background-position: -225px 0px;
      }
      .icon-step5 {
        background-position: -300px 0px;
      }
      .icon-step6 {
        background-position: 0px -75px;
      }
      .step-item-ft {
        margin: 20px 20px 0 20px;
        line-height: 20px;
        font-size: 12px;
        color: $tit_color;
      }
    }
    > .img-wrapper {
      width: 51px;
      height: 184px;
      background: url('../../static/images/huizong/step_line.png') left center
        no-repeat;
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
    width: 1216px;
    height: 278px;
    background: $white;
    > li {
      overflow: hidden;
      @extend .fl;
      // margin: 0 30px 30px 30px;
      width: 200px;
      height: 139px;
      // vertical-align: middle;
      text-align: center;
      > img {
        margin-top: 39px;
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
