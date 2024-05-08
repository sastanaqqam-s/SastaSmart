import React, { useRef, useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import image from "../../Assets/watch.gif";
const About = () => {
 


  return (
    <Row className="aboutus" style={{position:"relative"}}>
       
      <Col md={12} >
      
        <h1 className='titles' style={{ fontSize: "2.0em" }} data-aos="zoom-in">
        Our Challenge
        </h1>
        <p className="home-about-body">
        As we stand in 2024, the choice remains challenging for many:do we abandon our treasured vintage watches, pieces that are more than timekeepers, but stories on our wrists, in favor of the modern functionality of a connected smartwatch? 
        Must we forget the elegance that complements our taste for the convenience of being plugged into the digital world?
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
