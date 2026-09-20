import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css'
import App from './App.jsx'
import Intro from './Intro.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Sidebar from './sidebar.jsx';
import Todo from './Todo.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/todo' element={<Todo />}/>
          <Route path='/' element={<Intro  />}/>
      </Routes>
  </BrowserRouter>
)

