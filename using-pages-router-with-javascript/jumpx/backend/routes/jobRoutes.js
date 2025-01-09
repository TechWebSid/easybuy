import express from 'express' 

import {getjobs} from '../controllers/jobcontroller.js'

const router = express.Router();

router.post("/" , getjobs);


export default router;