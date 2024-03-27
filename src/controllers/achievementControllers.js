import { AchievementModel } from "../models/achievement.js";



export const addAchievement = async (req, res) => {

try {
    const data = req.body
    const postAchievement = await AchievementModel.create(data)
    res.send(postAchievement)
} catch (error) {
    console.log(error)
}

};

export const getAchievement = async(req,res) => {

try {
        const fetchAchievement = await AchievementModel.find({})
        res.send(fetchAchievement)
} catch (error) {
    console.log(error)
}

};

export const patchAchievement = async(req,res) =>{
    try {
        
        const updateAchievement = await AchievementModel.findByIdAndUpdate(req.params.id,req.body)
        res.send(updateAchievement)
    } catch (error) {
        
    }
};


export const deleteAchievement = async(req,res) =>{

    try {
        const removeAchievement = await AchievementModel.findByIdAndDelete(req.params.id, req.body)
        res.send(removeAchievement)
    } catch (error) {
        
    }
};