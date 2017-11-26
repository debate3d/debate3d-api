/**
 * function that insert the relation on tags_to_topic
 * @param  {Function} db        Knex instance
 * @param  {Array<String>} tags
 * @param  {String} uid_topic
 * @return {Promise}
 */
const relationTagsWithTopic = (db, tags, uid_topic) => {
  const tagsMapped = tags.map(tag => {
    const relation = {
      uid_tag: tag.uid,
      uid_topic
    }

    return db('tags_to_topic')
      .insert(relation)
      .returning('id')
  })

  return Promise.all(tagsMapped)
}

module.exports = relationTagsWithTopic
