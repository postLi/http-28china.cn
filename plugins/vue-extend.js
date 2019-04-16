import Vue from 'vue'
import filters from '~/filters'

// 引入全局组件
import creditIcon from '~/components/common/creditIcon'
import selectType from '~/components/common/selectType'
Vue.component('creditIcon', creditIcon)
Vue.component('selectType', selectType)

// cdn
Vue.prototype.cdnUrl = ''
Vue.prototype.proxyUrl = '/api'

// filters
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

// mixins
Vue.mixin({
  // computed: {
  //   $i18n() {
  //     return i18nData[this.$store.state.global.language]
  //   }
  // }
  methods: {
    /**
     * 用js更新页面数据
     * @param {*} ajaxFn 执行请求的函数
     * @param {*} activeTime 缓存有效时长，根据不同页面可以设置不同时长更新，单位为 秒
     */
    _updateCachePage(ajaxFn, activeTime = 300) {
      return new Promise((resolve, reject) => {
        if (ajaxFn) {
          this.$axios
            .get('/getServerTime')
            .then(res => {
              let cacheTime = 0
              if (res && this.createTime) {
                cacheTime = (res - this.createTime) / 1000
                // 大于指定的缓存时效则用js读取下数据
                if (cacheTime > activeTime) {
                  resolve(ajaxFn())
                } else {
                  resolve()
                }
              } else {
                resolve()
              }
            })
            .catch(err => {
              resolve(ajaxFn())
            })
        } else {
          resolve()
        }
      })
    }
  }
})
