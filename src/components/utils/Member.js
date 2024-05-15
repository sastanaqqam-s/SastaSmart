


import React from 'react';

import Mem from "./Cardteam";
import lists from "../../Data/Features.json";
import { Row, Col } from "react-bootstrap";

const Feature = ({data}) => {
  return (
    <Row className="features" >
      
      <Col xs={12}>
        <h1 className='titles' style={{ fontSize: "2.6em" }}>
          TEAM
        </h1>
        <p className="feature-paragraph">
         my eam
        </p>
      </Col>

      {lists.map((row, index) => (
        <Col key={index} xs={12} md={3}  data-aos="zoom-in">
          <Mem data={row} />
        </Col>
      ))}
    </Row>
   
  );
};

export default Feature;



