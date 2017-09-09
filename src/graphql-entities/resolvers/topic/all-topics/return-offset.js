/**
 * returng offset number
 * @param  {Integer} page
 * @param  {Integer} limit
 * @return {Integer}
 */
module.exports = (page, limit) => {
  const offset = (page - 1) * limit
  return offset
}
