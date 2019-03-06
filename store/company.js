import axios from 'axios'

let aurl = ''
if (process.server) {
  aurl = 'http://localhost:3000'
}

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
    // console.log('payload-lineinfopayload', payload)
    return new Promise(resolve => {
      axios
        .post(aurl + '/api/28-web/logisticsCompany/recommend', payload.data)
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
  // 获取物流公司列表
  GETCOMPANYLIST({ commit }, payload) {
    return new Promise(resolve => {
      axios
        .post(aurl + '/api/28-web/logisticsCompany/list', payload.data)
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
