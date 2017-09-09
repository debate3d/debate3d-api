const auth_register = require('./auth_register')
const auth_me = require('./auth_me')
const auth_login = require('./auth_login')

exports.register = function (server, options, next) {
  server.route([
    auth_register,
    auth_login,
    auth_me
  ])
  return next()
}

exports.register.attributes = {
  name: 'auth-routes'
}
