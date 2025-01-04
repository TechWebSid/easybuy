import express from 'express'
import { errorHandler } from '../utils/error.js';
import contact from "../models/contactModel.js";

export const contactUs  = async (req, res, next) =>{
    const{Name, email, phoneNumber, subject, Message} = req.body;

    if(
        !Name ||
        !email||
        !phoneNumber ||
        !subject ||
        !Message  === ''
    ){
        return next(errorHandler(404 , 'All fields must be filled'))
    }
    
    try{
        const Newcontact = new contact ({
            Name,
            email,
            phoneNumber,
            subject,
            Message
        })

        await Newcontact.save();
        res.status(201).json({Message: "Contact details saved succesfully"});
    }
    catch(err)
    {
        return(err);
    }
};