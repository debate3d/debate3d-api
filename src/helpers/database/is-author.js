const isTheSame = (uid, otherUid) => uid === otherUid

const isAuthor = (db, database, uid_user, uid, msgError) => {
  return db(database).select('uid_author').where({ uid: uid })
    .first()
    .then(obj => isTheSame(obj.uid_author, uid_user))
    .then(has => {
      console.log(has)
      return (!has) ? Promise.resolve() : Promise.reject(msgError)
    })
}

module.exports = isAuthor
