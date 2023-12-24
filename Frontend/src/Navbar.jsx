import React from 'react'
import './style.css'

function Navbar() {
  return (
    <div className='navbar-header'>
        <div><h3>Blog App</h3></div>
        <div>
            <a href="" className='link'>Home</a>
            <a href="" className='link'>Quiz</a>
            <a href="" className='link'>Contact</a>
        </div>
        <div><h5>Register/Login</h5></div>
    </div>
  )
}

export default Navbar