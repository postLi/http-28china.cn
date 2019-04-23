<template>
  <div class="flex_f h">
    <MyTop>
      <div class="flex_3 f-36 flex">{{ $route.query.name ? $route.query.name : '公告' }}</div>
    </MyTop>
    <div
      class="body"
      v-if="list.length === 0">
      <div class="c-3 f-30 flex"> 此用户没有评论</div>
    </div>
    <cube-scroll
      ref="scroll"
      :scroll-events="['scroll-end']"
      class="mScroll flex_1 body"
      :data="list"
      :options="options"
      @pulling-up="onPullingUp"
      @scroll-end="getScroll"
    >
      <div
        class="content"
        v-for="(item,index) in list"
        :key="index"
        @click="toDetail(item)"
      >
        <div class="f-30 c-3 margin_t_20 f_w_b">
          {{ item.title }}
        </div>
        <div class="f-20 c-9 margin_t_20">
          {{ new Date(item.createTime).format("yyyy-MM-dd") }}
        </div>
        <img
          :src="item.titleLogo"
          class="width_100 margin_t_20">
      </div>
    </cube-scroll>


  </div>
</template>

<script>
let getList = async ($axios, query, currentPage) => {
  if (query.adcode) {
    return await $axios.post(
      `/aflc-common/aflcCommonNoticeApi/findShipperNoticeList`,
      {
        currentPage: currentPage,
        pageSize: 20,
        vo: {
          belongCity: query.adcode
        }
      }
    )
  }
  if (query.noticeGroupCode) {
    return await $axios.post(
      `/aflc-common/aflcCommonNoticeApi/findDriverNoticeList`,
      {
        currentPage: currentPage,
        pageSize: 20,
        vo: {
          noticeGroupCode: query.noticeGroupCode
        }
      }
    )
  }
}
import Vue from 'vue'
import { Scroll } from 'cube-ui'
Vue.use(Scroll)
import MyTop from '../../../components/m/myTop'
export default {
  name: 'GgList',
  components: { MyTop },
  layout: 'm',
  data() {
    return {
      currentPage: 1,
      scrollTo: 0,
      options: {
        // pullDownRefresh: { txt: ' ' },
        pullUpLoad: { txt: { more: '', noMore: '没有更多数据了' } },
        scrollbar: true
      }
    }
  },
  async asyncData({ $axios, query }) {
    let list = await getList($axios, query, 1)
    return {
      list: list.data.status === 200 ? list.data.data.list : [],
      pages: list.data.status === 200 ? list.data.data.totalPage : 0
    }
  },
  methods: {
    toDetail(item) {
      if (item.noticeUrl) {
        // this.$router.push(
        //   `/m/gg/detail?url=${encodeURIComponent(item.noticeUrl)}`
        // )
        window.location.href = item.noticeUrl
      } else {
        this.$router.push(`/m/gg/detail?id=${item.id}`)
      }
    },
    getScroll(obj) {
      this.scrollTo = obj.y
    },
    onPullingUp: async function() {
      if (this.currentPage >= this.pages) {
        this.$refs.scroll.forceUpdate()
        return
      } else {
        this.currentPage++
      }
      let list = await getList(this.$axios, this.$route.query, this.currentPage)
      if (list.data.status === 200) {
        this.list = this.list.concat(list)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.h {
  height: inherit;
}
.body {
  background: #f4f4f4;
}
.content {
  margin: 0.2rem 0.25rem 0 0.25rem;
  padding: 0.2rem 0.2rem 0 0.2rem;
  background-color: white;
  border-radius: 0.2rem;
}
</style>
