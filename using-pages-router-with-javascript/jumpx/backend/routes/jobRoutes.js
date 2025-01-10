
import express from 'express' 


import {getjobs} from '../controllers/jobcontroller.js'

const router = express.Router();

router.post("/" , getjobs);


import express from 'express'
import { getjobs } from '../controllers/jobcontroller.js'



router.post("/", getjobs);


export default router;