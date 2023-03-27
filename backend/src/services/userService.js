const { db } = require('../database/database')
const { QueryTypes } = require('sequelize')
const { v4: uuid } = require('uuid')

const ROLES = {
  Admin: 1,
  Client: 0
}

const getAllUsers = async () => {
  const AllUsers = await db.query('SELECT * FROM users', {
    type: QueryTypes.SELECT
  })
  return AllUsers
}
const getOneUser = async (id) => {
  const user = await db.query('SELECT * FROM users WHERE id = :id', {
    replacements: {
      id
    },
    type: QueryTypes.SELECT
  })
  return user
}
const createNewUser = async (newUser) => {
  const id = uuid()
  const createdUser = await db.query(
    'INSERT INTO users (id,name,password,email,phone,role) VALUES (:id,:name,:password,:email,:phone,:role) ;',
    {
      replacements: {
        id,
        name: newUser.name,
        password: newUser.password,
        email: newUser.email,
        phone: newUser.phone,
        role: ROLES.Client
      },
      type: QueryTypes.INSERT
    }
  )

  return createdUser
}
const updateOneUser = async (id, userUpdate) => {
  const updatedUser = await db.query(
    'UPDATE users SET name = :newName, email = :newEmail WHERE id = :id',
    {
      replacements: {
        newName: userUpdate.name,
        newEmail: userUpdate.email,
        newPhone: userUpdate.phone,
        id
      },
      type: QueryTypes.UPDATE,
      returning: true // si quieres devolver los registros actualizados
    }
  )

  return updatedUser
}
const deleteOneUser = async (id) => {
  await db.query('DELETE FROM users WHERE id = :id', {
    replacements: {
      id
    },
    type: QueryTypes.DELETE,
    returning: true // si quieres devolver los registros actualizados
  })
}

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser
}
