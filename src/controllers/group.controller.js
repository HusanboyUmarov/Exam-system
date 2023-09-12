const group = require("../models/group")
const CustomError = require("../utils/costum-error")
const groupValidation = require("../validators/groupValidator")
const students = require("../models/students")

const add =async(req, res , next)=>{
    try {
        const {name} = req.body
        const error = groupValidation(name)
        if(error) throw new CustomError(401,error)
        dataName = await group.find({name})
        if(dataName.length) return res.send({message: 'Group already exsist'}).status(401)
        const data = await group.create({name}) 
        res.send({message: 'Success', data})  
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................
const get =async(req, res , next)=>{
    try {
       const data =  await group.find()
       res.send({message: 'Success', data})
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................

const getOne =async(req, res , next)=>{
    try {
        const {id} = req.params
        const group_data = await group.find({_id:id})
        const data =await students.find({groupId:id})
        result = [group_data[0].name,...data ]
        res.send({message:'Success', result}).status(200)
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................
const reset =async(req, res , next)=>{
    try {
        const {id} = req.params;
        const {name} = req.body;
        await group.findByIdAndUpdate({_id:id},{name})
        const result =await group.find({_id :id})
        res.send({message:'Success', result}).status(200)
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................

const remove =async(req, res , next)=>{
    try {

        const {id} = req.params;

        await group.findByIdAndDelete({_id:id})
        const result =await group.find({_id :id})
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