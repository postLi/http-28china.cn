export const state = () => ({
  recommend: [],
  index_list: [],
  netpointrecommend: []
})

export const mutations = {
  setInfo(state, param) {
    state[param.name] = param.data
  }
}

export const actions = {
  // 获取首页推荐列表
  GETRECOMMEND({ commit }, payload) {
    // console.log('payload-lineinfopayload', payload)
    return new Promise(resolve => {
      this.$axios
        .post('/28-web/logisticsCompany/index/recommend', payload.data)
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            // console.log('1payload-GETRECOMMEND', data.data)
            let ndata = data.data ? data.data.list || [] : []
            ndata = payload.preFn ? payload.preFn(ndata) : ndata
            commit('setInfo', {
              name: 'recommend',
              data: ndata
            })
          }
          resolve()
        })
        .catch(err => {
          console.log('payload-GETRECOMMEND', payload, err)
          resolve()
        })
    })
  },
  // 获取首页推荐列表
  getNetpointRecommend({ commit }, payload) {
    // console.log('payload-lineinfopayload', payload)
    return new Promise(resolve => {
      this.$axios
        .post('/28-web/logisticsCompany/pointNetwork/recommend', payload.data)
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            // console.log('1payload-GETRECOMMEND', data.data)
            let ndata = data.data ? data.data.list || [] : []
            ndata = payload.preFn ? payload.preFn(ndata) : ndata
            commit('setInfo', {
              name: 'netpointrecommend',
              data: ndata
            })
          }
          resolve()
        })
        .catch(err => {
          console.log('payload-GETRECOMMEND', payload, err)
          resolve()
        })
    })
  },
  // 获取物流公司列表
  GETCOMPANYLIST({ commit }, payload) {
    return new Promise(resolve => {
      this.$axios
        .post('/28-web/logisticsCompany/list', payload.data)
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            // console.log('1payload-GETCOMPANYLIST', data.data.list)
            let ndata = data.data ? data.data.list || [] : []
            ndata = payload.preFn ? payload.preFn(ndata) : ndata
            commit('setInfo', {
              name: payload.name,
              data: ndata
            })
          }
          resolve()
        })
        .catch(err => {
          console.log('payload-GETCOMPANYLIST', payload, err)
          resolve()
        })
    })
  }
}
