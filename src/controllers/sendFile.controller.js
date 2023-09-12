const CustomError = require("../utils/costum-error")
const sendValidator = require("../validators/sendFile.validator")
const sendfile = require('../models/sendFile')
const { isValidObjectId } = require("mongoose")
//.............................................................................................
const sendFile = async(req, res, next)=>{
    try {
        const {id}= req.params
    if(! isValidObjectId(id)) return res.send({message:'student does not find by this id'}) 
        const error = sendValidator(id)
        if(error) throw new CustomError(401, error)
        const file_name = req.img_name
        const checking = await sendfile.find({student_id:id})
        if(checking.length >= 3) return res.send({message:"you have used your all chances"})
        const data = await sendfile.create({file_name, student_id:id })
        res.send({message:'Success', data})
        


    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................

module.exports = sendFile;