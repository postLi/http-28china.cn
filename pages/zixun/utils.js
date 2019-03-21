export function formatAnfaTms(str = '') {
  str = str + ''
  return str
    .replace(/href="http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?/gim, 'href="')
    .replace(/href="\/anfacms/gim, 'href="/zixun')
    .replace(/src="\/zixun\//gim, 'src="/anfacms/')
    .replace(/http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim, '/zixun')
}

export function makeAnfaTmsUrl(path) {
  return '/anfacms/' + path.replace('/zixun', '')
}
