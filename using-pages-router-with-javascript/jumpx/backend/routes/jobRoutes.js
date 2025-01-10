import express from 'express'
import { submitApplication, getApplications, upload, getJobAnalytics, getApplicationsList } from '../controllers/jobcontroller.js'

const router = express.Router();

// Route for submitting job application with file upload
router.post("/submit", upload.single('resume'), submitApplication);

// Route for getting all applications (you might want to protect this with admin authentication)
router.get("/applications", getApplications);

// Add these new routes
router.get("/analytics", getJobAnalytics);
router.get("/applications-list", getApplicationsList);

export default router;