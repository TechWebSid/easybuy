import mongoose from "mongoose";


const ContactSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    Message:{
        type:String,
        required:true,
    }
    
},
{ timestamps: true }
);


const UserContact = mongoose.model('ContactUs' , ContactSchema);

export default UserContact;