const jwt = require('jsonwebtoken')

const checkTokenValid = token => {
  return new Promise((resolve, reject) => {
    return jwt.verify(token, process.env.API_KEY, (err, token) => {
      if (err) return reject(err)
      return resolve(token)
    })
  })
}

module.exports = checkTokenValid
