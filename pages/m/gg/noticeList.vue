<template>
  <div class="flex_f h">
    <MyTop>
      <div class="flex_3 f-36 flex">{{ $route.query.name }}</div>
    </MyTop>
    <div
      class="body"
      v-if="noticeList.length === 0">
      <div class="c-3 f-30 flex"> 此用户没有评论</div>
    </div>
    <cube-scroll
      ref="scroll"
      :scroll-events="['scroll-end']"
      class="mScroll flex_1 body"
      :data="noticeList"
      :options="options"
      @pulling-up="onPullingUp"
      @scroll-end="getScroll"
    >
      <div
        class="content"
        v-for="(item,index) in noticeList"
        :key="index">
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
let getNoticeList = async ($axios, query, currentPage) => {
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
import Vue from 'vue'
import { Scroll } from 'cube-ui'
Vue.use(Scroll)
import MyTop from '../../../components/m/myTop'
export default {
  name: 'NoticeList',
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
    let noticeList = await getNoticeList($axios, query, 1)
    return {
      noticeList:
        noticeList.data.status === 200 ? noticeList.data.data.list : [],
      pages: noticeList.data.status === 200 ? noticeList.data.data.totalPage : 0
    }
  },
  methods: {
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
      let noticeList = await getNoticeList(
        this.$axios,
        this.$route.query,
        this.currentPage
      )
      if (noticeList.data.status === 200) {
        this.noticeList = this.noticeList.concat(noticeList)
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
  min-height: 4rem;
  border-radius: 0.2rem;
}
</style>
