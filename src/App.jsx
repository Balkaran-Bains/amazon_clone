import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart'
import Home from './Components/Home'
import Login from './Components/Login'
import Payment from "./Components/Payment";




function App() {
  return (
   

          <div>
           
           
            
            <Routes>
            <Route path="/payment" element={<Payment/>} />
          
              <Route path='/cart' element={<Cart/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/' element={<Home/>} />
            </Routes>
            
          </div>

    
  )
}

export default App



