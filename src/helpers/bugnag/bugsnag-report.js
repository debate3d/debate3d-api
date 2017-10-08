const Boom = require('boom')
const bugsnag = require('bugsnag')

bugsnag.register(process.env.BUGSNAG_KEY)

/**
 * helper for error handler for Hapi routes
 * @param  {Erro} err       Error from construct
 * @param  {String} type    Boom type for err
 * @param  {Function} reply Hapi reply interface
 * @return {Any}
 */
const routeErrorHandler = (err, type, reply) => {
  bugsnag.notify(err)
  console.error(err)
  return reply(Boom[type](err.message))
}

module.exports = routeErrorHandler
