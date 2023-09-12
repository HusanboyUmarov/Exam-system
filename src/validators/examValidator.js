const Joi = require('joi')

//.............................................................................................
const examValidator = ( group_id, dedline, passing_band_score)=>{
    const {error} = Joi.object({
        group_id: Joi.string().min(3).required(),
        dedline: Joi.number().required(),
       passing_band_score: Joi.number().required()
    }).validate({group_id, dedline, passing_band_score})

    if(error)
    return error
    else
    return false
}
//.............................................................................................

module.exports = examValidator;