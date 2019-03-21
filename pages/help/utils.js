export function formatAnfaTms(str = '') {
  str = str + ''
  return str
    .replace(
      /href=("|')http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim,
      'href=$1/help'
    )
    .replace(/src="\/zixun\//gim, 'src="/anfacms/')
    .replace(/href="\/anfacms/gim, 'href="/help')
    .replace(/http:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/anfacms/gim, '/help')
}

export function makeAnfaTmsUrl(path) {
  return '/anfacms/' + path.replace('/help', '')
}
