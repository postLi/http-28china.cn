export const state = () => ({
  excellent: [],
  hotLine: [],
  listRangesAging: []
})
export const mutations = {
  setInfo(state, param) {
    state[param.name] = param.data
  }
}
export const actions = {
  GETEXCELLENT({ commit }, payloay) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get('/28-web/logisticsCompany/excellent?pageSize=8')
        .then(res => {
          if (res.data.status === 200) {
            commit('setInfo', {
              name: payloay.name,
              data: res.data ? res.data.data || [] : []
            })
            resolve()
          } else {
            reject({
              type: 'info',
              msg: '找不到数据'
            })
          }
        })
    })
  },
  GETHOTLINES({ commit }, payloay) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/28-web/range/hot/list', payloay).then(res => {
        if (res.data.status === 200) {
          commit('setInfo', {
            name: payloay.name,
            data: res.data.data ? res.data.data.list || [] : []
          })
          resolve()
        } else {
          reject({
            type: 'info',
            msg: '找不到数据'
          })
        }
      })
    })
  },
  GETLISTRANGESAGING({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/28-web/range/aging/list', payload).then(res => {
        if (res.data.status === 200) {
          commit('setInfo', {
            name: payload.name,
            data: res.data.data ? res.data.data.list || [] : []
          })
          resolve()
        } else {
          reject({
            type: 'info',
            msg: '找不到数据'
          })
        }
      })
    })
  }
}
