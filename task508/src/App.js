import React from 'react'
import Navbarr from './Website/ROUTER/navbar/navbar'
import Home from './Website/pages/home/home'
import About from './Website/pages/about/about'
import Products from './Website/pages/product/product'
import { Route, Routes } from 'react-router-dom'
 const App=()=>{
  return(
    <div>
      <Navbarr/>
     
      <Routes>
        <Route path="/home" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>
    </div>
  )
 }
 export default App;