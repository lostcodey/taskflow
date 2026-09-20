import React from 'react'
import { useNavigate } from 'react-router-dom';

function Intro() {
  const Navigate = useNavigate();
  const loginclicked = ()=>{
    Navigate('/login')
  }

  const registerclicked = ()=>{
    Navigate('/register')
  }
  return (
    <main className="page">
      <section className="card">

        <h1>Welcome to TaskFlow</h1>

        <p>
          Manage your tasks. Stay organized. Get things done.
        </p>

        <div>
          <button className="btn btn-primary" onClick={loginclicked}>
            Login
          </button>

          <button className="btn btn-secondary" onClick={registerclicked}>
            Register
          </button>
        </div>

      </section>
    </main>
  )
}

export default Intro