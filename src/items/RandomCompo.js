import React, { useContext } from 'react'
import { Store } from './DataStore'
import { NavLink } from 'react-router-dom'

const RandomCompo = () => {
    const [contextData]=useContext(Store)
    const random=Math.floor(Math.random()*76)
  return (
    <div>
      {
     contextData &&  contextData.filter((item)=>item.id===random).map((item,index)=>{
        return(
           
            
               <NavLink   to={`/${item.id}`}
            style={{ textDecoration: "none", color: "black" }}  key={index}>
              <div className='articles'>
            <img className='artical-img' src={item.image} alt='not found'  />
            <div className='artical-details'>
                <b className='paragraph' >{item.heading.slice(0,50)}...</b>
                <p className='paragraph'>{item.description.slice(0,180)} </p>
                <p className='paragraph'><b  className='paragraph' style={{color:'#756c6c'} } >Travel</b>/Augest 21 2023</p>
            </div>
            </div>
            </NavLink>
         
        
        )
       })
      }
    </div>
  )
}

export default RandomCompo
