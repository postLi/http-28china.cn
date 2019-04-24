<template>
  <div>
    <div class="category grid_c1 clearfix">
      <div class="cg_col1 fl">
        <div class="p_category_menu">
          <h4 class="category_menu_title">热门城市</h4>
          <div class="category_menu_list">
            <span 
              class="item"
              v-for="(item, index) in hotCityData" 
              :key="index">
              <a
                target="_blank"
                :href="'/cheyuan?startProvince='+item.provinceName+'&startCity='+item.cityName">{{ item.cityShortName }}</a></span>  
          </div> 
         
        </div>
      </div>
      <div class="cg_col2 fl">
        <div class="cy_banner">
          <div 
            class="swiper-container"
            v-swiper:mySwiper="swiperOption1">
            <div class="swiper-wrapper">
              <div 
                class="swiper-slide" 
                :key="index"
                v-for="(item, index) in bannerList">
                <a 
                  target="_blank" 
                  :href="item.link">
                  <img :src="item.banner">
                </a>
              </div>
            </div>
            <!-- Add Paginat ion -->
            <div class="swiper-pagination"/>
            <!-- Add Arrows -->
            <div class="swiper-button-next"/>
            <div class="swiper-button-prev"/>
          </div>
          <!-- 幻灯片 -->
        </div>
      </div>
      <div class="cg_col3 fr">
        <div class="p_user_login">
          <div class="user_pic">头像</div>

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
        <div class="p_me_groom">
          <div class="gr_text">
            <h4 class="gr_text_title">帮我推荐</h4>
            <div class="gr_text_txt">平台推荐，资质保障，为您快速匹配时效快、平价、安心、专业的车源</div>
            <div class="p_groom_submit clearfix">
              <input 
                type="text" 
                placeholder="请输入您的手机号"
                v-model="groomPhone"
                class="fl">
              <button 
                class="fl"
                @click="groomMeFn">帮我推荐</button>
            </div>
            <!-- <div class="error">请输入正确的手机号</div> -->
          </div>
          <div class="gr_operate">
            <a 
              target="_blank" 
              href="/create/order">快速下单</a>
            <a 
              target="_blank" 
              href="/ydcx">查询运单</a>
          </div>
          <div class="gr_cy_info">
            <p>发布求车信息让车主主动联系您</p>
            <p class="gr_cy_info_num">今日已有<b>2368</b>人在线下单获得优惠</p>
          </div>   
        </div>
      </div>
    </div>
    <!-- 1、分类导航 -->
    <div class="bj_2">
      <div class="CY_car grid_c1">
        <div class="p_title_box">
          <h3 class="title">严选车源</h3>
          <span class="title_txt">时效快,多重服务,资质保障</span>
          <a 
            target="_blank"
            :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity"
            class="title_link fr">更多车源<i class="iconfont iconjiantou2"/>
          </a>         
        </div>
        <div class="p_type_nav">
          <a 
            target="_blank"
            :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity">超值特惠</a>
          <a
            target="_blank"
            :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity">精选上新</a>
          <a 
            target="_blank"
            :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity+'&carSourceType=AF0560102'">回程车</a>       
        </div>
        <div class="bd">
          <ul class="p_hot_line p_CY_car_list clearfix">
            <li
              v-for="(item,index) in carSourceData"
              :key="index">
              <div class="hot_line_box">
                <a 
                  target="_blank"
                  :href="'/cheyuan/detail?id='+item.id">
                  <div class="h_pic">
                    <span class="h_pic_icon_groom"> 平台推荐</span>          
                    <img :src="item.carFile">
                  </div>
                  <div class="wl_box">

                    <div class="h_place">
                      <span class="icon icon_start">始</span>
                      <span class="place">{{ item.strartAddress }}</span>
                      <span class="icon icon_end">终</span>
                      <span class="place">{{ item.endAddress }}</span>
                    </div>
                    <div class="CY_list_txt">{{ item.carTypeName }}| 长{{ item.carLength }}米|载重{{ item.carLoad }}|吨|体积{{ item.carVolume }}方</div>
                    <div class="CY_list_price"> 运价：<span class="CY_list_price_num">{{ item.expectPrice }}</span> 元</div>
                    <div class="CY_list_praise">
                      <div class="CY_list_praise_list fl">
                        <span class="CY_list_praise_name">好评</span>{{ item.evaGoodCount }}
                        <span class="CY_list_praise_name">收藏 </span>{{ item.collectNumber }}
                      </div>
                      <div class="CY_list_praise_num fr">好评率<span class="color_orange">{{ item.goodRate }}%</span></div>         
                    </div>
                    <div class="CY_list_time"><i class="iconfont iconshijian"/>{{ item.createTime }}</div>
                
                  </div>
                </a>
                <div class="h_operate">
                  <a 
                    v-show="item.iscollect" 
                    @click="collectFn(item,index)"
                    class="link_collect">
                    <i class="iconfont iconshoucang1"/>收藏
                  </a>
                  <a 
                    v-show="!item.iscollect" 
                    @click="collectFn(item,index)"
                    class="link_collect">
                    <i class="iconfont iconshoucang1"/>取消收藏
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 2、严选车源 -->
    <div class="p_release p_order_release">
      <div class="release_total">
        <span class="release_total_txt">平台已撮合</span>
        <span class="release_total_num">5</span>
        <span class="release_total_num">3</span>
        <span class="release_total_num">8</span>
        <span class="release_total_num">8</span>
        <span class="release_total_num">2</span>
        <span class="release_total_txt">货源达成交易</span>
      </div>
      <div class="btn_box">
        <a 
          target="_blank"
          href="/create/order"
          class="btn_release">快速下单</a>
      </div>
      <p class="release_total_explain">一键下单，运力30秒快速响应</p>
    </div>
    <!-- 快速下单 -->
    <div class="bj_2">
      <div class="grid_c1 discount clearfix">
        <div class="p_title_box">
          <h3 class="title">优惠专区</h3>
          <span class="title_txt">直降</span>
          <a 
            target="_blank"
            :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity"
            class="title_link fr">更多车源<i class="iconfont iconjiantou2"/>
          </a>         
        </div>
        <div class="discount_left fl"><img src="../../static/images/huizong/cheyuan/cy_ad.png"></div>
        <div class="discount_right fr">
          <ul class="d_car_list">
            <li 
              v-for="(item,index) in discountCarData" 
              :key="index">
              <a 
                target="_blank"
                :href="'/cheyuan/detail?id='+item.id">
                <span class="d_car_icon_drop">低于市场行情{{ item.quotesPriceRate }}%</span>
                <div class="d_car_name">{{ item.carTypeName }}| 长{{ item.carLength }}米|载重{{ item.carLoad }}|吨|体积{{ item.carVolume }}方</div>
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
                <div class="d_car_price">
                  运价：<span class="d_car_price_num">{{ item.expectPrice }}</span>元
                </div>
                <div class="d_car_time">{{ item.createTime }}</div>
                <div class="d_car_deal">累计成交<span class="color_orange">{{ item.orderNumber }}</span>单</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 优惠专区 -->
    <div class="p_release drop_price">
      <div class="release_box">
        <div class="release_box_txt fl">
          <h3 class="release_box_txt_tit"> 我也要降价发布</h3>
          更多曝光机会，让更多货主联系您
        </div>
        <div class="btn_box fr">
          <a 
            target="_blank"
            href="/create/cheyuan"
            class="btn_release">快速发布车源</a>
        </div>
      </div>
    </div> 
    <!-- 我也要降价发布 -->
    <div class="bj_2">
      <div class="our_advantage grid_c1">
        <h3 class="p_title">我们的优势</h3>
        <ul class="our_advantage_list clearfix">
          <li>
            <div class="our_advantage_pic"><img src="../../static/images/huizong/advantage01.png"></div>
            <p class="our_advantage_name">车型丰富</p>
            <p class="our_advantage_txt">4.2米-17米各种车型，智能搭配</p>
          </li>
          <li>
            <div class="our_advantage_pic"><img src="../../static/images/huizong/advantage02.png"></div>
            <p class="our_advantage_name">智能高效</p>
            <p class="our_advantage_txt">承运车辆严格审核备案
            完善的理赔保障体系</p>
          </li>
          <li>
            <div class="our_advantage_pic"><img src="../../static/images/huizong/advantage02.png"></div>
            <p class="our_advantage_name">车货双赢</p>
            <p class="our_advantage_txt">货主省钱，司机赚钱</p>
          </li>
          <li>
            <div class="our_advantage_pic"><img src="../../static/images/huizong/advantage03.png"></div>
            <p class="our_advantage_name">车型丰富</p>
            <p class="our_advantage_txt">4.2米-17米各种车型，智能搭配</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 我们的优势 -->
    <div class="p_hy_info clearfix">
      <div class="hy_info_col1 fl clearfix">
        <div class="hy_info_tit fl">
          <h3>最新成交用户</h3>
        </div>
        <div class="hy_info_user_box fl">
          <ul 
            class="hy_info_user_list"
            v-if="carNewsData.length>0"
          >
            <li 
              v-for="(item,index) in carNewsData"
              :key="index">
              <div class="hy_info_user_info">
                <span class="hy_info_user_info_user">用户{{ item.creater }} </span>
                <span class="hy_info_user_info_time">{{ item.time }}</span>
              </div>
              <div class="hy_info_user_text ">
                <span>发布<b>{{ item.startCity }}</b>到<b>{{ item.endCity }}</b></span>
                <span>{{ item.goodsTypeName }}| {{ item.goodsNum }}件|{{ item.goodsWeight }}公斤|体积{{ item.goodsVolume }}方  </span>                   
                <a 
                  target="_blank"
                  :href="'/cheyuan/detail?id='+item.id"
                  class="hy_info_user_text_link fr">查看车源</a>
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
                <i class="iconfont icondangqianhuowu"/>
                <a
                  target="_blank" 
                  href="/huoyuan">当前货物</a>
              </span>
              <span class="hy_info_list_num">{{ statisticsData.goodsCount }}</span>
            </li>
            <li>
              <span>
                <i class="iconfont iconwuliuzhuanxian"/>
                <a
                  target="_blank" 
                  href="/zhuanxian/list">物流专线</a>
              </span>
              <span class="hy_info_list_num">{{ statisticsData.transportRangeCount }}</span>
            </li>
            <li>
              <span
              ><i class="iconfont iconcheyuanxinxi"/>
                <a
                  target="_blank" 
                  href="/cheyuan">当前车源</a>
              </span>
              <span class="hy_info_list_num">{{ statisticsData.carInfoCount }}</span>
            </li>
          </ul>
          <ul class="hy_info_text_list">
            <li><i class="iconfont iconjiantou_xiangshang_o"/>今日新增:</li>
            <li>
              <a
                target="_blank" 
                href="/huoyuan">货源
                <span class="hy_info_text_num">{{ statisticsData.toDayGoodsCount }}</span>
            </a></li>
            <li>
              <a
                target="_blank" 
                href="/zhuanxian/list">
                专线
                <span class="hy_info_text_num">{{ statisticsData.toDayTransportRangeCount }}</span>
            </a></li>
            <li>
              <a
                target="_blank" 
                href="/cheyuan">
                车源
                <span class="hy_info_text_num">{{ statisticsData.toDayCarInfoCount }}</span>
            </a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 最新车源信息 -->
    <div class="p_hy_groom clearfix">
      <div class="hd clearfix">
        <h3 class="gr_title">推荐车源</h3>
        <div class="gr_txt"><span>{{ statisticsData.carInfoCount }}</span>条专线，为您优选12条热门优质专线</div>
        <div class="gr_sch">
          <div 
            id="zx_groom_star"
            class="gr_sch_city">
            <input 
              type="text" 
              placeholder="请输入出发地" 
              id="groom_pageinp1">
          </div>
          <div class="gr_sch_icon"><i class="iconfont iconjiantou_xiangyou_o"/></div>
          <div 
            id="zx_groom_end"
            class="gr_sch_city">
            <input 
              type="text" 
              placeholder="请输入到达地" 
              id="groom_pageinp2">
          </div>
          <div class="gr_sch_btn"><a @click="groomSearch">搜索</a></div>
        </div>
        <a 
          target="_blank"
          :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity"
          class="gr_link">全部专线<i class="iconfont iconjiantou2"/></a>
      </div>
      <div class="p_type_nav">
        <a 
          target="_blank"
          :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity+'&carType=AF01801'">小面包</a>
        <a 
          target="_blank"
          :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity+'&carType=AF01802'">金杯车</a>
        <a 
          target="_blank"
          :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity+'&carType=AF01803'">小型货车</a> 
        <a 
          target="_blank"
          :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity+'&carType=AF01804'">中型货车</a> 
        <a 
          target="_blank"
          :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity+'&carType=AF01805'">5.2米</a>
        <a
          target="_blank"
          :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity+'&carType=AF01806'">6.8米</a>
        <a 
          target="_blank"
          :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity+'&carType=AF01807'">7.6米</a>
        <a 
          target="_blank"
          :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity+'&carType=AF01808'">9.6米</a> 
        <a 
          target="_blank"
          :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity+'&carType=AF01809'">13米</a> 
        <a 
          target="_blank"
          :href="'/cheyuan?startProvince=' +currentProvince + '&startCity=' +currentCity+'&carType=AF01810'">17.5米</a>            
      </div>
      <ul class="p_hot_line p_CY_car_list clearfix">
        <li 
          v-for="(item,index) in recommendCarData"
          :key="index">
          <div class="hot_line_box">
            <a 
              target="_blank"
              :href="'/cheyuan/detail?id='+item.id">
              <div class="h_pic">       
                <img :src="item.carFile">
              </div>
              <div class="wl_box">
                <div class="h_place">
                  <span class="icon icon_start">始</span>
                  <span class="place">{{ item.strartAddress }}</span>
                  <span class="icon icon_end">终</span>
                  <span class="place">{{ item.endAddress }}</span>
                </div>
                <div class="CY_list_txt">{{ item.carTypeName }}| 长{{ item.carLength }}米|载重{{ item.carLoad }}|吨|体积{{ item.carVolume }}方</div>
                <div class="CY_list_price"> 运价：<span class="CY_list_price_num">{{ item.expectPrice }}</span> 元</div>
                <div class="CY_list_praise">
                  <div class="CY_list_praise_list fl">
                    <span class="CY_list_praise_name">好评</span>{{ item.evaGoodCount }}
                    <span class="CY_list_praise_name">收藏 </span>{{ item.collectNumber }}
                  </div>
                  <div class="CY_list_praise_num fr">好评率<span class="color_orange">{{ item.goodRate }}%</span></div>         
                </div>
                <div class="CY_list_time"><i class="iconfont iconshijian"/>{{ item.createTime }}</div>
              </div>
            </a>
            <div class="h_operate">        
              <a 
                v-show="item.iscollect" 
                @click="collectFn(item,index,'recommend')"
                class="link_collect">
                <i class="iconfont iconshoucang1"/>收藏
              </a>
              <a 
                v-show="!item.iscollect" 
                @click="collectFn(item,index,'recommend')"
                class="link_collect">
                <i class="iconfont iconshoucang1"/>取消收藏
              </a>
            </div>
          </div>
        </li>      
      </ul>
    </div>
    <!-- 推荐车源 -->
    <div class="user_discuss  grid_c1">
      <h3 class="p_title">用户点评</h3>
      <div 
        class="swiper-container"
        v-swiper:mySwiper="swiperOption2">
        <div class="swiper-wrapper discuss-list-content clearfix">
          <div class="swiper-slide">
            <div class="discuss_item">
              <div class="discuss_ad_hd">
                <img 
                  class="ad_hd_img"  
                  src="../../static/images/huizong/cheyuan/reviews_banner_text.png">
              </div>
              <ul class="usr_discuss_tab">
                <li 
                  :class="{'user_discuss_active':carTypeIndex===1}" 
                  @mouseover="carTypeIndex=1">
                面包车</li>
                <li 
                  :class="{'user_discuss_active':carTypeIndex===2}"
                  @mouseover="carTypeIndex=2">金杯车</li>
                <li 
                  :class="{'user_discuss_active':carTypeIndex===3}"
                  @mouseover="carTypeIndex=3">小型货车</li>
                <li 
                  :class="{'user_discuss_active':carTypeIndex===4}"
                  @mouseover="carTypeIndex=4">中型货车</li>
              </ul>
              <div class="user_discuss_tab_content">
                <div 
                  class="tab_item"
                  v-show="carTypeIndex===1">
                  <div 
                    class="car-dealers"
                    v-for="(item,index) in carTypeData1"
                    :key="index">
                    <a 
                      target="_blank"
                      :href="'/cheyuan/detail?id='+item.id">
                      <img 
                        :src="item.carFile" 
                        class="logo">
                      <span>{{ item.goodRate }}</span>分
                    </a>
                  </div>          
                </div>
                <div 
                  class="tab_item"
                  v-show="carTypeIndex===2">
                  <div 
                    class="car-dealers"                    
                    v-for="(item,index) in carTypeData2"
                    :key="index">
                    <a 
                      target="_blank"
                      :href="'/cheyuan/detail?id='+item.id">
                      <img 
                        :src="item.carFile" 
                        class="logo">
                      <span>{{ item.goodRate }}</span>分
                    </a>
                  </div> 
                </div>
                <div 
                  class="tab_item"
                  v-show="carTypeIndex===3">
                  <div 
                    class="car-dealers"
                    v-for="(item,index) in carTypeData3"
                    :key="index">
                    <a 
                      target="_blank"
                      :href="'/cheyuan/detail?id='+item.id">
                      <img 
                        :src="item.carFile" 
                        class="logo">
                      <span>{{ item.goodRate }}</span>分
                    </a>
                  </div>
                </div>
                <div 
                  class="tab_item"
                  v-show="carTypeIndex===4">
                  <div 
                    class="car-dealers"
                    v-for="(item,index) in carTypeData4"
                    :key="index">
                    <a 
                      target="_blank"
                      :href="'/cheyuan/detail?id='+item.id">
                      <img 
                        :src="item.carFile" 
                        class="logo">
                      <span>{{ item.goodRate }}</span>分
                    </a>
                  </div>
                </div>
              </div>      
            </div>
          </div>
          <div 
            class="swiper-slide"
            v-for="(item,index) in userList"
            :key="index">
            <div class="discuss_item">
              <div 
                class="discuss_item_pic" 
                :style="{backgroundImage:'url(' + item.userBackground + ')'}"
              >
                <!-- :style="{background-image: item.userBackground}" -->
                <div
                  class="item_pic_user"
                  :style="{backgroundImage:'url(' + item.userImage + ')'}"/>
              </div>
              <div class="discuss_item_content">
                <div class="content-tit">来自于{{ item.userName }}的评价</div>
                <div class="content-score">非常满意 {{ item.estimate }} 分</div>
                <div class="content-text">{{ item.txt }}</div>
                <div class="content-address"><i class="iconfont iconweizhi"/>{{ item.address }}</div>
              </div>
            </div>
          </div>

        </div>
        <div class="swiper-pagination"/>
        <!-- Add Arrows -->
        <div class="swiper-button-next"/>
        <div class="swiper-button-prev"/>
      </div>
    </div>
    <!-- 用户评价 -->
    <div class="p_release release_car">
      <div class="release_box">
        <div class="release_box_txt fl">
          <h3 class="release_box_txt_tit">让承运商主动来找我</h3>
          快速发布货源，让承运商主动联系我，自主挑选合适承运商
        </div>
        <div class="btn_box fr">
          <a 
            target="_blank"
            href="/create/huoyuan"
            class="btn_release">快速求车信息</a>
        </div>
      </div>
    </div>
    <!-- 发布求车信息 -->
    <div class="bj_2">
      <div class="p_company_owner">
        <div class="p_title_box">
          <h3 class="title">本月明星车主</h3>
          <span class="title_txt">本月明星车主</span>
        </div>  
        <ul class="p_co_owner_list clearfix">
          <li
            v-for="(item,index) in monthDriverData"
            :key="index">
            <div 
              v-if="index==0"
              class="rank_num no1">NO.I</div>
            <div 
              v-if="index==1"
              class="rank_num no2">NO.I</div>
            <div
              v-if="index==2"
              class="rank_num no3">NO.I</div>

            <div class="rank_pic"><img :src="item.carFile||noneImg"></div>
            <div class="rank_tit"><span class="rank_tit_name">{{ item.carNum }}</span> <span class="rank_tit_name">{{ item.driverName }}</span><span class="rank_tit_icon_tuijian">推</span></div>
            <div class="rank_groom"><span class="name">推荐指数</span><span><Star :start-num="item.recommendedNumber"/></span></div>
            <div class="rank_praise">好评率{{ item.goodRate }}%</div>
          </li>

        </ul>    
      </div> 
    </div>  
    <!-- 本月明星 -->
    <div class="join_our grid_c1">
      <h3 class="p_title">加入我们</h3>
      <ul class="join_our_list">
        <li class="jion_our_item1">
          <p class="join_our_tit">海量货源</p>
          <p class="join_our_txt"> 专业的项目团队，为成员引进更多的货源机会</p>
        </li>
        <li class="jion_our_item2">
          <p class="join_our_tit">海量车源</p>
          <p class="join_our_txt"> 车辆到哪都有货，运费增加还剩下油费</p>
        </li>
        <li class="jion_our_item3">
          <p class="join_our_tit">收入大幅增加</p>
          <p class="join_our_txt">每月平均多跑3趟，收入增加5000元</p>
        </li>
      </ul>
    </div>
    <!-- 加入我们 -->
    <div style="background-color:#fac382">
      <div class="join_step grid_c1">
        <h3 class="p_title">加入流程</h3>
        <img src="../../static/images/huizong/step_jion.jpg">
      </div>
    </div>
    <!-- 加入流程 -->
    <div class="ournews grid_c1">
      <div class="ournews_tit clearfix">
        <span class="tab_head_title">公司新闻</span>
        <span class="tab_head_line"/>
        <ul class="tab_head_lists">
          <li 
            :class="{'selected':newsIndex===1}" 
            @mouseover="newsIndex=1">网站公告</li>
          <li
            :class="{'selected':newsIndex===2}" 
            @mouseover="newsIndex=2">客户案例</li>
        </ul>
      </div>
      <div class="ournews_content">
        <div v-show="newsIndex===1"> 
          <ul class="ournews_content_lists ">
            <li 
              class="ournews_content_li"
              :key="index" 
              v-for="(item, index) in $store.state.news.cheyuan_wzgg">
              <span class="ournews_content_pointe"/>
              <a 
                :href="item.url" 
                target="_blank">
                <p class="ournews_content_li_item">{{ item.title }}</p>
              </a>
            </li>
          </ul>
        </div>
        <div v-show="newsIndex===2">
          <ul class="ournews_content_lists ">
            <li 
              class="ournews_content_li"
              :key="index" 
              v-for="(item, index) in $store.state.news.cheyuan_khal">
              <span class="ournews_content_pointe"/>
              <a 
                :href="item.url" 
                target="_blank">
                <p class="ournews_content_li_item">{{ item.title }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 公司新闻 -->
    <!-- 帮我推荐弹窗 -->
    <div 
      id="recommend"
      class="recommend_pop"
      style="display: none;">
      <div 
        id="recommend_start"
        class="recommend_city">        
        <input 
          type="text" 
          placeholder="请输入出发地" 
          id="recommend_pageinp1">
      </div>
      <div 
        id="recommend_end"
        class="recommend_city">        
        <input 
          type="text" 
          placeholder="请输入到达地" 
          id="recommend_pageinp2">
      </div>
      <div class="select_box">
        <select v-model="carTypeSelected" >
          <!-- <option selected>请选择车辆类型</option>     -->
          <option     
            v-for="(item,index) in carTypeData"
            :value="item.code"
            :key="index">{{ item.name }}</option>
        </select>
      </div>
    </div>
    <SidebarNav />
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import until from '~/static/js/server/comonUntil' //获取公共的函数
import Star from '~/components/star/star' //星星
import Swiper from 'Swiper'
import SidebarNav from '~/components/public/sidebarNav'

export default {
  name: 'HuiZong',
  head: {},
  components: {
    Star,
    SidebarNav
  },
  data() {
    return {
      noneImg: require('../../static/images/huizong/none.jpg'),
      newsIndex: 1,
      carTypeIndex: 1,
      //登录权限
      isToken: false,
      loginMobile: '',
      //推荐我手机
      groomPhone: '',
      ///推荐我车辆类型数据
      carTypeData: '',
      //推荐我默认选中的车辆
      carTypeSelected: '',
      bannerList: [
        {
          banner: require('../../static/images/huizong/cheyuan/banner.jpg'),
          link: '/create/cheyuan'
        }
      ],
      userList: [
        {
          userBackground: require('../../static/images/huizong/cheyuan/user_bj1.png'),
          userImage: require('../../static/images/huizong/cheyuan/user1.png'),
          userName: '陈**',
          estimate: 10,
          txt:
            '“没加入28快运城际回头车之前，我拉货到了一个城市，需要在当地信息部交钱找货，等找到活都需要几天，有时交完钱还不一定能拉到货。加入城际回头车之后简单多了，通过APP接单，一卸完货马上装车跑第二趟，一个月多赚5000块钱',
          address: '广州'
        },
        {
          userBackground: require('../../static/images/huizong/cheyuan/user_bj2.png'),
          userImage: require('../../static/images/huizong/cheyuan/user2.png'),
          userName: '陆**',
          estimate: 10,
          txt:
            '“之前送货到目的地之后，对周围不熟悉，总是要放空跑回去，不仅浪费车还浪费时间，现在用城际回头车之后，在卸货的空档打开APP，周围就有一堆的订单，等卸完货我也联系好货主了，马上就拉下一趟，这样每个月多跑了三五趟。”',
          address: '广州'
        },
        {
          userBackground: require('../../static/images/huizong/cheyuan/user_bj1.png'),
          userImage: require('../../static/images/huizong/cheyuan/user1.png'),
          userName: '贾**',
          estimate: 10,
          txt:
            '“我用过不同的APP接单，最后发现还是28快运回头车上订单最多，每个月根本就闲不下来。”',
          address: '广州'
        }
      ],
      swiperOption1: {
        effect: 'fade',
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOption2: {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: ' .swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: '.my-button-disabled'
        }
      }
    }
  },
  async fetch({ store, params, $axios, error, app }) {
    await store.dispatch('news/GETNEWSINFO', {
      params: {
        channelIds: 117,
        count: 6,
        orderBy: 0,
        channelOption: 0
      },
      name: 'cheyuan_wzgg',
      preFn: data => {
        return data.map(el => {
          el.url = el.url.replace(
            /http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,
            '/help'
          )
          return el
        })
      }
    })
    await store.dispatch('news/GETNEWSINFO', {
      params: {
        channelIds: 118,
        count: 6,
        orderBy: 0,
        channelOption: 0
      },
      name: 'cheyuan_khal',
      preFn: data => {
        return data.map(el => {
          el.url = el.url.replace(
            /http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,
            '/help'
          )
          return el
        })
      }
    })
  },
  async asyncData({ $axios, query, app, error }) {
    //服务端获取cookies
    let currentProvince = app.$cookies.get('currentProvinceFullName')
    let currentCity = app.$cookies.get('currentAreaFullName')

    //热门城市
    let hotCityData = await $axios.get('/28-web/city/hot')
    //严选车源列表
    let carSourceData = await $axios.post(
      '/28-web/carInfo/sumPage/recommendList',
      {
        currentPage: 1,
        pageSize: 5,
        startProvince: currentProvince,
        startCity: currentCity,
        driverStatus: 'AF0010403'
      }
    )

    //优惠专区
    ///carInfo/sumPage/showCarList
    let discountCarData = await $axios.post(
      '/28-web/carInfo/sumPage/showCarList',
      {
        currentPage: 1,
        pageSize: 8,
        startProvince: currentProvince,
        startCity: currentCity
      }
    )
    //最新车源新闻
    let carNewsData = await $axios.post('/28-web/carInfo/newest/publish', {
      currentPage: 1,
      pageSize: 10
    })
    //查询首页车源、货源、专线数量
    let statisticsData = await $axios.get('/28-web/index/today/statistics')
    //推荐车源
    let recommendCarData = await $axios.post(
      '/28-web/carInfo/sumPage/recommendList',
      {
        currentPage: 1,
        pageSize: 15,
        startProvince: currentProvince,
        startCity: currentCity
      }
    )
    //用户点评车辆类型
    let [
      carTypeData1,
      carTypeData2,
      carTypeData3,
      carTypeData4
    ] = await Promise.all([
      //面包车
      $axios.post('/28-web/carInfo/sumPage/recommendList', {
        currentPage: 1,
        pageSize: 8,
        startProvince: currentProvince,
        startCity: currentCity,
        carType: 'AF01801'
      }),
      //金杯车
      $axios.post('/28-web/carInfo/sumPage/recommendList', {
        currentPage: 1,
        pageSize: 8,
        startProvince: currentProvince,
        startCity: currentCity,
        carType: 'AF01802'
      }),
      //小型货车
      $axios.post('/28-web/carInfo/sumPage/recommendList', {
        currentPage: 1,
        pageSize: 8,
        startProvince: currentProvince,
        startCity: currentCity,
        carType: 'AF01803'
      }),

      //中型货车
      $axios.post('/28-web/carInfo/sumPage/recommendList', {
        currentPage: 1,
        pageSize: 8,
        startProvince: currentProvince,
        startCity: currentCity,
        carType: 'AF01804'
      })
    ])
    //车主月人气榜列表
    let monthDriverData = await $axios.get(
      '/28-web/driver/driverPopularityList?currentPage=1&pageSize=5'
    )
    //返回赋值
    // if (
    //   hotCityData.status === 200 ||
    //   carSourceData.status === 200 ||
    //   discountCarData.status === 200 ||
    //   carNewsData.status === 200 ||
    //   statisticsData.status === 200 ||
    //   recommendCarData.status === 200 ||
    //   //用户点评车类型
    //   carTypeData1.status === 200 ||
    //   carTypeData2.status === 200 ||
    //   carTypeData3.status === 200 ||
    //   carTypeData4.status === 200 ||
    //   monthDriverData.status === 200
    // ) {
    return {
      //获取当前的城市
      currentProvince: currentProvince ? currentProvince : '',
      currentCity: currentCity ? currentCity : '',
      //热门城市
      hotCityData:
        hotCityData.status === 200 ? hotCityData.data.data || [] : [],
      //车源列表
      carSourceData:
        carSourceData.status === 200 ? carSourceData.data.data || [] : [],
      //优惠专区
      discountCarData:
        discountCarData.status === 200 ? discountCarData.data.data || [] : [],
      //车源新闻
      carNewsData:
        carNewsData.status === 200 ? carNewsData.data.data || [] : [],
      statisticsData:
        statisticsData.status === 200 ? statisticsData.data.data || {} : {},
      //推荐车源
      recommendCarData:
        recommendCarData.status === 200 ? recommendCarData.data.data || [] : [],

      //用户点评车类型
      carTypeData1:
        carTypeData1.status === 200 ? carTypeData1.data.data || [] : [],
      carTypeData2:
        carTypeData2.status === 200 ? carTypeData2.data.data || [] : [],
      carTypeData3:
        carTypeData3.status === 200 ? carTypeData3.data.data || [] : [],
      carTypeData4:
        carTypeData4.status === 200 ? carTypeData4.data.data || [] : [],
      //本月人气车主
      monthDriverData:
        monthDriverData.status === 200 ? monthDriverData.data.data || [] : []
    }
    // }
    // else {
    //   error({ statusCode: 500, message: '查找不到该专线列表' })
    // }
  },
  created() {
    //添加收藏字段
    // this.carSourceData.forEach((item, index, array) => {
    //   item.iscollect = true
    // })
    // this.recommendCarData.forEach((item, index, array) => {
    //   item.iscollect = true
    // })
  },
  mounted() {
    // this.intSwiper1()
    let that = this
    this.$nextTick(() => {
      this.getCookies()
      //处理收藏的数据
      this.handleData()
      //幻灯片
      this.intSwiper2()
      //打印返回的数据
      console.log('严选车辆返回列表', this.carSourceData)
      console.log('优惠专区', this.discountCarData)
      console.log('最新新闻10', this.carNewsData)
      console.log('车源推荐', this.recommendCarData)
      console.log('用户点评1', this.carTypeData1)
      console.log('用户点评2', this.carTypeData2)
      console.log('用户点评3', this.carTypeData3)
      console.log('用户点评4', this.carTypeData4)
      console.log('本月人气车主', this.monthDriverData)
      console.log('用户成交量', this.statisticsData)
      // console.log('行业新闻', this.hyNewData)
      // console.log('客户案例', this.khNewData)
    })

    seajs.use(['layer', '/js/jq_scroll.js'], function() {
      // 向上滚动
      $('.p_hy_info .hy_info_user_box').Scroll({
        line: 1,
        speed: 600,
        timer: 3000
      })
      // 地点插件
      $('#groom_pageinp1').citypicker()
      $('#groom_pageinp2').citypicker()
      //推荐我
      $('#recommend_pageinp1').citypicker()
      $('#recommend_pageinp2').citypicker()
      //登录成功赋值
      $('body').on('login.success', () => {
        that.isToken = $.cookie('access_token') ? true : false
        that.loginMobile = $.cookie('login_mobile')
        // console.log('vue打印', that)
        // alert($.cookie('access_token'))
      })
    })
  },
  methods: {
    // intSwiper1() {
    //   this.$nextTick(() => {
    //     $('.cy_banner').hover(
    //       function() {
    //         $(this)
    //           .find('.swiper-button-next,.swiper-button-prev')
    //           .show()
    //       },
    //       function() {
    //         $(this)
    //           .find('.swiper-button-next,.swiper-button-prev')
    //           .hide()
    //       }
    //     )
    //     let swiper = new Swiper('.cy_banner .swiper-container', {
    //       effect: 'fade',
    //       spaceBetween: 30,
    //       centeredSlides: true,
    //       autoplay: {
    //         delay: 3000,
    //         disableOnInteraction: false
    //       },
    //       pagination: {
    //         el: '.cy_banner .swiper-pagination',
    //         dynamicBullets: true,
    //         clickable: true
    //       },
    //       navigation: {
    //         nextEl: '.cy_banner .swiper-button-next',
    //         prevEl: '.cy_banner .swiper-button-prev'
    //       }
    //     })
    //   })
    // },
    intSwiper2() {
      this.$nextTick(() => {
        // 货主
        let hahaswiper = new Swiper('.user_discuss   .swiper-container', {
          slidesPerView: 4,
          spaceBetween: 20,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: ' .swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: '.my-button-disabled'
          }
        })
      })
    },
    //处理组装数据
    handleData() {
      if (this.carSourceData.length > 0) {
        this.carSourceData.forEach((item, index, array) => {
          item.iscollect = true
        })
      }
      if (this.recommendCarData.length > 0) {
        this.recommendCarData.forEach((item, index, array) => {
          item.iscollect = true
        })
      }
    },
    getCookies() {
      //获取省市cookies
      //$.cookie
      this.isToken = $.cookie('access_token') ? true : false
      this.loginMobile = $.cookie('login_mobile')
    },
    //登录
    showLogin() {
      $('body').trigger('login.show')
    },
    //搜索货源
    groomSearch() {
      let startPlace = until.getPlace('#zx_groom_star')
      let endPlace = until.getPlace('#zx_groom_end')
      startPlace.province = !startPlace.province
        ? this.currentProvince
        : startPlace.province
      startPlace.city = !startPlace.city ? this.currentCity : startPlace.city

      //跳转
      let url = `/cheyuan?startProvince=${startPlace.province}&startCity=${
        startPlace.city
      }&startArea=${startPlace.area}&endProvince=${endPlace.province}&endCity=${
        endPlace.city
      }&endArea=${endPlace.area}`
      window.open(url, '_blank')
    },
    //收藏
    collectFn(item, index, typeData = 'carSource') {
      //type是1收藏，0不收藏
      //dataTpe:carSource严选车辆，车源推荐carrecommend
      if (!$.cookie('access_token')) {
        layer.msg('请登录，在收藏！')
        return false
      }

      let access_token = $.cookie('access_token')
      let user_token = $.cookie('login_userToken')
      let carInfoId = item.id
      let handle = item.iscollect ? 'collect' : 'cancelCollect'
      let url = `/28-web/collect/carInfo?access_token=${access_token}&user_token=${user_token}&carInfoId=${carInfoId}&handle=${handle}`

      console.log('收藏token', $.cookie('access_token'))
      console.log('收藏user_token', $.cookie('login_userToken'))
      console.log('收藏id', carInfoId)
      console.log('收藏handle', handle)

      this.$axios.post(url).then(res => {
        if (res.data.status === 200) {
          if (typeData === 'carSource') {
            this.carSourceData[index].iscollect = !this.carSourceData[index]
              .iscollect
            this.$forceUpdate()
          } else {
            this.recommendCarData[index].iscollect = !this.recommendCarData[
              index
            ].iscollect
            this.$forceUpdate()
          }
          layer.msg(res.data.data)
        } else {
          layer.msg(res.data.errorInfo)
        }
      })

      // const form = new FormData()
      // form.append('token', $.cookie('access_token'))
      // form.append('user_token', $.cookie('login_userToken'))
      // form.append('carInfoId', id)
      // form.append('handle', 'collect')

      // let config = {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // }
      // this.$axios
      //   .post('/28-web/collect/carInfo', form, config)
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(res => {
      //     console.log(res)
      //   })
    },
    //推荐我
    groomMeFn() {
      let that = this
      //手机号码验证
      if (this.groomPhone === '') {
        layer.msg('手机号码不能为空！')
        return false
      }

      if (!AFLC_VALID.MOBILE.test(this.groomPhone)) {
        layer.msg('手机号码必须为11为数字！')
        return false
      }

      //获取车辆的类型
      //第一次非空才能请求
      if (!this.carTypeData) {
        console.log('只能请求一次')
        this.$axios
          .get('/28-web/sysDict/getSysDictByCodeGet/AF018')
          .then(res => {
            this.carTypeData =
              res.data.status === 200 ? res.data.data || [] : []
            if (this.carTypeData.length > 0) {
              let selected = {
                code: '',
                name: '请选择车辆类型'
              }
              this.carTypeData.unshift(selected)
              this.carTypeSelected = this.carTypeData[0].code
            }
          })
      }

      layer.open({
        type: 1,
        title: '推荐我',
        area: ['600px', '450px'], //宽高
        btn: ['确定', '取消'],
        content: $('#recommend'),
        cancel: function() {
          that.clearGroomData()
          console.log('取消按钮')
          layer.closeAll()
        },
        yes: function() {
          that.groomPlace()
          //验证错误
          let check = that.groomValidator()
          if (!check) {
            return false
          }
          //请求
          that.groomAPi()
          //清空数据
          that.clearGroomData()
          layer.closeAll()
        },
        btn2: function() {
          //清空数据
          that.clearGroomData()
          console.log('取消按钮')
          layer.closeAll()
        }
      })
    },
    //推荐我开始地点，结束地点赋值
    groomPlace() {
      let startPlace = until.getPlace('#recommend_start')
      let endPlace = until.getPlace('#recommend_end')

      // 开始城市赋值
      this.grStartProvince = startPlace.province
      this.grStartCity = startPlace.city
      this.grStartArea = startPlace.area
      //到达城市赋值
      this.grEndProvince = endPlace.province
      this.grEndCity = endPlace.city
      this.grEndArea = endPlace.area
    },
    //验证数据
    groomValidator() {
      if (!this.grStartProvince && !this.grStartCity) {
        layer.msg('开始的省市必填！')
        return false
      }
      if (!this.grEndProvince && !this.grEndCity) {
        layer.msg('到达的省市必填！')
        return false
      }
      if (!this.carTypeSelected) {
        layer.msg('您还没选择车辆的类型！')
        return false
      }
      return true
    },
    //清空数据
    clearGroomData() {
      // 开始城市赋值
      this.grStartProvince = ''
      this.grStartCity = ''
      this.grStartArea = ''
      //到达城市赋值
      this.grEndProvince = ''
      this.grEndCity = ''
      this.grEndArea = ''
      //select
      this.carTypeSelected = this.carTypeData[0].code
      this.groomPhone = ''
      //地址插件重置
      $('#recommend_pageinp1').citypicker('reset')
      $('#recommend_pageinp2').citypicker('reset')
    },
    //推荐我请求提交数据
    groomAPi() {
      //helpFind/carInfo/create
      this.$axios
        .post('/28-web/helpFind/carInfo/create', {
          carType: this.carTypeSelected,
          msgMobile: this.groomPhone,

          startProvince: this.grStartProvince,
          startCity: this.grStartCity,
          startArea: this.grStartArea,

          endProvince: this.grEndProvince,
          endCity: this.grEndCity,
          endArea: this.grEndArea
        })
        .then(res => {
          if (res.data.status === 200) {
            console.log('推荐我请求返回数据', res)
            layer.msg('推荐成功！')
          } else {
            layer.msg(res.data.data.errorInfo)
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/huizong.scss';
.p_CY_car_list {
  > li {
    min-height: 366px;
  }
  .h_pic {
    position: relative;
    .h_pic_icon_groom {
      position: absolute;
      top: 10px;
      left: 10px;
      padding: 0 5px;
      color: $white;
      background: $red;
    }
  }
  .CY_list_txt,
  .CY_list_price {
    margin-bottom: 10px;
    color: $tit_color;
    .CY_list_price_num {
      color: $orange;
      font-size: $f_16;
    }
  }
  .CY_list_praise {
    overflow: hidden;
    margin-bottom: 10px;
    .CY_list_praise_list {
      > li {
        @extend .fl;
        margin-right: 10px;
        .CY_list_praise_name {
          padding-right: 5px;
        }
      }
    }
    // .CY_list_praise_num {
    // }
  }
  .CY_list_time {
    color: $light_gray;
    .iconfont {
      padding-right: 5px;
    }
  }
  .h_operate {
    text-align: center;
  }
  .link_collect {
    display: inline-block;
    width: 100px;
    cursor: pointer;
  }
}
/*1、导航*/
.category {
  margin-bottom: 20px;
  .cg_col1 {
    width: 230px;
    height: 425px;
    background: $white;
  }
  .cg_col2 {
    margin-left: 15px;
    width: 890px;
    height: 425px;
    background: $white;
  }
  .cg_col3 {
    padding: 0 20px;
    width: 250px;
    height: 425px;
    background: $white;
  }
}
/*幻灯片*/
.cy_banner {
  overflow: hidden;
  height: 425px;
  background: $white;
  .swiper-container {
    height: 425px;
    > .swiper-slide {
      display: none;
    }
    // .swiper-button-prev,
    // .swiper-button-next {
    //   display: none;
    // }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
/*帮我推荐*/
.p_me_groom {
  .gr_operate {
    margin-bottom: 5px;
  }
  .gr_cy_info {
    > p {
      line-height: 25px;
      color: $tit_color;
      b {
        color: $orange;
      }
    }
  }
}
/*2、严选车源*/
.CY_car {
  .p_title_box {
    padding-bottom: 0;
  }
}
/*3、优惠专区*/
.discount {
  padding-bottom: 20px;
  .discount_left {
    width: 285px;
    height: 354px;
    text-align: center;
  }
  .discount_right {
    width: 1155px;
    .d_car_list {
      > li {
        position: relative;
        @extend .fl;
        margin: 0 0 20px 20px;
        padding: 10px;
        width: 246px;
        height: 145px;
        color: $tit_color;
        background: $light_blue;
        border: 1px solid $border_color;

        .md_box {
          @extend .p_go_city;
        }

        .md_area {
          @extend .p_go_area;
        }

        .d_car_price {
          margin-bottom: 5px;
          .d_car_price_num {
            font-size: 16px;
            color: $orange;
          }
        }
        .d_car_time {
          margin-bottom: 5px;
          color: $light_gray;
        }
        .d_car_icon_drop {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 120px;
          height: 25px;
          line-height: 25px;
          color: $white;
          font-size: $f_13;
          text-align: center;
          background: $icon_red;
        }
      }
    }
  }
}
/*4、我也要降价*/
.drop_price {
  > .release_box {
    width: 400px;
  }
}
/*我们的优势*/
.our_advantage {
  padding-bottom: 20px;
  .p_title {
    text-align: center;
  }
  .our_advantage_list {
    > li {
      @extend .fl;
      margin-top: 20px;
      margin-bottom: 15px;
      width: 360px;
      text-align: center;
      .our_advantage_name {
        padding: 20px 0;
        font-size: 20px;
        color: $tit_color;
      }
      .our_advantage_txt {
        margin: 0 auto;
        width: 180px;
      }
    }
  }
}
/*用户点评*/
.user_discuss {
  .p_title {
    text-align: center;
  }
  margin-bottom: 50px;
  .swiper-container {
    width: 1440px;
    height: 480px;
  }
  .discuss_item {
    &:first-child {
      margin-left: 0;
    }
    position: relative;
    @extend .fl;
    margin-left: 20px;
    width: 345px;
    height: 430px;
    overflow: hidden;
    background: $white;
    .discuss_ad_hd {
      padding: 34px 0;
      height: 108px;
      text-align: center;
      background: #325bcc;
      .ad_hd_img {
        height: 100%;
        display: inline-block;
      }
    }
    .usr_discuss_tab {
      height: 40px;
      color: rgba(51, 51, 51, 0.8);
      line-height: 40px;
      box-shadow: 0 1px 0 0 hsla(0, 0%, 93%, 0.5);
      font-size: 0;
      > li {
        display: inline-block;
        vertical-align: middle;
        width: 25%;
        text-align: center;
        font-size: $f_14;
        &.user_discuss_active {
          color: $blue;
          font-size: 16px;
          position: relative;
          &:after {
            position: absolute;
            left: 22px;
            bottom: 0;
            content: ' ';
            display: inline-block;
            width: 40px;
            height: 2px;
            background: $blue;
          }
        }
      }
    }
    .user_discuss_tab_content {
      padding: 16px;
      font-size: 0;
      > .tab_item {
        .car-dealers {
          display: inline-block;
          vertical-align: text-top;
          padding-bottom: 13px;
          margin-bottom: 1px;
          color: $blue;
          font-size: $f_12;
          border-right: 1px dashed #e7e7e7;
          width: 155px;
          &:nth-child(2n) {
            border-right: 0;
            .logo {
              margin-left: 25px;
            }
          }
          .logo {
            width: 60px;
            height: 30px;
            margin-right: 9px;
            display: inline-block;
            vertical-align: middle;
          }
          > span {
            font-size: $f_18;
            font-weight: 500;
          }
        }
      }
    }
    .discuss_item_pic {
      position: relative;
      height: 175px;
      background-size: cover;
      background-position: 50%;
      .item_pic_user {
        position: absolute;
        left: 138px;
        bottom: -22px;
        border: 3px solid #fff;
        width: 58px;
        height: 58px;
        box-shadow: 0 4px 10px 2px hsla(0, 0%, 85%, 0.4);
        border-radius: 50%;
        background-position: 50%;
        background-size: cover;
      }
    }
    .discuss_item_content {
      padding: 0 20px;
      .content-tit {
        padding-top: 28px;
        line-height: 1;
        color: $gray;
        text-align: center;
      }
      .content-score {
        text-align: center;
        padding-top: 6px;
        color: #508ef0;
        line-height: 1;
      }
      .content-text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        padding-top: 20px;
        height: 88px;
        text-align: left;
        line-height: 22px;
        color: $tit_color;
      }
      .content-address {
        position: absolute;
        bottom: 25px;
        font-size: 12px;
        line-height: 18px;
        text-align: left;
        color: $gray;
        .iconfont {
          padding-right: 5px;
        }
      }
    }
  }
}
/*求车信息*/
.release_car {
  .release_box_txt {
    width: 250px;
  }
}
/*加入我们*/
.join_our {
  margin-bottom: 40px;
  .p_title {
    text-align: center;
  }
  .join_our_list {
    font-size: 0;
    > li {
      display: inline-block;
      margin-right: 20px;
      padding: 35px 0 0 40px;
      width: 426px;
      height: 105px;
      font-size: $f_14;
      .join_our_tit {
        margin-bottom: 20px;
        font-size: 25px;
      }
      &.jion_our_item1 {
        background-image: url('https://img1.rrcimg.com//pc/guide/tongqintongqin.png');
        background-size: cover;
        .join_our_tit {
          color: #5b5d71;
        }
      }
      &.jion_our_item2 {
        background-image: url('https://img1.rrcimg.com//pc/guide/jiameng/jiameng.png');
        background-size: cover;
        .join_our_tit {
          color: #c07d34;
        }
      }
      &.jion_our_item3 {
        margin-right: 0;
        background-image: url('https://img1.rrcimg.com//pc/guide/liaomeiliaomei.png');
        background-size: cover;
        .join_our_tit {
          color: #863429;
        }
      }
    }
  }
}
/*加入流程*/
.join_step {
  padding: 20px 0;
  text-align: center;
  .p_title {
    text-align: center;
  }
  > img {
    width: 50%;
  }
}
/*公司新闻*/
.ournews {
  padding: 40px 0 60px 0;
  .ournews_tit {
    .tab_head_title {
      float: left;
      font-size: 22px;
      color: rgba(0, 0, 0, 0.8);
      margin-right: 20px;
    }
    .tab_head_line {
      float: left;
      width: 2px;
      height: 20px;
      background: rgba(0, 0, 0, 0.07);
      border-radius: 1px;
      margin-top: 5px;
    }
    .tab_head_lists {
      float: left;
      margin-left: 32px;
      padding-top: 5px;
      > li {
        &.selected {
          border-bottom: 3px solid #ff6b23;
          color: #ff6b23;
          cursor: default;
        }
        float: left;
        font-size: 16px;
        padding-bottom: 11px;
        color: rgba(0, 0, 0, 0.6);
        margin-right: 30px;
        border-bottom: 3px solid transparent;
      }
    }
  }
  .ournews_content {
    margin: 34px 0 8px;
    .ournews_content_li {
      float: left;
      width: 33%;
      margin-bottom: 23px;
      font-size: 0;
      .ournews_content_pointe {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.14);
        vertical-align: middle;
      }
      .ournews_content_li_item {
        display: inline-block;
        margin-left: 5px;
        width: 374px;
        height: 19px;
        font-size: 14px;
        line-height: 19px;
        color: rgba(0, 0, 0, 0.8);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
      }
    }
  }
}
.recommend_pop {
  padding: 50px 0 0 100px;
  .recommend_city {
    position: relative;
    margin-bottom: 30px;
    width: 400px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
  }
  .select_box {
    > select {
      text-indent: 10px;
      width: 400px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #ddd;
      outline: none;
    }
  }
}
</style>
