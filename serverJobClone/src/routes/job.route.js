import { Router} from "express";
// import { body } from "express-validator";
import { addJob,allJobs} from "../controllers/user.control.js";
// import { authGuard, validate } from "../utils/validator.js";

const jobRouter = Router(); 

jobRouter.post('/addJob' ,  addJob);
jobRouter.get('/getJob' ,  allJobs);

export default jobRouter;