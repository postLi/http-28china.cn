let ZXCITYLIST = ['天津市', '北京市', '上海市', '重庆市']
let RANDOMCITYLIST = [
  {
    p: '北京市',
    c: '北京市'
  },
  {
    p: '天津市',
    c: '天津市'
  },
  {
    p: '黑龙江省',
    c: '哈尔滨市'
  },
  {
    p: '江苏省',
    c: '南京市'
  },
  {
    p: '江苏省',
    c: '无锡市'
  },
  {
    p: '江苏省',
    c: '苏州市'
  },
  {
    p: '浙江省',
    c: '杭州市'
  },
  {
    p: '浙江省',
    c: '宁波市'
  },
  {
    p: '山东省',
    c: '青岛市'
  },
  {
    p: '河南省',
    c: '郑州市'
  },
  {
    p: '湖北省',
    c: '武汉市'
  },
  {
    p: '湖南省',
    c: '长沙市'
  },
  {
    p: '广东省',
    c: '广州市'
  },
  {
    p: '广东省',
    c: '深圳市'
  },
  {
    p: '重庆市',
    c: '重庆市'
  },
  {
    p: '四川省',
    c: '成都市'
  }
]

export async function getCode($axios, name) {
  const res = await $axios.get('../js/province.json')
  for (let i = 0; i < res.data.length; i++) {
    let name0 = res.data[i].name
    if (name === name0) {
      return res.data[i].code
    }
  }
}
export async function getCity($axios, code, startCity) {
  return await $axios.get(
    '/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code=' + code
  )
}
//参数时间戳,格式
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  if (!time) {
    return ''
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    // 判断时毫秒还是字符串
    time = typeof time === 'number' ? time : ('' + time).trim()
    // 如果是秒级单位则转成毫秒
    if (/^\d{10}$/.test(time)) {
      time = parseInt(time) * 1000
    } else if (/(\d){4}-(\d){2}-(\d){2}\s+(\d){2}:(\d){2}:(\d){2}/.test(time)) {
      // IE需要标准格式
      // time = time.replace(/(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2}):(\d{2})/, '$1-$2-$3T$4:$5:$6Z')
      time = time.replace(/-/g, '/')
    }

    date = new Date(time)
  }
  // 如果不能正确转换，则返回原有的数据
  if (date.toString().indexOf('Invalid') !== -1) {
    return time
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a')
      return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

// 判断是否为直辖市
export function isZXcity(name) {
  return ZXCITYLIST.indexOf(name) !== -1
}

// 修正出发地/目的地查询参数
export function getSEListParams(param = {}) {
  let data = {
    startProvince: param.startProvince || '',
    startCity: param.startCity || '',
    endProvince: param.endProvince || '',
    endCity: param.endCity || ''
  }
  // 如果有数据才进行处理
  if (
    data.startProvince &&
    data.endProvince &&
    data.startCity &&
    data.endCity
  ) {
    // 当城市相同时进行处理
    if (
      data.startProvince === data.endProvince &&
      data.startCity === data.endCity
    ) {
      // 如果是直辖市则取随机的
      if (isZXcity(data.startCity)) {
        let rlist = RANDOMCITYLIST.filter(el => data.endCity !== el.c)
        let rnd = Math.ceil(rlist.length * Math.random())
        let rdata = rlist[rnd]
        data.endProvince = rdata.p
        data.endCity = rdata.c
      } else {
        // 其它则取省下面的专线
        data.endCity = ''
      }
    }
  }

  return data
}
