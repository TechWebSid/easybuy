import express from 'express';
import {
    create,
    getposts,
    deletepost,
    updatepost
} from "../controllers/BlogController.js"


const router = express.Router();

router.post("/post", create);
router.post("/getpost", getposts);
router.post("/deletepost", deletepost);
router.put("/updatepost", updatepost); // Fixed missing slash

export default router;

