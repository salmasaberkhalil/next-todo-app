import mongoose from "mongoose";

export function dbConnection(){
    mongoose
    .connect(`mongodb+srv://salmasaber341:ntipVhC0k1PnZR5A@cluster0.6qerxtp.mongodb.net/todo`)
    .then(()=>{
        console.log("connected to db");
        
    })
    .catch((err)=>{
        console.log(`error connection is ${err}`);
        
    });
}