import express from 'express';
import {
    create,
    getposts,
    deletepost,
    updatepost
} from '../controllers/BlogController.js'; // Use named imports

const router = express.Router();

router.post("/post", create);
router.post("/getpost", getposts);
router.post("/deletepost", deletepost);
router.post("/updatepost", updatepost); // Fixed missing slash

export default router;
