const { formatErrorGenerator } = require('graphql-apollo-errors')
const { reportError } = require('../../helpers/bugnag')
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
      reportError(finalError, bugsnagOptions)
      return finalError
    }
  }
}

module.exports = formatErrorGenerator(formatErrorOptions)
