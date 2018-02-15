const { createToken } = require('../../../helpers/auth')

const loadUser = email => {
  const token = createToken({ email })
  return Promise.resolve({ token, email })
}

module.exports = loadUser
