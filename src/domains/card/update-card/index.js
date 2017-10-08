const canUpdateCard = require('./can-update-card')
const updateCard = require('./update-card')

const { graphqlErrorHandler } = require('../../../helpers/bugnag')

const mutationUpdateCard = (uid_user, data, db) => {
  return canUpdateCard(db, uid_user, data.uid_card)
    .then(_ => updateCard(data, db, uid_user))
    .catch(graphqlErrorHandler)
}

module.exports = mutationUpdateCard
