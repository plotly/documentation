'use strict'

var tape = require('tape')
var toPX = require('../topx')
var parseUnit = require('parse-unit')
var almostEqual = require('almost-equal')

var units = ['em', 'ch', 'ex', 'rem', 'px', 'vw', 'vh', 'vmin', 'vmax', 'in', 'cm', 'mm', 'pt', 'pc']

var fontSizes = ['20px', '10px', '1em', '3in']

tape('test to-px', function(t) {

  function testUnitsEmpirically(element) {
    var testDiv = document.createElement('div')
    element.appendChild(testDiv)
    for(var i=0; i<units.length; ++i) {
      testDiv.style['font-size'] = '128' + units[i]
      var expected = parseUnit(getComputedStyle(testDiv).getPropertyValue('font-size'))[0]/128
      var actual = toPX(units[i], element)

      t.ok(almostEqual(actual, expected, 0.005, almostEqual.FLT_EPSILON), 
        'testing: ' + units[i] + ' ' + actual + ' ~ ' + expected)
    }
    element.removeChild(testDiv)
  }

  testUnitsEmpirically(document.body)

  var container = document.createElement('div')
  document.body.appendChild(container)
  for(var i=0; i<fontSizes.length; ++i) {
    container.style['font-size'] = fontSizes[i]
    testUnitsEmpirically(container)
  }

  var header = document.createElement('h1')
  document.body.appendChild(header)
  testUnitsEmpirically(header)

  t.end()
})