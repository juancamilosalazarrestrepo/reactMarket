const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authorization = req.get('authorization')
  let token = ''
  let decodedToken = {}
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
    try {
      decodedToken = jwt.verify(token, process.env.SECRET)
    } catch {}
  }

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token invalido' })
  }

  const { id: userId } = decodedToken

  req.userId = userId

  next()
}
