import  fs  from 'fs';
import { __dirname } from '../../index.js';
import Applicant from '../models/applicant.js'

import path from 'path';



export const addForJob = async(req,res) =>{

    
    try{

        const {applicantName ,applicantEmail , appliedJobID} = req.body;
        const newApplicant = new Applicant({
            applicantName ,
            applicantEmail,
            appliedJobID,
        })

        const existinApplicant = Applicant.findOne({applicantEmail});
        // const existing
        
        // if(existinApplicant){
        //     return res.status(400).send({err: "You have already applied."});
        // }
        if(req.file){

            newApplicant.cv = req.file.path
            console.log(newApplicant.cv)
        }


        
        await newApplicant.save();

        res.status(200).send(newApplicant);

    }catch(err){
        res.status(400).send({err:err})
    }
}

export const getCv = async (req , res) =>{
    const jobId = req.params['jobId'];
    // const options = {
    //     root: path.join(__dirname)
    // };
    
    try{
        const data = await Applicant.find({appliedJobID:jobId});
        // console.log(data);
        // const pdfData = data.map(applicant => {
        //     const pdfUrl = path.join(__dirname, applicant.cv);;
        //     return {
        //     //   email: applicant.applicantEmail,
        //       pdfUrl
        //     };
        //   });
            const filePaths = data.map(data => path.join(__dirname, data.cv));
            // console.log(data[0].cv);
            filePaths.forEach(filePath => {
                const stream = fs.createReadStream(filePath);
                stream.pipe(res);
              });
            // const pdfData =  path.join(__dirname, data[0].cv);
        //   res.status(200).send(pdfData);
        //   res.download(pdfData);
    }catch(err){
        res.status(400).send({err:err.message});
    }

}