module.exports = ({ id_position }, args, { dataLoader }) => {
  return dataLoader.position.load(id_position)
}
