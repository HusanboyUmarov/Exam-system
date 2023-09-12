const Joi = require('joi')
//.............................................................................................
const check_examValidator = ( band_score, )=>{
    const {error} = Joi.object({
        band_score: Joi.number().required().min(0).max(100),
      
    }).validate({band_score})

    if(error)
    return error
    else
    return false
}
//.............................................................................................

module.exports = check_examValidator;