const generator = require('node-uuid')

module.exports = (label) => {
  const uid = generator()
  return {
    uid,
    label
  }
}
