const loginService = require('../services/loginService')

const login = async (req, res) => {
  const { body } = req
  const { email } = body
  const loginResponse = await loginService.login(body)

  res.json(loginResponse)
}

module.exports = {
  login
}
