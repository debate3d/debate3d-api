const admin = require('../../admin')

/**
 * @method sendMessage
 * @param  {Array<String>} tokens
 * @param  {Object}        payload
 * @param  {Object}        [options={}]
 * @return {Promise}
 */
const sendMessage = (tokens, payload, options = {}) => {
  console.log(tokens)
  return admin
    .messaging()
    .sendToDevice(tokens, payload)
}

module.exports = sendMessage
