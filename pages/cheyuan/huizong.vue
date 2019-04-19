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
                v-for="(banner, index) in banners">
                <img :src="banner">
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
                class="fl">
              <button class="fl">帮我推荐</button>
            </div>
            <div class="error">请输入正确的手机号</div>
          </div>
          <div class="gr_operate">
            <a href="">快速下单</a>
            <a href="">查询运单</a>
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
            href="" 
            class="title_link fr">更多车源<i class="iconfont iconjiantou2"/>
          </a>         
        </div>
        <div class="p_type_nav">
          <a href="">超值特惠</a>
          <a href="">精选上新</a>
          <a href="">回程车</a>       
        </div>
        <div class="bd">
          <ul class="p_hot_line p_CY_car_list clearfix">
            <li
              v-for="(item,index) in carSourceData"
              :key="index">
              <div class="hot_line_box">
                <div class="h_pic">
                  <span class="h_pic_icon_groom"> 平台推荐</span>          
                  <img :src="item.carFile">
                </div>
                <div class="wl_box">
                  <div class="h_place">
                    <span class="icon icon_start">始</span>
                    <span class="place">{{ item.startCity }}{{ item.startArea }}</span>
                    <span class="icon icon_end">终</span>
                    <span class="place">上海黄浦区</span>
                  </div>
                  <div class="CY_list_txt">中型货车| 长2米|载重15吨|体积13.6方</div>
                  <div class="CY_list_price"> 运价：<span class="CY_list_price_num"/> 元</div>
                  <div class="CY_list_praise">
                    <ul class="CY_list_praise_list fl">
                      <li><span class="CY_list_praise_name">好评</span>84</li>
                      <li><span class="CY_list_praise_name">收藏 </span>840</li>
                    </ul>
                    <div class="CY_list_praise_num fr">好评率<span class="color_orange">98.3%</span></div>         
                  </div>
                  <div class="CY_list_time"><i class="iconfont iconshijian"/>{{ createTime }}</div>
                </div>
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
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
          href=""
          class="btn_release">快速下单</a>
      </div>
      <p class="release_total_explain">一键下单，运力30秒快速响应</p>
    </div>
    <!-- 快速下单 -->
    <div class="bj_2">
      <div class="grid_c1 discount clearfix">
        <div class="p_title_box">
          <h3 class="title">严选车源</h3>
          <span class="title_txt">时效快,多重服务,资质保障</span>
          <a 
            href="" 
            class="title_link fr">更多车源<i class="iconfont iconjiantou2"/>
          </a>         
        </div>
        <div class="discount_left fl">严选车源</div>
        <div class="discount_right fr">
          <ul class="d_car_list">
            <li>
              <a href="">
                <span class="d_car_icon_drop">低于市场行情13%</span>
                <div class="d_car_name">中型货车| 长2米|载重15吨|体积13.6方</div>
                <div class="d_car_city">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="d_car_price">
                  运价：<span class="d_car_price_num">2560</span>元
                </div>
                <div class="d_car_time">2018-10-25 15:26</div>
                <div class="d_car_deal">累计成交<span class="color_orange">260</span>单</div>
              </a>
            </li>
            <li>
              <a href="">
                <span class="d_car_icon_drop">低于市场行情13%</span>
                <div class="d_car_name">中型货车| 长2米|载重15吨|体积13.6方</div>
                <div class="d_car_city">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="d_car_price">
                  运价：<span class="d_car_price_num">2560</span>元
                </div>
                <div class="d_car_time">2018-10-25 15:26</div>
                <div class="d_car_deal">累计成交<span class="color_orange">260</span>单</div>
              </a>
            </li>
            <li>
              <a href="">
                <span class="d_car_icon_drop">低于市场行情13%</span>
                <div class="d_car_name">中型货车| 长2米|载重15吨|体积13.6方</div>
                <div class="d_car_city">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="d_car_price">
                  运价：<span class="d_car_price_num">2560</span>元
                </div>
                <div class="d_car_time">2018-10-25 15:26</div>
                <div class="d_car_deal">累计成交<span class="color_orange">260</span>单</div>
              </a>
            </li>
            <li>
              <a href="">
                <span class="d_car_icon_drop">低于市场行情13%</span>
                <div class="d_car_name">中型货车| 长2米|载重15吨|体积13.6方</div>
                <div class="d_car_city">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="d_car_price">
                  运价：<span class="d_car_price_num">2560</span>元
                </div>
                <div class="d_car_time">2018-10-25 15:26</div>
                <div class="d_car_deal">累计成交<span class="color_orange">260</span>单</div>
              </a>
            </li>
            <li>
              <a href="">
                <span class="d_car_icon_drop">低于市场行情13%</span>
                <div class="d_car_name">中型货车| 长2米|载重15吨|体积13.6方</div>
                <div class="d_car_city">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="d_car_price">
                  运价：<span class="d_car_price_num">2560</span>元
                </div>
                <div class="d_car_time">2018-10-25 15:26</div>
                <div class="d_car_deal">累计成交<span class="color_orange">260</span>单</div>
              </a>
            </li>
            <li>
              <a href="">
                <span class="d_car_icon_drop">低于市场行情13%</span>
                <div class="d_car_name">中型货车| 长2米|载重15吨|体积13.6方</div>
                <div class="d_car_city">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="d_car_price">
                  运价：<span class="d_car_price_num">2560</span>元
                </div>
                <div class="d_car_time">2018-10-25 15:26</div>
                <div class="d_car_deal">累计成交<span class="color_orange">260</span>单</div>
              </a>
            </li>
            <li>
              <a href="">
                <span class="d_car_icon_drop">低于市场行情13%</span>
                <div class="d_car_name">中型货车| 长2米|载重15吨|体积13.6方</div>
                <div class="d_car_city">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="d_car_price">
                  运价：<span class="d_car_price_num">2560</span>元
                </div>
                <div class="d_car_time">2018-10-25 15:26</div>
                <div class="d_car_deal">累计成交<span class="color_orange">260</span>单</div>
              </a>
            </li>
            <li>
              <a href="">
                <span class="d_car_icon_drop">低于市场行情13%</span>
                <div class="d_car_name">中型货车| 长2米|载重15吨|体积13.6方</div>
                <div class="d_car_city">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="d_car_price">
                  运价：<span class="d_car_price_num">2560</span>元
                </div>
                <div class="d_car_time">2018-10-25 15:26</div>
                <div class="d_car_deal">累计成交<span class="color_orange">260</span>单</div>
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
            href=""
            class="btn_release">我要入驻</a>
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
          <ul class="hy_info_user_list">
            <li>
              <div class="hy_info_user_info">
                <span class="hy_info_user_info_user">11用户159****4895 </span>
                <span class="hy_info_user_info_time">3分钟前</span>
              </div>
              <div class="hy_info_user_text ">
                <span>发布<b>广州</b>到<b>长沙</b>货源  粤F***61 </span>
                <span>钢材| 31件|51公斤|体积21方  </span>                   
                <a 
                  href=""
                  class="hy_info_user_text_link fr">查看货源</a>
              </div>
            </li>
            <li>
              <div class="hy_info_user_info">
                <span class="hy_info_user_info_user">22用户159****4895 </span>
                <span class="hy_info_user_info_time">3分钟前</span>
              </div>
              <div class="hy_info_user_text ">
                <span>发布<b>广州</b>到<b>长沙</b>货源  粤F***61 </span>
                <span>钢材| 31件|51公斤|体积21方  </span>                   
                <a 
                  href=""
                  class="hy_info_user_text_link fr">查看货源</a>
              </div>
            </li>
            <li>
              <div class="hy_info_user_info">
                <span class="hy_info_user_info_user">33用户159****4895 </span>
                <span class="hy_info_user_info_time">3分钟前</span>
              </div>
              <div class="hy_info_user_text ">
                <span>发布<b>广州</b>到<b>长沙</b>货源  粤F***61 </span>
                <span>钢材| 31件|51公斤|体积21方  </span>                   
                <a 
                  href=""
                  class="hy_info_user_text_link fr">查看货源</a>
              </div>
            </li>   
          </ul>
        </div>
      </div>
      <div class="hy_info_col2 fl clearfix">
        <div class="hy_info_num">
          <ul class="hy_info_list clearfix">
            <li>
              <span><i class="iconfont iconhuowu"/>当前货物</span>
              <span class="hy_info_list_num">229089</span>
            </li>
            <li>
              <span><i class="iconfont iconwangfandijia"/>物流专线</span>
              <span class="hy_info_list_num">229089</span>
            </li>
            <li>
              <span><i class="iconfont iconwuliu"/>当前货物</span>
              <span class="hy_info_list_num">45646</span>
            </li>
          </ul>
          <ul class="hy_info_text_list">
            <li><i class="iconfont iconjiantou_xiangshang_o"/>今日新增:</li>
            <li>货源<span class="hy_info_text_num">8951</span></li>
            <li>专线<span class="hy_info_text_num">854</span></li>
            <li>车源<span class="hy_info_text_num">8011</span></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 最新车源信息 -->
    <div class="p_hy_groom clearfix">
      <div class="hd clearfix">
        <h3 class="gr_title">推荐车源</h3>
        <div class="gr_txt"><span>180789</span>条专线，为您优选12条热门优质专线</div>
        <div class="gr_sch">
          <div class="gr_sch_city">
            <input 
              type="text" 
              placeholder="请输入出发地" 
              id="groom_pageinp1">
          </div>
          <div class="gr_sch_icon"><i class="iconfont iconjiantou_xiangyou_o"/></div>
          <div class="gr_sch_city">
            <input 
              type="text" 
              placeholder="请输入到达地" 
              id="groom_pageinp2">
          </div>
          <div class="gr_sch_btn"><a href="">搜索</a></div>
        </div>
        <a 
          href="" 
          class="gr_link">全部专线<i class="iconfont iconjiantou2"/></a>
      </div>
      <div class="p_type_nav">
        <a href="">信誉最高</a>
        <a href="">交易量</a>
        <a href="">运输时效</a> 
        <a href="">重货价格最低</a> 
        <a href="">轻货价格最低</a>       
      </div>
      <ul class="p_hot_line p_CY_car_list clearfix">
        <li>
          <div class="hot_line_box">
            <div class="h_pic">       
              <img src="../../static/images/huizong/_img01.png">
            </div>
            <div class="wl_box">
              <div class="h_place">
                <span class="icon icon_start">始</span>
                <span class="place">广州市天河区</span>
                <span class="icon icon_end">终</span>
                <span class="place">上海黄浦区</span>
              </div>
              <div class="CY_list_txt">中型货车| 长2米|载重15吨|体积13.6方</div>
              <div class="CY_list_price"> 运价：<span class="CY_list_price_num">2590</span> 元</div>
              <div class="CY_list_praise">
                <ul class="CY_list_praise_list fl">
                  <li><span class="CY_list_praise_name">好评</span>84</li>
                  <li><span class="CY_list_praise_name">收藏 </span>840</li>
                </ul>
                <div class="CY_list_praise_num fr">好评率<span class="color_orange">98.3%</span></div>         
              </div>
              <div class="CY_list_time"><i class="iconfont iconshijian"/>2018-10-25 15:26</div>
            </div>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
            </div>
          </div>
        </li>
        <li>
          <div class="hot_line_box">
            <div class="h_pic">       
              <img src="../../static/images/huizong/_img01.png">
            </div>
            <div class="wl_box">
              <div class="h_place">
                <span class="icon icon_start">始</span>
                <span class="place">广州市天河区</span>
                <span class="icon icon_end">终</span>
                <span class="place">上海黄浦区</span>
              </div>
              <div class="CY_list_txt">中型货车| 长2米|载重15吨|体积13.6方</div>
              <div class="CY_list_price"> 运价：<span class="CY_list_price_num">2590</span> 元</div>
              <div class="CY_list_praise">
                <ul class="CY_list_praise_list fl">
                  <li><span class="CY_list_praise_name">好评</span>84</li>
                  <li><span class="CY_list_praise_name">收藏 </span>840</li>
                </ul>
                <div class="CY_list_praise_num fr">好评率<span class="color_orange">98.3%</span></div>         
              </div>
              <div class="CY_list_time"><i class="iconfont iconshijian"/>2018-10-25 15:26</div>
            </div>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
            </div>
          </div>
        </li>
        <li>
          <div class="hot_line_box">
            <div class="h_pic">       
              <img src="../../static/images/huizong/_img01.png">
            </div>
            <div class="wl_box">
              <div class="h_place">
                <span class="icon icon_start">始</span>
                <span class="place">广州市天河区</span>
                <span class="icon icon_end">终</span>
                <span class="place">上海黄浦区</span>
              </div>
              <div class="CY_list_txt">中型货车| 长2米|载重15吨|体积13.6方</div>
              <div class="CY_list_price"> 运价：<span class="CY_list_price_num">2590</span> 元</div>
              <div class="CY_list_praise">
                <ul class="CY_list_praise_list fl">
                  <li><span class="CY_list_praise_name">好评</span>84</li>
                  <li><span class="CY_list_praise_name">收藏 </span>840</li>
                </ul>
                <div class="CY_list_praise_num fr">好评率<span class="color_orange">98.3%</span></div>         
              </div>
              <div class="CY_list_time"><i class="iconfont iconshijian"/>2018-10-25 15:26</div>
            </div>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
            </div>
          </div>
        </li>
        <li>
          <div class="hot_line_box">
            <div class="h_pic">       
              <img src="../../static/images/huizong/_img01.png">
            </div>
            <div class="wl_box">
              <div class="h_place">
                <span class="icon icon_start">始</span>
                <span class="place">广州市天河区</span>
                <span class="icon icon_end">终</span>
                <span class="place">上海黄浦区</span>
              </div>
              <div class="CY_list_txt">中型货车| 长2米|载重15吨|体积13.6方</div>
              <div class="CY_list_price"> 运价：<span class="CY_list_price_num">2590</span> 元</div>
              <div class="CY_list_praise">
                <ul class="CY_list_praise_list fl">
                  <li><span class="CY_list_praise_name">好评</span>84</li>
                  <li><span class="CY_list_praise_name">收藏 </span>840</li>
                </ul>
                <div class="CY_list_praise_num fr">好评率<span class="color_orange">98.3%</span></div>         
              </div>
              <div class="CY_list_time"><i class="iconfont iconshijian"/>2018-10-25 15:26</div>
            </div>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
            </div>
          </div>
        </li>
        <li>
          <div class="hot_line_box">
            <div class="h_pic">       
              <img src="../../static/images/huizong/_img01.png">
            </div>
            <div class="wl_box">
              <div class="h_place">
                <span class="icon icon_start">始</span>
                <span class="place">广州市天河区</span>
                <span class="icon icon_end">终</span>
                <span class="place">上海黄浦区</span>
              </div>
              <div class="CY_list_txt">中型货车| 长2米|载重15吨|体积13.6方</div>
              <div class="CY_list_price"> 运价：<span class="CY_list_price_num">2590</span> 元</div>
              <div class="CY_list_praise">
                <ul class="CY_list_praise_list fl">
                  <li><span class="CY_list_praise_name">好评</span>84</li>
                  <li><span class="CY_list_praise_name">收藏 </span>840</li>
                </ul>
                <div class="CY_list_praise_num fr">好评率<span class="color_orange">98.3%</span></div>         
              </div>
              <div class="CY_list_time"><i class="iconfont iconshijian"/>2018-10-25 15:26</div>
            </div>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
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
                  src="//imgcdn50.zuzuche.com/assets/book/desktop/book/images/reviews_banner_text-305b1b2dc9c12ac66aedb8620f257c02.png">
              </div>
              <ul class="usr_discuss_tab">
                <li class="user_discuss_active">洛杉矶</li>
                <li>墨尔本</li>
                <li>伦敦</li>
                <li>曼谷</li>
              </ul>
              <div class="user_discuss_tab_content">
                <div class="tab_item">
                  <div class="car-dealers">
                    <img 
                      src="//imgcdn5.zuzuche.com/cdn1/public/dealer_v4/enterprise_100x50.png" 
                      class="logo">
                    <span>8.4</span>分
                  </div>
                  <div class="car-dealers">
                    <img 
                      src="//imgcdn5.zuzuche.com/cdn1/public/dealer_v5/sixt_id_32/100x50.png" 
                      class="logo">
                    <span>8.3</span>分
                  </div>
                  <div class="car-dealers">
                    <img 
                      src="//imgcdn5.zuzuche.com/world/dealer/logo/Hertz_dealer_pic_big_799c968e294.jpg"
                      class="logo">
                    <span>8.3</span>分
                  </div>
                  <div class="car-dealers">
                    <img 
                      src="//imgcdn5.zuzuche.com/cdn1/public/dealer_v5/europcar_id_44/100x50.png"
                      class="logo">
                    <span>8.2</span>分
                  </div>
                  <div class="car-dealers">
                    <img 
                      src="//imgcdn5.zuzuche.com/cdn1/public/dealer_v5/alamo_id_29/100x50.png" 
                      class="logo">
                    <span>8.2</span>分
                  </div>
                  <div class="car-dealers">
                    <img 
                      src="//imgcdn5.zuzuche.com/cdn1/public/dealer_v5/interrent_id_79/100x50.png" 
                      class="logo">
                    <span>8.2</span>分
                  </div>
                  <div class="car-dealers">
                    <img 
                      src="//imgcdn5.zuzuche.com/cdn1/public/dealer_v5/avis_id_30/100x50.png" 
                      class="logo">
                    <span>8.1</span>分
                  </div>
                  <div class="car-dealers">
                    <img 
                      src="//imgcdn5.zuzuche.com/cdn1/public/dealer_v5/national_id_34/100x50.png" 
                      class="logo">
                    <span>8.1</span>分
                  </div>
                </div>
                <div 
                  class="tab_item"
                  style="display: none;">2222</div>
                <div 
                  class="tab_item"
                  style="display: none;">3333</div>
                <div 
                  class="tab_item"
                  style="display: none;">44444</div>
              </div>      
            </div>
          </div>
          <div class="swiper-slide">
            <div class="discuss_item">
              <div 
                class="discuss_item_pic" 
                style="background-image: url(//imgcdn50.zuzuche.com/world/survey/view/41/2302afa856b62e5f33be9e1a80656da2_1000x.jpg) ">
                <div
                  class="item_pic_user"
                  style="background-image: url(//account.zuzuche.com/avatar.php?userid=14832701&amp;version=v2&quot;);"/>
              </div>
              <div class="discuss_item_content">
                <div class="content-tit">来自于彭**的评价</div>
                <div class="content-score">非常满意 10 分</div>
                <div class="content-text">很满意，过程中有问必答 回复也很及时</div>
                <div class="content-address"><i class="iconfont iconweizhi"/>美国 洛杉矶 6天</div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="discuss_item">
              <div 
                class="discuss_item_pic" 
                style="background-image:url(//imgcdn50.zuzuche.com/world/survey/view/22/462cac03b2935ed4d3ab75f424f1deb0_1000x.jpg);">
                <div
                  class="item_pic_user"
                  style="background-image: url(//account.zuzuche.com/avatar.php?userid=14832701&amp;version=v2&quot;);"/>
              </div>
              <div class="discuss_item_content">
                <div class="content-tit">来自于彭**的评价</div>
                <div class="content-score">非常满意 10 分</div>
                <div class="content-text">在租租车上预定非常方便，没有后顾之忧，同时给你行程规划的导航载入。很方便</div>
                <div class="content-address"><i class="iconfont iconweizhi"/>美国 洛杉矶 6天</div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="discuss_item">
              <div 
                class="discuss_item_pic" 
                style="background-image: url(//imgcdn50.zuzuche.com/world/survey/view/36/1b144728d56b8e0caae178ed7252a89e_1000x.jpg); ">
                <div
                  class="item_pic_user"
                  style="background-image: url(//account.zuzuche.com/avatar.php?userid=2127358&version=v2);"/>
              </div>
              <div class="discuss_item_content">
                <div class="content-tit">来自于彭**的评价</div>
                <div class="content-score">非常满意 10 分</div>
                <div class="content-text">因为换车，车行最后没有照合同上扣钱而是多扣了，客服能够主动而且坚持不懈的追要合同最后把钱让车行退回来了，点一万个赞！让人下次在这里租车非常有信心！</div>
                <div class="content-address"><i class="iconfont iconweizhi"/>美国 洛杉矶 6天</div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="discuss_item">
              <div 
                class="discuss_item_pic" 
                style="background-image: url(//imgcdn50.zuzuche.com/world/survey/view/36/1b144728d56b8e0caae178ed7252a89e_1000x.jpg); ">
                <div
                  class="item_pic_user"
                  style="background-image: url(//account.zuzuche.com/avatar.php?userid=2127358&version=v2);"/>
              </div>
              <div class="discuss_item_content">
                <div class="content-tit">来自于彭**的评价</div>
                <div class="content-score">非常满意 10 分</div>
                <div class="content-text">因为换车，车行最后没有照合同上扣钱而是多扣了，客服能够主动而且坚持不懈的追要合同最后把钱让车行退回来了，点一万个赞！让人下次在这里租车非常有信心！</div>
                <div class="content-address"><i class="iconfont iconweizhi"/>美国 洛杉矶 6天</div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="discuss_item">
              <div 
                class="discuss_item_pic" 
                style="background-image: url(//imgcdn50.zuzuche.com/world/survey/view/36/1b144728d56b8e0caae178ed7252a89e_1000x.jpg); ">
                <div
                  class="item_pic_user"
                  style="background-image: url(//account.zuzuche.com/avatar.php?userid=2127358&version=v2);"/>
              </div>
              <div class="discuss_item_content">
                <div class="content-tit">来自于彭**的评价</div>
                <div class="content-score">非常满意 10 分</div>
                <div class="content-text">因为换车，车行最后没有照合同上扣钱而是多扣了，客服能够主动而且坚持不懈的追要合同最后把钱让车行退回来了，点一万个赞！让人下次在这里租车非常有信心！</div>
                <div class="content-address"><i class="iconfont iconweizhi"/>美国 洛杉矶 6天</div>
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
            href=""
            class="btn_release">快速求车信息</a>
        </div>
      </div>
    </div>
    <!-- 发布求车信息 -->
    <div class="bj_2">
      <div class="p_company_owner">
        <div class="p_title_box">
          <h3 class="title">本月优质企业货主</h3>
          <span class="title_txt">稳定货源，好评率高</span>
        </div>  
        <ul class="p_co_owner_list clearfix">
          <li>
            <a href="">
              <div class="rank_num no1">NO.I</div>
              <div class="rank_pic"><img src="../../static/images/huizong/_img01.png" ></div>
              <div class="rank_tit"><span class="rank_tit_name">递速物流有限公司</span> <span class="rank_tit_icon_tuijian">推</span></div>
              <div class="rank_groom"><span class="name">推荐指数</span><span class="star"/></div>
              <div class="rank_praise">好评率98.2%</div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="rank_num no1">NO.I</div>
              <div class="rank_pic"><img src="../../static/images/huizong/_img01.png" ></div>
              <div class="rank_tit"><span class="rank_tit_name">递速物流有限公司</span> <span class="rank_tit_icon_tuijian">推</span></div>
              <div class="rank_groom"><span class="name">推荐指数</span><span class="star"/></div>
              <div class="rank_praise">好评率98.2%</div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="rank_num no1">NO.I</div>
              <div class="rank_pic"><img src="../../static/images/huizong/_img01.png" ></div>
              <div class="rank_tit"><span class="rank_tit_name">递速物流有限公司</span> <span class="rank_tit_icon_tuijian">推</span></div>
              <div class="rank_groom"><span class="name">推荐指数</span><span class="star"/></div>
              <div class="rank_praise">好评率98.2%</div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="rank_num no1">NO.I</div>
              <div class="rank_pic"><img src="../../static/images/huizong/_img01.png" ></div>
              <div class="rank_tit"><span class="rank_tit_name">递速物流有限公司</span> <span class="rank_tit_icon_tuijian">推</span></div>
              <div class="rank_groom"><span class="name">推荐指数</span><span class="star"/></div>
              <div class="rank_praise">好评率98.2%</div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="rank_num no1">NO.I</div>
              <div class="rank_pic"><img src="../../static/images/huizong/_img01.png" ></div>
              <div class="rank_tit"><span class="rank_tit_name">递速物流有限公司</span> <span class="rank_tit_icon_tuijian">推</span></div>
              <div class="rank_groom"><span class="name">推荐指数</span><span class="star"/></div>
              <div class="rank_praise">好评率98.2%</div>
            </a>
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
            @mouseover="newsIndex=1">媒体报道</li>
          <li
            :class="{'selected':newsIndex===2}" 
            @mouseover="newsIndex=2">新闻中心</li>
        </ul>
      </div>
      <div class="ournews_content">
        <div v-show="newsIndex===1"> 
          <ul class="ournews_content_lists ">
            <li class="ournews_content_li">
              <span class="ournews_content_pointe"/>
              <p class="ournews_content_li_item">人人车“新平台新零售”战略首战告捷 合伙人破千</p>
            </li>
            <li class="ournews_content_li">
              <span class="ournews_content_pointe"/>
              <p class="ournews_content_li_item">人人车“新平台新零售”战略首战告捷 合伙人破千</p>
            </li>
            <li class="ournews_content_li">
              <span class="ournews_content_pointe"/>
              <p class="ournews_content_li_item">人人车“新平台新零售”战略首战告捷 合伙人破千</p>
            </li>
            <li class="ournews_content_li">
              <span class="ournews_content_pointe"/>
              <p class="ournews_content_li_item">人人车“新平台新零售”战略首战告捷 合伙人破千</p>
            </li>
            <li class="ournews_content_li">
              <span class="ournews_content_pointe"/>
              <p class="ournews_content_li_item">人人车“新平台新零售”战略首战告捷 合伙人破千</p>
            </li>
            <li class="ournews_content_li">
              <span class="ournews_content_pointe"/>
              <p class="ournews_content_li_item">人人车“新平台新零售”战略首战告捷 合伙人破千</p>
            </li>
          </ul>
        </div>
        <div v-show="newsIndex===2">
          <ul class="ournews_content_lists ">
            <li class="ournews_content_li">
              <span class="ournews_content_pointe"/>
              <p class="ournews_content_li_item">22人人车“新平台新零售”战略首战告捷 合伙人破千</p>
            </li>
            <li class="ournews_content_li">
              <span class="ournews_content_pointe"/>
              <p class="ournews_content_li_item">22人人车“新平台新零售”战略首战告捷 合伙人破千</p>
            </li>
            <li class="ournews_content_li">
              <span class="ournews_content_pointe"/>
              <p class="ournews_content_li_item">22人人车“新平台新零售”战略首战告捷 合伙人破千</p>
            </li>
            <li class="ournews_content_li">
              <span class="ournews_content_pointe"/>
              <p class="ournews_content_li_item">22人人车“新平台新零售”战略首战告捷 合伙人破千</p>
            </li>
            <li class="ournews_content_li">
              <span class="ournews_content_pointe"/>
              <p class="ournews_content_li_item">22人人车“新平台新零售”战略首战告捷 合伙人破千</p>
            </li>
            <li class="ournews_content_li">
              <span class="ournews_content_pointe"/>
              <p class="ournews_content_li_item">22人人车“新平台新零售”战略首战告捷 合伙人破千</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 公司新闻 -->
    <SidebarNav />
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'Swiper'
import SidebarNav from '~/components/public/sidebarNav'
export default {
  name: 'HuiZong',
  head: {},
  components: {
    SidebarNav
  },
  data() {
    return {
      banners: [
        require('../../static/images/huizong/banner01.jpg'),
        require('../../static/images/huizong/banner02.jpg'),
        require('../../static/images/huizong/banner03.jpg')
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
      },
      cityList: [
        '上海',
        '北京',
        '深圳',
        '广州',
        '重庆',
        '天津',
        '苏州',
        '成都',
        '武汉',
        '杭州',
        '南京',
        '青岛',
        '无锡',
        '长沙',
        '农博',
        '郑州',
        '佛山',
        '南通',
        '东莞',
        '西安',
        '烟台',
        '济南',
        '泉州',
        '大连',
        '合肥',
        '常州',
        '福州',
        '唐山',
        '石家庄',
        '潍坊',
        '长春',
        '沈阳',
        '哈尔滨',
        '温州',
        '盐城',
        '扬州',
        '淄博',
        '绍兴'
      ],
      newsIndex: 1,
      //登录权限
      isToken: false,
      loginMobile: ''
    }
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
    //返回赋值
    if (hotCityData.status === 200 || carSourceData.status === 200) {
      return {
        hotCityData: !hotCityData.data.data ? hotCityData.data.data : [],
        // hotCityData: [],
        carSourceData: !carSourceData.data.data ? carSourceData.data.data : []
      }
    } else {
      error({ statusCode: 500, message: '查找不到该专线列表' })
    }
  },
  mounted() {
    // this.intSwiper1()
    let that = this
    this.$nextTick(() => {
      this.getCookies()
      //幻灯片
      this.intSwiper2()
      //打印返回的数据
      console.log('严选车辆返回列表', this.carSourceData)
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
    //登录
    //登录
    showLogin() {
      $('body').trigger('login.show')
    },
    getCookies() {
      //获取省市cookies
      //$.cookie
      this.isToken = $.cookie('access_token') ? true : false
      this.loginMobile = $.cookie('login_mobile')
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
    background: #f5f5f5;
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
        a {
          color: $tit_color;
          .joint-label {
            color: $light_gray;
          }
        }
        .d_car_city {
          @extend .p_go_city;
          > .city {
            color: $gray;
          }
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
</style>
