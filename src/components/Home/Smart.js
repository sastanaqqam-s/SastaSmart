import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/fe.jpg";
import Particle from "../utils/Particle";
import Home2 from "./Home2";

import { BsApple } from "react-icons/bs";

import HomeImage3D from "./HomeImage3D";
import { DiAndroid } from "react-icons/di";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
            <h1 className="heading">
             SASTASMART
               
              </h1>
              <p className="banner-text" style={{ textAlign: "justify", fontSize: 19,paddingTop:10 }}>
              blending innovative sensor technology with traditional luxury watchmaking to redefine elegance and functionality
              </p>
              <div style={{ textAlign: "left",paddingTop:30 }}>
        <button className="explore" >
        
                      ANDROID
                      <DiAndroid style={{ color: "white",fontSize:28,marginLeft: "5px" }}  />
        </button>

        <button className="explore apple" >
        
                      APPLE
                      <BsApple style={{ color: "white",fontSize:28,marginLeft: "5px" }}  />
        </button>
       
      
    </div>

             
            </Col>

            <Col md={5} style={{ paddingBottom: 20}} className="mobile-min-height">
          
               
                  
            </Col>
          
          </Row>
         
         
        </Container>
      </Container>
      
      <Home2 />
     
    </section>
  );
}

export default Home;
