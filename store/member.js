import axios from 'axios'

export const state = () => ({
  company: {
    account: '',
    accountStatus: '',
    accountStatusName: '',
    address: '',
    areaCode: '',
    authNoPassCause: '',
    authStatus: '',
    authStatusName: '',
    belongBrand: '',
    belongBrandCode: '',
    belongCity: '',
    belongCityName: '',
    bindTime: '',
    browseNumber: '',
    businessLicenceFile: '',
    businessLife: '',
    cityCode: '',
    collateral: '',
    collectNumber: '',
    companyDes: '',
    companyFacadeFile: '',
    companyFile: '',
    companyName: '',
    contactsName: '',
    contactsTel: '',
    corporation: '',
    creater: '',
    createTime: '',
    credit: '',
    creditCode: '',
    dataSourcesType: '',
    foundTime: '',
    freezeCause: '',
    freezeCauseName: '',
    freezeCauseRemark: '',
    id: '',
    isCollection: '',
    isOnLine: '',
    isOpenSubscibe: '',
    isOpenTms: '',
    isVip: '',
    latitude: '',
    longitude: '',
    mobile: '',
    nickname: '',
    openId: '',
    otherService: '',
    otherServiceCode: '',
    outPutBlackCauseRemark: '',
    parkId: '',
    personalImageFile: '',
    productService: '',
    productServiceCode: '',
    provinceCode: '',
    putBlackCause: '',
    putBlackCauseName: '',
    putBlackCauseRemark: '',
    qq: '',
    registerOrigin: '',
    registerOriginName: '',
    registerTime: '',
    serverPriceScore: '',
    serverQualityScore: '',
    serviceCommitment: '',
    serviceContent: '',
    serviceType: '',
    serviceTypeName: '',
    sex: '',
    stationOrgId: '',
    substationCode: '',
    takeIdCardFile: '',
    tmsOrgId: '',
    transportAgingScore: '',
    unfreezeCauseRemark: '',
    unfreezeTime: '',
    updater: '',
    updateTime: '',
    wechatCode: ''
  },
  id: '',
  pointList: [],
  pointTotal: 0,
  lineList: [],
  lineTotal: 0,
  pageType: '' // findpassword login
})

let aurl = ''
if (process.server) {
  aurl = 'http://localhost:3000'
}

export const mutations = {
  setCompany(state, param) {
    state.company = param
  },
  setPointList(state, param) {
    state.pointList = param.list || []
    state.pointTotal = param.pages || 0
  },
  setLineList(state, param) {
    state.lineList = param.list || []
    state.lineTotal = param.pages || 0
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
  },
  // 获取公司信息
  GETCOMPANYINFO({ commit }, payload) {
    return new Promise(resolve => {
      console.log('payload', payload)
      axios
        .get(aurl + '/api/28-web/logisticsCompany/info/' + payload)
        .then(res => {
          let data = res.data
          console.log('GETCOMPANYINFO:', data)
          if (data.status === 200) {
            let ordata = data.data
            let ps = ordata.productServiceCode
              .replace(/(\[|\])/g, '')
              .split(',')
            let os = ordata.otherServiceCode.replace(/(\[|\])/g, '').split(',')
            console.log('psss:', ps, os)
            ordata.productServiceCode = ps
            ordata.otherServiceCode = os

            commit('setCompany', ordata)

            resolve()
          }
        })
        .catch(err => {
          console.log('payload2', payload, err)
          resolve()
        })
    })
  },
  // 获取公司网点信息
  GETCOMPANYPOINTINFO({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(aurl + '/api/28-web/pointNetwork/findCompanyNet', payload)
        .then(res => {
          let data = res.data

          if (data.status === 200) {
            commit('setPointList', data.data)

            resolve()
          } else {
            reject('1111')
          }
        })
        .catch(err => {
          console.log('payload2', payload, err.response)
          resolve()
        })
    })
  },
  // 获取公司专线信息
  GETCOMPANYLINEINFO({ commit }, payload) {
    console.log('payload3', payload)
    return new Promise((resolve, reject) => {
      axios
        .post(aurl + '/api/28-web/range/company/list', payload)
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            commit('setLineList', data.data)

            resolve()
          } else {
            console.log('1122 error', data)
            reject('1122')
          }
        })
        .catch(err => {
          console.log('payload2', payload, err.response)
          resolve()
        })
    })
  }
}
