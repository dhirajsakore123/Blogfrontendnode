import React, { useContext, useEffect } from 'react'
import RandomNo from './RandomNo'
import RandomCompo from './RandomCompo'
import RandomCompo2 from './RandomCompo2'
import { Store } from './DataStore'
import { NavLink } from 'react-router-dom'

import Arrow from"./arrow.svg"
import FooterCompo from './FooterCompo'

const Home = () => {
  
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);
  
  const [contextData]=useContext(Store)
    const random=Math.floor(Math.random()*75)
    const random1=Math.floor(Math.random()*75)
    const random2=Math.floor(Math.random()*75)
    const random3=Math.floor(Math.random()*75)
      let count=2
  
  return (
    <>
  <div className='flex-cont'>
    <div className='home-page'>
     <div className='home-img1 home-img'>
      <img className='slid' src='https://posterspy.com/wp-content/uploads/2021/08/POSTERSFORPOSTERSPY4.jpg'alt='not found' />
      <span className='textOn-img'>Tital Of Vertical Gallary</span>
     </div>
     <div className='home-img2 home-img'>
      <img className='slid1' alt='not found' src='https://i.ytimg.com/vi/uYPbbksJxIg/maxresdefault.jpg'/>
      <span className='textOn-img1'>Tital Of Vertical Gallary</span>
     </div>
     <div className='home-img3 home-img'>
       <img className='slid1'alt='not found' src='https://c4.wallpaperflare.com/wallpaper/87/516/862/batman-the-dark-knight-rises-batman-the-dark-knight-rises-poster-wallpaper-preview.jpg' />
       <span className='textOn-img1'>Tital Of Vertical Gallary</span>
     </div>
    </div>
    
    <div className='the-latest'>
    <h2 className='border-bottom'>The Latest</h2>
  </div>


  <div className='latest-data'>
  <RandomNo/>
  <RandomNo/>
  <RandomNo/>
  </div>
<div className='latest-aritcals'>
<div className='latest-aritcalsRight'>
<h2 className='border-bottom'>Latest Articles</h2>
<RandomCompo/>
<RandomCompo/>
<RandomCompo/>
<RandomCompo/>
<div className="loadmore">
          <img src={Arrow} alt="not found"  className="arrow"/>
          <p className="load">Load more</p>
 </div>
<div className='big-img'>
  {
    contextData && contextData.filter((item)=>item.id===random3).map((item,index)=>{
      return(
        <div key={index}>
        
        <img className='img10' src={item.image} alt='not found'/>
        </div>
      )
     })
  }
</div>
</div>

<div className='latest-aritcalsLeft'>
<div className='home-add'>
<img src="https://i.pinimg.com/originals/47/77/ca/4777ca1b779bf7642d6d3756791cc636.gif" alt="not found" className="ads"/>
</div>
<div className='top-posts'>
  <h2 className='border-bottom'>Top Post</h2>
  <div  className='top-post1'>
   <RandomCompo2/>
   {
     contextData && contextData.filter((item)=>item.id===random).map((item,index)=>{
        return(
          <NavLink   to={`/${item.id}` }
          style={{ textDecoration: "none", color: "black" }} key={index}>
           <div className='top2post' >
           
          <img className='post2-img' src={item.image} alt='not found'/>
          <p className='topdeccription2 paragraph'>{item.heading.slice(0,30)}</p>
          <h1 className='countes'>{count++}</h1>
          
        </div>
        </NavLink>
        )
       })
      }
      {
      contextData && contextData.filter((item)=>item.id===random1).map((item,index)=>{
        return(
          <NavLink   to={`/${item.id}` }
          style={{ textDecoration: "none", color: "black" }} key={index}>
           <div className='top2post' >
            
          <img className='post2-img' src={item.image} alt='not found'/>
          <p className='topdeccription2 paragraph'>{item.heading.slice(0,25)}</p>
          <h1 className='countes'>{count++}</h1>
         
            </div>
            </NavLink>
        )
       })
      }
      {
      contextData && contextData.filter((item)=>item.id===random2).map((item,index)=>{
        return(
          <NavLink   to={`/${item.id}` }
          style={{ textDecoration: "none", color: "black" }} key={index}>
           <div className='top2post' >
             
          <img className='post2-img' src={item.image} alt='not found'/>
          <p className='topdeccription2 paragraph'>{item.heading.slice(0,30)}</p>
          <h1 className='countes'>{count++}</h1>
          
            </div>
            </NavLink>
        )
       })
      }
  </div>
</div>
</div>
</div>

  </div>
  <div className='footer1'>
  <FooterCompo/>
</div>
</>
  )
}

export default Home