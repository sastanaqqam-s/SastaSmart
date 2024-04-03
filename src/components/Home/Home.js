import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/fe.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Cards from "./Acc";
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
             SASTANAQQAM
               
              </h1>
              <p className="banner-text" style={{ textAlign: "justify",fontSize: 19,paddingTop:10 }}>
              Sastanaqqam offers blockchain-powered services that elevate the experience of digitization.
               Our platforms include a Digital art gallery, a Rental service for art display, 
              and a crypto Wallet.
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
          
                  <HomeImage3D />
 
            </Col>
          </Row>
        </Container>
      </Container>
      <Cards />
      <Home2 />
    </section>
  );
}

export default Home;
