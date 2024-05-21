import React from "react";
import { Container } from "react-bootstrap";

import gray2 from "../../Assets/screen.jpg";

import { RiChatHistoryFill } from "react-icons/ri";
import { MdOutlineSpatialTracking } from "react-icons/md";
import { MdGpsFixed } from "react-icons/md";

import { DiAndroid } from "react-icons/di";
import { FaAppStoreIos } from "react-icons/fa";
import { SiHarmonyos } from "react-icons/si";

function Phone() {
  return (
  <Container id="about" className="about">
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch" style={{position:"relative"}} >
        <img
                src={gray2}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px",borderBottomRightRadius:"100px"}}
                data-aos="fade-up"
              />
           <br />
            <div className="groupapp">
              <DiAndroid  className="icn" />
              <FaAppStoreIos  className="icn" />
              <SiHarmonyos  className="icn" />
              </div>
           
           
         
              
        </div>
        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center" >
          <h3 style={{fontSize:"2.1em"}}>SASTASMART APPLICATION</h3>
          <p className="home-about-body">Transform your favorite watch into a powerful health tracker. Our new mobile app and innovative buckle monitor key health data and provide real-time GPS tracking, letting you stay connected and informed with ease and effeciency</p>
          <div className="icon-box" data-aos="zoom-in">
            <div className="icon"><RiChatHistoryFill className="de" /></div>
            <h4 className="title"><a href>Fits into your traditional watch band</a></h4>
           
          </div>
          <div className="icon-box" data-aos="zoom-in" >
          <div className="icon"><MdOutlineSpatialTracking className="de" /></div>
            <h4 className="title"><a href>Tracks your health data</a></h4>
           
          </div>
          <div className="icon-box" data-aos="zoom-in" >
            <div className="icon"><MdGpsFixed  className="de" /></div>
            <h4 className="title"><a href>Tracks and transmits GPS location in real time to the app</a></h4>
           
          </div>
          
        </div>
      </div>
    </div>
  
  </Container>
  );
}

export default Phone;
