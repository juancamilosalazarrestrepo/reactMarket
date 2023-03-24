const bcrypt = require('bcrypt')
const saltRounds = 10
const userService = require('../services/userService')

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers()
  res.json({ status: 'OK', data: allUsers })
}

const getOneUser = async (req, res) => {
  const user = await userService.getOneUser(req.params.userId)
  res.json(user)
}

const createNewUser = async (req, res) => {
  const { body } = req

  if (!body.name || !body.password || !body.email || !body.phone) {
    return
  }

  const { password } = body

  const salt = bcrypt.genSaltSync(saltRounds)
  const encryptedPassword = bcrypt.hashSync(password, salt)

  const newUser = {
    name: body.name,
    password: encryptedPassword,
    email: body.email,
    phone: body.phone
  }
  console.log('create user', newUser)
  const createdUser = await userService.createNewUser(newUser)
  console.log('created user', createdUser)
  res.status(201).send({ status: 'OK', data: createdUser })
}

const updateOneUser = (req, res) => {
  const { body } = req
  console.log('request', body)
  if (!body.name || !body.email || !body.phone) {
    return
  }
  const userUpdate = {
    name: body.name,
    email: body.email,
    phone: body.phone
  }

  //sacar a middleware validator token

  //hasta aqui middleware valid

  const updatedUser = userService.updateOneUser(req.params.userId, userUpdate)
  res.send(updatedUser)
}

const deleteOneUser = (req, res) => {
  userService.deleteOneUser(req.params.userId)
  res.send('Usuario Eliminado')
}

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser
}
