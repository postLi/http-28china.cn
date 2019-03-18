export function formatAnfaTms(str = '') {
  str = str + ''
  return str
    .replace(/href=("|')http:\/\/192\.168\.1\.79\/anfacms/gim, 'href=$1/help')
    .replace(/src="\/zixun\//gim, 'src="/anfacms/')
    .replace(/href="\/anfacms/gim, 'href="/help')
    .replace(/http:\/\/192.168.1.79\/anfacms/gim, '/help')
}

export function makeAnfaTmsUrl(path) {
  return 'http://192.168.1.180/anfacms/' + path.replace('/help', '')
}
