module.exports = ({ id }, { uid }) => {
  const provider = {
    auth_code: id,
    uid_user: uid,
    provider: 'facebook'
  }

  return provider
}
