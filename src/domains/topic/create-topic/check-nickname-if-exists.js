const { isEmpty } = require('ramda')

const checkIfExists = boolean => {
  const error = new Error('Este tema já existe')
  return boolean ? Promise.resolve(true) : Promise.reject(error)
}

const checkNicknameIfExists = (db, nickname) => {
  return db('topics')
    .select('nickname')
    .where('nickname', nickname)
    .then(isEmpty)
    .then(checkIfExists)
}

module.exports = checkNicknameIfExists
