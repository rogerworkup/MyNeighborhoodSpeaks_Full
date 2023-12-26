import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from "./Navbar"
import Register from "./Register"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App