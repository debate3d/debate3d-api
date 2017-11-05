const topic = (root, { uid }, { dataLoader }) => dataLoader.topics.load(uid)

module.exports = topic
