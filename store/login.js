export const state = () => ({
  isReg: false,
  pageType: '' // findpassword login
})

export const mutations = {
  setReg(state, param) {
    state.isReg = param
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
