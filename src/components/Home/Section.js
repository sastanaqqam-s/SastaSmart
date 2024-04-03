import React from 'react';
import { Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

const Section = ({ order, paragraph, image,title }) => {
  return (
    <Row className="section-images">
      <Col md={7} className={order === 0 ? "order-md-1" : "order-md-2"}>
        <h1 style={{ fontSize: "2.6em" }}>
          {title}
        </h1>
        <p className="home-about-body">
          {paragraph}
        </p>
      </Col>
      <Col md={5} className={order === 0 ? "order-md-2" : "order-md-1"}>
        <Tilt>
          <img src={image} className="img-fluid" alt="avatar" />
        </Tilt>
      </Col>
    </Row>
  );
};

export default Section;
