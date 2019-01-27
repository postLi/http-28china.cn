export function getRecommendList($axios, app) {
  const currentProvinceFullName = encodeURIComponent(
    app.$cookies.get('currentProvinceFullName')
  )
  const currentAreaFullName = encodeURIComponent(
    app.$cookies.get('currentAreaFullName')
  )
  return $axios.get(
    '/28-web/carInfo/recommendList?startProvince=' +
      currentProvinceFullName +
      '&startCity=' +
      currentAreaFullName
  )
}
