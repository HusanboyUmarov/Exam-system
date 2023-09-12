const Joi = require('joi')

//.............................................................................................
const sendValidator = (student_id )=>{
    const {error} = Joi.object({
        student_id : Joi.string().required(),
    }).validate({student_id: student_id.trim()})
    if(error)
    return error
    else
    return false
}
//.............................................................................................

module.exports = sendValidator;