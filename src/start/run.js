const config = require('../../config')
const {connect} = require('mongoose')
const run =(app)=>{
    app.listen(config.port , ()=>{
        connect(config.mongoDB)
        console.log(`port is listening on ${config.port} port . . .`)
    })

}

module.exports = run;