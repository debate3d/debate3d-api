const createTag = require('./create-tag')

/**
 * functions that create tag or return the same if exists
 * @param  {Function} db        Knex instance
 * @param  {Array<String>} tags Can be label for tag or uid
 * @return {Promise<Array>}
 */
const createTags = (db, tags) => {
  const tagsMapped = tags.map(tag => {
    return db('tags').whereRaw(`uid = '${tag}' OR label = '${tag}'`)
      .then(rows => {
        // if tag === uid_tag, return the obj
        if (rows.length !== 0) return db('tags').where({ uid: tag }).first()

        // if not, create a new tag
        return createTag(db, tag)
      })
  })

  return Promise.all(tagsMapped)
}

module.exports = createTags
