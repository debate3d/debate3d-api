const Boom = require('boom')
const Bcrypt = require('bcrypt')
const Joi = require('joi')
const moment = require('moment')
const generator = require('node-uuid')

const tables = require('../../helpers/tables')
const { selectWhere, insert } = require('../../helpers/database')
const { createToken } = require('../../helpers/auth')

const auth_register = {
  method: 'POST',
  path: '/auth/users',
  handler (request, reply) {
    const { email, password, name } = request.payload
    return selectWhere(tables.users(), 'email', { email })
      .then(rows => {
        if (rows.length === 0) {
          const salt = Bcrypt.genSaltSync(10)
          const hash = Bcrypt.hashSync(password, salt)
          const created = moment().format('YYYY-MM-DD')
          const uid = generator()
          const user = {
            email,
            password: hash,
            created,
            uid,
            ponts: 0,
            name
          }
          return insert(tables.users(), user)
            .then(rows => {
              const uid = rows[0]
              if (uid) {
                return reply.returnToken(createToken({ uid }))
              }
              return reply(Boom.badImplementation('Ocorreu um erro no servidor'))
            })
            .catch(err => {
              reply(Boom.badImplementation('Ocorreu um erro no servidor'))
              if (err) throw err
            })
        }
        return reply({
          message: `O email ${email} já está cadastrado no banco de dados`
        })
      })
      .catch(err => {
        reply(Boom.badImplementation('Ocorreu um erro no servidor'))
        if (err) throw err
      })
  },
  config: {
    validate: {
      payload: {
        email: Joi.string().email().required(),
        password: Joi.string().min(1).max(50).required(),
        name: Joi.string().max(50).required()
      }
    }
  }
}

module.exports = auth_register
