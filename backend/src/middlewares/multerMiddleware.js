const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/products')
  },
  filename: (req, file, cb) => {
    console.log(file)
    //const fileName = Date.now() + '-' + file.originalname
    const fileName = file.originalname
    cb(null, fileName)
  }
})

const uploadFile = multer({ storage })

module.exports = uploadFile
