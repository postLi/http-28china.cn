import axios from 'axios'

let aurl = ''
if (process.server) {
  aurl = 'http://localhost:3000'
}

export const state = () => ({ wlzx: [], cjwt: [] })

export const mutations = {
  setInfo(state, param) {
    state[param.name] = param.data
  }
}

export const actions = {
  // 获取公司信息
  GETNEWSINFO({ commit }, payload) {
    // console.log('payload-lineinfopayload', payload)
    return new Promise(resolve => {
      axios
        .get(aurl + '/anfacms/api/front/content/list', {
          params: payload.params
        })
        .then(res => {
          let data = res.data
          if (data.code === '200') {
            // console.log('payload-lineinfo', data.body)
            let ndata = data.body || []
            ndata = payload.preFn ? payload.preFn(ndata) : ndata
            commit('setInfo', {
              name: payload.name,
              data: ndata
            })

            resolve()
          }
        })
        .catch(err => {
          console.log('payload-line', payload, err.response)
          resolve()
        })
    })
  }
}
