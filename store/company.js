import axios from 'axios'

let aurl = ''
if (process.server) {
  aurl = 'http://localhost:3000'
}

export const state = () => ({
  recommend: []
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
            console.log('1payload-GETRECOMMEND', data.data)
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
  // 获取多个栏目资讯信息
  GETMULTYNEWSINFO({ commit }, payload) {
    // console.log('payload-lineinfopayload', payload)
    // {{'channelIds':'118','count':2,'orderBy' :9,'channelOption' :0};{'channelIds':'94,95,96,97,98,99','count':5,'orderBy' :9,'channelOption' :0}}
    return new Promise(resolve => {
      axios
        .post(
          aurl +
            '/anfacms/api/front/content/jsonsList?paramsJson=' +
            payload.params
        )
        .then(res => {
          let data = res.data
          if (data.code === '200') {
            console.log('payload-GETMULTYNEWSINFO', data.body)
            let ndata = data.body || []
            ndata = payload.preFn ? payload.preFn(ndata) : ndata
            payload.names.forEach((name, index) => {
              commit('setInfo', {
                name: name,
                data: ndata[index]
              })
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
