const { curry } = require('ramda')
const { selectWhere } = require('../../../../helpers/database')
const tables = require('../../../../helpers/tables')

/**
 * returning all topics
 * @param  {Array} result
 * @return {Promise}
 */
const returningTopics = result => {
  const maps = result
    .map(obj => selectWhere(tables.topics(), '*', { uid: obj.uid_topic })
      .first())
  return Promise.all(maps)
}

module.exports = curry(returningTopics)
