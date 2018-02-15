const { SevenBoom } = require('graphql-apollo-errors')
const Bcrypt = require('bcrypt')
const { curry } = require('ramda')

const resetPassword = (db, data, token) => {
  if (data.password !== data.password_again) {
    return SevenBoom.badRequest('A senha nova e sua cópia não estão iguais')
  }

  const { email } = token
  const salt = Bcrypt.genSaltSync(10)
  const hash = Bcrypt.hashSync(data.password, salt)
  return db('users')
    .where('email', email)
    .update({ password: hash })
    .returning('email')
}

module.exports = curry(resetPassword)
