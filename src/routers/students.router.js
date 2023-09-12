const {Router} = require('express')
const { get, getOne, reset, add, remove } = require('../controllers/student.controller')
const fileHendler = require('../middleware/fileHendler')
const router = Router()

router.get('/student/get', get)
router.get('/student/getOne/:id', getOne)
router.put('/student/reset/:id', reset)
router.post('/student/add',fileHendler,  add)
router.delete('/student/del/:id', remove)

module.exports = router;