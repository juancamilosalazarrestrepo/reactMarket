const { db } = require('../database/database')
const { QueryTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (data) => {
  console.log('data', data)
  const { email, password } = data
  const user = await db.query('SELECT * FROM users WHERE email = :email', {
    replacements: {
      email
    },
    type: QueryTypes.SELECT
  })

  console.log('user', user)

  const passwordCorrect =
    user.length === 0 ? false : await bcrypt.compare(password, user[0].password)

  if (!passwordCorrect) {
    return { error: 'email o contraseña invalidos' }
  }

  const userForToken = {
    id: user[0].id,
    name: user[0].name,
    email: user[0].email
  }

  const token = jwt.sign(userForToken, process.env.SECRET)
  console.log('token', token)

  return { name: user[0].name, email: user[0].email, token }
}

module.exports = { login }
