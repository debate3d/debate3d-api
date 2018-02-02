const bugsnag = require('bugsnag')
const { SevenBoom } = require('graphql-apollo-errors')

bugsnag.register(process.env.BUGSNAG_KEY)

const graphqlErrorHandler = (err, options) => {
  bugsnag.notify(err)
  return SevenBoom.badRequest(err.message, options || {})
}

module.exports = graphqlErrorHandler
