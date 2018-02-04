const { curry } = require('ramda')
const loadRelationship = require('./load-relationship')
const checkIsModerator = require('./check-is-moderator')
const createRelationship = require('./create-relationship')

const follow = (db, data, user) => {
  return checkIsModerator(db, data)
    .then(() => loadRelationship(db, data))
    .then(createRelationship(db, data))
}

module.exports = curry(follow)
