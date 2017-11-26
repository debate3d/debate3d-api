const canUpdateCard = (db, uid) => {
  const condition = { uid }
  return db('users')
    .select('uid')
    .where(condition)
    .first()
    .then(obj => {
      return (obj.uid === uid)
        ? Promise.resolve()
        : Promise.reject(new Error('Você não tem autorização para atualizar este usuário'))
    })
}

module.exports = canUpdateCard
