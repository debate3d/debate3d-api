const { formatErrorGenerator } = require('graphql-apollo-errors')
const { reportError } = require('../../helpers/bugnag')
const { isProduction } = require('../../helpers/common')
const { SevenBoom } = require('graphql-apollo-errors')

const formatErrorOptions = {
  showLocations: true,
  showPath: true,
  hideSensitiveData: false,
  hooks: {
    onOriginalError (err) {
      if (err.isBoom) return err
      return SevenBoom.badRequest(err)
    },
    onFinalError: (finalError) => {
      console.error(finalError)
      const bugsnagOptions = {
        metaData: finalError
      }
      if (isProduction(process.env)) {
        reportError(finalError, bugsnagOptions)
      }
      return finalError
    }
  }
}

module.exports = formatErrorGenerator(formatErrorOptions)
