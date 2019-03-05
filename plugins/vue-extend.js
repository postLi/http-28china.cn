import Vue from 'vue'
import filters from '~/filters'

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
