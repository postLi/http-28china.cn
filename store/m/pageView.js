export const state = () => ({
  footerId: 0 // 底部导航
})

export const mutations = {
  setData(state, param) {
    state[param.name] = param.data
  }
}
