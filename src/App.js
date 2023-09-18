import React from 'react'


import Routing from './components/Routing'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import DataStore from './items/DataStore'






function App() {
  return (
    <div>
     
         <BrowserRouter>
         <Navbar/>
         <DataStore>
           <Routing/>
          </DataStore>
         
          
           
          
        </BrowserRouter> 
       
        
     </div>
  )
}

export default App


