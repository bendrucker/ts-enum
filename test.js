'use strict'

var test = require('tape')
var tsEnum = require('./')

test(function (t) {
  t.deepEqual(tsEnum({foo: 'bar'}), {
    foo: 'bar',
    bar: 'foo'
  })
  t.end()
})
