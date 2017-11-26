const { curry } = require('ramda')
const { head } = require('lodash')
const factoryTag = require('./factory')

/**
 * create tag
 * @param  {Function} db  Knex instance
 * @param  {String} label
 * @return {Promise}
 */
const createTag = (db, label) => {
  const tag = factoryTag(label)
  return db('tags')
    .insert(tag)
    .returning([ 'uid', 'label' ])
    .then(head)
}

module.exports = curry(createTag)
