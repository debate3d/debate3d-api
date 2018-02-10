const { defaultsDeep, omit } = require('lodash')
const generator = require('node-uuid')

const { returnDateToDb } = require('../../../../helpers/common/')

/**
 * get object and return a user object
 * The structure for object is:
 * { name, email, password, avatar_id, cpf }
 * @method factoryUser
 * @param {Object} data
 * @returns {Object}
 */
module.exports = data => {
  const { name } = data
  const user = omit(data, ['name'])

  const common = {
    created: returnDateToDb(),
    uid: generator(),
    name,
    cep: '',
    facebook: '',
    twitter: '',
    instagram: '',
    youtube: '',
    site: '',
    ponts: 0,
    is_verified: false,
    administrator: false,
    is_moderator: false,
    is_moderator_verified: false,
    subscriber: false,
    is_debater: false,
    token_devices: null
  }

  return defaultsDeep({ }, common, user)
}
