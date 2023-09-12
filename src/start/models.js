const fileUpload = require('express-fileupload')
const errorHendler = require('../middleware/error-hendler')
const router = require('../routers')

const models = (app, express) =>{
    
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(fileUpload())

    app.use('/api', router)

    app.use(errorHendler)

}

module.exports = models;