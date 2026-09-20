import { task_model } from "../config/task_model.js";

export const taskadd = async (req, res, next) => {
    const { task, category, ease, priority, time, note } = req.body;
    console.log(priority, time)
    const stamp = new Date();


    const work = new task_model({
        Task: task,
        Category: category,
        Priority: priority,
        Difficulty: ease,
        Time: time,
        Note: note,
        Date: stamp.toDateString(),
        Id: req.user.id
    })


    await work.save();

    res.status(200).json({
        error_status: false,
        message: "Task added",
    })
}




