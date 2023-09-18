import React, { useContext } from 'react'
import { Store } from './DataStore'
import { NavLink } from 'react-router-dom'

const RandomNo = () => {
    const [contextData]=useContext(Store)
  const random=Math.floor(Math.random()*75)
  return (
    <div>
      {
    contextData && contextData.filter((item)=>item.id===random).map((item,index)=>{
       
      return(
        <NavLink
        to={`/${item.id}`}
        style={{ textDecoration: "none", color: "black" }}  key={index}>
           <div className='latest-datainner'>
          <img className='latest-img' src={item.image} alt='not found'/>
          <b >{item.heading.slice(0,50)}</b>
          <p className='paragraph'>{item.description.slice(0,200)}...</p>
         </div>
      </NavLink>
         
        )
    })
    
    }
    </div>
  )
}

export default RandomNo
