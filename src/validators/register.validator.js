const Joi = require('joi')
//.............................................................................................
const registerValidator = (username, password)=>{
    const {error} = Joi.object({
        username: Joi.string().required().min(3),
        password: Joi.string().required().min(4),
    }).validate({username, password})

    if(error)
    return error
    else
    return false
}
//.............................................................................................

module.exports = registerValidator;