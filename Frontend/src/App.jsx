import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

import Navbar from "./Navbar"
import Register from "./Register"
import Login from './Login'
import Home from './Home'
import Dashboard from './Dashboard'


export const userContext = createContext()

function App() {
  const [user, setUser] = useState({})

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3001/')
    .then(user => {
      setUser(user.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <userContext.Provider value={user}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
    </userContext.Provider>
  )
}

export default App