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
      <div class="col2 category_ad fl clearfix">
        <div class="ad_big fl">
          <img src="../../static/images/huizong/banner01.jpg">
        </div>
        <div class="ad_right fr">        
          <div class="ad_right_item"><img src="../../static/images/huizong/banner01.jpg"></div>
          <div class="ad_right_item"><img src="../../static/images/huizong/banner01.jpg"></div>
          <div class="ad_right_item"><img src="../../static/images/huizong/banner01.jpg"></div>
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
        <div 
        class="p_me_groom">
          <div class="gr_text">
            <h4 class="gr_text_title">帮我推荐</h4>
            <div class="gr_text_txt">平台推荐，资质保障，为您快速匹配时效快、平价、安心、专业的专线</div>
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
          <div class="gr_oder_num">今日已有<b>2368</b>人在线下单获得优惠</div>   
        </div>
 
      </div>
    </div>
    <!-- 物流专线hd -->
    <div 
      class="bj_2"
      style="height:550px">
      <div class="grid_c1 clearfix">    
        <div class="p_title_box">
          <h3 class="title">平台推荐</h3>
          <span class="title_txt">平台推荐，资质保障</span>
          <a 
            href="" 
            class="title_link fr">更多优质专线<i class="iconfont iconjiantou2"/>
          </a>         
        </div>
        <div class="pt_groom fl">
          <ul 
            :class="['hd','clearfix',groomClass]" 
          >
            <li 
              :class="[{'active':groomIndex==1},'channel1']" 
              @mouseover="groomTab(0)" > 
              <h6 class="pt_groom_tit">担保交易</h6>
              <div class="pt_groom_txt">
                平台担保，安全可靠
                <span class="pt_groom_line"/>
              </div>
              <div class="pt_groom_img"><img src="../../static/images/huizong/banner02.jpg"></div>
            </li>
            <li
              :class="[{'active':groomIndex===2},'channel2']" 
              @mouseover="groomTab(1)">
              <h6 class="pt_groom_tit">超值特惠</h6>
              <div class="pt_groom_txt">
                价格直降，超值独享
                <span class="pt_groom_line"/>
              </div>
              <div class="pt_groom_img"><img src="../../static/images/huizong/banner02.jpg"></div>
            </li>
            <li 
              :class="[{'active':groomIndex===3},'channel3']" 
              @mouseover="groomTab(2)">
              <h6 class="pt_groom_tit">精准时效</h6>
              <div class="pt_groom_txt">
                及时、高效、保质量
                <span class="pt_groom_line"/>
              </div>
              <div class="pt_groom_img"><img src="../../static/images/huizong/banner02.jpg"></div>
            </li>
            <li
              :class="[{'active':groomIndex===4},'channel4']" 
              @mouseover="groomTab(3)">
              <h6 class="pt_groom_tit">28信用</h6>
              <div class="pt_groom_txt">
                平台认证，推荐专线
                <span class="pt_groom_line"/>
              </div>
              <div class="pt_groom_img"><img src="../../static/images/huizong/banner02.jpg"></div>
            </li>
          </ul>
          <div class="bd">
            <div 
              
            >
              <ul 
                v-for="(item,index) in 4"
                :key="index"
                v-if="groomIndex==index"
                :class="'lineRecommend'+index"
                class="p_hy_list p_wl_list clearfix"
              >
                <li 
                  v-for="(item,index) in lineRecommend"
                  :key="index"
                  :class="'act'+index">
                  <div class="p_10">
                    <div class="hd_box">
                      <span class="label_provider">物流商:</span>
                      <span class="provider">{{ item.companyName }}</span>
                      <span 
                        v-for="(item, index) in item.credit"
                        :key="index"
                        class="icon"/>
                       
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
                      <span class="name">重货:</span>
                      <span class="item"><b>{{ item.weightPrice }}</b></span>
                      <span class="item color_gray"><span class="line-through">{{ item.weightDiscountPrice }}</span>元／平方</span>
                    </div>
                    <div class="type_box">
                      <span class="name">轻货:</span>
                      <span class="item"><b>{{ item.lightPrice }}</b></span>
                      <span class="item color_gray"><span class="line-through">{{ item.lightDiscountPrice }}</span>元／立方</span>
                    </div>
                    <div class="item_order_num">已有{{ item.orderNumber }}人下单</div>
                  </div>
                  <div class="item_order clearfix">
                    <div class="name fl">担保交易</div>
                    <div class="dock fl">
                      <span class="dock_icon">延时赔付</span>
                      <span class="dock_num">88744人说好</span>
                    </div>
                    <div class="link_oder fr"><a 
                      :href="'/create/line?uid='+ item.account+'&publishId='+item.companyId+'&id='+item.id"
                      target="blank">立即下单</a></div>
                  </div>
                </li>
               
               
              </ul>
            </div>
            <!-- <div v-show="groomIndex===2">22</div>
            <div v-show="groomIndex===3">33</div>
            <div v-show="groomIndex===4">44</div> -->
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
    <!-- 最新成交用户 -->
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
          :href="'/zhuanxian/list?startp='+vo.startProvince+'&startc='+vo.startCity+'&endp='+vo.endProvince+'&endc='+vo.endCity" 
          target="_blank"
          class="gr_link">全部专线<i class="iconfont iconjiantou2"/></a>
      </div>
      <div class="p_type_nav">
        <a href="">信誉最高</a>
        <a href="">交易量</a>
        <a href="">运输时效</a> 
        <a href="">重货价格最低</a> 
        <a href="">轻货价格最低</a>       
      </div>
      <div class="bd">
        <ul class="p_hot_line clearfix">
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
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    href=""
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
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
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    href=""
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
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
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    href=""
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
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
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    href=""
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
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
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    href=""
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
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
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    href=""
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
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
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    href=""
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
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
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    href=""
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
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
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    href=""
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
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
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    href=""
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 热门专线 -->
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
      <div class="grid_c1 drop_groom clearfix">    
        <div class="p_title_box">
          <h3 class="title">降价专线推荐</h3>
          <span class="title_txt">距结束<b>3</b>天15时<b>23</b>分<b>17</b>秒</span>
          <a 
            :href="'/zhuanxian/list?startp='+vo.startProvince+'&startc='+vo.startCity+'&endp='+vo.endProvince+'&endc='+vo.endCity" 
            target="_blank"
            class="title_link fr">全部专线<i class="iconfont iconjiantou2"/>
          </a>         
        </div>
        <ul class="p_hot_line clearfix">
          <li 
            v-for="(item,index) in lineRecomLowPrice.slice(0, 5)"
            :key="index">
            <div class="hot_line_box">
              <div class="h_pic">        
                <a 
                  target="_blank"
                  :href="'/zhuanxian/detail?id='+item.id+'&publishId='+item.companyId">
                  <img :src="item.rangeLogo || '/images/pic/bg1' + item.num + '.png'">
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
                    <div v-if="item.isEq">
                      <span 
                        v-for="(item, index) in item.credit"
                        :key="index"
                        class="icon"/>
                    </div>
                    <!-- <span class="icon"/>
                    <span class="icon"/> -->
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
                    :href="'/create/line?startp='+vo.startProvince+'&startc='+vo.startCity+'&endp='+vo.endProvince+'&endc='+vo.endCity"
                    target="_blank"
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
              </div>
            </div>
          </li>
          <!-- <li>
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
                <div class="h_company">
                  <div class="name fl">速递物流公司</div>
                  <div class="icon_box fl">
                    <span class="icon"/>
                    <span class="icon"/>
                    <span class="icon"/>
                  </div>
                  <span class="fr icon_qq"/>
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
                <div class="h_market">
                  <span class="h_market_price fl">比行情价格低<span class="h_market_num">13%</span></span>
                  <span class="h_market_order fr">已有59人下单</span>
                </div>
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    href=""
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
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
                <div class="h_company">
                  <div class="name fl">速递物流公司</div>
                  <div class="icon_box fl">
                    <span class="icon"/>
                    <span class="icon"/>
                    <span class="icon"/>
                  </div>
                  <span class="fr icon_qq"/>
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
                <div class="h_market">
                  <span class="h_market_price fl">比行情价格低<span class="h_market_num">13%</span></span>
                  <span class="h_market_order fr">已有59人下单</span>
                </div>
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    href=""
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
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
                <div class="h_company">
                  <div class="name fl">速递物流公司</div>
                  <div class="icon_box fl">
                    <span class="icon"/>
                    <span class="icon"/>
                    <span class="icon"/>
                  </div>
                  <span class="fr icon_qq"/>
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
                <div class="h_market">
                  <span class="h_market_price fl">比行情价格低<span class="h_market_num">13%</span></span>
                  <span class="h_market_order fr">已有59人下单</span>
                </div>
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    href=""
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
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
                <div class="h_company">
                  <div class="name fl">速递物流公司</div>
                  <div class="icon_box fl">
                    <span class="icon"/>
                    <span class="icon"/>
                    <span class="icon"/>
                  </div>
                  <span class="fr icon_qq"/>
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
                <div class="h_market">
                  <span class="h_market_price fl">比行情价格低<span class="h_market_num">13%</span></span>
                  <span class="h_market_order fr">已有59人下单</span>
                </div>
                <div class="h_operate">
                  <a 
                    href="" 
                    class="link_collect"><i class="iconfont iconshoucang1"/>收藏</a>
                  <a 
                    href=""
                    class="link_order"><i class="iconfont iconlightningbshandian"/>下单</a>
                </div>
              </div>
            </div>
          </li>       -->
        </ul>
      </div>
    </div>
    <!-- 降价专线推荐 -->
    <div class="bj_2">
      <div class="p_release drop_release">
        <div class="release_box">
          <div class="release_box_txt fl">
            <h3 class="release_box_txt_tit">我也要降价发布</h3>
            更多曝光机会，让更多货主联系您
          </div>
          <div class="btn_box fr">
            <a 
              href=""
              class="btn_release">快速发布专线</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 降价发布 -->
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
    <!-- 本月优质承运 -->
    <div class="grid_c1 groom_login">
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
    </div>
    <!-- 帮我推荐 -->
    <div class="bj_2">
      <div class="grid_c1 shipper_say">
        <h3 class="p_title">3800万用户的共同选择！</h3>
        <div class="shipper-say_title clearfix">
          <img 
            src="../../static/images/huizong/icon_index.png" 
            class="shipper-say_title-icon" 
            alt="">
          <span class="shipper-say_title-word">货主说</span>
          <img 
            src="../../static/images/huizong/icon_index.png" 
            class="shipper-say_title-icon" 
            alt="">
          <a 
            href="" 
            class="fr btn_small">我有话要说</a>
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
    <div class="bj_2">
      <div class="p_our_virtue">
        <h3 class="p_title">我们的优势</h3>
        <ul class="our_virtue_list clearfix">
          <li>
            <div class="our_virtue_pic"><img src="../../static/images/huizong/u299.png"></div>
            <h4 class="our_virtue_tit color_orange">安全保障</h4>
            <div class="our_virtue_content">流程标准化，降低货损率；完善的理赔保障体系，小额快赔的贴心设计，为成员的每一票货物保驾护航</div>
          
          </li>
          <li>
            <div class="our_virtue_pic"><img src="../../static/images/huizong/u301.png"></div>
            <h4 class="our_virtue_tit color_green">降本增效</h4>
            <div class="our_virtue_content">金融、保险等丰富的产品选择，带来集采价产品服务，为成员增效，助力事业腾飞</div>   
          </li>
          <li>
            <div class="our_virtue_pic"><img src="../../static/images/huizong/u295.png"></div>
            <h4 class="our_virtue_tit color_blue">信息系统</h4>
            <div class="our_virtue_content">强大的交易管理系统，让交易更便捷，管理更轻松，更少的人员投入，更多的业务承接</div>     
          </li>
        </ul>
      </div>
    </div>
    <!-- 我们的优势 -->
    <div class="p_release drop_release wl_enter">
      <div class="release_box">
        <div class="release_box_txt fl">
          <h3 class="release_box_txt_tit"> 快速成为承运商获取优质货源</h3>
          能够以最快的时效最小的成本,了大量优质货源
        </div>
        <div class="btn_box fr">
          <a 
            href=""
            class="btn_release">我要入驻</a>
        </div>
      </div>
    </div> 
    <!-- 入住 -->
    <div class="order_step">
      <div class="step_box">
        <h3 class="step-title">在线下单流程</h3>
        <div class="step_txt">
          <p class="step_txt_title">三方约看</p>
          <p class="step_txt_text">平均7日成交</p>
        </div>
        <ul class="step_list">
          <li class="step_item">
            <i class="iconfont icondingyue"/>
            下单
          </li>
    
          <li class="step_icon"><i class="iconfont iconjiantou_xiangyouliangci_o"/></li>
          <li class="step_item">
            <i class="iconfont iconwuliu"/>
            受理
          </li>
          <li class="step_icon"><i class="iconfont iconjiantou_xiangyouliangci_o"/></li>
          <li class="step_item">
            <i class="iconfont iconhuowu"/>
            揽收
          </li>
          <li class="step_icon"><i class="iconfont iconjiantou_xiangyouliangci_o"/></li>
          <li class="step_item">
            <i class="iconfont iconwuliu"/>
            运输
          </li>
          <li class="step_icon"><i class="iconfont iconjiantou_xiangyouliangci_o"/></li>
          <li class="step_item">
            <i class="iconfont iconliwuhuodong"/>
            签收
          </li>

        </ul>
      </div>
    </div>
    <!-- 在线下单流程 -->
    <div class="bj_2">
      <div class="p_answers">
        <div class="p_title_box">
          <h3 class="title">28问答</h3>
          <a 
            href="" 
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
        <div class="answers_questions">
          <div class="answers_questions_btn">
            <a 
              href=""
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
  </div>
</template>
<script>
function myCredit(credit, item) {
  if (credit >= 0 && credit <= 3) {
    item.credit = 1
    item.isEq = true
    // linedataB.data.data
  }
  if (credit >= 4 && credit <= 10) {
    item.credit = 2
    item.isEq = true
  }
  if (credit >= 11 && credit <= 40) {
    item.credit = 3
    item.isEq = true
  }
  if (credit >= 41 && credit <= 90) {
    item.credit = 4
    item.isEq = true
  }
  if (credit >= 91 && credit <= 150) {
    item.credit = 5
    item.isZuan = true
  }
  if (credit >= 151 && credit <= 250) {
    item.hZhuan = 1
    item.isHZhuan = true
  }
  if (credit >= 251 && credit <= 500) {
    item.hZhuan = 2
    item.isHZhuan = true
  }
  if (credit >= 500 && credit <= 1000) {
    item.hZhuan = 3
    item.isHZhuan = true
  }
  if (credit >= 1001 && credit <= 2000) {
    item.hZhuan = 4
    item.isHZhuan = true
  }
  if (credit >= 2001) {
    item.hZhuan = 5
    item.isHZhuan = true
  }
}
async function getLineRecommend($axios, vo = {}, recommendType) {
  let parm = vo
  parm.currentPage = 4
  parm.pageSize = 1
  parm.recommendType = recommendType
  let res = await $axios.post(`/28-web/range/platform/recommend/list`, parm)
  if (res.data.status == 200) {
    return {
      list: res.data.data.slice(0, 4)
    }
  } else {
    return { list: [] }
  }
  // console.log(res, 'res')
}
export default {
  name: 'HuiZong',
  head: {},
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
      ],
      groomIndex: 0,
      groomClass: 'active_green'
    }
  },
  async asyncData({ $axios, app, query, error }) {
    let vo = {
      // currentPage: 1,
      // pageSize: 5,
      // companyName: query.companyName ? query.companyName : '',
      city: query.locationCity ? query.locationCity : '',
      province: query.locationProvince ? query.locationProvince : '',
      endArea: query.endArea ? query.endArea : '',
      endCity: query.endCity ? query.endCity : '',
      endProvince: query.endProvince ? query.endProvince : '',
      startArea: query.startArea ? query.startArea : '',
      startCity: query.startCity
        ? query.startCity
        : app.$cookies.get('currentAreaFullName'),
      startProvince: query.startProvince
        ? query.startProvince
        : app.$cookies.get('currentProvinceFullName')
    }
    let vo1 = vo
    vo1.currentPage = 1
    vo1.pageSize = 4
    let [lineA1, lineB, lineC] = await Promise.all([
      $axios.post(`/28-web/range/platform/recommend/list`),
      $axios.get('/28-web/logisticsCompany/popularity'),
      $axios.post('/28-web/range/reduce/price/list', vo1)
    ])
    let collateral = 'collateral'
    let lineA = await getLineRecommend($axios, vo, collateral)

    if (lineC.data.status == 200) {
      lineC.data.data.forEach(item => {
        let arr = (item.id || '').split('')
        let num = 0
        let credit = item.credit
        arr.forEach(el => {
          num += el.charCodeAt(0) || 0
        })
        item.num = (num % 10) + 1
        myCredit(credit, item)
      })
      lineA.list.forEach(item => {
        let credit = item.credit

        myCredit(credit, item)
      })
      console.log(lineA.list, ' lineC.data.data1', lineC.data.text)
      return {
        lineRecommend: lineA.list,
        lineRecomLowPrice: lineC.data.data,
        vo
      }
    }
  },

  mounted() {
    console.log(this.lineRecommend, 'lineRecommend')
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
    toLineDetail(item) {
      // console.log(item, 'item')
      window.open(
        '/zhuanxian/detail?id=' + item.id + '&publishId=' + item.companyId
      )
    },
    groomTab(index) {
      this.groomIndex = index
      switch (index) {
        case 0:
          this.groomClass = 'active_green'
          // let lineA = await getLineRecommend($axios, vo, collateral)
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
    getLineRecom() {
      getLineRecommend($axios, vo, collateral).then(res => {})
    }
  }
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
  .pt_groom_tit,
  .pt_groom_txt {
    color: $white !important;
    &:after {
      background: $white !important;
    }
  }
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
  .category_ad {
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
    .ad_right {
      width: 165px;
      height: 425px;
      .ad_right_item {
        margin-bottom: 15px;
        width: 165px;
        height: 132px;
      }
    }
  }
}
/*2、平台推荐*/
.pt_groom {
  overflow: hidden;
  width: 1155px;
  > .hd {
    margin-bottom: 20px;
    width: 1135px;
    background: $bj_gray;
    > li {
      @extend .fl;
      position: relative;
      padding: 20px 0 0 30px;
      width: 253px;
      height: 205px;
      cursor: default;
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
      .pt_groom_tit {
        margin-bottom: 5px;
        font-size: 18px;
      }
      .pt_groom_txt {
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
      .pt_groom_img {
        overflow: hidden;
        width: 223px;
        height: 109px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &.channel1 {
        .pt_groom_tit {
          color: $green;
        }
      }
      &.channel2 {
        .pt_groom_tit {
          color: $blue;
        }
        .pt_groom_txt {
          &::after {
            background: $blue;
          }
        }
      }
      &.channel3 {
        .pt_groom_tit {
          color: $orange;
        }
        .pt_groom_txt {
          &::after {
            background: $orange;
          }
        }
      }
      &.channel4 {
        .pt_groom_tit {
          color: $light_violet;
        }
        .pt_groom_txt {
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
          background: url('../../static/images/huizong/wl_bj_1.png') no-repeat;
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
  height: 460px;
  background: $icon_red_bj;
}
/*3、热门专线*/

/*4、快速下单*/

/*5、降价专线*/
.drop_groom {
  .p_title_box {
    .title_txt {
      color: $tit_color;
      b {
        color: $red;
      }
    }
  }
}
/*6、降价发布*/
.drop_release {
  padding: 50px 0;
  .release_box {
    width: 400px;
    .btn_box {
      margin: 8px 0 0 0;
    }
  }
}
/*7、帮我推荐*/
.groom_login {
  padding: 50px 0;
  .groom_box {
    margin: 0 auto;
    width: 320px;
  }
  .p_groom_submit {
    position: relative;
    margin-bottom: 25px;
    > input {
      width: 200px;
      font-size: $f_16;
    }
    > button {
      width: 100px;
      font-size: $f_18;
    }
  }
  .error {
    position: absolute;
    left: 0;
    bottom: -18px;
    width: 100%;
    font-size: $f_12;
    color: $red;
    line-height: 15px;
  }
}
/*8、货主说*/
.shipper_say {
  margin-bottom: 40px;
  .p_title {
    text-align: center;
  }
  .shipper-say_title {
    margin: 0 auto;
    width: 1032px;
    text-align: center;
    .shipper-say_title-icon {
      display: inline-block;
      width: 16px;
      height: 22px;
      vertical-align: top;
      margin-top: 7px;
    }
    .shipper-say_title-word {
      display: inline-block;
      font-size: 22px;
      color: rgba(0, 0, 0, 0.8);
      margin: 0 10px 0 15px;
    }
    .btn_say {
      padding: 5px 10px;
      color: $green;
      border: 1px solid $green;
      border-radius: 5px;
    }
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
/*9、我们的优势*/
.p_our_virtue {
  width: 1075px;
}
/*10、我要入驻*/
.wl_enter {
  .release_box {
    width: 520px;
  }
}
/*11、28问答*/
.p_answers {
  .answers_questions {
    padding: 40px 0;
    text-align: center;
    .answers_questions_btn {
      margin-bottom: 10px;
    }
  }
}
/*12、热点新闻*/
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
/*13、在线下单流程*/
.order_step {
  overflow: hidden;
  width: 100%;
  height: 430px;
  color: $tit_color;
  background: url('../../static/images/huizong/_zhuanxin_oder_bj.jpg') right
    center no-repeat;
  .step_box {
    margin: 90px auto 0;
    width: 1075px;
  }
  .step-title {
    display: inline-block;
    width: 100px;
    font-size: 16px;
    font-weight: normal;
    padding-bottom: 6px;
    border-bottom: 3px solid #22ac38;
  }
  .step_txt {
    margin-top: 30px;
    .step_txt_title {
      font-size: 40px;
    }
    .step_txt_text {
      margin-top: 20px;
      font-size: 18px;
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
        width: 40px;
        text-align: center;
        .iconfont {
          display: block;
          font-size: 30px;
        }
      }
      &.step_icon {
        line-height: 65px;
        padding: 0 25px;
      }
    }
  }
}
</style>
