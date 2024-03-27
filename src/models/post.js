import mongoose from "mongoose";

const schema = mongoose.Schema;

const postSchema = new schema({
    image: {type:String,},
    title: {type: String, required: true},
    description: {type:String, required:true},
    date: {type: String},
    isPublished: {type:Boolean},
    createdAt: {type: Date, default: Date.now()}
})

export const  postModel = mongoose.model('Post', postSchema )