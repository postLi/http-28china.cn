function logReqInfos(app, res, isError) {
  let cfg = res.config
  app.store.commit('setErrorReqList', {
    config: {
      baseURL: cfg.data,
      data: cfg.data,
      headers: cfg.headers,
      method: cfg.method,
      timeout: cfg.timeout,
      url: cfg.url,
      withCredentials: cfg.withCredentials,
      xsrfCookieName: cfg.xsrfCookieName,
      xsrfHeaderName: cfg.xsrfHeaderName
    },
    data: res.data,
    status: res.status,
    isError: !!isError
  })
}

export default function(app) {
  let axios = app.$axios
  let redirect = app.redirect

  /* isStatic :
isDev :
isHMR :
app :
store :
payload :
error :
base :
env :
req :
res :
redirect :
beforeNuxtRender :
next :
_redirected :
_errored :
route :
params :
query :
$axios :
 */

  /* for (let i in app) {
    console.log(i, ':')
  } */

  // 基本配置
  // axios.defaults.timeout = 30000
  axios.defaults.timeout = 5000
  axios.defaults.baseUrl = ''
  // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

  // 添加请求拦截器
  /* axios.interceptors.request.use(
    function(config) {
      let url = config.url
      // console.log('url:', url)
      if (/^\/anfacms(.*)/.test(url)) {
      } else {
        url = '/api' + url
      }

      // console.log('url2:', url)
      config.url = url
      // 在发送请求之前做些什么
      return config
    },
    function(error) {
      // 对请求错误做些什么
      return Promise.reject(error)
    }
  ) */

  // 添加响应拦截器
  // axios.interceptors.response.use(
  //   function(response) {
  //     // 对响应数据做点什么
  //     return response
  //   },
  //   function(error) {
  //     // 对响应错误做点什么
  //     return Promise.reject(error)
  //   }
  // )

  // 请求回调
  axios.onRequest(config => {
    if (config.url.indexOf('/anfacms/') !== -1) {
      config.baseURL = config.baseURL.replace('/api', '')
    }
  })

  // 返回回调
  axios.onResponse(res => {
    if (process.server) {
      if (
        res.data.code === '200' ||
        res.data.status === 200 ||
        res.config.url.indexOf('.json') !== -1
      ) {
        logReqInfos(app, res)
      } else {
        logReqInfos(app, res, true)
      }
    }
  })
  axios.onResponseError(err => {
    // if (process.server) {
    for (let i in err) {
      console.log(i, ':')
    }
    logReqInfos(app, err, true)
    // }
  })
  //onResponseError

  // 错误回调
  axios.onError(error => {
    console.log('request error:', error)
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
