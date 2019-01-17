export const state = () => ({
  companyName: '',
  id: '',
  pageType: '' // findpassword login
})

export const mutations = {
  setCompany(state, param) {
    state.isReg = param
  },
  setId(state, param) {
    state.id = param
  },
  setPageType(state, param) {
    state.pageType = param
  }
}

export const actions = {
  SETREG({ commit }, payload) {
    return new Promise(resolve => {
      commit('setReg', payload)
      resolve()
    })
  }
}
