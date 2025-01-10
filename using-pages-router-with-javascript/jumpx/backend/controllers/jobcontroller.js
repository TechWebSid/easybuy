import JobApplication from '../models/jobModel.js';
import { errorHandler } from '../utils/error.js';
import multer from 'multer';
import path from 'path';

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/resumes') // Make sure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedFileTypes.includes(ext)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed.'));
    }
};

export const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

export const submitApplication = async (req, res, next) => {
    try {
        const {
            name,
            email,
            phone,
            position,
            experience,
            portfolio,
            message
        } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !position || !experience || !message) {
            return next(errorHandler(400, "All required fields must be filled"));
        }

        // Check if file was uploaded
        if (!req.file) {
            return next(errorHandler(400, "Resume file is required"));
        }

        const newApplication = new JobApplication({
            name,
            email,
            phone,
            position,
            experience,
            portfolio: portfolio || '',
            resume: req.file.path, // Save the file path
            message
        });

        await newApplication.save();

        res.status(201).json({
            success: true,
            message: "Application submitted successfully",
            data: newApplication
        });
    } catch (err) {
        next(err);
    }
};

export const getApplications = async (req, res, next) => {
    try {
        const applications = await JobApplication.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            data: applications
        });
    } catch (err) {
        next(err);
    }
};