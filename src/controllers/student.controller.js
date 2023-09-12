const students = require("../models/students")
const CustomError = require("../utils/costum-error")
const studentValidator = require("../validators/students.validator")
const group = require('../models/group')
//.............................................................................................
const add =async(req, res , next)=>{
    try {
        
        const image_name = req.img_name

        const {studentFullname, groupId} = req.body 
    
        const data_group = await group.find({groupId})
        const error = studentValidator(studentFullname, groupId)

        if(error) throw new CustomError(401,error)
        dataName = await students.find({studentFullname,image_name, groupId})
        if(dataName.length) return res.send({message: 'student already exsist'}).status(401)
        const data = await students.create({studentFullname,image_name, groupId}) 
        res.send({message: 'Success', data})  

        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................
const get =async(req, res , next)=>{
    try {
        const data = await students.find()
        res.send({message: 'Success', data})
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................

const getOne =async(req, res , next)=>{
    try {
        const {id}= req.params
        const data = await students.findById({_id:id})
        res.send({message: 'Success', data})
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................
const reset =async(req, res , next)=>{
    try {
        const {id}= req.params
        const {studentFullname, band_score,isPassed, groupId} = req.body 
        const data = await students.findByIdAndUpdate({_id:id}, {studentFullname, groupId})
        const newData = await students.findById(id)
        res.send({message: 'Success', newData})
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................

const remove =async(req, res , next)=>{
    try {
        const {id}= req.params
        await students.findByIdAndDelete(id)

        const newData = await students.findById(id)
        res.send({message: 'Success', newData})
        
        
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