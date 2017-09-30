const { Factory, GraphQLDate } = require('graphql-moment')

module.exports = {
  ISODate: GraphQLDate,
  Date: Factory('DD-MM-YYYY', 'Date'),
  Timestamp: Factory('DD-MM-YYYY', 'Timestamp')
}
