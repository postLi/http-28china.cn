<template>
  <div class="flex_f h">
    <MyTop>
      <div class="flex_3 f-36 flex">详情</div>
    </MyTop>
    <div
      class="flex_1 wk-touch o_f"
      style="height: calc(100% - 49px)">
      <iframe
        v-if="$route.query.url"
        frameborder="0"
        height="100%"
        width="100%"
        :src="url"/>
      <div
        class="f-28 margin_20"
        v-if="$route.query.id"
        v-html="data.noticeContent"/>
    </div>
  </div>
</template>

<script>
import MyTop from '../../../components/m/myTop'
export default {
  name: 'Detail',
  layout: 'm',
  components: { MyTop },
  data() {
    return {
      src: ''
    }
  },
  async asyncData({ $axios, query }) {
    if (query.id) {
      let res = await $axios.get(
        `/aflc-common/aflcCommonNoticeApi/findNoticeDetail/${query.id}`
      )
      return {
        data: res.data.status === 200 ? res.data.data : {}
      }
    }
    // if (query.url) {
    //   console.log(decodeURIComponent(query.url))
    //   return {
    //     url: query.url ? decodeURIComponent(query.url) : ''
    //   }
    // }
  }
}
</script>

<style scoped>
.h {
  height: inherit;
}
</style>
