import React, { use, useEffect, useState } from 'react'

function Dashboard({ state_change, current_task_change }) {
  const token = localStorage.getItem('token')
  const [tasks, task_change] = useState([]);
  const [reset_triger,triger_change] = useState(0);
  useEffect(() => {
    const task = async () => {
      try {
        // alert('Cuck u')
        const response = await fetch('http://localhost:5000/api/task/taskcheck', {
          method: 'POST',
          headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        })
        console.log(response)
        const res = await response.json();
        
        if (res.body) {
          task_change(res.body);
          console.log("res:", res);
          console.log("res.body:", res.body);
          console.log("is array:", Array.isArray(res.body));

        }
      } catch (error) {
        console.log(error)
      }
    }
    task();
  }, [reset_triger])


  function editclicked(name) {
    // task_change(name);
    current_task_change(name);
    console.log(name);
    state_change("Taskedit");
  }

  async function statusclicked(name){
    
  }

  async function deleteclicked(name) {

    console.log(name.id);
    const response  = await fetch(`http://localhost:5000/api/task/delete?id=${name.id}`,{
      method:"DELETE",
      headers: {
            "Authorization": `Bearer ${token}`
      }
    })
    if(response){
        // state_change("Dashboard");
        // console.log("Hello");
        // REE
        triger_change(prev => prev+1);
    }
    

  }

  return (

    <div className="dashboard">

      <h1>My Tasks</h1>
      {tasks.map((value) => (
        <div key={value._id}>

          <h3>{value._id}</h3>

          {value.body.map((task, index) => (
            <div className="task-card" key={index}>
              <div className="task-top">
                <div className="task-title">
                  <input type="checkbox" 
                  checked={task.Status === true} 
                  onChange={statusclicked(task)}
                  />
                  <span>{task.Task}</span>
                </div>

                <span className="priority">
                  {task.Priority}
                </span>
              </div>

              <div className="task-info">
                <span>{task.Category}</span>
                <span>·</span>
                <span>{task.Difficulty}</span>
                <span>·</span>
                <span>{task.Time}</span>
              </div>

              <div className="task-bottom">
                <span>
                  Note: {task.Note}
                </span>

                <span>
                  <button onClick={() => {deleteclicked(task) }}>Delete</button>
                  <button onClick={() => { editclicked(task) }}>Edit</button>
                </span>


              </div>

            </div>
          ))}

        </div>
      ))}
    </div>

  )
}


export default Dashboard