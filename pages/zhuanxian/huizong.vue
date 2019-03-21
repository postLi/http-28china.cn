<template>
  <div>
    <div class="grid_c1 category clearfix">
      <div class="col1 fl">
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
      <div class="col2 wl_ad fl clearfix">
        <div class="ad_big fl">
          <img src="../../static/images/huizong/banner01.jpg">
        </div>
        <div class="ad_box fr">        
          <div class="item"><img src="../../static/images/huizong/banner01.jpg"></div>
          <div class="item"><img src="../../static/images/huizong/banner01.jpg"></div>
          <div class="item"><img src="../../static/images/huizong/banner01.jpg"></div>
        </div>
      <!-- 幻灯片 -->
      </div>
      <div class="col3 fr">
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
        <div class="groom">
          <h4 class="groom_tit">帮我推荐</h4>
          <div class="groom_explain">平台推荐，资质保障，为您快速匹配时效快、平价、安心、专业的专线</div>
          <div class="groom_submit clearfix">
            <input 
              type="text" 
              placeholder="请输入您的手机号"
              class="fl">
            <button class="fl">帮我推荐</button>
          </div>
          <div class="error">请输入正确的手机号</div>
        </div>
        <div class=" operate">
          <a href="">快速下单</a>
          <a href="">查询运单</a>
        </div>
        <div class="oder_num">今日已有<b>2368</b>人在线下单获得优惠</div>    
      </div>
    </div>
    <!-- 物流专线hd -->
    <div class="bj_2">
      <div class="grid_c1 clearfix">    
        <div class="p_title_box">
          <h3 class="title">平台推荐</h3>
          <span class="text">平台推荐，资质保障</span>
          <a 
            href="" 
            class="link fr">更多优质专线<i class="iconfont iconjiantou2"/>
          </a>         
        </div>
        <div class="pt_groom fl">
          <ul class="hd clearfix active_green">
            <li class="channel1 active"> 
              <h6 class="tit">担保交易</h6>
              <div class="explain">
                平台担保，安全可靠
                <span class="line"/>
              </div>
              <div class="img"><img src="../../static/images/huizong/banner02.jpg"></div>
            </li>
            <li class="channel2">
              <h6 class="tit">超值特惠</h6>
              <div class="explain">
                价格直降，超值独享
                <span class="line"/>
              </div>
              <div class="img"><img src="../../static/images/huizong/banner02.jpg"></div>
            </li>
            <li class="channel3">
              <h6 class="tit">精准时效</h6>
              <div class="explain">
                及时、高效、保质量
                <span class="line"/>
              </div>
              <div class="img"><img src="../../static/images/huizong/banner02.jpg"></div>
            </li>
            <li class="channel4">
              <h6 class="tit">28信用</h6>
              <div class="explain">
                平台认证，推荐专线
                <span class="line"/>
              </div>
              <div class="img"><img src="../../static/images/huizong/banner02.jpg"></div>
            </li>
          </ul>
          <div class="bd">
            <div>
              <ul class="p_hy_list p_wl_list clearfix">
                <li>
                  <div class="p_10">
                    <div class="hd_box">
                      <span class="label_provider">物流商:</span>
                      <span class="provider">安能物流</span>
                      <span class="icon"/>
                      <span class="icon"/>
                      <span class="icon"/>  
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
                      <span class="name">货重:</span>
                      <span class="item"><b>1.37</b></span>
                      <span class="item color_gray"><span class="line-through">244</span>元／平方</span>
                    </div>
                    <div class="type_box">
                      <span class="name">轻货:</span>
                      <span class="item"><b>107</b></span>
                      <span class="item color_gray"><span class="line-through">212</span>元／立方</span>
                    </div>
                    <div class="item_order_num">已有238人下单</div>
                  </div>
                  <div class="item_order clearfix">
                    <div class="name fl">担保交易</div>
                    <div class="dock fl">
                      <span class="dock_icon">延时赔付</span>
                      <span class="dock_num">88744人说好</span>
                    </div>
                    <div class="link_oder fr"><a href="">立即下单</a></div>
                  </div>
                </li>
                <li>
                  <div class="p_10">
                    <div class="hd_box">
                      <span class="label_provider">物流商:</span>
                      <span class="provider">安能物流</span>
                      <span class="icon"/>
                      <span class="icon"/>
                      <span class="icon"/>  
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
                      <span class="name">货重:</span>
                      <span class="item"><b>1.37</b></span>
                      <span class="item color_gray"><span class="line-through">244</span>元／平方</span>
                    </div>
                    <div class="type_box">
                      <span class="name">轻货:</span>
                      <span class="item"><b>107</b></span>
                      <span class="item color_gray"><span class="line-through">212</span>元／立方</span>
                    </div>
                    <div class="item_order_num">已有238人下单</div>
                  </div>
                  <div class="item_order bj_red clearfix">
                    <div class="name fl">担保交易</div>
                    <div class="dock fl">
                      <span class="dock_icon">延时赔付</span>
                      <span class="dock_num">88744人说好</span>
                    </div>
                    <div class="link_oder fr"><a href="">立即下单</a></div>
                  </div>
                </li>
                <li>
                  <div class="p_10">
                    <div class="hd_box">
                      <span class="label_provider">物流商:</span>
                      <span class="provider">安能物流</span>
                      <span class="icon"/>
                      <span class="icon"/>
                      <span class="icon"/>  
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
                      <span class="name">货重:</span>
                      <span class="item"><b>1.37</b></span>
                      <span class="item color_gray"><span class="line-through">244</span>元／平方</span>
                    </div>
                    <div class="type_box">
                      <span class="name">轻货:</span>
                      <span class="item"><b>107</b></span>
                      <span class="item color_gray"><span class="line-through">212</span>元／立方</span>
                    </div>
                    <div class="item_order_num">已有238人下单</div>
                  </div>
                  <div class="item_order bj_blue clearfix">
                    <div class="name fl">担保交易</div>
                    <div class="dock fl">
                      <span class="dock_icon">速达</span>
                      <span class="dock_num">88744人说好</span>
                    </div>
                    <div class="link_oder fr"><a href="">立即下单</a></div>
                  </div>
                </li>
                <li>
                  <div class="p_10">
                    <div class="hd_box">
                      <span class="label_provider">物流商:</span>
                      <span class="provider">安能物流</span>
                      <span class="icon"/>
                      <span class="icon"/>
                      <span class="icon"/>  
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
                      <span class="name">货重:</span>
                      <span class="item"><b>1.37</b></span>
                      <span class="item color_gray"><span class="line-through">244</span>元／平方</span>
                    </div>
                    <div class="type_box">
                      <span class="name">轻货:</span>
                      <span class="item"><b>107</b></span>
                      <span class="item color_gray"><span class="line-through">212</span>元／立方</span>
                    </div>
                    <div class="item_order_num">已有238人下单</div>
                  </div>
                  <div class="item_order clearfix">
                    <div class="name fl">担保交易</div>
                    <div class="dock fl">
                      <span class="dock_icon">延时赔付</span>
                      <span class="dock_num">88744人说好</span>
                    </div>
                    <div class="link_oder fr"><a href="">立即下单</a></div>
                  </div>
                </li>
               
              </ul>
            </div>
            <div style="display: none">22</div>
            <div style="display: none">33</div>
            <div style="display: none">44</div>
          </div>
        </div>
        <div class="pt_discount fr">
          <div class="p_subtitle clearfix ">
            <i class="iconfont iconliwuhuodong fl"/>
            <h4 class="title fl">优惠礼券</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- 平台推荐 -->
    <div class="p_hy_info clearfix">
      <div class="col1 fl clearfix">
        <div class="tit_box fl">
          <h3>最新成交用户</h3>
        </div>
        <div class="info_user_box fl">
          <ul class="info_user_list">
            <li>
              <div class="info_user">
                <span class="user">11用户159****4895 </span>
                <span class="time">3分钟前</span>
              </div>
              <div class="info_text ">
                <span class="item">发布<b>广州</b>到<b>长沙</b>货源  粤F***61 </span>
                <span class="item">钢材| 31件|51公斤|体积21方  </span>                   
                <a 
                  href=""
                  class="link fr">查看货源</a>
              </div>
            </li>
            <li>
              <div class="info_user">
                <span class="user">22用户159****4895 </span>
                <span class="time">3分钟前</span>
              </div>
              <div class="info_text ">
                <span class="item">发布<b>广州</b>到<b>长沙</b>货源  粤F***61 </span>
                <span class="item">钢材| 31件|51公斤|体积21方  </span>                   
                <a 
                  href=""
                  class="link fr">查看货源</a>
              </div>
            </li>
            <li>
              <div class="info_user">
                <span class="user">333用户159****4895 </span>
                <span class="time">3分钟前</span>
              </div>
              <div class="info_text ">
                <span class="item">发布<b>广州</b>到<b>长沙</b>货源  粤F***61 </span>
                <span class="item">钢材| 31件|51公斤|体积21方  </span>                   
                <a 
                  href=""
                  class="link fr">查看货源</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col2 fl clearfix">
        <div class="hy_info_box">
          <ul class="hy_info_list clearfix">
            <li>
              <span class="info_tit"><i class="iconfont iconhuowu"/>当前货物</span>
              <span class="info_num">229089</span>
            </li>
            <li>
              <span class="info_tit"><i class="iconfont iconwangfandijia"/>物流专线</span>
              <span class="info_num">229089</span>
            </li>
            <li>
              <span class="info_tit"><i class="iconfont iconwuliu"/>当前货物</span>
              <span class="info_num">45646</span>
            </li>
          </ul>
          <ul class="info_text_list">
            <li><i class="iconfont iconjiantou_xiangshang_o"/>今日新增:</li>
            <li>货源<span class="num">8951</span></li>
            <li>专线<span class="num">854</span></li>
            <li>车源<span class="num">8011</span></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 最新成交用户 -->
    <div class="p_hy_groom clearfix">
      <div class="hd clearfix">
        <h3 class="gr_tit">热门专线</h3>
        <div class="gr_text"><span>180789</span>条专线，为您优选12条热门优质专线</div>
        <div class="gr_sch">
          <div class="city_box">
            <input 
              type="text" 
              placeholder="请输入出发地" 
              id="groom_pageinp1">
          </div>
          <div class="icon_box"><i class="iconfont iconjiantou_xiangyou_o"/></div>
          <div class="city_box">
            <input 
              type="text" 
              placeholder="请输入到达地" 
              id="groom_pageinp2">
          </div>
          <div class="btn_box"><a href="">搜索</a></div>
        </div>
        <a 
          href="" 
          class="link_hy">全部专线<i class="iconfont iconjiantou2"/></a>
      </div>
      <div class="link_type">
        <a href="">信誉最高</a>
        <a href="">交易量</a>
        <a href="">运输时效</a> 
        <a href="">重货价格最低</a> 
        <a href="">轻货价格最低</a>       
      </div>
      <div class="bd">
        <ul class="p_hot_line clearfix">
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="h_operate">
              <a 
                href="" 
                class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
              <a 
                href=""
                class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
            </div>
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
              <div class="h_company">
                <div class="name fl">速递物流公司</div>
                <div class="icon_box fl">
                  <span class="icon"/>
                  <span class="icon"/>
                  <span class="icon"/>
                </div>
                <span class="fr icon_qq"/>
              </div>
              <div class="h_praise">
                <div class="fl"><span>好评</span>158</div>
                <div class="fl"><span>浏览量</span>586</div>
              </div>
              <div class="type_box m_t10">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
                <div class="icon_list fr">
                  <span class="item_icon icon_blue">保</span>
                  <span class="item_icon icon_red">运</span>
                  <span class="item_icon">代</span>
                  <span class="item_icon icon_green">票</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 热门专线 -->
    <div class="p_release">
      <div class="bd">
        <span class="text">平台已撮合</span>
        <span class="num">5</span>
        <span class="num">3</span>
        <span class="num">8</span>
        <span class="num">8</span>
        <span class="num">2</span>
        <span class="text">货源达成交易</span>
      </div>
      <div class="btn_box">
        <a href="">快速下单</a>
      </div>
      <p class="explain">一键下单，运力30秒快速响应</p>
    </div>
    <!-- 快速下单 -->
    <div class="grid_c1 drop_groom clearfix">    
      <div class="p_title_box">
        <h3 class="title">降价专线推荐</h3>
        <span class="text">距结束<b>3</b>天15时<b>23</b>分<b>17</b>秒</span>
        <a 
          href="" 
          class="link fr">全部专线<i class="iconfont iconjiantou2"/>
        </a>         
      </div>
      <ul class="p_hot_line clearfix">
        <li>
          <div class="h_operate">
            <a 
              href="" 
              class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
            <a 
              href=""
              class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
          </div>
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
            <div class="h_company">
              <div class="name fl">速递物流公司</div>
              <div class="icon_box fl">
                <span class="icon"/>
                <span class="icon"/>
                <span class="icon"/>
              </div>
              <span class="fr icon_qq"/>
            </div>
            <div class="h_praise">
              <div class="fl"><span>好评</span>158</div>
              <div class="fl"><span>浏览量</span>586</div>
            </div>
            <div class="h_type m_t10">
              <span class="icon_sale">7.8折</span>
              <div class="type_box">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="h_operate">
            <a 
              href="" 
              class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
            <a 
              href=""
              class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
          </div>
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
            <div class="h_company">
              <div class="name fl">速递物流公司</div>
              <div class="icon_box fl">
                <span class="icon"/>
                <span class="icon"/>
                <span class="icon"/>
              </div>
              <span class="fr icon_qq"/>
            </div>
            <div class="h_praise">
              <div class="fl"><span>好评</span>158</div>
              <div class="fl"><span>浏览量</span>586</div>
            </div>
            <div class="h_type m_t10">
              <span class="icon_sale">7.8折</span>
              <div class="type_box">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="h_operate">
            <a 
              href="" 
              class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
            <a 
              href=""
              class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
          </div>
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
            <div class="h_company">
              <div class="name fl">速递物流公司</div>
              <div class="icon_box fl">
                <span class="icon"/>
                <span class="icon"/>
                <span class="icon"/>
              </div>
              <span class="fr icon_qq"/>
            </div>
            <div class="h_praise">
              <div class="fl"><span>好评</span>158</div>
              <div class="fl"><span>浏览量</span>586</div>
            </div>
            <div class="h_type m_t10">
              <span class="icon_sale">7.8折</span>
              <div class="type_box">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="h_operate">
            <a 
              href="" 
              class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
            <a 
              href=""
              class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
          </div>
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
            <div class="h_company">
              <div class="name fl">速递物流公司</div>
              <div class="icon_box fl">
                <span class="icon"/>
                <span class="icon"/>
                <span class="icon"/>
              </div>
              <span class="fr icon_qq"/>
            </div>
            <div class="h_praise">
              <div class="fl"><span>好评</span>158</div>
              <div class="fl"><span>浏览量</span>586</div>
            </div>
            <div class="h_type m_t10">
              <span class="icon_sale">7.8折</span>
              <div class="type_box">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="h_operate">
            <a 
              href="" 
              class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
            <a 
              href=""
              class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
          </div>
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
            <div class="h_company">
              <div class="name fl">速递物流公司</div>
              <div class="icon_box fl">
                <span class="icon"/>
                <span class="icon"/>
                <span class="icon"/>
              </div>
              <span class="fr icon_qq"/>
            </div>
            <div class="h_praise">
              <div class="fl"><span>好评</span>158</div>
              <div class="fl"><span>浏览量</span>586</div>
            </div>
            <div class="h_type m_t10">
              <span class="icon_sale">7.8折</span>
              <div class="type_box">
                <span class="name">货重:</span>
                <span class="item"><b>1.37</b></span>
                <span class="item color_gray"><span class="line-through">244</span>元／公斤</span>
              </div>
              <div class="type_box">
                <span class="name">轻货:</span>
                <span class="item"><b>107</b></span>
                <span class="item color_gray"><span class="line-through">212</span>元／m³</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 降价专线推荐 -->
    <div class="p_release drop_release">
      <div class="hd">
        <div class="text_box fl">
          <h3 class="tit">我也要降价发布</h3>
          更多曝光机会，让更多货主联系您
        </div>
        <div class="btn_box fr">
          <a href="">快速发布专线</a>
        </div>
      </div>
    </div>
    <!-- 降价发布 -->
    <!-- 本月优质承运 -->
    <div class="p_company_owner">
      <div class="p_title_box">
        <h3 class="title">本月优质企业货主</h3>
        <span class="text">稳定货源，好评率高</span>
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
    <div class="grid_c1 groom_login">
      <div class="groom_submit clearfix">
        <input 
          type="text" 
          placeholder="请输入您的手机号"
          class="fl">
        <button class="fl">帮我推荐</button>
      </div>
    </div>
    <!-- 帮我推荐 -->
  </div>
</template>
<script>
export default {
  name: 'HuiZong',
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_1076232_u8m9wtyprje.css'
      }
    ]
  },
  data() {
    return {
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
    seajs.use(['layer', '/js/jq_scroll.js'], function() {
      // 向上滚动
      $('.p_hy_info .info_user_box').Scroll({
        line: 1,
        speed: 500,
        timer: 2000
      })
      // 地点插件
      $('#groom_pageinp1').citypicker()
      $('#groom_pageinp2').citypicker()
    })
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/common_index.scss';
/*本页面公共的函数*/
@mixin active_color($color) {
  background: $color;
  &:after {
    border-top: 12px solid $color;
    display: block !important;
  }
  .tit,
  .explain {
    color: $white !important;
    &:after {
      background: $white !important;
    }
  }
}
/*图标颜色控制*/
@mixin hot_icon($color) {
  color: $color;
  border-color: $color;
  margin-right: 10px;
}
@mixin icon_huangGuan() {
  margin-right: 5px;
  width: 16px;
  height: 16px;
  background: url('../../static/images/zhuanxian/icon_huangguan.gif') no-repeat;
}
/*发布按钮函数*/
@mixin btn_link($up, $w, $font) {
  display: block;
  padding: $up 0;
  font-size: $font;
  width: 150px;
  background: $green;
  color: $white;
  border-radius: 3px;
}
/*帮我推荐提交*/
@mixin groom_submit() {
  > input {
    outline: none;
    text-indent: 10px;
    width: 170px;
    height: 40px;
    line-height: 40px;
    font-size: $f_14;
    border: 1px solid $border_color;
  }
  > button {
    outline: none;
    width: 78px;
    height: 42px;
    line-height: 42px;
    border: none;
    color: $white;
    background: $green;
    cursor: pointer;
  }
}
.grid_c1 {
  margin: 0 auto;
  width: $w_1440;
  font-size: $f_14;
}
/*1、物流专线*/
.category {
  margin-bottom: 20px;
  > .col1 {
    width: 230px;
    height: 425px;
    background: $white;
  }
  > .col2 {
    margin-left: 15px;
    width: 890px;
  }
  > .col3 {
    padding: 0 20px;
    width: 250px;
    height: 425px;
    background: $white;
  }
  /*幻灯片*/
  .wl_ad {
    overflow: hidden;
    width: 890px;
    height: 425px;
    img {
      width: 100%;
      height: 100%;
    }
    .ad_big {
      width: 710px;
      height: 425px;
    }
    .ad_box {
      width: 165px;
      height: 425px;
      .item {
        margin-bottom: 15px;
        width: 165px;
        height: 132px;
      }
    }
  }
  /*帮我推荐*/
  .groom {
    // margin-bottom: 10px;
    height: 160px;
    .groom_tit {
      font-size: $f_16;
      color: $tit_color;
    }
    .groom_explain {
      margin: 15px 0;
      line-height: 20px;
    }
    .groom_submit {
      @include groom_submit;
    }
    .error {
      margin-top: 5px;
      font-size: $f_12;
      color: $red;
    }
  }
  .operate {
    overflow: hidden;
    margin-bottom: 15px;
    > a {
      @extend .fl;
      width: 118px;
      height: 40px;
      line-height: 40px;
      border-radius: 5px;
      text-align: center;
      color: $green;
      border: 1px solid $green;
      &:first-child {
        margin-right: 10px;
      }
    }
  }
  .oder_num {
    color: $tit_color;
    > b {
      font-size: 16px;
      color: $orange;
    }
  }
}
/*2、平台推荐*/
.pt_groom {
  overflow: hidden;
  width: 1155px;
  .hd {
    margin-bottom: 20px;
    width: 1135px;
    background: $bj_gray;
    > li {
      @extend .fl;
      position: relative;
      padding: 20px 0 0 30px;
      width: 253px;
      height: 205px;
      &:after {
        content: '';
        position: absolute;
        display: none;
        left: 118px;
        bottom: -12px;
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 12px solid #f5f5f7;
      }
      .tit {
        margin-bottom: 5px;
        font-size: 18px;
      }
      .explain {
        position: relative;
        margin-bottom: 10px;
        padding-bottom: 10px;
        color: $tit_color;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 25px;
          height: 2px;
          background: $green;
        }
      }
      .img {
        overflow: hidden;
        width: 223px;
        height: 109px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &.channel1 {
        .tit {
          color: $green;
        }
      }
      &.channel2 {
        .tit {
          color: $blue;
        }
        .explain {
          &::after {
            background: $blue;
          }
        }
      }
      &.channel3 {
        .tit {
          color: $orange;
        }
        .explain {
          &::after {
            background: $orange;
          }
        }
      }
      &.channel4 {
        .tit {
          color: $light_violet;
        }
        .explain {
          &::after {
            background: $light_violet;
          }
        }
      }
    }
  }
  .active_green {
    .channel1 {
      @include active_color($green);
    }
  }
  .active_blue {
    .channel2 {
      @include active_color($blue);
    }
  }
  .active_orange {
    .channel3 {
      @include active_color($orange);
    }
  }
  .active_violet {
    .channel4 {
      @include active_color($light_violet);
    }
  }
  /*列表*/
  .p_wl_list {
    > li {
      padding: 0;
      width: 266px;
      height: auto;
      background: $light_blue;
      .hd_box {
        overflow: hidden;
        > span {
          @extend .fl;
          height: $f_16;
          line-height: $f_16;
          &.icon {
            @include icon_huangGuan;
          }
        }
      }
      .item_order_num {
        margin-top: 10px;
      }
      .item_order {
        padding-left: 10px;
        height: 50px;
        line-height: 50px;
        background-color: $green;
        .name {
          font-size: 18px;
          color: $white;
        }
        .dock {
          overflow: hidden;
          margin-left: 10px;
          width: 75px;
          height: 50px;
          > span {
            line-height: 25px;
            display: block;
            font-size: $f_12;
            color: $white;
            &.dock_icon {
              overflow: hidden;
              margin-top: 7px;
              width: 55px;
              height: 18px;
              line-height: 18px;
              text-align: center;
              background: #ff9933;
              border-radius: 3px;
            }
          }
        }
        .link_oder {
          width: 80px;
          text-align: center;
          background: url('../../static/images/zhuanxian/wl_bj_1.png') no-repeat;
          > a {
            display: block;
            color: $light_red;
          }
        }
      }
      .bj_red {
        background: $light_red;
      }
      .bj_blue {
        background: $blue;
      }
    }
  }
}
.pt_discount {
  overflow: hidden;
  width: 285px;
  height: 452px;
  background: $bj_gray;
}
/*3、热门专线*/
.p_hy_groom {
  > .bd {
    overflow: hidden;
  }
}
.p_hot_line {
  margin-left: -20px;
  > li {
    position: relative;
    @extend .fl;
    margin-bottom: 20px;
    margin-left: 20px;
    width: 272px;
    background: $white;
    .wl_box {
      margin: 15px 10px 30px 10px;
    }
    .h_operate {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50px;
      background-color: $white;
      background-color: rgba(255, 255, 255, 0.7);
      > a {
        @extend .fl;
        margin: 8px 0 0 10px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid $deep_green;
        color: $green;
        border-radius: 3px;
        .iconfont {
          padding-right: 5px;
          color: $light_green;
        }
        &.link_collect {
          color: $light_red;
          border-color: $light_red;
          .iconfont {
            color: $yellow;
          }
        }
      }
    }
    .h_pic {
      overflow: hidden;
      margin-bottom: 10px;
      width: 272px;
      height: 195px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .h_place {
      overflow: hidden;
      margin-bottom: 10px;
      > span {
        @extend .fl;
        line-height: 20px;
        &.icon {
          margin-top: 2px;
          padding: 1px;
          line-height: 13px;
          text-align: center;
          font-size: $f_12;
          border: 1px solid #000;
          border-radius: 2px;
        }
        &.icon_start {
          @include hot_icon($green);
        }
        &.icon_end {
          @include hot_icon($yellow);
          margin-left: 10px;
        }
        &.place {
          font-size: $f_16;
          color: $tit_color;
        }
      }
    }
    .h_company {
      overflow: hidden;
      margin-bottom: 2px;
      line-height: 22px;
      color: $blue;
      .icon_box {
        margin: 3px 0 0 10px;
        .icon {
          @extend .fl;
          @include icon_huangGuan;
        }
      }
      .icon_qq {
        width: 22px;
        height: 20px;
        background: url('../../static/images/zhuanxian/icon_qq.gif') no-repeat;
      }
    }
    .h_praise {
      overflow: hidden;
      margin-top: 5px;
      color: $light_gray;
      .fl {
        margin-right: 10px;
        > span {
          padding-right: 5px;
        }
      }
    }
    .type_box {
      overflow: hidden;
      @include type_box($f_13);
      .item {
        b {
          font-size: $f_16;
        }
      }
      .color_gray {
        // font-size: $f_13;
        color: $tit_color;
      }
      .icon_list {
        .item_icon {
          @extend .fl;
          margin-left: 5px;
          padding: 2px;
          line-height: 14px;
          color: $white;
          background: $icon_blue;
        }
        .icon_red {
          background: $icon_red;
        }
        .icon_green {
          background: $green;
        }
      }
    }
    .h_type {
      position: relative;
      .icon_sale {
        position: absolute;
        right: 0;
        bottom: 5px;
        width: 50px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        color: $white;
        background: $icon_red;
        border-radius: 3px;
      }
    }
  }
}
/*4、快速下单*/
.p_release {
  .bd {
    margin-top: 0;
  }
  .btn_box {
    margin: 30px 0;
    text-align: center;
    > a {
      margin: 0 auto;
      @include btn_link(8px, 150px, 18px);
    }
  }
  .link_order {
    margin: 30px auto 20px auto;
    display: block;
    width: 130px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    background: $green;
    color: $white;
    border-radius: 3px;
  }
  .explain {
    text-align: center;
  }
}
/*5、降价专线*/
.drop_groom {
  overflow: hidden;
  .p_title_box {
    .text {
      color: $tit_color;
      b {
        color: $red;
      }
    }
  }
}
/*降价发布*/
.drop_release {
  padding: 50px 0;
  .hd {
    width: 400px;
    .btn_box {
      margin: 8px 0 0 0;
    }
  }
}
</style>
