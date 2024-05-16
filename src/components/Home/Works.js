import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "../utils/CardWork";


import works from "../../Data/works.json";

function Works() {
  return (
    <Row className="works">
      
      <Col xs={12}>
        <h1 className='titles' style={{ fontSize: "2.1em",paddingBottom:"50px" }}>
          HOW IT WORKS
        </h1>
       
      </Col>

      {works.map((row, index) => (
      
          <Card data={row} />
       
      ))}
    </Row>
  );
}

export default Works;
