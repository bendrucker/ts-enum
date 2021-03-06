'use strict'

var extend = require('xtend')
var invert = require('obj-invert')

module.exports = function tsEnum (obj) {
  return extend({}, obj, invert(obj))
}
