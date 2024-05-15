import React from "react";
import { Col, Row } from "react-bootstrap";
import Ft from "../utils/Feature";
import lists from "../../Data/Features.json";

function Techstack({ title, paragraph }) {
  return (
    
    <Row  className="features" >
      
      <Col xs={12}>
        <h1 className='titles' style={{ fontSize: "2.6em" }}>
          {title}
        </h1>
        <p className="feature-paragraph">
          {paragraph}
        </p>
      </Col>

      {lists.map((row, index) => (
        <Col key={index} xs={12} md={3} className="tech-icons" data-aos="zoom-in">
          <Ft data={row} />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
