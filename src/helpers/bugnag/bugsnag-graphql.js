const bugsnag = require('bugsnag')

bugsnag.register(process.env.BUGSNAG_KEY)

const graphqlErrorHandler = err => {
  bugsnag.notify(err)
  return err
}

module.exports = graphqlErrorHandler
