import { task_model } from "../config/task_model.js"

export const taskcheck = async (req, res, next) => {
    // console.log(req.user.id)
    try {
        // let check = await task_model.find({ 'Id': req.user.id })
        const check1 = await task_model.aggregate([
            {
                $match: { Id: req.user.id }
            },
            {
                $sort:{
                    Date:1,
                    Priority:1,
                    Time:-1
                }
            },
            {
                $group: {
                    _id: "$Date",
                    body: { $push: {
                        Task:"$Task",
                        Category:"$Category",
                        Priority:"$Priority",
                        Difficulty:"$Difficulty",
                        Time:"$Time",
                        Note:"$Note",
                        Status:"$Status",
                        id:"$_id"
                    } }
                }
            }

        ])
        // const check = JSO(check1);
        // console.log(check)
        // for (let k=0;k<check.length;k++){
        //     console.log(check[k])
        // }
        res.status(200).json({
            error_status: false,
            message: "Taskss found",
            body: check1
        })

    } catch (error) {
        console.log(error);
        console.log("No tasks");
    }

}
