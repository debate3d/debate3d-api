const records = require('./records')
const count = require('./count')

module.exports = () => {
  return {
    count,
    records
  }
}
