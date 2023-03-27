const express = require('express')
const v1UserRouter = require('./v1/routes/userRoutes')
const v1LoginRouter = require('./v1/routes/loginRoute')
const v1ProductRouter = require('./v1/routes/productsRoutes')
const v1CategoriesRouter = require('./v1/routes/categoryRoutes')
const { Connection } = require('./database/database.js')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', v1UserRouter)
app.use('/api/v1/login', v1LoginRouter)
app.use('/api/v1/products', v1ProductRouter)
app.use('/api/v1/categories', v1CategoriesRouter)

async function AllConnection () {
  const db = await Connection()

  try {
    await db.authenticate()
    console.log(
      `Connection to ${process.env.DB_NAME} has been established successfully `
    )
  } catch (err) {
    console.log(
      `Unable to connect to the database: ${process.env.MAIN_DB} `,
      err
    )
  }
}
AllConnection()

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`)
})
