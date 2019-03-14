<template>
  <div>
    <MemberBanner />
    <div class="main">
      <MemberSidebar />
      <div 
        id="js005" 
        class="right">
        <div class="right_bt1">
          <div class="right_bt1_1"><img src="/member/images/huo.png"><span>货源信息</span></div>
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
                    src="/images/02jiantou.png">

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
                  <SelectType 
                    v-model="weight"
                    :list="AF03801" />
                </dd>
                <dt>体积区间&nbsp;:</dt>
                <dd id="tjcx_02">
                  <SelectType 
                    v-model="volumn"
                    :list="AF03802" />
                </dd>


                <dt>货源类型&nbsp;:</dt>
                <dd id="tjcx_03">
                  <SelectType 
                    :list="AF04907" 
                    v-model="orderClass"
                    get-code />
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
    	
        <div
          class="huo_none" 
          v-if="list.length < 1"><span>暂无货源信息</span></div>
        <div 
          v-else
          class="hy_item"
          v-for="(item, index) in list" 
          :key="index" 
        >
          <ul 
          >
            <li class="hy_item01"><a 
              :href="'/zhuanxian/detail?id=' + item.id"
              id="nr041" 
              target="_blank" 
            ><span><em 
              :title="item.startProvinceCityArea" 
              id="nr042">{{ item.startProvinceCityArea }}</em>→<em 
                :title="item.endProvinceCityArea" 
                id="nr043">{{ item.endProvinceCityArea }}</em></span></a></li>
            <li class="hy_item02"><span 
              :title="item.goodsTypeName" 
              id="nr044"
            >{{ item.goodsTypeName }}</span><em/><span><i id="nr045">{{ item.goodsNum }}</i>件</span><em/><span><i id="nr046">{{ item.goodsWeight }}</i>公斤</span><em/><span id="nr047">{{ item.goodsVolume }}立方</span></li>
            <li class="hy_item03">
              <p class="p1"><img 
                id="list_shiming" 
                src="/images/10shiming.png"></p>
              <p class="p2"><img 
                id="list_xinyong" 
                src="/images/11xinyong.png"></p>
            </li>
            <li class="hy_item04">
              <p class="p1"><span><em id="nr048">{{ item.browseNumber }}</em>浏览量</span></p>
              <p class="p2"><span><em id="nr049">{{ item.collectNumber }}</em>收藏量</span></p>
            </li>
            <li class="hy_item05"><a 
              id="nr0410"
              :href="'/zhuanxian/detail?id=' + item.id" 
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
import SelectType from '~/components/common/selectType'
import MemberSidebar from '~/components/member/sidebar2'

export default {
  components: {
    MemberBanner,
    MemberSidebar,
    SelectType
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
      volumn: [],
      weight: [],
      orderClass: '',
      query: {
        goodsVolumeLower: '',
        goodsVolumeUpper: '',
        goodsWeightLower: '',
        goodsWeightUpper: '',
        orderClass: '',
        endArea: '',
        endCity: '',
        endProvince: '',
        startArea: '',
        startCity: '',
        startProvince: ''
      }
    }
  },
  computed: {
    list() {
      return this.$store.state.member.huoList.list
    },
    total() {
      return this.$store.state.member.huoList.total
    },
    AF03801() {
      return this.$store.state.dictList.AF03801
    },
    AF03802() {
      return this.$store.state.dictList.AF03802
    },
    AF04907() {
      return this.$store.state.dictList.AF04907
    }
  },

  mounted() {
    let _this = this
    seajs.use(
      ['/js/jquery.pagination.min.js', '/index/js/city-picker.data.js'],
      function() {
        seajs.use(
          [
            '/index/js/city-picker.js',
            '/index/js/collection.js'
            // '/member/js/huo.js'
          ],
          function() {
            var startp = $.getParams('startp')
            var endp = $.getParams('endp')
            var startc = $.getParams('startc')
            var endc = $.getParams('endc')
            var starta = $.getParams('starta')
            var enda = $.getParams('enda')
            $('#HuoyuanFrom input').citypicker({
              province: startp,
              city: startc,
              district: starta
            })
            $('#HuoyuanTo input').citypicker({
              province: endp,
              city: endc,
              district: enda
            })
            //货源搜索 S
            $('#search_huoyuan1').click(function() {
              var list1 = [],
                list2 = []
              $('#HuoyuanFrom .select-item').each(function(i, e) {
                list1.push($(this).text())
              })
              var startp = list1[0] || ''
              var startc = list1[1] || ''
              var starta = list1[2] || ''

              $('#HuoyuanTo .select-item').each(function(i, e) {
                list2.push($(this).text())
              })
              var endp = list2[0] || ''
              var endc = list2[1] || ''
              var enda = list2[2] || ''

              _this.query.startProvince = encodeURI(startp)
              _this.query.startCity = encodeURI(startc)
              _this.query.startArea = encodeURI(starta)
              _this.query.endProvince = encodeURI(endp)
              _this.query.endCity = encodeURI(endc)
              _this.query.endArea = encodeURI(enda)
              // 设置参数
              // 重新请求
              // 重新设置分页
              _this.getParam()
              _this.fetchData(1).then(res => {
                _this.initPage()
              })

              /* window.location =
                uid +
                '-huo.html?startp=' +
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
                enda */
            })
            // 搜全站
            $('#search_huoyuan2').click(function() {
              var list1 = [],
                list2 = []
              $('#HuoyuanFrom .select-item').each(function(i, e) {
                list1.push($(this).text())
              })
              var startp = list1[0] || ''
              var startc = list1[1] || ''
              var starta = list1[2] || ''

              $('#HuoyuanTo .select-item').each(function(i, e) {
                list2.push($(this).text())
              })
              var endp = list2[0] || ''
              var endc = list2[1] || ''
              var enda = list2[2] || ''

              startp = encodeURI(startp)
              startc = encodeURI(startc)
              starta = encodeURI(starta)
              endp = encodeURI(endp)
              endc = encodeURI(endc)
              enda = encodeURI(enda)
              window.open(
                '/huoyuan?startp=' +
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
              )
            })
            _this.initPage()
          }
        )
      }
    )
  },
  methods: {
    getParam() {
      this.query.orderClass = this.orderClass
      this.query.goodsVolumeLower = this.volumn[0] || ''
      this.query.goodsVolumeUpper = this.volumn[1] || ''
      this.query.goodsWeightLower = this.weight[0] || ''
      this.query.goodsWeightUpper = this.weight[1] || ''
    },
    fetchData(pnum) {
      return this.$store.dispatch('member/getCompanyHuo', {
        shipperId: this.$route.params.id,
        pageSize: 10,
        currentPage: pnum,
        ...this.query
      })
    },
    initPage() {
      let _this = this
      $('#pagination1').pagination({
        currentPage: 1,
        totalPage: _this.total,
        callback: function(current) {
          $('#current1').text(current)
          _this.fetchData(current)
        }
      })
    }
  },
  fetch({ store, params, $axios, error }) {
    store.commit('member/setId', params.id)
    return Promise.all([
      store.dispatch('member/GETCOMPANYINFO', params.id).catch(err => {
        if (err.type === 'network') {
          error({ statusCode: 500, message: err.msg })
        } else {
          error({ statusCode: 404, message: err.msg })
        }
      }),
      store.dispatch('getDictList', {
        name: 'AF03801'
      }),
      store.dispatch('getDictList', {
        name: 'AF03802'
      }),
      store.dispatch('getDictList', {
        name: 'AF04907'
      }),
      store.dispatch('member/getCompanyHuo', {
        shipperId: params.id,
        pageSize: 10,
        currentPage: 1
      })
    ])
  }
}
</script>
