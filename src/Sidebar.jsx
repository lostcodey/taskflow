import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar({state_change}) {
  const navigate = useNavigate();
  const logoutclicked = (e)=>{
    console.log("Hello")
    localStorage.removeItem('token')
    
    navigate('/todo')
  }

  return (

    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">✓</div>
        <span>TaskFlow</span>
      </div>

      <div></div>

      <div className="sidebar-divider"></div>

      {/* Navigation */}
      <nav className="sidebar-nav">

        <button className="sidebar-btn active" onClick={()=>state_change('Dashboard')}>
          <span className="sidebar-icon">▦</span>
          <span>Dashboard</span>
        </button>

        <button className="sidebar-btn" onClick={()=>state_change('Tasks')}>
          <span className="sidebar-icon">☷</span>
          <span>Tasks</span>
        </button>



        <button className="sidebar-btn" onClick={()=>state_change('Profile')}>
          <span className="sidebar-icon">⚙</span>
          <span>Profile</span>
        </button>

      </nav>

      {/* Bottom */}
      <div className="sidebar-bottom">

        <div className="sidebar-divider" ></div>

        <button className="sidebar-btn logout" onClick={logoutclicked}>
          <span className="sidebar-icon">→</span>
          <span>Logout</span>
        </button>

      </div>

    </aside>
  )
}

export default Sidebar