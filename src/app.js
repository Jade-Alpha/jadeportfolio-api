import  express  from "express";
import router from "./routes/allRoutes.js";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const app = express ()

const mongoURI = process.env.MONGO_URI

console.log(mongoURI)
mongoose.connect(mongoURI).then(()=>{
   console.log('database connected') 
}).catch((error)=> console.log(error))

const PORT = process.env.PORT || 7000
app.use (cors())
app.use(router)


app.listen(PORT,() =>{
    console.log(`express app is running${PORT}`);
});