const hasAddVote = require('./has-votes-for-topic')

const canVoteTopic = (db, uid_user, uid_topic) => {
  return hasAddVote(db, uid_user, uid_topic)
    .then(hasReaction => {
      return hasReaction
        ? Promise.reject(new Error('O usuário não pode votar no tópico'))
        : Promise.resolve()
    })
}

module.exports = canVoteTopic
