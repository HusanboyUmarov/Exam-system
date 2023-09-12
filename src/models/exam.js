const {Schema, model} = require('mongoose')

const schem = new Schema({
    group_id:{      
        type:Schema.Types.ObjectId,
        ref:'group',
        },
    dedline:{
        type:Number,
        required:true
    },
    passing_band_score:{
        type: Number
    }

}, {
    timestamps:true
})


module.exports = model('exam', schem)

