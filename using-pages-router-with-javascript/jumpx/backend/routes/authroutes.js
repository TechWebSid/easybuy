import express from 'express';
import { 
    signup,
    signin,
    logout, 
    checkSession
 } from '../controllers/authController.js';

const router = express.Router();

// Signup route
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', logout);
router.get('/check-session', checkSession);

export default router;  // Export the router to use it in the index.js
