// 文字溢出过滤器
export const textOverflow = (text, customLength) => {
  const length = customLength || text.length
  const cansub = length && text && text.length > length
  return cansub ? text.substr(0, length) + '...' : text
}
