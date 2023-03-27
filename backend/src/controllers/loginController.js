const loginService = require('../services/loginService')

const login = async (req, res) => {
  const { body } = req
  const loginResponse = await loginService.login(body)

  res.json(loginResponse)
}

module.exports = {
  login
}
