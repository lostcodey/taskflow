import { task_model } from "../config/task_model.js"
export const taskupdate = async(req,res,next) =>{
    const id = req.query.id
    const task_body = req.body
    console.log(id)

    const check = await task_model.findByIdAndUpdate(
        id,
        task_body,
        {returnDocument: 'after'}
    );

    if (check){
            res.status(200).json({
                error_status:false,
                error_msg:"Task updated",
            })
    }

    

}
