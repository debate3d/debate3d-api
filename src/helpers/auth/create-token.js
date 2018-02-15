const jwt = require('jsonwebtoken')

const options = {
  algorithm: 'HS256',
  expiresIn: '1h'
}

/*
 * Create JWT function. Receie the following params:
 * + uid: user identification
 * + email: user email
*/
module.exports = user => jwt.sign(user, process.env.API_KEY, options)
