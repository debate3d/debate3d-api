const bugsnag = require('bugsnag')
const { isProduction } = require('../common')

bugsnag.register(process.env.BUGSNAG_KEY)

const reportError = (err, options) => {
  if (isProduction(process.env)) {
    bugsnag.notify(err, options)
  }
  return null
}

module.exports = reportError
