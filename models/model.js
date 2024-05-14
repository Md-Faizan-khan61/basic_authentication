const mongoose = require('mongoose')
const loginSchema = mongoose.Schema({
    name:{
       type:String,
       required:true   
    },
    email:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true 
    }
})
//collection part  
const collection = mongoose.model('userdata',loginSchema)
module.exports = collection;