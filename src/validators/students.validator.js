const Joi = require('joi')
//.............................................................................................
const studentValidator = (studentFullname, groupId)=>{
    const {error} = Joi.object({
        studentFullname: Joi.string().min(3).required(),
        groupId: Joi.string().required(),

    }).validate({studentFullname, groupId})

    if(error)
    return error
    else
    return false
}
//.............................................................................................

module.exports = studentValidator;