import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Profile from './Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTaskCard from './AddTask';
import Dashboard from './Dashboard';
import Taskedit from './Taskedit';


function Todo() {
  const [render_state,state_change] = useState('Dashboard');
  const [current_task,current_task_change] = useState();

 
  return (
    <div className='flex'>
        <Sidebar state_change = {state_change}></Sidebar>
        {render_state == 'Profile' && <Profile state_change = {state_change}/>}
        {render_state == 'Tasks' && <AddTaskCard state_change = {state_change}/>}
        {render_state == 'Dashboard' && <Dashboard state_change = {state_change} current_task_change = {current_task_change}/>}
        {render_state == 'Taskedit' && < Taskedit state_change = {state_change} current_task = {current_task} />}
        
    </div>
  )
}

export default Todo