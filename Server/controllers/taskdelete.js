import { task_model } from "../config/task_model.js"
export const  taskdelete = async(req,res,next) =>{
    // console.log(req.query.id);
    const found = await task_model.findByIdAndDelete(req.query.id);
    if(found){
        res.status(204).json({
            error_status : false,
            error_msg : "Task deleted",
        })
    }
}       