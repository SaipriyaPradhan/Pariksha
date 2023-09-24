const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    id:{
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    address:{
        type: String,
        required:true
    },
    branch:{
        type: String,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    cpassword:{
        type: String,
        required:true
    }

})

// now we need to create a collection

const Register = new mongoose.model("Register", studentSchema);

module.exports = Register;