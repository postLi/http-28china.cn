<template>
  <div>
    <MemberBanner />
    <div class="main">
      <MemberSidebar />
      <div 
        id="js003" 
        class="right">
        <div class="right_bt1">
          <div class="right_bt1_1"><img src="space/company/images/line.png"><span>物流专线</span></div>
          <div class="huo_tj line_tj">
    			
            <div class="select_con">
              <dl>
                <dt>选择专线线路&nbsp;：</dt>
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
                    id="wlLineFrom" 
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
                    id="wlLineTo" 
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
                    id="search_wlLine1" 
                    name="Submit2" 
                    value="搜本站" 
                    readonly="" 
                    class="list_button button_active">
                  <input 
                    id="search_wlLine2" 
                    name="Submit2" 
                    value="搜全站" 
                    readonly="" 
                    class="list_button">
                </form>
                </dd>

                <dt>发车时间&nbsp;:</dt>
                <dd id="tjcx_01">
                  <a 
                    class="now all" 
                    href="/plus/list.php?tid=2">不限</a>

                </dd>

              </dl>
            </div>


          </div>
 		
 		
        </div>
        <div class="list_tiaoj"><span 
          id="seq0" 
          class="active">默认排序</span><span 
            id="seq1" 
            title="交易量从高到低">交易量</span><span 
              id="seq2" 
              title="运输时效从低到高">运输时效</span><span id="seq3">重货价格</span>
          <div id="tj_price">
            <span id="tj_price1">轻货价格从低到高</span>
            <span id="tj_price2">重货价格从低到高</span>
          </div>
        </div>
        <div class="right_bt2 line_bt2 clear">
          <ul>
            <li class="bt_01">出发地&nbsp;→&nbsp;到达地</li>
            <li class="bt_02">专线信息</li>
            <li class="bt_03">会员类型</li>
            <li class="bt_04">人气</li>
            <li class="bt_05">操作</li>

          </ul>
        </div>
        <div class="line_none"><span>暂无物流专线信息</span></div>
        <div 
          class="line_item" 
          style="display: none;">
          <ul>
            <li class="line_item01"><a 
              id="nr021" 
              target="_blank" 
              href="#"><span><em id="nr022"/>&nbsp;→&nbsp;<em id="nr023"/></span></a></li>
            <li class="line_item02">
              <span>重货:<i id="nr024"/><em>元/公斤</em></span><font>时效:<i id="nr025"/></font>
              <span>轻货:<i id="nr026"/><em>元/立方</em></span><font>最低一票:<i id="nr027"/></font>
            </li>
            <li class="line_item03">
              <p class="p1"><img 
                id="list_shiming" 
                src="/templets/default/images/10shiming.png"></p>
              <p class="p2"><img 
                id="list_xinyong" 
                src="/templets/default/images/11xinyong.png"></p>
              <p class="p3"><img 
                id="list_danbao" 
                src="/templets/default/images/12danbao.png"></p>
            </li>
            <li class="line_item04">
              <p class="p1"><span><em id="nr028">9224</em>浏览量</span></p>
              <p class="p2"><span><em id="nr029">986</em>收藏量</span></p>
            </li>
            <li class="line_item05">
              <a 
                id="nr_order" 
                target="_blank"><input 
                  id="fahuo" 
                  value="下单"></a>
              <a id="nr0210"><input value="查看"></a>
            </li>
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
        '/member/js/line.js'
      ],
      function() {
        $('.list_tiaoj span').click(function() {
          //alert("1");
          $('.list_tiaoj span').removeClass('active')
          $(this).toggleClass('active')
        })
        $('#pagination1').pagination({
          currentPage: 1,
          totalPage: lineId(1).totalPage,
          callback: function(current) {
            $('#current1').text(current)
            lineId(current)
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
