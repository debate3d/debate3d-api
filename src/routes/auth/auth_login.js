const Boom = require('boom')
const Bcrypt = require('bcrypt')
const Joi = require('joi')
const db = require('../../../db')

const { routeErrorHandler } = require('../../helpers/bugnag')
const { createToken } = require('../../helpers/auth')

const auth_register = {
  method: 'POST',
  path: '/auth/login',
  handler (request, reply) {
    const { email, password } = request.payload

    return db('users')
      .select(['uid', 'email', 'password'])
      .where({ email })
      .then(rows => {
        if (rows.length === 1) {
          const user = rows[0]
          return Bcrypt.compare(password, user.password, (err, res) => {
            if (err) {
              throw err
            }

            if (!res) {
              return reply(Boom.badRequest('Não existe um usuário com estes dados no banco de dados'))
            }

            return reply.returnToken(createToken({
              uid: user.uid
            }))
          })
        }
        return reply(Boom.badRequest('Não há usuario com este email no banco de dados'))
      })
      .catch(err => {
        if (err) throw err
        routeErrorHandler(err, 'badImplementation', reply)
      })
  },
  config: {
    validate: {
      payload: {
        email: Joi.string().email().required(),
        password: Joi.string().min(1).max(50).required()
      }
    }
  }
}

module.exports = auth_register
