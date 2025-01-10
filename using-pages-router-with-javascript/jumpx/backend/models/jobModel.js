import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    },
    phone: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    portfolio: {
        type: String,
        required: false,
    },
    resume: {
        type: String, // This will store the file path
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

export default JobApplication;
