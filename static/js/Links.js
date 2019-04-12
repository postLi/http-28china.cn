var COMMONLINK = {
  HREFLINKS: item => {
    switch (item.startProvince) {
      case null:
        item.startProvince = ''
    }
    switch (item.startCity) {
      case null:
        item.startCity = ''
    }
    switch (item.startArea) {
      case null:
        item.startArea = ''
    }
    switch (item.endProvince) {
      case null:
        item.endProvince = ''
    }
    switch (item.endCity) {
      case null:
        item.endCity = ''
    }
    switch (item.endArea) {
      case null:
        item.endArea = ''
    }
    item.carSourceType = ''
    item.targetLinks = ''
    if (item.type == '1000') {
      item.targetLinks = '/gongsi/'
    }
    if (item.type == '2000') {
      item.targetLinks = '/zhuanxian/list'
    }
    if (item.type == '2001') {
      item.targetLinks = '/member/' + item.companyId + '-line'
    }
    if (item.type == '3000' || item.type == '3003' || item.type == '3002') {
      item.targetLinks = '/cheyuan'
    }
    if (item.type == '3001') {
      item.targetLinks = '/cheyuan'
      item.carSourceType = 'AF01801'
    }
    if (item.type == '4000') {
      item.targetLinks = '/huoyuan'
    }
    if (item.type == '4001') {
      item.targetLinks = '/member/' + item.companyId + '-huo'
    }
  }
}
