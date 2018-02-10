const { isEmpty } = require('lodash')

/**
 * @method manipulateTokenDevice
 * @param  {String}        token
 * @param  {Array<String>} token_devices
 * @return {Array}
 */
const manipulateTokenDevice = (token, token_devices) => {
  if (isEmpty(token_devices)) {
    return [ token ]
  }

  const hasTokenOnArray = token_devices.filter(tokenDevice => tokenDevice === token)

  if (isEmpty(hasTokenOnArray)) {
    token_devices.push(token)
  }

  return token_devices
}

module.exports = manipulateTokenDevice
