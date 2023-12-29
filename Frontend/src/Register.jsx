import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './style.css'

function Register() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {username, email, password})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className='signup_container'>
      <div className='signup_form'>
        <h2>Register</h2>
        <br />
        <form onSubmit={handleSubmit}>          
        <div>
            <label htmlFor="name">Username:</label>
            <input type="text" name="" id="" placeholder='Enter username' onChange={e => setUsername(e.target.value)}/>
          </div>
          <br />
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="" id="" placeholder='Enter Email' onChange={e => setEmail(e.target.value)}/>
          </div>
          <br />
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="" id="" placeholder='**********' onChange={e => setPassword(e.target.value)}/>
          </div>
          <button className='signup_btn'>Sign up</button>
        </form>
        <br />
        <p>Already have account?</p>
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  )
}

export default Register