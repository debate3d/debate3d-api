const { has, identity, pickBy, isEmpty } = require('lodash')

const deleteImages = require('./delete-images')
const isTheAuthor = require('./is-the-author')

module.exports = (data, db) => {
  const { uid, user, content, url_image } = data
  return isTheAuthor(uid, user, db)
    .then(result => {
      const model = { content, url_image }
      const updateObj = pickBy(model, identity)

      if (has(data, 'url_image')) {
        deleteImages(result.url_image)
      }
      return db('topics')
        .update(updateObj)
        .where({ uid })
        .then(result => {
          return !isEmpty(result)
        })
    })
}
