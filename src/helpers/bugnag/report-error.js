const bugsnag = require('bugsnag')

bugsnag.register(process.env.BUGSNAG_KEY)

const reportError = (err, options) => {
  return bugsnag.notify(err, options)
}

module.exports = reportError
