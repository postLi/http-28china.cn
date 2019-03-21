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
    <div class="CY grid_c1">
      <div class="p_title_box">
        <h3 class="title">严选车源</h3>
        <span class="title_txt">时效快,多重服务,资质保障</span>
        <a 
          href="" 
          class="title_link fr">更多车源<i class="iconfont iconjiantou2"/>
        </a>         
      </div>
      <div class="p_type_nav">
        <a href="">信誉最高</a>
        <a href="">交易量</a>
        <a href="">运输时效</a> 
        <a href="">重货价格最低</a> 
        <a href="">轻货价格最低</a>       
      </div>
      <div class="bd">
        <ul class="p_hot_line CY_list clearfix">
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
              <div class="CY_list_txt">中型货车| 长2米|载重15吨|体积13.6方</div>
              <div class="CY_list_price"> 运价：2590 元</div>
              <div class="CY_list_praise">好评  184   收藏 840 好评率98.3%</div>
              <div class="CY_list_time">2018-10-25 15:26</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 2、严选车源 -->
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'Swiper'
export default {
  name: 'HuiZong',
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_1076232_r843rdhd1s.css'
      }
    ]
  },
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
/*1、导航*/
.category {
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
.CY {
  .p_title_box {
    padding-bottom: 0;
  }
  > .bd {
    overflow: hidden;
  }
}
</style>
