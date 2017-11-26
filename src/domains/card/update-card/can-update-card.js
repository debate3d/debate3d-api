const canUpdateCard = (db, uid_user, uid_card) => {
  const condition = {
    uid: uid_card
  }
  return db('cards')
    .select('uid_author')
    .where(condition)
    .first()
    .then(obj => {
      return (obj.uid_author === uid_user)
        ? Promise.resolve()
        : Promise.reject(new Error('Você não tem autorização para atualizar o card'))
    })
}

module.exports = canUpdateCard
