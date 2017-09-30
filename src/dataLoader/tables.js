const { curry } = require('ramda')

const position = curry((db, id) => db('position').where({ id }).first())

const tables = {
  tag: 'tags',
  users: 'users',
  topics: 'topics',
  cards: 'cards',
  position
}

module.exports = tables
