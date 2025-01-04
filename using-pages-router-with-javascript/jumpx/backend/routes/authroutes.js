import express from 'express';
import { 
    signup,
    signin
 } from '../controllers/authController.js';

const router = express.Router();

// Signup route
router.post('/signup', signup);
router.post('/sigin', signin);

export default router;  // Export the router to use it in the index.js
