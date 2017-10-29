const { head } = require('lodash')

const { update } = require('../../../helpers/database')
const { returnFields } = require('../../../helpers/common')

const updateUser = (data, db, uidUser) => {
  const fields = returnFields(['uid', 'name', 'cpf', 'cep', 'facebook', 'twitter', 'instagram', 'site', 'youtube'], data)
  return update(db('users'), data, { uid: uidUser }, fields).then(head)
}

module.exports = updateUser
