import jobService from "../service/job.service";


export  const addJob = async(req,res)=>{

    try{
        const {recuiter,jobTitle,jobStatus,jobType,feild,position,skill} = req.body;

        const newJob = await jobService.registerJob(recuiter,jobTitle,jobStatus,jobType,feild,position,skill);
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

export const getJobByRecuiter = () =>{
    
}