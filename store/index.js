export const state = () => ({
  counter: 0,
  pageClass: '',
  baseUrl: 'http://192.168.1.188:825',
  area: {
    currentArea: '',
    currentAreaFullName: '',
    currentAreaName: '',
    currentProvince: '',
    currentProvinceFullName: '',
    currentProvinceName: ''
  },
  errorReqList: [],
  dictList: {}
})

export const mutations = {
  setPageClass(state, payload) {
    state.pageClass = payload || ''
  },
  increment(state) {
    state.counter++
  },
  setAreaInfo(state, payload) {
    state.area = payload
  },
  setErrorReqList(state, payload) {
    state.errorReqList.push(payload)
  },
  setDictInfo(state, payload) {
    state.dictList[payload.name] = payload.data
  }
}

export const actions = {
  // 获取字典表数据
  getDictList({ commit }, payload) {
    // console.log('payload-getDictList', payload)
    return new Promise(resolve => {
      this.$axios
        .get('/28-web/sysDict/getSysDictByCodeGet/' + payload.name)
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            // console.log('1payload-getDictList', data.data)
            let ndata = data.data || []
            ndata = payload.preFn ? payload.preFn(ndata) : ndata
            commit('setDictInfo', {
              name: payload.name,
              data: ndata
            })
          }
          resolve()
        })
        .catch(err => {
          console.log('payload-getDictList', payload, err)
          resolve()
        })
    })
  }
}
