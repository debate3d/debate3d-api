const { deburr } = require('lodash')

/**
 * transforms 'Emanuel Gonçalves' to Emanuel Goncalves
 * @method sanitize
 * @param {String}
 * @returns {String}
 */
module.exports = deburr
