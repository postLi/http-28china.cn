export default {
  GETCREDIT(archivals) {
    let credit = archivals.data.data.credit
    if (credit >= 0 && credit <= 3) {
      archivals.data.data.startA = 1
      archivals.data.data.isShowA = true
    }
    if (credit >= 4 && credit <= 10) {
      archivals.data.data.startA = 2
      archivals.data.data.isShowA = true
    }
    if (credit >= 11 && credit <= 40) {
      archivals.data.data.startA = 3
      archivals.data.data.isShowA = true
    }
    if (credit >= 41 && credit <= 90) {
      archivals.data.data.startA = 4
      archivals.data.data.isShowA = true
    }
    if (credit >= 91 && credit <= 150) {
      archivals.data.data.startA = 5
      archivals.data.data.isShowA = true
    }
    if (credit >= 151 && credit <= 250) {
      archivals.data.data.startB = 1
      archivals.data.data.isShowB = true
    }
    if (credit >= 251 && credit <= 500) {
      archivals.data.data.startB = 2
      archivals.data.data.isShowB = true
    }
    if (credit >= 500 && credit <= 1000) {
      archivals.data.data.startB = 3
      archivals.data.data.isShowB = true
    }
    if (credit >= 1001 && credit <= 2000) {
      archivals.data.data.startB = 4
      archivals.data.data.isShowB = true
    }
    if (credit >= 2001) {
      archivals.data.data.startB = 5
      archivals.data.data.isShowB = true
    }
    return archivals
  },
  GETCREDITITEM: item => {
    if (item.credit >= 0 && item.credit <= 3) {
      item.showcreadimg = true
      item.creditImg = 1
    }
    if (item.credit >= 4 && item.credit <= 10) {
      item.showcreadimg = true
      item.creditImg = 2
    }
    if (item.credit >= 11 && item.credit <= 40) {
      item.showcreadimg = true
      item.creditImg = 3
    }
    if (item.credit >= 41 && item.credit <= 90) {
      item.showcreadimg = true
      item.creditImg = 4
    }
    if (item.credit >= 91 && item.credit <= 150) {
      item.showcreadimg = true
      item.creditImg = 5
    }
    if (item.credit >= 151 && item.credit <= 250) {
      item.showcreadeng = true
      item.creditdeng = 1
    }
    if (item.credit >= 251 && item.credit <= 500) {
      item.showcreadeng = true
      item.creditdeng = 2
    }
    if (item.credit >= 500 && item.credit <= 1000) {
      item.showcreadeng = true
      item.creditdeng = 3
    }
    if (item.credit >= 1001 && item.credit <= 2000) {
      item.showcreadeng = true
      item.creditdeng = 4
    }
    if (item.credit >= 2001) {
      item.showcreadeng = true
      item.creditdeng = 5
    }
    return item
  },
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
    return item
  },
  AFLCVALUE: {
    USERNAME: /^([0-9a-zA-Z]|[\u0391-\uFFE5]){2,}$/,
    // 中文
    ONLY_CHINESE: /^[\u4E00-\u9FA5]+$/,
    // 中英文
    CHINESE_AND_ENGLISH: /^[\u4E00-\u9FA5a-zA-Z]+$/,
    // 手机
    MOBILE: /^[1][3-8]\d{9}$/,
    // MOBILE: /^(13[0-9]|14[57]|15[01-37-9]|18[0235-9])\d{8}$/,
    // 身份证
    ID_CARD: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    // 英语和数字
    ENGLISH_AND_NUMBER: /^[a-zA-Z0-9]+$/,
    // 特殊字符
    SPECIAL_CHARACTER: /([^0-9a-zA-Z\u4E00-\u9FA5])+/,
    // 数字且最多只能有两位小数
    FLOAT2ING: /^\d+(\.\d{0,2})?$/,
    // 邮件地址
    EMAIL: /^[\w!#$%&\'*+\/=?^_`{|}~-]+(?:\.[\w!#$%&\'*+\/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/,
    // 非数字
    NO_NUMBER: /[\D|\.]/,
    // 纯数字
    ONLY_NUMBER: /^[0-9]+$/,
    // 纯字母
    ONLY_LETTER: /^[a-zA-Z]+$/,
    // 纯符号 !$^&*()+{}|:?-=[]./ 此种情况下这19个是特殊字符
    ONLY_PUNCTUATION: /^[~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,
    // 字母和数字
    ONLY_NUMBER_AND_LETTER: /^[0-9a-zA-Z]+$/,
    //  6-32位密码
    PWD_NUMBER_AND_LETTER: /^[0-9a-zA-Z_#]{6,32}$/,
    // 字母和符号
    ONLY_LETTER_AND_PUNCTUATION: /^[a-zA-Z~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,
    // 数字和符号
    ONLY_NUMBER_AND_PUNCTUATION: /^[0-9~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,
    // 同时包含字母数字和符号
    LETTER_AND_NUMBER_AND_PUNCTUATION: /^[a-zA-Z0-9~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,
    //       LETTER_AND_NUMBER_AND_PUNCTUATION : /(^[a-zA-Z]+$)&(^[0-9]+$)(^[~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$)/,
    // 纯数字从1开始
    ONLY_NUMBER_GT: /^[1-9]\d*$/,
    // 不可以为空格
    KONGE: /^[^ ]{6,16}$/,
    // 只含有英文字母、数字和下划线
    ONLY_ENGLISH_NUMBER: /^[A-Za-z0-9_]+$/,
    // 国内电话(区号-号码)
    TELEPHONE: /(^\d{3}-\d{8}$)|(^\d{4}-\d{7,8}$)/,
    // 邮编
    ZIPCODE: /^[1-9]\d{5}(?!\d)$/,
    // 保留两位小数点
    NUM_POINT: /^(([1-9][0-9])|(([0].\d{0,2}|[1-9][0-9].\d{0,2})))$/,
    NUM_POINT2: /^0\.\d\d?$/,
    // 支持百分比
    NUM_PERCENTAGE: /^([1-9]{1}[0-9]{0,1}|0|100)(.\d{1,2}){0,1}%$/
  }
}
