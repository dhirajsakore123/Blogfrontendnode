import React, { useContext, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { Store } from "./DataStore";
import ContentFoot from "./ContentFoot";
import profileLogo from "./Mask Group 17@2x.png"
import share from "./share.svg"
import claps from "./rythm.svg"


const Common = () => {
  const params = useParams();
  const [contextData] = useContext(Store);
    const navigate=useNavigate()
    useEffect(() => {
    
      window.scrollTo(0, 0);
    }, []);

  
  return (
    <>
    
      <div className="commonpage">
       
        <div className="outerdiv ">
          <div className="likeshare">
            <div className="pos">
              <img
                className="clap"
                src={claps}
                alt="not found"
              />
              <span className="shareinner">9.3k</span>
            </div>
            <div  className="pos1" >
              <img
                className="share"
                src={share}
                alt="not found"
              />
              <span className="shareinner"> share this artical</span>
            </div>
          </div>
          <div className="blogcontent">
            {contextData
              .filter((item) => parseInt(item.id) === parseInt(params.id))
              .map((item, index) => {
                return (
                  <div key={index}>
               
                    <h2 className="contentheading" >{item.heading}</h2>
                    <div className="profile">
                      <img className="profile-img1"
                        src={profileLogo}
                        alt="not found"
                      />

                      <b className="name-time">
                        Dhiraj Sakore
                        <br />
                        <p style={{ color: "#d1caca", fontSize: "12px" }}>
                          july 29,2023:10min Read
                        </p>
                      </b>
                      <div className="socalmedia">
                        <img
                          src="https://img.icons8.com/?size=1x&id=118497&format=png"
                          className="media"
                          alt="not found"
                        />
                        <img
                          src="https://img.icons8.com/?size=1x&id=13963&format=png"
                          className="media"
                          alt="not found"
                        />
                        <img
                          src="https://img.icons8.com/?size=1x&id=32323&format=png"
                          className="media"
                          alt="not found"
                        />
                        <img
                          src="https://img.icons8.com/?size=1x&id=19318&format=png"
                          className="media"
                          alt="not found"
                        />
                      </div>
                    </div>
                    <img
                      src={item.image}
                      className="common-img"
                      alt="not found"
                    />
                    <p className="des">{item.description}</p>

                    <div className="profile">
                      <img
                        className="profilepic2"
                        src={profileLogo}
                        alt="not found"
                      />
                      <p style={{ color: "#d1caca", fontSize: "12px" }}></p>
                      <b style={{ paddingTop: "4.5%" }}>
                        Written BY
                        <br />
                        <p style={{ color: "#d1caca", fontSize: "12px" }}>
                          Dhiraj Sakore
                        </p>
                      </b>
                    </div>

                    <div className="hrbox">
                      <hr className="prhr" />
                      <button className="back-btn" onClick={()=>{navigate(-1)}}>Back</button>
                    </div>
                    <div>
                      <div className="dynamic-bottom">
                        <div className="dynamic-bottom1">
                          <b>More From The Siren</b>
                          <hr className="prhr" />
                        </div>

                        <div className="dynamic-bottom2">
                        <ContentFoot cat={contextData[params.id-1].category} id={params.id-1}/>
                       
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="common-nav"> 
        <div className="common-logo"><span className='the'>The</span> <span className='siren'>Siren</span></div> 
         <div className="get-started">Get Started</div>
      </div>

    </>
  );
};

export default Common;
