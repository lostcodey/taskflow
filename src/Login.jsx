import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const Navigate = useNavigate();
  const registerclicked = () => {
    Navigate('/register');
  }

  const [Email,Email_change]= useState('');
  const [Password,Password_change]= useState('');
  
  const Email_edited = (e)=>{
    Email_change(e.target.value)
  }

  const Password_edited = (e)=>{
    Password_change(e.target.value)
  }
  
  const formsubmitted = async(e)=>{
    e.preventDefault()
    
    try{
      const response = await fetch('http://localhost:5000/api/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          Email: Email,
          Password: Password
        })
      })
      console.log("Hello");
      const res = await response.json();
      if(response.status === 200){
          localStorage.setItem('token',res.token);
          // alert(localStorage.getItem('token'))
          Navigate('/todo');
      }else{
        console.log(res.message)
      }
    }catch(error){
      console.log(error)
    }
  }

  return (

    <main className="page">
      <section className="card">

        <h1>Welcome Back...</h1>

        <p>
          Login to continue to TaskFlow.
        </p>

        <form onSubmit={formsubmitted}>
          <div>
            <label htmlFor="email">
              Email
            </label>

            <input
              className="input"
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={Email_edited}
            />
          </div>

          <br />

          <div>
            <label htmlFor="password">
              Password
            </label>

            <input
              className="input"
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={Password_edited}
            />
          </div>

          <br />

          <button
            className="btn btn-primary"
            type="submit"
          >
            Login
          </button>

        </form>

        <p>
          Don't have an account? <a onClick={registerclicked}>Register</a>
        </p>

      </section>
    </main>
  )
}

export default Login