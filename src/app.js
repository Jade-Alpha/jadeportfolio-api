import  express  from "express";
import {router} from "./routes/allRoutes.js";
import mongoose from "mongoose";
import cors from "cors"
import { handleRequests, init, handleResponses } from "express-oas-generator";
import dotenv from "dotenv"

dotenv.config()

const app = express(); 

const modelNames = mongoose.modelNames();

handleResponses(app, {});

app.use(express.json())
app.use (cors())

const mongoURI = process.env.MONGO_URI

console.log(mongoURI)
mongoose.connect(mongoURI).then(()=>{
   console.log('database connected') 
}).catch((error)=> console.log(error))

const PORT = process.env.PORT || 7000



app.use(router);



app.listen(PORT,() =>{
    console.log(`express app is running ${PORT}`);

    init(
        app,
        (spec) => {
          spec.info = {
            title: "Portfolio API Documentation",
            description: "API Documentation for Portfolio website",
          };
          spec.host = "jadeportfolio-api.onrender.com";
          spec.schemes = ["http", "https"];
    
          return spec;
        },
        "/swagger.json",
        60 * 1000,
        "api-docs",
        modelNames,
        ["achievement", "experience", "post"],
        ["development"],
        true
      );
    
      console.log(
        "Server Listening on  8080, Open http://localhost:8080/api-docs/"
      );
    });
    
    app.use(router);
    
    handleRequests();
