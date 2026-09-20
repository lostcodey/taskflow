import mongoose from "mongoose";

import dotenv from 'dotenv';


dotenv.config({
    path:'C:/Users/Aryan sinha/Desktop/Work/Coding/taskflow/.env'
})

const task_schema = new mongoose.Schema({
    'Task':{type:String,required:true},
    'Category':{type:String,required:true},
    'Priority':{type:String,required:true},
    'Difficulty':{type:String,required:true},
    "Time":{type:String,required:true},
    "Note":{type:String,required:true},
    "Date":{type:String,required:true},
    "Status":{type:Boolean,default:false},
    "Id":{type:String,required:true},
})
  


export const task_model = mongoose.model('task_model2',task_schema)