# cash-register-filter

[ ![Codeship Status for cdaringe/cash-register-filter](https://codeship.com/projects/4877c0b0-e4f7-0133-9457-6a2823a81008/status?branch=master)](https://codeship.com/projects/146484)

accepts a cash-value-like input and returns it in #.## format

# usage

Best demonstrated from its tests!

```js
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
```
