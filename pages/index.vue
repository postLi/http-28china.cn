<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxtpage23
      </h1>
      <h2 class="subtitle">
        My primo Nuxt.js project
      </h2>
      <div>您的IP是：{{ ip }}</div>
      <a href="/?startp=北京&startc=">查看北京的数据</a>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <ul>
        <li 
          v-for="(item, index) in lists" 
          :key="index">
          {{ item.companyName }} : {{ item.address }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  components: {
    Logo
  },
  data() {
    return {
      title: '专线列表页面',
      lists: [],
      ip: ''
    }
  },
  //如果校验方法返回的值不为 true， Nuxt 将自动加载显示 404 错误页面
  /* validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }, */
  asyncData({ params, req, res, query }) {
    let vo = {
      startProvince: query.startp || '广东省'
    }
    if (!query.startc) {
      vo.address = query.startp
    } else {
      vo.startCity = query.startc || '广州市'
    }
    return axios
      .all([
        axios.post(
          'http://192.168.1.157:89/api/aflc-portal/portalt/aflcLogisticsCompany/v1/listCompanys',
          {
            currentPage: 1,
            pageSize: 20,
            vo: vo
          }
        ),
        axios.get('http://icanhazip.com')
      ])
      .then(
        axios.spread((res, ip2) => {
          // console.log('res.data.data:', res.data.data, ip2)
          return {
            title: '专线列表页面2',
            lists: res.data.data.list,
            ip: ip2.data
          }
        })
      )
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style scoped>
html,
body,
#__nuxt {
  min-height: 100%;
}
.container {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
