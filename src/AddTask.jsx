import { useState } from "react";

function AddTaskCard({ state_change }) {
    // const [expanded, setExpanded] = useState(false);
    const [task_name, name_change] = useState("");
    const [category_name, category_change] = useState("");
    const [ease_name, ease_change] = useState("Easy");
    const [priority_name, priority_change] = useState("High");
    const [time_name, time_change] = useState("");
    const [notes, notes_change] = useState("");
    const token = localStorage.getItem('token');

    const taskchanged = (e) => {
        name_change(e.target.value)
    }

    const categorychanged = (e) => {
        category_change(e.target.value)
    }

    const easechanged = (e) => {
        ease_change(e.target.value)
    }
    const timechanged = (e) => {
        time_change(e.target.value)
    }

    const prioritychanged = (e) => {
        priority_change(e.target.value)

    }

    const notechanged = (e) => {
        notes_change(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = JSON.stringify({
            task: task_name,
            category: category_name,
            ease: ease_name,
            priority: priority_name,
            time: time_name,
            note: notes
        })

        // console.log(data)
        try {
            const response = await fetch('http://localhost:5000/api/task/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: data
            })

            console.log("Task submitted");
            state_change("Dashboard");

        } catch (error) {
            console.log(error)
        }
        


    };
    //   const notech

    const backclicked = (e) => {
        state_change("Dashboard")
    }

    return (
        <div className="add-task-expanded">

            <div className="add-task-header">
                <h2>Add Task</h2>

                <button
                    className="add-task-close"
                >
                    ×
                </button>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="todo-form-field">
                    <label>Task Name</label>

                    <input
                        className="input"
                        type="text"
                        placeholder="What do you need to do?"
                        onChange={taskchanged}
                        required
                    />
                </div>

                <div className="todo-form-row">

                    <div className="todo-form-field">
                        <label>Category</label>

                        <input
                            className="input"
                            type="text"
                            placeholder="e.g. College"
                            onChange={categorychanged}
                        />
                    </div>

                    <div className="todo-form-field">
                        <label>Ease</label>

                        <select className="input" onChange={easechanged}>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>

                </div>

                <div className="todo-form-row">

                    <div className="todo-form-field">
                        <label>Expected Time</label>

                        <input
                            className="input"
                            type="text"
                            placeholder="e.g. 2 hours"
                            onChange={timechanged}
                        />
                    </div>

                    <div className="todo-form-field">
                        <label>Priority</label>

                        <select className="input" onChange={prioritychanged}>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>

                </div>

                <div className="todo-form-field">
                    <label>Notes</label>

                    <textarea
                        className="input todo-notes"
                        placeholder="Anything else you want to remember?"
                        onChange={notechanged}
                    />
                </div>

                <div className="todo-form-actions">

                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={backclicked}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="btn btn-primary"

                    >
                        Add Task
                    </button>

                </div>

            </form>

        </div>
    );
}

export default AddTaskCard;