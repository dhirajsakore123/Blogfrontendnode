import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from '../items/Home'
import Bollywood from '../items/Bollywood'
import Technology from '../items/Technology'
import Hollywood from '../items/Hollywood'
import Fitness from '../items/Fitness'
import Food from '../items/Food'
import Common from '../items/Common'



const Routing = () => {
  return (
    <div>
   
      <Routes>
        
         <Route path='/' element={<Home/>}/> 
         <Route path='/:id' element={<Common/>}/> 
         
         <Route path='/bollywood/' element={<Bollywood/>}/> 
         <Route path='/bollywood/:id' element={<Common/>}/>

         <Route path='/technology' element={<Technology/>}/> 
         <Route path='/technology/:id' element={<Common/>}/>

         <Route path='/hollywood' element={<Hollywood/>}/> 
         <Route path='/hollywood/:id' element={<Common/>}/> 

         <Route path='/fitness' element={<Fitness/>}/> 
         <Route path='/fitness/:id' element={<Common/>}/> 
         
         <Route path='/food' element={<Food/>}/> 
         <Route path='/food/:id' element={<Common/>}/>
         
      </Routes>
     
    </div>
  )
}

export default Routing
