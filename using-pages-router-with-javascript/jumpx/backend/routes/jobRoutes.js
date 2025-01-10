<<<<<<< HEAD
import express from 'express' 

import {getjobs} from '../controllers/jobcontroller.js'

const router = express.Router();

router.post("/" , getjobs);

=======
import express from 'express'
import { getjobs } from '../controllers/jobcontroller.js'

const router = express.Router();

router.post("/", getjobs);
>>>>>>> 93ba9452e571ae7ad36012769096e051b9e4af42

export default router;