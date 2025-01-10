import mongoose from 'mongoose';

const jobs = new mongoose.Schema({
    FullName: {
        type: String,
<<<<<<< HEAD
        reruired :true,
    },
    email:{
        type:String,
=======
>>>>>>> 93ba9452e571ae7ad36012769096e051b9e4af42
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, // Email regex for validation
    },
    applied: {
        type: String,
        required: true,
    },
    Experiance: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
    url:{
        type:String,
        required:true,
    },
    file:{
=======
    url: {
>>>>>>> 93ba9452e571ae7ad36012769096e051b9e4af42
        type: String,
        required: true,
    },
    file: {
        type: String, // Assuming you store the file path as a string
        required: true,
    },
    message: {
        type: String,
    }
}, { timestamps: true });

const job_application = mongoose.model('Jobs applications', jobs);

export default job_application;
