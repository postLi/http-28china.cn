export const state = () => ({
  gongsi_lineHots: [],
  gongsi_links: {},
  wuliu_recommentList: []
})
export const mutations = {
  setGSLineHots(state, param) {
    state.gongsi_lineHots = param || []
    // state.
  },
  setGSLinks(state, param) {
    state.gongsi_links = param || []
  },
  setWLRECOMMENTLIST(state, param) {
    state.wuliu_recommentList = paam || []
  }
}
export const actions = {
  GETGSLINEHOTS({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get('/28-web/logisticsCompany/popularity')
        .then(res => {
          if (res.data.status == 200) {
            commit('setGSLineHots', res.data.data)
            resolve()
          } else {
            reject({
              type: 'info',
              msg: '查找不到该物流公司栏目'
            })
          }
        })
        .then(err => {
          reject({
            type: 'network',
            msg: '网络请求失败'
          })
        })
    })
  },
  GETGSLINKS({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/28-web/logisticsCompany/list/related/links', payload)
        .then(res => {
          if (res.data.status == 200) {
          }
          resolve()
        })
    })
  },
  GETWLREMCOMMENTLIST({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/28-web/logisticsPark/main/recommend/list', payload)
        .then(res => {
          resolve()
        })
    })
  }
}
