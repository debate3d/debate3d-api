const { toInteger } = require('lodash')

const hasEntity = countObj => toInteger(countObj.count) !== 0

module.exports = hasEntity
