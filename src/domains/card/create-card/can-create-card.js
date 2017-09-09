const hasCardsForTopic = require('./has-cards-for-topic')

const canCreateCard = (db, uid_user, uid_topic) => {
  return hasCardsForTopic(db, uid_user, uid_topic)
    .then(hasCards => (hasCards) ? Promise.reject(new Error('O usuário já possui um card neste tópico')) : Promise.resolve())
}

module.exports = canCreateCard
