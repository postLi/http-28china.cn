<template>
  <div>
    <MemberBanner />
    <div class="main">
      <MemberSidebar />
      <div 
        id="js004" 
        class="right">
        <div class="right_bt1">
          <div class="right_bt1_1"><img src="space/company/images/wd.png"><span>网点分布</span></div>
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
          class="wd_item" 
          style="display: none;">
          <ul>
            <li class="wd_item01"><span id="nr031"/></li>
            <li class="wd_item02"><span id="nr032"/></li>
            <li class="wd_item03"><span id="nr033"/></li>
            <li class="wd_item04"><span id="nr034"/></li>
            <li class="wd_item05"><span id="nr035"/></li>
            <li class="wd_item06"><input value="下单"></li>
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
    link: [{ rel: 'stylesheet', href: '/member/css/list.css' }]
  },
  layout: 'member',
  mounted() {
    seajs.use(
      [
        '/index/js/city-picker.data.js',
        '/index/js/city-picker.js',
        '/member/js/index.js',
        '/index/js/collection.js',
        '/member/js/jquery.pagination.min.js',
        '/member/js/wangdian.js'
      ],
      function() {
        $('#pagination1').pagination({
          currentPage: 1,
          totalPage: process1(1),
          callback: function(current) {
            $('#current1').text(current)
            process1(current)
            window.location.href = '#top'
          }
        })
      }
    )
  },
  fetch({ store, params }) {
    store.commit('member/setId', params.id)
  }
}
</script>
