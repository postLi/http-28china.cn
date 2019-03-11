export const state = () => ({
  wlzx: [],
  cjwt: [],
  khal: [],
  zcfl: [],
  wlqy: [],
  zjgd: [],
  cgzx: [],
  ccyps: [],
  // 首页模块
  index_wlzx: [],
  index_cjwt: [],
  index_khal: [],
  index_lzzx: [],
  index_wlqy: [],
  index_wlxyfx: [],
  index_cgzx: [],
  index_ccyps: [],
  index_wlswxx: [],
  // 车源详情
  cheyuan_ccyps: [],
  // 公司列表页
  gongsi_jryw: [],
  gongsi_wlzx: []
})

export const mutations = {
  setInfo(state, param) {
    state[param.name] = param.data
  }
}

export const actions = {
  // 获取资讯信息
  GETNEWSINFO({ commit }, payload) {
    // console.log('payload-lineinfopayload', payload)
    return new Promise(resolve => {
      this.$axios
        .get('/anfacms/api/front/content/list', {
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
          // console.log('payload-line', payload, err.response)
          resolve()
        })
    })
  },
  // 获取多个栏目资讯信息
  GETMULTYNEWSINFO({ commit }, payload) {
    // console.log('payload-lineinfopayload', payload)
    // {{'channelIds':'118','count':2,'orderBy' :9,'channelOption' :0};{'channelIds':'94,95,96,97,98,99','count':5,'orderBy' :9,'channelOption' :0}}
    return new Promise(resolve => {
      this.$axios
        .post(
          '/anfacms/api/front/content/jsonsList?paramsJson=' + payload.params
        )
        .then(res => {
          let data = res.data
          if (data.code === '200') {
            // console.log('payload-GETMULTYNEWSINFO', data.body)
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
