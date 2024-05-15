


import React from 'react';

import Mem from "./Cardteam";

import { Row, Col } from "react-bootstrap";

const lists=[
{
  "name":"Samy B",
  "image":"samy-team.jpg",
  "title":"Digital marketing manager"
},
{
  "name":"Mohamed azzi",
  "image":"azzi-team.jpg",
  "title":"Head manager"
},
{
  "name":"Moundhir Bachene",
  "image":"moundhir-team.jpg",
  "title":"Software engineer"
},
{
  "name":"Tebbani nassim",
  "image":"nassim-team.jpg",
  "title":"Graphic Designer"
}

]

const Feature = ({data}) => {
  return (
    <Row className="features" >
      
      <Col xs={12}>
        <h1 className='titles' style={{ fontSize: "2.6em" }}>
          TEAM
        </h1>
        <p className="feature-paragraph">
      
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



