const Boom = require('boom')
const Joi = require('joi')
const moment = require('moment')
const { selectWhere } = require('../../helpers/database')

const tables = require('../../helpers/tables')

const post_coupon = {
  method: 'POST',
  path: '/subscribers/coupon',
  handler (request, reply) {
    const { coupon } = request.payload
    return selectWhere(tables.cupom(), [ 'value', 'initial', 'finish' ], { value: coupon })
      .then(row => {
        if (row.length === 0) return reply.notSuccess()
        const now = moment()
        if (moment(now).isAfter(row.finish)) {
          return reply.notSuccess()
        }
        return reply.success()
      })
      .catch(function (err) {
        reply(Boom.badImplementation(err))
        if (err) throw err
      })
  },
  config: {
    validate: {
      payload: {
        coupon: Joi.string().required(),
        id_user: Joi.string().required()
      }
    },
    auth: {
      strategy: 'jwt'
    }
  }
}

module.exports = post_coupon
