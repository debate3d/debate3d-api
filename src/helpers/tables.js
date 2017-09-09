const db = require('../../db')

const tables = [
  'users',
  'decks_store',
  'cards',
  'votes_topic',
  'reactions_users',
  'topics',
  'position',
  'categories',
  'providers',
  'cupom',
  'subscribers'
]

const queries = tables.reduce((acc, tablename) => {
  acc[tablename] = () => db(tablename)
  return acc
}, {})

module.exports = queries
