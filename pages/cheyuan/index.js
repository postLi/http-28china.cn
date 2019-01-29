export function getRecommendList($axios, vo) {
  return $axios.get(
    `/28-web/carInfo/recommendList?carLengthLower=${
      vo.carLengthLower
    }&AF031Id=${vo.AF031Id}&carLengthUpper=${vo.carLengthUpper}&AF032Id=${
      vo.AF032Id
    }&carLoadLower=${vo.carLoadLower}&carLoadUpper=${
      vo.carLoadUpper
    }&carSourceType=${vo.carSourceType}&carType=${
      vo.carType
    }&endArea=${encodeURIComponent(vo.endArea)}&endCity=${encodeURIComponent(
      vo.endCity
    )}&endProvince=${encodeURIComponent(vo.endProvince)}&isLongCar=${
      vo.isLongCar
    }&startArea=${encodeURIComponent(
      vo.startArea
    )}&startCity=${encodeURIComponent(
      vo.startCity
    )}&startProvince=${encodeURIComponent(vo.startProvince)}`
  )
}
