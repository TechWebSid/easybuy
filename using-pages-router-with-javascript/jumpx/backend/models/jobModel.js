import mongoose from 'mongoose';

const jobs = new mongoose.Schema ({
    FullName: {
        type: String,
        reruired :true,
    },
    email:{
        type:String,
        required: true,
    },
    applied:{
        type:String,
        required: true,
    },
    Experiance:{
        type:String,
        required: true,
    },
    url:{
        type:String,
        required:true,
    },
    file:{
        type: String,
        required: true,
    },
    message:{
        type: String,
    }
},{ timestamps: true }
);

const job_application = mongoose.model('Jobs applications' , jobs);

export default job_application;