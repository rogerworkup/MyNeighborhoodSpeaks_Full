import './style.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='signup_container'>
      <div className='signup_form'>
        <h2>Sing Up</h2>
        <br />
        <form action="">
          <div>
            <label htmlFor="name">Username:</label>
            <input type="text" name="" id="" placeholder='Enter username' />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="" id="" placeholder='Enter Email'/>
          </div>
          <br />
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="" id="" placeholder='**********'/>
          </div>
          <button className='signup_btn'>Sign up</button>
        </form>
        <br />
        <p>Already have account,</p>
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  )
}

export default Register