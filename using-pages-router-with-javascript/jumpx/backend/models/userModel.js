import mongoose from 'mongoose';

// Define user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    Username: {
        type: String,
        required: true,
        unique: true, // Ensure Username is unique
    },
    email: {
        type: String,  // Corrected to type: String
        required: true,
        unique: true, // Ensure email is unique
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
}, { timestamps: true } 
);

// Create the model from the schema
const User = mongoose.model('User', userSchema);

export default User;
