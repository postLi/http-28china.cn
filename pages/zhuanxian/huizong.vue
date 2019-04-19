<template>
  <div>
    <div class="bj_white">
      <div class="grid_c1 category clearfix">
        <div class="col1 fl">
          <div class="category_app">
            <img src="../../static/images/huizong/zhuanxian/app.png">
          </div>
          <div class="p_category_menu">
            <h4 class="category_menu_title">
              <i class="iconfont iconchengshidingwei"/>
              热门城市
            </h4>
            <div 
              class="category_menu_list"
              v-if="hotCityData.length>0">
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
        <div class="col2 category_ad fl clearfix">
          <div class="ad_big fl">
            <img src="../../static/images/huizong/zhuanxian/banner.png">
          </div>
          <div class="ad_right fr">        
            <div class="ad_right_item"><img src="../../static/images/huizong/zhuanxian/adlet1.png"></div>
            <div class="ad_right_item"><img src="../../static/images/huizong/zhuanxian/adlet2.png"></div>
            <div class="ad_right_item"><img src="../../static/images/huizong/zhuanxian/adlet3.png"></div>
          </div>
          <!-- 幻灯片 -->
        </div>
        <div class="col3 fr">
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
              <p class="user_txt">您好，{{ loginMobile }} <a href="/exit">【安全退出】</a></p>
              <p class="user_profit">
                <a href="/hyzx">会员中心</a>
              </p>
            </div>

          </div>
          <!-- 用户登录 -->
          <div 
          class="p_me_groom">
            <div class="gr_text">
              <h4 class="gr_text_title">帮我推荐&#x3e;</h4>
              <div class="gr_text_txt">平台推荐，资质保障，为您快速匹配时效快、平价、安心、专业的专线</div>
              <div class="p_groom_submit clearfix">
                <input 
                  type="text"                 
                  placeholder="请输入您的手机号"
                  class="fl">
                <button                
                  class="fl"
                  @click="groomMeFn">帮我推荐</button>
              </div>
            </div>
            <div class="gr_operate">
              <a href="">快速下单</a>
              <a href="">查询运单</a>
            </div>
            <div class="gr_oder_num">今日已有<b>2368</b>人在线下单获得优惠</div>   
          </div>
 
        </div>
      </div>
    </div>
    <!-- 物流专线hd -->
    <div class="grid_c1 zx_terrace clearfix">    
      <div class="p_title_box">
        <h3 class="title">平台推荐</h3>
        <span class="title_txt">平台推荐，资质保障</span>
        <a 
          href="" 
          class="title_link fr">更多优质专线<i class="iconfont iconxiaojiantouhuise"/>
        </a>         
      </div>
      <div class="pt_groom fl">
        <ul 
          :class="['hd','clearfix',groomClass]" 
        >
          <li 
            :class="[{'active':groomIndex==0},'channel1']" 
            @mouseover="groomTab(0)" > 
            <h6 class="pt_groom_tit">担保交易</h6>
            <div class="pt_groom_txt">
              平台担保，安全可靠          
            </div>
            <div class="pt_groom_explain pt_groom_bj1">
              <span class="groom_explain_tit">线上担保</span>
              <span class="groom_explain_txt">服务安全保障</span>
            </div>
          </li>
          <li
            :class="[{'active':groomIndex===1},'channel2']" 
            @mouseover="groomTab(1)">
            <h6 class="pt_groom_tit">超值特惠</h6>
            <div class="pt_groom_txt">
              价格直降，超值独享             
            </div>
            <div class="pt_groom_explain pt_groom_bj2">
              <span class="groom_explain_tit">专享优惠</span>
              <span class="groom_explain_txt">优惠推荐低价专线</span>             
            </div>
          </li>
          <li 
            :class="[{'active':groomIndex===2},'channel3']" 
            @mouseover="groomTab(2)">
            <h6 class="pt_groom_tit">精准时效</h6>
            <div class="pt_groom_txt">
              及时、高效、保质量            
            </div>
            <div class="pt_groom_explain pt_groom_bj3">
              <span class="groom_explain_tit">精准时效</span>
              <span class="groom_explain_txt">物流时效服务有保证</span>             
            </div>
          </li>
          <li
            :class="[{'active':groomIndex===3},'channel4']" 
            @mouseover="groomTab(3)">
            <h6 class="pt_groom_tit">28信用</h6>
            <div class="pt_groom_txt">
              平台认证，推荐专线              
            </div>
            <div class="pt_groom_explain pt_groom_bj4">
              <span class="groom_explain_tit">资质认证</span>
              <span class="groom_explain_txt">实力承运</span>              
            </div>
          </li>
        </ul>
        <div class="bd">
          <div v-show="groomIndex===0">
            <ul 
              class="p_hy_list p_wl_list clearfix"
              v-if="pTbusinessData.length>0">
              <li 
                v-for="(item,index) in pTbusinessData"
                :key="index">
                <div class="wl_box">
                  <div class="hd_box">
                    <span class="p_l5">物流商:</span>
                    <span>{{ item.companyName }}</span>
                    <span><creditIcon :credit="item.credit" /></span>
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
                    <span class="p_l5">货重:</span>
                    <span class="type_item"><b>{{ item.weightPrice }}</b></span>
                    <span class="type_item color_gray"><span class="type_line_through">{{ item.weightDiscountPrice }}</span>元／平方</span>
                  </div>
                  <div class="type_box">
                    <span class="p_l5">轻货:</span>
                    <span class="type_item"><b>{{ item.lightPrice }}</b></span>
                    <span class="type_item color_gray"><span class="type_line_through">{{ item.lightDiscountPrice }}</span>元／立方</span>
                  </div>
                  <div class="item_order_num">已有{{ item.orderNumber }}人下单</div>
                </div>
                <div class="item_order clearfix">
                  <div class="order_name fl">担保交易</div>
                  <div class="dock fl">
                    <span class="dock_icon">延时赔付</span>
                    <span class="dock_num">{{ item.goodEvaCount }}人说好</span>
                  </div>
                  <div class="link_oder fr"><a href="">立即下单</a></div>
                </div>
              </li>
 
            </ul>
          </div>
          <div v-show="groomIndex===1">
            <ul 
              class="p_hy_list p_wl_list clearfix"
              v-if="pToddsData.length>0">
              <li 
                v-for="(item,index) in pToddsData"
                :key="index">
                <div class="wl_box">
                  <div class="hd_box">
                    <span class="p_l5">物流商:</span>
                    <span>{{ item.companyName }}</span>
                    <span><creditIcon :credit="item.credit" /></span>
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
                    <span class="p_l5">货重:</span>
                    <span class="type_item"><b>{{ item.weightPrice }}</b></span>
                    <span class="type_item color_gray"><span class="type_line_through">{{ item.weightDiscountPrice }}</span>元／平方</span>
                  </div>
                  <div class="type_box">
                    <span class="p_l5">轻货:</span>
                    <span class="type_item"><b>{{ item.lightPrice }}</b></span>
                    <span class="type_item color_gray"><span class="type_line_through">{{ item.lightDiscountPrice }}</span>元／立方</span>
                  </div>
                  <div class="item_order_num">已有{{ item.orderNumber }}人下单</div>
                </div>
                <div class="item_order clearfix">
                  <div class="order_name fl">担保交易</div>
                  <div class="dock fl">
                    <span class="dock_icon">延时赔付</span>
                    <span class="dock_num">{{ item.goodEvaCount }}人说好</span>
                  </div>
                  <div class="link_oder fr"><a href="">立即下单</a></div>
                </div>
              </li>
 
            </ul>
          </div>
          <div v-show="groomIndex===2">
            <ul 
              class="p_hy_list p_wl_list clearfix"
              v-if="pTagingData.length>0">
              <li 
                v-for="(item,index) in pTagingData"
                :key="index">
                <div class="wl_box">
                  <div class="hd_box">
                    <span class="p_l5">物流商:</span>
                    <span>{{ item.companyName }}</span>
                    <span><creditIcon :credit="item.credit" /></span>
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
                    <span class="p_l5">货重:</span>
                    <span class="type_item"><b>{{ item.weightPrice }}</b></span>
                    <span class="type_item color_gray"><span class="type_line_through">{{ item.weightDiscountPrice }}</span>元／平方</span>
                  </div>
                  <div class="type_box">
                    <span class="p_l5">轻货:</span>
                    <span class="type_item"><b>{{ item.lightPrice }}</b></span>
                    <span class="type_item color_gray"><span class="type_line_through">{{ item.lightDiscountPrice }}</span>元／立方</span>
                  </div>
                  <div class="item_order_num">已有{{ item.orderNumber }}人下单</div>
                </div>
                <div class="item_order clearfix">
                  <div class="order_name fl">担保交易</div>
                  <div class="dock fl">
                    <span class="dock_icon">延时赔付</span>
                    <span class="dock_num">{{ item.goodEvaCount }}人说好</span>
                  </div>
                  <div class="link_oder fr"><a href="">立即下单</a></div>
                </div>
              </li>
 
            </ul>
          </div>
          <div v-show="groomIndex===3">
            <ul 
              class="p_hy_list p_wl_list clearfix"
              v-if="pTcreditData.length>0">
              <li 
                v-for="(item,index) in pTcreditData"
                :key="index">
                <div class="wl_box">
                  <div class="hd_box">
                    <span class="p_l5">物流商:</span>
                    <span>{{ item.companyName }}</span>
                    <span><creditIcon :credit="item.credit" /></span>
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
                    <span class="p_l5">货重:</span>
                    <span class="type_item"><b>{{ item.weightPrice }}</b></span>
                    <span class="type_item color_gray"><span class="type_line_through">{{ item.weightDiscountPrice }}</span>元／平方</span>
                  </div>
                  <div class="type_box">
                    <span class="p_l5">轻货:</span>
                    <span class="type_item"><b>{{ item.lightPrice }}</b></span>
                    <span class="type_item color_gray"><span class="type_line_through">{{ item.lightDiscountPrice }}</span>元／立方</span>
                  </div>
                  <div class="item_order_num">已有{{ item.orderNumber }}人下单</div>
                </div>
                <div class="item_order clearfix">
                  <div class="order_name fl">担保交易</div>
                  <div class="dock fl">
                    <span class="dock_icon">延时赔付</span>
                    <span class="dock_num">{{ item.goodEvaCount }}人说好</span>
                  </div>
                  <div class="link_oder fr"><a href="">立即下单</a></div>
                </div>
              </li>
 
            </ul>
          </div>
        </div>
      </div>
      <div class="pt_discount fr">
        <h4 class="discount_tit">优惠礼券</h4>
        <ul class="discount_ad_list">
          <li>
            <a href="#">
              <img src="../../static/images/huizong/zhuanxian/discount_ad1.png">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../../static/images/huizong/zhuanxian/discount_ad2.png">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../../static/images/huizong/zhuanxian/discount_ad3.png">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../../static/images/huizong/zhuanxian/discount_ad4.png">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 平台推荐 -->
    <div class="p_zx_info clearfix">
      <div class="info_col1 fl clearfix">
        <div class="info_tit fl">
          <span class="info_line_left"/>
          <span class="info_line_right"/>
          <h3>最新成交用户</h3>
        </div>
        <div class="info_user_box fl">
          <ul class="info_user_list">
            <li>
              <div class="info_user_info">
                <span class="info_user_info_user">11用户159****4895 </span>
                <span class="info_user_info_time">3分钟前</span>
              </div>
              <div class="info_user_text ">
                <span>发布<b>广州</b>到<b>长沙</b>货源  粤F***61 </span>
                <span>钢材| 31件|51公斤|体积21方  </span>                   
                <a 
                  href=""
                  class="info_user_text_link fr">查看货源</a>
              </div>
            </li>
            <li>
              <div class="info_user_info">
                <span class="info_user_info_user">22用户159****4895 </span>
                <span class="info_user_info_time">3分钟前</span>
              </div>
              <div class="info_user_text ">
                <span>发布<b>广州</b>到<b>长沙</b>货源  粤F***61 </span>
                <span>钢材| 31件|51公斤|体积21方  </span>                   
                <a 
                  href=""
                  class="info_user_text_link fr">查看货源</a>
              </div>
            </li>
            <li>
              <div class="info_user_info">
                <span class="info_user_info_user">33用户159****4895 </span>
                <span class="info_user_info_time">3分钟前</span>
              </div>
              <div class="info_user_text ">
                <span>发布<b>广州</b>到<b>长沙</b>货源  粤F***61 </span>
                <span>钢材| 31件|51公斤|体积21方  </span>                   
                <a 
                  href=""
                  class="info_user_text_link fr">查看货源</a>
              </div>
            </li>   
          </ul>
        </div>
      </div>
      <div class="info_col2 fl clearfix">
        <div class="info_num">
          <ul class="info_list clearfix">
            <li>
              <span><i class="iconfont icondangqianhuowu"/>当前货物</span>
              <span class="info_list_num">{{ statisticsData.goodsCount }}</span>
            </li>
            <li>
              <span><i class="iconfont iconwuliuzhuanxian"/>物流专线</span>
              <span class="info_list_num">{{ statisticsData.transportRangeCount }}</span>
            </li>
            <li>
              <span><i class="iconfont iconcheyuanxinxi"/>当前车源</span>
              <span class="info_list_num">{{ statisticsData.carInfoCount }}</span>
            </li>
          </ul>
          <ul class="info_text_list">
            <li><i class="iconfont iconshang--jiantou"/>今日新增:</li>
            <li>货源<span class="info_text_num">{{ statisticsData.toDayGoodsCount }}</span></li>
            <li>专线<span class="info_text_num">{{ statisticsData.toDayTransportRangeCount }}</span></li>
            <li>车源<span class="info_text_num">{{ statisticsData.toDayCarInfoCount }}</span></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 最新成交用户 -->
    <div class="p_hy_groom clearfix">
      <div class="hd clearfix">
        <h3 class="gr_title">热门专线</h3>
        <div class="gr_txt"><span>180789</span>条专线，为您优选12条热门优质专线</div>
        <div class="gr_sch">
          <div 
            id="hot_start"
            class="gr_sch_city">
            <input 
              type="text" 
              placeholder="请输入出发地" 
              id="zx_pageinp1">
          </div>
          <div class="gr_sch_icon"><i class="iconfont iconjiantou_xiangyou_o"/></div>
          <div 
            id="hot_end"
            class="gr_sch_city">
            <input 
              type="text" 
              placeholder="请输入到达地" 
              id="zx_pageinp2">
          </div>
          <div class="gr_sch_btn"><a
            @click="hotSearch()"
          >搜索</a></div>
        </div>
        <a 
          :href="'/zhuanxian/list?startp='+currentProvince+'&startc='+currentCity" 
          target="_blank"
          class="gr_link">全部专线<i class="iconfont iconxiaojiantouhuise"/></a>
      </div>
      <div class="p_type_nav">
        <a 
          target="_blank"
          :href="'/zhuanxian/list?startp='+currentProvince + '&startc=' +currentCity+'&orderBy=creditDesc'">信誉最高</a>
        <a 
          target="_blank"
          :href="'/zhuanxian/list?startp='+currentProvince + '&startc=' +currentCity+'&orderBy=orderDesc'">交易量</a>
        <a 
          target="_blank"
          :href="'/zhuanxian/list?startp='+currentProvince + '&startc=' +currentCity+'&orderBy=creditDesc'">运输时效</a>
        <a 
          target="_blank"
          :href="'/zhuanxian/list?startp='+currentProvince + '&startc=' +currentCity+'&orderBy=transportAgingAsc'"
        >重货价格最低</a>
        <a 
          target="_blank"
          :href="'/zhuanxian/list?startp='+currentProvince + '&startc=' +currentCity+'&orderBy=creditDesc'">轻货价格最低</a>
      </div>
      <div class="bd">
        <ul class="p_hot_line clearfix">
          <li
            v-for="(item,index) in hotLineData"
            :key="index">
            <div class="hot_line_box">
              <div class="h_pic">   
                <a 
                  target="_blank"
                  :href="'/zhuanxian/detail?id='+item.id+'&publishId='+item.companyId">     
                  <img :src="item.rangeLogo">
                </a>
              </div>
              <div class="wl_box">
                <!-- @click="toLineDetail(item)" -->
                <div class="h_place">
                  <span 
                  class="icon icon_start">始</span>
                  <span class="place">{{ item.startLocation }}</span>
                  <span class="icon icon_end">终</span>
                  <span class="place">{{ item.endLocation }}</span>
                </div>
                <div class="h_company">
                  <div class="name fl"><a 
                    :href="'/member/'+item.companyId"
                    target="_blank">{{ item.companyName }}</a></div>
                  <div 
                    v-if="item.isEq"
                    class="icon_box fl">
                    <creditIcon :credit="item.credit" />
                  </div>
                  <a 
                    :href="'http://wpa.qq.com/msgrd?v=3&uin='+item.qq+'&site=qq&menu=yes'"
                    target="_blank">  <span 
                   
                  class="fr icon_qq"/></a>
                
                </div>
                <div class="h_praise">
                  <div class="fl"><span>好评</span>{{ item.goodEvaCount }}</div>
                  <div class="fl"><span>浏览量</span>{{ item.browseNumber }}</div>
                </div>
                <div class="type_box m_t10">
                  <span class="name">重货:</span>
                  <span class="item"><b>{{ item.weightPrice }}</b></span>
                  <span class="item color_gray"><span class="line-through">{{ item.weightDiscountPrice }}</span>元／公斤</span>
                </div>
                <div class="type_box">
                  <span class="name">轻货:</span>
                  <span class="item"><b>{{ item.lightPrice }}</b></span>
                  <span class="item color_gray"><span class="line-through">{{ item.lightDiscountPrice }}</span>元／m³</span>
                  <div class="icon_list fr">
                    <span 
                      v-if="item.isbao"
                      class="item_icon icon_blue">保</span>
                    <span
                      v-if="item.isYun" 
                      class="item_icon icon_red">运</span>
                    <span 
                      v-if="item.isDai"
                      class="item_icon">代</span>
                    <span 
                      v-if="item.isPiao"
                      class="item_icon icon_green">票</span>
                  </div>
                </div>
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    :href="'/create/line?startp='+currentProvince+'&startc='+currentCity"
                    target="_blank"
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
              </div>
            </div>
          </li>
        
        </ul>
      </div>
    </div>
    <!-- 热门专线 -->
    <div class="grid_c1 zx_business">
      <div class="business_total">
        <span class="business_total_txt1">平台已撮合</span>
        <span class="business_total_num">5</span>
        <span class="business_total_num">3</span>
        <span class="business_total_num">8</span>
        <span class="business_total_num">8</span>
        <span class="business_total_num">2</span>
        <span class="business_total_txt2">货源达成交易</span>
      </div>
      <div class="p_zx_btn_box">
        <a 
          :href="'/create/line?startp='+currentProvince+'&startc='+currentCity"
          target="blank"
          class="btn_order">快速下单</a>
      </div>
      <p class="business_total_explain">一键下单，运力30秒快速响应</p>
    </div>
    <!-- 快速下单 -->
    <div class="bj_2">
      <div class="grid_c1 drop_groom clearfix">    
        <div class="p_title_box">
          <h3 class="title">降价专线推荐</h3>
          <span class="title_txt">距结束<b>3</b>天15时<b>23</b>分<b>17</b>秒</span>
          <a 
            :href="'/zhuanxian/list?startp='+currentProvince+'&startc='+currentCity" 
            target="_blank"
            class="title_link fr">全部专线<i class="iconfont iconjiantou2"/>
          </a>         
        </div>
        <ul class="p_hot_line clearfix">
          <li 
            v-for="(item,index) in priceData"
            :key="index">
            <div class="hot_line_box">
              <div class="h_pic">        
                <a 
                  target="_blank"
                  :href="'/zhuanxian/detail?id='+item.id+'&publishId='+item.companyId">
                  <img :src="item.rangeLogo || '/images/pic/bg' + item.num + '.png'">
                </a>
              
              </div>
              <div class="wl_box">
                <div 
                  class="h_place"
                  style="cursor:pointer"
                  @click="toLineDetail(item)"
                >
                  
                  <span 
                    style="margin-right:5px"
                    class="icon icon_start">始</span>
                  <span class="place">{{ item.startLocation.length>5?item.startLocation.substring(0,5)+'..':item.startLocation }}</span>
                  <span 
                    style="margin-right:5px"
                    class="icon icon_end">终</span>
                  <span class="place">{{ item.endLocation.length>6?item.endLocation.substring(0,6)+'..':item.endLocation }}</span>
                </div>
                <div class="h_company">
                  <div class="name fl"><a 
                    :href="'/member/'+item.companyId"
                    target="_blank">{{ item.companyName }}</a></div>
                  <div class="icon_box fl">
                    <creditIcon :credit="item.credit" />
                  </div>
                  <a 
                    :href="'http://wpa.qq.com/msgrd?v=3&uin='+item.qq+'&site=qq&menu=yes'"
                    target="_blank"><span 
                      class="fr icon_qq"
                  /></a>
                </div>
                <div class="h_type m_t10">
                  <span class="icon_sale">{{ item.weightDiscount?((item.weightDiscount)/10).toFixed(2):item.weightDiscount }}折</span>
                  <div class="type_box">
                    <span class="name">重货:</span>
                    <span class="item"><b>{{ item.weightPrice }}</b></span>
                    <span class="item color_gray"><span class="line-through">{{ item.weightDiscountPrice }}</span>元／公斤</span>
                  </div>
                  <div class="type_box">
                    <span class="name">轻货:</span>
                    <span class="item"><b>{{ item.lightPrice }}</b></span>
                    <span class="item color_gray"><span class="line-through">{{ item.lightDiscountPrice }}</span>元／m³</span>
                  </div>
                </div>
                <div class="h_market">
                  <span class="h_market_price fl">比行情价格低<span 
                    class="h_market_num"
                    style="padding-left:3px">{{ item.belowMarketPrice }}%</span></span>
                  <span class="h_market_order fr">已有{{ item.orderNumber }}人下单</span>
                </div>
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    :href="'/create/line?startp='+currentProvince+'&startc='+currentCity"
                    target="_blank"
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
              </div>
            </div>
          </li>
         
        </ul>
      </div>
    </div>
    <!-- 降价专线推荐 -->
    <div class="grid_c1 drop_publish"> 
      <div class="drop_publish_txt fl">
        <h3 class="publish_txt_tit">我也要降价发布</h3>
        <div class="publish_txt_explain">更多曝光机会，让更多货主联系您</div>
      </div>
      <div class="p_zx_btn_box fr">
        <a 
          :href="'/zhuanxian/list?startp='+currentProvince+'&startc='+currentCity" 
          target="_blank"
        >快速发布专线</a>
      </div>
    </div>
    <!-- 降价发布 -->
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
    <!-- 本月优质承运 -->
    <!-- <div class="grid_c1 groom_login">
      <div class="groom_box">
        <div class="p_groom_submit clearfix">
          <input 
            type="text" 
            placeholder="请输入您的手机号"
            class="fl">
          <button class="fl">帮我推荐</button>
          <span class="error">请输入正确的手机号</span>
        </div>
        <p class="explain">平台推荐，资质保障，为您快速匹配时效快、平价、安心、专业的专线</p>
      </div>
    </div> -->
    <div class="grid_c1 groom_me">
      <div class="groom_me_box clearfix">
        <input 
          type="text" 
          placeholder="请输入您的手机号"
          class="me_box_input fl" >
        <a 
          class="me_box_btn fl"
          @click="groomMeFn">帮我推荐</a>
      </div>
      <div class="groom_me_txt">平台推荐，资质保障，为您快速匹配时效快、评价、安心、专业的专线</div>
    </div>
    <!-- 帮我推荐 -->
    <div class="bj_2">
      <div class="grid_c1 shipper_say">
        <div class="p_centre_title clearfix">
          <div class="title_line_box fl">
          <span/></div> <h3 class="title_txt fl">3800万用户的共同选择！</h3> <div class="title_line_box fl"><span/>
          </div>
        </div>
        <div class="zx_sub_title clearfix">
          <img 
            src="../../static/images/huizong/zhuanxian/tit_icon.png" 
            class="sub_title_icon" 
            alt="">
          <span class="sub_title_word">货主说</span>
          <img 
            src="../../static/images/huizong/zhuanxian/tit_icon.png" 
            class="sub_title_icon" 
            alt="">
        </div>

        <ul class="shipper_say_content clearfix">
          <li class="shipper_say_item ">
            <a href="">
              <img 
                src="../../static/images/huizong/_shiper.png" 
                class="shipper_say_img" 
                alt="">
              <div class="shipper_say-word_box js-shipper_say-word_box">
                <p class="shipper_say_name">货主：意先生</p>
                <p class="shipper_say_name">马自达6：7.40万元</p> 
                <p class="shipper_say_des">因为有了娃所以想换一辆B级车，当我看到这台马自达6时，当即感觉就是它！复检时发现这辆车可能调过表，人人车的工作人员帮我核实了4S店保养记录，最终安心入手，真的很给力！</p> 
                <div class="shipper_say_mask js-shipper_say_mask"/> 
              </div>
            </a>
          </li>
          <li class="shipper_say_item shipper_say-item_middle">
            <a href="">
              <img 
                src="../../static/images/huizong/_shiper.png" 
                class="shipper_say_img" 
                alt="">
              <div class="shipper_say-word_box js-shipper_say-word_box">
                <p class="shipper_say_name">货主：意先生</p>
                <p class="shipper_say_name">马自达6：7.40万元</p> 
                <p class="shipper_say_des">因为有了娃所以想换一辆B级车，当我看到这台马自达6时，当即感觉就是它！复检时发现这辆车可能调过表，人人车的工作人员帮我核实了4S店保养记录，最终安心入手，真的很给力！</p> 
                <div class="shipper_say_mask js-shipper_say_mask"/> 
              </div>
            </a>
          </li>
          <li class="shipper_say_item ">
            <a href="">
              <img 
                src="../../static/images/huizong/_shiper.png" 
                class="shipper_say_img" 
                alt="">
              <div class="shipper_say-word_box js-shipper_say-word_box">
                <p class="shipper_say_name">买家：意先生</p>
                <p class="shipper_say_name">马自达6：7.40万元</p> 
                <p class="shipper_say_des">因为有了娃所以想换一辆B级车，当我看到这台马自达6时，当即感觉就是它！复检时发现这辆车可能调过表，人人车的工作人员帮我核实了4S店保养记录，最终安心入手，真的很给力！</p> 
                <div class="shipper_say_mask js-shipper_say_mask"/> 
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 货主要说 -->
    <div class="grid_c1 zx_our_virtue clearfix">
      <div class="virtue_item virtue_left">
        <h6 class="virtue_item_tit">快</h6>
        <ul class="virtue_list">
          <li>一键下单，运力30秒快速响应
          </li>
          <li>就近指派司机，20分钟内车辆闪电抵达提货</li>
          <li> 同城4小时完成配送</li>
          <li>城际当天到达</li>
          <li>省际最快次日到货</li>
        </ul>
      </div>
      <div class="virtue_item virtue_middle">
        <h6 class="virtue_item_tit">好</h6>
        <ul class="virtue_list">
          <li>一键下单，运力30秒快速响应
          </li>
          <li>全程可视化跟踪，随时随地一键查询在途信息</li>
          <li> 到货预约和短信通知</li>
          <li>智能签收与电子回单</li>
        </ul>
      </div>
      <div class="virtue_item virtue_right">
        <h6 class="virtue_item_tit">省</h6>
        <ul class="virtue_list">
          <li>全网比价竞价，优选低价</li>
          <li> 大量回头车辆，价低质优，货主省钱，司机赚钱</li>
          <li>一键发货和跟踪，全程省心</li>
        </ul>
      </div>
    </div>
    <!-- 我们的优势 -->
    <div class="grid_c1 check_in">
      <div class="check_in_tit fl">快速成为承运商获取优质货源</div>
      <div class="p_zx_btn_box fr">
        <a 
          href="/regisiter"
          target="blank">我要入驻</a>
      </div>
    </div>
    <!-- 入住 -->
    <div class="order_step">
      <div class="step_box">
        <h3 class="step-title">在线下单流程</h3>
        <div class="step_txt">
          <p class="step_txt_title">一键下单</p>
          <p class="step_txt_text">线上支付，平台担保</p>
        </div>
        <ul class="step_list">
          <li class="step_item">
            <i class="iconfont iconxiadan1"/>           
            <div class="step_item_txt">下单</div>
          </li>
          <!-- <li class="step_icon"><i class="iconfont iconjiantou_xiangyouliangci_o"/></li> -->
          <li class="step_item">
            <i class="iconfont iconshouli"/>
            <div class="step_item_txt">受理</div>
            
          </li>
          <!-- <li class="step_icon"><i class="iconfont iconjiantou_xiangyouliangci_o"/></li> -->
          <li class="step_item">
            <i class="iconfont iconlanshou"/>
            <div class="step_item_txt">揽收</div>
            
          </li>
          <!-- <li class="step_icon"><i class="iconfont iconjiantou_xiangyouliangci_o"/></li> -->
          <li class="step_item">
            <i class="iconfont iconyunshu"/>
            <div class="step_item_txt">运输</div>
            
          </li>
          <!-- <li class="step_icon"><i class="iconfont iconjiantou_xiangyouliangci_o"/></li> -->
          <li class="step_item">
            <i class="iconfont iconqianshou"/>
            <div class="step_item_txt"> 签收</div>
          </li>

        </ul>
      </div>
    </div>
    <!-- 在线下单流程 -->
    <div class="bj_2">
      <div class="p_answers">
        <div class="zx_sub_title clearfix">
          <img 
            src="../../static/images/huizong/zhuanxian/tit_icon.png" 
            class="sub_title_icon" 
            alt="">
          <span class="sub_title_word">28问答</span>
          <img 
            src="../../static/images/huizong/zhuanxian/tit_icon.png" 
            class="sub_title_icon" 
            alt="">
        </div>
        <ul class="answers_list">
          <li>
            <p class="answers_list_tit"><i class="iconfont iconwenda"/>什么是订阅货源？</p>
            <p>您可以选择自己常跑的线路，订阅成功后，此线路有新发货源则会在APP即时提醒您</p>
          </li>
          <li>
            <p class="answers_list_tit"><i class="iconfont iconwenda"/>怎么在平台接单？</p>
            <p> 您可以选择自己常跑的线路，订阅成功后，此线路有新发货源则会在APP即时提醒您</p>
          </li>
          <li>
            <p class="answers_list_tit"><i class="iconfont iconwenda"/>怎么申请成为推荐承运商</p>
            <p>您可以选择自己常跑的线路，订阅成功后，此线路有新发货源则会在APP即时提醒您</p>
          </li>
          <li>
            <p class="answers_list_tit"><i class="iconfont iconwenda"/>承运商入驻需要什么材料？</p>
            <p> 您可以选择自己常跑的线路，订阅成功后，此线路有新发货源则会在APP即时提醒您</p>
          </li>
        </ul>
        <div class="answers_questions">
          <div class="answers_questions_btn">
            <a 
              href="/help/ggp/index.jhtml"
              target="blank"
              class="btn_release">我要提问</a>
          </div>
          <p>提交您的疑问，客服将在3分钟内与您联系进行解答</p>
        </div>
      </div>
    </div>
    <!-- 28问答 -->
    <div class="MD-home-qa-qa-area MD-home-qa-js-qa-area">
      <div class="MD-home-qa-left">
        <a 
          href="" 
          class="MD-home-qa-qa-hot qa-hot">
          <span class="tag hot-tag">热点 &gt;</span>
          <img 
            class="MD-home-qa-qa-pic" 
            src="../../static/images/huizong/_rd01.jpg">
          <img 
            src="" 
            class="MD-home-qa-ad-little-icon">
          <span class="MD-home-qa-tit">10万整辆复古车，玩的就是情调</span>
        </a>
        <div class="MD-home-qa-qa-list">
          <p><a 
            href=""
            class="MD-home-qa-list-txt">新手开车五大省油技巧 老司机带带我！</a></p>
          <p><a 
            href="" 
            class="MD-home-qa-list-txt">二手车过户那些事儿！满满的干货</a></p>
          <p><a 
            href="" 
            class="MD-home-qa-list-txt">重磅！北京拟自7月1日起分步实施国六排放标准</a></p>
          <p><a 
            href="" 
            class="MD-home-qa-list-txt">二手车如何出售才能卖高价？</a></p>
        </div>
      </div>
      <div class="MD-home-qa-right">
        <a 
          href="" 
          class="MD-home-qa-click MD-home-qa-book-click">
          <span class="tag book-tag">宝典 &gt;</span>
          <img 
            class="MD-home-qa-imgs" 
            src="../../static/images/huizong/_rd02.jpg">
          <div class="MD-home-qa-right-tit">
            <span class="MD-home-qa-right-title">十年开不坏 那些足以让修车师傅失业的车</span>
            <span class="MD-home-qa-right-desc">十年开不坏 那些足以让修车师傅失业的车 “我最近要换车了” “你终于舍得换你那老捷达了” “也该换了，十几年了，买这车的时候，我还在上学，现在我孩子都上学了，这车还在开” “你这车还真够皮实的”</span>
          </div>
        </a>
        <a 
          href="" 
          class="MD-home-qa-click MD-home-qa-article-click" >
          <span class="tag tag art-tag">文章 &gt;</span>
          <img 
            class="MD-home-qa-imgs" 
            src="../../static/images/huizong/_rd02.jpg">
          <div class="MD-home-qa-right-tit">
            <span class="MD-home-qa-right-title">找一辆适合胖子开的车就这么难吗？</span>
            <span class="MD-home-qa-right-desc">找一辆适合胖子开的车就这么难吗？</span>
          </div>
        </a>
      </div>
      <div class="clear"/>
    </div>
    <!-- 热点新闻 -->
    <div class="grid_c1 drop_publish quick_order"> 
      <div class="drop_publish_txt fl">
        <h3 class="publish_txt_tit">仅需3步 快速下单</h3>
        <div class="publish_txt_explain">免费咨询电话：400-999-2828</div>
      </div>
      <div class="p_zx_btn_box fr">
        <a 
          :href="'/zhuanxian/list?startp='+currentProvince+'&startc='+currentCity" 
          target="_blank"
        >快速发布专线</a>
      </div>
    </div>
    <!-- 推荐我弹窗 -->
    <div 
      class="recommend_pop"
      style="display: none;">
      <div 
        id="recommend_star"
        class="recommend_box">        
        <input 
          type="text" 
          placeholder="请输入出发地" 
          id="recommend_pageinp1">
      </div>
      <div 
        id="recommend_star"
        class="recommend_box">        
        <input 
          type="text" 
          placeholder="请输入到达地" 
          id="recommend_pageinp2">
      </div>
      <a @click="recommendSubmit">提交</a>
    </div>
  </div>
</template>
<script>
import until from '~/static/js/server/comonUntil' //获取公共的函数
import Star from '~/components/star/star' //星星
// function myCredit(credit, item) {
//   if (credit >= 0 && credit <= 3) {
//     item.credit = 1
//     item.isEq = true
//   }
//   if (credit >= 4 && credit <= 10) {
//     item.credit = 2
//     item.isEq = true
//   }
//   if (credit >= 11 && credit <= 40) {
//     item.credit = 3
//     item.isEq = true
//   }
//   if (credit >= 41 && credit <= 90) {
//     item.credit = 4
//     item.isEq = true
//   }
//   if (credit >= 91 && credit <= 150) {
//     item.credit = 5
//     item.isZuan = true
//   }
//   if (credit >= 151 && credit <= 250) {
//     item.hZhuan = 1
//     item.isHZhuan = true
//   }
//   if (credit >= 251 && credit <= 500) {
//     item.hZhuan = 2
//     item.isHZhuan = true
//   }
//   if (credit >= 500 && credit <= 1000) {
//     item.hZhuan = 3
//     item.isHZhuan = true
//   }
//   if (credit >= 1001 && credit <= 2000) {
//     item.hZhuan = 4
//     item.isHZhuan = true
//   }
//   if (credit >= 2001) {
//     item.hZhuan = 5
//     item.isHZhuan = true
//   }
// }

// async function getLineHotList($axios, vo = {}, orderBy) {
//   let parm = vo
//   parm.currentPage = 1
//   parm.pageSize = 15
//   parm.orderBy = orderBy
//   delete parm.recommendType
//   let res = await $axios.post(`/28-web/range/hot/list`, parm)
//   if (res.data.status == 200) {
//     return {
//       list: res.data.data.list
//     }
//   } else {
//     return { list: [] }
//   }
// }
export default {
  name: 'HuiZong',
  head: {
    link: [{ rel: 'stylesheet', href: '/layer/dist/css/layui.css' }],
    script: [{ src: '/layer/layer.js' }]
  },
  components: { Star },
  data() {
    return {
      groomIndex: 1,
      groomClass: 'active_green',
      noneImg: require('../../static/images/huizong/none.jpg'),
      //登录权限
      isToken: false,
      loginMobile: '',
      // 热门地点插件
      hotStartProvince: '',
      hotStartCity: '',
      hotStartArea: '',
      hotEndProvince: '',
      hotEndCity: '',
      hotEndArea: ''
      //-------------------------------------------------
      // navIndex: 0,
      // inputData: '',
      // isMobile: false,
      // isAdd: false,
      // typeNav: [
      //   {
      //     title: '信誉最高'
      //   },
      //   {
      //     title: '交易量'
      //   },
      //   {
      //     title: '运输时效'
      //   },
      //   {
      //     title: '重货价格最低'
      //   },
      //   {
      //     title: '轻货价格最低'
      //   }
      // ]
    }
  },

  async asyncData({ $axios, app, query, error }) {
    // let vo = {
    //   // currentPage: 1,
    //   // pageSize: 5,
    //   // companyName: query.companyName ? query.companyName : '',
    //   city: query.locationCity ? query.locationCity : '',
    //   province: query.locationProvince ? query.locationProvince : '',
    //   endArea: query.endArea ? query.endArea : '',
    //   endCity: query.endCity ? query.endCity : '',
    //   endProvince: query.endProvince ? query.endProvince : '',
    //   startArea: query.startArea ? query.startArea : '',
    //   startCity: query.startCity
    //     ? query.startCity
    //     : app.$cookies.get('currentAreaFullName'),
    //   startProvince: query.startProvince
    //     ? query.startProvince
    //     : app.$cookies.get('currentProvinceFullName')
    // }
    // let vo1 = vo
    // vo1.currentPage = 1
    // vo1.pageSize = 4
    // let voExcel = {}
    // voExcel.currentPage = 1
    // voExcel.pageSize = 5
    // voExcel.flag = 'excellentRate'
    // let [lineC, lineD, lineE] = await Promise.all([
    //   $axios.post('/28-web/range/reduce/price/list', vo1),
    //   $axios.get(
    //     '/28-web/logisticsCompany/excellent?currentPage=' +
    //       voExcel.currentPage +
    //       '&pageSize=' +
    //       voExcel.pageSize +
    //       '&flag=' +
    //       voExcel.flag
    //   ),
    //   $axios.get('/28-web/index/today/statistics')
    // ])
    // let collateral = 'collateral'
    // let orderBy = 'creditDesc'
    // let lineB = await getLineHotList($axios, vo, orderBy)

    // if (lineC.data.status == 200) {
    //   lineC.data.data.forEach(item => {
    //     let arr = (item.id || '').split('')
    //     let num = 0
    //     let credit = item.credit
    //     arr.forEach(el => {
    //       num += el.charCodeAt(0) || 0
    //     })
    //     item.num = (num % 20) + 1
    //     myCredit(credit, item)
    //   })

    //   lineB.list.forEach(item => {
    //     let arr = (item.id || '').split('')
    //     let num = 0
    //     arr.forEach(el => {
    //       num += el.charCodeAt(0) || 0
    //     })
    //     item.num = (num % 30) + 1
    //     let credit = item.credit
    //     let newItem = item
    //     myCredit(credit, item)
    //     item.otherServiceCodeList.forEach(item => {
    //       if (item === 'AF02502') {
    //         newItem.isBao = true
    //       } else if (item === 'AF02503') {
    //         newItem.isYun = true
    //       } else if (item === 'AF02501') {
    //         newItem.isDai = true
    //       } else if (item === 'AF02506') {
    //         newItem.isPiao = true
    //       }
    //     })
    //   })
    //   lineD.data.data.forEach(item => {
    //     let arr = (item.id || '').split('')
    //     let num = 0
    //     arr.forEach(el => {
    //       num += el.charCodeAt(0) || 0
    //     })
    //     item.num = (num % 30) + 1
    //     let credit = item.credit

    //     myCredit(credit, item)
    //   })
    //-----------------------------------------------------------------------------------
    //服务端获取省市cookies
    let currentProvince = app.$cookies.get('currentProvinceFullName')
    let currentCity = app.$cookies.get('currentAreaFullName')
    //热门城市
    let hotCityData = await $axios.get('/28-web/city/hot')
    //平台推荐担保交易1
    let pTbusinessData = await $axios.post(
      '/28-web/range/platform/recommend/list',
      {
        currentPage: 1,
        pageSize: 4,
        startProvince: currentProvince,
        startCity: currentCity,
        recommendType: 'collateral'
      }
    )
    //平台特惠2
    let pToddsData = await $axios.post(
      '/28-web/range/platform/recommend/list',
      {
        currentPage: 1,
        pageSize: 4,
        startProvince: currentProvince,
        startCity: currentCity,
        recommendType: 'preferential'
      }
    )
    //平台时效3
    let pTagingData = await $axios.post(
      '/28-web/range/platform/recommend/list',
      {
        currentPage: 1,
        pageSize: 4,
        startProvince: currentProvince,
        startCity: currentCity,
        recommendType: 'aging'
      }
    )
    //平台信用
    let pTcreditData = await $axios.post(
      '/28-web/range/platform/recommend/list',
      {
        currentPage: 1,
        pageSize: 4,
        startProvince: currentProvince,
        startCity: currentCity,
        recommendType: 'credit'
      }
    )
    //热门专线
    let hotLineData = await $axios.post('/28-web/range/hot/list', {
      currentPage: 1,
      pageSize: 15,
      startProvince: currentProvince,
      startCity: currentCity
    })
    //降价专区推荐
    ///28-web/range/reduce/price/list
    let priceData = await $axios.post('/28-web/range/reduce/price/list', {
      currentPage: 1,
      pageSize: 15,
      startProvince: currentProvince,
      startCity: currentCity
    })
    //本月优质货主
    let monthShipperData = await $axios.post(
      '/28-web/shipper/month/excellent',
      {
        currentPage: 1,
        pageSize: 5,
        startProvince: currentProvince,
        startCity: currentCity
      }
    )
    //查询首页车源、货源、专线数量
    let statisticsData = await $axios.get('/28-web//index/today/statistics')
    //赋值data
    if (
      hotCityData.status === 200 ||
      pTbusinessData.status === 200 ||
      pToddsData.status === 200 ||
      pTagingData.status === 200 ||
      pTcreditData.status === 200 ||
      hotLineData.status === 200 ||
      priceData.status === 200 ||
      monthShipperData.status === 200 ||
      statisticsData.status === 200
    ) {
      return {
        currentProvince: currentProvince ? currentProvince : '',
        currentCity: currentCity ? currentCity : '', //获取当前的城市

        hotCityData: hotCityData.data ? hotCityData.data.data : [], //热门城市
        pTbusinessData: pTbusinessData.data ? pTbusinessData.data.data : [],
        pToddsData: pToddsData.data ? pToddsData.data.data : [], //平台优惠
        pTagingData: pTagingData.data ? pTagingData.data.data : [], //平台时效
        pTcreditData: pTcreditData.data ? pTcreditData.data.data : [], //平台信用
        hotLineData: hotLineData.data ? hotLineData.data.data.list : [], //热门专线
        priceData: priceData.data ? priceData.data.data : [], //热门专线
        //本月优秀货主
        monthShipperData: monthShipperData
          ? monthShipperData.data.data.list
          : [],
        statisticsData: statisticsData.data ? statisticsData.data.data : []
        // LineHotList: lineB.list,
        // lineRecomLowPrice: lineC.data.data,
        // lineLogisticsCompany: lineD.data.data,
        // lineToday: lineE.data.data,
        // vo
      }
    } else {
      error({ statusCode: 500, message: '查找不到该专线列表' })
    }
    //返回对象
    // }
  },
  created() {
    //处理热门专线的数据
    this.hotLineData.forEach((value, index, array) => {
      let isbao = value.otherServiceCodeList.indexOf('AF02502') !== -1
      let isYun = value.otherServiceCodeList.indexOf('AF02503') !== -1
      let isDai = value.otherServiceCodeList.indexOf('AF02501') !== -1
      let isPiao = value.otherServiceCodeList.indexOf('AF02506') !== -1
      value.isbao = isbao
      value.isYun = isYun
      value.isDai = isDai
      value.isPiao = isPiao
    })
    console.log('打印专线数据', this.hotLineData)
  },
  mounted() {
    let that = this
    this.$nextTick(() => {
      console.log('请求平台数据', this.pTbusinessData)
      console.log('热门专线', this.hotLineData)
      console.log('降价专区', this.priceData)

      this.getCookies()
    })
    seajs.use(['layer', '/js/jq_scroll.js'], function() {
      // 向上滚动
      $('.p_zx_info .info_user_box').Scroll({
        line: 1,
        speed: 600,
        timer: 3000
      })
      // 地点插件
      $('#zx_pageinp1').citypicker()
      $('#zx_pageinp2').citypicker()
      //推荐我弹窗地点
      $('#recommend_pageinp1').citypicker()
      $('#recommend_pageinp2').citypicker()
      // $('#groom_pageinp11').citypicker()
      // $('#groom_pageinp21').citypicker()
      // $('#wlLineFrom1').citypicker()
      // $('#wlLineTo1').citypicker()
    })
    //登录成功赋值
    $('body').on('login.success', () => {
      that.isToken = $.cookie('access_token') ? true : false
      that.loginMobile = $.cookie('login_mobile')
      // console.log('vue打印', that)
      // alert($.cookie('access_token'))
    })
  },

  methods: {
    showLogin() {
      $('body').trigger('login.show')
    },
    getCookies() {
      //获取省市cookies
      //$.cookie
      this.isToken = $.cookie('access_token') ? true : false
      this.loginMobile = $.cookie('login_mobile')
    },
    // fromAdd(data) {
    //   this.inputData = data
    //   this.isMobile = false
    // },

    // search() {
    //   let list1 = []
    //   $('#parkAddress .select-item').each(function(i, e) {
    //     list1.push($(this).text())
    //   })
    //   this.vo.locationProvince = list1[0] ? list1[0] : ''
    //   this.vo.locationCity = list1[1] ? list1[1] : ''
    //   this.vo.locationArea = list1[2] ? list1[2] : ''
    //   window.open(
    //     `/zhuanxian/list?locationProvince=${
    //       this.vo.locationProvince
    //     }&locationCity=${this.vo.locationCity}&locationArea=${
    //       this.vo.locationArea
    //     }`
    //   )
    // },
    // getLineHot(orderBy) {
    //   getLineHotList(this.$axios, this.vo, orderBy).then(res => {})
    // },
    // toLineDetail(item) {
    //   window.open(
    //     '/zhuanxian/detail?id=' + item.id + '&publishId=' + item.companyId
    //   )
    // },
    // toCompany(item) {
    //   window.open('/member/' + item.id)
    // },
    // navClass(index) {
    //   this.navIndex = index
    //   let orderBy = 'orderDesc'
    //   switch (index) {
    //     case 0:
    //       orderBy = 'creditDesc'
    //       this.getLineHot(orderBy)
    //       break
    //     case 1:
    //       orderBy = 'orderDesc'
    //       this.getLineHot(orderBy)
    //       break
    //     case 2:
    //       orderBy = 'transportAgingAsc'
    //       this.getLineHot(orderBy)
    //       break
    //     case 3:
    //       orderBy = 'lightPriceAsc'
    //       this.getLineHot(orderBy)
    //       break
    //     case 4:
    //       orderBy = 'weightPriceAsc'
    //       this.getLineHot(orderBy)
    //       break
    //   }
    // },
    //--------------------------------------
    //选项卡
    groomTab(index) {
      this.groomIndex = index
      switch (index) {
        case 0:
          this.groomClass = 'active_green'
          break
        case 1:
          this.groomClass = 'active_blue'
          break
        case 2:
          this.groomClass = 'active_orange'
          break
        case 3:
          this.groomClass = 'active_violet'
          break
      }
    },
    //搜索货源
    hotSearch() {
      let startPlace = until.getPlace('#hot_start')
      let endPlace = until.getPlace('#hot_end')

      // 开始城市赋值
      this.hotStartProvince = startPlace.province
      this.hotStartCity = startPlace.city
      this.hotStartArea = startPlace.area
      //到达城市赋值
      this.hotEndProvince = endPlace.province
      this.hotEndCity = endPlace.city
      this.hotEndArea = endPlace.area

      //跳转
      let zxUrl = `/zhuanxian/list?startp=${this.hotStartProvince}&startc=${
        this.hotStartCity
      }&starta=${this.hotStartArea}&endp=${this.hotEndProvince}&endc=${
        this.hotEndCity
      }&enda=${this.hotEndArea}`
      window.open(zxUrl, '_blank')
    },
    groomMeFn() {
      console.log('000000000000000')
      layer.open({
        type: 1,
        title: '推荐我',
        area: ['800px', '560px'], //宽高
        content: $('.recommend_pop')
      })
    },
    //推荐我提交
    recommendSubmit() {}
  }
}
</script>
<style lang="scss">
@import '~/assets/scss/common_index.scss';

/********公共的导航修改**************/
.header {
  margin-bottom: 0 !important;
  height: auto !important;
}
.header_bottom {
  background: #fff !important;
  border-bottom: 3px solid #00c17f !important;
  ul {
    > span {
      display: none !important;
    }
    li {
      margin-left: 0 !important;
      padding: 0 33px !important;
      &.nav-active {
        position: relative;
        &:after {
          content: ' ';
          position: absolute;
          left: 20px;
          top: 20px;
          width: 5px;
          height: 5px;
          background: #00c17f;
        }
        > a {
          color: #00c17f !important;
        }
        background: none !important;
      }
      &:hover {
        > a {
          color: #00c17f !important;
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
/*本页面公共的函数*/
@mixin active_color($starColor, $endColor) {
  background: -webkit-linear-gradient(
    $starColor,
    $endColor
  ); /*for safari5.1-6.0*/
  background: -o-linear-gradient($starColor, $endColor); /* Opera 11.1-12.0 */
  background: -moz-linear-gradient($starColor, $endColor); /* firefox 3.6-15 */
  background: linear-gradient(
    $starColor,
    $endColor
  ); /* 标准语法，必须放在最后 */
  &:after {
    border-top: 12px solid $endColor;
    display: block !important;
  }
  .pt_groom_tit,
  .pt_groom_txt {
    color: $white !important;
    &:after {
      background: $white !important;
    }
  }
}
.p_centre_title {
  .title_line_box > span {
    border-top: 2px solid $light_gray;
  }
  .title_txt {
    color: $tit_color;
  }
}
/* 1、物流专线 */
.category {
  background-color: #f5f5f5;
  margin: 40px auto;
  -moz-box-shadow: 2px 2px 15px #ddd;
  -webkit-box-shadow: 2px 2px 15px #ddd;
  box-shadow: 2px 2px 15px #ddd;
  > .col1 {
    width: 256px;
    height: 476px;
    background-color: $black;
    background-image: url('../../static/images/huizong/zhuanxian/nav_bj.png');
    background-position: 0 bottom;
  }
  > .col2 {
    overflow: hidden;
    width: 813px;
  }
  > .col3 {
    overflow: hidden;
    width: 320px;
    height: 476px;
    background: $white;
  }
  /* 导航 */
  .category_app {
    margin-top: -15px;
  }
  /* 幻灯片 */
  .category_ad {
    overflow: hidden;
    width: 813px;
    height: 476px;
    .ad_big {
      overflow: hidden;
      width: 612px;
      height: 476px;
    }
    .ad_right {
      overflow: hidden;
      width: 192px;
      height: 476px;
      .ad_right_item {
        margin-bottom: 15px;
        width: 192px;
        height: 152px;
      }
    }
  }
}
.p_category_menu {
  margin-top: -15px;
  padding: 0;
  padding-left: 40px;
  .category_menu_title {
    margin: 0;
    padding-left: 0;
    color: $white;
  }
  .category_menu_list {
    padding-left: 0;
    .item {
      margin-top: 10px;
      > a {
        color: #a5adb0;
      }
    }
  }
}
.p_user_login {
  margin-bottom: 25px;
  height: auto;
  .user_show .user_profit {
    > a {
      height: 38px;
      line-height: 38px;
      border: 1px solid $zx_green;
      color: $zx_green;
    }
    > a.login {
      background-color: $zx_green;
    }
  }
}
/* 2、平台推荐 */
.zx_terrace {
  margin: 50px auto 30px auto;
}
.pt_groom {
  overflow: hidden;
  width: 1090px;
  > .hd {
    margin-bottom: 30px;
    width: 1080px;
    background: $white;
    > li {
      @extend .fl;
      position: relative; // padding: 20px 0 0 30px;
      width: 270px;
      height: 280px;
      cursor: default;
      &:after {
        content: '';
        position: absolute;
        display: none;
        left: 113px;
        bottom: -12px;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #f5f5f7;
      }
      .pt_groom_tit {
        margin-bottom: 5px;
        padding: 30px 0 0 35px;
        font-size: 25px;
        font-weight: bold;
      }
      .pt_groom_txt {
        padding-left: 35px;
        color: $light_gray;
      }
      .pt_groom_explain {
        overflow: hidden;
        margin: 70px auto 0 auto;
        padding: 20px 0 0 30px;
        width: 220px;
        height: 90px;
        > span {
          display: block;
          color: $white;
          &.groom_explain_tit {
            font-size: 25px;
            font-weight: bold;
          }
          &.groom_explain_txt {
            margin-top: 5px;
          }
        }
      }
      .pt_groom_bj1 {
        background: url('../../static/images/huizong/zhuanxian/pt_bj1.png')
          no-repeat;
      }
      .pt_groom_bj2 {
        background: url('../../static/images/huizong/zhuanxian/pt_bj2.png')
          no-repeat;
      }
      .pt_groom_bj3 {
        background: url('../../static/images/huizong/zhuanxian/pt_bj3.png')
          no-repeat;
      }
      .pt_groom_bj4 {
        background: url('../../static/images/huizong/zhuanxian/pt_bj4.png')
          no-repeat;
      }
      &.channel1 {
        .pt_groom_tit {
          color: #0ed7a9;
        }
      }
      &.channel2 {
        .pt_groom_tit {
          color: #ffb91a;
        }
        .pt_groom_txt {
          &::after {
            background: $blue;
          }
        }
      }
      &.channel3 {
        .pt_groom_tit {
          color: #1a95ff;
        }
      }
      &.channel4 {
        .pt_groom_tit {
          color: #6e3ae3;
        }
      }
    }
  }
  .active_green {
    .channel1 {
      @include active_color(#26e9d8, #19daae);
    }
  }
  .active_blue {
    .channel2 {
      @include active_color(#f6ce30, #f7a53f);
    }
  }
  .active_orange {
    .channel3 {
      @include active_color(#4dc6fd, #2f97ec);
    }
  }
  .active_violet {
    .channel4 {
      @include active_color(#b065fe, #432de8);
    }
  }
  /* 列表 */
  .p_wl_list {
    > li {
      overflow: hidden;
      margin: 0;
      margin-right: 9px;
      padding: 0;
      width: 264px;
      height: 240px;
      background: $white;
      border: 0;
      .hd_box {
        color: $light_gray;
      }
      .type_box {
        margin-bottom: 0;
        > span {
          font-size: $f_14;
          color: $light_gray;
        }
      }
      .wl_box {
        padding: 20px 20px 0 20px;
        height: 165px;
      }
      &:nth-child(4n) {
        margin-right: 0;
      }
      .hd_box {
        overflow: hidden;
        > span {
          @extend .fl;
          height: $f_16;
          line-height: $f_16;
        }
      }
      .item_order_num {
        margin-top: 20px;
        font-size: $f_14;
      }
      .item_order {
        padding-left: 10px;
        height: 55px;
        line-height: 55px;
        background-color: #00c17f;
        .order_name {
          padding-top: 7px;
          width: 40px;
          font-size: 18px;
          line-height: 20px;
          color: $white;
        }
        .dock {
          overflow: hidden;
          margin-left: 10px;
          width: 75px;
          height: 50px;
          > span {
            display: block;
            font-size: $f_12;
            color: $white;
            &.dock_icon {
              overflow: hidden;
              margin-top: 7px;
              width: 60px;
              height: 20px;
              line-height: 20px;
              text-align: center;
              background: #ff9933;
              border-radius: 3px;
            }
            &.w_40 {
              width: 40px;
            }
            &.dock_num {
              line-height: 27px;
            }
          }
        }
        .link_oder {
          width: 124px;
          text-align: center;
          background-image: url('../../static/images/huizong/zhuanxian/pt_bj.png');
          background-repeat: no-repeat;
          background-position: 0 0;
          > a {
            display: block;
            font-size: $f_16;
            color: $white;
          }
        }
      }
      .bj_discount {
        background-position: -375px 0px;
        background-color: #ff8c1a;
      }
      .bj_time {
        background-position: -125px 0px;
        background-color: #1a95ff;
      }
      .bj_credit {
        background-position: -125px 0px;
        background-color: #6e3ae3;
      }
    }
  }
}
.pt_discount {
  overflow: hidden;
  width: 310px;
  height: 550px;
  background: $white;
  .discount_tit {
    padding: 15px;
    font-size: 30px;
    line-height: 30px;
    color: $tit_color;
  }
  .discount_ad_list {
    margin: 0 auto;
    width: 290px;
    > li {
      margin-bottom: 20px;
      width: 290px;
      height: 100px;
    }
  }
}
/* 3、热门专线 */
.p_hy_groom {
  .p_type_nav {
    margin: 30px 0 20px 0;
    padding-bottom: 0;
  }
  .gr_link {
    color: $light_gray;
    .iconfont {
      padding-left: 5px;
      color: #c5c5c5;
    }
  }
}
/* 平台交易 */
.p_zx_btn_box {
  margin: 30px auto 0 auto;
  width: 200px;
  height: 60px;
  line-height: 60px;
  > a {
    display: block;
    color: $white;
    font-size: 20px;
    text-align: center;
    background: $zx_green;
    border-radius: 5px;
  }
}
.zx_business {
  overflow: hidden;
  color: $white;
  height: 310px;
  background: url('../../static/images/huizong/zhuanxian/business_bj.png')
    no-repeat;
  .business_total {
    margin-top: 60px;
    font-size: 0;
    text-align: center;
    > span {
      margin-left: 10px;
      display: inline-block;
      font-size: 25px;
      line-height: 70px;
      &.business_total_txt1 {
        padding-right: 10px;
      }
      &.business_total_txt2 {
        padding-left: 10px;
      }
      &.business_total_num {
        width: 58px;
        height: 68px;
        line-height: 68px;
        font-size: 30px;
        color: $zx_green;
        border: 1px solid $zx_green;
      }
    }
  }
  .business_total_explain {
    margin-top: 25px;
    text-align: center;
    color: #bfbfbf;
  }
}
/* 6、降价发布 */
.drop_publish {
  padding: 30px 260px 0 260px;
  width: 880px;
  height: 120px;
  background: url('../../static/images/huizong/zhuanxian/drop_bj.png') no-repeat;
  .drop_publish_txt {
    color: $white;
    .publish_txt_tit {
      font-size: 40px;
      margin-bottom: 10px;
    }
    .publish_txt_explain {
      font-size: 18px;
    }
  }
  .p_zx_btn_box {
    margin-top: 10px;
  }
}
.groom_me {
  overflow: hidden;
  height: 200px;
  background: url('../../static/images/huizong/zhuanxian/groom_me_bj.png')
    no-repeat;
  .groom_me_box {
    margin: 50px auto 0 auto;
    width: 500px;
    height: 60px;
    font-size: 18px;
    background: $white;
    .me_box_input {
      border: 0;
      width: 354px;
      height: 60px;
      line-height: 60px;
      text-indent: 20px;
      color: $gray;
    }
    .me_box_btn {
      margin-top: 2px;
      width: 144px;
      height: 56px;
      line-height: 56px;
      text-align: center;
      color: $white;
      background: #ffb91a;
    }
  }
  .groom_me_txt {
    margin-top: 20px;
    text-align: center;
    color: $white;
  }
}
/* 快速下单 */
.quick_order {
  background: url('../../static/images/huizong/zhuanxian/quick_order_bj.png')
    no-repeat;
  .drop_publish_txt {
    .publish_txt_tit {
      color: $tit_color;
    }
    .publish_txt_explain {
      color: $gray;
    }
  }
}
/* 8、货主说 */
.zx_sub_title {
  margin: 0 auto;
  width: 1032px;
  text-align: center;
  .sub_title_icon {
    display: inline-block;
    width: 34px;
    height: 33px;
    vertical-align: top;
    margin-top: 7px;
  }
  .sub_title_word {
    display: inline-block;
    font-size: 30px;
    color: $tit_color;
    margin: 0 10px 0 15px;
  }
}
.shipper_say {
  .p_centre_title {
    margin: 60px auto;
  }
  margin-bottom: 40px;
  .p_centre_title {
    width: 580px;
  }
  .shipper_say_content {
    margin: 50px auto 0;
    width: 1032px;
  }
  .shipper_say_item:hover .shipper_say_des {
    height: auto;
    line-height: 35px;
  }
  .shipper_say_item:hover .shipper_say-word_box {
    height: 100%;
  }
  .shipper_say_item:hover .shipper_say_mask {
    display: none;
  }
  .shipper_say-item_middle {
    margin: 0 20px;
  }
  .shipper_say_item {
    float: left;
    width: 330px;
    height: 375px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  }
  .shipper_say_img {
    display: block;
    width: 330px;
    height: 185px;
  }
  .shipper_say-word_box {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 330px;
    height: 189px;
    overflow: hidden;
    padding: 30px 29px 0 26px;
    transition: 0.5s;
    background: #fff;
    text-align: center;
  }
  .shipper_say_name {
    font-size: 16px;
    line-height: 21px;
    color: $tit_color;
    margin-bottom: 5px;
  }
  .shipper_say_des {
    margin-top: 35px;
    font-size: 14px;
    height: 37px;
    overflow: hidden;
    color: $gray;
    text-align: left;
  }
  .shipper_say_mask {
    position: absolute;
    top: 130px;
    left: 0;
    width: 100%;
    height: 19px;
    background-image: linear-gradient(rgba(255, 255, 255, 0.24), #fff);
  }
}
/* 9、我们的优势 */
.zx_our_virtue {
  .virtue_item {
    float: left;
    width: 440px;
    height: 350px;
    .virtue_item_tit {
      width: 440px;
      height: 150px;
      line-height: 150px;
      color: $white;
      font-size: 30px;
      font-weight: bold;
      text-indent: 30px;
    }
  }
  .virtue_left {
    .virtue_item_tit {
      background: url('../../static/images/huizong/zhuanxian/advantage1_bj.png')
        no-repeat;
    }
  }
  .virtue_middle {
    .virtue_item_tit {
      background: url('../../static/images/huizong/zhuanxian/advantage2_bj.png')
        no-repeat;
    }
    margin: 0 40px;
  }
  .virtue_right {
    .virtue_item_tit {
      background: url('../../static/images/huizong/zhuanxian/advantage3_bj.png')
        no-repeat;
    }
  }
  .virtue_list {
    margin-top: 30px;
    > li {
      margin-bottom: 10px;
    }
  }
}
/* 10、我要入驻 */
.check_in {
  padding: 0 240px;
  width: 920px;
  height: 150px;
  background: url('../../static/images/huizong/zhuanxian/check_in_bj.png')
    no-repeat;
  .check_in_tit {
    font-size: 25px;
    line-height: 150px;
    color: $tit_color;
  }
  .p_zx_btn_box {
    margin-top: 45px;
  }
}
/* 11、28问答 */
.p_answers {
  .answers_questions {
    padding: 40px 0;
    text-align: center;
    .answers_questions_btn {
      margin-bottom: 10px;
    }
  }
}
/* 12、热点新闻 */
.MD-home-qa-qa-area {
  margin: 20px auto;
  width: 1210px;
  height: 490px;
  font-size: $f_14;
  .tag {
    display: block;
    width: 60px;
    line-height: 30px;
    color: #fff;
    font-size: 16px;
    position: absolute;
    top: 10px;
    left: -15px;
    z-index: 9;
    text-align: center;
    background: #ddd;
  }
  .hot-tag {
    background: #ff5a38;
  }
  .book-tag {
    background: #389fff;
  }
  .art-tag {
    background: #2ecbac;
  }
  .MD-home-qa-left {
    float: left;
    width: 480px;
    height: 490px;
    background: #fff;
    transition: all 0.2s linear;
    .MD-home-qa-qa-hot {
      display: block;
      width: 480px;
      height: 320px;
      position: relative;
    }
    .MD-home-qa-qa-pic {
      display: block;
      width: 100%;
    }
    .MD-home-qa-tit {
      display: block;
      width: 428px;
      padding: 0 30px;
      font-size: 18px;
      color: #fff;
      line-height: 60px;
      position: absolute;
      bottom: 0;
      left: 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .MD-home-qa-qa-list {
      padding: 12px 30px 0;
      > {
        p {
          display: block;
          padding: 6px 0;
          line-height: 20px;
        }
      }
    }
  }
  .MD-home-qa-right {
    width: 680px;
    height: 490px;
    float: right;
    .MD-home-qa-article-click {
      margin-top: 30px;
    }
    .MD-home-qa-click {
      width: 680px;
      height: 230px;
      background: #fff;
      position: relative;
      display: table;
    }
    .MD-home-qa-imgs {
      display: block;
      width: 245px;
      height: 230px;
    }
    .MD-home-qa-right-tit {
      display: table-cell;
      padding: 0 30px;
      vertical-align: middle;
    }
    .MD-home-qa-right-title {
      display: block;
      font-size: 16px;
      color: #333;
      margin-bottom: 15px;
      width: 390px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .MD-home-qa-right-desc {
      font-size: 14px;
      color: #666;
      line-height: 30px;
      white-space: normal;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
    }
  }
}
/* 13、在线下单流程 */
.order_step {
  overflow: hidden;
  width: 100%;
  height: 660px;
  color: $tit_color;
  background: url('../../static/images/huizong/zhuanxian/order_step_bj.png')
    no-repeat;
  .step_box {
    margin: 130px auto 0;
    width: 1075px;
  }
  .step-title {
    display: inline-block;
    width: 200px;
    font-size: 18px;
    font-weight: normal;
  }
  .step_txt {
    margin-top: 30px;
    .step_txt_title {
      font-size: 50px;
    }
    .step_txt_text {
      margin-top: 100px;
      color: $tit_color;
      font-size: 25px;
    }
  }
  .step_list {
    margin-top: 35px;
    font-size: $f_14;
    color: $gray;
    > li {
      float: left;
      height: 65px;
      &.step_item {
        margin-right: 75px;
        width: 50px;
        text-align: center;
        .iconfont {
          // display: block;
          font-size: 50px;
          color: $zx_green;
        }
        .step_item_txt {
          margin-top: 10px;
          font-size: 18px;
        }
      }
    }
  }
}
.recommend_pop {
  .recommend_box {
    position: relative;
    margin-bottom: 30px;
    width: 500px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #000;
  }
}
</style>
