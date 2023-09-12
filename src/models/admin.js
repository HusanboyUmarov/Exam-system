const {Schema, model} = require('mongoose')

const schem = new Schema({
   username:{
    type:String,
    required: true,
   },
   password:{
    type:String,
    required: true,
   }

}, {
    timestamps:true
})


module.exports = model('admin', schem)

