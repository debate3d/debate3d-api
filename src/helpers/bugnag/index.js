const routeErrorHandler = require('./bugsnag-report')
const graphqlErrorHandler = require('./bugsnag-graphql')

module.exports = {
  graphqlErrorHandler,
  routeErrorHandler
}
