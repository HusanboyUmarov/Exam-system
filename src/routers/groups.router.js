const {Router} = require('express')
const { get, getOne, reset, add, remove } = require('../controllers/group.controller')
const isAdmin = require('../middleware/isAdmin')
const router = Router()
isAdmin
router.get('/group/get',isAdmin, get)
router.get('/group/getOne/:id', getOne)
router.put('/group/reset/:id', isAdmin,reset)
router.post('/group/add',isAdmin, add)
router.delete('/group/del/:id', remove)

module.exports = router;