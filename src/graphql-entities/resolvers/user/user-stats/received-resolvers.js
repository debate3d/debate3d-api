const getList = require('./get-list')
const getDistinctCount = require('./get-distinct-count')

/**
 * votes received resolver
 * @method votesReceived
 */
const votesReceived = async ({ uid }, args, { db }) => {
  const where = { uid_author: uid }
  const listUid = await getList(db, 'topics', where)

  return getDistinctCount(db, 'votes_topic', 'uid_topic', listUid)
}

/**
 * votes received resolver
 * @method likesReceived
 */
const likesReceived = async ({ uid }, args, { db }) => {
  const where = { uid_author: uid }
  const listUid = await getList(db, 'cards', where)

  const whereDisctinct = { reaction: true }
  return getDistinctCount(db, 'reactions_users', 'uid_card', listUid, whereDisctinct)
}

/**
 * votes received resolver
 * @method dislikesReceived
 */
const dislikesReceived = async ({ uid }, args, { db }) => {
  const where = { uid_author: uid }
  const listUid = await getList(db, 'cards', where)

  const whereDisctinct = { reaction: false }
  return getDistinctCount(db, 'reactions_users', 'uid_card', listUid, whereDisctinct)
}

/**
 * votes received resolver
 * @method deckReceived
 */
const deckReceived = async ({ uid }, args, { db }) => {
  const where = { uid_author: uid }
  const listUid = await getList(db, 'cards', where)

  return getDistinctCount(db, 'decks_store', 'uid_card', listUid)
}

module.exports = {
  deckReceived,
  dislikesReceived,
  likesReceived,
  votesReceived
}
