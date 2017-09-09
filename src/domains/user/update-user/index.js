const canUpdateUser = require('./can-update-user')
const updateUser = require('./update-user')

const reject = err => {
  console.error(err)
  return Promise.reject(new Error(err))
}

const mutationUpdateUser = (uid_user, data, db) => {
  return canUpdateUser(db, uid_user)
    .then(_ => updateUser(data, db, uid_user))
    .catch(reject)
}

module.exports = mutationUpdateUser
