const { head, merge } = require('lodash')

const { returnFields } = require('../../../helpers/common')

const args = [
  'uid',
  'name',
  'cpf',
  'cep',
  'facebook',
  'twitter',
  'instagram',
  'site',
  'youtube'
]

const updateUser = (data, db, uidUser) => {
  const fields = returnFields(args, data)
  const merged = merge(data, { is_verified: true })

  return db('users')
    .update(merged)
    .returning(fields)
    .where({ uid: uidUser })
    .then(head)
}

module.exports = updateUser
