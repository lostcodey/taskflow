import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Register() {
    const [name,name_change] = useState('');
    const [Email,Email_change] = useState('');
    const [Password,Password_change] = useState('');
    const [check,check_change] = useState('');
    const navigate = useNavigate();

    const name_editted =(e)=>{
        name_change(e.target.value);
    }

    const Email_editted =(e)=>{
        Email_change(e.target.value);
    }

    const Password_editted =(e)=>{
        Password_change(e.target.value);
    }

    const Check_editted =(e)=>{
        check_change(e.target.value);
    }

    const loginclicked =()=>{
        navigate('/Login')
    }

    const form_submitted =async(e)=>{
        e.preventDefault();
        if(check == Password){
            const response = await fetch('http://localhost:5000/api/register',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    name:name,
                    Email:Email,
                    Password:Password
                })
            })
            const res = await response.json();

            if(res.error_status == false){
              navigate('/login');
            }else{
              alert(res.message);
            }
        }
        else{
            alert("Check password")
        }   
    }


  return (
     <main className="page">
      <section className="card">

        <h1>Create Account</h1>

        <p>
          Create your TaskFlow account.
        </p>

        <form onSubmit={form_submitted}>

          <div>
            <label htmlFor="name">
              Name
            </label>

            <input
              className="input"
              type="text"
              id="name"
              placeholder="Enter your name"
              onChange={name_editted}
            />
          </div>

          <br />

          <div>
            <label htmlFor="email">
              Email
            </label>

            <input
              className="input"
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={Email_editted}
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
              placeholder="Create a password"
              onChange={Password_editted}
            />
          </div>

          <br />

          <div>
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              className="input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              onChange={Check_editted}
            />
          </div>

          <br />

          <button
            className="btn btn-primary"
            type="submit"
          >
            Register
          </button>

        </form>

        <p>
          Already have an account? <a onClick={loginclicked}>Login</a>
        </p>

      </section>
    </main>
  )
}

export default Register