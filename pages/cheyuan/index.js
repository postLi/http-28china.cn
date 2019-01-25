export function test($axios, app) {
  const currentProvinceFullName = encodeURIComponent(
    app.$cookies.get('currentProvinceFullName')
  )
  const currentAreaFullName = encodeURIComponent(
    app.$cookies.get('currentAreaFullName')
  )
  return $axios.get(
    '/28chinaservice/carInfo/recommendList?startProvince=' +
      currentProvinceFullName +
      '&startCity=' +
      currentAreaFullName
  )
}
