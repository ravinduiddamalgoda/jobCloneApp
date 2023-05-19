import { Router } from "express";
import { AddRate } from "../controllers/rating.controller";


const rateRouter = Router();


rateRouter.post('/updateRate' , AddRate);

// rateRouter.get()