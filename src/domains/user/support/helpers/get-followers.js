const { curry } = require('ramda')
const { map } = require('lodash')

/**
 * @method getFollowers
 * @param  {KnexInstance} db
 * @param  {String}       uidModerator
 * @return {Promise}
 */
const getFollowers = (db, uidModerator) => {
  return db('moderators_followers')
    .select('uid_user')
    .where('uid_moderator', uidModerator)
    .where('deleted', false)
    .then(users => map(users, 'uid_user'))
}

module.exports = curry(getFollowers)
