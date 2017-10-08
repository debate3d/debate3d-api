const bugsnag = require('bugsnag')

bugsnag.register(process.env.BUGSNAG_KEY)

const graphqlErrorHandler = err => {
  bugsnag.notify(err)
  console.error(err)
  return Promise.reject(err)
}

module.exports = graphqlErrorHandler
