# get-reference

<!-- VDOC.badges travis; standard; npm; coveralls -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
[![Build Status](https://travis-ci.org/vigour-io/brisky-get-reference.svg?branch=master)](https://travis-ci.org/vigour-io/brisky-get-reference)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/brisky-get-reference.svg)](https://badge.fury.io/js/brisky-get-reference)
[![Coverage Status](https://coveralls.io/repos/github/vigour-io/brisky-get-reference/badge.svg?branch=master)](https://coveralls.io/github/vigour-io/brisky-get-reference?branch=master)

<!-- VDOC END -->

<!-- VDOC.jsdoc get.reference -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var ref = getReference(obj)

Get's the referenced [vigour-base](https://www.npmjs.com/package/vigour-base) object
- **obj** (*object*) - the reference we want to follow
- **returns** (*object*) ref - The referenced object or `undefined`

<!-- VDOC END -->

```javascript
const Base = require('vigour-base')
const getReference = require('brisky-get-reference')

const a = new Base({})
const b = new Base(a)
getReference(b) // a
```
