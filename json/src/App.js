import React from 'react'
import Navbar1 from './components/navbar/nav'
import {Route,Routes} from 'react-router-dom'
import Home from './components/home/home'
import Reciepeies from './components/receipes/reciepeies'
import Addtocart from './components/addtocart/Addtocart'
const App = () => {
  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/recipie' element={<Reciepeies/>}></Route>
        <Route path="/CartItems" element={<Addtocart/>}></Route>
      </Routes>
    </div>
  )
}

export default App
