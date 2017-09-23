const { curry } = require('ramda')

const position = curry((db, id) => db('position').where({ id }).first())

const tables = {
  tag: 'tags',
  position
}

module.exports = tables
