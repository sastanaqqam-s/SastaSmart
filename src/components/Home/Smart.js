import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/banner.webp";

import Home2 from "./Home2";

import { BsApple } from "react-icons/bs";
import Type from "../utils/Type";

import { DiAndroid } from "react-icons/di";

import { SiHarmonyos } from "react-icons/si";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      
        <Container className="home-content">
          <Row>
       
            <Col md={7} className="home-header">
         
            <h1 className="heading" style={{position:"relative"}}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="myshape">
  <path fill="#122620" d="M43.5,-44.6C58.4,-39.4,73.8,-27.6,75.4,-14C77,-0.4,64.7,14.9,53.7,28.1C42.7,41.4,32.9,52.5,21.4,54.9C10,57.4,-3.2,51.2,-18.4,47.1C-33.6,43.1,-50.8,41.2,-58.4,31.8C-66.1,22.5,-64.1,5.8,-63.1,-13.1C-62.2,-32,-62.2,-53.1,-51.9,-59.1C-41.5,-65.1,-20.8,-56,-3.2,-52.2C14.3,-48.3,28.6,-49.8,43.5,-44.6Z" transform="translate(100 100)" />
</svg>
             SASTASMART
             <svg id="Layer_2" data-name="Layer 2" viewBox="0 0 154.2 74.3" xmlns="http://www.w3.org/2000/svg" className="metreg">
      <defs>
        <style>
          {`.cls-1 {
            fill: #d6ad60;
            stroke-width: 0px;
          }`}
        </style>
      </defs>
      <g id="Layer_1-2" data-name="Layer 1">
        <path className="cls-1" d="M152.74,9.91h-19.7s-6.42-9.32-6.42-9.32c-.31-.44-.84-.67-1.37-.58-.53.09-.96.48-1.11,1l-2.43,8.89-.76,2.78-4.09,14.95-4.71-14.95-.88-2.78-1.26-3.99c-.19-.61-.76-1-1.4-.97-.63.03-1.16.5-1.28,1.12l-.75,3.84-.54,2.78-9.85,50.09-4-50.09-.09-1.1c-.08-.95-.87-1.68-1.82-1.68H0v2.78h88.26c.63,0,1.16.49,1.21,1.12l4.74,59.22c.06.69.61,1.23,1.3,1.28h.08c.66,0,1.23-.47,1.36-1.12l11.9-60.5h.38l6.39,20.28c.19.59.69.97,1.35.97.61-.01,1.15-.43,1.31-1.02l5.54-20.23.76-2.78,1.45-5.29,3.65,5.29,1.5,2.18c.26.37.68.6,1.13.6h20.5c.84,0,1.51-.75,1.37-1.62-.11-.68-.75-1.16-1.44-1.16Z"/>
      </g>
    </svg>
              </h1>
              <p className="banner-text" style={{ textAlign: "justify", fontSize: 19,paddingTop:10,fontWeight:"500" }}>
              DIVE IN THE FUTURE  KEEP YOUR 
              <span className="wave" role="img" aria-labelledby="wave" style={{paddingLeft:"5px"}}> <Type />  </span>
              <span className="res"> CLASS </span>
              </p>
              <p className="banner-text" style={{ textAlign: "justify", fontSize: 19,paddingTop:10 }}>
              
              let's bridges the gap between tradition and technology, offering a seamless integration of smart features into 
your cherished timepieces.where luxury meets functionality
              </p>
              
              <div className="buttons">
             
              <Row>
              <Col md={4}>
          
        <button className="explore" >
        
                      ANDROID
                      <DiAndroid style={{ color: "white",fontSize:28,marginLeft: "5px" }}  />
        </button>
        </Col>
        <Col md={4}> <button className="explore" >
        
                      APPLE
                      <BsApple style={{ color: "white",fontSize:28,marginLeft: "5px" }}  />
        </button></Col>
        <Col md={4}><button className="explore" >
        
        HARMONYOS
        
        <SiHarmonyos style={{ color: "white",fontSize:28,marginLeft: "5px" }}  />
</button></Col>
</Row>
      
    </div>

             
            </Col>

            <Col md={5}  className="imagebanner">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "500px",borderBottomRightRadius:"100px" }}
              />
            </Col>
          
          </Row>
         
        
        </Container>
      </Container>
      
      <Home2 />

      

    </section>
  );
}

export default Home;
