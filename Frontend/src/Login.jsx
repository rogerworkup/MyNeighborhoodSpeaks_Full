import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import './style.css'

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then(res => {
      if(res.data === "Success") {
        navigate('/')
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='signup_container'>
      <div className='signup_form'>
        <h2>Login</h2>
        <br />
        <form onSubmit={handleSubmit}>          
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="" id="" placeholder='Enter Email' onChange={e => setEmail(e.target.value)}/>
          </div>
          <br />
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="" id="" placeholder='**********' onChange={e => setPassword(e.target.value)}/>
          </div>
          <button className='signup_btn'>Login</button>
        </form>
        <br />
        <p>Not Registered?</p>
        <Link to='/register'><button>Sign Up</button></Link>
      </div>
    </div>
  )
}

export default Login