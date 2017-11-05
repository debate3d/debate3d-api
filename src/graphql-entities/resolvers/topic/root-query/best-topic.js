const bestTopic = (root, args, { db }) => db('topics').orderBy('ponts', 'desc').first()

module.exports = bestTopic
