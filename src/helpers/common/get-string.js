const { toLower } = require('lodash')
const sanitize = require('./sanitize')

/**
 * tranform 'String anything' to 'stringanything'
 * @method getString
 * @param {String} string
 * @returns {String}
 */
module.exports = string => toLower(sanitize(string).split(' ').join(''))
