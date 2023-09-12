const CostumError = require('../utils/costum-error')
const {v4:uuid} = require('uuid')
const {extname} = require('path')

//.............................................................................................
const fileHendler = async(req, res, next)=>{
    try {
        const file = req.files?.file
    if(file == undefined) throw new CostumError(401, new Error('File is required'))
    
    const newTitle = uuid()+extname(file.name)
    file.mv(process.cwd()+'/uploads/'+newTitle)
    req.img_name = newTitle

    next()
        
    } catch (error) {
        next(error)
        
    }
}
//.............................................................................................

module.exports = fileHendler;