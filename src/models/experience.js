import mongoose from "mongoose";

const schema = mongoose.Schema;

const experienceSchema = new schema ({
    
        institutionName: {type:String, required: true},
        position: {type:String, required:true},
        startDate: {type: String, required:true},
        endDate: {type: String},
        description: {type:String, required: true},
        location: {type: String},
        createdAt: {type: String, required:true}
      
})

export const experienceModel = mongoose.model('experience', experienceSchema, 'experiences')