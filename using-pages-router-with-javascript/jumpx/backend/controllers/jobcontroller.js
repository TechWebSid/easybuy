import express from 'express' 
import jobs from '../models/jobModel.js'
import { errorHandler } from '../utils/error.js';
import job_application from '../models/jobModel.js';

export const getjobs = async (req, res, next ) =>{
    const {FullName, email, applied, Experiance, url, file, message} = req.body;

    if(
        !FullName ||
        !email ||
        !applied ||
        !Experiance ||
        !url ||
        !file ||
        !message === ""
    ){
        return next(errorHandler(404, "All fields are required"));
    }

    try {
        const newJobs = new job_application ({
            FullName,
            email,
            applied,
            Experiance,
            url,
            file,
            message,
        })
    }
    catch(err){
        return(err)
    }
}

// export viewjobs = async (req, res, next) =>{

// }