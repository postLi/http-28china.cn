export const state = () => ({
  counter: 0,
  pageClass: ''
})

export const mutations = {
  setPageClass(state, payload) {
    state.pageClass = payload || ''
  },
  increment(state) {
    state.counter++
  }
}
