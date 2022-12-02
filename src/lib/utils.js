export function isObject (variable) {
  return Object.prototype.toString.call(variable) === '[object Object]'
}

export function isBoolean (variable) {
  return typeof variable === 'boolean'
}
