const { returnFields } = require('../../../helpers/common')
const { head } = require('lodash')

const args = [
  'uid',
  'uid_author',
  'uid_topic',
  'position',
  'created',
  'edited'
]

const updateCard = ({ uid_card, content }, db, uidUser) => {
  const fields = returnFields(args, { content })

  return db('cards')
    .update({ content })
    .returning(fields)
    .where({ uid: uid_card })
    .then(head)
}

module.exports = updateCard
