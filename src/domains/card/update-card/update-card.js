const { update } = require('../../../helpers/database')
const { returnFields } = require('../../../helpers/common')
const { head } = require('lodash')

const updateCard = ({ uid_card, content }, db, uidUser) => {
  const fields = returnFields(['uid', 'uid_author', 'uid_topic', 'position', 'created', 'edited'], { content })
  return update(db('cards'), { content }, { uid: uid_card }, fields).then(head)
}

module.exports = updateCard
