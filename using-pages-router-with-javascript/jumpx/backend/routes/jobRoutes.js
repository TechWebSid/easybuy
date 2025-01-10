import express from 'express'
import { submitApplication, getApplications, upload } from '../controllers/jobcontroller.js'

const router = express.Router();

// Route for submitting job application with file upload
router.post("/submit", upload.single('resume'), submitApplication);

// Route for getting all applications (you might want to protect this with admin authentication)
router.get("/applications", getApplications);

export default router;