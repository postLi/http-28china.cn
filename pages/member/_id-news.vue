<template>
  <div>
    <MemberBanner />
    <div class="main">
      <MemberSidebar />
      <div class="right main_nr">
        <div class="nr_bt">
          <div class="nr_bt1"><span>公司新闻</span></div>
        </div>	
        <div 
          id="nr083" 
          class="nr">{{ company.companyName || '本司' }}是一家经国家主管部门批准的专业经营物流运输业务的的现代化物流运输企业，集运输、仓储、包装、配送信息处理一体化于一身。经过多年的发展公司已拥有一支专业化的物流管理和从业人员队伍并拥有数目庞大的运输车队。</div>
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
  head: {
    link: [{ rel: 'stylesheet', href: '/member/css/list.css' }]
  },
  layout: 'member',
  computed: {
    company() {
      return this.$store.state.member.company
    }
  },
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
