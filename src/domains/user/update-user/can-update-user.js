const { selectWhere } = require('../../../helpers/database')

const canUpdateCard = (db, uid) => {
  const condition = { uid }
  return selectWhere(db('users'), 'uid', condition).first()
    .then(obj => (obj.uid === uid)
      ? Promise.resolve()
      : Promise.reject('Você não tem autorização para atualizar este usuário'))
}

module.exports = canUpdateCard
