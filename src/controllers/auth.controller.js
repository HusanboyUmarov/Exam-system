const jwt = require('jsonwebtoken')

const registerValidator = require("../validators/register.validator")
const CustomError = require('../utils/costum-error')
const admin = require('../models/admin')
const config = require('../../config')
config
const signIn = async(req, res, next) =>{
    try {
        const {username, password} = req.body
    const error = registerValidator( username, password)
    if(error) throw new CustomError(401, error)

    const data = await admin.find({username, password})
    if(data.length == 0) res.send({message: 'username or password in not coorect'})
    
    const token = jwt.sign(data[0].id,config.jwt)
    res.send({message:'success', token})
        
    } catch (error) {
        next(error)
        
    }
    

    
}

module.exports = signIn;