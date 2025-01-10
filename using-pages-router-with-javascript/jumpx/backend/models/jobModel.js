import mongoose from 'mongoose';

const jobsSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true, // Fixed typo from 'reruired' to 'required'
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
    Experience: { // Fixed typo from 'Experiance' to 'Experience'
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    file: {
        type: String, // Assuming you store the file path as a string
        required: true,
    },
    message: {
        type: String,
    },
}, { timestamps: true }); // Corrected the schema definition

const JobApplication = mongoose.model('JobApplication', jobsSchema); // Updated model name for clarity

export default JobApplication;
