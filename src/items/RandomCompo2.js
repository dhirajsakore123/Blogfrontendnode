import React, { useContext } from 'react'
import { Store } from './DataStore'
import { NavLink } from 'react-router-dom'

const RandomCompo2 = () => {
    const [contextData]=useContext(Store)
    const random=Math.floor(Math.random()*75)+1
  return (
    <div>
      {
     contextData && contextData.filter((item)=>item.id===random).map((item,index)=>{
        return(
          
           <div className='top1post'key={index}>
              <NavLink   to={`/${item.id}`}
            style={{ textDecoration: "none", color: "black" }}>
          <img className='firstpost-img' src={item.image} alt='not found'/>
          <div className='flexbox'>
          <p className='topdeccription paragraph'>{item.heading.slice(0,50)}</p>
            <h1 className='countes'>1</h1>
            </div>
            </NavLink>
            </div>
        
        )
       })
      }
    </div>
  )
}

export default RandomCompo2
