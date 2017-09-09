const topic = (root, { uid }, { db }) => db('topics').where({ uid }).first()

const bestTopic = (root, args, { db }) => db('topics').orderBy('ponts', 'desc').first()

const topics = require('../all-topics')

module.exports = {
  topic,
  bestTopic,
  topics
}
