const {Router} = require('express')
const { check_exam, getGroup, getStudent, result } = require('../controllers/check_exam')
const {getOne} = require('../controllers/group.controller')
const isAdmin = require('../middleware/isAdmin')
const router = Router()

router.get('/check/getGroup',isAdmin, getGroup)
router.get('/check/getOne/:id',isAdmin, getOne)
router.get('/check/student/:id',isAdmin, getStudent)
router.post('/check/edit/:id',isAdmin, check_exam)
router.get('/check/result/:id',isAdmin,result)


module.exports = router;