import mongoose from "mongoose";

const schema = mongoose.Schema;
const achievementSchema = new schema({
    title: {type:String, reqiured: true},
    description: {type: String},
    date: {type: Date},
    image: {type: String},
    createdAt: {type: Date, default: Date.now()}
})

export const AchievementModel = mongoose.model('Achievement',achievementSchema)