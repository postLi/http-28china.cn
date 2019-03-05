function getClientIp(req) {
  return (
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress
  )
}

function isDottedIPv4(s) {
  var match = s.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/)
  return (
    match != null &&
    match[1] <= 255 &&
    match[2] <= 255 &&
    match[3] <= 255 &&
    match[4] <= 255
  )
}

export default ({ route, store, req, $axios, app }) => {
  return new Promise(reslove => {
    let defaultArea = {
      currentArea: '440100',
      currentAreaFullName: '广州市',
      currentAreaName: '广州',
      currentProvince: '440000',
      currentProvinceFullName: '广东省',
      currentProvinceName: '广东'
    }
    if (process.server) {
      let setdate = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000)
      let fn = (obj = {}) => {
        for (let i in obj) {
          app.$cookies.set(i, obj[i], {
            expires: setdate,
            path: '/'
          })
        }
        reslove()
      }
      // 判断是否有存在的cookie
      if (!app.$cookies.get('currentProvince')) {
        // 获取ip信息
        let ip = getClientIp(req)
        // 测试ip
        // ip = '123.125.71.38' // 北京ip
        // ip = '23.125.171.138' // 随意构造的ip 美国ip
        if (ip) {
          // 如果是内网ip不作处理
          let reg = /^(127\.0\.0\.1)|(localhost)|(10\.\d{1,3}\.\d{1,3}\.\d{1,3})|(172\.((1[6-9])|(2\d)|(3[01]))\.\d{1,3}\.\d{1,3})|(192\.168\.\d{1,3}\.\d{1,3})$/
          if (reg.test(ip)) {
            fn(defaultArea)
          } else if (isDottedIPv4(ip)) {
            // console.log('isDottedIPv4:', ip)
            // 只处理符合规范的ip
            let trytime = 1
            let pingfn = () => {
              if (trytime < 3) {
                trytime++
                // console.log('trytime:', trytime)
                $axios
                  .get('http://ip.taobao.com/service/getIpInfo.php?ip=' + ip)
                  .then(res => {
                    console.log('trytime ok:', trytime)
                    let data = res.data
                    if (data) {
                      if (data.code === 0) {
                        let rdata = data.data
                        if (rdata.region_id) {
                          // 服务端不进行匹配，由客户端代码进行匹配修正......
                          fn({
                            currentArea: rdata.city_id,
                            currentAreaFullName: rdata.city,
                            currentAreaName: rdata.city,
                            currentProvince: rdata.region_id,
                            currentProvinceFullName: rdata.region,
                            currentProvinceName: rdata.region
                          })
                        } else {
                          fn(defaultArea)
                        }
                      } else {
                        fn(defaultArea)
                      }
                    } else {
                      fn(defaultArea)
                    }
                  })
                  .catch(err => {
                    // console.log('trytime error:', trytime)
                    // 当请求一直出错时，做默认处理
                    if (trytime < 3) {
                      pingfn()
                    } else {
                      fn(defaultArea)
                    }
                  })
              }
            }
            pingfn()
          } else {
            // 无效ip
            fn(defaultArea)
          }
        } else {
          fn(defaultArea)
        }
        // console.log('IP info:', getClientIp(req))
        // store.commit('setAreaInfo', defaultArea)
      } else {
        reslove()
      }
    } else {
      reslove()
    }
  })
}
