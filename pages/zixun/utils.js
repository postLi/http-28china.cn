export function formatAnfaTms(str = '') {
  str = str + ''
  return str
    .replace(/href="http:\/\/192\.168\.1\.79/gim, 'href="')
    .replace(/href="\/anfacms/gim, 'href="/zixun')
    .replace(/src="\/zixun\//gim, 'src="/anfacms/')
}

export function makeAnfaTmsUrl(path) {
  return 'http://192.168.1.180/anfacms/' + path.replace('/zixun', '')
}
