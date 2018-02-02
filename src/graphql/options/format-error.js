const { formatErrorGenerator } = require('graphql-apollo-errors')
const { reportError } = require('../../helpers/bugnag')

const formatErrorOptions = {
  publicDataPath: 'public',
  showLocations: true,
  showPath: true,
  hideSensitiveData: false,
  hooks: {
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
