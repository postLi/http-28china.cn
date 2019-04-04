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
// Vue.mixin({
//   computed: {
//     $i18n() {
//       return i18nData[this.$store.state.global.language]
//     }
//   }
// })
