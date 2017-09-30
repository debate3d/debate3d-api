const topic = (root, { uid }, { dataLoader }) => dataLoader.topics.load(uid)

const bestTopic = (root, args, { db }) => db('topics').orderBy('ponts', 'desc').first()

const topics = require('../all-topics')

module.exports = {
  topic,
  bestTopic,
  topics
}
