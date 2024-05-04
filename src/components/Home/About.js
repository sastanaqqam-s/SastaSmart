import React, { useRef, useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import image from "../../Assets/watch.gif";
const About = () => {
 


  return (
    <Row className="aboutus" style={{position:"relative"}}>
       
      <Col md={12} >
      
        <h1 className='titles' style={{ fontSize: "2.0em" }} data-aos="zoom-in">
          Presentation
        </h1>
        <p className="home-about-body">
        We offer THE SOLUTION that will transform how you perceive a watch. Our company specializes in designing, developing, and deploying Internet of Things (IoT) technologies specifically for watches. We create systems and software that empower your
         classic watches to become connected, and capable of collecting, analyzing, and transmitting data through an application.	
        </p>
      </Col>
      <Col md={4} style={{textAlign:"center",display:"none"}}>
        <Tilt>
          <img data-aos="fade-right"
            src={image}
            className="img-fluid"
            alt="avatar"
            style={{ height: "300px" }}
           
          />
        </Tilt>
      </Col>
     
     
    </Row>
  );
};

export default About;
