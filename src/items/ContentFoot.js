import React, { useContext } from 'react'
import { Store } from './DataStore'
import { NavLink } from 'react-router-dom'
import profileLogo from "./Mask Group 17@2x.png"

const ContentFoot = (props) => {
    const [content]=useContext(Store)
    console.log(props.cat)
    console.log(props.id)
    const random = Math.floor(Math.random()*10)
    
  return (
   
    <>
    {
        content.filter((item)=>item.category === props.cat && item.id !== props.id).slice(random , random+3).map((item,index)=>{
        return(
          
          
          <div className="cards"  key={index}>
            <NavLink to={`/${item.id}` }
                style={{ textDecoration: "none", color: "black" }}  >
            <img
              src={item.image}
              alt="not found"
              className="last-img"
            />
            <p className="pstyle">
              The middle class can no longer own a home in
              Switzerland, according to Martin Neff, chief
              economist at Raiffeisen Bank.
            </p>
            <div className="profile">
              <img
                className="profilepic3"
                src={profileLogo}
                alt="not found"
              />
              <p
                style={{ color: "#d1caca", fontSize: "12px" }}
              ></p>
              <b className='read' style={{ paddingTop: "4.5%" }}>
                Dhiraj Sakore
                <br />
                <p
                 className='read1' style={{ color: "#d1caca", fontSize: "12px" }}
                >
                  Aug 10: (4min Read)
                </p>
              </b>
            </div>
            </NavLink>
          </div>
          
         
          
        )
    })
}
  </>     
   
  )
}

export default ContentFoot
