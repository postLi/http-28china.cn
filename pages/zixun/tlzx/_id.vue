<template>
  <div v-html="content" />
</template>

<script>
export default {
  name: 'CheYuan',
  head: {
    link: [{ rel: 'stylesheet', href: '/css/jquery.pagination.css' }],
    script: [
      { src: '/js/city-picker.data.js' },
      { src: '/js/city-picker.js' },
      { src: '/js/jquery.pagination.min.js' }
    ]
  },
  data() {
    return {
      recommendList: [],
      dataset: [],
      content: ''
    }
  },
  async asyncData({ $axios, app, query, params, route }) {
    console.log('route.path:', route.path)
    let con = await $axios.get(
      'http://192.168.1.127:8080/anfacms/' + route.path.replace('/zixun', '')
    )
    return {
      content: con.data
    }
  },
  mounted() {},
  methods: {
    //
  }
}
</script>
