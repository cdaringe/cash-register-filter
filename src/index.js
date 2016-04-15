module.exports = function cashRegisterFilter(input) {
  input = input || ''
  input = input.replace(/[^\d]/ig, '')
  input = input.split('')
  while (input[0] === '0') { input.shift() }
  if (input.length === 0) { return '' }
  else if (input.length === 1) { input.unshift('0.0') }
  else if (input.length === 2) {
    input.unshift('0.')
  } else {
    input.splice(input.length - 2, 0, '.')
  }
  return input.join('');
}
