import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import Navbar from "./Navbar"
import Register from "./Register"
import Login from './Login'
import Home from './Home'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App