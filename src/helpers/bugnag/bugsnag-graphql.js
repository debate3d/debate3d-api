const bugsnag = require('bugsnag')
const { SevenBoom } = require('graphql-apollo-errors')
const { isProduction } = require('../common')

bugsnag.register(process.env.BUGSNAG_KEY)

const graphqlErrorHandler = (err, options) => {
  if (isProduction(process.env)) {
    bugsnag.notify(err)
  }
  return SevenBoom.badRequest(err.message, options || {})
}

module.exports = graphqlErrorHandler
