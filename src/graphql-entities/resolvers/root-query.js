const packageJson = require('../../../package.json')

const version = (root, args, context) => {
  return packageJson.version
}

module.exports = {
  version
}
