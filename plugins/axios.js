export default function(app) {
  let axios = app.$axios
  let redirect = app.redirect
  // 基本配置
  axios.defaults.timeout = 30000
  axios.defaults.baseUrl = ''
  // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

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
