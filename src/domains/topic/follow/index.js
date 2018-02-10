const { curry } = require('ramda')
const loadRelationship = require('./load-relationship')
const createRelationship = require('./create-relationship')

const follow = (db, data, user) => {
  return loadRelationship(db, data)
    .then(createRelationship(db, data))
}

module.exports = curry(follow)
