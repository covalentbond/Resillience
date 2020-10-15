const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    batch:{
        type: String
    },
    contact:{
        type: String,
        required: true
    },
    parentContact:{
        type: String
    },
    fname:{
        type: String
    },
    address:{
        type:String
    },

    picture:{
        type: String,
        default:"https://res.cloudinary.com/rweb1/image/upload/v1599639734/resilience_default_lqmb3p.png"
    },
    phy:[{
        type: ObjectId,
        ref: "Admin"
    }],
    chem:[{
        type: ObjectId,
        ref: "Admin"
    }],
    math:[{
        type: ObjectId,
        ref: "Admin"
    }],
    bio:[{
        type: ObjectId,
        ref: "Admin"
    }],
    resetToken: String,
    expireToken: Date
},{timestamps:true})

mongoose.model("Student",studentSchema);