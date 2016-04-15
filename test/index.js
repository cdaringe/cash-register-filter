const cashRegisterFilter = require('../src/')
const test = require('tape')
test('cashRegisterFilter', t => {
  t.equal(cashRegisterFilter(), '')
  t.equal(cashRegisterFilter(' '), '')
  t.equal(cashRegisterFilter('0'), '')
  t.equal(cashRegisterFilter('1'), '0.01')
  t.equal(cashRegisterFilter('12'), '0.12')
  t.equal(cashRegisterFilter('123'), '1.23')
  t.equal(cashRegisterFilter('1230'), '12.30')
  t.equal(cashRegisterFilter('01230'), '12.30')
  t.equal(cashRegisterFilter('xzy'), '')
  t.equal(cashRegisterFilter('$0'), '')
  t.equal(cashRegisterFilter('$0111'), '1.11')
  t.end();
})
