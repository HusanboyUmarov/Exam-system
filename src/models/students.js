const {Schema, model} = require('mongoose')

const schem = new Schema({
    studentFullname:{  
        type:String,
        required:true,
    },
    image_name:{
        type:String,
        required:true,
    },
    band_score:{
        type:Number,
        required:true,
        default:0
    },
    isPassed:{
        type:Boolean,
        default:false
    },

    groupId:{
        type:Schema.Types.ObjectId,
        ref:"group"
    }
}, 

{
    timestamps:true
})

module.exports = model('students', schem)

