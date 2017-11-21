const { has, keys, size } = require('lodash')

const user = (root, args, { db, dataLoader }) => {
  if (size(keys(args)) > 1) {
    return Promise.reject(new Error('Há mais de um parametro para buscar um tema'))
  }
  if (size(keys(args)) > 1) {
    return Promise.reject(new Error('É esperado um parametro'))
  }
  if (has(args, 'nickname')) {
    return db('topics')
      .where('nickname', args.nickname)
      .first()
  }
  if (has(args, 'uid')) {
    return dataLoader.topics.load(args.uid)
  }
  return null
}

module.exports = user
