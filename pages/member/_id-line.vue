<template>
  <div>
    <MemberBanner />
    <div class="main">
      <MemberSidebar />
      <div 
        id="js003" 
        class="right">
        <div class="right_bt1">
          <div class="right_bt1_1"><img src="/member/images/line.png"><span>物流专线</span></div>
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
                    src="/images/02jiantou.png">
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
                    href="/huoyuan">不限</a>

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
        <div 
          v-show="$store.state.member.lineList.length === 0" 
          class="line_none"><span>暂无物流专线信息</span></div>
        <div 
          v-for="(item, index) in $store.state.member.lineList"
          :key="index"
          class="line_item" 
        >
          <ul>
            <li class="line_item01"><a 
              id="nr021" 
              :href="'/zhuanxian/detail?id=' + item.id + '&publishId=' + item.companyId" 
              target="_blank"><span><em id="nr022">{{ item.startCity || '' }}{{ item.startArea || '' }}</em>&nbsp;→&nbsp;<em id="nr023">{{ item.endCity || '' }}{{ item.endArea || '' }}</em></span></a></li>
            <li class="line_item02">
              <span>重货:<i id="nr024">{{ findPrice(item.rangePrices, '1') }}</i><em>元/公斤</em></span><font>时效:<i id="nr025">{{ item.transportAging }}{{ item.transportAgingUnit }}</i></font>
              <span>轻货:<i id="nr026">{{ findPrice(item.rangePrices, '0') }}</i><em>元/立方</em></span><font>最低一票:<i id="nr027">{{ item.lowerPrice || '面议' }}</i></font>
            </li>
            <li class="line_item03">
              <p class="p1"><img 
                id="list_shiming" 
                src="/images/list_wlzx/10shiming.png"></p>
              <p class="p2"><img 
                id="list_xinyong" 
                src="/images/list_wlzx/11xinyong.png"></p>
              <p class="p3"><img 
                id="list_danbao" 
                src="/images/list_wlzx/12danbao.png"></p>
            </li>
            <li class="line_item04">
              <p class="p1"><span><em id="nr028">{{ item.browseNumber }}</em>浏览量</span></p>
              <p class="p2"><span><em id="nr029">{{ item.assessNumber }}</em>收藏量</span></p>
            </li>
            <li class="line_item05">
              <a 
                id="nr_order"
                :href="$store.state.member.id + '-order?id=' + item.id + '&publishId=' + item.companyId" 
                target="_blank"><input 
                  id="fahuo"
                  readonly 
                  value="下单"></a>
              <a 
                id="nr0210" 
                :href="'/zhuanxian/detail?id=' + item.id + '&publishId=' + item.companyId"><input 
                  readonly 
                  value="查看"></a>
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
    link: [
      { rel: 'stylesheet', href: '/member/css/list.css' },
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' }
    ]
  },
  layout: 'member',
  mounted() {
    let _this = this
    let uid = this.$store.state.member.id
    seajs.use(
      ['/member/js/jquery.pagination.min.js', '/index/js/city-picker.data.js'],
      function() {
        seajs.use(
          [
            '/index/js/city-picker.js',
            // '/index/js/collection.js',

            '/member/js/line.js'
          ],
          function() {
            $('.list_tiaoj span').click(function() {
              //alert("1");
              $('.list_tiaoj span').removeClass('active')
              $(this).toggleClass('active')
            })
            _this.setPagination()

            //专线搜索 S
            $('#search_wlLine1').click(function() {
              var list1 = [],
                list2 = []
              $('#wlLineFrom .select-item').each(function(i, e) {
                list1.push($(this).text())
              })
              var startp = list1[0]
              var startc = list1[1]
              var starta = list1[2]

              $('#wlLineTo .select-item').each(function(i, e) {
                list2.push($(this).text())
              })
              var endp = list2[0]
              var endc = list2[1]
              var enda = list2[2]
              if (!startp) {
                startp = ''
              }
              if (!startc) {
                startc = ''
              }
              if (!starta) {
                starta = ''
              }
              if (!endp) {
                endp = ''
              }
              if (!endc) {
                endc = ''
              }
              if (!enda) {
                enda = ''
              }
              startp = encodeURI(startp)
              startc = encodeURI(startc)
              starta = encodeURI(starta)
              endp = encodeURI(endp)
              endc = encodeURI(endc)
              enda = encodeURI(enda)
              window.location =
                uid +
                '-line?startp=' +
                startp +
                '&startc=' +
                startc +
                '&starta=' +
                starta +
                '&endp=' +
                endp +
                '&endc=' +
                endc +
                '&enda=' +
                enda
            })

            // 搜索全站
            $('#search_wlLine2').click(function() {
              var list1 = [],
                list2 = []
              $('#wlLineFrom .select-item').each(function(i, e) {
                list1.push($(this).text())
              })
              var startp = list1[0]
              var startc = list1[1]
              var starta = list1[2]

              $('#wlLineTo .select-item').each(function(i, e) {
                list2.push($(this).text())
              })
              var endp = list2[0]
              var endc = list2[1]
              var enda = list2[2]
              if (!startp) {
                startp = ''
              }
              if (!startc) {
                startc = ''
              }
              if (!starta) {
                starta = ''
              }
              if (!endp) {
                endp = ''
              }
              if (!endc) {
                endc = ''
              }
              if (!enda) {
                enda = ''
              }
              startp = encodeURI(startp)
              startc = encodeURI(startc)
              starta = encodeURI(starta)
              endp = encodeURI(endp)
              endc = encodeURI(endc)
              enda = encodeURI(enda)
              var url =
                '/zhuanxian/list?startp=' +
                startp +
                '&startc=' +
                startc +
                '&starta=' +
                starta +
                '&endp=' +
                endp +
                '&endc=' +
                endc +
                '&enda=' +
                enda
              window.open(url)
            })
          }
        )
      }
    )
  },
  async fetch({ store, params, $axios, error, querys }) {
    store.commit('member/setId', params.id)
    await store.dispatch('member/GETCOMPANYINFO', params.id)
    await store.dispatch('member/GETCOMPANYLINEINFO', {
      publishId: params.id,
      pageSize: 10,
      currentPage: 1
    })
  },
  methods: {
    setPagination() {
      $('#pagination1').pagination({
        currentPage: 1,
        count: 10,
        totalPage: this.$store.state.member.lineTotal,
        callback: function(current) {
          $('#current1').text(current)
          this.$store.dispatch('member/GETCOMPANYLINEINFO', {
            publishId: this.$store.state.member.company.id,
            pageSize: 10,
            currentPage: current
          })
        }
      })
    },

    findPrice(arr, type) {
      let find = 0
      if (arr.length) {
        arr.forEach(item => {
          if (item.type === type && item.startVolume === 0) {
            find = item.discountPrice || item.primeryPrice
          }
        })
        return find
      } else {
        return 0
      }
    }
  }
}
</script>
