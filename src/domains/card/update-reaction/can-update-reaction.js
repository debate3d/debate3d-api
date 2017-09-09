const hasAddReaction = require('./has-reactions-for-card')

const canAddReaction = (db, uid_user, uid_card) => {
  return hasAddReaction(db, uid_user, uid_card)
    .then(hasReaction => (hasReaction)
      ? Promise.resolve()
      : Promise.reject(new Error('O usuário ainda não reagiu a este card')))
}

module.exports = canAddReaction
