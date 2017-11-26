const generator = require('node-uuid')
const { returnDateToDb, getStringDashed } = require('../../../helpers/common')

const factoryTopic = data => {
  const nickname = getStringDashed(data.title)

  return Object.assign({ }, data, {
    uid: generator(),
    created: returnDateToDb(),
    ponts: 0,
    nickname
  })
}

module.exports = factoryTopic
