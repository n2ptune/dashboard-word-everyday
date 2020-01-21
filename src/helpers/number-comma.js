export default num => {
  if (!Number.isInteger(num) || !Number.isFinite(num) || parseInt(num) < 1000)
    return num

  const reg = /(^[+-]?\d+)(\d{3})/
  let n = parseInt(num) + ''

  while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2')

  return n
}
