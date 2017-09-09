const getAuthorFromCard = require('./get-author-from-card')

module.exports = (db, uid_card) => {
  return getAuthorFromCard(db, ['uid_author'], uid_card)
    .then(obj => obj.uid_author)
}
