const CustomError = require("../utils/costum-error")
const check_examValidator = require("../validators/check_examValidator")
const students = require("../models/students")
const sendfile = require('../models/sendFile')
const group = require("../models/group")
const exam = require('../models/exam')
const { isValidObjectId } = require("mongoose")

//.............................................................................................
const check_exam = async(req, res, next) =>{
    try {
        const {band_score} = req.body
        const {id} = req.params      
        if(! isValidObjectId(id)) return res.send({message:'student does not find by this id'}) 
        const error = check_examValidator(band_score)
        if(error) throw new CustomError(401, error)
        
        const data = await students.findById(id) 
        const newScore = data.band_score +=band_score
        const  newData = await students.findByIdAndUpdate(id, {band_score:newScore})
    
        res.send({message:'Success', data})


    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................

const getGroup =async(req, res , next)=>{
    try {

       const sendedFile = await sendfile.find({})
       const data =  await group.find()
       res.send({message: 'Success', data})
        
    } catch (error) {
        next(error)
        
    }
}

const getStudent =async(req, res , next)=>{
    try {
        const {id} = req.params
       const sendedFile = await sendfile.find({student_id:id})
       const data =  await students.findById(id)

       const result = [data, sendedFile[0]]
       res.send({message: 'Success', result})
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................
const result = async(req, res, next)=>{
    const {id} = req.params 
    const dbExam = await exam.findById(id)
    console.log(dbExam)
    const grId = dbExam.group_id
    const passing_band = dbExam.passing_band_score
    const dbStudents = await students.find({groupId:grId})
    
    for(let i = 0 ; i< dbStudents.length ; i++){
        if(dbStudents[i].band_score >= passing_band)
        {
            await students.findByIdAndUpdate(dbStudents[i].id, {isPassed: true})
        }
    }
    const mainresult = await students.find({groupId:grId})
    res.send({message:'success', mainresult})
    

}
//.............................................................................................

module.exports = {
    check_exam, 
    getGroup,
    getStudent, 
    result,
}