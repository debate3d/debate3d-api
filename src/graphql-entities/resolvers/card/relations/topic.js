module.exports = ({ uid_topic }, args, { dataLoader }) => {
  return dataLoader.topics.load(uid_topic)
}
