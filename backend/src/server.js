const express = require('express')
const v1UserRouter = require('./v1/routes/userRoutes')
const { Connection } = require('./database/database.js')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.use('/api/v1/users', v1UserRouter)

async function AllConnection() {
  const db = await Connection()
  db.authenticate()
    .then(() => {
      console.log(
        `Connection to ${process.env.DB_NAME} has been established successfully `
      )
    })
    .catch((err) => {
      console.log(
        `Unable to connect to the database: ${process.env.MAIN_DB} `,
        err
      )
    })
}
AllConnection()

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`)
})
