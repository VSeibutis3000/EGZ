const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})


module.exports = mongoose.model('userModel', userSchema)