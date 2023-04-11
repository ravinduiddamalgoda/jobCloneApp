import Job from '../models/model.jobApp'

async function registerJob(recuiter,jobTitle,jobStatus,jobType,feild,position,skill){

    const newJob = new Job({
        recuiter,
        jobTitle,
        jobStatus,
        jobType,
        feild,
        position,
        skill
    });
    
    await newJob.save();
    const job =  JSON.parse(JSON.stringify(newJob));
    return job

}


export default {
    registerJob,
}