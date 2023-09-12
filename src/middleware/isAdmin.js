const admin = require('../models/admin')
const jwt = require('jsonwebtoken')
const config = require('../../config')
const CustomError = require('../utils/costum-error')

const isAdmin = async(req, res, next) =>{
    try {
        const token = req.headers.authorization
    data = jwt.verify(token, config.jwt)
    next()
    } catch (error) {
        res.send({message: 'Invalid token'})
    }
   

        
}

module.exports = isAdmin