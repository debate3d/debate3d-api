const user = (root, { uid }, { dataLoader }) => dataLoader.users.load(uid)

module.exports = user
