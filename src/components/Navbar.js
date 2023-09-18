import React ,{useState}from 'react'
import { NavLink } from 'react-router-dom'
import Menu from './Menu'

const Navbar = () => {
 
const [isMobile,setIsMobile]=useState(false)
  
 
  return (
    <>
    <div className='nav' >
     <div className='head'> <span className='the'>The</span> <span className='siren'>Siren</span> <div className='menu-div' onClick={()=>{setIsMobile(!isMobile)}}><Menu/></div> </div>
    
      <div className={isMobile?'dis':'navcontainer'}  >
     <NavLink to='/' style={({ isActive }) => ({ color: isActive ? 'red' : 'black',textDecoration:'none' })} >
          <div className='item'>Home</div></NavLink>

     <NavLink to='/bollywood' style={({ isActive }) => ({ color: isActive ? 'red' : 'black',textDecoration:'none' })}> 
     <div className='item'>Bollywood</div></NavLink>

     <NavLink to='/technology'style={({ isActive }) => ({ color: isActive ? 'red' : 'black' ,textDecoration:'none'})}>
        <div className='item'>Technology</div></NavLink>
        
     <NavLink to='/hollywood' style={({ isActive }) => ({ color: isActive ? 'red' : 'black' ,textDecoration:'none'})}>
         <div className='item'>Hollywood</div></NavLink> 

     <NavLink to='/fitness' style={({ isActive }) => ({ color: isActive ? 'red' : 'black' ,textDecoration:'none'})}>
        <div className='item'>Fitness</div></NavLink> 

     <NavLink to='/food' style={({ isActive }) => ({ color: isActive ? 'red' : 'black',textDecoration:'none' })}> 
     <div className='item'>Food</div></NavLink> 
     
     </div> 
    
     
      
       
     
    
     <hr/>
    </div>
   
    </>
  )
}

export default Navbar
