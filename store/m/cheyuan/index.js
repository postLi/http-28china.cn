export const state = () => ({
  startName: ['', '', ''],
  endName: ['', '', ''],
  orderBy: { name: '最新发布', value: 'createTimeDesc' },
  carSpec: '', //车辆规格 AF00901
  carType: '', //车辆类型 AF01801
  currentPage: 1, // 当前页数
  pages: '', // 总页数
  rangeList: [], // 列表
  footerId: 0, // 底部导航
  scrollTo: 0 // 滚动位置
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
  GETRANGELIST({ commit }, obj) {
    return new Promise(resolve => {
      this.$axios
        .post('/28-web/carInfo/list', obj.data)
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            commit('setData', {
              name: 'pages',
              data: data.data.pages
            })
            if (data.data.list.length === 0) {
              return
            }
            data.data.list.forEach(item => {
              let time = item.createTime
              let timeGo = new Date() * 1 - new Date(time) * 1
              let day = Math.floor(timeGo / (24 * 3600 * 1000))
              let timeGoHour = timeGo % (24 * 3600 * 1000)
              let hour = Math.floor(timeGoHour / (3600 * 1000))
              let timeGoMin = timeGoHour % (3600 * 1000)
              let min = Math.floor(timeGoMin / (60 * 1000))
              if (day === 0 && hour === 0) {
                item.myTime = min + '分'
              }
              if (day === 0 && hour > 0) {
                item.myTime = hour + '小时'
              }
              if (day > 0) {
                item.myTime = day + '天'
              }
            })
            let currentPage = this.state.m.cheyuan.currentPage + 1
            commit('setData', {
              name: 'currentPage',
              data: currentPage
            })
            let ndata = data.data.list ? data.data.list || [] : []
            let list = this.state.m.cheyuan.rangeList.concat(ndata)
            commit('setData', {
              name: obj.name,
              data: list
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
