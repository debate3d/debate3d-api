module.exports = ({ uid_author }, args, { dataLoader }) => {
  return dataLoader.users.load(uid_author)
}
