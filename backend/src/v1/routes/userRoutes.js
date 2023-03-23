const express = require('express')
const router = express.Router()
const userController = require('../../controllers/userController.js')

router
  .get('/', userController.getAllUsers)
  .get('/:userId', userController.getOneUser)
  .post('/', userController.createNewUser)
  .patch('/:userId', userController.updateOneUser)
  .delete('/:userId', userController.deleteOneUser)

module.exports = router
