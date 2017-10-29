const { curry, isEmpty, not } = require('ramda')

const { uploadFile } = require('../../firebase')

const getImage = (db, file, topic) => {
  return uploadFile(file, topic.uid, 'topics')
    .then(({ url }) => {
      return db('topics')
        .update({ picture: url })
        .returning(['uid'])
        .then(not(isEmpty))
    })
}

module.exports = curry(getImage)
