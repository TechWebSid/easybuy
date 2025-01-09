import express from 'express' 

import job from '../controllers/jobcontroller'

const router = express.Router();

router.post("/" , job);