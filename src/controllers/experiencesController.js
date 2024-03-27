import { experienceModel } from "../models/experience.js";




export const addExperience = async (req, res) => {

    try {
        const data = req.body
        const postExperience = await experienceModel.create(data)
        res.send(postExperience)
    } catch (error) {
        console.log(error)
    }
    
    };
    
    export const getExperience = async(req,res) => {
    
    try { 
            const fetchExperience = await experienceModel.find({})
            res.send(fetchExperience)
    } catch (error) {
        console.log(error)
    }
    
    };
    
     export const patchExperience = async(req,res) =>{
      try {
         const updateExperience = await experienceModel.findByIdAndUpdate(req.params.id, req.body)
          res.send(updateExperience)
      } catch (error) {
        
      }
    };

    export const deleteExperience = async(req,res) =>{
       try {
         const removeExperience = await experienceModel.findByIdAndDelete(req.params.id, req.body)
         res.send(removeExperience)
       } catch (error) {
        
       }
    };

