import React, { useRef, useEffect, useState } from 'react';
import { Row, Col } from "react-bootstrap";



const Section = ({ order, paragraph, image, title , bold}) => {

  const parts = paragraph.split("{{bold}}");
  return (
    <Row className="section-images" >
      <Col md={8} className={order === 0 ? "order-md-1" : "order-md-2"}>
        <h1 className='titles' style={{ fontSize: "2.1em",position:"relative" }}>
          {title}

     
        </h1>
        <p className="home-about-body">
        {parts[0]}<strong>{bold}</strong>{parts[1]}
        </p>
      </Col>
      <Col md={4} className={order === 0 ? "order-md-2" : "order-md-1"}>
      
          <img 
    
            src={image}
            className="img-fluid"
            alt="avatar"
            style={{maxHeight:"420px"}}
            data-aos="fade-up"
          />
        
      </Col>
    </Row>
  );
};

export default Section;
