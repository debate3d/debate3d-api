const { selectWhere } = require('../../../helpers/database')

const canUpdateCard = (db, uid_user, uid_card) => {
  const condition = {
    uid: uid_card
  }
  return selectWhere(db('cards'), 'uid_author', condition).first()
    .then(obj => (obj.uid_author === uid_user) ? Promise.resolve() : Promise.reject('Você não tem autorização para atualizar o card'))
}

module.exports = canUpdateCard
