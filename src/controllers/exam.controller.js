
const exam = require("../models/exam")
const group = require("../models/group")
const CustomError = require("../utils/costum-error")
const examValidator = require("../validators/examValidator")

const add =async(req, res , next)=>{
    try {
        const {group_id, dedline, passing_band_score} = req.body
      const error = examValidator(group_id, dedline, passing_band_score)
        if(error) throw new CustomError(401,error)
        const data = await exam.create({group_id, dedline, passing_band_score})
        res.send({message: 'Success', data})  
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................
const get =async(req, res , next)=>{
    try {
       const data =  await exam.find()
       res.send({message: 'Success', data})
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................

const getOne =async(req, res , next)=>{
    try {
        const {id} = req.params
        const exam_data = await exam.find({_id:id})
        const data =await group.find({groupId:exam.group_id})
        result = [exam_data[0], ...data ]
        res.send({result}).status(200)
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................
const reset =async(req, res , next)=>{
    try {
        const {id} = req.params;
        const {group_id, dedline, passing_band_score} = req.body
        await exam.findByIdAndUpdate({_id:id},{group_id, dedline, passing_band_score})
        const result =await exam.find({_id :id})
        res.send({message:'Success', result}).status(200)
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................

const remove =async(req, res , next)=>{
    try {

        const {id} = req.params;

        await exam.findByIdAndDelete({_id:id})
        const result =await exam.find({_id :id})
        res.send({message:'Success', result}).status(200)
        
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................

module.exports = {
    get, 
    getOne, 
    remove, 
    reset, 
    add
}