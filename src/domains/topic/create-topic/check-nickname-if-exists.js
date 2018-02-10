const { isEmpty } = require('ramda')
const { SevenBoom } = require('graphql-apollo-errors')

const checkIfExists = boolean => {
  return boolean ? Promise.resolve(true) : SevenBoom.badRequest('Este tema já existe')
}

const checkNicknameIfExists = (db, nickname) => {
  return db('topics')
    .select('nickname')
    .where('nickname', nickname)
    .then(isEmpty)
    .then(checkIfExists)
}

module.exports = checkNicknameIfExists
