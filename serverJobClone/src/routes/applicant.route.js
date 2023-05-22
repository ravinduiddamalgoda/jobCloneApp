import { Router} from "express";
import {addForJob, getCv}  from '../controllers/applicant.controller.js'
import upload from '../utils/upload.js'

const applicantRouter = Router()


applicantRouter.post('/apply',upload.single('cv'),addForJob)
// applicantRouter.post('/getcvByjobId/:jobId' , getCv);
applicantRouter.get('/getcvByjobId/:jobId', getCv);

export default applicantRouter;