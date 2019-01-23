import axios from 'axios'
import { reject } from 'q'

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
  lineList: [],
  pageType: '' // findpassword login
})

export const mutations = {
  setCompany(state, param) {
    state.company = param
  },
  setPointList(state, param) {
    state.pointList = param
  },
  setLineList(state, param) {
    state.lineList = param
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
  GETCOMPANYINFO({ commit }, payload) {
    return new Promise(resolve => {
      console.log('payload', payload)
      axios
        .get(
          'http://localhost:3000' +
            '/api/28-web/logisticsCompany/info/' +
            payload
        )
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            let ordata = data.data.aflcLogisticsCompany
            ordata.assessNumber = data.data.assessNumber
            commit('setCompany', ordata)

            resolve()
          }
        })
        .catch(err => {
          console.log('payload2', payload, err.response)
          resolve()
        })
    })
  },
  GETCOMPANYPOINTINFO({ commit }, payload) {
    return new Promise((resolve, reject) => {
      console.log('payload', payload)
      axios
        .post(
          'http://localhost:3000' + '/api/28-web/pointNetwork/findCompanyNet',
          payload
        )
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            commit('setPointList', data.data.list)

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
  GETCOMPANYLINEINFO({ commit }, payload) {
    console.log('payload3', payload)
    return new Promise((resolve, reject) => {
      axios
        .post(
          'http://localhost:3000' + '/api/28-web/range/company/list',
          payload
        )
        .then(res => {
          let data = res.data
          // console.log('payload4', payload, data.data.list)
          if (data.status === 200) {
            commit('setLineList', data.data.list)

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
  }
}
