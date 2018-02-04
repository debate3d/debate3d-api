const schema = require('../schema')
const db = require('../../../db')
const { $loadUser } = require('../../helpers/auth')
const { isFunction } = require('lodash')
const factoryDataLoader = require('../../dataLoader')
const formatError = require('./format-error')

module.exports = req => {
  return new Promise((resolve, reject) => {
    const token = req.headers['authorization']
    return resolve({
      schema,
      context: {
        db,
        dataLoader: factoryDataLoader(db),
        $loadUser: (fn) => {
          const result = $loadUser(db, token)
          if (isFunction(fn)) {
            return result.then(fn)
          }
          return result
        }
      },
      formatError
    })
  })
}
