const express = require('express')
const userRouter = express.Router()
const userController = require('../../controllers/userController.js')
const validateToken = require('../../middlewares/validateToken')

userRouter
  .get('/', userController.getAllUsers)
  .get('/:userId', userController.getOneUser)
  .post('/', userController.createNewUser)
  .patch('/:userId', validateToken, userController.updateOneUser)
  .delete('/:userId', validateToken, userController.deleteOneUser)

module.exports = userRouter
