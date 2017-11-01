const { head, merge } = require('lodash')

const { update } = require('../../../helpers/database')
const { returnFields } = require('../../../helpers/common')

const updateUser = (data, db, uidUser) => {
  const fields = returnFields(['uid', 'name', 'cpf', 'cep', 'facebook', 'twitter', 'instagram', 'site', 'youtube'], data)
  const merged = merge(data, { is_verified: true })
  return update(db('users'), merged, { uid: uidUser }, fields).then(head)
}

module.exports = updateUser
