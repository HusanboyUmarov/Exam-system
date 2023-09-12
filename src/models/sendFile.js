const {Schema, model} = require('mongoose')

const schem = new Schema({
    student_id:{     
        type:Schema.Types.ObjectId,
        ref:'students',
        },
    file_name:{
        type:String,
        required:true
    },

}, 
{
    timestamps:true
})


module.exports = model('sendfile', schem)

