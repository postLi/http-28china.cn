<template>
  <div>
    <MemberBanner />
    <div class="main">
      <MemberSidebar />
      <div 
        id="js005" 
        class="right">
        <div class="right_bt1">
          <div class="right_bt1_1"><img src="space/company/images/huo.png"><span>货源信息</span></div>
          <div class="huo_tj">
    			
            <div class="select_con">
              <dl>
                <dt>选择货源线路&nbsp;：</dt>
                <dd><form 
                  name="zxaddform" 
                  method="post" 
                  action="">
                  <input 
                    name="a7" 
                    type="hidden" 
                    value="0">
                  <input 
                    type="hidden" 
                    name="mid" 
                    value="19">
                  <input 
                    type="hidden" 
                    name="dopost" 
                    value="search">

                  <div 
                    id="HuoyuanFrom" 
                    class="fl list_input" 
                    style="position:relative">
                    <input 
                      name="cfd" 
                      style="height: 100%;" 
                      data-toggle="city-picker" 
                      data-level="district" 
                      type="text" 
                      placeholder="请输入出发地">
                  </div>

                  <img 
                    class="fl list_img" 
                    src="/templets/default/images/02jiantou.png">

                  <div 
                    id="HuoyuanTo" 
                    class="fl list_input" 
                    style="position:relative">
                    <input 
                      name="ddd" 
                      style="height: 100%;" 
                      data-toggle="city-picker" 
                      data-level="district" 
                      type="text" 
                      placeholder="请输入到达地">
                  </div>
 
 
                  <input 
                    id="search_huoyuan1" 
                    name="Submit2" 
                    value="搜本站" 
                    readonly="" 
                    class="list_button button_active">
                  <input 
                    id="search_huoyuan2" 
                    name="Submit2" 
                    value="搜全站" 
                    readonly="" 
                    class="list_button">
                </form>
                </dd>

                <dt>重量区间&nbsp;:</dt>
                <dd id="tjcx_01">
                  <a 
                    class="now all" 
                    href="/plus/list.php?tid=2">不限</a>

                </dd>
                <dt>体积区间&nbsp;:</dt>
                <dd id="tjcx_02">
                  <a 
                    class="now all" 
                    href="/plus/list.php?tid=2">不限</a>

                </dd>


                <dt>货源类型&nbsp;:</dt>
                <dd id="tjcx_03">
                  <a 
                    class="now all" 
                    href="/plus/list.php?tid=2">不限</a>
                  <a 
                    class="" 
                    href="/plus/list.php?tid=2">单次急发货源</a>
                  <a 
                    class="" 
                    href="/plus/list.php?tid=2">长期稳定货源</a>
                </dd>




              </dl>
            </div>


          </div>
        </div>
    	
        <div class="right_bt2 huoyuan_bt2 clear">
          <ul>
            <li class="bt_01">出发地&nbsp;→&nbsp;到达地</li>
            <li class="bt_02">货源信息</li>
            <li class="bt_03">会员类型</li>
            <li class="bt_04">人气</li>
            <li class="bt_05">操作</li>

          </ul>
        </div>
    	
        <div class="huo_none"><span>暂无货源信息</span></div>
        <div 
          class="hy_item" 
          style="display: none;">
          <ul>
            <li class="hy_item01"><a 
              id="nr041" 
              target="_blank" 
              href="#"><span><em id="nr042"/>→<em id="nr043"/></span></a></li>
            <li class="hy_item02"><span id="nr044"/><em/><span><i id="nr045"/>件</span><em/><span><i id="nr046"/>公斤</span><em/><span id="nr047"/></li>
            <li class="hy_item03">
              <p class="p1"><img 
                id="list_shiming" 
                src="/templets/default/images/10shiming.png"></p>
              <p class="p2"><img 
                id="list_xinyong" 
                src="/templets/default/images/11xinyong.png"></p>
            </li>
            <li class="hy_item04">
              <p class="p1"><span><em id="nr048"/>浏览量</span></p>
              <p class="p2"><span><em id="nr049">61</em>收藏量</span></p>
            </li>
            <li class="hy_item05"><a 
              id="nr0410" 
              target="_blank"><input value="查看"></a></li>
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
        '/member/js/huo.js'
      ],
      function() {
        $('#pagination1').pagination({
          currentPage: 1,
          totalPage: get_huo(1).totalPage,
          callback: function(current) {
            $('#current1').text(current)
            get_huo(current)
          }
        })
      }
    )
  },
  async fetch({ store, params, $axios, error }) {
    store.commit('member/setId', params.id)
    await store.dispatch('member/GETCOMPANYINFO', params.id)
  }
}
</script>
