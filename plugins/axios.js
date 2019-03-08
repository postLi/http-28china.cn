export default function(app) {
  let axios = app.$axios
  let redirect = app.redirect
  // 基本配置
  axios.defaults.timeout = 30000
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
  axios.onRequest(config => {})

  // 返回回调
  axios.onResponse(res => {})

  // 错误回调
  axios.onError(error => {
    console.log('request error:', error)
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
