import express from 'express' 
import jobs from '../models/jobModel.js'
import { errorHandler } from '../utils/error.js';

export const getjobs = async (req, res, next) => {
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
        const newJobs = new jobs({
            FullName,
            email,
            applied,
            Experiance,
            url,
            file,
            message,
        });
        
        await newJobs.save();
        res.status(201).json(newJobs);
    }
    catch(err){
        next(err);
    }
}

// export viewjobs = async (req, res, next) =>{

// }