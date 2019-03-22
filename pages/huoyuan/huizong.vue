<template>
  <div>
    <div class="bj_1">
      <div class="hy_wrap clearfix">
        <div class="col1">
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
          <!--导航 -->
        </div>
        <div class="col2">
          <div class="ad">
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
          <div class="type clearfix">
            <div class="type_box"><a href=""><img src="../../static/images/huizong/type01.png"></a></div>
            <div class="type_box"><a href=""><img src="../../static/images/huizong/type02.png"></a></div>
            <div class="type_box"><a href=""><img src="../../static/images/huizong/type03.png"></a></div>
          </div>
        </div>
        <div class="col3">
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
        </div>
      </div>
    </div>
    <!--货源-->
    <div class="bj_2">
      <div class="owner">
        <h3 class="p_title">优质货主</h3>
        <ul class="p_owner_list clearfix">
          <li>
            <a href="">
              <div class="owner_pic"><img src="../../static/images/huizong/_img01.png"></div>
              <div class="owner_info">
                <p class="owner_name">速递物流公司<span><i class="iconfont iconhuo"/>89</span></p>
                <p class="owner_total">累计发货<span>1446</span>，收到好评<span>250</span></p>
                <p class="owner_num">今日发货3次</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="owner_pic"><img src="../../static/images/huizong/_img01.png"></div>
              <div class="owner_info">
                <p class="owner_name">速递物流公司<span><i class="iconfont iconhuo"/>89</span></p>
                <p class="owner_total">累计发货<span>1446</span>，收到好评<span>250</span></p>
                <p class="owner_num">今日发货3次</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="owner_pic"><img src="../../static/images/huizong/_img01.png"></div>
              <div class="owner_info">
                <p class="owner_name">速递物流公司<span><i class="iconfont iconhuo"/>89</span></p>
                <p class="owner_total">累计发货<span>1446</span>，收到好评<span>250</span></p>
                <p class="owner_num">今日发货3次</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="owner_pic"><img src="../../static/images/huizong/_img01.png"></div>
              <div class="owner_info">
                <p class="owner_name">速递物流公司<span><i class="iconfont iconhuo"/>89</span></p>
                <p class="owner_total">累计发货<span>1446</span>，收到好评<span>250</span></p>
                <p class="owner_num">今日发货3次</p>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="owner_pic"><img src="../../static/images/huizong/_img01.png"></div>
              <div class="owner_info">
                <p class="owner_name">速递物流公司<span><i class="iconfont iconhuo"/>89</span></p>
                <p class="owner_total">累计发货<span>1446</span>，收到好评<span>250</span></p>
                <p class="owner_num">今日发货3次</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 优质货主 -->
    <div class="our clearfix">
      <h3 class="p_title">选择我们，您可以</h3>
      <div class="col1 clearfix">
        <div class="our_tool">
          <div class="pic"><img src="../../static/images/huizong/our_01.jpg"></div>
          <ul class="link link2 clearfix">
            <li>
              <span><i class="iconfont iconfuwu"/></span>
              <span><a class="btn_order">在线下单</a></span>
            </li>
            <li>
              <span><i class="iconfont iconicon"/></span>
              <span><a class="btn_send">发布货源</a></span>
            </li>
            <div class="num">今日已有<b>2368</b>人在线下单获得优惠</div>
          </ul>
        </div>
        <div class="our_tool">
          <div class="pic"><img src="../../static/images/huizong/our_02.jpg"></div>
          <ul class="link clearfix">
            <li>
              <span><i class="iconfont iconfuwu"/></span>
              <span><a href="">运单查询</a></span>
            </li>
            <li>
              <span><i class="iconfont iconicon"/></span>
              <span><a href="">客服服务</a></span>
            </li>
          </ul>
        </div>
        <div class="our_tool">
          <div class="pic"><img src="../../static/images/huizong/our_03.jpg"></div>
          <ul class="link clearfix">
            <li>
              <span><i class="iconfont iconfuwu"/></span>
              <span><a href="">企业合作</a></span>
            </li>
            <li>
              <span><i class="iconfont iconicon"/></span>
              <span><a href="">专线加盟</a></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col2">
        <div class="our_ad">
          <img src="../../static/images/huizong/our_ad.png">
        </div>
        <a 
          class="link_hy" 
          href="">进入货源大厅</a>
      
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
    <!-- 最新货源 -->
    <div class="p_hy_groom clearfix">
      <div class="hd clearfix">
        <h3 class="gr_title">热门专线</h3>
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
      <div class="bd clearfix">
        <div class="col1">
          <ul class="p_hy_list">
            <li>
              <a href="">
                <div class="hd_box">
                  <span class="label_provider">发布者:</span>
                  <span class="provider">安能物流</span>
                  <span class="sure">认证</span>
                </div>
                <div class="md_box">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="type_box">
                  <span class="">货物:</span>
                  <span class="item">钢材</span>
                </div>
                <div class="type_box">
                  <span class="">规格:</span>
                  <span class="item"><b>31</b>件</span>
                  <span class="item">51公斤</span>
                  <span class="item">21m³</span>
                  <span class="time">2分钟前</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="hd_box">
                  <span class="label_provider">发布者:</span>
                  <span class="provider">安能物流</span>
                  <span class="sure">认证</span>
                </div>
                <div class="md_box">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="type_box">
                  <span class="">货物:</span>
                  <span class="item">钢材</span>
                </div>
                <div class="type_box">
                  <span class="">规格:</span>
                  <span class="item"><b>31</b>件</span>
                  <span class="item">51公斤</span>
                  <span class="item">21m³</span>
                  <span class="time">2分钟前</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="hd_box">
                  <span class="label_provider">发布者:</span>
                  <span class="provider">安能物流</span>
                  <span class="sure">认证</span>
                </div>
                <div class="md_box">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="type_box">
                  <span class="">货物:</span>
                  <span class="item">钢材</span>
                </div>
                <div class="type_box">
                  <span class="">规格:</span>
                  <span class="item"><b>31</b>件</span>
                  <span class="item">51公斤</span>
                  <span class="item">21m³</span>
                  <span class="time">2分钟前</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="hd_box">
                  <span class="label_provider">发布者:</span>
                  <span class="provider">安能物流</span>
                  <span class="sure">认证</span>
                </div>
                <div class="md_box">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="type_box">
                  <span class="">货物:</span>
                  <span class="item">钢材</span>
                </div>
                <div class="type_box">
                  <span class="">规格:</span>
                  <span class="item"><b>31</b>件</span>
                  <span class="item">51公斤</span>
                  <span class="item">21m³</span>
                  <span class="time">2分钟前</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="hd_box">
                  <span class="label_provider">发布者:</span>
                  <span class="provider">安能物流</span>
                  <span class="sure">认证</span>
                </div>
                <div class="md_box">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="type_box">
                  <span class="">货物:</span>
                  <span class="item">钢材</span>
                </div>
                <div class="type_box">
                  <span class="">规格:</span>
                  <span class="item"><b>31</b>件</span>
                  <span class="item">51公斤</span>
                  <span class="item">21m³</span>
                  <span class="time">2分钟前</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="hd_box">
                  <span class="label_provider">发布者:</span>
                  <span class="provider">安能物流</span>
                  <span class="sure">认证</span>
                </div>
                <div class="md_box">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="type_box">
                  <span class="">货物:</span>
                  <span class="item">钢材</span>
                </div>
                <div class="type_box">
                  <span class="">规格:</span>
                  <span class="item"><b>31</b>件</span>
                  <span class="item">51公斤</span>
                  <span class="item">21m³</span>
                  <span class="time">2分钟前</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="hd_box">
                  <span class="label_provider">发布者:</span>
                  <span class="provider">安能物流</span>
                  <span class="sure">认证</span>
                </div>
                <div class="md_box">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="type_box">
                  <span class="">货物:</span>
                  <span class="item">钢材</span>
                </div>
                <div class="type_box">
                  <span class="">规格:</span>
                  <span class="item"><b>31</b>件</span>
                  <span class="item">51公斤</span>
                  <span class="item">21m³</span>
                  <span class="time">2分钟前</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="hd_box">
                  <span class="label_provider">发布者:</span>
                  <span class="provider">安能物流</span>
                  <span class="sure">认证</span>
                </div>
                <div class="md_box">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="type_box">
                  <span class="">货物:</span>
                  <span class="item">钢材</span>
                </div>
                <div class="type_box">
                  <span class="">规格:</span>
                  <span class="item"><b>31</b>件</span>
                  <span class="item">51公斤</span>
                  <span class="item">21m³</span>
                  <span class="time">2分钟前</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="hd_box">
                  <span class="label_provider">发布者:</span>
                  <span class="provider">安能物流</span>
                  <span class="sure">认证</span>
                </div>
                <div class="md_box">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="type_box">
                  <span class="">货物:</span>
                  <span class="item">钢材</span>
                </div>
                <div class="type_box">
                  <span class="">规格:</span>
                  <span class="item"><b>31</b>件</span>
                  <span class="item">51公斤</span>
                  <span class="item">21m³</span>
                  <span class="time">2分钟前</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="hd_box">
                  <span class="label_provider">发布者:</span>
                  <span class="provider">安能物流</span>
                  <span class="sure">认证</span>
                </div>
                <div class="md_box">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="type_box">
                  <span class="">货物:</span>
                  <span class="item">钢材</span>
                </div>
                <div class="type_box">
                  <span class="">规格:</span>
                  <span class="item"><b>31</b>件</span>
                  <span class="item">51公斤</span>
                  <span class="item">21m³</span>
                  <span class="time">2分钟前</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="hd_box">
                  <span class="label_provider">发布者:</span>
                  <span class="provider">安能物流</span>
                  <span class="sure">认证</span>
                </div>
                <div class="md_box">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="type_box">
                  <span class="">货物:</span>
                  <span class="item">钢材</span>
                </div>
                <div class="type_box">
                  <span class="">规格:</span>
                  <span class="item"><b>31</b>件</span>
                  <span class="item">51公斤</span>
                  <span class="item">21m³</span>
                  <span class="time">2分钟前</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="hd_box">
                  <span class="label_provider">发布者:</span>
                  <span class="provider">安能物流</span>
                  <span class="sure">认证</span>
                </div>
                <div class="md_box">
                  <div class="city">金华市</div>
                  <span class="city-joint">
                    <span class="joint-line"/>
                    <span class="joint-label">发往</span>
                    <span class="joint-line"/>
                  </span>
                  <div class="city">深圳市</div>
                </div>
                <div class="type_box">
                  <span class="">货物:</span>
                  <span class="item">钢材</span>
                </div>
                <div class="type_box">
                  <span class="">规格:</span>
                  <span class="item"><b>31</b>件</span>
                  <span class="item">51公斤</span>
                  <span class="item">21m³</span>
                  <span class="time">2分钟前</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="col2">
          <div class="subscribe">
            <h4 class="tit"><i class="iconfont icondingyue"/>订阅优质支援</h4>
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
            <div class="text">
              订阅货源，第一时间获得系统消息通知
              已有<span>18965</span>人订阅后达成交易
            </div>
            <a class="btn_remind">上新提醒我</a>
          </div>
          <div class="weixin">
            <div class="pic"><img src="../../static/images/huizong/weixin.png"></div>
            下载<a href="#">【28快运APP】</a>，您可查看更多货源，并可实时接收28快运为您推荐的精品货源提醒
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
          href=""
        >发布求车信息</a>
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
          <div class="rank_box">
            <ul class="ranking_info clearfix">
              <li class="rank_num no1">NO.I</li>
              <li class="phone">159****4589</li>
              <li class="sure"><span class="span1">证</span><span class="span2">实名认证</span></li>
            </ul>
            <div class="bd">
              <div class="col1"><img src="../../static/images/huizong/u2377.png" ></div>
              <div class="col2">
                <p>最近三个月发布货源<b>455</b>次</p>
                <p>累计成交<b>146</b>笔订单，收到好评<b>28</b>次</p>
                <p>使用现金券省<b class="money">2389</b>元</p>
                <p class="prize"><span class="tit">奖：</span>平台额外奖励2799元现金</p>
              </div>
            </div>
          </div>
          <div class="rank_box">
            <ul class="ranking_info clearfix">
              <li class="rank_num no2">NO.I</li>
              <li class="phone">159****4589</li>
              <li class="sure"><span class="span1">证</span><span class="span2">实名认证</span></li>
            </ul>
            <div class="bd">
              <div class="col1"><img src="../../static/images/huizong/u2418.png" ></div>
              <div class="col2">
                <p>最近三个月发布货源<b>455</b>次</p>
                <p>累计成交<b>146</b>笔订单，收到好评<b>28</b>次</p>
                <p>使用现金券省<b class="money">2389</b>元</p>
                <p class="prize"><span class="tit">奖：</span>平台额外奖励2799元现金</p>
              </div>
            </div>
          </div>
          <div class="rank_box">
            <ul class="ranking_info clearfix">
              <li class="rank_num no3">NO.3</li>
              <li class="phone">159****4589</li>
              <li class="sure"><span class="span1">证</span><span class="span2">实名认证</span></li>
            </ul>
            <div class="bd">
              <div class="col1"><img src="../../static/images/huizong/u2441.png" ></div>
              <div class="col2">
                <p>最近三个月发布货源<b>455</b>次</p>
                <p>累计成交<b>146</b>笔订单，收到好评<b>28</b>次</p>
                <p>使用现金券省<b class="money">2389</b>元</p>
                <p class="prize"><span class="tit">奖：</span>平台额外奖励2799元现金</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col2">
          <img src="../../static/images/huizong/rank_ad.jpg">
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
        <ul class="p_co_owner_list clearfix">
          <li>
            <a href="">
              <div class="rank_num no1">NO.I</div>
              <div class="pic"><img src="../../static/images/huizong/_img01.png" ></div>
              <div class="tit">递速物流有限公司 <span class="icon_tuijian">推</span></div>
              <div class="groom"><span class="name">推荐指数</span><span class="star"/></div>
              <div class="praise">好评率98.2%</div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="rank_num no2">NO.2</div>
              <div class="pic"><img src="../../static/images/huizong/_img01.png" ></div>
              <div class="tit">递速物流有限公司 <span class="icon_tuijian">推</span></div>
              <div class="groom"><span class="name">推荐指数</span><span class="star"/></div>
              <div class="praise">好评率98.2%</div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="rank_num no3">NO.3</div>
              <div class="pic"><img src="../../static/images/huizong/_img01.png" ></div>
              <div class="tit">递速物流有限公司 <span class="icon_tuijian">推</span></div>
              <div class="groom"><span class="name">推荐指数</span><span class="star"/></div>
              <div class="praise">好评率98.2%</div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="pic"><img src="../../static/images/huizong/_img01.png" ></div>
              <div class="tit">递速物流有限公司 <span class="icon_tuijian">推</span></div>
              <div class="groom"><span class="name">推荐指数</span><span class="star"/></div>
              <div class="praise">好评率98.2%</div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="pic"><img src="../../static/images/huizong/_img01.png"></div>
              <div class="tit">递速物流有限公司 <span class="icon_tuijian">推</span></div>
              <div class="groom"><span class="name">推荐指数</span><span class="star"/></div>
              <div class="praise">好评率98.2%</div>
            </a>
          </li>
        </ul>    
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
            href="" 
            class="answers_link">货源大厅<i class="iconfont iconjiantou2"/>
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
        href=""
      >我要入驻</a>
    </div>
    <!-- 入住 -->
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
    // this.mySwiper
    seajs.use(['layer', '/js/jq_scroll.js'], function() {
      console.log($)
      console.log(layer)
      /*地点插件 */
      $('#groom_pageinp1').citypicker()
      $('#groom_pageinp2').citypicker()
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
    intSwiper() {
      this.$nextTick(() => {
        $('.ad').hover(
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
/*1、货源导航*/
.hy_wrap {
  // display: flex;
  // justify-content: space-between;
  margin: 0 auto 0 auto;
  padding: 5px 0 15px 0;
  width: $w_1440;
  height: 425px;
  font-size: $f_14;
  .col1,
  .col2,
  .col3 {
    height: 425px;
    background: $white;
  }
  .col1 {
    @extend .fl;
    width: 230px;
  }
  .col2 {
    @extend .fl;
    margin-left: 15px;
    width: 890px;
    background: none;
  }
  .col3 {
    @extend .fr;
    padding: 0 20px;
    width: 250px;
  }
}
/*幻灯片*/
.ad {
  overflow: hidden;
  height: 290px;
  background: $white;
  .swiper-container {
    height: 290px;
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
.type {
  margin-top: 10px;
  height: 125px;
  .type_box {
    @extend .fl;
    box-sizing: border-box;
    width: 296px;
    height: 125px;
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
  width: $w_1440;
  font-size: 16px;
  background: $white;
  height: 440px;
}
/*选择我们*/
.our {
  margin: 0 auto;
  width: $w_1440;
  font-size: $f_14;
  .col1,
  .col2 {
    height: 352px;
  }
  .col1 {
    float: left;
    width: 1105px;
  }
  .col2 {
    float: right;
    width: 335px;
  }
  .our_tool {
    @extend .fl;
    width: 348px;
    height: 340px;
    border: $border_color 1px solid;
    background: $white;
    &:nth-child(2) {
      margin: 0 20px;
    }
    .pic {
      overflow: hidden;
      height: 175px;
      img {
        width: 100%;
        height: 100%;
      }
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
        width: 174px;
        > span {
          &:nth-child(1) {
            margin: 10px 0;
            .iconfont {
              font-size: 40px;
              color: #858585;
            }
          }
          > a {
            font-weight: bold;
            line-height: 48px;
          }
          display: block;
          text-align: center;
        }
      }
    }
    .link2 {
      li {
        > span {
          > a {
            display: block;
            margin: 0 auto;
            width: 160px;
            height: 48px;
            border-radius: 5px;
            font-weight: normal;
            cursor: pointer;
            &.btn_order {
              color: $white;
              background: $orange;
            }
            &.btn_send {
              color: $white;
              background: $blue;
            }
          }
        }
      }
    }
    .num {
      padding: 0 10px;
      line-height: 35px;
      color: $tit_color;
      b {
        color: $orange;
        font-size: 16px;
      }
    }
  }
  .our_ad {
    overflow: hidden;
    height: 254px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .link_hy {
    display: block;
    margin-top: 17px;
    width: 100%;
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: $white;
    font-size: 25px;
    font-weight: bold;
    background: $green;
  }
}
.p_hy_groom {
  .bd {
    .col1 {
      overflow: hidden;
      @extend .fl;
      width: 1155px;
    }
    .col2 {
      @extend .fr;
      padding: 20px 10px;
      width: 265px;
      height: 423px;
      background: $green;
    }
  }
  .subscribe {
    padding: 20px;
    background: #efeff0;
    .tit {
      margin-bottom: 10px;
      font-weight: normal;
      font-size: $f_14;
      color: $tit_color;
      .iconfont {
        padding-right: 5px;
        color: $orange;
      }
    }
    .city_box {
      position: relative;
      margin-bottom: 10px;
      padding: 0 10px;
      height: 40px;
      line-height: 40px;
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
    .text {
      overflow: hidden;
      height: 40px;
      margin: 10px 0;
      .num {
        color: $orange;
      }
    }
    .btn_remind {
      display: block;
      height: 45px;
      line-height: 45px;
      text-align: center;
      color: $white;
      background: $orange;
      box-shadow: 0 0 10px #46dcc6;
      cursor: pointer;
    }
  }
  .weixin {
    overflow: hidden;
    margin-top: 20px;
    padding: 20px 10px;
    background: #fcfac1;
    // height: 116px;
    .pic {
      overflow: hidden;
      @extend .fl;
      margin-right: 10px;
      width: 85px;
      height: 85px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    > a {
      color: #0066ff;
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
/*货量达人榜*/
.rank_people {
  margin: 0 auto 20px auto;
  width: $w_1440;
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
    padding: 20px;
    width: 336px;
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
          width: 80px;
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
        &.phone {
          width: 125px;
          font-weight: bold;
        }
        &.sure {
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
        width: 80px;
      }
      .col2 {
        @extend .fr;
        width: 256px;
        > p {
          margin-bottom: 8px;
          b {
            font-size: 16px;
            color: $orange;
            &.money {
              font-weight: normal;
            }
          }
          &.prize {
            font-weight: bold;
            .tit {
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
  width: $w_1440;
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
  width: $w_1440;
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
</style>
