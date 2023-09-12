const {Router} = require('express');
const sendFile = require('../controllers/sendFile.controller');
const check_time = require('../middleware/chack-time');
const fileHendler = require('../middleware/fileHendler');

const router = Router()


router.post('/sendfile/send/:id',fileHendler, check_time, sendFile)



module.exports = router;