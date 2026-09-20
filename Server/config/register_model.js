import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config({
    path:'C:/Users/Aryan sinha/Desktop/Work/Coding/taskflow/.env'
})


const register_schema = new mongoose.Schema({
    Username:{ type:String,required:true},
    Email:{ type:String,required:true,unique: true},
    Password:{ type:String,required:true},
    Imageloc:{type:String},
    Dateofbirth:{type:String},
    Organisation:{type:String},
})


export const register_model = mongoose.model('register_model2',register_schema);
