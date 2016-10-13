'use strict'

/**
 * @id get.reference
 * @function getReference
 * Get's the referenced [vigour-base](https://www.npmjs.com/package/vigour-base) object
 * @param {object} obj - the reference we want to follow
 * @returns {object} ref - The referenced object or `undefined`
 */
module.exports = function (obj) {
  const referenced = obj.val
  if (referenced &&
    referenced.isBase &&
    referenced.val !== null) {
    return referenced
  }
}
