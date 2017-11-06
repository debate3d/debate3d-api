const Boom = require('boom')
const Bcrypt = require('bcrypt')
const Joi = require('joi')
const { isEmpty } = require('lodash')
const { head } = require('ramda')

const { routeErrorHandler } = require('../../helpers/bugnag')
const { factoryUser } = require('../../domains/user/support/factories')
const db = require('../../../db')
const { createToken } = require('../../helpers/auth')

const auth_register = {
  method: 'POST',
  path: '/auth/users',
  handler ({ payload }, reply) {
    const { email, password, name, nickname } = payload
    return db('users').where({ email })
      .then(rows => {
        if (isEmpty(rows)) {
          const salt = Bcrypt.genSaltSync(10)
          const hash = Bcrypt.hashSync(password, salt)
          const user = factoryUser({ password: hash, email, name, nickname })
          console.log(user)
          return db('users')
            .insert(user)
            .returning('uid')
            .then(head)
            .then(uid => reply.returnToken(createToken({ uid })))
            .catch(err => {
              routeErrorHandler(err, 'badImplementation', reply)
            })
        }
        const msgErr = `O email ${email} já está cadastrado no banco de dados`
        return reply(Boom.unauthorized(msgErr))
      })
      .catch(err => {
        routeErrorHandler(err, 'badImplementation', reply)
      })
  },
  config: {
    validate: {
      payload: {
        email: Joi.string().email().required(),
        password: Joi.string().min(1).max(50).required(),
        name: Joi.string().max(50).required(),
        nickname: Joi.string().max(15).required()
      }
    }
  }
}

module.exports = auth_register
