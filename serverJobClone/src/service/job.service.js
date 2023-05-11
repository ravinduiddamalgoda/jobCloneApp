import Job from '../models/jobApp.js'
import RecruiterService from './recruiter.service.js'
async function registerJob(recuiterEmail,jobTitle,jobStatus,jobType,feild,position,skill, descripton){
    const companyName = RecruiterService.findRecruiterCompany(recuiterEmail);
    const newJob = new Job({
        recuiterEmail,
        jobTitle,
        jobStatus,
        jobType,
        feild,
        position,
        skill,
        companyName,
        descripton
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