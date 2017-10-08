const { routeErrorHandler } = require('../../helpers/bugnag')
const tables = require('../../helpers/tables')
const { selectWhere } = require('../../helpers/database')

const auth_me = {
  method: 'GET',
  path: '/auth/me',
  handler (request, reply) {
    const credentials = request.auth.credentials
    return selectWhere(tables.users(), '*', { uid: credentials.uid })
      .then(row => {
        const user = Object.assign({}, row[0])
        user.password = null
        return reply({
          data: user
        })
      })
      .catch(err => {
        if (err) throw err
        routeErrorHandler(err, 'badImplementation', reply)
      })
  },
  config: {
    auth: {
      strategy: 'jwt'
    }
  }
}

module.exports = auth_me
