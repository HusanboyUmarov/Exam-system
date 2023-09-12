const exam = require('../models/exam')
const student = require('../models/students')
const sendfile = require('../models/sendFile')
const group = require('../models/group')
const { default: mongoose, isValidObjectId } = require('mongoose')

//.............................................................................................
const check_time = async(req, res, next)=>{
    try {
        
    const {id} = req.params
    if(! isValidObjectId(id)) return res.send({message:'student does not find by this id'}) 
    
    const sendData = await sendfile.find({student_id:id})
    const studentData = await student.findById(id)
    const group_id = studentData.groupId 
    const groupData = await group.findById(group_id)
    const examData = await exam.find({group_id})
  
    const time = (new Date() - examData[0].createdAt)/ (3600 * 1000)
    if(time < examData[0].dedline || (time < 1.6 && time > examData[0].dedline )) next()
    const minusBall = Math.floor(-Math.abs(examData[0].createdAt.getMinutes() - new Date().getMinutes())/5) * 5
    const student_change_data = await student.findByIdAndUpdate(id, {band_score: minusBall})
    } catch (error) {
        next(error)
    }
    

}
//.............................................................................................
module.exports = check_time;