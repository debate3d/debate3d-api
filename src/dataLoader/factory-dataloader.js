const DataLoader = require('dataloader')

/**
 * factory DataLoader
 * @param  {Function} loader
 * @return {Promise}
 */
const factoryDataLoader = loader => {
  return new DataLoader(keys => Promise.all(keys.map(loader)))
}

module.exports = factoryDataLoader
