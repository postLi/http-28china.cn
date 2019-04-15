<template>
  <div class="body flex_f">
    <MyTop>
      <div class="flex_3 f-36 flex">公司全部网点</div>
    </MyTop>
    <div class="flex_1 flex_f body_content">
      <cube-scroll
        ref="scroll1"
        class="mScroll"
        :data="companyPoint"
        :options="options"
        @pulling-up="onPullingUp"
      >
        <div
          class="item_h2 flex_js flex_f"
          v-for="(item,index) in companyPoint"
          :key="index">
          <div class="f-30 f_b">网点{{ index + 1 }}:{{ item.pointName }}</div>
          <div class="f-26 flex_r c-3"><img src="/m/gongsi/wangdian_dz.png">{{ item.address }} </div>
          <div class="f-26 flex_a c-3"><img src="/m/gongsi/wangdian_xm.png">陈升 {{ item.mobile }}</div>
          <div class="f-26 flex_a c-3"><img src="/m/gongsi/wangdian_dh.png">{{ item.telNum ? item.telNum : '无' }}</div>
        </div>
      </cube-scroll>
    </div>

  </div>
</template>

<script>
async function getPoint($axios, query, currentPage) {
  return await $axios.post('/28-web/pointNetwork/findCompanyNet', {
    companyId: query.id,
    pageSize: 20,
    currentPage
  })
}
import Vue from 'vue'
import { Scroll } from 'cube-ui'
Vue.use(Scroll)
import MyTop from '../../../components/m/myTop'
export default {
  name: 'Wangdian',
  components: { MyTop },
  layout: 'm',
  data() {
    return {
      options: {
        // pullDownRefresh: { txt: ' ' },
        pullUpLoad: { txt: { more: '', noMore: '没有更多数据了' } },
        scrollbar: true
      }
    }
  },
  methods: {
    async onPullingUp() {
      if (this.currentPage >= this.pages) {
        this.$refs.scroll1.forceUpdate()
        return
      } else {
        this.currentPage++
      }
      const companyPoint = await getPoint(
        this.$axios,
        this.$route.query,
        this.currentPage
      )
      this.companyPoint = this.companyPoint.concat(companyPoint.data.data.list)
    }
  },
  async asyncData({ $axios, app, query }) {
    let pages
    const companyPoint = await getPoint($axios, query, 1)
    if (companyPoint.data.status === 200) {
      pages = companyPoint.data.data.pages
    }
    return {
      pages: pages ? pages : 0,
      currentPage: 1,
      companyPoint:
        companyPoint.data.status === 200 ? companyPoint.data.data.list : []
    }
  }
}
</script>

<style scoped lang="scss">
.body {
  height: inherit;
}
.body_content {
  width: 95%;
  margin: 0 auto;
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
</style>
