const {Router} = require('express')
const { add, get, getOne, reset, remove } = require('../controllers/exam.controller')
const isAdmin = require('../middleware/isAdmin')
const router = Router()


router.get('/exam/get',isAdmin, get)
router.get('/exam/getOne/:id',isAdmin,getOne )
router.put('/exam/reset/:id',isAdmin, reset)
router.post('/exam/add',isAdmin, add)
router.delete('/exam/del/:id',isAdmin,remove )

module.exports = router;