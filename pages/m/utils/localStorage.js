let set = function(key, data) {
  return window.localStorage.setItem(key, window.JSON.stringify(data))
}

let set_s = function(key, data) {
  return window.sessionStorage.setItem(key, window.JSON.stringify(data))
}

let get = function(key) {
  var v = window.localStorage.getItem(key)
  if (v === null) return null
  return window.JSON.parse(v)
}

let get_s = function(key) {
  var v = window.sessionStorage.getItem(key)
  if (v === null) return null
  return window.JSON.parse(v)
}
let remove = function(key) {
  return window.localStorage.removeItem(key)
}
let remove_s = function(key) {
  return window.sessionStorage.removeItem(key)
}

export default { get, set, remove, get_s, set_s, remove_s }
