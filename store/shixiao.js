export const state = () => ({
  excellent: []
})
export const mutations = {
  setInfo(state, param) {
    state[param.name] = param.data
  }
}
export const actions = {
  GETEXCELLENT({ commit }, payloay) {
    return new Promise(resolve => {
      this.$axios
        .get('/28-web/logisticsCompany/excellent?pageSize=8')
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            let ndata = data.data ? data.data || [] : []
            ndata = ndata.map(el => {
              for (let i in el) {
                if (el[i] === null) {
                  el[i] = ''
                }
              }
              return el
            })
            ndata = payloay.preFn ? payloay.preFn(ndata) : ndata
            commit('setInfo', {
              name: payloay.name,
              data: ndata
            })
            console.log(data.data, 'data')
          }
          resolve()
        })
    })
  }
}
