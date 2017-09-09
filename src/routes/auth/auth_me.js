const Boom = require('boom')

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
        reply(Boom.badImplementation(err))
        if (err) throw err
      })
  },
  config: {
    auth: {
      strategy: 'jwt'
    }
  }
}

module.exports = auth_me
