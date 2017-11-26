const jwt = require('jsonwebtoken')
const { isEmpty, omit } = require('lodash')

module.exports = (db, token) => {
  try {
    const decoded = jwt.verify(token, process.env.API_KEY)

    return db('users')
      .select(['*'])
      .where({ uid: decoded.uid })
      .first()
      .then(obj => {
        if (!isEmpty(obj)) {
          return omit(obj, ['password'])
        }

        return Promise.reject(new Error('Token inválido'))
      })
  } catch (err) {
    console.error(err)

    return Promise.reject(new Error('Token inválido'))
  }
}
