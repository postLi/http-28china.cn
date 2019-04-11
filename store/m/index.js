export const state = () => ({
  startName0: ['', '', ''], // 原始值
  startName: ['', '', ''],
  endName: ['', '', ''],
  navId: 0, // 找专线导航id
  provinceList: [] // 省列表
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
  GETPROVINCELIST({ commit }, obj) {
    return new Promise(resolve => {
      this.$axios
        .get(
          '/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code=' +
            obj.data
        )
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            data.data.unshift({
              code: 0,
              name: '全国'
            })
            let ndata = data.data ? data.data || [] : []
            commit('setData', {
              name: obj.name,
              data: ndata
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
