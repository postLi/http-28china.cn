export const state = () => ({
  recommend: [],
  index_list: []
})

export const mutations = {
  setInfo(state, param) {
    state[param.name] = param.data
  }
}

export const actions = {
  // 获取首页推荐列表
  GETRECOMMEND({ commit }, payload) {
    // console.log('payload-GETLIST', payload)
    return new Promise(resolve => {
      this.$axios
        .post('/28-web/logisticsPark/list', payload.data)
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
  // 获取物流园区列表
  GETLIST({ commit }, payload) {
    // console.log('payload-GETLIST', payload)
    return new Promise(resolve => {
      this.$axios
        .post('/28-web/lclOrder/list', payload.data)
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            // console.log('1payload-GETLIST', data.data.list[0])
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
          console.log('payload-GETLIST', payload, err)
          resolve()
        })
    })
  }
}
