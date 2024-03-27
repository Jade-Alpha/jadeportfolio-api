import mongoose from "mongoose";

const schema = mongoose.Schema;

const experienceSchema = new schema ({
    
        institutionName: {type:String, required: true},
        position: {type:String},
        startDate: {type: Date},
        endDate: {type: Date},
        description: {type:String, required: true},
        location: {type: String},
        createdAt: {type: Date, default: Date.now()}
      
})

export const experienceModel = mongoose.model('experience', experienceSchema, 'experiences')