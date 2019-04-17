export const state = () => ({
  startName: ['', '', ''],
  endName: ['', '', ''],
  orderBy: { name: '信誉最高', value: 'creditDesc' },
  currentPage: 1, // 当前页数
  pages: '', // 总页数
  rangeList: [], // 专线列表
  scrollTo: 0
})

export const mutations = {
  setData(state, param) {
    state[param.name] = param.data
  }
}

export const actions = {
  SETDATA({ commit }, obj) {
    commit('setData', {
      name: obj.name,
      data: obj.data
    })
  },
  GETLIST({ commit }, obj) {
    return new Promise(resolve => {
      this.$axios
        .post('/28-web/range/company/list', obj.data)
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            commit('setData', {
              name: 'pages',
              data: data.data.pages
            })
            if (data.data.list.length === 0) {
              return
            }
            let currentPage = this.state.m.gongsi.line.currentPage + 1
            commit('setData', {
              name: 'currentPage',
              data: currentPage
            })
            let ndata = data.data.list ? data.data.list || [] : []
            let list = this.state.m.gongsi.line.rangeList.concat(ndata)
            commit('setData', {
              name: obj.name,
              data: list
            })
          }
          resolve()
        })
        .catch(err => {
          resolve()
        })
    })
  }
}