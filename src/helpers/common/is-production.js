/**
 * @method isProduction
 * @param  {Object} env dot-env instance
 * @return {Boolean}
 */
const isProduction = env => env.NODE_ENV === 'PRODUCTION'

module.exports = isProduction
