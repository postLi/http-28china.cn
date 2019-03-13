<template>
  <div>
    <MemberBanner />
    <div class="main">
      <MemberSidebar />
      <div 
        id="js004" 
        class="right">
        <div class="right_bt1">
          <div class="right_bt1_1"><img src="/member/images/wd.png"><span>网点分布</span></div>
          <div class="right_bt1_2">
    			
            <div class="search_input search_input3">
              <input 
                style="height: 100%;" 
                data-toggle="city-picker" 
                data-level="district" 
                placeholder="请选择 省-市">
            </div>	
            <div class="search_button"><input 
              class="search_search" 
              readonly="" 
              value="搜索"> </div>
          </div>
        </div>
    	
        <div class="right_bt2">
          <ul>
            <li class="bt_01">网点名称</li>
            <li class="bt_02">所在地</li>
            <li class="bt_03">联系人</li>
            <li class="bt_04">联系电话</li>
            <li class="bt_05">详细地址</li>
            <li class="bt_06">操作</li>
          </ul>
        </div>
        <div class="wd_none">
          <span>暂无网点信息</span>
        </div>
        <div 
          v-for="(item, index) in $store.state.member.pointList" 
          :key="index"
          class="wd_item">
          <ul>
            <li class="wd_item01"><span 
              :title="item.pointName" 
              id="nr031">{{ item.pointName }}</span></li>
            <li class="wd_item02"><span id="nr032">{{ item.belongCityName }}</span></li>
            <li class="wd_item03"><span id="nr033">{{ item.name }}</span></li>
            <li class="wd_item04"><span id="nr034">{{ item.mobile }}</span></li>
            <li class="wd_item05"><span 
              id="nr035" 
              :title="item.address || ''">{{ (item.address || '').replace(item.belongCityName,'') }}</span></li>
            <li class="wd_item06"><a href="#"><input value="下单"></a></li>
          </ul>    		
        </div>
      </div>
      <div 
        class="box" 
        style="float: right;margin-right: 200px;">
        <div 
          id="pagination1" 
          class="page fl"/>
        <div class="info fl">
        <!--<p>当前页数：<span id="current1">1</span></p>-->
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
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' }
    ]
  },
  layout: 'member',
  data() {
    return {
      query: {
        belongCityName: ''
      }
    }
  },
  mounted() {
    let uid = this.$store.state.member.id
    let _this = this
    seajs.use(
      ['/member/js/jquery.pagination.min.js', '/index/js/city-picker.data.js'],
      function() {
        seajs.use(
          [
            '/index/js/city-picker.js'
            // '/member/js/index.js',
            // '/index/js/collection.js',
            // '/member/js/wangdian.js'
          ],
          function() {
            console.log(
              '_this.$store.state.member.pointTotal:',
              _this.$store.state.member.pointTotal
            )
            $('#pagination1').pagination({
              currentPage: 1,
              totalPage: _this.$store.state.member.pointTotal,
              callback: function(current) {
                $('#current1').text(current)
                _this.$store.dispatch('member/GETCOMPANYPOINTINFO', {
                  companyId: _this.$store.state.member.company.id,
                  pageSize: 10,
                  currentPage: current
                })
                // process1(current)
                window.location.href = '#top'
              }
            })
            var startp = $.getParams('startp')
            var startc = $.getParams('startc')
            var starta = $.getParams('starta')
            $('.search_input3 input').citypicker({
              province: startp,
              city: startc,
              district: starta
            })
            //网点搜索 S

            $('.search_search').click(function() {
              var list1 = []
              $('.search_input3 .select-item').each(function(i, e) {
                list1.push($(this).text())
              })
              var startp = list1[0]
              var startc = list1[1]
              var starta = list1[2]
              if (!startp) {
                startp = ''
              }
              if (!startc) {
                startc = ''
              }
              if (!starta) {
                starta = ''
              }
              var pca =
                '&startp=' + startp + '&startc=' + startc + '&starta=' + starta
              var address = startp + startc + starta
              var address = '&address=' + address
              if (!address) {
                address = ''
              }
              address = encodeURI(address)
              window.location = '/member/' + uid + '-wangdian?' + address + pca
            })
          }
        )
      }
    )
  },
  async fetch({ store, params, $axios, error }) {
    store.commit('member/setId', params.id)
    await Promise.all([
      store.dispatch('member/GETCOMPANYINFO', params.id),
      store.dispatch('member/GETCOMPANYPOINTINFO', {
        companyId: store.state.member.company.id,
        pageSize: 10,
        currentPage: 1
      })
    ])
  }
}
</script>
