const moment = require('moment')

const checkCupomInsideDate = result => {
  const now = moment().format('YYYY-MM-DD')
  const { finish } = result
  return moment(now).isBefore(finish)
    ? Promise.resolve(true)
    : Promise.reject(new Error('Cupom inválido'))
}

module.exports = (db, data) => {
  const { cupom } = data

  return db('cupom')
    .where({ value: cupom })
    .first()
    .then(checkCupomInsideDate)
}
