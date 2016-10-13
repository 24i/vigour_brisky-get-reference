'use strict'

const test = require('tape')
const Base = require('vigour-base')
const getReference = require('../')

const a = new Base({})
const b = new Base(a)

test('getReference', function (t) {
  t.plan(2)
  t.equals(getReference(b), a, 'getReference(b) === a')
  t.equals(getReference(a), undefined, 'getReference(a) === undefined')
})
