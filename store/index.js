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
  errorReqList: []
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
  }
}
