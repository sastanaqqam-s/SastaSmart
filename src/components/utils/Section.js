import React, { useRef, useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";


const Section = ({ order, paragraph, image, title }) => {


  return (
    <Row className="section-images" >
      <Col md={8} className={order === 0 ? "order-md-1" : "order-md-2"}>
        <h1 className='titles' style={{ fontSize: "2.3em",position:"relative" }}>
          {title}

     
        </h1>
        <p className="home-about-body">
          {paragraph}
        </p>
      </Col>
      <Col md={4} className={order === 0 ? "order-md-2" : "order-md-1"}>
        <Tilt>
          <img data-aos="zoom-in"
    
            src={image}
            className="img-fluid"
            alt="avatar"
            style={{maxHeight:"400px"}}
            
          />
        </Tilt>
      </Col>
    </Row>
  );
};

export default Section;
