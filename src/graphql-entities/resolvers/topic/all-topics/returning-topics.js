const { curry } = require('ramda')

/**
 * returning all topics
 * @param  {KneInstance} db
 * @param  {Array}       result
 * @return {Promise}
 */
const returningTopics = (db, result) => {
  const maps = result.map(obj => {
    return db('topics')
      .select('*')
      .where({ uid: obj.uid_topic })
      .first()
  })

  return Promise.all(maps)
}

module.exports = curry(returningTopics)
