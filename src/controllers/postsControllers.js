import { postModel } from "../models/post.js";


export const addPost = async (req,res) =>{

    try {
        const data = req.body
        console.log('hijhih', data)
        const blogPost = await postModel.create(data)
        console.log('fff', blogPost)
        res.send(blogPost)
    } catch (error) {
        
    }
};


export const getPost = async(req,res) =>{
    try {
       
        const fetchPost = await postModel.find({})
        res.send(fetchPost)
    } catch (error) {
        
    }
};


export const patchPost = async(req,res) =>{
    try {
        const updatePost = await postModel.findByIdAndUpdate(req.params.id, req.body)
        res.send(updatePost)
    } catch (error) {
        
    }
};


export const deletePost = async(req,res) =>{
   try {
     const removePost = await postModel.findByIdAndDelete(req.params.id)
     console.log('apo', removePost)
     res.send(removePost)
   } catch (error) {
    
   }
};

