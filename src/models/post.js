import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    image: {type:String, required: true},
    title: {type: String, required: true},
    description: {type:String, required:true},
    date: {type: String, required:true},
    isPublished: {type:Boolean},
    url: {type:String },
    createdAt: {type: String, required: true}
})

export const  postModel = mongoose.model('post', postSchema,'posts' )