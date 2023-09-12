const {Router} = require('express');
const signIn = require('../controllers/auth.controller');


const router = Router()
router.post('/admin',signIn )

module.exports = router;