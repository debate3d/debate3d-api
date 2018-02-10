const { curry } = require('ramda')
const { map } = require('lodash')

/**
 * @method getTopicFollowers
 * @param  {KnexInstance} db
 * @param  {String}       uidTopic
 * @return {Promise}
 */
const getTopicFollowers = (db, uidTopic) => {
  return db('topics_followers')
    .select('uid_user')
    .where('uid_topic', uidTopic)
    .where('deleted', false)
    .then(users => map(users, 'uid_user'))
}

module.exports = curry(getTopicFollowers)
