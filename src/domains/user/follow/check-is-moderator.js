const { SevenBoom } = require('graphql-apollo-errors')

const performCheck = user => {
  if (!user.is_moderator) {
    return Promise.reject(SevenBoom('O usuário não é um moderador'))
  }

  return null
}

const checkIsModerator = (db, data) => {
  return db('users')
    .select('is_moderator')
    .where('uid', data.uid_moderator)
    .first()
    .then(performCheck)
}

module.exports = checkIsModerator
