const canUpdateCard = require('./can-update-card')
const updateCard = require('./update-card')

const reject = err => {
  console.error(err)
  return Promise.reject(new Error(err))
}

const mutationUpdateCard = (uid_user, data, db) => {
  return canUpdateCard(db, uid_user, data.uid_card)
    .then(_ => updateCard(data, db, uid_user))
    .catch(reject)
}

module.exports = mutationUpdateCard
