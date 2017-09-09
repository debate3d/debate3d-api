const post_subscriber = require('./post_subscriber')
const post_coupon = require('./post_coupon')

exports.register = function (server, options, next) {
  server.route([
    post_subscriber,
    post_coupon
  ])

  return next()
}

exports.register.attributes = {
  name: 'subscriber-routes'
}
