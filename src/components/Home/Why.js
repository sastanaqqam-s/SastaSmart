import React from "react";
import { Col, Row } from "react-bootstrap";
import Cr from "../utils/Card2";
import lists from "../../Data/Why.json";

function Why() {
  return (
    <Row  className="why">
      

      {lists.map((row, index) => (
        <Col key={index} xs={12} md={4}  data-aos="zoom-in">
          <Cr data={row} />
        </Col>
      ))}
    </Row>
  );
}

export default Why;
