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
  gongsi_wlzx: [],
  // 货源详情
  huoyuan_wlzx: [],
  // 物流网点汇总页
  wuliu_newest: [], // 最新动态
  wuliu_hyzx: [], // 行业资讯
  wuliu_ccyps: [], // 仓储与配送
  // 车源汇总页
  cheyuan_wzgg: [], // 网站公告
  cheyuan_khal: [] // 客户案例
})

export const mutations = {
  setInfo(state, param) {
    state[param.name] = param.data
  }
}

let THENEWSPREFN = data => {
  return data.map((el, index) => {
    el.url = el.url.replace(
      /http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,
      '/zixun'
    )

    return el
  })
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
            let preFn = payload.preFn || THENEWSPREFN
            ndata = preFn(ndata)
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
            let preFn = payload.preFn || THENEWSPREFN
            ndata = preFn(ndata)
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
