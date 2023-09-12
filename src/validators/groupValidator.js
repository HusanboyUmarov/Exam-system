const Joi = require('joi')

//.............................................................................................

const groupValidation = (name)=>{
    const {error} = Joi.object({
        name: Joi.string().min(3).required()

    }).validate({name:name.trim()})

    if(error)
    return error
    else
    return false
}
//.............................................................................................

module.exports = groupValidation;