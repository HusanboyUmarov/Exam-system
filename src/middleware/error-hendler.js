const CustomError = require("../utils/costum-error")
//.............................................................................................
const errorHendler = (err, __, res, next) =>{
    if(err instanceof CustomError){
        return res.send({message: err.message}).status(err.status)
    }
    res.send({message: 'Internal server error'}).status(500)
    console.log(err.message)
}

module.exports = errorHendler;
