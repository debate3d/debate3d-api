const { isUndefined } = require('lodash')

const ifExists = result => isUndefined(result)
  ? Promise.reject(new Error('Cupom inválido'))
  : Promise.resolve(true)

module.exports = (db, data) => {
  const { cupom } = data

  return db('cupom')
    .where({ value: cupom })
    .first()
    .then(ifExists)
}
