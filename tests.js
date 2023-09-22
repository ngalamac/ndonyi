const permAlone = require('./no-repeats-please')
const assert = require('assert')

describe('Tests', function () {
  it('permAlone("aab") should return a number.', function () {
    assert(isNumber(permAlone('aab')))
  })
  it('permAlone("aab") should return 2.', function () {
    assert.strictEqual(permAlone('aab'), 2)
  })
  it('permAlone("aaa") should return 0.', function () {
    assert.strictEqual(permAlone('aaa'), 0)
  })
  it('permAlone("aabb") should return 8.', function () {
    assert.strictEqual(permAlone('aabb'), 8)
  })
  it('permAlone("abcdefa") should return 3600.', function () {
    assert.strictEqual(permAlone('abcdefa'), 3600)
  })
  it('permAlone("abfdefa") should return 2640.', function () {
    assert.strictEqual(permAlone('abfdefa'), 2640)
  })
  it('permAlone("zzzzzzzz") should return 0.', function () {
    assert.strictEqual(permAlone('zzzzzzzz'), 0)
  })
  it('permAlone("a") should return 1..', function () {
    assert.strictEqual(permAlone('a'), 1)
  })
  it('permAlone("aaab") should return 0.', function () {
    assert.strictEqual(permAlone('aaab'), 0)
  })
  it('permAlone("aaabb") should return 12.', function () {
    assert.strictEqual(permAlone('aaabb'), 12)
  })
})

function isNumber (val) {
  return typeof val === 'number'
}
