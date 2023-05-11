import jobService from "../service/job.service.js";
import Job from '../models/jobApp.js'


export  const addJob = async(req,res)=>{

    try{
        const {recuiterEmail,jobTitle,jobStatus,jobType,feild,position,skill,descripton} = req.body;
        
        const newJob = await jobService.registerJob(recuiterEmail,jobTitle,jobStatus,jobType,feild,position,skill,descripton);
        res.status(200).json(newJob);
    }catch(err){
        res.status(400).send({ err: err });
    }
   

} 

export const allJobs = async (req ,res) => {
    try{
        Job
        .find()
        .then(job => res.json(job))
        .catch(() => res.status(404).json({ err: 'Jobs Not found' }));

    }catch(err){
        res.status(400).send({ err: err });

    }

}

export const getJobByRecuiter = async (req,res) =>{
    
    try{
        // const curntRecruiter  = req.user;
        const {recuiterEmail} = req.body;

        const recuiterJob = await jobService.recuiterJob(recuiterEmail)
        res.status(200).json(recuiterJob);
    }catch(err){
        res.status(400).send({ err: err });
    }
}