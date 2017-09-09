const hasAddReaction = require('./has-reactions-for-card')

const canAddReaction = (db, uid_user, uid_card) => {
  return hasAddReaction(db, uid_user, uid_card)
    .then(hasReaction => (hasReaction) ? Promise.reject(new Error('O usuário já reagiu a esse card')) : Promise.resolve())
}

module.exports = canAddReaction
