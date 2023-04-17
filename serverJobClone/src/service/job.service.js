import Job from '../models/jobApp.js'

async function registerJob(recuiterEmail,jobTitle,jobStatus,jobType,feild,position,skill){

    const newJob = new Job({
        recuiterEmail,
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

async function recuiterJob(email){

    const recuiterJob = await Job.find({recuiterEmail:email})
    console.log(email)
    return recuiterJob
}


export default {
    registerJob,
    recuiterJob
}