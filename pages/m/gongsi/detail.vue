<template>
  <div>
    <MyTop
      :show-line="false"
      color="#ffffff"
      back-color="#2F3241">
      <div class="flex_3 f-36 flex">公司详情</div>
    </MyTop>
    <div class="top p_r">
      <div class="b_c"/>
      <div class="body_content p_r">
        <img
          src="/m/gongsi/mingpian_bg_normal.png"
          class="width_100">
        <div class="width_100 height_100 top_content">
          <img
            class="img"
            style="width: 1.18rem"
            src="/m/gongsi/youzhi.png" >
          <div class="f-42 c_b47">{{ info.companyName }}</div>
          <div class="margin_t_20 flex_a">
            <div class="circle f-20 flex">{{ info.authStatusName }}</div>
            <div class="f-24 c_e2a margin_l_20 margin_r_20">综合信誉值</div>
            <img
              style="width: 0.3rem"
              class="margin_l_20"
              src="/m/gongsi/xinyuzhi.png">
            <img
              style="width: 0.3rem"
              class="margin_l_20"
              src="/m/gongsi/xinyuzhi.png">
          </div>

          <div style="margin-top: 0.5rem">
            <div class="flex_a">
              <img
                class="img-item"
                src="/m/gongsi/dizhi1.png" >
              <div class="margin_l_20 f-26 c_b47 oneElisp">{{ info.address }}</div>
            </div>

            <div class="flex_a margin_t_20">
              <img
                class="img-item"
                src="/m/gongsi/renyuan1.png" >
              <div class="margin_l_20 f-26 c_b47">业务咨询：{{ info.contactsName }} <span class="f_b">{{ info.mobile }}</span> </div>
            </div>

            <div class="flex_a margin_t_20">
              <img
                class="img-item"
                src="/m/gongsi/rexian1.png" >
              <div class="margin_l_20 f-26 c_b47">服务热线：<span class="f_b">{{ info.contactsTel }}</span></div>
            </div>
          </div>

          <div class="flex_sb margin_t_20">
            <div class="f-24 c_b47">{{ info.browseNumber }}浏览</div>
            <div class="fav f-28 f_w flex">
              <img
                src="/m/gongsi/weishoucang.png"
                style="width: 0.25rem"
              >
              <span class="margin_l_10">收 藏</span>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="body_content">
      <div class="flex item1 f-26 margin_t_10">
        此专线物流公司诚信值超过<span>{{ linedataE.greaterCreditRate }}%</span>的同行
      </div>
    </div>
    <div class="body_content">
      <div class="f-32 title_h flex_a f_w_b">产品与服务</div>
    </div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in AF027result"
          :key="index"
          class="swiper-slide f-24 swiper-h">
          <div
            class="flex_f flex_a swiper-item"
            v-for="(item1, index1) in item"
            :key="index1"
          >
            <img
              :src="item1.img"
              style="width: 50%">
            {{ item1.name }}
          </div>
        </div>
      </div>
      <div
        class="swiper-pagination"
        style="bottom: 0"/>
    </div>
    <div class="body_content">
      <div class="f-32 title_h flex_a f_w_b">增值服务</div>
    </div>
    <div v-swiper:mySwiper1="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in AF025result"
          :key="index"
          class="swiper-slide f-24 swiper-h">
          <div
            class="flex_f flex_a swiper-item"
            v-for="(item1, index1) in item"
            :key="index1"
          >
            <img
              :src="item1.img"
              style="width: 50%">
            {{ item1.name }}
          </div>
        </div>
      </div>
      <div
        class="swiper-pagination"
        style="bottom: 0"/>
    </div>
    <div class="divide"/>
    <div class="body_content">
      <div class="flex_sb item_title">
        <div class="f-32 f_w_b">物流专线</div>
        <div
          class="f-22 f_b flex_a"
          v-if="line.length !== 0"
          @click="toLine()"
        >
          查看更多
          <img
            src="/m/gongsi/tiaozhuan.png"
            style="width: 0.12rem">
        </div>
      </div>
      <div
        class="item_h1 flex_saf flex_f"
        v-for="(item,index) in line"
        :key="index">
        <div class="f-26 flex_a">{{ item.startCity || '' }}{{ item.startArea || '' }} -> {{ item.endCity || '' }}{{ item.endArea || '' }}
          <span
            class="margin_l_20 f_w f-20 f_w_b flex rs"
            v-if="item.rangeType === 'AF03302'">优 势</span>
          <span
            class="margin_l_20 f_w f-20 f_w_b flex qs"
            v-if="item.rangeType === 'AF03303'">强 势</span>
        </div>
        <div class="flex_a f-20">
          <i class="flex">时效{{ item.transportAging }}{{ item.transportAgingUnit }}</i>
          <i class="flex margin_l_20">{{ item.browseNumber }}人浏览</i>
        </div>
        <div class="footer f-24">
          轻货：{{ findPrice(item.rangePrices, '0') }}元/立方 重货：{{ findPrice(item.rangePrices, '1') }}元/公斤
        </div>
      </div>
    </div>
    <div class="divide"/>
    <div class="body_content">
      <div class="flex_sb item_title">
        <div class="f-32 f_w_b">网点信息</div>
        <div
          class="f-22 f_b flex_a"
          v-if="companyPoint.length !== 0"
          @click="$router.push('/m/gongsi/wangdian?id='+ $route.query.id)"
        >
          查看更多
          <img
            src="/m/gongsi/tiaozhuan.png"
            style="width: 0.12rem">
        </div>
      </div>
      <div
        class="item_h2 flex_js flex_f"
        v-for="(item,index) in companyPoint"
        :key="index">
        <div class="f-30 f_b">网点{{ index + 1 }}:{{ item.pointName }}</div>
        <div class="f-26 flex_r c-3"><img src="/m/gongsi/wangdian_dz.png">{{ item.address }} </div>
        <div class="f-26 flex_a c-3"><img src="/m/gongsi/wangdian_xm.png">陈升 {{ item.mobile }}</div>
        <div class="f-26 flex_a c-3"><img src="/m/gongsi/wangdian_dh.png">{{ item.telNum ? item.telNum : '无' }}</div>
      </div>
    </div>
    <div class="divide"/>
    <div class="body_content">
      <div class="f-32 title_h flex_a f_w_b">企业简介</div>
      <div v-if="info.companyDes">
        <div
          class="f-26 info c-3"
          v-if="!showAll">
          {{ info.companyDes.length >200 ? info.companyDes.substring(0,200) + '...' : info.companyDes }}
          <span
            class="f_b margin_l_10"
            @click="showAll = true"
            v-if="info.companyDes.length > 200">详情</span>
        </div>
        <div
          class="f-26 info c-3"
          v-else>
          {{ info.companyDes }}
          <span
            class="f_b margin_l_10"
            @click="showAll = false">收起</span>
        </div>
      </div>
      <div
        v-else
        class="f-26 info c-3">
        <div
          class="f-26 info c-3"
          v-if="!showAll">
          {{ companyDes.length >200 ? companyDes.substring(0,200) + '...' : companyDes }}
          <span
            class="f_b margin_l_10"
            @click="showAll = true"
            v-if="companyDes.length > 200">详情</span>
        </div>
        <div
          class="f-26 info c-3"
          v-else>
          {{ companyDes }}
          <span
            class="f_b margin_l_10"
            @click="showAll = false">收起</span>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
import MyTop from '../../../components/m/myTop'
import 'swiper/dist/css/swiper.css'
export default {
  components: { MyTop },
  layout: 'm',
  data() {
    return {
      showAll: false,
      companyDes:
        '本公司是一家业内领先的现代物流运输企业，我们致力于为国内的制造业客户和商贸流通业务提供专业且有价格竞争力的运输、仓储、包装、配送、代收代付等相关物流服务。我们目前处在迅猛发展阶段，以快速的增长速度在大力扩张货物运输业务范围，公司的专线运输范围基本覆盖华中，华东和华北三个大区的各省市县，承揽广州到湖南，湖北，上海，江苏，河南，北京，山东，天津全境的整车及零担业务，公司通过引入先进的供应链物流管理系统，已经建立起帮助客户贯穿生产、物流、仓储、代理商、销售商之间信息流、物流、商流、资金流的金色桥梁。\n' +
        '\n' +
        '        经过多年的发展，本公司目前拥有一支30多人的专业化的物流管理和从业人员队伍。公司管理层成员有大学专科以上学历、物流管理及相关专业本科及以上学历的优秀人才，公司全资拥有18辆斯堪尼亚、沃尔沃高端重卡，长期协议合作的干线和城配运输车辆超过890辆，车源丰富。公司自成立以来就一直秉承服务为先的宗旨，不断致力于物流运输网络的建设和社会资源的整合，现拥有广州至上海，河南，北京，湖北，山东，天津全境的往返成熟物流线路46条，单一线路基本可以实现一天发车2车以上，部分强势路线（比如广州-长沙，广州-北京等）可以一天发车4车以上。在专线运输时效和货物无损签收方面一直居于同业领先地位。\n' +
        '\n' +
        '        本公司在大力发展KA物流业务的同时，公司于陆续引入先进的28TMS物流管理系统、OA系统和CRM系统，运用多种物流智能硬件和现代物联网技术手段不断提升管理效率和降低运输成本。\n' +
        '\n' +
        '        随着公司的不断发展和长期积累的经验，公司优秀的物流服务深得广大客户的好评。本公司将以“高效快捷、客户至上、信誉第一”为经营理念，以“适价经营、质量保证”求发展以及经验丰富的管理人员和专业高素质的员工队伍，竭诚为客户持续提供优质满意的运输服务。\n' +
        '\n' +
        '        我们的承诺 ：给我们一份信任，还您百分百满意！',
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my_bullet',
          bulletActiveClass: 'my_active'
        }
      }
    }
  },
  async asyncData({ $axios, app, query }) {
    let AF027result = [],
      AF025result = []
    const info = await $axios.get('/28-web/logisticsCompany/info/' + query.id)
    if (info.data.status === 200) {
      let myOtherServiceCodeList = [],
        myProductServiceCodeList = []
      info.data.data.productServiceCodeList.forEach(item => {
        let obj = {}
        switch (item) {
          case 'AF02701':
            obj.img = '/m/gongsi/zhencheys.png'
            obj.name = '整车运输'
            break
          case 'AF02702':
            obj.img = '/m/gongsi/lingdanys.png'
            obj.name = '零担运输'
            break
          case 'AF02703':
            obj.img = '/m/gongsi/zhuanxianys.png'
            obj.name = '专线运输'
            break
          case 'AF02704':
            obj.img = '/m/gongsi/tedahwys.png'
            obj.name = '特大货物运输'
            break
          case 'AF02705':
            obj.img = '/m/gongsi/dajianys.png'
            obj.name = '大件运输'
            break
          case 'AF02706':
            obj.img = '/m/gongsi/jizhuangxys.png'
            obj.name = '集装箱运输'
            break
          case 'AF02707':
            obj.img = '/m/gongsi/lengcangys.png'
            obj.name = '冷藏运输'
            break
          case 'AF02708':
            obj.img = '/m/gongsi/weixianpys.png'
            obj.name = '危险品运输'
            break
          case 'AF02709':
            obj.img = '/m/gongsi/weixianpys.png'
            obj.name = '仓储'
            break
        }
        myProductServiceCodeList.push(obj)
      })
      info.data.data.myProductServiceCodeList = myProductServiceCodeList
      for (
        let i = 0, len = info.data.data.myProductServiceCodeList.length;
        i < len;
        i += 4
      ) {
        AF027result.push(
          info.data.data.myProductServiceCodeList.slice(i, i + 4)
        )
      }
      info.data.data.otherServiceCodeList.forEach(item => {
        let obj = {}
        switch (item) {
          case 'AF02504':
            obj.img = '/m/gongsi/songhuosl.png'
            obj.name = '送货上门'
            break
          case 'AF02502':
            obj.img = '/m/gongsi/baojiays.png'
            obj.name = '保价运输'
            break
          case 'AF02503':
            obj.img = '/m/gongsi/yunfeidf.png'
            obj.name = '运费到付'
            break
          case 'AF02501':
            obj.img = '/m/gongsi/daishouhk.png'
            obj.name = '代收货款'
            break
          case 'AF02505':
            obj.img = '/m/gongsi/shangmenth.png'
            obj.name = '上门提货'
            break
          case 'AF02506':
            obj.img = '/m/gongsi/kaifap.png'
            obj.name = '开发票'
            break
          case 'AF02507':
            obj.img = '/m/gongsi/qiandanhs.png'
            obj.name = '签单回收'
            break
          case 'AF02508':
            obj.img = '/m/gongsi/shixiaobz.png'
            obj.name = '时效保障'
            break
        }
        myOtherServiceCodeList.push(obj)
      })
      info.data.data.myOtherServiceCodeList = myOtherServiceCodeList
      for (
        let i = 0, len = info.data.data.myOtherServiceCodeList.length;
        i < len;
        i += 4
      ) {
        AF025result.push(info.data.data.myOtherServiceCodeList.slice(i, i + 4))
      }
    }
    // 物流公司综合信息
    const linedataE = await $axios.post(
      `/28-web/logisticsCompany/comprehensive?companyId=${query.id}`
    )
    // 网点信息
    const companyPoint = await $axios.post(
      '/28-web/pointNetwork/findCompanyNet',
      { companyId: query.id, pageSize: 2, currentPage: 1 }
    )
    // 专线信息
    const line = await $axios.post('/28-web/range/company/list', {
      publishId: query.id,
      pageSize: 2,
      currentPage: 1
    })
    return {
      AF027result: AF027result ? AF027result : [],
      AF025result: AF025result ? AF025result : [],
      info: info.data.status === 200 ? info.data.data : {},
      linedataE: linedataE.data.status === 200 ? linedataE.data.data : [],
      companyPoint:
        companyPoint.data.status === 200 ? companyPoint.data.data.list : [],
      line: line.data.status === 200 ? line.data.data.list : []
    }
  },
  methods: {
    toLine() {
      this.$store.commit('m/gongsi/line/setData', {
        name: 'currentPage',
        data: 1
      })
      this.$store.commit('m/gongsi/line/setData', {
        name: 'orderBy',
        data: { name: '信誉最高', value: 'creditDesc' }
      })
      this.$store.commit('m/gongsi/line/setData', {
        name: 'startName',
        data: ['', '', '']
      })
      this.$store.commit('m/gongsi/line/setData', {
        name: 'endName',
        data: ['', '', '']
      })
      this.$store.commit('m/gongsi/line/setData', {
        name: 'rangeList',
        data: []
      })
      this.$store.commit('m/gongsi/line/setData', {
        name: 'pages',
        data: ''
      })
      this.$store.commit('m/gongsi/line/setData', {
        name: 'scrollTo',
        data: 0
      })
      this.$router.push('/m/gongsi/line?id=' + this.$route.query.id)
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
<style scoped lang="scss">
.top {
  height: 4.74rem;
  overflow: hidden;
  .b_c {
    background: #2f3241;
    width: 10rem;
    height: 2.44rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -0.02rem;
    z-index: -1;
    border-radius: 0 0 50% 50%;
  }
  .top_content {
    position: absolute;
    top: 0;
    padding: 0.36rem;
    box-sizing: border-box;
    .img {
      position: absolute;
      top: 0;
      right: 5%;
    }
    .circle {
      height: 0.32rem;
      background: rgba(235, 146, 82, 1);
      border-radius: 0.2rem;
      font-weight: 500;
      color: rgba(255, 100, 43, 1);
      line-height: 0.28rem;
      padding: 0 0.1rem;
    }
    .img-item {
      width: 0.46rem;
    }
    .fav {
      width: 1.5rem;
      height: 0.52rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.1rem;
      border: 0.02rem solid rgba(255, 255, 255, 1);
    }
  }
}
.item1 {
  height: 0.9rem;
  color: #42474b;
  background: linear-gradient(
    50deg,
    rgba(252, 246, 240, 1) 0%,
    rgba(252, 242, 215, 1) 100%
  );
  border-radius: 0.08rem;
  span {
    color: #ff642b;
  }
}
.body_content {
  width: 95%;
  margin: 0 auto;
}
.c_b47 {
  color: #b4760e;
}
.c_e2a {
  color: #e2a237;
}
.item_title {
  height: 0.8rem;
}
.item_h1 {
  height: 2rem;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  i {
    height: 0.32rem;
    background: rgba(238, 238, 238, 1);
    border-radius: 0.16rem;
    color: rgba(138, 141, 143, 1);
    line-height: 0.28rem;
    padding: 0 0.2rem;
  }
  .footer {
    color: rgba(255, 68, 0, 1);
    line-height: 0.33rem;
  }
}
.item_h2 {
  height: 2.72rem;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  padding: 0.3rem 0;
  box-sizing: border-box;
  img {
    height: 0.31rem;
    margin-right: 0.2rem;
  }
}
.qs {
  width: 0.66rem;
  height: 0.32rem;
  background: rgba(60, 146, 239, 1);
  border-radius: 0.04rem;
}
.rs {
  width: 0.66rem;
  height: 0.32rem;
  background: rgba(250, 211, 56, 1);
  border-radius: 0.04rem;
}
.divide {
  height: 0.1rem;
  background: #f5f5f5;
}
.swiper-h {
  height: 1.6rem;
  .swiper-item {
    width: 25%;
    box-sizing: border-box;
    float: left;
  }
}
.title_h {
  height: 0.88rem;
}
.swiper-wrapper img {
  margin-bottom: 0.1rem;
}
.info {
  line-height: 0.35rem;
  margin-bottom: 0.77rem;
  text-indent: 2em;
}
</style>
<style>
.my_active {
  background: rgba(187, 220, 255, 1) !important;
}
.my_bullet {
  width: 0.4rem;
  height: 0.06rem;
  background: rgba(246, 246, 246, 1);
  border-radius: 0.05rem;
  display: inline-block;
  margin: 0 5px;
}
</style>
