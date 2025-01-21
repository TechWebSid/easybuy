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
            resume,
            portfolio,
            message
        } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !position || !experience || !resume || !message) {
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
            resume: req.file.filename, // Store only the filename
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

export const getJobAnalytics = async (req, res, next) => {
    try {
        // Get total applications
        const totalApplications = await JobApplication.countDocuments();

        // Get applications by position
        const applicationsByPosition = await JobApplication.aggregate([
            {
                $group: {
                    _id: "$position",
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    department: "$_id",
                    count: 1,
                    _id: 0
                }
            }
        ]);

        // Get applications by date (last 6 months)
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

        const monthlyApplications = await JobApplication.aggregate([
            {
                $match: {
                    createdAt: { $gte: sixMonthsAgo }
                }
            },
            {
                $group: {
                    _id: {
                        month: { $month: "$createdAt" },
                        year: { $year: "$createdAt" }
                    },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: {
                    "_id.year": 1,
                    "_id.month": 1
                }
            }
        ]);

        // Get recent applications
        const recentApplications = await JobApplication.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .select('name position experience createdAt');

        res.status(200).json({
            success: true,
            data: {
                totalApplications,
                applicationsByPosition,
                monthlyApplications,
                recentApplications
            }
        });
    } catch (err) {
        next(err);
    }
};

// Add this to get detailed applications list
export const getApplicationsList = async (req, res, next) => {
    try {
        const applications = await JobApplication.find()
            .sort({ createdAt: -1 })
            .select('name email phone position experience portfolio resume message createdAt');

        res.status(200).json({
            success: true,
            data: applications
        });
    } catch (err) {
        next(err);
    }
};