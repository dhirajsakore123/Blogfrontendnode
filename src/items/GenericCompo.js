import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Arrow from"./arrow.svg"
import FooterCompo from "./FooterCompo";
import axios from "axios";


const  GenericCompo = (props) => {
  const[load,setLoad]=useState(false)
  //  const[contextData,setData]=useState()
 const[contextData,setvalue]=useState('')
    useEffect(() => {
        axios.get(`https://blogserver-w9be.onrender.com/user/api/${props.catogary}`)
        .then(res=>setvalue(res.data))
        .catch(err=>console.log(err))
        window.scrollTo(0, 0);
      }, [props.catogary]);
      console.log(contextData)

  let count = 2;

  return (
    
      <div className="page">
        
        <div className="page2">
           <div className="blog-container">
            <>
              <h4 className="heading">{props.heading}</h4>
            </>
            { contextData && contextData.filter((item) => {return item.category0 === `${props.catogary}`;}).slice(0,8).map((item, index) => {
              return (
                <div className="blog" key={index}>
                  <img className="blogimg" src={item.image} alt="not found" />

                  <NavLink
                    to={`/bollywood/${item.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="parabox">
                      <p className="blogheading">{item.heading}</p>
                      <p className="blogdetail">{item.smalldes}</p>
                    </div>
                  </NavLink>
                  <hr className="gaphr" />
                </div>
              );
            })}

             {contextData && contextData.filter((item) => {return item.category0 === `${props.catogary}`;}).slice(8,10).map((item, index) => {
              return (
                <div  key={index} className={load?'blog':'less'}>
                  <img className="blogimg" src={item.image} alt="not found" />

                  <NavLink
                    to={`/bollywood/${item.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="parabox">
                      <p className="blogheading">{item.heading}</p>
                      <p className="blogdetail">{item.smalldes}</p>
                    </div>
                  </NavLink>
                  <hr className="gaphr" />
                </div>
              );
            })}
              {load? <div className="loadmore" onClick={()=>{load?setLoad(false):setLoad(true)}}>
          <img src={Arrow} alt="not found"  className="arrow1"/>
          <p className="load"> Show less</p>
        </div>: <div className="loadmore" onClick={()=>{load?setLoad(false):setLoad(true)}}>
          <img src={Arrow} alt="not found"  className="arrow"/>
          <p className="load"> Load more</p>
        </div>}
            </div>

           <div className="blog-container2">
            <>
              <h4 className="heading1">Top posts</h4>
            </>
            <>
              {contextData && contextData.filter((item) => {return item.category1 === `${props.catogary1}`;}).map((item, index) => {
                return (
                  <div key={index} >
                    <div className="blog2" >
                      <img src={item.image} className="blogimg1" alt="img" />
                      <div className="flexnum">
                        <NavLink
                          to={`/bollywood/${item.id}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <div className="parabox">
                            <p className="blogheading">{item.heading}</p>
                            <p className="blogdetail">{item.smalldes}</p>
                          </div>
                        </NavLink>
                        <div className="num1">1</div>
                      </div>
                    </div>
                    <hr className="gaphr2" />
                  </div>
                );
              })}
            </>
            <>
              {contextData && contextData.filter((item) => {return item.category2 === `${props.catogary2}`;}).map((item, index) => {
                return (
                  <div key={index} >
                    <div className="blog3" key={index}>
                      <img src={item.image} className="blogimg2" alt="img" key={index}/>
                      <div className="flexnum">
                        <NavLink
                          to={`/bollywood/${item.id}` }
                          style={{ textDecoration: "none", color: "black" }}>
                          <div className="parabox2">
                            <p className="blogheading2">{item.heading}</p>
                            <div className="num">{count++}</div>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                    <hr className="gaphr2" />
                  </div>
                );
              })}
            </>
            <div className="advertisement"><img src="https://i.pinimg.com/originals/47/77/ca/4777ca1b779bf7642d6d3756791cc636.gif" alt="not found" className="ads"/></div>
            </div>
         </div>
         <div className='footer'>
           <FooterCompo/>
           </div>
        
      </div>
      
    
  );
};

export default GenericCompo;
