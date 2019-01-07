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
      lists: []
    }
  },
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
      .post(
        'http://192.168.1.157:89/api/aflc-portal/portalt/aflcLogisticsCompany/v1/listCompanys',
        {
          currentPage: 1,
          pageSize: 20,
          vo: vo
        }
      )
      .then(res => {
        // console.log('res.data.data:', res.data.data)
        return {
          title: '专线列表页面2',
          lists: res.data.data.list
        }
      })
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

<style>
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
