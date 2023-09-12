const examRouter = require('./exam.router')
const groupRouter = require('./groups.router')
const studentRouter = require('./students.router')
const sendFile = require('./sendFile.router')
const checkExam = require('./check_exam')
const adminRouter = require('./auth')
module.exports = [
    adminRouter,
    examRouter,
    groupRouter,
    studentRouter, 
    sendFile,
    checkExam
]
