<template>
  <div>
    <div class="category grid_c1 clearfix">
      <div class="cg_col1 fl">
        <div class="p_category_menu">
          <h4 class="category_menu_title">热门城市</h4>
          <div class="category_menu_list">
            <span 
              class="item"
              v-for="(item, index) in cityList" 
              :key="index">
            <a>{{ item }}</a></span>  
          </div>         
        </div>
      </div>
      <div class="cg_col2 fl">
        <div class="cy_banner">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div 
                class="swiper-slide" 
                :key="index"
                v-for="(banner, index) in banners">
                <img :src="banner">
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
      </div>
      <div class="cg_col3 fr">
        <div class="p_user_login">
          <div class="user_pic">头像</div>
          <div class="user_show">
            <p class="user_tip">Hi~欢迎来到28快运！</p>
            <p class="user_profit">
              <a>登录</a>
              <a>注册</a>
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
            <li>
              <div class="hot_line_box">
                <div class="h_pic">
                  <span class="h_pic_icon_groom"> 平台推荐</span>          
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
                  <span class="h_pic_icon_groom"> 平台推荐</span>         
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
                  <span class="h_pic_icon_groom"> 平台推荐</span>         
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
                  <span class="h_pic_icon_groom"> 平台推荐</span>        
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
                  <span class="h_pic_icon_groom"> 平台推荐</span>        
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
            <div class="our_advantage_pic"><img src="../../static/images/zhuanxian/advantage01.png"></div>
            <p class="our_advantage_name">车型丰富</p>
            <p class="our_advantage_txt">4.2米-17米各种车型，智能搭配</p>
          </li>
          <li>
            <div class="our_advantage_pic"><img src="../../static/images/zhuanxian/advantage02.png"></div>
            <p class="our_advantage_name">智能高效</p>
            <p class="our_advantage_txt">承运车辆严格审核备案
            完善的理赔保障体系</p>
          </li>
          <li>
            <div class="our_advantage_pic"><img src="../../static/images/zhuanxian/advantage02.png"></div>
            <p class="our_advantage_name">车货双赢</p>
            <p class="our_advantage_txt">货主省钱，司机赚钱</p>
          </li>
          <li>
            <div class="our_advantage_pic"><img src="../../static/images/zhuanxian/advantage03.png"></div>
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
      <div class="discuss-list-content">
        <div class="discuss_item">11</div>
        <div class="discuss_item">22</div>
        <div class="discuss_item">33</div>
        <div class="discuss_item">44</div>
      </div>
    </div>
    <!-- 用户评价 -->
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'Swiper'
export default {
  name: 'HuiZong',
  head: {},
  data() {
    return {
      banners: [
        require('../../static/images/huizong/banner01.jpg'),
        require('../../static/images/huizong/banner02.jpg'),
        require('../../static/images/huizong/banner03.jpg')
      ],
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
      ]
    }
  },
  mounted() {
    this.intSwiper()
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
    })
  },
  methods: {
    intSwiper() {
      this.$nextTick(() => {
        $('.cy_banner').hover(
          function() {
            $(this)
              .find('.swiper-button-next,.swiper-button-prev')
              .show()
          },
          function() {
            $(this)
              .find('.swiper-button-next,.swiper-button-prev')
              .hide()
          }
        )
        let swiper = new Swiper('.swiper-container', {
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
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/common_index.scss';
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
    margin-bottom: 5px;
    color: $tit_color;
    // margin-bottom: 5px;
    .CY_list_price_num {
      color: $orange;
      font-size: $f_16;
    }
  }
  .CY_list_praise {
    overflow: hidden;
    margin-bottom: 5px;
    color: $light_gray;
    .CY_list_praise_list {
      > li {
        @extend .fl;
        margin-right: 10px;
        .CY_list_praise_name {
          padding-right: 5px;
        }
      }
    }
    .CY_list_praise_num {
    }
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
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
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
      color: $gray;
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
  .discuss-list-content {
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
    .discuss-banner-hd {
      height: 175px;
      background: #bbb;
    }
    .discuss-score-tabs {
      > .tabs {
        > li {
          display: inline-block;
          vertical-align: middle;
          width: 25%;
          text-align: center;
        }
      }
    }
  }
}
</style>
