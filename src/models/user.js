const mongoose = require('mongoose')   
const validator = require('validator') 

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('not a valid email')
            }
        }
                           
    },
    password:{
        type: String, 
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
               throw new Error('Password does not meet password standards') 
            }
        }  
              
    },
    age:{
        type: Number, 
        default: 0,
        validate(value) {
            if(value<0){
                throw new Error('Age must be a positive #')
            }
        }    
    }
})

module.exports = User