const { isEmpty } = require('lodash')

const userSearch = (root, { filter }, { db }) => {
  const { email, nickname } = filter
  const isEqual = filter.is_equal || false

  const query = db('users')

  if (isEqual) {
    return isEmpty(email)
      ? query.where({ nickname })
      : query.where({ email })
  }

  return isEmpty(email)
    ? query.whereRaw(`nickname ilike '%${nickname}%'`)
    : query.whereRaw(`email ilike '%${email}%'`)
}

module.exports = userSearch
