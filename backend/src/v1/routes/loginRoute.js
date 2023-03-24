const express = require('express')
const loginRouter = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginController = require('../../controllers/loginController')

loginRouter.post('/', loginController.login)

module.exports = loginRouter
