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
    state.wuliu_recommentList = param || []
  },
  setWLNEWSTLIST(state, param) {
    state.wuliu_newstList = param || []
  },
  setWLHOTLIST(state, param) {
    state.wuliu_hottList = param || []
  },
  setWLEXCELLENT(state, param) {
    state.wuliu_excellent = param || []
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
          if (res.data.status == 200) {
            res.data.data.list.forEach(item => {
              comNum(item)
            })
            commit('setWLRECOMMENTLIST', res.data.data.list)
            resolve()
          } else {
            reject({
              type: 'info',
              msg: '查找不到该物流园列表'
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
  GETWLNEWESTLIST({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/28-web//logisticsPark/newest/list', payload)
        .then(res => {
          // console.log(res, 'resres')
          if (res.data.status == 200) {
            res.data.data.list.forEach(item => {
              comNum(item)
            })
            commit('setWLNEWSTLIST', res.data.data.list)
            resolve()
          } else {
            reject({
              type: 'info',
              msg: '查找不到该物流园列表'
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
  GETWLHOTLIST({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/28-web/logisticsPark/hot/list', payload)
        .then(res => {
          // console.log(res, 'resres')
          if (res.data.status == 200) {
            res.data.data.list.forEach(item => {
              comNum(item)
            })
            commit('setWLHOTLIST', res.data.data.list)
            resolve()
          } else {
            reject({
              type: 'info',
              msg: '查找不到该物流园列表'
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
  GETWLEXCELLENT({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get('/28-web/logisticsCompany/excellent?flag=excellentRate')
        .then(res => {
          if (res.data.status == 200) {
            res.data.data.forEach(item => {
              comNum(item)
            })
            commit('setWLEXCELLENT', res.data.data)
            resolve()
          } else {
            reject({
              type: 'info',
              msg: '查找不到该物流园列表2'
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
  }
}
function comNum(item) {
  let arr = (item.id || '').split('')
  let num = 0
  arr.forEach(el => {
    num += el.charCodeAt(0) || 0
  })
  item.num = (num % 30) + 1
}
