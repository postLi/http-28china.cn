<template>
  <div>
    <MemberBanner />
    <div class="main">
      <MemberSidebar />
      <div class="right main_nr">

 
        <!-- 右边栏 -->
        <div class="find_order_right find_order_tip">
          <h3 class="find_order_title">运单查询</h3>
          <div class="find_order_search"><div class="find_order_search_tip">请输入运单号</div>	<input 
            id="find_order_input" 
            type="text"><span class="find_order_search_btn">查询</span></div>
          <!-- 没有内容 -->
          <div class="find_order_default find_order_con hide">
            <p>
              无内容真可怕<br>你试试查个运单号就有了！
            </p>
          </div>
          <!-- 有内容 -->
          <div class="find_order_content find_order_content_info find_order_con hide">
            <div class="find_order_tabs">
              <a 
                href="javascript:;" 
                class="active">运单详情</a>
              <a 
              href="javascript:;">轨迹跟踪</a>
            </div>
            <div id="find_order_map"/>
            <span class="return_search">返回搜索列表</span>
            <div class="find_order_company find_order_desc"/>
            <div class="find_order_list find_order_desc">
              <ul>
              <!-- <li class="find_order_sign">
						<span class="find_order_date">2018-070120011</span>
						<span class="find_order_line"></span>
						<span class="find_order-info">
							【广东广州怡新路分部】已签收，签收人是本人
						</span>
					</li>
					<li class="find_order_create">
						<span class="find_order_date">2018-070120011</span>
						<span class="find_order_line"></span>
						<span class="find_order-info">
							【广东广州怡新路分部】已签收，签收人是本人
						</span>
					</li> -->
              </ul>
            </div>
          </div>
          <!-- 选择公司 -->
          <div class="find_order_search_list find_order_con find_order_content hide">
            <div class="find_order_company">为您找到“<span title="11111111">111111</span>”相关结果<i>2</i>个</div>
            <div class="find_order_company_list">
              <ol>
              <!-- <li><span class="find_company_order">3487458493874599
						广州运力公司
					</span></li> -->
              </ol>
            </div>
          </div>
          <!-- 查无运单 -->
          <div class="find_order_none find_order_con hide">
            <div class="none_tip_text">抱歉暂无查询记录</div>
            <div class="none_tip_desc">请您仔细核对物流公司名称和运单号码</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MemberBanner from '~/components/member/banner'
import MemberSidebar from '~/components/member/sidebar2'

export default {
  components: {
    MemberBanner,
    MemberSidebar
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/member/css/list.css' },
      { rel: 'stylesheet', href: '/member/css/find_order.css' }
    ],
    script: [
      {
        src:
          'https://webapi.amap.com/maps?v=1.4.8&key=e61aa7ddc6349acdb3b57c062080f730&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder&callback=loadedGaodeMap'
      },
      {
        src: '//webapi.amap.com/ui/1.0/main.js'
      },
      { src: '/js/domap.js' }
      // {
      //   src: '/member/js/find_order.js'
      // }
    ]
  },
  layout: 'member',
  mounted() {
    seajs.use(
      [
        '/index/js/city-picker.data.js',
        '/index/js/city-picker.js',
        '/member/js/index.js',
        '/index/js/collection.js',
        // 'https://webapi.amap.com/maps?v=1.4.8&key=e61aa7ddc6349acdb3b57c062080f730&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder&callback=loadedGaodeMap',
        // '//webapi.amap.com/ui/1.0/main.js',
        // '/js/domap.js',
        '/member/js/find_order.js'
      ],
      function() {}
    )
  },
  async fetch({ store, params, $axios, error }) {
    store.commit('member/setId', params.id)
    await store.dispatch('member/GETCOMPANYINFO', params.id).catch(err => {
      if (err.type === 'network') {
        error({ statusCode: 500, message: err.msg })
      } else {
        error({ statusCode: 404, message: err.msg })
      }
    })
  }
}
</script>
