import mongoose from "mongoose";

const schema = mongoose.Schema;
const achievementSchema = new schema({
    title: {type:String, reqiured: true},
    description: {type: String, required: true},
    date: {type: String, required: true},
    certificate: {type: String, required: true},
    image: {type: String, required: true},
    createdAt: {type: String, required: true}
})

export const AchievementModel = mongoose.model('Achievement',achievementSchema)