const { curry } = require('ramda')

const {
  createTags,
  relationTagsWithTopic
} = require('../../tag')

/**
 * function that create tags and relation them
 * @param  {Function} db        Knex instance
 * @param  {Array<String>} tags
 * @param  {Object} topic
 * @return {Promise}
 */
const relationWithTags = (db, tags, topic) => {
  const uid_topic = topic.uid
  return createTags(db, tags)
    .then(tags => relationTagsWithTopic(db, tags, uid_topic))
    .then(() => topic)
}

module.exports = curry(relationWithTags)
