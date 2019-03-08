export const state = () => ({
  recommend: [], // 首页车源推荐表
  list_recommend: [], // 车源列表推荐榜
  list: [],
  index_list: [], // 首页车源列表
  list_pop_carowner: [] // 车源列表人气榜
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
        .post('/28-web/carInfo/recommendList', payload.data)
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            // console.log('1payload-GETRECOMMEND', data.data)
            let ndata = data.data ? data.data || [] : []
            ndata = ndata.map(el => {
              for (let i in el) {
                if (el[i] === null) {
                  el[i] = ''
                }
              }
              return el
            })
            ndata = payload.preFn ? payload.preFn(ndata) : ndata
            commit('setInfo', {
              name: payload.name || 'recommend',
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
        .post('/28-web/carInfo/list', payload.data)
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
  },
  // 获取车主月人气榜
  GETPOPCARLIST({ commit }, payload) {
    return new Promise(resolve => {
      this.$axios
        .get('/28-web/driver/driverPopularityList')
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            // console.log('1payload-GETPOPCARLIST', data.data)
            let ndata = data.data ? data.data || [] : []
            ndata = ndata.map(el => {
              for (let i in el) {
                if (el[i] === null) {
                  el[i] = ''
                }
              }
              return el
            })
            ndata = payload.preFn ? payload.preFn(ndata) : ndata
            commit('setInfo', {
              name: payload.name,
              data: ndata
            })
          }
          resolve()
        })
        .catch(err => {
          console.log('payload-GETPOPCARLIST', payload, err)
          resolve()
        })
    })
  },
  // 帮我找车源
  /* {
    "carType": "string",
    "endAddress": "string",
    "endArea": "string",
    "endCity": "string",
    "endProvince": "string",
    "msgMobile": "string",
    "startAddress": "string",
    "startArea": "string",
    "startCity": "string",
    "startProvince": "string",
  } */
  HELPFINDCARINFO({ commit }, payload) {
    return new Promise(resolve => {
      this.$axios
        .post('/28-web/helpFind/carInfo/create', payload.data)
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            // console.log('1payload-HELPFINDCARINFO', data.data)
          }
          resolve()
        })
        .catch(err => {
          console.log('payload-HELPFINDCARINFO', payload, err)
          resolve()
        })
    })
  }
}
