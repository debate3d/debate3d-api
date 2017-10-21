const getCount = require('./get-count')

const cardsCreated = ({ uid }, args, { db }) => {
  const where = { uid_author: uid }

  return getCount(db, 'cards', where)
}

const topicsCreated = ({ uid }, args, { db }) => {
  const where = { uid_author: uid }

  return getCount(db, 'topics', where)
}

const reactionsGived = ({ uid }, args, { db }) => {
  const where = { uid_user: uid }

  return getCount(db, 'reactions_users', where)
}

const deckGived = ({ uid }, args, { db }) => {
  const where = { uid_user: uid }

  return getCount(db, 'decks_store', where)
}

const votesGived = ({ uid }, args, { db }) => {
  const where = { uid_user: uid }

  return getCount(db, 'votes_topic', where)
}

module.exports = {
  cardsCreated,
  deckGived,
  reactionsGived,
  topicsCreated,
  votesGived
}
