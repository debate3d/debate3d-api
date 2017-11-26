const { path } = require('ramda')
const getAuthorFromCard = require('./get-author-from-card')

module.exports = (db, uid_card) => {
  return getAuthorFromCard(db, ['uid_author'], uid_card)
    .then(path(['uid_author']))
}
