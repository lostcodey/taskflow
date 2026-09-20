import React from 'react'
import { useState } from 'react';
function Taskedit({ state_change, current_task }) {
  // console.log(current_task);
  const [task_name, name_change] = useState(current_task.Task);
  const [category_name, category_change] = useState(current_task.Category);
  const [ease_name, ease_change] = useState(current_task.Difficulty);
  const [priority_name, priority_change] = useState(current_task.Priority);
  const [time_name, time_change] = useState(current_task.Time);
  const [notes, notes_change] = useState(current_task.Note);
  const [status, status_change] = useState(current_task.Status);
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

  const statuschanged = (e) => {
    status_change(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      Task: task_name,
      Category: category_name,
      Difficulty: ease_name,
      Priority: priority_name,
      Time: time_name,
      Status: status,
      Note: notes,

    })

    console.log(data);

    try {
      const response = await fetch(`http://localhost:5000/api/task/update?id=${current_task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: data
      })
      console.log("Task updated");
      state_change("Dashboard")

    } catch (error) {
      console.log(error)
    }

  };

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
            value={task_name}
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
              value={category_name}
              onChange={categorychanged}
            />
          </div>

          <div className="todo-form-field">
            <label>Ease</label>

            <select className="input" value={ease_name} onChange={easechanged} >
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
              value={time_name}
              onChange={timechanged}
            />
          </div>

          <div className="todo-form-field">
            <label>Priority</label>

            <select className="input" value={priority_name} onChange={prioritychanged}>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

        </div>

        <div className="todo-form-row">

          {/* <div className="todo-form-field">
            <label>Date</label>

            <input
              className="input"
              type="text"
              placeholder="e.g. 2 hours"
              value={time_name}
              onChange={timechanged}
            />
          </div> */}

          <div className="todo-form-field">
            <label>Status</label>
            <select
              className="input"
              value={status}
              onChange={statuschanged}>

              <option value={false}>Pending</option>
              <option value={true}>Completed</option>
              
            </select>
          </div>

        </div>

        <div className="todo-form-field">
          <label>Notes</label>

          <textarea
            className="input todo-notes"
            placeholder="Anything else you want to remember?"
            value={notes}
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

export default Taskedit