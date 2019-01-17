<template>
  <div>
    <MemberBanner />
    <div class="main">
      <MemberSidebar />
      <div class="right main_nr">
        <div class="nr_bt">
          <div class="nr_bt1"><span>公司动态</span></div>
        </div>	
        <div 
          id="webnotice" 
          class="nr"/>

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
  layout: 'member',
  mounted() {
    seajs.use(['/member/js/index.js', '/index/js/collection.js'])
  },
  fetch({ store, params }) {
    store.commit('member/setId', params.id)
  }
}
</script>
