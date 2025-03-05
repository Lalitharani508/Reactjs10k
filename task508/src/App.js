import React from 'react'
import Navbarr from './Website/ROUTER/navbar/navbar'
import Home from './Website/pages/home/home'
import About from './Website/pages/about/about'
import Products from './Website/pages/product/product'
import Singlepingrediants from './Website/pages/product/singlepingrediants'
import Singlepinstructions from './Website/pages/product/SPinstructions'
import { Route, Routes } from 'react-router-dom'
import Singlep from './Website/pages/product/singleproduct'
import { useEffect } from 'react'
import { useState } from 'react'
import apidata from 'axios'
const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    apidata.get("https://dummyjson.com/recipes").then(res => {
      console.log(res);  // Logs the entire response
      setData(res.data.recipes);  // Sets the recipes data to state
    }).catch(err => {
      console.log(err);  // Logs any errors
    });
  }, []);
  console.log(data,"data from api")
  return (
    <div>
      <Navbarr />

      <Routes>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products data={data}/>}></Route>
        <Route path='/products/:id' element={<Singlep data={data} />}>
                    <Route path='ingredients' element={<Singlepingrediants/>} ></Route>
                    <Route path='instructions' element={<Singlepinstructions/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}
export default App;