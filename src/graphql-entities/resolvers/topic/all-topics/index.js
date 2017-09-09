const mostVoted = require('./most-voted')
const mostCards = require('./most-cards')
const mostPonts = require('./most-ponts')
const count = require('./count')

module.exports = () => {
  return {
    count,
    mostVoted,
    mostCards,
    mostPonts
  }
}
