import { Schema } from "mongoose";

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
    recuiter:{
        required: true,
        type: String,
    },

})

export default jobSchema;