<template>
  <div>
    <MemberBanner />
    <div class="main">
      <MemberSidebar />
      <div class="right main_nr">
        <div class="nr_bt">
          <div class="nr_bt1"><span>增值服务</span></div>
        </div>	
        <div class="nr">
          <ul >
            <li 
              v-if="opdata.indexOf('AF02501') !== -1"
              id="fw01" 
              class="fw">
              <p class="p1">
              <em/><span style="float: left;">送货上门</span></p>
              <p class="p2">收取客户货物后，将货物送到指定收件对象的服务。</p>
            </li>
    	    
            <li 
              v-if="opdata.indexOf('AF02502') !== -1"
              id="fw02" 
              class="fw">
              <p class="p1">
              <em/><span style="float: left;">保价运输</span></p>
              <p class="p2">保价运输是我司与您共同确定的以托运人申明货物价值为基础的一种特殊运输方式，您向我司声明其托运货物的实际价值，按保价运输的货物，托运人除缴纳运输费用外，按照规定缴纳一定的保价费用，若货物在运输过程中出险，我司将按照托运人的声明价值赔偿一定损失。</p>
            </li>
    	    
            <li 
              v-if="opdata.indexOf('AF02503') !== -1"
              id="fw03" 
              class="fw">
              <p class="p1">
              <em/><span style="float: left;">运费到付</span></p>
              <p class="p2">为您提供派送末端支付运费服务，当货物到达收货人时由收货人支付运费。</p>
            </li>
            <li 
              v-if="opdata.indexOf('AF02504') !== -1"
              id="fw04" 
              class="fw">
              <p class="p1">
              <em/><span style="float: left;">代收货款</span></p>
              <p class="p2">按照寄件方（卖家）与收件方（买家）达成交易协议的要求，为寄件方提供承运、寄递物品的同时，并代寄件方向收件方收取货款，同时按照约定时间将货款返还给寄件方的服务。</p>
            </li>
            <li 
              v-if="opdata.indexOf('AF02505') !== -1"
              id="fw05" 
              class="fw">
              <p class="p1">
              <em/><span style="float: left;">上门提货</span></p>
              <p class="p2">按照客户指令到指定地点收取货物的服务。</p>
            </li>
            <li 
              v-if="opdata.indexOf('AF02506') !== -1"
              id="fw06" 
              class="fw">
              <p class="p1">
              <em/><span style="float: left;">开发票</span></p>
              <p class="p2">客户可向物流公司申请开具货物运输发票。</p>
            </li>
            <li 
              v-if="opdata.indexOf('AF02507') !== -1"
              id="fw07" 
              class="fw">
              <p class="p1">
              <em/><span style="float: left;">签单回收</span></p>
              <p class="p2">在货物正常签收后，将寄件客户提供的需收件客户签名的收条或收货单等单据返还寄件客户的服务。</p>
            </li>
            <li 
              v-if="opdata.indexOf('AF02508') !== -1"
              id="fw08" 
              class="fw">
              <p class="p1">
              <em/><span style="float: left;">时效保障</span></p>
              <p class="p2">承诺在规定时间内送达的时效保障服务。</p>
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
