const until = {
  getPlace(el) {
    var obj = {
      province: '',
      city: '',
      area: ''
    }
    $(el + ' .select-item').each(function(i, e) {
      arr.push($(this).text())
    })
    obj.province = arr[0] ? arr[0] : ''
    obj.city = arr[1] ? arr[1] : ''
    obj.area = arr[2] ? arr[2] : ''
    return obj
  }
}

export default until
