const {Schema, model} = require('mongoose')

const schem = new Schema({
    name:{
        type:String,
        required:true,
    }
}, {
    timestamps:true
})


module.exports = model('group', schem)

