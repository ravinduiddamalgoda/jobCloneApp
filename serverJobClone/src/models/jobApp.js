import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({ 
    jobTitle: {
        required: true,
        type: String,
    },
    jobStatus:{
        required: true,
        type: String,
    },
    jobType:{
        required: true,
        type: String,
    },
    feild:{
        required: true,
        type: String,
    },
    skill:{
        required: true,
        type: String,
    },
    recuiterEmail:{
        required: true,
        type: String,
    },
    position:{
        required: true,
        type: String,
    },

})

const Job =  mongoose.model('Job' , jobSchema);
export default Job;