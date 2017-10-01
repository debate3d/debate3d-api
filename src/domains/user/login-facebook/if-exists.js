const { isEmpty } = require('lodash')

/**
 * return object or empty object
 * @param  {[type]} provider [description]
 * @return {[type]}          [description]
 */
module.exports = object => isEmpty(object)
  ? Promise.resolve({})
  : Promise.resolve(object)
