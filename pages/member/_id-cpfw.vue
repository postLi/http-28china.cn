<template>
  <div>
    <MemberBanner />
    <div class="main">
      <MemberSidebar />
      <div class="right main_nr">
        <div class="nr_bt">
          <div class="nr_bt1"><span>主营产品</span></div>
        </div>	
        <div class="nr">
          <ul >
            <li 
              v-if="psdata.indexOf('AF02701') !== -1"
              id="cp01" 
              class="cp" >
              <p class="p1">
              <em/><span style="float: left;">整车运输</span></p>
              <p class="p2">据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</p>
            </li>
    	    
            <li 
              v-if="psdata.indexOf('AF02702') !== -1"
              id="cp02" 
              class="cp">
              <p class="p1">
              <em/><span style="float: left;">零担运输</span></p>
              <p class="p2">客户可享受“量多价优，全程无忧”的超值服务。</p>
            </li>
    	    
            <li 
              v-if="psdata.indexOf('AF02703') !== -1"
              id="cp03" 
              class="cp">
              <p class="p1">
              <em/><span style="float: left;">专线运输</span></p>
              <p class="p2">据重量和体积及车型需求，快速调配优质返程车，发货又快又省钱！</p>
            </li>
            <li 
              v-if="psdata.indexOf('AF02704') !== -1"
              id="cp04" 
              class="cp">
              <p class="p1" >
              <em/><span style="float: left;">特大货物运输</span></p>
              <p class="p2">以客为本、服务至上，可靠、安全的大件货运运输网络以及先进的管理技术</p>
            </li>
            <li 
              v-if="psdata.indexOf('AF02705') !== -1"
              id="cp05" 
              class="cp">
              <p class="p1">
              <em/><span style="float: left;">大件运输</span></p>
              <p class="p2">提供一体化综合运输服务，以专业的大件运输方案，限度降低运输成本，满足客户对 运输服务更高层次的需求</p>
            </li>
            <li 
              v-if="psdata.indexOf('AF02706') !== -1"
              id="cp06" 
              class="cp">
              <p class="p1">
              <em/><span style="float: left;">集装箱运输</span></p>
              <p class="p2">安全、迅速、简便、价廉”，实现快速、低耗、高效率及高效益地完成运输生产过程并将货物送达目的地交付给收货人</p>
            </li>
            <li 
              v-if="psdata.indexOf('AF02707') !== -1"
              id="cp07" 
              class="cp">
              <p class="p1">
              <em/><span style="float: left;">冷藏运输</span></p>
              <p class="p2">在运输全过程中，无论是装卸搬运、变更运输方式、更换包装设备等环节，都使所运输货物始终保持一定温度的运输。</p>
            </li>
            <li 
              v-if="psdata.indexOf('AF02708') !== -1"
              id="cp08" 
              class="cp">
              <p class="p1">
              <em/><span style="float: left;">危险品运输</span></p>
              <p class="p2">危险品是易燃易爆有强烈腐蚀性的物品的统称。包含：爆炸品、压缩气体和液化气体、易燃液体、易燃固体、自燃物品和遇湿易燃物品、氧化剂和有机过氧化物、毒害品和感染性物品、放射性物品、腐蚀品</p>
            </li>
            <li 
              v-if="psdata.indexOf('AF02709') !== -1"
              id="cp09" 
              class="cp">
              <p class="p1">
              <em/><span style="float: left;">仓储</span></p>
              <p class="p2">依托自身强大的仓储和运输网络资源，为您提供一站式的供应链物流服务。</p>
            </li>
    	
    	
    	
          </ul>
        </div>
		
      </div>

    </div>
  </div>
</template>
<script>
import MemberBanner from '~/components/member/banner'
import MemberSidebar from '~/components/member/sidebar'

export default {
  components: {
    MemberBanner,
    MemberSidebar
  },
  computed: {
    opdata() {
      return this.$store.state.member.company.otherServiceCodeList
    },
    psdata() {
      return this.$store.state.member.company.productServiceCodeList
    }
  },
  head: {
    link: [{ rel: 'stylesheet', href: '/member/css/list.css' }]
  },
  layout: 'member',
  mounted() {
    seajs.use(['/member/js/index.js', '/js/collection.js'])
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
